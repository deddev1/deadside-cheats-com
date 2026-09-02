#!/usr/bin/env node
/**
 * Audit image file sizes for PageSpeed / Screaming Frog "Large Images".
 * - Referenced /images/ paths in built HTML must be ≤ threshold.
 * - No file in public/images/ may exceed threshold (prevents crawlable bloat).
 *
 * Run after `npm run build`.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const distDir = path.join(root, 'dist');
const imagesDir = path.join(root, 'public', 'images');

/** Screaming Frog default "large image" threshold (100 KB). */
const MAX_BYTES = Number(process.env.LARGE_IMAGE_MAX_KB ?? 100) * 1024;

const IMAGE_EXT = /\.(?:webp|png|jpg|jpeg|svg|gif)$/i;
const HTML_IMAGE_REF = /\/images\/[a-zA-Z0-9._-]+\.(?:webp|png|jpg|jpeg|svg|gif)/gi;

function walkHtml(dir, files = []) {
	if (!fs.existsSync(dir)) return files;
	for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) walkHtml(full, files);
		else if (entry.name.endsWith('.html')) files.push(full);
	}
	return files;
}

function formatKb(bytes) {
	return `${Math.round(bytes / 1024)}KB`;
}

function main() {
	if (!fs.existsSync(distDir)) {
		console.error('[audit-large-images] dist/ not found — run npm run build first');
		process.exit(1);
	}
	if (!fs.existsSync(imagesDir)) {
		console.error('[audit-large-images] public/images/ not found');
		process.exit(1);
	}

	const referenced = new Set();
	for (const file of walkHtml(distDir)) {
		const html = fs.readFileSync(file, 'utf8');
		for (const match of html.matchAll(HTML_IMAGE_REF)) {
			referenced.add(match[0]);
		}
	}

	const publicOversized = [];
	for (const name of fs.readdirSync(imagesDir)) {
		if (!IMAGE_EXT.test(name)) continue;
		const full = path.join(imagesDir, name);
		const { size } = fs.statSync(full);
		if (size > MAX_BYTES) {
			publicOversized.push({ path: `/images/${name}`, bytes: size, kind: 'public' });
		}
	}

	const referencedOversized = [];
	for (const src of referenced) {
		const file = src.replace(/^\/images\//, '');
		const full = path.join(imagesDir, file);
		if (!fs.existsSync(full)) continue;
		const { size } = fs.statSync(full);
		if (size > MAX_BYTES) {
			referencedOversized.push({ path: src, bytes: size, kind: 'referenced' });
		}
	}

	const issues = [...publicOversized];
	for (const row of referencedOversized) {
		if (!issues.some((issue) => issue.path === row.path)) issues.push(row);
	}
	issues.sort((a, b) => b.bytes - a.bytes);

	if (issues.length > 0) {
		console.error(
			`[audit-large-images] ${issues.length} image(s) exceed ${MAX_BYTES / 1024}KB:`,
		);
		for (const { path: src, bytes } of issues) {
			console.error(`  ${src} — ${formatKb(bytes)}`);
		}
		process.exit(1);
	}

	console.log(
		`[audit-large-images] OK — ${referenced.size} referenced paths, ${fs.readdirSync(imagesDir).filter((n) => IMAGE_EXT.test(n)).length} public images, all ≤ ${MAX_BYTES / 1024}KB`,
	);
}

main();
