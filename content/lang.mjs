// Everything that differs between Snak (Danish) and Saga (Icelandic) lives here, so the engine and the
// build scripts are the same code in both apps.
export const LANG = {
  id: 'is',
  app: 'Saga',
  slug: 'saga',
  name: 'Icelandic',
  native: 'íslenska',
  tatoeba: { sentences: 'isl_sentences.tsv', links: 'isl-eng_links.tsv' },
  audio: { tatoeba: 'isl', ll: 'LL-Q294 (isl)-', old: 'Is-', kaikki: 'kaikki-is.jsonl', piper: { model: 'is_IS-salka-medium', label: 'Piper, Icelandic voice "Salka" (Talrómur, CC BY 4.0)' } },
  voice: { prefix: 'is', label: 'Icelandic' },
  stageCuts: [150, 400, 750, 1100, 1500],
  stageTitles: ['The first 150 words', 'Words 151–400', 'Words 401–750', 'Words 751–1,100', 'Words 1,101–1,500'],
  stageWhy: [
    'The commonest 150 words are in almost every sentence. Learn these first.',
    'Now you can follow short, simple sentences about people, places and things.',
    'These words fill in everyday talk: time, family, work and food.',
    'Here the words get more specific, and the sentences get longer.',
    'These are less common words. Many appear in reading more than in speech.',
  ],
  genders: { m: { key: 'karlkyn', label: 'masculine', note: 'karlkyn' }, f: { key: 'kvenkyn', label: 'feminine', note: 'kvenkyn' }, n: { key: 'hvorugkyn', label: 'neuter', note: 'hvorugkyn' } },
  genderPrompt: 'Is this noun masculine, feminine or neuter?',
  genderHelp: 'Every Icelandic noun is masculine (karlkyn), feminine (kvenkyn) or neuter (hvorugkyn). The gender decides which endings the word takes.',
  pronNote: 'Icelandic spelling is close to its sound, but þ is "th" as in thin and ð is "th" as in this.',
  themes: [
    { id: 'glacier', name: 'Glacier', sub: 'ice blue' },
    { id: 'aurora', name: 'Aurora', sub: 'green and violet' },
    { id: 'basalt', name: 'Basalt', sub: 'dark stone' },
  ],
  ladder: {
    id: 'cases', title: 'Cases', intro: 'Icelandic nouns change their ending to show their job in the sentence. There are four cases: nominative (nefnifall), accusative (þolfall), dative (þágufall) and genitive (eignarfall). This ladder practises the endings, one noun at a time.',
    slots: [
      ['sg.ind.acc', 'accusative singular'], ['sg.ind.dat', 'dative singular'], ['sg.ind.gen', 'genitive singular'],
      ['pl.ind.nom', 'nominative plural'], ['pl.ind.dat', 'dative plural'], ['sg.def.nom', 'nominative singular, with "the"'],
    ],
  },
};
