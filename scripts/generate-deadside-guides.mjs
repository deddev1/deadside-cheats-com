#!/usr/bin/env node
/**
 * Generates Deadside-only guides for guides.generated.ts.
 * Run: node scripts/generate-deadside-guides.mjs
 */
import { writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'src', 'data', 'guides', 'guides.generated.ts');

const HERO_IMAGE =
	'https://cdn.akamai.steamstatic.com/steam/apps/895400/header.jpg';
const SITE = 'https://deadsidecheats.com';

const TOPICS = [
	{
		slug: 'deadside-survival-fundamentals',
		angle: 'Survival Fundamentals',
		focus: 'loot routes, compound awareness, and safe extract timing',
		mechanic: 'map compounds and military bases',
		mechanic2: 'loot priority',
	},
	{
		slug: 'deadside-squad-raid-coordination',
		angle: 'Squad Raid Coordination',
		focus: 'callouts, flanks, and shared loot runs',
		mechanic: 'squad spacing',
		mechanic2: 'voice comms discipline',
	},
	{
		slug: 'deadside-loot-route-planning',
		angle: 'Loot Route Planning',
		focus: 'high-value compounds without over-committing',
		mechanic: 'loot route timing',
		mechanic2: 'risk vs reward reads',
	},
	{
		slug: 'deadside-compound-pvp-tactics',
		angle: 'Compound PvP Tactics',
		focus: 'holding angles and third-party timing',
		mechanic: 'compound entry',
		mechanic2: 'exit routes',
	},
	{
		slug: 'deadside-battleye-patch-day',
		angle: 'BattlEye Patch-Day Prep',
		focus: 'what to check before loading in after updates',
		mechanic: 'patch-day checklist',
		mechanic2: 'launcher health',
	},
	{
		slug: 'deadside-esp-survival-reads',
		angle: 'ESP & Survival Reads',
		focus: 'player markers, loot tags, and threat distance',
		mechanic: 'player ESP',
		mechanic2: 'loot ESP',
	},
	{
		slug: 'deadside-weapon-loadout-meta',
		angle: 'Weapon & Loadout Meta',
		focus: 'rifle vs shotgun roles in compound fights',
		mechanic: 'attachment choices',
		mechanic2: 'ammo conservation',
	},
	{
		slug: 'deadside-base-defense-basics',
		angle: 'Base Defense Basics',
		focus: 'raids, storage, and offline protection habits',
		mechanic: 'base layout',
		mechanic2: 'raid timers',
	},
	{
		slug: 'deadside-vehicle-extract-runs',
		angle: 'Vehicle Extract Runs',
		focus: 'rotations, fuel, and convoy risk',
		mechanic: 'vehicle routing',
		mechanic2: 'extract timing',
	},
	{
		slug: 'deadside-night-raid-visibility',
		angle: 'Night Raid Visibility',
		focus: 'NVG, lighting, and audio cues',
		mechanic: 'night movement',
		mechanic2: 'sound discipline',
	},
	{
		slug: 'deadside-soft-aim-tuning',
		angle: 'Soft Aim Tuning',
		focus: 'FOV, smoothing, and per-weapon profiles',
		mechanic: 'soft aim settings',
		mechanic2: 'bone priority',
	},
	{
		slug: 'deadside-radar-flank-awareness',
		angle: 'Radar & Flank Awareness',
		focus: '2D radar range and compound reads',
		mechanic: 'radar overlay',
		mechanic2: 'flank detection',
	},
];

