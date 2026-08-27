#!/usr/bin/env node
/**
 * Purge Fortnite/Warzone/BR leftovers from EN page source and regenerate i18n.
 * Run: node scripts/seo-perfect-en.mjs
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PAGES_EN = path.join(ROOT, 'scripts', 'i18n-data', 'pages-en.mjs');

/** @type {Array<[RegExp|string, string]>} */
const replacements = [
	// Wrong publishers in prose (EXT.finals already links to escapefromrust.com)
	['published by ${EXT.finals}', 'published by Facepunch (${EXT.finals})'],
	['from ${EXT.finals}', 'from ${EXT.finals}'],
	['via ${EXT.finals}', 'via ${EXT.finals}'],
	['belong with ${EXT.finals}', 'belong with 24 Entertainment'],
	['${EXT.finals} terms', '24 Entertainment terms'],
	['${EXT.finals} season updates', '${EXT.finals} patch cycle and map updates'],

	['PC & Controllers', 'Windows PC'],
	['PC & Controller Guide', 'Windows PC Guide'],
	['PC and controller cheats', 'Windows PC cheats'],

	// BR / Fortnite lexicon → Naraka
	['vehicles, loot', 'players, NPCs, loot'],
	['notice vehicles before they push your position', 'spot players and NPCs before they push your angle'],
	['Player, boss, and loot', 'Player, apex, and loot'],
	['boss and extract awareness cues', 'apex and base awareness cues'],
	['boss threat cues', 'threat cues'],
	['bosses, and loot', 'enemy players, and loot'],
	['track enemy players and loot', 'track enemy players and loot'],
	['ARs, SMGs, and long-ranges', 'carnivores, ambush builds, and long-range species'],
	['long-range DMR fights and dorms clears', 'long-range ambush melee combats and high-traffic zone clears'],
	['Save separate Aimbot profiles for ARs, SMGs, and long-ranges', 'Save separate Aimbot profiles for carnivores, ambush builds, and long-range species'],
	['building and rooftop fights', 'forest and monument edge ambushes'],
	['weapons, and NEAC', 'species balance, and NEAC'],
	['major weapon updates', 'major species balance updates'],
	['boss threat cues, loot and hero markers', 'threat cues, loot and resources markers'],
	['loot, loot, and bosses', 'loot, resource nodes, and enemy players'],
	['weapons, camos, skins, or battle pass tiers', 'players, skins, or armor tiers'],
	['instant access to weapons', 'instant access to players'],
	['enemy squads, bosses, and high-value loot', 'enemy squads, enemy players, and high-value loot'],
	[
		'vehicle threat cues, supply-drop awareness markers, and loot or chest pins so only BR-critical',
		'heli markers, match cues, and loot pins so only match-critical',
	],
	['Vehicle and supply-drop threat cues', 'Heli and base awareness cues'],
	['vehicle and supply-drop threat cues', 'boss and extract awareness cues'],
	['loot or chest pins', 'loot and loot pins'],
	['Loot and chest markers', 'Loot and hero markers'],
	['loot and chest markers', 'loot and hero markers'],
	['chests worth the detour', 'high-value elimination worth the push'],
	['vehicles, and chests', 'bosses, and loot'],
	['loot, vehicles, and chests', 'loot, bosses, and loot'],
	['players, loot, and vehicles', 'players, NPCs, and loot'],
	['players, loot, vehicles', 'players, NPCs, loot'],
	['vehicle threat cues', 'boss threat cues'],
	['vehicle pushes', 'flank pushes'],
	['track vehicles and chests', 'track enemy players and loot'],
	['full BR loop', 'full match loop'],
	['BR rotations', 'map rotations'],
	['BR-critical', 'session-critical'],
	['endgame circles', 'combat zones'],
	['final circles', 'late-session bases'],
	['final-circle scrims', 'extract camp fights'],
	['before your first ranked block', 'before your first match'],
	['before ranked', 'before you queue'],
	['reboot rounds', 'close-range squad fights'],
	['Battle Pass', 'patch cycle progression'],
	[
		'long-range AR beams and close-quarters room clears without reopening menus every spawn',
		'long-range DMR fights and dorms clears without reopening menus every match',
	],
	['assault rifles, SMGs, and snipers', 'ARs, SMGs, and long-ranges'],
	['AR / SMG / sniper', 'AR / SMG / long-range'],
	['players, loot, and vehicles', 'players, NPCs, and loot'],
	['for players, loot, and vehicles', 'for players, loot, and bases'],

	// Broken / truncated meta fragments
	['soft aim, and .', 'soft aim, and radar.'],
	['soft aim, and on Windows PC', 'soft aim, and radar on Windows PC'],
	['soft aim, and for Windows PC', 'soft aim, and radar for Windows PC'],
	['soft aim, and in our', 'soft aim, and radar in our'],
	['soft aim, and maintenance', 'soft aim, and radar maintenance'],
	['soft aim, boxes, and on Windows PC', 'soft aim, and radar on Windows PC'],
	['ESP, Soft Aim, ', 'ESP, Soft Aim & Radar'],
	['Best Hacks with ESP & ', 'ESP Soft Aim & Radar'],
	['ESP, Soft Aim & ', 'ESP, Soft Aim & Radar'],
	['with — learn', '— learn'],
	['RNEAC out for', 'Reach out for'],
	['an NEAC', 'a NEAC'],
	['After a Escape', 'After an Escape'],
	['after a Escape', 'after an Escape'],

	// Keyword stuffing / nonsense duplicates
	['naraka cheats & naraka cheats', 'naraka cheats'],
	[
		'covering both naraka cheats and naraka cheats search intent',
		'covering both “naraka cheats” and “naraka cheats” search intent',
	],
	[
		'also searched as naraka cheats and naraka cheat.',
		'built for Naraka on Windows PC.',
	],
	[
		'naraka cheats vs naraka cheats — same stack, clear pages',
		'How this Naraka Cheats pillar fits nearby pages',
	],
	[
		'Searchers use naraka cheats and naraka cheats interchangeably. This pillar focuses on hacks language; the',
		'Use this pillar for the core product overview. For year-specific buying notes, see the',
	],

	// Point cannibal URLs at canonicals
	['/naraka-esp-hack/', '/naraka-esp/'],
	['/naraka-aimbot-hack/', '/naraka-aimbot/'],
	['/best-naraka-cheats/', '/'],
	['best naraka cheats guide', 'Naraka Cheats pillar'],
	['best naraka cheats checklist', 'naraka cheats checklist'],
	['best naraka cheats', 'naraka cheats'],
	[
		'Prefer softer tracking? Read the <a href="/naraka-soft-aim/">soft aim guide</a>. Want the search term most players use? See <a href="/naraka-aimbot/">aimbot hack</a>.',
		'Prefer softer tracking? Read the <a href="/naraka-soft-aim/">soft aim guide</a>.',
	],
	['Related landings: <a href="/naraka-cheat-download/">cheat download</a>, <a href="/naraka-mod-menu/">mod menu</a>, <a href="/naraka-aimbot/">aimbot hack</a>, <a href="/naraka-esp/">ESP hack</a>.',
		'Related landings: <a href="/naraka-cheat-download/">cheat download</a>, <a href="/naraka-mod-menu/">mod menu</a>, <a href="/naraka-aimbot/">aimbot</a>, <a href="/naraka-esp/">ESP</a>.'],
];

let src = readFileSync(PAGES_EN, 'utf8');
let hits = 0;
for (const [from, to] of replacements) {
	if (typeof from === 'string') {
		if (!src.includes(from)) continue;
		const count = src.split(from).length - 1;
		src = src.split(from).join(to);
		hits += count;
	} else {
		const next = src.replace(from, to);
		if (next !== src) hits += 1;
		src = next;
	}
}

writeFileSync(PAGES_EN, src);
console.log(`Replaced ${hits} occurrences in pages-en.mjs`);

const gen = spawnSync(process.execPath, [path.join(ROOT, 'scripts', 'generate-i18n-content.mjs')], {
	cwd: ROOT,
	stdio: 'inherit',
});
if (gen.status !== 0) process.exit(gen.status ?? 1);
console.log('Regenerated content.generated.ts');
