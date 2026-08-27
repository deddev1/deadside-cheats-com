#!/usr/bin/env node
/**
 * Migrate URL slugs from naraka-cheats → naraka-cheats (paths + sitemaps).
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
	'naraka-cheats-org-audit',
]);
const SKIP_FILES = new Set(['package-lock.json', 'migrate-cheats-urls-to-hacks.mjs']);

/** Ordered — longest / most specific first. Image asset names are excluded via guard. */
const SLUG_REPLACEMENTS = [
	['undetected-naraka-cheats-eac', 'undetected-naraka-cheats-eac'],
	['undetected-naraka-cheats', 'undetected-naraka-cheats'],
	['unentdeckte-naraka-cheats', 'unentdeckte-naraka-cheats'],
	['buy-undetected-naraka-cheats-windows-pc', 'buy-undetected-naraka-cheats-windows-pc'],
	['neac-anti-cheat-and-naraka-cheats', 'neac-anti-cheat-and-naraka-cheats'],
	['are-naraka-cheats-undetected-in-2026', 'are-naraka-cheats-undetected-in-2026'],
	['what-are-naraka-cheats', 'what-are-naraka-cheats'],
	['does-naraka-cheats-include-radar-hack', 'does-naraka-cheats-include-radar-hack'],
	['naraka-cheats-vs-ghostware-features-pricing', 'naraka-cheats-vs-ghostware-features-pricing'],
	['naraka-cheats-vs-cheatvault-comparison', 'naraka-cheats-vs-cheatvault-comparison'],
	['elitefn-vs-naraka-cheats-two-week-test', 'elitefn-vs-naraka-cheats-two-week-test'],
	['naraka-cheats-complete-guide-2026', 'naraka-cheats-complete-guide-2026'],
	['naraka-cheats-2026-whats-new', 'naraka-cheats-2026-whats-new'],
	['naraka-cheats-buyers-guide', 'naraka-cheats-buyers-guide'],
	['best-naraka-cheats', 'best-naraka-cheats'],
	['beste-naraka-cheats', 'beste-naraka-cheats'],
	['basta-naraka-cheats', 'basta-naraka-cheats'],
	['nejlepsi-naraka-cheats', 'nejlepsi-naraka-cheats'],
	['naraka-cheats-2026', 'naraka-cheats-2026'],
	['naraka-cheats-funktionen', 'naraka-cheats-funktionen'],
	['naraka-cheats-functies', 'naraka-cheats-functies'],
	['naraka-cheats-funkce', 'naraka-cheats-funkce'],
	['naraka-cheats-funktioner', 'naraka-cheats-funktioner'],
	['naraka-cheats-features', 'naraka-cheats-features'],
	['naraka-cheats-preise', 'naraka-cheats-preise'],
	['naraka-cheats-prijzen', 'naraka-cheats-prijzen'],
	['naraka-cheats-priser', 'naraka-cheats-priser'],
	['naraka-cheats-pricing', 'naraka-cheats-pricing'],
	['naraka-cheats-ceny', 'naraka-cheats-ceny'],
	['naraka-cheats-installation', 'naraka-cheats-installation'],
	['naraka-cheats-installatie', 'naraka-cheats-installatie'],
	['naraka-cheats-instalace', 'naraka-cheats-instalace'],
	['naraka-cheats-setup', 'naraka-cheats-setup'],
	['naraka-cheats-updates', 'naraka-cheats-updates'],
	['naraka-cheats-uppdateringar', 'naraka-cheats-uppdateringar'],
	['naraka-cheats-aktualizace', 'naraka-cheats-aktualizace'],
	['naraka-cheats-faq', 'naraka-cheats-faq'],
	['naraka-cheats-support', 'naraka-cheats-support'],
	['naraka-cheats-podpora', 'naraka-cheats-podpora'],
	['niewykrywalne-cheats-naraka', 'niewykrywalne-cheats-naraka'],
	['najlepsze-cheats-naraka', 'najlepsze-hacks-valorant'],
	['melhores-cheats-naraka', 'melhores-hacks-valorant'],
	['cele-mai-bune-cheats-naraka', 'cele-mai-bune-hacks-valorant'],
	['cheats-naraka-indetectaveis', 'cheats-naraka-indetectaveis'],
	['cheats-naraka-nedetectabile', 'cheats-naraka-nedetectabile'],
	['cheats-naraka-2026', 'hacks-valorant-2026'],
	['hacks-cheats-naraka', 'hacks-valorant'],
	['faq-cheats-naraka', 'faq-hacks-valorant'],
	['functii-cheats-naraka', 'functii-hacks-valorant'],
	['preturi-cheats-naraka', 'preturi-hacks-valorant'],
	['actualizari-cheats-naraka', 'actualizari-hacks-valorant'],
	['instalare-cheats-naraka', 'instalare-hacks-valorant'],
	['suport-cheats-naraka', 'suport-hacks-valorant'],
	['recursos-cheats-naraka', 'recursos-cheats-naraka'],
	['precos-cheats-naraka', 'precos-hacks-valorant'],
	['atualizacoes-cheats-naraka', 'atualizacoes-hacks-valorant'],
	['instalacao-cheats-naraka', 'instalacao-hacks-valorant'],
	['suporte-cheats-naraka', 'suporte-hacks-valorant'],
	['download-cheats-naraka', 'download-hacks-valorant'],
	['menu-mod-cheats-naraka', 'menu-mod-hacks-valorant'],
	['meniu-mod-cheats-naraka', 'meniu-mod-hacks-valorant'],
	['soft-aim-cheats-naraka', 'soft-aim-hacks-valorant'],
	['aimbot-hack-cheats-naraka', 'aimbot-hack-hacks-valorant'],
	['esp-hack-cheats-naraka', 'esp-hack-hacks-valorant'],
	['unlock-all-cheats-naraka', 'unlock-all-hacks-valorant'],
	['wallhack-cheats-naraka', 'wallhack-hacks-valorant'],
	['radar-hack-cheats-naraka', 'radar-hack-hacks-valorant'],
	['descarcare-cheats-naraka', 'descarcare-hacks-valorant'],
	['cheats-naraka-esp', 'hacks-naraka-esp'],
	['cheats-naraka-aimbot', 'hacks-naraka-aimbot'],
	['neac-bypass-cheats', 'neac-bypass-hacks'],
	['/naraka-cheats/', '/naraka-cheats/'],
	['/naraka-cheats', '/naraka-cheats'],
	["'naraka-cheats'", "'naraka-cheats'"],
	['"naraka-cheats"', '"naraka-cheats"'],
];

const IMAGE_ASSET_PREFIX = '/images/naraka-cheats';

function applySlugReplacements(text) {
	let out = text;
	for (const [from, to] of SLUG_REPLACEMENTS) {
		if (!out.includes(from)) continue;
		out = out
			.split('\n')
			.map((line) => {
				// Never rewrite static image asset filenames.
				if (line.includes('/images/naraka-cheats')) {
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
	['src/pages/naraka-cheats', 'src/pages/naraka-cheats'],
	['src/pages/best-naraka-cheats', 'src/pages/best-naraka-cheats'],
	['src/pages/undetected-naraka-cheats', 'src/pages/undetected-naraka-cheats'],
	['src/pages/naraka-cheats-2026', 'src/pages/naraka-cheats-2026'],
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
	"if (withSlash === '/naraka-cheats/' || withSlash === '/naraka-cheats/')",
	"if (withSlash === '/naraka-cheats/' || withSlash === '/naraka-cheats/')",
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
