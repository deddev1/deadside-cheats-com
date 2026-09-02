#!/usr/bin/env node
/**
 * Fails when indexable HTML pages have titles much shorter than Google's ~50–60 char display range.
 * Run after build: node scripts/audit-short-titles.mjs
 */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIST = path.join(ROOT, 'dist');
const TITLE_MIN = 45;

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

const shortTitles = [];

for (const pagePath of collectHtmlDirs(DIST)) {
	const html = readFileSync(path.join(DIST, pagePath.slice(1) || '.', 'index.html'), 'utf8');
	if (isNoindex(html)) continue;

	const title = decodeHtml(html.match(/<title>([^<]*)<\/title>/i)?.[1]?.trim() ?? '');
	if (!title || title.length >= TITLE_MIN) continue;
	shortTitles.push({ path: pagePath, len: title.length, title });
}

shortTitles.sort((a, b) => a.len - b.len || a.path.localeCompare(b.path));

if (shortTitles.length > 0) {
	console.error(
		`[audit-short-titles] ${shortTitles.length} indexable page(s) under ${TITLE_MIN} chars:`,
	);
	for (const { path: pagePath, len, title } of shortTitles.slice(0, 25)) {
		console.error(`  ${len} chars  ${pagePath}`);
		console.error(`           "${title}"`);
	}
	if (shortTitles.length > 25) {
		console.error(`  ... +${shortTitles.length - 25} more`);
	}
	process.exit(1);
}

console.log(`[audit-short-titles] OK — all indexable titles are at least ${TITLE_MIN} chars`);
