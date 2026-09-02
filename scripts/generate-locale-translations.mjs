#!/usr/bin/env node
/**
 * Generates src/locales/{locale}/translation.json for all 22 locales.
 */
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { LOCALES, stripZadeyoDeep } from './i18n-data/constants.mjs';
import { allUiStrings } from './i18n-data/ui-strings.mjs';
import { buildLocaleOverlay } from './i18n-data/locale-overlays.mjs';
import { FAQ_I18N } from './i18n-data/faq-i18n.mjs';
import { fixDeadsideCopyDeep } from './i18n-data/deadside-copy-fix.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const EN_FILE = path.join(ROOT, 'src', 'locales', 'en', 'translation.json');

function deepMerge(base, overlay) {
	const out = structuredClone(base);
	for (const [key, value] of Object.entries(overlay)) {
		if (value && typeof value === 'object' && !Array.isArray(value)) {
			out[key] = deepMerge(out[key] ?? {}, value);
		} else if (value !== undefined) {
			out[key] = value;
		}
	}
	return out;
}

function flattenExternalResources(ext) {
	if (!ext) return {};
	const { title, lede, pillsTitle, pillsLabel, steam, patch, official, wiki, community, ...rest } = ext;
	return {
		title,
		lede,
		pillsTitle,
		pillsLabel,
		steam,
		patch,
		official,
		wiki,
		community,
		...rest,
	};
}

function buildFaqOverlay(locale, enFaq) {
	const map = FAQ_I18N[locale];
	if (!map) return {};
	return { items: map };
}

