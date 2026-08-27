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

/** 22 locales for global Naraka Cheats blog SEO coverage. */
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
		blogTitle: 'Naraka Cheats Blog | Guides & Patch Tips',
		blogDescription:
			'Naraka guides — battle royale tips, ESP, aimbot notes, grapple routes, and NEAC update coverage. English blog at narakacheats.org/blog/.',
		blogH1: 'Naraka Cheats Intel',
		blogIntro:
			'Short Naraka guides for battle royale rounds and ranked matches. Pair these tips with Naraka Cheats product pages when you need ESP, soft aim, or radar.',
		readMore: 'Read guide',
		published: 'Published',
		updated: 'Updated',
		relatedPosts: 'Related guides',
		allPosts: 'All blog posts',
		home: 'Naraka Cheats home',
		language: 'Language',
	},
	es: {
		blogTitle: 'Blog Naraka Cheats 2026 | Guías en 22 idiomas',
		blogDescription:
			'Blog de Naraka Cheats con guías de trucos indetectables, ESP wallhack, radar y Aimbot para Naraka en PC Windows.',
		blogH1: 'Blog Naraka Cheats — Guías globales',
		blogIntro:
			'Guías SEO de trucos Naraka indetectables, ESP wallhack, radar hack, Aimbot y mantenimiento NEAC en 22 idiomas.',
		readMore: 'Leer guía',
		published: 'Publicado',
		updated: 'Actualizado',
		relatedPosts: 'Guías Naraka relacionadas',
		allPosts: 'Todos los artículos',
		home: 'Inicio Naraka Cheats',
		language: 'Idioma',
	},
	fr: {
		blogTitle: 'Blog Naraka Cheats 2026 | Guides en 22 langues',
		blogDescription:
			'Blog Naraka Cheats : triches indétectables, ESP wallhack, radar et Aimbot pour Naraka sur PC Windows.',
		blogH1: 'Blog Naraka Cheats — Guides mondiaux',
		blogIntro:
			'Guides SEO triches Naraka indétectables, ESP wallhack, radar hack, Aimbot et NEAC en 22 langues.',
		readMore: 'Lire le guide',
		published: 'Publié',
		updated: 'Mis à jour',
		relatedPosts: 'Guides Naraka associés',
		allPosts: 'Tous les articles',
		home: 'Accueil Naraka Cheats',
		language: 'Langue',
	},
	de: {
		blogTitle: 'Naraka Cheats Blog 2026 | Guides in 22 Sprachen',
		blogDescription:
			'Naraka Cheats Blog mit undetected ESP, Wallhack, Radar und Aimbot Guides für Naraka auf Windows PC.',
		blogH1: 'Naraka Cheats Blog — Globale Guides',
		blogIntro:
			'SEO-Guides für undetected Naraka Cheats, ESP Wallhack, Radar Hack, Aimbot und NEAC in 22 Sprachen.',
		readMore: 'Guide lesen',
		published: 'Veröffentlicht',
		updated: 'Aktualisiert',
		relatedPosts: 'Verwandte Naraka Guides',
		allPosts: 'Alle Beiträge',
		home: 'Naraka Cheats Start',
		language: 'Sprache',
	},
	pt: {
		blogTitle: 'Blog Naraka Cheats 2026 | Guias em 22 idiomas',
		blogDescription:
			'Blog Naraka Cheats com guias de cheats indetectáveis, ESP wallhack, radar e Aimbot para Naraka no PC.',
		blogH1: 'Blog Naraka Cheats — Guias globais',
		blogIntro:
			'Guias SEO de cheats Naraka indetectáveis, ESP wallhack, radar hack, Aimbot e NEAC em 22 idiomas.',
		readMore: 'Ler guia',
		published: 'Publicado',
		updated: 'Atualizado',
		relatedPosts: 'Guias Naraka relacionados',
		allPosts: 'Todos os posts',
		home: 'Início Naraka Cheats',
		language: 'Idioma',
	},
	it: {
		blogTitle: 'Blog Naraka Cheats 2026 | Guide in 22 lingue',
		blogDescription:
			'Blog Naraka Cheats con guide cheat indetectable, ESP wallhack, radar e Aimbot per Naraka su PC Windows.',
		blogH1: 'Blog Naraka Cheats — Guide globali',
		blogIntro:
			'Guide SEO cheat Naraka indetectable, ESP wallhack, radar hack, Aimbot e NEAC in 22 lingue.',
		readMore: 'Leggi guida',
		published: 'Pubblicato',
		updated: 'Aggiornato',
		relatedPosts: 'Guide Naraka correlate',
		allPosts: 'Tutti gli articoli',
		home: 'Home Naraka Cheats',
		language: 'Lingua',
	},
	nl: {
		blogTitle: 'Naraka Cheats Blog 2026 | Gidsen in 22 talen',
		blogDescription:
			'Naraka Cheats blog met undetected ESP, wallhack, radar en Aimbot gidsen voor Naraka op Windows PC.',
		blogH1: 'Naraka Cheats Blog — Wereldwijde gidsen',
		blogIntro:
			'SEO-gidsen voor undetected naraka cheats, ESP wallhack, radar hack, Aimbot en NEAC in 22 talen.',
		readMore: 'Lees gids',
		published: 'Gepubliceerd',
		updated: 'Bijgewerkt',
		relatedPosts: 'Gerelateerde Naraka gidsen',
		allPosts: 'Alle posts',
		home: 'Naraka Cheats home',
		language: 'Taal',
	},
	pl: {
		blogTitle: 'Blog Naraka Cheats 2026 | Poradniki w 22 językach',
		blogDescription:
			'Blog Naraka Cheats z poradnikami undetected ESP, wallhack, radar i Aimbot dla Naraka na PC.',
		blogH1: 'Blog Naraka Cheats — Globalne poradniki',
		blogIntro:
			'Poradniki SEO undetected cheatów Naraka, ESP wallhack, radar hack, Aimbot i NEAC w 22 językach.',
		readMore: 'Czytaj poradnik',
		published: 'Opublikowano',
		updated: 'Zaktualizowano',
		relatedPosts: 'Powiązane poradniki Naraka',
		allPosts: 'Wszystkie artykuły',
		home: 'Strona główna Naraka Cheats',
		language: 'Język',
	},
	ru: {
		blogTitle: 'Блог Naraka Cheats 2026 | Гайды на 22 языках',
		blogDescription:
			'Блог Naraka Cheats: undetected ESP, wallhack, radar и Aimbot для Naraka на Windows PC.',
		blogH1: 'Блог Naraka Cheats — Глобальные гайды',
		blogIntro:
			'SEO-гайды по undetected читам Naraka, ESP wallhack, radar hack, Aimbot и NEAC на 22 языках.',
		readMore: 'Читать гайд',
		published: 'Опубликовано',
		updated: 'Обновлено',
		relatedPosts: 'Похожие гайды Naraka',
		allPosts: 'Все статьи',
		home: 'Главная Naraka Cheats',
		language: 'Язык',
	},
	tr: {
		blogTitle: 'Naraka Cheats Blog 2026 | 22 dilde rehberler',
		blogDescription:
			'Naraka Cheats blog: undetected ESP, wallhack, radar ve Aimbot rehberleri Naraka Windows PC.',
		blogH1: 'Naraka Cheats Blog — Küresel rehberler',
		blogIntro:
			'Undetected Naraka hileleri, ESP wallhack, radar hack, Aimbot ve NEAC SEO rehberleri 22 dilde.',
		readMore: 'Rehberi oku',
		published: 'Yayınlandı',
		updated: 'Güncellendi',
		relatedPosts: 'İlgili Naraka rehberleri',
		allPosts: 'Tüm yazılar',
		home: 'Naraka Cheats ana sayfa',
		language: 'Dil',
	},
	ar: {
		blogTitle: 'مدونة Naraka Cheats 2026 | أدلة بـ 22 لغة',
		blogDescription:
			'مدونة Naraka Cheats: غش undetected وESP wallhack ورadar وAimbot لـ Naraka على Windows PC.',
		blogH1: 'مدونة Naraka Cheats — أدلة عالمية',
		blogIntro:
			'أدلة SEO لغش Naraka undetected وESP wallhack ورadar hack وAimbot وNEAC بـ 22 لغة.',
		readMore: 'اقرأ الدليل',
		published: 'نُشر',
		updated: 'تم التحديث',
		relatedPosts: 'أدلة Naraka ذات صلة',
		allPosts: 'جميع المقالات',
		home: 'الرئيسية Naraka Cheats',
		language: 'اللغة',
	},
	ja: {
		blogTitle: 'Naraka Cheats ブログ 2026 | 22言語ガイド',
		blogDescription:
			'Naraka Cheatsブログ：undetected ESP、wallhack、radar、Aimbotガイド。Naraka Windows PC向け。',
		blogH1: 'Naraka Cheats ブログ — グローバルガイド',
		blogIntro:
			'undetected Narakaチート、ESP wallhack、radar hack、Aimbot、NEACのSEOガイドを22言語で提供。',
		readMore: 'ガイドを読む',
		published: '公開日',
		updated: '更新日',
		relatedPosts: '関連Narakaガイド',
		allPosts: 'すべての記事',
		home: 'Naraka Cheats ホーム',
		language: '言語',
	},
	ko: {
		blogTitle: 'Naraka Cheats 블로그 2026 | 22개 언어 가이드',
		blogDescription:
			'Naraka Cheats 블로그: undetected ESP, wallhack, radar, Aimbot 가이드. Naraka Windows PC.',
		blogH1: 'Naraka Cheats 블로그 — 글로벌 가이드',
		blogIntro:
			'undetected Naraka 치트, ESP wallhack, radar hack, Aimbot, NEAC SEO 가이드를 22개 언어로 제공.',
		readMore: '가이드 읽기',
		published: '게시일',
		updated: '업데이트',
		relatedPosts: '관련 Naraka 가이드',
		allPosts: '모든 게시물',
		home: 'Naraka Cheats 홈',
		language: '언어',
	},
	zh: {
		blogTitle: 'Naraka Cheats 博客 2026 | 22种语言指南',
		blogDescription:
			'Naraka Cheats博客：undetected ESP、wallhack、radar和Aimbot指南，适用于Naraka Windows PC。',
		blogH1: 'Naraka Cheats 博客 — 全球指南',
		blogIntro:
			'undetected Naraka作弊、ESP wallhack、radar hack、Aimbot和NEAC的SEO指南，共22种语言。',
		readMore: '阅读指南',
		published: '发布',
		updated: '更新',
		relatedPosts: '相关Naraka指南',
		allPosts: '所有文章',
		home: 'Naraka Cheats 首页',
		language: '语言',
	},
	hi: {
		blogTitle: 'Naraka Cheats ब्लॉग 2026 | 22 भाषाओं में गाइड',
		blogDescription:
			'Naraka Cheats ब्लॉग: undetected ESP, wallhack, radar और Aimbot गाइड Naraka Windows PC के लिए।',
		blogH1: 'Naraka Cheats ब्लॉग — वैश्विक गाइड',
		blogIntro:
			'undetected naraka cheats, ESP wallhack, radar hack, Aimbot और NEAC SEO गाइड 22 भाषाओं में।',
		readMore: 'गाइड पढ़ें',
		published: 'प्रकाशित',
		updated: 'अपडेट',
		relatedPosts: 'संबंधित Naraka गाइड',
		allPosts: 'सभी पोस्ट',
		home: 'Naraka Cheats होम',
		language: 'भाषा',
	},
	id: {
		blogTitle: 'Blog Naraka Cheats 2026 | Panduan 22 bahasa',
		blogDescription:
			'Blog Naraka Cheats: panduan undetected ESP, wallhack, radar dan Aimbot untuk Naraka di PC Windows.',
		blogH1: 'Blog Naraka Cheats — Panduan global',
		blogIntro:
			'Panduan SEO cheat Naraka undetected, ESP wallhack, radar hack, Aimbot dan NEAC dalam 22 bahasa.',
		readMore: 'Baca panduan',
		published: 'Dipublikasikan',
		updated: 'Diperbarui',
		relatedPosts: 'Pandua Naraka terkait',
		allPosts: 'Semua artikel',
		home: 'Beranda Naraka Cheats',
		language: 'Bahasa',
	},
	th: {
		blogTitle: 'บล็อก Naraka Cheats 2026 | คู่มือ 22 ภาษา',
		blogDescription:
			'บล็อก Naraka Cheats: คู่มือ undetected ESP, wallhack, radar และ Aimbot สำหรับ Naraka บน PC',
		blogH1: 'บล็อก Naraka Cheats — คู่มือทั่วโลก',
		blogIntro:
			'คู่มือ SEO สำหรับ cheat Naraka undetected, ESP wallhack, radar hack, Aimbot และ NEAC 22 ภาษา',
		readMore: 'อ่านคู่มือ',
		published: 'เผยแพร่',
		updated: 'อัปเดต',
		relatedPosts: 'คู่มือ Naraka ที่เกี่ยวข้อง',
		allPosts: 'บทความทั้งหมด',
		home: 'หน้าแรก Naraka Cheats',
		language: 'ภาษา',
	},
	vi: {
		blogTitle: 'Blog Naraka Cheats 2026 | Hướng dẫn 22 ngôn ngữ',
		blogDescription:
			'Blog Naraka Cheats: hướng dẫn undetected ESP, wallhack, radar và Aimbot cho Naraka trên PC.',
		blogH1: 'Blog Naraka Cheats — Hướng dẫn toàn cầu',
		blogIntro:
			'Hướng dẫn SEO cheat Naraka undetected, ESP wallhack, radar hack, Aimbot và NEAC bằng 22 ngôn ngữ.',
		readMore: 'Đọc hướng dẫn',
		published: 'Xuất bản',
		updated: 'Cập nhật',
		relatedPosts: 'Hướng dẫn Naraka liên quan',
		allPosts: 'Tất cả bài viết',
		home: 'Trang chủ Naraka Cheats',
		language: 'Ngôn ngữ',
	},
	uk: {
		blogTitle: 'Блог Naraka Cheats 2026 | Гайди 22 мовами',
		blogDescription:
			'Блог Naraka Cheats: undetected ESP, wallhack, radar та Aimbot для Naraka на Windows PC.',
		blogH1: 'Блог Naraka Cheats — Глобальні гайди',
		blogIntro:
			'SEO-гайди з undetected читів Naraka, ESP wallhack, radar hack, Aimbot та NEAC 22 мовами.',
		readMore: 'Читати гайд',
		published: 'Опубліковано',
		updated: 'Оновлено',
		relatedPosts: "Пов'язані гайди Naraka",
		allPosts: 'Усі статті',
		home: 'Головна Naraka Cheats',
		language: 'Мова',
	},
	cs: {
		blogTitle: 'Blog Naraka Cheats 2026 | Průvodce ve 22 jazycích',
		blogDescription:
			'Blog Naraka Cheats: undetected ESP, wallhack, radar a Aimbot pro Naraka na Windows PC.',
		blogH1: 'Blog Naraka Cheats — Globální průvodce',
		blogIntro:
			'SEO průvodce undetected naraka cheaty, ESP wallhack, radar hack, Aimbot a NEAC ve 22 jazycích.',
		readMore: 'Číst průvodce',
		published: 'Publikováno',
		updated: 'Aktualizováno',
		relatedPosts: 'Související Naraka průvodce',
		allPosts: 'Všechny články',
		home: 'Domů Naraka Cheats',
		language: 'Jazyk',
	},
	ro: {
		blogTitle: 'Blog Naraka Cheats 2026 | Ghiduri în 22 de limbi',
		blogDescription:
			'Blog Naraka Cheats: ghiduri undetected ESP, wallhack, radar și Aimbot pentru Naraka pe PC.',
		blogH1: 'Blog Naraka Cheats — Ghiduri globale',
		blogIntro:
			'Ghiduri SEO cheat-uri Naraka undetected, ESP wallhack, radar hack, Aimbot și NEAC în 22 de limbi.',
		readMore: 'Citește ghidul',
		published: 'Publicat',
		updated: 'Actualizat',
		relatedPosts: 'Ghiduri Naraka related',
		allPosts: 'Toate articolele',
		home: 'Acasă Naraka Cheats',
		language: 'Limbă',
	},
	sv: {
		blogTitle: 'Naraka Cheats Blogg 2026 | Guider på 22 språk',
		blogDescription:
			'Naraka Cheats blogg med undetected ESP, wallhack, radar och Aimbot guider för Naraka på PC.',
		blogH1: 'Naraka Cheats Blogg — Globala guider',
		blogIntro:
			'SEO-guider för undetected naraka cheats, ESP wallhack, radar hack, Aimbot och NEAC på 22 språk.',
		readMore: 'Läs guide',
		published: 'Publicerad',
		updated: 'Uppdaterad',
		relatedPosts: 'Relaterade Naraka guider',
		allPosts: 'Alla inlägg',
		home: 'Naraka Cheats hem',
		language: 'Språk',
	},
};
