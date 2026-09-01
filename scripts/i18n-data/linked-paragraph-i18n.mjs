/**
 * Localize EN paragraphs that contain internal links instead of keeping English prose.
 */
import { phrases } from './phrases.mjs';
import { FOCUS_I18N } from './focus-i18n.mjs';
import { fixDeadsideCopy } from './deadside-copy-fix.mjs';
import { localizeHtmlLinks } from './link-labels.mjs';

const RELATED_PREFIX = {
	en: 'Related: ',
	es: 'Enlaces útiles: ',
	fr: 'Liens utiles : ',
	de: 'Weiterführend: ',
	pt: 'Links úteis: ',
	it: 'Link utili: ',
	nl: 'Gerelateerd: ',
	pl: 'Powiązane: ',
	ru: 'Полезные ссылки: ',
	tr: 'İlgili bağlantılar: ',
	ar: 'روابط مفيدة: ',
	ja: '関連リンク: ',
	ko: '관련 링크: ',
	zh: '相關連結：',
	hi: 'संबंधित लिंक: ',
	id: 'Tautan terkait: ',
	th: 'ลิงก์ที่เกี่ยวข้อง: ',
	vi: 'Liên kết hữu ích: ',
	uk: 'Корисні посилання: ',
	cs: 'Související odkazy: ',
	ro: 'Linkuri utile: ',
	sv: 'Relaterat: ',
};

const RELATED_JOIN = {
	en: ' · ',
	es: ' · ',
	fr: ' · ',
	de: ' · ',
	pt: ' · ',
	it: ' · ',
	nl: ' · ',
	pl: ' · ',
	ru: ' · ',
	tr: ' · ',
	ar: ' · ',
	ja: ' · ',
	ko: ' · ',
	zh: ' · ',
	hi: ' · ',
	id: ' · ',
	th: ' · ',
	vi: ' · ',
	uk: ' · ',
	cs: ' · ',
	ro: ' · ',
	sv: ' · ',
};

const PARA_GENERATORS = [
	(p, focus) => p.s1(focus),
	(p) => p.s2(),
	(p) => p.s3(),
	(p) => p.legal(),
];

/** Extract internal /images-agnostic anchor tags from HTML. */
function extractAnchors(html) {
	const anchors = [];
	const re = /<a\s+([^>]*?)>([^<]*)<\/a>/gi;
	let match;
	while ((match = re.exec(html)) !== null) {
		const hrefMatch = match[1].match(/href="([^"]+)"/);
		if (!hrefMatch) continue;
		anchors.push({ attrs: match[1], href: hrefMatch[1], text: match[2] });
	}
	return anchors;
}

function isLinkOnlyParagraph(html) {
	const text = html.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
	if (!text) return true;
	if (html.trim().startsWith('<a ')) return true;
	const anchors = extractAnchors(html);
	if (anchors.length === 0) return false;
	const linkTextLen = anchors.reduce((sum, a) => sum + a.text.length, 0);
	// Short link rows and mostly-link lines only — not prose sentences with embedded links.
	if (text.length < 36) return true;
	return linkTextLen / text.length > 0.82;
}

function buildRelatedClause(html, locale) {
	const localized = localizeHtmlLinks(html, locale);
	const anchors = extractAnchors(localized);
	if (anchors.length === 0) return localized;
	if (isLinkOnlyParagraph(html)) return localized;
	const prefix = RELATED_PREFIX[locale] ?? RELATED_PREFIX.en;
	const join = RELATED_JOIN[locale] ?? RELATED_JOIN.en;
	const links = anchors.map((a) => `<a ${a.attrs}>${a.text}</a>`).join(join);
	return `${prefix}${links}`;
}

/**
 * Localize a paragraph that contains links.
 * Full English prose is replaced with native template text plus localized related links.
 */
export function localizeLinkedParagraph(enPara, locale, pageKey, paragraphIndex) {
	if (locale === 'en') return enPara;

	if (isLinkOnlyParagraph(enPara)) {
		return localizeHtmlLinks(enPara, locale);
	}

	const p = phrases[locale];
	if (!p) return localizeHtmlLinks(enPara, locale);

	const focus = FOCUS_I18N[locale]?.[pageKey] ?? pageKey;
	const gen = PARA_GENERATORS[paragraphIndex % PARA_GENERATORS.length];
	const base = fixDeadsideCopy(gen(p, focus));
	const related = buildRelatedClause(enPara, locale);
	return `${base} ${related}`;
}
