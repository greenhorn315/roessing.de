/**
 * Sparten, Trainingsgruppen und Übungsleitungen des VSV Rössing.
 *
 * Quelle: Übungsleiterliste des Vereins mit Stand 2022. Die Angaben sind
 * ungeprüft — Gruppen können weggefallen, Zeiten verschoben und
 * Übungsleitungen gewechselt sein. Vor einer öffentlichen Veröffentlichung
 * muss jede Zeile von den Spartenleitungen bestätigt werden, und Namen
 * dürfen nur mit Einverständnis der Betroffenen erscheinen.
 */

export type SpartenId =
  | 'fussball'
  | 'volleyball'
  | 'turnen'
  | 'leichtathletik'
  | 'dart'

export type ZielgruppenId =
  | 'kinder'
  | 'jugend'
  | 'frauen'
  | 'maenner'
  | 'erwachsene'

export type Wochentag = 'Mo' | 'Di' | 'Mi' | 'Do' | 'Fr' | 'Sa'

export interface Sparte {
  id: SpartenId
  name: string
  /** Null, solange die Spartenleitung nicht benannt ist. */
  spartenleitung: string | null
  /** Tailwind-Klasse für die farbige Kopflinie der Sparte. */
  akzent: string
  /** Tailwind-Klasse für den Marker im Wochenplan. */
  marker: string
}

export interface Zusatztermin {
  tag: Wochentag
  zeit: string
  beginn: number
  hinweis: string
}

export interface Gruppe {
  id: string
  sparte: SpartenId
  name: string
  /** Erläuterung unter dem Namen, etwa Altersspanne oder Rhythmus. */
  hinweis?: string
  tag: Wochentag
  /** Anzeigetext der Trainingszeit. */
  zeit: string
  /** Beginn in Minuten nach Mitternacht; null bei „nach Absprache“. */
  beginn: number | null
  zielgruppen: ZielgruppenId[]
  /** Kurze Merkmale für die Anzeige, etwa „ab 16“ oder „Leistungsgruppe“. */
  merkmale: string[]
  /** Leer, solange die Gruppe keine Übungsleitung hat. */
  uebungsleiter: string[]
  /** Was die Quelle offen lässt und vor Ort geklärt werden muss. */
  offeneFrage?: string
  /** Zweiter Termin, etwa Hallentraining im Winter. */
  zusatztermin?: Zusatztermin
}

export interface Zielgruppe {
  id: ZielgruppenId
  name: string
  spanne: string
  einleitung: string
}

/** Reihenfolge der Trainingstage in allen Ansichten. */
export const wochentage: Wochentag[] = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa']

export const wochentagNamen: Record<Wochentag, string> = {
  Mo: 'Montag',
  Di: 'Dienstag',
  Mi: 'Mittwoch',
  Do: 'Donnerstag',
  Fr: 'Freitag',
  Sa: 'Samstag',
}

export const sparten: Sparte[] = [
  {
    id: 'fussball',
    name: 'Fußball',
    spartenleitung: null,
    akzent: 'border-t-success',
    marker: 'bg-success',
  },
  {
    id: 'volleyball',
    name: 'Volleyball',
    spartenleitung: null,
    akzent: 'border-t-info',
    marker: 'bg-info',
  },
  {
    id: 'turnen',
    name: 'Turnen',
    spartenleitung: null,
    akzent: 'border-t-secondary',
    marker: 'bg-secondary',
  },
  {
    id: 'leichtathletik',
    name: 'Leichtathletik',
    spartenleitung: null,
    akzent: 'border-t-warning',
    marker: 'bg-warning',
  },
  {
    id: 'dart',
    name: 'Dart',
    spartenleitung: 'Marina Miska',
    akzent: 'border-t-accent',
    marker: 'bg-accent',
  },
]

export const zielgruppen: Zielgruppe[] = [
  {
    id: 'kinder',
    name: 'Kinder',
    spanne: 'etwa 1 bis 11 Jahre',
    einleitung:
      'Das größte Angebot des Vereins: vom Eltern-Kind-Turnen bis zur E-Jugend ist jeder Jahrgang abgedeckt.',
  },
  {
    id: 'jugend',
    name: 'Jugendliche',
    spanne: 'etwa 11 bis 18 Jahre',
    einleitung:
      'Tanz, Leichtathletik und Dart. Außerhalb des Fußballs fehlt ein Angebot für Jungen dieser Altersgruppe.',
  },
  {
    id: 'frauen',
    name: 'Frauen',
    spanne: 'ausdrücklich für Frauen',
    einleitung:
      'Dazu kommen alle Angebote für Erwachsene, die für alle offen sind.',
  },
  {
    id: 'maenner',
    name: 'Männer',
    spanne: 'ausdrücklich für Männer',
    einleitung:
      'Dazu kommen alle Angebote für Erwachsene, die für alle offen sind.',
  },
  {
    id: 'erwachsene',
    name: 'Offen für alle',
    spanne: 'Erwachsene, gemischt',
    einleitung:
      'Vom ruhigen Einstieg bis zur Leistungsgruppe — hier ist kein Angebot an ein Geschlecht gebunden.',
  },
]

