/**
 * Import Naraka cheat screenshots from Supabase public storage.
 * Writes crawl URLs: /images/naraka-screenshot-01.webp … 08.webp
 * plus -480w / -960w responsive variants. Does not touch hero assets.
 */
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const BASE =
	'https://boqgsoiwnpbisvrxulbe.supabase.co/storage/v1/object/public/valo/valo%20cheats/';

/** User-provided Naraka screenshots (Aug 2026). */
const SOURCE_URLS = [
	`${BASE}Screenshot%202026-08-13%20185425.png`,
	`${BASE}Screenshot%202026-08-13%20185442.png`,
	`${BASE}Screenshot%202026-08-13%20185513.png`,
	`${BASE}Screenshot%202026-08-13%20185527.png`,
	`${BASE}Screenshot%202026-08-13%20185540.png`,
	`${BASE}Screenshot%202026-08-13%20185621.png`,
	`${BASE}Screenshot%202026-08-13%20185635.png`,
	`${BASE}Screenshot%202026-08-13%20185646.png`,
];

const SCREENSHOT_COUNT = SOURCE_URLS.length;

const imagesDir = path.resolve('public/images');
const tmpDir = path.resolve('tmp/naraka-screenshots/sources');

const CONTENT_WIDTHS = [480, 960];
const WEBP = { quality: 82, effort: 6, smartSubsample: true };

const LEGACY_MAP = {
	'naraka-screenshot-01': [
		'naraka-cheats-esp.webp',
		'naraka-esp-player-tags.webp',
	],
	'naraka-screenshot-02': ['naraka-cheats-wallhack.webp', 'naraka-cheats-session.webp'],
	'naraka-screenshot-03': ['naraka-cheats-aimbot.webp', 'naraka-cheats-combat.webp'],
	'naraka-screenshot-04': [
		'naraka-cheats-aimbot-view.webp',
		'naraka-aimbot-skeleton.webp',
		'naraka-aimbot-sniper.webp',
	],
	'naraka-screenshot-05': ['naraka-cheats-radar.webp', 'naraka-esp-radar.webp'],
};

async function fetchSource(url, index) {
	const res = await fetch(url, {
		headers: { 'User-Agent': 'Mozilla/5.0 (compatible; NarakaCheatsSite/1.0)' },
	});
	if (!res.ok) throw new Error(`Download failed (${index + 1}): HTTP ${res.status} — ${url}`);
	const buf = Buffer.from(await res.arrayBuffer());
	const file = path.join(tmpDir, `source-${String(index + 1).padStart(2, '0')}.png`);
	await writeFile(file, buf);
	return file;
}

async function encodeWebp(input, width, options = WEBP) {
	const meta = await sharp(input).metadata();
	const nativeWidth = meta.width ?? width;
	const targetWidth = Math.min(width, nativeWidth);
	const height = Math.round(((meta.height ?? 595) / nativeWidth) * targetWidth);
	return sharp(input)
		.resize(targetWidth, height, { fit: 'inside', withoutEnlargement: true })
		.webp(options)
		.toBuffer();
}

async function writeScreenshotSet(pngPath, baseName) {
	const outputs = [];
	let canonical = null;

	for (const width of CONTENT_WIDTHS) {
		const file = `${baseName}-${width}w.webp`;
		const webp = await encodeWebp(pngPath, width);
		await writeFile(path.join(imagesDir, file), webp);
		outputs.push({ file, bytes: webp.length });
	}

	canonical = await encodeWebp(pngPath, 960);
	await writeFile(path.join(imagesDir, `${baseName}.webp`), canonical);
	outputs.push({ file: `${baseName}.webp`, bytes: canonical.length });

	return { outputs, canonical };
}

await mkdir(imagesDir, { recursive: true });
await mkdir(tmpDir, { recursive: true });

console.log(`Downloading ${SOURCE_URLS.length} Supabase screenshots…`);
const sourceFiles = [];
for (let i = 0; i < SOURCE_URLS.length; i += 1) {
	console.log(`  ↓ ${i + 1}/${SOURCE_URLS.length}`);
	sourceFiles.push(await fetchSource(SOURCE_URLS[i], i));
}

let totalBytes = 0;

for (let n = 1; n <= SCREENSHOT_COUNT; n += 1) {
	const num = String(n).padStart(2, '0');
	const base = `naraka-screenshot-${num}`;
	const png = sourceFiles[n - 1];

	console.log(`Processing ${base}…`);
	const { outputs, canonical } = await writeScreenshotSet(png, base);
	for (const { file, bytes } of outputs) {
		totalBytes += bytes;
		console.log(`  ✓ ${file} (${Math.round(bytes / 1024)}KB)`);
	}

	for (const name of LEGACY_MAP[base] ?? []) {
		await writeFile(path.join(imagesDir, name), canonical);
		console.log(`  ✓ ${name} (alias)`);
	}
}

console.log(
	`\nDone — ${SCREENSHOT_COUNT} canonical URLs + responsive variants (~${Math.round(totalBytes / 1024)}KB webp)`,
);
console.log('Hero assets unchanged.');
