/**
 * Normalize leftover Naraka/Valorant vocabulary to Deadside survival terms.
 * Applied during i18n generation — do not hand-edit generated outputs.
 */
const REPLACEMENTS = [
	[/enemy heroes/gi, 'enemy players'],
	[/enemies and heroes/gi, 'enemy players'],
	[/,\s*heroes,/gi, ', players,'],
	[/spot enemy heroes/gi, 'spot enemy players'],
	[/hero skills/gi, 'loot and player markers'],
	[/hero skill/gi, 'loot marker'],
	[/soul jades/gi, 'loot crates'],
	[/soul jade/gi, 'loot crate'],
	[/Quick Match and Ranked/gi, 'PvP raids and squad sessions'],
	[/ranked and Quick Match/gi, 'survival and PvP raids'],
	[/Quick Match sessions/gi, 'PvP raid sessions'],
	[/Quick Match/gi, 'PvP raids'],
	[/Ranked queues/gi, 'competitive raid queues'],
	[/Ranked and Quick Match/gi, 'competitive and PvP raids'],
	[/Ranked/gi, 'competitive raids'],
	[/ranked/gi, 'competitive'],
	[/grapple and ult cues/gi, 'weapon and loot cues'],
	[/agents through walls/gi, 'players through walls'],
	[/high-traffic POIs/gi, 'high-traffic compounds'],
	[/Fortnite, Tarkov, Warzone, Marvel Rivals, and more — mixed across titles below\./g,
		'Deadside survival routes, loot spots, compound tactics, and squad play — curated guides below.'],
	[/Dedicated articles for Fortnite, Tarkov, Warzone, Marvel Rivals, and more — mixed across titles below\./g,
		'Deadside survival guides, loot routes, compound zones, and squad tactics — curated resources below.'],
	[/BR and Quick Match sessions/gi, 'survival and PvP sessions'],
	[/Episode 10\+ and ranked meta in 2026/gi, '2026 survival meta on Deadside'],
	[/maintenance EAC/gi, 'BattlEye maintenance'],
	[/EAC-Wartung/gi, 'BattlEye-Wartung'],
	[/mantenimiento EAC/gi, 'mantenimiento BattlEye'],
	[/Deadside- of EAC-update/gi, 'Deadside- of BattlEye-update'],
	[/Deadside lub EAC/gi, 'Deadside lub BattlEye'],
	[/Deadside sau EAC/gi, 'Deadside sau BattlEye'],
	[/Deadside nebo EAC/gi, 'Deadside nebo BattlEye'],
	[/Deadside eller EAC/gi, 'Deadside eller BattlEye'],
	[/Deadside of EAC/gi, 'Deadside of BattlEye'],
	[/Deadside oder EAC/gi, 'Deadside oder BattlEye'],
	[/Deadside або EAC/gi, 'Deadside або BattlEye'],
	[/Deadside أو EAC/gi, 'Deadside أو BattlEye'],
	[/Vandal\/Phantom/gi, 'AR and SMG'],
	[/Vandal vs Spectre/gi, 'AR and SMG'],
	[/souljade/gi, 'loot crate'],
	[/before you queue/gi, 'before you deploy'],
	[/hero abilities/gi, 'map mechanics'],
	[/landing for alternate search wording\./g, 'landing page.'],
	[/Ready to buy\? Compare/g, 'Compare'],
	[/free Deadside cheat download/gi, 'free Deadside cheat download'],
	[/Deadside Cheat Download/g, 'Deadside Cheat Download'],
	[/Undetected PC Cheats/g, 'Undetected PC Cheats'],
	[/deadside aimbot/gi, 'deadside aimbot'],
	[/deadside esp/gi, 'deadside esp'],
	[/deadside radar/gi, 'deadside radar'],
	[/Deadside Aimbot/g, 'Deadside Aimbot'],
	[/Deadside ESP/g, 'Deadside ESP'],
	[/Aimbot/g, 'Aimbot'],
	[/ESP/g, 'ESP'],
	[/aimbot/g, 'aimbot'],
	[/2D radar overlay/gi, '2D radar overlay'],
	[/2D radar/g, '2D radar'],
	[/2D radar/gi, '2D radar'],
	[/deadside cheats pc/gi, 'deadside cheats pc'],
	[/Deadside Cheats/g, 'Deadside Cheats'],
	[/">hacks<\/a>/g, '">cheats</a>'],
];

export function fixDeadsideCopy(input) {
	if (typeof input !== 'string' || !input) return input;
	let out = input;
	for (const [pattern, replacement] of REPLACEMENTS) {
		out = out.replace(pattern, replacement);
	}
	return out;
}

export function fixDeadsideCopyDeep(value) {
	if (typeof value === 'string') return fixDeadsideCopy(value);
	if (Array.isArray(value)) return value.map(fixDeadsideCopyDeep);
	if (value && typeof value === 'object') {
		const out = {};
		for (const [k, v] of Object.entries(value)) {
			out[k] = fixDeadsideCopyDeep(v);
		}
		return out;
	}
	return value;
}
