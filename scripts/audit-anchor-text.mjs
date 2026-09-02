#!/usr/bin/env node
/**
 * Audit internal hyperlinks for non-descriptive anchor text (Screaming Frog).
 * Run after `npm run build`.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, '..', 'dist');

/** Default Screaming Frog non-descriptive anchor phrases. */
const NON_DESCRIPTIVE = [
	/^click here$/i,
	/^click this$/i,
	/^here$/i,
	/^link$/i,
	/^more$/i,
	/^more\.\.\.$/i,
	/^read more$/i,
	/^this$/i,
	/^this link$/i,
	/^this page$/i,
	/^this resource$/i,
	/^learn more$/i,
	/^continue$/i,
	/^continue reading$/i,
	/^details$/i,
	/^info$/i,
	/^information$/i,
	/^page$/i,
	/^website$/i,
	/^web site$/i,
	/^go$/i,
	/^see more$/i,
	/^view more$/i,
	/^find out more$/i,
	/^find out$/i,
	/^read$/i,
	/^see all$/i,
	/^view all$/i,
	/^more info$/i,
	/^more information$/i,
	/^related resources$/i,
	/^additional guides$/i,
	/^more game information$/i,
	/^→$/,
	/^buyers guide$/i,
	/^the buyers guide$/i,
	/^battleye bypass$/i,
	/^undetected guide$/i,
	/^undetected in 2026$/i,
];

function isInternal(href) {
	if (!href || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('#')) {
		return false;
	}
	if (href.startsWith('http')) {
		try {
			const host = new URL(href).hostname;
			return host === 'deadsidecheats.com' || host === 'www.deadsidecheats.com' || host === 'localhost';
		} catch {
			return false;
		}
	}
	return href.startsWith('/');
}

function walkHtml(dir, files = []) {
	if (!fs.existsSync(dir)) return files;
	for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) walkHtml(full, files);
		else if (entry.name.endsWith('.html')) files.push(full);
	}
	return files;
}

function main() {
	if (!fs.existsSync(distDir)) {
		console.error('[audit-anchor-text] dist/ not found — run npm run build first');
		process.exit(1);
	}

	const issues = [];
	for (const file of walkHtml(distDir)) {
		const rel = path.relative(distDir, file).replace(/\\/g, '/');
		const html = fs.readFileSync(file, 'utf8');
		for (const match of html.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi)) {
			const href = match[1].match(/href=["']([^"']+)["']/i)?.[1];
			if (!isInternal(href)) continue;
			const text = match[2].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
			if (!text) continue;
			if (NON_DESCRIPTIVE.some((pattern) => pattern.test(text))) {
				issues.push({ rel, href, text });
			}
		}
	}

	if (issues.length > 0) {
		console.error(`[audit-anchor-text] ${issues.length} non-descriptive internal link(s):`);
		for (const { rel, href, text } of issues.slice(0, 40)) {
			console.error(`  ${rel}: "${text}" → ${href}`);
		}
		if (issues.length > 40) {
			console.error(`  …and ${issues.length - 40} more`);
		}
		process.exit(1);
	}

	console.log('[audit-anchor-text] OK — no non-descriptive internal anchor text in built HTML');
}

main();
