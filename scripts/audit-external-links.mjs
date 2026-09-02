#!/usr/bin/env node
/**
 * Validates outbound links in built HTML resolve to HTTP 2xx/3xx.
 * Run after build: node scripts/audit-external-links.mjs
 */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIST = path.join(ROOT, 'dist');

function readBrandUrl() {
	const src = readFileSync(path.join(ROOT, 'src/data/brand.ts'), 'utf8');
	const m = src.match(/(?:^|\n)\turl:\s*'((?:\\'|[^'])*)'/);
	if (!m) throw new Error('brand.ts missing url');
	return m[1].replace(/\\'/g, "'").replace(/\/$/, '');
}

const SITE_HOST = new URL(readBrandUrl()).hostname;

/** Domains that return 403 to automated clients but work in browsers. */
const BOT_BLOCK_ALLOWLIST = new Set(['deadside.fandom.com']);

const UA =
	'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

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

function collectExternalUrls() {
	const urls = new Set();
	for (const pagePath of collectHtmlDirs(DIST)) {
		const html = readFileSync(path.join(DIST, pagePath.slice(1) || '.', 'index.html'), 'utf8');
		for (const match of html.matchAll(/(?:href|src)="(https?:\/\/[^"#]+)"/g)) {
			const url = match[1];
			try {
				const host = new URL(url).hostname;
				if (host === SITE_HOST || host.endsWith('.zadeyo.com')) continue;
				urls.add(url);
			} catch {
				// skip malformed
			}
		}
	}
	return [...urls];
}

function isShareIntent(url) {
	try {
		const { hostname, pathname } = new URL(url);
		if (hostname.includes('facebook.com') && pathname.includes('/sharer')) return true;
		if (hostname.includes('reddit.com') && pathname.includes('/submit')) return true;
		if (hostname === 'twitter.com' || hostname === 'www.twitter.com' || hostname === 'x.com') {
			return pathname.includes('/intent/');
		}
	} catch {
		return false;
	}
	return false;
}

async function probe(url) {
	if (isShareIntent(url)) {
		return { url, status: 200, ok: true, skipped: 'share-intent' };
	}
	const controller = new AbortController();
	const timer = setTimeout(() => controller.abort(), 20000);
	try {
		let res = await fetch(url, {
			method: 'HEAD',
			redirect: 'follow',
			signal: controller.signal,
			headers: { 'User-Agent': UA },
		});
		if ([403, 405, 501].includes(res.status)) {
			const host = new URL(url).hostname;
			if (BOT_BLOCK_ALLOWLIST.has(host)) {
				return { url, status: res.status, ok: true, allowlisted: true };
			}
			res = await fetch(url, {
				method: 'GET',
				redirect: 'follow',
				signal: controller.signal,
				headers: { 'User-Agent': UA },
			});
		}
		return { url, status: res.status, ok: res.ok };
	} catch (error) {
		return { url, status: 0, ok: false, error: error.message };
	} finally {
		clearTimeout(timer);
	}
}

const urls = collectExternalUrls();
const results = [];
for (let i = 0; i < urls.length; i += 8) {
	results.push(...(await Promise.all(urls.slice(i, i + 8).map(probe))));
}

const failures = results.filter((r) => !r.ok);
if (failures.length > 0) {
	console.error(`[audit-external-links] ${failures.length} broken external URL(s):`);
	for (const row of failures.sort((a, b) => a.status - b.status).slice(0, 30)) {
		console.error(`  ${row.status || 'ERR'}\t${row.url}${row.error ? ` (${row.error})` : ''}`);
	}
	process.exit(1);
}

const allowlisted = results.filter((r) => r.allowlisted).length;
console.log(
	`[audit-external-links] OK — ${results.length} external URLs checked${allowlisted ? ` (${allowlisted} bot-block allowlisted)` : ''}`,
);
