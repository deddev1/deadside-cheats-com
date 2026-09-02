#!/usr/bin/env node
/** Fix remaining i18n key mismatches and ui-strings. */
import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand');

const UI_REPLACEMENTS = [
	['Deadside Cheats', 'Deadside Cheats'],
	['deadside cheats', 'deadside cheats'],
	['Deadside Cheats', 'Deadside Cheats'],
	['Deadside's, 'Deadside's],
	['Deadside's, 'Deadside's],
	['Call of Duty', 'Deadside's],
	['Deadside PC', 'Deadside PC'],
	['for Deadside', 'for Deadside'],
	['Deadside ', 'Deadside '],
	['rust ', 'rust '],
	['BattlEye maintenance', 'BattlEye maintenance'],
	['BattlEye', 'BattlEye'],
	['BattlEye', 'BattlEye'],
	['operatorEsp', 'playerEsp'],
	['extractFight', 'raidFight'],
	['alMazrah', 'raidMap'],
	['players', 'players'],
	['operator', 'player'],
	['players', 'Players'],
	['Operator', 'Player'],
	['Al Mazrah', 'Verdansk'],
	['Verdansk', 'Verdansk'],
	['farming run', 'farming run'],
	['extract', 'extract'],
	['deadsidecheat.com', 'deadsidecheat.com'],
	['Trucos Deadside's, 'Trucos Deadside's],
	['Triches Deadside's, 'Triches Deadside's],
	['Cheats Deadside's, 'Cheats Deadside's],
];

function apply(content) {
	let r = content;
	for (const [a, b] of UI_REPLACEMENTS) r = r.split(a).join(b);
	return r;
}

// Rebuild ui-strings from clean source
for (const file of ['ui-strings-part1.mjs', 'ui-strings-part2.mjs']) {
	let content = await readFile(path.join(SRC, 'scripts/i18n-data', file), 'utf8');
	content = apply(content);
	await writeFile(path.join(ROOT, 'scripts/i18n-data', file), content);
	console.log('Fixed', file);
}

// Fix pages-en eac key
let pagesEn = await readFile(path.join(ROOT, 'scripts/i18n-data/pages-en.mjs'), 'utf8');
pagesEn = pagesEn.replace(/\teac: \{/, "\t'battleye': {");
pagesEn = pagesEn.replace(/Deadside Deadside/g, 'Deadside's);
pagesEn = pagesEn.replace(/for Deadside Deadside/g, 'for Deadside');
await writeFile(path.join(ROOT, 'scripts/i18n-data/pages-en.mjs'), pagesEn);

// Fix pages-i18n
let pagesI18n = await readFile(path.join(ROOT, 'scripts/i18n-data/pages-i18n.mjs'), 'utf8');
pagesI18n = apply(pagesI18n);
pagesI18n = pagesI18n.replace(/'battleye'/g, "'battleye'");
pagesI18n = pagesI18n.replace(/eac:/g, "'battleye':");
await writeFile(path.join(ROOT, 'scripts/i18n-data/pages-i18n.mjs'), pagesI18n);

// Fix generate-i18n pages count
let gen = await readFile(path.join(ROOT, 'scripts/generate-i18n-content.mjs'), 'utf8');
gen = gen.replace('Pages per locale: 25', 'Pages per locale: 17');
await writeFile(path.join(ROOT, 'scripts/generate-i18n-content.mjs'), gen);

console.log('Fixed i18n keys.');
