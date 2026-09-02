#!/usr/bin/env node
/**
 * Fails when indexable HTML pages share the same <title>.
 * Run after build: node scripts/audit-duplicate-titles.mjs
 */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIST = path.join(ROOT, 'dist');

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

function decodeHtml(text) {
	return text
		.replace(/&amp;/g, '&')
		.replace(/&lt;/g, '<')
		.replace(/&gt;/g, '>')
		.replace(/&quot;/g, '"')
		.replace(/&#39;/g, "'");
}

function isNoindex(html) {
	return /name="robots"[^>]+content="[^"]*noindex/i.test(html);
}

const pages = collectHtmlDirs(DIST);
const indexableByTitle = new Map();
const allByTitle = new Map();

for (const pagePath of pages) {
	const html = readFileSync(path.join(DIST, pagePath.slice(1) || '.', 'index.html'), 'utf8');
	const title = decodeHtml(html.match(/<title>([^<]*)<\/title>/i)?.[1]?.trim() ?? '');
	if (!title) continue;

	if (!allByTitle.has(title)) allByTitle.set(title, []);
	allByTitle.get(title).push(pagePath);

	if (isNoindex(html)) continue;
	if (!indexableByTitle.has(title)) indexableByTitle.set(title, []);
	indexableByTitle.get(title).push(pagePath);
}

const indexableDups = [...indexableByTitle.entries()].filter(([, paths]) => paths.length > 1);
const allDups = [...allByTitle.entries()].filter(([, paths]) => paths.length > 1);

if (indexableDups.length > 0) {
	console.error(`[audit-duplicate-titles] ${indexableDups.length} duplicate title group(s) on indexable pages:`);
	for (const [title, paths] of indexableDups.slice(0, 15)) {
		console.error(`  "${title}"`);
		for (const p of paths.slice(0, 6)) console.error(`    ${p}`);
		if (paths.length > 6) console.error(`    ... +${paths.length - 6} more`);
	}
	process.exit(1);
}

console.log(
	`[audit-duplicate-titles] OK — ${indexableByTitle.size} unique indexable titles; ${allDups.length} duplicate group(s) on noindex/redirect pages only`,
);
