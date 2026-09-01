#!/usr/bin/env node
/**
 * Fix path-redirects.json: rewrite valorant destinations → deadside and add legacy valorant → deadside 301s.
 * Run: node scripts/fix-deadside-path-redirects.mjs
 */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PATH_REDIRECTS = path.join(ROOT, 'functions/path-redirects.json');

const SLUG_MAP = [
	['valorant-hacks', 'deadside-cheats'],
	['valorant-esp', 'deadside-esp'],
	['valorant-aimbot', 'deadside-aimbot'],
	['valorant-wallhack', 'deadside-wallhack'],
	['valorant-radar-hack', 'deadside-radar-hack'],
	['valorant-soft-aim', 'deadside-soft-aim'],
	['valorant-mod-menu', 'deadside-mod-menu'],
	['valorant-cheat-download', 'deadside-cheat-download'],
	['valorant-aimbot-hack', 'deadside-aimbot-hack'],
	['valorant-esp-hack', 'deadside-esp-hack'],
	['valorant-unlock-all', 'deadside-unlock-all'],
	['undetected-valorant-hacks', 'undetected-deadside-cheats'],
	['best-valorant-hacks', 'best-deadside-cheats'],
	['valorant-hacks-2026', 'deadside-cheats-2026'],
	['battleye-bypass', 'battleye-bypass'],
	['valorant-cheats', 'deadside-cheats'],
	['valorant-cheat', 'deadside-cheat'],
	['hacks-valorant', 'cheats-deadside'],
	['valorant', 'deadside'],
];

function rewritePath(p) {
	let out = p;
	for (const [from, to] of SLUG_MAP) {
		out = out.split(from).join(to);
	}
	return out;
}

function addPair(map, from, to) {
	if (!from || !to || from === to) return;
	map[from] = to;
	const noSlash = from.replace(/\/$/, '');
	if (noSlash !== from) map[noSlash] = to;
}

const raw = JSON.parse(await readFile(PATH_REDIRECTS, 'utf8'));
const fixed = {};

for (const [key, value] of Object.entries(raw)) {
	const newKey = rewritePath(key);
	const newValue = rewritePath(value);
	addPair(fixed, newKey, newValue);
}

// Legacy valorant EN paths → deadside
const EN_REDIRECTS = [
	['/valorant-hacks', '/deadside-cheats/'],
	['/valorant-esp', '/deadside-esp/'],
	['/valorant-aimbot', '/deadside-aimbot/'],
	['/valorant-wallhack', '/deadside-wallhack/'],
	['/valorant-radar-hack', '/deadside-radar-hack/'],
	['/valorant-soft-aim', '/deadside-soft-aim/'],
	['/valorant-mod-menu', '/deadside-mod-menu/'],
	['/valorant-cheat-download', '/deadside-cheat-download/'],
	['/valorant-aimbot-hack', '/deadside-aimbot-hack/'],
	['/valorant-esp-hack', '/deadside-esp-hack/'],
	['/valorant-unlock-all', '/deadside-unlock-all/'],
	['/undetected-valorant-hacks', '/undetected-deadside-cheats/'],
	['/best-valorant-hacks', '/best-deadside-cheats/'],
	['/valorant-hacks-2026', '/deadside-cheats-2026/'],
	['/battleye-bypass', '/battleye-bypass/'],
	['/valorant-cheats', '/deadside-cheats/'],
];

for (const [from, to] of EN_REDIRECTS) {
	addPair(fixed, from, to);
	addPair(fixed, `${from}/`, to);
}

await writeFile(PATH_REDIRECTS, `${JSON.stringify(fixed, null, 2)}\n`);
console.log(`fix-deadside-path-redirects: ${Object.keys(fixed).length} redirect entries`);
