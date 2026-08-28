import { siteConfig } from '../site';
import {
	defaultLocale,
	isLocaleCode,
	localeCodes,
	localeMap,
	type LocaleCode,
	locales,
} from './locales';
import { getCannibalTargetId, isCannibalPageId } from '../seo-cannibal-map';

/** Canonical page identifiers shared across all locales. */
export type PageId =
	| 'home'
	| 'naraka-esp'
	| 'naraka-aimbot'
	| 'features'
	| 'pricing'
	| 'setup'
	| 'updates'
	| 'faq'
	| 'support'
	| 'undetected'
	| 'wallhack'
	| 'radar'
	| 'neac'
	| 'cheats-2026'
	| 'hacks'
	| 'cheat-download'
	| 'mod-menu'
	| 'soft-aim'
	| 'best-cheats'
	| 'aimbot-hack'
	| 'esp-hack'
	| 'unlock-all'
	| 'privacy'
	| 'refund'
	| 'terms';

/** English (official) paths — served at site root without /en/ prefix. */
export const englishPaths: Record<PageId, string> = {
	home: '/',
	'naraka-esp': '/naraka-esp/',
	'naraka-aimbot': '/naraka-aimbot/',
	features: '/features/',
	pricing: '/pricing/',
	setup: '/setup/',
	updates: '/updates/',
	faq: '/faq/',
	support: '/support/',
	undetected: '/undetected-naraka-cheats/',
	wallhack: '/naraka-wallhack/',
	radar: '/naraka-radar-hack/',
	'neac': '/neac-bypass/',
	'cheats-2026': '/naraka-cheats-2026/',
	hacks: '/naraka-cheats/',
	'cheat-download': '/naraka-cheat-download/',
	'mod-menu': '/naraka-mod-menu/',
	'soft-aim': '/naraka-soft-aim/',
	'best-cheats': '/best-naraka-cheats/',
	'aimbot-hack': '/naraka-aimbot-hack/',
	'esp-hack': '/naraka-esp-hack/',
	'unlock-all': '/naraka-unlock-all/',
	privacy: '/privacy-policy/',
	refund: '/refund-policy/',
	terms: '/terms/',
};

/**
 * Localized URL slugs (path after /{lang}/).
 * English uses englishPaths at root; other locales use these slugs under /{lang}/.
 */
