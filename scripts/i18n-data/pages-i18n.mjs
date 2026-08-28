import { HERO_IMAGES, clampTitle, clampDesc, section, stripZadeyoFromMeta } from './constants.mjs';
import { phrases } from './phrases.mjs';
import { PAGE_IMAGE_ALTS } from './image-alts.mjs';
import { FOCUS_I18N } from './focus-i18n.mjs';
import { LEGAL_I18N } from './legal-i18n.mjs';

/** Page-specific translated meta for home across locales. */
export const PAGE_META_HOME = {
	es: { title: 'Naraka Cheats 2026 | ESP, Wallhack y Aimbot', desc: 'Trucos Naraka indetectables para Naraka en PC. ESP wallhack, radar hack y Aimbot con mantenimiento NEAC. Entrega digital instantánea.', h1: 'hacks indetectables para Naraka', intro: 'Paquete undetected para Naraka en Windows PC: ESP wallhack, radar y Aimbot con mantenimiento NEAC tras cada parche.', imageAlt: 'Naraka ESP — etiquetas de jugador hack', gallery: 'Galería Naraka Cheats — ESP, Aimbot y wallhack', cta2: 'Ver funciones', h2a: 'Por qué eligen Naraka Cheats en 2026', h2b: 'ESP wallhack, radar y Aimbot en una licencia', topicA: 'Ideal para leer escuadrones enemigos en BR y Quick Match sessions.', topicB: 'Una licencia en lugar de herramientas separadas.' },
	fr: { title: 'Naraka Cheats 2026 | ESP, Wallhack et Aimbot', desc: 'Triches Naraka indétectables pour Naraka sur PC. ESP wallhack, radar hack et Aimbot avec maintenance NEAC. Livraison numérique instantanée.', h1: 'hacks indétectables pour Naraka', intro: 'Pack undetected pour Naraka sur PC Windows : ESP wallhack, radar et Aimbot avec maintenance NEAC après chaque patch.', imageAlt: 'Naraka ESP — tags joueur hack', gallery: 'Galerie Naraka Cheats — ESP, Aimbot et wallhack', cta2: 'Voir les fonctions', h2a: 'Pourquoi choisir Naraka Cheats en 2026', h2b: 'ESP wallhack, radar et Aimbot en une licence', topicA: 'Parfait pour lire les équipes ennemies en BR et Quick Match sessions.', topicB: 'Une licence au lieu d\'outils séparés.' },
	de: { title: 'Naraka Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected Naraka Cheats für Naraka auf PC. ESP Wallhack, Radar Hack und Aimbot mit NEAC-Wartung. Sofortige digitale Lieferung.', h1: 'undetected Hacks für Naraka', intro: 'Undetected Windows PC Paket für Naraka: ESP Wallhack, Radar und Aimbot mit NEAC-Wartung nach jedem Patch.', imageAlt: 'Naraka ESP — Spieler-Tags Hack', gallery: 'Naraka Cheats Galerie — ESP, Aimbot und Wallhack', cta2: 'Features ansehen', h2a: 'Warum Naraka Cheats 2026 führt', h2b: 'ESP Wallhack, Radar und Aimbot in einer Lizenz', topicA: 'Ideal um feindliche Squads in BR und Quick Match sessions zu lesen.', topicB: 'Eine Lizenz statt separater Tools.' },
	pt: { title: 'Naraka Cheats 2026 | ESP, Wallhack e Aimbot', desc: 'Cheats Naraka indetectáveis para Naraka no PC. ESP wallhack, radar hack e Aimbot com manutenção NEAC. Entrega digital instantánea.', h1: 'hacks indetectáveis para Naraka', intro: 'Pacote undetected para Naraka no Windows PC: ESP wallhack, radar e Aimbot com manutenção NEAC após cada patch.', imageAlt: 'Naraka ESP player tags hack', gallery: 'Galeria Naraka Cheats — ESP, Aimbot e wallhack', cta2: 'Ver recursos', h2a: 'Por que escolher Naraka Cheats em 2026', h2b: 'ESP wallhack, radar e Aimbot numa licença', topicA: 'Ideal para ler equipes inimigos em BR e Quick Match sessions.', topicB: 'Uma licença em vez de ferramentas separadas.' },
	it: { title: 'Naraka Cheats 2026 | ESP, Wallhack e Aimbot', desc: 'Cheat Naraka indetectable per Naraka su PC. ESP wallhack, radar hack e Aimbot con manutenzione NEAC. Consegna digitale istantanea.', h1: 'hacks indetectable per Naraka', intro: 'Pacchetto undetected per Naraka su PC Windows: ESP wallhack, radar e Aimbot con manutenzione NEAC dopo ogni patch.', imageAlt: 'Naraka ESP player tags hack', gallery: 'Galleria Naraka Cheats — ESP, Aimbot e wallhack', cta2: 'Vedi funzioni', h2a: 'Perché scegliere Naraka Cheats nel 2026', h2b: 'ESP wallhack, radar e Aimbot in una licenza', topicA: 'Ideale per leggere squadre nemiche in BR e Quick Match sessions.', topicB: 'Una licenza invece di tool separati.' },
	nl: { title: 'Naraka Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected naraka cheats voor Naraka op PC. ESP wallhack, radar hack en Aimbot met NEAC-onderhoud. Directe digitale levering.', h1: 'undetected hacks voor Naraka', intro: 'Undetected Windows PC pakket voor Naraka: ESP wallhack, radar en Aimbot met NEAC-onderhoud na elke patch.', imageAlt: 'Naraka ESP player tags hack', gallery: 'Naraka Cheats galerij — ESP, Aimbot en wallhack', cta2: 'Bekijk functies', h2a: 'Waarom Naraka Cheats in 2026', h2b: 'ESP wallhack, radar en Aimbot in één licentie', topicA: 'Ideaal om vijandelijke squads te lezen in BR en Quick Match sessions.', topicB: 'Eén licentie in plaats van losse tools.' },
	pl: { title: 'Naraka Cheats 2026 | ESP, Wallhack i Aimbot', desc: 'Undetected cheaty Naraka dla Naraka na PC. ESP wallhack, radar hack i Aimbot z konserwacją NEAC. Natychmiastowa dostawa cyfrowa.', h1: 'undetected hacki dla Naraka', intro: 'Pakiet undetected dla Naraka na Windows PC: ESP wallhack, radar i Aimbot z konserwacją NEAC po każdym patchu.', imageAlt: 'Naraka ESP player tags hack', gallery: 'Galeria Naraka Cheats — ESP, Aimbot i wallhack', cta2: 'Zobacz funkcje', h2a: 'Dlaczego Naraka Cheats w 2026', h2b: 'ESP wallhack, radar i Aimbot w jednej licencji', topicA: 'Idealny do czytania wrogich squadów w BR i Quick Match sessions.', topicB: 'Jedna licencja zamiast osobnych narzędzi.' },
	ru: { title: 'Naraka Cheats 2026 | ESP, Wallhack и Aimbot', desc: 'Undetected читы Naraka для Naraka на PC. ESP wallhack, radar hack и Aimbot с обслуживанием NEAC. Мгновенная цифровая доставка.', h1: 'undetected хаки для Naraka', intro: 'Undetected пакет для Naraka на Windows PC: ESP wallhack, radar и Aimbot с обслуживанием NEAC после патчей.', imageAlt: 'Naraka ESP — теги игроков hack', gallery: 'Галерея Naraka Cheats — ESP, Aimbot и wallhack', cta2: 'Смотреть функции', h2a: 'Почему выбирают Naraka Cheats в 2026', h2b: 'ESP wallhack, radar и Aimbot в одной лицензии', topicA: 'Идеально для чтения вражеских отрядов в BR и Quick Match sessions.', topicB: 'Одна лицензия вместо отдельных инструментов.' },
	tr: { title: 'Naraka Cheats 2026 | ESP, Wallhack ve Aimbot', desc: 'Naraka için undetected hileler. ESP wallhack, radar hack ve Aimbot — NEAC bakımı. Anında dijital teslimat.', h1: 'Naraka için undetected hackler', intro: 'Naraka Windows PC undetected paketi: ESP wallhack, radar ve Aimbot — NEAC bakımı dahil.', imageAlt: 'Naraka ESP player tags hack', gallery: 'Naraka Cheats galeri — ESP, Aimbot ve wallhack', cta2: 'Özellikleri gör', h2a: '2026\'da neden Naraka Cheats', h2b: 'ESP wallhack, radar ve Aimbot tek lisans', topicA: 'BR ve Quick Match sessions\'da düşman squad okumak için ideal.', topicB: 'Ayrı araçlar yerine tek lisans.' },
	ar: { title: 'Naraka Cheats 2026 | ESP وWallhack وAimbot', desc: 'غش Naraka undetected لـ Naraka على PC. ESP wallhack ورadar hack وAimbot مع صيانة NEAC. تسليم رقمي فوري.', h1: 'اختراقات غير مكتشفة لـ Naraka', intro: 'حزمة undetected لـ Naraka على Windows PC: ESP wallhack ورadar وAimbot مع صيانة NEAC.', imageAlt: 'Naraka ESP player tags hack', gallery: 'معرض Naraka Cheats — ESP وAimbot وwallhack', cta2: 'عرض الميزات', h2a: 'لماذا Naraka Cheats في 2026', h2b: 'ESP wallhack ورadar وAimbot في ترخيص واحد', topicA: 'مثالي لقراءة فرق العدو في BR وQuick Match sessions.', topicB: 'ترخيص واحد بدلاً من أدوات منفصلة.' },
	ja: { title: 'Naraka Cheats 2026 | ESP・Wallhack・Aimbot', desc: 'Naraka向けundetectedチート。ESP wallhack、radar hack、Aimbot、NEACメンテナンス。即時デジタル配信。', h1: 'Naraka向けundetectedハック', intro: 'Naraka Windows PC向けundetectedパッケージ：ESP wallhack、radar、Aimbot、NEACメンテナンス付き。', imageAlt: 'naraka cheats hero ESP aimbot wallhack', gallery: 'Naraka Cheatsギャラリー — ESP、Aimbot、wallhack', cta2: '機能を見る', h2a: '2026年にNaraka Cheatsを選ぶ理由', h2b: 'ESP wallhack、radar、Aimbotが1ライセンス', topicA: 'BRとQuick Match sessionsで敵スクワッドを読むのに最適。', topicB: '別ツールではなく1ライセンス。' },
	ko: { title: 'Naraka Cheats 2026 | ESP, Wallhack, Aimbot', desc: 'Naraka undetected 치트. ESP wallhack, radar hack, Aimbot, NEAC 유지보수. 즉시 디지털 배송.', h1: 'Naraka용 undetected 핵', intro: 'Naraka Windows PC undetected 패키지: ESP wallhack, radar, Aimbot, NEAC 유지보수 포함.', imageAlt: 'naraka cheats hero ESP aimbot wallhack', gallery: 'Naraka Cheats 갤러리 — ESP, Aimbot, wallhack', cta2: '기능 보기', h2a: '2026년 Naraka Cheats를 선택하는 이유', h2b: 'ESP wallhack, radar, Aimbot 단일 라이선스', topicA: 'BR 및 Quick Match sessions에서 적 분대 읽기에 이상적.', topicB: '별도 도구 대신 단일 라이선스.' },
	zh: { title: 'Naraka Cheats 2026 | ESP、Wallhack、Aimbot', desc: 'Naraka undetected作弊。ESP wallhack、radar hack、Aimbot、NEAC维护。即时数字交付。', h1: 'Naraka的undetected外挂', intro: 'Naraka Windows PC undetected套餐：ESP wallhack、radar、Aimbot，含NEAC维护。', imageAlt: 'naraka cheats hero ESP aimbot wallhack', gallery: 'Naraka Cheats图库 — ESP、Aimbot、wallhack', cta2: '查看功能', h2a: '2026年选择Naraka Cheats的原因', h2b: 'ESP wallhack、radar、Aimbot单一许可证', topicA: '适合在BR和Quick Match sessions中读取敌方小队。', topicB: '一个许可证而非多个工具。' },
	hi: { title: 'Naraka Cheats 2026 | ESP, Wallhack और Aimbot', desc: 'Naraka undetected hacks. ESP wallhack, radar hack, Aimbot, NEAC maintenance. Instant digital delivery.', h1: 'Naraka ke liye undetected hacks', intro: 'Naraka Windows PC undetected पैकेज: ESP wallhack, radar, Aimbot, NEAC maintenance सहित.', imageAlt: 'naraka cheats hero ESP aimbot wallhack', gallery: 'Naraka Cheats gallery — ESP, Aimbot, wallhack', cta2: 'फ़ीचर्स देखें', h2a: '2026 में Naraka Cheats क्यों', h2b: 'ESP wallhack, radar, Aimbot एक लाइसेंस में', topicA: 'BR और Quick Match sessions में दुश्मन squad पढ़ने के लिए आदर्श.', topicB: 'अलग टूल्स के बजाय एक लाइसेंस.' },
	id: { title: 'Naraka Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Cheat Naraka undetected untuk Naraka di PC. ESP wallhack, radar hack, Aimbot, pemeliharaan NEAC. Pengiriman digital instan.', h1: 'hack undetected untuk Naraka', intro: 'Paket undetected Naraka di Windows PC: ESP wallhack, radar, Aimbot dengan pemeliharaan NEAC.', imageAlt: 'Naraka ESP player tags hack', gallery: 'Galeri Naraka Cheats — ESP, Aimbot, wallhack', cta2: 'Lihat fitur', h2a: 'Mengapa Naraka Cheats di 2026', h2b: 'ESP wallhack, radar, Aimbot dalam satu lisensi', topicA: 'Ideal membaca squad musuh di BR dan Quick Match sessions.', topicB: 'Satu lisensi alih-alih alat terpisah.' },
	th: { title: 'Naraka Cheats 2026 | ESP, Wallhack และ Aimbot', desc: 'Cheat Naraka undetected สำหรับ Naraka บน PC. ESP wallhack, radar hack, Aimbot, NEAC maintenance. จัดส่งดิจิทัลทันที.', h1: 'hack undetected สำหรับ Naraka', intro: 'แพ็ก undetected สำหรับ Naraka บน Windows PC: ESP wallhack, radar, Aimbot พร้อม NEAC maintenance', imageAlt: 'Naraka ESP player tags hack', gallery: 'แกลเลอรี Naraka Cheats — ESP, Aimbot, wallhack', cta2: 'ดูฟีเจอร์', h2a: 'ทำไมเลือก Naraka Cheats ปี 2026', h2b: 'ESP wallhack, radar, Aimbot ในใบอนุญาตเดียว', topicA: 'เหมาะสำหรับอ่าน squad ศัตรูใน BR และ Quick Match sessions', topicB: 'ใบอนุญาตเดียวแทนเครื่องมือแยก' },
	vi: { title: 'Naraka Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Cheat Naraka undetected cho Naraka trên PC. ESP wallhack, radar hack, Aimbot, bảo trì NEAC. Giao hàng kỹ thuật số tức thì.', h1: 'hack undetected cho Naraka', intro: 'Gói undetected Naraka trên Windows PC: ESP wallhack, radar, Aimbot với bảo trì NEAC.', imageAlt: 'Naraka ESP player tags hack', gallery: 'Thư viện Naraka Cheats — ESP, Aimbot, wallhack', cta2: 'Xem tính năng', h2a: 'Vì sao chọn Naraka Cheats 2026', h2b: 'ESP wallhack, radar, Aimbot trong một giấy phép', topicA: 'Lý tưởng đọc squad địch trong BR và Quick Match sessions.', topicB: 'Một giấy phép thay vì công cụ riêng.' },
	uk: { title: 'Naraka Cheats 2026 | ESP, Wallhack і Aimbot', desc: 'Undetected чіти Naraka для Naraka на PC. ESP wallhack, radar hack, Aimbot, обслуговування NEAC. Мгновенная цифровая доставка.', h1: 'undetected хаки для Naraka', intro: 'Undetected пакет для Naraka на Windows PC: ESP wallhack, radar, Aimbot з обслуговуванням NEAC.', imageAlt: 'Naraka ESP player tags hack', gallery: 'Галерея Naraka Cheats — ESP, Aimbot, wallhack', cta2: 'Дивитися функції', h2a: 'Чому Naraka Cheats у 2026', h2b: 'ESP wallhack, radar і Aimbot в одній ліцензії', topicA: 'Ідеально для читання ворожих загонів у BR і Quick Match sessions.', topicB: 'Одна ліцензія замість окремих інструментів.' },
	cs: { title: 'Naraka Cheats 2026 | ESP, Wallhack a Aimbot', desc: 'Undetected naraka cheaty pro Naraka na PC. ESP wallhack, radar hack, Aimbot, údržba NEAC. Okamžité digitální doručení.', h1: 'undetected hacky pro Naraka', intro: 'Undetected balíček pro Naraka na Windows PC: ESP wallhack, radar, Aimbot s údržbou NEAC.', imageAlt: 'Naraka ESP player tags hack', gallery: 'Galerie Naraka Cheats — ESP, Aimbot, wallhack', cta2: 'Zobrazit funkce', h2a: 'Proč Naraka Cheats v roce 2026', h2b: 'ESP wallhack, radar a Aimbot v jedné licenci', topicA: 'Ideální pro čtení nepřátelských squadů v BR a Quick Match sessions.', topicB: 'Jedna licence místo samostatných nástrojů.' },
	ro: { title: 'Naraka Cheats 2026 | ESP, Wallhack și Aimbot', desc: 'Cheats Naraka undetected pentru Naraka pe PC. ESP wallhack, radar hack, Aimbot, mentenanță NEAC. Livrare digitală instantă.', h1: 'hack-uri undetected pentru Naraka', intro: 'Pachet undetected Naraka pe Windows PC: ESP wallhack, radar, Aimbot cu mentenanță NEAC.', imageAlt: 'Naraka ESP player tags hack', gallery: 'Galerie Naraka Cheats — ESP, Aimbot, wallhack', cta2: 'Vezi funcții', h2a: 'De ce Naraka Cheats în 2026', h2b: 'ESP wallhack, radar și Aimbot într-o licență', topicA: 'Ideal pentru citirea squad-urilor inamice în BR și Quick Match sessions.', topicB: 'O licență în loc de instrumente separate.' },
	sv: { title: 'Naraka Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected naraka cheats för Naraka på PC. ESP wallhack, radar hack, Aimbot, NEAC-underhåll. Omedelbar digital leverans.', h1: 'undetected hacks för Naraka', intro: 'Undetected paket för Naraka på Windows PC: ESP wallhack, radar, Aimbot med NEAC-underhåll.', imageAlt: 'Naraka ESP player tags hack', gallery: 'Naraka Cheats galleri — ESP, Aimbot, wallhack', cta2: 'Se funktioner', h2a: 'Varför Naraka Cheats 2026', h2b: 'ESP wallhack, radar och Aimbot i en licens', topicA: 'Ideal för att läsa fiendesquads i BR och Quick Match sessions.', topicB: 'En licens istället för separata verktyg.' },
};

