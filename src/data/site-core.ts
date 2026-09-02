import { brand, fillBrandTokens, seoDescription, seoTitle } from './brand';

const TITLE_TARGET_MIN = 45;
const TITLE_MAX = 60;

/** Known short templates → longer SERP-friendly titles (45–60 chars). */
const TITLE_REPLACEMENTS: ReadonlyArray<[RegExp, string]> = [
	[/\| FAQ$/i, '| Deadside Cheats FAQ & Guide'],
	[/^Privacy Policy \| Deadside Cheats$/i, 'Privacy Policy | Deadside Cheats Data & Cookies'],
	[/^Refund Policy \| Deadside Cheats$/i, 'Refund Policy | Deadside Cheats License Terms'],
	[/^Terms of Use \| Deadside Cheats$/i, 'Terms of Use | Deadside Cheats License Agreement'],
	[/^Deadside Guides Hub \| Survival & Cheat Tips$/i, 'Deadside Guides Hub | Survival & Cheat Tips PC'],
	[/^Deadside Cheats Pricing \| \$35\/mo or \$150$/i, 'Deadside Cheats Pricing | $35/mo or $150 Lifetime'],
	[/^Deadside 2D [Rr]adar \| 2D Threat Map$/i, 'Deadside 2D Radar | 2D Threat Map | Deadside Cheats'],
	[/^Deadside ESP \| Wallhack & Player Boxes$/i, 'Deadside ESP | Wallhack & Player Boxes | Deadside Cheats'],
	[
		/^Deadside Aimbot \| Soft Aim & FOV Settings$/i,
		'Deadside Aimbot | Soft Aim & FOV Settings | Deadside Cheats',
	],
];

function expandShortTitle(text: string): string {
	for (const [pattern, replacement] of TITLE_REPLACEMENTS) {
		if (pattern.test(text)) {
			const expanded = text.replace(pattern, replacement);
			if (expanded.length >= TITLE_TARGET_MIN) return expanded;
		}
	}
	if (text.length >= TITLE_TARGET_MIN) return text;

	const suffixes = [
		' | ESP, Aimbot & Radar',
		' | Undetected PC Cheats',
		' | Deadside Cheats Guide',
		' | Windows PC License',
	];
	for (const suffix of suffixes) {
		const candidate = `${text}${suffix}`;
		if (candidate.length >= TITLE_TARGET_MIN && candidate.length <= TITLE_MAX) return candidate;
	}

	const tailSuffixes = [' for PC', ' 2026', ' Guide', ' PC', ' | PC'];
	for (const suffix of tailSuffixes) {
		const candidate = `${text}${suffix}`;
		if (candidate.length >= TITLE_TARGET_MIN && candidate.length <= TITLE_MAX) return candidate;
	}

	if (text.length < 30) return `${text} | Deadside Cheats PC`;
	return text;
}

/**
 * Title clamp lives here — NOT in brand.ts.
 * Brand Studio rewrites brand.ts on every save; helpers here stay stable.
 */
export function seoPageTitle(template: string): string {
	let text = expandShortTitle(fillBrandTokens(template).trim());
	/** Google SERP titles typically display ~50–60 chars; clamp at 60. */
	if (text.length <= TITLE_MAX) return text;
	const trimmed = text.slice(0, TITLE_MAX);
	const lastSpace = trimmed.lastIndexOf(' ');
	return lastSpace > 45 ? trimmed.slice(0, lastSpace) : trimmed.slice(0, TITLE_MAX);
}

export { brand, fillBrandTokens, seoDescription, seoTitle };

const copyDefaults = {
	tagline: 'Undetected {primaryKeyword} — ESP, aimbot, and radar for PC',
	summary:
		'{brand} is an undetected {game} cheat package for Windows PC. Includes ESP, soft aim, and radar, with {antiCheat} maintenance after patches.',
	heroLede: 'Hacks and cheats available — 0% detection.',
	blogLabel: '{game} Intel',
	ctaBuy: 'Buy now',
	ctaBuyShort: 'Buy',
	featuresIntro: 'Everything included in one license for {game} on Windows PC.',
	storeIntro: 'Pick a plan. Same features on both. Instant delivery after payment.',
	statusIntro: 'Check here after a {game} or {antiCheat} patch before you play.',
	previewIntro: 'A quick look at {brand} — ESP, aimbot, radar, and updates after patches.',
	setupIntro: 'Install {brand} on Windows PC after you buy. Follow these short steps.',
	supportIntro: 'Need help with {brand}? Email {email} with your order ID.',
	faqIntro: 'Short answers about delivery, setup, updates, and refunds.',
	reviewsIntro:
		'Unfiltered write-ups from players who bought — what ESP feels like in a raid, when setup went sideways, and whether it still works after a BattlEye patch.',
	chipEsp: 'ESP / wallhack',
	chipAim: 'Soft aim',
	chipRadar: '2D radar',
	chipUpdates: 'Patch updates',
	navPreview: 'Preview',
	navFeatures: 'Features',
	navStore: 'Store',
	navStatus: 'Status',
	navReviews: 'Reviews',
} as const;

