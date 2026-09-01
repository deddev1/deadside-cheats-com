/**
 * Localize rich-page section h2 headings (structure preserved from EN).
 */
import { LOCALES } from './constants.mjs';

/** Exact EN h2 → locale heading (high-traffic pages first). */
const EXACT = {
	'What undetected means for Deadside Cheats': {
		es: 'Qué significa indetectable para Deadside Cheats',
		fr: 'Ce que signifie indétectable pour Deadside Cheats',
		de: 'Was undetected für Deadside Cheats bedeutet',
		pt: 'O que significa indetectável para Deadside Cheats',
		it: 'Cosa significa indetectable per Deadside Cheats',
		nl: 'Wat undetected betekent voor Deadside Cheats',
		pl: 'Co oznacza undetected dla Deadside Cheats',
		ru: 'Что означает undetected для Deadside Cheats',
		tr: 'Deadside Cheats için undetected ne anlama gelir',
		ar: 'ماذا يعني غير المكتشف لـ Deadside Cheats',
		ja: 'Deadside Cheatsにおけるundetectedの意味',
		ko: 'Deadside Cheats에서 undetected의 의미',
		zh: 'Deadside Cheats中undetected的含义',
		hi: 'Deadside Cheats के लिए undetected का मतलब',
		id: 'Apa arti undetected untuk Deadside Cheats',
		th: 'undetected หมายถึงอะไรสำหรับ Deadside Cheats',
		vi: 'Undetected có nghĩa gì với Deadside Cheats',
		uk: 'Що означає undetected для Deadside Cheats',
		cs: 'Co znamená undetected pro Deadside Cheats',
		ro: 'Ce înseamnă undetected pentru Deadside Cheats',
		sv: 'Vad undetected betyder för Deadside Cheats',
	},
	'HWID bans, spoofers, and what we do not sell': {
		es: 'Baneos HWID, spoofers y lo que no vendemos',
		fr: 'Bannissements HWID, spoofers et ce que nous ne vendons pas',
		de: 'HWID-Bans, Spoofer und was wir nicht verkaufen',
		pt: 'Banimentos HWID, spoofers e o que não vendemos',
		it: 'Ban HWID, spoofer e cosa non vendiamo',
		nl: 'HWID-bans, spoofers en wat we niet verkopen',
		pl: 'Bany HWID, spoofery i czego nie sprzedajemy',
		ru: 'HWID-баны, спуферы и чего мы не продаём',
		tr: 'HWID yasakları, spoofer\'lar ve satmadıklarımız',
		ar: 'حظر HWID والمُزيّفون وما لا نبيعه',
		ja: 'HWID BAN、スプーファー、販売しないもの',
		ko: 'HWID 밴, 스푸퍼 및 판매하지 않는 항목',
		zh: 'HWID封禁、欺骗器与我们不出售的内容',
		hi: 'HWID प्रतिबंध, स्पूफ़र और जो हम नहीं बेचते',
		id: 'Ban HWID, spoofer, dan yang tidak kami jual',
		th: 'แบน HWID, spoofer และสิ่งที่เราไม่ขาย',
		vi: 'Cấm HWID, spoofer và những gì chúng tôi không bán',
		uk: 'HWID-бани, спуфери та що ми не продаємо',
		cs: 'HWID bany, spoofery a co neprodáváme',
		ro: 'Interdicții HWID, spooferi și ce nu vindem',
		sv: 'HWID-avstängningar, spoofers och vad vi inte säljer',
	},
	'Setup & Updates': {
		es: 'Instalación y actualizaciones',
		fr: 'Installation et mises à jour',
		de: 'Setup und Updates',
		pt: 'Instalação e atualizações',
		it: 'Setup e aggiornamenti',
		nl: 'Setup en updates',
		pl: 'Instalacja i aktualizacje',
		ru: 'Установка и обновления',
		tr: 'Kurulum ve güncellemeler',
		ar: 'التثبيت والتحديثات',
		ja: 'セットアップとアップデート',
		ko: '설치 및 업데이트',
		zh: '安装与更新',
		hi: 'सेटअप और अपडेट',
		id: 'Instalasi dan pembaruan',
		th: 'การติดตั้งและอัปเดต',
		vi: 'Cài đặt và cập nhật',
		uk: 'Встановлення та оновлення',
		cs: 'Instalace a aktualizace',
		ro: 'Instalare și actualizări',
		sv: 'Installation och uppdateringar',
	},
	'Why deadside cheats buyers choose Deadside Cheats in 2026': {
		es: 'Por qué compradores eligen Deadside Cheats en 2026',
		fr: 'Pourquoi les acheteurs choisissent Deadside Cheats en 2026',
		de: 'Warum Käufer 2026 Deadside Cheats wählen',
		pt: 'Por que compradores escolhem Deadside Cheats em 2026',
		it: 'Perché gli acquirenti scelgono Deadside Cheats nel 2026',
		nl: 'Waarom kopers in 2026 kiezen voor Deadside Cheats',
		pl: 'Dlaczego kupujący wybierają Deadside Cheats w 2026',
		ru: 'Почему покупатели выбирают Deadside Cheats в 2026',
		tr: 'Alıcılar 2026\'da neden Deadside Cheats seçiyor',
		ar: 'لماذا يختار المشترون Deadside Cheats في 2026',
		ja: '2026年にDeadside Cheatsが選ばれる理由',
		ko: '2026년에 Deadside Cheats를 선택하는 이유',
		zh: '2026年买家选择Deadside Cheats的原因',
		hi: '2026 में खरीदार Deadside Cheats क्यों चुनते हैं',
		id: 'Mengapa pembeli memilih Deadside Cheats di 2026',
		th: 'ทำไมผู้ซื้อเลือก Deadside Cheats ในปี 2026',
		vi: 'Vì sao người mua chọn Deadside Cheats năm 2026',
		uk: 'Чому покупці обирають Deadside Cheats у 2026',
		cs: 'Proč kupující volí Deadside Cheats v roce 2026',
		ro: 'De ce cumpărătorii aleg Deadside Cheats în 2026',
		sv: 'Varför köpare väljer Deadside Cheats 2026',
	},
};

