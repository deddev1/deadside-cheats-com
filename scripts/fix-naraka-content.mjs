#!/usr/bin/env node
/**
 * Second-pass cleanup: remove Isle gameplay leftovers after adapt-naraka.mjs
 * Run: node scripts/fix-naraka-content.mjs
 */
import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

/** Ordered — specific patterns first. */
const REPLACEMENTS = [
	// Brand leftovers
	['THE ISLE HACKS', 'RUST CHEATS'],
	['The Isle Hacks', 'Naraka Cheats'],
	['Isle Hacks', 'Naraka Cheats'],
	['Isle Hack Shops', 'Naraka Cheat Shops'],
	['Isle Hack Shop', 'Naraka Cheat Shop'],
	['Isle Hack', 'Naraka Cheat'],
	['Isle wallhack', 'Naraka wallhack'],
	['Isle radar', 'Naraka radar'],
	['Isle Wiki', 'Naraka Wiki'],
	['Isle Intel', 'Naraka Intel'],
	['Isle ESP', 'Naraka ESP'],
	['Isle Aimbot', 'Naraka Aimbot'],
	['Isle cheats', 'Naraka cheats'],
	['Isle cheat', 'Naraka cheat'],
	['Isle hacks', 'Naraka cheats'],
	['Isle hack', 'Naraka cheat'],
	['Isle esp', 'Naraka ESP'],
	['Isle aimbot', 'Naraka Aimbot'],
	['Two-Week Isle Hack Comparison Test', 'Two-Week Naraka Cheat Comparison Test'],
	['Typical Budget Isle Hack Shops', 'Typical Budget Naraka Cheat Shops'],

	// Broken doubles from partial migration
	['PvP match matches', 'PvP matches'],
	['raid match', 'raid'],
	['raid matches', 'matches'],
	['base matches and PvP matches', 'battle royale rounds and ranked matches'],
	['base matches and PvP match matches', 'battle royale rounds and ranked matches'],

	// Isle survival mechanics → Naraka mechanics
	['herbivore and carnivore', 'solo farmers and matchers'],
	['herbivore & carnivore', 'solo farmers & matchers'],
	['herbivore-and-carnivore-matches', 'solo-farmer-and-raider-sessions'],
	['herbivore-and-carnivore-sessions', 'solo-farmer-and-raider-sessions'],
	['carnivores, ambush builds, long-range species', 'ARs, SMGs, and long-range rifles'],
	['carnivores and ambush builds', 'ARs and SMGs'],
	['adult carnivores', 'heavy armor kits'],
	['mid-tier species', 'mid-tier weapons'],
	['main species', 'main loadout'],
	['per-species', 'per-weapon'],
	['Per-species', 'Per-weapon'],
	['species profiles', 'weapon profiles'],
	['species comparison', 'weapon comparison'],
	['species choice', 'loadout choice'],
	['species unlocks', 'blueprint unlocks'],
	['juvenile player', 'starting player'],
	['juvenile players', 'starting players'],
	['juvenile build', 'starter kit'],
	['juvenile builds', 'starter kits'],
	['juvenile or practice server', 'aim train or practice server'],
	['spawn as a juvenile', 'spawn with a starter kit'],
	['growth-run-aggressive', 'farming-run-aggressive'],
	['growth-run strategies', 'farming-run strategies'],
	['growth-run player', 'farming-run player'],
	['growth-run meta', 'farming-run meta'],
	['growth strategies', 'farming strategies'],
	['growth aggression', 'farming aggression'],
	['growth path', 'loot path'],
	['growth points', 'scrap'],
	['growth economy', 'resource economy'],
	['growth stat tables', 'weapon stat tables'],
	['growth tiers', 'armor tiers'],
	['growth timer', 'raid timer'],
	['growth tools', 'melee combat tools'],
	['growth instead', 'loot instead'],
	['growth advantage', 'gear advantage'],
	['growth goals', 'raid goals'],
	['growth progress', 'raid progress'],
	['growth run', 'farming run'],
	['growth runs', 'farming runs'],
	['Growth Runs', 'Farming Runs'],
	['Growth Run', 'Farming Run'],
	['farming run,', 'farming run,'],
	['apex spawn rates', 'heli spawn rates'],
	['apex markers', 'heli markers'],
	['apex threat cues', 'threat cues'],
	['apex players', 'enemy players'],
	['Apex and nest', 'Heli and base'],
	['Apex and juvenile', 'Heli and player'],
	['nest camping', 'base camping'],
	['nest campers', 'base campers'],
	['nest calls', 'footstep audio'],
	['nest route', 'raid route'],
	['nest routes', 'raid routes'],
	['nest plans', 'raid plans'],
	['nest plan', 'raid plan'],
	['nest zones', 'combat zones'],
	['nest zone', 'compound zone'],
	['nest fights', 'base fights'],
	['nest fight', 'base fight'],
	['nest markers', 'hero markers'],
	['nest awareness', 'base awareness'],
	['nest cues', 'base cues'],
	['nest before', 'extract before'],
	['and nest before', 'and extract before'],
	['who holds nest', 'who holds the base'],
	['holding a nest', 'holding a base'],
	['clear a nest', 'clear a base'],
	['carcass filters', 'loot filters'],
	['carcass pins', 'loot pins'],
	['carcass highlights', 'loot highlights'],
	['carcass ESP', 'hero ESP'],
	['carcass esp', 'loot esp'],
	['Carcass ESP', 'Loot ESP'],
	['carcass and water', 'loot and resources'],
	['carcass and', 'loot and'],
	['Carcass and', 'Loot and'],
	['carcasses and', 'loot and'],
	['carcasses or', 'loot or'],
	['carcasses.', 'loot.'],
	['carcasses,', 'loot,'],
	['carcasses ', 'loot '],
	['carcasses', 'loot'],
	['carcass ', 'loot '],
	['carcass', 'loot'],
	['carcassesing', 'looting'],
	['carcass like', 'loot like'],
	['carcass-timer', 'loot-timer'],
	['Print Loot', 'Farm Loot'],
	['water sources', 'resource nodes'],
	['water markers', 'resource markers'],
	['pack fights', 'squad fights'],
	['pack fight', 'squad fight'],
	['pack pushes', 'squad pushes'],
	['pack spawns', 'squad spawns'],
	['enemy packs', 'enemy squads'],
	['pack hunting', 'squad matching'],
	['bite height', 'head height'],
	['attack timing', 'recoil control'],
	['kill speed', 'TTK'],
	['player calls', 'footsteps'],
	['AI player', 'NPC'],
	['AI players', 'NPCs'],
	['practice server matches', 'aim train sessions'],
	['survival sessions', 'raid sessions'],
	['survival session', 'raid session'],
	['Survival Sessions', 'Raid Sessions'],
	['Survival Session', 'Raid Session'],
	['survival queues', 'server queues'],
	['survival queue', 'server queue'],
	['survival flow', 'match flow'],
	['survival tips', 'battle royale tips'],
	['survival load ins', 'raid sessions'],
	['survival load in', 'raid session'],
	['survival-game', 'survival'],
	['survivalCombat', 'raidCombat'],
	['survivalIsland', 'raidMap'],
	['ESP markers for loot and bases in Naraka', 'ESP markers for loot and bases in Naraka'],
	['Gateway', 'Map'],
	['Map river zones', 'monument river zones'],
	['river banks', 'monument edges'],
	['river bank', 'monument edge'],
	['forest and river', 'forest and monument'],
	['forest zones', 'monument zones'],
	['forest ambushes', 'monument ambushes'],
	['long forest ambushes', 'long-range monument fights'],
	['high-traffic zones sprays', 'close-range sprays'],
	['spawn in', 'load in'],
	['spawning in', 'loading in'],
	['spawn with', 'load in with'],
	['spawn plans', 'raid plans'],
	['spawn rich', 'spawn with good loot'],
	['spawn rules', 'match rules'],
	['unlock all species', 'unlock all items'],
	['EXT.activision', 'EXT.finals'],
	['${EXT.activision}', '${EXT.finals}'],
	['growthRunCombat', 'farmingRunCombat'],
	['growthRunMode', 'farmingRunMode'],
	['nestBuilder', 'baseBuilder'],
	['packFight', 'squadFight'],
	['ambushFight', 'raidFight'],
	['playerEsp', 'playerEsp'],
	['dinoEsp', 'playerEsp'],

	// Remaining Isle terms
	['Herbivore and carnivore', 'Solo farmers and matchers'],
	['herbivore and carnivore', 'solo farmers and matchers'],
	['carnivores, ambush builds, and long-range species', 'ARs, SMGs, and long-range rifles'],
	['carnivores, ambush builds', 'ARs and SMGs'],
	['carnivore, ambush', 'AR, SMG'],
	['carnivores, ambush', 'ARs, SMG'],
	['mid-tier carnivore', 'mid-tier AR'],
	['mid-tier carnivores', 'mid-tier ARs'],
	['carnivore', 'raider'],
	['carnivores', 'raiders'],
	['herbivore', 'solo farmer'],
	['herbivores', 'solo farmers'],
	['per species', 'per weapon'],
	['per-species', 'per-weapon'],
	['Per-species', 'Per-weapon'],
	['species balance', 'weapon balance'],
	['species profiles', 'weapon profiles'],
	['species comparison', 'weapon comparison'],
	['species choice', 'loadout choice'],
	['species unlocks', 'blueprint unlocks'],
	['a species', 'a weapon'],
	['the species', 'the weapon'],
	['main species', 'main loadout'],
	['demote a species', 'demote a weapon'],
	['Nest markers', 'Base markers'],
	['nest markers', 'hero markers'],
	['Nest cues', 'Base cues'],
	['nest cues', 'base cues'],
	['Nest approaches', 'Base approaches'],
	['nest approaches', 'base approaches'],
	['nest timing', 'raid timing'],
	['nest safety', 'base safety'],
	['toward a nest', 'toward a base'],
	['which nest or map', 'which base or map'],
	['nest survival', 'base survival'],
	['Find Carcasses', 'Farm Loot'],
	['Actually Find Carcasses', 'Actually Farm Loot'],
	['apex spawn changes', 'heli spawn changes'],
	['grown player', 'geared player'],
	['grown players', 'geared players'],

	// Player tier list blog fixes
	['Naraka player tier list for herbivore and carnivore matches', 'Naraka weapon tier list for PvP and farming matches'],
	['player build comparison', 'weapon loadout comparison'],
	['Players for Survival', 'Weapons for Raids'],
	['What Wins Sessions', 'What Wins Raids'],
	['Sessions in 2026', 'Raids in 2026'],
	['for Sessions', 'for Raids'],
	['Sessions', 'Raids'],

	// Misc cleanup
	['an Naraka's, 'a Naraka's],
	['what-is-an-naraka-wallhack', 'what-is-a-naraka-wallhack'],
	['NEAC Anti-Cheat', 'NEAC'],
	['24 Entertainment service health', 'Naraka server status'],
	['24 Entertainment ships', 'Facepunch ships'],
	['24 Entertainment (${EXT.finals})', 'Facepunch (${EXT.finals})'],
];

