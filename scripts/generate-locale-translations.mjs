#!/usr/bin/env node
/**
 * Generates public/locales/{locale}/translation.json for all 22 locales.
 */
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { LOCALES } from './i18n-data/constants.mjs';
import { allUiStrings } from './i18n-data/ui-strings.mjs';
import { buildLocaleOverlay } from './i18n-data/locale-overlays.mjs';
import { FAQ_I18N } from './i18n-data/faq-i18n.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const EN_FILE = path.join(ROOT, 'public', 'locales', 'en', 'translation.json');
const ES_FILE = path.join(ROOT, 'public', 'locales', 'es', 'translation.json');

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
	'what-are-naraka-cheats': {
		q: 'What is Naraka Cheats?',
		a: 'Naraka Cheats is an undetected naraka cheats package for Naraka on Windows PC. It includes ESP wallhack, 2D radar, and aimbot controls, with NEAC maintenance and setup support.',
	},
	'are-naraka-cheats-undetected-in-2026': {
		q: 'Are naraka cheats undetected in 2026?',
		a: 'Naraka Cheats is maintained for Naraka with rebuilds after NEAC and game patches. Check the Status page before you queue. No cheat can guarantee permanent undetected status — maintenance and responsible use matter.',
	},
	'solo-farmer-and-raider-sessions': {
		q: 'Does this work in battle royale rounds and ranked matches?',
		a: 'Yes. ESP, radar, and aimbot are built for Naraka match flow — reading enemy heroes, tracking loot and soul jades, and staying aware near POIs and combat zones in Quick Match and Ranked.',
	},
	'esp-wallhack-radar-or-aimbot': {
		q: 'What is included — ESP, wallhack, radar, or Aimbot?',
		a: 'Naraka Cheats bundles ESP wallhack, hero markers, 2D radar cues, and configurable Aimbot in one license. See Features for the full list.',
	},
	'how-are-licenses-delivered': {
		q: 'How are licenses delivered?',
		a: 'After payment is confirmed, Naraka Cheats license details are delivered digitally through checkout. Timing can vary by payment method and order review. Keep your order confirmation ready if you contact support.',
	},
	'where-to-check-updates': {
		q: 'Where do I check updates after a Naraka or NEAC patch?',
		a: 'Maintenance notes are posted on the Status page when a Naraka or NEAC update affects the package. That is the fastest place to confirm whether a new Naraka Cheats build is live.',
	},
	'how-to-contact-support': {
		q: 'How do I contact support?',
		a: 'Use the Support page or email support@narakacheats.org. Include your order details, package length, and a clear description of the setup issue so replies can be faster.',
	},
	'what-is-a-naraka-wallhack': {
		q: 'What is a Naraka wallhack?',
		a: 'A Naraka wallhack is an ESP overlay that shows enemy heroes through terrain. Naraka Cheats includes distance readouts, grapple and ult cues, and toggleable categories.',
	},
	'does-naraka-cheats-include-radar-hack': {
		q: 'Does Naraka Cheats include a radar hack?',
		a: 'Yes. Naraka Cheats includes 2D radar overlays that highlight nearby threats outside your view — useful for flanks and combat zones.',
	},
	'neac-anti-cheat-and-naraka-cheats': {
		q: 'How does NEAC affect naraka cheats?',
		a: 'NEAC monitors Naraka on Windows PC. Naraka Cheats posts maintenance notes after patches that may need a rebuild. Check Status before you queue.',
	},
	'buy-undetected-naraka-cheats-windows-pc': {
		q: 'Can I buy undetected Naraka cheats for Windows PC?',
		a: 'Yes — Naraka Cheats sells monthly and lifetime licenses for Windows PC with ESP, radar, and aimbot in one stack. Compare plans on Store before checkout.',
	},
	'how-much-do-naraka-cheats-cost': {
		q: 'How much do naraka cheats cost in 2026?',
		a: 'Naraka Cheats is $35 per month or $150 lifetime USD on Windows PC. Both plans include ESP wallhack, 2D radar, soft aim, and NEAC maintenance rebuilds. See Pricing for the latest plan details before checkout.',
	},
	'what-is-naraka-esp-hack': {
		q: 'What is a Naraka ESP hack?',
		a: 'A Naraka ESP hack is a visibility overlay that shows enemy heroes, weapons, and loot through walls. Naraka Cheats ESP includes player boxes, distance tags, grapple and ult cues, and toggleable categories for Quick Match and Ranked.',
	},
	'what-is-naraka-aimbot-hack': {
		q: 'What is a Naraka aimbot hack?',
		a: 'A Naraka aimbot hack provides aim assist with configurable FOV, smoothing, and bone priority. Naraka Cheats uses soft aim profiles designed to feel natural in team fights and duels — tune settings in the mod menu before Ranked queues.',
	},
	'how-to-install-naraka-cheats': {
		q: 'How do I install naraka cheats on Windows PC?',
		a: 'After checkout, follow the Setup guide: download the loader, disable conflicting overlays, launch Naraka Cheats, and enable ESP, radar, or aimbot toggles in the mod menu. Most buyers finish first launch in under 15 minutes. Email support@narakacheats.org if activation fails.',
	},
	'best-naraka-cheats-in-2026': {
		q: 'What are the best naraka cheats in 2026?',
		a: 'Top naraka cheats in 2026 combine undetected ESP, soft aim, 2D radar, and fast NEAC maintenance after patches. Naraka Cheats bundles all three in one license with status notes, setup support, and monthly or lifetime pricing — compare Features and Reviews before you buy.',
	},
	'monthly-vs-lifetime-naraka-cheats': {
		q: 'Should I buy monthly or lifetime naraka cheats?',
		a: 'Choose monthly ($35) if you want a lower entry cost or only play a few seasons. Choose lifetime ($150) if you plan long-term Naraka play and want one payment for ESP, radar, aimbot, and future maintenance rebuilds. Both plans ship the same feature set.',
	},
	'naraka-cheats-windows-11': {
		q: 'Do naraka cheats work on Windows 11?',
		a: 'Yes. Naraka Cheats supports Windows 10 and Windows 11 on PC. Use a clean install path from the Setup guide, keep NEAC status green on the Updates page, and avoid running outdated builds after major patches.',
	},
	'what-is-naraka-soft-aim': {
		q: 'What is Naraka soft aim?',
		a: 'Naraka soft aim gently guides aim toward targets inside a set FOV instead of snapping instantly. Naraka Cheats lets you adjust smoothing, bone priority, and per-weapon-type profiles so assist feels controlled in Quick Match and Ranked.',
	},
	'free-naraka-cheat-download': {
		q: 'Is there a free Naraka hack download?',
		a: 'Naraka Cheats is a paid license — there is no official free download. Avoid random “free naraka cheat” sites; they often ship malware or detected loaders. Compare monthly and lifetime plans on Pricing for legitimate ESP, radar, and aimbot access with support.',
	},
	'naraka-neac-bypass': {
		q: 'How does NEAC bypass work for naraka cheats?',
		a: 'There is no permanent NEAC bypass. Naraka Cheats is maintained with rebuilds after Naraka and NEAC patches — check the Updates page before you queue. Responsible settings and loading the latest build matter more than any “bypass” claim.',
	},
	'naraka-cheats-for-ranked': {
		q: 'Do naraka cheats work in ranked competitive?',
		a: 'Yes. ESP, radar, and soft aim are built for Ranked and Quick Match Naraka on Windows PC. Use conservative overlay settings, read maintenance notes after patches, and confirm undetected status on the Updates page before competitive queues.',
	},
	'what-is-naraka-mod-menu': {
		q: 'What is a Naraka mod menu?',
		a: 'A Naraka mod menu is an in-game overlay to toggle ESP wallhack, radar, aimbot, and visual settings without alt-tabbing. Naraka Cheats ships a lightweight mod menu for Windows PC — see Features for the full toggle list.',
	},
	'external-vs-internal-naraka-cheats': {
		q: 'What is the difference between external and internal naraka cheats?',
		a: 'External hacks read game memory from outside the client; internal hooks run inside the process. Naraka Cheats is built as an external-style package for easier setup on Windows PC, bundling ESP, radar, and soft aim with NEAC maintenance after patches.',
	},
	'how-long-naraka-cheat-setup-takes': {
		q: 'How long does naraka cheats setup take?',
		a: 'Most buyers finish Naraka Cheats setup in 10–20 minutes on Windows PC: install the loader, activate the license, and enable ESP or aimbot in the mod menu. If Windows Defender or another AV blocks the loader, follow Setup troubleshooting or email support@narakacheats.org with your order ID.',
	},
	'does-naraka-cheats-include-triggerbot': {
		q: 'Does Naraka Cheats include triggerbot?',
		a: 'Naraka Cheats focuses on ESP wallhack, 2D radar, and soft aim profiles. Triggerbot is not advertised as a standalone module — review the Features page for the current toggle list before checkout.',
	},
};

