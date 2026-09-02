#!/usr/bin/env node
/**
 * Ensures every built HTML page includes a <head> element.
 * Run after build: node scripts/audit-html-head.mjs
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

const missing = [];
for (const pagePath of collectHtmlDirs(DIST)) {
	const file = path.join(DIST, pagePath === '/' ? '' : pagePath.slice(1), 'index.html');
	const html = readFileSync(file, 'utf8');
	if (!/<head[\s>]/i.test(html)) {
		missing.push(pagePath);
	}
}

if (missing.length > 0) {
	console.error(`[audit-html-head] ${missing.length} page(s) missing <head>:`);
	for (const page of missing.slice(0, 25)) {
		console.error(`  ${page}`);
	}
	if (missing.length > 25) {
		console.error(`  … and ${missing.length - 25} more`);
	}
	process.exit(1);
}

console.log(`[audit-html-head] OK — ${collectHtmlDirs(DIST).length} pages all include <head>`);