const seoDefaults = {
	homeTitle: 'Deadside Cheats 2026 | ESP, Aimbot & Radar PC',
	homeDescription:
		'Buy undetected Deadside cheats at deadsidecheat.com — ESP, aimbot, wallhack & radar for PC. BattlEye updates included. Plans from $35/month.',
	featuresTitle: 'Deadside Cheats Features | ESP, Aimbot & Radar',
	featuresDescription:
		'Full Deadside cheats feature list — ESP wallhack, soft aim, 2D radar & mod menu toggles on PC. {antiCheat} maintenance at deadsidecheat.com.',
	storeTitle: 'Deadside Cheats Pricing | $35/mo or $150 Lifetime',
	storeDescription:
		'Buy Deadside cheats at deadsidecheat.com — $35/month or $150 lifetime. ESP, aimbot & radar on PC. Same features, instant delivery.',
	statusTitle: 'Deadside Status | Undetected {antiCheat} Updates',
	statusDescription:
		'Live status after {game} & {antiCheat} patches. Check undetected ESP, aimbot & radar rebuilds on PC before you queue. deadsidecheat.com.',
	previewTitle: 'Deadside Cheats | ESP, Aimbot & Wallhack Guide',
	previewDescription:
		'Deadside cheats guide — undetected ESP wallhack, soft aim, radar & {antiCheat} rebuilds on PC. Compare features & buy from $35 at deadsidecheat.com.',
	setupTitle: 'Deadside Cheats Setup | Windows PC Install Guide',
	setupDescription:
		'Install {brand} on PC — activate ESP, soft aim & radar step by step. Setup guide at deadsidecheat.com. Check {antiCheat} status before your first match.',
	supportTitle: 'Deadside Cheats Support | License & Setup Help',
	supportDescription:
		'Support for license delivery, ESP setup & billing on PC. Email {email} with your order ID. deadsidecheat.com/support.',
	faqTitle: 'Deadside Cheats FAQ | ESP, Aimbot & BattlEye PC',
	faqDescription:
		'FAQ for deadside cheats — delivery, setup, undetected status, {antiCheat} updates & pricing on PC. Answers at deadsidecheat.com before you buy.',
	reviewsTitle: 'What Players Say | Deadside Cheats Reviews PC',
	reviewsDescription:
		'What Deadside players actually say — ESP in raid, BattlEye after patches, setup, and support. Honest ratings from license holders at deadsidecheat.com.',
	blogTitle: 'Deadside Blog | Guides & Patch Tips | {brand}',
	blogDescription:
		'Deadside guides — survival tips, ESP & aimbot notes, loot routes & {antiCheat} updates for PC. Read the blog at deadsidecheat.com/blog.',
} as const;

type SeoShape = typeof seoDefaults;
type CopyShape = typeof copyDefaults;

/** Always-safe copy/seo — Brand Studio saves must never crash the site. */
const brandExtra = brand as typeof brand & { seo?: Partial<SeoShape>; copy?: Partial<CopyShape> };
export const brandSeo: SeoShape = { ...seoDefaults, ...brandExtra.seo };
export const brandCopy: CopyShape = { ...copyDefaults, ...brandExtra.copy };

/** Resolved EN home meta */
export function homeSeo() {
	return {
		title: seoPageTitle(brandSeo.homeTitle),
		description: seoDescription(brandSeo.homeDescription),
	};
}

/** Site config derived from brand — import this in layouts/components. */
export const siteConfig = {
	name: brand.name,
	url: brand.url,
	locale: brand.locale,
	market: brand.market,
	supportEmail: brand.supportEmail,
	logo: brand.logo,
	logoRaster: brand.logoRaster,
	logoRasterWidth: brand.logoRasterWidth,
	logoRasterHeight: brand.logoRasterHeight,
	logoAlt: brand.logoAlt,
	checkoutUrl: brand.checkoutUrl,
	gameUrl: brand.gameUrl,
	defaultOgImage: brand.defaultOgImage,
	heroImage: brand.heroImage,
	demoVideoUrl: brand.demoVideoUrl,
	demoVideoPoster: brand.demoVideoPoster,
	twitterSite: brand.social.twitterSite,
	socialSameAs: [...brand.social.sameAs],
} as const;

/** Blog eyebrow / title suffix */
export const blogLabel = fillBrandTokens(brandCopy.blogLabel);

export const productInfo = {
	name: brand.name,
	shortName: brand.game,
	brand: brand.name,
	tagline: fillBrandTokens(brandCopy.tagline),
	summary: fillBrandTokens(brandCopy.summary),
	game: brand.game,
	delivery: 'Digital license delivery after purchase confirmation',
	platforms: [...brand.platforms],
	updateCadence: fillBrandTokens(
		'Updates are published when {game} or {antiCheat} patches need a rebuild',
	),
	supportHours: 'Support requests are reviewed daily',
	plans: brand.plans.map((p) => ({ ...p })),
	currency: brand.currency,
	heroLede: fillBrandTokens(brandCopy.heroLede),
	features: {
		esp: [
			'Solo farmers and matchers ESP / wallhack',
			'Player growth stage and threat cues',
			'Loot and loot markers',
			'Distance readouts',
			'Toggleable ESP categories',
			'Corpse and loot highlights',
		],
		aimbot: [
			'Soft aim and aimbot controls',
			'Smoothness and FOV settings',
			'Bone priority',
			'Hotkeys mid-session',
			'Per-weapon profiles',
		],
		radar: ['2D radar overlay', 'Adjustable range', 'Works in survival raids and squad sessions'],
		general: [
			fillBrandTokens('{antiCheat} maintenance after patches'),
			'Digital delivery after checkout',
			'Setup guide and support',
		],
	},
} as const;
