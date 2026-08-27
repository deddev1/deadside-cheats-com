/**
 * English simple-page overrides — mirrors src/data/i18n/simple-pages.ts (resolved tokens).
 * Used as canonical EN content for features, pricing, updates, hacks, naraka-esp, naraka-aimbot, radar, setup, support, faq.
 */
export const SIMPLE_PAGE_IDS = [
	'features',
	'pricing',
	'updates',
	'hacks',
	'naraka-esp',
	'naraka-aimbot',
	'radar',
	'setup',
	'support',
	'faq',
];

export const simplePagesEn = {
	features: {
		title: 'Naraka Cheats Features | ESP, Aimbot & Radar',
		description:
			'Full Naraka cheats feature list — ESP wallhack, soft aim, 2D radar & mod menu toggles on PC. NEAC maintenance at narakacheats.org.',
		h1: 'Features',
		intro: 'Everything included in one license for Naraka on Windows PC.',
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
				list: ['Player boxes & distance', 'Loot and hero markers', 'Objective and vehicle filters'],
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
					'Spot flanks near maps and combat zones without filling the whole screen.',
				],
				list: ['Nearby enemy cues', 'Adjustable range', 'Works in matches & roaming'],
			},
			{
				h2: 'Explore related topics',
				paragraphs: [
					'Most Naraka cheat sites cover ESP, aimbot, radar, setup, and status on separate pages. Use these guides next:',
					'Each guide covers one part of the match stack so you can compare before checkout.',
				],
				list: [
					'<a href="/naraka-esp/">ESP & wallhack guide</a>',
					'<a href="/naraka-aimbot/">Aimbot & soft aim</a>',
					'<a href="/naraka-radar-hack/">2D radar overlay</a>',
					'<a href="/setup/">Setup guide</a>',
					'<a href="/updates/">Live status</a>',
					'<a href="/blog/">Naraka Intel blog</a>',
					'<a href="https://store.steampowered.com/app/1203220/news/" target="_blank" rel="noopener noreferrer">Official Naraka patch notes</a>',
					'<a href="https://naraka.fandom.com/wiki/NARAKA:_BLADEPOINT" target="_blank" rel="noopener noreferrer">Naraka Wiki (Fandom)</a>',
				],
			},
			{
				h2: 'Updates & support',
				paragraphs: [
					'We rebuild after big Naraka or NEAC patches.',
					'Check Status before you play after a patch day.',
					'Verify official changes on <a href="https://store.steampowered.com/app/1203220/news/" target="_blank" rel="noopener noreferrer">Naraka patch notes</a> and the <a href="https://naraka.fandom.com/wiki/NARAKA:_BLADEPOINT" target="_blank" rel="noopener noreferrer">Naraka Wiki</a> before you tune overlays.',
				],
				list: ['Status on the Status page', 'Setup guide included', 'Email support with your order ID'],
			},
		],
	},
	pricing: {
		title: 'Naraka Cheats Pricing | $35/mo or $150 Lifetime',
		description:
			'Buy Naraka cheats at narakacheats.org — $35/month or $150 lifetime. ESP, aimbot & radar on PC. Same features, instant delivery.',
		h1: 'Store',
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
		title: 'Naraka Status | NEAC Updates | Naraka Cheats',
		description:
			'Live status after Naraka & NEAC patches. Check undetected ESP, aimbot & radar rebuilds on PC before you queue. narakacheats.org.',
		h1: 'Status',
		intro: 'Check maintenance notes before you load in after a Naraka or NEAC patch.',
		ctaPrimary: 'Get Access',
		ctaSecondary: 'Naraka Cheats overview',
		ctaSecondaryHref: '/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'Current status',
				paragraphs: [
					'As of 13 Aug 2026 the package is online for Naraka on Windows PC. We post a new note here when a game or NEAC patch needs a rebuild.',
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
		title: 'Naraka Cheats Guide | ESP, Aimbot & Wallhack',
		description:
			'Naraka cheats guide — undetected ESP wallhack, soft aim, radar & NEAC rebuilds on PC. Compare features & buy from $35 at narakacheats.org.',
		h1: 'Naraka Cheats — Full Guide',
		intro:
			'Naraka cheats add ESP, radar, and soft aim on top of the base game. This page explains what naraka cheats are, what Naraka Cheats includes, how NEAC maintenance works, and where to go next before you buy.',
		ctaPrimary: 'Get Access',
		ctaSecondary: 'View features',
		ctaSecondaryHref: '/features/',
		galleryTitle: 'Naraka cheats in action',
		sections: [
			{
				h2: 'What are naraka cheats?',
				paragraphs: [
					'Naraka cheats are third-party tools that give you extra information and combat assist during matches.',
					'Most players search for naraka cheats when they want player ESP, loot visibility, off-screen radar, or smoother aim under pressure.',
					'Naraka Cheats bundles those tools in one license for Windows PC — no stacking separate downloads for wallhack, radar, and aimbot.',
				],
			},
			{
				h2: 'What Naraka Cheats includes',
				paragraphs: [
					'One license covers the full match stack on Windows PC.',
					'Monthly and lifetime plans include the same feature stack with NEAC rebuilds after patches.',
				],
				list: [
					'ESP / wallhack with distance readouts',
					'Loot and resource markers',
					'2D radar for off-screen threats',
					'Soft aim & aimbot profiles',
					'NEAC rebuilds after patches',
				],
			},
			{
				h2: 'Module guides',
				paragraphs: [
					'Each tool has its own deep-dive page if you want details before checkout.',
					'Read ESP, aimbot, radar, and feature guides before you buy.',
				],
				list: [
					'<a href="/naraka-esp/">Naraka ESP & wallhack</a>',
					'<a href="/naraka-aimbot/">Naraka Aimbot & soft aim</a>',
					'<a href="/naraka-radar-hack/">Radar hack overlay</a>',
					'<a href="/features/">Full feature list</a>',
				],
			},
			{
				h2: 'Undetected status & patches',
				paragraphs: [
					'Naraka uses NEAC. No cheat stays undetected forever — maintenance after patches is what matters. Check the Status page after every Naraka or NEAC update before you load in.',
					'Read the undetected cheats guide and NEAC maintenance notes for the full workflow.',
				],
				list: [
					'<a href="/updates/">Live status & patch notes</a>',
					'<a href="/updates/">Undetected cheats guide</a>',
					'<a href="/neac-bypass/">NEAC maintenance</a>',
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
	'naraka-esp': {
		title: 'Naraka ESP | Wallhack & Player Boxes | Naraka Cheats',
		description:
			'Naraka ESP wallhack — player boxes, hero markers & distance tags on PC. Undetected naraka cheats with aimbot & radar. Shop at narakacheats.org.',
		h1: 'ESP',
		intro: 'See players and loot through walls during Naraka matches. Part of the same Naraka Cheats license.',
		ctaPrimary: 'Get Access',
		ctaSecondary: 'Naraka Cheats overview',
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
					'Clear bomb sites and grapple routes without flooding the screen.',
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
	'naraka-aimbot': {
		title: 'Naraka Aimbot | Soft Aim & FOV Settings | Naraka Cheats',
		description:
			'Naraka aimbot with soft aim, FOV, bone priority & hotkeys on PC. Undetected Naraka Cheats with ESP & radar included. narakacheats.org.',
		h1: 'Aimbot',
		intro: 'Soft aim and aim assist you can tune for Naraka. Included in the same Naraka Cheats license.',
		ctaPrimary: 'Get Access',
		ctaSecondary: 'Naraka Cheats overview',
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
		title: 'Naraka Radar Hack | 2D Threat Map | Naraka Cheats',
		description:
			'2D radar hack for flank awareness on PC. Bundled with ESP wallhack & soft aim in one license. NEAC maintenance at narakacheats.org.',
		h1: 'Radar',
		intro: 'A simple 2D radar for threats outside your view. Included in the same Naraka Cheats license.',
		ctaPrimary: 'Get Access',
		ctaSecondary: 'Naraka Cheats overview',
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
					'<a href="/naraka-esp/">ESP guide</a>',
					'<a href="/">Full product</a>',
					'<a href="/pricing/">Store</a>',
				],
			},
		],
	},
	setup: {
		title: 'Naraka Cheats Setup | Windows PC Install Guide',
		description:
			'Install Naraka Cheats on PC — activate ESP, soft aim & radar step by step. Setup guide at narakacheats.org. Check NEAC status first.',
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
					'Naraka Cheats runs on Windows 10 or 11 (64-bit) with administrator rights for the loader. Close conflicting overlays and aim for 8 GB RAM minimum (16 GB recommended) for smooth ESP in busy melee combats.',
				],
				list: ['Windows 10 / 11 PC', 'Disable conflicting overlays', 'Have your order email ready'],
			},
			{
				h2: 'Install steps',
				paragraphs: [
					'Run the loader as admin, paste your license, then launch Naraka.',
					'Download the loader from your delivery email and follow the steps in order.',
				],
				list: ['Download the loader from your delivery email', 'Paste license key', 'Launch the game'],
			},
			{
				h2: 'If something fails',
				paragraphs: [
					'Check Status after a patch. Email support@narakacheats.org with your order ID.',
					'Include your Windows version and what you already tried for faster replies.',
				],
				list: ['<a href="/updates/">Status page</a>', '<a href="/support/">Support</a>', '<a href="/faq/">FAQ</a>'],
			},
		],
	},
	support: {
		title: 'Naraka Cheats Support | License & Setup Help',
		description:
			'Support for license delivery, ESP setup & billing on PC. Email support@narakacheats.org with your order ID. narakacheats.org/support.',
		h1: 'Support',
		intro: 'Get help with licenses, setup, and billing for Naraka Cheats on Windows PC.',
		ctaPrimary: 'Email support',
		ctaSecondary: 'FAQ',
		ctaSecondaryHref: '/faq/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'How to contact us',
				paragraphs: [
					'Email support@narakacheats.org. Include your order ID and a short note about the issue.',
					'We review support requests daily for delivery, billing, and setup issues.',
				],
				list: ['Order ID from your receipt', 'Windows version', 'What you already tried'],
			},
			{
				h2: 'Faster answers',
				paragraphs: [
					'Check FAQ and Status before you write. Many setup questions are already covered.',
					'Self-service guides often resolve activation issues faster than a new ticket. For patch timing, follow official Naraka channels on Riot and the <a href="https://store.steampowered.com/app/1203220/NARAKA_BLADEPOINT/" target="_blank" rel="noopener noreferrer">official site</a>.',
				],
				list: ['<a href="/faq/">FAQ</a>', '<a href="/updates/">Status</a>', '<a href="/setup/">Setup</a>'],
			},
		],
	},
	faq: {
		title: 'Naraka Cheats FAQ | ESP, Aimbot & NEAC',
		description:
			'FAQ for naraka cheats — delivery, setup, undetected status, NEAC updates & pricing on PC. Answers at narakacheats.org before you buy.',
		h1: 'FAQ',
		intro: 'Common questions about Naraka Cheats — delivery, setup, updates, and refunds.',
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
					'Follow Setup after you buy. Check Status after big Naraka or NEAC patches.',
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
