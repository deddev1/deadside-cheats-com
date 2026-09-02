/**
 * Full UI overlays for gallery, guides, images, blog, common, homeSeo, and external resources.
 * Used by locale-overlays.mjs during translation.json generation.
 */
import { PAGE_META_HOME } from './pages-i18n.mjs';
import { fixDeadsideCopy } from './deadside-copy-fix.mjs';

const GUIDES = {
	es: {
		hubTitle: 'Centro de guías de juego',
		hubIntro: 'Las guías de producto de Deadside Cheats están arriba. Desplázate para recursos de supervivencia en Deadside.',
		nativeTitle: 'Guías de Deadside Cheats',
		nativeLede: 'Guías principales de ESP, aimbot, radar, instalación y precios en deadsidecheat.com.',
		gameTitle: 'Guías de supervivencia Deadside',
		gameLede: 'Rutas de loot, zonas de compuestos, tácticas de escuadrón y supervivencia en Deadside.',
		readGuide: 'Leer guía',
		published: 'Publicado',
		updated: 'Actualizado',
	},
	fr: {
		hubTitle: 'Hub des guides de jeu',
		hubIntro: 'Les guides produit Deadside Cheats sont en haut. Faites défiler pour les ressources de survie Deadside.',
		nativeTitle: 'Guides Deadside Cheats',
		nativeLede: 'Guides ESP, aimbot, radar, installation et tarifs sur deadsidecheat.com.',
		gameTitle: 'Guides de survie Deadside',
		gameLede: 'Routes de loot, zones de compounds, tactiques d\'escouade et survie sur Deadside.',
		readGuide: 'Lire le guide',
		published: 'Publié',
		updated: 'Mis à jour',
	},
	de: {
		hubTitle: 'Spiel-Guide-Hub',
		hubIntro: 'Deadside Cheats Produktguides stehen oben. Nach unten scrollen für Deadside-Survival-Ressourcen.',
		nativeTitle: 'Deadside Cheats Guides',
		nativeLede: 'ESP-, Aimbot-, Radar-, Setup- und Preisguides auf deadsidecheat.com.',
		gameTitle: 'Deadside Survival-Guides',
		gameLede: 'Loot-Routen, Compound-Zonen, Squad-Taktiken und Survival auf Deadside.',
		readGuide: 'Guide lesen',
		published: 'Veröffentlicht',
		updated: 'Aktualisiert',
	},
	pt: {
		hubTitle: 'Hub de guias do jogo',
		hubIntro: 'Guias de produto Deadside Cheats no topo. Role para recursos de sobrevivência em Deadside.',
		nativeTitle: 'Guias Deadside Cheats',
		nativeLede: 'Guias de ESP, aimbot, radar, instalação e preços em deadsidecheat.com.',
		gameTitle: 'Guias de sobrevivência Deadside',
		gameLede: 'Rotas de loot, zonas de compounds, táticas de esquadrão e sobrevivência em Deadside.',
		readGuide: 'Ler guia',
		published: 'Publicado',
		updated: 'Atualizado',
	},
	it: {
		hubTitle: 'Hub guide di gioco',
		hubIntro: 'Le guide prodotto Deadside Cheats sono in alto. Scorri per risorse di sopravvivenza Deadside.',
		nativeTitle: 'Guide Deadside Cheats',
		nativeLede: 'Guide ESP, aimbot, radar, setup e prezzi su deadsidecheat.com.',
		gameTitle: 'Guide di sopravvivenza Deadside',
		gameLede: 'Rotte loot, zone compound, tattiche squadra e sopravvivenza su Deadside.',
		readGuide: 'Leggi guida',
		published: 'Pubblicato',
		updated: 'Aggiornato',
	},
	nl: {
		hubTitle: 'Spelgidsen-hub',
		hubIntro: 'Deadside Cheats productgidsen staan bovenaan. Scroll voor Deadside survival-bronnen.',
		nativeTitle: 'Deadside Cheats gidsen',
		nativeLede: 'ESP-, aimbot-, radar-, setup- en prijsgidsen op deadsidecheat.com.',
		gameTitle: 'Deadside survival-gidsen',
		gameLede: 'Loot-routes, compound-zones, squad-tactieken en survival op Deadside.',
		readGuide: 'Gids lezen',
		published: 'Gepubliceerd',
		updated: 'Bijgewerkt',
	},
	pl: {
		hubTitle: 'Hub przewodników gry',
		hubIntro: 'Przewodniki produktu Deadside Cheats są u góry. Przewiń po zasoby survivalowe Deadside.',
		nativeTitle: 'Przewodniki Deadside Cheats',
		nativeLede: 'Przewodniki ESP, aimbot, radar, instalacja i ceny na deadsidecheat.com.',
		gameTitle: 'Przewodniki survivalowe Deadside',
		gameLede: 'Trasy lootu, strefy compounds, taktyka drużynowa i survival w Deadside.',
		readGuide: 'Czytaj przewodnik',
		published: 'Opublikowano',
		updated: 'Zaktualizowano',
	},
	ru: {
		hubTitle: 'Хаб игровых гайдов',
		hubIntro: 'Гайды Deadside Cheats вверху. Прокрутите вниз за ресурсами по выживанию в Deadside.',
		nativeTitle: 'Гайды Deadside Cheats',
		nativeLede: 'Гайды ESP, aimbot, radar, установка и цены на deadsidecheat.com.',
		gameTitle: 'Гайды по выживанию Deadside',
		gameLede: 'Маршруты лута, зоны compounds, тактика отряда и выживание в Deadside.',
		readGuide: 'Читать гайд',
		published: 'Опубликовано',
		updated: 'Обновлено',
	},
	tr: {
		hubTitle: 'Oyun rehberleri merkezi',
		hubIntro: 'Deadside Cheats ürün rehberleri üstte. Deadside hayatta kalma kaynakları için aşağı kaydırın.',
		nativeTitle: 'Deadside Cheats rehberleri',
		nativeLede: 'ESP, aimbot, radar, kurulum ve fiyat rehberleri deadsidecheat.com adresinde.',
		gameTitle: 'Deadside hayatta kalma rehberleri',
		gameLede: 'Loot rotaları, compound bölgeleri, squad taktikleri ve Deadside survival.',
		readGuide: 'Rehberi oku',
		published: 'Yayınlandı',
		updated: 'Güncellendi',
	},
	ar: {
		hubTitle: 'مركز أدلة اللعبة',
		hubIntro: 'أدلة منتج Deadside Cheats في الأعلى. مرّر لأسفل لموارد البقاء في Deadside.',
		nativeTitle: 'أدلة Deadside Cheats',
		nativeLede: 'أدلة ESP وaimbot وradar والإعداد والأسعار على deadsidecheat.com.',
		gameTitle: 'أدلة البقاء في Deadside',
		gameLede: 'مسارات الغنائم ومناطق المخيمات وتكتيكات الفرق والبقاء في Deadside.',
		readGuide: 'اقرأ الدليل',
		published: 'نُشر',
		updated: 'تم التحديث',
	},
	ja: {
		hubTitle: 'ゲームガイドハブ',
		hubIntro: 'Deadside Cheats製品ガイドは上部にあります。Deadsideサバイバル資料は下にスクロール。',
		nativeTitle: 'Deadside Cheatsガイド',
		nativeLede: 'ESP、aimbot、radar、セットアップ、料金ガイドはdeadsidecheat.com。',
		gameTitle: 'Deadsideサバイバルガイド',
		gameLede: 'ルート、compoundゾーン、スクワッド戦術、Deadsideサバイバル。',
		readGuide: 'ガイドを読む',
		published: '公開',
		updated: '更新',
	},
	ko: {
		hubTitle: '게임 가이드 허브',
		hubIntro: 'Deadside Cheats 제품 가이드는 상단에 있습니다. Deadside 생존 자료는 아래로 스크롤하세요.',
		nativeTitle: 'Deadside Cheats 가이드',
		nativeLede: 'ESP, aimbot, radar, 설치, 가격 가이드는 deadsidecheat.com.',
		gameTitle: 'Deadside 생존 가이드',
		gameLede: '루트 경로, compound 구역, 스쿼드 전술, Deadside 생존.',
		readGuide: '가이드 읽기',
		published: '게시됨',
		updated: '업데이트됨',
	},
	zh: {
		hubTitle: '游戏指南中心',
		hubIntro: 'Deadside Cheats产品指南在上方。向下滚动查看Deadside生存资源。',
		nativeTitle: 'Deadside Cheats指南',
		nativeLede: 'ESP、自瞄、雷达、安装与价格指南见deadsidecheat.com。',
		gameTitle: 'Deadside生存指南',
		gameLede: '物资路线、营地区域、小队战术与Deadside生存玩法。',
		readGuide: '阅读指南',
		published: '发布',
		updated: '更新',
	},
	hi: {
		hubTitle: 'गेम गाइड हब',
		hubIntro: 'Deadside Cheats उत्पाद गाइड ऊपर हैं। Deadside survival संसाधनों के लिए नीचे स्क्रॉल करें।',
		nativeTitle: 'Deadside Cheats गाइड',
		nativeLede: 'ESP, aimbot, radar, सेटअप और कीमत गाइड deadsidecheat.com पर।',
		gameTitle: 'Deadside survival गाइड',
		gameLede: 'लूट रूट, compound ज़ोन, squad रणनीति और Deadside survival।',
		readGuide: 'गाइड पढ़ें',
		published: 'प्रकाशित',
		updated: 'अपडेट',
	},
	id: {
		hubTitle: 'Hub panduan game',
		hubIntro: 'Panduan produk Deadside Cheats ada di atas. Gulir untuk sumber survival Deadside.',
		nativeTitle: 'Panduan Deadside Cheats',
		nativeLede: 'Panduan ESP, aimbot, radar, setup, dan harga di deadsidecheat.com.',
		gameTitle: 'Panduan survival Deadside',
		gameLede: 'Rute loot, zona compound, taktik squad, dan survival Deadside.',
		readGuide: 'Baca panduan',
		published: 'Diterbitkan',
		updated: 'Diperbarui',
	},
	th: {
		hubTitle: 'ศูนย์คู่มือเกม',
		hubIntro: 'คู่มือผลิตภัณฑ์ Deadside Cheats อยู่ด้านบน เลื่อนลงเพื่อทรัพยากร survival ของ Deadside',
		nativeTitle: 'คู่มือ Deadside Cheats',
		nativeLede: 'คู่มือ ESP, aimbot, radar, การติดตั้ง และราคาที่ deadsidecheat.com',
		gameTitle: 'คู่มือ survival Deadside',
		gameLede: 'เส้นทาง loot, โซน compound, กลยุทธ์ squad และการเอาชีวิตรอดใน Deadside',
		readGuide: 'อ่านคู่มือ',
		published: 'เผยแพร่',
		updated: 'อัปเดต',
	},
	vi: {
		hubTitle: 'Trung tâm hướng dẫn game',
		hubIntro: 'Hướng dẫn sản phẩm Deadside Cheats ở trên. Cuộn xuống cho tài nguyên survival Deadside.',
		nativeTitle: 'Hướng dẫn Deadside Cheats',
		nativeLede: 'Hướng dẫn ESP, aimbot, radar, cài đặt và giá tại deadsidecheat.com.',
		gameTitle: 'Hướng dẫn survival Deadside',
		gameLede: 'Tuyến loot, khu compound, chiế thuật squad và survival Deadside.',
		readGuide: 'Đọc hướng dẫn',
		published: 'Đã đăng',
		updated: 'Đã cập nhật',
	},
	uk: {
		hubTitle: 'Хаб ігрових гайдів',
		hubIntro: 'Гайди продукту Deadside Cheats зверху. Прокрутіть для ресурсів виживання Deadside.',
		nativeTitle: 'Гайди Deadside Cheats',
		nativeLede: 'Гайди ESP, aimbot, radar, встановлення та ціни на deadsidecheat.com.',
		gameTitle: 'Гайди виживання Deadside',
		gameLede: 'Маршрути луту, зони compounds, тактика загону та виживання в Deadside.',
		readGuide: 'Читати гайд',
		published: 'Опубліковано',
		updated: 'Оновлено',
	},
	cs: {
		hubTitle: 'Hub herních průvodců',
		hubIntro: 'Produktové průvodce Deadside Cheats jsou nahoře. Sjeďte pro survival zdroje Deadside.',
		nativeTitle: 'Průvodci Deadside Cheats',
		nativeLede: 'Průvodci ESP, aimbot, radar, instalace a ceny na deadsidecheat.com.',
		gameTitle: 'Survival průvodci Deadside',
		gameLede: 'Loot trasy, compound zóny, squad taktika a survival v Deadside.',
		readGuide: 'Číst průvodce',
		published: 'Publikováno',
		updated: 'Aktualizováno',
	},
	ro: {
		hubTitle: 'Hub ghiduri joc',
		hubIntro: 'Ghidurile produs Deadside Cheats sunt sus. Derulați pentru resurse survival Deadside.',
		nativeTitle: 'Ghiduri Deadside Cheats',
		nativeLede: 'Ghiduri ESP, aimbot, radar, instalare și prețuri pe deadsidecheat.com.',
		gameTitle: 'Ghiduri survival Deadside',
		gameLede: 'Rute loot, zone compound, tactici squad și survival în Deadside.',
		readGuide: 'Citește ghidul',
		published: 'Publicat',
		updated: 'Actualizat',
	},
	sv: {
		hubTitle: 'Spelguide-nav',
		hubIntro: 'Deadside Cheats produktguider finns högst upp. Scrolla för Deadside survival-resurser.',
		nativeTitle: 'Deadside Cheats guider',
		nativeLede: 'ESP-, aimbot-, radar-, setup- och prisguider på deadsidecheat.com.',
		gameTitle: 'Deadside survival-guider',
		gameLede: 'Loot-rutter, compound-zoner, squad-taktik och survival i Deadside.',
		readGuide: 'Läs guide',
		published: 'Publicerad',
		updated: 'Uppdaterad',
	},
};