export function buildHome(locale) {
	const p = phrases[locale];
	const m = PAGE_META_HOME[locale];
	return {
		title: clampTitle(stripZadeyoFromMeta(m.title)),
		description: clampDesc(stripZadeyoFromMeta(m.desc)),
		h1: m.h1,
		intro: m.intro,
		imageAlt: m.imageAlt,
		galleryTitle: m.gallery,
		heroImage: HERO_IMAGES.home,
		ctaPrimary: p.buy,
		ctaSecondary: m.cta2,
		ctaSecondaryHref: '/features/',
		sections: [
			section(m.h2a, p.s1(m.topicA), p.s2()),
			section(m.h2b, p.s1(m.topicB), p.s3()),
		],
	};
}

/** Unique title/desc tails per page — English base + locale overrides for hero H1/subtitle. */
const PAGE_META_TAILS = {
	'naraka-esp': { suffix: 'Player Boxes & Wallhack', focus: 'player boxes, hero markers, and wallhack overlays', altKeyword: 'ESP wallhack overlay' },
	'naraka-aimbot': { suffix: 'Soft Aim Controls', focus: 'soft aim, FOV, and per-weapon Aimbot profiles', altKeyword: 'aimbot combat' },
	features: { suffix: 'Full Feature List', focus: 'ESP, soft aim, radar controls', altKeyword: 'cheats package ESP aimbot' },
	pricing: { suffix: 'Monthly & Lifetime', focus: '$35 monthly or $150 lifetime licenses', altKeyword: 'cheats pricing' },
	setup: { suffix: 'PC Setup Guide', focus: 'Windows PC activation and first-launch setup', altKeyword: 'setup PC activation' },
	updates: { suffix: 'NEAC Maintenance Log', focus: 'NEAC patch status and rebuild notes', altKeyword: 'updates NEAC maintenance' },
	faq: { suffix: 'Common Answers', focus: 'ESP, soft aim, delivery, and NEAC questions', altKeyword: 'FAQ ESP aimbot' },
	support: { suffix: 'Help & Contact', focus: 'order help and license support contact', altKeyword: 'support license help' },
	undetected: { suffix: 'NEAC Safe Status', focus: 'undetected maintenance after NEAC patches', altKeyword: 'undetected cheats ESP' },
	wallhack: { suffix: 'ESP Visibility', focus: 'wallhack ESP for players, loot, and distance', altKeyword: 'wallhack ESP visibility' },
	radar: { suffix: '2D Threat Overlay', focus: '2D radar cues for flanks and rotations', altKeyword: 'radar hack overlay' },
	eac: { suffix: 'Patch Maintenance', focus: 'how NEAC updates are handled for Naraka cheats', altKeyword: 'NEAC bypass ESP aimbot' },
	'cheats-2026': { suffix: 'Buyer Guide', focus: '2026 naraka cheats checklist before checkout', altKeyword: 'hacks 2026 ESP aimbot' },
	hacks: { suffix: 'ESP Aimbot Guide', focus: 'Naraka Cheats pillar for ESP and Aimbot', altKeyword: 'hacks ESP aimbot' },
	'cheat-download': { suffix: 'Instant Access', focus: 'digital license download after payment', altKeyword: 'cheat download ESP aimbot' },
	'mod-menu': { suffix: 'In-Game Toggles', focus: 'in-client ESP and soft aim toggles', altKeyword: 'mod menu ESP aimbot' },
	'soft-aim': { suffix: 'Smooth Aim Settings', focus: 'smooth soft aim settings for Windows PC', altKeyword: 'soft aim aimbot' },
	'best-cheats': { suffix: 'Buyer Checklist', focus: 'what to compare before buying naraka cheats', altKeyword: 'best hacks ESP aimbot' },
	'aimbot-hack': { suffix: 'Soft Aim Assist', focus: 'undetected Aimbot hack assist for Naraka', altKeyword: 'aimbot hack combat' },
	'esp-hack': { suffix: 'Boxes & Loot', focus: 'ESP hack boxes, loot pins, and distance', altKeyword: 'ESP hack wallhack' },
	'unlock-all': { suffix: 'What It Means', focus: 'unlock-all searches vs real ESP and Aimbot tools', altKeyword: 'unlock all items ESP aimbot' },
};

