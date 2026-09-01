/**
 * SINGLE SOURCE OF TRUTH for template rebrands.
 * Employees: use Brand Studio at http://localhost:5173/brand-studio/ during `astro dev`.
 * Do not scatter brand strings across components.
 */
export const brand = {
	/** Public brand name (nav, footer, H1 hero, schema Organization) */
	name: 'Deadside Cheats',
	/** Short product label if needed */
	shortName: 'Deadside Cheats',
	/** Canonical origin — no trailing slash */
	url: 'https://deadsidecheats.com',
	locale: 'en',
	market: 'Worldwide',
	supportEmail: 'support@deadsidecheats.com',
	checkoutUrl: 'https://zadeyo.com/go/QRH?to=%2Fproducts%2Fdeadside',

	/** Public profiles for Organization sameAs + Twitter cards (edit in Brand Studio). */
	social: {
		twitterSite: '@deadsidecheats',
		sameAs: [
			'https://x.com/deadsidecheats',
			'https://www.reddit.com/r/Deadside/',
			'https://store.steampowered.com/app/895400/Deadside/',
		],
	} as const,

	/** Game this template instance targets */
	game: 'Deadside',
	/** Official game page — linked from the hero image */
	gameUrl: 'https://store.steampowered.com/app/895400/Deadside/',
	/** Anti-cheat name used in Status / FAQ copy */
	antiCheat: 'BattlEye',

	logo: '/images/deadside-cheats-logo.webp',
	logoRaster: '/images/deadside-cheats-logo.png',
	logoRasterWidth: 512,
	logoRasterHeight: 512,
	logoAlt: 'Deadside Cheats logo',
	defaultOgImage: '/images/deadside-cheats-hero-1199w.webp',
	heroImage: '/images/deadside-cheats-hero-1199w.webp',
	/** Product demo clip — lazy-loaded on homepage; fetched only after play */
	demoVideoUrl: 'https://deadsidecheats.com/videos/hero.webm',
	demoVideoPoster: '/images/deadside-screenshot-06.webp',

	plans: [
		{ id: 'monthly', label: 'Monthly', price: 35, duration: 'P30D' },
		{ id: 'lifetime', label: 'Lifetime', price: 150, duration: 'P99Y' },
	] as const,
	currency: 'USD',
	platforms: ['Windows PC'] as const,

	/**
	 * Site color tones — accent + canvas + soft/deep/hover/panel.
	 * Edit in Brand Studio → Colors (tones are fully customizable).
	 */
	theme: {
		accent: '#7FAF5A',
		bg: '#080A09',
		soft: '#9BCB70',
		deep: '#3E5C2F',
		hover: '#9BCB70',
		panel: '#171D19',
		elevated: '#101512',
		line: '#29332B',
		ink: '#FFFFFF',
		inkHeading: '#FFFFFF',
		inkSecondary: '#F0F2EF',
		inkMuted: '#D4DAD5',
		link: '#7FAF5A',
		ok: '#7FAF5A',
		warn: '#C64A3F',
		input: '#0D110F',
	},

	/**
	 * Keyword system — primary drives titles; list feeds schema / meta keywords.
	 * Page-specific targeting lives in src/data/seo-keywords.ts
	 */
	keywords: {
		primary: 'deadside cheats',
		list: [
			'deadside cheats',
			'undetected deadside cheats',
			'deadside cheats 2026',
			'best deadside cheats',
			'buy deadside cheats',
			'deadside esp',
			'deadside wallhack',
			'deadside aimbot',
			'deadside soft aim',
			'deadside radar',
			'deadside battleye bypass',
			'deadside cheats pc',
			'deadside cheat download',
			'deadside mod menu',
			'undetected deadside cheats',
			'deadside cheats undetected',
			'deadside aimbot',
			'deadside esp',
			'best deadside cheats 2026',
			'deadside cheats for ranked',
			'deadside external cheat',
		] as const,
	},

	/**
	 * Editable SEO meta — tokens: {brand} {game} {antiCheat} {email} {primaryKeyword}
	 * Aim ~50–60 chars titles, ~140–160 chars descriptions.
	 */
	seo: {
		homeTitle: 'Deadside Cheats 2026 | ESP, Aimbot & Radar',
		homeDescription:
			'Buy undetected Deadside cheats — ESP, aimbot, wallhack & radar for survival raids on PC. BattlEye updates included. Plans from $35/month.',
		featuresTitle: 'Deadside Cheats Features | ESP & Aimbot',
		featuresDescription:
			'Full Deadside cheats feature list — ESP wallhack, soft aim, 2D radar & toggles for survival raids on PC. BattlEye maintenance at deadsidecheats.com.',
		storeTitle: 'Deadside Cheats Pricing | $35/mo Lifetime',
		storeDescription:
			'Buy Deadside cheats — $35/month or $150 lifetime. ESP, aimbot & radar for survival raids on PC. Instant digital delivery worldwide.',
		statusTitle: 'Deadside Status | Undetected {antiCheat} Updates',
		statusDescription:
			'Live status after {game} & {antiCheat} patches. Check undetected ESP, aimbot & radar rebuilds on PC before you queue. Status updated at deadsidecheats.com.',
		previewTitle: 'Deadside Cheats | ESP, Aimbot & Radar Guide',
		previewDescription:
			'Deadside cheats guide — undetected ESP wallhack, soft aim, radar & {antiCheat} rebuilds for survival raids on PC. Buy from $35 at deadsidecheats.com.',
		setupTitle: 'Deadside Cheats Setup | Windows PC Install Guide',
		setupDescription:
			'Install {brand} on PC — activate ESP, soft aim & radar step by step. Setup guide at deadsidecheats.com. Check {antiCheat} status before your first match.',
		supportTitle: 'Deadside Cheats Support | License & Setup Help',
		supportDescription:
			'Support for license delivery, ESP setup & billing on PC. Email {email} with your order ID. Fast help at deadsidecheats.com/support before you play.',
		faqTitle: 'Deadside Cheats FAQ | ESP, Aimbot & BattlEye',
		faqDescription:
			'FAQ for Deadside cheats — delivery, setup, survival raid use, {antiCheat} updates & pricing on PC. Answers at deadsidecheats.com before you buy.',
		reviewsTitle: 'What Players Say | Deadside Cheats Reviews',
		reviewsDescription:
			'What Deadside players actually say — ESP in raid, BattlEye after patches, setup, and support. Honest ratings from license holders at deadsidecheats.com.',
		blogTitle: 'Deadside Blog | Guides & Patch Tips | {brand}',
		blogDescription:
			'Deadside guides — survival tips, ESP & aimbot notes, loot routes & {antiCheat} updates for PC. Read patch notes and buyer guides at deadsidecheats.com/blog.',
	},

	/** On-page marketing copy (tokens allowed) */
	copy: {
		tagline: 'Undetected {primaryKeyword} — ESP, aimbot, and radar for PC',
		summary: '{brand} is an undetected {game} cheats package for Windows PC. Includes ESP, soft aim, and radar, with {antiCheat} maintenance after patches.',
		heroLede: 'Undetected ESP, soft aim, and radar for Deadside on Windows PC.',
		blogLabel: 'Deadside Intel',
		ctaBuy: 'Get Access',
		ctaBuyShort: 'Buy',
		featuresIntro: 'Everything included in one license for {game} on Windows PC.',
		storeIntro: 'Pick a plan. Same features on both. Instant delivery after payment.',
		statusIntro: 'Check here after a {game} or {antiCheat} patch before you queue.',
		previewIntro: '{brand} for Deadside — ESP wallhack, soft aim, 2D radar, and BattlEye rebuilds after patches.',
		setupIntro: 'Install {brand} on Windows PC after you buy. Follow these short steps.',
		supportIntro: 'Need help with {brand}? Email {email} with your order ID.',
		faqIntro: 'Short answers about delivery, setup, updates, and refunds.',
		reviewsIntro:
			'Unfiltered write-ups from players who bought — what ESP feels like in a raid, when setup went sideways, and whether it still works after a BattlEye patch.',
		chipEsp: 'ESP / wallhack',
		chipAim: 'Soft aim',
		chipRadar: '2D radar',
		chipUpdates: 'Patch updates',
		navPreview: 'Cheats',
		navFeatures: 'Features',
		navStore: 'Store',
		navStatus: 'Status',
		navReviews: 'Reviews',
	},

	/**
	 * Sitemap labels — XML is generated at build/dev from routes + these strings.
	 * Domain comes from `url` (also written to robots.txt via sync:brand).
	 * Tokens: {brand} {game} {antiCheat} {email} {primaryKeyword}
	 */
		sitemap: {
		/** YYYY-MM-DD — Brand Studio can bump this on refresh crawl dates */
		contentLastmod: '2026-08-25',
		blogImageTitle: '{brand} blog',
		blogImageCaption: 'Tips and updates for {primaryKeyword}',
		reviewsImageTitle: '{brand} reviews',
		reviewsImageCaption: 'Deadside cheats — what buyers say about {primaryKeyword}',
		images: [
			{
				src: '/images/deadside-screenshot-01.webp',
				title: 'Deadside ESP loot and item detection',
				caption: 'Deadside ESP wallhack with distance-tagged loot boxes and weapons',
			},
			{
				src: '/images/deadside-screenshot-02.webp',
				title: 'Deadside wallhack ESP overlay',
				caption: 'Deadside wallhack ESP with loot tags visible through walls',
			},
			{
				src: '/images/deadside-screenshot-03.webp',
				title: 'Deadside cheats in-match view',
				caption: 'Deadside gameplay session with cheats running on Windows PC',
			},
			{
				src: '/images/deadside-screenshot-04.webp',
				title: 'Deadside ESP player tracking',
				caption: 'Deadside ESP showing enemy names, health, and distance through the map',
			},
			{
				src: '/images/deadside-screenshot-05.webp',
				title: 'Deadside ESP threat markers',
				caption: 'Deadside ESP distance markers for players and loot in live matches',
			},
			{
				src: '/images/deadside-screenshot-06.webp',
				title: 'Deadside cheats combat ESP',
				caption: 'Deadside cheats ESP active during a live Deadside match',
			},
			{
				src: '/images/deadside-screenshot-07.webp',
				title: 'Deadside wallhack player ESP',
				caption: 'Deadside wallhack ESP with player outlines and distance tags',
			},
			{
				src: '/images/deadside-screenshot-08.webp',
				title: 'Deadside ESP and loot ESP gameplay',
				caption: 'Deadside ESP loot tags and wallhack overlay during ranked gameplay',
			},
		],
	},
} as const;

