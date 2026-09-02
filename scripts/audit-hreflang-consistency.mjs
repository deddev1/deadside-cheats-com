#!/usr/bin/env node
/**
 * Validates hreflang reciprocity and html lang alignment with self-referencing hreflang.
 * Run after build: node scripts/audit-hreflang-consistency.mjs
 */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const DIST = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'dist');

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

function parseHreflang(filePath, pagePath) {
	const html = readFileSync(filePath, 'utf8');
	const htmlLang = html.match(/<html[^>]+lang="([^"]+)"/i)?.[1];
	const links = [...html.matchAll(/rel="alternate"[^>]+hreflang="([^"]+)"[^>]+href="([^"]+)"/gi)].map(
		(m) => ({
			hreflang: m[1],
			href: new URL(m[2]).pathname,
		}),
	);
	const self = links.find((l) => l.href === pagePath);
	return { htmlLang, links, selfHreflang: self?.hreflang };
}

const issues = [];
const pages = collectHtmlDirs(DIST);

for (const pagePath of pages) {
	const file = path.join(DIST, pagePath === '/' ? '' : pagePath.slice(1), 'index.html');
	let parsed;
	try {
		parsed = parseHreflang(file, pagePath);
	} catch {
		continue;
	}
	if (!parsed.links.length) continue;

	if (
		parsed.selfHreflang &&
		parsed.selfHreflang !== 'x-default' &&
		parsed.htmlLang &&
		parsed.selfHreflang !== parsed.htmlLang
	) {
		issues.push({
			kind: 'html-lang-vs-self-hreflang',
			page: pagePath,
			htmlLang: parsed.htmlLang,
			selfHreflang: parsed.selfHreflang,
		});
	}

	const fromSelf = parsed.selfHreflang;
	for (const link of parsed.links) {
		if (link.hreflang === 'x-default' || link.href === pagePath) continue;
		const targetFile = path.join(DIST, link.href === '/' ? '' : link.href.slice(1), 'index.html');
		let target;
		try {
			target = parseHreflang(targetFile, link.href);
		} catch {
			issues.push({ kind: 'missing-return', from: pagePath, target: link.href, hreflang: link.hreflang });
			continue;
		}
		if (!target.links.length) continue;
		const back = target.links.find((l) => l.href === pagePath);
		if (!back) {
			issues.push({ kind: 'missing-return', from: pagePath, target: link.href, hreflang: link.hreflang });
		} else if (fromSelf && back.hreflang !== fromSelf) {
			issues.push({
				kind: 'inconsistent-return',
				from: pagePath,
				target: link.href,
				fromSelf,
				returnTag: back.hreflang,
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
	`[audit-hreflang-consistency] OK — ${pages.length} pages checked; html lang matches self hreflang and return links are reciprocal`,
);
