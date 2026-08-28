/**
 * Near-duplicate pageIds → stronger pillars (301 in production via Worker + path-redirects).
 *
 * Long-tail URLs (/naraka-wallhack/, /naraka-mod-menu/, /naraka-cheat-download/, etc.)
 * stay on 301 — not thin indexable stubs — to consolidate link equity on pillar pages
 * and avoid SERP cannibalization against /naraka-esp/, /naraka-aimbot/, /, and /naraka-cheats/.
 */
export const cannibalRedirectTargets = {
	'mod-menu': 'home',
	'unlock-all': 'home',
	'aimbot-hack': 'naraka-aimbot',
	'soft-aim': 'naraka-aimbot',
	'esp-hack': 'naraka-esp',
	wallhack: 'naraka-esp',
	'cheat-download': 'setup',
} as const;

export type CannibalPageId = keyof typeof cannibalRedirectTargets;

export const cannibalPageIds = Object.keys(cannibalRedirectTargets) as CannibalPageId[];

export function isCannibalPageId(pageId: string): pageId is CannibalPageId {
	return pageId in cannibalRedirectTargets;
}

export function getCannibalTargetId(pageId: string): string {
	return (cannibalRedirectTargets as Record<string, string>)[pageId] ?? pageId;
}
