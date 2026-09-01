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
	steamNews: 'https://store.steampowered.com/app/895400/news/',
	officialSite: 'https://www.deadsidethegame.com/',
	wiki: 'https://deadside.fandom.com/wiki/Deadside',
	steamCommunity: 'https://steamcommunity.com/app/1203220',
} as const;

/** Authoritative third-party guides — cite official game sources for readers and search engines. */
export const externalResources: ExternalResource[] = [
	{
		id: 'steam',
		label: 'Deadside on PC',
		href: externalUrls.steam,
		note: 'Official store page, system requirements, and player reviews.',
	},
	{
		id: 'patch',
		label: 'Deadside patch notes & news',
		href: externalUrls.steamNews,
		note: 'Read official update posts before you change your loadout.',
	},
	{
		id: 'official',
		label: 'Official Deadside website',
		href: externalUrls.officialSite,
		note: 'Game overview from Bad Pixel.',
	},
	{
		id: 'wiki',
		label: 'Deadside Wiki (Fandom)',
		href: externalUrls.wiki,
		note: 'Player stats, maps, and survival mechanics.',
	},
	{
		id: 'community',
		label: 'Deadside Community hub',
		href: externalUrls.steamCommunity,
		note: 'Announcements and community discussions.',
	},
];

/** Compact above-the-fold guide links for blogs and page banners. */
export const featuredGuidePills: GuideCta[] = [
	{ label: 'Deadside on PC', href: externalUrls.steam },
	{ label: 'Official patch notes', href: externalUrls.steamNews },
	{ label: 'Deadside Wiki', href: externalUrls.wiki },
];

/**
 * Secondary banner buttons that should point to official guides — not internal sales pages.
 * Keeps primary Buy CTAs while giving Google clear outbound citations.
 */
export const externalSecondaryByPageId: Partial<Record<PageId, GuideCta>> = {
	features: { label: 'Official patch notes', href: externalUrls.steamNews },
	updates: { label: 'Deadside patch notes', href: externalUrls.steamNews },
	hacks: { label: 'Deadside Wiki', href: externalUrls.wiki },
	'deadside-esp': { label: 'Deadside Wiki', href: externalUrls.wiki },
	'deadside-aimbot': { label: 'Deadside Wiki', href: externalUrls.wiki },
	radar: { label: 'Deadside Wiki', href: externalUrls.wiki },
	setup: { label: 'Official game site', href: externalUrls.officialSite },
	support: { label: 'Deadside community', href: externalUrls.steamCommunity },
	faq: { label: 'Deadside Wiki', href: externalUrls.wiki },
	undetected: { label: 'Deadside patch notes', href: externalUrls.steamNews },
	wallhack: { label: 'Deadside Wiki', href: externalUrls.wiki },
	battleye: { label: 'Official patch notes', href: externalUrls.steamNews },
	'cheats-2026': { label: 'Deadside on PC', href: externalUrls.steam },
	'cheat-download': { label: 'Official game site', href: externalUrls.officialSite },
	'mod-menu': { label: 'Deadside Wiki', href: externalUrls.wiki },
	'soft-aim': { label: 'Deadside Wiki', href: externalUrls.wiki },
	'best-cheats': { label: 'Deadside community', href: externalUrls.steamCommunity },
	'aimbot-hack': { label: 'Deadside Wiki', href: externalUrls.wiki },
	'esp-hack': { label: 'Deadside Wiki', href: externalUrls.wiki },
	'unlock-all': { label: 'Official game site', href: externalUrls.officialSite },
	pricing: { label: 'Deadside on PC', href: externalUrls.steam },
};

export function getExternalSecondaryCta(pageId: PageId): GuideCta | undefined {
	return externalSecondaryByPageId[pageId];
}

export function isExternalHref(href: string): boolean {
	return href.startsWith('http');
}
