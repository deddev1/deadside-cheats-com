#!/usr/bin/env node
/**
 * Syncs locale blog 301s into functions/path-redirects.json.
 * English /blog/ is canonical; /{lang}/blog/ stubs are meta-refresh HTML fallbacks
 * but production Worker returns 301 before static assets are served.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PATH_REDIRECTS = path.join(ROOT, 'functions/path-redirects.json');
const LOCALES_TS = path.join(ROOT, 'src/data/i18n/locales.ts');
const POSTS_TS = path.join(ROOT, 'src/data/blog/posts.generated.ts');

function readLocaleCodes() {
	const src = readFileSync(LOCALES_TS, 'utf8');
	return [...src.matchAll(/code:\s*'(\w+)'/g)].map((m) => m[1]);
}

function readBlogSlugs() {
	const src = readFileSync(POSTS_TS, 'utf8');
	return [...new Set([...src.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]))];
}

function addPair(map, from, to) {
	if (!from || !to || from === to) return;
	map[from] = to;
	const noSlash = from.replace(/\/$/, '');
	if (noSlash !== from) map[noSlash] = to;
}

const existing = JSON.parse(readFileSync(PATH_REDIRECTS, 'utf8'));
const merged = { ...existing };
const locales = readLocaleCodes().filter((code) => code !== 'en');
const slugs = readBlogSlugs();

let added = 0;
for (const lang of locales) {
	const indexFrom = `/${lang}/blog/`;
	const indexTo = '/blog/';
	if (merged[indexFrom] !== indexTo) {
		addPair(merged, indexFrom, indexTo);
		added += 1;
	}
	for (const slug of slugs) {
		const postFrom = `/${lang}/blog/${slug}/`;
		const postTo = `/blog/${slug}/`;
		if (merged[postFrom] !== postTo) {
			addPair(merged, postFrom, postTo);
			added += 1;
		}
	}
}

writeFileSync(PATH_REDIRECTS, `${JSON.stringify(merged, null, 2)}\n`);
console.log(
	`Synced ${locales.length} locale blog indexes + ${slugs.length} posts (${added} new redirect pairs) → functions/path-redirects.json`,
);
