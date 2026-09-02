import CANNIBAL_REDIRECTS from './cannibal-redirects.json';

const CANONICAL_ORIGIN = 'https://deadsidecheat.com';
const APEX_HOST = 'deadsidecheat.com';
const WWW_HOST = 'www.deadsidecheat.com';

/** Legacy domains → canonical apex (301). */
const LEGACY_HOSTS = new Set([
	'deadsidecheats.com',
	'www.deadsidecheats.com',
	'narakacheats.org',
	'www.narakacheats.org',
	'narakacheats.net',
	'www.narakacheats.net',
	'rustcheats.co',
	'www.rustcheats.co',
	'bestrustcheats.com',
	'www.bestrustcheats.com',
	'rustcheat.co',
	'www.rustcheat.co',
	'fortnitehack.net',
	'www.fortnitehack.net',
	'fortnitecheats.xyz',
	'www.fortnitecheats.xyz',
	'fortnitecheats.net',
	'www.fortnitecheats.net',
	'fortnitecheats.com',
	'www.fortnitecheats.com',
	'warzonehacks.net',
	'www.warzonehacks.net',
	'warzonescheats.net',
	'www.warzonescheats.net',
	'warzonescheats.com',
	'www.warzonescheats.com',
	'warzonescheats.xyz',
	'www.warzonescheats.xyz',
	'thefinalscheats.org',
	'www.thefinalscheats.org',
]);

// Keep in sync with public/_redirects (which preserves query strings by default, as we do below).
const PATH_REDIRECTS = {
	'/sitemap-0.xml': '/sitemap.xml',
	'/sitemap-index.xml': '/sitemap.xml',
	'/sitemap.xml/': '/sitemap.xml',
	'/sitemap-en.xml/': '/sitemap-en.xml',
	'/sitemap-i18n.xml/': '/sitemap-i18n.xml',
	'/sitemap-images.xml/': '/sitemap-images.xml',
	// Exact-match keyword → homepage (primary money URL) — do NOT redirect live pillar pages
	// (/deadside-cheats/, /best-deadside-cheats/, etc. are indexed in sitemaps).
	// Cannibalization → stronger pillars
	'/deadside-mod-menu': '/',
	'/deadside-mod-menu/': '/',
	'/deadside-unlock-all': '/',
	'/deadside-unlock-all/': '/',
	'/deadside-soft-aim': '/deadside-aimbot/',
	'/deadside-soft-aim/': '/deadside-aimbot/',
	'/deadside-wallhack': '/deadside-esp/',
	'/deadside-wallhack/': '/deadside-esp/',
	'/deadside-cheat-download': '/setup/',
	'/deadside-cheat-download/': '/setup/',
	// Legacy deadside-cheats slugs → deadside-cheats (keep in sync with path-redirects.json)
	'/deadside-cheats': '/deadside-cheats/',
	'/deadside-cheats/': '/deadside-cheats/',
	'/undetected-deadside-cheats': '/undetected-deadside-cheats/',
	'/undetected-deadside-cheats/': '/undetected-deadside-cheats/',
	'/deadside-cheats-2026': '/deadside-cheats-2026/',
	'/deadside-cheats-2026/': '/deadside-cheats-2026/',
	'/best-deadside-cheats': '/best-deadside-cheats/',
	'/best-deadside-cheats/': '/best-deadside-cheats/',
	'/deadside-esp-hack': '/deadside-esp/',
	'/deadside-esp-hack/': '/deadside-esp/',
	'/deadside-aimbot-hack': '/deadside-aimbot/',
	'/deadside-aimbot-hack/': '/deadside-aimbot/',
	'/warzone-cheats': '/',
	'/warzone-cheats/': '/',
	'/warzone-hacks': '/',
	'/warzone-hacks/': '/',
	'/warzone-esp': '/deadside-esp/',
	'/warzone-esp/': '/deadside-esp/',
	'/warzone-aimbot': '/deadside-aimbot/',
	'/warzone-aimbot/': '/deadside-aimbot/',
	'/ricochet-bypass': '/updates/',
	'/ricochet-bypass/': '/updates/',
	'/fortnite-aimbot': '/deadside-aimbot/',
	'/fortnite-aimbot/': '/deadside-aimbot/',
	'/fortnite-esp': '/deadside-esp/',
	'/fortnite-esp/': '/deadside-esp/',
	'/fortnite-hacks': '/',
	'/fortnite-hacks/': '/',
	'/battleye-bypass': '/updates/',
	'/battleye-bypass/': '/updates/',
	'/battleye-bypass-fortnite': '/updates/',
	'/battleye-bypass-fortnite/': '/updates/',
	'/blog/patch-notes-buffs-nerfs-vaults': '/blog/rust-patch-notes-guide/',
	'/blog/patch-notes-buffs-nerfs-vaults/': '/blog/rust-patch-notes-guide/',
	'/blog/chapter-7-season-3-skin-leaks-vbucks': '/blog/rust-skin-leaks-guide/',
	'/blog/chapter-7-season-3-skin-leaks-vbucks/': '/blog/rust-skin-leaks-guide/',
	'/blog/hammer-ar-s-tier-data-analysis': '/blog/rust-player-tier-list/',
	'/blog/hammer-ar-s-tier-data-analysis/': '/blog/rust-player-tier-list/',
	'/blog/zero-build-meta-broken-aggressive-strategies': '/blog/rust-farming-run-aggressive-strategies/',
	'/blog/zero-build-meta-broken-aggressive-strategies/': '/blog/rust-farming-run-aggressive-strategies/',
	'/blog/fncs-meta-watch-community-event-drops': '/blog/rust-competitive-meta-guide/',
	'/blog/fncs-meta-watch-community-event-drops/': '/blog/rust-competitive-meta-guide/',
	'/blog/secret-loot-routes-full-gold': '/blog/rust-loot-routes-guide/',
	'/blog/secret-loot-routes-full-gold/': '/blog/rust-loot-routes-guide/',
	'/blog/bugha-settings-pro-setup': '/blog/rust-pro-settings-guide/',
	'/blog/bugha-settings-pro-setup/': '/blog/rust-pro-settings-guide/',
	'/blog/creative-warmup-maps-pros-use': '/blog/rust-warmup-maps-ranked/',
	'/blog/creative-warmup-maps-pros-use/': '/blog/rust-warmup-maps-ranked/',
	'/reviews/deadside-esp-zero-build-review-buildsr4k': '/reviews/deadside-esp-growth-run-review-buildsr4k/',
	'/reviews/deadside-esp-zero-build-review-buildsr4k/': '/reviews/deadside-esp-growth-run-review-buildsr4k/',
	'/reviews/deadside-radar-hack-review-vanlifefn': '/reviews/deadside-radar-hack-review-vanlifedeadside/',
	'/reviews/deadside-radar-hack-review-vanlifefn/': '/reviews/deadside-radar-hack-review-vanlifedeadside/',
	'/reviews/deadside-radar-hack-review-vanlifewz': '/reviews/deadside-radar-hack-review-vanlifedeadside/',
	'/reviews/deadside-radar-hack-review-vanlifewz/': '/reviews/deadside-radar-hack-review-vanlifedeadside/',
	'/reviews/deadside-radar-hack-review-vanliferust': '/reviews/deadside-radar-hack-review-vanlifedeadside/',
	'/reviews/deadside-radar-hack-review-vanliferust/': '/reviews/deadside-radar-hack-review-vanlifedeadside/',
	'/reviews/rust-controller-soft-aim-review-ctrl-player99': '/reviews/deadside-soft-aim-review-ctrl-player99/',
	'/reviews/rust-controller-soft-aim-review-ctrl-player99/': '/reviews/deadside-soft-aim-review-ctrl-player99/',
};

