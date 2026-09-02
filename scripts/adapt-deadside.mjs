#!/usr/bin/env node
/**
 * One-time migration: Naraka Cheats → Deadside Cheats.
 * Domain: deadsidecheat.com
 * Run from project root: node scripts/adapt-deadside.mjs
 */
import { readFile, writeFile, readdir, rename } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const RENAME_PAGE_DIRS = [
	['naraka-aimbot', 'deadside-aimbot'],
	['naraka-esp', 'deadside-esp'],
	['naraka-wallhack', 'deadside-wallhack'],
	['naraka-radar-hack', 'deadside-radar-hack'],
	['undetected-naraka-cheats', 'undetected-deadside-cheats'],
	['naraka-cheats-2026', 'deadside-cheats-2026'],
	['neac-bypass', 'battleye-bypass'],
	['naraka-cheats', 'deadside-cheats'],
	['naraka-cheat-download', 'deadside-cheat-download'],
	['naraka-mod-menu', 'deadside-mod-menu'],
	['naraka-soft-aim', 'deadside-soft-aim'],
	['best-naraka-cheats', 'best-deadside-cheats'],
	['naraka-aimbot-hack', 'deadside-aimbot-hack'],
	['naraka-esp-hack', 'deadside-esp-hack'],
	['naraka-unlock-all', 'deadside-unlock-all'],
];

