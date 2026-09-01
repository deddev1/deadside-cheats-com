import type { LocaleCode } from './locales';

export type GalleryUi = {
	eyebrow: string;
	title: string;
	subtitle: string;
	lead: string;
	highlights: { title: string; copy: string }[];
	updatesLabel: string;
	updatesShort: string;
};

export const galleryUi: Record<LocaleCode, GalleryUi> = {
	en: {
		eyebrow: 'Deadside Cheats',
		title: 'Deadside Cheats gallery',
		subtitle: 'Simple deadside cheats visuals — ESP, wallhack, aimbot, and radar for Deadside on PC.',
		lead: 'Deadside Cheats helps you spot players, agents, abilities, and bomb sites with ESP, aimbot, and radar in one license.',
		highlights: [
			{ title: 'deadside cheats esp', copy: 'See players through walls with deadside cheats esp and wallhack overlays.' },
			{ title: 'deadside cheats radar', copy: 'Track nearby threats with deadside cheats radar before you push or rotate.' },
			{ title: 'deadside cheats aimbot', copy: 'Use soft aim and aimbot controls tuned for Deadside matches on Windows PC.' },
		],
		updatesLabel: 'deadside cheats updates',
		updatesShort: 'Updates',
	},
	es: {
		eyebrow: 'Deadside Cheats',
		title: 'Galería Deadside',
		subtitle: 'Visuales de Deadside con loadouts, peleas de equipo y combate match — junto a herramientas ESP, radar y Aimbot.',
		lead: 'Deadside Cheats está pensado para el loop competitivo de Deadside: leer el mapa, rastrear escuadrones enemigos, lootear y ganar rondas.',
		highlights: [
			{ title: 'ESP de players y escuadrones', copy: 'Detecta players enemigos y contornos de equipo en mapas y extract routes para elegir peleas con mejor información.' },
			{ title: 'Marcadores de loot y cofres', copy: 'Resalta loadouts, cofres y loot de alto nivel sin saturar la pantalla en plena partida.' },
			{ title: 'Controles Aimbot Deadside', copy: 'Ajusta suavidad, prioridad de objetivo y teclas para AR, SMG y francotirador antes de comprar.' },
		],
		updatesLabel: 'Actualizaciones Deadside Cheats',
		updatesShort: 'Updates',
	},
	fr: {
		eyebrow: 'Deadside Cheats',
		title: 'Galerie Deadside',
		subtitle: 'Visuels Deadside — loadouts, combats d\'équipe et match — avec ESP, radar et Aimbot.',
		lead: 'Deadside Cheats suit la boucle competitivo de Deadside : lire la carte, suivre les équipes, loot et gagner les rounds.',
		highlights: [
			{ title: 'ESP players & équipes', copy: 'Repérez les players ennemis sur cartes et extract routes pour choisir vos engagements.' },
			{ title: 'Marqueurs loot & coffres', copy: 'Mettez en évidence loadouts, coffres et loot haut niveau sans encombrer l\'écran.' },
			{ title: 'Réglages Aimbot Deadside', copy: 'Ajustez fluidité, priorité cible et raccourcis pour AR, SMG et sniper.' },
		],
		updatesLabel: 'Mises à jour Deadside Cheats',
		updatesShort: 'Updates',
	},
	de: {
		eyebrow: 'Deadside Cheats',
		title: 'Deadside Galerie',
		subtitle: 'Deadside-Bilder zu Loadouts, Squad-Kämpfen und match — mit ESP, Radar und Aimbot.',
		lead: 'Deadside Cheats passt zur Raid-Schleife von Deadside: Karte lesen, Gegner tracken, looten und matches überleben.',
		highlights: [
			{ title: 'Player- & Squad-ESP', copy: 'Erkenne feindliche Playeren auf Karten und extract routes für bessere Rotationsentscheidungen.' },
			{ title: 'Loot- & Vertragsmarker', copy: 'Hebe Loadout-Drops, Verträge und High-Tier-Loot hervor ohne Screen-Spam.' },
			{ title: 'Deadside Aimbot Steuerung', copy: 'Feinjustiere Glätte, Zielpriorität und Hotkeys für AR, SMG und Sniper.' },
		],
		updatesLabel: 'Deadside Cheats Updates',
		updatesShort: 'Updates',
	},
	pt: {
		eyebrow: 'Deadside Cheats',
		title: 'Galeria Deadside',
		subtitle: 'Visuais de Deadside com loadouts, combates de esquadrão e match — com ESP, radar e Aimbot.',
		lead: 'Deadside Cheats segue o loop BR do Deadside: ler o mapa, rastrear equipes, lootar e sobreviver ao extract.',
		highlights: [
			{ title: 'ESP de players e equipes', copy: 'Detecte players inimigos em mappe e extract routes para escolher lutas com melhor intel.' },
			{ title: 'Marcadores de loot e cofres', copy: 'Destaque loadouts, cofres e loot de alto nível sem poluir a tela.' },
			{ title: 'Controles Aimbot Deadside', copy: 'Ajuste suavidade, prioridade de alvo e atalhos para AR, SMG e sniper.' },
		],
		updatesLabel: 'Atualizações Deadside Cheats',
		updatesShort: 'Updates',
	},
	it: {
		eyebrow: 'Deadside Cheats',
		title: 'Galleria Deadside',
		subtitle: 'Immagini Deadside — loadout, scontri di squadra e match — con ESP, radar e Aimbot.',
		lead: 'Deadside Cheats è pensato per il loop BR di Deadside: leggere la mappa, tracciare squadre nemiche, loot e sopravvivere al extract.',
		highlights: [
			{ title: 'ESP playeri e squadre', copy: 'Individua playeri nemici su mappe e extract routes per scegliere i fight con più intel.' },
			{ title: 'Marker loot e coffreti', copy: 'Evidenzia loadout, coffreti e loot di alto livello senza riempire lo schermo.' },
			{ title: 'Controlli Aimbot Deadside', copy: 'Regola smoothness, priorità bersaglio e hotkey per AR, SMG e sniper.' },
		],
		updatesLabel: 'Aggiornamenti Deadside Cheats',
		updatesShort: 'Updates',
	},
	nl: {
		eyebrow: 'Deadside Cheats',
		title: 'Deadside galerij',
		subtitle: 'Deadside-beelden van loadouts, squadgevechten en match — met ESP, radar en Aimbot.',
		lead: 'Deadside Cheats volgt de match-loop va Deadside: kaart lezen, vijandelijke squads volgen, jagen en compound zones overleven.',
		highlights: [
			{ title: 'Player- & squad-ESP', copy: 'Spot vijandelijke players op mappe en extract routes voor betere rotatiebeslissingen.' },
			{ title: 'Loot- & chestmarkers', copy: 'Markeer loadout-drops, chesten en high-tier loot zonder schermoverlast.' },
			{ title: 'Deadside Aimbot instellingen', copy: 'Stel smoothness, doelprioriteit en hotkeys af voor AR, SMG en sniper.' },
		],
		updatesLabel: 'Deadside Cheats updates',
		updatesShort: 'Updates',
	},
	pl: {
		eyebrow: 'Deadside Cheats',
		title: 'Galeria Deadside',
		subtitle: 'Grafiki Deadside — loadouty, walki drużynowe i match — z ESP, radar i Aimbot.',
		lead: 'Deadside Cheats pasuje do pętli BR Deadside: czytaj mapę, śledź wrogie drużyny, lootuj i przeżyj extract.',
		highlights: [
			{ title: 'ESP players i drużyn', copy: 'Wykrywaj wrogich players na mapy i extract routes dla lepszych decyzji rotacyjnych.' },
			{ title: 'Markery lootu i skrzyń', copy: 'Podświetlaj loadouty, petity i wysokiej klasy loot bez zaśmiecania ekranu.' },
			{ title: 'Sterowanie Aimbot Deadside', copy: 'Dostosuj płynność, priorytet celu i skróty dla AR, SMG i snajperki.' },
		],
		updatesLabel: 'Aktualizacje Deadside Cheats',
		updatesShort: 'Updates',
	},
	ru: {
		eyebrow: 'Deadside Cheats',
		title: 'Галерея Deadside',
		subtitle: 'Визуалы Deadside — лоадауты, бои отрядов и match — с ESP, радаром и Aimbot.',
		lead: 'Deadside Cheats создан для рейд-циклу Deadside: читать карту, отслеживать вражеские отряды, лут и выживать в extract.',
		highlights: [
			{ title: 'ESP игроков и отрядов', copy: 'Замечайте вражеских игроков на карты и extract routes для лучших решений по ротации.' },
			{ title: 'Маркеры лута и сундуков', copy: 'Подсвечивайте loadout, сундуки и высокий лут без перегрузки экрана.' },
			{ title: 'Настройки Aimbot Deadside', copy: 'Настройте плавность, приоритет цели и горячие клавиши для AR, SMG и снайперки.' },
		],
		updatesLabel: 'Обновления Deadside Cheats',
		updatesShort: 'Updates',
	},
	tr: {
		eyebrow: 'Deadside Cheats',
		title: 'Deadside galerisi',
		subtitle: 'Loadout, takım savaşları ve match görselleri — ESP, radar ve Aimbot ile.',
		lead: 'Deadside Cheats, Deadside BR döngüsü için: haritayı oku, düşman takımları izle, loot al ve extract\'da hayatta kal.',
		highlights: [
			{ title: 'Player ve takım ESP', copy: 'haritalar ve extract routes\'da düşman playerleri görerek daha iyi rotasyon kararları alın.' },
			{ title: 'Loot ve kontrat işaretleri', copy: 'Loadout, kontrat ve üst seviye loot\'u ekranı doldurmadan vurgulayın.' },
			{ title: 'Deadside Aimbot kontrolleri', copy: 'AR, SMG ve sniper için yumuşaklık, hedef önceliği ve kısayolları ayarlayın.' },
		],
		updatesLabel: 'Deadside Cheats güncellemeleri',
		updatesShort: 'Updates',
	},
	ar: {
		eyebrow: 'Deadside Cheats',
		title: 'معرض Deadside',
		subtitle: 'صور Deadside — loadouts ومعارك الفرق وsession — مع ESP ورادار وAimbot.',
		lead: 'Deadside Cheats مبني لحلقة BR في Deadside: قراءة الخريطة، تتبع الفرق، جمع اللوت والنجاة في extract.',
		highlights: [
			{ title: 'ESP للمشغلين والفرق', copy: 'اكتشف players المعادين على خرائط وextract routes لاختيار القتالات بذكاء.' },
			{ title: 'علامات اللوت والصناديق', copy: 'أبرز loadouts والصناديق واللوت العالي دون ازدحام الشاشة.' },
			{ title: 'تحكم Aimbot Deadside', copy: 'اضبط النعومة وأولوية الهدف والاختصارات للـ AR وSMG والقناص.' },
		],
		updatesLabel: 'تحديثات Deadside Cheats',
		updatesShort: 'Updates',
	},
	ja: {
		eyebrow: 'Deadside Cheats',
		title: 'Deadside ギャラリー',
		subtitle: 'ロードアウト、スクワッド戦、BRコンバットのDeadsideビジュアル — ESP、レーダー、エイムボット付き。',
		lead: 'Deadside CheatsはDeadsideのBRループ向け：マップを読み、敵スクワッドを追跡し、ルートしてextractを生き延びる。',
		highlights: [
			{ title: 'players＆スクワッドESP', copy: 'マップとextract routesで敵playersを把握し、ローテ判断を改善。' },
			{ title: 'ルート＆チェストマーカー', copy: 'ロードアウト、チェスト、高ティアルートを画面を埋めずに表示。' },
			{ title: 'Deadsideエイムボット設定', copy: 'AR、SMG、スナイパー向けにスムーズさ、ターゲット優先度、ホットキーを調整。' },
		],
		updatesLabel: 'Deadside Cheats更新',
		updatesShort: 'Updates',
	},
	ko: {
		eyebrow: 'Deadside Cheats',
		title: 'Deadside 갤러리',
		subtitle: '로드아웃, 스쿼드 전투, BR 컴뱃 Deadside 비주얼 — ESP, 레이더, 에임봇 포함.',
		lead: 'Deadside Cheats는 Deadside survival loop용: 맵 읽기, 적 스쿼드 추적, 루트 수집, extract 생존.',
		highlights: [
			{ title: 'players & 스쿼드 ESP', copy: '맵과 extract routes에서 적 players를 파악해 로테이션 결정을 개선.' },
			{ title: '루트 & 상자 마커', copy: '로드아웃, 상자, 고티어 루트를 화면을 가리지 않고 강조.' },
			{ title: 'Deadside 에임봇 컨트롤', copy: 'AR, SMG, 스나이퍼용 부드러움, 타겟 우선순위, 단축키 조정.' },
		],
		updatesLabel: 'Deadside Cheats 업데이트',
		updatesShort: 'Updates',
	},
	zh: {
		eyebrow: 'Deadside Cheats',
		title: 'Deadside 图库',
		subtitle: 'Deadside 视觉 — 配装、小队战斗和大逃杀 — 配合 ESP、雷达和自瞄。',
		lead: 'Deadside Cheats 为 Deadside match loop设计：读图、追踪敌方小队、搜刮并在 base survival。',
		highlights: [
			{ title: 'players与小队 ESP', copy: '在 地图和 extract routes 发现敌方players，做出更好的转点决策。' },
			{ title: '物资与宝箱标记', copy: '高亮配装、宝箱和高级物资，不遮挡屏幕。' },
			{ title: 'Deadside 自瞄控制', copy: '调整 AR、SMG 和狙击的平滑度、目标优先级和热键。' },
		],
		updatesLabel: 'Deadside Cheats 更新',
		updatesShort: 'Updates',
	},
	hi: {
		eyebrow: 'Deadside Cheats',
		title: 'Deadside गैलरी',
		subtitle: 'Loadout, team fights और match visuals — ESP, radar और Aimbot के साथ।',
		lead: 'Deadside Cheats Deadside match loop के लिए: map पढ़ें, enemy squads track करें, loot करें और base survival करें।',
		highlights: [
			{ title: 'Player & Squad ESP', copy: 'मैप और extract routes पर enemy players spot करें बेहतर rotation decisions के लिए।' },
			{ title: 'Loot & Chest Markers', copy: 'Loadout drops, chests और high-tier loot highlight करें screen clutter के बिना।' },
			{ title: 'Deadside Aimbot Controls', copy: 'AR, SMG और sniper के लिए smoothness, target priority और hotkeys tune करें।' },
		],
		updatesLabel: 'Deadside Cheats updates',
		updatesShort: 'Updates',
	},
	id: {
		eyebrow: 'Deadside Cheats',
		title: 'Galeri Deadside',
		subtitle: 'Visual Deadside — loadout, pertempuran squad, dan match — dengan ESP, radar, dan Aimbot.',
		lead: 'Deadside Cheats untuk loop BR Deadside: baca peta, lacak squad musuh, loot, dan selamat di extract.',
		highlights: [
			{ title: 'ESP player & squad', copy: 'Deteksi player musuh di peta dan extract routes untuk keputusan rotasi lebih baik.' },
			{ title: 'Marker loot & peti', copy: 'Sorot loadout, peti, dan loot tier tinggi tanpa membanjiri layar.' },
			{ title: 'Kontrol Aimbot Deadside', copy: 'Atur smoothness, prioritas target, dan hotkey untuk AR, SMG, dan sniper.' },
		],
		updatesLabel: 'Update Deadside Cheats',
		updatesShort: 'Updates',
	},
	th: {
		eyebrow: 'Deadside Cheats',
		title: 'แกลเลอรี Deadside',
		subtitle: 'ภาพ Deadside — loadout การต่อสู้ทีม และ match — พร้อม ESP เรดาร์และ Aimbot',
		lead: 'Deadside Cheats สำหรับลูป BR ของ Deadside: อ่านแผนที่ ติดตามทีมศัตรู เก็บ loot และรอด extract',
		highlights: [
			{ title: 'ESP ผู้เล่นและทีม', copy: 'มองเห็นศัตรูบน แผนที่และ extract routes เพื่อตัดสินใจหมุนเวียนได้ดีขึ้น' },
			{ title: 'มาร์กเกอร์ loot และหีบ', copy: 'เน้น loadout หีบและ loot ระดับสูงโดยไม่รกหน้าจอ' },
			{ title: 'ควบคุม Aimbot Deadside', copy: 'ปรับความนุ่ม ลำดับเป้าหมาย และ hotkey สำหรับ AR SMG และ sniper' },
		],
		updatesLabel: 'อัปเดต Deadside Cheats',
		updatesShort: 'Updates',
	},
	vi: {
		eyebrow: 'Deadside Cheats',
		title: 'Thư viện Deadside',
		subtitle: 'Hình ảnh Deadside — loadout, chiến đấu squad và match — với ESP, radar và Aimbot.',
		lead: 'Deadside Cheats cho vòng BR Deadside: đọc bản đồ, theo dõi squad địch, loot và sống sót extract.',
		highlights: [
			{ title: 'ESP player & squad', copy: 'Phát hiện player địch trên bản đồ và extract routes để quyết định rotate tốt hơn.' },
			{ title: 'Đánh dấu loot & rương', copy: 'Làm nổi bật loadout, rương và loot cao cấp mà không che màn hình.' },
			{ title: 'Điều khiển Aimbot Deadside', copy: 'Tinh chỉnh độ mượt, ưu tiên mục tiêu và phím tắt cho AR, SMG và sniper.' },
		],
		updatesLabel: 'Cập nhật Deadside Cheats',
		updatesShort: 'Updates',
	},
	uk: {
		eyebrow: 'Deadside Cheats',
		title: 'Галерея Deadside',
		subtitle: 'Візуали Deadside — loadout, бої загонів і match — з ESP, радаром і Aimbot.',
		lead: 'Deadside Cheats для рейд-циклу Deadside: читати карту, відстежувати ворожі загони, лут і виживати в extract.',
		highlights: [
			{ title: 'ESP гравців і загонів', copy: 'Помічайте ворожих гравців на Map і extract routes для кращих ротацій.' },
			{ title: 'Маркери луту й скринь', copy: 'Підсвічуйте loadout, контракти та високий лут без перевантаження екрана.' },
			{ title: 'Налаштування Aimbot Deadside', copy: 'Налаштуйте плавність, пріоритет цілі та гарячі клавіші для AR, SMG і снайперки.' },
		],
		updatesLabel: 'Оновлення Deadside Cheats',
		updatesShort: 'Updates',
	},
	cs: {
		eyebrow: 'Deadside Cheats',
		title: 'Galerie Deadside',
		subtitle: 'Deadside vizuály — loadouty, squad souboje a match — s ESP, radarem a Aimbot.',
		lead: 'Deadside Cheats pro BR smyčku Deadside: číst mapu, sledovat nepřátelské squady, loot a přežít extract.',
		highlights: [
			{ title: 'ESP players a squadů', copy: 'Spozorujte nepřátelské operátory na mapy a extract routes pro lepší rotační rozhodnutí.' },
			{ title: 'Markery lootu a petitů', copy: 'Zvýrazněte loadouty, petity a high-tier loot bez přeplnění obrazovky.' },
			{ title: 'Ovládání Aimbot Deadside', copy: 'Nastavte smoothness, prioritu cíle a hotkeys pro AR, SMG a sniper.' },
		],
		updatesLabel: 'Aktualizace Deadside Cheats',
		updatesShort: 'Updates',
	},
	ro: {
		eyebrow: 'Deadside Cheats',
		title: 'Galerie Deadside',
		subtitle: 'Vizualuri Deadside — loadout, lupte de squad și match — cu ESP, radar și Aimbot.',
		lead: 'Deadside Cheats pentru bucla BR Deadside: citește harta, urmărește squad-uri inamice, loot și supraviețuiește extract.',
		highlights: [
			{ title: 'ESP playeri și squad-uri', copy: 'Detectează playeri inamici pe Map și extract routes pentru decizii de rotație mai bune.' },
			{ title: 'Markere loot și cheste', copy: 'Evidențiază loadout-uri, cheste și loot de nivel înalt fără a aglomera ecranul.' },
			{ title: 'Controale Aimbot Deadside', copy: 'Ajustează smoothness, prioritate țintă și hotkeys pentru AR, SMG și sniper.' },
		],
		updatesLabel: 'Actualizări Deadside Cheats',
		updatesShort: 'Updates',
	},
	sv: {
		eyebrow: 'Deadside Cheats',
		title: 'Deadside galleri',
		subtitle: 'Deadside-bilder — loadouts, squadstrider och match — med ESP, radar och Aimbot.',
		lead: 'Deadside Cheats för Deadside:s match-loop: läs kartan, spåra fiendesquads, loota och överlev extract.',
		highlights: [
			{ title: 'Player- & squad-ESP', copy: 'Spotta fiendeplayerer på kartor och extract routes för bättre rotationsbeslut.' },
			{ title: 'Loot- & petitsmarkörer', copy: 'Markera loadout-drops, petit och high-tier loot utan skärmklutter.' },
			{ title: 'Deadside Aimbot-kontroller', copy: 'Justera smoothness, målprioritet och snabbtangenter för AR, SMG och sniper.' },
		],
		updatesLabel: 'Deadside Cheats uppdateringar',
		updatesShort: 'Updates',
	},
};

export function getGalleryUi(locale: LocaleCode): GalleryUi {
	return galleryUi[locale];
}