export const localizedSlugs: Record<PageId, Record<LocaleCode, string>> = {
	home: {
		en: '',
		es: '',
		fr: '',
		de: '',
		pt: '',
		it: '',
		nl: '',
		pl: '',
		ru: '',
		tr: '',
		ar: '',
		ja: '',
		ko: '',
		zh: '',
		hi: '',
		id: '',
		th: '',
		vi: '',
		uk: '',
		cs: '',
		ro: '',
		sv: '',
	},
	'naraka-esp': {
		en: 'naraka-esp',
		es: 'trucos-naraka-esp',
		fr: 'triche-naraka-esp',
		de: 'naraka-esp-wallhack',
		pt: 'hacks-naraka-esp',
		it: 'trucchi-naraka-esp',
		nl: 'naraka-esp-wallhack',
		pl: 'cheaty-naraka-esp',
		ru: 'naraka-esp-chity',
		tr: 'naraka-esp-hile',
		ar: 'naraka-esp-wallhack',
		ja: 'naraka-esp-wallhack',
		ko: 'naraka-esp-wallhack',
		zh: 'naraka-esp-wallhack',
		hi: 'naraka-esp-wallhack',
		id: 'naraka-esp-wallhack',
		th: 'naraka-esp-wallhack',
		vi: 'naraka-esp-wallhack',
		uk: 'naraka-esp-chity',
		cs: 'naraka-esp-wallhack',
		ro: 'naraka-esp-wallhack',
		sv: 'naraka-esp-wallhack',
	},
	'naraka-aimbot': {
		en: 'naraka-aimbot',
		es: 'trucos-naraka-aimbot',
		fr: 'triche-naraka-aimbot',
		de: 'naraka-aimbot',
		pt: 'hacks-naraka-aimbot',
		it: 'trucchi-naraka-aimbot',
		nl: 'naraka-aimbot',
		pl: 'cheaty-naraka-aimbot',
		ru: 'naraka-aimbot-chity',
		tr: 'naraka-aimbot-hile',
		ar: 'naraka-aimbot',
		ja: 'naraka-aimbot',
		ko: 'naraka-aimbot',
		zh: 'naraka-aimbot',
		hi: 'naraka-aimbot',
		id: 'naraka-aimbot',
		th: 'naraka-aimbot',
		vi: 'naraka-aimbot',
		uk: 'naraka-aimbot-chity',
		cs: 'naraka-aimbot',
		ro: 'naraka-aimbot',
		sv: 'naraka-aimbot',
	},
	features: {
		en: 'features',
		es: 'caracteristicas-trucos-naraka',
		fr: 'fonctionnalites-triche-naraka',
		de: 'naraka-cheats-funktionen',
		pt: 'recursos-cheats-naraka',
		it: 'funzioni-trucchi-naraka',
		nl: 'naraka-cheats-functies',
		pl: 'funkcje-cheatow-naraka',
		ru: 'funkcii-chitov-naraka',
		tr: 'naraka-hile-ozellikleri',
		ar: 'naraka-cheats-features',
		ja: 'naraka-cheats-features',
		ko: 'naraka-cheats-features',
		zh: 'naraka-cheats-features',
		hi: 'naraka-cheats-features',
		id: 'naraka-cheats-features',
		th: 'naraka-cheats-features',
		vi: 'naraka-cheats-features',
		uk: 'funkcii-chitiv-naraka',
		cs: 'naraka-cheats-funkce',
		ro: 'functii-cheats-naraka',
		sv: 'naraka-cheats-funktioner',
	},
	pricing: {
		en: 'pricing',
		es: 'precios-trucos-naraka',
		fr: 'prix-triche-naraka',
		de: 'naraka-cheats-preise',
		pt: 'precos-cheats-naraka',
		it: 'prezzi-trucchi-naraka',
		nl: 'naraka-cheats-prijzen',
		pl: 'ceny-cheatow-naraka',
		ru: 'ceny-chitov-naraka',
		tr: 'naraka-hile-fiyatlari',
		ar: 'naraka-cheats-pricing',
		ja: 'naraka-cheats-pricing',
		ko: 'naraka-cheats-pricing',
		zh: 'naraka-cheats-pricing',
		hi: 'naraka-cheats-pricing',
		id: 'naraka-cheats-pricing',
		th: 'naraka-cheats-pricing',
		vi: 'naraka-cheats-pricing',
		uk: 'ciny-chitiv-naraka',
		cs: 'naraka-cheats-ceny',
		ro: 'preturi-cheats-naraka',
		sv: 'naraka-cheats-priser',
	},
	setup: {
		en: 'setup',
		es: 'instalacion-trucos-naraka',
		fr: 'installation-triche-naraka',
		de: 'naraka-cheats-installation',
		pt: 'instalacao-cheats-naraka',
		it: 'installazione-trucchi-naraka',
		nl: 'naraka-cheats-installatie',
		pl: 'instalacja-cheatow-naraka',
		ru: 'ustanovka-chitov-naraka',
		tr: 'naraka-hile-kurulum',
		ar: 'naraka-cheats-setup',
		ja: 'naraka-cheats-setup',
		ko: 'naraka-cheats-setup',
		zh: 'naraka-cheats-setup',
		hi: 'naraka-cheats-setup',
		id: 'naraka-cheats-setup',
		th: 'naraka-cheats-setup',
		vi: 'naraka-cheats-setup',
		uk: 'vstanovka-chitiv-naraka',
		cs: 'naraka-cheats-instalace',
		ro: 'instalare-cheats-naraka',
		sv: 'naraka-cheats-installation',
	},
	updates: {
		en: 'updates',
		es: 'actualizaciones-trucos-naraka',
		fr: 'mises-a-jour-triche-naraka',
		de: 'naraka-cheats-updates',
		pt: 'atualizacoes-cheats-naraka',
		it: 'aggiornamenti-trucchi-naraka',
		nl: 'naraka-cheats-updates',
		pl: 'aktualizacje-cheatow-naraka',
		ru: 'obnovleniya-chitov-naraka',
		tr: 'naraka-hile-guncellemeleri',
		ar: 'naraka-cheats-updates',
		ja: 'naraka-cheats-updates',
		ko: 'naraka-cheats-updates',
		zh: 'naraka-cheats-updates',
		hi: 'naraka-cheats-updates',
		id: 'naraka-cheats-updates',
		th: 'naraka-cheats-updates',
		vi: 'naraka-cheats-updates',
		uk: 'onovlennya-chitiv-naraka',
		cs: 'naraka-cheats-aktualizace',
		ro: 'actualizari-cheats-naraka',
		sv: 'naraka-cheats-uppdateringar',
	},
	faq: {
		en: 'faq',
		es: 'preguntas-trucos-naraka',
		fr: 'faq-triche-naraka',
		de: 'naraka-cheats-faq',
		pt: 'faq-cheats-naraka',
		it: 'faq-trucchi-naraka',
		nl: 'naraka-cheats-faq',
		pl: 'faq-cheatow-naraka',
		ru: 'faq-chitov-naraka',
		tr: 'naraka-hile-sss',
		ar: 'naraka-cheats-faq',
		ja: 'naraka-cheats-faq',
		ko: 'naraka-cheats-faq',
		zh: 'naraka-cheats-faq',
		hi: 'naraka-cheats-faq',
		id: 'naraka-cheats-faq',
		th: 'naraka-cheats-faq',
		vi: 'naraka-cheats-faq',
		uk: 'faq-chitiv-naraka',
		cs: 'naraka-cheats-faq',
		ro: 'faq-cheats-naraka',
		sv: 'naraka-cheats-faq',
	},
	support: {
		en: 'support',
		es: 'soporte-trucos-naraka',
		fr: 'support-triche-naraka',
		de: 'naraka-cheats-support',
		pt: 'suporte-cheats-naraka',
		it: 'supporto-trucchi-naraka',
		nl: 'naraka-cheats-support',
		pl: 'wsparcie-cheatow-naraka',
		ru: 'podderzhka-chitov-naraka',
		tr: 'naraka-hile-destek',
		ar: 'naraka-cheats-support',
		ja: 'naraka-cheats-support',
		ko: 'naraka-cheats-support',
		zh: 'naraka-cheats-support',
		hi: 'naraka-cheats-support',
		id: 'naraka-cheats-support',
		th: 'naraka-cheats-support',
		vi: 'naraka-cheats-support',
		uk: 'pidtrymka-chitiv-naraka',
		cs: 'naraka-cheats-podpora',
		ro: 'suport-cheats-naraka',
		sv: 'naraka-cheats-support',
	},
	undetected: {
		en: 'undetected-naraka-cheats',
		es: 'trucos-naraka-indetectables',
		fr: 'triche-naraka-indetectable',
		de: 'unentdeckte-naraka-cheats',
		pt: 'cheats-naraka-indetectaveis',
		it: 'trucchi-naraka-indetectabili',
		nl: 'undetected-naraka-cheats',
		pl: 'niewykrywalne-cheats-naraka',
		ru: 'nedecektiruemye-chity-naraka',
		tr: 'tespit-edilemeyen-naraka-hileleri',
		ar: 'undetected-naraka-cheats',
		ja: 'undetected-naraka-cheats',
		ko: 'undetected-naraka-cheats',
		zh: 'undetected-naraka-cheats',
		hi: 'undetected-naraka-cheats',
		id: 'undetected-naraka-cheats',
		th: 'undetected-naraka-cheats',
		vi: 'undetected-naraka-cheats',
		uk: 'nedecektovani-chity-naraka',
		cs: 'undetected-naraka-cheats',
		ro: 'cheats-naraka-nedetectabile',
		sv: 'undetected-naraka-cheats',
	},
	wallhack: {
		en: 'naraka-wallhack',
		es: 'wallhack-trucos-naraka',
		fr: 'wallhack-triche-naraka',
		de: 'naraka-wallhack',
		pt: 'wallhack-cheats-naraka',
		it: 'wallhack-trucchi-naraka',
		nl: 'naraka-wallhack',
		pl: 'wallhack-cheatow-naraka',
		ru: 'wallhack-chity-naraka',
		tr: 'naraka-wallhack-hile',
		ar: 'naraka-wallhack',
		ja: 'naraka-wallhack',
		ko: 'naraka-wallhack',
		zh: 'naraka-wallhack',
		hi: 'naraka-wallhack',
		id: 'naraka-wallhack',
		th: 'naraka-wallhack',
		vi: 'naraka-wallhack',
		uk: 'wallhack-chity-naraka',
		cs: 'naraka-wallhack',
		ro: 'wallhack-cheats-naraka',
		sv: 'naraka-wallhack',
	},
	radar: {
		en: 'naraka-radar-hack',
		es: 'radar-hack-trucos-naraka',
		fr: 'radar-hack-triche-naraka',
		de: 'naraka-radar-hack',
		pt: 'radar-hack-cheats-naraka',
		it: 'radar-hack-trucchi-naraka',
		nl: 'naraka-radar-hack',
		pl: 'radar-hack-cheatow-naraka',
		ru: 'radar-hack-chity-naraka',
		tr: 'naraka-radar-hack',
		ar: 'naraka-radar-hack',
		ja: 'naraka-radar-hack',
		ko: 'naraka-radar-hack',
		zh: 'naraka-radar-hack',
		hi: 'naraka-radar-hack',
		id: 'naraka-radar-hack',
		th: 'naraka-radar-hack',
		vi: 'naraka-radar-hack',
		uk: 'radar-hack-chity-naraka',
		cs: 'naraka-radar-hack',
		ro: 'radar-hack-cheats-naraka',
		sv: 'naraka-radar-hack',
	},
	'neac': {
		en: 'neac-bypass',
		es: 'neac-bypass-trucos',
		fr: 'neac-bypass-triche',
		de: 'neac-bypass',
		pt: 'neac-bypass-hacks',
		it: 'neac-bypass-trucchi',
		nl: 'neac-bypass',
		pl: 'neac-bypass-cheatow',
		ru: 'neac-bypass-chity',
		tr: 'neac-bypass',
		ar: 'neac-bypass',
		ja: 'neac-bypass',
		ko: 'neac-bypass',
		zh: 'neac-bypass',
		hi: 'neac-bypass',
		id: 'neac-bypass',
		th: 'neac-bypass',
		vi: 'neac-bypass',
		uk: 'neac-bypass-chity',
		cs: 'neac-bypass',
		ro: 'neac-bypass-hacks',
		sv: 'neac-bypass',
	},
	'cheats-2026': {
		en: 'naraka-cheats-2026',
		es: 'trucos-naraka-2026',
		fr: 'triche-naraka-2026',
		de: 'naraka-cheats-2026',
		pt: 'cheats-naraka-2026',
		it: 'trucchi-naraka-2026',
		nl: 'naraka-cheats-2026',
		pl: 'cheaty-naraka-2026',
		ru: 'chity-naraka-2026',
		tr: 'naraka-hileleri-2026',
		ar: 'naraka-cheats-2026',
		ja: 'naraka-cheats-2026',
		ko: 'naraka-cheats-2026',
		zh: 'naraka-cheats-2026',
		hi: 'naraka-cheats-2026',
		id: 'naraka-cheats-2026',
		th: 'naraka-cheats-2026',
		vi: 'naraka-cheats-2026',
		uk: 'chity-naraka-2026',
		cs: 'naraka-cheats-2026',
		ro: 'cheats-naraka-2026',
		sv: 'naraka-cheats-2026',
	},
	hacks: {
		en: 'naraka-cheats',
		es: 'hacks-trucos-naraka',
		fr: 'hacks-triche-naraka',
		de: 'naraka-cheats',
		pt: 'cheats-naraka',
		it: 'hacks-trucchi-naraka',
		nl: 'naraka-cheats',
		pl: 'hacks-cheatow-naraka',
		ru: 'haksy-chity-naraka',
		tr: 'naraka-hile-hacks',
		ar: 'naraka-cheats',
		ja: 'naraka-cheats',
		ko: 'naraka-cheats',
		zh: 'naraka-cheats',
		hi: 'naraka-cheats',
		id: 'naraka-cheats',
		th: 'naraka-cheats',
		vi: 'naraka-cheats',
		uk: 'haksy-chity-naraka',
		cs: 'naraka-cheats',
		ro: 'cheats-naraka',
		sv: 'naraka-cheats',
	},
	'cheat-download': {
		en: 'naraka-cheat-download',
		es: 'descarga-trucos-naraka',
		fr: 'telechargement-triche-naraka',
		de: 'naraka-cheat-download',
		pt: 'download-cheats-naraka',
		it: 'download-trucchi-naraka',
		nl: 'naraka-cheat-download',
		pl: 'pobieranie-cheatow-naraka',
		ru: 'skachat-chity-naraka',
		tr: 'naraka-hile-indir',
		ar: 'naraka-cheat-download',
		ja: 'naraka-cheat-download',
		ko: 'naraka-cheat-download',
		zh: 'naraka-cheat-download',
		hi: 'naraka-cheat-download',
		id: 'naraka-cheat-download',
		th: 'naraka-cheat-download',
		vi: 'naraka-cheat-download',
		uk: 'zavantazhennya-chitiv-naraka',
		cs: 'naraka-cheat-download',
		ro: 'descarcare-cheats-naraka',
		sv: 'naraka-cheat-download',
	},
	'mod-menu': {
		en: 'naraka-mod-menu',
		es: 'menu-mod-trucos-naraka',
		fr: 'menu-mod-triche-naraka',
		de: 'naraka-mod-menu',
		pt: 'menu-mod-cheats-naraka',
		it: 'menu-mod-trucchi-naraka',
		nl: 'naraka-mod-menu',
		pl: 'menu-mod-cheatow-naraka',
		ru: 'mod-menu-chity-naraka',
		tr: 'naraka-mod-menu',
		ar: 'naraka-mod-menu',
		ja: 'naraka-mod-menu',
		ko: 'naraka-mod-menu',
		zh: 'naraka-mod-menu',
		hi: 'naraka-mod-menu',
		id: 'naraka-mod-menu',
		th: 'naraka-mod-menu',
		vi: 'naraka-mod-menu',
		uk: 'mod-menu-chity-naraka',
		cs: 'naraka-mod-menu',
		ro: 'meniu-mod-cheats-naraka',
		sv: 'naraka-mod-menu',
	},
	'soft-aim': {
		en: 'naraka-soft-aim',
		es: 'soft-aim-trucos-naraka',
		fr: 'soft-aim-triche-naraka',
		de: 'naraka-soft-aim',
		pt: 'soft-aim-cheats-naraka',
		it: 'soft-aim-trucchi-naraka',
		nl: 'naraka-soft-aim',
		pl: 'soft-aim-cheatow-naraka',
		ru: 'soft-aim-chity-naraka',
		tr: 'naraka-soft-aim',
		ar: 'naraka-soft-aim',
		ja: 'naraka-soft-aim',
		ko: 'naraka-soft-aim',
		zh: 'naraka-soft-aim',
		hi: 'naraka-soft-aim',
		id: 'naraka-soft-aim',
		th: 'naraka-soft-aim',
		vi: 'naraka-soft-aim',
		uk: 'soft-aim-chity-naraka',
		cs: 'naraka-soft-aim',
		ro: 'soft-aim-cheats-naraka',
		sv: 'naraka-soft-aim',
	},
	'best-cheats': {
		en: 'best-naraka-cheats',
		es: 'mejores-trucos-naraka',
		fr: 'meilleures-triches-naraka',
		de: 'beste-naraka-cheats',
		pt: 'melhores-cheats-naraka',
		it: 'migliori-trucchi-naraka',
		nl: 'beste-naraka-cheats',
		pl: 'najlepsze-cheats-naraka',
		ru: 'luchshie-chity-naraka',
		tr: 'en-iyi-naraka-hileleri',
		ar: 'best-naraka-cheats',
		ja: 'best-naraka-cheats',
		ko: 'best-naraka-cheats',
		zh: 'best-naraka-cheats',
		hi: 'best-naraka-cheats',
		id: 'best-naraka-cheats',
		th: 'best-naraka-cheats',
		vi: 'best-naraka-cheats',
		uk: 'naykrashchi-chity-naraka',
		cs: 'nejlepsi-naraka-cheats',
		ro: 'cele-mai-bune-cheats-naraka',
		sv: 'basta-naraka-cheats',
	},
	'aimbot-hack': {
		en: 'naraka-aimbot-hack',
		es: 'aimbot-hack-trucos-naraka',
		fr: 'aimbot-hack-triche-naraka',
		de: 'naraka-aimbot-hack',
		pt: 'aimbot-hack-cheats-naraka',
		it: 'aimbot-hack-trucchi-naraka',
		nl: 'naraka-aimbot-hack',
		pl: 'aimbot-hack-cheatow-naraka',
		ru: 'aimbot-hack-chity-naraka',
		tr: 'naraka-aimbot-hack',
		ar: 'naraka-aimbot-hack',
		ja: 'naraka-aimbot-hack',
		ko: 'naraka-aimbot-hack',
		zh: 'naraka-aimbot-hack',
		hi: 'naraka-aimbot-hack',
		id: 'naraka-aimbot-hack',
		th: 'naraka-aimbot-hack',
		vi: 'naraka-aimbot-hack',
		uk: 'aimbot-hack-chity-naraka',
		cs: 'naraka-aimbot-hack',
		ro: 'aimbot-hack-cheats-naraka',
		sv: 'naraka-aimbot-hack',
	},
	'esp-hack': {
		en: 'naraka-esp-hack',
		es: 'esp-hack-trucos-naraka',
		fr: 'esp-hack-triche-naraka',
		de: 'naraka-esp-hack',
		pt: 'esp-hack-cheats-naraka',
		it: 'esp-hack-trucchi-naraka',
		nl: 'naraka-esp-hack',
		pl: 'esp-hack-cheatow-naraka',
		ru: 'esp-hack-chity-naraka',
		tr: 'naraka-esp-hack',
		ar: 'naraka-esp-hack',
		ja: 'naraka-esp-hack',
		ko: 'naraka-esp-hack',
		zh: 'naraka-esp-hack',
		hi: 'naraka-esp-hack',
		id: 'naraka-esp-hack',
		th: 'naraka-esp-hack',
		vi: 'naraka-esp-hack',
		uk: 'esp-hack-chity-naraka',
		cs: 'naraka-esp-hack',
		ro: 'esp-hack-cheats-naraka',
		sv: 'naraka-esp-hack',
	},
	'unlock-all': {
		en: 'naraka-unlock-all',
		es: 'unlock-all-trucos-naraka',
		fr: 'unlock-all-triche-naraka',
		de: 'naraka-unlock-all',
		pt: 'unlock-all-cheats-naraka',
		it: 'unlock-all-trucchi-naraka',
		nl: 'naraka-unlock-all',
		pl: 'unlock-all-cheatow-naraka',
		ru: 'unlock-all-chity-naraka',
		tr: 'naraka-unlock-all',
		ar: 'naraka-unlock-all',
		ja: 'naraka-unlock-all',
		ko: 'naraka-unlock-all',
		zh: 'naraka-unlock-all',
		hi: 'naraka-unlock-all',
		id: 'naraka-unlock-all',
		th: 'naraka-unlock-all',
		vi: 'naraka-unlock-all',
		uk: 'unlock-all-chity-naraka',
		cs: 'naraka-unlock-all',
		ro: 'unlock-all-cheats-naraka',
		sv: 'naraka-unlock-all',
	},
	privacy: {
		en: 'privacy-policy',
		es: 'politica-privacidad',
		fr: 'politique-confidentialite',
		de: 'datenschutz',
		pt: 'politica-privacidade',
		it: 'privacy-policy',
		nl: 'privacybeleid',
		pl: 'polityka-prywatnosci',
		ru: 'politika-konfidencialnosti',
		tr: 'gizlilik-politikasi',
		ar: 'privacy-policy',
		ja: 'privacy-policy',
		ko: 'privacy-policy',
		zh: 'privacy-policy',
		hi: 'privacy-policy',
		id: 'privacy-policy',
		th: 'privacy-policy',
		vi: 'privacy-policy',
		uk: 'polityka-konfidentsijnosti',
		cs: 'ochrana-osobnich-udaju',
		ro: 'politica-confidentialitate',
		sv: 'integritetspolicy',
	},
	refund: {
		en: 'refund-policy',
		es: 'politica-reembolso',
		fr: 'politique-remboursement',
		de: 'rueckerstattung',
		pt: 'politica-reembolso',
		it: 'politica-rimborso',
		nl: 'terugbetalingsbeleid',
		pl: 'polityka-zwrotow',
		ru: 'politika-vozvrata',
		tr: 'iade-politikasi',
		ar: 'refund-policy',
		ja: 'refund-policy',
		ko: 'refund-policy',
		zh: 'refund-policy',
		hi: 'refund-policy',
		id: 'refund-policy',
		th: 'refund-policy',
		vi: 'refund-policy',
		uk: 'polityka-povorennya',
		cs: 'refund-policy',
		ro: 'politica-rambursare',
		sv: 'aterbetalningspolicy',
	},
	terms: {
		en: 'terms',
		es: 'terminos-uso',
		fr: 'conditions-utilisation',
		de: 'nutzungsbedingungen',
		pt: 'termos-uso',
		it: 'termini-uso',
		nl: 'gebruiksvoorwaarden',
		pl: 'regulamin',
		ru: 'usloviya-ispolzovaniya',
		tr: 'kullanim-kosullari',
		ar: 'terms',
		ja: 'terms',
		ko: 'terms',
		zh: 'terms',
		hi: 'terms',
		id: 'terms',
		th: 'terms',
		vi: 'terms',
		uk: 'umovy-vykorystannya',
		cs: 'podminky-uziti',
		ro: 'termeni-utilizare',
		sv: 'anvandarvillkor',
	},
};