/** Ordered replacements — specific patterns first. */
const REPLACEMENTS = [
	['https://www.narakacheats.org', 'https://www.deadsidecheat.com'],
	['https://narakacheats.org', 'https://deadsidecheat.com'],
	['https://www.narakacheats.net', 'https://www.deadsidecheat.com'],
	['https://narakacheats.net', 'https://deadsidecheat.com'],
	['www.narakacheats.org', 'www.deadsidecheat.com'],
	['www.narakacheats.net', 'www.deadsidecheat.com'],
	['narakacheats.org', 'deadsidecheat.com'],
	['narakacheats.net', 'deadsidecheat.com'],
	['support@narakacheats.org', 'support@deadsidecheat.com'],
	['support@narakacheats.net', 'support@deadsidecheat.com'],
	['project-name=narakacheats', 'project-name=deadsidecheats'],
	['name = "naraka-cheats-org"', 'name = "deadside-cheats-org"'],
	['"name": "naraka-cheats"', '"name": "deadside-cheats"'],
	['https://store.steampowered.com/app/1203220/news/', 'https://store.steampowered.com/app/895400/news/'],
	['https://store.steampowered.com/app/1203220/NARAKA_BLADEPOINT/', 'https://store.steampowered.com/app/895400/Deadside/'],
	['https://store.steampowered.com/app/1203220', 'https://store.steampowered.com/app/895400'],
	['https://naraka.fandom.com/wiki/NARAKA:_BLADEPOINT', 'https://deadside.fandom.com/wiki/Deadside'],
	['https://naraka.fandom.com', 'https://deadside.fandom.com'],
	['naraka.fandom.com', 'deadside.fandom.com'],
	['https://www.reddit.com/r/NARAKA/', 'https://www.reddit.com/r/Deadside/'],
	['https://x.com/narakacheats', 'https://x.com/deadsidecheats'],
	['@narakacheats', '@deadsidecheats'],
	['/products/naraka-bladepoint-novaxware', '/products/deadside-novaxware'],
	['/products/naraka', '/products/deadside'],
	['undetected-naraka-cheats', 'undetected-deadside-cheats'],
	['best-naraka-cheats', 'best-deadside-cheats'],
	['naraka-cheat-download', 'deadside-cheat-download'],
	['naraka-cheats-2026', 'deadside-cheats-2026'],
	['naraka-radar-hack', 'deadside-radar-hack'],
	['naraka-aimbot-hack', 'deadside-aimbot-hack'],
	['naraka-esp-hack', 'deadside-esp-hack'],
	['naraka-unlock-all', 'deadside-unlock-all'],
	['naraka-soft-aim', 'deadside-soft-aim'],
	['naraka-mod-menu', 'deadside-mod-menu'],
	['naraka-wallhack', 'deadside-wallhack'],
	['naraka-aimbot', 'deadside-aimbot'],
	['naraka-esp', 'deadside-esp'],
	["'naraka-esp'", "'deadside-esp'"],
	['"naraka-esp"', '"deadside-esp"'],
	["'naraka-aimbot'", "'deadside-aimbot'"],
	['"naraka-aimbot"', '"deadside-aimbot"'],
	['naraka-cheats', 'deadside-cheats'],
	['naraka-cheat', 'deadside-cheat'],
	['narakaImages', 'deadsideImages'],
	["from './naraka'", "from './deadside'"],
	["from '../data/naraka'", "from '../data/deadside'"],
	["from '../../data/naraka'", "from '../../data/deadside'"],
	['fetch-naraka-images', 'fetch-deadside-images'],
	['fetch-naraka-hero', 'fetch-deadside-hero'],
	['import-naraka-screenshots', 'import-deadside-screenshots'],
	['import-naraka-user-screenshots', 'import-deadside-user-screenshots'],
	['naraka-hack-overlays', 'deadside-hack-overlays'],
	['fix-naraka-copy', 'fix-deadside-copy'],
	['fix-naraka-content', 'fix-deadside-content'],
	['fix-naraka-lexicon', 'fix-deadside-lexicon'],
	['fix-naraka-path-redirects', 'fix-deadside-path-redirects'],
	['adapt-naraka', 'adapt-deadside'],
	['rebrand-naraka-cheats', 'rebrand-deadside-cheats'],
	['trucos-naraka', 'trucos-deadside'],
	['triche-naraka', 'triche-deadside'],
	['cheats-naraka', 'cheats-deadside'],
	['trucchi-naraka', 'trucchi-deadside'],
	['cheaty-naraka', 'cheaty-deadside'],
	['chity-naraka', 'chity-deadside'],
	['chitov-naraka', 'chitov-deadside'],
	['chitiv-naraka', 'chitiv-deadside'],
	['cheatow-naraka', 'cheatow-deadside'],
	['hile-naraka', 'hile-deadside'],
	['naraka-hile', 'deadside-hile'],
	['naraka-esp-chity', 'deadside-esp-chity'],
	['naraka-aimbot-chity', 'deadside-aimbot-chity'],
	['unentdeckte-naraka-cheats', 'unentdeckte-deadside-cheats'],
	['cheats-naraka-indetectaveis', 'cheats-deadside-indetectaveis'],
	['trucchi-naraka-indetectabili', 'trucchi-deadside-indetectabili'],
	['niewykrywalne-cheats-naraka', 'niewykrywalne-cheats-deadside'],
	['nedecektiruemye-chity-naraka', 'nedecektiruemye-chity-deadside'],
	['tespit-edilemeyen-naraka-hileleri', 'tespit-edilemeyen-deadside-hileleri'],
	['nedecektovani-chity-naraka', 'nedecektovani-chity-deadside'],
	['cheats-naraka-nedetectabile', 'cheats-deadside-nedetectabile'],
	['basta-naraka-cheats', 'basta-deadside-cheats'],
	['naraka-cheats-funktionen', 'deadside-cheats-funktionen'],
	['naraka-cheats-functies', 'deadside-cheats-functies'],
	['caracteristicas-trucos-naraka', 'caracteristicas-trucos-deadside'],
	['fonctionnalites-triche-naraka', 'fonctionnalites-triche-deadside'],
	['recursos-cheats-naraka', 'recursos-cheats-deadside'],
	['maps, zones, and combat points', 'maps, compounds, and loot zones'],
	['maps, zones and combat points', 'maps, compounds and loot zones'],
	['battle royale rounds and ranked matches', 'survival raids and squad sessions'],
	['heroes & ranked teams', 'squads & loot teams'],
	['hero markers', 'loot markers'],
	['combat zones', 'compound zones'],
	['maps and combat zones', 'maps and compound zones'],
	['near combat zones and choke points', 'near compounds and choke points'],
	['grapple routes', 'extract routes'],
	['Hero and weapon ESP', 'Player and loot ESP'],
	['hero ESP', 'player ESP'],
	['elimination worth the push', 'loot run worth the push'],
	['melee combat tools', 'tactical survival tools'],
	['24 Entertainment', 'Bad Pixel'],
	['melee combat', 'tactical combat'],
	['melee combat sessions', 'survival combat sessions'],
	['battle royale tips', 'survival tips'],
	['map zones', 'map compounds'],
	['in combat zones', 'in compound zones'],
	['NarakaCheatsSite', 'DeadsideCheatsSite'],
	['Naraka Intel', 'Deadside Intel'],
	['Naraka Bladepoint Cheats', 'Deadside Cheats'],
	['Naraka Bladepoint Hacks', 'Deadside Hacks'],
	['Naraka Bladepoint', 'Deadside'],
	['Naraka Cheats', 'Deadside Cheats'],
	['naraka cheats', 'deadside cheats'],
	['naraka cheat', 'deadside cheat'],
	['naraka hacks', 'deadside cheats'],
	['naraka hack', 'deadside cheat'],
	['Naraka ESP', 'Deadside ESP'],
	['Naraka Aimbot', 'Deadside Aimbot'],
	['naraka esp', 'deadside esp'],
	['naraka aimbot', 'deadside aimbot'],
	['naraka wallhack', 'deadside wallhack'],
	['naraka radar', 'deadside radar'],
	['Buy Naraka Cheats', 'Buy Deadside Cheats'],
	['what-are-naraka-cheats', 'what-are-deadside-cheats'],
	['are-naraka-cheats-undetected-in-2026', 'are-deadside-cheats-undetected-in-2026'],
	['battle-royale-rounds-and-ranked-sessions', 'survival-raids-and-squad-sessions'],
	['what-is-a-naraka-wallhack', 'what-is-a-deadside-wallhack'],
	['does-naraka-cheats-include-radar-hack', 'does-deadside-cheats-include-radar-hack'],
	['neac-anti-cheat-and-naraka-cheats', 'battleye-anti-cheat-and-deadside-cheats'],
	['buy-undetected-naraka-cheats-windows-pc', 'buy-undetected-deadside-cheats-windows-pc'],
	['naraka-soft-aim-review', 'deadside-soft-aim-review'],
	['naraka-esp-ranked-review', 'deadside-esp-survival-review'],
	['naraka-cloud-dma-review', 'deadside-cloud-dma-review'],
	['naraka-cheat-setup-review', 'deadside-cheat-setup-review'],
	['naraka-hero-esp-review', 'deadside-loot-esp-review'],
	['naraka-soft-aim-ranked-review', 'deadside-soft-aim-squad-review'],
	['naraka-radar-hack-review', 'deadside-radar-hack-review'],
	['naraka-neac-update-review', 'deadside-battleye-update-review'],
	['naraka-melee-soft-aim-review', 'deadside-sniper-soft-aim-review'],
	['xKrypt0_Naraka', 'xKrypt0_Deadside'],
	['vanLifeNaraka', 'vanLifeDeadside'],
	['naraka-screenshot', 'deadside-screenshot'],
	['naraka-cheats-logo', 'deadside-cheats-logo'],
	['naraka-cheats-hero', 'deadside-cheats-hero'],
	['naraka-hero-banner', 'deadside-hero-banner'],
	['naraka-hero-ghost', 'deadside-hero-ghost'],
	['naraka-hero-source', 'deadside-hero-source'],
	['naraka-esp-player-tags', 'deadside-esp-player-tags'],
	['naraka-wallhack-skeleton', 'deadside-wallhack-skeleton'],
	['naraka-aimbot-skeleton', 'deadside-aimbot-skeleton'],
	['naraka-aimbot-melee', 'deadside-aimbot-sniper'],
	['naraka-esp-radar', 'deadside-esp-radar'],
	['naraka-cheats-combat', 'deadside-cheats-combat'],
	['naraka-cheats-wallhack', 'deadside-cheats-wallhack'],
	['naraka-cheats-aimbot-view', 'deadside-cheats-aimbot-view'],
	['naraka-cheats-aimbot', 'deadside-cheats-aimbot'],
	['naraka-cheats-radar', 'deadside-cheats-radar'],
	['naraka-cheats-session', 'deadside-cheats-session'],
	['naraka-cheats-esp', 'deadside-cheats-esp'],
	['naraka-extract-fight', 'deadside-extract-fight'],
	['naraka-growth-run-combat', 'deadside-loot-run-combat'],
	['naraka-growth-run-mode', 'deadside-loot-run-mode'],
	['Naraka Features', 'Deadside Features'],
	['Naraka Status', 'Deadside Status'],
	['Naraka patches', 'Deadside patches'],
	['Naraka updates', 'Deadside updates'],
	['Naraka setup', 'Deadside setup'],
	['Naraka license', 'Deadside license'],
	['Naraka licenses', 'Deadside licenses'],
	['Naraka on PC', 'Deadside on PC'],
	['Naraka on Steam', 'Deadside on Steam'],
	['neac-bypass', 'battleye-bypass'],
	['NEAC bypass', 'BattlEye bypass'],
	['NEAC Bypass', 'BattlEye Bypass'],
	['NEAC maintenance', 'BattlEye maintenance'],
	['NEAC rebuilds', 'BattlEye rebuilds'],
	['NEAC update', 'BattlEye update'],
	['NEAC updates', 'BattlEye updates'],
	['NEAC patch', 'BattlEye patch'],
	['NEAC patches', 'BattlEye patches'],
	["'neac'", "'battleye'"],
	['| neac', '| battleye'],
	['neac-anti-cheat', 'battleye-anti-cheat'],
	['nc_locale', 'dc_locale'],
	['in Naraka', 'in Deadside'],
	['for Naraka', 'for Deadside'],
	['Naraka on', 'Deadside on'],
	['Naraka or', 'Deadside or'],
	["Naraka's", "Deadside's"],
	['Naraka ', 'Deadside '],
	['Naraka,', 'Deadside,'],
	['Naraka.', 'Deadside.'],
	['Naraka', 'Deadside'],
	['NARAKA', 'DEADSIDE'],
	['Bladepoint', 'Deadside'],
	['bladepoint', 'deadside'],
	['naraka', 'deadside'],
];

