import cannibalRedirects from '../functions/cannibal-redirects.json';
import pathRedirects from '../functions/path-redirects.json';

export const PATH_REDIRECTS = pathRedirects as Record<string, string>;

export const CANNIBAL_REDIRECTS = cannibalRedirects as Record<string, string>;

/** EN cannibal URLs — static RedirectPage.astro HTML; Worker still 301s in production. */
export const STATIC_REDIRECT_HTML_PATHS = new Set([
	'/deadside-aimbot-hack/',
	'/deadside-esp-hack/',
	'/deadside-mod-menu/',
	'/deadside-unlock-all/',
	'/deadside-soft-aim/',
	'/deadside-wallhack/',
	'/deadside-cheat-download/',
]);

export function isBrandStudioPath(pathname: string): boolean {
	return (
		pathname === '/brand-studio' ||
		pathname.startsWith('/brand-studio/') ||
		pathname === '/__brand' ||
		pathname.startsWith('/__brand/')
	);
}

export function xmlTrailingSlashRedirect(pathname: string): string | null {
	if (!pathname.endsWith('.xml/')) return null;
	return pathname.slice(0, -1);
}

/** Matches Astro trailingSlash: 'always'. */
export function trailingSlashRedirect(pathname: string): string | null {
	if (!pathname || pathname === '/' || pathname.includes('.') || pathname.endsWith('/')) {
		return null;
	}
	return `${pathname}/`;
}

export function resolvePathRedirect(pathname: string): string | null {
	if (STATIC_REDIRECT_HTML_PATHS.has(pathname)) {
		return null;
	}
	return (
		PATH_REDIRECTS[pathname] ??
		CANNIBAL_REDIRECTS[pathname] ??
		xmlTrailingSlashRedirect(pathname) ??
		trailingSlashRedirect(pathname)
	);
}
