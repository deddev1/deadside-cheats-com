#!/usr/bin/env node
/**
 * Fix path-redirects.json: rewrite valorant destinations → naraka and add legacy valorant → naraka 301s.
 * Run: node scripts/fix-naraka-path-redirects.mjs
 */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PATH_REDIRECTS = path.join(ROOT, 'functions/path-redirects.json');

const SLUG_MAP = [
	['valorant-hacks', 'naraka-cheats'],
	['valorant-esp', 'naraka-esp'],
	['valorant-aimbot', 'naraka-aimbot'],
	['valorant-wallhack', 'naraka-wallhack'],
	['valorant-radar-hack', 'naraka-radar-hack'],
	['valorant-soft-aim', 'naraka-soft-aim'],
	['valorant-mod-menu', 'naraka-mod-menu'],
	['valorant-cheat-download', 'naraka-cheat-download'],
	['valorant-aimbot-hack', 'naraka-aimbot-hack'],
	['valorant-esp-hack', 'naraka-esp-hack'],
	['valorant-unlock-all', 'naraka-unlock-all'],
	['undetected-valorant-hacks', 'undetected-naraka-cheats'],
	['best-valorant-hacks', 'best-naraka-cheats'],
	['valorant-hacks-2026', 'naraka-cheats-2026'],
	['neac-bypass', 'neac-bypass'],
	['valorant-cheats', 'naraka-cheats'],
	['valorant-cheat', 'naraka-cheat'],
	['hacks-valorant', 'cheats-naraka'],
	['valorant', 'naraka'],
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

// Legacy valorant EN paths → naraka
const EN_REDIRECTS = [
	['/valorant-hacks', '/naraka-cheats/'],
	['/valorant-esp', '/naraka-esp/'],
	['/valorant-aimbot', '/naraka-aimbot/'],
	['/valorant-wallhack', '/naraka-wallhack/'],
	['/valorant-radar-hack', '/naraka-radar-hack/'],
	['/valorant-soft-aim', '/naraka-soft-aim/'],
	['/valorant-mod-menu', '/naraka-mod-menu/'],
	['/valorant-cheat-download', '/naraka-cheat-download/'],
	['/valorant-aimbot-hack', '/naraka-aimbot-hack/'],
	['/valorant-esp-hack', '/naraka-esp-hack/'],
	['/valorant-unlock-all', '/naraka-unlock-all/'],
	['/undetected-valorant-hacks', '/undetected-naraka-cheats/'],
	['/best-valorant-hacks', '/best-naraka-cheats/'],
	['/valorant-hacks-2026', '/naraka-cheats-2026/'],
	['/neac-bypass', '/neac-bypass/'],
	['/valorant-cheats', '/naraka-cheats/'],
];

for (const [from, to] of EN_REDIRECTS) {
	addPair(fixed, from, to);
	addPair(fixed, `${from}/`, to);
}

await writeFile(PATH_REDIRECTS, `${JSON.stringify(fixed, null, 2)}\n`);
console.log(`fix-naraka-path-redirects: ${Object.keys(fixed).length} redirect entries`);