const TEXT_EXTENSIONS = new Set([
	'.ts', '.tsx', '.js', '.mjs', '.astro', '.css', '.json', '.toml', '.txt', '.md', '.mdc',
]);

const SKIP_DIRS = new Set(['node_modules', 'dist', '.git', '.astro', 'tmp', 'naraka-cheats-org']);
const SKIP_FILES = new Set([
	'adapt-warzone.mjs',
	'adapt-fortnite.mjs',
	'adapt-tarkov.mjs',
	'adapt-theisle.mjs',
	'adapt-rust.mjs',
	'adapt-finals.mjs',
	'adapt-valorant.mjs',
	'adapt-naraka.mjs',
	'adapt-deadside.mjs',
]);

async function walk(dir, files = []) {
	const entries = await readdir(dir, { withFileTypes: true });
	for (const entry of entries) {
		if (SKIP_DIRS.has(entry.name)) continue;
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			await walk(full, files);
		} else {
			files.push(full);
		}
	}
	return files;
}

function applyReplacements(content) {
	let result = content;
	for (const [from, to] of REPLACEMENTS) {
		if (from === to) continue;
		result = result.split(from).join(to);
	}
	return result;
}

async function transformTextFiles() {
	const files = await walk(ROOT);
	let changed = 0;
	for (const file of files) {
		const ext = path.extname(file);
		if (!TEXT_EXTENSIONS.has(ext)) continue;
		if (SKIP_FILES.has(path.basename(file))) continue;
		const original = await readFile(file, 'utf8');
		const updated = applyReplacements(original);
		if (updated !== original) {
			await writeFile(file, updated, 'utf8');
			changed++;
		}
	}
	console.log(`Transformed ${changed} text files`);
}

