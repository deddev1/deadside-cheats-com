#!/usr/bin/env node
/** Fix remaining i18n key mismatches and ui-strings. */
import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand');

const UI_REPLACEMENTS = [
	['Naraka Cheats', 'Naraka Cheats'],
	['naraka cheats', 'naraka cheats'],
	['Naraka Cheats', 'Naraka Cheats'],
	['Naraka's, 'Naraka's],
	['Naraka's, 'Naraka's],
	['Call of Duty', 'Naraka's],
	['Naraka PC', 'Naraka PC'],
	['for Naraka', 'for Naraka'],
	['Naraka ', 'Naraka '],
	['rust ', 'rust '],
	['NEAC maintenance', 'NEAC maintenance'],
	['NEAC', 'NEAC'],
	['NEAC', 'NEAC'],
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
	['narakacheats.org', 'narakacheats.org'],
	['Trucos Naraka's, 'Trucos Naraka's],
	['Triches Naraka's, 'Triches Naraka's],
	['Cheats Naraka's, 'Cheats Naraka's],
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
pagesEn = pagesEn.replace(/\teac: \{/, "\t'neac': {");
pagesEn = pagesEn.replace(/Naraka Naraka/g, 'Naraka's);
pagesEn = pagesEn.replace(/for Naraka Naraka/g, 'for Naraka');
await writeFile(path.join(ROOT, 'scripts/i18n-data/pages-en.mjs'), pagesEn);

// Fix pages-i18n
let pagesI18n = await readFile(path.join(ROOT, 'scripts/i18n-data/pages-i18n.mjs'), 'utf8');
pagesI18n = apply(pagesI18n);
pagesI18n = pagesI18n.replace(/'neac'/g, "'neac'");
pagesI18n = pagesI18n.replace(/eac:/g, "'neac':");
await writeFile(path.join(ROOT, 'scripts/i18n-data/pages-i18n.mjs'), pagesI18n);

// Fix generate-i18n pages count
let gen = await readFile(path.join(ROOT, 'scripts/generate-i18n-content.mjs'), 'utf8');
gen = gen.replace('Pages per locale: 25', 'Pages per locale: 17');
await writeFile(path.join(ROOT, 'scripts/generate-i18n-content.mjs'), gen);

console.log('Fixed i18n keys.');
