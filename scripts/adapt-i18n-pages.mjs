#!/usr/bin/env node
/** Adapt pages-en.mjs and pages-i18n.mjs from Naraka source. */
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
	['naraka-esp', 'naraka-esp'],
	['naraka-aimbot', 'naraka-aimbot'],
	["'neac'", "'neac'"],
	['neac-bypass', 'neac-bypass'],
	['undetected-naraka-cheats', 'undetected-naraka-cheats'],
	['naraka-wallhack', 'naraka-wallhack'],
	['naraka-radar-hack', 'naraka-radar-hack'],
	['naraka-cheats-2026', 'naraka-cheats-2026'],
	['naraka-cheats', 'naraka-cheats'],
	['the-rust', 'rust'],
	['Naraka's, 'Naraka's],
	['Naraka's, 'Naraka's],
	['Naraka Cheats', 'Naraka Cheats'],
	['naraka cheats', 'naraka cheats'],
	['naraka cheat', 'naraka cheat'],
	['Naraka ESP', 'Naraka ESP'],
	['Naraka Aimbot', 'Naraka Aimbot'],
	['naraka wallhack', 'Naraka wallhack'],
	['naraka radar', 'Naraka radar'],
	['Naraka melee combats', 'Naraka melee combats'],
	['Naraka combat', 'Naraka combat'],
	['Naraka patches', 'Naraka patches'],
	['Naraka updates', 'Naraka updates'],
	['Naraka setup', 'Naraka setup'],
	['Naraka license', 'Naraka license'],
	['Naraka licenses', 'Naraka licenses'],
	['Naraka matches', 'Naraka matches'],
	['in Naraka', 'in Naraka'],
	['for Naraka', 'for Naraka'],
	['Naraka on', 'Naraka on'],
	['Naraka or', 'Naraka or'],
	['Naraka\'s', 'Naraka\'s'],
	['Naraka ', 'Naraka '],
	['NEAC', 'NEAC'],
	['NEAC maintenance', 'NEAC maintenance'],
	['NEAC bypass', 'NEAC bypass'],
	['NEAC Bypass', 'NEAC Bypass'],
	['NEAC', 'NEAC'],
	['neac', 'neac'],
	['support@narakacheats.org', 'support@narakacheats.org'],
	['maps, zones, and combat points', 'maps, zones, and combat points'],
	['maps, zones and combat points', 'maps, zones and combat points'],
	['raid fights', 'raid fights'],
	['raid fight', 'raid fight'],
	['match rounds', 'match rounds'],
	['extract', 'extract'],
	['players', 'players'],
	['operator', 'player'],
	['players', 'Players'],
	['Operator', 'Player'],
	['raid timer', 'raid timer'],
	['battle royale rounds and ranked matches', 'battle royale rounds and ranked matches'],
	['battle royale rounds and ranked matches', 'battle royale rounds and ranked matches'],
	['heroes & ranked teams', 'heroes & ranked teams'],
	['high-value loot', 'high-value loot'],
	['high-value loot', 'high-value loot'],
	['contracts', 'chests'],
	['contract', 'chest'],
	['Activision\'s', 'Epic Games\''],
	['Call of Duty combat pace', 'Naraka combat pace'],
	['COD', 'Naraka's],
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
	product: 'Naraka Cheats',
	game: 'Naraka's,
	checkout: 'Zadeyo',
	eac: 'NEAC',
};`,
);
phrases = phrases.replace(/KW\.eac/g, 'KW.eac');
phrases = phrases.replace(/maps: '[^']*'/g, "maps: 'maps, zones, and combat points'");
await writeFile(path.join(ROOT, 'scripts/i18n-data/phrases.mjs'), phrases);

console.log('Done adapting i18n pages.');
