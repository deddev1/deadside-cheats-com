/**
 * SINGLE SOURCE OF TRUTH for template rebrands.
 * Employees: use Brand Studio at http://localhost:4321/brand-studio/ during `astro dev`.
 * Do not scatter brand strings across components.
 */
export const brand = {
	/** Public brand name (nav, footer, H1 hero, schema Organization) */
	name: 'Naraka Cheats',
	/** Short product label if needed */
	shortName: 'Naraka Cheats',
	/** Canonical origin — no trailing slash */
	url: 'https://narakacheats.org',
	locale: 'en',
	market: 'Worldwide',
	supportEmail: 'support@narakacheats.org',
	checkoutUrl: 'https://zadeyo.com/go/QRH?to=%2Fproducts%2Fnaraka',

	/** Public profiles for Organization sameAs + Twitter cards (edit in Brand Studio). */
	social: {
		twitterSite: '@narakacheats',
		sameAs: [
			'https://x.com/narakacheats',
			'https://www.reddit.com/r/NARAKA/',
			'https://store.steampowered.com/app/1203220/NARAKA_BLADEPOINT/',
		],
	} as const,

	/** Game this template instance targets */
	game: 'Naraka',
	/** Official game page — linked from the hero image */
	gameUrl: 'https://store.steampowered.com/app/1203220/NARAKA_BLADEPOINT/',
	/** Anti-cheat name used in Status / FAQ copy */
	antiCheat: 'NEAC',

	logo: '/images/naraka-cheats-logo.webp',
	logoRaster: '/images/naraka-cheats-logo.png',
	logoRasterWidth: 512,
	logoRasterHeight: 512,
	logoAlt: 'Naraka Cheats logo',
	defaultOgImage: '/images/naraka-cheats-hero-1199w.webp',
	heroImage: '/images/naraka-cheats-hero-1199w.webp',
	/** Product demo clip — lazy-loaded on homepage; Supabase public URL */
	demoVideoUrl:
		'https://boqgsoiwnpbisvrxulbe.supabase.co/storage/v1/object/public/naraka/naraka%20cheats/Naraka%202026.02.10%20-%2013.08.41.03.DVR%20-%20Trim%20(1).mp4',
	demoVideoPoster: '/images/naraka-screenshot-06.webp',

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
		accent: '#E50920',
		bg: '#07090A',
		soft: '#FFFFFF',
		deep: '#8F0715',
		hover: '#FF1F35',
		panel: '#0E1113',
		elevated: '#15191B',
		line: '#252A2C',
		ink: '#F1F3F3',
		inkHeading: '#FFFFFF',
		inkSecondary: '#C5CACA',
		inkMuted: '#8D9698',
		link: '#E50920',
	},

	/**
	 * Keyword system — primary drives titles; list feeds schema / meta keywords.
	 * Page-specific targeting lives in src/data/seo-keywords.ts
	 */
	keywords: {
		primary: 'naraka cheats',
		list: [
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
			'naraka mod menu',
			'undetected naraka cheats',
			'naraka cheats undetected',
			'naraka aimbot hack',
			'naraka esp hack',
			'best naraka cheats 2026',
			'naraka cheats for ranked',
			'naraka external cheat',
		] as const,
	},

	/**
	 * Editable SEO meta — tokens: {brand} {game} {antiCheat} {email} {primaryKeyword}
	 * Aim ~50–60 chars titles, ~140–160 chars descriptions.
	 */
	seo: {
		homeTitle: 'Naraka Cheats 2026 | Undetected ESP, Aimbot & Radar',
		homeDescription:
			'Buy undetected Naraka cheats at narakacheats.org — ESP, aimbot, wallhack & radar for PC. NEAC updates included. From $35/month.',
		featuresTitle: 'Naraka Cheats Features | ESP, Aimbot & Radar',
		featuresDescription:
			'Full Naraka cheats feature list — ESP wallhack, soft aim, 2D radar & mod menu toggles on PC. {antiCheat} maintenance at narakacheats.org.',
		storeTitle: 'Naraka Cheats Pricing | $35/mo or $150 Lifetime',
		storeDescription:
			'Buy Naraka cheats at narakacheats.org — $35/month or $150 lifetime. ESP, aimbot & radar on PC. Same features, instant delivery.',
		statusTitle: 'Naraka Status | Undetected {antiCheat} Updates',
		statusDescription:
			'Live status after {game} & {antiCheat} patches. Check undetected ESP, aimbot & radar rebuilds on PC before you queue. narakacheats.org.',
		previewTitle: 'Naraka Cheats | ESP, Aimbot & Wallhack Guide',
		previewDescription:
			'Naraka cheats guide — undetected ESP wallhack, soft aim, radar & {antiCheat} rebuilds on PC. Compare features & buy from $35 at narakacheats.org.',
		setupTitle: 'Naraka Cheats Setup | Windows PC Install Guide',
		setupDescription:
			'Install {brand} on PC — activate ESP, soft aim & radar step by step. Setup guide at narakacheats.org. Check {antiCheat} status before your first match.',
		supportTitle: 'Naraka Cheats Support | License & Setup Help',
		supportDescription:
			'Support for license delivery, ESP setup & billing on PC. Email {email} with your order ID. narakacheats.org/support.',
		faqTitle: 'Naraka Cheats FAQ | ESP, Aimbot & {antiCheat}',
		faqDescription:
			'FAQ for naraka cheats — delivery, setup, undetected status, {antiCheat} updates & pricing on PC. Answers at narakacheats.org before you buy.',
		reviewsTitle: 'Naraka Cheats Reviews | Real Buyer Feedback',
		reviewsDescription:
			'Real buyer reviews for {brand} — ESP, soft aim, radar & {antiCheat} maintenance on PC. See what license holders say at narakacheats.org.',
		blogTitle: 'Naraka Blog | Guides & Patch Tips | {brand}',
		blogDescription:
			'Naraka guides — ranked tips, ESP & aimbot notes, hero tiers & {antiCheat} updates for PC. Read the blog at narakacheats.org/blog.',
	},

	/** On-page marketing copy (tokens allowed) */
	copy: {
		tagline: 'Undetected {primaryKeyword} — ESP, aimbot, and radar for PC',
		summary: '{brand} is an undetected {game} cheats package for Windows PC. Includes ESP, soft aim, and radar, with {antiCheat} maintenance after patches.',
		heroLede: 'Undetected ESP, soft aim, and radar for Naraka on Windows PC.',
		blogLabel: 'Naraka Intel',
		ctaBuy: 'Get Access',
		ctaBuyShort: 'Buy',
		featuresIntro: 'Everything included in one license for {game} on Windows PC.',
		storeIntro: 'Pick a plan. Same features on both. Instant delivery after payment.',
		statusIntro: 'Check here after a {game} or {antiCheat} patch before you queue.',
		previewIntro: '{brand} for Naraka — ESP wallhack, soft aim, 2D radar, and NEAC rebuilds after patches.',
		setupIntro: 'Install {brand} on Windows PC after you buy. Follow these short steps.',
		supportIntro: 'Need help with {brand}? Email {email} with your order ID.',
		faqIntro: 'Short answers about delivery, setup, updates, and refunds.',
		reviewsIntro: 'Feedback from {brand} buyers — ESP, soft aim, radar, and support.',
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
		reviewsImageCaption: 'What buyers say about {primaryKeyword}',
		images: [
			{
				src: '/images/naraka-screenshot-01.webp',
				title: 'Naraka ESP wallhack player boxes',
				caption: 'Naraka ESP wallhack showing player boxes and distance tags',
			},
			{
				src: '/images/naraka-screenshot-02.webp',
				title: 'Naraka wallhack ESP overlay',
				caption: 'Naraka wallhack ESP highlighting enemies through map geometry',
			},
			{
				src: '/images/naraka-screenshot-03.webp',
				title: 'Naraka aimbot soft aim in match',
				caption: 'Naraka aimbot soft aim targeting during competitive combat',
			},
			{
				src: '/images/naraka-screenshot-04.webp',
				title: 'Naraka Cheats mod menu overlay',
				caption: 'Naraka Cheats mod menu with ESP, aimbot, and radar toggles on Windows PC',
			},
			{
				src: '/images/naraka-screenshot-05.webp',
				title: 'Naraka radar hack overlay',
				caption: 'Naraka 2D radar hack with directional threat cues on Windows PC',
			},
			{
				src: '/images/naraka-screenshot-06.webp',
				title: 'Naraka cheats in-match overlay',
				caption: 'Naraka cheats ESP and aimbot overlay during a live competitive match',
			},
			{
				src: '/images/naraka-screenshot-07.webp',
				title: 'Naraka wallhack player ESP',
				caption: 'Naraka wallhack ESP with player outlines and distance tags',
			},
			{
				src: '/images/naraka-screenshot-08.webp',
				title: 'Naraka aimbot and ESP gameplay',
				caption: 'Naraka aimbot and ESP wallhack combined during ranked gameplay',
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

/** Keep descriptions short; tokens allowed. */
export function seoDescription(template: string): string {
	const text = fillBrandTokens(template).trim();
	return text.length <= 160 ? text : `${text.slice(0, 157).trim()}…`;
}

/** Resolved EN home meta from brand.seo (title clamp lives in site-core.seoPageTitle). */
export function homeSeo() {
	return {
		title: fillBrandTokens(brand.seo.homeTitle),
		description: seoDescription(brand.seo.homeDescription),
	};
}
