// Culture, history and language notes for Saga.
//
// Every sentence a note shows is a CLAIM, and every claim carries `q`: a quotation copied word for word from the
// Wikipedia article in sources/notes/<src>.txt (CC BY-SA 4.0; build/notes-src.mjs saves the exact revision).
// build/verify-notes.mjs fails the build if a quotation is not in its article, if a sentence is longer than 20 words,
// if an Icelandic term shown with the note is not in the article, or if a quiz answer is not backed by a claim.
// Nothing is added from memory: if the article does not say it, the note does not say it.
//
//   gate  — the note opens once this many words have been started
//   terms — Icelandic words shown with the note; each must appear in the article
//   quiz  — questions asked later in rounds; `claim` is the claim that gives the answer

export const NOTES = [
  // ───────────────────────── culture ─────────────────────────
  {
    id: 'names', kind: 'culture', title: 'Icelandic names', src: 'icelandic-name', gate: 50, terms: ['Jónsson', 'Jónsdóttir', 'dóttir'],
    claims: [
      { t: 'Most Icelandic last names show the parent’s first name. They do not show a family line.', q: 'they indicate the father (or mother) of the child and not the historic family lineage' },
      { t: 'Unlike Denmark, Norway and Sweden, Iceland kept its traditional name system.', q: 'Unlike these countries, Icelanders have continued to use their traditional name system' },
      { t: 'A last name is the parent’s first name in the genitive, then -son, “son”, or -dóttir, “daughter”.', q: 'a person\'s last name indicates the first name of their father (patronymic) or in some cases mother (matronymic) in the genitive, followed by -son ("son"), -dóttir ("daughter") or -bur ("child")' },
      { t: 'If Jón Einarsson has a son named Ólafur, the son is Ólafur Jónsson.', q: "Ólafur's last name will not be Einarsson like his father's; it will be Jónsson, indicating that Ólafur is the son of Jón (Jón + s + son)." },
      { t: 'Jón’s daughter Sigríður is Sigríður Jónsdóttir.', q: "Jón Einarsson's daughter Sigríður's last name is not Einarsson but Jónsdóttir." },
      { t: 'Since 1925, Icelanders cannot adopt a new family name unless they inherit the right to it.', q: 'Since 1925, it has been illegal for Icelanders to adopt a family name unless they have a right to do so through inheritance.' },
    ],
    quiz: [
      { ask: 'What does the last name Jónsdóttir mean?', answer: 'Jón’s daughter', wrong: ['Jón’s son', 'Jón’s family', 'Jón’s farm'], claim: 4 },
      { ask: 'Since which year has adopting a new family name been illegal?', answer: '1925', wrong: ['1874', '1944', '1991'], claim: 5 },
    ],
  },
  {
    id: 'naming', kind: 'culture', title: 'The Naming Committee', src: 'icelandic-naming-committee', gate: 120, terms: ['Mannanafnanefnd'],
    claims: [
      { t: 'The Icelandic Naming Committee keeps the official list of approved given names.', q: 'maintains an official register of approved Icelandic given names' },
      { t: 'The committee was set up in 1991.', q: 'The Naming Committee was established in 1991' },
      { t: 'A name must fit Icelandic grammar, which gives every noun a gender and case forms.', q: "names must be compatible with Icelandic grammar (in which all nouns, including proper names, have grammatical gender and change their forms in an orderly fashion according to the language's case system)" },
      { t: 'A name may use only letters of the Icelandic alphabet.', q: 'Names must also contain only letters occurring in the Icelandic alphabet' },
      { t: 'Foreigners and their children may keep their own names.', q: 'Foreigners and their children are allowed to keep their own names' },
      { t: 'In 2023, the register held about 4,300 names.', q: 'As of 2023, the Personal Names Register (Mannanafnaskrá) contained about 4,300 names.' },
    ],
    quiz: [
      { ask: 'In which year was the Naming Committee set up?', answer: '1991', wrong: ['1925', '1944', '2019'], claim: 1 },
      { ask: 'About how many names were on the register in 2023?', answer: 'about 4,300', wrong: ['about 430', 'about 43,000', 'about 1,500'], claim: 5 },
    ],
  },
  {
    id: 'bokaflod', kind: 'culture', title: 'The Christmas book flood', src: 'jolabokaflo', gate: 200, terms: ['Jólabókaflóð', 'Bókatíðindi'],
    claims: [
      { t: 'The Jólabókaflóð, the “Christmas book flood”, is the yearly release of new books before Christmas.', q: 'is a term used in Iceland for the annual release of new books occurring in the months before Christmas' },
      { t: 'People buy the books as presents to give on Christmas Eve.', q: 'These books are then purchased as presents to be gifted on Christmas Eve.' },
      { t: 'Books are the most popular Christmas gift in Iceland.', q: 'This practice makes books the most popular Christmas gift in the country.' },
      { t: 'A free catalogue called Bókatíðindi goes to every household.', q: 'an annual catalogue called the Journal of Books (Icelandic: Bókatíðindi) that is distributed to all households for free' },
      { t: 'Rules on imported paper were milder than on other goods, so books became the Christmas gift of choice.', q: 'Given that restrictions on imported paper were more lenient than on other products, books became and stayed the Christmas gift of choice.' },
    ],
    quiz: [
      { ask: 'What is Bókatíðindi?', answer: 'A free catalogue', wrong: ['A radio show', 'A bookshop', 'A poem'], claim: 3 },
      { ask: 'When do people give the books?', answer: 'On Christmas Eve', wrong: ['On New Year’s Day', 'At midsummer', 'In January'], claim: 1 },
    ],
  },
  {
    id: 'sagas', kind: 'culture', title: 'The sagas', src: 'sagas-of-icelanders', gate: 350, terms: ['Íslendingasögur'],
    claims: [
      { t: 'The sagas of Icelanders, the Íslendingasögur, are prose stories based on real events in Iceland.', q: 'They are prose narratives primarily based on historical events that mostly took place in Iceland' },
      { t: 'The events took place in the ninth, tenth and early eleventh centuries, called the Saga Age.', q: 'in the ninth, tenth, and early eleventh centuries, during the Saga Age' },
      { t: 'They were written in Old Icelandic, a western dialect of Old Norse, mostly on calfskin.', q: 'They were written in Old Icelandic, a western dialect of Old Norse, primarily on calfskin.' },
      { t: 'They are the best-known examples of Icelandic literature.', q: 'They are the best-known specimens of Icelandic literature.' },
      { t: 'Most were written down in the 13th and 14th centuries.', q: 'many of these Icelandic sagas were recorded, mostly in the 13th and 14th centuries' },
      { t: 'They focus on history, especially family history.', q: 'They are focused on history, especially genealogical and family history.' },
      { t: 'The people who wrote them down are largely unknown.', q: "The 'authors', or rather recorders, of these sagas are largely unknown." },
    ],
    quiz: [
      { ask: 'In which language were the sagas written?', answer: 'Old Icelandic', wrong: ['Latin', 'Danish', 'Old English'], claim: 2 },
      { ask: 'What were the sagas mostly written on?', answer: 'calfskin', wrong: ['paper', 'stone', 'wood'], claim: 2 },
    ],
  },
  {
    id: 'thorrablot', kind: 'culture', title: 'Þorrablót', src: 'orrablot', gate: 500, terms: ['Þorrablót', 'Þorri', 'blót'],
    claims: [
      { t: 'Þorrablót is an Icelandic midwinter festival.', q: 'is an Icelandic midwinter festival' },
      { t: 'It is named for the month of Þorri, from mid-January to mid-February.', q: 'named for the month of Þorri of the historical Icelandic calendar (corresponding to mid January to mid February)' },
      { t: 'The word blót means “sacrifice”.', q: 'blót, literally meaning sacrifice' },
      { t: 'The modern festival began in the second half of the 19th century.', q: 'The modern festival arose in the second half of the 19th century' },
      { t: 'Icelandic students in Copenhagen held the first known celebration in 1873.', q: 'The first known celebration was reportedly organised by the association of Icelandic students in Copenhagen in 1873' },
      { t: 'It is an evening with dinner, speeches and poems.', q: 'The Þorrablót is an evening with dinner where participants hold speeches and recite poems' },
      { t: 'Today it can be a dinner with friends or a large event with stage shows and a dance.', q: 'can be anything from an informal dinner with friends and family to large organised events with stage performances and an after-dinner dance' },
    ],
    quiz: [
      { ask: 'What does the word blót mean?', answer: 'sacrifice', wrong: ['song', 'house', 'river'], claim: 2 },
      { ask: 'Where was the first known Þorrablót held?', answer: 'Copenhagen', wrong: ['Reykjavík', 'Oslo', 'Stockholm'], claim: 4 },
    ],
  },
  // ───────────────────────── history ─────────────────────────
  {
    id: 'settlement', kind: 'history', title: 'The settlement of Iceland', src: 'settlement-of-iceland', gate: 400, terms: ['Landnámabók', 'Íslendingabók'],
    claims: [
      { t: 'The settlement of Iceland began in the second half of the ninth century.', q: 'is generally believed to have begun in the second half of the ninth century' },
      { t: 'Norse settlers crossed the North Atlantic.', q: 'Norse settlers migrated across the North Atlantic' },
      { t: 'Iceland was unsettled land, so people could claim it without fighting existing inhabitants.', q: 'Unlike Great Britain and Ireland, Iceland was unsettled land and could be claimed without conflict with existing inhabitants.' },
      { t: 'Modern historians point to deeper reasons, such as a shortage of farmland in Scandinavia.', q: 'modern historians focus on deeper factors, such as a shortage of arable land in Scandinavia' },
      { t: 'The Age of Settlement is traditionally said to have lasted from 874 to 930.', q: 'the Icelandic Age of Settlement is considered to have lasted from 874 to 930' },
      { t: 'Íslendingabók and Landnámabók, from the 12th and 13th centuries, give much detail about the settlement.', q: 'On the basis of Íslendingabók by Ari Þorgilsson, and Landnámabók, histories dating from the twelfth and thirteenth centuries and providing a wealth of detail about the settlement' },
      { t: 'These books are largely unreliable in their details.', q: 'these sources are largely unreliable in the details they provide about the settlement' },
    ],
    quiz: [
      { ask: 'Which years does tradition give for the Age of Settlement?', answer: '874 to 930', wrong: ['600 to 700', '930 to 1000', '1000 to 1262'], claim: 4 },
      { ask: 'What kind of land was Iceland when the settlers came?', answer: 'Unsettled land', wrong: ['Farmland with many farms', 'Land with a king', 'Land with large towns'], claim: 2 },
    ],
  },
  {
    id: 'althing', kind: 'history', title: 'The Althing', src: 'althing', gate: 600, terms: ['Alþingi', 'Þingvellir'],
    claims: [
      { t: 'The Alþingi, or Althing, is Iceland’s national parliament.', q: 'is the national legislature of Iceland' },
      { t: 'It was founded in 930, and is called the oldest legislature in the world.', q: 'Established in 930, it is the oldest legislature in the world.' },
      { t: 'The word Alþingi means “general meeting”.', q: "Icelandic for 'general meeting'" },
      { t: 'The first Althing met at Þingvellir, 45 kilometres east of where Reykjavík later became the capital.', q: "was founded in 930 at Þingvellir ('thing fields' or 'assembly fields', anglicised as Thingvellir), about 45 kilometres (28 mi) east of what later became the country's capital, Reykjavík" },
      { t: 'After the union with Norway in 1262, it lost its power to make laws.', q: "After Iceland's union with Norway in 1262, the Althing lost its legislative power" },
      { t: 'It got that power back in 1904, when Iceland gained home rule from Denmark.', q: 'which was not restored until 1904, when Iceland gained home rule from Denmark' },
      { t: 'Today it has 63 members, elected every four years.', q: 'The unicameral parliament has 63 members, and is elected every four years' },
    ],
    quiz: [
      { ask: 'What does Alþingi mean?', answer: 'general meeting', wrong: ['old law', 'high court', 'national book'], claim: 2 },
      { ask: 'How many members does the Althing have today?', answer: '63', wrong: ['41', '100', '120'], claim: 6 },
    ],
  },
  {
    id: 'kristnitaka', kind: 'history', title: 'The change of religion', src: 'christianisation-of-iceland', gate: 800, terms: ['kristnitaka'],
    claims: [
      { t: 'Iceland became legally Christian in the year 1000.', q: 'Iceland was legally Christianized in the year 1000 CE' },
      { t: 'The Althing voted to make Christianity the official religion.', q: 'setting Christianity as the official religion of Iceland through a vote by the Althing' },
      { t: 'The event is called the kristnitaka, “the taking of Christianity”.', q: "this event is known as the kristnitaka (literally, 'the taking of Christianity')" },
      { t: 'Most early settlers were pagans who worshipped the Norse gods.', q: 'The vast majority of the initial settlers of Iceland during the settlement of Iceland in the 9th and 10th centuries CE were pagan, worshipping the Norse gods.' },
      { t: 'The two religions divided the country and threatened civil war.', q: 'the two rival religions soon divided the country and threatened civil war' },
      { t: 'The pagan law speaker Thorgeir Thorkelsson proposed “one law and one religion”.', q: 'Law speaker and pagan Thorgeir Thorkelsson proposed "one law and one religion"' },
      { t: 'Some compromises were given to the pagans in return for converting.', q: 'some pragmatic concessions were granted to the pagans in exchange for converting' },
    ],
    quiz: [
      { ask: 'In which year was Iceland legally Christianized?', answer: '1000', wrong: ['874', '930', '1262'], claim: 0 },
      { ask: 'What does kristnitaka mean?', answer: 'the taking of Christianity', wrong: ['the end of the Althing', 'the law of the sagas', 'the Saga Age'], claim: 2 },
    ],
  },
  {
    id: 'codwars', kind: 'history', title: 'The Cod Wars', src: 'cod-wars', gate: 1000, terms: ['Þorskastríðin'],
    claims: [
      { t: 'The Cod Wars were 20th-century confrontations between Iceland and the United Kingdom about fishing rights.', q: 'were a series of 20th-century confrontations between Iceland and the United Kingdom (with aid from West Germany) about fishing rights in the North Atlantic around Iceland' },
      { t: 'Each dispute ended with an Icelandic victory.', q: 'Each of the disputes ended with an Icelandic victory.' },
      { t: 'The confrontations came in 1958–1961, 1972–73 and 1975–76.', q: '1958–1961, 1972–73 and 1975–76' },
      { t: 'In 1958, Iceland expanded its territorial waters to 12 nautical miles.', q: 'In 1958, Iceland expanded its territorial waters to 12 nmi (22 km) and banned foreign fishing fleets.' },
      { t: 'A NATO-brokered agreement in 1976 ended the dispute. Britain accepted Iceland’s zones.', q: 'In a NATO-brokered agreement in 1976, the United Kingdom accepted' },
      { t: 'There was one confirmed death: an Icelandic engineer, in 1973.', q: 'There was one confirmed death during the Cod Wars: an Icelandic engineer, who was accidentally killed in 1973' },
      { t: 'Since 1982, a 200-nautical-mile zone has been the international standard.', q: 'Since 1982, a 200-nautical-mile (370-kilometre) exclusive economic zone has been the international standard under the UN Convention on the Law of the Sea.' },
    ],
    quiz: [
      { ask: 'Who came out ahead in each Cod War dispute?', answer: 'Iceland', wrong: ['The United Kingdom', 'West Germany', 'Nobody'], claim: 1 },
      { ask: 'How many confirmed deaths were there in the Cod Wars?', answer: 'one', wrong: ['none', 'three', 'twelve'], claim: 5 },
    ],
  },
  // ───────────────────────── language ─────────────────────────
  {
    id: 'icelandic', kind: 'language', title: 'The Icelandic language', src: 'icelandic-language', gate: 0, terms: ['íslenska'],
    claims: [
      { t: 'About 390,000 people speak Icelandic, most of them in Iceland.', q: 'spoken by about 390,000 people, the vast majority of whom live in Iceland' },
      { t: 'It is a West Scandinavian language, most closely related to Faroese.', q: 'it is most closely related to Faroese, western Norwegian dialects, and the extinct language Norn' },
      { t: 'It is not mutually understandable with Danish, Norwegian or Swedish.', q: 'It is not mutually intelligible with the continental Scandinavian languages (Danish, Norwegian, and Swedish)' },
      { t: 'It keeps a four-case grammar, which most other Germanic languages have lost.', q: 'Most have greatly reduced levels of inflection (particularly noun declension), but Icelandic retains a four-case synthetic grammar' },
      { t: 'The language authority coins new terms from older Icelandic words instead of taking in loanwords.', q: "with the country's language regulator maintaining an active policy of coining terms based on older Icelandic words rather than directly taking in loanwords from other languages" },
      { t: 'The oldest preserved Icelandic texts were written around 1100.', q: 'The oldest preserved texts in Icelandic were written around 1100.' },
      { t: 'Icelandic Language Day is 16 November, the birthday of the poet Jónas Hallgrímsson.', q: 'on 16 November each year, the birthday of 19th-century poet Jónas Hallgrímsson is celebrated as Icelandic Language Day' },
    ],
    quiz: [
      { ask: 'On which day is Icelandic Language Day?', answer: '16 November', wrong: ['1 December', '17 June', '2 April'], claim: 6 },
      { ask: 'About how many people speak Icelandic?', answer: 'about 390,000', wrong: ['about 39,000', 'about 3.9 million', 'about 1.2 million'], claim: 0 },
    ],
  },
  {
    id: 'letters', kind: 'language', title: 'Icelandic letters', src: 'icelandic-orthography', gate: 30, terms: ['ð', 'þ', 'æ', 'ö'],
    claims: [
      { t: 'The Icelandic alphabet has 32 letters.', q: 'Icelandic orthography uses a Latin-script alphabet which has 32 letters.' },
      { t: 'It has no C, Q, W or Z, but adds Ð, Þ, Æ and Ö.', q: 'the Icelandic alphabet lacks C, Q, W, and Z, but additionally has Ð, Þ, Æ, and Ö' },
      { t: 'Six letters have acute accents: Á, É, Í, Ó, Ú and Ý.', q: 'Six letters have forms with acute accents to produce Á, É, Í, Ó, Ú and Ý.' },
      { t: 'The letters eth (ð), written dh, and thorn (þ), written th, are widely used.', q: 'The letters eth (⟨ð⟩, capital ⟨Ð⟩), transliterated as ⟨dh⟩, and thorn (⟨þ⟩, capital ⟨Þ⟩), transliterated as ⟨th⟩, are widely used in the Icelandic language.' },
      { t: 'Icelandic words never start with ð.', q: 'Icelandic words never start with ⟨ð⟩' },
      { t: 'The letters æ and ö count as separate letters.', q: 'The letters ⟨æ⟩ (capital ⟨Æ⟩) and ⟨ö⟩ (capital ⟨Ö⟩) are considered completely separate letters in Icelandic' },
      { t: 'In 1973, Iceland replaced z with s in native words.', q: 'it was decided in 1973 to replace all native instances of ⟨z⟩ with ⟨s⟩' },
    ],
    quiz: [
      { ask: 'How many letters does the Icelandic alphabet have?', answer: '32', wrong: ['26', '29', '36'], claim: 0 },
      { ask: 'Which letter does an Icelandic word never start with?', answer: 'ð', wrong: ['þ', 'æ', 'ö'], claim: 4 },
    ],
  },
  {
    id: 'grammar', kind: 'language', title: 'Genders, cases and “the”', src: 'icelandic-grammar', gate: 100, terms: ['Norður'],
    claims: [
      { t: 'Icelandic is a heavily inflected language.', q: 'Icelandic is a heavily inflected language.' },
      { t: 'Every noun is masculine, feminine or neuter.', q: 'Icelandic nouns are assigned to one of three grammatical genders (masculine, feminine, or neuter)' },
      { t: 'Nouns change in four cases: nominative, accusative, dative and genitive.', q: 'declined into four cases (nominative, accusative, dative, and genitive)' },
      { t: 'Nouns also change for singular and plural.', q: 'Nominals decline into two numbers: singular and plural' },
      { t: 'Icelandic has no word for “a” or “an”.', q: 'Icelandic does not have an indefinite article (a/an in English)' },
      { t: 'The word for “the” is usually joined to the end of the noun.', q: 'the definite article (the in English) is usually joined to the end of the word' },
      { t: 'Masculine nouns often end in -ur, -i, -ll or -nn.', q: 'Masculine nouns—often end in -ur, -i, -ll, or -nn in the nominative.' },
      { t: 'This is not always reliable: Norður, “north”, is neuter although it ends in -ur.', q: 'For example, the word Norður (north) is a neuter noun, although it ends in -ur which is typically reserved for masculine nouns.' },
    ],
    quiz: [
      { ask: 'How many cases do Icelandic nouns have?', answer: 'four', wrong: ['two', 'three', 'six'], claim: 2 },
      { ask: 'Which ending do masculine nouns often have?', answer: '-ur', wrong: ['-ing', '-un', '-a'], claim: 6 },
    ],
  },
  {
    id: 'sounds', kind: 'language', title: 'Icelandic sounds', src: 'icelandic-phonology', gate: 120, terms: [],
    claims: [
      { t: 'Icelandic has only very small differences in sound from region to region.', q: 'Icelandic has only very minor dialectal differences in sounds' },
      { t: 'The main stress is always on the first syllable.', q: 'In Icelandic, the main stress is always on the first syllable.' },
      { t: 'Icelandic stops differ by a puff of air (aspiration), not by voicing.', q: 'Icelandic has an aspiration contrast between plosives, rather than a voicing contrast' },
      { t: 'Preaspirated voiceless stops are common.', q: 'Preaspirated voiceless stops are also common.' },
      { t: 'Length changes the meaning of consonants, but not of vowels.', q: 'length is contrastive for consonants, but not vowels' },
    ],
    quiz: [
      { ask: 'Which syllable of a word carries the main stress?', answer: 'The first', wrong: ['The last', 'The second', 'It changes from word to word'], claim: 1 },
      { ask: 'What does length change the meaning of in Icelandic?', answer: 'Consonants', wrong: ['Vowels', 'Both vowels and consonants', 'Neither'], claim: 4 },
    ],
  },
  {
    id: 'purism', kind: 'language', title: 'New words from old roots', src: 'linguistic-purism-in-icelandic', gate: 200, terms: ['hreintungustefna', 'íslenska'],
    claims: [
      { t: 'Linguistic purism is the policy of making new words from Old Icelandic roots instead of taking loanwords.', q: 'is the policy of discouraging new loanwords from entering the Icelandic language by instead creating new words from Old Icelandic roots' },
      { t: 'It began in the early 19th century, aimed at older loanwords, especially from Danish.', q: 'The effort began during the early 19th century Icelandic national movement, aiming at replacing older loanwords, especially from Danish' },
      { t: 'Today it targets English words.', q: 'it continues today, targeting English words' },
      { t: 'The government supports it through institutions such as the Árni Magnússon Institute.', q: 'being fully supported by the Icelandic government through the Árni Magnússon Institute for Icelandic Studies' },
      { t: 'In the 16th century, Icelanders coined the word íslenska for their own language.', q: 'Icelanders coined the term íslenska to denote their native tongue' },
      { t: 'Eggert Ólafsson was the first real instigator of Icelandic purism.', q: 'The first real instigator of Icelandic linguistic purism (hreintungustefna) was Eggert Ólafsson (1726–68).' },
    ],
    quiz: [
      { ask: 'Which language’s words does purism target today?', answer: 'English', wrong: ['Danish', 'Latin', 'Faroese'], claim: 2 },
      { ask: 'Where do new Icelandic words come from, under purism?', answer: 'Old Icelandic roots', wrong: ['English roots', 'Danish roots', 'Latin roots'], claim: 0 },
    ],
  },
];