const COMMON = {
	es: { dismiss: 'Cerrar', gallery: 'Galería', share: 'Compartir', shareX: 'Compartir en X', shareReddit: 'Compartir en Reddit', shareFacebook: 'Compartir en Facebook', refundPolicy: 'Política de reembolso', blog: 'Blog', support: 'Soporte', privacy: 'Privacidad', terms: 'Términos', featured: 'Destacado', breadcrumb: 'Migas de pan' },
	fr: { dismiss: 'Fermer', gallery: 'Galerie', share: 'Partager', shareX: 'Partager sur X', shareReddit: 'Partager sur Reddit', shareFacebook: 'Partager sur Facebook', refundPolicy: 'Politique de remboursement', blog: 'Blog', support: 'Support', privacy: 'Confidentialité', terms: 'Conditions', featured: 'À la une', breadcrumb: "Fil d'Ariane" },
	de: { dismiss: 'Schließen', gallery: 'Galerie', share: 'Teilen', shareX: 'Auf X teilen', shareReddit: 'Auf Reddit teilen', shareFacebook: 'Auf Facebook teilen', refundPolicy: 'Rückerstattungsrichtlinie', blog: 'Blog', support: 'Support', privacy: 'Datenschutz', terms: 'AGB', featured: 'Empfohlen', breadcrumb: 'Brotkrumen' },
	pt: { dismiss: 'Fechar', gallery: 'Galeria', share: 'Compartilhar', shareX: 'Compartilhar no X', shareReddit: 'Compartilhar no Reddit', shareFacebook: 'Compartilhar no Facebook', refundPolicy: 'Política de reembolso', blog: 'Blog', support: 'Suporte', privacy: 'Privacidade', terms: 'Termos', featured: 'Destaque', breadcrumb: 'Navegação' },
	it: { dismiss: 'Chiudi', gallery: 'Galleria', share: 'Condividi', shareX: 'Condividi su X', shareReddit: 'Condividi su Reddit', shareFacebook: 'Condividi su Facebook', refundPolicy: 'Politica rimborsi', blog: 'Blog', support: 'Supporto', privacy: 'Privacy', terms: 'Termini', featured: 'In evidenza', breadcrumb: 'Breadcrumb' },
	nl: { dismiss: 'Sluiten', gallery: 'Galerij', share: 'Delen', shareX: 'Delen op X', shareReddit: 'Delen op Reddit', shareFacebook: 'Delen op Facebook', refundPolicy: 'Restitutiebeleid', blog: 'Blog', support: 'Support', privacy: 'Privacy', terms: 'Voorwaarden', featured: 'Uitgelicht', breadcrumb: 'Broodkruimels' },
	pl: { dismiss: 'Zamknij', gallery: 'Galeria', share: 'Udostępnij', shareX: 'Udostępnij na X', shareReddit: 'Udostępnij na Reddit', shareFacebook: 'Udostępnij na Facebook', refundPolicy: 'Polityka zwrotów', blog: 'Blog', support: 'Wsparcie', privacy: 'Prywatność', terms: 'Regulamin', featured: 'Polecane', breadcrumb: 'Nawigacja' },
	ru: { dismiss: 'Закрыть', gallery: 'Галерея', share: 'Поделиться', shareX: 'Поделиться в X', shareReddit: 'Поделиться в Reddit', shareFacebook: 'Поделиться в Facebook', refundPolicy: 'Политика возврата', blog: 'Блог', support: 'Поддержка', privacy: 'Конфиденциальность', terms: 'Условия', featured: 'Избранное', breadcrumb: 'Навигация' },
	tr: { dismiss: 'Kapat', gallery: 'Galeri', share: 'Paylaş', shareX: 'X\'te paylaş', shareReddit: 'Reddit\'te paylaş', shareFacebook: 'Facebook\'ta paylaş', refundPolicy: 'İade politikası', blog: 'Blog', support: 'Destek', privacy: 'Gizlilik', terms: 'Şartlar', featured: 'Öne çıkan', breadcrumb: 'Gezinti' },
	ar: { dismiss: 'إغلاق', gallery: 'المعرض', share: 'مشاركة', shareX: 'مشاركة على X', shareReddit: 'مشاركة على Reddit', shareFacebook: 'مشاركة على Facebook', refundPolicy: 'سياسة الاسترداد', blog: 'المدونة', support: 'الدعم', privacy: 'الخصوصية', terms: 'الشروط', featured: 'مميز', breadcrumb: 'مسار التنقل' },
	ja: { dismiss: '閉じる', gallery: 'ギャラリー', share: '共有', shareX: 'Xで共有', shareReddit: 'Redditで共有', shareFacebook: 'Facebookで共有', refundPolicy: '返金ポリシー', blog: 'ブログ', support: 'サポート', privacy: 'プライバシー', terms: '利用規約', featured: '注目', breadcrumb: 'パンくず' },
	ko: { dismiss: '닫기', gallery: '갤러리', share: '공유', shareX: 'X에 공유', shareReddit: 'Reddit에 공유', shareFacebook: 'Facebook에 공유', refundPolicy: '환불 정책', blog: '블로그', support: '지원', privacy: '개인정보', terms: '약관', featured: '추천', breadcrumb: '탐색 경로' },
	zh: { dismiss: '關閉', gallery: '圖庫', share: '分享', shareX: '分享到 X', shareReddit: '分享到 Reddit', shareFacebook: '分享到 Facebook', refundPolicy: '退款政策', blog: '部落格', support: '支援', privacy: '隱私權', terms: '條款', featured: '精選', breadcrumb: '導覽路徑' },
	hi: { dismiss: 'बंद करें', gallery: 'गैलरी', share: 'साझा करें', shareX: 'X पर साझा करें', shareReddit: 'Reddit पर साझा करें', shareFacebook: 'Facebook पर साझा करें', refundPolicy: 'रिफंड नीति', blog: 'ब्लॉग', support: 'सहायता', privacy: 'गोपनीयता', terms: 'नियम', featured: 'विशेष', breadcrumb: 'नेविगेशन' },
	id: { dismiss: 'Tutup', gallery: 'Galeri', share: 'Bagikan', shareX: 'Bagikan ke X', shareReddit: 'Bagikan ke Reddit', shareFacebook: 'Bagikan ke Facebook', refundPolicy: 'Kebijakan refund', blog: 'Blog', support: 'Dukungan', privacy: 'Privasi', terms: 'Ketentuan', featured: 'Unggulan', breadcrumb: 'Navigasi' },
	th: { dismiss: 'ปิด', gallery: 'แกลเลอรี', share: 'แชร์', shareX: 'แชร์บน X', shareReddit: 'แชร์บน Reddit', shareFacebook: 'แชร์บน Facebook', refundPolicy: 'นโยบายคืนเงิน', blog: 'บล็อก', support: 'ฝ่ายสนับสนุน', privacy: 'ความเป็นส่วนตัว', terms: 'ข้อกำหนด', featured: 'แนะนำ', breadcrumb: 'เส้นทาง' },
	vi: { dismiss: 'Đóng', gallery: 'Thư viện', share: 'Chia sẻ', shareX: 'Chia sẻ lên X', shareReddit: 'Chia sẻ lên Reddit', shareFacebook: 'Chia sẻ lên Facebook', refundPolicy: 'Chính sách hoàn tiền', blog: 'Blog', support: 'Hỗ trợ', privacy: 'Quyền riêng tư', terms: 'Điều khoản', featured: 'Nổi bật', breadcrumb: 'Điều hướng' },
	uk: { dismiss: 'Закрити', gallery: 'Галерея', share: 'Поділитися', shareX: 'Поділитися в X', shareReddit: 'Поділитися в Reddit', shareFacebook: 'Поділитися в Facebook', refundPolicy: 'Політика повернення', blog: 'Блог', support: 'Підтримка', privacy: 'Конфіденційність', terms: 'Умови', featured: 'Обране', breadcrumb: 'Навігація' },
	cs: { dismiss: 'Zavřít', gallery: 'Galerie', share: 'Sdílet', shareX: 'Sdílet na X', shareReddit: 'Sdílet na Reddit', shareFacebook: 'Sdílet na Facebook', refundPolicy: 'Zásady vrácení', blog: 'Blog', support: 'Podpora', privacy: 'Soukromí', terms: 'Podmínky', featured: 'Doporučené', breadcrumb: 'Navigace' },
	ro: { dismiss: 'Închide', gallery: 'Galerie', share: 'Distribuie', shareX: 'Distribuie pe X', shareReddit: 'Distribuie pe Reddit', shareFacebook: 'Distribuie pe Facebook', refundPolicy: 'Politica de rambursare', blog: 'Blog', support: 'Suport', privacy: 'Confidențialitate', terms: 'Termeni', featured: 'Recomandat', breadcrumb: 'Navigare' },
	sv: { dismiss: 'Stäng', gallery: 'Galleri', share: 'Dela', shareX: 'Dela på X', shareReddit: 'Dela på Reddit', shareFacebook: 'Dela på Facebook', refundPolicy: 'Återbetalningspolicy', blog: 'Blogg', support: 'Support', privacy: 'Integritet', terms: 'Villkor', featured: 'Utvalt', breadcrumb: 'Navigering' },
};

