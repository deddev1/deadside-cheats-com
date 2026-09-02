#!/usr/bin/env node
/**
 * Validates noindex usage: indexable routes must be indexable; noindex pages
 * must fall into known intentional categories.
 * Run after build: node scripts/audit-noindex-pages.mjs
 */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIST = path.join(ROOT, 'dist');

const INDEXABLE_LOCALES = new Set(['en', 'es', 'fr', 'de', 'pt', 'ru', 'zh']);

const CANNIBAL_PATHS = new Set([
	'/deadside-aimbot-hack/',
	'/deadside-esp-hack/',
	'/deadside-mod-menu/',
	'/deadside-unlock-all/',
	'/deadside-soft-aim/',
	'/deadside-wallhack/',
	'/deadside-cheat-download/',
]);

function readExternalGuideSlugs() {
	const src = readFileSync(
		path.join(ROOT, 'src/data/guides/external-guides.generated.ts'),
		'utf8',
	);
	return new Set([...src.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]));
}

const EXTERNAL_GUIDE_SLUGS = readExternalGuideSlugs();

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

function hasNoindex(html) {
	return /name="robots"[^>]+content="[^"]*noindex/i.test(html);
}

function isMetaRefreshStub(html) {
	return /<meta[^>]+http-equiv="refresh"/i.test(html);
}

function classifyNoindex(pagePath, html) {
	const normalized = normalizePath(pagePath);

	if (isMetaRefreshStub(html)) {
		if (CANNIBAL_PATHS.has(normalized)) return 'cannibal-redirect';
		if (/\/blog\//.test(normalized) && !normalized.startsWith('/blog/')) {
			return normalized.endsWith('/blog/') ? 'locale-blog-index' : 'locale-blog-post';
		}
		return 'redirect-stub';
	}

	const segments = normalized.split('/').filter(Boolean);
	const locale = segments[0];

	if (normalized.startsWith('/guides/')) {
		const slug = segments[1];
		if (slug && EXTERNAL_GUIDE_SLUGS.has(slug)) return 'external-guide';
		return 'native-guide';
	}

	if (locale && locale.length === 2 && !INDEXABLE_LOCALES.has(locale)) {
		return 'thin-locale';
	}

	if (normalized === '/brand-studio/') return 'brand-studio';

	return 'unexpected';
}

function isIndexableRoute(pagePath) {
	const normalized = normalizePath(pagePath);
	const segments = normalized.split('/').filter(Boolean);
	const locale = segments[0];

	if (normalized.startsWith('/guides/')) {
		const slug = segments[1];
		return slug ? !EXTERNAL_GUIDE_SLUGS.has(slug) : true;
	}

	if (locale && locale.length === 2) {
		return INDEXABLE_LOCALES.has(locale);
	}

	return true;
}

const pages = collectHtmlDirs(DIST);
const counts = {};
const accidentalNoindex = [];

const ALLOWED_NOINDEX_KINDS = new Set([
	'cannibal-redirect',
	'locale-blog-post',
	'locale-blog-index',
	'redirect-stub',
	'thin-locale',
	'external-guide',
	'brand-studio',
]);

for (const pagePath of pages) {
	const html = readFileSync(path.join(DIST, pagePath.slice(1) || '.', 'index.html'), 'utf8');
	const noindex = hasNoindex(html);

	if (!noindex) {
		if (isIndexableRoute(pagePath) && !isMetaRefreshStub(html)) {
			counts.indexable ??= 0;
			counts.indexable += 1;
		}
		continue;
	}

	const kind = classifyNoindex(pagePath, html);
	counts[kind] = (counts[kind] ?? 0) + 1;

	if (!ALLOWED_NOINDEX_KINDS.has(kind)) {
		accidentalNoindex.push({ page: normalizePath(pagePath), kind });
	}
}

if (accidentalNoindex.length > 0) {
	console.error('[audit-noindex-pages] Unexpected noindex pages:');
	for (const row of accidentalNoindex.slice(0, 20)) {
		console.error(`  ${row.page} (${row.kind})`);
	}
	process.exit(1);
}

const noindexTotal = Object.entries(counts)
	.filter(([key]) => key !== 'indexable')
	.reduce((sum, [, n]) => sum + n, 0);

console.log(
	`[audit-noindex-pages] OK — ${counts.indexable ?? 0} indexable pages; ${noindexTotal} intentional noindex (${Object.entries(counts)
		.filter(([k]) => k !== 'indexable')
		.map(([k, v]) => `${k}: ${v}`)
		.join(', ')})`,
);