/** Localized H1 suffixes (title/subtitle language change on product pages). */
export const SUFFIX_I18N = {
	es: {
		'naraka-esp': 'Cajas de jugador y wallhack',
		'naraka-aimbot': 'Controles soft aim',
		features: 'Lista completa de funciones',
		pricing: 'Mensual y de por vida',
		setup: 'Guía de instalación PC',
		updates: 'Registro NEAC',
		faq: 'Preguntas frecuentes',
		support: 'Ayuda y contacto',
		undetected: 'Estado indetectable',
		wallhack: 'Visibilidad ESP',
		radar: 'Radar 2D de amenazas',
		eac: 'Mantenimiento de parches',
		'cheats-2026': 'Guía del comprador',
		hacks: 'Guía ESP y Aimbot',
		'cheat-download': 'Acceso instantáneo',
		'mod-menu': 'Controles en partida',
		'soft-aim': 'Ajustes soft aim',
		'best-cheats': 'Lista de compra',
		'aimbot-hack': 'Asistencia soft aim',
		'esp-hack': 'Cajas y loot',
		'unlock-all': 'Qué significa',
	},
	fr: {
		'naraka-esp': 'Boîtes joueur et wallhack',
		'naraka-aimbot': 'Contrôles soft aim',
		features: 'Liste complète des fonctions',
		pricing: 'Mensuel et à vie',
		setup: 'Guide d\'installation PC',
		updates: 'Journal NEAC',
		faq: 'Questions fréquentes',
		support: 'Aide et contact',
		undetected: 'Statut indétectable',
		wallhack: 'Visibilité ESP',
		radar: 'Radar 2D des menaces',
		eac: 'Maintenance des patchs',
		'cheats-2026': 'Guide acheteur',
		hacks: 'Guide ESP et Aimbot',
		'cheat-download': 'Accès instantané',
		'mod-menu': 'Contrôles en jeu',
		'soft-aim': 'Réglages soft aim',
		'best-cheats': 'Checklist acheteur',
		'aimbot-hack': 'Assistance soft aim',
		'esp-hack': 'Boîtes et loot',
		'unlock-all': 'Ce que ça signifie',
	},
	de: {
		'naraka-esp': 'Spielerboxen & Wallhack',
		'naraka-aimbot': 'Soft-Aim Steuerung',
		features: 'Vollständige Feature-Liste',
		pricing: 'Monatlich & Lifetime',
		setup: 'PC Setup-Anleitung',
		updates: 'NEAC Wartungslog',
		faq: 'Häufige Fragen',
		support: 'Hilfe & Kontakt',
		undetected: 'Undetected Status',
		wallhack: 'ESP Sichtbarkeit',
		radar: '2D Bedrohungsradar',
		eac: 'Patch-Wartung',
		'cheats-2026': 'Käuferleitfaden',
		hacks: 'ESP Aimbot Guide',
		'cheat-download': 'Sofortzugang',
		'mod-menu': 'In-Game Toggles',
		'soft-aim': 'Soft-Aim Einstellungen',
		'best-cheats': 'Käufer-Checkliste',
		'aimbot-hack': 'Soft-Aim Assist',
		'esp-hack': 'Boxen & Loot',
		'unlock-all': 'Was es bedeutet',
	},
	pt: {
		'naraka-esp': 'Caixas de jogador e wallhack',
		'naraka-aimbot': 'Controles soft aim',
		features: 'Lista completa de recursos',
		pricing: 'Mensal e vitalício',
		setup: 'Guia de instalação PC',
		updates: 'Registro NEAC',
		faq: 'Perguntas frequentes',
		support: 'Ajuda e contato',
		undetected: 'Status indetectável',
		wallhack: 'Visibilidade ESP',
		radar: 'Radar 2D de ameaças',
		eac: 'Manutenção de patches',
		'cheats-2026': 'Guia do comprador',
		hacks: 'Guia ESP e Aimbot',
		'cheat-download': 'Acesso instantâneo',
		'mod-menu': 'Controles in-game',
		'soft-aim': 'Ajustes soft aim',
		'best-cheats': 'Checklist do comprador',
		'aimbot-hack': 'Assistência soft aim',
		'esp-hack': 'Caixas e loot',
		'unlock-all': 'O que significa',
	},
	it: {
		'naraka-esp': 'Box giocatore e wallhack',
		'naraka-aimbot': 'Controlli soft aim',
		features: 'Elenco completo funzioni',
		pricing: 'Mensile e lifetime',
		setup: 'Guida setup PC',
		updates: 'Log manutenzione NEAC',
		faq: 'Domande frequenti',
		support: 'Aiuto e contatto',
		undetected: 'Stato indetectable',
		wallhack: 'Visibilità ESP',
		radar: 'Radar 2D minacce',
		eac: 'Manutenzione patch',
		'cheats-2026': 'Guida acquirente',
		hacks: 'Guida ESP e Aimbot',
		'cheat-download': 'Accesso istantaneo',
		'mod-menu': 'Toggle in-game',
		'soft-aim': 'Impostazioni soft aim',
		'best-cheats': 'Checklist acquirente',
		'aimbot-hack': 'Assist soft aim',
		'esp-hack': 'Box e loot',
		'unlock-all': 'Cosa significa',
	},
	ru: {
		'naraka-esp': 'Боксы игроков и wallhack',
		'naraka-aimbot': 'Управление soft aim',
		features: 'Полный список функций',
		pricing: 'Месяц и lifetime',
		setup: 'Гайд по установке',
		updates: 'Журнал NEAC',
		faq: 'Частые вопросы',
		support: 'Помощь и контакт',
		undetected: 'Статус undetected',
		wallhack: 'Видимость ESP',
		radar: '2D радар угроз',
		eac: 'Обслуживание патчей',
		'cheats-2026': 'Гайд покупателя',
		hacks: 'Гайд ESP и Aimbot',
		'cheat-download': 'Мгновенный доступ',
		'mod-menu': 'Игровые переключатели',
		'soft-aim': 'Настройки soft aim',
		'best-cheats': 'Чеклист покупателя',
		'aimbot-hack': 'Soft aim ассист',
		'esp-hack': 'Боксы и лут',
		'unlock-all': 'Что это значит',
	},
};