function galleryOverlay(locale, n, p) {
	const meta = PAGE_META_HOME[locale];
	const title = meta?.gallery ?? `${p.title} gallery`;
	return {
		eyebrow: p.title,
		title,
		subtitle: fixDeadsideCopy(`${p.title} visuals — ESP, wallhack, aimbot, and radar for Deadside on PC.`),
		lead: fixDeadsideCopy(`${p.title} helps you spot enemy players, loot, and compound zones with ESP, aimbot, and radar in one license.`),
		highlightEspTitle: `${p.title} ESP`,
		highlightEspCopy: fixDeadsideCopy(`See enemy players through walls with ${p.title} ESP and wallhack overlays.`),
		highlightRadarTitle: `${p.title} radar`,
		highlightRadarCopy: fixDeadsideCopy(`Track nearby threats with ${p.title} radar before you push or rotate.`),
		highlightAimbotTitle: `${p.title} aimbot`,
		highlightAimbotCopy: fixDeadsideCopy(`Use soft aim and aimbot controls tuned for Deadside matches on Windows PC.`),
		updatesLabel: `${p.title} ${n.updates}`,
		updatesShort: n.updates,
	};
}

function imagesOverlay(locale, p) {
	const meta = PAGE_META_HOME[locale];
	return {
		hero: meta?.imageAlt ?? `${p.title} hero — ESP and aimbot overlay in Deadside`,
		espWallhack: fixDeadsideCopy('Wallhack outlines showing enemy players through walls'),
		aimbotCombat: fixDeadsideCopy('Soft aim assist overlay during a Deadside match'),
		squadFight: fixDeadsideCopy(`${p.title} combat overlay during a squad fight`),
		playerEsp: fixDeadsideCopy('Player ESP boxes and distance readouts in a Deadside match'),
		headerArt: fixDeadsideCopy('Aimbot view and bone priority controls for Deadside'),
		hacksPackage: fixDeadsideCopy('2D radar threat overlay for Deadside'),
		raidFight: fixDeadsideCopy('Aimbot assist during a Deadside firefight'),
		battleRoyale: fixDeadsideCopy(`${p.title} in-session overview for Windows PC`),
		raidMap: fixDeadsideCopy('ESP markers for loot and players in Deadside'),
	};
}

