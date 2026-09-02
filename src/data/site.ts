export {
	brand,
	blogLabel,
	fillBrandTokens,
	homeSeo,
	seoDescription,
	seoPageTitle,
	seoTitle,
	siteConfig,
	productInfo,
} from './site-core';

import { fillBrandTokens } from './brand';

function faq<T extends { question: string; answer: string; seoTitle: string; seoDescription: string }>(item: T): T {
	return {
		...item,
		question: fillBrandTokens(item.question),
		answer: fillBrandTokens(item.answer),
		seoTitle: fillBrandTokens(item.seoTitle),
		seoDescription: fillBrandTokens(item.seoDescription),
	};
}

function reviewMeta<T extends { seoTitle: string; seoDescription: string }>(item: T): T {
	return {
		...item,
		seoTitle: fillBrandTokens(item.seoTitle),
		seoDescription: fillBrandTokens(item.seoDescription),
	};
}

export const trustSignals = {
	status: 'Online',
	statusNote: fillBrandTokens('{brand} is live for {game} on Windows PC.'),
	delivery: 'Instant digital delivery',
	platform: 'Windows 10 & 11',
	antiCheat: fillBrandTokens('{antiCheat} maintenance supported'),
} as const;

export const seoLandingPages = [
	{ label: fillBrandTokens('{primaryKeyword}'), href: '/' },
	{ label: fillBrandTokens('Undetected {primaryKeyword}'), href: '/undetected-deadside-cheats/' },
	{ label: fillBrandTokens('{game} cheats'), href: '/deadside-cheats/' },
	{ label: fillBrandTokens('{game} cheats 2026'), href: '/deadside-cheats-2026/' },
	{ label: fillBrandTokens('{game} esp'), href: '/deadside-esp/' },
	{ label: fillBrandTokens('{game} wallhack'), href: '/deadside-esp/' },
	{ label: fillBrandTokens('{game} aimbot'), href: '/deadside-aimbot/' },
	{ label: fillBrandTokens('{game} 2D radar'), href: '/deadside-radar-hack/' },
	{ label: fillBrandTokens('Best {primaryKeyword}'), href: '/best-deadside-cheats/' },
	{ label: fillBrandTokens('{antiCheat} bypass'), href: '/battleye-bypass/' },
	{ label: fillBrandTokens('{game} cheat download'), href: '/setup/' },
	{ label: fillBrandTokens('{game} setup'), href: '/setup/' },
	{ label: fillBrandTokens('{game} pricing'), href: '/pricing/' },
] as const;

export const mainNav = [
	{ label: 'Home', href: '/' },
	{ label: 'Hacks', href: '/deadside-cheats/' },
	{ label: 'Aimbot', href: '/deadside-aimbot/' },
	{ label: 'ESP', href: '/deadside-esp/' },
	{ label: 'Features', href: '/features/' },
	{ label: 'Pricing', href: '/pricing/' },
	{ label: 'Setup', href: '/setup/' },
	{ label: 'Updates', href: '/updates/' },
	{ label: 'FAQ', href: '/faq/' },
] as const;

export const footerNav = [
	{ label: fillBrandTokens('{game} cheat update log'), href: '/updates/' },
	{ label: fillBrandTokens('Contact {brand} support'), href: '/support/' },
	{ label: 'Refund policy details', href: '/refund-policy/' },
	{ label: 'Privacy policy details', href: '/privacy-policy/' },
	{ label: 'Terms of use', href: '/terms/' },
] as const;

export const footerExplore = [
	{ label: fillBrandTokens('{brand} home'), href: '/' },
	{ label: fillBrandTokens('{game} cheats pillar'), href: '/deadside-cheats/' },
	{ label: fillBrandTokens('Live {game} status'), href: '/updates/' },
	{ label: fillBrandTokens('{game} ESP overlays'), href: '/deadside-esp/' },
	{ label: fillBrandTokens('{game} Aimbot controls'), href: '/deadside-aimbot/' },
	{ label: fillBrandTokens('{game} 2D radar'), href: '/deadside-radar-hack/' },
	{ label: fillBrandTokens('Full {game} cheats feature list'), href: '/features/' },
	{ label: 'Monthly & lifetime pricing', href: '/pricing/' },
	{ label: fillBrandTokens('{game} cheats setup guide'), href: '/setup/' },
	{ label: fillBrandTokens('{game} cheats FAQ'), href: '/faq/' },
	{ label: fillBrandTokens('{brand} reviews'), href: '/reviews/' },
	{ label: fillBrandTokens('{game} Intel blog'), href: '/blog/' },
	{ label: fillBrandTokens('Contact {brand} support'), href: '/support/' },
] as const;

