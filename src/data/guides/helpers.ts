import { siteConfig } from '../site';
import type { GuideDefinition, ResolvedGuide } from './types';
import { guides as deadsideGuides } from './deadside-guides.generated';
import { guides as externalGuides } from './external-guides.generated';

export const guides: GuideDefinition[] = [...deadsideGuides, ...externalGuides];

export function getGuidesBasePath(): string {
	return '/guides/';
}

export function resolveGuide(guide: GuideDefinition): ResolvedGuide {
	return {
		...guide,
		canonicalPath: `/guides/${guide.slug}/`,
	};
}

export function getAllGuides(): ResolvedGuide[] {
	return guides.map(resolveGuide);
}

export function getGuideBySlug(slug: string): ResolvedGuide | undefined {
	const guide = guides.find((g) => g.slug === slug);
	return guide ? resolveGuide(guide) : undefined;
}

export function getDeadsideArticleGuides(): ResolvedGuide[] {
	return deadsideGuides.map(resolveGuide);
}

export function getExternalGuides(): ResolvedGuide[] {
	return externalGuides.map(resolveGuide);
}

export function getGuidesByGame(): Map<string, ResolvedGuide[]> {
	const map = new Map<string, ResolvedGuide[]>();
	for (const guide of getExternalGuides()) {
		const list = map.get(guide.game) ?? [];
		list.push(guide);
		map.set(guide.game, list);
	}
	return new Map([...map.entries()].sort(([a], [b]) => a.localeCompare(b)));
}

/** Round-robin interleave so guides from the same game are not grouped together. */
export function getInterleavedExternalGuides(): ResolvedGuide[] {
	const buckets = [...getGuidesByGame().values()];
	if (buckets.length === 0) return [];

	const mixed: ResolvedGuide[] = [];
	let index = 0;
	const total = buckets.reduce((sum, bucket) => sum + bucket.length, 0);

	while (mixed.length < total) {
		let added = false;
		for (const bucket of buckets) {
			if (index < bucket.length) {
				mixed.push(bucket[index]);
				added = true;
			}
		}
		if (!added) break;
		index += 1;
	}

	return mixed;
}

/** @deprecated Use getInterleavedExternalGuides() — kept for transitional imports. */
export function getMixedGuides(): ResolvedGuide[] {
	return getInterleavedExternalGuides();
}

export function absoluteGuideUrl(slug?: string): string {
	const base = `${siteConfig.url}${getGuidesBasePath()}`;
	return slug ? `${siteConfig.url}/guides/${slug}/` : base;
}

export function isDeadsideGuide(guide: Pick<GuideDefinition, 'source'>): boolean {
	return guide.source === 'native';
}

export function isExternalGuide(guide: Pick<GuideDefinition, 'source'>): boolean {
	return guide.source === 'external';
}

export type GuideSitemapEntry = {
	path: string;
	lastmod: string;
	changefreq: 'weekly' | 'monthly';
	priority: number;
	images: { url: string; title: string; caption: string }[];
};

/** Guides hub + native Deadside posts for sitemap-en.xml (external guides excluded). */
const LEGACY_GUIDE_SLUGS = new Set([
	'the-finals-thefinalscheats-org-guide',
	'the-finals-thefinalscheats-net-guide',
]);

export function getGuidesSitemapEntries(): GuideSitemapEntry[] {
	const hub: GuideSitemapEntry = {
		path: getGuidesBasePath(),
		lastmod: '2026-08-25',
		changefreq: 'weekly',
		priority: 0.75,
		images: [],
	};

	const posts = getDeadsideArticleGuides()
		.filter((guide) => !LEGACY_GUIDE_SLUGS.has(guide.slug))
		.map((guide) => ({
			path: guide.canonicalPath,
			lastmod: guide.updated,
			changefreq: 'monthly' as const,
			priority: 0.7,
			images: guide.imageUrl
				? [
						{
							url: guide.imageUrl,
							title: guide.title,
							caption: guide.metaDescription,
						},
					]
				: [],
		}));

	return [hub, ...posts];
}
