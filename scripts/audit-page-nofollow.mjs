#!/usr/bin/env node
/**
 * Ensures no page uses a page-level nofollow robots directive.
 * noindex pages should use "noindex, follow" so outlinks can pass PageRank.
 * Link-level rel="nofollow" on selective anchors is fine and not checked here.
 * Run after build: node scripts/audit-page-nofollow.mjs
 */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const DIST = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'dist');

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

const offenders = [];

for (const pagePath of collectHtmlDirs(DIST)) {
	const html = readFileSync(path.join(DIST, pagePath.slice(1) || '.', 'index.html'), 'utf8');
	const robots = html.match(/<meta[^>]+name="robots"[^>]+content="([^"]+)"/i)?.[1] ?? '';
	if (/\bnofollow\b/i.test(robots)) {
		offenders.push({ page: pagePath, robots });
	}
}

if (offenders.length > 0) {
	console.error(`[audit-page-nofollow] ${offenders.length} page(s) use page-level nofollow:`);
	for (const row of offenders.slice(0, 20)) {
		console.error(`  ${row.page} — robots="${row.robots}"`);
	}
	process.exit(1);
}

console.log('[audit-page-nofollow] OK — no page-level nofollow in robots meta');