export type FaqItem = {
	question: string;
	answer: string;
	slug: string;
	seoTitle: string;
	seoDescription: string;
};

export const homeFaqs: readonly FaqItem[] = [
	faq({
		question: 'What is {brand}?',
		answer:
			'{brand} is an undetected {primaryKeyword} package for Deadside on Windows PC. It includes ESP wallhack, 2D radar, and aimbot controls, with {antiCheat} maintenance and setup support.',
		slug: 'what-are-deadside-cheats',
		seoTitle: 'What is {brand}? | Deadside Cheats FAQ & Guide',
		seoDescription:
			'{brand} explained: undetected ESP, radar, and aimbot for {game} on Windows PC with {antiCheat} maintenance.',
	}),
	faq({
		question: 'Are {primaryKeyword} undetected in 2026?',
		answer:
			'{brand} is maintained for {game} with rebuilds after {antiCheat} and game patches. Check the Status page before you queue. No cheat can guarantee permanent undetected status — maintenance and responsible use matter.',
		slug: 'are-deadside-cheats-undetected-in-2026',
		seoTitle: 'Are {brand} Undetected in 2026? | Deadside Cheats FAQ & Guide',
		seoDescription:
			'How {brand} stays maintained after {antiCheat} patches in 2026 — and why no cheat can promise permanent undetected status.',
	}),
	faq({
		question: 'Does this work in survival raids and squad sessions?',
		answer:
			'Yes. ESP, radar, and aimbot are built for {game} raid flow — spotting enemy players, tracking loot crates, and staying aware near compounds, military bases, and extract routes in PvP raids and squad sessions.',
		slug: 'solo-farmer-and-raider-sessions',
		seoTitle: 'Raid Session and PvP Support | Deadside Cheats FAQ & Guide',
		seoDescription:
			'{brand} works in survival raids and squad sessions — ESP, radar, and aimbot for Windows PC.',
	}),
	faq({
		question: 'What is included — ESP, wallhack, radar, or Aimbot?',
		answer:
			'{brand} bundles ESP wallhack, loot markers, 2D radar cues, and configurable Aimbot in one license. See Features for the full list.',
		slug: 'esp-wallhack-radar-or-aimbot',
		seoTitle: 'What Is Included: ESP, Wallhack, Radar, Aimbot | Deadside Cheats FAQ & Guide',
		seoDescription:
			'One {brand} license includes ESP wallhack, loot markers, 2D radar cues, and configurable Aimbot for Windows PC.',
	}),
	faq({
		question: 'How are licenses delivered?',
		answer:
			'After payment is confirmed, {brand} license details are delivered digitally through checkout. Timing can vary by payment method and order review. Keep your order confirmation ready if you contact support.',
		slug: 'how-are-licenses-delivered',
		seoTitle: 'How Are {brand} Licenses Delivered? | Deadside Cheats FAQ & Guide',
		seoDescription:
			'{brand} licenses are delivered digitally after payment confirmation. Timing varies by payment method and order review.',
	}),
	faq({
		question: 'Where do I check updates after a Deadside or {antiCheat} patch?',
		answer:
			'Maintenance notes are posted on the Status page when a Deadside or {antiCheat} update affects the package. That is the fastest place to confirm whether a new {brand} build is live.',
		slug: 'where-to-check-updates',
		seoTitle: 'Where to Check {game} / {antiCheat} Updates | Deadside Cheats FAQ & Guide',
		seoDescription:
			'Check the Status page after {game} or {antiCheat} patches to confirm the latest {brand} build status.',
	}),
	faq({
		question: 'How do I contact support?',
		answer:
			'Use the Support page or email {email}. Include your order details, package length, and a clear description of the setup issue so replies can be faster.',
		slug: 'how-to-contact-support',
		seoTitle: 'How to Contact {brand} Support | Deadside Cheats FAQ & Guide',
		seoDescription:
			'Contact {brand} support via the Support page or {email} with your order details for faster help.',
	}),
	faq({
		question: 'How much do {primaryKeyword} cost in 2026?',
		answer:
			'{brand} is $35 per month or $150 lifetime USD on Windows PC. Both plans include ESP wallhack, 2D radar, soft aim, and {antiCheat} maintenance rebuilds. See Pricing for the latest plan details before checkout.',
		slug: 'how-much-do-deadside-cheats-cost',
		seoTitle: 'How Much Do {game} Hacks Cost? | Deadside Cheats FAQ & Guide',
		seoDescription:
			'{brand} pricing in 2026: $35/month or $150 lifetime for ESP, aimbot, radar, and {antiCheat} updates on Windows PC.',
	}),
	faq({
		question: 'How do I install {primaryKeyword} on Windows PC?',
		answer:
			'After checkout, follow the Setup guide: download the loader, disable conflicting overlays, launch {brand}, and enable ESP, radar, or aimbot toggles in the mod menu. Most buyers finish first launch in under 15 minutes. Email {email} if activation fails.',
		slug: 'how-to-install-deadside-cheats',
		seoTitle: 'How to Install {game} Hacks on Windows PC | Deadside Cheats FAQ & Guide',
		seoDescription:
			'Step-by-step {brand} install on Windows PC — loader, mod menu, and ESP/aimbot toggles. Setup help at deadsidecheat.com.',
	}),
] as const;

