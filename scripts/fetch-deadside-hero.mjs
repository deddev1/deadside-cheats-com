import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const assetsDir = path.resolve(__dirname, 'assets');
const imagesDir = path.resolve('public/images');

const DEFAULT_SOURCES = [
	path.join(assetsDir, 'deadside-hero-source.jpg'),
	path.join(assetsDir, 'deadside-hero-source.png'),
];

const HERO_URL = process.env.DEADSIDE_HERO_URL ?? process.env.FINALS_HERO_URL ?? null;

/** Site canvas — matches brand.theme.bg (#080A09). */
const VIGNETTE_COLOR = '#080A09';

/** Hero LCP — balance clarity and weight. */
const HERO_WEBP = { quality: 88, effort: 6, smartSubsample: true };

/** Match homepage hero bar — same wide banner ratio as Hero.astro (3.15:1). */
const BANNER_RATIO = 3.15;

/** Output widths — must include sizes referenced in src/lib/responsive-images.ts */
const HERO_WIDTHS = [480, 640, 1024, 1199];

async function loadSource() {
	if (HERO_URL) {
		if (HERO_URL.startsWith('file://')) {
			return readFile(HERO_URL.replace('file://', ''));
		}
		const res = await fetch(HERO_URL, {
			headers: { 'User-Agent': 'Mozilla/5.0 (compatible; DeadsideCheatsSite/1.0)' },
		});
		if (!res.ok) throw new Error(`HTTP ${res.status}`);
		return Buffer.from(await res.arrayBuffer());
	}
	for (const file of DEFAULT_SOURCES) {
		try {
			return await readFile(file);
		} catch {
			// try next source path
		}
	}
	throw new Error('No hero source found — add scripts/assets/deadside-hero-source.jpg');
}

function bannerHeight(width) {
	return Math.round(width / BANNER_RATIO);
}

/** SVG overlay — strong left fade so hero copy stays readable on any monitor. */
function leftVignetteSvg(width, height) {
	return Buffer.from(`<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="leftFade" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="${VIGNETTE_COLOR}" stop-opacity="0.96"/>
      <stop offset="18%" stop-color="${VIGNETTE_COLOR}" stop-opacity="0.84"/>
      <stop offset="34%" stop-color="${VIGNETTE_COLOR}" stop-opacity="0.62"/>
      <stop offset="50%" stop-color="${VIGNETTE_COLOR}" stop-opacity="0.38"/>
      <stop offset="66%" stop-color="${VIGNETTE_COLOR}" stop-opacity="0.16"/>
      <stop offset="82%" stop-color="${VIGNETTE_COLOR}" stop-opacity="0.05"/>
      <stop offset="100%" stop-color="${VIGNETTE_COLOR}" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#leftFade)"/>
</svg>`);
}

async function resizeHero(heroBuffer, width) {
	const height = bannerHeight(width);
	const overlay = await sharp(leftVignetteSvg(width, height)).png().toBuffer();
	return sharp(heroBuffer)
		.resize(width, height, {
			fit: 'cover',
			position: 'right',
			kernel: sharp.kernel.lanczos3,
		})
		.sharpen({ sigma: 0.35, m1: 0.5, m2: 0.25 })
		.composite([{ input: overlay, blend: 'over' }]);
}

await mkdir(imagesDir, { recursive: true });

const heroBuffer = await loadSource();
const sourceMeta = await sharp(heroBuffer).metadata();
const maxWidth = sourceMeta.width ?? 1778;

const outputWidths = HERO_WIDTHS.filter((width) => width <= maxWidth);
if (!outputWidths.includes(maxWidth) && maxWidth > (outputWidths.at(-1) ?? 0)) {
	outputWidths.push(maxWidth);
}
// Upscale small sources to 1199w LCP when native width is below target.
if (maxWidth < 1199 && !outputWidths.includes(1199)) {
	outputWidths.push(1199);
}

for (const width of outputWidths) {
	const height = bannerHeight(width);
	const pipeline = await resizeHero(heroBuffer, width);
	const webp = await pipeline.webp(HERO_WEBP).toBuffer();
	await writeFile(path.join(imagesDir, `deadside-cheats-hero-${width}w.webp`), webp);
	console.log(`✓ deadside-cheats-hero-${width}w.webp (${width}x${height}, ${Math.round(webp.length / 1024)}KB)`);
}

const lcpWidth = outputWidths.includes(1199) ? 1199 : outputWidths.at(-1) ?? 1024;
const canonicalHeight = bannerHeight(lcpWidth);
const canonical = await (await resizeHero(heroBuffer, lcpWidth)).webp(HERO_WEBP).toBuffer();
for (const name of ['deadside-cheats-hero.webp', 'deadside-hero-banner.webp', 'hero-banner.webp']) {
	await writeFile(path.join(imagesDir, name), canonical);
}

console.log(
	`Done — hero banner ${BANNER_RATIO}:1 (LCP ${lcpWidth}x${canonicalHeight}), left vignette baked in`,
);
