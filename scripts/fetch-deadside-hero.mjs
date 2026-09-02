import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const assetsDir = path.resolve(__dirname, 'assets');
const imagesDir = path.resolve('public/images');
const HERO_URL =
	process.env.DEADSIDE_HERO_URL ??
	process.env.FINALS_HERO_URL ??
	'file://' + path.join(assetsDir, 'deadside-hero-source.png');
/** High-quality WebP — hero is LCP; prioritize clarity over file size. */
const HERO_WEBP = { quality: 100, effort: 6, smartSubsample: false, alphaQuality: 100 };

/** Match homepage hero bar — same wide banner ratio as before (3.15:1). */
const BANNER_RATIO = 3.15;

/** Output widths — must include sizes referenced in src/lib/responsive-images.ts */
const HERO_WIDTHS = [480, 640, 1024, 1199];

const heroBuffer = Buffer.from(
	await (HERO_URL.startsWith('file://')
		? readFile(HERO_URL.replace('file://', ''))
		: fetch(HERO_URL, {
				headers: { 'User-Agent': 'Mozilla/5.0 (compatible; DeadsideCheatsSite/1.0)' },
			}).then((r) => {
				if (!r.ok) throw new Error(`HTTP ${r.status}`);
				return r.arrayBuffer();
			})),
);

function bannerHeight(width) {
	return Math.round(width / BANNER_RATIO);
}

const sourceMeta = await sharp(heroBuffer).metadata();
const maxWidth = sourceMeta.width ?? 1778;
const outputWidths = HERO_WIDTHS.filter((width) => width <= maxWidth);
if (!outputWidths.includes(maxWidth) && maxWidth > (outputWidths.at(-1) ?? 0)) {
	outputWidths.push(maxWidth);
}

function resizeHero(width) {
	const height = bannerHeight(width);
	return sharp(heroBuffer)
		.resize(width, height, {
			fit: 'cover',
			position: 'right',
			kernel: sharp.kernel.lanczos3,
			withoutEnlargement: true,
		})
		.sharpen({ sigma: 0.35, m1: 0.5, m2: 0.25 });
}

for (const width of outputWidths) {
	const height = bannerHeight(width);
	const webp = await resizeHero(width).webp(HERO_WEBP).toBuffer();
	await writeFile(path.join(imagesDir, `deadside-cheats-hero-${width}w.webp`), webp);
	console.log(`✓ deadside-cheats-hero-${width}w.webp (${width}x${height}, ${Math.round(webp.length / 1024)}KB)`);
}

const lcpWidth = outputWidths.includes(1199) ? 1199 : outputWidths.at(-1) ?? 1024;
const canonicalHeight = bannerHeight(lcpWidth);
const canonical = await resizeHero(lcpWidth).webp(HERO_WEBP).toBuffer();
for (const name of ['deadside-cheats-hero.webp', 'deadside-hero-banner.webp', 'hero-banner.webp']) {
	await writeFile(path.join(imagesDir, name), canonical);
}

console.log(
	`Done — hero banner ${BANNER_RATIO}:1 (LCP ${lcpWidth}x${canonicalHeight}), fit: cover, quality ${HERO_WEBP.quality}`,
);