const SECURITY_HEADERS = {
	'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
	'X-Content-Type-Options': 'nosniff',
	'Referrer-Policy': 'strict-origin-when-cross-origin',
	'X-Frame-Options': 'DENY',
	'Cross-Origin-Opener-Policy': 'same-origin',
	'Cross-Origin-Resource-Policy': 'same-origin',
	'Cross-Origin-Embedder-Policy': 'credentialless',
	'Origin-Agent-Cluster': '?1',
	'Permissions-Policy':
		'accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()',
	'Content-Security-Policy': [
		"default-src 'self'",
		"base-uri 'self'",
		"object-src 'none'",
		"frame-ancestors 'none'",
		"form-action 'self' https://zadeyo.com",
		"img-src 'self' data: blob: https:",
		"media-src 'self' blob: https:",
		"font-src 'self' data:",
		"style-src 'self' 'unsafe-inline'",
		"script-src 'self'",
		"connect-src 'self'",
		"upgrade-insecure-requests",
		"trusted-types default",
		"require-trusted-types-for 'script'",
	].join('; '),
};

function getClientProtocol(request) {
	const visitor = request.headers.get('cf-visitor');
	if (visitor) {
		try {
			const scheme = JSON.parse(visitor).scheme;
			if (scheme) return String(scheme).toLowerCase();
		} catch {
			// ignore malformed cf-visitor
		}
	}

	const forwarded = request.headers.get('x-forwarded-proto');
	if (forwarded) {
		return forwarded.split(',')[0].trim().toLowerCase();
	}

	return new URL(request.url).protocol.replace(':', '').toLowerCase();
}

function applySecurityHeaders(headers, { html = false } = {}) {
	for (const [key, value] of Object.entries(SECURITY_HEADERS)) {
		headers.set(key, value);
	}

	if (html) {
		const contentType = headers.get('Content-Type') || '';
		if (!/charset=/i.test(contentType)) {
			headers.set('Content-Type', 'text/html; charset=utf-8');
		}
		// Browser always revalidates; Cloudflare edge caches briefly for TTFB.
		headers.set('Cache-Control', 'public, max-age=0, must-revalidate');
		headers.set('CDN-Cache-Control', 'public, s-maxage=600, stale-while-revalidate=86400');
		headers.set('Cloudflare-CDN-Cache-Control', 'public, s-maxage=600, stale-while-revalidate=86400');
	}
}