function blogOverlay(locale, p, n) {
	const guides = GUIDES[locale] ?? GUIDES.es;
	return {
		blogTitle: `${p.title} Blog | ${guides.readGuide} & Patch Tips`,
		blogDescription: fixDeadsideCopy(`Deadside guides — survival tips, ESP, aimbot notes, loot routes, and BattlEye update coverage.`),
		blogH1: `${p.title} Intel`,
		blogIntro: fixDeadsideCopy(`Actionable Deadside guides for survival and PvP raids — loot routes, compound tactics, and squad play. Pair these tips with our ${p.title} pages for ESP, soft aim, and radar.`),
		readMore: guides.readGuide,
		published: guides.published,
		updated: guides.updated,
		relatedPosts: fixDeadsideCopy(`Related Deadside guides`),
		allPosts: fixDeadsideCopy('All blog posts'),
		home: `${p.title} home`,
		language: n.language ?? 'Language',
		label: `${p.title} Intel`,
	};
}

function homeSeoOverlay(locale, n, p, c) {
	const g = GUIDES[locale] ?? GUIDES.es;
	const radar = locale === 'de' ? 'Radar' : locale === 'fr' ? 'Radar' : locale === 'es' ? 'Radar' : 'Radar';
	return {
		eyebrow: g.hubTitle.split(' ')[0] ?? 'Guides',
		title: locale === 'es' ? 'Explorar por categoría' : locale === 'fr' ? 'Parcourir par catégorie' : locale === 'de' ? 'Nach Kategorie stöbern' : `${c.relatedPages ?? n.features} — ${n.pricing}`,
		lede: `${n.features}, ${n.updates}, ${n.pricing}, ${n.faq}.`,
		catFeaturesHint: n.features,
		catStatusHint: n.updates,
		catStoreHint: n.pricing,
		catHelpHint: n.faq,
		linkAllFeatures: n.features,
		linkLiveStatus: n.updates,
		linkUndetected: p.statusBadge,
		linkPlans: n.pricing,
		linkReviews: locale === 'en' ? 'Reviews' : n.reviews ?? 'Reviews',
		linkFinalsCheats: p.title,
		linkSetupGuide: n.setup,
		linkRefunds: COMMON[locale]?.refundPolicy ?? 'Refunds',
		faqTitle: locale === 'es' ? 'Antes de comprar' : locale === 'fr' ? 'Avant d\'acheter' : locale === 'de' ? 'Vor dem Kauf' : n.faq,
		faqLede: locale === 'es' ? 'Entrega, estado y qué incluye.' : locale === 'fr' ? 'Livraison, statut et contenu inclus.' : locale === 'de' ? 'Lieferung, Status und Inhalt.' : n.faq,
		allAnswers: n.faq,
		openFullPage: g.readGuide,
		linkEsp: n.esp,
		linkAimbot: n.aimbot,
		linkRadar: radar,
		linkSetup: n.setup,
		linkFaq: n.faq,
		linkSupport: COMMON[locale]?.support ?? 'Support',
		linkBlog: COMMON[locale]?.blog ?? 'Blog',
	};
}