const TEXT_EXTENSIONS = new Set(['.ts', '.tsx', '.js', '.mjs', '.astro', '.json', '.md', '.mdc', '.txt']);
const TARGET_DIRS = ['src', 'scripts', 'public', 'functions'];
const SKIP_FILES = new Set(['adapt-tarkov.mjs', 'adapt-theisle.mjs', 'adapt-naraka.mjs', 'fix-naraka-content.mjs']);

async function walk(dir, files = []) {
	const entries = await readdir(dir, { withFileTypes: true });
	for (const entry of entries) {
		if (entry.name === 'node_modules' || entry.name === 'dist' || entry.name === '.git') continue;
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) await walk(full, files);
		else files.push(full);
	}
	return files;
}

function applyReplacements(content) {
	let result = content;
	for (const [from, to] of REPLACEMENTS) {
		if (from === to) continue;
		result = result.split(from).join(to);
	}
	return result;
}

async function main() {
	let changed = 0;
	for (const dir of TARGET_DIRS) {
		const base = path.join(ROOT, dir);
		const files = await walk(base);
		for (const file of files) {
			if (!TEXT_EXTENSIONS.has(path.extname(file))) continue;
			if (SKIP_FILES.has(path.basename(file))) continue;
			const original = await readFile(file, 'utf8');
			const updated = applyReplacements(original);
			if (updated !== original) {
				await writeFile(file, updated, 'utf8');
				changed++;
			}
		}
	}
	console.log(`Fixed ${changed} files`);
}

main().catch((e) => {
	console.error(e);
	process.exit(1);
});
