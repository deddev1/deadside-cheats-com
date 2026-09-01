#!/usr/bin/env node
/** Final pass: fix remaining Deadside references in src/. */
import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'src');
const REMOVE_PAGE_IDS = ['hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats', 'aimbot-hack', 'esp-hack', 'unlock-all'];

const REPLACEMENTS = [
	['deadsideImages', 'deadsideImages'],
	["from '../data/deadside'", "from '../data/deadside'"],
	["from './deadside'", "from './deadside'"],
	['/undetected-deadside-cheats/', '/undetected-deadside-cheats/'],
	['/deadside-wallhack/', '/deadside-wallhack/'],
	['/deadside-radar-hack/', '/deadside-radar-hack/'],
	['/battleye-bypass/', '/battleye-bypass/'],
	['/deadside-cheats-2026/', '/deadside-cheats-2026/'],
	['/deadside-aimbot/', '/deadside-aimbot/'],
	['/deadside-esp/', '/deadside-esp/'],
	['/deadside-cheats/', '/deadside-esp/'],
	['Deadside Cheats', 'Deadside Cheats'],
	['deadside cheats', 'deadside cheats'],
	['thefinals wallhack', 'Deadside wallhack'],
	['deadside radar', 'Deadside radar'],
	['Deadside Aimbot', 'Deadside Aimbot'],
	['Deadside ESP', 'Deadside ESP'],
	['Deadside's, 'Deadside's],
	['BattlEye', 'BattlEye'],
	['battleye', 'battleye'],
	['deadsidecheats.com', 'deadsidecheats.com'],
	['operatorEsp', 'playerEsp'],
	['extractFight', 'raidFight'],
	['alMazrah', 'raidMap'],
];

async function walk(dir, files = []) {
	for (const entry of await readdir(dir, { withFileTypes: true })) {
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) await walk(full, files);
		else if (/\.(ts|astro|js)$/.test(entry.name)) files.push(full);
	}
	return files;
}

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	for (const id of REMOVE_PAGE_IDS) {
		r = r.replace(new RegExp(`\\t'${id}':[^\\n]*\\n`, 'g'), '');
		r = r.replace(new RegExp(`\\{ label:[^}]*href: '/[^']*${id}[^']*/' \\},\\n`, 'g'), '');
	}
	return r;
}

for (const file of await walk(ROOT)) {
	const orig = await readFile(file, 'utf8');
	const updated = apply(orig);
	if (updated !== orig) {
		await writeFile(file, updated);
		console.log('Fixed', path.relative(ROOT, file));
	}
}
