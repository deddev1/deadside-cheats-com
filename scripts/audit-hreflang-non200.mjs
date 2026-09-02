#!/usr/bin/env node
/**
 * Ensures every hreflang annotation points at a 200 OK, indexable static page.
 * Flags worker 301 targets, noindex pages, and meta-refresh redirect stubs.
 * Run after build: node scripts/audit-hreflang-non200.mjs
 */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIST = path.join(ROOT, 'dist');
const SITE = 'https://deadsidecheats.com';

const REDIRECT_MAP = new Map();
for (const file of ['functions/path-redirects.json', 'functions/cannibal-redirects.json']) {
	const json = JSON.parse(readFileSync(path.join(ROOT, file), 'utf8'));
	for (const [from, to] of Object.entries(json)) {
		REDIRECT_MAP.set(from, to);
	}
}

function isTrailingSlashOnlyRedirect(from, to) {
	const a = from.replace(/\/$/, '') || '/';
	const b = to.replace(/\/$/, '') || '/';
	return a === b;
}

function resolveRedirect(pathname) {
	return REDIRECT_MAP.get(pathname) ?? REDIRECT_MAP.get(pathname.replace(/\/$/, '')) ?? null;
}

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

function parseLinkHreflang(html) {
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
	return out;
}

function parseAnchorHreflang(html) {
	const out = [];
	for (const match of html.matchAll(/<a\b[^>]*>/gi)) {
		const tag = match[0];
		if (!/hreflang=/i.test(tag)) continue;
		const hreflang = tag.match(/hreflang="([^"]+)"/i)?.[1];
		const href = tag.match(/href="([^"]+)"/i)?.[1];
		if (!hreflang || !href || href.startsWith('#') || href.startsWith('mailto:')) continue;
		out.push({
			via: 'a',
			hreflang,
			href: href.startsWith('http') ? new URL(href).pathname : href,
		});
	}
	return out;
}

function parseSitemapHreflang(filePath) {
	const xml = readFileSync(filePath, 'utf8');
	const out = [];
	for (const block of xml.split('<url>').slice(1)) {
		const loc = block.match(/<loc>([^<]+)<\/loc>/i)?.[1];
		if (!loc) continue;
		const from = new URL(loc).pathname;
		for (const match of block.matchAll(/hreflang="([^"]+)"[^>]+href="([^"]+)"/g)) {
			out.push({
				from,
				via: 'sitemap',
				hreflang: match[1],
				href: new URL(match[2]).pathname,
			});
		}
	}
	return out;
}

function evaluateTarget(href) {
	const reasons = [];
	const redirect = resolveRedirect(href);
	if (redirect && !isTrailingSlashOnlyRedirect(href, redirect)) {
		reasons.push(`worker-301→${redirect}`);
	}

	const htmlFile = path.join(DIST, href === '/' ? '' : href.slice(1), 'index.html');
	let html;
	try {
		html = readFileSync(htmlFile, 'utf8');
	} catch {
		reasons.push('missing-html');
		return reasons;
	}

	if (/content="noindex/i.test(html)) reasons.push('noindex');
	if (/<meta http-equiv="refresh"/i.test(html)) reasons.push('meta-refresh');
	return reasons;
}

const htmlDirs = new Set(collectHtmlDirs(DIST));
const annotations = [];

for (const pagePath of htmlDirs) {
	const htmlFile = path.join(DIST, pagePath === '/' ? '' : pagePath.slice(1), 'index.html');
	const html = readFileSync(htmlFile, 'utf8');
	for (const ann of [...parseLinkHreflang(html), ...parseAnchorHreflang(html)]) {
		annotations.push({ source: pagePath, ...ann });
	}
}

for (const file of readdirSync(DIST).filter((name) => name.startsWith('sitemap-') && name.endsWith('.xml'))) {
	for (const ann of parseSitemapHreflang(path.join(DIST, file))) {
		annotations.push({ source: `sitemap:${ann.from}`, via: ann.via, hreflang: ann.hreflang, href: ann.href });
	}
}

const issues = [];
for (const ann of annotations) {
	if (ann.hreflang === 'x-default') continue;
	const reasons = evaluateTarget(ann.href);
	if (reasons.length > 0) {
		issues.push({ ...ann, reasons });
	}
}

const anchorIssues = issues.filter((issue) => issue.via === 'a');
const linkIssues = issues.filter((issue) => issue.via === 'link' || issue.via === 'sitemap');

if (anchorIssues.length > 0) {
	console.error(
		`[audit-hreflang-non200] ${anchorIssues.length} <a hreflang> annotation(s) point at non-200/noindex targets — remove hreflang from navigation links`,
	);
	for (const issue of anchorIssues.slice(0, 15)) {
		console.error(`  ${issue.source} → ${issue.href} (${issue.reasons.join(', ')})`);
	}
	if (anchorIssues.length > 15) {
		console.error(`  … and ${anchorIssues.length - 15} more`);
	}
}

if (linkIssues.length > 0) {
	console.error(`[audit-hreflang-non200] ${linkIssues.length} canonical hreflang issue(s):`);
	for (const issue of linkIssues.slice(0, 20)) {
		console.error(
			`  ${issue.source} hreflang=${issue.hreflang} → ${issue.href} (${issue.reasons.join(', ')})`,
		);
	}
	if (linkIssues.length > 20) {
		console.error(`  … and ${linkIssues.length - 20} more`);
	}
	process.exit(1);
}

if (anchorIssues.length > 0) {
	process.exit(1);
}

const linkCount = annotations.filter((ann) => ann.via === 'link' || ann.via === 'sitemap').length;
console.log(
	`[audit-hreflang-non200] OK — ${linkCount} canonical hreflang annotations; all targets are indexable 200 pages`,
);
