/**
 * Native UI copy overrides per locale — applied after locale-overlays merge.
 * Fixes English fallbacks in nav, hero, common chrome, home about, and reviews.
 */

const NAV_ARIA = {
	en: { primaryAria: 'Main navigation', mobileAria: 'Mobile navigation', openMenu: 'Open menu', closeMenu: 'Close menu', features: 'Features', setup: 'Setup', faq: 'FAQ' },
	es: { primaryAria: 'Navegación principal', mobileAria: 'Navegación móvil', openMenu: 'Abrir menú', closeMenu: 'Cerrar menú', features: 'Funciones', setup: 'Instalación', faq: 'Preguntas frecuentes' },
	fr: { primaryAria: 'Navigation principale', mobileAria: 'Navigation mobile', openMenu: 'Ouvrir le menu', closeMenu: 'Fermer le menu', features: 'Fonctions', setup: 'Installation', faq: 'FAQ' },
	de: { primaryAria: 'Hauptnavigation', mobileAria: 'Mobile Navigation', openMenu: 'Menü öffnen', closeMenu: 'Menü schließen', features: 'Features', setup: 'Einrichtung', faq: 'FAQ' },
	pt: { primaryAria: 'Navegação principal', mobileAria: 'Navegação móvel', openMenu: 'Abrir menu', closeMenu: 'Fechar menu', features: 'Recursos', setup: 'Instalação', faq: 'Perguntas frequentes' },
	ru: { primaryAria: 'Основная навигация', mobileAria: 'Мобильная навигация', openMenu: 'Открыть меню', closeMenu: 'Закрыть меню', features: 'Функции', setup: 'Установка', faq: 'FAQ' },
	it: { primaryAria: 'Navigazione principale', mobileAria: 'Navigazione mobile', openMenu: 'Apri menu', closeMenu: 'Chiudi menu', features: 'Funzioni', setup: 'Installazione', faq: 'FAQ' },
	nl: { primaryAria: 'Hoofdnavigatie', mobileAria: 'Mobiele navigatie', openMenu: 'Menu openen', closeMenu: 'Menu sluiten', features: 'Functies', setup: 'Installatie', faq: 'Veelgestelde vragen' },
	pl: { primaryAria: 'Nawigacja główna', mobileAria: 'Nawigacja mobilna', openMenu: 'Otwórz menu', closeMenu: 'Zamknij menu', features: 'Funkcje', setup: 'Instalacja', faq: 'FAQ' },
	tr: { primaryAria: 'Ana menü', mobileAria: 'Mobil menü', openMenu: 'Menüyü aç', closeMenu: 'Menüyü kapat', features: 'Özellikler', setup: 'Kurulum', faq: 'SSS' },
	ar: { primaryAria: 'التنقل الرئيسي', mobileAria: 'التنقل على الجوال', openMenu: 'فتح القائمة', closeMenu: 'إغلاق القائمة', features: 'الميزات', setup: 'التثبيت', faq: 'الأسئلة الشائعة' },
	ja: { primaryAria: 'メインナビゲーション', mobileAria: 'モバイルナビ', openMenu: 'メニューを開く', closeMenu: 'メニューを閉じる', features: '機能', setup: 'セットアップ', faq: 'よくある質問' },
	ko: { primaryAria: '주 메뉴', mobileAria: '모바일 메뉴', openMenu: '메뉴 열기', closeMenu: '메뉴 닫기', features: '기능', setup: '설치', faq: '자주 묻는 질문' },
	zh: { primaryAria: '主要導覽', mobileAria: '行動版導覽', openMenu: '開啟選單', closeMenu: '關閉選單', features: '功能', setup: '安裝設定', faq: '常見問題' },
	hi: { primaryAria: 'मुख्य नेविगेशन', mobileAria: 'मोबाइल नेविगेशन', openMenu: 'मेनू खोलें', closeMenu: 'मेनू बंद करें', features: 'फ़ीचर्स', setup: 'सेटअप', faq: 'अक्सर पूछे जाने वाले प्रश्न' },
	id: { primaryAria: 'Navigasi utama', mobileAria: 'Navigasi seluler', openMenu: 'Buka menu', closeMenu: 'Tutup menu', features: 'Fitur', setup: 'Instalasi', faq: 'FAQ' },
	th: { primaryAria: 'เมนูหลัก', mobileAria: 'เมนูมือถือ', openMenu: 'เปิดเมนู', closeMenu: 'ปิดเมนู', features: 'ฟีเจอร์', setup: 'ติดตั้ง', faq: 'คำถามที่พบบ่อย' },
	vi: { primaryAria: 'Điều hướng chính', mobileAria: 'Điều hướng di động', openMenu: 'Mở menu', closeMenu: 'Đóng menu', features: 'Tính năng', setup: 'Cài đặt', faq: 'Câu hỏi thường gặp' },
	uk: { primaryAria: 'Головна навігація', mobileAria: 'Мобільна навігація', openMenu: 'Відкрити меню', closeMenu: 'Закрити меню', features: 'Функції', setup: 'Встановлення', faq: 'FAQ' },
	cs: { primaryAria: 'Hlavní navigace', mobileAria: 'Mobilní navigace', openMenu: 'Otevřít menu', closeMenu: 'Zavřít menu', features: 'Funkce', setup: 'Instalace', faq: 'FAQ' },
	ro: { primaryAria: 'Navigare principală', mobileAria: 'Navigare mobilă', openMenu: 'Deschide meniul', closeMenu: 'Închide meniul', features: 'Funcții', setup: 'Instalare', faq: 'Întrebări frecvente' },
	sv: { primaryAria: 'Huvudnavigering', mobileAria: 'Mobil navigering', openMenu: 'Öppna meny', closeMenu: 'Stäng meny', features: 'Funktioner', setup: 'Installation', faq: 'Vanliga frågor' },
};

