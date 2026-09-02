#!/usr/bin/env node
/**
 * Validates meta-refresh redirect stubs:
 * - Every dist meta-refresh page has a matching Worker 301 in path/cannibal redirects.
 * - No indexable page links internally to a meta-refresh URL.
 * Run after build: node scripts/audit-meta-refresh.mjs
 */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIST = path.join(ROOT, 'dist');

const PATH_REDIRECTS = JSON.parse(
	readFileSync(path.join(ROOT, 'functions/path-redirects.json'), 'utf8'),
);
const CANNIBAL_REDIRECTS = JSON.parse(
	readFileSync(path.join(ROOT, 'functions/cannibal-redirects.json'), 'utf8'),
);
const ALL_REDIRECTS = { ...PATH_REDIRECTS, ...CANNIBAL_REDIRECTS };

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

function normalizePath(pathname) {
	if (!pathname || pathname === '/') return '/';
	return pathname.endsWith('/') ? pathname : `${pathname}/`;
}

function hasWorkerRedirect(pagePath) {
	const normalized = normalizePath(pagePath);
	const noSlash = normalized.replace(/\/$/, '');
	return Boolean(ALL_REDIRECTS[normalized] ?? ALL_REDIRECTS[noSlash]);
}

function isMetaRefresh(html) {
	return /<meta[^>]+http-equiv="refresh"/i.test(html);
}

function isNoindex(html) {
	return /name="robots"[^>]+content="[^"]*noindex/i.test(html);
}

function classifyMetaRefresh(pagePath) {
	const normalized = normalizePath(pagePath);
	if (/\/blog\//.test(normalized) && !normalized.startsWith('/blog/')) {
		return normalized.endsWith('/blog/') ? 'locale-blog-index' : 'locale-blog-post';
	}
	return 'cannibal-redirect';
}

const pages = collectHtmlDirs(DIST);
const metaRefreshPages = [];
const missingWorkerRedirect = [];
const badInternalLinks = [];

for (const pagePath of pages) {
	const html = readFileSync(path.join(DIST, pagePath.slice(1) || '.', 'index.html'), 'utf8');
	if (!isMetaRefresh(html)) continue;

	metaRefreshPages.push(pagePath);
	if (!hasWorkerRedirect(pagePath)) {
		missingWorkerRedirect.push({ page: normalizePath(pagePath), kind: classifyMetaRefresh(pagePath) });
	}
}

const metaRefreshSet = new Set(metaRefreshPages.map((p) => normalizePath(p)));

for (const pagePath of pages) {
	const html = readFileSync(path.join(DIST, pagePath.slice(1) || '.', 'index.html'), 'utf8');
	if (isNoindex(html)) continue;

	for (const match of html.matchAll(/href="(\/[^"#?]+)"/g)) {
		const href = normalizePath(match[1]);
		if (metaRefreshSet.has(href)) {
			badInternalLinks.push({ from: normalizePath(pagePath), href });
		}
	}
}

if (missingWorkerRedirect.length > 0) {
	console.error(
		`[audit-meta-refresh] ${missingWorkerRedirect.length} meta-refresh page(s) lack Worker 301 redirects:`,
	);
	for (const row of missingWorkerRedirect.slice(0, 20)) {
		console.error(`  ${row.page} (${row.kind})`);
	}
	process.exit(1);
}

if (badInternalLinks.length > 0) {
	console.error(
		`[audit-meta-refresh] ${badInternalLinks.length} indexable page(s) link to meta-refresh URLs:`,
	);
	for (const row of badInternalLinks.slice(0, 20)) {
		console.error(`  ${row.from} → ${row.href}`);
	}
	process.exit(1);
}

const byKind = metaRefreshPages.reduce((acc, pagePath) => {
	const kind = classifyMetaRefresh(pagePath);
	acc[kind] = (acc[kind] ?? 0) + 1;
	return acc;
}, {});

console.log(
	`[audit-meta-refresh] OK — ${metaRefreshPages.length} static meta-refresh fallbacks; all have Worker 301s (${Object.entries(byKind)
		.map(([k, v]) => `${k}: ${v}`)
		.join(', ')}); 0 internal links from indexable pages`,
);
