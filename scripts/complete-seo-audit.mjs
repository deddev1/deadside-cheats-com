#!/usr/bin/env node
/**
 * Completes naraka-cheats SEO audit: add missing pages, fix leftovers, strip Zadeyo from meta.
 * Run: node scripts/complete-seo-audit.mjs
 */
import { readFile, writeFile, mkdir, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const NODE = 'C:\\Program Files\\nodejs\\node.exe';

const EXTRA_PAGES = [
	{ id: 'hacks', dir: 'naraka-cheats', pageId: 'hacks' },
	{ id: 'cheat-download', dir: 'naraka-cheat-download', pageId: 'cheat-download' },
	{ id: 'mod-menu', dir: 'naraka-mod-menu', pageId: 'mod-menu' },
	{ id: 'soft-aim', dir: 'naraka-soft-aim', pageId: 'soft-aim' },
	{ id: 'best-cheats', dir: 'best-naraka-cheats', pageId: 'best-cheats' },
	{ id: 'aimbot-hack', dir: 'naraka-aimbot-hack', pageId: 'aimbot-hack' },
	{ id: 'esp-hack', dir: 'naraka-esp-hack', pageId: 'esp-hack' },
	{ id: 'unlock-all', dir: 'naraka-unlock-all', pageId: 'unlock-all' },
];

const GLOBAL_REPLACEMENTS = [
	[/rust-rust/g, 'rust'],
	[/neac-bypass-rust/g, 'neac-bypass'],
	[/Naraka/g, 'Naraka's],
	[/Naraka/g, 'Naraka's],
	[/Call of Duty/g, 'Naraka's],
	[/Naraka Wallhack/g, 'Naraka Wallhack'],
	[/Naraka Radar Hack/g, 'Naraka Radar Hack'],
	[/Naraka Cheat Features/g, 'Naraka Cheat Features'],
	[/Naraka Cheat Pricing/g, 'Naraka Cheat Pricing'],
	[/Naraka Cheat Setup/g, 'Naraka Cheat Setup'],
	[/Naraka Cheat Status/g, 'Naraka Cheat Status'],
	[/Naraka Cheat Support/g, 'Naraka Cheat Support'],
	[/Naraka squad fight/g, 'Naraka squad fight'],
	[/Naraka pack builder/g, 'Naraka loadout builder'],
	[/Naraka store header/g, 'Naraka header'],
	[/Naraka wasteland combat/g, 'Naraka battle royale combat'],
	[/Naraka loadout builder/g, 'Naraka loadout builder'],
	[/Naraka pricing/g, 'Naraka pricing'],
	[/Naraka NEAC/g, 'Naraka NEAC'],
	[/on Naraka/g, 'on Naraka's],
	[/for Naraka/g, 'for Naraka'],
	[/Naraka guides/g, 'Naraka guides'],
	[/Naraka guide/g, 'Naraka guide'],
	[/Naraka hileleri/g, 'Naraka hileleri'],
	[/Naraka hile/g, 'Naraka hile'],
	[/Naraka hileleri/g, 'Naraka hileleri'],
	[/cheatów Naraka/g, 'cheatów Naraka's],
	[/cheat Naraka/g, 'cheat Naraka's],
	[/cheats Naraka/g, 'cheats Naraka's],
	[/trucos Naraka/g, 'trucos Naraka's],
	[/triche Naraka/g, 'triche Naraka's],
	[/trucchi Naraka/g, 'trucchi Naraka's],
	[/Wallhack Naraka/g, 'Naraka Wallhack'],
	[/cheat Naraka undetected/g, 'cheat Naraka undetected'],
	[/cheats Naraka undetected/g, 'cheats Naraka undetected'],
	[/Verdansk beams/g, 'long-range AR beams'],
	[/farming run room clears/g, 'close-quarters room clears'],
	[/Verdansk and Urzikstan/g, 'Verdansk and farming run'],
	[/Verdansk, Urzikstan/g, 'Verdansk, farming run'],
	[/session and farming run/g, 'session and farming run'],
	[/Activision's anti-cheat/g, "Epic Games' anti-cheat"],
	[/Activision anti-cheat/g, 'Epic Games anti-cheat'],
	[/Activision ships/g, 'Epic Games ships'],
	[/Activision security/g, 'Epic Games security'],
	[/Activision bans/g, 'Epic Games bans'],
	[/Activision/g, 'Epic Games'],
	[/eac/gi, 'neac'],
	[/NEAC/g, 'NEAC'],
	[/naraka-cheats/g, 'naraka-cheats'],
	[/the-rust/g, 'rust'],
	[/Undetected Wallhack for Call of Duty/g, 'Undetected Wallhack for Naraka'],
	[/How ESP wallhack, radar, and Aimbot rebuild after Call of Duty anti-cheat/g,
		'How ESP wallhack, radar, and Aimbot rebuild after Naraka anti-cheat'],
];

/** Remove Zadeyo from meta description/title strings only */
function stripZadeyoFromMeta(text) {
	return text
		.replace(/\s*[—–-]\s*checkout via Zadeyo\.?/gi, '.')
		.replace(/\s*[—–-]\s*checkout en Zadeyo\.?/gi, '.')
		.replace(/\s*[—–-]\s*checkout via Zadeyo\.?/gi, '.')
		.replace(/\s*with Zadeyo checkout\.?/gi, '.')
		.replace(/\s*via Zadeyo checkout\.?/gi, '.')
		.replace(/\s*Checkout via Zadeyo\.?/gi, '')
		.replace(/\s*Zadeyo checkout,?\s*/gi, ' ')
		.replace(/\s*Zadeyo delivery\.?/gi, 'instant digital delivery.')
		.replace(/\s*and Zadeyo delivery\.?/gi, ' and instant digital delivery.')
		.replace(/\|\s*Instant Zadeyo Delivery/g, '| Instant Digital Delivery')
		.replace(/Buy on Zadeyo/g, 'Buy Naraka Cheats')
		.replace(/\s{2,}/g, ' ')
		.trim();
}

async function walkFiles(dir, exts, files = []) {
	const entries = await import('node:fs/promises').then((fs) => fs.readdir(dir, { withFileTypes: true }));
	for (const e of entries) {
		if (e.name === 'node_modules' || e.name === 'dist' || e.name === '.git') continue;
		const full = path.join(dir, e.name);
		if (e.isDirectory()) await walkFiles(full, exts, files);
		else if (exts.some((x) => e.name.endsWith(x))) files.push(full);
	}
	return files;
}

async function applyGlobalFixes() {
	const targets = await walkFiles(path.join(ROOT, 'src'), ['.ts', '.astro']);
	targets.push(
		path.join(ROOT, 'scripts', 'i18n-data', 'pages-en.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'pages-i18n.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'ui-strings-part1.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'ui-strings-part2.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'phrases.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'gallery-ui.ts'),
		path.join(ROOT, 'src', 'data', 'i18n', 'gallery-ui.ts'),
		path.join(ROOT, 'functions', '_middleware.js'),
	);

	for (const file of targets) {
		try {
			await access(file);
		} catch {
			continue;
		}
		let content = await readFile(file, 'utf8');
		const original = content;
		for (const [pattern, replacement] of GLOBAL_REPLACEMENTS) {
			content = content.replace(pattern, replacement);
		}
		if (file.endsWith('pages-en.mjs')) {
			// Strip Zadeyo from description: and title: lines
			content = content.replace(/(description:\s*['"])([^'"]+)(['"])/g, (_, pre, body, post) =>
				pre + stripZadeyoFromMeta(body) + post,
			);
			content = content.replace(/(title:\s*['"])([^'"]+)(['"])/g, (_, pre, body, post) =>
				pre + stripZadeyoFromMeta(body) + post,
			);
		}
		if (content !== original) {
			await writeFile(file, content, 'utf8');
			console.log(`Fixed: ${path.relative(ROOT, file)}`);
		}
	}
}

async function createExtraPages() {
	const template = `---
import LocalizedPage from '../../components/LocalizedPage.astro';
---

<LocalizedPage locale="en" pageId="PAGE_ID" />
`;
	for (const page of EXTRA_PAGES) {
		const dir = path.join(ROOT, 'src', 'pages', page.dir);
		await mkdir(dir, { recursive: true });
		const file = path.join(dir, 'index.astro');
		try {
			await access(file);
		} catch {
			await writeFile(file, template.replace('PAGE_ID', page.pageId), 'utf8');
			console.log(`Created page: src/pages/${page.dir}/index.astro`);
		}
	}
}

async function fixLocalesBlogUi() {
	const file = path.join(ROOT, 'src', 'data', 'i18n', 'locales.ts');
	let content = await readFile(file, 'utf8');
	content = content.replace(/Naraka guides/g, 'Naraka guides');
	content = content.replace(/Naraka guide/g, 'Naraka guide');
	content = content.replace(/Naraka hileleri/g, 'Naraka hileleri');
	content = content.replace(/Naraka hile/g, 'Naraka hile');
	content = content.replace(/cheat Naraka/g, 'cheat Naraka's);
	content = content.replace(/cheats Naraka/g, 'cheats Naraka's);
	content = content.replace(/trucos Naraka/g, 'trucos Naraka's);
	content = content.replace(/triche Naraka/g, 'triche Naraka's);
	content = content.replace(/trucchi Naraka/g, 'trucchi Naraka's);
	content = content.replace(/cheatów Naraka/g, 'cheatów Naraka's);
	content = content.replace(/читов Naraka/g, 'читов Naraka's);
	content = content.replace(/читів Naraka/g, 'читів Naraka's);
	content = content.replace(/Narakaチート/g, 'Narakaチート');
	content = content.replace(/Naraka 치트/g, 'Naraka 치트');
	content = content.replace(/Naraka作弊/g, 'Naraka作弊');
	content = content.replace(/Naraka rehberleri/g, 'Naraka rehberleri');
	content = content.replace(/Naraka gidsen/g, 'Naraka gidsen');
	content = content.replace(/Naraka průvodce/g, 'Naraka průvodce');
	content = content.replace(/Naraka guider/g, 'Naraka guider');
	content = content.replace(/Naraka related/g, 'Naraka related');
	content = content.replace(/Naraka ガイド/g, 'Naraka ガイド');
	content = content.replace(/Naraka 가이드/g, 'Naraka 가이드');
	content = content.replace(/Naraka指南/g, 'Naraka指南');
	content = content.replace(/Naraka गाइड/g, 'Naraka गाइड');
	content = content.replace(/Naraka panduan/g, 'Naraka panduan');
	content = content.replace(/Naraka คู่มือ/g, 'Naraka คู่มือ');
	content = content.replace(/Naraka hướng dẫn/g, 'Naraka hướng dẫn');
	await writeFile(file, content, 'utf8');
	console.log('Fixed locales.ts blogUi');
}

console.log('=== Naraka Cheats SEO completion ===\n');
await applyGlobalFixes();
await createExtraPages();
await fixLocalesBlogUi();
console.log('\nDone. Next: update routing.ts manually, then run generate:i18n, fetch:images, build:validate');