async function renamePageDirs() {
	for (const [from, to] of RENAME_PAGE_DIRS) {
		const src = path.join(ROOT, 'src', 'pages', from);
		const dest = path.join(ROOT, 'src', 'pages', to);
		try {
			await rename(src, dest);
			console.log(`Renamed page: ${from} → ${to}`);
		} catch (e) {
			console.warn(`Skip rename ${from}: ${e.message}`);
		}
	}
}

async function renameNarakaTs() {
	const from = path.join(ROOT, 'src', 'data', 'naraka.ts');
	const to = path.join(ROOT, 'src', 'data', 'deadside.ts');
	try {
		await rename(from, to);
		console.log('Renamed naraka.ts → deadside.ts');
	} catch (e) {
		console.warn(`naraka.ts rename: ${e.message}`);
	}
}

async function renameScripts() {
	const pairs = [
		['fetch-naraka-images.mjs', 'fetch-deadside-images.mjs'],
		['fetch-naraka-hero.mjs', 'fetch-deadside-hero.mjs'],
		['import-naraka-screenshots.mjs', 'import-deadside-screenshots.mjs'],
		['import-naraka-user-screenshots.mjs', 'import-deadside-user-screenshots.mjs'],
		['naraka-hack-overlays.mjs', 'deadside-hack-overlays.mjs'],
		['fix-naraka-copy.mjs', 'fix-deadside-copy.mjs'],
		['fix-naraka-content.mjs', 'fix-deadside-content.mjs'],
		['fix-naraka-lexicon.mjs', 'fix-deadside-lexicon.mjs'],
		['fix-naraka-path-redirects.mjs', 'fix-deadside-path-redirects.mjs'],
	];
	for (const [from, to] of pairs) {
		try {
			await rename(path.join(ROOT, 'scripts', from), path.join(ROOT, 'scripts', to));
			console.log(`Renamed script: ${from} → ${to}`);
		} catch (e) {
			console.warn(`Skip script rename ${from}: ${e.message}`);
		}
	}
}

