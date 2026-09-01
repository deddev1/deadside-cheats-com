#!/usr/bin/env node
/**
 * Final Deadside rebrand cleanup — NEAC leftovers, Naraka map names, double tokens.
 * Run: node scripts/fix-deadside-final.mjs
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SKIP_DIRS = new Set(['node_modules', 'dist', '.git', 'tmp', '.astro']);
const SKIP_FILES = new Set(['adapt-naraka.mjs', 'adapt-deadside.mjs', 'fix-deadside-final.mjs']);

const REPLACEMENTS = [
	['deadside-deadside-novaxware', 'deadside-novaxware'],
	['deadside deadside hacks', 'deadside hacks'],
	['deadside deadside cheats', 'deadside cheats'],
	['deadside deadside cheat', 'deadside cheat'],
	['deadside deadside hack', 'deadside hack'],
	['antiCheat: \'NEAC\'', "antiCheat: 'BattlEye'"],
	['antiCheat: "NEAC"', 'antiCheat: "BattlEye"'],
	['https://www.deadside.com/en/', 'https://www.battleye.com/'],
	['deadside neac bypass', 'deadside battleye bypass'],
	['neac bypass deadside', 'battleye bypass deadside'],
	['NEAC undetected', 'BattlEye undetected'],
	['NEAC Safe', 'BattlEye Safe'],
	['NEAC FAQ', 'BattlEye FAQ'],
	['NEAC overview', 'BattlEye overview'],
	['NEAC and Deadside', 'BattlEye and Deadside'],
	['NEAC or Deadside', 'BattlEye or Deadside'],
	['NEAC patches', 'BattlEye patches'],
	['NEAC patch', 'BattlEye patch'],
	['NEAC security', 'BattlEye security'],
	['NEAC maintenance', 'BattlEye maintenance'],
	['NEAC rebuilds', 'BattlEye rebuilds'],
	['NEAC updates', 'BattlEye updates'],
	['NEAC update', 'BattlEye update'],
	['NEAC notes', 'BattlEye notes'],
	['NEAC status', 'BattlEye status'],
	['NEAC reality', 'BattlEye reality'],
	['NEAC risk', 'BattlEye risk'],
	['NEAC bypass', 'BattlEye bypass'],
	['| NEAC', '| BattlEye'],
	['& NEAC', '& BattlEye'],
	['y NEAC', 'y BattlEye'],
	['NEAC ', 'BattlEye '],
	[' NEAC', ' BattlEye'],
	['NEAC,', 'BattlEye,'],
	['NEAC.', 'BattlEye.'],
	['NEAC\'', 'BattlEye\''],
	['NEAC"', 'BattlEye"'],
	['NEAC)', 'BattlEye)'],
	['(NEAC', '(BattlEye'],
	['neac bypass', 'battleye bypass'],
	['internalLinks.neac', 'internalLinks.battleye'],
	['linkNEAC', 'linkBattlEye'],
	['TOPIC_LINKS.neac', 'TOPIC_LINKS.battleye'],
	['\tneac:', '\tbattleye:'],
	['\tneac: {', '\tbattleye: {'],
	['pageId: \'neac\'', "pageId: 'battleye'"],
	['ranked & Showdown', 'survival & squad raids'],
	['ranked and Showdown', 'survival and squad raids'],
	['Showdown', 'squad raids'],
	['hero tiers', 'loot routes'],
	['hero esp', 'player ESP'],
	['Hero esp', 'Player ESP'],
	['heroes and weapons', 'players and loot'],
	['heroes &', 'squads &'],
	['Riot Games', 'Bad Pixel'],
	['Riot\'s', 'Bad Pixel\'s'],
	['Riot and', 'Bad Pixel and'],
	['violate Riot', 'violate Bad Pixel'],
	['on Riot', 'on Bad Pixel'],
	['asura', 'compound zones'],
	['tian cheng', 'military base'],
	['mori', 'loot zone'],
	['yushan', 'survival raid'],
	['huachi', 'compound'],
	['fushan', 'outpost'],
	['melee holds', 'sniper holds'],
	['katana vs spear', 'rifle vs shotgun'],
	['melee main', 'sniper main'],
	['long range soft aim', 'long-range soft aim'],
	['verdansk', 'deadside-map'],
	['narakacheats', 'deadsidecheats'],
	['Naraka', 'Deadside'],
	['naraka', 'deadside'],
	['Bladepoint', 'Deadside'],
	['bladepoint', 'deadside'],
	['NEAC', 'BattlEye'],
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

const TEXT_EXT = /\.(ts|tsx|js|mjs|astro|css|json|toml|txt|md|mdc|svg)$/i;
let changed = 0;

for (const file of walk(ROOT)) {
	if (!TEXT_EXT.test(file)) continue;
	if (SKIP_FILES.has(path.basename(file))) continue;
	const original = readFileSync(file, 'utf8');
	let updated = original;
	for (const [from, to] of REPLACEMENTS) {
		if (from === to) continue;
		updated = updated.split(from).join(to);
	}
	if (updated !== original) {
		writeFileSync(file, updated, 'utf8');
		changed++;
	}
}

console.log(`fix-deadside-final: updated ${changed} files`);