function externalResourcesOverlay(locale) {
	const base = {
		es: GUIDES.es,
		fr: GUIDES.fr,
		de: GUIDES.de,
	};
	const pick = base[locale] ?? GUIDES[locale] ?? GUIDES.es;
	const titles = {
		es: { title: 'Guías oficiales del juego y recursos', steam: 'Deadside en PC', patch: 'Parches y noticias de Deadside', official: 'Sitio oficial de Deadside', wiki: 'Wiki de Deadside (Fandom)', community: 'Comunidad Deadside' },
		fr: { title: 'Guides officiels et ressources', steam: 'Deadside sur PC', patch: 'Notes de patch Deadside', official: 'Site officiel Deadside', wiki: 'Wiki Deadside (Fandom)', community: 'Communauté Deadside' },
		de: { title: 'Offizielle Spiel-Guides & Ressourcen', steam: 'Deadside auf PC', patch: 'Patchnotes Deadside', official: 'Offizielle Deadside-Website', wiki: 'Deadside Wiki (Fandom)', community: 'Deadside Community' },
	};
	const t = titles[locale] ?? titles.es;
	return {
		title: t.title,
		lede: fixDeadsideCopy('Trusted third-party sources for patch notes, player stats, and map info outside our site.'),
		pillsTitle: t.title,
		pillsLabel: t.title,
		steam: { label: t.steam, note: fixDeadsideCopy('Official store page, system requirements, and player reviews.') },
		patch: { label: t.patch, note: fixDeadsideCopy('Read official update posts before you change your loadout.') },
		official: { label: t.official, note: fixDeadsideCopy('Game overview from Bad Pixel.') },
		wiki: { label: t.wiki, note: fixDeadsideCopy('Player stats, maps, and survival mechanics.') },
		community: { label: t.community, note: fixDeadsideCopy('Announcements and community discussions.') },
	};
}