export const pageIds = Object.keys(englishPaths) as PageId[];

export function getLocalizedPath(pageId: PageId, locale: LocaleCode): string {
	if (locale === defaultLocale) {
		return englishPaths[pageId];
	}
	const slug = localizedSlugs[pageId][locale];
	return slug ? `/${locale}/${slug}/` : `/${locale}/`;
}

/** Map English root paths to the correct locale URL (for CTAs and inline links). */
export function localizeInternalHref(href: string, locale: LocaleCode): string {
	if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('#')) {
		return href;
	}
	const trimmed = href.replace(/\/+$/, '') || '/';
	const withSlash = trimmed === '/' ? '/' : `${trimmed}/`;
	if (withSlash === '/naraka-cheats/' || withSlash === '/naraka-cheats/') {
		return getLocalizedPath('hacks', locale);
	}
	for (const pageId of pageIds) {
		const english = englishPaths[pageId];
		if (english === withSlash || english.replace(/\/+$/, '') === trimmed) {
			const targetId = getCannibalTargetId(pageId) as PageId;
			return getLocalizedPath(targetId, locale);
		}
	}
	return href;
}

/** Canonical absolute URL — always https apex with trailing slash (matches Layout.astro). */
export function buildCanonicalUrl(path: string): string {
	const normalized =
		!path || path === '/'
			? '/'
			: path.endsWith('/') || path.includes('.')
				? path
				: `${path}/`;
	return new URL(normalized, siteConfig.url).href;
}

