#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';

const files = ['scripts/i18n-data/pages-en.mjs', 'scripts/generate-blog-posts.mjs'];
const pairs = [
	["Activision's", "24 Entertainment'"],
	['Activision\u2019', "24 Entertainment'"],
	['Activision services', '24 Entertainment services'],
	['Activision service', '24 Entertainment service'],
	['Activision platform', '24 Entertainment platform'],
	['Activision outages', 'launcher outages'],
	['Activision bans', '24 Entertainment bans'],
	['Activision security', 'NEAC security'],
	['Activision Status', 'Naraka on PC'],
	['Activision Naraka's, 'Naraka's],
	['Activision Support', 'Naraka on PC'],
	['Activision', '24 Entertainment'],
	['EAC guide', 'NEAC guide'],
	['undetected EAC notes', 'undetected NEAC notes'],
	['status.epicgames.com', 'store.steampowered.com/app/376210/The_Isle'],
	['www.epicgames.com/rust', 'store.steampowered.com/app/376210/The_Isle'],
	['www.rust.com/official server', 'store.steampowered.com/app/376210/The_Isle'],
	['https://www.rust.com/', 'https://store.steampowered.com/app/1203220/NARAKA_BLADEPOINT/'],
	['Naraka.com', 'Naraka's],
	['Naraka Competitive', 'Naraka's],
];

for (const f of files) {
	let c = readFileSync(f, 'utf8');
	const orig = c;
	for (const [a, b] of pairs) c = c.split(a).join(b);
	if (c !== orig) {
		writeFileSync(f, c);
		console.log('updated', f);
	} else {
		console.log('no change', f);
	}
}
