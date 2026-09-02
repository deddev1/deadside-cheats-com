#!/usr/bin/env node
/**
 * Re-encode screenshot-03 and screenshot-05 (and legacy aliases) under 100 KB.
 * Uses cached Supabase sources from tmp/deadside-screenshots/sources when present.
 */
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const imagesDir = path.resolve('public/images');
const tmpDir = path.resolve('tmp/deadside-screenshots/sources');
const CONTENT_WIDTHS = [480, 960];
/** Slightly lower than default 82 — keeps 960w variants under Screaming Frog's 100 KB threshold. */
const HEAVY_WEBP = { quality: 75, effort: 6, smartSubsample: true };

const HEAVY_SETS = [
	{
		source: 'source-03.png',
		base: 'deadside-screenshot-03',
		aliases: ['deadside-cheats-aimbot.webp', 'deadside-cheats-combat.webp'],
	},
	{
		source: 'source-05.png',
		base: 'deadside-screenshot-05',
		aliases: ['deadside-cheats-radar.webp', 'deadside-esp-radar.webp'],
	},
];

async function encodeWebp(input, width, options = HEAVY_WEBP) {
	const meta = await sharp(input).metadata();
	const nativeWidth = meta.width ?? width;
	const targetWidth = Math.min(width, nativeWidth);
	const height = Math.round(((meta.height ?? 595) / nativeWidth) * targetWidth);
	return sharp(input)
		.resize(targetWidth, height, { fit: 'inside', withoutEnlargement: true })
		.webp(options)
		.toBuffer();
}

await mkdir(imagesDir, { recursive: true });

for (const { source, base, aliases } of HEAVY_SETS) {
	const pngPath = path.join(tmpDir, source);
	console.log(`Recompressing ${base} from ${source}…`);

	for (const width of CONTENT_WIDTHS) {
		const file = `${base}-${width}w.webp`;
		const webp = await encodeWebp(pngPath, width);
		await writeFile(path.join(imagesDir, file), webp);
		console.log(`  ✓ ${file} (${Math.round(webp.length / 1024)}KB)`);
	}

	const canonical = await encodeWebp(pngPath, 960);
	await writeFile(path.join(imagesDir, `${base}.webp`), canonical);
	console.log(`  ✓ ${base}.webp (${Math.round(canonical.length / 1024)}KB)`);

	for (const name of aliases) {
		await writeFile(path.join(imagesDir, name), canonical);
		console.log(`  ✓ ${name} (alias)`);
	}
}

console.log('Done — heavy screenshots recompressed.');
