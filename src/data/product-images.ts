import { siteConfig } from './site';

/** User-provided Supabase originals — kept for provenance; site serves optimized WebP copies. */
export const PRODUCT_SCREENSHOT_SOURCES = [
	'https://boqgsoiwnpbisvrxulbe.supabase.co/storage/v1/object/public/valo/valo%20cheats/Screenshot%202026-08-13%20185425.png',
	'https://boqgsoiwnpbisvrxulbe.supabase.co/storage/v1/object/public/valo/valo%20cheats/Screenshot%202026-08-13%20185442.png',
	'https://boqgsoiwnpbisvrxulbe.supabase.co/storage/v1/object/public/valo/valo%20cheats/Screenshot%202026-08-13%20185513.png',
	'https://boqgsoiwnpbisvrxulbe.supabase.co/storage/v1/object/public/valo/valo%20cheats/Screenshot%202026-08-13%20185527.png',
	'https://boqgsoiwnpbisvrxulbe.supabase.co/storage/v1/object/public/valo/valo%20cheats/Screenshot%202026-08-13%20185540.png',
	'https://boqgsoiwnpbisvrxulbe.supabase.co/storage/v1/object/public/valo/valo%20cheats/Screenshot%202026-08-13%20185621.png',
	'https://boqgsoiwnpbisvrxulbe.supabase.co/storage/v1/object/public/valo/valo%20cheats/Screenshot%202026-08-13%20185635.png',
	'https://boqgsoiwnpbisvrxulbe.supabase.co/storage/v1/object/public/valo/valo%20cheats/Screenshot%202026-08-13%20185646.png',
] as const;

export const PRODUCT_SCREENSHOT_COUNT = PRODUCT_SCREENSHOT_SOURCES.length;

export type ProductScreenshotMeta = {
	id: number;
	src: string;
	url: string;
	sourceUrl: string;
	alt: string;
	title: string;
	caption: string;
};

const alts: Record<number, { alt: string; title: string; caption: string }> = {
	1: {
		alt: 'Deadside ESP showing loot box and weapon labels through walls',
		title: 'Deadside ESP loot and item detection',
		caption: 'Deadside ESP wallhack with distance-tagged loot boxes and weapons',
	},
	2: {
		alt: 'Deadside wallhack ESP highlighting weapons and corpses through geometry',
		title: 'Deadside wallhack ESP overlay',
		caption: 'Deadside wallhack ESP with loot tags visible through walls',
	},
	3: {
		alt: 'Deadside third-person gameplay view on Windows PC',
		title: 'Deadside cheats in-match view',
		caption: 'Deadside gameplay session with cheats running on Windows PC',
	},
	4: {
		alt: 'Deadside ESP player tracking with names and distance readouts',
		title: 'Deadside ESP player tracking',
		caption: 'Deadside ESP showing enemy names, health, and distance through the map',
	},
	5: {
		alt: 'Deadside ESP radar-style player and loot markers in match',
		title: 'Deadside ESP threat markers',
		caption: 'Deadside ESP distance markers for players and loot in live matches',
	},
	6: {
		alt: 'Deadside cheats ESP overlay during combat on Windows PC',
		title: 'Deadside cheats combat ESP',
		caption: 'Deadside cheats ESP active during a live Deadside match',
	},
	7: {
		alt: 'Deadside wallhack ESP with player outlines and corpse tags',
		title: 'Deadside wallhack player ESP',
		caption: 'Deadside wallhack ESP with player outlines and distance tags',
	},
	8: {
		alt: 'Deadside ESP loot detection and in-match overlay',
		title: 'Deadside ESP and loot ESP gameplay',
		caption: 'Deadside ESP loot tags and wallhack overlay during ranked gameplay',
	},
};

export function screenshotSrc(n: number): string {
	const id = ((n - 1) % PRODUCT_SCREENSHOT_COUNT) + 1;
	return `/images/deadside-screenshot-${String(id).padStart(2, '0')}.webp`;
}

export function absoluteScreenshotUrl(n: number): string {
	return new URL(screenshotSrc(n), siteConfig.url).href;
}

export function getProductScreenshot(n: number): ProductScreenshotMeta {
	const id = ((n - 1) % PRODUCT_SCREENSHOT_COUNT) + 1;
	const meta = alts[id] ?? {
		alt: `Deadside Cheats gameplay screenshot ${id}`,
		title: `Deadside Cheats screenshot ${id}`,
		caption: `Deadside Cheats screenshot ${id} for Deadside on Windows PC`,
	};
	const src = screenshotSrc(id);
	return {
		id,
		src,
		url: new URL(src, siteConfig.url).href,
		sourceUrl: PRODUCT_SCREENSHOT_SOURCES[id - 1]!,
		...meta,
	};
}

export const productScreenshots: ProductScreenshotMeta[] = Array.from(
	{ length: PRODUCT_SCREENSHOT_COUNT },
	(_, i) => getProductScreenshot(i + 1),
);

/** JSON-LD ImageObject nodes for gallery / sitemap parity. */
export function screenshotImageObjects(limit = PRODUCT_SCREENSHOT_COUNT) {
	return productScreenshots.slice(0, limit).map((shot) => ({
		'@type': 'ImageObject' as const,
		'@id': `${shot.url}#image`,
		url: shot.url,
		contentUrl: shot.url,
		name: shot.title,
		description: shot.caption,
		thumbnailUrl: shot.url,
	}));
}
