/** Shared SERP title helpers — min 45 chars, max 60 chars / ~568px (Screaming Frog approx). */

export const TITLE_TARGET_MIN = 45;
export const TITLE_MAX = 60;
/** Google desktop SERP title width approximation used by Screaming Frog. */
export const TITLE_MAX_PX = 568;

/** Approximate pixel width of a title in Google SERPs (Roboto 20px). */
export function titlePixelWidth(text) {
	const widths = {
		' ': 3.5,
		'|': 4,
		'-': 4,
		'—': 8,
		'–': 7,
		'/': 4,
		':': 4,
		',': 3,
		'.': 3,
		'$': 6,
		'&': 7,
		0: 6,
		1: 6,
		2: 6,
		3: 6,
		4: 6,
		5: 6,
		6: 6,
		7: 6,
		8: 6,
		9: 6,
	};
	let px = 0;
	for (const ch of text) {
		if (widths[ch] !== undefined) px += widths[ch];
		else if (ch >= 'A' && ch <= 'Z') px += 8.5;
		else if (ch >= 'a' && ch <= 'z') px += 6.5;
		else if (ch.codePointAt(0) > 0x2e80) px += 14;
		else px += 7;
	}
	return px;
}

export function fitsTitleLimits(text) {
	return (
		text.length >= TITLE_TARGET_MIN &&
		text.length <= TITLE_MAX &&
		titlePixelWidth(text) <= TITLE_MAX_PX
	);
}

function stripTrailingJunk(text) {
	return text.trim().replace(/[\s|&—–-]+$/g, '');
}

/** Title already names cheats/ESP — avoid stacking another keyword suffix. */
export function hasRichKeywords(text) {
	const lower = text.toLowerCase();
	const hits = ['esp', 'aimbot', 'radar', 'deadside', 'cheat', 'battleye', 'wallhack'].filter((k) =>
		lower.includes(k),
	);
	return hits.length >= 2 || (hits.length >= 1 && text.length >= 36);
}

const TITLE_REPLACEMENTS = [
	[/\| FAQ$/i, '| Deadside FAQ'],
	[/^Privacy Policy \| Deadside Cheats$/i, 'Privacy Policy | Deadside Cheats'],
	[/^Refund Policy \| Deadside Cheats$/i, 'Refund Policy | Deadside Cheats'],
	[/^Terms of Use \| Deadside Cheats$/i, 'Terms of Use | Deadside Cheats'],
	[/^Deadside Guides Hub \| Deadside Cheats$/i, 'Deadside Guides Hub | Survival & Cheat Tips'],
	[/^Deadside Cheats Pricing \| \$35\/mo or \$150$/i, 'Deadside Cheats Pricing | $35/mo Lifetime'],
	[/^Deadside 2D [Rr]adar \| 2D Threat Map$/i, 'Deadside 2D Radar | 2D Threat Map | Cheats'],
	[/^Deadside ESP \| Wallhack & Player Boxes$/i, 'Deadside ESP | Wallhack & Player Boxes'],
	[/^Deadside Aimbot \| Soft Aim & FOV Settings$/i, 'Deadside Aimbot | Soft Aim & FOV Settings'],
];

/** Expand titles under the SERP minimum without exceeding max limits. */
export function expandTitleMin(text) {
	let s = text.trim();
	for (const [pattern, replacement] of TITLE_REPLACEMENTS) {
		if (pattern.test(s)) {
			const expanded = stripTrailingJunk(s.replace(pattern, replacement));
			if (fitsTitleLimits(expanded)) return expanded;
			if (expanded.length >= TITLE_TARGET_MIN) return clampTitleMax(expanded);
		}
	}
	if (s.length >= TITLE_TARGET_MIN) return s;

	if (/\bDeadside Cheats\b/i.test(s)) {
		const brandedSuffixes = [' License', ' | PC', ' Info', ' Guide', ' 2026'];
		for (const suffix of brandedSuffixes) {
			const candidate = stripTrailingJunk(`${s}${suffix}`);
			if (fitsTitleLimits(candidate)) return candidate;
		}
	}

	const suffixes = hasRichKeywords(s)
		? [' | Deadside', ' on PC', ' | 2026', ' | PC', ' Guide']
		: [' | Deadside Cheats', ' | ESP & Radar', ' | PC Cheats', ' for PC'];

	for (const suffix of suffixes) {
		const candidate = stripTrailingJunk(`${s}${suffix}`);
		if (fitsTitleLimits(candidate)) return candidate;
	}

	const fallbackSuffixes = [' | PC License', ' | License Info', ' | Deadside Guide', ' | PC Cheats'];
	for (const suffix of fallbackSuffixes) {
		const candidate = stripTrailingJunk(`${s}${suffix}`);
		if (fitsTitleLimits(candidate)) return candidate;
	}

	if (s.length < 30) {
		const padded = stripTrailingJunk(`${s} | Deadside Cheats`);
		return fitsTitleLimits(padded) ? padded : clampTitleMax(padded);
	}
	return s;
}