/** /sitemap.xml and /sitemap-*.xml */
const SITEMAP_PATH = /^\/sitemap(?:-[a-z0-9-]+)?\.xml$/;

/** Legacy origins rewritten in sitemap XML (GSC "URL not allowed" when stale dist uses old apex). */
const LEGACY_ORIGIN_REPLACEMENTS = [
	['https://www.deadsidecheats.com', CANONICAL_ORIGIN],
	['http://www.deadsidecheats.com', CANONICAL_ORIGIN],
	['https://deadsidecheats.com', CANONICAL_ORIGIN],
	['http://deadsidecheats.com', CANONICAL_ORIGIN],
	['https://www.thefinalscheats.org', CANONICAL_ORIGIN],
	['http://www.thefinalscheats.org', CANONICAL_ORIGIN],
	['https://thefinalscheats.org', CANONICAL_ORIGIN],
	['http://thefinalscheats.org', CANONICAL_ORIGIN],
];

function rewriteLegacyOriginsInSitemapXml(xml) {
	let result = xml;
	for (const [from, to] of LEGACY_ORIGIN_REPLACEMENTS) {
		result = result.split(from).join(to);
	}
	return result;
}

/** Flat .xml sitemaps — redirect any other *.xml/ trailing-slash URL (locale sitemaps). */
function xmlTrailingSlashRedirect(pathname) {
	if (!pathname.endsWith('.xml/')) return null;
	return pathname.slice(0, -1);
}

/** Add trailing slash for directory-style paths (matches Astro trailingSlash: 'always'). */
function trailingSlashRedirect(pathname) {
	if (!pathname || pathname === '/' || pathname.includes('.') || pathname.endsWith('/')) {
		return null;
	}
	return `${pathname}/`;
}

export async function onRequest(context) {
	const url = new URL(context.request.url);
	const host = url.hostname.toLowerCase();
	const proto = getClientProtocol(context.request);

	const isLegacyHost = LEGACY_HOSTS.has(host);
	const isProductionHost = host === APEX_HOST || host === WWW_HOST || isLegacyHost;
	const needsHostRedirect = host === WWW_HOST || isLegacyHost;
	const needsHttpsRedirect = isProductionHost && proto === 'http';

	if (needsHostRedirect || needsHttpsRedirect) {
		const mappedPath = PATH_REDIRECTS[url.pathname] ?? url.pathname;
		const target = new URL(mappedPath + url.search, CANONICAL_ORIGIN);
		const headers = new Headers({
			Location: target.toString(),
			'Cache-Control': 'no-store',
			'CDN-Cache-Control': 'no-store',
			'Cloudflare-CDN-Cache-Control': 'no-store',
		});
		applySecurityHeaders(headers);
		return new Response(null, { status: 301, headers });
	}

	const pathRedirect =
		PATH_REDIRECTS[url.pathname] ??
		CANNIBAL_REDIRECTS[url.pathname] ??
		xmlTrailingSlashRedirect(url.pathname) ??
		trailingSlashRedirect(url.pathname);
	if (pathRedirect) {
		const headers = new Headers({
			Location: new URL(pathRedirect + url.search, CANONICAL_ORIGIN).toString(),
			'Cache-Control': 'no-store',
		});
		applySecurityHeaders(headers);
		return new Response(null, { status: 301, headers });
	}

	const response = await context.next();
	const headers = new Headers(response.headers);
	const contentType = headers.get('Content-Type') || '';
	const isHtml = contentType.includes('text/html');
	const isSitemap =
		SITEMAP_PATH.test(url.pathname) &&
		response.ok &&
		(contentType.includes('xml') || url.pathname.endsWith('.xml'));
	const isImmutableAsset = /\.(?:webp|png|jpe?g|gif|svg|ico|woff2?|ttf|eot)$/i.test(url.pathname);

	if (isImmutableAsset) {
		headers.set('Cache-Control', 'public, max-age=31536000, immutable');
		headers.set('CDN-Cache-Control', 'public, s-maxage=31536000, immutable');
		headers.set('Cloudflare-CDN-Cache-Control', 'public, s-maxage=31536000, immutable');
	}

	if (isSitemap) {
		headers.set('Content-Type', 'application/xml; charset=utf-8');
		headers.set('Cache-Control', 'no-store');
		headers.set('CDN-Cache-Control', 'no-store');
		headers.set('Cloudflare-CDN-Cache-Control', 'no-store');
		applySecurityHeaders(headers, { html: false });
		const xml = rewriteLegacyOriginsInSitemapXml(await response.text());
		return new Response(xml, {
			status: response.status,
			statusText: response.statusText,
			headers,
		});
	}

	applySecurityHeaders(headers, { html: isHtml });

	return new Response(response.body, {
		status: response.status,
		statusText: response.statusText,
		headers,
	});
}
