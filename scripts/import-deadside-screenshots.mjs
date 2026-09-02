/**
 * Import Deadside cheat screenshots from Supabase public storage.
 * Writes crawl URLs: /images/deadside-screenshot-01.webp … 12.webp
 * plus -480w / -960w responsive variants. Does not touch hero assets.
 */
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const BASE =
	'https://boqgsoiwnpbisvrxulbe.supabase.co/storage/v1/object/public/deadside/';

/** User-provided Deadside screenshots (Sep 2026). */
const SOURCE_URLS = [
	`${BASE}Screenshot%202026-09-01%20084206.png`,
	`${BASE}Screenshot%202026-09-01%20084240.png`,
	`${BASE}Screenshot%202026-09-01%20084255.png`,
	`${BASE}Screenshot%202026-09-01%20084304.png`,
	`${BASE}Screenshot%202026-09-01%20084313.png`,
	`${BASE}Screenshot%202026-09-01%20084335.png`,
	`${BASE}Screenshot%202026-09-01%20084342.png`,
	`${BASE}Screenshot%202026-09-01%20084428.png`,
	`${BASE}Screenshot%202026-09-01%20084612.png`,
	`${BASE}Screenshot%202026-09-01%20084621.png`,
	`${BASE}Screenshot%202026-09-01%20084629.png`,
	`${BASE}Screenshot%202026-09-01%20084636.png`,
];

const SCREENSHOT_COUNT = SOURCE_URLS.length;

const imagesDir = path.resolve('public/images');
const tmpDir = path.resolve('tmp/deadside-screenshots/sources');

const CONTENT_WIDTHS = [480, 960];
const WEBP = { quality: 82, effort: 6, smartSubsample: true };
/** Screenshots that exceed 100 KB at quality 82 — encode slightly lower. */
const HEAVY_BASES = new Set(['deadside-screenshot-03', 'deadside-screenshot-05']);
const HEAVY_WEBP = { quality: 75, effort: 6, smartSubsample: true };

const LEGACY_MAP = {
	'deadside-screenshot-01': [
		'deadside-cheats-esp.webp',
		'deadside-esp-player-tags.webp',
	],
	'deadside-screenshot-02': ['deadside-cheats-wallhack.webp', 'deadside-cheats-session.webp'],
	'deadside-screenshot-03': ['deadside-cheats-aimbot.webp', 'deadside-cheats-combat.webp'],
	'deadside-screenshot-04': [
		'deadside-cheats-aimbot-view.webp',
		'deadside-aimbot-skeleton.webp',
		'deadside-aimbot-sniper.webp',
	],
	'deadside-screenshot-05': ['deadside-cheats-radar.webp', 'deadside-esp-radar.webp'],
};

async function fetchSource(url, index) {
	const res = await fetch(url, {
		headers: { 'User-Agent': 'Mozilla/5.0 (compatible; DeadsideCheatsSite/1.0)' },
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
	const webpOptions = HEAVY_BASES.has(baseName) ? HEAVY_WEBP : WEBP;

	for (const width of CONTENT_WIDTHS) {
		const file = `${baseName}-${width}w.webp`;
		const webp = await encodeWebp(pngPath, width, webpOptions);
		await writeFile(path.join(imagesDir, file), webp);
		outputs.push({ file, bytes: webp.length });
	}

	canonical = await encodeWebp(pngPath, 960, webpOptions);
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

/** Reviews index banner — same in-match shot as screenshot-04. */
const REVIEWS_BANNER_SOURCE_INDEX = 3;

let totalBytes = 0;
let reviewsBannerCanonical = null;

for (let n = 1; n <= SCREENSHOT_COUNT; n += 1) {
	const num = String(n).padStart(2, '0');
	const base = `deadside-screenshot-${num}`;
	const png = sourceFiles[n - 1];

	console.log(`Processing ${base}…`);
	const { outputs, canonical } = await writeScreenshotSet(png, base);
	if (n - 1 === REVIEWS_BANNER_SOURCE_INDEX) {
		reviewsBannerCanonical = canonical;
	}
	for (const { file, bytes } of outputs) {
		totalBytes += bytes;
		console.log(`  ✓ ${file} (${Math.round(bytes / 1024)}KB)`);
	}

	for (const name of LEGACY_MAP[base] ?? []) {
		await writeFile(path.join(imagesDir, name), canonical);
		console.log(`  ✓ ${name} (alias)`);
	}
}

if (reviewsBannerCanonical) {
	const reviewsPng = sourceFiles[REVIEWS_BANNER_SOURCE_INDEX];
	await writeFile(path.join(imagesDir, 'reviews-banner.webp'), reviewsBannerCanonical);
	for (const width of CONTENT_WIDTHS) {
		const webp = await encodeWebp(reviewsPng, width);
		await writeFile(path.join(imagesDir, `reviews-banner-${width}w.webp`), webp);
		totalBytes += webp.length;
	}
	totalBytes += reviewsBannerCanonical.length;
	console.log('✓ reviews-banner.webp (+ responsive variants)');
}

console.log(
	`\nDone — ${SCREENSHOT_COUNT} canonical URLs + responsive variants (~${Math.round(totalBytes / 1024)}KB webp)`,
);
console.log('Hero assets unchanged.');
