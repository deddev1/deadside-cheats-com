#!/usr/bin/env node
/**
 * Audits locale translation.json files for English leftovers and indexable locale coverage.
 */
import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const LOCALES_DIR = path.join(ROOT, 'src', 'locales');

const INDEXABLE = new Set(['en', 'es', 'fr', 'de', 'pt', 'ru', 'zh', 'uk']);
const ENGLISH_PATTERNS = [
	/\bBuy deadside cheats\b/i,
	/\bSee Features\b/,
	/\bOpen menu\b/,
	/\bClose menu\b/,
	/\bRelated pages\b/,
	/\bRead guide\b/,
	/\bPackage status\b/,
	/\bEnglish is the official language\b/,
	/\bundetected cheats for Deadside\b/i,
	/\bdeadside cheats is an undetected\b/i,
	/\bCompare pricing\b/,
	/\bPlay deadside cheats demo\b/i,
	/\bShare on X\b/,
	/\bBuyer reviews\b/,
	/\bFeature list\b/,
	/\bPricing plans\b/,
];

function collectStrings(value, prefix = '', out = []) {
	if (typeof value === 'string') {
		out.push({ path: prefix, value });
		return out;
	}
	if (Array.isArray(value)) {
		value.forEach((item, i) => collectStrings(item, `${prefix}[${i}]`, out));
		return out;
	}
	if (value && typeof value === 'object') {
		for (const [k, v] of Object.entries(value)) {
			collectStrings(v, prefix ? `${prefix}.${k}` : k, out);
		}
	}
	return out;
}

function scoreLocale(locale, strings) {
	const hits = [];
	for (const { path: p, value } of strings) {
		if (locale === 'en') continue;
		for (const pattern of ENGLISH_PATTERNS) {
			if (pattern.test(value)) hits.push({ path: p, value, pattern: pattern.source });
		}
	}
	return hits;
}

async function main() {
	const dirs = (await readdir(LOCALES_DIR, { withFileTypes: true }))
		.filter((d) => d.isDirectory())
		.map((d) => d.name)
		.sort();

	const rows = [];
	for (const locale of dirs) {
		const file = path.join(LOCALES_DIR, locale, 'translation.json');
		const json = JSON.parse(await readFile(file, 'utf8'));
		const strings = collectStrings(json);
		const hits = scoreLocale(locale, strings);
		const indexable = INDEXABLE.has(locale);
		rows.push({
			locale,
			indexable,
			englishLeftovers: hits.length,
			sample: hits.slice(0, 3).map((h) => `${h.path}: ${h.value.slice(0, 60)}`),
			status: hits.length === 0 ? 'PASS' : hits.length < 8 ? 'WARN' : 'FAIL',
		});
	}

	console.log('| Locale | Indexable | English Leftovers | Status |');
	console.log('|--------|-----------|-------------------|--------|');
	for (const r of rows) {
		console.log(`| ${r.locale} | ${r.indexable ? 'yes' : 'no'} | ${r.englishLeftovers} | ${r.status} |`);
	}
	console.log('\nSamples:');
	for (const r of rows.filter((x) => x.englishLeftovers > 0).slice(0, 8)) {
		console.log(`\n${r.locale}:`, r.sample.join('\n  '));
	}

	const failed = rows.filter((r) => r.indexable && r.status === 'FAIL');
	if (failed.length) {
		console.error(`\n${failed.length} indexable locale(s) with high English leftover count.`);
		process.exitCode = 1;
	}
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