/** Phrase-level replacements when no exact map exists. */
const PHRASE_RULES = {
	es: [
		['Before you buy', 'Antes de comprar'],
		['What you get', 'Qué obtienes'],
		['Next steps', 'Siguientes pasos'],
		['Current status', 'Estado actual'],
		['Install steps', 'Pasos de instalación'],
		['How to contact us', 'Cómo contactarnos'],
		['Module guides', 'Guías de módulos'],
		['Explore related topics', 'Explorar temas relacionados'],
		['Updates & support', 'Actualizaciones y soporte'],
		['Plans', 'Planes'],
		['Controls', 'Controles'],
		['Refunds', 'Reembolsos'],
		['Important', 'Importante'],
		['With ESP', 'Con ESP'],
		['What ESP shows', 'Qué muestra el ESP'],
		['When to use it', 'Cuándo usarlo'],
		['Play styles', 'Estilos de juego'],
		['What it shows', 'Qué muestra'],
		['If something fails', 'Si algo falla'],
		['Before you install', 'Antes de instalar'],
		['Faster answers', 'Respuestas más rápidas'],
		['Buying & delivery', 'Compra y entrega'],
		['Setup & updates', 'Instalación y actualizaciones'],
		['After a patch', 'Después de un parche'],
		['What are deadside cheats?', '¿Qué son los trucos de Deadside?'],
		['What Deadside Cheats includes', 'Qué incluye Deadside Cheats'],
		['Undetected status & patches', 'Estado indetectable y parches'],
		['How to get started', 'Cómo empezar'],
		['BattlEye', 'BattlEye'],
	],
	fr: [
		['Before you buy', 'Avant d\'acheter'],
		['What you get', 'Ce que vous obtenez'],
		['Next steps', 'Prochaines étapes'],
		['Current status', 'Statut actuel'],
		['Install steps', 'Étapes d\'installation'],
		['How to contact us', 'Comment nous contacter'],
		['Module guides', 'Guides des modules'],
		['Explore related topics', 'Explorer les sujets liés'],
		['Updates & support', 'Mises à jour et support'],
		['Plans', 'Formules'],
		['Controls', 'Contrôles'],
		['Refunds', 'Remboursements'],
		['Important', 'Important'],
		['With ESP', 'Avec ESP'],
		['What ESP shows', 'Ce que l\'ESP affiche'],
		['When to use it', 'Quand l\'utiliser'],
		['Play styles', 'Styles de jeu'],
		['What it shows', 'Ce qu\'il affiche'],
		['If something fails', 'Si quelque chose échoue'],
		['Before you install', 'Avant d\'installer'],
		['Faster answers', 'Réponses plus rapides'],
		['Buying & delivery', 'Achat et livraison'],
		['Setup & updates', 'Installation et mises à jour'],
		['After a patch', 'Après un patch'],
		['What are deadside cheats?', 'Que sont les triches Deadside ?'],
		['What Deadside Cheats includes', 'Ce que Deadside Cheats inclut'],
		['Undetected status & patches', 'Statut indétectable et patches'],
		['How to get started', 'Comment commencer'],
	],
	de: [
		['Before you buy', 'Vor dem Kauf'],
		['What you get', 'Was Sie erhalten'],
		['Next steps', 'Nächste Schritte'],
		['Current status', 'Aktueller Status'],
		['Install steps', 'Installationsschritte'],
		['How to contact us', 'So kontaktieren Sie uns'],
		['Module guides', 'Modul-Guides'],
		['Explore related topics', 'Verwandte Themen'],
		['Updates & support', 'Updates & Support'],
		['Plans', 'Pläne'],
		['Controls', 'Steuerung'],
		['Refunds', 'Rückerstattungen'],
		['Important', 'Wichtig'],
		['With ESP', 'Mit ESP'],
		['What ESP shows', 'Was ESP anzeigt'],
		['When to use it', 'Wann es sinnvoll ist'],
		['Play styles', 'Spielstile'],
		['What it shows', 'Was es anzeigt'],
		['If something fails', 'Wenn etwas fehlschlägt'],
		['Before you install', 'Vor der Installation'],
		['Faster answers', 'Schnellere Antworten'],
		['Buying & delivery', 'Kauf & Lieferung'],
		['Setup & updates', 'Setup & Updates'],
		['After a patch', 'Nach einem Patch'],
		['What are deadside cheats?', 'Was sind Deadside Cheats?'],
		['What Deadside Cheats includes', 'Was Deadside Cheats enthält'],
		['Undetected status & patches', 'Undetected-Status & Patches'],
		['How to get started', 'Erste Schritte'],
	],
};

/** Fallback chain for locales without dedicated phrase rules. */
const RULE_FALLBACK = {
	pt: 'es',
	it: 'es',
	nl: 'de',
	pl: 'de',
	ru: 'de',
	tr: 'de',
	uk: 'ru',
	cs: 'pl',
	ro: 'es',
	sv: 'de',
	ar: 'es',
	ja: 'en',
	ko: 'en',
	zh: 'en',
	hi: 'en',
	id: 'en',
	th: 'en',
	vi: 'en',
};

function applyPhraseRules(text, locale) {
	const chain = [locale, RULE_FALLBACK[locale]].filter(Boolean);
	for (const loc of chain) {
		const rules = PHRASE_RULES[loc];
		if (!rules) continue;
		let out = text;
		for (const [from, to] of rules) {
			if (out.includes(from)) out = out.split(from).join(to);
		}
		if (out !== text) return out;
	}
	return text;
}

export function translateSectionH2(enH2, locale) {
	if (!enH2 || locale === 'en') return enH2;
	const exact = EXACT[enH2]?.[locale];
	if (exact) return exact;
	return applyPhraseRules(enH2, locale);
}

export function hasSectionHeadingSupport(locale) {
	return locale === 'en' || LOCALES.includes(locale);
}
