// Tonerschonend gebaut: weisser Grund, Farbe nur in Schrift, Linien und
// Rahmen. Ein Aushang wird nachgedruckt und kopiert – flaechige Hintergruende
// leeren die Kartusche und schlagen auf dem naechsten Kopierer durch.
#set page(paper: "a4", margin: (x: 1.6cm, y: 1.2cm))
#set text(
  font: ("Inter Variable", "Liberation Sans", "DejaVu Sans"),
  lang: "de",
  fill: black,
  hyphenate: false,
)
#set par(leading: 0.8em)

#let accent = rgb("#1f4d2b")
#let muted = rgb("#5a5a5a")

// Kopf
#align(center)[
  #text(size: 12pt, weight: "semibold", tracking: 0.1em, fill: accent)[
    VSV RÖSSING VON 1897 · EINLADUNG
  ]
  #v(0.25cm)
  #text(size: 38pt, weight: "black", tracking: -0.02em, fill: accent)[
    Neue \ Outdoor-Sparte
  ]
  #v(0.2cm)
  #text(size: 19pt, weight: "medium")[
    Kennenlerntreffen am Samstag, 10. Oktober
  ]
]

#v(0.4cm)
#line(length: 100%, stroke: 2pt + accent)
#v(0.5cm)

#text(size: 14pt)[
  Wandern, Nordic Walking, Radtouren, Boßeln mit dem Bollerwagen – und das
  gesellige Beisammensein danach: Der VSV Rössing gründet eine Sparte für
  alles, was draußen Spaß macht. Rund 30 Leute haben sich schon eingetragen,
  jetzt treffen wir uns zum ersten Mal.
]

#v(0.35cm)

#text(size: 14pt)[
  *Mitmachen kann jede und jeder* – eine Vereinsmitgliedschaft ist für den
  Anfang nicht nötig.
]

#v(0.5cm)

// Info-Block: nur Rahmen, kein Fuellton
#block(
  width: 100%,
  inset: 0.55cm,
  radius: 0.15cm,
  stroke: 1pt + accent,
)[
  #grid(
    columns: (auto, 1fr),
    column-gutter: 0.6cm,
    row-gutter: 0.3cm,
    text(size: 15pt, weight: "bold", fill: accent)[Wann],
    text(size: 15pt)[Samstag, 10. Oktober 2026 · 15:00 Uhr],
    text(size: 15pt, weight: "bold", fill: accent)[Wo],
    text(size: 15pt)[VSV-Vereinsheim · Zum Klay 6 · Rössing],
    text(size: 15pt, weight: "bold", fill: accent)[Für wen],
    text(size: 15pt)[alle Interessierten · Eintritt frei],
  )
]

#v(0.5cm)

#text(size: 14pt)[
  Erste Ideen liegen auf dem Tisch: eine Wanderung durch den Ith, geführte
  Radtouren mit Übernachtung, eine mehrtägige Fahrt Richtung Detmold. Was
  daraus wird, legen wir gemeinsam fest – *deine Vorschläge sind erwünscht.*
]

#v(1fr)

// Fuss: duenne Linie statt grauer Flaeche
#line(length: 100%, stroke: 0.5pt + muted)
#v(0.2cm)
#align(center)[
  #text(size: 13pt, weight: "semibold")[
    Eine kurze Anmeldung hilft beim Planen \
    Michael Horn · Spartenleitung · 0173 6232019 · wandern\@vsv-roessing.de
  ]
  #v(0.12cm)
  #text(size: 8.5pt, fill: muted)[
    Volkssportvereinigung von 1897 Rössing e.V. · Pfarrstraße 6 · 31171 Nordstemmen
  ]
]
