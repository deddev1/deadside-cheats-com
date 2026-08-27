#!/usr/bin/env node
/** Rebuild routing.ts and constants.mjs from clea Naraka source. */
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
	['naraka-esp', 'naraka-esp'],
	['naraka-aimbot', 'naraka-aimbot'],
	['neac', 'neac'],
	['undetected-naraka-cheats', 'undetected-naraka-cheats'],
	['naraka-wallhack', 'naraka-wallhack'],
	['naraka-radar-hack', 'naraka-radar-hack'],
	['naraka-cheats-2026', 'naraka-cheats-2026'],
	['neac-bypass', 'neac-bypass'],
	['narakacheats.org', 'narakacheats.org'],
	['trucos-naraka', 'trucos-naraka'],
	['triche-naraka', 'triche-naraka'],
	['naraka-cheats', 'naraka-cheats'],
	['cheats-naraka', 'cheats-naraka'],
	['trucchi-naraka', 'trucchi-naraka'],
	['cheaty-naraka', 'cheaty-naraka'],
	['chity-naraka', 'chity-naraka'],
	['chitov-naraka', 'chitov-naraka'],
	['chitiv-naraka', 'chitiv-naraka'],
	['cheatow-naraka', 'cheatow-naraka'],
	['hile-naraka', 'hile-naraka'],
	['naraka-hile', 'naraka-hile'],
	['naraka-esp-chity', 'naraka-esp-chity'],
	['naraka-aimbot-chity', 'naraka-aimbot-chity'],
	['unentdeckte-naraka-cheats', 'unentdeckte-naraka-cheats'],
	['cheats-naraka-indetectaveis', 'cheats-naraka-indetectaveis'],
	['trucchi-naraka-indetectabili', 'trucchi-naraka-indetectabili'],
	['niewykrywalne-cheats-naraka', 'niewykrywalne-cheats-naraka'],
	['nedecektiruemye-chity-naraka', 'nedecektiruemye-chity-naraka'],
	['tespit-edilemeyen-naraka-hileleri', 'tespit-edilemeyen-naraka-hileleri'],
	['nedecektovani-chity-naraka', 'nedecektovani-chity-naraka'],
	['cheats-naraka-nedetectabile', 'cheats-naraka-nedetectabile'],
	['basta-naraka-cheats', 'basta-naraka-cheats'],
	['neac-bypass-trucos-naraka', 'neac-bypass-trucos-naraka'],
	['neac-bypass-triche-naraka', 'neac-bypass-triche-naraka'],
	['neac-bypass-hacks-valorant', 'neac-bypass-hacks-valorant'],
	['neac-bypass-chity-naraka', 'neac-bypass-chity-naraka'],
	['neac-bypass-rust', 'neac-bypass'],
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
	content = content.replace(/\teac: '/, "\t'neac': '");
	await writeFile(path.join(ROOT, 'src/data/i18n/routing.ts'), content);
	console.log('Fixed routing.ts');
}

async function fixConstants() {
	const heroImages = `/** Hero image per page topic — keyword-rich naraka-cheats paths. */
export const HERO_IMAGES = {
	home: '/images/the-naraka-cheats-hero.webp',
	'naraka-esp': '/images/the-naraka-cheats-esp-wallhack.webp',
	'naraka-aimbot': '/images/the-naraka-cheats-aimbot-combat.webp',
	features: '/images/naraka-cheats-package.webp',
	pricing: '/images/naraka-cheats-cover.webp',
	setup: '/images/rust-loadout-builder.webp',
	updates: '/images/rust-header-art.webp',
	faq: '/images/rust-pack-fight.webp',
	support: '/images/naraka-cheats-package.webp',
	undetected: '/images/rust-survival-combat.webp',
	wallhack: '/images/the-naraka-cheats-esp-wallhack.webp',
	radar: '/images/rust-player-esp.webp',
	'neac': '/images/rust-reboot-van-fight.webp',
	'cheats-2026': '/images/the-naraka-cheats-hero.webp',
	privacy: '/images/the-naraka-cheats-aimbot-combat.webp',
	refund: '/images/naraka-cheats-cover.webp',
	terms: '/images/naraka-cheats-package.webp',
};`;

	let content = await readFile(path.join(SRC, 'scripts/i18n-data/constants.mjs'), 'utf8');
	content = apply(content);
	for (const id of REMOVE_IDS) {
		content = content.replace(new RegExp(`'${id}',\\s*`, 'g'), '');
	}
	content = content.replace(
		/export const PAGE_IDS = \[[\s\S]*?\];/,
		`export const PAGE_IDS = [\n\t'home', 'naraka-esp', 'naraka-aimbot', 'features', 'pricing', 'setup',\n\t'updates', 'faq', 'support', 'undetected', 'wallhack', 'radar', 'neac',\n\t'cheats-2026', 'privacy', 'refund', 'terms',\n];`,
	);
	content = content.replace(/\/\*\* Hero image[\s\S]*?};/, heroImages);
	content = content.replace(
		/export type PageId = [^;]+;/,
		"export type PageId = 'home' | 'naraka-esp' | 'naraka-aimbot' | 'features' | 'pricing' | 'setup' | 'updates' | 'faq' | 'support' | 'undetected' | 'wallhack' | 'radar' | 'neac' | 'cheats-2026' | 'privacy' | 'refund' | 'terms';",
	);
	content = content.replace(/operatorEsp/g, 'playerEsp');
	content = content.replace(/extractFight/g, 'raidFight');
	content = content.replace(/alMazrah/g, 'raidMap');
	await writeFile(path.join(ROOT, 'scripts/i18n-data/constants.mjs'), content);
	console.log('Fixed constants.mjs');
}

await fixRouting();
await fixConstants();