const HERO = {
	en: {
		title: 'Deadside Cheats',
		subtitle: 'ESP, 2D radar, and soft aim for Deadside on Windows PC — BattlEye maintenance included.',
		subtitleShort: 'ESP, radar & soft aim for PC',
		buyNow: 'Buy Deadside Cheats',
		seeFeatures: 'See features',
		imageAlt: '{{brand}} — ESP and aimbot overlay in Deadside',
		chipAim: 'Soft aim',
	},
	de: {
		title: 'Deadside Cheats',
		accent: '2026 — Undetected ESP, Aimbot & Wallhack',
		accentShort: 'Undetected Deadside Cheats 2026',
		subtitle: 'ESP, 2D-Radar und Soft Aim für Deadside auf Windows PC — inklusive BattlEye-Wartung.',
		subtitleShort: 'ESP, Radar & Soft Aim für PC',
		buyNow: 'Deadside Cheats kaufen',
		seeFeatures: 'Features ansehen',
		imageAlt: '{{brand}} — ESP- und Aimbot-Overlay in Deadside',
		chipAim: 'Soft Aim',
		chipUpdates: 'Patch-Updates',
	},
	zh: {
		title: 'Deadside Cheats',
		accent: '2026 — Undetected ESP、Aimbot 與 Wallhack',
		accentShort: 'Undetected Deadside Cheats 2026',
		subtitle: '適用於 Deadside Windows 版的 ESP、2D 雷達與 Soft Aim — 含 BattlEye 維護更新。',
		subtitleShort: 'PC 版 ESP、雷達與 Soft Aim',
		buyNow: '立即購買 Deadside Cheats',
		seeFeatures: '查看功能',
		imageAlt: '{{brand}} — Deadside 的 ESP 與 Aimbot 覆蓋層',
		chipAim: 'Soft Aim',
		chipUpdates: '版本更新',
	},
	es: {
		title: 'Deadside Cheats',
		subtitle: 'ESP, radar 2D y soft aim para Deadside en PC con Windows — mantenimiento BattlEye incluido.',
		buyNow: 'Comprar Deadside Cheats',
		seeFeatures: 'Ver funciones',
		imageAlt: '{{brand}} — overlay de ESP y aimbot en Deadside',
	},
	fr: {
		title: 'Deadside Cheats',
		subtitle: 'ESP, radar 2D et soft aim pour Deadside sur PC Windows — maintenance BattlEye incluse.',
		buyNow: 'Acheter Deadside Cheats',
		seeFeatures: 'Voir les fonctions',
		imageAlt: '{{brand}} — overlay ESP et aimbot dans Deadside',
	},
	pt: {
		title: 'Deadside Cheats',
		subtitle: 'ESP, radar 2D e soft aim para Deadside no PC Windows — manutenção BattlEye incluída.',
		buyNow: 'Comprar Deadside Cheats',
		seeFeatures: 'Ver recursos',
		imageAlt: '{{brand}} — overlay de ESP e aimbot no Deadside',
	},
	ru: {
		title: 'Deadside Cheats',
		subtitle: 'ESP, 2D radar и soft aim для Deadside на Windows PC — обслуживание BattlEye включено.',
		buyNow: 'Купить Deadside Cheats',
		seeFeatures: 'Смотреть функции',
		imageAlt: '{{brand}} — ESP и aimbot оверлей в Deadside',
	},
};