FAQ_I18N.en = EN_FAQ_ITEMS;

async function main() {
	const en = JSON.parse(await readFile(EN_FILE, 'utf8'));
	en.faq = { items: EN_FAQ_ITEMS };
	en.media = {
		demoVideoTitle: 'Naraka Cheats ESP, aimbot and radar demo',
		playVideo: 'Play video',
	};
	const enUi = allUiStrings.en;
	en.hero = {
		...enUi.hero,
		title: enUi.hero.title,
		priceFrom: en.hero?.priceFrom ?? 'from',
		imageAlt: en.hero?.imageAlt ?? '{{brand}} — Naraka ESP and aimbot overlay',
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
		pillsLabel: 'Official Naraka guides',
		steam: { label: 'Naraka on PC', note: 'Official store page, system requirements, and player reviews.' },
		patch: { label: 'Naraka patch notes & news', note: 'Read official update posts before you change your loadout.' },
		official: { label: 'Official Naraka website', note: 'Game overview from 24 Entertainment.' },
		wiki: { label: 'Naraka Wiki (Fandom)', note: 'Player stats, maps, and hero abilities.' },
		community: { label: 'Naraka community hub', note: 'Announcements and community discussions.' },
	};
	en.internalLinks = {
		relatedLede: 'Explore more Naraka Cheats guides — the same topics covered on other cheat sites, mapped to our canonical pages.',
		topicsTitle: 'Product guides',
		topicsLabel: 'Product topic guides',
		topicsLede: 'Jump to the main Naraka Cheats pages for ESP, aimbot, radar, setup, and status.',
		overview: 'Naraka Cheats overview',
		esp: 'ESP & wallhack',
		aimbot: 'Aimbot & soft aim',
		radar: 'Radar hack',
		features: 'Full feature list',
		pricing: 'Store & pricing',
		setup: 'Setup guide',
		status: 'Live status',
		faq: 'FAQ',
		support: 'Support',
		blog: 'Blog',
		reviews: 'Buyer reviews',
		hacks: 'Naraka Cheats pillar',
		undetected: 'Undetected status',
	};
	en.images = { ...en.images, ...enUi.images };
	en.gallery = {
		eyebrow: 'Naraka Cheats',
		title: 'Naraka Cheats gallery',
		subtitle: 'Naraka Cheats visuals — ESP, wallhack, aimbot, and radar for Naraka on PC.',
		lead: 'Naraka Cheats helps you spot enemy heroes, loot, and high-traffic POIs with ESP, aimbot, and radar in one license.',
		highlightEspTitle: 'Naraka Cheats ESP',
		highlightEspCopy: 'See enemy heroes through walls with Naraka Cheats ESP and wallhack overlays.',
		highlightRadarTitle: 'Naraka Cheats radar',
		highlightRadarCopy: 'Track nearby threats with Naraka Cheats radar before you push or rotate.',
		highlightAimbotTitle: 'Naraka Cheats aimbot',
		highlightAimbotCopy: 'Use soft aim and aimbot controls tuned for Naraka matches on Windows PC.',
		updatesLabel: 'Naraka Cheats updates',
		updatesShort: 'Updates',
	};
	en.home = {
		...en.home,
		aboutTitle: 'undetected cheats for Naraka',
		aboutP1:
			'Naraka Cheats is an undetected naraka cheats package for Naraka on Windows PC. One license includes ESP wallhack, soft aim, and 2D radar, with NEAC rebuilds after game patches. Check Status before you queue.',
		volumeLabel: 'Volume',
		seekLabel: 'Video progress',
		muteVideo: 'Mute video',
		unmuteVideo: 'Unmute video',
	};
	en.homeSeo = {
		...en.homeSeo,
		linkFinalsCheats: 'Naraka Cheats',
	};
	en.reviews = {
		...(en.reviews ?? {}),
		eyebrow: 'Naraka Cheats',
		homeTitle: 'Naraka Cheats reviews',
		subtitle: 'Recent feedback from Naraka Cheats buyers',
		buyerReviews: '{{count}} Naraka Cheats buyer reviews',
		averageAria: '{{rating}} average from {{count}} Naraka Cheats buyer reviews',
		readAll: 'Read all Naraka Cheats reviews →',
	};
	en.blog = {
		...(en.blog ?? {}),
		blogTitle: 'Naraka Cheats Blog | Guides & Patch Tips',
		blogDescription:
			'Naraka guides — battle royale tips, ESP, aimbot notes, grapple routes, and NEAC update coverage. English blog at narakacheats.org/blog/.',
		blogH1: 'Naraka Cheats Intel',
		blogIntro:
			'Actionable Naraka guides for ranked and Quick Match sessions — meta breakdowns, grapple routes, hero tiers, and pro warmup routines. Pair these tips with our Naraka Cheats pages for ESP, soft aim, and radar when you need in-match tools.',
	};

	let es;
	try {
		es = JSON.parse(await readFile(ES_FILE, 'utf8'));
		es.faq = { items: FAQ_I18N.es };
		es.home = {
			...(es.home ?? {}),
			aboutTitle: 'cheats indetectables para Naraka',
		};
	} catch {
		es = en;
	}

	for (const locale of LOCALES) {
		const dir = path.join(ROOT, 'public', 'locales', locale);
		await mkdir(dir, { recursive: true });

		let translation = en;
		if (locale === 'es') {
			translation = deepMerge(en, es);
		} else if (locale !== 'en') {
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
		await writeFile(out, `${JSON.stringify(translation, null, 2)}\n`, 'utf8');
		console.log('✓', out);
	}

	// Refresh canonical EN with faq/media keys
	await writeFile(EN_FILE, `${JSON.stringify(en, null, 2)}\n`, 'utf8');
	console.log(`Generated ${LOCALES.length} locale translation files.`);
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
