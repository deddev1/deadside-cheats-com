/** Shared constants for i18n content generation. */

export const LOCALES = [
	'en', 'es', 'fr', 'de', 'pt', 'it', 'nl', 'pl', 'ru', 'tr',
	'ar', 'ja', 'ko', 'zh', 'hi', 'id', 'th', 'vi', 'uk', 'cs', 'ro', 'sv',
];

export const PAGE_IDS = [
	'home', 'deadside-esp', 'deadside-aimbot', 'features', 'pricing', 'setup',
	'updates', 'faq', 'support', 'undetected', 'wallhack', 'radar', 'battleye',
	'cheats-2026', 'hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats',
	'aimbot-hack', 'esp-hack', 'unlock-all', 'privacy', 'refund', 'terms',
];

/** Hero image per page — simple deadside cheats keyword filenames. */
export const HERO_IMAGES = {
	home: '/images/deadside-cheats-hero-1199w.webp',
	'deadside-esp': '/images/deadside-cheats-radar.webp',
	'deadside-aimbot': '/images/deadside-cheats-aimbot.webp',
	features: '/images/deadside-cheats-aimbot-view.webp',
	pricing: '/images/deadside-cheats-session.webp',
	setup: '/images/deadside-cheats-radar.webp',
	updates: '/images/deadside-cheats-esp.webp',
	faq: '/images/deadside-cheats-aimbot-view.webp',
	support: '/images/deadside-cheats-session.webp',
	undetected: '/images/deadside-cheats-wallhack.webp',
	wallhack: '/images/deadside-cheats-wallhack.webp',
	radar: '/images/deadside-cheats-radar.webp',
	battleye: '/images/deadside-cheats-aimbot.webp',
	'cheats-2026': '/images/deadside-cheats-esp.webp',
	hacks: '/images/deadside-cheats-combat.webp',
	'cheat-download': '/images/deadside-cheats-session.webp',
	'mod-menu': '/images/deadside-cheats-radar.webp',
	'soft-aim': '/images/deadside-cheats-aimbot-view.webp',
	'best-cheats': '/images/deadside-cheats-esp.webp',
	'aimbot-hack': '/images/deadside-cheats-aimbot-view.webp',
	'esp-hack': '/images/deadside-cheats-wallhack.webp',
	'unlock-all': '/images/deadside-cheats-radar.webp',
	privacy: '/images/deadside-cheats-aimbot.webp',
	refund: '/images/deadside-cheats-session.webp',
	terms: '/images/deadside-cheats-aimbot-view.webp',
};

export const TS_HEADER = `import type { LocaleCode } from './locales';

export type PageSection = { h2: string; paragraphs: string[]; list?: string[] };
export type PageContent = {
\ttitle: string;
\tdescription: string;
\th1: string;
\tintro: string;
\timageAlt: string;
\tgalleryTitle: string;
\theroImage: string;
\tsections: PageSection[];
\tctaPrimary: string;
\tctaSecondary?: string;
\tctaSecondaryHref?: string;
};
export type LocaleUi = {
\tnav: { home: string; hacks: string; aimbot: string; esp: string; features: string; pricing: string; setup: string; updates: string; faq: string; buyNow: string };
\thero: { accent: string; accentShort: string; subtitle: string; subtitleShort: string; buyNow: string; seeFeatures: string };
\ttrust: { status: string; statusNote: string; statusShort: string; delivery: string; platform: string; antiCheat: string; antiCheatShort: string };
\tproduct: { title: string; addToCart: string; monthly: string; lifetime: string; available: string; gameBadge: string; platformBadge: string; statusBadge: string };
\treviews: { title: string; subtitle: string; outOf: string; countLabel: string };
\tcommon: { buyNow: string; readGuide: string; language: string; officialLanguageNote: string; relatedPages: string };
\tfooter: { explore: string; help: string; tagline: string };
\timages: {
\t\thero: string; espWallhack: string; aimbotCombat: string; squadFight: string; playerEsp: string;
\t\theaderArt: string; hacksPackage: string; matchFight: string; battleRoyale: string; matchMap: string;
\t};
};
export type PageId = 'home' | 'deadside-esp' | 'deadside-aimbot' | 'features' | 'pricing' | 'setup' | 'updates' | 'faq' | 'support' | 'undetected' | 'wallhack' | 'radar' | 'battleye' | 'cheats-2026' | 'hacks' | 'cheat-download' | 'mod-menu' | 'soft-aim' | 'best-cheats' | 'aimbot-hack' | 'esp-hack' | 'unlock-all' | 'privacy' | 'refund' | 'terms';
`;

