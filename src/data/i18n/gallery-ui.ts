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
		eyebrow: 'Naraka Cheats',
		title: 'Naraka Cheats gallery',
		subtitle: 'Simple naraka cheats visuals — ESP, wallhack, aimbot, and radar for Naraka on PC.',
		lead: 'Naraka Cheats helps you spot players, agents, abilities, and bomb sites with ESP, aimbot, and radar in one license.',
		highlights: [
			{ title: 'naraka cheats esp', copy: 'See players through walls with naraka cheats esp and wallhack overlays.' },
			{ title: 'naraka cheats radar', copy: 'Track nearby threats with naraka cheats radar before you push or rotate.' },
			{ title: 'naraka cheats aimbot', copy: 'Use soft aim and aimbot controls tuned for Naraka matches on Windows PC.' },
		],
		updatesLabel: 'naraka cheats updates',
		updatesShort: 'Updates',
	},
	es: {
		eyebrow: 'Naraka Cheats',
		title: 'Galería Naraka',
		subtitle: 'Visuales de Naraka con loadouts, peleas de equipo y combate match — junto a herramientas ESP, radar y Aimbot.',
		lead: 'Naraka Cheats está pensado para el loop competitivo de Naraka: leer el mapa, rastrear escuadrones enemigos, lootear y ganar rondas.',
		highlights: [
			{ title: 'ESP de players y escuadrones', copy: 'Detecta players enemigos y contornos de equipo en mapas y grapple routes para elegir peleas con mejor información.' },
			{ title: 'Marcadores de loot y cofres', copy: 'Resalta loadouts, cofres y loot de alto nivel sin saturar la pantalla en plena partida.' },
			{ title: 'Controles Aimbot Naraka', copy: 'Ajusta suavidad, prioridad de objetivo y teclas para AR, SMG y francotirador antes de comprar.' },
		],
		updatesLabel: 'Actualizaciones Naraka Cheats',
		updatesShort: 'Updates',
	},
	fr: {
		eyebrow: 'Naraka Cheats',
		title: 'Galerie Naraka',
		subtitle: 'Visuels Naraka — loadouts, combats d\'équipe et match — avec ESP, radar et Aimbot.',
		lead: 'Naraka Cheats suit la boucle competitivo de Naraka : lire la carte, suivre les équipes, loot et gagner les rounds.',
		highlights: [
			{ title: 'ESP players & équipes', copy: 'Repérez les players ennemis sur cartes et grapple routes pour choisir vos engagements.' },
			{ title: 'Marqueurs loot & coffres', copy: 'Mettez en évidence loadouts, coffres et loot haut niveau sans encombrer l\'écran.' },
			{ title: 'Réglages Aimbot Naraka', copy: 'Ajustez fluidité, priorité cible et raccourcis pour AR, SMG et sniper.' },
		],
		updatesLabel: 'Mises à jour Naraka Cheats',
		updatesShort: 'Updates',
	},
	de: {
		eyebrow: 'Naraka Cheats',
		title: 'Naraka Galerie',
		subtitle: 'Naraka-Bilder zu Loadouts, Squad-Kämpfen und match — mit ESP, Radar und Aimbot.',
		lead: 'Naraka Cheats passt zur Raid-Schleife von Naraka: Karte lesen, Gegner tracken, looten und matches überleben.',
		highlights: [
			{ title: 'Player- & Squad-ESP', copy: 'Erkenne feindliche Playeren auf Karten und grapple routes für bessere Rotationsentscheidungen.' },
			{ title: 'Loot- & Vertragsmarker', copy: 'Hebe Loadout-Drops, Verträge und High-Tier-Loot hervor ohne Screen-Spam.' },
			{ title: 'Naraka Aimbot Steuerung', copy: 'Feinjustiere Glätte, Zielpriorität und Hotkeys für AR, SMG und Sniper.' },
		],
		updatesLabel: 'Naraka Cheats Updates',
		updatesShort: 'Updates',
	},
	pt: {
		eyebrow: 'Naraka Cheats',
		title: 'Galeria Naraka',
		subtitle: 'Visuais de Naraka com loadouts, combates de esquadrão e match — com ESP, radar e Aimbot.',
		lead: 'Naraka Cheats segue o loop BR do Naraka: ler o mapa, rastrear equipes, lootar e sobreviver ao extract.',
		highlights: [
			{ title: 'ESP de players e equipes', copy: 'Detecte players inimigos em mappe e grapple routes para escolher lutas com melhor intel.' },
			{ title: 'Marcadores de loot e cofres', copy: 'Destaque loadouts, cofres e loot de alto nível sem poluir a tela.' },
			{ title: 'Controles Aimbot Naraka', copy: 'Ajuste suavidade, prioridade de alvo e atalhos para AR, SMG e sniper.' },
		],
		updatesLabel: 'Atualizações Naraka Cheats',
		updatesShort: 'Updates',
	},
	it: {
		eyebrow: 'Naraka Cheats',
		title: 'Galleria Naraka',
		subtitle: 'Immagini Naraka — loadout, scontri di squadra e match — con ESP, radar e Aimbot.',
		lead: 'Naraka Cheats è pensato per il loop BR di Naraka: leggere la mappa, tracciare squadre nemiche, loot e sopravvivere al extract.',
		highlights: [
			{ title: 'ESP playeri e squadre', copy: 'Individua playeri nemici su mappe e grapple routes per scegliere i fight con più intel.' },
			{ title: 'Marker loot e coffreti', copy: 'Evidenzia loadout, coffreti e loot di alto livello senza riempire lo schermo.' },
			{ title: 'Controlli Aimbot Naraka', copy: 'Regola smoothness, priorità bersaglio e hotkey per AR, SMG e sniper.' },
		],
		updatesLabel: 'Aggiornamenti Naraka Cheats',
		updatesShort: 'Updates',
	},
	nl: {
		eyebrow: 'Naraka Cheats',
		title: 'Naraka galerij',
		subtitle: 'Naraka-beelden van loadouts, squadgevechten en match — met ESP, radar en Aimbot.',
		lead: 'Naraka Cheats volgt de match-loop va Naraka: kaart lezen, vijandelijke squads volgen, jagen en combat zones overleven.',
		highlights: [
			{ title: 'Player- & squad-ESP', copy: 'Spot vijandelijke players op mappe en grapple routes voor betere rotatiebeslissingen.' },
			{ title: 'Loot- & chestmarkers', copy: 'Markeer loadout-drops, chesten en high-tier loot zonder schermoverlast.' },
			{ title: 'Naraka Aimbot instellingen', copy: 'Stel smoothness, doelprioriteit en hotkeys af voor AR, SMG en sniper.' },
		],
		updatesLabel: 'Naraka Cheats updates',
		updatesShort: 'Updates',
	},
	pl: {
		eyebrow: 'Naraka Cheats',
		title: 'Galeria Naraka',
		subtitle: 'Grafiki Naraka — loadouty, walki drużynowe i match — z ESP, radar i Aimbot.',
		lead: 'Naraka Cheats pasuje do pętli BR Naraka: czytaj mapę, śledź wrogie drużyny, lootuj i przeżyj extract.',
		highlights: [
			{ title: 'ESP players i drużyn', copy: 'Wykrywaj wrogich players na mapy i grapple routes dla lepszych decyzji rotacyjnych.' },
			{ title: 'Markery lootu i skrzyń', copy: 'Podświetlaj loadouty, petity i wysokiej klasy loot bez zaśmiecania ekranu.' },
			{ title: 'Sterowanie Aimbot Naraka', copy: 'Dostosuj płynność, priorytet celu i skróty dla AR, SMG i snajperki.' },
		],
		updatesLabel: 'Aktualizacje Naraka Cheats',
		updatesShort: 'Updates',
	},
	ru: {
		eyebrow: 'Naraka Cheats',
		title: 'Галерея Naraka',
		subtitle: 'Визуалы Naraka — лоадауты, бои отрядов и match — с ESP, радаром и Aimbot.',
		lead: 'Naraka Cheats создан для рейд-циклу Naraka: читать карту, отслеживать вражеские отряды, лут и выживать в extract.',
		highlights: [
			{ title: 'ESP игроков и отрядов', copy: 'Замечайте вражеских игроков на карты и grapple routes для лучших решений по ротации.' },
			{ title: 'Маркеры лута и сундуков', copy: 'Подсвечивайте loadout, сундуки и высокий лут без перегрузки экрана.' },
			{ title: 'Настройки Aimbot Naraka', copy: 'Настройте плавность, приоритет цели и горячие клавиши для AR, SMG и снайперки.' },
		],
		updatesLabel: 'Обновления Naraka Cheats',
		updatesShort: 'Updates',
	},
	tr: {
		eyebrow: 'Naraka Cheats',
		title: 'Naraka galerisi',
		subtitle: 'Loadout, takım savaşları ve match görselleri — ESP, radar ve Aimbot ile.',
		lead: 'Naraka Cheats, Naraka BR döngüsü için: haritayı oku, düşman takımları izle, loot al ve extract\'da hayatta kal.',
		highlights: [
			{ title: 'Player ve takım ESP', copy: 'haritalar ve grapple routes\'da düşman playerleri görerek daha iyi rotasyon kararları alın.' },
			{ title: 'Loot ve kontrat işaretleri', copy: 'Loadout, kontrat ve üst seviye loot\'u ekranı doldurmadan vurgulayın.' },
			{ title: 'Naraka Aimbot kontrolleri', copy: 'AR, SMG ve sniper için yumuşaklık, hedef önceliği ve kısayolları ayarlayın.' },
		],
		updatesLabel: 'Naraka Cheats güncellemeleri',
		updatesShort: 'Updates',
	},
	ar: {
		eyebrow: 'Naraka Cheats',
		title: 'معرض Naraka',
		subtitle: 'صور Naraka — loadouts ومعارك الفرق وsession — مع ESP ورادار وAimbot.',
		lead: 'Naraka Cheats مبني لحلقة BR في Naraka: قراءة الخريطة، تتبع الفرق، جمع اللوت والنجاة في extract.',
		highlights: [
			{ title: 'ESP للمشغلين والفرق', copy: 'اكتشف players المعادين على خرائط وgrapple routes لاختيار القتالات بذكاء.' },
			{ title: 'علامات اللوت والصناديق', copy: 'أبرز loadouts والصناديق واللوت العالي دون ازدحام الشاشة.' },
			{ title: 'تحكم Aimbot Naraka', copy: 'اضبط النعومة وأولوية الهدف والاختصارات للـ AR وSMG والقناص.' },
		],
		updatesLabel: 'تحديثات Naraka Cheats',
		updatesShort: 'Updates',
	},
	ja: {
		eyebrow: 'Naraka Cheats',
		title: 'Naraka ギャラリー',
		subtitle: 'ロードアウト、スクワッド戦、BRコンバットのNarakaビジュアル — ESP、レーダー、エイムボット付き。',
		lead: 'Naraka CheatsはNarakaのBRループ向け：マップを読み、敵スクワッドを追跡し、ルートしてextractを生き延びる。',
		highlights: [
			{ title: 'players＆スクワッドESP', copy: 'マップとgrapple routesで敵playersを把握し、ローテ判断を改善。' },
			{ title: 'ルート＆チェストマーカー', copy: 'ロードアウト、チェスト、高ティアルートを画面を埋めずに表示。' },
			{ title: 'Narakaエイムボット設定', copy: 'AR、SMG、スナイパー向けにスムーズさ、ターゲット優先度、ホットキーを調整。' },
		],
		updatesLabel: 'Naraka Cheats更新',
		updatesShort: 'Updates',
	},
	ko: {
		eyebrow: 'Naraka Cheats',
		title: 'Naraka 갤러리',
		subtitle: '로드아웃, 스쿼드 전투, BR 컴뱃 Naraka 비주얼 — ESP, 레이더, 에임봇 포함.',
		lead: 'Naraka Cheats는 Naraka survival loop용: 맵 읽기, 적 스쿼드 추적, 루트 수집, extract 생존.',
		highlights: [
			{ title: 'players & 스쿼드 ESP', copy: '맵과 grapple routes에서 적 players를 파악해 로테이션 결정을 개선.' },
			{ title: '루트 & 상자 마커', copy: '로드아웃, 상자, 고티어 루트를 화면을 가리지 않고 강조.' },
			{ title: 'Naraka 에임봇 컨트롤', copy: 'AR, SMG, 스나이퍼용 부드러움, 타겟 우선순위, 단축키 조정.' },
		],
		updatesLabel: 'Naraka Cheats 업데이트',
		updatesShort: 'Updates',
	},
	zh: {
		eyebrow: 'Naraka Cheats',
		title: 'Naraka 图库',
		subtitle: 'Naraka 视觉 — 配装、小队战斗和大逃杀 — 配合 ESP、雷达和自瞄。',
		lead: 'Naraka Cheats 为 Naraka match loop设计：读图、追踪敌方小队、搜刮并在 base survival。',
		highlights: [
			{ title: 'players与小队 ESP', copy: '在 地图和 grapple routes 发现敌方players，做出更好的转点决策。' },
			{ title: '物资与宝箱标记', copy: '高亮配装、宝箱和高级物资，不遮挡屏幕。' },
			{ title: 'Naraka 自瞄控制', copy: '调整 AR、SMG 和狙击的平滑度、目标优先级和热键。' },
		],
		updatesLabel: 'Naraka Cheats 更新',
		updatesShort: 'Updates',
	},
	hi: {
		eyebrow: 'Naraka Cheats',
		title: 'Naraka गैलरी',
		subtitle: 'Loadout, team fights और match visuals — ESP, radar और Aimbot के साथ।',
		lead: 'Naraka Cheats Naraka match loop के लिए: map पढ़ें, enemy squads track करें, loot करें और base survival करें।',
		highlights: [
			{ title: 'Player & Squad ESP', copy: 'मैप और grapple routes पर enemy players spot करें बेहतर rotation decisions के लिए।' },
			{ title: 'Loot & Chest Markers', copy: 'Loadout drops, chests और high-tier loot highlight करें screen clutter के बिना।' },
			{ title: 'Naraka Aimbot Controls', copy: 'AR, SMG और sniper के लिए smoothness, target priority और hotkeys tune करें।' },
		],
		updatesLabel: 'Naraka Cheats updates',
		updatesShort: 'Updates',
	},
	id: {
		eyebrow: 'Naraka Cheats',
		title: 'Galeri Naraka',
		subtitle: 'Visual Naraka — loadout, pertempuran squad, dan match — dengan ESP, radar, dan Aimbot.',
		lead: 'Naraka Cheats untuk loop BR Naraka: baca peta, lacak squad musuh, loot, dan selamat di extract.',
		highlights: [
			{ title: 'ESP player & squad', copy: 'Deteksi player musuh di peta dan grapple routes untuk keputusan rotasi lebih baik.' },
			{ title: 'Marker loot & peti', copy: 'Sorot loadout, peti, dan loot tier tinggi tanpa membanjiri layar.' },
			{ title: 'Kontrol Aimbot Naraka', copy: 'Atur smoothness, prioritas target, dan hotkey untuk AR, SMG, dan sniper.' },
		],
		updatesLabel: 'Update Naraka Cheats',
		updatesShort: 'Updates',
	},
	th: {
		eyebrow: 'Naraka Cheats',
		title: 'แกลเลอรี Naraka',
		subtitle: 'ภาพ Naraka — loadout การต่อสู้ทีม และ match — พร้อม ESP เรดาร์และ Aimbot',
		lead: 'Naraka Cheats สำหรับลูป BR ของ Naraka: อ่านแผนที่ ติดตามทีมศัตรู เก็บ loot และรอด extract',
		highlights: [
			{ title: 'ESP ผู้เล่นและทีม', copy: 'มองเห็นศัตรูบน แผนที่และ grapple routes เพื่อตัดสินใจหมุนเวียนได้ดีขึ้น' },
			{ title: 'มาร์กเกอร์ loot และหีบ', copy: 'เน้น loadout หีบและ loot ระดับสูงโดยไม่รกหน้าจอ' },
			{ title: 'ควบคุม Aimbot Naraka', copy: 'ปรับความนุ่ม ลำดับเป้าหมาย และ hotkey สำหรับ AR SMG และ sniper' },
		],
		updatesLabel: 'อัปเดต Naraka Cheats',
		updatesShort: 'Updates',
	},
	vi: {
		eyebrow: 'Naraka Cheats',
		title: 'Thư viện Naraka',
		subtitle: 'Hình ảnh Naraka — loadout, chiến đấu squad và match — với ESP, radar và Aimbot.',
		lead: 'Naraka Cheats cho vòng BR Naraka: đọc bản đồ, theo dõi squad địch, loot và sống sót extract.',
		highlights: [
			{ title: 'ESP player & squad', copy: 'Phát hiện player địch trên bản đồ và grapple routes để quyết định rotate tốt hơn.' },
			{ title: 'Đánh dấu loot & rương', copy: 'Làm nổi bật loadout, rương và loot cao cấp mà không che màn hình.' },
			{ title: 'Điều khiển Aimbot Naraka', copy: 'Tinh chỉnh độ mượt, ưu tiên mục tiêu và phím tắt cho AR, SMG và sniper.' },
		],
		updatesLabel: 'Cập nhật Naraka Cheats',
		updatesShort: 'Updates',
	},
	uk: {
		eyebrow: 'Naraka Cheats',
		title: 'Галерея Naraka',
		subtitle: 'Візуали Naraka — loadout, бої загонів і match — з ESP, радаром і Aimbot.',
		lead: 'Naraka Cheats для рейд-циклу Naraka: читати карту, відстежувати ворожі загони, лут і виживати в extract.',
		highlights: [
			{ title: 'ESP гравців і загонів', copy: 'Помічайте ворожих гравців на Map і grapple routes для кращих ротацій.' },
			{ title: 'Маркери луту й скринь', copy: 'Підсвічуйте loadout, контракти та високий лут без перевантаження екрана.' },
			{ title: 'Налаштування Aimbot Naraka', copy: 'Налаштуйте плавність, пріоритет цілі та гарячі клавіші для AR, SMG і снайперки.' },
		],
		updatesLabel: 'Оновлення Naraka Cheats',
		updatesShort: 'Updates',
	},
	cs: {
		eyebrow: 'Naraka Cheats',
		title: 'Galerie Naraka',
		subtitle: 'Naraka vizuály — loadouty, squad souboje a match — s ESP, radarem a Aimbot.',
		lead: 'Naraka Cheats pro BR smyčku Naraka: číst mapu, sledovat nepřátelské squady, loot a přežít extract.',
		highlights: [
			{ title: 'ESP players a squadů', copy: 'Spozorujte nepřátelské operátory na mapy a grapple routes pro lepší rotační rozhodnutí.' },
			{ title: 'Markery lootu a petitů', copy: 'Zvýrazněte loadouty, petity a high-tier loot bez přeplnění obrazovky.' },
			{ title: 'Ovládání Aimbot Naraka', copy: 'Nastavte smoothness, prioritu cíle a hotkeys pro AR, SMG a sniper.' },
		],
		updatesLabel: 'Aktualizace Naraka Cheats',
		updatesShort: 'Updates',
	},
	ro: {
		eyebrow: 'Naraka Cheats',
		title: 'Galerie Naraka',
		subtitle: 'Vizualuri Naraka — loadout, lupte de squad și match — cu ESP, radar și Aimbot.',
		lead: 'Naraka Cheats pentru bucla BR Naraka: citește harta, urmărește squad-uri inamice, loot și supraviețuiește extract.',
		highlights: [
			{ title: 'ESP playeri și squad-uri', copy: 'Detectează playeri inamici pe Map și grapple routes pentru decizii de rotație mai bune.' },
			{ title: 'Markere loot și cheste', copy: 'Evidențiază loadout-uri, cheste și loot de nivel înalt fără a aglomera ecranul.' },
			{ title: 'Controale Aimbot Naraka', copy: 'Ajustează smoothness, prioritate țintă și hotkeys pentru AR, SMG și sniper.' },
		],
		updatesLabel: 'Actualizări Naraka Cheats',
		updatesShort: 'Updates',
	},
	sv: {
		eyebrow: 'Naraka Cheats',
		title: 'Naraka galleri',
		subtitle: 'Naraka-bilder — loadouts, squadstrider och match — med ESP, radar och Aimbot.',
		lead: 'Naraka Cheats för Naraka:s match-loop: läs kartan, spåra fiendesquads, loota och överlev extract.',
		highlights: [
			{ title: 'Player- & squad-ESP', copy: 'Spotta fiendeplayerer på kartor och grapple routes för bättre rotationsbeslut.' },
			{ title: 'Loot- & petitsmarkörer', copy: 'Markera loadout-drops, petit och high-tier loot utan skärmklutter.' },
			{ title: 'Naraka Aimbot-kontroller', copy: 'Justera smoothness, målprioritet och snabbtangenter för AR, SMG och sniper.' },
		],
		updatesLabel: 'Naraka Cheats uppdateringar',
		updatesShort: 'Updates',
	},
};

export function getGalleryUi(locale: LocaleCode): GalleryUi {
	return galleryUi[locale];
}
