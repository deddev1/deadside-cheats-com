#!/usr/bin/env node
/**
 * Migrate URL slugs from deadside-cheats → deadside-cheats (paths + sitemaps).
 * Generates 301 redirects in functions/path-redirects.json from old routing slugs.
 * Run: node scripts/migrate-cheats-urls-to-hacks.mjs
 */
import { readFile, writeFile, readdir, rename, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ROUTING = path.join(ROOT, 'src/data/i18n/routing.ts');
const PATH_REDIRECTS = path.join(ROOT, 'functions/path-redirects.json');

const SKIP_DIRS = new Set([
	'node_modules',
	'dist',
	'.git',
	'tmp',
	'.astro',
	'the-finals-cheats-org',
	'deadside-cheats-org-audit',
]);
const SKIP_FILES = new Set(['package-lock.json', 'migrate-cheats-urls-to-hacks.mjs']);

/** Ordered — longest / most specific first. Image asset names are excluded via guard. */
const SLUG_REPLACEMENTS = [
	['undetected-deadside-cheats-eac', 'undetected-deadside-cheats-eac'],
	['undetected-deadside-cheats', 'undetected-deadside-cheats'],
	['unentdeckte-deadside-cheats', 'unentdeckte-deadside-cheats'],
	['buy-undetected-deadside-cheats-windows-pc', 'buy-undetected-deadside-cheats-windows-pc'],
	['battleye-anti-cheat-and-deadside-cheats', 'battleye-anti-cheat-and-deadside-cheats'],
	['are-deadside-cheats-undetected-in-2026', 'are-deadside-cheats-undetected-in-2026'],
	['what-are-deadside-cheats', 'what-are-deadside-cheats'],
	['does-deadside-cheats-include-radar-hack', 'does-deadside-cheats-include-radar-hack'],
	['deadside-cheats-vs-ghostware-features-pricing', 'deadside-cheats-vs-ghostware-features-pricing'],
	['deadside-cheats-vs-cheatvault-comparison', 'deadside-cheats-vs-cheatvault-comparison'],
	['elitefn-vs-deadside-cheats-two-week-test', 'elitefn-vs-deadside-cheats-two-week-test'],
	['deadside-cheats-complete-guide-2026', 'deadside-cheats-complete-guide-2026'],
	['deadside-cheats-2026-whats-new', 'deadside-cheats-2026-whats-new'],
	['deadside-cheats-buyers-guide', 'deadside-cheats-buyers-guide'],
	['best-deadside-cheats', 'best-deadside-cheats'],
	['beste-deadside-cheats', 'beste-deadside-cheats'],
	['basta-deadside-cheats', 'basta-deadside-cheats'],
	['nejlepsi-deadside-cheats', 'nejlepsi-deadside-cheats'],
	['deadside-cheats-2026', 'deadside-cheats-2026'],
	['deadside-cheats-funktionen', 'deadside-cheats-funktionen'],
	['deadside-cheats-functies', 'deadside-cheats-functies'],
	['deadside-cheats-funkce', 'deadside-cheats-funkce'],
	['deadside-cheats-funktioner', 'deadside-cheats-funktioner'],
	['deadside-cheats-features', 'deadside-cheats-features'],
	['deadside-cheats-preise', 'deadside-cheats-preise'],
	['deadside-cheats-prijzen', 'deadside-cheats-prijzen'],
	['deadside-cheats-priser', 'deadside-cheats-priser'],
	['deadside-cheats-pricing', 'deadside-cheats-pricing'],
	['deadside-cheats-ceny', 'deadside-cheats-ceny'],
	['deadside-cheats-installation', 'deadside-cheats-installation'],
	['deadside-cheats-installatie', 'deadside-cheats-installatie'],
	['deadside-cheats-instalace', 'deadside-cheats-instalace'],
	['deadside-cheats-setup', 'deadside-cheats-setup'],
	['deadside-cheats-updates', 'deadside-cheats-updates'],
	['deadside-cheats-uppdateringar', 'deadside-cheats-uppdateringar'],
	['deadside-cheats-aktualizace', 'deadside-cheats-aktualizace'],
	['deadside-cheats-faq', 'deadside-cheats-faq'],
	['deadside-cheats-support', 'deadside-cheats-support'],
	['deadside-cheats-podpora', 'deadside-cheats-podpora'],
	['niewykrywalne-cheats-deadside', 'niewykrywalne-cheats-deadside'],
	['najlepsze-cheats-deadside', 'najlepsze-hacks-valorant'],
	['melhores-cheats-deadside', 'melhores-hacks-valorant'],
	['cele-mai-bune-cheats-deadside', 'cele-mai-bune-hacks-valorant'],
	['cheats-deadside-indetectaveis', 'cheats-deadside-indetectaveis'],
	['cheats-deadside-nedetectabile', 'cheats-deadside-nedetectabile'],
	['cheats-deadside-2026', 'hacks-valorant-2026'],
	['hacks-cheats-deadside', 'hacks-valorant'],
	['faq-cheats-deadside', 'faq-hacks-valorant'],
	['functii-cheats-deadside', 'functii-hacks-valorant'],
	['preturi-cheats-deadside', 'preturi-hacks-valorant'],
	['actualizari-cheats-deadside', 'actualizari-hacks-valorant'],
	['instalare-cheats-deadside', 'instalare-hacks-valorant'],
	['suport-cheats-deadside', 'suport-hacks-valorant'],
	['recursos-cheats-deadside', 'recursos-cheats-deadside'],
	['precos-cheats-deadside', 'precos-hacks-valorant'],
	['atualizacoes-cheats-deadside', 'atualizacoes-hacks-valorant'],
	['instalacao-cheats-deadside', 'instalacao-hacks-valorant'],
	['suporte-cheats-deadside', 'suporte-hacks-valorant'],
	['download-cheats-deadside', 'download-hacks-valorant'],
	['menu-mod-cheats-deadside', 'menu-mod-hacks-valorant'],
	['meniu-mod-cheats-deadside', 'meniu-mod-hacks-valorant'],
	['soft-aim-cheats-deadside', 'soft-aim-hacks-valorant'],
	['aimbot-hack-cheats-deadside', 'aimbot-hack-hacks-valorant'],
	['esp-hack-cheats-deadside', 'esp-hack-hacks-valorant'],
	['unlock-all-cheats-deadside', 'unlock-all-hacks-valorant'],
	['wallhack-cheats-deadside', 'wallhack-hacks-valorant'],
	['radar-hack-cheats-deadside', 'radar-hack-hacks-valorant'],
	['descarcare-cheats-deadside', 'descarcare-hacks-valorant'],
	['cheats-deadside-esp', 'hacks-deadside-esp'],
	['cheats-deadside-aimbot', 'hacks-deadside-aimbot'],
	['battleye-bypass-cheats', 'battleye-bypass-hacks'],
	['/deadside-cheats/', '/deadside-cheats/'],
	['/deadside-cheats', '/deadside-cheats'],
	["'deadside-cheats'", "'deadside-cheats'"],
	['"deadside-cheats"', '"deadside-cheats"'],
];

const IMAGE_ASSET_PREFIX = '/images/deadside-cheats';

function applySlugReplacements(text) {
	let out = text;
	for (const [from, to] of SLUG_REPLACEMENTS) {
		if (!out.includes(from)) continue;
		out = out
			.split('\n')
			.map((line) => {
				// Never rewrite static image asset filenames.
				if (line.includes('/images/deadside-cheats')) {
					return line;
				}
				return line.split(from).join(to);
			})
			.join('\n');
	}
	return out;
}

function parseEnglishPaths(src) {
	const block = src.match(/export const englishPaths[\s\S]*?=\s*\{([\s\S]*?)\n\};/);
	if (!block) throw new Error('englishPaths block not found');
	/** @type {Record<string, string>} */
	const paths = {};
	for (const row of block[1].matchAll(/\t(?:'([^']+)'|(\w+)):\s*'([^']*)',/g)) {
		paths[row[1] ?? row[2]] = row[3];
	}
	return paths;
}

function parseLocalizedSlugs(src) {
	const localized = src.slice(src.indexOf('export const localizedSlugs'));
	/** @type {Record<string, Record<string, string>>} */
	const slugs = {};
	for (const block of localized.matchAll(/\t(?:'([^']+)'|(\w+)):\s*\{([\s\S]*?)\n\t\},/g)) {
		const pageId = block[1] ?? block[2];
		slugs[pageId] = {};
		for (const row of block[3].matchAll(/\t(\w+):\s*'([^']*)',/g)) {
			slugs[pageId][row[1]] = row[2];
		}
	}
	return slugs;
}

function localePath(locale, slug) {
	return slug ? `/${locale}/${slug}/` : `/${locale}/`;
}

function addRedirectPair(map, fromPath, toPath) {
	if (!fromPath || !toPath || fromPath === toPath) return;
	map[fromPath] = toPath;
	const noSlash = fromPath.replace(/\/$/, '');
	if (noSlash !== fromPath) map[noSlash] = toPath;
}

async function walk(dir, files = []) {
	const entries = await readdir(dir, { withFileTypes: true });
	for (const entry of entries) {
		if (SKIP_DIRS.has(entry.name)) continue;
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) await walk(full, files);
		else files.push(full);
	}
	return files;
}

