#!/usr/bin/env node
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const FILE = path.join(ROOT, 'src/data/guides/external-guides.generated.ts');
const src = readFileSync(FILE, 'utf8');

const urls = [...src.matchAll(/externalUrl: "([^"]+)"/g)].map((m) => m[1]);
const slugs = [...src.matchAll(/slug: "([^"]+)"/g)].map((m) => m[1]);
const games = [...src.matchAll(/game: "([^"]+)"/g)].map((m) => m[1]);
const images = [...src.matchAll(/imageUrl: "([^"]+)"/g)].map((m) => m[1]);
const anchors = [...src.matchAll(/anchorText: "([^"]+)"/g)].map((m) => m[1]);

const guides = urls.map((externalUrl, i) => ({
	externalUrl,
	slug: slugs[i],
	game: games[i],
	anchorText: anchors[i],
	imageUrl: images[i],
	path: `/guides/${slugs[i]}/`,
}));

const urls = guides.map((g) => g.externalUrl);
const slugs = guides.map((g) => g.slug);
console.log(`Total: ${guides.length}`);
console.log(`Unique URLs: ${new Set(urls).size}`);
console.log(`Unique slugs: ${new Set(slugs).size}`);
console.log(`Non-IGN images: ${guides.filter((g) => !/ignimgs\.com|sm\.ign\.com/.test(g.imageUrl)).length}`);

if (process.argv.includes('--table')) {
	console.log('\n| Provided URL | Game/Niche | Created Page Path | IGN Image Used | Anchor Text Used |');
	console.log('|---|---|---|---|---|');
	for (const g of guides) {
		console.log(`| ${g.externalUrl} | ${g.game} | ${g.path} | ${g.imageUrl} | ${g.anchorText} |`);
	}
}
