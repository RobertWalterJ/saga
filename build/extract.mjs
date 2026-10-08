// Saga — read the Wiktionary dump (kaikki.org) once and keep what the deck needs.
//
//   node build/extract.mjs        (after sources/kaikki-is.jsonl is downloaded; see README)
//
// Writes corpus/lexicon.json (one record per headword + part of speech) and corpus/forms.json
// (every inflected spelling -> the headwords it can belong to, with the grammatical tags).
// Nothing is invented here: every gloss, gender and form below is copied from an entry.

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
mkdirSync(join(ROOT, 'corpus'), { recursive: true });
const POS = { noun: 'n', verb: 'v', adj: 'adj', adv: 'adv', prep: 'prep', conj: 'conj', pron: 'pron', num: 'num', intj: 'intj', det: 'det', article: 'art', particle: 'part' };
const GEN = { masculine: 'm', feminine: 'f', neuter: 'n' };
const CASE = { nominative: 'nom', accusative: 'acc', dative: 'dat', genitive: 'gen' };
const NUM = { singular: 'sg', plural: 'pl' };
const DEF = { indefinite: 'ind', definite: 'def' };

const lines = readFileSync(join(ROOT, 'sources', 'kaikki-is.jsonl'), 'utf8').split('\n').filter(Boolean);
const lexicon = new Map();            // "word|pos" -> record
const forms = {};                     // spelling -> [[word|pos, tagKey]]
const addForm = (f, key, tagKey) => { (forms[f] ||= []); if (!forms[f].some((x) => x[0] === key && x[1] === tagKey)) forms[f].push([key, tagKey]); };
const SKIP_TAGS = new Set(['form-of', 'table-tags', 'inflection-template', 'canonical', 'masculine', 'feminine', 'neuter', 'strong', 'weak']);
const tagKeyOf = (tags) => [...new Set((tags || []).filter((t) => !SKIP_TAGS.has(t)))].sort().join('.');

let nEntries = 0, nFormOf = 0;
for (const line of lines) {
  const o = JSON.parse(line);
  const pos = POS[o.pos];
  if (!pos) continue;
  nEntries++;
  const senses = o.senses || [];
  // inflected-form entries: index them, they are not headwords
  for (const s of senses.filter((x) => x.form_of?.length)) {
    nFormOf++;
    for (const f of s.form_of) addForm(o.word, `${f.word}|${pos}`, tagKeyOf(s.tags));
  }
  const own = senses.filter((s) => !s.form_of?.length && !s.alt_of?.length);
  if (!own.length) continue;

  const key = `${o.word}|${pos}`;
  const rec = lexicon.get(key) || { w: o.word, pos, n: 0, entries: [] };
  rec.n++;
  // gender, for nouns: the headword line first, then the sense tags
  let gen = null;
  if (pos === 'n') {
    const exp = o.head_templates?.[0]?.expansion || '';
    const m = /^\S+\s+([mfn])(?:\s|,|\)|$)/.exec(exp);
    if (m) gen = m[1];
    else {
      const gs = new Set();
      for (const s of own) for (const t of s.tags || []) if (GEN[t]) gs.add(GEN[t]);
      if (gs.size === 1) gen = [...gs][0];
    }
  }
  // the declension table, slot by slot: "sg.ind.nom" -> [forms]
  let decl = null;
  if (pos === 'n') {
    const t = {};
    for (const f of o.forms || []) {
      if (f.source !== 'declension') continue;
      const tg = f.tags || [];
      const c = tg.map((x) => CASE[x]).find(Boolean), nu = tg.map((x) => NUM[x]).find(Boolean), de = tg.map((x) => DEF[x]).find(Boolean);
      if (!c || !nu || !de) continue;
      const slot = `${nu}.${de}.${c}`;
      (t[slot] ||= []);
      if (!t[slot].includes(f.form)) t[slot].push(f.form);
    }
    if (Object.keys(t).length) decl = t;
  }
  const ipa = (o.sounds || []).map((s) => s.ipa).find(Boolean) || null;
  const sensesOut = own.map((s) => ({
    g: (s.glosses || []).join(' — '), tags: s.tags || [],
    ex: (s.examples || []).filter((e) => e.text && e.english && e.type !== 'quotation' && e.text.length <= 90).slice(0, 3).map((e) => ({ t: e.text, e: e.english })),
  })).filter((s) => s.g);
  if (!sensesOut.length) continue;
  rec.entries.push({ gen, decl, ipa, senses: sensesOut });
  lexicon.set(key, rec);
  // the headword is also a form of itself, and a declension table lists the rest
  addForm(o.word, key, 'lemma');
  if (decl) for (const [slot, fs] of Object.entries(decl)) for (const f of fs) addForm(f, key, slot);
}

writeFileSync(join(ROOT, 'corpus', 'lexicon.json'), JSON.stringify([...lexicon.values()]));
writeFileSync(join(ROOT, 'corpus', 'forms.json'), JSON.stringify(forms));
console.log(`entries read: ${nEntries.toLocaleString()} · form-of senses: ${nFormOf.toLocaleString()} · headwords: ${lexicon.size.toLocaleString()} · spellings: ${Object.keys(forms).length.toLocaleString()}`);