function shouldProcess(file) {
	const rel = path.relative(ROOT, file);
	if (SKIP_FILES.has(path.basename(file))) return false;
	if (rel.startsWith('public/images/')) return false;
	if (/\.(png|jpg|jpeg|webp|gif|ico|woff2?|mp4)$/i.test(file)) return false;
	return true;
}

const DIR_RENAMES = [
	['src/pages/deadside-cheats', 'src/pages/deadside-cheats'],
	['src/pages/best-deadside-cheats', 'src/pages/best-deadside-cheats'],
	['src/pages/undetected-deadside-cheats', 'src/pages/undetected-deadside-cheats'],
	['src/pages/deadside-cheats-2026', 'src/pages/deadside-cheats-2026'],
];

// --- Parse routing before migration ---
const routingBefore = await readFile(ROUTING, 'utf8');
const englishBefore = parseEnglishPaths(routingBefore);
const slugsBefore = parseLocalizedSlugs(routingBefore);

// --- Apply text replacements across repo ---
let changed = 0;
const files = await walk(ROOT);
for (const file of files) {
	if (!shouldProcess(file)) continue;
	const original = await readFile(file, 'utf8');
	const updated = applySlugReplacements(original);
	if (updated !== original) {
		await writeFile(file, updated, 'utf8');
		changed++;
	}
}

