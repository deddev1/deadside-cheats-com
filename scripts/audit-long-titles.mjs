#!/usr/bin/env node
/**
 * Fails when indexable HTML titles exceed Google's SERP display limits.
 * Uses ~60 chars and ~568px width (Screaming Frog desktop approximation).
 * Run after build: node scripts/audit-long-titles.mjs
 */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
	TITLE_MAX,
	TITLE_MAX_PX,
	titlePixelWidth,
} from './lib/title-seo.mjs';

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

function hasBadEnding(title) {
	return /[&|—–-]$/.test(title.trim());
}

const longTitles = [];

for (const pagePath of collectHtmlDirs(DIST)) {
	const html = readFileSync(path.join(DIST, pagePath.slice(1) || '.', 'index.html'), 'utf8');
	if (isNoindex(html)) continue;

	const raw = html.match(/<title>([^<]*)<\/title>/i)?.[1]?.trim() ?? '';
	const title = decodeHtml(raw);
	if (!title) continue;

	const len = title.length;
	const px = titlePixelWidth(title);
	const issues = [];
	if (len > TITLE_MAX) issues.push(`${len} chars (max ${TITLE_MAX})`);
	if (px > TITLE_MAX_PX) issues.push(`${Math.round(px)}px (max ${TITLE_MAX_PX})`);
	if (hasBadEnding(title)) issues.push('truncated ending');

	if (issues.length > 0) {
		longTitles.push({ path: pagePath, len, px, title, issues });
	}
}

longTitles.sort((a, b) => b.px - a.px || b.len - a.len);

if (longTitles.length > 0) {
	console.error(`[audit-long-titles] ${longTitles.length} indexable page(s) over SERP limits:`);
	for (const { path: pagePath, len, px, title, issues } of longTitles.slice(0, 25)) {
		console.error(`  ${Math.round(px)}px / ${len}c  ${pagePath}`);
		console.error(`           ${issues.join('; ')}`);
		console.error(`           "${title}"`);
	}
	if (longTitles.length > 25) {
		console.error(`  ... +${longTitles.length - 25} more`);
	}
	process.exit(1);
}

console.log(
	`[audit-long-titles] OK — all indexable titles ≤ ${TITLE_MAX} chars and ≤ ${TITLE_MAX_PX}px`,
);