export const gruppen: Gruppe[] = [
  // 1. Fußball
  {
    id: 'fussball-damen',
    sparte: 'fussball',
    name: 'Damen',
    tag: 'Mo',
    zeit: '19:00',
    beginn: 19 * 60,
    zielgruppen: ['frauen'],
    merkmale: ['ab 16'],
    uebungsleiter: ['Johanna Kasten'],
    zusatztermin: {
      tag: 'Do',
      zeit: '20:00',
      beginn: 20 * 60,
      hinweis: 'Wintertraining in der Sporthalle',
    },
  },
  {
    id: 'fussball-herren',
    sparte: 'fussball',
    name: 'I. Herren',
    tag: 'Di',
    zeit: '19:00',
    beginn: 19 * 60,
    zielgruppen: ['maenner'],
    merkmale: [],
    uebungsleiter: ['Dustin Schiewe'],
    zusatztermin: {
      tag: 'Mo',
      zeit: '20:00',
      beginn: 20 * 60,
      hinweis: 'Wintertraining in der Sporthalle',
    },
  },
  {
    id: 'fussball-ue32',
    sparte: 'fussball',
    name: 'Ü32',
    tag: 'Di',
    zeit: '19:00',
    beginn: 19 * 60,
    zielgruppen: ['maenner'],
    merkmale: ['ab 32'],
    uebungsleiter: [],
    offeneFrage: 'Übungsleitung war 2022 unbesetzt („tba“).',
  },
  {
    id: 'fussball-g-jugend',
    sparte: 'fussball',
    name: 'G-Jugend',
    hinweis: 'Bambini, etwa 5 bis 6 Jahre',
    tag: 'Mi',
    zeit: '16:30–17:30',
    beginn: 16 * 60 + 30,
    zielgruppen: ['kinder'],
    merkmale: [],
    uebungsleiter: ['Johanna Kasten', 'Marlene Ahrens'],
  },
  {
    id: 'fussball-f-jugend-2',
    sparte: 'fussball',
    name: 'F-Jugend II',
    hinweis: 'etwa 7 bis 8 Jahre',
    tag: 'Mi',
    zeit: '17:30–18:30',
    beginn: 17 * 60 + 30,
    zielgruppen: ['kinder'],
    merkmale: [],
    uebungsleiter: ['Roman Vesely'],
  },
  {
    id: 'fussball-f-jugend-1',
    sparte: 'fussball',
    name: 'F-Jugend I',
    hinweis: 'etwa 7 bis 8 Jahre',
    tag: 'Fr',
    zeit: '16:30–17:30',
    beginn: 16 * 60 + 30,
    zielgruppen: ['kinder'],
    merkmale: [],
    uebungsleiter: ['Luca Busche', 'Felix Satow'],
  },
  {
    id: 'fussball-e-jugend',
    sparte: 'fussball',
    name: 'E-Jugend',
    hinweis: 'etwa 9 bis 10 Jahre',
    tag: 'Fr',
    zeit: '17:30–18:30',
    beginn: 17 * 60 + 30,
    zielgruppen: ['kinder'],
    merkmale: [],
    uebungsleiter: ['Thomas Bajgier', 'Felix Satow'],
  },

  // 2. Volleyball
  {
    id: 'volleyball-mixed',
    sparte: 'volleyball',
    name: 'Volleyball mixed',
    tag: 'Mo',
    zeit: '20:00',
    beginn: 20 * 60,
    zielgruppen: ['erwachsene'],
    merkmale: ['gemischt'],
    uebungsleiter: ['Gunnar Wolpert'],
  },

  // 3. Turnen
  {
    id: 'turnen-montagsturner',
    sparte: 'turnen',
    name: 'Montagsturner',
    tag: 'Mo',
    zeit: '15:45–16:45',
    beginn: 15 * 60 + 45,
    zielgruppen: ['erwachsene'],
    merkmale: [],
    uebungsleiter: ['Monika Koch'],
    offeneFrage:
      'Zielgruppe steht nicht in der Liste, und der Name erklärt sich Zugezogenen nicht.',
  },
  {
    id: 'turnen-move-your-body',
    sparte: 'turnen',
    name: 'move your body',
    tag: 'Mi',
    zeit: '18:00–19:00',
    beginn: 18 * 60,
    zielgruppen: ['erwachsene'],
    merkmale: [],
    uebungsleiter: ['Denise Hoffmann'],
  },
  {
    id: 'turnen-jazz-dance-frauen',
    sparte: 'turnen',
    name: 'Jazz Dance Frauen',
    tag: 'Mi',
    zeit: '19:30–20:30',
    beginn: 19 * 60 + 30,
    zielgruppen: ['frauen'],
    merkmale: [],
    uebungsleiter: ['Britta Ahrens'],
  },
  {
    id: 'turnen-jazz-dance-jugend',
    sparte: 'turnen',
    name: 'Jazz Dance Jugend',
    tag: 'Mi',
    zeit: '20:30–21:30',
    beginn: 20 * 60 + 30,
    zielgruppen: ['jugend'],
    merkmale: [],
    uebungsleiter: ['Britta Ahrens'],
  },
  {
    id: 'turnen-frauengymnastik',
    sparte: 'turnen',
    name: 'Frauengymnastik',
    tag: 'Do',
    zeit: '10:30–11:30',
    beginn: 10 * 60 + 30,
    zielgruppen: ['frauen'],
    merkmale: ['vormittags'],
    uebungsleiter: ['Monika Koch'],
  },
  {
    id: 'turnen-eltern-kind',
    sparte: 'turnen',
    name: 'Eltern-Kind-Turnen',
    tag: 'Do',
    zeit: '15:00–16:00',
    beginn: 15 * 60,
    zielgruppen: ['kinder'],
    merkmale: ['mit Eltern'],
    uebungsleiter: ['Elke Winkler'],
  },
  {
    id: 'turnen-kinderturnen-ab-3',
    sparte: 'turnen',
    name: 'Kinderturnen ab 3',
    tag: 'Do',
    zeit: '16:00–17:00',
    beginn: 16 * 60,
    zielgruppen: ['kinder'],
    merkmale: ['ab 3'],
    uebungsleiter: ['Elke Winkler'],
  },
  {
    id: 'turnen-jugendturnen-ab-6',
    sparte: 'turnen',
    name: 'Jugendturnen ab 6',
    tag: 'Do',
    zeit: '17:00–18:00',
    beginn: 17 * 60,
    zielgruppen: ['kinder'],
    merkmale: ['ab 6'],
    uebungsleiter: ['Elke Winkler'],
  },
  {
    id: 'turnen-kinderturnen-ab-9',
    sparte: 'turnen',
    name: 'Kinderturnen ab 9',
    hinweis: '14-tägig',
    tag: 'Do',
    zeit: '18:00–19:00',
    beginn: 18 * 60,
    zielgruppen: ['kinder'],
    merkmale: ['ab 9'],
    uebungsleiter: ['Elke Winkler'],
  },
  {
    id: 'turnen-fit-for-fun',
    sparte: 'turnen',
    name: 'Fit for fun',
    tag: 'Do',
    zeit: '19:00–20:00',
    beginn: 19 * 60,
    zielgruppen: ['erwachsene'],
    merkmale: [],
    uebungsleiter: ['Monika Koch'],
  },
  {
    id: 'turnen-yoga',
    sparte: 'turnen',
    name: 'Yoga',
    tag: 'Fr',
    zeit: '18:30–19:30',
    beginn: 18 * 60 + 30,
    zielgruppen: ['erwachsene'],
    merkmale: [],
    uebungsleiter: [],
    offeneFrage: 'In der Liste ist keine Übungsleitung eingetragen.',
  },
  {
    id: 'turnen-maennergymnastik',
    sparte: 'turnen',
    name: 'Männergymnastik',
    tag: 'Fr',
    zeit: '19:30–21:30',
    beginn: 19 * 60 + 30,
    zielgruppen: ['maenner'],
    merkmale: [],
    uebungsleiter: ['Olaf Elbeshausen'],
  },
  {
    id: 'turnen-jazzdance-sweeties',
    sparte: 'turnen',
    name: 'Jazzdance Sweeties',
    hinweis: 'ab 3 Jahren bis 1. Klasse',
    tag: 'Sa',
    zeit: '9:00–9:45',
    beginn: 9 * 60,
    zielgruppen: ['kinder'],
    merkmale: ['ab 3'],
    uebungsleiter: ['Louisa Maiwald'],
  },
  {
    id: 'turnen-jazzdance-butterflies',
    sparte: 'turnen',
    name: 'Jazzdance Butterflies',
    hinweis: '2. bis 5. Klasse',
    tag: 'Sa',
    zeit: '9:45–10:30',
    beginn: 9 * 60 + 45,
    zielgruppen: ['kinder'],
    merkmale: [],
    uebungsleiter: ['Louisa Maiwald'],
  },
  {
    id: 'turnen-jazzdance-nameless',
    sparte: 'turnen',
    name: 'Jazzdance Nameless',
    hinweis: 'ab 6. Klasse',
    tag: 'Sa',
    zeit: '10:30–11:00',
    beginn: 10 * 60 + 30,
    zielgruppen: ['jugend'],
    merkmale: [],
    uebungsleiter: ['Louisa Maiwald'],
  },
  {
    id: 'turnen-jazzdance-jam-touch',
    sparte: 'turnen',
    name: 'Jazzdance JAM-Touch',
    hinweis: 'ab 15 Jahren',
    tag: 'Sa',
    zeit: '11:00–12:00',
    beginn: 11 * 60,
    zielgruppen: ['jugend', 'erwachsene'],
    merkmale: ['ab 15'],
    uebungsleiter: ['Britta Ahrens'],
  },
  {
    id: 'turnen-basketball',
    sparte: 'turnen',
    name: 'Basketball',
    hinweis: 'in der Liste unter Turnen geführt',
    tag: 'Sa',
    zeit: '14:00–15:30',
    beginn: 14 * 60,
    zielgruppen: ['jugend'],
    merkmale: [],
    uebungsleiter: ['Lennart Ahrens'],
    offeneFrage:
      'Eigene Sparte oder Angebot der Turnsparte? Auch das Alter fehlt.',
  },

  // 4. Leichtathletik
  {
    id: 'la-kinder-4-7',
    sparte: 'leichtathletik',
    name: 'Spielerische Grundlagen',
    hinweis: 'Kinder von 4 bis 7 Jahren',
    tag: 'Mo',
    zeit: '17:00–18:00',
    beginn: 17 * 60,
    zielgruppen: ['kinder'],
    merkmale: ['4 bis 7'],
    uebungsleiter: ['Alexandra Stichnoth'],
  },
  {
    id: 'la-hochsprung',
    sparte: 'leichtathletik',
    name: 'Hochsprung',
    hinweis: 'Leistungsgruppe',
    tag: 'Mo',
    zeit: '18:15–19:45',
    beginn: 18 * 60 + 15,
    zielgruppen: ['erwachsene'],
    merkmale: ['Leistungsgruppe'],
    uebungsleiter: ['Claudia Losch'],
  },
  {
    id: 'la-fit-for-school',
    sparte: 'leichtathletik',
    name: 'fit for school',
    hinweis: 'Kinder von 8 bis 11 Jahren, Fitness und Grundlagen',
    tag: 'Di',
    zeit: '16:30–17:45',
    beginn: 16 * 60 + 30,
    zielgruppen: ['kinder'],
    merkmale: ['8 bis 11'],
    uebungsleiter: ['Olga Schmidt'],
  },
  {
    id: 'la-jugend-leistung',
    sparte: 'leichtathletik',
    name: 'Jugend-Leistungsgruppe',
    tag: 'Di',
    zeit: '18:00–19:15',
    beginn: 18 * 60,
    zielgruppen: ['jugend'],
    merkmale: ['Leistungsgruppe'],
    uebungsleiter: ['Olga Schmidt'],
  },
  {
    id: 'la-erwachsene',
    sparte: 'leichtathletik',
    name: 'Erwachsene',
    tag: 'Di',
    zeit: '19:30–21:00',
    beginn: 19 * 60 + 30,
    zielgruppen: ['erwachsene'],
    merkmale: [],
    uebungsleiter: ['Svenja Ebeling'],
  },
  {
    id: 'la-wurfgruppe',
    sparte: 'leichtathletik',
    name: 'Wurfgruppe',
    tag: 'Do',
    zeit: '18:00–19:30',
    beginn: 18 * 60,
    zielgruppen: ['erwachsene'],
    merkmale: [],
    uebungsleiter: ['Vivien Sekul'],
  },
  {
    id: 'la-sprint-sprung',
    sparte: 'leichtathletik',
    name: 'Sprint- und Sprunggruppe',
    hinweis: 'SLZ Hannover',
    tag: 'Do',
    zeit: '18:30–20:00',
    beginn: 18 * 60 + 30,
    zielgruppen: ['erwachsene'],
    merkmale: ['auswärts'],
    uebungsleiter: ['Britta Härke'],
  },
  {
    id: 'la-lauf-sprung',
    sparte: 'leichtathletik',
    name: 'Lauf- und Sprungtraining',
    hinweis: 'Sportplatz Nordstemmen',
    tag: 'Fr',
    zeit: 'nach Absprache',
    beginn: null,
    zielgruppen: ['erwachsene'],
    merkmale: ['auswärts'],
    uebungsleiter: ['Britta Härke'],
  },
  {
    id: 'la-krafttraining',
    sparte: 'leichtathletik',
    name: 'Krafttraining',
    hinweis: 'Leistungsgruppe',
    tag: 'Sa',
    zeit: '12:00–14:00',
    beginn: 12 * 60,
    zielgruppen: ['erwachsene'],
    merkmale: ['Leistungsgruppe'],
    uebungsleiter: ['Claudia Losch'],
  },

  // 5. Dart
  {
    id: 'dart-training',
    sparte: 'dart',
    name: 'Training für alle Spielstärken',
    hinweis:
      'vom Gelegenheitsspieler über den ambitionierten Hobbyspieler bis zum PDC-Development-Tour-Spieler',
    tag: 'Mo',
    zeit: 'ab 19:00',
    beginn: 19 * 60,
    zielgruppen: ['jugend', 'erwachsene'],
    merkmale: ['14 bis 60', 'gemischt'],
    uebungsleiter: ['Marina Miska'],
  },
]

