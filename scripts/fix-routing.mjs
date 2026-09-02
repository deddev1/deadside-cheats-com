#!/usr/bin/env node
/** Rebuild routing.ts and constants.mjs from clea Deadside source. */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand');

const REMOVE_IDS = [
	'hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats',
	'aimbot-hack', 'esp-hack', 'unlock-all',
];

const REPLACEMENTS = [
	['deadside-esp', 'deadside-esp'],
	['deadside-aimbot', 'deadside-aimbot'],
	['battleye', 'battleye'],
	['undetected-deadside-cheats', 'undetected-deadside-cheats'],
	['deadside-wallhack', 'deadside-wallhack'],
	['deadside-radar-hack', 'deadside-radar-hack'],
	['deadside-cheats-2026', 'deadside-cheats-2026'],
	['battleye-bypass', 'battleye-bypass'],
	['deadsidecheat.com', 'deadsidecheat.com'],
	['trucos-deadside', 'trucos-deadside'],
	['triche-deadside', 'triche-deadside'],
	['deadside-cheats', 'deadside-cheats'],
	['cheats-deadside', 'cheats-deadside'],
	['trucchi-deadside', 'trucchi-deadside'],
	['cheaty-deadside', 'cheaty-deadside'],
	['chity-deadside', 'chity-deadside'],
	['chitov-deadside', 'chitov-deadside'],
	['chitiv-deadside', 'chitiv-deadside'],
	['cheatow-deadside', 'cheatow-deadside'],
	['hile-deadside', 'hile-deadside'],
	['deadside-hile', 'deadside-hile'],
	['deadside-esp-chity', 'deadside-esp-chity'],
	['deadside-aimbot-chity', 'deadside-aimbot-chity'],
	['unentdeckte-deadside-cheats', 'unentdeckte-deadside-cheats'],
	['cheats-deadside-indetectaveis', 'cheats-deadside-indetectaveis'],
	['trucchi-deadside-indetectabili', 'trucchi-deadside-indetectabili'],
	['niewykrywalne-cheats-deadside', 'niewykrywalne-cheats-deadside'],
	['nedecektiruemye-chity-deadside', 'nedecektiruemye-chity-deadside'],
	['tespit-edilemeyen-deadside-hileleri', 'tespit-edilemeyen-deadside-hileleri'],
	['nedecektovani-chity-deadside', 'nedecektovani-chity-deadside'],
	['cheats-deadside-nedetectabile', 'cheats-deadside-nedetectabile'],
	['basta-deadside-cheats', 'basta-deadside-cheats'],
	['battleye-bypass-trucos-deadside', 'battleye-bypass-trucos-deadside'],
	['battleye-bypass-triche-deadside', 'battleye-bypass-triche-deadside'],
	['battleye-bypass-hacks-valorant', 'battleye-bypass-hacks-valorant'],
	['battleye-bypass-chity-deadside', 'battleye-bypass-chity-deadside'],
	['battleye-bypass-rust', 'battleye-bypass'],
];

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	return r;
}

function removePageBlocks(content, pageId) {
	const keyPatterns = [
		new RegExp(`\\t${pageId.replace(/-/g, '\\-')}: \\{[\\s\\S]*?\\},\\n`, 'g'),
		new RegExp(`\\t'${pageId.replace(/-/g, '\\-')}': \\{[\\s\\S]*?\\},\\n`, 'g'),
	];
	let r = content;
	for (const p of keyPatterns) r = r.replace(p, '');
	// Remove from PageId union
	r = r.replace(new RegExp(`\\s*\\|\\s*'${pageId}'`, 'g'), '');
	// Remove from englishPaths single line
	r = r.replace(new RegExp(`\\t${pageId.replace(/-/g, '\\-')}: '[^']*',\\n`, 'g'), '');
	r = r.replace(new RegExp(`\\t'${pageId.replace(/-/g, '\\-')}': '[^']*',\\n`, 'g'), '');
	return r;
}

async function fixRouting() {
	let content = await readFile(path.join(SRC, 'src/data/i18n/routing.ts'), 'utf8');
	content = apply(content);
	for (const id of REMOVE_IDS) content = removePageBlocks(content, id);
	// Fix eac key in englishPaths
	content = content.replace(/\teac: '/, "\t'battleye': '");
	await writeFile(path.join(ROOT, 'src/data/i18n/routing.ts'), content);
	console.log('Fixed routing.ts');
}

async function fixConstants() {
	const heroImages = `/** Hero image per page topic — keyword-rich deadside-cheats paths. */
export const HERO_IMAGES = {
	home: '/images/the-deadside-cheats-hero.webp',
	'deadside-esp': '/images/the-deadside-cheats-esp-wallhack.webp',
	'deadside-aimbot': '/images/the-deadside-cheats-aimbot-combat.webp',
	features: '/images/deadside-cheats-package.webp',
	pricing: '/images/deadside-cheats-cover.webp',
	setup: '/images/rust-loadout-builder.webp',
	updates: '/images/rust-header-art.webp',
	faq: '/images/rust-pack-fight.webp',
	support: '/images/deadside-cheats-package.webp',
	undetected: '/images/rust-survival-combat.webp',
	wallhack: '/images/the-deadside-cheats-esp-wallhack.webp',
	radar: '/images/rust-player-esp.webp',
	'battleye': '/images/rust-reboot-van-fight.webp',
	'cheats-2026': '/images/the-deadside-cheats-hero.webp',
	privacy: '/images/the-deadside-cheats-aimbot-combat.webp',
	refund: '/images/deadside-cheats-cover.webp',
	terms: '/images/deadside-cheats-package.webp',
};`;

	let content = await readFile(path.join(SRC, 'scripts/i18n-data/constants.mjs'), 'utf8');
	content = apply(content);
	for (const id of REMOVE_IDS) {
		content = content.replace(new RegExp(`'${id}',\\s*`, 'g'), '');
	}
	content = content.replace(
		/export const PAGE_IDS = \[[\s\S]*?\];/,
		`export const PAGE_IDS = [\n\t'home', 'deadside-esp', 'deadside-aimbot', 'features', 'pricing', 'setup',\n\t'updates', 'faq', 'support', 'undetected', 'wallhack', 'radar', 'battleye',\n\t'cheats-2026', 'privacy', 'refund', 'terms',\n];`,
	);
	content = content.replace(/\/\*\* Hero image[\s\S]*?};/, heroImages);
	content = content.replace(
		/export type PageId = [^;]+;/,
		"export type PageId = 'home' | 'deadside-esp' | 'deadside-aimbot' | 'features' | 'pricing' | 'setup' | 'updates' | 'faq' | 'support' | 'undetected' | 'wallhack' | 'radar' | 'battleye' | 'cheats-2026' | 'privacy' | 'refund' | 'terms';",
	);
	content = content.replace(/operatorEsp/g, 'playerEsp');
	content = content.replace(/extractFight/g, 'raidFight');
	content = content.replace(/alMazrah/g, 'raidMap');
	await writeFile(path.join(ROOT, 'scripts/i18n-data/constants.mjs'), content);
	console.log('Fixed constants.mjs');
}

await fixRouting();
await fixConstants();