const COMMON_EXTRA = {
	es: {
		buyNow: 'Comprar Deadside Cheats', readGuide: 'Leer guía', language: 'Idioma',
		officialLanguageNote: 'El inglés es el idioma oficial; los demás idiomas están traducidos.',
		relatedPages: 'Páginas relacionadas', selectLanguage: 'Seleccionar idioma',
		englishOfficial: 'Inglés — idioma oficial', englishIsOfficial: 'El inglés es el idioma oficial',
		allQuestions: 'Todas las preguntas', openAnyQuestion: 'Abre cualquier pregunta para ver la respuesta completa.',
		packageStatus: 'Estado del paquete', productDetails: 'Detalles del producto', browse: 'Explorar',
		featured: 'Destacado', share: 'Compartir', shareX: 'Compartir en X', shareReddit: 'Compartir en Reddit',
		shareFacebook: 'Compartir en Facebook', guides: 'Guías', home: 'Inicio', support: 'Soporte',
		privacy: 'Privacidad', terms: 'Términos', featureList: 'Lista de funciones', pricingPlans: 'Planes y precios',
		buyerReviewsNav: 'Opiniones de compradores', languageSuggestion: 'Sugerencia de idioma',
	},
	fr: {
		buyNow: 'Acheter Deadside Cheats', readGuide: 'Lire le guide', language: 'Langue',
		officialLanguageNote: 'L\'anglais est la langue officielle ; les autres langues sont traduites.',
		relatedPages: 'Pages associées', selectLanguage: 'Choisir la langue',
		englishOfficial: 'Anglais — langue officielle', englishIsOfficial: 'L\'anglais est la langue officielle',
		allQuestions: 'Toutes les questions', openAnyQuestion: 'Ouvrez une question pour la réponse complète.',
		packageStatus: 'État du pack', productDetails: 'Détails du produit', browse: 'Parcourir',
		featured: 'À la une', share: 'Partager', shareX: 'Partager sur X', shareReddit: 'Partager sur Reddit',
		shareFacebook: 'Partager sur Facebook', guides: 'Guides', home: 'Accueil', support: 'Support',
		privacy: 'Confidentialité', terms: 'Conditions', featureList: 'Liste des fonctions', pricingPlans: 'Formules',
		buyerReviewsNav: 'Avis acheteurs', languageSuggestion: 'Suggestion de langue',
	},
	pt: {
		buyNow: 'Comprar Deadside Cheats', readGuide: 'Ler guia', language: 'Idioma',
		officialLanguageNote: 'O inglês é o idioma oficial; os outros idiomas são traduzidos.',
		relatedPages: 'Páginas relacionadas', selectLanguage: 'Selecionar idioma',
		englishOfficial: 'Inglês — idioma oficial', englishIsOfficial: 'O inglês é o idioma oficial',
		allQuestions: 'Todas as perguntas', openAnyQuestion: 'Abra qualquer pergunta para ver a resposta completa.',
		packageStatus: 'Status do pacote', productDetails: 'Detalhes do produto', browse: 'Explorar',
		featured: 'Destaque', share: 'Compartilhar', shareX: 'Compartilhar no X', shareReddit: 'Compartilhar no Reddit',
		shareFacebook: 'Compartilhar no Facebook', guides: 'Guias', home: 'Início', support: 'Suporte',
		privacy: 'Privacidade', terms: 'Termos', featureList: 'Lista de recursos', pricingPlans: 'Planos',
		buyerReviewsNav: 'Avaliações de compradores', languageSuggestion: 'Sugestão de idioma',
	},
	ru: {
		buyNow: 'Купить Deadside Cheats', readGuide: 'Читать гайд', language: 'Язык',
		officialLanguageNote: 'Английский — официальный язык; остальные языки переведены.',
		relatedPages: 'Связанные страницы', selectLanguage: 'Выбрать язык',
		englishOfficial: 'Английский — официальный язык', englishIsOfficial: 'Английский — официальный язык',
		allQuestions: 'Все вопросы', openAnyQuestion: 'Откройте вопрос, чтобы увидеть полный ответ.',
		packageStatus: 'Статус пакета', productDetails: 'О продукте', browse: 'Обзор',
		featured: 'Избранное', share: 'Поделиться', shareX: 'Поделиться в X', shareReddit: 'Поделиться в Reddit',
		shareFacebook: 'Поделиться в Facebook', guides: 'Гайды', home: 'Главная', support: 'Поддержка',
		privacy: 'Конфиденциальность', terms: 'Условия', featureList: 'Список функций', pricingPlans: 'Тарифы',
		buyerReviewsNav: 'Отзывы покупателей', languageSuggestion: 'Предложение языка',
	},
};

// merge COMMON_EXTRA into COMMON in applyNativeUiPatch

const COMMON = {
	en: {
		buyNow: 'Buy Deadside Cheats', readGuide: 'Read guide', language: 'Language',
		officialLanguageNote: 'English is the official language; other locales are translated.',
		relatedPages: 'Related pages', selectLanguage: 'Select language',
		englishOfficial: 'English — official language', englishIsOfficial: 'English is the official language',
		allQuestions: 'All questions', openAnyQuestion: 'Open any question for the full answer.',
		packageStatus: 'Package status', productDetails: 'Product details', browse: 'Browse',
		featured: 'Featured', share: 'Share', shareX: 'Share on X', shareReddit: 'Share on Reddit',
		shareFacebook: 'Share on Facebook', guides: 'Guides', home: 'Home', support: 'Support',
		privacy: 'Privacy', terms: 'Terms', featureList: 'Feature list', pricingPlans: 'Pricing plans',
		buyerReviewsNav: 'Buyer reviews', languageSuggestion: 'Language suggestion',
	},
	de: {
		buyNow: 'Deadside Cheats kaufen', readGuide: 'Guide lesen', language: 'Sprache',
		officialLanguageNote: 'Englisch ist die offizielle Sprache; andere Sprachen sind übersetzt.',
		relatedPages: 'Verwandte Seiten', selectLanguage: 'Sprache wählen',
		englishOfficial: 'Englisch — offizielle Sprache', englishIsOfficial: 'Englisch ist die offizielle Sprache',
		allQuestions: 'Alle Fragen', openAnyQuestion: 'Frage öffnen für die vollständige Antwort.',
		packageStatus: 'Paketstatus', productDetails: 'Produktdetails', browse: 'Stöbern',
		featured: 'Empfohlen', share: 'Teilen', shareX: 'Auf X teilen', shareReddit: 'Auf Reddit teilen',
		shareFacebook: 'Auf Facebook teilen', guides: 'Guides', home: 'Start', support: 'Support',
		privacy: 'Datenschutz', terms: 'AGB', featureList: 'Feature-Liste', pricingPlans: 'Preispläne',
		buyerReviewsNav: 'Käuferbewertungen', languageSuggestion: 'Sprachvorschlag',
	},
	zh: {
		buyNow: '立即購買 Deadside Cheats', readGuide: '閱讀指南', language: '語言',
		officialLanguageNote: '英文為官方語言；其他語言為在地化翻譯版本。',
		relatedPages: '相關頁面', selectLanguage: '選擇語言',
		englishOfficial: '英文 — 官方語言', englishIsOfficial: '英文為官方語言',
		allQuestions: '所有問題', openAnyQuestion: '開啟任一問題以查看完整解答。',
		packageStatus: '方案狀態', productDetails: '產品詳情', browse: '瀏覽',
		featured: '精選', share: '分享', shareX: '分享到 X', shareReddit: '分享到 Reddit',
		shareFacebook: '分享到 Facebook', guides: '指南', home: '首頁', support: '支援',
		privacy: '隱私權', terms: '條款', featureList: '功能列表', pricingPlans: '價格方案',
		buyerReviewsNav: '買家評價', languageSuggestion: '語言建議',
	},
};