async function updatePageAstroFiles() {
	const idMap = {
		'deadside-aimbot': 'deadside-aimbot',
		'deadside-esp': 'deadside-esp',
		'deadside-wallhack': 'wallhack',
		'deadside-radar-hack': 'radar',
		'undetected-deadside-cheats': 'undetected',
		'deadside-cheats-2026': 'cheats-2026',
		'battleye-bypass': 'battleye',
		'deadside-cheats': 'hacks',
		'deadside-cheat-download': 'cheat-download',
		'deadside-mod-menu': 'mod-menu',
		'deadside-soft-aim': 'soft-aim',
		'best-deadside-cheats': 'best-cheats',
		'deadside-aimbot-hack': 'aimbot-hack',
		'deadside-esp-hack': 'esp-hack',
		'deadside-unlock-all': 'unlock-all',
	};

	for (const [dir, pageId] of Object.entries(idMap)) {
		const file = path.join(ROOT, 'src', 'pages', dir, 'index.astro');
		try {
			const content = `---
import LocalizedPage from '../../components/LocalizedPage.astro';
---

<LocalizedPage locale="en" pageId="${pageId}" />
`;
			await writeFile(file, content, 'utf8');
		} catch {
			// ignore missing dirs
		}
	}
}

async function renameImages() {
	const imagesDir = path.join(ROOT, 'public', 'images');
	let files;
	try {
		files = await readdir(imagesDir);
	} catch {
		return;
	}
	for (const file of files) {
		if (!file.includes('naraka')) continue;
		const newName = file
			.replace(/naraka-cheats/g, 'deadside-cheats')
			.replace(/naraka/g, 'deadside');
		if (newName !== file) {
			try {
				await rename(path.join(imagesDir, file), path.join(imagesDir, newName));
				console.log(`Renamed image: ${file} → ${newName}`);
			} catch (e) {
				console.warn(`Skip image ${file}: ${e.message}`);
			}
		}
	}
}

async function main() {
	console.log('Adapting Naraka Cheats → Deadside Cheats (deadsidecheat.com)...\n');
	await renamePageDirs();
	await renameNarakaTs();
	await renameScripts();
	await transformTextFiles();
	await updatePageAstroFiles();
	await renameImages();
	console.log('\nDone. Next: update brand.ts, sync:brand, regenerate i18n/blog.');
}

main().catch((e) => {
	console.error(e);
	process.exit(1);
});