/** English FAQ seed for translation.json */
const EN_FAQ_ITEMS = {
	'what-are-deadside-cheats': {
		q: 'What is Deadside Cheats?',
		a: 'Deadside Cheats is an undetected deadside cheats package for Deadside on Windows PC. It includes ESP wallhack, 2D radar, and aimbot controls, with BattlEye maintenance and setup support.',
	},
	'are-deadside-cheats-undetected-in-2026': {
		q: 'Are deadside cheats undetected in 2026?',
		a: 'Deadside Cheats is maintained for Deadside with rebuilds after BattlEye and game patches. Check the Status page before you queue. No cheat can guarantee permanent undetected status — maintenance and responsible use matter.',
	},
	'solo-farmer-and-raider-sessions': {
		q: 'Does this work in survival raids and squad sessions?',
		a: 'Yes. ESP, radar, and aimbot are built for Deadside match flow — spotting enemy players, tracking loot crates, and staying aware near compounds and high-traffic zones in PvP raids and squad sessions.',
	},
	'esp-wallhack-radar-or-aimbot': {
		q: 'What is included — ESP, wallhack, radar, or Aimbot?',
		a: 'Deadside Cheats bundles ESP wallhack, loot markers, 2D radar cues, and configurable Aimbot in one license. See Features for the full list.',
	},
	'how-are-licenses-delivered': {
		q: 'How are licenses delivered?',
		a: 'After payment is confirmed, Deadside Cheats license details are delivered digitally through checkout. Timing can vary by payment method and order review. Keep your order confirmation ready if you contact support.',
	},
	'where-to-check-updates': {
		q: 'Where do I check updates after a Deadside or BattlEye patch?',
		a: 'Maintenance notes are posted on the Status page when a Deadside or BattlEye update affects the package. That is the fastest place to confirm whether a new Deadside Cheats build is live.',
	},
	'how-to-contact-support': {
		q: 'How do I contact support?',
		a: 'Use the Support page or email support@deadsidecheat.com. Include your order details, package length, and a clear description of the setup issue so replies can be faster.',
	},
	'what-is-a-deadside-wallhack': {
		q: 'What is a Deadside wallhack?',
		a: 'A Deadside wallhack is an ESP overlay that shows enemy players through terrain. Deadside Cheats includes distance readouts, weapon and loot cues, and toggleable categories.',
	},
	'does-deadside-cheats-include-radar-hack': {
		q: 'Does Deadside Cheats include 2D radar?',
		a: 'Yes. Deadside Cheats includes 2D radar overlays that highlight nearby threats outside your view — useful for flanks and compound zones.',
	},
	'battleye-anti-cheat-and-deadside-cheats': {
		q: 'How does BattlEye affect deadside cheats?',
		a: 'BattlEye monitors Deadside on Windows PC. Deadside Cheats posts maintenance notes after patches that may need a rebuild. Check Status before you queue.',
	},
	'buy-undetected-deadside-cheats-windows-pc': {
		q: 'Can I buy undetected Deadside cheats for Windows PC?',
		a: 'Yes — Deadside Cheats sells monthly and lifetime licenses for Windows PC with ESP, radar, and aimbot in one stack. Compare plans on Store before checkout.',
	},
	'how-much-do-deadside-cheats-cost': {
		q: 'How much do deadside cheats cost in 2026?',
		a: 'Deadside Cheats is $35 per month or $150 lifetime USD on Windows PC. Both plans include ESP wallhack, 2D radar, soft aim, and BattlEye maintenance rebuilds. See Pricing for the latest plan details before checkout.',
	},
	'what-is-deadside-esp-hack': {
		q: 'What is Deadside ESP?',
		a: 'Deadside ESP is a visibility overlay that shows enemy players, weapons, and loot through walls. Deadside Cheats ESP includes player boxes, distance tags, and toggleable categories for PvP raids and squad sessions.',
	},
	'what-is-deadside-aimbot-hack': {
		q: 'What is a Deadside aimbot?',
		a: 'A Deadside aimbot provides aim assist with configurable FOV, smoothing, and bone priority. Deadside Cheats uses soft aim profiles designed to feel natural in firefights and duels — tune settings in the mod menu before you deploy.',
	},
	'how-to-install-deadside-cheats': {
		q: 'How do I install deadside cheats on Windows PC?',
		a: 'After checkout, follow the Setup guide: download the loader, disable conflicting overlays, launch Deadside Cheats, and enable ESP, radar, or aimbot toggles in the mod menu. Most buyers finish first launch in under 15 minutes. Email support@deadsidecheat.com if activation fails.',
	},
	'best-deadside-cheats-in-2026': {
		q: 'What are the best deadside cheats in 2026?',
		a: 'Top deadside cheats in 2026 combine undetected ESP, soft aim, 2D radar, and fast BattlEye maintenance after patches. Deadside Cheats bundles all three in one license with status notes, setup support, and monthly or lifetime pricing — compare Features and Reviews before you buy.',
	},
	'monthly-vs-lifetime-deadside-cheats': {
		q: 'Should I buy monthly or lifetime deadside cheats?',
		a: 'Choose monthly ($35) if you want a lower entry cost or only play a few seasons. Choose lifetime ($150) if you plan long-term Deadside play and want one payment for ESP, radar, aimbot, and future maintenance rebuilds. Both plans ship the same feature set.',
	},
	'deadside-cheats-windows-11': {
		q: 'Do deadside cheats work on Windows 11?',
		a: 'Yes. Deadside Cheats supports Windows 10 and Windows 11 on PC. Use a clean install path from the Setup guide, keep BattlEye status green on the Updates page, and avoid running outdated builds after major patches.',
	},
	'what-is-deadside-soft-aim': {
		q: 'What is Deadside soft aim?',
		a: 'Deadside soft aim gently guides aim toward targets inside a set FOV instead of snapping instantly. Deadside Cheats lets you adjust smoothing, bone priority, and per-weapon-type profiles so assist feels controlled in PvP raids and squad sessions.',
	},
	'free-deadside-cheat-download': {
		q: 'Is there a free Deadside cheat download?',
		a: 'Deadside Cheats is a paid license — there is no official free download. Avoid random “free deadside cheat” sites; they often ship malware or detected loaders. Compare monthly and lifetime plans on Pricing for legitimate ESP, radar, and aimbot access with support.',
	},
	'deadside-battleye-bypass': {
		q: 'How does BattlEye bypass work for deadside cheats?',
		a: 'There is no permanent BattlEye bypass. Deadside Cheats is maintained with rebuilds after Deadside and BattlEye patches — check the Updates page before you queue. Responsible settings and loading the latest build matter more than any “bypass” claim.',
	},
	'deadside-cheats-for-ranked': {
		q: 'Do deadside cheats work in competitive raids?',
		a: 'Yes. ESP, radar, and soft aim are built for competitive and PvP Deadside sessions on Windows PC. Use conservative overlay settings, read maintenance notes after patches, and confirm undetected status on the Updates page before you deploy.',
	},
	'what-is-deadside-mod-menu': {
		q: 'What is a Deadside mod menu?',
		a: 'A Deadside mod menu is an in-game overlay to toggle ESP wallhack, radar, aimbot, and visual settings without alt-tabbing. Deadside Cheats ships a lightweight mod menu for Windows PC — see Features for the full toggle list.',
	},
	'external-vs-internal-deadside-cheats': {
		q: 'What is the difference between external and internal deadside cheats?',
		a: 'External cheats read game memory from outside the client; internal hooks run inside the process. Deadside Cheats is built as an external-style package for easier setup on Windows PC, bundling ESP, radar, and soft aim with BattlEye maintenance after patches.',
	},
	'how-long-deadside-cheat-setup-takes': {
		q: 'How long does deadside cheats setup take?',
		a: 'Most buyers finish Deadside Cheats setup in 10–20 minutes on Windows PC: install the loader, activate the license, and enable ESP or aimbot in the mod menu. If Windows Defender or another AV blocks the loader, follow Setup troubleshooting or email support@deadsidecheat.com with your order ID.',
	},
	'does-deadside-cheats-include-triggerbot': {
		q: 'Does Deadside Cheats include triggerbot?',
		a: 'Deadside Cheats focuses on ESP wallhack, 2D radar, and soft aim profiles. Triggerbot is not advertised as a standalone module — review the Features page for the current toggle list before checkout.',
	},
};

