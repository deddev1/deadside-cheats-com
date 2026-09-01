export type LocaleCode =
	| 'en'
	| 'es'
	| 'fr'
	| 'de'
	| 'pt'
	| 'it'
	| 'nl'
	| 'pl'
	| 'ru'
	| 'tr'
	| 'ar'
	| 'ja'
	| 'ko'
	| 'zh'
	| 'hi'
	| 'id'
	| 'th'
	| 'vi'
	| 'uk'
	| 'cs'
	| 'ro'
	| 'sv';

export type LocaleMeta = {
	code: LocaleCode;
	name: string;
	nativeName: string;
	hreflang: string;
	ogLocale: string;
	dir: 'ltr' | 'rtl';
	region: string;
};

/** 22 locales for global Deadside Cheats blog SEO coverage. */
export const locales: LocaleMeta[] = [
	{ code: 'en', name: 'English', nativeName: 'English', hreflang: 'en', ogLocale: 'en_US', dir: 'ltr', region: 'Worldwide' },
	{ code: 'es', name: 'Spanish', nativeName: 'Español', hreflang: 'es', ogLocale: 'es_ES', dir: 'ltr', region: 'Worldwide' },
	{ code: 'fr', name: 'French', nativeName: 'Français', hreflang: 'fr', ogLocale: 'fr_FR', dir: 'ltr', region: 'Worldwide' },
	{ code: 'de', name: 'German', nativeName: 'Deutsch', hreflang: 'de', ogLocale: 'de_DE', dir: 'ltr', region: 'Worldwide' },
	{ code: 'pt', name: 'Portuguese', nativeName: 'Português', hreflang: 'pt', ogLocale: 'pt_BR', dir: 'ltr', region: 'Worldwide' },
	{ code: 'it', name: 'Italian', nativeName: 'Italiano', hreflang: 'it', ogLocale: 'it_IT', dir: 'ltr', region: 'Worldwide' },
	{ code: 'nl', name: 'Dutch', nativeName: 'Nederlands', hreflang: 'nl', ogLocale: 'nl_NL', dir: 'ltr', region: 'Worldwide' },
	{ code: 'pl', name: 'Polish', nativeName: 'Polski', hreflang: 'pl', ogLocale: 'pl_PL', dir: 'ltr', region: 'Worldwide' },
	{ code: 'ru', name: 'Russian', nativeName: 'Русский', hreflang: 'ru', ogLocale: 'ru_RU', dir: 'ltr', region: 'Worldwide' },
	{ code: 'tr', name: 'Turkish', nativeName: 'Türkçe', hreflang: 'tr', ogLocale: 'tr_TR', dir: 'ltr', region: 'Worldwide' },
	{ code: 'ar', name: 'Arabic', nativeName: 'العربية', hreflang: 'ar', ogLocale: 'ar_SA', dir: 'rtl', region: 'Worldwide' },
	{ code: 'ja', name: 'Japanese', nativeName: '日本語', hreflang: 'ja', ogLocale: 'ja_JP', dir: 'ltr', region: 'Worldwide' },
	{ code: 'ko', name: 'Korean', nativeName: '한국어', hreflang: 'ko', ogLocale: 'ko_KR', dir: 'ltr', region: 'Worldwide' },
	{ code: 'zh', name: 'Chinese', nativeName: '中文', hreflang: 'zh', ogLocale: 'zh_CN', dir: 'ltr', region: 'Worldwide' },
	{ code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', hreflang: 'hi', ogLocale: 'hi_IN', dir: 'ltr', region: 'Worldwide' },
	{ code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia', hreflang: 'id', ogLocale: 'id_ID', dir: 'ltr', region: 'Worldwide' },
	{ code: 'th', name: 'Thai', nativeName: 'ไทย', hreflang: 'th', ogLocale: 'th_TH', dir: 'ltr', region: 'Worldwide' },
	{ code: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt', hreflang: 'vi', ogLocale: 'vi_VN', dir: 'ltr', region: 'Worldwide' },
	{ code: 'uk', name: 'Ukrainian', nativeName: 'Українська', hreflang: 'uk', ogLocale: 'uk_UA', dir: 'ltr', region: 'Worldwide' },
	{ code: 'cs', name: 'Czech', nativeName: 'Čeština', hreflang: 'cs', ogLocale: 'cs_CZ', dir: 'ltr', region: 'Worldwide' },
	{ code: 'ro', name: 'Romanian', nativeName: 'Română', hreflang: 'ro', ogLocale: 'ro_RO', dir: 'ltr', region: 'Worldwide' },
	{ code: 'sv', name: 'Swedish', nativeName: 'Svenska', hreflang: 'sv', ogLocale: 'sv_SE', dir: 'ltr', region: 'Worldwide' },
];

export const defaultLocale: LocaleCode = 'en';

export const localeCodes = locales.map((l) => l.code);

export const localeMap = Object.fromEntries(locales.map((l) => [l.code, l])) as Record<
	LocaleCode,
	LocaleMeta
>;

export function isLocaleCode(value: string): value is LocaleCode {
	return localeCodes.includes(value as LocaleCode);
}

export function getLocale(code: string): LocaleMeta | undefined {
	return isLocaleCode(code) ? localeMap[code] : undefined;
}

/** UI strings for blog index pages per locale. */
export const blogUi: Record<
	LocaleCode,
	{
		blogTitle: string;
		blogDescription: string;
		blogH1: string;
		blogIntro: string;
		readMore: string;
		published: string;
		updated: string;
		relatedPosts: string;
		allPosts: string;
		home: string;
		language: string;
	}
> = {
	en: {
		blogTitle: 'Deadside Cheats Blog | Guides & Patch Tips',
		blogDescription:
			'Deadside guides — survival tips, ESP, aimbot notes, extract routes, and BattlEye update coverage. English blog at deadsidecheats.com/blog/.',
		blogH1: 'Deadside Cheats Intel',
		blogIntro:
			'Short Deadside guides for survival raids and squad sessions. Pair these tips with Deadside Cheats product pages when you need ESP, soft aim, or radar.',
		readMore: 'Read guide',
		published: 'Published',
		updated: 'Updated',
		relatedPosts: 'Related guides',
		allPosts: 'All blog posts',
		home: 'Deadside Cheats home',
		language: 'Language',
	},
	es: {
		blogTitle: 'Blog Deadside Cheats 2026 | Guías en 22 idiomas',
		blogDescription:
			'Blog de Deadside Cheats con guías de trucos indetectables, ESP wallhack, radar y Aimbot para Deadside en PC Windows.',
		blogH1: 'Blog Deadside Cheats — Guías globales',
		blogIntro:
			'Guías SEO de trucos Deadside indetectables, ESP wallhack, radar hack, Aimbot y mantenimiento BattlEye en 22 idiomas.',
		readMore: 'Leer guía',
		published: 'Publicado',
		updated: 'Actualizado',
		relatedPosts: 'Guías Deadside relacionadas',
		allPosts: 'Todos los artículos',
		home: 'Inicio Deadside Cheats',
		language: 'Idioma',
	},
	fr: {
		blogTitle: 'Blog Deadside Cheats 2026 | Guides en 22 langues',
		blogDescription:
			'Blog Deadside Cheats : triches indétectables, ESP wallhack, radar et Aimbot pour Deadside sur PC Windows.',
		blogH1: 'Blog Deadside Cheats — Guides mondiaux',
		blogIntro:
			'Guides SEO triches Deadside indétectables, ESP wallhack, radar hack, Aimbot et BattlEye en 22 langues.',
		readMore: 'Lire le guide',
		published: 'Publié',
		updated: 'Mis à jour',
		relatedPosts: 'Guides Deadside associés',
		allPosts: 'Tous les articles',
		home: 'Accueil Deadside Cheats',
		language: 'Langue',
	},
	de: {
		blogTitle: 'Deadside Cheats Blog 2026 | Guides in 22 Sprachen',
		blogDescription:
			'Deadside Cheats Blog mit undetected ESP, Wallhack, Radar und Aimbot Guides für Deadside auf Windows PC.',
		blogH1: 'Deadside Cheats Blog — Globale Guides',
		blogIntro:
			'SEO-Guides für undetected Deadside Cheats, ESP Wallhack, Radar Hack, Aimbot und BattlEye in 22 Sprachen.',
		readMore: 'Guide lesen',
		published: 'Veröffentlicht',
		updated: 'Aktualisiert',
		relatedPosts: 'Verwandte Deadside Guides',
		allPosts: 'Alle Beiträge',
		home: 'Deadside Cheats Start',
		language: 'Sprache',
	},
	pt: {
		blogTitle: 'Blog Deadside Cheats 2026 | Guias em 22 idiomas',
		blogDescription:
			'Blog Deadside Cheats com guias de cheats indetectáveis, ESP wallhack, radar e Aimbot para Deadside no PC.',
		blogH1: 'Blog Deadside Cheats — Guias globais',
		blogIntro:
			'Guias SEO de cheats Deadside indetectáveis, ESP wallhack, radar hack, Aimbot e BattlEye em 22 idiomas.',
		readMore: 'Ler guia',
		published: 'Publicado',
		updated: 'Atualizado',
		relatedPosts: 'Guias Deadside relacionados',
		allPosts: 'Todos os posts',
		home: 'Início Deadside Cheats',
		language: 'Idioma',
	},
	it: {
		blogTitle: 'Blog Deadside Cheats 2026 | Guide in 22 lingue',
		blogDescription:
			'Blog Deadside Cheats con guide cheat indetectable, ESP wallhack, radar e Aimbot per Deadside su PC Windows.',
		blogH1: 'Blog Deadside Cheats — Guide globali',
		blogIntro:
			'Guide SEO cheat Deadside indetectable, ESP wallhack, radar hack, Aimbot e BattlEye in 22 lingue.',
		readMore: 'Leggi guida',
		published: 'Pubblicato',
		updated: 'Aggiornato',
		relatedPosts: 'Guide Deadside correlate',
		allPosts: 'Tutti gli articoli',
		home: 'Home Deadside Cheats',
		language: 'Lingua',
	},
	nl: {
		blogTitle: 'Deadside Cheats Blog 2026 | Gidsen in 22 talen',
		blogDescription:
			'Deadside Cheats blog met undetected ESP, wallhack, radar en Aimbot gidsen voor Deadside op Windows PC.',
		blogH1: 'Deadside Cheats Blog — Wereldwijde gidsen',
		blogIntro:
			'SEO-gidsen voor undetected deadside cheats, ESP wallhack, radar hack, Aimbot en BattlEye in 22 talen.',
		readMore: 'Lees gids',
		published: 'Gepubliceerd',
		updated: 'Bijgewerkt',
		relatedPosts: 'Gerelateerde Deadside gidsen',
		allPosts: 'Alle posts',
		home: 'Deadside Cheats home',
		language: 'Taal',
	},
	pl: {
		blogTitle: 'Blog Deadside Cheats 2026 | Poradniki w 22 językach',
		blogDescription:
			'Blog Deadside Cheats z poradnikami undetected ESP, wallhack, radar i Aimbot dla Deadside na PC.',
		blogH1: 'Blog Deadside Cheats — Globalne poradniki',
		blogIntro:
			'Poradniki SEO undetected cheatów Deadside, ESP wallhack, radar hack, Aimbot i BattlEye w 22 językach.',
		readMore: 'Czytaj poradnik',
		published: 'Opublikowano',
		updated: 'Zaktualizowano',
		relatedPosts: 'Powiązane poradniki Deadside',
		allPosts: 'Wszystkie artykuły',
		home: 'Strona główna Deadside Cheats',
		language: 'Język',
	},
	ru: {
		blogTitle: 'Блог Deadside Cheats 2026 | Гайды на 22 языках',
		blogDescription:
			'Блог Deadside Cheats: undetected ESP, wallhack, radar и Aimbot для Deadside на Windows PC.',
		blogH1: 'Блог Deadside Cheats — Глобальные гайды',
		blogIntro:
			'SEO-гайды по undetected читам Deadside, ESP wallhack, radar hack, Aimbot и BattlEye на 22 языках.',
		readMore: 'Читать гайд',
		published: 'Опубликовано',
		updated: 'Обновлено',
		relatedPosts: 'Похожие гайды Deadside',
		allPosts: 'Все статьи',
		home: 'Главная Deadside Cheats',
		language: 'Язык',
	},
	tr: {
		blogTitle: 'Deadside Cheats Blog 2026 | 22 dilde rehberler',
		blogDescription:
			'Deadside Cheats blog: undetected ESP, wallhack, radar ve Aimbot rehberleri Deadside Windows PC.',
		blogH1: 'Deadside Cheats Blog — Küresel rehberler',
		blogIntro:
			'Undetected Deadside hileleri, ESP wallhack, radar hack, Aimbot ve BattlEye SEO rehberleri 22 dilde.',
		readMore: 'Rehberi oku',
		published: 'Yayınlandı',
		updated: 'Güncellendi',
		relatedPosts: 'İlgili Deadside rehberleri',
		allPosts: 'Tüm yazılar',
		home: 'Deadside Cheats ana sayfa',
		language: 'Dil',
	},
	ar: {
		blogTitle: 'مدونة Deadside Cheats 2026 | أدلة بـ 22 لغة',
		blogDescription:
			'مدونة Deadside Cheats: غش undetected وESP wallhack ورadar وAimbot لـ Deadside على Windows PC.',
		blogH1: 'مدونة Deadside Cheats — أدلة عالمية',
		blogIntro:
			'أدلة SEO لغش Deadside undetected وESP wallhack ورadar hack وAimbot وBattlEye بـ 22 لغة.',
		readMore: 'اقرأ الدليل',
		published: 'نُشر',
		updated: 'تم التحديث',
		relatedPosts: 'أدلة Deadside ذات صلة',
		allPosts: 'جميع المقالات',
		home: 'الرئيسية Deadside Cheats',
		language: 'اللغة',
	},
	ja: {
		blogTitle: 'Deadside Cheats ブログ 2026 | 22言語ガイド',
		blogDescription:
			'Deadside Cheatsブログ：undetected ESP、wallhack、radar、Aimbotガイド。Deadside Windows PC向け。',
		blogH1: 'Deadside Cheats ブログ — グローバルガイド',
		blogIntro:
			'undetected Deadsideチート、ESP wallhack、radar hack、Aimbot、BattlEyeのSEOガイドを22言語で提供。',
		readMore: 'ガイドを読む',
		published: '公開日',
		updated: '更新日',
		relatedPosts: '関連Deadsideガイド',
		allPosts: 'すべての記事',
		home: 'Deadside Cheats ホーム',
		language: '言語',
	},
	ko: {
		blogTitle: 'Deadside Cheats 블로그 2026 | 22개 언어 가이드',
		blogDescription:
			'Deadside Cheats 블로그: undetected ESP, wallhack, radar, Aimbot 가이드. Deadside Windows PC.',
		blogH1: 'Deadside Cheats 블로그 — 글로벌 가이드',
		blogIntro:
			'undetected Deadside 치트, ESP wallhack, radar hack, Aimbot, BattlEye SEO 가이드를 22개 언어로 제공.',
		readMore: '가이드 읽기',
		published: '게시일',
		updated: '업데이트',
		relatedPosts: '관련 Deadside 가이드',
		allPosts: '모든 게시물',
		home: 'Deadside Cheats 홈',
		language: '언어',
	},
	zh: {
		blogTitle: 'Deadside Cheats 博客 2026 | 22种语言指南',
		blogDescription:
			'Deadside Cheats博客：undetected ESP、wallhack、radar和Aimbot指南，适用于Deadside Windows PC。',
		blogH1: 'Deadside Cheats 博客 — 全球指南',
		blogIntro:
			'undetected Deadside作弊、ESP wallhack、radar hack、Aimbot和BattlEye的SEO指南，共22种语言。',
		readMore: '阅读指南',
		published: '发布',
		updated: '更新',
		relatedPosts: '相关Deadside指南',
		allPosts: '所有文章',
		home: 'Deadside Cheats 首页',
		language: '语言',
	},
	hi: {
		blogTitle: 'Deadside Cheats ब्लॉग 2026 | 22 भाषाओं में गाइड',
		blogDescription:
			'Deadside Cheats ब्लॉग: undetected ESP, wallhack, radar और Aimbot गाइड Deadside Windows PC के लिए।',
		blogH1: 'Deadside Cheats ब्लॉग — वैश्विक गाइड',
		blogIntro:
			'undetected deadside cheats, ESP wallhack, radar hack, Aimbot और BattlEye SEO गाइड 22 भाषाओं में।',
		readMore: 'गाइड पढ़ें',
		published: 'प्रकाशित',
		updated: 'अपडेट',
		relatedPosts: 'संबंधित Deadside गाइड',
		allPosts: 'सभी पोस्ट',
		home: 'Deadside Cheats होम',
		language: 'भाषा',
	},
	id: {
		blogTitle: 'Blog Deadside Cheats 2026 | Panduan 22 bahasa',
		blogDescription:
			'Blog Deadside Cheats: panduan undetected ESP, wallhack, radar dan Aimbot untuk Deadside di PC Windows.',
		blogH1: 'Blog Deadside Cheats — Panduan global',
		blogIntro:
			'Panduan SEO cheat Deadside undetected, ESP wallhack, radar hack, Aimbot dan BattlEye dalam 22 bahasa.',
		readMore: 'Baca panduan',
		published: 'Dipublikasikan',
		updated: 'Diperbarui',
		relatedPosts: 'Pandua Deadside terkait',
		allPosts: 'Semua artikel',
		home: 'Beranda Deadside Cheats',
		language: 'Bahasa',
	},
	th: {
		blogTitle: 'บล็อก Deadside Cheats 2026 | คู่มือ 22 ภาษา',
		blogDescription:
			'บล็อก Deadside Cheats: คู่มือ undetected ESP, wallhack, radar และ Aimbot สำหรับ Deadside บน PC',
		blogH1: 'บล็อก Deadside Cheats — คู่มือทั่วโลก',
		blogIntro:
			'คู่มือ SEO สำหรับ cheat Deadside undetected, ESP wallhack, radar hack, Aimbot และ BattlEye 22 ภาษา',
		readMore: 'อ่านคู่มือ',
		published: 'เผยแพร่',
		updated: 'อัปเดต',
		relatedPosts: 'คู่มือ Deadside ที่เกี่ยวข้อง',
		allPosts: 'บทความทั้งหมด',
		home: 'หน้าแรก Deadside Cheats',
		language: 'ภาษา',
	},
	vi: {
		blogTitle: 'Blog Deadside Cheats 2026 | Hướng dẫn 22 ngôn ngữ',
		blogDescription:
			'Blog Deadside Cheats: hướng dẫn undetected ESP, wallhack, radar và Aimbot cho Deadside trên PC.',
		blogH1: 'Blog Deadside Cheats — Hướng dẫn toàn cầu',
		blogIntro:
			'Hướng dẫn SEO cheat Deadside undetected, ESP wallhack, radar hack, Aimbot và BattlEye bằng 22 ngôn ngữ.',
		readMore: 'Đọc hướng dẫn',
		published: 'Xuất bản',
		updated: 'Cập nhật',
		relatedPosts: 'Hướng dẫn Deadside liên quan',
		allPosts: 'Tất cả bài viết',
		home: 'Trang chủ Deadside Cheats',
		language: 'Ngôn ngữ',
	},
	uk: {
		blogTitle: 'Блог Deadside Cheats 2026 | Гайди 22 мовами',
		blogDescription:
			'Блог Deadside Cheats: undetected ESP, wallhack, radar та Aimbot для Deadside на Windows PC.',
		blogH1: 'Блог Deadside Cheats — Глобальні гайди',
		blogIntro:
			'SEO-гайди з undetected читів Deadside, ESP wallhack, radar hack, Aimbot та BattlEye 22 мовами.',
		readMore: 'Читати гайд',
		published: 'Опубліковано',
		updated: 'Оновлено',
		relatedPosts: "Пов'язані гайди Deadside",
		allPosts: 'Усі статті',
		home: 'Головна Deadside Cheats',
		language: 'Мова',
	},
	cs: {
		blogTitle: 'Blog Deadside Cheats 2026 | Průvodce ve 22 jazycích',
		blogDescription:
			'Blog Deadside Cheats: undetected ESP, wallhack, radar a Aimbot pro Deadside na Windows PC.',
		blogH1: 'Blog Deadside Cheats — Globální průvodce',
		blogIntro:
			'SEO průvodce undetected deadside cheaty, ESP wallhack, radar hack, Aimbot a BattlEye ve 22 jazycích.',
		readMore: 'Číst průvodce',
		published: 'Publikováno',
		updated: 'Aktualizováno',
		relatedPosts: 'Související Deadside průvodce',
		allPosts: 'Všechny články',
		home: 'Domů Deadside Cheats',
		language: 'Jazyk',
	},
	ro: {
		blogTitle: 'Blog Deadside Cheats 2026 | Ghiduri în 22 de limbi',
		blogDescription:
			'Blog Deadside Cheats: ghiduri undetected ESP, wallhack, radar și Aimbot pentru Deadside pe PC.',
		blogH1: 'Blog Deadside Cheats — Ghiduri globale',
		blogIntro:
			'Ghiduri SEO cheat-uri Deadside undetected, ESP wallhack, radar hack, Aimbot și BattlEye în 22 de limbi.',
		readMore: 'Citește ghidul',
		published: 'Publicat',
		updated: 'Actualizat',
		relatedPosts: 'Ghiduri Deadside related',
		allPosts: 'Toate articolele',
		home: 'Acasă Deadside Cheats',
		language: 'Limbă',
	},
	sv: {
		blogTitle: 'Deadside Cheats Blogg 2026 | Guider på 22 språk',
		blogDescription:
			'Deadside Cheats blogg med undetected ESP, wallhack, radar och Aimbot guider för Deadside på PC.',
		blogH1: 'Deadside Cheats Blogg — Globala guider',
		blogIntro:
			'SEO-guider för undetected deadside cheats, ESP wallhack, radar hack, Aimbot och BattlEye på 22 språk.',
		readMore: 'Läs guide',
		published: 'Publicerad',
		updated: 'Uppdaterad',
		relatedPosts: 'Relaterade Deadside guider',
		allPosts: 'Alla inlägg',
		home: 'Deadside Cheats hem',
		language: 'Språk',
	},
};
