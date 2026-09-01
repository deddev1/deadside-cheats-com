#!/usr/bin/env node
/**
 * Rebrand deadsidecheats.com → deadsidecheats.com (Deadside Cheats → Deadside Cheats).
 * Run from project root: node scripts/rebrand-deadside-cheats.mjs
 */
import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const SKIP_DIRS = new Set(['node_modules', 'dist', '.git', 'tmp', '.astro']);
const SKIP_FILES = new Set(['package-lock.json', 'rebrand-deadside-cheats.mjs']);

/** Ordered — most specific first. */
const REPLACEMENTS = [
	['https://www.deadsidecheats.com', 'https://www.deadsidecheats.com'],
	['https://deadsidecheats.com', 'https://deadsidecheats.com'],
	['www.deadsidecheats.com', 'www.deadsidecheats.com'],
	['support@deadsidecheats.com', 'support@deadsidecheats.com'],
	['deadsidecheats.com', 'deadsidecheats.com'],
	['project-name=deadsidecheats', 'project-name=deadsidecheats'],
	['name = "valorantcheats"', 'name = "deadside-cheats-org"'],
	['Deadside Cheats', 'Deadside Cheats'],
];

async function walk(dir, files = []) {
	const entries = await readdir(dir, { withFileTypes: true });
	for (const entry of entries) {
		if (SKIP_DIRS.has(entry.name)) continue;
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) await walk(full, files);
		else files.push(full);
	}
	return files;
}

function shouldProcess(file) {
	const rel = path.relative(ROOT, file);
	if (SKIP_FILES.has(path.basename(file))) return false;
	if (rel.startsWith('public/images/')) return false;
	if (/\.(png|jpg|jpeg|webp|gif|ico|woff2?|mp4)$/i.test(file)) return false;
	return true;
}

let changed = 0;
const files = await walk(ROOT);
for (const file of files) {
	if (!shouldProcess(file)) continue;
	let text = await readFile(file, 'utf8');
	const original = text;
	for (const [from, to] of REPLACEMENTS) {
		text = text.split(from).join(to);
	}
	if (text !== original) {
		await writeFile(file, text, 'utf8');
		changed++;
		console.log('updated', path.relative(ROOT, file));
	}
}

console.log(`\nrebrand-deadside-cheats: ${changed} file(s) updated`);
