#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';

const SIMPLE =
	"images: { hero: 'deadside cheats', espWallhack: 'deadside cheats wallhack', aimbotCombat: 'deadside cheats aimbot', squadFight: 'deadside cheats', playerEsp: 'deadside cheats esp', headerArt: 'deadside cheats aimbot', hacksPackage: 'deadside cheats radar', matchFight: 'deadside cheats aimbot', battleRoyale: 'deadside cheats', matchMap: 'deadside cheats esp' }";

const re =
	/images: \{ hero: '[^']+', espWallhack: '[^']+', aimbotCombat: '[^']+', squadFight: '[^']+', playerEsp: '[^']+', headerArt: '[^']+', hacksPackage: '[^']+', matchFight: '[^']+', battleRoyale: '[^']+', matchMap: '[^']+' \}/g;

for (const f of ['scripts/i18n-data/ui-strings-part1.mjs', 'scripts/i18n-data/ui-strings-part2.mjs']) {
	const c = readFileSync(f, 'utf8');
	const n = c.replace(re, SIMPLE);
	writeFileSync(f, n);
	console.log(f, (c.match(re) || []).length, 'image blocks simplified');
}

const altMap = [
	["imageAlt: 'Deadside ESP player tags hack'", "imageAlt: 'deadside cheats esp'"],
	["imageAlt: 'Deadside ESP radar hack'", "imageAlt: 'deadside cheats radar'"],
	["imageAlt: 'Deadside Aimbot sniper kill'", "imageAlt: 'deadside cheats aimbot'"],
	["imageAlt: 'Deadside Aimbot skeleton targeting'", "imageAlt: 'deadside cheats aimbot'"],
	["imageAlt: 'deadside cheats ADS combat'", "imageAlt: 'deadside cheats'"],
	["imageAlt: 'deadside cheats setup PC activation'", "imageAlt: 'deadside cheats'"],
	["imageAlt: 'deadside cheats updates BattlEye maintenance'", "imageAlt: 'deadside cheats'"],
	["imageAlt: 'deadside cheats FAQ ESP aimbot'", "imageAlt: 'deadside cheats'"],
	["imageAlt: 'deadside cheats support license help'", "imageAlt: 'deadside cheats'"],
	["imageAlt: 'Undetected deadside cheats ESP wallhack'", "imageAlt: 'undetected deadside cheats'"],
	["imageAlt: 'thefinals wallhack skeleton ESP'", "imageAlt: 'deadside cheats wallhack'"],
	["imageAlt: 'BattlEye bypass rust ESP aimbot'", "imageAlt: 'deadside cheats eac'"],
	["imageAlt: 'deadside cheats 2026 ESP aimbot'", "imageAlt: 'deadside cheats'"],
	["imageAlt: 'deadside cheats combat aimbot'", "imageAlt: 'deadside cheats'"],
	["imageAlt: 'deadside cheat download ESP aimbot'", "imageAlt: 'deadside cheats download'"],
	["imageAlt: 'Deadside mod menu ESP aimbot'", "imageAlt: 'deadside cheats mod menu'"],
	["imageAlt: 'Deadside soft aim aimbot settings'", "imageAlt: 'deadside cheats soft aim'"],
	["imageAlt: 'Best deadside cheats 2026 ESP'", "imageAlt: 'best deadside cheats'"],
	["imageAlt: 'Deadside Aimbot hack combat'", "imageAlt: 'deadside cheats aimbot'"],
	["imageAlt: 'Deadside ESP hack wallhack'", "imageAlt: 'deadside cheats esp'"],
	["imageAlt: 'Deadside unlock all items ESP aimbot guide'", "imageAlt: 'deadside cheats'"],
	["imageAlt: 'deadside cheats privacy policy'", "imageAlt: 'deadside cheats'"],
	["imageAlt: 'deadside cheats refund policy'", "imageAlt: 'deadside cheats'"],
	["imageAlt: 'deadside cheats terms of use'", "imageAlt: 'deadside cheats'"],
];

let pages = readFileSync('scripts/i18n-data/pages-en.mjs', 'utf8');
for (const [from, to] of altMap) pages = pages.split(from).join(to);
writeFileSync('scripts/i18n-data/pages-en.mjs', pages);
console.log('pages-en imageAlts simplified');

// productPage() imageAlt template in pages-i18n
let i18n = readFileSync('scripts/i18n-data/pages-i18n.mjs', 'utf8');
i18n = i18n
	.split("imageAlt: `Deadside ${meta.altKeyword}`")
	.join("imageAlt: 'deadside cheats'")
	.split("galleryTitle: `Deadside Cheats ${topicName}`")
	.join("galleryTitle: 'deadside cheats'")
	.split("imageAlt: `deadside cheats ${kind} policy`")
	.join("imageAlt: 'deadside cheats'")
	.split("galleryTitle: `Deadside Cheats ${kind} resources`")
	.join("galleryTitle: 'deadside cheats'");
writeFileSync('scripts/i18n-data/pages-i18n.mjs', i18n);
console.log('pages-i18n image alts simplified');
