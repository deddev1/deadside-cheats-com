import { brand } from './brand';
import type { PageId } from './i18n/routing';

export type ExternalResource = {
	id: string;
	label: string;
	href: string;
	note?: string;
};

export type GuideCta = {
	label: string;
	href: string;
};

/** Canonical outbound URLs — single source for CTAs, pills, and resource blocks. */
export const externalUrls = {
	steam: brand.gameUrl,
	steamNews: 'https://store.steampowered.com/app/1203220/news/',
	officialSite: 'https://store.steampowered.com/app/1203220/NARAKA_BLADEPOINT/',
	wiki: 'https://naraka.fandom.com/wiki/NARAKA:_BLADEPOINT',
	steamCommunity: 'https://store.steampowered.com/app/1203220',
} as const;

/** Authoritative third-party guides — cite official game sources for readers and search engines. */
export const externalResources: ExternalResource[] = [
	{
		id: 'steam',
		label: 'Naraka on PC',
		href: externalUrls.steam,
		note: 'Official store page, system requirements, and player reviews.',
	},
	{
		id: 'patch',
		label: 'Naraka patch notes & news',
		href: externalUrls.steamNews,
		note: 'Read official update posts before you change your loadout.',
	},
	{
		id: 'official',
		label: 'Official Naraka website',
		href: externalUrls.officialSite,
		note: 'Game overview from 24 Entertainment.',
	},
	{
		id: 'wiki',
		label: 'Naraka Wiki (Fandom)',
		href: externalUrls.wiki,
		note: 'Player stats, maps, and survival mechanics.',
	},
	{
		id: 'community',
		label: 'Naraka Community hub',
		href: externalUrls.steamCommunity,
		note: 'Announcements and community discussions.',
	},
];

/** Compact above-the-fold guide links for blogs and page banners. */
export const featuredGuidePills: GuideCta[] = [
	{ label: 'Naraka on PC', href: externalUrls.steam },
	{ label: 'Official patch notes', href: externalUrls.steamNews },
	{ label: 'Naraka Wiki', href: externalUrls.wiki },
];

/**
 * Secondary banner buttons that should point to official guides — not internal sales pages.
 * Keeps primary Buy CTAs while giving Google clear outbound citations.
 */
export const externalSecondaryByPageId: Partial<Record<PageId, GuideCta>> = {
	features: { label: 'Official patch notes', href: externalUrls.steamNews },
	updates: { label: 'Naraka patch notes', href: externalUrls.steamNews },
	hacks: { label: 'Naraka Wiki', href: externalUrls.wiki },
	'naraka-esp': { label: 'Naraka Wiki', href: externalUrls.wiki },
	'naraka-aimbot': { label: 'Naraka Wiki', href: externalUrls.wiki },
	radar: { label: 'Naraka Wiki', href: externalUrls.wiki },
	setup: { label: 'Official game site', href: externalUrls.officialSite },
	support: { label: 'Naraka community', href: externalUrls.steamCommunity },
	faq: { label: 'Naraka Wiki', href: externalUrls.wiki },
	undetected: { label: 'Naraka patch notes', href: externalUrls.steamNews },
	wallhack: { label: 'Naraka Wiki', href: externalUrls.wiki },
	neac: { label: 'Official patch notes', href: externalUrls.steamNews },
	'cheats-2026': { label: 'Naraka on PC', href: externalUrls.steam },
	'cheat-download': { label: 'Official game site', href: externalUrls.officialSite },
	'mod-menu': { label: 'Naraka Wiki', href: externalUrls.wiki },
	'soft-aim': { label: 'Naraka Wiki', href: externalUrls.wiki },
	'best-cheats': { label: 'Naraka community', href: externalUrls.steamCommunity },
	'aimbot-hack': { label: 'Naraka Wiki', href: externalUrls.wiki },
	'esp-hack': { label: 'Naraka Wiki', href: externalUrls.wiki },
	'unlock-all': { label: 'Official game site', href: externalUrls.officialSite },
	pricing: { label: 'Naraka on PC', href: externalUrls.steam },
};

export function getExternalSecondaryCta(pageId: PageId): GuideCta | undefined {
	return externalSecondaryByPageId[pageId];
}

export function isExternalHref(href: string): boolean {
	return href.startsWith('http');
}
