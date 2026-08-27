#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';

const SIMPLE =
	"images: { hero: 'naraka cheats', espWallhack: 'naraka cheats wallhack', aimbotCombat: 'naraka cheats aimbot', squadFight: 'naraka cheats', playerEsp: 'naraka cheats esp', headerArt: 'naraka cheats aimbot', hacksPackage: 'naraka cheats radar', matchFight: 'naraka cheats aimbot', battleRoyale: 'naraka cheats', matchMap: 'naraka cheats esp' }";

const re =
	/images: \{ hero: '[^']+', espWallhack: '[^']+', aimbotCombat: '[^']+', squadFight: '[^']+', playerEsp: '[^']+', headerArt: '[^']+', hacksPackage: '[^']+', matchFight: '[^']+', battleRoyale: '[^']+', matchMap: '[^']+' \}/g;

for (const f of ['scripts/i18n-data/ui-strings-part1.mjs', 'scripts/i18n-data/ui-strings-part2.mjs']) {
	const c = readFileSync(f, 'utf8');
	const n = c.replace(re, SIMPLE);
	writeFileSync(f, n);
	console.log(f, (c.match(re) || []).length, 'image blocks simplified');
}

const altMap = [
	["imageAlt: 'Naraka ESP player tags hack'", "imageAlt: 'naraka cheats esp'"],
	["imageAlt: 'Naraka ESP radar hack'", "imageAlt: 'naraka cheats radar'"],
	["imageAlt: 'Naraka Aimbot sniper kill'", "imageAlt: 'naraka cheats aimbot'"],
	["imageAlt: 'Naraka Aimbot skeleton targeting'", "imageAlt: 'naraka cheats aimbot'"],
	["imageAlt: 'naraka cheats ADS combat'", "imageAlt: 'naraka cheats'"],
	["imageAlt: 'naraka cheats setup PC activation'", "imageAlt: 'naraka cheats'"],
	["imageAlt: 'naraka cheats updates NEAC maintenance'", "imageAlt: 'naraka cheats'"],
	["imageAlt: 'naraka cheats FAQ ESP aimbot'", "imageAlt: 'naraka cheats'"],
	["imageAlt: 'naraka cheats support license help'", "imageAlt: 'naraka cheats'"],
	["imageAlt: 'Undetected naraka cheats ESP wallhack'", "imageAlt: 'undetected naraka cheats'"],
	["imageAlt: 'thefinals wallhack skeleton ESP'", "imageAlt: 'naraka cheats wallhack'"],
	["imageAlt: 'NEAC bypass rust ESP aimbot'", "imageAlt: 'naraka cheats eac'"],
	["imageAlt: 'naraka cheats 2026 ESP aimbot'", "imageAlt: 'naraka cheats'"],
	["imageAlt: 'naraka cheats combat aimbot'", "imageAlt: 'naraka cheats'"],
	["imageAlt: 'naraka cheat download ESP aimbot'", "imageAlt: 'naraka cheats download'"],
	["imageAlt: 'Naraka mod menu ESP aimbot'", "imageAlt: 'naraka cheats mod menu'"],
	["imageAlt: 'Naraka soft aim aimbot settings'", "imageAlt: 'naraka cheats soft aim'"],
	["imageAlt: 'Best naraka cheats 2026 ESP'", "imageAlt: 'best naraka cheats'"],
	["imageAlt: 'Naraka Aimbot hack combat'", "imageAlt: 'naraka cheats aimbot'"],
	["imageAlt: 'Naraka ESP hack wallhack'", "imageAlt: 'naraka cheats esp'"],
	["imageAlt: 'Naraka unlock all items ESP aimbot guide'", "imageAlt: 'naraka cheats'"],
	["imageAlt: 'naraka cheats privacy policy'", "imageAlt: 'naraka cheats'"],
	["imageAlt: 'naraka cheats refund policy'", "imageAlt: 'naraka cheats'"],
	["imageAlt: 'naraka cheats terms of use'", "imageAlt: 'naraka cheats'"],
];

let pages = readFileSync('scripts/i18n-data/pages-en.mjs', 'utf8');
for (const [from, to] of altMap) pages = pages.split(from).join(to);
writeFileSync('scripts/i18n-data/pages-en.mjs', pages);
console.log('pages-en imageAlts simplified');

// productPage() imageAlt template in pages-i18n
let i18n = readFileSync('scripts/i18n-data/pages-i18n.mjs', 'utf8');
i18n = i18n
	.split("imageAlt: `Naraka ${meta.altKeyword}`")
	.join("imageAlt: 'naraka cheats'")
	.split("galleryTitle: `Naraka Cheats ${topicName}`")
	.join("galleryTitle: 'naraka cheats'")
	.split("imageAlt: `naraka cheats ${kind} policy`")
	.join("imageAlt: 'naraka cheats'")
	.split("galleryTitle: `Naraka Cheats ${kind} resources`")
	.join("galleryTitle: 'naraka cheats'");
writeFileSync('scripts/i18n-data/pages-i18n.mjs', i18n);
console.log('pages-i18n image alts simplified');