/** Generation-time title prep — final clamp/expand runs in Layout via seoPageTitle(). */
export function clampTitle(s) {
	return stripZadeyoFromMeta(s);
}

export function clampDesc(s) {
	let text = s.trim();
	const MIN = 140;
	const MAX = 160;
	if (text.length < MIN) {
		const pad = text.toLowerCase().includes('deadsidecheat.com')
			? ' Windows PC license with BattlEye maintenance after patches.'
			: ' Compare plans and guides at deadsidecheat.com.';
		text = `${text.replace(/[.…]+$/, '')}.${pad}`;
	}
	if (text.length <= MAX) return text;
	const trimmed = text.slice(0, MAX);
	const lastSpace = trimmed.lastIndexOf(' ');
	return lastSpace > 130 ? trimmed.slice(0, lastSpace) : trimmed.slice(0, MAX);
}

/** Remove Zadeyo from meta title/description strings only. */
export function stripZadeyoFromMeta(text) {
	return text
		.replace(/\s*[—–-]\s*checkout via Zadeyo\.?/gi, '.')
		.replace(/\s*[—–-]\s*checkout en Zadeyo\.?/gi, '.')
		.replace(/\s*[—–-]\s*checkout über Zadeyo\.?/gi, '.')
		.replace(/\s*with Zadeyo checkout\.?/gi, '.')
		.replace(/\s*via Zadeyo checkout\.?/gi, '.')
		.replace(/\s*Checkout via Zadeyo\.?/gi, '')
		.replace(/\s*Zadeyo checkout,?\s*/gi, ' ')
		.replace(/\s*Zadeyo delivery\.?/gi, ' instant digital delivery.')
		.replace(/\s*and Zadeyo delivery\.?/gi, ' and instant digital delivery.')
		.replace(/\|\s*Instant Zadeyo Delivery/g, '| Instant Digital Delivery')
		.replace(/Buy on Zadeyo/g, 'Buy Deadside Cheats')
		.replace(/\s{2,}/g, ' ')
		.trim();
}

/** Remove/rescribe Zadeyo brand references from visible body copy. */
export function stripZadeyoFromBody(text) {
	if (typeof text !== 'string') return text;
	return stripZadeyoFromMeta(text)
		.replace(/\bZadeyo[- ]?checkout\b/gi, 'secure checkout')
		.replace(/\bZadeyo\b/gi, 'secure checkout')
		.replace(/\bvia secure checkout checkout\b/gi, 'via secure checkout')
		.replace(/checkout secure checkout/gi, 'secure checkout')
		.replace(/\s{2,}/g, ' ')
		.trim();
}

export function stripZadeyoDeep(value) {
	if (typeof value === 'string') return stripZadeyoFromBody(value);
	if (Array.isArray(value)) return value.map(stripZadeyoDeep);
	if (value && typeof value === 'object') {
		return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, stripZadeyoDeep(v)]));
	}
	return value;
}

/** Build a page section. Pass 2+ paragraph strings; optional trailing string[] becomes list. */
export function section(h2, ...args) {
	let list;
	const paragraphs = [...args];
	if (paragraphs.length && Array.isArray(paragraphs[paragraphs.length - 1])) {
		list = paragraphs.pop();
	}
	if (paragraphs.length < 2) {
		throw new Error(`section "${h2}" needs at least 2 paragraphs`);
	}
	const sec = { h2, paragraphs };
	if (list?.length) sec.list = list;
	return sec;
}

/** Authoritative external citation helpers (open in new tab). */
export const EXT = {
	activision:
		'<a href="https://store.steampowered.com/app/895400/Deadside/" target="_blank" rel="noopener noreferrer">Deadside</a>',
	rust:
		'<a href="https://store.steampowered.com/app/895400/Deadside/" target="_blank" rel="noopener noreferrer">Deadside</a>',
	finals:
		'<a href="https://store.steampowered.com/app/895400/Deadside/" target="_blank" rel="noopener noreferrer">Deadside</a>',
	deadside:
		'<a href="https://store.steampowered.com/app/895400/Deadside/" target="_blank" rel="noopener noreferrer">Deadside</a>',
	valorant:
		'<a href="https://store.steampowered.com/app/895400/Deadside/" target="_blank" rel="noopener noreferrer">Deadside</a>',
	status:
		'<a href="https://store.steampowered.com/app/895400/Deadside/" target="_blank" rel="noopener noreferrer">Deadside on Steam</a>',
	eac:
		'<a href="https://www.battleye.com/" target="_blank" rel="noopener noreferrer">BattlEye</a>',
	battleye:
		'<a href="https://www.battleye.com/" target="_blank" rel="noopener noreferrer">BattlEye</a>',
};
