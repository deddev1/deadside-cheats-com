#!/usr/bin/env node
/**
 * Generates 100 indexable buyer reviews for schema/UI parity.
 * Run: node scripts/generate-customer-reviews.mjs
 */
import { writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'src/data/customer-reviews.generated.ts');

const HANDLES = [
	'xKrypt0_Deadside', 'buildsR4K', 'dma_wizard', 'ctrl_player99', 'stormChaser_07',
	'lootGoblinx', 'rankedGrind42', 'vanLifeDeadside', 'patchDayMike', 'snipezOnly_',
	'raidRat_88', 'compoundKing', 'sawmillSniper', 'lootRunner_x', 'bushWookieDS',
	'duoQueueMike', 'extractOrDie', 'softAimSam', 'radarDad42', 'win11CheatGuy',
	'noRecoilNate', 'airfieldAndy', 'cruiserCarl', 'patchPanic', 'defenderDodge',
	'monthlyMike', 'lifetimeLex', 'squadWipez', 'thirdPartyTom', 'flankFinder',
	'ammoThief99', 'nightRaidNed', 'compoundCam', 'lootBeam', 'rustBucketRS',
	'chopperChad', 'soloGrind77', 'duoDynamo', 'espOnlyElla', 'aimTunerPro',
	'statusPageStan', 'battlEyeBen', 'loaderLag', 'menuMinimal', 'fovFrugal',
	'smoothAimJay', 'wallhackWes', 'radarRita', 'survivalSue', 'pvpPete',
	'extractEddie', 'compoundCleo', 'sawmillSteve', 'militaryMoe', 'lootCrateLou',
	'undetectedUma', 'patchDayPat', 'supportHero', 'keyFixedFast', 'win10Warrior',
	'duosDanny', 'sniperSally', 'shotgunShaq', 'rifleRhea', 'baseRaidRoy',
	'vehicleVic', 'nightVisionNina', 'audioAwareAl', 'spacingSpence', 'infoIntelIvy',
	'cheatCompareCal', 'oldProviderOllie', 'newBuildNora', 'lowkeyLiam', 'streamSafeSara',
	'clipCleanChris', 'modMenuMia', 'toggleQueen', 'radarRangeRex', 'espOpacityOpal',
	'softNotSnap', 'humanAimHal', 'compoundClutch', 'thirdPartyTina', 'flankFoilFred',
	'lootTrackLeo', 'kitCallKay', 'battlEyeBree', 'rebuildRick', 'queueReadyQuinn',
	'firstBuyFinn', 'secondTryTess', 'honestReviewHal', 'mixedFeelMaya', 'solidCheatSol',
	'deadsideDan', 'hacksHannah', 'cheatCheckChad', 'realTalkRae', 'pcOnlyPax',
];

const TAGS = ['ESP', 'Soft aim', 'Radar', 'Setup', 'Updates', 'Ranked', 'Sniper', 'BattlEye updates', 'Loot', 'Duos'];

const OPENERS = [
	'ngl', 'honestly', 'real talk', 'been using this a while now', 'switched from another provider',
	'first week with this cheat', 'not gonna lie', 'main reason i bought', 'for duos this helps a lot',
	'solo player here', 'sniper main here', 'i dont even run aimbot much',
];

const PRODUCT_TERMS = [
	'this cheat', 'these deadside cheats', 'this deadside cheat', 'the loader', 'this package',
	'these cheats', 'deadside cheats', 'the menu', 'this tool', 'this license',
];

const LOCATIONS = ['sawmill', 'airfield', 'cruiser', 'compound', 'military base', 'loot zone', 'hot zone', 'extract point'];

const FEATURES = [
	'esp wallhack', '2d radar', 'soft aim', 'player esp', 'loot tracking', 'per-weapon profiles',
	'status page', 'support reply', 'loader install', 'mod menu toggles',
];

function pick(arr, seed) {
	return arr[seed % arr.length];
}

function ratingFor(seed) {
	if (seed % 17 === 0) return 3;
	if (seed % 5 === 0) return 4;
	return 5;
}

function dateFor(seed) {
	const month = 6 + Math.floor(seed / 34);
	const day = 1 + (seed % 28);
	return `2026-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
}

function slugFor(handle, seed) {
	const base = handle.replace(/^@/, '').toLowerCase().replace(/[^a-z0-9]+/g, '-');
	return `deadside-review-${base}-${seed}`;
}

function buildReview(seed) {
	const handle = pick(HANDLES, seed);
	const rating = ratingFor(seed);
	const tag = pick(TAGS, seed * 3);
	const opener = pick(OPENERS, seed * 7);
	const product = pick(PRODUCT_TERMS, seed * 11);
	const product2 = pick(PRODUCT_TERMS, seed * 13 + 1);
	const loc = pick(LOCATIONS, seed * 17);
	const loc2 = pick(LOCATIONS, seed * 19 + 2);
	const feature = pick(FEATURES, seed * 23);
	const feature2 = pick(FEATURES, seed * 29 + 1);

	const text = `${opener} — ${product} ${rating >= 4 ? 'feels solid' : 'works ok'} for ${loc} runs. ${feature} is why i kept it after testing ${feature2} on ${loc2}. ${rating === 5 ? 'setup was quick on win11 and no drama after a battleye patch week' : rating === 4 ? 'only gripe is menu could be cleaner but support answered same day' : 'defender blocked loader first try but support fixed my key in a couple hours'}. ${rating >= 4 ? 'would recommend if you want undetected deadside cheats for pvp raids' : 'still testing more before i call it perfect tbh'}`;

	const short = `${product} — ${feature} on ${loc}${rating === 5 ? ', no issues after patch week' : rating === 4 ? ', support was quick' : ', setup took patience'}`;

	const slug = slugFor(handle, seed);
	const seoTitle = `${tag} Review by @${handle} — ${rating}/5 | {brand}`;
	const seoDescription = `@${handle} rates {brand} ${rating}/5 — ${feature} for Deadside on Windows PC.`;

	return { handle, rating, text, short, slug, seoTitle, seoDescription, date: dateFor(seed), tag };
}

const reviews = Array.from({ length: 100 }, (_, i) => buildReview(i));

const body = `/** Auto-generated by scripts/generate-customer-reviews.mjs — do not edit by hand. */

export const generatedCustomerReviews = ${JSON.stringify(reviews, null, '\t')} as const;
`;

await writeFile(OUT, body, 'utf8');
console.log(`Wrote ${reviews.length} reviews → ${OUT}`);
