import { HERO_IMAGES, clampTitle, clampDesc, section, stripZadeyoFromMeta } from './constants.mjs';
import { phrases } from './phrases.mjs';
import { PAGE_IMAGE_ALTS } from './image-alts.mjs';
import { FOCUS_I18N } from './focus-i18n.mjs';
import { LEGAL_I18N } from './legal-i18n.mjs';

/** Page-specific translated meta for home across locales. */
export const PAGE_META_HOME = {
	es: { title: 'Deadside Cheats 2026 | ESP, Wallhack y Aimbot', desc: 'Trucos Deadside indetectables para Deadside en PC. ESP wallhack, 2D radar y Aimbot con mantenimiento BattlEye. Entrega digital instantánea.', h1: 'cheats indetectables para Deadside', intro: 'Paquete undetected para Deadside en Windows PC: ESP wallhack, radar y Aimbot con mantenimiento BattlEye tras cada parche.', imageAlt: 'Deadside ESP — etiquetas de jugador ESP', gallery: 'Galería Deadside Cheats — ESP, Aimbot y wallhack', cta2: 'Ver funciones', h2a: 'Por qué eligen Deadside Cheats en 2026', h2b: 'ESP wallhack, radar y Aimbot en una licencia', topicA: 'Ideal para leer escuadrones enemigos en BR y PvP raid sessions.', topicB: 'Una licencia en lugar de herramientas separadas.' },
	fr: { title: 'Deadside Cheats 2026 | ESP, Wallhack et Aimbot', desc: 'Triches Deadside indétectables pour Deadside sur PC. ESP wallhack, 2D radar et Aimbot avec maintenance BattlEye. Livraison numérique instantanée.', h1: 'triches indétectables pour Deadside', intro: 'Pack undetected pour Deadside sur PC Windows : ESP wallhack, radar et Aimbot avec maintenance BattlEye après chaque patch.', imageAlt: 'Deadside ESP — tags joueur ESP', gallery: 'Galerie Deadside Cheats — ESP, Aimbot et wallhack', cta2: 'Voir les fonctions', h2a: 'Pourquoi choisir Deadside Cheats en 2026', h2b: 'ESP wallhack, radar et Aimbot en une licence', topicA: 'Parfait pour lire les équipes ennemies en BR et PvP raid sessions.', topicB: 'Une licence au lieu d\'outils séparés.' },
	de: { title: 'Deadside Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected Deadside Cheats für Deadside auf PC. ESP Wallhack, 2D Radar und Aimbot mit BattlEye-Wartung. Sofortige digitale Lieferung.', h1: 'undetected Cheats für Deadside', intro: 'Undetected Windows PC Paket für Deadside: ESP Wallhack, Radar und Aimbot mit BattlEye-Wartung nach jedem Patch.', imageAlt: 'Deadside ESP — Spieler-ESP Tags', gallery: 'Deadside Cheats Galerie — ESP, Aimbot und Wallhack', cta2: 'Features ansehen', h2a: 'Warum Deadside Cheats 2026 führt', h2b: 'ESP Wallhack, Radar und Aimbot in einer Lizenz', topicA: 'Ideal um feindliche Squads in BR und PvP raid sessions zu lesen.', topicB: 'Eine Lizenz statt separater Tools.' },
	pt: { title: 'Deadside Cheats 2026 | ESP, Wallhack e Aimbot', desc: 'Cheats Deadside indetectáveis para Deadside no PC. ESP wallhack, 2D radar e Aimbot com manutenção BattlEye. Entrega digital instantánea.', h1: 'cheats indetectáveis para Deadside', intro: 'Pacote undetected para Deadside no Windows PC: ESP wallhack, radar e Aimbot com manutenção BattlEye após cada patch.', imageAlt: 'Deadside ESP player ESP tags', gallery: 'Galeria Deadside Cheats — ESP, Aimbot e wallhack', cta2: 'Ver recursos', h2a: 'Por que escolher Deadside Cheats em 2026', h2b: 'ESP wallhack, radar e Aimbot numa licença', topicA: 'Ideal para ler equipes inimigos em BR e PvP raid sessions.', topicB: 'Uma licença em vez de ferramentas separadas.' },
	it: { title: 'Deadside Cheats 2026 | ESP, Wallhack e Aimbot', desc: 'Cheat Deadside indetectable per Deadside su PC. ESP wallhack, 2D radar e Aimbot con manutenzione BattlEye. Consegna digitale istantanea.', h1: 'cheat indetectable per Deadside', intro: 'Pacchetto undetected per Deadside su PC Windows: ESP wallhack, radar e Aimbot con manutenzione BattlEye dopo ogni patch.', imageAlt: 'Deadside ESP player ESP tags', gallery: 'Galleria Deadside Cheats — ESP, Aimbot e wallhack', cta2: 'Vedi funzioni', h2a: 'Perché scegliere Deadside Cheats nel 2026', h2b: 'ESP wallhack, radar e Aimbot in una licenza', topicA: 'Ideale per leggere squadre nemiche in BR e PvP raid sessions.', topicB: 'Una licenza invece di tool separati.' },
	nl: { title: 'Deadside Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected deadside cheats voor Deadside op PC. ESP wallhack, 2D radar en Aimbot met BattlEye-onderhoud. Directe digitale levering.', h1: 'undetected cheats voor Deadside', intro: 'Undetected Windows PC pakket voor Deadside: ESP wallhack, radar en Aimbot met BattlEye-onderhoud na elke patch.', imageAlt: 'Deadside ESP player ESP tags', gallery: 'Deadside Cheats galerij — ESP, Aimbot en wallhack', cta2: 'Bekijk functies', h2a: 'Waarom Deadside Cheats in 2026', h2b: 'ESP wallhack, radar en Aimbot in één licentie', topicA: 'Ideaal om vijandelijke squads te lezen in BR en PvP raid sessions.', topicB: 'Eén licentie in plaats van losse tools.' },
	pl: { title: 'Deadside Cheats 2026 | ESP, Wallhack i Aimbot', desc: 'Undetected cheaty Deadside dla Deadside na PC. ESP wallhack, 2D radar i Aimbot z konserwacją BattlEye. Natychmiastowa dostawa cyfrowa.', h1: 'undetected cheaty dla Deadside', intro: 'Pakiet undetected dla Deadside na Windows PC: ESP wallhack, radar i Aimbot z konserwacją BattlEye po każdym patchu.', imageAlt: 'Deadside ESP player ESP tags', gallery: 'Galeria Deadside Cheats — ESP, Aimbot i wallhack', cta2: 'Zobacz funkcje', h2a: 'Dlaczego Deadside Cheats w 2026', h2b: 'ESP wallhack, radar i Aimbot w jednej licencji', topicA: 'Idealny do czytania wrogich squadów w BR i PvP raid sessions.', topicB: 'Jedna licencja zamiast osobnych narzędzi.' },
	ru: { title: 'Deadside Cheats 2026 | ESP, Wallhack и Aimbot', desc: 'Undetected читы Deadside для Deadside на PC. ESP wallhack, 2D radar и Aimbot с обслуживанием BattlEye. Мгновенная цифровая доставка.', h1: 'undetected читы для Deadside', intro: 'Undetected пакет для Deadside на Windows PC: ESP wallhack, radar и Aimbot с обслуживанием BattlEye после патчей.', imageAlt: 'Deadside ESP — теги игроков ESP', gallery: 'Галерея Deadside Cheats — ESP, Aimbot и wallhack', cta2: 'Смотреть функции', h2a: 'Почему выбирают Deadside Cheats в 2026', h2b: 'ESP wallhack, radar и Aimbot в одной лицензии', topicA: 'Идеально для чтения вражеских отрядов в BR и PvP raid sessions.', topicB: 'Одна лицензия вместо отдельных инструментов.' },
	tr: { title: 'Deadside Cheats 2026 | ESP, Wallhack ve Aimbot', desc: 'Deadside için undetected hileler. ESP wallhack, 2D radar ve Aimbot — BattlEye bakımı. Anında dijital teslimat.', h1: 'Deadside için undetected hileler', intro: 'Deadside Windows PC undetected paketi: ESP wallhack, radar ve Aimbot — BattlEye bakımı dahil.', imageAlt: 'Deadside ESP player ESP tags', gallery: 'Deadside Cheats galeri — ESP, Aimbot ve wallhack', cta2: 'Özellikleri gör', h2a: '2026\'da neden Deadside Cheats', h2b: 'ESP wallhack, radar ve Aimbot tek lisans', topicA: 'BR ve PvP raid sessions\'da düşman squad okumak için ideal.', topicB: 'Ayrı araçlar yerine tek lisans.' },
	ar: { title: 'Deadside Cheats 2026 | ESP وWallhack وAimbot', desc: 'غش Deadside undetected لـ Deadside على PC. ESP wallhack و2D radar وAimbot مع صيانة BattlEye. تسليم رقمي فوري.', h1: 'غش غير مكتشف لـ Deadside', intro: 'حزمة undetected لـ Deadside على Windows PC: ESP wallhack ورadar وAimbot مع صيانة BattlEye.', imageAlt: 'Deadside ESP player ESP tags', gallery: 'معرض Deadside Cheats — ESP وAimbot وwallhack', cta2: 'عرض الميزات', h2a: 'لماذا Deadside Cheats في 2026', h2b: 'ESP wallhack ورadar وAimbot في ترخيص واحد', topicA: 'مثالي لقراءة فرق العدو في BR وPvP raid sessions.', topicB: 'ترخيص واحد بدلاً من أدوات منفصلة.' },
	ja: { title: 'Deadside Cheats 2026 | ESP・Wallhack・Aimbot', desc: 'Deadside向けundetectedチート。ESP wallhack、2D radar、Aimbot、BattlEyeメンテナンス。即時デジタル配信。', h1: 'Deadside向けundetectedチート', intro: 'Deadside Windows PC向けundetectedパッケージ：ESP wallhack、radar、Aimbot、BattlEyeメンテナンス付き。', imageAlt: 'deadside cheats player ESP aimbot wallhack', gallery: 'Deadside Cheatsギャラリー — ESP、Aimbot、wallhack', cta2: '機能を見る', h2a: '2026年にDeadside Cheatsを選ぶ理由', h2b: 'ESP wallhack、radar、Aimbotが1ライセンス', topicA: 'BRとPvP raid sessionsで敵スクワッドを読むのに最適。', topicB: '別ツールではなく1ライセンス。' },
	ko: { title: 'Deadside Cheats 2026 | ESP, Wallhack, Aimbot', desc: 'Deadside undetected 치트. ESP wallhack, 2D radar, Aimbot, BattlEye 유지보수. 즉시 디지털 배송.', h1: 'Deadside용 undetected 치트', intro: 'Deadside Windows PC undetected 패키지: ESP wallhack, radar, Aimbot, BattlEye 유지보수 포함.', imageAlt: 'deadside cheats player ESP aimbot wallhack', gallery: 'Deadside Cheats 갤러리 — ESP, Aimbot, wallhack', cta2: '기능 보기', h2a: '2026년 Deadside Cheats를 선택하는 이유', h2b: 'ESP wallhack, radar, Aimbot 단일 라이선스', topicA: 'BR 및 PvP raid sessions에서 적 분대 읽기에 이상적.', topicB: '별도 도구 대신 단일 라이선스.' },
	zh: { title: 'Deadside Cheats 2026｜ESP、Wallhack 與 Aimbot', desc: '適用於 Deadside PC 的 undetected 外掛。ESP wallhack、2D 雷達與 Aimbot，含 BattlEye 維護。即時數位交付。', h1: '適用於 Deadside 的 undetected 外掛', intro: 'Windows PC 版 Deadside 的 undetected 方案：ESP wallhack、雷達與 Aimbot，每次更新後提供 BattlEye 維護。', imageAlt: 'Deadside ESP — 玩家 ESP 標記', gallery: 'Deadside Cheats 圖庫 — ESP、Aimbot 與 wallhack', cta2: '查看功能', h2a: '2026 年為何選擇 Deadside Cheats', h2b: '單一授權包含 ESP wallhack、雷達與 Aimbot', topicA: '適合在生存對戰與小隊模式中掌握敵方動向。', topicB: '一個授權取代多個工具。' },
	hi: { title: 'Deadside Cheats 2026 | ESP, Wallhack और Aimbot', desc: 'Deadside undetected cheats. ESP wallhack, 2D radar, Aimbot, BattlEye maintenance. Instant digital delivery.', h1: 'Deadside ke liye undetected cheats', intro: 'Deadside Windows PC undetected पैकेज: ESP wallhack, radar, Aimbot, BattlEye maintenance सहित.', imageAlt: 'deadside cheats player ESP aimbot wallhack', gallery: 'Deadside Cheats gallery — ESP, Aimbot, wallhack', cta2: 'फ़ीचर्स देखें', h2a: '2026 में Deadside Cheats क्यों', h2b: 'ESP wallhack, radar, Aimbot एक लाइसेंस में', topicA: 'BR और PvP raid sessions में दुश्मन squad पढ़ने के लिए आदर्श.', topicB: 'अलग टूल्स के बजाय एक लाइसेंस.' },
	id: { title: 'Deadside Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Cheat Deadside undetected untuk Deadside di PC. ESP wallhack, 2D radar, Aimbot, pemeliharaan BattlEye. Pengiriman digital instan.', h1: 'cheat undetected untuk Deadside', intro: 'Paket undetected Deadside di Windows PC: ESP wallhack, radar, Aimbot dengan pemeliharaan BattlEye.', imageAlt: 'Deadside ESP player ESP tags', gallery: 'Galeri Deadside Cheats — ESP, Aimbot, wallhack', cta2: 'Lihat fitur', h2a: 'Mengapa Deadside Cheats di 2026', h2b: 'ESP wallhack, radar, Aimbot dalam satu lisensi', topicA: 'Ideal membaca squad musuh di BR dan PvP raid sessions.', topicB: 'Satu lisensi alih-alih alat terpisah.' },
	th: { title: 'Deadside Cheats 2026 | ESP, Wallhack และ Aimbot', desc: 'Cheat Deadside undetected สำหรับ Deadside บน PC. ESP wallhack, 2D radar, Aimbot, BattlEye maintenance. จัดส่งดิจิทัลทันที.', h1: 'cheat undetected สำหรับ Deadside', intro: 'แพ็ก undetected สำหรับ Deadside บน Windows PC: ESP wallhack, radar, Aimbot พร้อม BattlEye maintenance', imageAlt: 'Deadside ESP player ESP tags', gallery: 'แกลเลอรี Deadside Cheats — ESP, Aimbot, wallhack', cta2: 'ดูฟีเจอร์', h2a: 'ทำไมเลือก Deadside Cheats ปี 2026', h2b: 'ESP wallhack, radar, Aimbot ในใบอนุญาตเดียว', topicA: 'เหมาะสำหรับอ่าน squad ศัตรูใน BR และ PvP raid sessions', topicB: 'ใบอนุญาตเดียวแทนเครื่องมือแยก' },
	vi: { title: 'Deadside Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Cheat Deadside undetected cho Deadside trên PC. ESP wallhack, 2D radar, Aimbot, bảo trì BattlEye. Giao hàng kỹ thuật số tức thì.', h1: 'cheat undetected cho Deadside', intro: 'Gói undetected Deadside trên Windows PC: ESP wallhack, radar, Aimbot với bảo trì BattlEye.', imageAlt: 'Deadside ESP player ESP tags', gallery: 'Thư viện Deadside Cheats — ESP, Aimbot, wallhack', cta2: 'Xem tính năng', h2a: 'Vì sao chọn Deadside Cheats 2026', h2b: 'ESP wallhack, radar, Aimbot trong một giấy phép', topicA: 'Lý tưởng đọc squad địch trong BR và PvP raid sessions.', topicB: 'Một giấy phép thay vì công cụ riêng.' },
	uk: { title: 'Deadside Cheats 2026 | ESP, Wallhack і Aimbot', desc: 'Undetected чіти Deadside для Deadside на PC. ESP wallhack, 2D radar, Aimbot, обслуговування BattlEye. Мгновенная цифровая доставка.', h1: 'undetected чіти для Deadside', intro: 'Undetected пакет для Deadside на Windows PC: ESP wallhack, radar, Aimbot з обслуговуванням BattlEye.', imageAlt: 'Deadside ESP player ESP tags', gallery: 'Галерея Deadside Cheats — ESP, Aimbot, wallhack', cta2: 'Дивитися функції', h2a: 'Чому Deadside Cheats у 2026', h2b: 'ESP wallhack, radar і Aimbot в одній ліцензії', topicA: 'Ідеально для читання ворожих загонів у BR і PvP raid sessions.', topicB: 'Одна ліцензія замість окремих інструментів.' },
	cs: { title: 'Deadside Cheats 2026 | ESP, Wallhack a Aimbot', desc: 'Undetected deadside cheaty pro Deadside na PC. ESP wallhack, 2D radar, Aimbot, údržba BattlEye. Okamžité digitální doručení.', h1: 'undetected cheaty pro Deadside', intro: 'Undetected balíček pro Deadside na Windows PC: ESP wallhack, radar, Aimbot s údržbou BattlEye.', imageAlt: 'Deadside ESP player ESP tags', gallery: 'Galerie Deadside Cheats — ESP, Aimbot, wallhack', cta2: 'Zobrazit funkce', h2a: 'Proč Deadside Cheats v roce 2026', h2b: 'ESP wallhack, radar a Aimbot v jedné licenci', topicA: 'Ideální pro čtení nepřátelských squadů v BR a PvP raid sessions.', topicB: 'Jedna licence místo samostatných nástrojů.' },
	ro: { title: 'Deadside Cheats 2026 | ESP, Wallhack și Aimbot', desc: 'Cheats Deadside undetected pentru Deadside pe PC. ESP wallhack, 2D radar, Aimbot, mentenanță BattlEye. Livrare digitală instantă.', h1: 'cheat-uri undetected pentru Deadside', intro: 'Pachet undetected Deadside pe Windows PC: ESP wallhack, radar, Aimbot cu mentenanță BattlEye.', imageAlt: 'Deadside ESP player ESP tags', gallery: 'Galerie Deadside Cheats — ESP, Aimbot, wallhack', cta2: 'Vezi funcții', h2a: 'De ce Deadside Cheats în 2026', h2b: 'ESP wallhack, radar și Aimbot într-o licență', topicA: 'Ideal pentru citirea squad-urilor inamice în BR și PvP raid sessions.', topicB: 'O licență în loc de instrumente separate.' },
	sv: { title: 'Deadside Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected deadside cheats för Deadside på PC. ESP wallhack, 2D radar, Aimbot, BattlEye-underhåll. Omedelbar digital leverans.', h1: 'undetected cheats för Deadside', intro: 'Undetected paket för Deadside på Windows PC: ESP wallhack, radar, Aimbot med BattlEye-underhåll.', imageAlt: 'Deadside ESP player ESP tags', gallery: 'Deadside Cheats galleri — ESP, Aimbot, wallhack', cta2: 'Se funktioner', h2a: 'Varför Deadside Cheats 2026', h2b: 'ESP wallhack, radar och Aimbot i en licens', topicA: 'Ideal för att läsa fiendesquads i BR och PvP raid sessions.', topicB: 'En licens istället för separata verktyg.' },
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
export const PAGE_META_TAILS = {
	'deadside-esp': { suffix: 'Player Boxes & Wallhack', focus: 'player boxes, loot markers, and wallhack overlays', altKeyword: 'ESP wallhack overlay' },
	'deadside-aimbot': { suffix: 'Soft Aim Controls', focus: 'soft aim, FOV, and per-weapon Aimbot profiles', altKeyword: 'aimbot combat' },
	features: { suffix: 'Full Feature List', focus: 'ESP, soft aim, radar controls', altKeyword: 'cheats package ESP aimbot' },
	pricing: { suffix: 'Monthly & Lifetime', focus: '$35 monthly or $150 lifetime licenses', altKeyword: 'cheats pricing' },
	setup: { suffix: 'PC Setup Guide', focus: 'Windows PC activation and first-launch setup', altKeyword: 'setup PC activation' },
	updates: { suffix: 'Live Status Log', focus: 'BattlEye patch status and rebuild notes', altKeyword: 'updates BattlEye maintenance' },
	faq: { suffix: 'Common Answers', focus: 'ESP, soft aim, delivery, and BattlEye questions', altKeyword: 'FAQ ESP aimbot' },
	support: { suffix: 'Help & Contact', focus: 'order help and license support contact', altKeyword: 'support license help' },
	undetected: { suffix: 'BattlEye Safe Status', focus: 'undetected maintenance after BattlEye patches', altKeyword: 'undetected cheats ESP' },
	wallhack: { suffix: 'ESP Visibility', focus: 'wallhack ESP for players, loot, and distance', altKeyword: 'wallhack ESP visibility' },
	radar: { suffix: '2D Threat Overlay', focus: '2D radar cues for flanks and rotations', altKeyword: '2D radar overlay' },
	battleye: { suffix: 'Patch Maintenance', focus: 'how BattlEye updates are handled for Deadside cheats', altKeyword: 'BattlEye bypass ESP aimbot' },
	'cheats-2026': { suffix: 'Buyer Guide', focus: '2026 deadside cheats checklist before checkout', altKeyword: 'hacks 2026 ESP aimbot' },
	hacks: { suffix: 'ESP Aimbot Guide', focus: 'Deadside Cheats pillar for ESP and Aimbot', altKeyword: 'hacks ESP aimbot' },
	'cheat-download': { suffix: 'Instant Access', focus: 'digital license download after payment', altKeyword: 'cheat download ESP aimbot' },
	'mod-menu': { suffix: 'In-Game Toggles', focus: 'in-client ESP and soft aim toggles', altKeyword: 'mod menu ESP aimbot' },
	'soft-aim': { suffix: 'Smooth Aim Settings', focus: 'smooth soft aim settings for Windows PC', altKeyword: 'soft aim aimbot' },
	'best-cheats': { suffix: 'Buyer Checklist', focus: 'what to compare before buying deadside cheats', altKeyword: 'best cheats ESP aimbot' },
	'aimbot-hack': { suffix: 'Soft Aim Assist', focus: 'undetected Aimbot assist for Deadside', altKeyword: 'aimbot combat' },
	'esp-hack': { suffix: 'Boxes & Loot', focus: 'ESP boxes, loot pins, and distance', altKeyword: 'ESP wallhack' },
	'unlock-all': { suffix: 'What It Means', focus: 'unlock-all searches vs real ESP and Aimbot tools', altKeyword: 'unlock all items ESP aimbot' },
};

/** Localized H1 suffixes (title/subtitle language change on product pages). */
export const SUFFIX_I18N = {
	es: {
		'deadside-esp': 'Cajas de jugador y wallhack',
		'deadside-aimbot': 'Controles soft aim',
		features: 'Lista completa de funciones',
		pricing: 'Mensual y de por vida',
		setup: 'Guía de instalación PC',
		updates: 'Registro de estado',
		faq: 'Preguntas frecuentes',
		support: 'Ayuda y contacto',
		undetected: 'Estado indetectable',
		wallhack: 'Visibilidad ESP',
		radar: 'Radar 2D de amenazas',
		battleye: 'Mantenimiento de parches',
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
		'deadside-esp': 'Boîtes joueur et wallhack',
		'deadside-aimbot': 'Contrôles soft aim',
		features: 'Liste complète des fonctions',
		pricing: 'Mensuel et à vie',
		setup: 'Guide d\'installation PC',
		updates: 'Journal de statut',
		faq: 'Questions fréquentes',
		support: 'Aide et contact',
		undetected: 'Statut indétectable',
		wallhack: 'Visibilité ESP',
		radar: 'Radar 2D des menaces',
		battleye: 'Maintenance des patchs',
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
		'deadside-esp': 'Spielerboxen & Wallhack',
		'deadside-aimbot': 'Soft-Aim Steuerung',
		features: 'Vollständige Feature-Liste',
		pricing: 'Monatlich & Lifetime',
		setup: 'PC Setup-Anleitung',
		updates: 'Wartungsprotokoll',
		faq: 'Häufige Fragen',
		support: 'Hilfe & Kontakt',
		undetected: 'Undetected Status',
		wallhack: 'ESP Sichtbarkeit',
		radar: '2D Bedrohungsradar',
		battleye: 'Patch-Wartung',
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
		'deadside-esp': 'Caixas de jogador e wallhack',
		'deadside-aimbot': 'Controles soft aim',
		features: 'Lista completa de recursos',
		pricing: 'Mensal e vitalício',
		setup: 'Guia de instalação PC',
		updates: 'Registro de estado',
		faq: 'Perguntas frequentes',
		support: 'Ajuda e contato',
		undetected: 'Status indetectável',
		wallhack: 'Visibilidade ESP',
		radar: 'Radar 2D de ameaças',
		battleye: 'Manutenção de patches',
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
		'deadside-esp': 'Box giocatore e wallhack',
		'deadside-aimbot': 'Controlli soft aim',
		features: 'Elenco completo funzioni',
		pricing: 'Mensile e lifetime',
		setup: 'Guida setup PC',
		updates: 'Log manutenzione',
		faq: 'Domande frequenti',
		support: 'Aiuto e contatto',
		undetected: 'Stato indetectable',
		wallhack: 'Visibilità ESP',
		radar: 'Radar 2D minacce',
		battleye: 'Manutenzione patch',
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
		'deadside-esp': 'Боксы игроков и wallhack',
		'deadside-aimbot': 'Управление soft aim',
		features: 'Полный список функций',
		pricing: 'Месяц и lifetime',
		setup: 'Гайд по установке',
		updates: 'Журнал обновлений',
		faq: 'Частые вопросы',
		support: 'Помощь и контакт',
		undetected: 'Статус undetected',
		wallhack: 'Видимость ESP',
		radar: '2D радар угроз',
		battleye: 'Обслуживание патчей',
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
	const meta = PAGE_META_TAILS[pageKey] ?? { suffix: 'Deadside Cheats', focus: 'ESP wallhack, radar, and Aimbot', altKeyword: 'ESP aimbot wallhack' };
	const focus = FOCUS_I18N[locale]?.[pageKey] ?? meta.focus;
	const suffix = SUFFIX_I18N[locale]?.[pageKey] ?? meta.suffix;
	const titleBase = `${topicName} | ${suffix}`;
	return {
		title: clampTitle(stripZadeyoFromMeta(titleBase)),
		description: clampDesc(
			stripZadeyoFromMeta(
				`${topicName} for Deadside survival & squad raids on Windows PC — ${focus}. ${p.delivery}. ${p.undetected}. Official deadside cheats at deadsidecheats.com.`,
			),
		),
		h1: topicName,
		intro: p.s1(`${topicName}.`),
		imageAlt: PAGE_IMAGE_ALTS[pageKey] || `${topicName} — Deadside Cheats screenshot`,
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
	'deadside-esp': { en: 'Deadside ESP', es: 'ESP Deadside', fr: 'ESP Deadside', de: 'Deadside ESP', pt: 'ESP Deadside', it: 'ESP Deadside', nl: 'Deadside ESP', pl: 'ESP Deadside', ru: 'ESP Deadside', tr: 'Deadside ESP', ar: 'ESP Deadside', ja: 'Deadside ESP', ko: 'Deadside ESP', zh: 'Deadside ESP', hi: 'Deadside ESP', id: 'ESP Deadside', th: 'Deadside ESP', vi: 'ESP Deadside', uk: 'ESP Deadside', cs: 'Deadside ESP', ro: 'ESP Deadside', sv: 'Deadside ESP' },
	'deadside-aimbot': { en: 'Deadside Aimbot', es: 'Aimbot Deadside', fr: 'Aimbot Deadside', de: 'Deadside Aimbot', pt: 'Aimbot Deadside', it: 'Aimbot Deadside', nl: 'Deadside Aimbot', pl: 'Aimbot Deadside', ru: 'Aimbot Deadside', tr: 'Deadside Aimbot', ar: 'Aimbot Deadside', ja: 'Deadside Aimbot', ko: 'Deadside Aimbot', zh: 'Deadside Aimbot', hi: 'Deadside Aimbot', id: 'Aimbot Deadside', th: 'Deadside Aimbot', vi: 'Aimbot Deadside', uk: 'Aimbot Deadside', cs: 'Deadside Aimbot', ro: 'Aimbot Deadside', sv: 'Deadside Aimbot' },
	features: { en: 'Features', es: 'Funciones', fr: 'Fonctions', de: 'Features', pt: 'Recursos', it: 'Funzioni', nl: 'Functies', pl: 'Funkcje', ru: 'Функции', tr: 'Özellikler', ar: 'الميزات', ja: '機能', ko: '기능', zh: '功能', hi: 'फ़ीचर्स', id: 'Fitur', th: 'ฟีเจอร์', vi: 'Tính năng', uk: 'Функції', cs: 'Funkce', ro: 'Funcții', sv: 'Funktioner' },
	pricing: { en: 'Pricing', es: 'Precios', fr: 'Tarifs', de: 'Preise', pt: 'Preços', it: 'Prezzi', nl: 'Prijzen', pl: 'Cennik', ru: 'Цены', tr: 'Fiyatlar', ar: 'الأسعار', ja: '料金', ko: '가격', zh: '价格', hi: 'कीमत', id: 'Harga', th: 'ราคา', vi: 'Giá', uk: 'Ціни', cs: 'Ceny', ro: 'Prețuri', sv: 'Priser' },
	setup: { en: 'Setup', es: 'Instalación', fr: 'Installation', de: 'Setup', pt: 'Instalação', it: 'Setup', nl: 'Setup', pl: 'Instalacja', ru: 'Установка', tr: 'Kurulum', ar: 'التثبيت', ja: 'セットアップ', ko: '설치', zh: '安装', hi: 'सेटअप', id: 'Setup', th: 'ติดตั้ง', vi: 'Cài đặt', uk: 'Встановлення', cs: 'Instalace', ro: 'Instalare', sv: 'Installation' },
	updates: { en: 'Updates', es: 'Actualizaciones', fr: 'Mises à jour', de: 'Updates', pt: 'Atualizações', it: 'Aggiornamenti', nl: 'Updates', pl: 'Aktualizacje', ru: 'Обновления', tr: 'Güncellemeler', ar: 'التحديثات', ja: '更新', ko: '업데이트', zh: '更新', hi: 'अपडेट', id: 'Pembaruan', th: 'อัปเดต', vi: 'Cập nhật', uk: 'Оновлення', cs: 'Aktualizace', ro: 'Actualizări', sv: 'Uppdateringar' },
	faq: { en: 'FAQ', es: 'FAQ', fr: 'FAQ', de: 'FAQ', pt: 'FAQ', it: 'FAQ', nl: 'FAQ', pl: 'FAQ', ru: 'FAQ', tr: 'SSS', ar: 'الأسئلة', ja: 'FAQ', ko: 'FAQ', zh: '常见问题', hi: 'FAQ', id: 'FAQ', th: 'FAQ', vi: 'FAQ', uk: 'FAQ', cs: 'FAQ', ro: 'FAQ', sv: 'FAQ' },
	support: { en: 'Support', es: 'Soporte', fr: 'Support', de: 'Support', pt: 'Suporte', it: 'Supporto', nl: 'Support', pl: 'Wsparcie', ru: 'Поддержка', tr: 'Destek', ar: 'الدعم', ja: 'サポート', ko: '지원', zh: '支持', hi: 'सहायता', id: 'Dukungan', th: 'สนับสนุน', vi: 'Hỗ trợ', uk: 'Підтримка', cs: 'Podpora', ro: 'Suport', sv: 'Support' },
	undetected: { en: 'Undetected Cheats', es: 'Trucos indetectables', fr: 'Triches indétectables', de: 'Undetected Cheats', pt: 'Cheats indetectáveis', it: 'Cheat indetectable', nl: 'Undetected Cheats', pl: 'Cheaty undetected', ru: 'Undetected читы', tr: 'Undetected hileler', ar: 'غش undetected', ja: 'Undetectedチート', ko: 'Undetected 치트', zh: 'Undetected作弊', hi: 'Undetected cheats', id: 'Cheat undetected', th: 'Cheats undetected', vi: 'Cheat undetected', uk: 'Undetected чіти', cs: 'Undetected cheaty', ro: 'Cheats undetected', sv: 'Undetected cheats' },
	wallhack: { en: 'Deadside Wallhack', es: 'Deadside Wallhack', fr: 'Deadside Wallhack', de: 'Deadside Wallhack', pt: 'Deadside Wallhack', it: 'Deadside Wallhack', nl: 'Deadside Wallhack', pl: 'Deadside Wallhack', ru: 'Deadside Wallhack', tr: 'Deadside Wallhack', ar: 'Deadside Wallhack', ja: 'Deadside Wallhack', ko: 'Deadside Wallhack', zh: 'Deadside Wallhack', hi: 'Deadside Wallhack', id: 'Deadside Wallhack', th: 'Deadside Wallhack', vi: 'Deadside Wallhack', uk: 'Deadside Wallhack', cs: 'Deadside Wallhack', ro: 'Deadside Wallhack', sv: 'Deadside Wallhack' },
	radar: { en: '2D Radar', es: '2D radar', fr: '2D radar', de: '2D Radar', pt: '2D radar', it: '2D radar', nl: '2D Radar', pl: '2D radar', ru: '2D radar', tr: '2D radar', ar: '2D radar', ja: '2D Radar', ko: '2D Radar', zh: '2D Radar', hi: '2D Radar', id: '2D radar', th: '2D Radar', vi: '2D radar', uk: '2D radar', cs: '2D Radar', ro: '2D radar', sv: '2D Radar' },
	battleye: { en: 'BattlEye Bypass', es: 'Bypass BattlEye', fr: 'Bypass BattlEye', de: 'BattlEye Bypass', pt: 'Bypass BattlEye', it: 'Bypass BattlEye', nl: 'BattlEye Bypass', pl: 'Bypass BattlEye', ru: 'Bypass BattlEye', tr: 'BattlEye bypass', ar: 'Bypass BattlEye', ja: 'BattlEye Bypass', ko: 'BattlEye Bypass', zh: 'BattlEye Bypass', hi: 'BattlEye Bypass', id: 'Bypass BattlEye', th: 'BattlEye Bypass', vi: 'Bypass BattlEye', uk: 'Bypass BattlEye', cs: 'BattlEye Bypass', ro: 'Bypass BattlEye', sv: 'BattlEye Bypass' },
	'cheats-2026': { en: 'Deadside Cheats 2026', es: 'Trucos Deadside 2026', fr: 'Triches Deadside 2026', de: 'Deadside Cheats 2026', pt: 'Cheats Deadside 2026', it: 'Cheat Deadside 2026', nl: 'Deadside Cheats 2026', pl: 'Cheaty Deadside 2026', ru: 'Читы Deadside 2026', tr: 'Deadside Hileleri 2026', ar: 'غش Deadside 2026', ja: 'Deadside Cheats 2026', ko: 'Deadside Cheats 2026', zh: 'Deadside作弊 2026', hi: 'Deadside Cheats 2026', id: 'Cheat Deadside 2026', th: 'Deadside Cheats 2026', vi: 'Cheat Deadside 2026', uk: 'Чіти Deadside 2026', cs: 'deadside cheaty 2026', ro: 'Cheats Deadside 2026', sv: 'Deadside Cheats 2026' },
	hacks: { en: 'Deadside Cheats', es: 'Trucos Deadside', fr: 'Triches Deadside', de: 'Deadside Cheats', pt: 'Cheats Deadside', it: 'Cheat Deadside', nl: 'Deadside Cheats', pl: 'Cheaty Deadside', ru: 'Читы Deadside', tr: 'Deadside Hileleri', ar: 'غش Deadside', ja: 'Deadside Cheats', ko: 'Deadside Cheats', zh: 'Deadside作弊', hi: 'Deadside Cheats', id: 'Cheat Deadside', th: 'Deadside Cheats', vi: 'Cheat Deadside', uk: 'Чіти Deadside', cs: 'deadside cheaty', ro: 'Cheats Deadside', sv: 'Deadside Cheats' },
	'cheat-download': { en: 'Deadside Cheat Download', es: 'Descarga Deadside Cheats', fr: 'Téléchargement Deadside Cheats', de: 'Deadside Cheat Download', pt: 'Download Deadside Cheats', it: 'Download Deadside Cheats', nl: 'Deadside Cheat Download', pl: 'Pobieranie Deadside Cheats', ru: 'Скачать Deadside Cheats', tr: 'Deadside Hile İndir', ar: 'تحميل Deadside Cheats', ja: 'Deadside Cheat Download', ko: 'Deadside Cheat Download', zh: 'Deadside作弊下载', hi: 'Deadside Cheat Download', id: 'Download Cheat Deadside', th: 'ดาวน์โหลด Deadside Cheats', vi: 'Tải Cheat Deadside', uk: 'Завантаження Deadside Cheats', cs: 'Stáhnout Deadside Cheats', ro: 'Descărcare Deadside Cheats', sv: 'Deadside Cheat Download' },
	'mod-menu': { en: 'Deadside Mod Menu', es: 'Menú mod Deadside', fr: 'Menu mod Deadside', de: 'Deadside Mod-Menü', pt: 'Menu mod Deadside', it: 'Mod menu Deadside', nl: 'Deadside Mod Menu', pl: 'Mod menu Deadside', ru: 'Мод-меню Deadside', tr: 'Deadside Mod Menü', ar: 'قائمة مود Deadside', ja: 'Deadside Mod Menu', ko: 'Deadside 모드 메뉴', zh: 'Deadside修改菜单', hi: 'Deadside Mod Menu', id: 'Menu mod Deadside', th: 'เมนูมอด Deadside', vi: 'Mod menu Deadside', uk: 'Мод-меню Deadside', cs: 'Deadside mod menu', ro: 'Meniu mod Deadside', sv: 'Deadside Mod-meny' },
	'soft-aim': { en: 'Deadside Soft Aim', es: 'Soft aim Deadside', fr: 'Soft aim Deadside', de: 'Deadside Soft Aim', pt: 'Soft aim Deadside', it: 'Soft aim Deadside', nl: 'Deadside Soft Aim', pl: 'Soft aim Deadside', ru: 'Soft aim Deadside', tr: 'Deadside Soft Aim', ar: 'Soft aim Deadside', ja: 'Deadside Soft Aim', ko: 'Deadside Soft Aim', zh: 'Deadside Soft Aim', hi: 'Deadside Soft Aim', id: 'Soft aim Deadside', th: 'Deadside Soft Aim', vi: 'Soft aim Deadside', uk: 'Soft aim Deadside', cs: 'Deadside Soft Aim', ro: 'Soft aim Deadside', sv: 'Deadside Soft Aim' },
	'best-cheats': { en: 'Best Deadside Cheats', es: 'Mejores trucos Deadside', fr: 'Meilleures triches Deadside', de: 'Beste Deadside Cheats', pt: 'Melhores cheats Deadside', it: 'Migliori cheat Deadside', nl: 'Beste Deadside Cheats', pl: 'Najlepsze cheaty Deadside', ru: 'Лучшие читы Deadside', tr: 'En İyi Deadside Hileleri', ar: 'أفضل غش Deadside', ja: '最強Deadsideチート', ko: '최고의 Deadside 치트', zh: '最佳Deadside作弊', hi: 'सर्वश्रेष्ठ Deadside Cheats', id: 'Cheat Deadside terbaik', th: 'Cheat Deadside ที่ดีที่สุด', vi: 'Cheat Deadside tốt nhất', uk: 'Найкращі чіти Deadside', cs: 'Nejlepší deadside cheaty', ro: 'Cele mai bune cheats Deadside', sv: 'Bästa Deadside Cheats' },
	'aimbot-hack': { en: 'Deadside Aimbot', es: 'Aimbot Deadside', fr: 'Aimbot Deadside', de: 'Deadside Aimbot', pt: 'Aimbot Deadside', it: 'Aimbot Deadside', nl: 'Deadside Aimbot', pl: 'Aimbot Deadside', ru: 'Aimbot Deadside', tr: 'Deadside Aimbot', ar: 'Aimbot Deadside', ja: 'Deadside Aimbot', ko: 'Deadside 에임봇', zh: 'Deadside自瞄', hi: 'Deadside Aimbot', id: 'Aimbot Deadside', th: 'Aimbot Deadside', vi: 'Aimbot Deadside', uk: 'Aimbot Deadside', cs: 'Deadside Aimbot', ro: 'Aimbot Deadside', sv: 'Deadside Aimbot' },
	'esp-hack': { en: 'Deadside ESP', es: 'ESP Deadside', fr: 'ESP Deadside', de: 'Deadside ESP', pt: 'ESP Deadside', it: 'ESP Deadside', nl: 'Deadside ESP', pl: 'ESP Deadside', ru: 'ESP Deadside', tr: 'Deadside ESP', ar: 'ESP Deadside', ja: 'Deadside ESP', ko: 'Deadside ESP', zh: 'Deadside ESP', hi: 'Deadside ESP', id: 'ESP Deadside', th: 'ESP Deadside', vi: 'ESP Deadside', uk: 'ESP Deadside', cs: 'Deadside ESP', ro: 'ESP Deadside', sv: 'Deadside ESP' },
	'unlock-all': { en: 'Deadside Unlock All', es: 'Unlock all Deadside', fr: 'Unlock all Deadside', de: 'Deadside Unlock All', pt: 'Unlock all Deadside', it: 'Unlock all Deadside', nl: 'Deadside Unlock All', pl: 'Unlock all Deadside', ru: 'Unlock all Deadside', tr: 'Deadside Unlock All', ar: 'Unlock all Deadside', ja: 'Deadside Unlock All', ko: 'Deadside Unlock All', zh: 'Deadside Unlock All', hi: 'Deadside Unlock All', id: 'Unlock all Deadside', th: 'Deadside Unlock All', vi: 'Unlock all Deadside', uk: 'Unlock all Deadside', cs: 'Deadside Unlock All', ro: 'Unlock all Deadside', sv: 'Deadside Unlock All' },
};

export const CTA2_HREF = {
	'deadside-esp': '/deadside-cheats/',
	'deadside-aimbot': '/deadside-esp/',
	features: '/pricing/',
	pricing: '/setup/',
	setup: '/support/',
	updates: '/deadside-cheats/',
	faq: '/support/',
	support: '/setup/',
	undetected: '/deadside-cheats/',
	wallhack: '/deadside-esp/',
	radar: '/deadside-esp/',
	battleye: '/updates/',
	'cheats-2026': '/deadside-cheats/',
	hacks: '/features/',
	'cheat-download': '/setup/',
	'mod-menu': '/features/',
	'soft-aim': '/deadside-aimbot/',
	'best-cheats': '/pricing/',
	'aimbot-hack': '/deadside-aimbot/',
	'esp-hack': '/deadside-esp/',
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
		title: clampTitle(stripZadeyoFromMeta(`${h1} | Deadside Cheats`)),
		description: clampDesc(stripZadeyoFromMeta(`${h1} ${L?.descFor ?? 'for Deadside Cheats — ESP wallhack, Aimbot'}, ${p.win}.`)),
		h1,
		intro: p.s1(`${h1} ${L?.introTopic ?? 'for deadsidecheats.com and Deadside licenses.'}`),
		imageAlt: 'Deadside Cheats',
		galleryTitle: 'Deadside Cheats',
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
					? L?.privacy?.sec1p2 ?? 'Payment details are processed by Zadeyo checkout — not stored on deadsidecheats.com.'
					: p.s2(),
			),
			section(
				h2[1],
				p.s1(L?.privacy?.sec2p1 ?? 'Support responses, order resolution, and legal compliance when required.'),
				kind === 'terms'
					? L?.terms?.sec2p2 ?? 'Using cheats may violate Bad Pixel terms — you assume all ban risk.'
					: p.s3(),
			),
			section(h2[2], p.legal(), `${L?.emailLabel ?? 'Email:'} support@deadsidecheats.com`),
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
