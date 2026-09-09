import { describe, expect, test } from 'vitest'
import {
  gruppen,
  gruppenDerSparte,
  gruppenFuerZielgruppe,
  gruppenOhneUebungsleitung,
  kennzahlen,
  sparten,
  wochenplan,
  wochentage,
  zielgruppen,
} from './vsv-sparten'

describe('Sparten und Gruppen', () => {
  test('jede Gruppe gehört zu einer bekannten Sparte', () => {
    const bekannt = new Set(sparten.map((sparte) => sparte.id))
    for (const gruppe of gruppen) {
      expect(bekannt.has(gruppe.sparte), gruppe.id).toBe(true)
    }
  })

  test('die Gruppen-Kennungen sind eindeutig', () => {
    const kennungen = gruppen.map((gruppe) => gruppe.id)
    expect(new Set(kennungen).size).toBe(kennungen.length)
  })

  test('jede Gruppe trainiert an einem der sechs Trainingstage', () => {
    for (const gruppe of gruppen) {
      expect(wochentage, gruppe.id).toContain(gruppe.tag)
    }
  })

  test('jede Gruppe nennt mindestens eine Zielgruppe', () => {
    const bekannt = new Set(zielgruppen.map((zielgruppe) => zielgruppe.id))
    for (const gruppe of gruppen) {
      expect(gruppe.zielgruppen.length, gruppe.id).toBeGreaterThan(0)
      for (const zielgruppe of gruppe.zielgruppen) {
        expect(bekannt.has(zielgruppe), gruppe.id).toBe(true)
      }
    }
  })

  test('jede Zielgruppe hat mindestens ein Angebot', () => {
    for (const zielgruppe of zielgruppen) {
      expect(
        gruppenFuerZielgruppe(zielgruppe.id).length,
        zielgruppe.id,
      ).toBeGreaterThan(0)
    }
  })

  test('eine Gruppe ohne Übungsleitung sagt, was offen ist', () => {
    for (const gruppe of gruppenOhneUebungsleitung()) {
      expect(gruppe.offeneFrage, gruppe.id).toBeTruthy()
    }
  })

  test('alle Gruppen tauchen in genau einer Sparte auf', () => {
    const summe = sparten.reduce(
      (zwischenstand, sparte) =>
        zwischenstand + gruppenDerSparte(sparte.id).length,
      0,
    )
    expect(summe).toBe(gruppen.length)
  })
})

describe('Wochenplan', () => {
  const plan = wochenplan()

  test('jede Gruppe steht an ihrem Trainingstag', () => {
    for (const gruppe of gruppen) {
      const tag = plan.find((eintrag) => eintrag.tag === gruppe.tag)
      expect(
        tag?.eintraege.some((eintrag) => eintrag.gruppe.id === gruppe.id),
        gruppe.id,
      ).toBe(true)
    }
  })

  test('ein Zusatztermin steht zusätzlich an seinem eigenen Tag', () => {
    const mitZusatz = gruppen.filter((gruppe) => gruppe.zusatztermin)
    expect(mitZusatz.length).toBeGreaterThan(0)
    for (const gruppe of mitZusatz) {
      const zusatz = gruppe.zusatztermin
      if (!zusatz) continue
      const tag = plan.find((eintrag) => eintrag.tag === zusatz.tag)
      const treffer = tag?.eintraege.filter(
        (eintrag) => eintrag.gruppe.id === gruppe.id && eintrag.hinweis,
      )
      expect(treffer?.length, gruppe.id).toBe(1)
    }
  })

  test('die Einträge eines Tages stehen in der Reihenfolge der Uhrzeit', () => {
    for (const tag of plan) {
      const zeiten = tag.eintraege.map((eintrag) => eintrag.beginn ?? 1e4)
      expect(
        [...zeiten].sort((a, b) => a - b),
        tag.tag,
      ).toEqual(zeiten)
    }
  })

  test('„nach Absprache“ steht am Ende seines Tages', () => {
    const freitag = plan.find((tag) => tag.tag === 'Fr')
    const letzter = freitag?.eintraege.at(-1)
    expect(letzter?.beginn).toBeNull()
  })
})

describe('Kennzahlen', () => {
  test('entsprechen der Liste von 2022', () => {
    expect(kennzahlen()).toEqual({
      sparten: 5,
      gruppen: 35,
      uebungsleiter: 22,
      kinderangebote: 12,
      trainingstage: 6,
      ohneUebungsleitung: 2,
    })
  })
})
