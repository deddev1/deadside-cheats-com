import type { PageId } from './i18n/routing';

/** Primary money keyword — drives {primaryKeyword} tokens sitewide. */
export const primarySeoKeyword = 'deadside cheats';

/**
 * Default SEO keyword targets (internal reference — not emitted as HTML meta keywords).
 * Ordered by commercial intent + search volume fit for deadsidecheats.com.
 */
export const globalSeoKeywords = [
	'deadside cheats',
	'undetected deadside cheats',
	'deadside cheats 2026',
	'best deadside cheats',
	'buy deadside cheats',
	'deadside esp',
	'deadside wallhack',
	'deadside aimbot',
	'deadside soft aim',
	'deadside 2d radar',
	'deadside battleye bypass',
	'deadside cheats pc',
	'deadside cheat download',
	'deadside mod menu',
	'deadside cheats undetected',
	'best deadside cheats 2026',
	'deadside external cheat',
] as const;

/** Page-level keyword targets — aligned to canonical URLs and on-page intent. */
export const pageSeoKeywords: Partial<Record<PageId, readonly string[]>> = {
	home: [
		'deadside cheats',
		'deadside cheats 2026',
		'undetected deadside cheats',
		'buy deadside cheats',
		'deadside esp',
		'deadside aimbot',
	],
	hacks: [
		'deadside cheats',
		'deadside cheats pc',
		'undetected deadside cheats',
		'deadside esp',
		'deadside aimbot',
	],
	'deadside-esp': [
		'deadside esp',
		'deadside wallhack',
		'deadside esp wallhack',
		'deadside cheats esp',
	],
	wallhack: [
		'deadside wallhack',
		'deadside esp wallhack',
		'deadside esp',
		'deadside cheats wallhack',
	],
	'deadside-aimbot': [
		'deadside aimbot',
		'deadside soft aim',
		'legit deadside aimbot',
		'deadside cheats aimbot',
	],
	'aimbot-hack': ['deadside aimbot', 'deadside soft aim', 'deadside cheats aimbot'],
	'soft-aim': ['deadside soft aim', 'deadside aimbot', 'soft aim deadside', 'deadside cheats soft aim'],
	radar: ['deadside 2d radar', 'deadside radar', 'deadside cheats radar'],
	'esp-hack': ['deadside esp', 'deadside wallhack', 'deadside cheats esp'],
	features: [
		'deadside cheats features',
		'deadside esp',
		'deadside aimbot',
		'deadside 2d radar',
		'deadside mod menu',
	],
	pricing: [
		'buy deadside cheats',
		'deadside cheats price',
		'deadside cheats monthly',
		'deadside cheats lifetime',
	],
	setup: [
		'deadside cheats setup',
		'deadside cheat download',
		'install deadside cheats',
	],
	'cheat-download': [
		'deadside cheat download',
		'deadside cheats download',
		'deadside cheats setup',
	],
	updates: [
		'undetected deadside cheats',
		'deadside cheats status',
		'BattlEye update',
		'deadside cheats undetected',
	],
	undetected: [
		'undetected deadside cheats',
		'deadside cheats undetected',
		'BattlEye undetected',
	],
	battleye: [
		'deadside battleye bypass',
		'battleye bypass deadside',
		'deadside anti cheat bypass',
		'hwid spoofer deadside',
	],
	'cheats-2026': [
		'deadside cheats 2026',
		'best deadside cheats 2026',
		'undetected deadside cheats 2026',
	],
	'best-cheats': [
		'best deadside cheats',
		'best deadside cheats 2026',
		'deadside cheats comparison',
	],
	'mod-menu': ['deadside mod menu', 'deadside cheat menu', 'deadside cheats menu'],
	faq: ['deadside cheats faq', 'deadside cheats setup', 'undetected deadside cheats'],
	support: ['deadside cheats support', 'deadside cheats license help'],
};

/** Keyword targets for /reviews/ and individual review pages (English-only routes). */
export const reviewsSeoKeywords = [
	'deadside cheats reviews',
	'deadside cheats',
	'deadside cheats pc',
	'deadside esp',
	'deadside aimbot',
	'deadside 2d radar',
	'undetected deadside cheats',
] as const;

export function getPageSeoKeywords(pageId?: PageId): string[] {
	if (!pageId) return [...globalSeoKeywords];
	const pageKeywords = pageSeoKeywords[pageId];
	return pageKeywords?.length ? [...pageKeywords] : [...globalSeoKeywords];
}