export const seoFaqs: readonly FaqItem[] = [
	...homeFaqs,
	faq({
		question: 'What is a {game} wallhack?',
		answer:
			'A {game} wallhack is an ESP overlay that shows enemy players and loot through walls. {brand} includes distance readouts, weapon and loot cues, and toggleable categories.',
		slug: 'what-is-a-deadside-wallhack',
		seoTitle: 'What Is a {game} Wallhack? | Deadside Cheats FAQ & Guide',
		seoDescription:
			'A {game} wallhack is ESP that reveals players and loot through walls — with distance, bases, and category toggles.',
	}),
	faq({
		question: 'Does {brand} include a 2D radar?',
		answer:
			'Yes. {brand} includes 2D radar overlays that highlight nearby threats outside your view — useful for flanks and compound zones.',
		slug: 'does-deadside-cheats-include-radar-hack',
		seoTitle: 'Does {brand} Include a 2D Radar? | Deadside Cheats FAQ & Guide',
		seoDescription:
			'Yes — {brand} includes 2D radar overlays for nearby threats outside your FOV. Compare ESP, aimbot, and radar in one license at deadsidecheat.com.',
	}),
	faq({
		question: 'How does {antiCheat} affect {primaryKeyword}?',
		answer:
			'{antiCheat} monitors {game} on Windows PC. {brand} posts maintenance notes after patches that may need a rebuild. Check Status before you queue.',
		slug: 'battleye-anti-cheat-and-deadside-cheats',
		seoTitle: 'How {antiCheat} Affects {brand} | Deadside Cheats FAQ & Guide',
		seoDescription:
			'{antiCheat} may require {brand} rebuilds after patches. Status notes explain the update workflow.',
	}),
	faq({
		question: 'Can I buy undetected {game} cheats for Windows PC?',
		answer:
			'Yes — {brand} sells monthly and lifetime licenses for Windows PC with ESP, radar, and aimbot in one stack. Compare plans on Store before checkout.',
		slug: 'buy-undetected-deadside-cheats-windows-pc',
		seoTitle: 'Buy Undetected {game} Hacks for Windows PC | Deadside Cheats FAQ & Guide',
		seoDescription:
			'Buy monthly or lifetime {brand} licenses for Windows PC — ESP, radar, and aimbot in one stack. Compare pricing before checkout.',
	}),
	faq({
		question: 'What is a {game} ESP?',
		answer:
			'A {game} ESP is a visibility overlay that shows enemy players, weapons, and loot through walls. {brand} ESP includes player boxes, distance tags, loot markers, and toggleable categories for PvP raids and squad sessions.',
		slug: 'what-is-deadside-esp-hack',
		seoTitle: 'What Is a {game} ESP Hack? | Deadside Cheats FAQ & Guide',
		seoDescription:
			'{game} ESP explained — player wallhack, distance tags, and loot markers in one {brand} license for Windows PC.',
	}),
	faq({
		question: 'What is a {game} aimbot?',
		answer:
			'A {game} aimbot provides aim assist with configurable FOV, smoothing, and bone priority. {brand} uses soft aim profiles designed to feel natural in firefights and duels — tune settings in the mod menu before you deploy.',
		slug: 'what-is-deadside-aimbot-hack',
		seoTitle: 'What Is a {game} Aimbot Hack? | Deadside Cheats FAQ & Guide',
		seoDescription:
			'{game} aimbot with soft aim, FOV, and smoothing controls — included in {brand} for Windows PC.',
	}),
	faq({
		question: 'What are the best {primaryKeyword} in 2026?',
		answer:
			'Top {primaryKeyword} in 2026 combine undetected ESP, soft aim, 2D radar, and fast {antiCheat} maintenance after patches. {brand} bundles all three in one license with status notes, setup support, and monthly or lifetime pricing — compare Features and Reviews before you buy.',
		slug: 'best-deadside-cheats-in-2026',
		seoTitle: 'Best {game} Hacks in 2026 | Deadside Cheats FAQ & Guide',
		seoDescription:
			'Best {primaryKeyword} in 2026 — ESP, soft aim, radar, and {antiCheat} maintenance in one {brand} license for Windows PC.',
	}),
	faq({
		question: 'Should I buy monthly or lifetime {primaryKeyword}?',
		answer:
			'Choose monthly ($35) if you want a lower entry cost or only play a few seasons. Choose lifetime ($150) if you plan long-term {game} play and want one payment for ESP, radar, aimbot, and future maintenance rebuilds. Both plans ship the same feature set.',
		slug: 'monthly-vs-lifetime-deadside-cheats',
		seoTitle: 'Monthly vs Lifetime {game} Hacks | Deadside Cheats FAQ & Guide',
		seoDescription:
			'Compare monthly ($35) and lifetime ($150) {brand} plans — same ESP, aimbot, and radar features on Windows PC.',
	}),
	faq({
		question: 'Do {primaryKeyword} work on Windows 11?',
		answer:
			'Yes. {brand} supports Windows 10 and Windows 11 on PC. Use a clean install path from the Setup guide, keep {antiCheat} status green on the Updates page, and avoid running outdated builds after major patches.',
		slug: 'deadside-cheats-windows-11',
		seoTitle: 'Do {game} Hacks Work on Windows 11? | Deadside Cheats FAQ & Guide',
		seoDescription:
			'{brand} runs on Windows 10 and 11 — ESP, aimbot, and radar with {antiCheat} maintenance on PC. Read setup notes at deadsidecheat.com before you buy.',
	}),
	faq({
		question: 'What is {game} soft aim?',
		answer:
			'{game} soft aim gently guides aim toward targets inside a set FOV instead of snapping instantly. {brand} lets you adjust smoothing, bone priority, and per-weapon-type profiles so assist feels controlled in PvP raids and squad sessions.',
		slug: 'what-is-deadside-soft-aim',
		seoTitle: 'What Is {game} Soft Aim? | Deadside Cheats FAQ & Guide',
		seoDescription:
			'{game} soft aim explained — FOV, smoothing, and bone priority in {brand} for natural-looking assist on PC.',
	}),
	faq({
		question: 'Is there a free {game} cheat download?',
		answer:
			'{brand} is a paid license — there is no official free download. Avoid random “free deadside cheat” sites; they often ship malware or detected loaders. Compare monthly and lifetime plans on Pricing for legitimate ESP, radar, and aimbot access with support.',
		slug: 'free-deadside-cheat-download',
		seoTitle: 'Free {game} Cheat Download? | Deadside Cheats FAQ & Guide',
		seoDescription:
			'No official free {brand} download — paid monthly/lifetime licenses include ESP, aimbot, radar, and support on Windows PC.',
	}),
	faq({
		question: 'How does {antiCheat} bypass work for {primaryKeyword}?',
		answer:
			'There is no permanent {antiCheat} bypass. {brand} is maintained with rebuilds after Deadside and {antiCheat} patches — check the Updates page before you queue. Responsible settings and loading the latest build matter more than any “bypass” claim.',
		slug: 'deadside-battleye-bypass',
		seoTitle: '{antiCheat} Bypass for {game} Hacks | Deadside Cheats FAQ & Guide',
		seoDescription:
			'How {brand} handles {antiCheat} updates — maintenance rebuilds, status notes, and undetected workflow on Windows PC.',
	}),
	faq({
		question: 'Do {primaryKeyword} work in competitive raids and squad sessions?',
		answer:
			'Yes. ESP, radar, and soft aim are built for competitive and PvP {game} sessions on Windows PC. Use conservative overlay settings, read maintenance notes after BattlEye patches, and confirm undetected status on the Updates page before you deploy.',
		slug: 'deadside-cheats-for-ranked',
		seoTitle: 'Do {game} Hacks Work in PvP Raids? | Deadside Cheats FAQ & Guide',
		seoDescription:
			'{brand} ESP, radar, and soft aim for PvP raids and squad sessions on PC — maintenance and status checks before you deploy.',
	}),
	faq({
		question: 'What is a {game} mod menu?',
		answer:
			'A {game} mod menu is an in-game overlay to toggle ESP wallhack, radar, aimbot, and visual settings without alt-tabbing. {brand} ships a lightweight mod menu for Windows PC — see Features for the full toggle list.',
		slug: 'what-is-deadside-mod-menu',
		seoTitle: 'What Is a {game} Mod Menu? | Deadside Cheats FAQ & Guide',
		seoDescription:
			'{game} mod menu with ESP, radar, and aimbot toggles — included in {brand} for Windows PC.',
	}),
	faq({
		question: 'What is the difference between external and internal {primaryKeyword}?',
		answer:
			'External cheats read game memory from outside the client; internal hooks run inside the process. {brand} is built as an external-style package for easier setup on Windows PC, bundling ESP, radar, and soft aim with {antiCheat} maintenance after patches.',
		slug: 'external-vs-internal-deadside-cheats',
		seoTitle: 'External vs Internal {game} Hacks | Deadside Cheats FAQ & Guide',
		seoDescription:
			'External vs internal {primaryKeyword} explained — how {brand} packages ESP, radar, and aimbot on Windows PC.',
	}),
	faq({
		question: 'How long does {primaryKeyword} setup take?',
		answer:
			'Most buyers finish {brand} setup in 10–20 minutes on Windows PC: install the loader, activate the license, and enable ESP or aimbot in the mod menu. If Windows Defender or another AV blocks the loader, follow Setup troubleshooting or email {email} with your order ID.',
		slug: 'how-long-deadside-cheat-setup-takes',
		seoTitle: 'How Long Does {game} Cheats Setup Take? | Deadside Cheats FAQ & Guide',
		seoDescription:
			'{brand} setup time on Windows PC — typical 10–20 minute install for ESP, radar, and aimbot.',
	}),
	faq({
		question: 'Does {brand} include triggerbot?',
		answer:
			'{brand} focuses on ESP wallhack, 2D radar, and soft aim profiles. Triggerbot is not advertised as a standalone module — review the Features page for the current toggle list before checkout.',
		slug: 'does-deadside-cheats-include-triggerbot',
		seoTitle: 'Does {brand} Include Triggerbot? | Deadside Cheats FAQ & Guide',
		seoDescription:
			'Triggerbot and {brand} — see the current ESP, radar, and aimbot feature list on Windows PC.',
	}),
] as const;

export type CustomerReview = {
	handle: string;
	rating: 3 | 4 | 5;
	text: string;
	short: string;
	slug: string;
	seoTitle: string;
	seoDescription: string;
	date: string;
	tag?: string;
};

import { generatedCustomerReviews } from './customer-reviews.generated';

export const customerReviews = generatedCustomerReviews.map((review) => reviewMeta(review));

const reviewTotal = customerReviews.length;

export const customerReviewStats = {
	averageRating: Math.round((customerReviews.reduce((sum, r) => sum + r.rating, 0) / reviewTotal) * 10) / 10,
	/** Published review count for schema and marketing UI */
	totalCount: reviewTotal,
	reviewCountLabel: reviewTotal >= 100 ? '100+' : `${reviewTotal}+`,
} as const;
