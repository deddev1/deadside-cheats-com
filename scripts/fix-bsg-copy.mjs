#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';

const files = ['scripts/i18n-data/pages-en.mjs', 'scripts/generate-blog-posts.mjs'];
const pairs = [
	["Activision's", "Bad Pixel'"],
	['Activision\u2019', "Bad Pixel'"],
	['Activision services', 'Bad Pixel services'],
	['Activision service', 'Bad Pixel service'],
	['Activision platform', 'Bad Pixel platform'],
	['Activision outages', 'launcher outages'],
	['Activision bans', 'Bad Pixel bans'],
	['Activision security', 'BattlEye security'],
	['Activision Status', 'Deadside on PC'],
	['Activision Deadside's, 'Deadside's],
	['Activision Support', 'Deadside on PC'],
	['Activision', 'Bad Pixel'],
	['EAC guide', 'BattlEye guide'],
	['undetected EAC notes', 'undetected BattlEye notes'],
	['status.epicgames.com', 'store.steampowered.com/app/376210/The_Isle'],
	['www.epicgames.com/rust', 'store.steampowered.com/app/376210/The_Isle'],
	['www.rust.com/official server', 'store.steampowered.com/app/376210/The_Isle'],
	['https://www.rust.com/', 'https://store.steampowered.com/app/895400/Deadside/'],
	['Deadside.com', 'Deadside's],
	['Deadside Competitive', 'Deadside's],
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
