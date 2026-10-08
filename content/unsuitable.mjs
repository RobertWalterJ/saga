// What a sentence or a word says, read before anything else looks at it.
//
// Tatoeba is a general corpus, not one made for a learner, and Wiktionary lists vulgar words beside
// ordinary ones. This is checked against the ENGLISH (a person wrote it, so it is the more reliable
// reading of what the Icelandic means). Jasette learned this the hard way (content/unsuitable.mjs there).
//
// The line drawn: no violence done to a person as the point of the sentence, no self-harm, no sexual
// content, no slurs, no strong profanity, no hate. Wide on purpose: losing a few good items costs nothing.

const EN = [
  [/\b(kill(ed|ing|s)? (yourself|himself|herself|myself|themselves)|suicid|commit(ted)? suicide|hang(ed)? (yourself|himself|herself))/i, 'self-harm'],
  [/\b(rape[ds]?|raping|molest|pedophil|paedophil|sexual(ly)?|sex\b|sexy|porn|naked|nude|orgasm|erotic|horny|masturbat|prostitut|whore|slut|boob|penis|vagina|dick\b|cock\b|pussy|testicl|genital|breast|buttock|semen|vulva|anus|fornicat|intercourse|copulat)/i, 'sexual'],
  [/\b(fuck|fucking|shit|bullshit|bitch|bastard|asshole|dickhead|cunt|damn|piss(ed)? off|goddamn|crap|arse|bollocks|wanker|turd|fart|poop|piss)\b/i, 'profanity'],
  [/\b(nigger|nigga|faggot|fag\b|retard|spic\b|chink|kike|gook|tranny|slave|slavery|vulgar|offensive|derogatory|slur)\b/i, 'slur'],
  [/\b(nazi|hitler|holocaust|genocide|terroris|jihad|isis\b|al-qaeda|massacre|torture|behead|execut(e|ed|ion)|murder(ed|er|ing|s)?|shoot(s|ing)? (him|her|them|you|me|people)|stab(bed|bing)?|strangle|bomb(ed|ing|er)?\b)/i, 'violence'],
  [/\b(drunk|cocaine|heroin|marijuana|meth\b|overdose|get high|stoned)\b/i, 'drugs'],
  [/\bwould you like to (kill|die)|you should die|i('ll| will) kill|going to kill|want(s)? to die|wish(es)? (i|he|she|you) (was|were) dead/i, 'violence'],
];
export function unsuitable(en) {
  for (const [re, why] of EN) if (re.test(en)) return why;
  return null;
}
// Wiktionary sense tags that put a sense (or a word whose first sense it is) outside the learner deck.
export const BAD_TAGS = new Set(['vulgar', 'offensive', 'derogatory', 'slur', 'ethnic-slur', 'pejorative', 'obscene', 'taboo', 'sexual']);
// Sense tags that mean "not the ordinary meaning": such a sense is never used as the gloss.
export const ODD_TAGS = new Set(['obsolete', 'archaic', 'dated', 'rare', 'dialectal', 'regional', 'nonstandard', 'misspelling', 'proscribed', 'uncommon', 'historical', 'humorous', 'jocular', 'colloquial', 'slang', 'informal', 'poetic', 'literary', 'form-of', 'alt-of', 'abbreviation', 'initialism', 'acronym']);