export function absoluteLocalizedUrl(pageId: PageId, locale: LocaleCode): string {
	return buildCanonicalUrl(getLocalizedPath(pageId, locale));
}

export type HreflangAlternate = { hreflang: string; href: string };

/** Self-referential hreflang for single-locale pages (reviews, 404). */
export function getSelfHreflangAlternates(
	path: string,
	locale: LocaleCode = defaultLocale,
): HreflangAlternate[] {
	const href = buildCanonicalUrl(path);
	return [
		{ hreflang: localeMap[locale].hreflang, href },
		{ hreflang: 'x-default', href },
	];
}

export function getHreflangAlternates(pageId: PageId, currentLocale: LocaleCode = defaultLocale) {
	const resolvedId = (isCannibalPageId(pageId) ? getCannibalTargetId(pageId) : pageId) as PageId;
	const byLocale = localeCodes.map((code) => ({
		hreflang: localeMap[code].hreflang,
		href: absoluteLocalizedUrl(resolvedId, code),
		code,
	}));
	const self = byLocale.find((alt) => alt.code === currentLocale)!;
	const others = byLocale.filter((alt) => alt.code !== currentLocale);
	const xDefault = {
		hreflang: 'x-default' as const,
		href: absoluteLocalizedUrl(resolvedId, defaultLocale),
	};
	// Self-referential hreflang first — required by Google/Seobility for the active locale.
	return [
		{ hreflang: self.hreflang, href: self.href },
		...others.map(({ hreflang, href }) => ({ hreflang, href })),
		xDefault,
	];
}