/** Trim titles to Google's SERP display limits at a clean word boundary. */
export function clampTitleMax(text) {
	let t = stripTrailingJunk(text);
	if (fitsTitleLimits(t)) return t;

	// Trim the topic segment when only slightly over the limit (preserve brand suffix).
	if (t.length <= TITLE_MAX + 6 && titlePixelWidth(t) <= TITLE_MAX_PX + 24) {
		const pipeIdx = t.indexOf(' | ');
		if (pipeIdx > 20) {
			const suffix = t.slice(pipeIdx);
			let topic = t.slice(0, pipeIdx).trim();
			while (
				`${topic}${suffix}`.length > TITLE_MAX ||
				titlePixelWidth(`${topic}${suffix}`) > TITLE_MAX_PX
			) {
				const lastBreak = Math.max(
					topic.lastIndexOf(' '),
					topic.lastIndexOf('—'),
					topic.lastIndexOf('-'),
				);
				if (lastBreak >= 18) topic = topic.slice(0, lastBreak).trim();
				else topic = stripTrailingJunk(topic.slice(0, -1));
				if (topic.length < 18) break;
			}
			const candidate = stripTrailingJunk(`${topic}${suffix}`);
			if (fitsTitleLimits(candidate)) return candidate;
			t = candidate;
		} else {
			while (t.length > TITLE_MAX || titlePixelWidth(t) > TITLE_MAX_PX) {
				t = stripTrailingJunk(t.slice(0, -1));
			}
			if (fitsTitleLimits(t)) return t;
		}
	}

	// Shorten the topic segment before dropping the brand suffix after ' | '.
	const pipeIdx = t.indexOf(' | ');
	if (pipeIdx > 20) {
		const suffix = t.slice(pipeIdx);
		let topic = t.slice(0, pipeIdx).trim();
		while (topic.length > 18) {
			const candidate = stripTrailingJunk(`${topic}${suffix}`);
			if (fitsTitleLimits(candidate)) return candidate;
			const lastBreak = Math.max(
				topic.lastIndexOf(' '),
				topic.lastIndexOf('—'),
				topic.lastIndexOf('-'),
			);
			if (lastBreak >= 18) topic = topic.slice(0, lastBreak).trim();
			else topic = stripTrailingJunk(topic.slice(0, -1));
		}
	}

	while (t.length > TITLE_MAX || titlePixelWidth(t) > TITLE_MAX_PX) {
		const charLimit = Math.min(t.length - 1, TITLE_MAX);
		const pxLimit =
			titlePixelWidth(t) > TITLE_MAX_PX
				? Math.max(20, Math.floor((charLimit * TITLE_MAX_PX) / titlePixelWidth(t)))
				: charLimit;
		const target = Math.min(charLimit, pxLimit);
		const slice = t.slice(0, target);
		const pipeBreak = slice.lastIndexOf(' | ');
		const spaceBreak = slice.lastIndexOf(' ');
		const cutAt =
			pipeBreak >= 32 ? pipeBreak : spaceBreak >= 28 ? spaceBreak : Math.max(0, target - 1);
		const next = stripTrailingJunk(slice.slice(0, cutAt));
		if (!next || next.length >= t.length) {
			t = stripTrailingJunk(t.slice(0, TITLE_MAX));
			break;
		}
		t = next;
	}

	return stripTrailingJunk(t);
}

/** Expand short titles, then clamp long ones — production entry point. */
export function finalizeTitle(text) {
	return clampTitleMax(expandTitleMin(text));
}