const HOME_ABOUT = {
	de: {
		aboutTitle: 'Undetected Cheats für Deadside',
		aboutP1Before: 'Deadside Cheats ist ein undetected Paket für Deadside auf Windows PC. Eine Lizenz umfasst ESP Wallhack, Soft Aim und 2D-Radar mit BattlEye-Rebuilds nach Patches. Pläne vergleichen auf',
		aboutStore: 'Store',
		aboutP1Mid: ', dann',
		aboutStatus: 'Status',
		aboutP1After: 'prüfen, bevor du einsteigst.',
		playDemoVideo: 'Deadside Cheats Demo abspielen',
		pauseDemoVideo: 'Demo pausieren',
		demoVideoCaption: 'Deadside Cheats — ESP, Aimbot & Radar im Match',
		volumeLabel: 'Lautstärke',
		muteVideo: 'Ton stummschalten',
		unmuteVideo: 'Ton einschalten',
		seekLabel: 'Videofortschritt',
	},
	zh: {
		aboutTitle: '適用於 Deadside 的 undetected 外掛',
		aboutP1Before: 'Deadside Cheats 是適用於 Windows PC 版 Deadside 的 undetected 外掛方案。單一授權包含 ESP wallhack、Soft Aim 與 2D 雷達，並在遊戲更新後提供 BattlEye 重建。請先在',
		aboutStore: '商店',
		aboutP1Mid: '比較方案，再查看',
		aboutStatus: '狀態',
		aboutP1After: '後再進場。',
		playDemoVideo: '播放 Deadside Cheats 示範影片',
		pauseDemoVideo: '暫停示範影片',
		demoVideoCaption: 'Deadside Cheats — 對戰中的 ESP、Aimbot 與雷達',
		volumeLabel: '音量',
		muteVideo: '靜音',
		unmuteVideo: '取消靜音',
		seekLabel: '影片進度',
	},
	es: {
		aboutTitle: 'Trucos indetectables para Deadside',
		aboutP1Before: 'Deadside Cheats es un paquete indetectable para Deadside en PC con Windows. Una licencia incluye ESP wallhack, soft aim y radar 2D, con rebuilds de BattlEye tras cada parche. Compara planes en',
		aboutStore: 'Tienda',
		aboutP1Mid: ' y revisa',
		aboutStatus: 'Estado',
		aboutP1After: ' antes de entrar.',
		aboutPricingCta: 'Comparar precios',
		playDemoVideo: 'Reproducir vídeo demo de Deadside Cheats',
		pauseDemoVideo: 'Pausar vídeo demo',
		demoVideoCaption: 'Deadside Cheats — ESP, aimbot y radar en partida',
		volumeLabel: 'Volumen',
		muteVideo: 'Silenciar',
		unmuteVideo: 'Activar sonido',
		seekLabel: 'Progreso del vídeo',
	},
	fr: {
		aboutTitle: 'Triches indétectables pour Deadside',
		aboutP1Before: 'Deadside Cheats est un pack indétectable pour Deadside sur PC Windows. Une licence inclut ESP wallhack, soft aim et radar 2D, avec rebuilds BattlEye après chaque patch. Comparez les offres sur',
		aboutStore: 'Boutique',
		aboutP1Mid: ' puis consultez',
		aboutStatus: 'Statut',
		aboutP1After: ' avant de jouer.',
		playDemoVideo: 'Lire la démo Deadside Cheats',
		pauseDemoVideo: 'Mettre la démo en pause',
		demoVideoCaption: 'Deadside Cheats — ESP, aimbot et radar en match',
		volumeLabel: 'Volume',
		muteVideo: 'Couper le son',
		unmuteVideo: 'Réactiver le son',
		seekLabel: 'Progression vidéo',
	},
	pt: {
		aboutTitle: 'Cheats indetectáveis para Deadside',
		aboutP1Before: 'Deadside Cheats é um pacote indetectável para Deadside no PC Windows. Uma licença inclui ESP wallhack, soft aim e radar 2D, com rebuilds do BattlEye após patches. Compare planos na',
		aboutStore: 'Loja',
		aboutP1Mid: ' e confira o',
		aboutStatus: 'Status',
		aboutP1After: ' antes de entrar.',
		playDemoVideo: 'Reproduzir demo do Deadside Cheats',
		pauseDemoVideo: 'Pausar demo',
		demoVideoCaption: 'Deadside Cheats — ESP, aimbot e radar em partida',
		volumeLabel: 'Volume',
		muteVideo: 'Silenciar',
		unmuteVideo: 'Ativar som',
		seekLabel: 'Progresso do vídeo',
	},
	ru: {
		aboutTitle: 'Undetected читы для Deadside',
		aboutP1Before: 'Deadside Cheats — undetected пакет для Deadside на Windows PC. Одна лицензия включает ESP wallhack, soft aim и 2D radar с rebuilds после патчей BattlEye. Сравните планы в',
		aboutStore: 'Магазине',
		aboutP1Mid: ', затем проверьте',
		aboutStatus: 'Статус',
		aboutP1After: ' перед игрой.',
		playDemoVideo: 'Смотреть демо Deadside Cheats',
		pauseDemoVideo: 'Пауза демо',
		demoVideoCaption: 'Deadside Cheats — ESP, aimbot и radar в матче',
		volumeLabel: 'Громкость',
		muteVideo: 'Без звука',
		unmuteVideo: 'Со звуком',
		seekLabel: 'Прогресс видео',
	},
};