/** Alle Gruppen einer Sparte, in der Reihenfolge der Liste. */
export const gruppenDerSparte = (sparte: SpartenId): Gruppe[] =>
  gruppen.filter((gruppe) => gruppe.sparte === sparte)

/** Alle Gruppen, die sich an eine Zielgruppe richten. */
export const gruppenFuerZielgruppe = (zielgruppe: ZielgruppenId): Gruppe[] =>
  gruppen.filter((gruppe) => gruppe.zielgruppen.includes(zielgruppe))

export interface Wochenplaneintrag {
  gruppe: Gruppe
  zeit: string
  beginn: number | null
  /** Gesetzt, wenn der Eintrag ein Zusatztermin ist, etwa im Winter. */
  hinweis?: string
}

export interface Wochenplantag {
  tag: Wochentag
  name: string
  eintraege: Wochenplaneintrag[]
}

/**
 * Der Wochenplan über alle Sparten hinweg. Zusatztermine wie das
 * Hallentraining im Winter stehen an ihrem eigenen Tag, damit der Plan zeigt,
 * was an diesem Abend tatsächlich in der Halle los ist.
 */
export const wochenplan = (): Wochenplantag[] => {
  const eintraege: (Wochenplaneintrag & { tag: Wochentag })[] = []
  for (const gruppe of gruppen) {
    eintraege.push({
      tag: gruppe.tag,
      gruppe,
      zeit: gruppe.zeit,
      beginn: gruppe.beginn,
    })
    if (gruppe.zusatztermin) {
      eintraege.push({
        tag: gruppe.zusatztermin.tag,
        gruppe,
        zeit: gruppe.zusatztermin.zeit,
        beginn: gruppe.zusatztermin.beginn,
        hinweis: gruppe.zusatztermin.hinweis,
      })
    }
  }
  return wochentage.map((tag) => ({
    tag,
    name: wochentagNamen[tag],
    eintraege: eintraege
      .filter((eintrag) => eintrag.tag === tag)
      // „nach Absprache“ hat keine Uhrzeit und steht deshalb am Ende
      .sort((a, b) => (a.beginn ?? 1e4) - (b.beginn ?? 1e4)),
  }))
}

/** Alle Übungsleiterinnen und Übungsleiter, alphabetisch und ohne Dopplung. */
export const alleUebungsleiter = (): string[] =>
  [...new Set(gruppen.flatMap((gruppe) => gruppe.uebungsleiter))].sort((a, b) =>
    a.localeCompare(b, 'de'),
  )

/** Gruppen, für die keine Übungsleitung eingetragen ist. */
export const gruppenOhneUebungsleitung = (): Gruppe[] =>
  gruppen.filter((gruppe) => gruppe.uebungsleiter.length === 0)

export const kennzahlen = () => ({
  sparten: sparten.length,
  gruppen: gruppen.length,
  uebungsleiter: alleUebungsleiter().length,
  kinderangebote: gruppenFuerZielgruppe('kinder').length,
  trainingstage: new Set(gruppen.map((gruppe) => gruppe.tag)).size,
  ohneUebungsleitung: gruppenOhneUebungsleitung().length,
})