// Fix duplicate check in routing.ts
let routing = await readFile(ROUTING, 'utf8');
routing = routing.replace(
	"if (withSlash === '/deadside-cheats/' || withSlash === '/deadside-cheats/')",
	"if (withSlash === '/deadside-cheats/' || withSlash === '/deadside-cheats/')",
);
await writeFile(ROUTING, routing, 'utf8');

// --- Rename page directories ---
for (const [fromRel, toRel] of DIR_RENAMES) {
	const from = path.join(ROOT, fromRel);
	const to = path.join(ROOT, toRel);
	try {
		await access(from);
		await rename(from, to);
		console.log(`renamed ${fromRel} → ${toRel}`);
	} catch {
		// already migrated
	}
}

// --- Build redirects from slug diff ---
const routingAfter = await readFile(ROUTING, 'utf8');
const englishAfter = parseEnglishPaths(routingAfter);
const slugsAfter = parseLocalizedSlugs(routingAfter);

const existingRedirects = JSON.parse(await readFile(PATH_REDIRECTS, 'utf8'));
const newRedirects = { ...existingRedirects };

for (const [pageId, oldPath] of Object.entries(englishBefore)) {
	const newPath = englishAfter[pageId];
	if (oldPath && newPath && oldPath !== newPath) {
		addRedirectPair(newRedirects, oldPath.replace(/\/$/, ''), newPath);
		addRedirectPair(newRedirects, oldPath, newPath);
	}
}

for (const [pageId, localeMap] of Object.entries(slugsBefore)) {
	const afterMap = slugsAfter[pageId] ?? {};
	for (const [locale, oldSlug] of Object.entries(localeMap)) {
		const newSlug = afterMap[locale];
		if (oldSlug === newSlug) continue;
		const from = localePath(locale, oldSlug);
		const to = localePath(locale, newSlug);
		addRedirectPair(newRedirects, from, to);
	}
}

await writeFile(PATH_REDIRECTS, `${JSON.stringify(newRedirects, null, 2)}\n`);

console.log(`\nmigrate-cheats-urls-to-hacks: ${changed} file(s) updated`);
console.log(
	`Added/updated ${Object.keys(newRedirects).length - Object.keys(existingRedirects).length} redirect entries in path-redirects.json`,
);