const REVIEWS = {
	de: {
		homeTitle: 'Deadside Cheats Bewertungen',
		buyerReviews: '{{count}} Käuferbewertungen',
		averageAria: '{{rating}} Durchschnitt aus {{count}} Bewertungen',
		readAll: 'Alle Bewertungen lesen →',
		outOfFiveAria: '{{rating}} von 5',
	},
	zh: {
		homeTitle: 'Deadside Cheats 玩家評價',
		buyerReviews: '{{count}} 則買家評價',
		averageAria: '{{count}} 則評價的平均 {{rating}} 分',
		readAll: '查看所有評價 →',
		outOfFiveAria: '{{rating}}/5',
	},
	es: {
		homeTitle: 'Reseñas de Deadside Cheats',
		buyerReviews: '{{count}} reseñas de compradores',
		averageAria: '{{rating}} de media en {{count}} reseñas',
		readAll: 'Ver todas las reseñas →',
		outOfFiveAria: '{{rating}} de 5',
	},
	fr: {
		homeTitle: 'Avis sur Deadside Cheats',
		buyerReviews: '{{count}} avis acheteurs',
		averageAria: '{{rating}} en moyenne sur {{count}} avis',
		readAll: 'Lire tous les avis →',
		outOfFiveAria: '{{rating}} sur 5',
	},
	pt: {
		homeTitle: 'Avaliações do Deadside Cheats',
		buyerReviews: '{{count}} avaliações de compradores',
		averageAria: '{{rating}} em média de {{count}} avaliações',
		readAll: 'Ver todas as avaliações →',
		outOfFiveAria: '{{rating}} de 5',
	},
	ru: {
		homeTitle: 'Отзывы о Deadside Cheats',
		buyerReviews: '{{count}} отзывов покупателей',
		averageAria: 'Средняя оценка {{rating}} из {{count}} отзывов',
		readAll: 'Читать все отзывы →',
		outOfFiveAria: '{{rating}} из 5',
	},
};

/** Home about + demo strings for locales without a full HOME_ABOUT block. */
const HOME_P1_FALLBACK = {
	it: {
		aboutP1Before: 'Deadside Cheats è un pacchetto indetectable per Deadside su PC Windows. Una licenza include ESP wallhack, soft aim e radar 2D, con rebuild BattlEye dopo ogni patch. Confronta i piani su',
		aboutP1Mid: ', poi controlla ',
		aboutP1After: ' prima di giocare.',
	},
	nl: {
		aboutP1Before: 'Deadside Cheats is een undetected pakket voor Deadside op Windows PC. Eén licentie bevat ESP wallhack, soft aim en 2D-radar met BattlEye-rebuilds na patches. Vergelijk plannen op',
		aboutP1Mid: ', controleer dan ',
		aboutP1After: ' voordat je speelt.',
	},
	pl: {
		aboutP1Before: 'Deadside Cheats to undetected pakiet dla Deadside na Windows PC. Jedna licencja obejmuje ESP wallhack, soft aim i radar 2D z rebuildami BattlEye po patchach. Porównaj plany w',
		aboutP1Mid: ', a następnie sprawdź ',
		aboutP1After: ' przed grą.',
	},
	tr: {
		aboutP1Before: 'Deadside Cheats, Windows PC için Deadside\'a yönelik undetected bir pakettir. Tek lisans ESP wallhack, soft aim ve 2D radar içerir; patch sonrası BattlEye rebuild dahildir. Planları',
		aboutP1Mid: ' üzerinde karşılaştırın, ardından ',
		aboutP1After: ' kontrol edin.',
	},
	ar: {
		aboutP1Before: 'Deadside Cheats حزمة undetected لـ Deadside على Windows PC. ترخيص واحد يشمل ESP wallhack وsoft aim و2D radar مع rebuilds لـ BattlEye بعد التحديثات. قارن الخطط في',
		aboutP1Mid: '، ثم راجع ',
		aboutP1After: ' قبل اللعب.',
	},
	ja: {
		aboutP1Before: 'Deadside CheatsはWindows PC版Deadside向けのundetectedパッケージです。1ライセンスでESP wallhack、soft aim、2D radarが利用でき、パッチ後のBattlEye rebuildも含まれます。プランは',
		aboutP1Mid: 'で比較し、',
		aboutP1After: 'を確認してからプレイしてください。',
	},
	ko: {
		aboutP1Before: 'Deadside Cheats는 Windows PC용 Deadside undetected 패키지입니다. 단일 라이선스에 ESP wallhack, soft aim, 2D radar가 포함되며 패치 후 BattlEye rebuild가 제공됩니다. 요금제는',
		aboutP1Mid: '에서 비교한 뒤 ',
		aboutP1After: '를 확인하세요.',
	},
	hi: {
		aboutP1Before: 'Deadside Cheats Windows PC पर Deadside के लिए undetected पैकेज है। एक लाइसेंस में ESP wallhack, soft aim और 2D radar शामिल है, पैच के बाद BattlEye rebuild भी। प्लान',
		aboutP1Mid: ' पर तुलना करें, फिर ',
		aboutP1After: ' जाँचें।',
	},
	id: {
		aboutP1Before: 'Deadside Cheats adalah paket undetected untuk Deadside di Windows PC. Satu lisensi mencakup ESP wallhack, soft aim, dan radar 2D dengan rebuild BattlEye setelah patch. Bandingkan paket di',
		aboutP1Mid: ', lalu periksa ',
		aboutP1After: ' sebelum bermain.',
	},
	th: {
		aboutP1Before: 'Deadside Cheats เป็นแพ็ก undetected สำหรับ Deadside บน Windows PC ใบอนุญาตเดียวรวม ESP wallhack, soft aim และ 2D radar พร้อม BattlEye rebuild หลังแพตช์ เปรียบเทียบแพ็กที่',
		aboutP1Mid: ' แล้วตรวจ ',
		aboutP1After: ' ก่อนเล่น',
	},
	vi: {
		aboutP1Before: 'Deadside Cheats là gói undetected cho Deadside trên Windows PC. Một giấy phép gồm ESP wallhack, soft aim và radar 2D với rebuild BattlEye sau bản vá. So sánh gói tại',
		aboutP1Mid: ', rồi kiểm tra ',
		aboutP1After: ' trước khi vào trận.',
	},
	uk: {
		aboutP1Before: 'Deadside Cheats — undetected пакет для Deadside на Windows PC. Одна ліцензія включає ESP wallhack, soft aim і 2D radar з rebuilds після патчів BattlEye. Порівняйте плани в',
		aboutP1Mid: ', потім перевірте ',
		aboutP1After: ' перед грою.',
	},
	cs: {
		aboutP1Before: 'Deadside Cheats je undetected balíček pro Deadside na Windows PC. Jedna licence zahrnuje ESP wallhack, soft aim a 2D radar s rebuildy BattlEye po patchech. Porovnejte plány v',
		aboutP1Mid: ', poté zkontrolujte ',
		aboutP1After: ' před hrou.',
	},
	ro: {
		aboutP1Before: 'Deadside Cheats este un pachet undetected pentru Deadside pe Windows PC. O licență include ESP wallhack, soft aim și radar 2D, cu rebuilds BattlEye după patch-uri. Compară planurile în',
		aboutP1Mid: ', apoi verifică ',
		aboutP1After: ' înainte de a juca.',
	},
	sv: {
		aboutP1Before: 'Deadside Cheats är ett undetected paket för Deadside på Windows PC. En licens inkluderar ESP wallhack, soft aim och 2D-radar med BattlEye-rebuilds efter patchar. Jämför planer på',
		aboutP1Mid: ', kontrollera sedan ',
		aboutP1After: ' innan du spelar.',
	},
};

