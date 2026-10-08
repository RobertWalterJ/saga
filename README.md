# Saga — learn Icelandic (prototype)

A phone-first, installable app for learning Icelandic with short rounds of spaced questions. Built on the same
ideas as Hok Gong (Cantonese) and Jasette (French): spaced retrieval with FSRS, a teaching card before each new
word, a ladder for the part of the grammar that is hard in this language, read-aloud for everything, and a
build that fails if any answer cannot be re-derived from its source. Unlike those two it is written for a
beginner and the whole interface is English.

## Run it

Double-click **Launch Saga.bat** (or the **Saga** shortcut on the Desktop). It opens http://localhost:8912/.
Close the black window to stop it. Or: `npm run dev`.

## What is in the prototype

- A word list taken from subtitle frequency, in 5 stages, commonest first.
- Question kinds: read (word to meaning), recall (meaning to word), listen (phone voice), gap (fill a sentence),
  gender, and a ladder (noun cases: accusative, dative, genitive, plural, 'the' form).
- Rounds of 18 (12 / 18 / 25 / 40) that are never cut short, with an "Another round" button.
- Three palettes, each light and dark; large-text option; no timers anywhere.
- Backup and restore of progress as a file. Works offline after the first load.

## Checks

`npm run check` rebuilds the deck and runs: **verify** (every answer re-derived from the corpus),
**test-verify** (12 planted faults must all be caught), **audit-colour** (WCAG contrast of every palette),
**test-sched** (a round is never short; casual and committed learners over 60 days).
Not done yet: a colour-blindness simulation, and a test on a real phone.

## Sources and licences

- Word meanings, genders, sounds and forms: English Wiktionary via kaikki.org, CC BY-SA 4.0.
- Example sentences and translations: Tatoeba contributors, CC BY 2.0 FR.
- Word frequency: FrequencyWords (hermitdave), from OpenSubtitles, CC BY-SA 4.0.
- Scheduler: ts-fsrs (MIT). Fonts: Atkinson Hyperlegible and Fraunces (SIL OFL).
- A few meanings for the commonest function words (content/glosses.mjs) were written by hand, because
  Wiktionary lists a rare meaning first. verify.mjs still requires the word to be in Wiktionary.

## Not yet (honest list)

- No recordings: every spoken word is the phone's own machine voice. If the phone has none for Icelandic, listening
  questions and the speaker buttons are switched off.
- Gap questions can have more than one grammatical answer; the English translation is shown to settle it.
- No level check (there is a "skip the first stages" setting), no conversations, no speaking practice.
- Never pushed to GitHub or deployed.

## Icelandic notes

- The case ladder uses each noun's own Wiktionary table: about 700 of the 948 nouns have a complete table, and the
  ladder uses the 220 commonest of those (1,320 questions).
- **There is no verb ladder.** Wiktionary's Icelandic verb tables are not tagged slot by slot in the kaikki dump
  (the forms are marked "unrecognized"), so person-by-person present tense cannot be read without guessing.
  A different source (BÍN, the Icelandic inflection database, which has its own licence) would be needed.
- The frequency list has a broken encoding in places ("đ" for "ð"); words.mjs repairs it.
- The lemma weighting is iterative (var is "was" of vera far more often than the noun var), but a few rare
  homographs still rank higher than they should. The commonest words are hand-checked.
