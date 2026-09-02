#!/usr/bin/env node
/**
 * Validates hreflang reciprocity for <link rel="alternate"> and <a hreflang> annotations.
 * Run after build: node scripts/audit-hreflang-consistency.mjs
 */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const DIST = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'dist');
const SITE = 'https://deadsidecheats.com';

function collectHtmlDirs(dir, base = '') {
	const out = [];
	for (const entry of readdirSync(dir)) {
		const full = path.join(dir, entry);
		if (statSync(full).isDirectory()) {
			out.push(...collectHtmlDirs(full, `${base}${entry}/`));
		} else if (entry === 'index.html') {
			out.push(base ? `/${base.replace(/\/$/, '')}/` : '/');
		}
	}
	return out;
}

function parseHreflangAnnotations(html) {
	const out = [];
	for (const match of html.matchAll(/<link[^>]+rel="alternate"[^>]*>/gi)) {
		const tag = match[0];
		const hreflang = tag.match(/hreflang="([^"]+)"/i)?.[1];
		const href = tag.match(/href="([^"]+)"/i)?.[1];
		if (hreflang && href) {
			out.push({
				via: 'link',
				hreflang,
				href: new URL(href, SITE).pathname,
			});
		}
	}
	for (const match of html.matchAll(/<a\b[^>]*>/gi)) {
		const tag = match[0];
		if (!/hreflang=/i.test(tag)) continue;
		const hreflang = tag.match(/hreflang="([^"]+)"/i)?.[1];
		const href = tag.match(/href="([^"]+)"/i)?.[1];
		if (!hreflang || !href || href.startsWith('mailto:') || href.startsWith('#')) continue;
		out.push({
			via: 'a',
			hreflang,
			href: href.startsWith('http') ? new URL(href).pathname : href,
		});
	}
	return out;
}

const cache = new Map();
function getAnnotations(pagePath) {
	if (!cache.has(pagePath)) {
		const file = path.join(DIST, pagePath === '/' ? '' : pagePath.slice(1), 'index.html');
		cache.set(pagePath, parseHreflangAnnotations(readFileSync(file, 'utf8')));
	}
	return cache.get(pagePath);
}

const issues = [];
const pages = collectHtmlDirs(DIST);

for (const pagePath of pages) {
	const htmlFile = path.join(DIST, pagePath === '/' ? '' : pagePath.slice(1), 'index.html');
	const html = readFileSync(htmlFile, 'utf8');
	const htmlLang = html.match(/<html[^>]+lang="([^"]+)"/i)?.[1];
	const annotations = getAnnotations(pagePath);
	if (!annotations.length) continue;

	const selfHreflang = annotations.find((a) => a.href === pagePath && a.hreflang !== 'x-default')?.hreflang;
	if (selfHreflang && htmlLang && selfHreflang !== htmlLang) {
		issues.push({
			kind: 'html-lang-vs-self-hreflang',
			page: pagePath,
			htmlLang,
			selfHreflang,
		});
	}

	for (const ann of annotations) {
		if (ann.hreflang === 'x-default' || ann.href === pagePath) continue;
		const targetAnnotations = getAnnotations(ann.href);
		if (!targetAnnotations.length) {
			issues.push({
				kind: 'missing-return',
				page: pagePath,
				target: ann.href,
				via: ann.via,
				hreflang: ann.hreflang,
			});
			continue;
		}
		const back = targetAnnotations.find((a) => a.href === pagePath);
		if (!back) {
			issues.push({
				kind: 'missing-return',
				page: pagePath,
				target: ann.href,
				via: ann.via,
				hreflang: ann.hreflang,
			});
		} else if (selfHreflang && back.hreflang !== selfHreflang) {
			issues.push({
				kind: 'inconsistent-return',
				page: pagePath,
				target: ann.href,
				selfHreflang,
				returnHreflang: back.hreflang,
				via: ann.via,
			});
		}
	}
}

const unique = [...new Map(issues.map((i) => [JSON.stringify(i), i])).values()];

if (unique.length > 0) {
	console.error(`[audit-hreflang-consistency] ${unique.length} issue(s):`);
	for (const item of unique.slice(0, 25)) {
		console.error(`  ${item.kind}: ${JSON.stringify(item)}`);
	}
	if (unique.length > 25) console.error(`  … and ${unique.length - 25} more`);
	process.exit(1);
}

console.log(
	`[audit-hreflang-consistency] OK — ${pages.length} pages checked; all hreflang annotations are reciprocal`,
);