const HOME_MEDIA = {
	it: { playDemoVideo: 'Riproduci demo Deadside Cheats', pauseDemoVideo: 'Metti in pausa la demo', demoVideoCaption: 'Deadside Cheats — ESP, aimbot e radar in partita', volumeLabel: 'Volume', muteVideo: 'Disattiva audio', unmuteVideo: 'Attiva audio', seekLabel: 'Avanzamento video', demoGalleryCaption: 'Deadside Cheats — ESP, aimbot e radar in partita', demoGalleryScrollLabel: 'Screenshot gameplay Deadside Cheats', demoGalleryPrev: 'Screenshot precedente', demoGalleryNext: 'Screenshot successivo' },
	nl: { playDemoVideo: 'Deadside Cheats demo afspelen', pauseDemoVideo: 'Demo pauzeren', demoVideoCaption: 'Deadside Cheats — ESP, aimbot en radar in match', volumeLabel: 'Volume', muteVideo: 'Geluid dempen', unmuteVideo: 'Geluid aanzetten', seekLabel: 'Videovoortgang', demoGalleryCaption: 'Deadside Cheats — ESP, aimbot en radar in match', demoGalleryScrollLabel: 'Deadside Cheats gameplay-screenshots', demoGalleryPrev: 'Vorige screenshot', demoGalleryNext: 'Volgende screenshot' },
	pl: { playDemoVideo: 'Odtwórz demo Deadside Cheats', pauseDemoVideo: 'Wstrzymaj demo', demoVideoCaption: 'Deadside Cheats — ESP, aimbot i radar w meczu', volumeLabel: 'Głośność', muteVideo: 'Wycisz', unmuteVideo: 'Włącz dźwięk', seekLabel: 'Postęp wideo', demoGalleryCaption: 'Deadside Cheats — ESP, aimbot i radar w meczu', demoGalleryScrollLabel: 'Zrzuty ekranu Deadside Cheats', demoGalleryPrev: 'Poprzedni zrzut', demoGalleryNext: 'Następny zrzut' },
	tr: { playDemoVideo: 'Deadside Cheats demosunu oynat', pauseDemoVideo: 'Demoyu duraklat', demoVideoCaption: 'Deadside Cheats — maçta ESP, aimbot ve radar', volumeLabel: 'Ses', muteVideo: 'Sesi kapat', unmuteVideo: 'Sesi aç', seekLabel: 'Video ilerlemesi', demoGalleryCaption: 'Deadside Cheats — maçta ESP, aimbot ve radar', demoGalleryScrollLabel: 'Deadside Cheats oynanış ekran görüntüleri', demoGalleryPrev: 'Önceki ekran görüntüsü', demoGalleryNext: 'Sonraki ekran görüntüsü' },
	ar: { playDemoVideo: 'تشغيل فيديو عرض Deadside Cheats', pauseDemoVideo: 'إيقاف الفيديو مؤقتًا', demoVideoCaption: 'Deadside Cheats — ESP وAimbot ورadar في المباراة', volumeLabel: 'مستوى الصوت', muteVideo: 'كتم الصوت', unmuteVideo: 'إلغاء كتم الصوت', seekLabel: 'تقدم الفيديو', demoGalleryCaption: 'Deadside Cheats — ESP وAimbot ورadar في المباراة', demoGalleryScrollLabel: 'لقطات Deadside Cheats أثناء اللعب', demoGalleryPrev: 'اللقطة السابقة', demoGalleryNext: 'اللقطة التالية' },
	ja: { playDemoVideo: 'Deadside Cheatsデモ動画を再生', pauseDemoVideo: 'デモ動画を一時停止', demoVideoCaption: 'Deadside Cheats — マッチ内のESP、Aimbot、レーダー', volumeLabel: '音量', muteVideo: 'ミュート', unmuteVideo: 'ミュート解除', seekLabel: '動画の進行', demoGalleryCaption: 'Deadside Cheats — マッチ内のESP、Aimbot、レーダー', demoGalleryScrollLabel: 'Deadside Cheatsゲームプレイスクリーンショット', demoGalleryPrev: '前のスクリーンショット', demoGalleryNext: '次のスクリーンショット' },
	ko: { playDemoVideo: 'Deadside Cheats 데모 영상 재생', pauseDemoVideo: '데모 영상 일시정지', demoVideoCaption: 'Deadside Cheats — 매치 중 ESP, 에임봇, 레이더', volumeLabel: '볼륨', muteVideo: '음소거', unmuteVideo: '음소거 해제', seekLabel: '영상 진행', demoGalleryCaption: 'Deadside Cheats — 매치 중 ESP, 에임봇, 레이더', demoGalleryScrollLabel: 'Deadside Cheats 게임플레이 스크린샷', demoGalleryPrev: '이전 스크린샷', demoGalleryNext: '다음 스크린샷' },
	hi: { playDemoVideo: 'Deadside Cheats डेमो वीडियो चलाएँ', pauseDemoVideo: 'डेमो रोकें', demoVideoCaption: 'Deadside Cheats — मैच में ESP, aimbot और radar', volumeLabel: 'वॉल्यूम', muteVideo: 'म्यूट करें', unmuteVideo: 'अनम्यूट करें', seekLabel: 'वीडियो प्रगति', demoGalleryCaption: 'Deadside Cheats — मैच में ESP, aimbot और radar', demoGalleryScrollLabel: 'Deadside Cheats गेमप्ले स्क्रीनशॉट', demoGalleryPrev: 'पिछला स्क्रीनशॉट', demoGalleryNext: 'अगला स्क्रीनशॉट' },
	id: { playDemoVideo: 'Putar video demo Deadside Cheats', pauseDemoVideo: 'Jeda video demo', demoVideoCaption: 'Deadside Cheats — ESP, aimbot & radar dalam match', volumeLabel: 'Volume', muteVideo: 'Bisukan', unmuteVideo: 'Nyalakan suara', seekLabel: 'Progres video', demoGalleryCaption: 'Deadside Cheats — ESP, aimbot & radar dalam match', demoGalleryScrollLabel: 'Screenshot gameplay Deadside Cheats', demoGalleryPrev: 'Screenshot sebelumnya', demoGalleryNext: 'Screenshot berikutnya' },
	th: { playDemoVideo: 'เล่นวิดีโอเดโม Deadside Cheats', pauseDemoVideo: 'หยุดวิดีโอเดโมชั่วคราว', demoVideoCaption: 'Deadside Cheats — ESP, aimbot และ radar ในแมตช์', volumeLabel: 'ระดับเสียง', muteVideo: 'ปิดเสียง', unmuteVideo: 'เปิดเสียง', seekLabel: 'ความคืบหน้าวิดีโอ', demoGalleryCaption: 'Deadside Cheats — ESP, aimbot และ radar ในแมตช์', demoGalleryScrollLabel: 'ภาพหน้าจอ gameplay Deadside Cheats', demoGalleryPrev: 'ภาพก่อนหน้า', demoGalleryNext: 'ภาพถัดไป' },
	vi: { playDemoVideo: 'Phát video demo Deadside Cheats', pauseDemoVideo: 'Tạm dừng video demo', demoVideoCaption: 'Deadside Cheats — ESP, aimbot và radar trong trận', volumeLabel: 'Âm lượng', muteVideo: 'Tắt tiếng', unmuteVideo: 'Bật tiếng', seekLabel: 'Tiến trình video', demoGalleryCaption: 'Deadside Cheats — ESP, aimbot và radar trong trận', demoGalleryScrollLabel: 'Ảnh chụp gameplay Deadside Cheats', demoGalleryPrev: 'Ảnh trước', demoGalleryNext: 'Ảnh tiếp theo' },
	uk: { playDemoVideo: 'Відтворити демо Deadside Cheats', pauseDemoVideo: 'Пауза демо', demoVideoCaption: 'Deadside Cheats — ESP, aimbot і radar у матчі', volumeLabel: 'Гучність', muteVideo: 'Без звуку', unmuteVideo: 'Увімкнути звук', seekLabel: 'Прогрес відео', demoGalleryCaption: 'Deadside Cheats — ESP, aimbot і radar у матчі', demoGalleryScrollLabel: 'Скріншоти Deadside Cheats', demoGalleryPrev: 'Попередній скріншот', demoGalleryNext: 'Наступний скріншот' },
	cs: { playDemoVideo: 'Přehrát demo Deadside Cheats', pauseDemoVideo: 'Pozastavit demo', demoVideoCaption: 'Deadside Cheats — ESP, aimbot a radar v zápase', volumeLabel: 'Hlasitost', muteVideo: 'Ztlumit', unmuteVideo: 'Zapnout zvuk', seekLabel: 'Průběh videa', demoGalleryCaption: 'Deadside Cheats — ESP, aimbot a radar v zápase', demoGalleryScrollLabel: 'Screenshoty Deadside Cheats', demoGalleryPrev: 'Předchozí screenshot', demoGalleryNext: 'Další screenshot' },
	ro: { playDemoVideo: 'Redă demo Deadside Cheats', pauseDemoVideo: 'Pauză demo', demoVideoCaption: 'Deadside Cheats — ESP, aimbot și radar în meci', volumeLabel: 'Volum', muteVideo: 'Fără sunet', unmuteVideo: 'Cu sunet', seekLabel: 'Progres video', demoGalleryCaption: 'Deadside Cheats — ESP, aimbot și radar în meci', demoGalleryScrollLabel: 'Capturi Deadside Cheats', demoGalleryPrev: 'Captura anterioară', demoGalleryNext: 'Captura următoare' },
	sv: { playDemoVideo: 'Spela Deadside Cheats-demovideo', pauseDemoVideo: 'Pausa demovideo', demoVideoCaption: 'Deadside Cheats — ESP, aimbot och radar i match', volumeLabel: 'Volym', muteVideo: 'Stäng av ljud', unmuteVideo: 'Slå på ljud', seekLabel: 'Videoframsteg', demoGalleryCaption: 'Deadside Cheats — ESP, aimbot och radar i match', demoGalleryScrollLabel: 'Deadside Cheats gameplay-skärmdumpar', demoGalleryPrev: 'Föregående skärmdump', demoGalleryNext: 'Nästa skärmdump' },
	es: { demoGalleryCaption: 'Deadside Cheats — ESP, aimbot y radar en partida', demoGalleryScrollLabel: 'Capturas de Deadside Cheats', demoGalleryPrev: 'Captura anterior', demoGalleryNext: 'Captura siguiente' },
	fr: { demoGalleryCaption: 'Deadside Cheats — ESP, aimbot et radar en match', demoGalleryScrollLabel: 'Captures Deadside Cheats', demoGalleryPrev: 'Capture précédente', demoGalleryNext: 'Capture suivante' },
	pt: { demoGalleryCaption: 'Deadside Cheats — ESP, aimbot e radar em partida', demoGalleryScrollLabel: 'Capturas Deadside Cheats', demoGalleryPrev: 'Captura anterior', demoGalleryNext: 'Captura seguinte' },
	de: { demoGalleryCaption: 'Deadside Cheats — ESP, Aimbot & Radar im Match', demoGalleryScrollLabel: 'Deadside Cheats Gameplay-Screenshots', demoGalleryPrev: 'Vorheriger Screenshot', demoGalleryNext: 'Nächster Screenshot' },
	zh: { demoGalleryCaption: 'Deadside Cheats — 對戰中的 ESP、Aimbot 與雷達', demoGalleryScrollLabel: 'Deadside Cheats 遊戲畫面截圖', demoGalleryPrev: '上一張截圖', demoGalleryNext: '下一張截圖' },
	ru: { demoGalleryCaption: 'Deadside Cheats — ESP, aimbot и radar в матче', demoGalleryScrollLabel: 'Скриншоты Deadside Cheats', demoGalleryPrev: 'Предыдущий скриншот', demoGalleryNext: 'Следующий скриншот' },
};

