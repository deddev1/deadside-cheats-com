#!/usr/bin/env node
/**
 * Final-pass Deadside lexicon cleanup — removes leftover Valorant/Vanguard strings.
 * Run: node scripts/fix-deadside-lexicon.mjs
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const SKIP_DIRS = new Set(['node_modules', 'dist', '.git', 'tmp', '.astro', 'valorant-hacks-org']);

/** Ordered — specific patterns first. */
const REPLACEMENTS = [
	['valorant vanguard bypass', 'deadside battleye bypass'],
	['valorant soft aim', 'deadside soft aim'],
	['valorant mod menu', 'deadside mod menu'],
	['valorant external hack', 'deadside external cheat'],
	['valorant 2d radar', 'deadside 2d radar'],
	['soft aim valorant', 'soft aim deadside'],
	['vanguard bypass valorant', 'battleye bypass deadside'],
	['valorant anti cheat bypass', 'deadside anti cheat bypass'],
	['hwid spoofer valorant', 'hwid spoofer deadside'],
	['vanguard update', 'BattlEye update'],
	['vanguard undetected', 'BattlEye undetected'],
	['Vanguard Safe', 'BattlEye Safe'],
	['Vanguard maintenance', 'BattlEye maintenance'],
	['Vanguard rebuilds', 'BattlEye rebuilds'],
	['Vanguard patches', 'BattlEye patches'],
	['Vanguard and Deadside', 'BattlEye and Deadside'],
	['Vanguard or Deadside', 'BattlEye or Deadside'],
	['Vanguard', 'BattlEye'],
	['vanguard', 'battleye'],
	['vanlifevalorant', 'vanlifedeadside'],
	['vanLifeValorant', 'vanLifeDeadside'],
	['valo hack', 'deadside cheat'],
	['valo cheats', 'deadside cheats'],
	['valorant-patch-notes', 'deadside-patch-notes'],
	['valorant-cosmetics', 'deadside-cosmetics'],
	['valorant-weapon-tier-list', 'deadside-weapon-tier-list'],
	['valorant-loot-run', 'deadside-loot-run'],
	['valorant-competitive-meta', 'deadside-competitive-meta'],
	['valorant-cashout-routes', 'deadside-loot-routes'],
	['valorant-pro-settings', 'deadside-pro-settings'],
	['valorant-warmup-routine', 'deadside-warmup-routine'],
	['free-valorant-hack-download', 'free-deadside-cheat-download'],
	['how-long-valorant-hack-setup-takes', 'how-long-deadside-cheat-setup-takes'],
	['agent tiers', 'loot routes'],
	['agents and abilities', 'players and loot'],
	['agents &', 'squads &'],
	['agent ESP', 'player ESP'],
	['agent markers', 'loot markers'],
	['internalLinks.vanguard', 'internalLinks.battleye'],
	['Deadside hacks', 'Deadside cheats'],
	['deadside cheats', 'deadside cheats'],
	['deadside cheat', 'deadside cheat'],
	['{game} hacks', '{game} cheats'],
	['Hacks FAQ', 'Cheats FAQ'],
	['navPreview: \'Hacks\'', "navPreview: 'Cheats'"],
	["navPreview: 'Hacks'", "navPreview: 'Cheats'"],
	['/products/valorant', '/products/deadside'],
	['valo/valo cheats', 'deadside/deadside cheats'],
	['antiCheat: \'Vanguard\'', "antiCheat: 'BattlEye'"],
	['sitemap-meta.ts', 'sitemap-meta.ts'], // noop anchor
];

function walk(dir, files = []) {
	for (const name of readdirSync(dir)) {
		if (SKIP_DIRS.has(name)) continue;
		const full = path.join(dir, name);
		if (statSync(full).isDirectory()) walk(full, files);
		else files.push(full);
	}
	return files;
}

const TEXT_EXT = /\.(ts|tsx|js|mjs|astro|css|json|toml|txt|md|mdc)$/i;
let changed = 0;

for (const file of walk(ROOT)) {
	if (!TEXT_EXT.test(file)) continue;
	if (path.basename(file) === 'fix-deadside-lexicon.mjs') continue;
	if (path.basename(file) === 'adapt-deadside.mjs') continue;
	if (path.basename(file) === 'adapt-valorant.mjs') continue;
	let text = readFileSync(file, 'utf8');
	const original = text;
	for (const [from, to] of REPLACEMENTS) {
		if (from === to) continue;
		text = text.split(from).join(to);
	}
	if (text !== original) {
		writeFileSync(file, text, 'utf8');
		changed++;
	}
}

console.log(`fix-deadside-lexicon: ${changed} file(s) updated`);
