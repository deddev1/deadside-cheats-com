#!/usr/bin/env node
/** Final pass: fix remaining Naraka references in src/. */
import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'src');
const REMOVE_PAGE_IDS = ['hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats', 'aimbot-hack', 'esp-hack', 'unlock-all'];

const REPLACEMENTS = [
	['narakaImages', 'narakaImages'],
	["from '../data/naraka'", "from '../data/naraka'"],
	["from './naraka'", "from './naraka'"],
	['/undetected-naraka-cheats/', '/undetected-naraka-cheats/'],
	['/naraka-wallhack/', '/naraka-wallhack/'],
	['/naraka-radar-hack/', '/naraka-radar-hack/'],
	['/neac-bypass/', '/neac-bypass/'],
	['/naraka-cheats-2026/', '/naraka-cheats-2026/'],
	['/naraka-aimbot/', '/naraka-aimbot/'],
	['/naraka-esp/', '/naraka-esp/'],
	['/naraka-cheats/', '/naraka-esp/'],
	['Naraka Cheats', 'Naraka Cheats'],
	['naraka cheats', 'naraka cheats'],
	['thefinals wallhack', 'Naraka wallhack'],
	['naraka radar', 'Naraka radar'],
	['Naraka Aimbot', 'Naraka Aimbot'],
	['Naraka ESP', 'Naraka ESP'],
	['Naraka's, 'Naraka's],
	['NEAC', 'NEAC'],
	['neac', 'neac'],
	['narakacheats.org', 'narakacheats.org'],
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