function productPage(locale, pageKey, topicName, cta2href) {
	const p = phrases[locale];
	const home = PAGE_META_HOME[locale];
	const meta = PAGE_META_TAILS[pageKey] ?? { suffix: 'Naraka Cheats', focus: 'ESP wallhack, radar, and Aimbot', altKeyword: 'ESP aimbot wallhack' };
	const focus = FOCUS_I18N[locale]?.[pageKey] ?? meta.focus;
	const suffix = SUFFIX_I18N[locale]?.[pageKey] ?? meta.suffix;
	const titleBase = `${topicName} | ${suffix}`;
	return {
		title: clampTitle(stripZadeyoFromMeta(titleBase)),
		description: clampDesc(
			stripZadeyoFromMeta(`${topicName}: ${focus}. ${p.delivery}. ${p.undetected} — ${p.win}.`),
		),
		h1: topicName,
		intro: p.s1(`${topicName}.`),
		imageAlt: PAGE_IMAGE_ALTS[pageKey] || `${topicName} — Naraka Cheats screenshot`,
		galleryTitle: topicName,
		heroImage: HERO_IMAGES[pageKey],
		ctaPrimary: p.buy,
		ctaSecondary: home.cta2,
		ctaSecondaryHref: cta2href,
		sections: [
			section(topicName, p.s1(`${focus}.`), p.s2()),
			section(`${p.undetected}`, p.s3(), p.s2()),
			section(p.delivery, p.s2(), p.legal()),
		],
	};
}

