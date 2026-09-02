#!/usr/bin/env node
/**
 * Flags indexable pages whose main content is below 200 words.
 * CJK characters are tokenized individually so Chinese pages are not under-counted.
 * Run after build: node scripts/audit-word-count.mjs
 */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIST = path.join(ROOT, 'dist');
const MIN_WORDS = 200;

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

function stripMain(html) {
	const main = html.match(/<main[\s\S]*?<\/main>/i)?.[0] ?? html;
	return main
		.replace(/<script[\s\S]*?<\/script>/gi, ' ')
		.replace(/<style[\s\S]*?<\/style>/gi, ' ')
		.replace(/<[^>]+>/g, ' ')
		.replace(/\s+/g, ' ')
		.trim();
}

/** Count words; treat each CJK character as its own token. */
export function countContentWords(text) {
	const normalized = text.replace(/[\u4e00-\u9fff\u3400-\u4dbf]/g, (char) => ` ${char} `);
	return normalized.split(/\s+/).filter(Boolean).length;
}

function isNoindex(html) {
	return /name="robots"[^>]+content="[^"]*noindex/i.test(html);
}

const pages = collectHtmlDirs(DIST);
const thin = [];

for (const pagePath of pages) {
	const html = readFileSync(path.join(DIST, pagePath.slice(1) || '.', 'index.html'), 'utf8');
	if (isNoindex(html)) continue;

	const words = countContentWords(stripMain(html));
	if (words < MIN_WORDS) {
		thin.push({ page: pagePath, words });
	}
}

if (thin.length > 0) {
	console.error(`[audit-word-count] ${thin.length} indexable page(s) below ${MIN_WORDS} words:`);
	for (const row of thin.sort((a, b) => a.words - b.words).slice(0, 25)) {
		console.error(`  ${row.words} words — ${row.page}`);
	}
	process.exit(1);
}

console.log(`[audit-word-count] OK — all indexable pages have at least ${MIN_WORDS} words in <main>`);