export type Brand = typeof brand;

/** Replace {brand} {game} {antiCheat} {email} {primaryKeyword} {checkout} */
export function fillBrandTokens(input: string): string {
	return input
		.replaceAll('{brand}', brand.name)
		.replaceAll('{game}', brand.game)
		.replaceAll('{antiCheat}', brand.antiCheat)
		.replaceAll('{email}', brand.supportEmail)
		.replaceAll('{primaryKeyword}', brand.keywords.primary)
		.replaceAll('{checkout}', brand.checkoutUrl);
}

/** Locked title formula fallback: `{Game} {Topic} | {Brand}` */
export function seoTitle(topic: string): string {
	const title = `${brand.game} ${topic} | ${brand.name}`;
	return title.length <= 60 ? title : `${topic} | ${brand.name}`;
}

/** Keep descriptions in Google's preferred range (~140–160 chars). */
export function seoDescription(template: string): string {
	let text = fillBrandTokens(template).trim();
	if (text.length < 140) {
		const pad = text.toLowerCase().includes('deadsidecheats.com')
			? ' Windows PC license with BattlEye maintenance after patches.'
			: ' Compare plans and guides at deadsidecheats.com.';
		text = `${text.replace(/[.…]+$/, '')}.${pad}`;
	}
	if (text.length <= 160) return text;
	const trimmed = text.slice(0, 160);
	const lastSpace = trimmed.lastIndexOf(' ');
	return lastSpace > 130 ? trimmed.slice(0, lastSpace) : trimmed.slice(0, 160);
}

/** Resolved EN home meta from brand.seo (title clamp lives in site-core.seoPageTitle). */
export function homeSeo() {
	return {
		title: fillBrandTokens(brand.seo.homeTitle),
		description: seoDescription(brand.seo.homeDescription),
	};
}