export function resolvePageIdFromPath(path: string): PageId | undefined {
	const normalized = path.endsWith('/') ? path : `${path}/`;
	for (const id of pageIds) {
		if (englishPaths[id] === normalized) return id;
	}
	return undefined;
}

/** Parsed locale + page from any site URL (English root or /{lang}/…). */
export type PageContext = {
	locale: LocaleCode;
	pageId?: PageId;
	isBlogIndex?: boolean;
	blogSlug?: string;
	isReviewsIndex?: boolean;
	reviewSlug?: string;
};

function normalizePathname(pathname: string): string {
	if (!pathname || pathname === '/') return '/';
	if (pathname.includes('.') || pathname.endsWith('/')) return pathname;
	return `${pathname}/`;
}

/** Resolve locale and page/blog context from the current URL path. */
export function resolvePageContextFromPath(pathname: string): PageContext {
	const path = normalizePathname(pathname);

	if (path === '/') {
		return { locale: defaultLocale, pageId: 'home' };
	}

	const segments = path.split('/').filter(Boolean);
	let locale: LocaleCode = defaultLocale;
	let offset = 0;

	if (segments.length > 0 && isLocaleCode(segments[0]) && segments[0] !== defaultLocale) {
		locale = segments[0];
		offset = 1;
	}

	const rest = segments.slice(offset);

	if (rest.length === 0) {
		return { locale, pageId: 'home' };
	}

	if (rest[0] === 'blog') {
		if (rest.length === 1) {
			return { locale, isBlogIndex: true };
		}
		return { locale, blogSlug: rest[1] };
	}

	if (rest[0] === 'reviews') {
		if (rest.length === 1) {
			return { locale: defaultLocale, isReviewsIndex: true };
		}
		return { locale: defaultLocale, reviewSlug: rest[1] };
	}

	if (locale === defaultLocale) {
		return { locale, pageId: resolvePageIdFromPath(path) };
	}

	return { locale, pageId: resolvePageFromLocalizedPath(locale, rest[0]) };
}

