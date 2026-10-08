// Saga — pick the learner deck's words: corpus/lexicon.json + forms.json + sources/is_50k.txt -> corpus/words.json
//
//   node build/words.mjs
//
// Words are ranked by subtitle frequency (FrequencyWords, CC BY-SA 4.0). Icelandic is highly inflected, so a
// subtitle spelling is first mapped to a headword through the Wiktionary form index (forms.json):
//   - a spelling that is itself a headword counts for that headword;
//   - otherwise its count is split equally between the headwords it can be a form of.
// A word is kept only if Wiktionary gives it a short plain sense. No gloss is invented. DECK_SIZE scales the deck.

import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

export const DECK_SIZE = 1500;
const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const { GLOSS, DROP } = await import(pathToFileURL(join(ROOT, 'content', 'glosses.mjs')).href);
const { unsuitable, BAD_TAGS, ODD_TAGS } = await import(pathToFileURL(join(ROOT, 'content', 'unsuitable.mjs')).href);
const LEX = JSON.parse(readFileSync(join(ROOT, 'corpus', 'lexicon.json'), 'utf8'));
const FORMS = JSON.parse(readFileSync(join(ROOT, 'corpus', 'forms.json'), 'utf8'));
const byKey = new Map(LEX.map((r) => [`${r.w}|${r.pos}`, r]));

// the 50k list was made from subtitles with a broken encoding in places: "đ" stands for "ð"
const fix = (s) => s.replace(/đ/g, 'ð').replace(/Đ/g, 'Ð');
// Each subtitle spelling can belong to several headwords (var = "was" of vera, and also the noun var). Counts are
// split by iteration: first equally, then in proportion to how much each headword has already collected, so the
// very common verb vera wins "var" and "er" over the rare noun and pronoun homographs.
const toks = [];
for (const line of readFileSync(join(ROOT, 'sources', 'is_50k.txt'), 'utf8').split(/\r?\n/)) {
  const [t, c] = line.trim().split(' ');
  if (!t || !c) continue;
  const forms = FORMS[fix(t).toLowerCase()];
  if (!forms) continue;
  const keys = [...new Set(forms.map((f) => f[0]))].filter((k) => byKey.has(k));
  if (keys.length) toks.push([keys, Number(c)]);
}
let freq = new Map();
for (let pass = 0; pass < 4; pass++) {
  const next = new Map();
  for (const [keys, c] of toks) {
    const wt = pass === 0 ? keys.map(() => 1) : keys.map((k) => (freq.get(k) || 0) + 1e-9);
    const sum = wt.reduce((a, b) => a + b, 0);
    keys.forEach((k, i) => next.set(k, (next.get(k) || 0) + (c * wt[i]) / sum));
  }
  freq = next;
}
const ranked = [...freq.entries()].sort((a, b) => b[1] - a[1]);

const okGloss = (g) => g.length >= 2 && g.length <= 42 && !/^\(|\bform of\b|\binflection\b|^alternative|^obsolete|^abbreviation|^initialism|^plural of|^definite|^letter|^gerund/i.test(g) && !g.includes('.') && !g.includes(';');
const GENDER = { m: 'karlkyn', f: 'kvenkyn', n: 'hvorugkyn' };
const POS = { n: 'n', v: 'v', adj: 'adj', adv: 'adv', pron: 'pron', prep: 'prep', conj: 'conj', det: 'det', num: 'num', intj: 'intj', art: 'det', part: 'part' };

const out = [];
const seen = new Set();
for (const [key] of ranked) {
  if (out.length >= DECK_SIZE) break;
  const rec = byKey.get(key);
  const w = rec.w;
  if (seen.has(w)) continue;
  if (!/^[a-záðéíóúýþæö]+$/.test(w)) continue;                // no names, apostrophes or phrases
  if (w.length < 2 && !['í', 'á', 'ó', 'ö'].includes(w)) continue;
  const e = rec.entries[0];
  if (!e) continue;
  const senses = e.senses.filter((s) => !(s.tags || []).some((t) => BAD_TAGS.has(t)));
  if (!senses.length || senses.some((s) => (s.tags || []).some((t) => BAD_TAGS.has(t)) && s === e.senses[0])) continue;
  const gl = [];
  for (const s of senses) {
    if ((s.tags || []).some((t) => ODD_TAGS.has(t))) continue;
    if (okGloss(s.g) && !gl.includes(s.g) && !unsuitable(s.g)) gl.push(s.g);
  }
  if (DROP.has(w)) continue;
  if (GLOSS[w]) { const o = GLOSS[w]; const i = gl.indexOf(o); if (i >= 0) gl.splice(i, 1); gl.unshift(o); }
  if (!gl.length) continue;
  seen.add(w);
  const k = POS[rec.pos];
  const o = { w, k, r: out.length + 1, g: gl[0], alt: gl.slice(1, 3), ipa: e.ipa || null, key };
  if (k === 'n') {
    if (e.gen) o.gen = e.gen;
    if (e.decl && ['sg.ind.nom', 'sg.ind.acc', 'sg.ind.dat', 'sg.ind.gen', 'pl.ind.nom', 'pl.ind.acc', 'pl.ind.dat', 'pl.ind.gen', 'sg.def.nom', 'pl.def.nom'].every((s) => e.decl[s]?.length === 1)) o.decl = e.decl;
  }
  const ex = [];
  for (const s of e.senses) for (const x of s.ex || []) if (!unsuitable(x.e)) ex.push(x);
  if (ex.length) o.ex = ex.slice(0, 2);
  out.push(o);
}

writeFileSync(join(ROOT, 'corpus', 'words.json'), JSON.stringify(out));
const by = {};
for (const x of out) by[x.k] = (by[x.k] || 0) + 1;
console.log(`words: ${out.length}`, by, `· nouns with a full table: ${out.filter((x) => x.decl).length}`);
console.log(out.slice(0, 40).map((x) => `${x.w}=${x.g}`).join(' | '));