function buildHomePatch(locale, overlay) {
	const full = HOME_ABOUT[locale];
	if (full) return { ...full, ...HOME_MEDIA[locale] };
	const p1 = HOME_P1_FALLBACK[locale];
	const media = HOME_MEDIA[locale];
	if (!p1 && !media) return undefined;
	const n = overlay?.nav ?? {};
	return {
		...p1,
		aboutStore: n.pricing ?? n.store ?? 'Store',
		aboutStatus: n.updates ?? n.status ?? 'Status',
		...media,
	};
}

const IMAGES = {
	de: {
		hero: 'Deadside Cheats Hero — ESP- und Aimbot-Overlay in Deadside',
		espWallhack: 'Wallhack-Umrisse zeigen Spieler durch Wände',
		aimbotCombat: 'Soft-Aim-Assist-Overlay in einem Deadside-Match',
		squadFight: 'Deadside Cheats Overlay in einem Teamkampf',
		playerEsp: 'Spieler-ESP-Boxen und Distanzanzeigen in Deadside',
		headerArt: 'Aimbot-Ansicht und Knochenpriorität für Deadside',
		hacksPackage: '2D-Radar-Bedrohungs-Overlay für Deadside',
		raidFight: 'Aimbot-Unterstützung in einem Deadside-Gefecht',
		battleRoyale: 'Deadside Cheats Session-Übersicht für Windows PC',
		raidMap: 'ESP-Marker für Loot und Spieler in Deadside',
	},
	zh: {
		hero: 'Deadside Cheats 主視覺 — Deadside 中的 ESP 與 Aimbot 覆蓋層',
		espWallhack: 'Wallhack 輪廓顯示牆後玩家',
		aimbotCombat: 'Deadside 對戰中的 Soft Aim 輔助覆蓋層',
		squadFight: 'Deadside Cheats 團隊戰鬥覆蓋層',
		playerEsp: 'Deadside 對戰中的玩家 ESP 框與距離資訊',
		headerArt: 'Deadside 的 Aimbot 視角與骨骼優先設定',
		hacksPackage: 'Deadside 的 2D 雷達威脅覆蓋層',
		raidFight: 'Deadside 戰鬥中的 Aimbot 輔助',
		battleRoyale: 'Windows PC 版 Deadside Cheats 對局總覽',
		raidMap: 'Deadside 中 Loot 與玩家的 ESP 標記',
	},
};

/** Deep-merge native patches onto a locale overlay. */
export function applyNativeUiPatch(locale, overlay) {
	if (locale === 'en') return overlay;
	const homePatch = buildHomePatch(locale, overlay);
	const patch = {
		nav: NAV_ARIA[locale],
		hero: HERO[locale],
		common: { ...COMMON[locale], ...COMMON_EXTRA[locale] },
		home: homePatch,
		reviews: REVIEWS[locale],
		images: IMAGES[locale],
	};
	const out = structuredClone(overlay);
	for (const [key, value] of Object.entries(patch)) {
		if (!value) continue;
		out[key] = { ...(out[key] ?? {}), ...value };
	}
	return out;
}
