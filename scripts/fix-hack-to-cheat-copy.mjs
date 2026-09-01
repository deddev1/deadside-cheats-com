#!/usr/bin/env node
/**
 * Replace product "hack/hacks" wording with cheat terminology in source copy.
 * Preserves URLs, page ids, and the feature term "wallhack".
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const SKIP_DIRS = new Set(['node_modules', 'dist', '.git', 'tmp', '.astro']);

/** Longest / most specific patterns first. */
const REPLACEMENTS = [
	['free Deadside hack download', 'free Deadside cheat download'],
	['Deadside Hack Download', 'Deadside Cheat Download'],
	['Undetected PC Hacks', 'Undetected PC Cheats'],
	['deadside aimbot hack', 'deadside aimbot'],
	['deadside esp hack', 'deadside esp'],
	['deadside radar hack', 'deadside radar'],
	['Deadside Aimbot hack', 'Deadside Aimbot'],
	['Deadside ESP hack', 'Deadside ESP'],
	['Aimbot hack', 'Aimbot'],
	['ESP hack', 'ESP'],
	['aimbot hack', 'aimbot'],
	['esp hack', 'ESP'],
	['Radar hack overlay', '2D radar overlay'],
	['Radar Hack', '2D Radar'],
	['radar hack', '2D radar'],
	['deadside hacks pc', 'deadside cheats pc'],
	['Deadside Hacks', 'Deadside Cheats'],
	['Deadside hacks', 'Deadside cheats'],
	['deadside hacks', 'deadside cheats'],
	['">hacks</a>', '">cheats</a>'],
	['Deadside Aimbot Hack', 'Deadside Aimbot'],
	['Deadside ESP Hack', 'Deadside ESP'],
	['aimbot Hack', 'Aimbot'],
	['esp Hack', 'ESP'],
	['Undetected Hacks,', 'Undetected Cheats,'],
	['Undetected Hacks', 'Undetected Cheats'],
	['2D 2D radar', '2D radar'],
	['"radar": "Radar hack"', '"radar": "2D radar"'],
	['best hacks ESP', 'best cheats ESP'],
	['player tags hack', 'player ESP tags'],
	['undetected hacks.', 'undetected cheats.'],
	['Hack aimbot', 'Aimbot'],
	['Hack ESP', 'ESP'],
	['Aimbot-Hack', 'Aimbot'],
	['ESP-Hack', 'ESP'],
	['tags hack', 'ESP tags'],
	['jugador hack', 'jugador ESP'],
	['joueur hack', 'joueur ESP'],
	['Tags Hack', 'ESP Tags'],
	['теги игроков hack', 'теги игроков ESP'],
	['ورadar hack', 'و2D radar'],
	['/deadside-cheats/">hacks', '/deadside-cheats/">cheats'],
];

const TARGET_DIRS = [
	path.join(ROOT, 'scripts', 'i18n-data'),
	path.join(ROOT, 'src', 'data'),
	path.join(ROOT, 'src', 'pages'),
	path.join(ROOT, 'src', 'locales'),
];

const TEXT_EXT = /\.(ts|tsx|js|mjs|astro|json)$/i;

function walk(dir, files = []) {
	for (const name of readdirSync(dir)) {
		if (SKIP_DIRS.has(name)) continue;
		const full = path.join(dir, name);
		if (statSync(full).isDirectory()) walk(full, files);
		else if (TEXT_EXT.test(full)) files.push(full);
	}
	return files;
}

function applyReplacements(text) {
	let out = text;
	for (const [from, to] of REPLACEMENTS) {
		out = out.split(from).join(to);
	}
	return out;
}

let changed = 0;
for (const dir of TARGET_DIRS) {
	for (const file of walk(dir)) {
		if (path.basename(file) === 'fix-hack-to-cheat-copy.mjs') continue;
		const original = readFileSync(file, 'utf8');
		const updated = applyReplacements(original);
		if (updated !== original) {
			writeFileSync(file, updated, 'utf8');
			changed++;
		}
	}
}

console.log(`fix-hack-to-cheat-copy: ${changed} file(s) updated`);
