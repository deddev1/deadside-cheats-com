#!/usr/bin/env node
/**
 * Final-pass Naraka lexicon cleanup — removes leftover Valorant/Vanguard strings.
 * Run: node scripts/fix-naraka-lexicon.mjs
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const SKIP_DIRS = new Set(['node_modules', 'dist', '.git', 'tmp', '.astro', 'valorant-hacks-org']);

/** Ordered — specific patterns first. */
const REPLACEMENTS = [
	['valorant vanguard bypass', 'naraka neac bypass'],
	['valorant soft aim', 'naraka soft aim'],
	['valorant mod menu', 'naraka mod menu'],
	['valorant external hack', 'naraka external cheat'],
	['valorant 2d radar', 'naraka 2d radar'],
	['soft aim valorant', 'soft aim naraka'],
	['vanguard bypass valorant', 'neac bypass naraka'],
	['valorant anti cheat bypass', 'naraka anti cheat bypass'],
	['hwid spoofer valorant', 'hwid spoofer naraka'],
	['vanguard update', 'NEAC update'],
	['vanguard undetected', 'NEAC undetected'],
	['Vanguard Safe', 'NEAC Safe'],
	['Vanguard maintenance', 'NEAC maintenance'],
	['Vanguard rebuilds', 'NEAC rebuilds'],
	['Vanguard patches', 'NEAC patches'],
	['Vanguard and Naraka', 'NEAC and Naraka'],
	['Vanguard or Naraka', 'NEAC or Naraka'],
	['Vanguard', 'NEAC'],
	['vanguard', 'neac'],
	['vanlifevalorant', 'vanlifenaraka'],
	['vanLifeValorant', 'vanLifeNaraka'],
	['valo hack', 'naraka cheat'],
	['valo cheats', 'naraka cheats'],
	['valorant-patch-notes', 'naraka-patch-notes'],
	['valorant-cosmetics', 'naraka-cosmetics'],
	['valorant-weapon-tier-list', 'naraka-weapon-tier-list'],
	['valorant-loot-run', 'naraka-loot-run'],
	['valorant-competitive-meta', 'naraka-competitive-meta'],
	['valorant-cashout-routes', 'naraka-loot-routes'],
	['valorant-pro-settings', 'naraka-pro-settings'],
	['valorant-warmup-routine', 'naraka-warmup-routine'],
	['free-valorant-hack-download', 'free-naraka-cheat-download'],
	['how-long-valorant-hack-setup-takes', 'how-long-naraka-cheat-setup-takes'],
	['agent tiers', 'hero tiers'],
	['agents and abilities', 'heroes and weapons'],
	['agents &', 'heroes &'],
	['agent ESP', 'hero ESP'],
	['agent markers', 'hero markers'],
	['internalLinks.vanguard', 'internalLinks.neac'],
	['Naraka hacks', 'Naraka cheats'],
	['naraka hacks', 'naraka cheats'],
	['naraka hack', 'naraka cheat'],
	['{game} hacks', '{game} cheats'],
	['Hacks FAQ', 'Cheats FAQ'],
	['navPreview: \'Hacks\'', "navPreview: 'Cheats'"],
	["navPreview: 'Hacks'", "navPreview: 'Cheats'"],
	['/products/valorant', '/products/naraka'],
	['valo/valo cheats', 'naraka/naraka cheats'],
	['antiCheat: \'Vanguard\'', "antiCheat: 'NEAC'"],
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
	if (path.basename(file) === 'fix-naraka-lexicon.mjs') continue;
	if (path.basename(file) === 'adapt-naraka.mjs') continue;
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

console.log(`fix-naraka-lexicon: ${changed} file(s) updated`);