export const TOPIC_NAMES = {
	'naraka-esp': { en: 'Naraka ESP', es: 'ESP Naraka', fr: 'ESP Naraka', de: 'Naraka ESP', pt: 'ESP Naraka', it: 'ESP Naraka', nl: 'Naraka ESP', pl: 'ESP Naraka', ru: 'ESP Naraka', tr: 'Naraka ESP', ar: 'ESP Naraka', ja: 'Naraka ESP', ko: 'Naraka ESP', zh: 'Naraka ESP', hi: 'Naraka ESP', id: 'ESP Naraka', th: 'Naraka ESP', vi: 'ESP Naraka', uk: 'ESP Naraka', cs: 'Naraka ESP', ro: 'ESP Naraka', sv: 'Naraka ESP' },
	'naraka-aimbot': { en: 'Naraka Aimbot', es: 'Aimbot Naraka', fr: 'Aimbot Naraka', de: 'Naraka Aimbot', pt: 'Aimbot Naraka', it: 'Aimbot Naraka', nl: 'Naraka Aimbot', pl: 'Aimbot Naraka', ru: 'Aimbot Naraka', tr: 'Naraka Aimbot', ar: 'Aimbot Naraka', ja: 'Naraka Aimbot', ko: 'Naraka Aimbot', zh: 'Naraka Aimbot', hi: 'Naraka Aimbot', id: 'Aimbot Naraka', th: 'Naraka Aimbot', vi: 'Aimbot Naraka', uk: 'Aimbot Naraka', cs: 'Naraka Aimbot', ro: 'Aimbot Naraka', sv: 'Naraka Aimbot' },
	features: { en: 'Features', es: 'Funciones', fr: 'Fonctions', de: 'Features', pt: 'Recursos', it: 'Funzioni', nl: 'Functies', pl: 'Funkcje', ru: 'Функции', tr: 'Özellikler', ar: 'الميزات', ja: '機能', ko: '기능', zh: '功能', hi: 'फ़ीचर्स', id: 'Fitur', th: 'ฟีเจอร์', vi: 'Tính năng', uk: 'Функції', cs: 'Funkce', ro: 'Funcții', sv: 'Funktioner' },
	pricing: { en: 'Pricing', es: 'Precios', fr: 'Tarifs', de: 'Preise', pt: 'Preços', it: 'Prezzi', nl: 'Prijzen', pl: 'Cennik', ru: 'Цены', tr: 'Fiyatlar', ar: 'الأسعار', ja: '料金', ko: '가격', zh: '价格', hi: 'कीमत', id: 'Harga', th: 'ราคา', vi: 'Giá', uk: 'Ціни', cs: 'Ceny', ro: 'Prețuri', sv: 'Priser' },
	setup: { en: 'Setup', es: 'Instalación', fr: 'Installation', de: 'Setup', pt: 'Instalação', it: 'Setup', nl: 'Setup', pl: 'Instalacja', ru: 'Установка', tr: 'Kurulum', ar: 'التثبيت', ja: 'セットアップ', ko: '설치', zh: '安装', hi: 'सेटअप', id: 'Setup', th: 'ติดตั้ง', vi: 'Cài đặt', uk: 'Встановлення', cs: 'Instalace', ro: 'Instalare', sv: 'Installation' },
	updates: { en: 'Updates', es: 'Actualizaciones', fr: 'Mises à jour', de: 'Updates', pt: 'Atualizações', it: 'Aggiornamenti', nl: 'Updates', pl: 'Aktualizacje', ru: 'Обновления', tr: 'Güncellemeler', ar: 'التحديثات', ja: '更新', ko: '업데이트', zh: '更新', hi: 'अपडेट', id: 'Pembaruan', th: 'อัปเดต', vi: 'Cập nhật', uk: 'Оновлення', cs: 'Aktualizace', ro: 'Actualizări', sv: 'Uppdateringar' },
	faq: { en: 'FAQ', es: 'FAQ', fr: 'FAQ', de: 'FAQ', pt: 'FAQ', it: 'FAQ', nl: 'FAQ', pl: 'FAQ', ru: 'FAQ', tr: 'SSS', ar: 'الأسئلة', ja: 'FAQ', ko: 'FAQ', zh: '常见问题', hi: 'FAQ', id: 'FAQ', th: 'FAQ', vi: 'FAQ', uk: 'FAQ', cs: 'FAQ', ro: 'FAQ', sv: 'FAQ' },
	support: { en: 'Support', es: 'Soporte', fr: 'Support', de: 'Support', pt: 'Suporte', it: 'Supporto', nl: 'Support', pl: 'Wsparcie', ru: 'Поддержка', tr: 'Destek', ar: 'الدعم', ja: 'サポート', ko: '지원', zh: '支持', hi: 'सहायता', id: 'Dukungan', th: 'สนับสนุน', vi: 'Hỗ trợ', uk: 'Підтримка', cs: 'Podpora', ro: 'Suport', sv: 'Support' },
	undetected: { en: 'Undetected Cheats', es: 'Trucos indetectables', fr: 'Triches indétectables', de: 'Undetected Cheats', pt: 'Cheats indetectáveis', it: 'Cheat indetectable', nl: 'Undetected Cheats', pl: 'Cheaty undetected', ru: 'Undetected читы', tr: 'Undetected hileler', ar: 'غش undetected', ja: 'Undetectedチート', ko: 'Undetected 치트', zh: 'Undetected作弊', hi: 'Undetected cheats', id: 'Cheat undetected', th: 'Cheats undetected', vi: 'Cheat undetected', uk: 'Undetected чіти', cs: 'Undetected cheaty', ro: 'Cheats undetected', sv: 'Undetected cheats' },
	wallhack: { en: 'Naraka Wallhack', es: 'Naraka Wallhack', fr: 'Naraka Wallhack', de: 'Naraka Wallhack', pt: 'Naraka Wallhack', it: 'Naraka Wallhack', nl: 'Naraka Wallhack', pl: 'Naraka Wallhack', ru: 'Naraka Wallhack', tr: 'Naraka Wallhack', ar: 'Naraka Wallhack', ja: 'Naraka Wallhack', ko: 'Naraka Wallhack', zh: 'Naraka Wallhack', hi: 'Naraka Wallhack', id: 'Naraka Wallhack', th: 'Naraka Wallhack', vi: 'Naraka Wallhack', uk: 'Naraka Wallhack', cs: 'Naraka Wallhack', ro: 'Naraka Wallhack', sv: 'Naraka Wallhack' },
	radar: { en: 'Radar Hack', es: 'Radar hack', fr: 'Radar hack', de: 'Radar Hack', pt: 'Radar hack', it: 'Radar hack', nl: 'Radar Hack', pl: 'Radar hack', ru: 'Radar hack', tr: 'Radar hack', ar: 'Radar hack', ja: 'Radar Hack', ko: 'Radar Hack', zh: 'Radar Hack', hi: 'Radar Hack', id: 'Radar hack', th: 'Radar Hack', vi: 'Radar hack', uk: 'Radar hack', cs: 'Radar Hack', ro: 'Radar hack', sv: 'Radar Hack' },
	eac: { en: 'NEAC Bypass', es: 'Bypass NEAC', fr: 'Bypass NEAC', de: 'NEAC Bypass', pt: 'Bypass NEAC', it: 'Bypass NEAC', nl: 'NEAC Bypass', pl: 'Bypass NEAC', ru: 'Bypass NEAC', tr: 'NEAC bypass', ar: 'Bypass NEAC', ja: 'NEAC Bypass', ko: 'NEAC Bypass', zh: 'NEAC Bypass', hi: 'NEAC Bypass', id: 'Bypass NEAC', th: 'NEAC Bypass', vi: 'Bypass NEAC', uk: 'Bypass NEAC', cs: 'NEAC Bypass', ro: 'Bypass NEAC', sv: 'NEAC Bypass' },
	'cheats-2026': { en: 'Naraka Cheats 2026', es: 'Trucos Naraka 2026', fr: 'Triches Naraka 2026', de: 'Naraka Cheats 2026', pt: 'Cheats Naraka 2026', it: 'Cheat Naraka 2026', nl: 'Naraka Cheats 2026', pl: 'Cheaty Naraka 2026', ru: 'Читы Naraka 2026', tr: 'Naraka Hileleri 2026', ar: 'غش Naraka 2026', ja: 'Naraka Cheats 2026', ko: 'Naraka Cheats 2026', zh: 'Naraka作弊 2026', hi: 'Naraka Cheats 2026', id: 'Cheat Naraka 2026', th: 'Naraka Cheats 2026', vi: 'Cheat Naraka 2026', uk: 'Чіти Naraka 2026', cs: 'naraka cheaty 2026', ro: 'Cheats Naraka 2026', sv: 'Naraka Cheats 2026' },
	hacks: { en: 'Naraka Cheats', es: 'Trucos Naraka', fr: 'Triches Naraka', de: 'Naraka Cheats', pt: 'Cheats Naraka', it: 'Cheat Naraka', nl: 'Naraka Cheats', pl: 'Cheaty Naraka', ru: 'Читы Naraka', tr: 'Naraka Hileleri', ar: 'غش Naraka', ja: 'Naraka Cheats', ko: 'Naraka Cheats', zh: 'Naraka作弊', hi: 'Naraka Cheats', id: 'Cheat Naraka', th: 'Naraka Cheats', vi: 'Cheat Naraka', uk: 'Чіти Naraka', cs: 'naraka cheaty', ro: 'Cheats Naraka', sv: 'Naraka Cheats' },
	'cheat-download': { en: 'Naraka Cheat Download', es: 'Descarga Naraka Cheats', fr: 'Téléchargement Naraka Cheats', de: 'Naraka Cheat Download', pt: 'Download Naraka Cheats', it: 'Download Naraka Cheats', nl: 'Naraka Cheat Download', pl: 'Pobieranie Naraka Cheats', ru: 'Скачать Naraka Cheats', tr: 'Naraka Hile İndir', ar: 'تحميل Naraka Cheats', ja: 'Naraka Cheat Download', ko: 'Naraka Cheat Download', zh: 'Naraka作弊下载', hi: 'Naraka Cheat Download', id: 'Download Cheat Naraka', th: 'ดาวน์โหลด Naraka Cheats', vi: 'Tải Cheat Naraka', uk: 'Завантаження Naraka Cheats', cs: 'Stáhnout Naraka Cheats', ro: 'Descărcare Naraka Cheats', sv: 'Naraka Cheat Download' },
	'mod-menu': { en: 'Naraka Mod Menu', es: 'Menú mod Naraka', fr: 'Menu mod Naraka', de: 'Naraka Mod-Menü', pt: 'Menu mod Naraka', it: 'Mod menu Naraka', nl: 'Naraka Mod Menu', pl: 'Mod menu Naraka', ru: 'Мод-меню Naraka', tr: 'Naraka Mod Menü', ar: 'قائمة مود Naraka', ja: 'Naraka Mod Menu', ko: 'Naraka 모드 메뉴', zh: 'Naraka修改菜单', hi: 'Naraka Mod Menu', id: 'Menu mod Naraka', th: 'เมนูมอด Naraka', vi: 'Mod menu Naraka', uk: 'Мод-меню Naraka', cs: 'Naraka mod menu', ro: 'Meniu mod Naraka', sv: 'Naraka Mod-meny' },
	'soft-aim': { en: 'Naraka Soft Aim', es: 'Soft aim Naraka', fr: 'Soft aim Naraka', de: 'Naraka Soft Aim', pt: 'Soft aim Naraka', it: 'Soft aim Naraka', nl: 'Naraka Soft Aim', pl: 'Soft aim Naraka', ru: 'Soft aim Naraka', tr: 'Naraka Soft Aim', ar: 'Soft aim Naraka', ja: 'Naraka Soft Aim', ko: 'Naraka Soft Aim', zh: 'Naraka Soft Aim', hi: 'Naraka Soft Aim', id: 'Soft aim Naraka', th: 'Naraka Soft Aim', vi: 'Soft aim Naraka', uk: 'Soft aim Naraka', cs: 'Naraka Soft Aim', ro: 'Soft aim Naraka', sv: 'Naraka Soft Aim' },
	'best-cheats': { en: 'Best Naraka Cheats', es: 'Mejores trucos Naraka', fr: 'Meilleures triches Naraka', de: 'Beste Naraka Cheats', pt: 'Melhores cheats Naraka', it: 'Migliori cheat Naraka', nl: 'Beste Naraka Cheats', pl: 'Najlepsze cheaty Naraka', ru: 'Лучшие читы Naraka', tr: 'En İyi Naraka Hileleri', ar: 'أفضل غش Naraka', ja: '最強Narakaチート', ko: '최고의 Naraka 치트', zh: '最佳Naraka作弊', hi: 'सर्वश्रेष्ठ Naraka Cheats', id: 'Cheat Naraka terbaik', th: 'Cheat Naraka ที่ดีที่สุด', vi: 'Cheat Naraka tốt nhất', uk: 'Найкращі чіти Naraka', cs: 'Nejlepší naraka cheaty', ro: 'Cele mai bune cheats Naraka', sv: 'Bästa Naraka Cheats' },
	'aimbot-hack': { en: 'Naraka Aimbot Hack', es: 'Hack aimbot Naraka', fr: 'Hack aimbot Naraka', de: 'Naraka Aimbot Hack', pt: 'Hack aimbot Naraka', it: 'Hack aimbot Naraka', nl: 'Naraka Aimbot Hack', pl: 'Hack aimbot Naraka', ru: 'Хак aimbot Naraka', tr: 'Naraka Aimbot Hilesi', ar: 'هاك Aimbot Naraka', ja: 'Naraka Aimbot Hack', ko: 'Naraka 에임봇 핵', zh: 'Naraka自瞄外挂', hi: 'Naraka Aimbot Hack', id: 'Hack aimbot Naraka', th: 'Hack Aimbot Naraka', vi: 'Hack aimbot Naraka', uk: 'Хак aimbot Naraka', cs: 'Naraka Aimbot hack', ro: 'Hack aimbot Naraka', sv: 'Naraka Aimbot Hack' },
	'esp-hack': { en: 'Naraka ESP Hack', es: 'Hack ESP Naraka', fr: 'Hack ESP Naraka', de: 'Naraka ESP Hack', pt: 'Hack ESP Naraka', it: 'Hack ESP Naraka', nl: 'Naraka ESP Hack', pl: 'Hack ESP Naraka', ru: 'Хак ESP Naraka', tr: 'Naraka ESP Hilesi', ar: 'هاك ESP Naraka', ja: 'Naraka ESP Hack', ko: 'Naraka ESP 핵', zh: 'Naraka ESP外挂', hi: 'Naraka ESP Hack', id: 'Hack ESP Naraka', th: 'Hack ESP Naraka', vi: 'Hack ESP Naraka', uk: 'Хак ESP Naraka', cs: 'Naraka ESP hack', ro: 'Hack ESP Naraka', sv: 'Naraka ESP Hack' },
	'unlock-all': { en: 'Naraka Unlock All', es: 'Unlock all Naraka', fr: 'Unlock all Naraka', de: 'Naraka Unlock All', pt: 'Unlock all Naraka', it: 'Unlock all Naraka', nl: 'Naraka Unlock All', pl: 'Unlock all Naraka', ru: 'Unlock all Naraka', tr: 'Naraka Unlock All', ar: 'Unlock all Naraka', ja: 'Naraka Unlock All', ko: 'Naraka Unlock All', zh: 'Naraka Unlock All', hi: 'Naraka Unlock All', id: 'Unlock all Naraka', th: 'Naraka Unlock All', vi: 'Unlock all Naraka', uk: 'Unlock all Naraka', cs: 'Naraka Unlock All', ro: 'Unlock all Naraka', sv: 'Naraka Unlock All' },
};