function buildGuide(topic, index) {
	const title = `Deadside Guide: ${topic.angle} (2026)`;
	const h1 = `Deadside ${topic.angle} Guide`;
	const metaDescription = `A practical Deadside guide covering ${topic.focus} on Windows PC — survival tips, BattlEye context, and cheat-feature awareness at deadsidecheats.com.`;
	const intro = `Deadside rewards players who plan loot runs before they shoot. This guide focuses on ${topic.focus} — the habits that keep squads alive in open-world survival raids on PC.`;
	const internalLink = `${SITE}/deadside-cheats/`;

	const templateVariant = index % 4;
	const sectionsByVariant = [
		[
			{
				h2: 'Reading the map before you loot',
				paragraphs: [
					`Start each session by naming two compounds you will touch and one you will avoid. ${topic.mechanic} matters because Deadside traffic clusters around military bases, sawmills, and airfield approaches — not random bush fights.`,
					`When you treat ${topic.mechanic2} as a pre-raid checklist, you stop bleeding kits to preventable third parties. Write down extract timing, vehicle audio cues, and where you expect duos to rotate.`,
				],
			},
			{
				h2: 'Compound fights without panic pushes',
				paragraphs: [
					`Most losses in ${topic.mechanic2} come from over-committing after one knock. Hold an angle, listen for reloads, and only swing when your squad has a number advantage.`,
					`Solo players should trade information for loot: tag enemies, deny pushes, and leave with a kit instead of chasing a highlight clip into a fresh squad.`,
				],
			},
			{
				h2: 'BattlEye, patches, and clean PC hygiene',
				paragraphs: [
					`Stable FPS and clear audio beat raw flick speed in Deadside. Close overlays you do not need, update GPU drivers, and keep sensitivity consistent between sessions.`,
					`Deadside uses BattlEye on PC. Check <a href="${SITE}/updates/">maintenance status</a> after patches and avoid random “free cheat” downloads that ship malware.`,
				],
			},
			{
				h2: 'Session homework',
				paragraphs: [
					`Pick one skill per raid: ${topic.mechanic}, ${topic.mechanic2}, or safer extract timing. After you die, name the decision that put you in a bad spot — not just “bad luck.”`,
					`For ESP, soft aim, and radar built for Deadside, see the <a href="${internalLink}">Deadside Cheats overview</a> at deadsidecheats.com.`,
				],
			},
		],
		[
			{
				h2: 'Squad roles that actually stick',
				paragraphs: [
					`Assign a scout, a closer, and a loot carrier before you leave spawn. ${topic.focus} only works when everyone knows who calls flanks and who holds rear.`,
					`Use short callouts tied to ${topic.mechanic}: “cruiser north,” “compound west open,” “extract in 90.” Long stories get people killed.`,
				],
			},
			{
				h2: 'Loot tempo vs. fight tempo',
				paragraphs: [
					`High-value zones attract duos on timers. If you are still sorting mags when another team arrives, you already lost the exchange.`,
					`${topic.mechanic2} is about leaving while the lobby is distracted. Third-party the fight, do not become the cleanup crew for two healthier squads.`,
				],
			},
			{
				h2: 'Audio, lighting, and night raids',
				paragraphs: [
					`Footsteps and vehicle engines travel farther than most players expect. Crouch-walk near compounds, and never sprint across open sawmill lanes without cover.`,
					`Night raids punish lazy routes. Move compound to compound with NVG discipline, or daytime routes with better sightlines — not both at once.`,
				],
			},
			{
				h2: 'Apply it next queue',
				paragraphs: [
					`Run one disciplined raid using only this guide’s focus. Compare your extract value and survival time to your last five sessions.`,
					`Pair survival reads with product context on <a href="${internalLink}">Deadside Cheats</a> if you want ESP, radar, and soft-aim references in one place.`,
				],
			},
		],
		[
			{
				h2: 'Risk budgeting on Deadside',
				paragraphs: [
					`Treat every compound as a coin flip with gear on the line. ${topic.mechanic} helps you decide when the flip is worth it — not whether you can win every fight.`,
					`Budget one “hero push” per hour. Everything else should be ${topic.mechanic2}, repositioning, or a quiet extract with a full bag.`,
				],
			},
			{
				h2: 'Vehicle and rotation mistakes',
				paragraphs: [
					`Cruisers are loud billboards. Use them to skip dead space, not to park in the center of a loot zone while four players sort rifles.`,
					`If you hear an engine stop near you, assume a team is already aiming. Rotate perpendicular to the road instead of challenging head-on.`,
				],
			},
			{
				h2: 'Patch-day discipline',
				paragraphs: [
					`After BattlEye or Deadside updates, verify launcher health and read patch notes before loading your best kit. Stability beats FOMO queues.`,
					`The <a href="${SITE}/updates/">status page</a> is the fastest place to confirm whether maintenance affects your session plan.`,
				],
			},
			{
				h2: 'One-page takeaway',
				paragraphs: [
					`Write three bullets before you queue: where you loot, when you leave, and what you will not chase. ${topic.angle} is mostly decision quality, not reflexes.`,
					`Explore feature comparisons on <a href="${internalLink}">deadsidecheats.com</a> when you want ESP, radar, and aimbot context in one stack.`,
				],
			},
		],
		[
			{
				h2: 'Fundamentals most players skip',
				paragraphs: [
					`Deadside is won in the first ninety seconds. Check ammo, meds, and route before you sprint toward gunfire. ${topic.mechanic} is your early-game edge.`,
					`Players who master ${topic.mechanic2} look “lucky” because they are never surprised twice in the same compound.`,
				],
			},
			{
				h2: 'Dueling without throwing the raid',
				paragraphs: [
					`Win the fight you need, not every fight offered. If a squad is already wounded from a third party, finish fast or disengage — long trades attract fresh teams.`,
					`Carry a fallback extract in mind before you take a 1v2. The best Deadside players leave with loot, not kill counts.`,
				],
			},
			{
				h2: 'Gear, settings, and consistency',
				paragraphs: [
					`Use the same FOV, sensitivity, and keybinds for a week before you tweak again. Constant changes hide real skill gaps.`,
					`Keep Windows and GPU drivers current so frame drops do not turn easy peeks into free deaths during compound holds.`,
				],
			},
			{
				h2: 'Where to go next',
				paragraphs: [
					`Re-run one route with this guide’s focus and log what changed. Small improvements in ${topic.focus} compound over a week.`,
					`For undetected ESP, radar, and soft aim references, start at the <a href="${internalLink}">Deadside Cheats pillar page</a>.`,
				],
			},
		],
	];

	const sections = sectionsByVariant[templateVariant];

	const published = `2026-0${1 + (index % 8)}-${String(5 + (index % 20)).padStart(2, '0')}`;

	return {
		id: topic.slug,
		slug: topic.slug,
		game: 'Deadside',
		gameSlug: 'deadside',
		externalUrl: internalLink,
		anchorText: 'Deadside Cheats overview',
		published,
		updated: '2026-08-25',
		title,
		metaDescription,
		h1,
		intro,
		imageUrl: HERO_IMAGE,
		imageAlt: 'Deadside gameplay — Steam header art',
		sections,
	};
}

function serializeGuide(guide) {
	return JSON.stringify(guide, null, '\t').replace(/"([^"]+)":/g, '$1:');
}

const guides = TOPICS.map(buildGuide);

const body = `/** Auto-generated by scripts/generate-deadside-guides.mjs — do not edit by hand. */
import type { GuideDefinition } from './types';

export const guides: GuideDefinition[] = [
${guides.map((g) => `\t${serializeGuide(g)},`).join('\n')}
];
`;

await writeFile(OUT, body, 'utf8');
console.log(`Wrote ${guides.length} Deadside guides → ${OUT}`);
