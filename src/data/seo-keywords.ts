import type { PageId } from './i18n/routing';

/** Primary money keyword — drives {primaryKeyword} tokens sitewide. */
export const primarySeoKeyword = 'naraka cheats';

/**
 * Default meta keywords (fallback when no page-specific set).
 * Ordered by commercial intent + search volume fit for narakacheats.org.
 */
export const globalSeoKeywords = [
	'naraka cheats',
	'undetected naraka cheats',
	'naraka cheats 2026',
	'best naraka cheats',
	'buy naraka cheats',
	'naraka esp',
	'naraka wallhack',
	'naraka aimbot',
	'naraka soft aim',
	'naraka radar hack',
	'naraka neac bypass',
	'naraka cheats pc',
	'naraka cheat download',
	'naraka cheats',
	'naraka mod menu',
	'naraka cheats',
	'undetected naraka cheats',
	'naraka cheats undetected',
	'naraka aimbot hack',
	'naraka esp hack',
	'best naraka cheats 2026',
	'naraka cheats for ranked',
	'naraka external cheat',
] as const;

/** Page-level meta keywords — aligned to canonical URLs and on-page intent. */
export const pageSeoKeywords: Partial<Record<PageId, readonly string[]>> = {
	home: [
		'naraka cheats',
		'naraka cheats 2026',
		'undetected naraka cheats',
		'buy naraka cheats',
		'naraka esp',
		'naraka aimbot',
	],
	hacks: [
		'naraka cheats',
		'naraka cheats',
		'naraka cheats pc',
		'undetected naraka cheats',
		'naraka esp',
		'naraka aimbot',
	],
	'naraka-esp': [
		'naraka esp',
		'naraka esp hack',
		'naraka wallhack',
		'naraka esp wallhack',
		'naraka cheats esp',
	],
	wallhack: [
		'naraka wallhack',
		'naraka esp wallhack',
		'naraka wallhack hack',
		'naraka esp',
	],
	'naraka-aimbot': [
		'naraka aimbot',
		'naraka soft aim',
		'naraka aimbot hack',
		'legit naraka aimbot',
		'naraka cheats aimbot',
	],
	'aimbot-hack': ['naraka aimbot hack', 'naraka aimbot', 'naraka soft aim', 'naraka cheats aimbot'],
	'soft-aim': ['naraka soft aim', 'naraka aimbot', 'soft aim naraka', 'naraka cheats soft aim'],
	radar: ['naraka radar hack', 'naraka 2d radar', 'naraka radar', 'naraka cheats radar'],
	'esp-hack': ['naraka esp hack', 'naraka esp', 'naraka wallhack', 'naraka cheats esp'],
	features: [
		'naraka cheats features',
		'naraka esp',
		'naraka aimbot',
		'naraka radar hack',
		'naraka mod menu',
	],
	pricing: [
		'buy naraka cheats',
		'naraka cheats price',
		'naraka cheats monthly',
		'naraka cheats lifetime',
		'naraka cheats price',
	],
	setup: [
		'naraka cheats setup',
		'naraka cheat download',
		'install naraka cheats',
		'naraka cheats setup',
	],
	'cheat-download': [
		'naraka cheat download',
		'naraka cheats download',
		'naraka cheat download',
		'naraka cheats setup',
	],
	updates: [
		'undetected naraka cheats',
		'naraka cheats status',
		'NEAC update',
		'naraka cheats undetected',
	],
	undetected: [
		'undetected naraka cheats',
		'undetected naraka cheats',
		'naraka cheats undetected',
		'NEAC undetected',
	],
	neac: [
		'naraka neac bypass',
		'neac bypass naraka',
		'naraka anti cheat bypass',
		'hwid spoofer naraka',
	],
	'cheats-2026': [
		'naraka cheats 2026',
		'naraka cheats 2026',
		'best naraka cheats 2026',
		'undetected naraka cheats 2026',
	],
	'best-cheats': [
		'best naraka cheats',
		'best naraka cheats 2026',
		'best naraka cheats',
		'naraka cheats comparison',
	],
	'mod-menu': ['naraka mod menu', 'naraka cheat menu', 'naraka cheats menu', 'naraka cheats menu'],
	faq: ['naraka cheats faq', 'naraka cheats faq', 'naraka cheats setup', 'undetected naraka cheats'],
	support: ['naraka cheats support', 'naraka cheats support', 'naraka cheats license help'],
};

export function getPageSeoKeywords(pageId?: PageId): string[] {
	if (!pageId) return [...globalSeoKeywords];
	const pageKeywords = pageSeoKeywords[pageId];
	return pageKeywords?.length ? [...pageKeywords] : [...globalSeoKeywords];
}
