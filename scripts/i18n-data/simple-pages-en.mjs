/**
 * English simple-page overrides — mirrors src/data/i18n/simple-pages.ts (resolved tokens).
 * Used as canonical EN content for features, pricing, updates, hacks, deadside-esp, deadside-aimbot, radar, setup, support, faq.
 */
export const SIMPLE_PAGE_IDS = [
	'features',
	'pricing',
	'updates',
	'hacks',
	'deadside-esp',
	'deadside-aimbot',
	'radar',
	'setup',
	'support',
	'faq',
];

export const simplePagesEn = {
	features: {
		title: 'Deadside Cheats Features | ESP, Aimbot & Radar',
		description:
			'Full Deadside cheats feature list — ESP wallhack, soft aim, 2D radar & toggles for survival & squad raids on PC. BattlEye maintenance at deadsidecheat.com.',
		h1: 'Deadside Cheats Features — Full Control List',
		intro: 'Everything included in one license for Deadside on Windows PC.',
		ctaPrimary: 'Get Access',
		ctaSecondary: 'View store',
		ctaSecondaryHref: '/pricing/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'ESP & wallhack',
				paragraphs: [
					'See players, objects, and loot through walls with distance readouts.',
					'Use filters so the overlay stays clear in arena zones, vault sectors, and high-traffic PvP areas.',
				],
				list: ['Player boxes & distance', 'Loot and loot markers', 'Objective and vehicle filters'],
			},
			{
				h2: 'Aimbot & soft aim',
				paragraphs: [
					'Aim help you can tune to feel natural.',
					'Set FOV, smoothness, and bone priority per weapon before you queue.',
				],
				list: ['Smooth aim strength', 'FOV and bone priority', 'Hotkeys mid-match'],
			},
			{
				h2: 'Radar',
				paragraphs: [
					'A simple 2D radar for threats outside your view.',
					'Spot flanks near maps and compound zones without filling the whole screen.',
				],
				list: ['Nearby enemy cues', 'Adjustable range', 'Works in matches & roaming'],
			},
			{
				h2: 'Explore related topics',
				paragraphs: [
					'Most Deadside cheat sites cover ESP, aimbot, radar, setup, and status on separate pages. Use these guides next:',
					'Each guide covers one part of the match stack so you can compare before checkout.',
				],
				list: [
					'<a href="/deadside-esp/">ESP & wallhack guide</a>',
					'<a href="/deadside-aimbot/">Aimbot & soft aim</a>',
					'<a href="/deadside-radar-hack/">2D radar overlay</a>',
					'<a href="/setup/">Setup guide</a>',
					'<a href="/updates/">Live status</a>',
					'<a href="/blog/">Deadside Intel blog</a>',
					'<a href="https://store.steampowered.com/app/895400/news/" target="_blank" rel="noopener noreferrer">Official Deadside patch notes</a>',
					'<a href="https://deadside.fandom.com/wiki/Deadside" target="_blank" rel="noopener noreferrer">Deadside Wiki (Fandom)</a>',
				],
			},
			{
				h2: 'Updates & support',
				paragraphs: [
					'We rebuild after big Deadside or BattlEye patches.',
					'Check Status before you play after a patch day.',
					'Verify official changes on <a href="https://store.steampowered.com/app/895400/news/" target="_blank" rel="noopener noreferrer">Deadside patch notes</a> and the <a href="https://deadside.fandom.com/wiki/Deadside" target="_blank" rel="noopener noreferrer">Deadside Wiki</a> before you tune overlays.',
				],
				list: ['Status on the Status page', 'Setup guide included', 'Email support with your order ID'],
			},
		],
	},
	pricing: {
		title: 'Deadside Cheats Pricing | $35/mo or $150',
		description:
			'Buy Deadside cheats — $35/month or $150 lifetime. ESP, aimbot & radar for survival & squad raids on PC. Same features, instant delivery.',
		h1: 'Deadside Cheats Pricing — Monthly & Lifetime',
		intro: 'Monthly and lifetime plans with the same ESP, soft aim, and radar stack.',
		ctaPrimary: 'Get Access',
		ctaSecondary: 'Setup guide',
		ctaSecondaryHref: '/setup/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'What you get',
				paragraphs: [
					'Full package access for Windows 10 / 11.',
					'Same ESP, soft aim, and radar on monthly and lifetime plans.',
				],
				list: ['ESP, aimbot, and radar', 'Patch rebuilds while active', 'Digital delivery after checkout'],
			},
			{
				h2: 'Plans',
				paragraphs: [
					'Pick monthly to try first, or lifetime for one payment.',
					'Both plans unlock the same features after checkout.',
				],
				list: ['Monthly — 30 days', 'Lifetime — one-time', 'Instant license by email'],
			},
			{
				h2: 'Before you buy',
				paragraphs: [
					'Read the refund policy if you need it. Contact support with your order ID for help.',
					'Prices are listed in USD for Windows 10 and 11 PCs worldwide.',
				],
				list: [
					'<a href="/refund-policy/">Refund policy</a>',
					'<a href="/faq/">FAQ</a>',
					'<a href="/support/">Support</a>',
				],
			},
		],
	},
	updates: {
		title: 'Deadside Status | BattlEye Updates | Deadside Cheats',
		description:
			'Live status after Deadside & BattlEye patches. Check undetected ESP, aimbot & radar rebuilds on PC before you queue. deadsidecheat.com.',
		h1: 'Status',
		intro: 'Check maintenance notes before you load in after a Deadside or BattlEye patch.',
		ctaPrimary: 'Get Access',
		ctaSecondary: 'Deadside Cheats overview',
		ctaSecondaryHref: '/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'Current status',
				paragraphs: [
					'As of 13 Aug 2026 the package is online for Deadside on Windows PC. We post a new note here when a game or BattlEye patch needs a rebuild.',
					'If Status is green, you can match. If we are rebuilding, wait for the next note.',
				],
				list: [
					'Check this page before every match after a patch',
					'Monthly and lifetime licenses get rebuilds while active',
					'No cheat stays undetected forever — status first, then play',
				],
			},
			{
				h2: 'After a patch',
				paragraphs: [
					'Wait for our rebuild note, then launch. Do not play on an old build after a big update.',
					'Follow setup if something fails and email support with your order ID.',
				],
				list: ['Read the latest status note', 'Follow setup if something fails', 'Email support with your order ID'],
			},
			{
				h2: 'Important',
				paragraphs: [
					'No cheat is 100% safe forever. Stay updated and use safe settings.',
					'Check this page before every match after a patch day.',
				],
				list: ['Status first, then play', '<a href="/support/">Support</a> for license help'],
			},
		],
	},
	hacks: {
		title: 'Deadside Cheats Guide | ESP, Aimbot & Radar',
		description:
			'Deadside cheats guide — undetected ESP wallhack, soft aim, radar & BattlEye rebuilds for survival & squad raids on PC. Buy from $35 at deadsidecheat.com.',
		h1: 'Deadside Cheats — Full Guide',
		intro:
			'Deadside cheats add ESP, radar, and soft aim on top of the base game. This page explains what deadside cheats are, what Deadside Cheats includes, how BattlEye maintenance works, and where to go next before you buy.',
		ctaPrimary: 'Get Access',
		ctaSecondary: 'View features',
		ctaSecondaryHref: '/features/',
		galleryTitle: 'Deadside cheats in action',
		sections: [
			{
				h2: 'What are deadside cheats?',
				paragraphs: [
					'Deadside cheats are third-party tools that give you extra information and combat assist during matches. Most players search for deadside cheats when they want player ESP, loot visibility, off-screen radar, or smoother aim under pressure.',
					'Deadside Cheats bundles those tools in one license for Windows PC — no stacking separate downloads for wallhack, radar, and aimbot.',
				],
			},
			{
				h2: 'What Deadside Cheats includes',
				paragraphs: [
					'One license covers the full match stack: player ESP with distance, loot markers, 2D radar for flanks, and configurable soft aim profiles per weapon.',
					'Monthly and lifetime plans include the same feature stack with BattlEye rebuilds.',
				],
				list: [
					'ESP / wallhack with distance readouts',
					'Loot and resource markers',
					'2D radar for off-screen threats',
					'Soft aim & aimbot profiles',
					'BattlEye rebuilds after patches',
				],
			},
			{
				h2: 'Module guides',
				paragraphs: [
					'Each tool has its own deep-dive page if you want details before checkout.',
					'Read ESP, aimbot, radar, and feature guides before you buy.',
				],
				list: [
					'<a href="/deadside-esp/">Deadside ESP & wallhack</a>',
					'<a href="/deadside-aimbot/">Deadside Aimbot & soft aim</a>',
					'<a href="/deadside-radar-hack/">2D radar overlay</a>',
					'<a href="/features/">Full feature list</a>',
				],
			},
			{
				h2: 'Undetected status & patches',
				paragraphs: [
					'Deadside uses BattlEye. No cheat stays undetected forever — maintenance after patches is what matters. Check the Status page after every Deadside or BattlEye update before you load in.',
					'Read the undetected cheats guide and BattlEye maintenance notes for the full workflow.',
				],
				list: [
					'<a href="/updates/">Live status & patch notes</a>',
					'<a href="/updates/">Undetected cheats guide</a>',
					'<a href="/battleye-bypass/">BattlEye maintenance</a>',
					'<a href="/faq/">FAQ before you buy</a>',
				],
			},
			{
				h2: 'How to get started',
				paragraphs: [
					'Pick monthly ($35) or lifetime ($150) on the store — same features on both. After checkout you receive license details by email. Follow the setup guide, then check status after major patches.',
					'Compare plans, complete setup, and bookmark support for license questions.',
				],
				list: [
					'<a href="/pricing/">Compare plans</a>',
					'<a href="/setup/">Setup guide</a>',
					'<a href="/support/">Contact support</a>',
				],
			},
		],
	},
	'deadside-esp': {
		title: 'Deadside ESP | Wallhack & Player Boxes',
		description:
			'Deadside ESP wallhack — player boxes, loot markers & distance for survival & squad raids on PC. Bundled with aimbot & radar at deadsidecheat.com.',
		h1: 'Deadside ESP — Player Boxes & Wallhack',
		intro: 'See players and loot through walls during Deadside matches. Part of the same Deadside Cheats license.',
		ctaPrimary: 'Get Access',
		ctaSecondary: 'Deadside Cheats overview',
		ctaSecondaryHref: '/',
		galleryTitle: 'ESP in match',
		sections: [
			{
				h2: 'What ESP shows',
				paragraphs: [
					'Boxes, distance, and filters for players, objects, and loot.',
					'Toggle categories so only match-critical overlays stay active during rotations.',
				],
				list: ['Player ESP', 'Loot markers', 'Objective and vehicle filters'],
			},
			{
				h2: 'When to use it',
				paragraphs: [
					'Clear high-traffic POIs and extract routes without flooding the screen.',
					'Tune opacity and filters for arena zones, vault sectors, and high-traffic PvP areas.',
				],
				list: ['Tune opacity', 'Filter noise', 'Pair with radar'],
			},
			{
				h2: 'Next steps',
				paragraphs: [
					'ESP is included with aimbot and radar in one plan.',
					'Compare monthly and lifetime options on the store before checkout.',
				],
				list: [
					'<a href="/">Full product</a>',
					'<a href="/features/">All features</a>',
					'<a href="/pricing/">Store</a>',
				],
			},
		],
	},
	'deadside-aimbot': {
		title: 'Deadside Aimbot | Soft Aim & FOV Settings',
		description:
			'Deadside aimbot with soft aim, FOV & bone priority for ranked melee fights on PC. Undetected package with ESP & radar at deadsidecheat.com.',
		h1: 'Deadside Aimbot — Soft Aim for Windows PC',
		intro: 'Soft aim and aim assist you can tune for Deadside. Included in the same Deadside Cheats license.',
		ctaPrimary: 'Get Access',
		ctaSecondary: 'Deadside Cheats overview',
		ctaSecondaryHref: '/',
		galleryTitle: 'Aimbot view',
		sections: [
			{
				h2: 'Controls',
				paragraphs: [
					'Set FOV, smoothness, and bone priority before you queue.',
					'Save per-weapon profiles for ARs, SMGs, and long-range rifles.',
				],
				list: ['Soft aim strength', 'Bone priority', 'Hotkeys mid-match'],
			},
			{
				h2: 'Play styles',
				paragraphs: [
					'Keep settings subtle for longer matches. Raise strength only when you accept more risk.',
					'Soft aim works alongside ESP and radar in the same license.',
				],
				list: ['Legit soft aim', 'Per-weapon profiles', 'Works with ESP'],
			},
			{
				h2: 'Next steps',
				paragraphs: [
					'Aimbot ships with ESP and radar in one license.',
					'Read the full feature list and compare plans on the store.',
				],
				list: [
					'<a href="/">Full product</a>',
					'<a href="/features/">All features</a>',
					'<a href="/pricing/">Store</a>',
				],
			},
		],
	},
	radar: {
		title: 'Deadside 2D Radar | 2D Threat Map',
		description:
			'2D radar for flank reads in Deadside survival & squad raids on PC. Bundled with ESP wallhack & soft aim in one license at deadsidecheat.com.',
		h1: 'Deadside 2D Radar — 2D Threat Awareness',
		intro: 'A simple 2D radar for threats outside your view. Included in the same Deadside Cheats license.',
		ctaPrimary: 'Get Access',
		ctaSecondary: 'Deadside Cheats overview',
		ctaSecondaryHref: '/',
		galleryTitle: 'Radar overlay',
		sections: [
			{
				h2: 'What it shows',
				paragraphs: [
					'Nearby enemy cues with adjustable range for solo farmers and matchers.',
					'Directional threat cues for players outside your line of sight.',
				],
				list: ['Flank awareness', 'Base approaches', 'Adjustable range'],
			},
			{
				h2: 'With ESP',
				paragraphs: [
					'Use radar for threats you cannot see yet. Use ESP when you push.',
					'Radar complements ESP markers during squad pushes and zone fights.',
				],
				list: [
					'<a href="/deadside-esp/">ESP guide</a>',
					'<a href="/">Full product</a>',
					'<a href="/pricing/">Store</a>',
				],
			},
		],
	},
	setup: {
		title: 'Deadside Cheats Setup | Windows PC Install Guide',
		description:
			'Install Deadside Cheats on PC — activate ESP, soft aim & radar step by step. Setup guide at deadsidecheat.com. Check BattlEye status first.',
		h1: 'Setup',
		intro: 'Install and activate your license on Windows 10 or 11 before your first match.',
		ctaPrimary: 'Get Access',
		ctaSecondary: 'Check status',
		ctaSecondaryHref: '/updates/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'Before you install',
				paragraphs: [
					'Buy a plan first. You get a license by email.',
					'Have your order email ready before you start installation.',
					'Deadside Cheats runs on Windows 10 or 11 (64-bit) with administrator rights for the loader. Close conflicting overlays and aim for 8 GB RAM minimum (16 GB recommended) for smooth ESP in busy tactical combats.',
				],
				list: ['Windows 10 / 11 PC', 'Disable conflicting overlays', 'Have your order email ready'],
			},
			{
				h2: 'Install steps',
				paragraphs: [
					'Run the loader as admin, paste your license, then launch Deadside.',
					'Download the loader from your delivery email and follow the steps in order.',
				],
				list: ['Download the loader from your delivery email', 'Paste license key', 'Launch the game'],
			},
			{
				h2: 'If something fails',
				paragraphs: [
					'Check Status after a patch. Email support@deadsidecheat.com with your order ID.',
					'Include your Windows version and what you already tried for faster replies.',
				],
				list: ['<a href="/updates/">Status page</a>', '<a href="/support/">Support</a>', '<a href="/faq/">FAQ</a>'],
			},
		],
	},
	support: {
		title: 'Deadside Cheats Support | License & Setup Help',
		description:
			'Support for license delivery, ESP setup & billing on PC. Email support@deadsidecheat.com with your order ID. deadsidecheat.com/support.',
		h1: 'Support',
		intro: 'Get help with licenses, setup, and billing for Deadside Cheats on Windows PC.',
		ctaPrimary: 'Email support',
		ctaSecondary: 'FAQ',
		ctaSecondaryHref: '/faq/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'How to contact us',
				paragraphs: [
					'Email support@deadsidecheat.com. Include your order ID and a short note about the issue.',
					'We review support requests daily for delivery, billing, and setup issues.',
				],
				list: ['Order ID from your receipt', 'Windows version', 'What you already tried'],
			},
			{
				h2: 'Faster answers',
				paragraphs: [
					'Check FAQ and Status before you write. Many setup questions are already covered.',
					'Self-service guides often resolve activation issues faster than a new ticket. For patch timing, follow official Deadside channels on Bad Pixel and the <a href="https://store.steampowered.com/app/895400/Deadside/" target="_blank" rel="noopener noreferrer">official site</a>.',
				],
				list: ['<a href="/faq/">FAQ</a>', '<a href="/updates/">Status</a>', '<a href="/setup/">Setup</a>'],
			},
		],
	},
	faq: {
		title: 'Deadside Cheats FAQ | ESP, Aimbot & BattlEye',
		description:
			'FAQ for Deadside cheats — delivery, setup, survival & squad raids use, BattlEye updates & pricing on PC. Answers at deadsidecheat.com before you buy.',
		h1: 'Deadside Cheats FAQ — Common Questions',
		intro: 'Common questions about Deadside Cheats — delivery, setup, updates, and refunds.',
		ctaPrimary: 'Get Access',
		ctaSecondary: 'Support',
		ctaSecondaryHref: '/support/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'Buying & delivery',
				paragraphs: [
					'You get a digital license by email after payment.',
					'Keep your order confirmation email for support and activation.',
				],
				list: ['Instant delivery after checkout', 'Keep your order email', 'One license per purchase'],
			},
			{
				h2: 'Setup & updates',
				paragraphs: [
					'Follow Setup after you buy. Check Status after big Deadside or BattlEye patches.',
					'Maintenance rebuilds publish on the Status page when patches require updates.',
				],
				list: ['<a href="/setup/">Setup guide</a>', '<a href="/updates/">Status</a>'],
			},
			{
				h2: 'Refunds',
				paragraphs: [
					'Read the refund policy before you buy if you need details.',
					'Contact support with your order ID for billing or delivery questions.',
				],
				list: ['<a href="/refund-policy/">Refund policy</a>', '<a href="/support/">Support</a>'],
			},
		],
	},
};
