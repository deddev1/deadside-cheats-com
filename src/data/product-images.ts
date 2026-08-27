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
		alt: 'Naraka ESP wallhack showing player boxes in competitive combat',
		title: 'Naraka ESP wallhack player boxes',
		caption: 'Naraka ESP wallhack showing player boxes and distance tags',
	},
	2: {
		alt: 'Naraka wallhack ESP highlighting enemies through map geometry',
		title: 'Naraka wallhack ESP overlay',
		caption: 'Naraka wallhack ESP highlighting enemies through walls and smoke',
	},
	3: {
		alt: 'Naraka aimbot soft aim targeting during a ranked match',
		title: 'Naraka aimbot soft aim in match',
		caption: 'Naraka aimbot soft aim targeting during competitive combat',
	},
	4: {
		alt: 'Naraka Cheats mod menu with ESP and radar toggles',
		title: 'Naraka Cheats mod menu overlay',
		caption: 'Naraka Cheats mod menu with ESP, aimbot, and radar toggles on Windows PC',
	},
	5: {
		alt: 'Naraka 2D radar hack showing nearby enemy threats',
		title: 'Naraka radar hack overlay',
		caption: 'Naraka 2D radar hack with directional threat cues on Windows PC',
	},
	6: {
		alt: 'Naraka cheats in-match overlay with ESP and aimbot active',
		title: 'Naraka cheats in-match overlay',
		caption: 'Naraka cheats ESP and aimbot overlay during a live competitive match',
	},
	7: {
		alt: 'Naraka wallhack player outlines and distance readouts',
		title: 'Naraka wallhack player ESP',
		caption: 'Naraka wallhack ESP with player outlines and distance tags',
	},
	8: {
		alt: 'Naraka aimbot and ESP combined in competitive gameplay',
		title: 'Naraka aimbot and ESP gameplay',
		caption: 'Naraka aimbot and ESP wallhack combined during ranked gameplay',
	},
};

export function screenshotSrc(n: number): string {
	const id = ((n - 1) % PRODUCT_SCREENSHOT_COUNT) + 1;
	return `/images/naraka-screenshot-${String(id).padStart(2, '0')}.webp`;
}

export function absoluteScreenshotUrl(n: number): string {
	return new URL(screenshotSrc(n), siteConfig.url).href;
}

export function getProductScreenshot(n: number): ProductScreenshotMeta {
	const id = ((n - 1) % PRODUCT_SCREENSHOT_COUNT) + 1;
	const meta = alts[id] ?? {
		alt: `Naraka Cheats gameplay screenshot ${id}`,
		title: `Naraka Cheats screenshot ${id}`,
		caption: `Naraka Cheats screenshot ${id} for Naraka on Windows PC`,
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