FAQ_I18N.en = EN_FAQ_ITEMS;

async function main() {
	const en = JSON.parse(await readFile(EN_FILE, 'utf8'));
	en.faq = { items: EN_FAQ_ITEMS };
	en.media = {
		demoVideoTitle: 'Deadside Cheats ESP, aimbot and radar demo',
		playVideo: 'Play video',
	};
	const enUi = allUiStrings.en;
	en.hero = {
		...enUi.hero,
		title: enUi.hero.title,
		priceFrom: en.hero?.priceFrom ?? 'from',
		imageAlt: en.hero?.imageAlt ?? '{{brand}} — Deadside ESP and aimbot overlay',
		chipEsp: en.hero?.chipEsp ?? 'ESP / wallhack',
		chipAim: en.hero?.chipAim ?? 'Soft aim',
		chipRadar: en.hero?.chipRadar ?? '2D radar',
		chipUpdates: en.hero?.chipUpdates ?? 'Patch updates',
	};
	en.nav = { ...en.nav, ...enUi.nav, preview: enUi.nav.hacks, store: enUi.nav.pricing, status: enUi.nav.updates };
	en.externalResources = {
		title: 'Official game guides & resources',
		lede: 'We link to trusted third-party sources so you can verify patch notes, player stats, and map info outside our site.',
		pillsTitle: 'Official guides',
		pillsLabel: 'Official Deadside guides',
		steam: { label: 'Deadside on PC', note: 'Official store page, system requirements, and player reviews.' },
		patch: { label: 'Deadside patch notes & news', note: 'Read official update posts before you change your loadout.' },
		official: { label: 'Official Deadside website', note: 'Game overview from Bad Pixel.' },
		wiki: { label: 'Deadside Wiki (Fandom)', note: 'Player stats, maps, and survival mechanics.' },
		community: { label: 'Deadside community hub', note: 'Announcements and community discussions.' },
	};
	en.internalLinks = {
		relatedLede: 'Explore more Deadside Cheats guides — the same topics covered on other cheat sites, mapped to our canonical pages.',
		topicsTitle: 'Product guides',
		topicsLabel: 'Product topic guides',
		topicsLede: 'Jump to the main Deadside Cheats pages for ESP, aimbot, radar, setup, and status.',
		overview: 'Deadside Cheats overview',
		esp: 'ESP & wallhack',
		aimbot: 'Aimbot & soft aim',
		radar: '2D radar',
		features: 'Full feature list',
		pricing: 'Store & pricing',
		setup: 'Setup guide',
		status: 'Live status',
		faq: 'FAQ',
		support: 'Support',
		blog: 'Blog',
		reviews: 'Buyer reviews',
		hacks: 'Deadside Cheats pillar',
		undetected: 'Undetected status',
	};
	en.images = { ...en.images, ...enUi.images };
	en.gallery = {
		eyebrow: 'Deadside Cheats',
		title: 'Deadside Cheats gallery',
		subtitle: 'Deadside Cheats visuals — ESP, wallhack, aimbot, and radar for Deadside on PC.',
		lead: 'Deadside Cheats helps you spot enemy players, loot, and compound zones with ESP, aimbot, and radar in one license.',
		highlightEspTitle: 'Deadside Cheats ESP',
		highlightEspCopy: 'See enemy players through walls with Deadside Cheats ESP and wallhack overlays.',
		highlightRadarTitle: 'Deadside Cheats radar',
		highlightRadarCopy: 'Track nearby threats with Deadside Cheats radar before you push or rotate.',
		highlightAimbotTitle: 'Deadside Cheats aimbot',
		highlightAimbotCopy: 'Use soft aim and aimbot controls tuned for Deadside matches on Windows PC.',
		updatesLabel: 'Deadside Cheats updates',
		updatesShort: 'Updates',
	};
	en.home = {
		...en.home,
		aboutTitle: 'Deadside cheats for Windows PC',
		aboutP1:
			'Deadside Cheats is an undetected Windows PC package for Deadside raids, loot runs, and compound PvP. One license includes ESP wallhack, soft aim, and 2D radar, with BattlEye rebuilds after game patches. Compare Pricing · Live Status.',
		aboutP1Before:
			'Deadside Cheats is an undetected Windows PC package for Deadside raids, loot runs, and compound PvP. One license includes ESP wallhack, soft aim, and 2D radar, with BattlEye rebuilds after game patches. Compare monthly and lifetime plans on',
		aboutStore: 'Pricing',
		aboutP1Mid: ', then confirm the package is live on',
		aboutStatus: 'Live Status',
		aboutP1After: ' before checkout.',
		aboutP2Before: 'New here? Browse the',
		aboutPillar: 'Deadside cheats hub',
		aboutEsp: 'ESP wallhack guide',
		aboutAimbot: 'soft aim settings',
		aboutUndetected: 'BattlEye update log',
		aboutP2After: ' while you compare options.',
		volumeLabel: 'Volume',
		seekLabel: 'Video progress',
		muteVideo: 'Mute video',
		unmuteVideo: 'Unmute video',
	};
	en.homeSeo = {
		...en.homeSeo,
		linkFinalsCheats: 'Deadside Cheats',
	};
	en.reviews = {
		...(en.reviews ?? {}),
		title: 'What players say',
		eyebrow: 'What players say',
		homeTitle: 'What players say',
		subtitle: 'Unfiltered notes from people running Deadside cheats in raid',
		countLabel: 'player ratings',
		buyerReviews: '{{count}} players rated this',
		averageAria: '{{rating}} average from {{count}} player ratings',
		readAll: 'Read what players are saying →',
	};
	en.guides = {
		...(en.guides ?? {}),
		gameLede:
			'Deadside survival guides, loot routes, compound zones, and squad tactics — curated resources below.',
	};
	en.blog = {
		...(en.blog ?? {}),
		blogTitle: 'Deadside Cheats Blog | Guides & Patch Tips',
		blogDescription:
			'Deadside guides — survival tips, ESP, aimbot notes, extract routes, and BattlEye update coverage. English blog at deadsidecheat.com/blog/.',
		blogH1: 'Deadside Cheats Intel',
		blogIntro:
			'Actionable Deadside guides for survival and PvP raids — loot routes, compound tactics, and squad play. Pair these tips with our Deadside Cheats pages for ESP, soft aim, and radar when you need in-match tools.',
	};

	for (const locale of LOCALES) {
		const dir = path.join(ROOT, 'src', 'locales', locale);
		await mkdir(dir, { recursive: true });

		let translation = en;
		if (locale !== 'en') {
			const ui = allUiStrings[locale];
			const overlay = buildLocaleOverlay(locale, ui);
			const faqOverlay = buildFaqOverlay(locale);
			translation = deepMerge(en, {
				...overlay,
				externalResources: flattenExternalResources(overlay.externalResources),
				faq: faqOverlay,
			});
		}

		const ui = allUiStrings[locale];
		if (ui?.nav?.hacks) {
			translation.nav = {
				...translation.nav,
				hacks: ui.nav.hacks,
				preview: ui.nav.hacks,
			};
		}

		const out = path.join(dir, 'translation.json');
		const output = stripZadeyoDeep(fixDeadsideCopyDeep(translation));
		await writeFile(out, `${JSON.stringify(output, null, 2)}\n`, 'utf8');
		console.log('✓', out);
	}

	// Refresh canonical EN with faq/media keys
	await writeFile(EN_FILE, `${JSON.stringify(stripZadeyoDeep(fixDeadsideCopyDeep(en)), null, 2)}\n`, 'utf8');
	console.log(`Generated ${LOCALES.length} locale translation files.`);
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