/** Target URL for the same page in another locale (non-blog pages). */
export function getPageLocaleSwitchHref(context: PageContext, targetLocale: LocaleCode): string {
	if (context.isReviewsIndex) {
		return '/reviews/';
	}
	if (context.reviewSlug) {
		return `/reviews/${context.reviewSlug}/`;
	}
	if (context.pageId) {
		return getLocalizedPath(context.pageId, targetLocale);
	}
	return getLocalizedPath('home', targetLocale);
}

export function hreflangLinksXml(pageId: PageId, escapeXml: (v: string) => string): string {
	return getHreflangAlternates(pageId)
		.map(
			(alt) =>
				`    <xhtml:link rel="alternate" hreflang="${escapeXml(alt.hreflang)}" href="${escapeXml(alt.href)}"/>`,
		)
		.join('\n');
}

export function resolvePageFromLocalizedPath(
	locale: LocaleCode,
	slug: string | undefined,
): PageId | undefined {
	if (!slug) return 'home';
	for (const pageId of pageIds) {
		if (localizedSlugs[pageId][locale] === slug) return pageId;
	}
	return undefined;
}

/** Map Accept-Language header to preferred locale (region-aware). */
export function localeFromAcceptLanguage(header: string | null): LocaleCode {
	if (!header) return defaultLocale;
	const prefs = header
		.split(',')
		.map((part) => {
			const [tag, qPart] = part.trim().split(';');
			const q = qPart?.startsWith('q=') ? Number.parseFloat(qPart.slice(2)) : 1;
			return { tag: tag.toLowerCase(), q };
		})
		.sort((a, b) => b.q - a.q);

	for (const { tag } of prefs) {
		const primary = tag.split('-')[0];
		if (localeCodes.includes(primary as LocaleCode)) return primary as LocaleCode;
	}
	return defaultLocale;
}

export function getNavForLocale(locale: LocaleCode, labels: Record<string, string>) {
	const items: { label: string; href: string; pageId?: PageId }[] = [
		{ label: labels.home, href: getLocalizedPath('home', locale), pageId: 'home' },
	{ label: labels.hacks ?? 'Hacks', href: getLocalizedPath('hacks', locale), pageId: 'hacks' },
		{ label: labels.aimbot, href: getLocalizedPath('naraka-aimbot', locale), pageId: 'naraka-aimbot' },
		{ label: labels.esp, href: getLocalizedPath('naraka-esp', locale), pageId: 'naraka-esp' },
		{ label: 'Blog', href: locale === defaultLocale ? '/blog/' : `/${locale}/blog/` },
		{ label: labels.features, href: getLocalizedPath('features', locale), pageId: 'features' },
		{ label: labels.pricing, href: getLocalizedPath('pricing', locale), pageId: 'pricing' },
		{ label: labels.setup, href: getLocalizedPath('setup', locale), pageId: 'setup' },
		{ label: labels.updates, href: getLocalizedPath('updates', locale), pageId: 'updates' },
		{ label: labels.faq, href: getLocalizedPath('faq', locale), pageId: 'faq' },
	];
	return items;
}
