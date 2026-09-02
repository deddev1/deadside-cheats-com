#!/usr/bin/env node
/**
 * Validates cross-canonical pages are intentional redirect stubs only, and that
 * internal links point at canonical URLs (not locale blog or cannibal stubs).
 * Run after build: node scripts/audit-canonicalised-urls.mjs
 */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIST = path.join(ROOT, 'dist');
const SITE = 'https://deadsidecheats.com';

const CANNIBAL_PATHS = new Set([
	'/deadside-aimbot-hack/',
	'/deadside-esp-hack/',
	'/deadside-mod-menu/',
	'/deadside-unlock-all/',
	'/deadside-soft-aim/',
	'/deadside-wallhack/',
	'/deadside-cheat-download/',
]);

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

function classifyCrossCanonical(pagePath, canonicalPath) {
	if (/\/blog\/[^/]+\/$/.test(pagePath) && !pagePath.startsWith('/blog/')) {
		return 'locale-blog-post';
	}
	if (pagePath.endsWith('/blog/') && pagePath !== '/blog/') {
		return 'locale-blog-index';
	}
	if (CANNIBAL_PATHS.has(pagePath)) {
		return 'cannibal-redirect';
	}
	return 'unexpected';
}

function isRedirectStub(html) {
	return (
		/<meta[^>]+name="robots"[^>]+content="[^"]*noindex/i.test(html) &&
		/<meta[^>]+http-equiv="refresh"/i.test(html)
	);
}

const pages = collectHtmlDirs(DIST);
const crossCanonical = [];
const unexpectedCross = [];
let selfCanonical = 0;

for (const pagePath of pages) {
	const html = readFileSync(path.join(DIST, pagePath.slice(1) || '.', 'index.html'), 'utf8');
	const canonicalMatch = html.match(/<link[^>]+rel="canonical"[^>]+href="([^"]+)"/i);
	if (!canonicalMatch) continue;

	const canonicalPath = normalizePath(new URL(canonicalMatch[1], SITE).pathname);
	const normalizedPage = normalizePath(pagePath);

	if (canonicalPath.replace(/\/$/, '') === normalizedPage.replace(/\/$/, '')) {
		selfCanonical++;
		continue;
	}

	const kind = classifyCrossCanonical(normalizedPage, canonicalPath);
	const entry = { page: normalizedPage, canonical: canonicalPath, kind };
	crossCanonical.push(entry);

	if (kind === 'unexpected' || !isRedirectStub(html)) {
		unexpectedCross.push(entry);
	}
}

const badInternalLinks = [];
const localeBlogPattern = /^\/[a-z]{2}\/blog\//;

for (const pagePath of pages) {
	const html = readFileSync(path.join(DIST, pagePath.slice(1) || '.', 'index.html'), 'utf8');
	for (const match of html.matchAll(/href="(\/[^"#?]+)"/g)) {
		const href = normalizePath(match[1]);
		if (localeBlogPattern.test(href)) {
			badInternalLinks.push({ from: normalizePath(pagePath), href, reason: 'locale-blog' });
		} else if (CANNIBAL_PATHS.has(href)) {
			badInternalLinks.push({ from: normalizePath(pagePath), href, reason: 'cannibal-stub' });
		}
	}
}

const byKind = crossCanonical.reduce((acc, row) => {
	acc[row.kind] = (acc[row.kind] ?? 0) + 1;
	return acc;
}, {});

if (unexpectedCross.length > 0) {
	console.error('[audit-canonicalised-urls] Unexpected cross-canonical pages:');
	for (const row of unexpectedCross.slice(0, 20)) {
		console.error(`  ${row.page} → ${row.canonical} (${row.kind})`);
	}
	process.exit(1);
}

if (badInternalLinks.length > 0) {
	console.error(
		`[audit-canonicalised-urls] ${badInternalLinks.length} internal links point at non-canonical redirect stubs`,
	);
	for (const row of badInternalLinks.slice(0, 20)) {
		console.error(`  ${row.from} links to ${row.href} (${row.reason})`);
	}
	process.exit(1);
}

console.log(
	`[audit-canonicalised-urls] OK — ${selfCanonical} self-canonical pages; ${crossCanonical.length} intentional redirect stubs (${Object.entries(byKind).map(([k, v]) => `${k}: ${v}`).join(', ')})`,
);
