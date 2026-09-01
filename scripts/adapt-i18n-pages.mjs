#!/usr/bin/env node
/** Adapt pages-en.mjs and pages-i18n.mjs from Deadside source. */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand');

const REMOVE_PAGE_KEYS = [
	'hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats',
	'aimbot-hack', 'esp-hack', 'unlock-all',
];

const REPLACEMENTS = [
	['deadside-esp', 'deadside-esp'],
	['deadside-aimbot', 'deadside-aimbot'],
	["'battleye'", "'battleye'"],
	['battleye-bypass', 'battleye-bypass'],
	['undetected-deadside-cheats', 'undetected-deadside-cheats'],
	['deadside-wallhack', 'deadside-wallhack'],
	['deadside-radar-hack', 'deadside-radar-hack'],
	['deadside-cheats-2026', 'deadside-cheats-2026'],
	['deadside-cheats', 'deadside-cheats'],
	['the-rust', 'rust'],
	['Deadside's, 'Deadside's],
	['Deadside's, 'Deadside's],
	['Deadside Cheats', 'Deadside Cheats'],
	['deadside cheats', 'deadside cheats'],
	['deadside cheat', 'deadside cheat'],
	['Deadside ESP', 'Deadside ESP'],
	['Deadside Aimbot', 'Deadside Aimbot'],
	['deadside wallhack', 'Deadside wallhack'],
	['deadside radar', 'Deadside radar'],
	['Deadside tactical combats', 'Deadside tactical combats'],
	['Deadside combat', 'Deadside combat'],
	['Deadside patches', 'Deadside patches'],
	['Deadside updates', 'Deadside updates'],
	['Deadside setup', 'Deadside setup'],
	['Deadside license', 'Deadside license'],
	['Deadside licenses', 'Deadside licenses'],
	['Deadside matches', 'Deadside matches'],
	['in Deadside', 'in Deadside'],
	['for Deadside', 'for Deadside'],
	['Deadside on', 'Deadside on'],
	['Deadside or', 'Deadside or'],
	['Deadside\'s', 'Deadside\'s'],
	['Deadside ', 'Deadside '],
	['BattlEye', 'BattlEye'],
	['BattlEye maintenance', 'BattlEye maintenance'],
	['BattlEye bypass', 'BattlEye bypass'],
	['BattlEye Bypass', 'BattlEye Bypass'],
	['BattlEye', 'BattlEye'],
	['battleye', 'battleye'],
	['support@deadsidecheats.com', 'support@deadsidecheats.com'],
	['maps, compounds, and loot zones', 'maps, compounds, and loot zones'],
	['maps, compounds and loot zones', 'maps, compounds and loot zones'],
	['raid fights', 'raid fights'],
	['raid fight', 'raid fight'],
	['match rounds', 'match rounds'],
	['extract', 'extract'],
	['players', 'players'],
	['operator', 'player'],
	['players', 'Players'],
	['Operator', 'Player'],
	['raid timer', 'raid timer'],
	['survival raids and squad sessions', 'survival raids and squad sessions'],
	['survival raids and squad sessions', 'survival raids and squad sessions'],
	['squads & loot teams', 'squads & loot teams'],
	['high-value loot', 'high-value loot'],
	['high-value loot', 'high-value loot'],
	['contracts', 'chests'],
	['contract', 'chest'],
	['Activision\'s', 'Epic Games\''],
	['Call of Duty combat pace', 'Deadside combat pace'],
	['COD', 'Deadside's],
];

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	return r;
}

function removePageObjectBlocks(content) {
	let r = content;
	for (const key of REMOVE_PAGE_KEYS) {
		const quoted = `'${key}'`;
		const patterns = [
			new RegExp(`\\t${quoted}: \\{[\\s\\S]*?\\},\\n`, 'g'),
			new RegExp(`\\t${key.replace(/-/g, '\\-')}: \\{[\\s\\S]*?\\},\\n`, 'g'),
		];
		for (const p of patterns) r = r.replace(p, '');
	}
	return r;
}

async function adaptFile(rel) {
	let content = await readFile(path.join(SRC, rel), 'utf8');
	content = apply(content);
	content = removePageObjectBlocks(content);
	await writeFile(path.join(ROOT, rel), content);
	console.log('Adapted', rel);
}

await adaptFile('scripts/i18n-data/pages-en.mjs');
await adaptFile('scripts/i18n-data/pages-i18n.mjs');
await adaptFile('scripts/i18n-data/phrases.mjs');

// Patch phrases KW object
let phrases = await readFile(path.join(ROOT, 'scripts/i18n-data/phrases.mjs'), 'utf8');
phrases = phrases.replace(
	/const KW = \{[\s\S]*?\};/,
	`const KW = {
	esp: 'ESP wallhack',
	radar: 'radar hack',
	aimbot: 'Aimbot',
	product: 'Deadside Cheats',
	game: 'Deadside's,
	checkout: 'Zadeyo',
	eac: 'BattlEye',
};`,
);
phrases = phrases.replace(/KW\.eac/g, 'KW.eac');
phrases = phrases.replace(/maps: '[^']*'/g, "maps: 'maps, compounds, and loot zones'");
await writeFile(path.join(ROOT, 'scripts/i18n-data/phrases.mjs'), phrases);

console.log('Done adapting i18n pages.');