function internalLinksOverlay(locale, n, p, r) {
	const c = COMMON[locale] ?? COMMON.es;
	return {
		relatedLede: fixDeadsideCopy(`Explore more ${p.title} guides mapped to our canonical pages.`),
		topicsTitle: n.features,
		topicsLabel: n.features,
		topicsLede: `${n.esp}, ${n.aimbot}, ${n.pricing}, ${n.setup}, ${n.updates}.`,
		overview: p.title,
		esp: `${n.esp} & wallhack`,
		aimbot: n.aimbot,
		radar: 'Radar',
		features: n.features,
		pricing: n.pricing,
		setup: n.setup,
		status: n.updates,
		faq: n.faq,
		support: c.support,
		blog: c.blog,
		reviews: r.title,
		hacks: n.hacks,
		undetected: p.statusBadge,
	};
}

/** Extended translation.json blocks for one non-EN locale. */
export function buildExtendedUiOverlay(locale, ui) {
	if (locale === 'en') return {};
	const n = ui.nav;
	const p = ui.product;
	const r = ui.reviews;
	const c = ui.common ?? {};
	const com = COMMON[locale] ?? COMMON.es;

	return {
		guides: GUIDES[locale] ?? GUIDES.es,
		gallery: galleryOverlay(locale, n, p),
		images: imagesOverlay(locale, p),
		blog: blogOverlay(locale, p, n),
		homeSeo: homeSeoOverlay(locale, n, p, c),
		externalResources: externalResourcesOverlay(locale),
		internalLinks: internalLinksOverlay(locale, n, p, r),
		common: {
			dismiss: com.dismiss,
			gallery: com.gallery,
			share: com.share,
			shareX: com.shareX,
			shareReddit: com.shareReddit,
			shareFacebook: com.shareFacebook,
			refundPolicy: com.refundPolicy,
			blog: com.blog,
			support: com.support,
			privacy: com.privacy,
			terms: com.terms,
			featured: com.featured,
			breadcrumb: com.breadcrumb,
			inGameLook: com.gallery,
		},
		hero: {
			chipEsp: 'ESP / wallhack',
			chipAim: locale === 'de' ? 'Soft Aim' : locale === 'fr' ? 'Soft aim' : locale === 'es' ? 'Soft aim' : 'Soft aim',
			chipRadar: '2D radar',
			chipUpdates: n.updates,
			priceFrom: locale === 'de' ? 'ab' : locale === 'fr' ? 'à partir de' : locale === 'es' ? 'desde' : locale === 'pt' ? 'a partir de' : locale === 'it' ? 'da' : locale === 'nl' ? 'vanaf' : locale === 'pl' ? 'od' : locale === 'ru' ? 'от' : locale === 'tr' ? 'başlangıç' : locale === 'ar' ? 'من' : locale === 'ja' ? 'から' : locale === 'ko' ? '부터' : locale === 'zh' ? '起' : 'from',
			imageAlt: '{{brand}} — Deadside ESP and aimbot overlay',
		},
		home: {
			demoGalleryCaption: `${p.title} — ESP, aimbot & radar in match`,
			demoGalleryScrollLabel: fixDeadsideCopy(`${p.title} gameplay screenshots`),
			demoGalleryPrev: locale === 'de' ? 'Vorheriger Screenshot' : locale === 'fr' ? 'Capture précédente' : locale === 'es' ? 'Captura anterior' : 'Previous screenshot',
			demoGalleryNext: locale === 'de' ? 'Nächster Screenshot' : locale === 'fr' ? 'Capture suivante' : locale === 'es' ? 'Captura siguiente' : 'Next screenshot',
		},
		media: {
			demoVideoTitle: `${p.title} ESP, ${n.aimbot} demo`,
			playVideo: locale === 'de' ? 'Video abspielen' : locale === 'fr' ? 'Lire la vidéo' : locale === 'es' ? 'Reproducir vídeo' : 'Play video',
		},
		categoryRow: {
			radar: 'Radar',
			wallhack: 'Wallhack',
			blog: com.blog,
		},
		deals: {
			featEsp: 'ESP / wallhack',
			featRadar: '2D radar',
		},
	};
}
