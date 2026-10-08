// Hand-checked glosses for the commonest words, where Wiktionary's first sense is a rare homograph
// ("er" -> "which", "verður" -> "meal"). Each is a plain, standard meaning of the word; the deck still
// refuses a word that Wiktionary does not list.
export const GLOSS = {
  'ég': 'I', 'vera': 'to be', 'í': 'in', 'og': 'and', 'hann': 'he', 'að': 'to; that', 'hver': 'who; which', 'með': 'with',
  'hún': 'she', 'til': 'to; toward', 'af': 'of; off', 'þú': 'you (one person)', 'ekki': 'not', 'sem': 'that; which; as',
  'svo': 'so', 'en': 'but', 'ef': 'if', 'er': 'is; am; are', 'sá': 'that one', 'fyrir': 'for; before', 'um': 'about; around',
  'við': 'we; with; at', 'á': 'on; at', 'það': 'it; that', 'ég': 'I', 'mig': 'me', 'þig': 'you (object)', 'sig': 'himself; herself',
  'ekkert': 'nothing', 'allt': 'everything', 'hér': 'here', 'nú': 'now', 'já': 'yes', 'nei': 'no', 'bara': 'only; just',
};
export const DROP = new Set(['verður', 'erta']);