export const CTA2_HREF = {
	'naraka-esp': '/naraka-cheats/',
	'naraka-aimbot': '/naraka-esp/',
	features: '/pricing/',
	pricing: '/setup/',
	setup: '/support/',
	updates: '/naraka-cheats/',
	faq: '/support/',
	support: '/setup/',
	undetected: '/naraka-cheats/',
	wallhack: '/naraka-esp/',
	radar: '/naraka-esp/',
	eac: '/updates/',
	'cheats-2026': '/naraka-cheats/',
	hacks: '/features/',
	'cheat-download': '/setup/',
	'mod-menu': '/features/',
	'soft-aim': '/naraka-aimbot/',
	'best-cheats': '/pricing/',
	'aimbot-hack': '/naraka-aimbot/',
	'esp-hack': '/naraka-esp/',
	'unlock-all': '/features/',
};

export function buildLegal(locale, pageKey, kind) {
	const p = phrases[locale];
	const titles = {
		privacy: { es: 'Política de privacidad', fr: 'Politique de confidentialité', de: 'Datenschutz', pt: 'Política de privacidade', it: 'Informativa privacy', nl: 'Privacybeleid', pl: 'Polityka prywatności', ru: 'Политика конфиденциальности', tr: 'Gizlilik politikası', ar: 'سياسة الخصوصية', ja: 'プライバシーポリシー', ko: '개인정보 처리방침', zh: '隐私政策', hi: 'गोपनीयता नीति', id: 'Kebijakan privasi', th: 'นโยบายความเป็นส่วนตัว', vi: 'Chính sách bảo mật', uk: 'Політика конфіденційності', cs: 'Zásady ochrany soukromí', ro: 'Politica de confidențialitate', sv: 'Integritetspolicy' },
		refund: { es: 'Política de reembolso', fr: 'Politique de remboursement', de: 'Rückerstattung', pt: 'Política de reembolso', it: 'Politica di rimborso', nl: 'Restitutiebeleid', pl: 'Polityka zwrotów', ru: 'Политика возврата', tr: 'İade politikası', ar: 'سياسة الاسترداد', ja: '返金ポリシー', ko: '환불 정책', zh: '退款政策', hi: 'रिफंड नीति', id: 'Kebijakan refund', th: 'นโยบายการคืนเงิน', vi: 'Chính sách hoàn tiền', uk: 'Політика повернення', cs: 'Zásady vrácení peněz', ro: 'Politica de rambursare', sv: 'Återbetalningspolicy' },
		terms: { es: 'Términos de uso', fr: 'Conditions d\'utilisation', de: 'Nutzungsbedingungen', pt: 'Termos de uso', it: 'Termini di utilizzo', nl: 'Gebruiksvoorwaarden', pl: 'Warunki użytkowania', ru: 'Условия использования', tr: 'Kullanım şartları', ar: 'شروط الاستخدام', ja: '利用規約', ko: '이용 약관', zh: '使用条款', hi: 'उपयोग की शर्तें', id: 'Syarat penggunaan', th: 'ข้อกำหนดการใช้งาน', vi: 'Điều khoản sử dụng', uk: 'Умови використання', cs: 'Podmínky použití', ro: 'Termeni de utilizare', sv: 'Användarvillkor' },
	};
	const h1 = titles[kind][locale] ?? (kind === 'privacy' ? 'Privacy Policy' : kind === 'refund' ? 'Refund Policy' : 'Terms of Use');
	const L = LEGAL_I18N[locale];
	const pageCopy = L?.[kind] ?? {};
	const h2 = pageCopy.h2 ?? ['Information we collect', 'How we use data', 'Your rights'];
	return {
		title: clampTitle(stripZadeyoFromMeta(`${h1} | Naraka Cheats`)),
		description: clampDesc(stripZadeyoFromMeta(`${h1} ${L?.descFor ?? 'for Naraka Cheats — ESP wallhack, Aimbot'}, ${p.win}.`)),
		h1,
		intro: p.s1(`${h1} ${L?.introTopic ?? 'for narakacheats.org and Naraka licenses.'}`),
		imageAlt: 'Naraka Cheats',
		galleryTitle: 'Naraka Cheats',
		heroImage: HERO_IMAGES[pageKey],
		ctaPrimary: L?.emailSupport ?? 'Email support',
		ctaSecondary:
			kind === 'privacy'
				? L?.readTerms ?? 'Read terms'
				: L?.readPrivacy ?? 'Read privacy',
		ctaSecondaryHref: kind === 'privacy' ? '/terms/' : '/privacy-policy/',
		sections: [
			section(
				h2[0],
				p.s1(L?.sec1p1 ?? 'Contact email, Zadeyo order references, and basic site security data.'),
				kind === 'privacy'
					? L?.privacy?.sec1p2 ?? 'Payment details are processed by Zadeyo checkout — not stored on narakacheats.org.'
					: p.s2(),
			),
			section(
				h2[1],
				p.s1(L?.privacy?.sec2p1 ?? 'Support responses, order resolution, and legal compliance when required.'),
				kind === 'terms'
					? L?.terms?.sec2p2 ?? 'Using cheats may violate 24 Entertainment terms — you assume all ban risk.'
					: p.s3(),
			),
			section(h2[2], p.legal(), `${L?.emailLabel ?? 'Email:'} support@narakacheats.org`),
		],
	};
}

/** Build all pages for a non-English locale. */
export function buildPagesForLocale(locale) {
	const pages = { home: buildHome(locale) };
	for (const [pageKey, names] of Object.entries(TOPIC_NAMES)) {
		pages[pageKey] = productPage(locale, pageKey, names[locale], CTA2_HREF[pageKey]);
	}
	for (const kind of ['privacy', 'refund', 'terms']) {
		pages[kind] = buildLegal(locale, kind, kind);
	}
	return pages;
}
