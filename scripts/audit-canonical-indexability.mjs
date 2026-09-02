#!/usr/bin/env node
/**
 * Flags HTML pages whose canonical URL is non-indexable (noindex, self on thin locale, etc.).
 * Run after build: node scripts/audit-canonical-indexability.mjs
 */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIST = path.join(ROOT, 'dist');

const INDEXABLE_LOCALES = new Set(['en', 'es', 'fr', 'de', 'pt', 'ru', 'zh']);

function collectHtmlFiles(dir, base = '') {
	const entries = readdirSync(dir);
	const files = [];
	for (const entry of entries) {
		const full = path.join(dir, entry);
		const rel = `${base}${entry}`;
		if (statSync(full).isDirectory()) {
			files.push(...collectHtmlFiles(full, `${rel}/`));
		} else if (entry === 'index.html') {
			files.push(base || '/');
		}
	}
	return files;
}

function pagePathToUrlPath(relDir) {
	if (!relDir || relDir === '/') return '/';
	return `/${relDir.replace(/\/$/, '')}/`;
}

function localeFromPath(urlPath) {
	const seg = urlPath.split('/').filter(Boolean)[0];
	return seg && INDEXABLE_LOCALES.has(seg) ? seg : seg && /^[a-z]{2}$/.test(seg) ? seg : 'en';
}

function isNoindex(html) {
	return /content="noindex/i.test(html) || /name="robots"[^>]+content="[^"]*noindex/i.test(html);
}

function extractCanonical(html) {
	return html.match(/<link[^>]+rel="canonical"[^>]+href="([^"]+)"/i)?.[1] ?? null;
}

function canonicalPathFromHref(href) {
	try {
		const u = new URL(href);
		return u.pathname.endsWith('/') ? u.pathname : `${u.pathname}/`;
	} catch {
		return null;
	}
}

const htmlDirs = collectHtmlFiles(DIST);
const issues = [];
const canonicalNoindex = new Map();

for (const rel of htmlDirs) {
	const file = path.join(DIST, rel, 'index.html');
	const html = readFileSync(file, 'utf8');
	const pagePath = pagePathToUrlPath(rel);
	const canonicalHref = extractCanonical(html);
	if (!canonicalHref) {
		issues.push({ page: pagePath, kind: 'missing-canonical' });
		continue;
	}

	const canonicalPath = canonicalPathFromHref(canonicalHref);
	if (!canonicalPath) continue;

	const pageNoindex = isNoindex(html);
	const canonicalLocale = localeFromPath(canonicalPath);
	const canonicalIsIndexableLocale = INDEXABLE_LOCALES.has(canonicalLocale);

	// Load canonical target HTML if built (same-origin paths only)
	let canonicalNoindex = false;
	const canonicalFile = path.join(DIST, canonicalPath === '/' ? '' : canonicalPath.slice(1), 'index.html');
	try {
		const canonicalHtml = readFileSync(canonicalFile, 'utf8');
		canonicalNoindex = isNoindex(canonicalHtml);
	} catch {
		// Redirect-only or off-site — treat as OK when page itself is noindex stub
		if (pageNoindex && canonicalPath !== pagePath) {
			canonicalNoindex = false;
		}
	}

	const canonicalPointsToNoindex = canonicalNoindex;
	const selfNoindexCanonical = pageNoindex && canonicalPath === pagePath;

	if (selfNoindexCanonical || canonicalPointsToNoindex) {
		issues.push({
			page: pagePath,
			canonical: canonicalPath,
			kind: selfNoindexCanonical ? 'self-noindex-canonical' : 'canonical-target-noindex',
		});
	}

	if (pageNoindex && !INDEXABLE_LOCALES.has(localeFromPath(pagePath)) && canonicalPath === pagePath) {
		issues.push({
			page: pagePath,
			canonical: canonicalPath,
			kind: 'thin-locale-self-canonical',
		});
	}
}

const unique = new Map();
for (const item of issues) {
	unique.set(`${item.page}|${item.canonical}|${item.kind}`, item);
}
const deduped = [...unique.values()];

if (deduped.length > 0) {
	console.error(`[audit-canonical-indexability] ${deduped.length} issue(s):`);
	for (const item of deduped.slice(0, 20)) {
		console.error(`  ${item.kind}: ${item.page} → ${item.canonical ?? '—'}`);
	}
	if (deduped.length > 20) {
		console.error(`  … and ${deduped.length - 20} more`);
	}
	process.exit(1);
}

console.log(
	`[audit-canonical-indexability] OK — ${htmlDirs.length} pages; no self-noindex or non-indexable canonical targets`,
);
