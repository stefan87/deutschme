import type { Session } from "../core/types";

// Nine additional A1.2 units, each with 5 lessons (10 tasks each) and a unit test.
// Preserve IDs in a12-unit1.ts.
export const a12Units2to10: Session[] = [
  {
    "id": "A1.2-u2-l1",
    "title": [
      "Posao i zanimanja",
      "Berufe"
    ],
    "type": "lesson",
    "level": "A1.2",
    "intro": [
      "Vežba: Posao i zanimanja",
      "Übung: Berufe"
    ],
    "example": "Ich bin Elektriker.",
    "items": [
      {
        "id": "A1.2-u2-l1:order1",
        "kind": "order",
        "prompt": "Ja sam električar.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Ich",
          "bin",
          "Elektriker"
        ],
        "accept": [
          "Ich bin Elektriker."
        ]
      },
      {
        "id": "A1.2-u2-l1:translate1",
        "kind": "translate",
        "prompt": "Ja sam električar.",
        "explain": [
          "Jedan prirodan prevod: Ich bin Elektriker.",
          "Eine natürliche Übersetzung: Ich bin Elektriker."
        ],
        "accept": [
          "Ich bin Elektriker."
        ]
      },
      {
        "id": "A1.2-u2-l1:fill1",
        "kind": "fill",
        "prompt": "Ich bin _____.",
        "explain": [
          "Tačan izraz: Ich bin Elektriker.",
          "Richtig: Ich bin Elektriker."
        ],
        "options": [
          "Elektriker",
          "machen",
          "gehen",
          "haben"
        ],
        "accept": [
          "Elektriker"
        ]
      },
      {
        "id": "A1.2-u2-l1:order2",
        "kind": "order",
        "prompt": "Moja sestra je lekarka.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Meine",
          "Schwester",
          "ist",
          "Ärztin"
        ],
        "accept": [
          "Meine Schwester ist Ärztin."
        ]
      },
      {
        "id": "A1.2-u2-l1:translate2",
        "kind": "translate",
        "prompt": "Moja sestra je lekarka.",
        "explain": [
          "Jedan prirodan prevod: Meine Schwester ist Ärztin.",
          "Eine natürliche Übersetzung: Meine Schwester ist Ärztin."
        ],
        "accept": [
          "Meine Schwester ist Ärztin."
        ]
      },
      {
        "id": "A1.2-u2-l1:fill2",
        "kind": "fill",
        "prompt": "Meine _____ ist Ärztin.",
        "explain": [
          "Tačan izraz: Meine Schwester ist Ärztin.",
          "Richtig: Meine Schwester ist Ärztin."
        ],
        "options": [
          "Schwester",
          "haben",
          "kommt",
          "kann"
        ],
        "accept": [
          "Schwester"
        ]
      },
      {
        "id": "A1.2-u2-l1:order3",
        "kind": "order",
        "prompt": "On radi kao kuvar.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Er",
          "arbeitet",
          "als",
          "Koch"
        ],
        "accept": [
          "Er arbeitet als Koch."
        ]
      },
      {
        "id": "A1.2-u2-l1:translate3",
        "kind": "translate",
        "prompt": "On radi kao kuvar.",
        "explain": [
          "Jedan prirodan prevod: Er arbeitet als Koch.",
          "Eine natürliche Übersetzung: Er arbeitet als Koch."
        ],
        "accept": [
          "Er arbeitet als Koch."
        ]
      },
      {
        "id": "A1.2-u2-l1:fill3",
        "kind": "fill",
        "prompt": "Er _____ als Koch.",
        "explain": [
          "Tačan izraz: Er arbeitet als Koch.",
          "Richtig: Er arbeitet als Koch."
        ],
        "options": [
          "arbeitet",
          "kann",
          "heute",
          "sehr"
        ],
        "accept": [
          "arbeitet"
        ]
      },
      {
        "id": "A1.2-u2-l1:dialog",
        "kind": "dialog",
        "prompt": "Was bist du von Beruf?",
        "explain": [
          "Odgovor: Ich bin Elektriker.",
          "Passende Antwort: Ich bin Elektriker."
        ],
        "accept": [
          "Ich bin Elektriker."
        ],
        "options": [
          "Ich bin Elektriker.",
          "Ich arbeite in einem Büro.",
          "Ich schreibe E-Mails.",
          "Ja, ich kann morgen kommen."
        ]
      }
    ]
  },
  {
    "id": "A1.2-u2-l2",
    "title": [
      "Radna mesta",
      "Arbeitsplätze"
    ],
    "type": "lesson",
    "level": "A1.2",
    "intro": [
      "Vežba: Radna mesta",
      "Übung: Arbeitsplätze"
    ],
    "example": "Ich arbeite in einem Büro.",
    "items": [
      {
        "id": "A1.2-u2-l2:order1",
        "kind": "order",
        "prompt": "Radim u kancelariji.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Ich",
          "arbeite",
          "in",
          "einem",
          "Büro"
        ],
        "accept": [
          "Ich arbeite in einem Büro."
        ]
      },
      {
        "id": "A1.2-u2-l2:translate1",
        "kind": "translate",
        "prompt": "Radim u kancelariji.",
        "explain": [
          "Jedan prirodan prevod: Ich arbeite in einem Büro.",
          "Eine natürliche Übersetzung: Ich arbeite in einem Büro."
        ],
        "accept": [
          "Ich arbeite in einem Büro."
        ]
      },
      {
        "id": "A1.2-u2-l2:fill1",
        "kind": "fill",
        "prompt": "Ich _____ in einem Büro.",
        "explain": [
          "Tačan izraz: Ich arbeite in einem Büro.",
          "Richtig: Ich arbeite in einem Büro."
        ],
        "options": [
          "arbeite",
          "gehen",
          "haben",
          "kommt"
        ],
        "accept": [
          "arbeite"
        ]
      },
      {
        "id": "A1.2-u2-l2:order2",
        "kind": "order",
        "prompt": "Ona radi u bolnici.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Sie",
          "arbeitet",
          "im",
          "Krankenhaus"
        ],
        "accept": [
          "Sie arbeitet im Krankenhaus."
        ]
      },
      {
        "id": "A1.2-u2-l2:translate2",
        "kind": "translate",
        "prompt": "Ona radi u bolnici.",
        "explain": [
          "Jedan prirodan prevod: Sie arbeitet im Krankenhaus.",
          "Eine natürliche Übersetzung: Sie arbeitet im Krankenhaus."
        ],
        "accept": [
          "Sie arbeitet im Krankenhaus."
        ]
      },
      {
        "id": "A1.2-u2-l2:fill2",
        "kind": "fill",
        "prompt": "Sie _____ im Krankenhaus.",
        "explain": [
          "Tačan izraz: Sie arbeitet im Krankenhaus.",
          "Richtig: Sie arbeitet im Krankenhaus."
        ],
        "options": [
          "arbeitet",
          "kommt",
          "kann",
          "heute"
        ],
        "accept": [
          "arbeitet"
        ]
      },
      {
        "id": "A1.2-u2-l2:order3",
        "kind": "order",
        "prompt": "Moj otac radi u školi.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Mein",
          "Vater",
          "arbeitet",
          "in",
          "einer",
          "Schule"
        ],
        "accept": [
          "Mein Vater arbeitet in einer Schule."
        ]
      },
      {
        "id": "A1.2-u2-l2:translate3",
        "kind": "translate",
        "prompt": "Moj otac radi u školi.",
        "explain": [
          "Jedan prirodan prevod: Mein Vater arbeitet in einer Schule.",
          "Eine natürliche Übersetzung: Mein Vater arbeitet in einer Schule."
        ],
        "accept": [
          "Mein Vater arbeitet in einer Schule."
        ]
      },
      {
        "id": "A1.2-u2-l2:fill3",
        "kind": "fill",
        "prompt": "_____ Vater arbeitet in einer Schule.",
        "explain": [
          "Tačan izraz: Mein Vater arbeitet in einer Schule.",
          "Richtig: Mein Vater arbeitet in einer Schule."
        ],
        "options": [
          "Mein",
          "machen",
          "gehen",
          "haben"
        ],
        "accept": [
          "Mein"
        ]
      },
      {
        "id": "A1.2-u2-l2:dialog",
        "kind": "dialog",
        "prompt": "Wo arbeitest du?",
        "explain": [
          "Odgovor: Ich arbeite in einem Büro.",
          "Passende Antwort: Ich arbeite in einem Büro."
        ],
        "accept": [
          "Ich arbeite in einem Büro."
        ],
        "options": [
          "Ich arbeite in einem Büro.",
          "Ich bin Elektriker.",
          "Ich schreibe E-Mails.",
          "Ja, ich kann morgen kommen."
        ]
      }
    ]
  },
  {
    "id": "A1.2-u2-l3",
    "title": [
      "Moje obaveze",
      "Meine Aufgaben"
    ],
    "type": "lesson",
    "level": "A1.2",
    "intro": [
      "Vežba: Moje obaveze",
      "Übung: Meine Aufgaben"
    ],
    "example": "Ich schreibe jeden Tag E-Mails.",
    "items": [
      {
        "id": "A1.2-u2-l3:order1",
        "kind": "order",
        "prompt": "Svakog dana pišem mejlove.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Ich",
          "schreibe",
          "jeden",
          "Tag",
          "E-Mails"
        ],
        "accept": [
          "Ich schreibe jeden Tag E-Mails."
        ]
      },
      {
        "id": "A1.2-u2-l3:translate1",
        "kind": "translate",
        "prompt": "Svakog dana pišem mejlove.",
        "explain": [
          "Jedan prirodan prevod: Ich schreibe jeden Tag E-Mails.",
          "Eine natürliche Übersetzung: Ich schreibe jeden Tag E-Mails."
        ],
        "accept": [
          "Ich schreibe jeden Tag E-Mails."
        ]
      },
      {
        "id": "A1.2-u2-l3:fill1",
        "kind": "fill",
        "prompt": "Ich _____ jeden Tag E-Mails.",
        "explain": [
          "Tačan izraz: Ich schreibe jeden Tag E-Mails.",
          "Richtig: Ich schreibe jeden Tag E-Mails."
        ],
        "options": [
          "schreibe",
          "haben",
          "kommt",
          "kann"
        ],
        "accept": [
          "schreibe"
        ]
      },
      {
        "id": "A1.2-u2-l3:order2",
        "kind": "order",
        "prompt": "Planiramo novi projekat.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Wir",
          "planen",
          "ein",
          "neues",
          "Projekt"
        ],
        "accept": [
          "Wir planen ein neues Projekt."
        ]
      },
      {
        "id": "A1.2-u2-l3:translate2",
        "kind": "translate",
        "prompt": "Planiramo novi projekat.",
        "explain": [
          "Jedan prirodan prevod: Wir planen ein neues Projekt.",
          "Eine natürliche Übersetzung: Wir planen ein neues Projekt."
        ],
        "accept": [
          "Wir planen ein neues Projekt."
        ]
      },
      {
        "id": "A1.2-u2-l3:fill2",
        "kind": "fill",
        "prompt": "Wir _____ ein neues Projekt.",
        "explain": [
          "Tačan izraz: Wir planen ein neues Projekt.",
          "Richtig: Wir planen ein neues Projekt."
        ],
        "options": [
          "planen",
          "kann",
          "heute",
          "sehr"
        ],
        "accept": [
          "planen"
        ]
      },
      {
        "id": "A1.2-u2-l3:order3",
        "kind": "order",
        "prompt": "Telefoniram sa klijentima.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Ich",
          "telefoniere",
          "mit",
          "Kunden"
        ],
        "accept": [
          "Ich telefoniere mit Kunden."
        ]
      },
      {
        "id": "A1.2-u2-l3:translate3",
        "kind": "translate",
        "prompt": "Telefoniram sa klijentima.",
        "explain": [
          "Jedan prirodan prevod: Ich telefoniere mit Kunden.",
          "Eine natürliche Übersetzung: Ich telefoniere mit Kunden."
        ],
        "accept": [
          "Ich telefoniere mit Kunden."
        ]
      },
      {
        "id": "A1.2-u2-l3:fill3",
        "kind": "fill",
        "prompt": "Ich _____ mit Kunden.",
        "explain": [
          "Tačan izraz: Ich telefoniere mit Kunden.",
          "Richtig: Ich telefoniere mit Kunden."
        ],
        "options": [
          "telefoniere",
          "gehen",
          "haben",
          "kommt"
        ],
        "accept": [
          "telefoniere"
        ]
      },
      {
        "id": "A1.2-u2-l3:dialog",
        "kind": "dialog",
        "prompt": "Was machst du bei der Arbeit?",
        "explain": [
          "Odgovor: Ich schreibe E-Mails.",
          "Passende Antwort: Ich schreibe E-Mails."
        ],
        "accept": [
          "Ich schreibe E-Mails."
        ],
        "options": [
          "Ich schreibe E-Mails.",
          "Ich bin Elektriker.",
          "Ich arbeite in einem Büro.",
          "Ja, ich kann morgen kommen."
        ]
      }
    ]
  },
  {
    "id": "A1.2-u2-l4",
    "title": [
      "Modalni glagoli",
      "Modalverben"
    ],
    "type": "lesson",
    "level": "A1.2",
    "intro": [
      "Vežba: Modalni glagoli",
      "Übung: Modalverben"
    ],
    "example": "Ich muss heute arbeiten.",
    "items": [
      {
        "id": "A1.2-u2-l4:order1",
        "kind": "order",
        "prompt": "Danas moram da radim.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Ich",
          "muss",
          "heute",
          "arbeiten"
        ],
        "accept": [
          "Ich muss heute arbeiten."
        ]
      },
      {
        "id": "A1.2-u2-l4:translate1",
        "kind": "translate",
        "prompt": "Danas moram da radim.",
        "explain": [
          "Jedan prirodan prevod: Ich muss heute arbeiten.",
          "Eine natürliche Übersetzung: Ich muss heute arbeiten."
        ],
        "accept": [
          "Ich muss heute arbeiten."
        ]
      },
      {
        "id": "A1.2-u2-l4:fill1",
        "kind": "fill",
        "prompt": "Ich _____ heute arbeiten.",
        "explain": [
          "Tačan izraz: Ich muss heute arbeiten.",
          "Richtig: Ich muss heute arbeiten."
        ],
        "options": [
          "muss",
          "kommt",
          "kann",
          "heute"
        ],
        "accept": [
          "muss"
        ]
      },
      {
        "id": "A1.2-u2-l4:order2",
        "kind": "order",
        "prompt": "Možeš da odeš ranije.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Du",
          "kannst",
          "früher",
          "gehen"
        ],
        "accept": [
          "Du kannst früher gehen."
        ]
      },
      {
        "id": "A1.2-u2-l4:translate2",
        "kind": "translate",
        "prompt": "Možeš da odeš ranije.",
        "explain": [
          "Jedan prirodan prevod: Du kannst früher gehen.",
          "Eine natürliche Übersetzung: Du kannst früher gehen."
        ],
        "accept": [
          "Du kannst früher gehen."
        ]
      },
      {
        "id": "A1.2-u2-l4:fill2",
        "kind": "fill",
        "prompt": "Du _____ früher gehen.",
        "explain": [
          "Tačan izraz: Du kannst früher gehen.",
          "Richtig: Du kannst früher gehen."
        ],
        "options": [
          "kannst",
          "machen",
          "gehen",
          "haben"
        ],
        "accept": [
          "kannst"
        ]
      },
      {
        "id": "A1.2-u2-l4:order3",
        "kind": "order",
        "prompt": "Ovde ne smemo da pušimo.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Wir",
          "dürfen",
          "hier",
          "nicht",
          "rauchen"
        ],
        "accept": [
          "Wir dürfen hier nicht rauchen."
        ]
      },
      {
        "id": "A1.2-u2-l4:translate3",
        "kind": "translate",
        "prompt": "Ovde ne smemo da pušimo.",
        "explain": [
          "Jedan prirodan prevod: Wir dürfen hier nicht rauchen.",
          "Eine natürliche Übersetzung: Wir dürfen hier nicht rauchen."
        ],
        "accept": [
          "Wir dürfen hier nicht rauchen."
        ]
      },
      {
        "id": "A1.2-u2-l4:fill3",
        "kind": "fill",
        "prompt": "Wir _____ hier nicht rauchen.",
        "explain": [
          "Tačan izraz: Wir dürfen hier nicht rauchen.",
          "Richtig: Wir dürfen hier nicht rauchen."
        ],
        "options": [
          "dürfen",
          "haben",
          "kommt",
          "kann"
        ],
        "accept": [
          "dürfen"
        ]
      },
      {
        "id": "A1.2-u2-l4:dialog",
        "kind": "dialog",
        "prompt": "Kannst du morgen kommen?",
        "explain": [
          "Odgovor: Ja, ich kann morgen kommen.",
          "Passende Antwort: Ja, ich kann morgen kommen."
        ],
        "accept": [
          "Ja, ich kann morgen kommen."
        ],
        "options": [
          "Ja, ich kann morgen kommen.",
          "Ich bin Elektriker.",
          "Ich arbeite in einem Büro.",
          "Ich schreibe E-Mails."
        ]
      }
    ]
  },
  {
    "id": "A1.2-u2-l5",
    "title": [
      "Radni dan",
      "Mein Arbeitstag"
    ],
    "type": "lesson",
    "level": "A1.2",
    "intro": [
      "Vežba: Radni dan",
      "Übung: Mein Arbeitstag"
    ],
    "example": "Mein Arbeitstag beginnt um acht Uhr.",
    "items": [
      {
        "id": "A1.2-u2-l5:order1",
        "kind": "order",
        "prompt": "Moj radni dan počinje u osam.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Mein",
          "Arbeitstag",
          "beginnt",
          "um",
          "acht",
          "Uhr"
        ],
        "accept": [
          "Mein Arbeitstag beginnt um acht Uhr."
        ]
      },
      {
        "id": "A1.2-u2-l5:translate1",
        "kind": "translate",
        "prompt": "Moj radni dan počinje u osam.",
        "explain": [
          "Jedan prirodan prevod: Mein Arbeitstag beginnt um acht Uhr.",
          "Eine natürliche Übersetzung: Mein Arbeitstag beginnt um acht Uhr."
        ],
        "accept": [
          "Mein Arbeitstag beginnt um acht Uhr."
        ]
      },
      {
        "id": "A1.2-u2-l5:fill1",
        "kind": "fill",
        "prompt": "_____ Arbeitstag beginnt um acht Uhr.",
        "explain": [
          "Tačan izraz: Mein Arbeitstag beginnt um acht Uhr.",
          "Richtig: Mein Arbeitstag beginnt um acht Uhr."
        ],
        "options": [
          "Mein",
          "kann",
          "heute",
          "sehr"
        ],
        "accept": [
          "Mein"
        ]
      },
      {
        "id": "A1.2-u2-l5:order2",
        "kind": "order",
        "prompt": "U dvanaest pravim pauzu.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Um",
          "zwölf",
          "Uhr",
          "mache",
          "ich",
          "Pause"
        ],
        "accept": [
          "Um zwölf Uhr mache ich Pause."
        ]
      },
      {
        "id": "A1.2-u2-l5:translate2",
        "kind": "translate",
        "prompt": "U dvanaest pravim pauzu.",
        "explain": [
          "Jedan prirodan prevod: Um zwölf Uhr mache ich Pause.",
          "Eine natürliche Übersetzung: Um zwölf Uhr mache ich Pause."
        ],
        "accept": [
          "Um zwölf Uhr mache ich Pause."
        ]
      },
      {
        "id": "A1.2-u2-l5:fill2",
        "kind": "fill",
        "prompt": "Um _____ Uhr mache ich Pause.",
        "explain": [
          "Tačan izraz: Um zwölf Uhr mache ich Pause.",
          "Richtig: Um zwölf Uhr mache ich Pause."
        ],
        "options": [
          "zwölf",
          "gehen",
          "haben",
          "kommt"
        ],
        "accept": [
          "zwölf"
        ]
      },
      {
        "id": "A1.2-u2-l5:order3",
        "kind": "order",
        "prompt": "Posle posla idem kući.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Nach",
          "der",
          "Arbeit",
          "fahre",
          "ich",
          "nach",
          "Hause"
        ],
        "accept": [
          "Nach der Arbeit fahre ich nach Hause."
        ]
      },
      {
        "id": "A1.2-u2-l5:translate3",
        "kind": "translate",
        "prompt": "Posle posla idem kući.",
        "explain": [
          "Jedan prirodan prevod: Nach der Arbeit fahre ich nach Hause.",
          "Eine natürliche Übersetzung: Nach der Arbeit fahre ich nach Hause."
        ],
        "accept": [
          "Nach der Arbeit fahre ich nach Hause."
        ]
      },
      {
        "id": "A1.2-u2-l5:fill3",
        "kind": "fill",
        "prompt": "_____ der Arbeit fahre ich nach Hause.",
        "explain": [
          "Tačan izraz: Nach der Arbeit fahre ich nach Hause.",
          "Richtig: Nach der Arbeit fahre ich nach Hause."
        ],
        "options": [
          "Nach",
          "kommt",
          "kann",
          "heute"
        ],
        "accept": [
          "Nach"
        ]
      },
      {
        "id": "A1.2-u2-l5:dialog",
        "kind": "dialog",
        "prompt": "Wann machst du Pause?",
        "explain": [
          "Odgovor: Um zwölf Uhr mache ich Pause.",
          "Passende Antwort: Um zwölf Uhr mache ich Pause."
        ],
        "accept": [
          "Um zwölf Uhr mache ich Pause."
        ],
        "options": [
          "Um zwölf Uhr mache ich Pause.",
          "Ich bin Elektriker.",
          "Ich arbeite in einem Büro.",
          "Ich schreibe E-Mails."
        ]
      }
    ]
  },
  {
    "id": "A1.2-u2-test",
    "title": [
      "Test celine",
      "Einheitstest"
    ],
    "type": "unit",
    "level": "A1.2",
    "items": [
      {
        "id": "A1.2-u2-test:q1",
        "kind": "fill",
        "prompt": "Ich bin _____.",
        "explain": [
          "Tačan izraz: Ich bin Elektriker.",
          "Richtig: Ich bin Elektriker."
        ],
        "options": [
          "Elektriker",
          "machen",
          "gehen",
          "haben"
        ],
        "accept": [
          "Elektriker"
        ]
      },
      {
        "id": "A1.2-u2-test:q2",
        "kind": "dialog",
        "prompt": "Was bist du von Beruf?",
        "explain": [
          "Odgovor: Ich bin Elektriker.",
          "Passende Antwort: Ich bin Elektriker."
        ],
        "accept": [
          "Ich bin Elektriker."
        ],
        "options": [
          "Ich bin Elektriker.",
          "Ich arbeite in einem Büro.",
          "Ich schreibe E-Mails.",
          "Ja, ich kann morgen kommen."
        ]
      },
      {
        "id": "A1.2-u2-test:q3",
        "kind": "fill",
        "prompt": "Ich _____ in einem Büro.",
        "explain": [
          "Tačan izraz: Ich arbeite in einem Büro.",
          "Richtig: Ich arbeite in einem Büro."
        ],
        "options": [
          "arbeite",
          "gehen",
          "haben",
          "kommt"
        ],
        "accept": [
          "arbeite"
        ]
      },
      {
        "id": "A1.2-u2-test:q4",
        "kind": "dialog",
        "prompt": "Wo arbeitest du?",
        "explain": [
          "Odgovor: Ich arbeite in einem Büro.",
          "Passende Antwort: Ich arbeite in einem Büro."
        ],
        "accept": [
          "Ich arbeite in einem Büro."
        ],
        "options": [
          "Ich arbeite in einem Büro.",
          "Ich bin Elektriker.",
          "Ich schreibe E-Mails.",
          "Ja, ich kann morgen kommen."
        ]
      },
      {
        "id": "A1.2-u2-test:q5",
        "kind": "fill",
        "prompt": "Ich _____ jeden Tag E-Mails.",
        "explain": [
          "Tačan izraz: Ich schreibe jeden Tag E-Mails.",
          "Richtig: Ich schreibe jeden Tag E-Mails."
        ],
        "options": [
          "schreibe",
          "haben",
          "kommt",
          "kann"
        ],
        "accept": [
          "schreibe"
        ]
      },
      {
        "id": "A1.2-u2-test:q6",
        "kind": "dialog",
        "prompt": "Was machst du bei der Arbeit?",
        "explain": [
          "Odgovor: Ich schreibe E-Mails.",
          "Passende Antwort: Ich schreibe E-Mails."
        ],
        "accept": [
          "Ich schreibe E-Mails."
        ],
        "options": [
          "Ich schreibe E-Mails.",
          "Ich bin Elektriker.",
          "Ich arbeite in einem Büro.",
          "Ja, ich kann morgen kommen."
        ]
      },
      {
        "id": "A1.2-u2-test:q7",
        "kind": "fill",
        "prompt": "Ich _____ heute arbeiten.",
        "explain": [
          "Tačan izraz: Ich muss heute arbeiten.",
          "Richtig: Ich muss heute arbeiten."
        ],
        "options": [
          "muss",
          "kommt",
          "kann",
          "heute"
        ],
        "accept": [
          "muss"
        ]
      },
      {
        "id": "A1.2-u2-test:q8",
        "kind": "dialog",
        "prompt": "Kannst du morgen kommen?",
        "explain": [
          "Odgovor: Ja, ich kann morgen kommen.",
          "Passende Antwort: Ja, ich kann morgen kommen."
        ],
        "accept": [
          "Ja, ich kann morgen kommen."
        ],
        "options": [
          "Ja, ich kann morgen kommen.",
          "Ich bin Elektriker.",
          "Ich arbeite in einem Büro.",
          "Ich schreibe E-Mails."
        ]
      },
      {
        "id": "A1.2-u2-test:q9",
        "kind": "fill",
        "prompt": "_____ Arbeitstag beginnt um acht Uhr.",
        "explain": [
          "Tačan izraz: Mein Arbeitstag beginnt um acht Uhr.",
          "Richtig: Mein Arbeitstag beginnt um acht Uhr."
        ],
        "options": [
          "Mein",
          "kann",
          "heute",
          "sehr"
        ],
        "accept": [
          "Mein"
        ]
      },
      {
        "id": "A1.2-u2-test:q10",
        "kind": "dialog",
        "prompt": "Wann machst du Pause?",
        "explain": [
          "Odgovor: Um zwölf Uhr mache ich Pause.",
          "Passende Antwort: Um zwölf Uhr mache ich Pause."
        ],
        "accept": [
          "Um zwölf Uhr mache ich Pause."
        ],
        "options": [
          "Um zwölf Uhr mache ich Pause.",
          "Ich bin Elektriker.",
          "Ich arbeite in einem Büro.",
          "Ich schreibe E-Mails."
        ]
      }
    ]
  },
  {
    "id": "A1.2-u3-l1",
    "title": [
      "Odeća",
      "Kleidung"
    ],
    "type": "lesson",
    "level": "A1.2",
    "intro": [
      "Vežba: Odeća",
      "Übung: Kleidung"
    ],
    "example": "Ich suche eine blaue Jacke.",
    "items": [
      {
        "id": "A1.2-u3-l1:order1",
        "kind": "order",
        "prompt": "Tražim plavu jaknu.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Ich",
          "suche",
          "eine",
          "blaue",
          "Jacke"
        ],
        "accept": [
          "Ich suche eine blaue Jacke."
        ]
      },
      {
        "id": "A1.2-u3-l1:translate1",
        "kind": "translate",
        "prompt": "Tražim plavu jaknu.",
        "explain": [
          "Jedan prirodan prevod: Ich suche eine blaue Jacke.",
          "Eine natürliche Übersetzung: Ich suche eine blaue Jacke."
        ],
        "accept": [
          "Ich suche eine blaue Jacke."
        ]
      },
      {
        "id": "A1.2-u3-l1:fill1",
        "kind": "fill",
        "prompt": "Ich _____ eine blaue Jacke.",
        "explain": [
          "Tačan izraz: Ich suche eine blaue Jacke.",
          "Richtig: Ich suche eine blaue Jacke."
        ],
        "options": [
          "suche",
          "machen",
          "gehen",
          "haben"
        ],
        "accept": [
          "suche"
        ]
      },
      {
        "id": "A1.2-u3-l1:order2",
        "kind": "order",
        "prompt": "Cipele su premale.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Die",
          "Schuhe",
          "sind",
          "zu",
          "klein"
        ],
        "accept": [
          "Die Schuhe sind zu klein."
        ]
      },
      {
        "id": "A1.2-u3-l1:translate2",
        "kind": "translate",
        "prompt": "Cipele su premale.",
        "explain": [
          "Jedan prirodan prevod: Die Schuhe sind zu klein.",
          "Eine natürliche Übersetzung: Die Schuhe sind zu klein."
        ],
        "accept": [
          "Die Schuhe sind zu klein."
        ]
      },
      {
        "id": "A1.2-u3-l1:fill2",
        "kind": "fill",
        "prompt": "Die _____ sind zu klein.",
        "explain": [
          "Tačan izraz: Die Schuhe sind zu klein.",
          "Richtig: Die Schuhe sind zu klein."
        ],
        "options": [
          "Schuhe",
          "haben",
          "kommt",
          "kann"
        ],
        "accept": [
          "Schuhe"
        ]
      },
      {
        "id": "A1.2-u3-l1:order3",
        "kind": "order",
        "prompt": "Sviđa mi se ova košulja.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Dieses",
          "Hemd",
          "gefällt",
          "mir"
        ],
        "accept": [
          "Dieses Hemd gefällt mir."
        ]
      },
      {
        "id": "A1.2-u3-l1:translate3",
        "kind": "translate",
        "prompt": "Sviđa mi se ova košulja.",
        "explain": [
          "Jedan prirodan prevod: Dieses Hemd gefällt mir.",
          "Eine natürliche Übersetzung: Dieses Hemd gefällt mir."
        ],
        "accept": [
          "Dieses Hemd gefällt mir."
        ]
      },
      {
        "id": "A1.2-u3-l1:fill3",
        "kind": "fill",
        "prompt": "_____ Hemd gefällt mir.",
        "explain": [
          "Tačan izraz: Dieses Hemd gefällt mir.",
          "Richtig: Dieses Hemd gefällt mir."
        ],
        "options": [
          "Dieses",
          "kann",
          "heute",
          "sehr"
        ],
        "accept": [
          "Dieses"
        ]
      },
      {
        "id": "A1.2-u3-l1:dialog",
        "kind": "dialog",
        "prompt": "Welche Größe brauchen Sie?",
        "explain": [
          "Odgovor: Ich brauche Größe M.",
          "Passende Antwort: Ich brauche Größe M."
        ],
        "accept": [
          "Ich brauche Größe M."
        ],
        "options": [
          "Ich brauche Größe M.",
          "Das kostet zwanzig Euro.",
          "Ich kaufe einen Mantel.",
          "Ja, natürlich."
        ]
      }
    ]
  },
  {
    "id": "A1.2-u3-l2",
    "title": [
      "Cene",
      "Preise"
    ],
    "type": "lesson",
    "level": "A1.2",
    "intro": [
      "Vežba: Cene",
      "Übung: Preise"
    ],
    "example": "Wie viel kostet diese Hose?",
    "items": [
      {
        "id": "A1.2-u3-l2:order1",
        "kind": "order",
        "prompt": "Koliko koštaju ove pantalone?",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Wie",
          "viel",
          "kostet",
          "diese",
          "Hose"
        ],
        "accept": [
          "Wie viel kostet diese Hose?"
        ]
      },
      {
        "id": "A1.2-u3-l2:translate1",
        "kind": "translate",
        "prompt": "Koliko koštaju ove pantalone?",
        "explain": [
          "Jedan prirodan prevod: Wie viel kostet diese Hose?",
          "Eine natürliche Übersetzung: Wie viel kostet diese Hose?"
        ],
        "accept": [
          "Wie viel kostet diese Hose?"
        ]
      },
      {
        "id": "A1.2-u3-l2:fill1",
        "kind": "fill",
        "prompt": "Wie _____ kostet diese Hose?",
        "explain": [
          "Tačan izraz: Wie viel kostet diese Hose?",
          "Richtig: Wie viel kostet diese Hose?"
        ],
        "options": [
          "viel",
          "gehen",
          "haben",
          "kommt"
        ],
        "accept": [
          "viel"
        ]
      },
      {
        "id": "A1.2-u3-l2:order2",
        "kind": "order",
        "prompt": "Jakna košta četrdeset evra.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Die",
          "Jacke",
          "kostet",
          "vierzig",
          "Euro"
        ],
        "accept": [
          "Die Jacke kostet vierzig Euro."
        ]
      },
      {
        "id": "A1.2-u3-l2:translate2",
        "kind": "translate",
        "prompt": "Jakna košta četrdeset evra.",
        "explain": [
          "Jedan prirodan prevod: Die Jacke kostet vierzig Euro.",
          "Eine natürliche Übersetzung: Die Jacke kostet vierzig Euro."
        ],
        "accept": [
          "Die Jacke kostet vierzig Euro."
        ]
      },
      {
        "id": "A1.2-u3-l2:fill2",
        "kind": "fill",
        "prompt": "Die _____ kostet vierzig Euro.",
        "explain": [
          "Tačan izraz: Die Jacke kostet vierzig Euro.",
          "Richtig: Die Jacke kostet vierzig Euro."
        ],
        "options": [
          "Jacke",
          "kommt",
          "kann",
          "heute"
        ],
        "accept": [
          "Jacke"
        ]
      },
      {
        "id": "A1.2-u3-l2:order3",
        "kind": "order",
        "prompt": "To mi je preskupo.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Das",
          "ist",
          "mir",
          "zu",
          "teuer"
        ],
        "accept": [
          "Das ist mir zu teuer."
        ]
      },
      {
        "id": "A1.2-u3-l2:translate3",
        "kind": "translate",
        "prompt": "To mi je preskupo.",
        "explain": [
          "Jedan prirodan prevod: Das ist mir zu teuer.",
          "Eine natürliche Übersetzung: Das ist mir zu teuer."
        ],
        "accept": [
          "Das ist mir zu teuer."
        ]
      },
      {
        "id": "A1.2-u3-l2:fill3",
        "kind": "fill",
        "prompt": "Das ist mir zu _____.",
        "explain": [
          "Tačan izraz: Das ist mir zu teuer.",
          "Richtig: Das ist mir zu teuer."
        ],
        "options": [
          "teuer",
          "machen",
          "gehen",
          "haben"
        ],
        "accept": [
          "teuer"
        ]
      },
      {
        "id": "A1.2-u3-l2:dialog",
        "kind": "dialog",
        "prompt": "Wie viel kostet das?",
        "explain": [
          "Odgovor: Das kostet zwanzig Euro.",
          "Passende Antwort: Das kostet zwanzig Euro."
        ],
        "accept": [
          "Das kostet zwanzig Euro."
        ],
        "options": [
          "Das kostet zwanzig Euro.",
          "Ich brauche Größe M.",
          "Ich kaufe einen Mantel.",
          "Ja, natürlich."
        ]
      }
    ]
  },
  {
    "id": "A1.2-u3-l3",
    "title": [
      "Akuzativ",
      "Akkusativ"
    ],
    "type": "lesson",
    "level": "A1.2",
    "intro": [
      "Vežba: Akuzativ",
      "Übung: Akkusativ"
    ],
    "example": "Ich kaufe einen Mantel.",
    "items": [
      {
        "id": "A1.2-u3-l3:order1",
        "kind": "order",
        "prompt": "Kupujem kaput.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Ich",
          "kaufe",
          "einen",
          "Mantel"
        ],
        "accept": [
          "Ich kaufe einen Mantel."
        ]
      },
      {
        "id": "A1.2-u3-l3:translate1",
        "kind": "translate",
        "prompt": "Kupujem kaput.",
        "explain": [
          "Jedan prirodan prevod: Ich kaufe einen Mantel.",
          "Eine natürliche Übersetzung: Ich kaufe einen Mantel."
        ],
        "accept": [
          "Ich kaufe einen Mantel."
        ]
      },
      {
        "id": "A1.2-u3-l3:fill1",
        "kind": "fill",
        "prompt": "Ich _____ einen Mantel.",
        "explain": [
          "Tačan izraz: Ich kaufe einen Mantel.",
          "Richtig: Ich kaufe einen Mantel."
        ],
        "options": [
          "kaufe",
          "haben",
          "kommt",
          "kann"
        ],
        "accept": [
          "kaufe"
        ]
      },
      {
        "id": "A1.2-u3-l3:order2",
        "kind": "order",
        "prompt": "Ona traži torbu.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Sie",
          "sucht",
          "eine",
          "Tasche"
        ],
        "accept": [
          "Sie sucht eine Tasche."
        ]
      },
      {
        "id": "A1.2-u3-l3:translate2",
        "kind": "translate",
        "prompt": "Ona traži torbu.",
        "explain": [
          "Jedan prirodan prevod: Sie sucht eine Tasche.",
          "Eine natürliche Übersetzung: Sie sucht eine Tasche."
        ],
        "accept": [
          "Sie sucht eine Tasche."
        ]
      },
      {
        "id": "A1.2-u3-l3:fill2",
        "kind": "fill",
        "prompt": "Sie _____ eine Tasche.",
        "explain": [
          "Tačan izraz: Sie sucht eine Tasche.",
          "Richtig: Sie sucht eine Tasche."
        ],
        "options": [
          "sucht",
          "kann",
          "heute",
          "sehr"
        ],
        "accept": [
          "sucht"
        ]
      },
      {
        "id": "A1.2-u3-l3:order3",
        "kind": "order",
        "prompt": "Treba nam novi telefon.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Wir",
          "brauchen",
          "ein",
          "neues",
          "Handy"
        ],
        "accept": [
          "Wir brauchen ein neues Handy."
        ]
      },
      {
        "id": "A1.2-u3-l3:translate3",
        "kind": "translate",
        "prompt": "Treba nam novi telefon.",
        "explain": [
          "Jedan prirodan prevod: Wir brauchen ein neues Handy.",
          "Eine natürliche Übersetzung: Wir brauchen ein neues Handy."
        ],
        "accept": [
          "Wir brauchen ein neues Handy."
        ]
      },
      {
        "id": "A1.2-u3-l3:fill3",
        "kind": "fill",
        "prompt": "Wir _____ ein neues Handy.",
        "explain": [
          "Tačan izraz: Wir brauchen ein neues Handy.",
          "Richtig: Wir brauchen ein neues Handy."
        ],
        "options": [
          "brauchen",
          "gehen",
          "haben",
          "kommt"
        ],
        "accept": [
          "brauchen"
        ]
      },
      {
        "id": "A1.2-u3-l3:dialog",
        "kind": "dialog",
        "prompt": "Was kaufst du?",
        "explain": [
          "Odgovor: Ich kaufe einen Mantel.",
          "Passende Antwort: Ich kaufe einen Mantel."
        ],
        "accept": [
          "Ich kaufe einen Mantel."
        ],
        "options": [
          "Ich kaufe einen Mantel.",
          "Ich brauche Größe M.",
          "Das kostet zwanzig Euro.",
          "Ja, natürlich."
        ]
      }
    ]
  },
  {
    "id": "A1.2-u3-l4",
    "title": [
      "Plaćanje",
      "Bezahlen"
    ],
    "type": "lesson",
    "level": "A1.2",
    "intro": [
      "Vežba: Plaćanje",
      "Übung: Bezahlen"
    ],
    "example": "Ich möchte mit Karte bezahlen.",
    "items": [
      {
        "id": "A1.2-u3-l4:order1",
        "kind": "order",
        "prompt": "Želim da platim karticom.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Ich",
          "möchte",
          "mit",
          "Karte",
          "bezahlen"
        ],
        "accept": [
          "Ich möchte mit Karte bezahlen."
        ]
      },
      {
        "id": "A1.2-u3-l4:translate1",
        "kind": "translate",
        "prompt": "Želim da platim karticom.",
        "explain": [
          "Jedan prirodan prevod: Ich möchte mit Karte bezahlen.",
          "Eine natürliche Übersetzung: Ich möchte mit Karte bezahlen."
        ],
        "accept": [
          "Ich möchte mit Karte bezahlen."
        ]
      },
      {
        "id": "A1.2-u3-l4:fill1",
        "kind": "fill",
        "prompt": "Ich _____ mit Karte bezahlen.",
        "explain": [
          "Tačan izraz: Ich möchte mit Karte bezahlen.",
          "Richtig: Ich möchte mit Karte bezahlen."
        ],
        "options": [
          "möchte",
          "kommt",
          "kann",
          "heute"
        ],
        "accept": [
          "möchte"
        ]
      },
      {
        "id": "A1.2-u3-l4:order2",
        "kind": "order",
        "prompt": "Imate li sitan novac?",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Haben",
          "Sie",
          "Wechselgeld"
        ],
        "accept": [
          "Haben Sie Wechselgeld?"
        ]
      },
      {
        "id": "A1.2-u3-l4:translate2",
        "kind": "translate",
        "prompt": "Imate li sitan novac?",
        "explain": [
          "Jedan prirodan prevod: Haben Sie Wechselgeld?",
          "Eine natürliche Übersetzung: Haben Sie Wechselgeld?"
        ],
        "accept": [
          "Haben Sie Wechselgeld?"
        ]
      },
      {
        "id": "A1.2-u3-l4:fill2",
        "kind": "fill",
        "prompt": "_____ Sie Wechselgeld?",
        "explain": [
          "Tačan izraz: Haben Sie Wechselgeld?",
          "Richtig: Haben Sie Wechselgeld?"
        ],
        "options": [
          "Haben",
          "machen",
          "gehen",
          "haben"
        ],
        "accept": [
          "Haben"
        ]
      },
      {
        "id": "A1.2-u3-l4:order3",
        "kind": "order",
        "prompt": "Treba mi račun.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Ich",
          "brauche",
          "den",
          "Kassenbon"
        ],
        "accept": [
          "Ich brauche den Kassenbon."
        ]
      },
      {
        "id": "A1.2-u3-l4:translate3",
        "kind": "translate",
        "prompt": "Treba mi račun.",
        "explain": [
          "Jedan prirodan prevod: Ich brauche den Kassenbon.",
          "Eine natürliche Übersetzung: Ich brauche den Kassenbon."
        ],
        "accept": [
          "Ich brauche den Kassenbon."
        ]
      },
      {
        "id": "A1.2-u3-l4:fill3",
        "kind": "fill",
        "prompt": "Ich _____ den Kassenbon.",
        "explain": [
          "Tačan izraz: Ich brauche den Kassenbon.",
          "Richtig: Ich brauche den Kassenbon."
        ],
        "options": [
          "brauche",
          "haben",
          "kommt",
          "kann"
        ],
        "accept": [
          "brauche"
        ]
      },
      {
        "id": "A1.2-u3-l4:dialog",
        "kind": "dialog",
        "prompt": "Kann ich mit Karte bezahlen?",
        "explain": [
          "Odgovor: Ja, natürlich.",
          "Passende Antwort: Ja, natürlich."
        ],
        "accept": [
          "Ja, natürlich."
        ],
        "options": [
          "Ja, natürlich.",
          "Ich brauche Größe M.",
          "Das kostet zwanzig Euro.",
          "Ich kaufe einen Mantel."
        ]
      }
    ]
  },
  {
    "id": "A1.2-u3-l5",
    "title": [
      "Razmena proizvoda",
      "Umtausch"
    ],
    "type": "lesson",
    "level": "A1.2",
    "intro": [
      "Vežba: Razmena proizvoda",
      "Übung: Umtausch"
    ],
    "example": "Ich möchte diese Schuhe umtauschen.",
    "items": [
      {
        "id": "A1.2-u3-l5:order1",
        "kind": "order",
        "prompt": "Želim da zamenim ove cipele.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Ich",
          "möchte",
          "diese",
          "Schuhe",
          "umtauschen"
        ],
        "accept": [
          "Ich möchte diese Schuhe umtauschen."
        ]
      },
      {
        "id": "A1.2-u3-l5:translate1",
        "kind": "translate",
        "prompt": "Želim da zamenim ove cipele.",
        "explain": [
          "Jedan prirodan prevod: Ich möchte diese Schuhe umtauschen.",
          "Eine natürliche Übersetzung: Ich möchte diese Schuhe umtauschen."
        ],
        "accept": [
          "Ich möchte diese Schuhe umtauschen."
        ]
      },
      {
        "id": "A1.2-u3-l5:fill1",
        "kind": "fill",
        "prompt": "Ich _____ diese Schuhe umtauschen.",
        "explain": [
          "Tačan izraz: Ich möchte diese Schuhe umtauschen.",
          "Richtig: Ich möchte diese Schuhe umtauschen."
        ],
        "options": [
          "möchte",
          "kann",
          "heute",
          "sehr"
        ],
        "accept": [
          "möchte"
        ]
      },
      {
        "id": "A1.2-u3-l5:order2",
        "kind": "order",
        "prompt": "Veličina mi ne odgovara.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Die",
          "Größe",
          "passt",
          "mir",
          "nicht"
        ],
        "accept": [
          "Die Größe passt mir nicht."
        ]
      },
      {
        "id": "A1.2-u3-l5:translate2",
        "kind": "translate",
        "prompt": "Veličina mi ne odgovara.",
        "explain": [
          "Jedan prirodan prevod: Die Größe passt mir nicht.",
          "Eine natürliche Übersetzung: Die Größe passt mir nicht."
        ],
        "accept": [
          "Die Größe passt mir nicht."
        ]
      },
      {
        "id": "A1.2-u3-l5:fill2",
        "kind": "fill",
        "prompt": "Die _____ passt mir nicht.",
        "explain": [
          "Tačan izraz: Die Größe passt mir nicht.",
          "Richtig: Die Größe passt mir nicht."
        ],
        "options": [
          "Größe",
          "gehen",
          "haben",
          "kommt"
        ],
        "accept": [
          "Größe"
        ]
      },
      {
        "id": "A1.2-u3-l5:order3",
        "kind": "order",
        "prompt": "Imam račun kod sebe.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Ich",
          "habe",
          "den",
          "Kassenbon",
          "dabei"
        ],
        "accept": [
          "Ich habe den Kassenbon dabei."
        ]
      },
      {
        "id": "A1.2-u3-l5:translate3",
        "kind": "translate",
        "prompt": "Imam račun kod sebe.",
        "explain": [
          "Jedan prirodan prevod: Ich habe den Kassenbon dabei.",
          "Eine natürliche Übersetzung: Ich habe den Kassenbon dabei."
        ],
        "accept": [
          "Ich habe den Kassenbon dabei."
        ]
      },
      {
        "id": "A1.2-u3-l5:fill3",
        "kind": "fill",
        "prompt": "Ich _____ den Kassenbon dabei.",
        "explain": [
          "Tačan izraz: Ich habe den Kassenbon dabei.",
          "Richtig: Ich habe den Kassenbon dabei."
        ],
        "options": [
          "habe",
          "kommt",
          "kann",
          "heute"
        ],
        "accept": [
          "habe"
        ]
      },
      {
        "id": "A1.2-u3-l5:dialog",
        "kind": "dialog",
        "prompt": "Warum möchten Sie das umtauschen?",
        "explain": [
          "Odgovor: Die Größe passt mir nicht.",
          "Passende Antwort: Die Größe passt mir nicht."
        ],
        "accept": [
          "Die Größe passt mir nicht."
        ],
        "options": [
          "Die Größe passt mir nicht.",
          "Ich brauche Größe M.",
          "Das kostet zwanzig Euro.",
          "Ich kaufe einen Mantel."
        ]
      }
    ]
  },
  {
    "id": "A1.2-u3-test",
    "title": [
      "Test celine",
      "Einheitstest"
    ],
    "type": "unit",
    "level": "A1.2",
    "items": [
      {
        "id": "A1.2-u3-test:q1",
        "kind": "fill",
        "prompt": "Ich _____ eine blaue Jacke.",
        "explain": [
          "Tačan izraz: Ich suche eine blaue Jacke.",
          "Richtig: Ich suche eine blaue Jacke."
        ],
        "options": [
          "suche",
          "machen",
          "gehen",
          "haben"
        ],
        "accept": [
          "suche"
        ]
      },
      {
        "id": "A1.2-u3-test:q2",
        "kind": "dialog",
        "prompt": "Welche Größe brauchen Sie?",
        "explain": [
          "Odgovor: Ich brauche Größe M.",
          "Passende Antwort: Ich brauche Größe M."
        ],
        "accept": [
          "Ich brauche Größe M."
        ],
        "options": [
          "Ich brauche Größe M.",
          "Das kostet zwanzig Euro.",
          "Ich kaufe einen Mantel.",
          "Ja, natürlich."
        ]
      },
      {
        "id": "A1.2-u3-test:q3",
        "kind": "fill",
        "prompt": "Wie _____ kostet diese Hose?",
        "explain": [
          "Tačan izraz: Wie viel kostet diese Hose?",
          "Richtig: Wie viel kostet diese Hose?"
        ],
        "options": [
          "viel",
          "gehen",
          "haben",
          "kommt"
        ],
        "accept": [
          "viel"
        ]
      },
      {
        "id": "A1.2-u3-test:q4",
        "kind": "dialog",
        "prompt": "Wie viel kostet das?",
        "explain": [
          "Odgovor: Das kostet zwanzig Euro.",
          "Passende Antwort: Das kostet zwanzig Euro."
        ],
        "accept": [
          "Das kostet zwanzig Euro."
        ],
        "options": [
          "Das kostet zwanzig Euro.",
          "Ich brauche Größe M.",
          "Ich kaufe einen Mantel.",
          "Ja, natürlich."
        ]
      },
      {
        "id": "A1.2-u3-test:q5",
        "kind": "fill",
        "prompt": "Ich _____ einen Mantel.",
        "explain": [
          "Tačan izraz: Ich kaufe einen Mantel.",
          "Richtig: Ich kaufe einen Mantel."
        ],
        "options": [
          "kaufe",
          "haben",
          "kommt",
          "kann"
        ],
        "accept": [
          "kaufe"
        ]
      },
      {
        "id": "A1.2-u3-test:q6",
        "kind": "dialog",
        "prompt": "Was kaufst du?",
        "explain": [
          "Odgovor: Ich kaufe einen Mantel.",
          "Passende Antwort: Ich kaufe einen Mantel."
        ],
        "accept": [
          "Ich kaufe einen Mantel."
        ],
        "options": [
          "Ich kaufe einen Mantel.",
          "Ich brauche Größe M.",
          "Das kostet zwanzig Euro.",
          "Ja, natürlich."
        ]
      },
      {
        "id": "A1.2-u3-test:q7",
        "kind": "fill",
        "prompt": "Ich _____ mit Karte bezahlen.",
        "explain": [
          "Tačan izraz: Ich möchte mit Karte bezahlen.",
          "Richtig: Ich möchte mit Karte bezahlen."
        ],
        "options": [
          "möchte",
          "kommt",
          "kann",
          "heute"
        ],
        "accept": [
          "möchte"
        ]
      },
      {
        "id": "A1.2-u3-test:q8",
        "kind": "dialog",
        "prompt": "Kann ich mit Karte bezahlen?",
        "explain": [
          "Odgovor: Ja, natürlich.",
          "Passende Antwort: Ja, natürlich."
        ],
        "accept": [
          "Ja, natürlich."
        ],
        "options": [
          "Ja, natürlich.",
          "Ich brauche Größe M.",
          "Das kostet zwanzig Euro.",
          "Ich kaufe einen Mantel."
        ]
      },
      {
        "id": "A1.2-u3-test:q9",
        "kind": "fill",
        "prompt": "Ich _____ diese Schuhe umtauschen.",
        "explain": [
          "Tačan izraz: Ich möchte diese Schuhe umtauschen.",
          "Richtig: Ich möchte diese Schuhe umtauschen."
        ],
        "options": [
          "möchte",
          "kann",
          "heute",
          "sehr"
        ],
        "accept": [
          "möchte"
        ]
      },
      {
        "id": "A1.2-u3-test:q10",
        "kind": "dialog",
        "prompt": "Warum möchten Sie das umtauschen?",
        "explain": [
          "Odgovor: Die Größe passt mir nicht.",
          "Passende Antwort: Die Größe passt mir nicht."
        ],
        "accept": [
          "Die Größe passt mir nicht."
        ],
        "options": [
          "Die Größe passt mir nicht.",
          "Ich brauche Größe M.",
          "Das kostet zwanzig Euro.",
          "Ich kaufe einen Mantel."
        ]
      }
    ]
  },
  {
    "id": "A1.2-u4-l1",
    "title": [
      "Jelovnik",
      "Speisekarte"
    ],
    "type": "lesson",
    "level": "A1.2",
    "intro": [
      "Vežba: Jelovnik",
      "Übung: Speisekarte"
    ],
    "example": "Kann ich die Speisekarte bekommen?",
    "items": [
      {
        "id": "A1.2-u4-l1:order1",
        "kind": "order",
        "prompt": "Mogu li dobiti jelovnik?",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Kann",
          "ich",
          "die",
          "Speisekarte",
          "bekommen"
        ],
        "accept": [
          "Kann ich die Speisekarte bekommen?"
        ]
      },
      {
        "id": "A1.2-u4-l1:translate1",
        "kind": "translate",
        "prompt": "Mogu li dobiti jelovnik?",
        "explain": [
          "Jedan prirodan prevod: Kann ich die Speisekarte bekommen?",
          "Eine natürliche Übersetzung: Kann ich die Speisekarte bekommen?"
        ],
        "accept": [
          "Kann ich die Speisekarte bekommen?"
        ]
      },
      {
        "id": "A1.2-u4-l1:fill1",
        "kind": "fill",
        "prompt": "_____ ich die Speisekarte bekommen?",
        "explain": [
          "Tačan izraz: Kann ich die Speisekarte bekommen?",
          "Richtig: Kann ich die Speisekarte bekommen?"
        ],
        "options": [
          "Kann",
          "machen",
          "gehen",
          "haben"
        ],
        "accept": [
          "Kann"
        ]
      },
      {
        "id": "A1.2-u4-l1:order2",
        "kind": "order",
        "prompt": "Danas ima supa od povrća.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Es",
          "gibt",
          "heute",
          "Gemüsesuppe"
        ],
        "accept": [
          "Es gibt heute Gemüsesuppe."
        ]
      },
      {
        "id": "A1.2-u4-l1:translate2",
        "kind": "translate",
        "prompt": "Danas ima supa od povrća.",
        "explain": [
          "Jedan prirodan prevod: Es gibt heute Gemüsesuppe.",
          "Eine natürliche Übersetzung: Es gibt heute Gemüsesuppe."
        ],
        "accept": [
          "Es gibt heute Gemüsesuppe."
        ]
      },
      {
        "id": "A1.2-u4-l1:fill2",
        "kind": "fill",
        "prompt": "Es _____ heute Gemüsesuppe.",
        "explain": [
          "Tačan izraz: Es gibt heute Gemüsesuppe.",
          "Richtig: Es gibt heute Gemüsesuppe."
        ],
        "options": [
          "gibt",
          "haben",
          "kommt",
          "kann"
        ],
        "accept": [
          "gibt"
        ]
      },
      {
        "id": "A1.2-u4-l1:order3",
        "kind": "order",
        "prompt": "Uzeću salatu.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Ich",
          "nehme",
          "den",
          "Salat"
        ],
        "accept": [
          "Ich nehme den Salat."
        ]
      },
      {
        "id": "A1.2-u4-l1:translate3",
        "kind": "translate",
        "prompt": "Uzeću salatu.",
        "explain": [
          "Jedan prirodan prevod: Ich nehme den Salat.",
          "Eine natürliche Übersetzung: Ich nehme den Salat."
        ],
        "accept": [
          "Ich nehme den Salat."
        ]
      },
      {
        "id": "A1.2-u4-l1:fill3",
        "kind": "fill",
        "prompt": "Ich _____ den Salat.",
        "explain": [
          "Tačan izraz: Ich nehme den Salat.",
          "Richtig: Ich nehme den Salat."
        ],
        "options": [
          "nehme",
          "kann",
          "heute",
          "sehr"
        ],
        "accept": [
          "nehme"
        ]
      },
      {
        "id": "A1.2-u4-l1:dialog",
        "kind": "dialog",
        "prompt": "Was möchten Sie essen?",
        "explain": [
          "Odgovor: Ich nehme den Salat.",
          "Passende Antwort: Ich nehme den Salat."
        ],
        "accept": [
          "Ich nehme den Salat."
        ],
        "options": [
          "Ich nehme den Salat.",
          "Eine Pizza, bitte.",
          "Ja, natürlich.",
          "Ja, es ist sehr lecker."
        ]
      }
    ]
  },
  {
    "id": "A1.2-u4-l2",
    "title": [
      "Porudžbina",
      "Bestellung"
    ],
    "type": "lesson",
    "level": "A1.2",
    "intro": [
      "Vežba: Porudžbina",
      "Übung: Bestellung"
    ],
    "example": "Ich hätte gern eine Pizza.",
    "items": [
      {
        "id": "A1.2-u4-l2:order1",
        "kind": "order",
        "prompt": "Želeo bih picu.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Ich",
          "hätte",
          "gern",
          "eine",
          "Pizza"
        ],
        "accept": [
          "Ich hätte gern eine Pizza."
        ]
      },
      {
        "id": "A1.2-u4-l2:translate1",
        "kind": "translate",
        "prompt": "Želeo bih picu.",
        "explain": [
          "Jedan prirodan prevod: Ich hätte gern eine Pizza.",
          "Eine natürliche Übersetzung: Ich hätte gern eine Pizza."
        ],
        "accept": [
          "Ich hätte gern eine Pizza."
        ]
      },
      {
        "id": "A1.2-u4-l2:fill1",
        "kind": "fill",
        "prompt": "Ich _____ gern eine Pizza.",
        "explain": [
          "Tačan izraz: Ich hätte gern eine Pizza.",
          "Richtig: Ich hätte gern eine Pizza."
        ],
        "options": [
          "hätte",
          "gehen",
          "haben",
          "kommt"
        ],
        "accept": [
          "hätte"
        ]
      },
      {
        "id": "A1.2-u4-l2:order2",
        "kind": "order",
        "prompt": "Za mene vodu, molim.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Für",
          "mich",
          "bitte",
          "ein",
          "Wasser"
        ],
        "accept": [
          "Für mich bitte ein Wasser."
        ]
      },
      {
        "id": "A1.2-u4-l2:translate2",
        "kind": "translate",
        "prompt": "Za mene vodu, molim.",
        "explain": [
          "Jedan prirodan prevod: Für mich bitte ein Wasser.",
          "Eine natürliche Übersetzung: Für mich bitte ein Wasser."
        ],
        "accept": [
          "Für mich bitte ein Wasser."
        ]
      },
      {
        "id": "A1.2-u4-l2:fill2",
        "kind": "fill",
        "prompt": "Für _____ bitte ein Wasser.",
        "explain": [
          "Tačan izraz: Für mich bitte ein Wasser.",
          "Richtig: Für mich bitte ein Wasser."
        ],
        "options": [
          "mich",
          "kommt",
          "kann",
          "heute"
        ],
        "accept": [
          "mich"
        ]
      },
      {
        "id": "A1.2-u4-l2:order3",
        "kind": "order",
        "prompt": "Naručujemo dve kafe.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Wir",
          "bestellen",
          "zwei",
          "Kaffees"
        ],
        "accept": [
          "Wir bestellen zwei Kaffees."
        ]
      },
      {
        "id": "A1.2-u4-l2:translate3",
        "kind": "translate",
        "prompt": "Naručujemo dve kafe.",
        "explain": [
          "Jedan prirodan prevod: Wir bestellen zwei Kaffees.",
          "Eine natürliche Übersetzung: Wir bestellen zwei Kaffees."
        ],
        "accept": [
          "Wir bestellen zwei Kaffees."
        ]
      },
      {
        "id": "A1.2-u4-l2:fill3",
        "kind": "fill",
        "prompt": "Wir _____ zwei Kaffees.",
        "explain": [
          "Tačan izraz: Wir bestellen zwei Kaffees.",
          "Richtig: Wir bestellen zwei Kaffees."
        ],
        "options": [
          "bestellen",
          "machen",
          "gehen",
          "haben"
        ],
        "accept": [
          "bestellen"
        ]
      },
      {
        "id": "A1.2-u4-l2:dialog",
        "kind": "dialog",
        "prompt": "Was darf ich Ihnen bringen?",
        "explain": [
          "Odgovor: Eine Pizza, bitte.",
          "Passende Antwort: Eine Pizza, bitte."
        ],
        "accept": [
          "Eine Pizza, bitte."
        ],
        "options": [
          "Eine Pizza, bitte.",
          "Ich nehme den Salat.",
          "Ja, natürlich.",
          "Ja, es ist sehr lecker."
        ]
      }
    ]
  },
  {
    "id": "A1.2-u4-l3",
    "title": [
      "Ljubazne molbe",
      "Höfliche Bitten"
    ],
    "type": "lesson",
    "level": "A1.2",
    "intro": [
      "Vežba: Ljubazne molbe",
      "Übung: Höfliche Bitten"
    ],
    "example": "Könnten Sie mir bitte helfen?",
    "items": [
      {
        "id": "A1.2-u4-l3:order1",
        "kind": "order",
        "prompt": "Možete li mi pomoći?",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Könnten",
          "Sie",
          "mir",
          "bitte",
          "helfen"
        ],
        "accept": [
          "Könnten Sie mir bitte helfen?"
        ]
      },
      {
        "id": "A1.2-u4-l3:translate1",
        "kind": "translate",
        "prompt": "Možete li mi pomoći?",
        "explain": [
          "Jedan prirodan prevod: Könnten Sie mir bitte helfen?",
          "Eine natürliche Übersetzung: Könnten Sie mir bitte helfen?"
        ],
        "accept": [
          "Könnten Sie mir bitte helfen?"
        ]
      },
      {
        "id": "A1.2-u4-l3:fill1",
        "kind": "fill",
        "prompt": "_____ Sie mir bitte helfen?",
        "explain": [
          "Tačan izraz: Könnten Sie mir bitte helfen?",
          "Richtig: Könnten Sie mir bitte helfen?"
        ],
        "options": [
          "Könnten",
          "haben",
          "kommt",
          "kann"
        ],
        "accept": [
          "Könnten"
        ]
      },
      {
        "id": "A1.2-u4-l3:order2",
        "kind": "order",
        "prompt": "Donesite mi vodu, molim.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Bringen",
          "Sie",
          "mir",
          "bitte",
          "Wasser"
        ],
        "accept": [
          "Bringen Sie mir bitte Wasser."
        ]
      },
      {
        "id": "A1.2-u4-l3:translate2",
        "kind": "translate",
        "prompt": "Donesite mi vodu, molim.",
        "explain": [
          "Jedan prirodan prevod: Bringen Sie mir bitte Wasser.",
          "Eine natürliche Übersetzung: Bringen Sie mir bitte Wasser."
        ],
        "accept": [
          "Bringen Sie mir bitte Wasser."
        ]
      },
      {
        "id": "A1.2-u4-l3:fill2",
        "kind": "fill",
        "prompt": "_____ Sie mir bitte Wasser.",
        "explain": [
          "Tačan izraz: Bringen Sie mir bitte Wasser.",
          "Richtig: Bringen Sie mir bitte Wasser."
        ],
        "options": [
          "Bringen",
          "kann",
          "heute",
          "sehr"
        ],
        "accept": [
          "Bringen"
        ]
      },
      {
        "id": "A1.2-u4-l3:order3",
        "kind": "order",
        "prompt": "Smem li ovde da sednem?",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Darf",
          "ich",
          "hier",
          "sitzen"
        ],
        "accept": [
          "Darf ich hier sitzen?"
        ]
      },
      {
        "id": "A1.2-u4-l3:translate3",
        "kind": "translate",
        "prompt": "Smem li ovde da sednem?",
        "explain": [
          "Jedan prirodan prevod: Darf ich hier sitzen?",
          "Eine natürliche Übersetzung: Darf ich hier sitzen?"
        ],
        "accept": [
          "Darf ich hier sitzen?"
        ]
      },
      {
        "id": "A1.2-u4-l3:fill3",
        "kind": "fill",
        "prompt": "_____ ich hier sitzen?",
        "explain": [
          "Tačan izraz: Darf ich hier sitzen?",
          "Richtig: Darf ich hier sitzen?"
        ],
        "options": [
          "Darf",
          "gehen",
          "haben",
          "kommt"
        ],
        "accept": [
          "Darf"
        ]
      },
      {
        "id": "A1.2-u4-l3:dialog",
        "kind": "dialog",
        "prompt": "Könnten Sie das wiederholen?",
        "explain": [
          "Odgovor: Ja, natürlich.",
          "Passende Antwort: Ja, natürlich."
        ],
        "accept": [
          "Ja, natürlich."
        ],
        "options": [
          "Ja, natürlich.",
          "Ich nehme den Salat.",
          "Eine Pizza, bitte.",
          "Ja, es ist sehr lecker."
        ]
      }
    ]
  },
  {
    "id": "A1.2-u4-l4",
    "title": [
      "Razgovor za stolom",
      "Am Tisch"
    ],
    "type": "lesson",
    "level": "A1.2",
    "intro": [
      "Vežba: Razgovor za stolom",
      "Übung: Am Tisch"
    ],
    "example": "Schmeckt dir das Essen?",
    "items": [
      {
        "id": "A1.2-u4-l4:order1",
        "kind": "order",
        "prompt": "Da li ti se sviđa hrana?",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Schmeckt",
          "dir",
          "das",
          "Essen"
        ],
        "accept": [
          "Schmeckt dir das Essen?"
        ]
      },
      {
        "id": "A1.2-u4-l4:translate1",
        "kind": "translate",
        "prompt": "Da li ti se sviđa hrana?",
        "explain": [
          "Jedan prirodan prevod: Schmeckt dir das Essen?",
          "Eine natürliche Übersetzung: Schmeckt dir das Essen?"
        ],
        "accept": [
          "Schmeckt dir das Essen?"
        ]
      },
      {
        "id": "A1.2-u4-l4:fill1",
        "kind": "fill",
        "prompt": "_____ dir das Essen?",
        "explain": [
          "Tačan izraz: Schmeckt dir das Essen?",
          "Richtig: Schmeckt dir das Essen?"
        ],
        "options": [
          "Schmeckt",
          "kommt",
          "kann",
          "heute"
        ],
        "accept": [
          "Schmeckt"
        ]
      },
      {
        "id": "A1.2-u4-l4:order2",
        "kind": "order",
        "prompt": "Supa je veoma ukusna.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Die",
          "Suppe",
          "ist",
          "sehr",
          "lecker"
        ],
        "accept": [
          "Die Suppe ist sehr lecker."
        ]
      },
      {
        "id": "A1.2-u4-l4:translate2",
        "kind": "translate",
        "prompt": "Supa je veoma ukusna.",
        "explain": [
          "Jedan prirodan prevod: Die Suppe ist sehr lecker.",
          "Eine natürliche Übersetzung: Die Suppe ist sehr lecker."
        ],
        "accept": [
          "Die Suppe ist sehr lecker."
        ]
      },
      {
        "id": "A1.2-u4-l4:fill2",
        "kind": "fill",
        "prompt": "Die _____ ist sehr lecker.",
        "explain": [
          "Tačan izraz: Die Suppe ist sehr lecker.",
          "Richtig: Die Suppe ist sehr lecker."
        ],
        "options": [
          "Suppe",
          "machen",
          "gehen",
          "haben"
        ],
        "accept": [
          "Suppe"
        ]
      },
      {
        "id": "A1.2-u4-l4:order3",
        "kind": "order",
        "prompt": "Već sam sit.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Ich",
          "bin",
          "schon",
          "satt"
        ],
        "accept": [
          "Ich bin schon satt."
        ]
      },
      {
        "id": "A1.2-u4-l4:translate3",
        "kind": "translate",
        "prompt": "Već sam sit.",
        "explain": [
          "Jedan prirodan prevod: Ich bin schon satt.",
          "Eine natürliche Übersetzung: Ich bin schon satt."
        ],
        "accept": [
          "Ich bin schon satt."
        ]
      },
      {
        "id": "A1.2-u4-l4:fill3",
        "kind": "fill",
        "prompt": "Ich bin _____ satt.",
        "explain": [
          "Tačan izraz: Ich bin schon satt.",
          "Richtig: Ich bin schon satt."
        ],
        "options": [
          "schon",
          "haben",
          "kommt",
          "kann"
        ],
        "accept": [
          "schon"
        ]
      },
      {
        "id": "A1.2-u4-l4:dialog",
        "kind": "dialog",
        "prompt": "Schmeckt es dir?",
        "explain": [
          "Odgovor: Ja, es ist sehr lecker.",
          "Passende Antwort: Ja, es ist sehr lecker."
        ],
        "accept": [
          "Ja, es ist sehr lecker."
        ],
        "options": [
          "Ja, es ist sehr lecker.",
          "Ich nehme den Salat.",
          "Eine Pizza, bitte.",
          "Ja, natürlich."
        ]
      }
    ]
  },
  {
    "id": "A1.2-u4-l5",
    "title": [
      "Račun",
      "Die Rechnung"
    ],
    "type": "lesson",
    "level": "A1.2",
    "intro": [
      "Vežba: Račun",
      "Übung: Die Rechnung"
    ],
    "example": "Die Rechnung bitte.",
    "items": [
      {
        "id": "A1.2-u4-l5:order1",
        "kind": "order",
        "prompt": "Račun, molim.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Die",
          "Rechnung",
          "bitte"
        ],
        "accept": [
          "Die Rechnung bitte."
        ]
      },
      {
        "id": "A1.2-u4-l5:translate1",
        "kind": "translate",
        "prompt": "Račun, molim.",
        "explain": [
          "Jedan prirodan prevod: Die Rechnung bitte.",
          "Eine natürliche Übersetzung: Die Rechnung bitte."
        ],
        "accept": [
          "Die Rechnung bitte."
        ]
      },
      {
        "id": "A1.2-u4-l5:fill1",
        "kind": "fill",
        "prompt": "Die _____ bitte.",
        "explain": [
          "Tačan izraz: Die Rechnung bitte.",
          "Richtig: Die Rechnung bitte."
        ],
        "options": [
          "Rechnung",
          "kann",
          "heute",
          "sehr"
        ],
        "accept": [
          "Rechnung"
        ]
      },
      {
        "id": "A1.2-u4-l5:order2",
        "kind": "order",
        "prompt": "Želimo odvojeno da platimo.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Wir",
          "möchten",
          "getrennt",
          "bezahlen"
        ],
        "accept": [
          "Wir möchten getrennt bezahlen."
        ]
      },
      {
        "id": "A1.2-u4-l5:translate2",
        "kind": "translate",
        "prompt": "Želimo odvojeno da platimo.",
        "explain": [
          "Jedan prirodan prevod: Wir möchten getrennt bezahlen.",
          "Eine natürliche Übersetzung: Wir möchten getrennt bezahlen."
        ],
        "accept": [
          "Wir möchten getrennt bezahlen."
        ]
      },
      {
        "id": "A1.2-u4-l5:fill2",
        "kind": "fill",
        "prompt": "Wir _____ getrennt bezahlen.",
        "explain": [
          "Tačan izraz: Wir möchten getrennt bezahlen.",
          "Richtig: Wir möchten getrennt bezahlen."
        ],
        "options": [
          "möchten",
          "gehen",
          "haben",
          "kommt"
        ],
        "accept": [
          "möchten"
        ]
      },
      {
        "id": "A1.2-u4-l5:order3",
        "kind": "order",
        "prompt": "U redu je, hvala (zadržite kusur).",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Stimmt",
          "so,",
          "danke"
        ],
        "accept": [
          "Stimmt so, danke."
        ]
      },
      {
        "id": "A1.2-u4-l5:translate3",
        "kind": "translate",
        "prompt": "U redu je, hvala (zadržite kusur).",
        "explain": [
          "Jedan prirodan prevod: Stimmt so, danke.",
          "Eine natürliche Übersetzung: Stimmt so, danke."
        ],
        "accept": [
          "Stimmt so, danke."
        ]
      },
      {
        "id": "A1.2-u4-l5:fill3",
        "kind": "fill",
        "prompt": "_____ so, danke.",
        "explain": [
          "Tačan izraz: Stimmt so, danke.",
          "Richtig: Stimmt so, danke."
        ],
        "options": [
          "Stimmt",
          "kommt",
          "kann",
          "heute"
        ],
        "accept": [
          "Stimmt"
        ]
      },
      {
        "id": "A1.2-u4-l5:dialog",
        "kind": "dialog",
        "prompt": "Zusammen oder getrennt?",
        "explain": [
          "Odgovor: Getrennt, bitte.",
          "Passende Antwort: Getrennt, bitte."
        ],
        "accept": [
          "Getrennt, bitte."
        ],
        "options": [
          "Getrennt, bitte.",
          "Ich nehme den Salat.",
          "Eine Pizza, bitte.",
          "Ja, natürlich."
        ]
      }
    ]
  },
  {
    "id": "A1.2-u4-test",
    "title": [
      "Test celine",
      "Einheitstest"
    ],
    "type": "unit",
    "level": "A1.2",
    "items": [
      {
        "id": "A1.2-u4-test:q1",
        "kind": "fill",
        "prompt": "_____ ich die Speisekarte bekommen?",
        "explain": [
          "Tačan izraz: Kann ich die Speisekarte bekommen?",
          "Richtig: Kann ich die Speisekarte bekommen?"
        ],
        "options": [
          "Kann",
          "machen",
          "gehen",
          "haben"
        ],
        "accept": [
          "Kann"
        ]
      },
      {
        "id": "A1.2-u4-test:q2",
        "kind": "dialog",
        "prompt": "Was möchten Sie essen?",
        "explain": [
          "Odgovor: Ich nehme den Salat.",
          "Passende Antwort: Ich nehme den Salat."
        ],
        "accept": [
          "Ich nehme den Salat."
        ],
        "options": [
          "Ich nehme den Salat.",
          "Eine Pizza, bitte.",
          "Ja, natürlich.",
          "Ja, es ist sehr lecker."
        ]
      },
      {
        "id": "A1.2-u4-test:q3",
        "kind": "fill",
        "prompt": "Ich _____ gern eine Pizza.",
        "explain": [
          "Tačan izraz: Ich hätte gern eine Pizza.",
          "Richtig: Ich hätte gern eine Pizza."
        ],
        "options": [
          "hätte",
          "gehen",
          "haben",
          "kommt"
        ],
        "accept": [
          "hätte"
        ]
      },
      {
        "id": "A1.2-u4-test:q4",
        "kind": "dialog",
        "prompt": "Was darf ich Ihnen bringen?",
        "explain": [
          "Odgovor: Eine Pizza, bitte.",
          "Passende Antwort: Eine Pizza, bitte."
        ],
        "accept": [
          "Eine Pizza, bitte."
        ],
        "options": [
          "Eine Pizza, bitte.",
          "Ich nehme den Salat.",
          "Ja, natürlich.",
          "Ja, es ist sehr lecker."
        ]
      },
      {
        "id": "A1.2-u4-test:q5",
        "kind": "fill",
        "prompt": "_____ Sie mir bitte helfen?",
        "explain": [
          "Tačan izraz: Könnten Sie mir bitte helfen?",
          "Richtig: Könnten Sie mir bitte helfen?"
        ],
        "options": [
          "Könnten",
          "haben",
          "kommt",
          "kann"
        ],
        "accept": [
          "Könnten"
        ]
      },
      {
        "id": "A1.2-u4-test:q6",
        "kind": "dialog",
        "prompt": "Könnten Sie das wiederholen?",
        "explain": [
          "Odgovor: Ja, natürlich.",
          "Passende Antwort: Ja, natürlich."
        ],
        "accept": [
          "Ja, natürlich."
        ],
        "options": [
          "Ja, natürlich.",
          "Ich nehme den Salat.",
          "Eine Pizza, bitte.",
          "Ja, es ist sehr lecker."
        ]
      },
      {
        "id": "A1.2-u4-test:q7",
        "kind": "fill",
        "prompt": "_____ dir das Essen?",
        "explain": [
          "Tačan izraz: Schmeckt dir das Essen?",
          "Richtig: Schmeckt dir das Essen?"
        ],
        "options": [
          "Schmeckt",
          "kommt",
          "kann",
          "heute"
        ],
        "accept": [
          "Schmeckt"
        ]
      },
      {
        "id": "A1.2-u4-test:q8",
        "kind": "dialog",
        "prompt": "Schmeckt es dir?",
        "explain": [
          "Odgovor: Ja, es ist sehr lecker.",
          "Passende Antwort: Ja, es ist sehr lecker."
        ],
        "accept": [
          "Ja, es ist sehr lecker."
        ],
        "options": [
          "Ja, es ist sehr lecker.",
          "Ich nehme den Salat.",
          "Eine Pizza, bitte.",
          "Ja, natürlich."
        ]
      },
      {
        "id": "A1.2-u4-test:q9",
        "kind": "fill",
        "prompt": "Die _____ bitte.",
        "explain": [
          "Tačan izraz: Die Rechnung bitte.",
          "Richtig: Die Rechnung bitte."
        ],
        "options": [
          "Rechnung",
          "kann",
          "heute",
          "sehr"
        ],
        "accept": [
          "Rechnung"
        ]
      },
      {
        "id": "A1.2-u4-test:q10",
        "kind": "dialog",
        "prompt": "Zusammen oder getrennt?",
        "explain": [
          "Odgovor: Getrennt, bitte.",
          "Passende Antwort: Getrennt, bitte."
        ],
        "accept": [
          "Getrennt, bitte."
        ],
        "options": [
          "Getrennt, bitte.",
          "Ich nehme den Salat.",
          "Eine Pizza, bitte.",
          "Ja, natürlich."
        ]
      }
    ]
  },
  {
    "id": "A1.2-u5-l1",
    "title": [
      "Prostorije",
      "Zimmer"
    ],
    "type": "lesson",
    "level": "A1.2",
    "intro": [
      "Vežba: Prostorije",
      "Übung: Zimmer"
    ],
    "example": "Die Küche ist neben dem Wohnzimmer.",
    "items": [
      {
        "id": "A1.2-u5-l1:order1",
        "kind": "order",
        "prompt": "Kuhinja je pored dnevne sobe.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Die",
          "Küche",
          "ist",
          "neben",
          "dem",
          "Wohnzimmer"
        ],
        "accept": [
          "Die Küche ist neben dem Wohnzimmer."
        ]
      },
      {
        "id": "A1.2-u5-l1:translate1",
        "kind": "translate",
        "prompt": "Kuhinja je pored dnevne sobe.",
        "explain": [
          "Jedan prirodan prevod: Die Küche ist neben dem Wohnzimmer.",
          "Eine natürliche Übersetzung: Die Küche ist neben dem Wohnzimmer."
        ],
        "accept": [
          "Die Küche ist neben dem Wohnzimmer."
        ]
      },
      {
        "id": "A1.2-u5-l1:fill1",
        "kind": "fill",
        "prompt": "Die _____ ist neben dem Wohnzimmer.",
        "explain": [
          "Tačan izraz: Die Küche ist neben dem Wohnzimmer.",
          "Richtig: Die Küche ist neben dem Wohnzimmer."
        ],
        "options": [
          "Küche",
          "machen",
          "gehen",
          "haben"
        ],
        "accept": [
          "Küche"
        ]
      },
      {
        "id": "A1.2-u5-l1:order2",
        "kind": "order",
        "prompt": "Kupatilo je veoma malo.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Das",
          "Bad",
          "ist",
          "sehr",
          "klein"
        ],
        "accept": [
          "Das Bad ist sehr klein."
        ]
      },
      {
        "id": "A1.2-u5-l1:translate2",
        "kind": "translate",
        "prompt": "Kupatilo je veoma malo.",
        "explain": [
          "Jedan prirodan prevod: Das Bad ist sehr klein.",
          "Eine natürliche Übersetzung: Das Bad ist sehr klein."
        ],
        "accept": [
          "Das Bad ist sehr klein."
        ]
      },
      {
        "id": "A1.2-u5-l1:fill2",
        "kind": "fill",
        "prompt": "Das Bad ist _____ klein.",
        "explain": [
          "Tačan izraz: Das Bad ist sehr klein.",
          "Richtig: Das Bad ist sehr klein."
        ],
        "options": [
          "sehr",
          "haben",
          "kommt",
          "kann"
        ],
        "accept": [
          "sehr"
        ]
      },
      {
        "id": "A1.2-u5-l1:order3",
        "kind": "order",
        "prompt": "Moja spavaća soba je svetla.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Mein",
          "Schlafzimmer",
          "ist",
          "hell"
        ],
        "accept": [
          "Mein Schlafzimmer ist hell."
        ]
      },
      {
        "id": "A1.2-u5-l1:translate3",
        "kind": "translate",
        "prompt": "Moja spavaća soba je svetla.",
        "explain": [
          "Jedan prirodan prevod: Mein Schlafzimmer ist hell.",
          "Eine natürliche Übersetzung: Mein Schlafzimmer ist hell."
        ],
        "accept": [
          "Mein Schlafzimmer ist hell."
        ]
      },
      {
        "id": "A1.2-u5-l1:fill3",
        "kind": "fill",
        "prompt": "_____ Schlafzimmer ist hell.",
        "explain": [
          "Tačan izraz: Mein Schlafzimmer ist hell.",
          "Richtig: Mein Schlafzimmer ist hell."
        ],
        "options": [
          "Mein",
          "kann",
          "heute",
          "sehr"
        ],
        "accept": [
          "Mein"
        ]
      },
      {
        "id": "A1.2-u5-l1:dialog",
        "kind": "dialog",
        "prompt": "Wo ist die Küche?",
        "explain": [
          "Odgovor: Neben dem Wohnzimmer.",
          "Passende Antwort: Neben dem Wohnzimmer."
        ],
        "accept": [
          "Neben dem Wohnzimmer."
        ],
        "options": [
          "Neben dem Wohnzimmer.",
          "Im Wohnzimmer.",
          "Ich habe drei Bücher.",
          "Das ist mein Zimmer."
        ]
      }
    ]
  },
  {
    "id": "A1.2-u5-l2",
    "title": [
      "Nameštaj",
      "Möbel"
    ],
    "type": "lesson",
    "level": "A1.2",
    "intro": [
      "Vežba: Nameštaj",
      "Übung: Möbel"
    ],
    "example": "Das Sofa steht im Wohnzimmer.",
    "items": [
      {
        "id": "A1.2-u5-l2:order1",
        "kind": "order",
        "prompt": "Kauč stoji u dnevnoj sobi.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Das",
          "Sofa",
          "steht",
          "im",
          "Wohnzimmer"
        ],
        "accept": [
          "Das Sofa steht im Wohnzimmer."
        ]
      },
      {
        "id": "A1.2-u5-l2:translate1",
        "kind": "translate",
        "prompt": "Kauč stoji u dnevnoj sobi.",
        "explain": [
          "Jedan prirodan prevod: Das Sofa steht im Wohnzimmer.",
          "Eine natürliche Übersetzung: Das Sofa steht im Wohnzimmer."
        ],
        "accept": [
          "Das Sofa steht im Wohnzimmer."
        ]
      },
      {
        "id": "A1.2-u5-l2:fill1",
        "kind": "fill",
        "prompt": "Das _____ steht im Wohnzimmer.",
        "explain": [
          "Tačan izraz: Das Sofa steht im Wohnzimmer.",
          "Richtig: Das Sofa steht im Wohnzimmer."
        ],
        "options": [
          "Sofa",
          "gehen",
          "haben",
          "kommt"
        ],
        "accept": [
          "Sofa"
        ]
      },
      {
        "id": "A1.2-u5-l2:order2",
        "kind": "order",
        "prompt": "Sto je od drveta.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Der",
          "Tisch",
          "ist",
          "aus",
          "Holz"
        ],
        "accept": [
          "Der Tisch ist aus Holz."
        ]
      },
      {
        "id": "A1.2-u5-l2:translate2",
        "kind": "translate",
        "prompt": "Sto je od drveta.",
        "explain": [
          "Jedan prirodan prevod: Der Tisch ist aus Holz.",
          "Eine natürliche Übersetzung: Der Tisch ist aus Holz."
        ],
        "accept": [
          "Der Tisch ist aus Holz."
        ]
      },
      {
        "id": "A1.2-u5-l2:fill2",
        "kind": "fill",
        "prompt": "Der _____ ist aus Holz.",
        "explain": [
          "Tačan izraz: Der Tisch ist aus Holz.",
          "Richtig: Der Tisch ist aus Holz."
        ],
        "options": [
          "Tisch",
          "kommt",
          "kann",
          "heute"
        ],
        "accept": [
          "Tisch"
        ]
      },
      {
        "id": "A1.2-u5-l2:order3",
        "kind": "order",
        "prompt": "Treba mi novi ormar.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Ich",
          "brauche",
          "einen",
          "neuen",
          "Schrank"
        ],
        "accept": [
          "Ich brauche einen neuen Schrank."
        ]
      },
      {
        "id": "A1.2-u5-l2:translate3",
        "kind": "translate",
        "prompt": "Treba mi novi ormar.",
        "explain": [
          "Jedan prirodan prevod: Ich brauche einen neuen Schrank.",
          "Eine natürliche Übersetzung: Ich brauche einen neuen Schrank."
        ],
        "accept": [
          "Ich brauche einen neuen Schrank."
        ]
      },
      {
        "id": "A1.2-u5-l2:fill3",
        "kind": "fill",
        "prompt": "Ich _____ einen neuen Schrank.",
        "explain": [
          "Tačan izraz: Ich brauche einen neuen Schrank.",
          "Richtig: Ich brauche einen neuen Schrank."
        ],
        "options": [
          "brauche",
          "machen",
          "gehen",
          "haben"
        ],
        "accept": [
          "brauche"
        ]
      },
      {
        "id": "A1.2-u5-l2:dialog",
        "kind": "dialog",
        "prompt": "Wo steht das Sofa?",
        "explain": [
          "Odgovor: Im Wohnzimmer.",
          "Passende Antwort: Im Wohnzimmer."
        ],
        "accept": [
          "Im Wohnzimmer."
        ],
        "options": [
          "Im Wohnzimmer.",
          "Neben dem Wohnzimmer.",
          "Ich habe drei Bücher.",
          "Das ist mein Zimmer."
        ]
      }
    ]
  },
  {
    "id": "A1.2-u5-l3",
    "title": [
      "Množina",
      "Pluralformen"
    ],
    "type": "lesson",
    "level": "A1.2",
    "intro": [
      "Vežba: Množina",
      "Übung: Pluralformen"
    ],
    "example": "Hier stehen zwei Stühle.",
    "items": [
      {
        "id": "A1.2-u5-l3:order1",
        "kind": "order",
        "prompt": "Ovde stoje dve stolice.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Hier",
          "stehen",
          "zwei",
          "Stühle"
        ],
        "accept": [
          "Hier stehen zwei Stühle."
        ]
      },
      {
        "id": "A1.2-u5-l3:translate1",
        "kind": "translate",
        "prompt": "Ovde stoje dve stolice.",
        "explain": [
          "Jedan prirodan prevod: Hier stehen zwei Stühle.",
          "Eine natürliche Übersetzung: Hier stehen zwei Stühle."
        ],
        "accept": [
          "Hier stehen zwei Stühle."
        ]
      },
      {
        "id": "A1.2-u5-l3:fill1",
        "kind": "fill",
        "prompt": "_____ stehen zwei Stühle.",
        "explain": [
          "Tačan izraz: Hier stehen zwei Stühle.",
          "Richtig: Hier stehen zwei Stühle."
        ],
        "options": [
          "Hier",
          "haben",
          "kommt",
          "kann"
        ],
        "accept": [
          "Hier"
        ]
      },
      {
        "id": "A1.2-u5-l3:order2",
        "kind": "order",
        "prompt": "Deca se igraju u bašti.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Die",
          "Kinder",
          "spielen",
          "im",
          "Garten"
        ],
        "accept": [
          "Die Kinder spielen im Garten."
        ]
      },
      {
        "id": "A1.2-u5-l3:translate2",
        "kind": "translate",
        "prompt": "Deca se igraju u bašti.",
        "explain": [
          "Jedan prirodan prevod: Die Kinder spielen im Garten.",
          "Eine natürliche Übersetzung: Die Kinder spielen im Garten."
        ],
        "accept": [
          "Die Kinder spielen im Garten."
        ]
      },
      {
        "id": "A1.2-u5-l3:fill2",
        "kind": "fill",
        "prompt": "Die _____ spielen im Garten.",
        "explain": [
          "Tačan izraz: Die Kinder spielen im Garten.",
          "Richtig: Die Kinder spielen im Garten."
        ],
        "options": [
          "Kinder",
          "kann",
          "heute",
          "sehr"
        ],
        "accept": [
          "Kinder"
        ]
      },
      {
        "id": "A1.2-u5-l3:order3",
        "kind": "order",
        "prompt": "Imam tri knjige.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Ich",
          "habe",
          "drei",
          "Bücher"
        ],
        "accept": [
          "Ich habe drei Bücher."
        ]
      },
      {
        "id": "A1.2-u5-l3:translate3",
        "kind": "translate",
        "prompt": "Imam tri knjige.",
        "explain": [
          "Jedan prirodan prevod: Ich habe drei Bücher.",
          "Eine natürliche Übersetzung: Ich habe drei Bücher."
        ],
        "accept": [
          "Ich habe drei Bücher."
        ]
      },
      {
        "id": "A1.2-u5-l3:fill3",
        "kind": "fill",
        "prompt": "Ich _____ drei Bücher.",
        "explain": [
          "Tačan izraz: Ich habe drei Bücher.",
          "Richtig: Ich habe drei Bücher."
        ],
        "options": [
          "habe",
          "gehen",
          "haben",
          "kommt"
        ],
        "accept": [
          "habe"
        ]
      },
      {
        "id": "A1.2-u5-l3:dialog",
        "kind": "dialog",
        "prompt": "Wie viele Bücher hast du?",
        "explain": [
          "Odgovor: Ich habe drei Bücher.",
          "Passende Antwort: Ich habe drei Bücher."
        ],
        "accept": [
          "Ich habe drei Bücher."
        ],
        "options": [
          "Ich habe drei Bücher.",
          "Neben dem Wohnzimmer.",
          "Im Wohnzimmer.",
          "Das ist mein Zimmer."
        ]
      }
    ]
  },
  {
    "id": "A1.2-u5-l4",
    "title": [
      "Prisvojni oblici",
      "Possessivartikel"
    ],
    "type": "lesson",
    "level": "A1.2",
    "intro": [
      "Vežba: Prisvojni oblici",
      "Übung: Possessivartikel"
    ],
    "example": "Das ist mein Zimmer.",
    "items": [
      {
        "id": "A1.2-u5-l4:order1",
        "kind": "order",
        "prompt": "Ovo je moja soba.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Das",
          "ist",
          "mein",
          "Zimmer"
        ],
        "accept": [
          "Das ist mein Zimmer."
        ]
      },
      {
        "id": "A1.2-u5-l4:translate1",
        "kind": "translate",
        "prompt": "Ovo je moja soba.",
        "explain": [
          "Jedan prirodan prevod: Das ist mein Zimmer.",
          "Eine natürliche Übersetzung: Das ist mein Zimmer."
        ],
        "accept": [
          "Das ist mein Zimmer."
        ]
      },
      {
        "id": "A1.2-u5-l4:fill1",
        "kind": "fill",
        "prompt": "Das ist _____ Zimmer.",
        "explain": [
          "Tačan izraz: Das ist mein Zimmer.",
          "Richtig: Das ist mein Zimmer."
        ],
        "options": [
          "mein",
          "kommt",
          "kann",
          "heute"
        ],
        "accept": [
          "mein"
        ]
      },
      {
        "id": "A1.2-u5-l4:order2",
        "kind": "order",
        "prompt": "Da li je ovo tvoja lampa?",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Ist",
          "das",
          "deine",
          "Lampe"
        ],
        "accept": [
          "Ist das deine Lampe?"
        ]
      },
      {
        "id": "A1.2-u5-l4:translate2",
        "kind": "translate",
        "prompt": "Da li je ovo tvoja lampa?",
        "explain": [
          "Jedan prirodan prevod: Ist das deine Lampe?",
          "Eine natürliche Übersetzung: Ist das deine Lampe?"
        ],
        "accept": [
          "Ist das deine Lampe?"
        ]
      },
      {
        "id": "A1.2-u5-l4:fill2",
        "kind": "fill",
        "prompt": "Ist das deine _____?",
        "explain": [
          "Tačan izraz: Ist das deine Lampe?",
          "Richtig: Ist das deine Lampe?"
        ],
        "options": [
          "Lampe",
          "machen",
          "gehen",
          "haben"
        ],
        "accept": [
          "Lampe"
        ]
      },
      {
        "id": "A1.2-u5-l4:order3",
        "kind": "order",
        "prompt": "Njen stan je lep.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Ihre",
          "Wohnung",
          "ist",
          "schön"
        ],
        "accept": [
          "Ihre Wohnung ist schön."
        ]
      },
      {
        "id": "A1.2-u5-l4:translate3",
        "kind": "translate",
        "prompt": "Njen stan je lep.",
        "explain": [
          "Jedan prirodan prevod: Ihre Wohnung ist schön.",
          "Eine natürliche Übersetzung: Ihre Wohnung ist schön."
        ],
        "accept": [
          "Ihre Wohnung ist schön."
        ]
      },
      {
        "id": "A1.2-u5-l4:fill3",
        "kind": "fill",
        "prompt": "_____ Wohnung ist schön.",
        "explain": [
          "Tačan izraz: Ihre Wohnung ist schön.",
          "Richtig: Ihre Wohnung ist schön."
        ],
        "options": [
          "Ihre",
          "haben",
          "kommt",
          "kann"
        ],
        "accept": [
          "Ihre"
        ]
      },
      {
        "id": "A1.2-u5-l4:dialog",
        "kind": "dialog",
        "prompt": "Wessen Zimmer ist das?",
        "explain": [
          "Odgovor: Das ist mein Zimmer.",
          "Passende Antwort: Das ist mein Zimmer."
        ],
        "accept": [
          "Das ist mein Zimmer."
        ],
        "options": [
          "Das ist mein Zimmer.",
          "Neben dem Wohnzimmer.",
          "Im Wohnzimmer.",
          "Ich habe drei Bücher."
        ]
      }
    ]
  },
  {
    "id": "A1.2-u5-l5",
    "title": [
      "Opis stana",
      "Wohnung beschreiben"
    ],
    "type": "lesson",
    "level": "A1.2",
    "intro": [
      "Vežba: Opis stana",
      "Übung: Wohnung beschreiben"
    ],
    "example": "Unsere Wohnung hat drei Zimmer.",
    "items": [
      {
        "id": "A1.2-u5-l5:order1",
        "kind": "order",
        "prompt": "Naš stan ima tri sobe.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Unsere",
          "Wohnung",
          "hat",
          "drei",
          "Zimmer"
        ],
        "accept": [
          "Unsere Wohnung hat drei Zimmer."
        ]
      },
      {
        "id": "A1.2-u5-l5:translate1",
        "kind": "translate",
        "prompt": "Naš stan ima tri sobe.",
        "explain": [
          "Jedan prirodan prevod: Unsere Wohnung hat drei Zimmer.",
          "Eine natürliche Übersetzung: Unsere Wohnung hat drei Zimmer."
        ],
        "accept": [
          "Unsere Wohnung hat drei Zimmer."
        ]
      },
      {
        "id": "A1.2-u5-l5:fill1",
        "kind": "fill",
        "prompt": "Unsere _____ hat drei Zimmer.",
        "explain": [
          "Tačan izraz: Unsere Wohnung hat drei Zimmer.",
          "Richtig: Unsere Wohnung hat drei Zimmer."
        ],
        "options": [
          "Wohnung",
          "kann",
          "heute",
          "sehr"
        ],
        "accept": [
          "Wohnung"
        ]
      },
      {
        "id": "A1.2-u5-l5:order2",
        "kind": "order",
        "prompt": "Balkon je veoma veliki.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Der",
          "Balkon",
          "ist",
          "sehr",
          "groß"
        ],
        "accept": [
          "Der Balkon ist sehr groß."
        ]
      },
      {
        "id": "A1.2-u5-l5:translate2",
        "kind": "translate",
        "prompt": "Balkon je veoma veliki.",
        "explain": [
          "Jedan prirodan prevod: Der Balkon ist sehr groß.",
          "Eine natürliche Übersetzung: Der Balkon ist sehr groß."
        ],
        "accept": [
          "Der Balkon ist sehr groß."
        ]
      },
      {
        "id": "A1.2-u5-l5:fill2",
        "kind": "fill",
        "prompt": "Der _____ ist sehr groß.",
        "explain": [
          "Tačan izraz: Der Balkon ist sehr groß.",
          "Richtig: Der Balkon ist sehr groß."
        ],
        "options": [
          "Balkon",
          "gehen",
          "haben",
          "kommt"
        ],
        "accept": [
          "Balkon"
        ]
      },
      {
        "id": "A1.2-u5-l5:order3",
        "kind": "order",
        "prompt": "Stanujemo na trećem spratu.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Wir",
          "wohnen",
          "im",
          "dritten",
          "Stock"
        ],
        "accept": [
          "Wir wohnen im dritten Stock."
        ]
      },
      {
        "id": "A1.2-u5-l5:translate3",
        "kind": "translate",
        "prompt": "Stanujemo na trećem spratu.",
        "explain": [
          "Jedan prirodan prevod: Wir wohnen im dritten Stock.",
          "Eine natürliche Übersetzung: Wir wohnen im dritten Stock."
        ],
        "accept": [
          "Wir wohnen im dritten Stock."
        ]
      },
      {
        "id": "A1.2-u5-l5:fill3",
        "kind": "fill",
        "prompt": "Wir _____ im dritten Stock.",
        "explain": [
          "Tačan izraz: Wir wohnen im dritten Stock.",
          "Richtig: Wir wohnen im dritten Stock."
        ],
        "options": [
          "wohnen",
          "kommt",
          "kann",
          "heute"
        ],
        "accept": [
          "wohnen"
        ]
      },
      {
        "id": "A1.2-u5-l5:dialog",
        "kind": "dialog",
        "prompt": "Wie groß ist eure Wohnung?",
        "explain": [
          "Odgovor: Sie hat drei Zimmer.",
          "Passende Antwort: Sie hat drei Zimmer."
        ],
        "accept": [
          "Sie hat drei Zimmer."
        ],
        "options": [
          "Sie hat drei Zimmer.",
          "Neben dem Wohnzimmer.",
          "Im Wohnzimmer.",
          "Ich habe drei Bücher."
        ]
      }
    ]
  },
  {
    "id": "A1.2-u5-test",
    "title": [
      "Test celine",
      "Einheitstest"
    ],
    "type": "unit",
    "level": "A1.2",
    "items": [
      {
        "id": "A1.2-u5-test:q1",
        "kind": "fill",
        "prompt": "Die _____ ist neben dem Wohnzimmer.",
        "explain": [
          "Tačan izraz: Die Küche ist neben dem Wohnzimmer.",
          "Richtig: Die Küche ist neben dem Wohnzimmer."
        ],
        "options": [
          "Küche",
          "machen",
          "gehen",
          "haben"
        ],
        "accept": [
          "Küche"
        ]
      },
      {
        "id": "A1.2-u5-test:q2",
        "kind": "dialog",
        "prompt": "Wo ist die Küche?",
        "explain": [
          "Odgovor: Neben dem Wohnzimmer.",
          "Passende Antwort: Neben dem Wohnzimmer."
        ],
        "accept": [
          "Neben dem Wohnzimmer."
        ],
        "options": [
          "Neben dem Wohnzimmer.",
          "Im Wohnzimmer.",
          "Ich habe drei Bücher.",
          "Das ist mein Zimmer."
        ]
      },
      {
        "id": "A1.2-u5-test:q3",
        "kind": "fill",
        "prompt": "Das _____ steht im Wohnzimmer.",
        "explain": [
          "Tačan izraz: Das Sofa steht im Wohnzimmer.",
          "Richtig: Das Sofa steht im Wohnzimmer."
        ],
        "options": [
          "Sofa",
          "gehen",
          "haben",
          "kommt"
        ],
        "accept": [
          "Sofa"
        ]
      },
      {
        "id": "A1.2-u5-test:q4",
        "kind": "dialog",
        "prompt": "Wo steht das Sofa?",
        "explain": [
          "Odgovor: Im Wohnzimmer.",
          "Passende Antwort: Im Wohnzimmer."
        ],
        "accept": [
          "Im Wohnzimmer."
        ],
        "options": [
          "Im Wohnzimmer.",
          "Neben dem Wohnzimmer.",
          "Ich habe drei Bücher.",
          "Das ist mein Zimmer."
        ]
      },
      {
        "id": "A1.2-u5-test:q5",
        "kind": "fill",
        "prompt": "_____ stehen zwei Stühle.",
        "explain": [
          "Tačan izraz: Hier stehen zwei Stühle.",
          "Richtig: Hier stehen zwei Stühle."
        ],
        "options": [
          "Hier",
          "haben",
          "kommt",
          "kann"
        ],
        "accept": [
          "Hier"
        ]
      },
      {
        "id": "A1.2-u5-test:q6",
        "kind": "dialog",
        "prompt": "Wie viele Bücher hast du?",
        "explain": [
          "Odgovor: Ich habe drei Bücher.",
          "Passende Antwort: Ich habe drei Bücher."
        ],
        "accept": [
          "Ich habe drei Bücher."
        ],
        "options": [
          "Ich habe drei Bücher.",
          "Neben dem Wohnzimmer.",
          "Im Wohnzimmer.",
          "Das ist mein Zimmer."
        ]
      },
      {
        "id": "A1.2-u5-test:q7",
        "kind": "fill",
        "prompt": "Das ist _____ Zimmer.",
        "explain": [
          "Tačan izraz: Das ist mein Zimmer.",
          "Richtig: Das ist mein Zimmer."
        ],
        "options": [
          "mein",
          "kommt",
          "kann",
          "heute"
        ],
        "accept": [
          "mein"
        ]
      },
      {
        "id": "A1.2-u5-test:q8",
        "kind": "dialog",
        "prompt": "Wessen Zimmer ist das?",
        "explain": [
          "Odgovor: Das ist mein Zimmer.",
          "Passende Antwort: Das ist mein Zimmer."
        ],
        "accept": [
          "Das ist mein Zimmer."
        ],
        "options": [
          "Das ist mein Zimmer.",
          "Neben dem Wohnzimmer.",
          "Im Wohnzimmer.",
          "Ich habe drei Bücher."
        ]
      },
      {
        "id": "A1.2-u5-test:q9",
        "kind": "fill",
        "prompt": "Unsere _____ hat drei Zimmer.",
        "explain": [
          "Tačan izraz: Unsere Wohnung hat drei Zimmer.",
          "Richtig: Unsere Wohnung hat drei Zimmer."
        ],
        "options": [
          "Wohnung",
          "kann",
          "heute",
          "sehr"
        ],
        "accept": [
          "Wohnung"
        ]
      },
      {
        "id": "A1.2-u5-test:q10",
        "kind": "dialog",
        "prompt": "Wie groß ist eure Wohnung?",
        "explain": [
          "Odgovor: Sie hat drei Zimmer.",
          "Passende Antwort: Sie hat drei Zimmer."
        ],
        "accept": [
          "Sie hat drei Zimmer."
        ],
        "options": [
          "Sie hat drei Zimmer.",
          "Neben dem Wohnzimmer.",
          "Im Wohnzimmer.",
          "Ich habe drei Bücher."
        ]
      }
    ]
  },
  {
    "id": "A1.2-u6-l1",
    "title": [
      "Satnica",
      "Uhrzeiten"
    ],
    "type": "lesson",
    "level": "A1.2",
    "intro": [
      "Vežba: Satnica",
      "Übung: Uhrzeiten"
    ],
    "example": "Der Zug fährt um halb neun.",
    "items": [
      {
        "id": "A1.2-u6-l1:order1",
        "kind": "order",
        "prompt": "Voz polazi u pola devet.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Der",
          "Zug",
          "fährt",
          "um",
          "halb",
          "neun"
        ],
        "accept": [
          "Der Zug fährt um halb neun."
        ]
      },
      {
        "id": "A1.2-u6-l1:translate1",
        "kind": "translate",
        "prompt": "Voz polazi u pola devet.",
        "explain": [
          "Jedan prirodan prevod: Der Zug fährt um halb neun.",
          "Eine natürliche Übersetzung: Der Zug fährt um halb neun."
        ],
        "accept": [
          "Der Zug fährt um halb neun."
        ]
      },
      {
        "id": "A1.2-u6-l1:fill1",
        "kind": "fill",
        "prompt": "Der Zug _____ um halb neun.",
        "explain": [
          "Tačan izraz: Der Zug fährt um halb neun.",
          "Richtig: Der Zug fährt um halb neun."
        ],
        "options": [
          "fährt",
          "machen",
          "gehen",
          "haben"
        ],
        "accept": [
          "fährt"
        ]
      },
      {
        "id": "A1.2-u6-l1:order2",
        "kind": "order",
        "prompt": "Tri i petnaest je.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Es",
          "ist",
          "Viertel",
          "nach",
          "drei"
        ],
        "accept": [
          "Es ist Viertel nach drei."
        ]
      },
      {
        "id": "A1.2-u6-l1:translate2",
        "kind": "translate",
        "prompt": "Tri i petnaest je.",
        "explain": [
          "Jedan prirodan prevod: Es ist Viertel nach drei.",
          "Eine natürliche Übersetzung: Es ist Viertel nach drei."
        ],
        "accept": [
          "Es ist Viertel nach drei."
        ]
      },
      {
        "id": "A1.2-u6-l1:fill2",
        "kind": "fill",
        "prompt": "Es ist _____ nach drei.",
        "explain": [
          "Tačan izraz: Es ist Viertel nach drei.",
          "Richtig: Es ist Viertel nach drei."
        ],
        "options": [
          "Viertel",
          "haben",
          "kommt",
          "kann"
        ],
        "accept": [
          "Viertel"
        ]
      },
      {
        "id": "A1.2-u6-l1:order3",
        "kind": "order",
        "prompt": "Kurs počinje u deset.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Der",
          "Kurs",
          "beginnt",
          "um",
          "zehn",
          "Uhr"
        ],
        "accept": [
          "Der Kurs beginnt um zehn Uhr."
        ]
      },
      {
        "id": "A1.2-u6-l1:translate3",
        "kind": "translate",
        "prompt": "Kurs počinje u deset.",
        "explain": [
          "Jedan prirodan prevod: Der Kurs beginnt um zehn Uhr.",
          "Eine natürliche Übersetzung: Der Kurs beginnt um zehn Uhr."
        ],
        "accept": [
          "Der Kurs beginnt um zehn Uhr."
        ]
      },
      {
        "id": "A1.2-u6-l1:fill3",
        "kind": "fill",
        "prompt": "Der _____ beginnt um zehn Uhr.",
        "explain": [
          "Tačan izraz: Der Kurs beginnt um zehn Uhr.",
          "Richtig: Der Kurs beginnt um zehn Uhr."
        ],
        "options": [
          "Kurs",
          "kann",
          "heute",
          "sehr"
        ],
        "accept": [
          "Kurs"
        ]
      },
      {
        "id": "A1.2-u6-l1:dialog",
        "kind": "dialog",
        "prompt": "Wann beginnt der Kurs?",
        "explain": [
          "Odgovor: Um zehn Uhr.",
          "Passende Antwort: Um zehn Uhr."
        ],
        "accept": [
          "Um zehn Uhr."
        ],
        "options": [
          "Um zehn Uhr.",
          "Im Juni.",
          "Ja, um elf Uhr.",
          "Ja, auf Mittwoch."
        ]
      }
    ]
  },
  {
    "id": "A1.2-u6-l2",
    "title": [
      "Datumi",
      "Datum"
    ],
    "type": "lesson",
    "level": "A1.2",
    "intro": [
      "Vežba: Datumi",
      "Übung: Datum"
    ],
    "example": "Heute ist der dritte Mai.",
    "items": [
      {
        "id": "A1.2-u6-l2:order1",
        "kind": "order",
        "prompt": "Danas je treći maj.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Heute",
          "ist",
          "der",
          "dritte",
          "Mai"
        ],
        "accept": [
          "Heute ist der dritte Mai."
        ]
      },
      {
        "id": "A1.2-u6-l2:translate1",
        "kind": "translate",
        "prompt": "Danas je treći maj.",
        "explain": [
          "Jedan prirodan prevod: Heute ist der dritte Mai.",
          "Eine natürliche Übersetzung: Heute ist der dritte Mai."
        ],
        "accept": [
          "Heute ist der dritte Mai."
        ]
      },
      {
        "id": "A1.2-u6-l2:fill1",
        "kind": "fill",
        "prompt": "Heute ist der _____ Mai.",
        "explain": [
          "Tačan izraz: Heute ist der dritte Mai.",
          "Richtig: Heute ist der dritte Mai."
        ],
        "options": [
          "dritte",
          "gehen",
          "haben",
          "kommt"
        ],
        "accept": [
          "dritte"
        ]
      },
      {
        "id": "A1.2-u6-l2:order2",
        "kind": "order",
        "prompt": "Moj rođendan je u junu.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Mein",
          "Geburtstag",
          "ist",
          "im",
          "Juni"
        ],
        "accept": [
          "Mein Geburtstag ist im Juni."
        ]
      },
      {
        "id": "A1.2-u6-l2:translate2",
        "kind": "translate",
        "prompt": "Moj rođendan je u junu.",
        "explain": [
          "Jedan prirodan prevod: Mein Geburtstag ist im Juni.",
          "Eine natürliche Übersetzung: Mein Geburtstag ist im Juni."
        ],
        "accept": [
          "Mein Geburtstag ist im Juni."
        ]
      },
      {
        "id": "A1.2-u6-l2:fill2",
        "kind": "fill",
        "prompt": "_____ Geburtstag ist im Juni.",
        "explain": [
          "Tačan izraz: Mein Geburtstag ist im Juni.",
          "Richtig: Mein Geburtstag ist im Juni."
        ],
        "options": [
          "Mein",
          "kommt",
          "kann",
          "heute"
        ],
        "accept": [
          "Mein"
        ]
      },
      {
        "id": "A1.2-u6-l2:order3",
        "kind": "order",
        "prompt": "Termin je u ponedeljak.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Der",
          "Termin",
          "ist",
          "am",
          "Montag"
        ],
        "accept": [
          "Der Termin ist am Montag."
        ]
      },
      {
        "id": "A1.2-u6-l2:translate3",
        "kind": "translate",
        "prompt": "Termin je u ponedeljak.",
        "explain": [
          "Jedan prirodan prevod: Der Termin ist am Montag.",
          "Eine natürliche Übersetzung: Der Termin ist am Montag."
        ],
        "accept": [
          "Der Termin ist am Montag."
        ]
      },
      {
        "id": "A1.2-u6-l2:fill3",
        "kind": "fill",
        "prompt": "Der _____ ist am Montag.",
        "explain": [
          "Tačan izraz: Der Termin ist am Montag.",
          "Richtig: Der Termin ist am Montag."
        ],
        "options": [
          "Termin",
          "machen",
          "gehen",
          "haben"
        ],
        "accept": [
          "Termin"
        ]
      },
      {
        "id": "A1.2-u6-l2:dialog",
        "kind": "dialog",
        "prompt": "Wann hast du Geburtstag?",
        "explain": [
          "Odgovor: Im Juni.",
          "Passende Antwort: Im Juni."
        ],
        "accept": [
          "Im Juni."
        ],
        "options": [
          "Im Juni.",
          "Um zehn Uhr.",
          "Ja, um elf Uhr.",
          "Ja, auf Mittwoch."
        ]
      }
    ]
  },
  {
    "id": "A1.2-u6-l3",
    "title": [
      "Zakazivanje",
      "Termin vereinbaren"
    ],
    "type": "lesson",
    "level": "A1.2",
    "intro": [
      "Vežba: Zakazivanje",
      "Übung: Termin vereinbaren"
    ],
    "example": "Ich möchte einen Termin vereinbaren.",
    "items": [
      {
        "id": "A1.2-u6-l3:order1",
        "kind": "order",
        "prompt": "Želim da zakažem termin.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Ich",
          "möchte",
          "einen",
          "Termin",
          "vereinbaren"
        ],
        "accept": [
          "Ich möchte einen Termin vereinbaren."
        ]
      },
      {
        "id": "A1.2-u6-l3:translate1",
        "kind": "translate",
        "prompt": "Želim da zakažem termin.",
        "explain": [
          "Jedan prirodan prevod: Ich möchte einen Termin vereinbaren.",
          "Eine natürliche Übersetzung: Ich möchte einen Termin vereinbaren."
        ],
        "accept": [
          "Ich möchte einen Termin vereinbaren."
        ]
      },
      {
        "id": "A1.2-u6-l3:fill1",
        "kind": "fill",
        "prompt": "Ich _____ einen Termin vereinbaren.",
        "explain": [
          "Tačan izraz: Ich möchte einen Termin vereinbaren.",
          "Richtig: Ich möchte einen Termin vereinbaren."
        ],
        "options": [
          "möchte",
          "haben",
          "kommt",
          "kann"
        ],
        "accept": [
          "möchte"
        ]
      },
      {
        "id": "A1.2-u6-l3:order2",
        "kind": "order",
        "prompt": "Imate li vremena u petak?",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Haben",
          "Sie",
          "am",
          "Freitag",
          "Zeit"
        ],
        "accept": [
          "Haben Sie am Freitag Zeit?"
        ]
      },
      {
        "id": "A1.2-u6-l3:translate2",
        "kind": "translate",
        "prompt": "Imate li vremena u petak?",
        "explain": [
          "Jedan prirodan prevod: Haben Sie am Freitag Zeit?",
          "Eine natürliche Übersetzung: Haben Sie am Freitag Zeit?"
        ],
        "accept": [
          "Haben Sie am Freitag Zeit?"
        ]
      },
      {
        "id": "A1.2-u6-l3:fill2",
        "kind": "fill",
        "prompt": "_____ Sie am Freitag Zeit?",
        "explain": [
          "Tačan izraz: Haben Sie am Freitag Zeit?",
          "Richtig: Haben Sie am Freitag Zeit?"
        ],
        "options": [
          "Haben",
          "kann",
          "heute",
          "sehr"
        ],
        "accept": [
          "Haben"
        ]
      },
      {
        "id": "A1.2-u6-l3:order3",
        "kind": "order",
        "prompt": "Sledeći termin je u jedanaest.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Der",
          "nächste",
          "Termin",
          "ist",
          "um",
          "elf",
          "Uhr"
        ],
        "accept": [
          "Der nächste Termin ist um elf Uhr."
        ]
      },
      {
        "id": "A1.2-u6-l3:translate3",
        "kind": "translate",
        "prompt": "Sledeći termin je u jedanaest.",
        "explain": [
          "Jedan prirodan prevod: Der nächste Termin ist um elf Uhr.",
          "Eine natürliche Übersetzung: Der nächste Termin ist um elf Uhr."
        ],
        "accept": [
          "Der nächste Termin ist um elf Uhr."
        ]
      },
      {
        "id": "A1.2-u6-l3:fill3",
        "kind": "fill",
        "prompt": "Der _____ Termin ist um elf Uhr.",
        "explain": [
          "Tačan izraz: Der nächste Termin ist um elf Uhr.",
          "Richtig: Der nächste Termin ist um elf Uhr."
        ],
        "options": [
          "nächste",
          "gehen",
          "haben",
          "kommt"
        ],
        "accept": [
          "nächste"
        ]
      },
      {
        "id": "A1.2-u6-l3:dialog",
        "kind": "dialog",
        "prompt": "Haben Sie morgen Zeit?",
        "explain": [
          "Odgovor: Ja, um elf Uhr.",
          "Passende Antwort: Ja, um elf Uhr."
        ],
        "accept": [
          "Ja, um elf Uhr."
        ],
        "options": [
          "Ja, um elf Uhr.",
          "Um zehn Uhr.",
          "Im Juni.",
          "Ja, auf Mittwoch."
        ]
      }
    ]
  },
  {
    "id": "A1.2-u6-l4",
    "title": [
      "Pomeranje termina",
      "Termin verschieben"
    ],
    "type": "lesson",
    "level": "A1.2",
    "intro": [
      "Vežba: Pomeranje termina",
      "Übung: Termin verschieben"
    ],
    "example": "Ich muss den Termin verschieben.",
    "items": [
      {
        "id": "A1.2-u6-l4:order1",
        "kind": "order",
        "prompt": "Moram da pomerim termin.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Ich",
          "muss",
          "den",
          "Termin",
          "verschieben"
        ],
        "accept": [
          "Ich muss den Termin verschieben."
        ]
      },
      {
        "id": "A1.2-u6-l4:translate1",
        "kind": "translate",
        "prompt": "Moram da pomerim termin.",
        "explain": [
          "Jedan prirodan prevod: Ich muss den Termin verschieben.",
          "Eine natürliche Übersetzung: Ich muss den Termin verschieben."
        ],
        "accept": [
          "Ich muss den Termin verschieben."
        ]
      },
      {
        "id": "A1.2-u6-l4:fill1",
        "kind": "fill",
        "prompt": "Ich _____ den Termin verschieben.",
        "explain": [
          "Tačan izraz: Ich muss den Termin verschieben.",
          "Richtig: Ich muss den Termin verschieben."
        ],
        "options": [
          "muss",
          "kommt",
          "kann",
          "heute"
        ],
        "accept": [
          "muss"
        ]
      },
      {
        "id": "A1.2-u6-l4:order2",
        "kind": "order",
        "prompt": "Možemo li se naći kasnije?",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Können",
          "wir",
          "uns",
          "später",
          "treffen"
        ],
        "accept": [
          "Können wir uns später treffen?"
        ]
      },
      {
        "id": "A1.2-u6-l4:translate2",
        "kind": "translate",
        "prompt": "Možemo li se naći kasnije?",
        "explain": [
          "Jedan prirodan prevod: Können wir uns später treffen?",
          "Eine natürliche Übersetzung: Können wir uns später treffen?"
        ],
        "accept": [
          "Können wir uns später treffen?"
        ]
      },
      {
        "id": "A1.2-u6-l4:fill2",
        "kind": "fill",
        "prompt": "_____ wir uns später treffen?",
        "explain": [
          "Tačan izraz: Können wir uns später treffen?",
          "Richtig: Können wir uns später treffen?"
        ],
        "options": [
          "Können",
          "machen",
          "gehen",
          "haben"
        ],
        "accept": [
          "Können"
        ]
      },
      {
        "id": "A1.2-u6-l4:order3",
        "kind": "order",
        "prompt": "U utorak ne mogu.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Am",
          "Dienstag",
          "kann",
          "ich",
          "nicht"
        ],
        "accept": [
          "Am Dienstag kann ich nicht."
        ]
      },
      {
        "id": "A1.2-u6-l4:translate3",
        "kind": "translate",
        "prompt": "U utorak ne mogu.",
        "explain": [
          "Jedan prirodan prevod: Am Dienstag kann ich nicht.",
          "Eine natürliche Übersetzung: Am Dienstag kann ich nicht."
        ],
        "accept": [
          "Am Dienstag kann ich nicht."
        ]
      },
      {
        "id": "A1.2-u6-l4:fill3",
        "kind": "fill",
        "prompt": "Am _____ kann ich nicht.",
        "explain": [
          "Tačan izraz: Am Dienstag kann ich nicht.",
          "Richtig: Am Dienstag kann ich nicht."
        ],
        "options": [
          "Dienstag",
          "haben",
          "kommt",
          "kann"
        ],
        "accept": [
          "Dienstag"
        ]
      },
      {
        "id": "A1.2-u6-l4:dialog",
        "kind": "dialog",
        "prompt": "Können wir den Termin verschieben?",
        "explain": [
          "Odgovor: Ja, auf Mittwoch.",
          "Passende Antwort: Ja, auf Mittwoch."
        ],
        "accept": [
          "Ja, auf Mittwoch."
        ],
        "options": [
          "Ja, auf Mittwoch.",
          "Um zehn Uhr.",
          "Im Juni.",
          "Ja, um elf Uhr."
        ]
      }
    ]
  },
  {
    "id": "A1.2-u6-l5",
    "title": [
      "Potvrda",
      "Bestätigung"
    ],
    "type": "lesson",
    "level": "A1.2",
    "intro": [
      "Vežba: Potvrda",
      "Übung: Bestätigung"
    ],
    "example": "Ich bestätige unseren Termin.",
    "items": [
      {
        "id": "A1.2-u6-l5:order1",
        "kind": "order",
        "prompt": "Potvrđujem naš termin.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Ich",
          "bestätige",
          "unseren",
          "Termin"
        ],
        "accept": [
          "Ich bestätige unseren Termin."
        ]
      },
      {
        "id": "A1.2-u6-l5:translate1",
        "kind": "translate",
        "prompt": "Potvrđujem naš termin.",
        "explain": [
          "Jedan prirodan prevod: Ich bestätige unseren Termin.",
          "Eine natürliche Übersetzung: Ich bestätige unseren Termin."
        ],
        "accept": [
          "Ich bestätige unseren Termin."
        ]
      },
      {
        "id": "A1.2-u6-l5:fill1",
        "kind": "fill",
        "prompt": "Ich _____ unseren Termin.",
        "explain": [
          "Tačan izraz: Ich bestätige unseren Termin.",
          "Richtig: Ich bestätige unseren Termin."
        ],
        "options": [
          "bestätige",
          "kann",
          "heute",
          "sehr"
        ],
        "accept": [
          "bestätige"
        ]
      },
      {
        "id": "A1.2-u6-l5:order2",
        "kind": "order",
        "prompt": "Poslaću vam mejl.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Ich",
          "schicke",
          "Ihnen",
          "eine",
          "E-Mail"
        ],
        "accept": [
          "Ich schicke Ihnen eine E-Mail."
        ]
      },
      {
        "id": "A1.2-u6-l5:translate2",
        "kind": "translate",
        "prompt": "Poslaću vam mejl.",
        "explain": [
          "Jedan prirodan prevod: Ich schicke Ihnen eine E-Mail.",
          "Eine natürliche Übersetzung: Ich schicke Ihnen eine E-Mail."
        ],
        "accept": [
          "Ich schicke Ihnen eine E-Mail."
        ]
      },
      {
        "id": "A1.2-u6-l5:fill2",
        "kind": "fill",
        "prompt": "Ich _____ Ihnen eine E-Mail.",
        "explain": [
          "Tačan izraz: Ich schicke Ihnen eine E-Mail.",
          "Richtig: Ich schicke Ihnen eine E-Mail."
        ],
        "options": [
          "schicke",
          "gehen",
          "haben",
          "kommt"
        ],
        "accept": [
          "schicke"
        ]
      },
      {
        "id": "A1.2-u6-l5:order3",
        "kind": "order",
        "prompt": "Hvala na vašoj poruci.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Vielen",
          "Dank",
          "für",
          "Ihre",
          "Nachricht"
        ],
        "accept": [
          "Vielen Dank für Ihre Nachricht."
        ]
      },
      {
        "id": "A1.2-u6-l5:translate3",
        "kind": "translate",
        "prompt": "Hvala na vašoj poruci.",
        "explain": [
          "Jedan prirodan prevod: Vielen Dank für Ihre Nachricht.",
          "Eine natürliche Übersetzung: Vielen Dank für Ihre Nachricht."
        ],
        "accept": [
          "Vielen Dank für Ihre Nachricht."
        ]
      },
      {
        "id": "A1.2-u6-l5:fill3",
        "kind": "fill",
        "prompt": "_____ Dank für Ihre Nachricht.",
        "explain": [
          "Tačan izraz: Vielen Dank für Ihre Nachricht.",
          "Richtig: Vielen Dank für Ihre Nachricht."
        ],
        "options": [
          "Vielen",
          "kommt",
          "kann",
          "heute"
        ],
        "accept": [
          "Vielen"
        ]
      },
      {
        "id": "A1.2-u6-l5:dialog",
        "kind": "dialog",
        "prompt": "Ist der Termin bestätigt?",
        "explain": [
          "Odgovor: Ja, der Termin ist bestätigt.",
          "Passende Antwort: Ja, der Termin ist bestätigt."
        ],
        "accept": [
          "Ja, der Termin ist bestätigt."
        ],
        "options": [
          "Ja, der Termin ist bestätigt.",
          "Um zehn Uhr.",
          "Im Juni.",
          "Ja, um elf Uhr."
        ]
      }
    ]
  },
  {
    "id": "A1.2-u6-test",
    "title": [
      "Test celine",
      "Einheitstest"
    ],
    "type": "unit",
    "level": "A1.2",
    "items": [
      {
        "id": "A1.2-u6-test:q1",
        "kind": "fill",
        "prompt": "Der Zug _____ um halb neun.",
        "explain": [
          "Tačan izraz: Der Zug fährt um halb neun.",
          "Richtig: Der Zug fährt um halb neun."
        ],
        "options": [
          "fährt",
          "machen",
          "gehen",
          "haben"
        ],
        "accept": [
          "fährt"
        ]
      },
      {
        "id": "A1.2-u6-test:q2",
        "kind": "dialog",
        "prompt": "Wann beginnt der Kurs?",
        "explain": [
          "Odgovor: Um zehn Uhr.",
          "Passende Antwort: Um zehn Uhr."
        ],
        "accept": [
          "Um zehn Uhr."
        ],
        "options": [
          "Um zehn Uhr.",
          "Im Juni.",
          "Ja, um elf Uhr.",
          "Ja, auf Mittwoch."
        ]
      },
      {
        "id": "A1.2-u6-test:q3",
        "kind": "fill",
        "prompt": "Heute ist der _____ Mai.",
        "explain": [
          "Tačan izraz: Heute ist der dritte Mai.",
          "Richtig: Heute ist der dritte Mai."
        ],
        "options": [
          "dritte",
          "gehen",
          "haben",
          "kommt"
        ],
        "accept": [
          "dritte"
        ]
      },
      {
        "id": "A1.2-u6-test:q4",
        "kind": "dialog",
        "prompt": "Wann hast du Geburtstag?",
        "explain": [
          "Odgovor: Im Juni.",
          "Passende Antwort: Im Juni."
        ],
        "accept": [
          "Im Juni."
        ],
        "options": [
          "Im Juni.",
          "Um zehn Uhr.",
          "Ja, um elf Uhr.",
          "Ja, auf Mittwoch."
        ]
      },
      {
        "id": "A1.2-u6-test:q5",
        "kind": "fill",
        "prompt": "Ich _____ einen Termin vereinbaren.",
        "explain": [
          "Tačan izraz: Ich möchte einen Termin vereinbaren.",
          "Richtig: Ich möchte einen Termin vereinbaren."
        ],
        "options": [
          "möchte",
          "haben",
          "kommt",
          "kann"
        ],
        "accept": [
          "möchte"
        ]
      },
      {
        "id": "A1.2-u6-test:q6",
        "kind": "dialog",
        "prompt": "Haben Sie morgen Zeit?",
        "explain": [
          "Odgovor: Ja, um elf Uhr.",
          "Passende Antwort: Ja, um elf Uhr."
        ],
        "accept": [
          "Ja, um elf Uhr."
        ],
        "options": [
          "Ja, um elf Uhr.",
          "Um zehn Uhr.",
          "Im Juni.",
          "Ja, auf Mittwoch."
        ]
      },
      {
        "id": "A1.2-u6-test:q7",
        "kind": "fill",
        "prompt": "Ich _____ den Termin verschieben.",
        "explain": [
          "Tačan izraz: Ich muss den Termin verschieben.",
          "Richtig: Ich muss den Termin verschieben."
        ],
        "options": [
          "muss",
          "kommt",
          "kann",
          "heute"
        ],
        "accept": [
          "muss"
        ]
      },
      {
        "id": "A1.2-u6-test:q8",
        "kind": "dialog",
        "prompt": "Können wir den Termin verschieben?",
        "explain": [
          "Odgovor: Ja, auf Mittwoch.",
          "Passende Antwort: Ja, auf Mittwoch."
        ],
        "accept": [
          "Ja, auf Mittwoch."
        ],
        "options": [
          "Ja, auf Mittwoch.",
          "Um zehn Uhr.",
          "Im Juni.",
          "Ja, um elf Uhr."
        ]
      },
      {
        "id": "A1.2-u6-test:q9",
        "kind": "fill",
        "prompt": "Ich _____ unseren Termin.",
        "explain": [
          "Tačan izraz: Ich bestätige unseren Termin.",
          "Richtig: Ich bestätige unseren Termin."
        ],
        "options": [
          "bestätige",
          "kann",
          "heute",
          "sehr"
        ],
        "accept": [
          "bestätige"
        ]
      },
      {
        "id": "A1.2-u6-test:q10",
        "kind": "dialog",
        "prompt": "Ist der Termin bestätigt?",
        "explain": [
          "Odgovor: Ja, der Termin ist bestätigt.",
          "Passende Antwort: Ja, der Termin ist bestätigt."
        ],
        "accept": [
          "Ja, der Termin ist bestätigt."
        ],
        "options": [
          "Ja, der Termin ist bestätigt.",
          "Um zehn Uhr.",
          "Im Juni.",
          "Ja, um elf Uhr."
        ]
      }
    ]
  },
  {
    "id": "A1.2-u7-l1",
    "title": [
      "Mesta u gradu",
      "Orte in der Stadt"
    ],
    "type": "lesson",
    "level": "A1.2",
    "intro": [
      "Vežba: Mesta u gradu",
      "Übung: Orte in der Stadt"
    ],
    "example": "Die Apotheke ist neben der Bank.",
    "items": [
      {
        "id": "A1.2-u7-l1:order1",
        "kind": "order",
        "prompt": "Apoteka je pored banke.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Die",
          "Apotheke",
          "ist",
          "neben",
          "der",
          "Bank"
        ],
        "accept": [
          "Die Apotheke ist neben der Bank."
        ]
      },
      {
        "id": "A1.2-u7-l1:translate1",
        "kind": "translate",
        "prompt": "Apoteka je pored banke.",
        "explain": [
          "Jedan prirodan prevod: Die Apotheke ist neben der Bank.",
          "Eine natürliche Übersetzung: Die Apotheke ist neben der Bank."
        ],
        "accept": [
          "Die Apotheke ist neben der Bank."
        ]
      },
      {
        "id": "A1.2-u7-l1:fill1",
        "kind": "fill",
        "prompt": "Die _____ ist neben der Bank.",
        "explain": [
          "Tačan izraz: Die Apotheke ist neben der Bank.",
          "Richtig: Die Apotheke ist neben der Bank."
        ],
        "options": [
          "Apotheke",
          "machen",
          "gehen",
          "haben"
        ],
        "accept": [
          "Apotheke"
        ]
      },
      {
        "id": "A1.2-u7-l1:order2",
        "kind": "order",
        "prompt": "Stanica se nalazi u centru.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Der",
          "Bahnhof",
          "liegt",
          "im",
          "Zentrum"
        ],
        "accept": [
          "Der Bahnhof liegt im Zentrum."
        ]
      },
      {
        "id": "A1.2-u7-l1:translate2",
        "kind": "translate",
        "prompt": "Stanica se nalazi u centru.",
        "explain": [
          "Jedan prirodan prevod: Der Bahnhof liegt im Zentrum.",
          "Eine natürliche Übersetzung: Der Bahnhof liegt im Zentrum."
        ],
        "accept": [
          "Der Bahnhof liegt im Zentrum."
        ]
      },
      {
        "id": "A1.2-u7-l1:fill2",
        "kind": "fill",
        "prompt": "Der _____ liegt im Zentrum.",
        "explain": [
          "Tačan izraz: Der Bahnhof liegt im Zentrum.",
          "Richtig: Der Bahnhof liegt im Zentrum."
        ],
        "options": [
          "Bahnhof",
          "haben",
          "kommt",
          "kann"
        ],
        "accept": [
          "Bahnhof"
        ]
      },
      {
        "id": "A1.2-u7-l1:order3",
        "kind": "order",
        "prompt": "Opština nije daleko.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Das",
          "Rathaus",
          "ist",
          "nicht",
          "weit"
        ],
        "accept": [
          "Das Rathaus ist nicht weit."
        ]
      },
      {
        "id": "A1.2-u7-l1:translate3",
        "kind": "translate",
        "prompt": "Opština nije daleko.",
        "explain": [
          "Jedan prirodan prevod: Das Rathaus ist nicht weit.",
          "Eine natürliche Übersetzung: Das Rathaus ist nicht weit."
        ],
        "accept": [
          "Das Rathaus ist nicht weit."
        ]
      },
      {
        "id": "A1.2-u7-l1:fill3",
        "kind": "fill",
        "prompt": "Das _____ ist nicht weit.",
        "explain": [
          "Tačan izraz: Das Rathaus ist nicht weit.",
          "Richtig: Das Rathaus ist nicht weit."
        ],
        "options": [
          "Rathaus",
          "kann",
          "heute",
          "sehr"
        ],
        "accept": [
          "Rathaus"
        ]
      },
      {
        "id": "A1.2-u7-l1:dialog",
        "kind": "dialog",
        "prompt": "Wo ist die Apotheke?",
        "explain": [
          "Odgovor: Neben der Bank.",
          "Passende Antwort: Neben der Bank."
        ],
        "accept": [
          "Neben der Bank."
        ],
        "options": [
          "Neben der Bank.",
          "Ja, an der Kreuzung.",
          "Hinter der Schule.",
          "Gehen Sie bis zur Ampel."
        ]
      }
    ]
  },
  {
    "id": "A1.2-u7-l2",
    "title": [
      "Pravci",
      "Richtungen"
    ],
    "type": "lesson",
    "level": "A1.2",
    "intro": [
      "Vežba: Pravci",
      "Übung: Richtungen"
    ],
    "example": "Gehen Sie bitte geradeaus.",
    "items": [
      {
        "id": "A1.2-u7-l2:order1",
        "kind": "order",
        "prompt": "Idite pravo, molim.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Gehen",
          "Sie",
          "bitte",
          "geradeaus"
        ],
        "accept": [
          "Gehen Sie bitte geradeaus."
        ]
      },
      {
        "id": "A1.2-u7-l2:translate1",
        "kind": "translate",
        "prompt": "Idite pravo, molim.",
        "explain": [
          "Jedan prirodan prevod: Gehen Sie bitte geradeaus.",
          "Eine natürliche Übersetzung: Gehen Sie bitte geradeaus."
        ],
        "accept": [
          "Gehen Sie bitte geradeaus."
        ]
      },
      {
        "id": "A1.2-u7-l2:fill1",
        "kind": "fill",
        "prompt": "_____ Sie bitte geradeaus.",
        "explain": [
          "Tačan izraz: Gehen Sie bitte geradeaus.",
          "Richtig: Gehen Sie bitte geradeaus."
        ],
        "options": [
          "Gehen",
          "gehen",
          "haben",
          "kommt"
        ],
        "accept": [
          "Gehen"
        ]
      },
      {
        "id": "A1.2-u7-l2:order2",
        "kind": "order",
        "prompt": "Skrenite levo.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Biegen",
          "Sie",
          "links",
          "ab"
        ],
        "accept": [
          "Biegen Sie links ab."
        ]
      },
      {
        "id": "A1.2-u7-l2:translate2",
        "kind": "translate",
        "prompt": "Skrenite levo.",
        "explain": [
          "Jedan prirodan prevod: Biegen Sie links ab.",
          "Eine natürliche Übersetzung: Biegen Sie links ab."
        ],
        "accept": [
          "Biegen Sie links ab."
        ]
      },
      {
        "id": "A1.2-u7-l2:fill2",
        "kind": "fill",
        "prompt": "_____ Sie links ab.",
        "explain": [
          "Tačan izraz: Biegen Sie links ab.",
          "Richtig: Biegen Sie links ab."
        ],
        "options": [
          "Biegen",
          "kommt",
          "kann",
          "heute"
        ],
        "accept": [
          "Biegen"
        ]
      },
      {
        "id": "A1.2-u7-l2:order3",
        "kind": "order",
        "prompt": "Škola je sa desne strane.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Die",
          "Schule",
          "ist",
          "auf",
          "der",
          "rechten",
          "Seite"
        ],
        "accept": [
          "Die Schule ist auf der rechten Seite."
        ]
      },
      {
        "id": "A1.2-u7-l2:translate3",
        "kind": "translate",
        "prompt": "Škola je sa desne strane.",
        "explain": [
          "Jedan prirodan prevod: Die Schule ist auf der rechten Seite.",
          "Eine natürliche Übersetzung: Die Schule ist auf der rechten Seite."
        ],
        "accept": [
          "Die Schule ist auf der rechten Seite."
        ]
      },
      {
        "id": "A1.2-u7-l2:fill3",
        "kind": "fill",
        "prompt": "Die _____ ist auf der rechten Seite.",
        "explain": [
          "Tačan izraz: Die Schule ist auf der rechten Seite.",
          "Richtig: Die Schule ist auf der rechten Seite."
        ],
        "options": [
          "Schule",
          "machen",
          "gehen",
          "haben"
        ],
        "accept": [
          "Schule"
        ]
      },
      {
        "id": "A1.2-u7-l2:dialog",
        "kind": "dialog",
        "prompt": "Muss ich links abbiegen?",
        "explain": [
          "Odgovor: Ja, an der Kreuzung.",
          "Passende Antwort: Ja, an der Kreuzung."
        ],
        "accept": [
          "Ja, an der Kreuzung."
        ],
        "options": [
          "Ja, an der Kreuzung.",
          "Neben der Bank.",
          "Hinter der Schule.",
          "Gehen Sie bis zur Ampel."
        ]
      }
    ]
  },
  {
    "id": "A1.2-u7-l3",
    "title": [
      "Osnovni predlozi",
      "Präpositionen"
    ],
    "type": "lesson",
    "level": "A1.2",
    "intro": [
      "Vežba: Osnovni predlozi",
      "Übung: Präpositionen"
    ],
    "example": "Ich stehe vor dem Haus.",
    "items": [
      {
        "id": "A1.2-u7-l3:order1",
        "kind": "order",
        "prompt": "Stojim ispred kuće.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Ich",
          "stehe",
          "vor",
          "dem",
          "Haus"
        ],
        "accept": [
          "Ich stehe vor dem Haus."
        ]
      },
      {
        "id": "A1.2-u7-l3:translate1",
        "kind": "translate",
        "prompt": "Stojim ispred kuće.",
        "explain": [
          "Jedan prirodan prevod: Ich stehe vor dem Haus.",
          "Eine natürliche Übersetzung: Ich stehe vor dem Haus."
        ],
        "accept": [
          "Ich stehe vor dem Haus."
        ]
      },
      {
        "id": "A1.2-u7-l3:fill1",
        "kind": "fill",
        "prompt": "Ich _____ vor dem Haus.",
        "explain": [
          "Tačan izraz: Ich stehe vor dem Haus.",
          "Richtig: Ich stehe vor dem Haus."
        ],
        "options": [
          "stehe",
          "haben",
          "kommt",
          "kann"
        ],
        "accept": [
          "stehe"
        ]
      },
      {
        "id": "A1.2-u7-l3:order2",
        "kind": "order",
        "prompt": "Park je iza škole.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Der",
          "Park",
          "ist",
          "hinter",
          "der",
          "Schule"
        ],
        "accept": [
          "Der Park ist hinter der Schule."
        ]
      },
      {
        "id": "A1.2-u7-l3:translate2",
        "kind": "translate",
        "prompt": "Park je iza škole.",
        "explain": [
          "Jedan prirodan prevod: Der Park ist hinter der Schule.",
          "Eine natürliche Übersetzung: Der Park ist hinter der Schule."
        ],
        "accept": [
          "Der Park ist hinter der Schule."
        ]
      },
      {
        "id": "A1.2-u7-l3:fill2",
        "kind": "fill",
        "prompt": "Der _____ ist hinter der Schule.",
        "explain": [
          "Tačan izraz: Der Park ist hinter der Schule.",
          "Richtig: Der Park ist hinter der Schule."
        ],
        "options": [
          "Park",
          "kann",
          "heute",
          "sehr"
        ],
        "accept": [
          "Park"
        ]
      },
      {
        "id": "A1.2-u7-l3:order3",
        "kind": "order",
        "prompt": "Banka je između dve prodavnice.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Die",
          "Bank",
          "ist",
          "zwischen",
          "zwei",
          "Geschäften"
        ],
        "accept": [
          "Die Bank ist zwischen zwei Geschäften."
        ]
      },
      {
        "id": "A1.2-u7-l3:translate3",
        "kind": "translate",
        "prompt": "Banka je između dve prodavnice.",
        "explain": [
          "Jedan prirodan prevod: Die Bank ist zwischen zwei Geschäften.",
          "Eine natürliche Übersetzung: Die Bank ist zwischen zwei Geschäften."
        ],
        "accept": [
          "Die Bank ist zwischen zwei Geschäften."
        ]
      },
      {
        "id": "A1.2-u7-l3:fill3",
        "kind": "fill",
        "prompt": "Die _____ ist zwischen zwei Geschäften.",
        "explain": [
          "Tačan izraz: Die Bank ist zwischen zwei Geschäften.",
          "Richtig: Die Bank ist zwischen zwei Geschäften."
        ],
        "options": [
          "Bank",
          "gehen",
          "haben",
          "kommt"
        ],
        "accept": [
          "Bank"
        ]
      },
      {
        "id": "A1.2-u7-l3:dialog",
        "kind": "dialog",
        "prompt": "Wo ist der Park?",
        "explain": [
          "Odgovor: Hinter der Schule.",
          "Passende Antwort: Hinter der Schule."
        ],
        "accept": [
          "Hinter der Schule."
        ],
        "options": [
          "Hinter der Schule.",
          "Neben der Bank.",
          "Ja, an der Kreuzung.",
          "Gehen Sie bis zur Ampel."
        ]
      }
    ]
  },
  {
    "id": "A1.2-u7-l4",
    "title": [
      "Uputstva na mapi",
      "Wegbeschreibung"
    ],
    "type": "lesson",
    "level": "A1.2",
    "intro": [
      "Vežba: Uputstva na mapi",
      "Übung: Wegbeschreibung"
    ],
    "example": "Gehen Sie bis zur Ampel.",
    "items": [
      {
        "id": "A1.2-u7-l4:order1",
        "kind": "order",
        "prompt": "Idite do semafora.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Gehen",
          "Sie",
          "bis",
          "zur",
          "Ampel"
        ],
        "accept": [
          "Gehen Sie bis zur Ampel."
        ]
      },
      {
        "id": "A1.2-u7-l4:translate1",
        "kind": "translate",
        "prompt": "Idite do semafora.",
        "explain": [
          "Jedan prirodan prevod: Gehen Sie bis zur Ampel.",
          "Eine natürliche Übersetzung: Gehen Sie bis zur Ampel."
        ],
        "accept": [
          "Gehen Sie bis zur Ampel."
        ]
      },
      {
        "id": "A1.2-u7-l4:fill1",
        "kind": "fill",
        "prompt": "_____ Sie bis zur Ampel.",
        "explain": [
          "Tačan izraz: Gehen Sie bis zur Ampel.",
          "Richtig: Gehen Sie bis zur Ampel."
        ],
        "options": [
          "Gehen",
          "kommt",
          "kann",
          "heute"
        ],
        "accept": [
          "Gehen"
        ]
      },
      {
        "id": "A1.2-u7-l4:order2",
        "kind": "order",
        "prompt": "Pređite ulicu.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Überqueren",
          "Sie",
          "die",
          "Straße"
        ],
        "accept": [
          "Überqueren Sie die Straße."
        ]
      },
      {
        "id": "A1.2-u7-l4:translate2",
        "kind": "translate",
        "prompt": "Pređite ulicu.",
        "explain": [
          "Jedan prirodan prevod: Überqueren Sie die Straße.",
          "Eine natürliche Übersetzung: Überqueren Sie die Straße."
        ],
        "accept": [
          "Überqueren Sie die Straße."
        ]
      },
      {
        "id": "A1.2-u7-l4:fill2",
        "kind": "fill",
        "prompt": "_____ Sie die Straße.",
        "explain": [
          "Tačan izraz: Überqueren Sie die Straße.",
          "Richtig: Überqueren Sie die Straße."
        ],
        "options": [
          "Überqueren",
          "machen",
          "gehen",
          "haben"
        ],
        "accept": [
          "Überqueren"
        ]
      },
      {
        "id": "A1.2-u7-l4:order3",
        "kind": "order",
        "prompt": "Skrenite u drugu ulicu desno.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Nehmen",
          "Sie",
          "die",
          "zweite",
          "Straße",
          "rechts"
        ],
        "accept": [
          "Nehmen Sie die zweite Straße rechts."
        ]
      },
      {
        "id": "A1.2-u7-l4:translate3",
        "kind": "translate",
        "prompt": "Skrenite u drugu ulicu desno.",
        "explain": [
          "Jedan prirodan prevod: Nehmen Sie die zweite Straße rechts.",
          "Eine natürliche Übersetzung: Nehmen Sie die zweite Straße rechts."
        ],
        "accept": [
          "Nehmen Sie die zweite Straße rechts."
        ]
      },
      {
        "id": "A1.2-u7-l4:fill3",
        "kind": "fill",
        "prompt": "_____ Sie die zweite Straße rechts.",
        "explain": [
          "Tačan izraz: Nehmen Sie die zweite Straße rechts.",
          "Richtig: Nehmen Sie die zweite Straße rechts."
        ],
        "options": [
          "Nehmen",
          "haben",
          "kommt",
          "kann"
        ],
        "accept": [
          "Nehmen"
        ]
      },
      {
        "id": "A1.2-u7-l4:dialog",
        "kind": "dialog",
        "prompt": "Wie komme ich zum Bahnhof?",
        "explain": [
          "Odgovor: Gehen Sie bis zur Ampel.",
          "Passende Antwort: Gehen Sie bis zur Ampel."
        ],
        "accept": [
          "Gehen Sie bis zur Ampel."
        ],
        "options": [
          "Gehen Sie bis zur Ampel.",
          "Neben der Bank.",
          "Ja, an der Kreuzung.",
          "Hinter der Schule."
        ]
      }
    ]
  },
  {
    "id": "A1.2-u7-l5",
    "title": [
      "Pitanje za put",
      "Nach dem Weg fragen"
    ],
    "type": "lesson",
    "level": "A1.2",
    "intro": [
      "Vežba: Pitanje za put",
      "Übung: Nach dem Weg fragen"
    ],
    "example": "Entschuldigung, wo ist der Bahnhof?",
    "items": [
      {
        "id": "A1.2-u7-l5:order1",
        "kind": "order",
        "prompt": "Izvinite, gde je stanica?",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Entschuldigung,",
          "wo",
          "ist",
          "der",
          "Bahnhof"
        ],
        "accept": [
          "Entschuldigung, wo ist der Bahnhof?"
        ]
      },
      {
        "id": "A1.2-u7-l5:translate1",
        "kind": "translate",
        "prompt": "Izvinite, gde je stanica?",
        "explain": [
          "Jedan prirodan prevod: Entschuldigung, wo ist der Bahnhof?",
          "Eine natürliche Übersetzung: Entschuldigung, wo ist der Bahnhof?"
        ],
        "accept": [
          "Entschuldigung, wo ist der Bahnhof?"
        ]
      },
      {
        "id": "A1.2-u7-l5:fill1",
        "kind": "fill",
        "prompt": "_____ wo ist der Bahnhof?",
        "explain": [
          "Tačan izraz: Entschuldigung, wo ist der Bahnhof?",
          "Richtig: Entschuldigung, wo ist der Bahnhof?"
        ],
        "options": [
          "Entschuldigung,",
          "kann",
          "heute",
          "sehr"
        ],
        "accept": [
          "Entschuldigung,"
        ]
      },
      {
        "id": "A1.2-u7-l5:order2",
        "kind": "order",
        "prompt": "Da li je daleko peške?",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Ist",
          "es",
          "weit",
          "zu",
          "Fuß"
        ],
        "accept": [
          "Ist es weit zu Fuß?"
        ]
      },
      {
        "id": "A1.2-u7-l5:translate2",
        "kind": "translate",
        "prompt": "Da li je daleko peške?",
        "explain": [
          "Jedan prirodan prevod: Ist es weit zu Fuß?",
          "Eine natürliche Übersetzung: Ist es weit zu Fuß?"
        ],
        "accept": [
          "Ist es weit zu Fuß?"
        ]
      },
      {
        "id": "A1.2-u7-l5:fill2",
        "kind": "fill",
        "prompt": "Ist es _____ zu Fuß?",
        "explain": [
          "Tačan izraz: Ist es weit zu Fuß?",
          "Richtig: Ist es weit zu Fuß?"
        ],
        "options": [
          "weit",
          "gehen",
          "haben",
          "kommt"
        ],
        "accept": [
          "weit"
        ]
      },
      {
        "id": "A1.2-u7-l5:order3",
        "kind": "order",
        "prompt": "Koliko traje put?",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Wie",
          "lange",
          "dauert",
          "der",
          "Weg"
        ],
        "accept": [
          "Wie lange dauert der Weg?"
        ]
      },
      {
        "id": "A1.2-u7-l5:translate3",
        "kind": "translate",
        "prompt": "Koliko traje put?",
        "explain": [
          "Jedan prirodan prevod: Wie lange dauert der Weg?",
          "Eine natürliche Übersetzung: Wie lange dauert der Weg?"
        ],
        "accept": [
          "Wie lange dauert der Weg?"
        ]
      },
      {
        "id": "A1.2-u7-l5:fill3",
        "kind": "fill",
        "prompt": "Wie _____ dauert der Weg?",
        "explain": [
          "Tačan izraz: Wie lange dauert der Weg?",
          "Richtig: Wie lange dauert der Weg?"
        ],
        "options": [
          "lange",
          "kommt",
          "kann",
          "heute"
        ],
        "accept": [
          "lange"
        ]
      },
      {
        "id": "A1.2-u7-l5:dialog",
        "kind": "dialog",
        "prompt": "Ist der Bahnhof weit weg?",
        "explain": [
          "Odgovor: Nein, nur fünf Minuten.",
          "Passende Antwort: Nein, nur fünf Minuten."
        ],
        "accept": [
          "Nein, nur fünf Minuten."
        ],
        "options": [
          "Nein, nur fünf Minuten.",
          "Neben der Bank.",
          "Ja, an der Kreuzung.",
          "Hinter der Schule."
        ]
      }
    ]
  },
  {
    "id": "A1.2-u7-test",
    "title": [
      "Test celine",
      "Einheitstest"
    ],
    "type": "unit",
    "level": "A1.2",
    "items": [
      {
        "id": "A1.2-u7-test:q1",
        "kind": "fill",
        "prompt": "Die _____ ist neben der Bank.",
        "explain": [
          "Tačan izraz: Die Apotheke ist neben der Bank.",
          "Richtig: Die Apotheke ist neben der Bank."
        ],
        "options": [
          "Apotheke",
          "machen",
          "gehen",
          "haben"
        ],
        "accept": [
          "Apotheke"
        ]
      },
      {
        "id": "A1.2-u7-test:q2",
        "kind": "dialog",
        "prompt": "Wo ist die Apotheke?",
        "explain": [
          "Odgovor: Neben der Bank.",
          "Passende Antwort: Neben der Bank."
        ],
        "accept": [
          "Neben der Bank."
        ],
        "options": [
          "Neben der Bank.",
          "Ja, an der Kreuzung.",
          "Hinter der Schule.",
          "Gehen Sie bis zur Ampel."
        ]
      },
      {
        "id": "A1.2-u7-test:q3",
        "kind": "fill",
        "prompt": "_____ Sie bitte geradeaus.",
        "explain": [
          "Tačan izraz: Gehen Sie bitte geradeaus.",
          "Richtig: Gehen Sie bitte geradeaus."
        ],
        "options": [
          "Gehen",
          "gehen",
          "haben",
          "kommt"
        ],
        "accept": [
          "Gehen"
        ]
      },
      {
        "id": "A1.2-u7-test:q4",
        "kind": "dialog",
        "prompt": "Muss ich links abbiegen?",
        "explain": [
          "Odgovor: Ja, an der Kreuzung.",
          "Passende Antwort: Ja, an der Kreuzung."
        ],
        "accept": [
          "Ja, an der Kreuzung."
        ],
        "options": [
          "Ja, an der Kreuzung.",
          "Neben der Bank.",
          "Hinter der Schule.",
          "Gehen Sie bis zur Ampel."
        ]
      },
      {
        "id": "A1.2-u7-test:q5",
        "kind": "fill",
        "prompt": "Ich _____ vor dem Haus.",
        "explain": [
          "Tačan izraz: Ich stehe vor dem Haus.",
          "Richtig: Ich stehe vor dem Haus."
        ],
        "options": [
          "stehe",
          "haben",
          "kommt",
          "kann"
        ],
        "accept": [
          "stehe"
        ]
      },
      {
        "id": "A1.2-u7-test:q6",
        "kind": "dialog",
        "prompt": "Wo ist der Park?",
        "explain": [
          "Odgovor: Hinter der Schule.",
          "Passende Antwort: Hinter der Schule."
        ],
        "accept": [
          "Hinter der Schule."
        ],
        "options": [
          "Hinter der Schule.",
          "Neben der Bank.",
          "Ja, an der Kreuzung.",
          "Gehen Sie bis zur Ampel."
        ]
      },
      {
        "id": "A1.2-u7-test:q7",
        "kind": "fill",
        "prompt": "_____ Sie bis zur Ampel.",
        "explain": [
          "Tačan izraz: Gehen Sie bis zur Ampel.",
          "Richtig: Gehen Sie bis zur Ampel."
        ],
        "options": [
          "Gehen",
          "kommt",
          "kann",
          "heute"
        ],
        "accept": [
          "Gehen"
        ]
      },
      {
        "id": "A1.2-u7-test:q8",
        "kind": "dialog",
        "prompt": "Wie komme ich zum Bahnhof?",
        "explain": [
          "Odgovor: Gehen Sie bis zur Ampel.",
          "Passende Antwort: Gehen Sie bis zur Ampel."
        ],
        "accept": [
          "Gehen Sie bis zur Ampel."
        ],
        "options": [
          "Gehen Sie bis zur Ampel.",
          "Neben der Bank.",
          "Ja, an der Kreuzung.",
          "Hinter der Schule."
        ]
      },
      {
        "id": "A1.2-u7-test:q9",
        "kind": "fill",
        "prompt": "_____ wo ist der Bahnhof?",
        "explain": [
          "Tačan izraz: Entschuldigung, wo ist der Bahnhof?",
          "Richtig: Entschuldigung, wo ist der Bahnhof?"
        ],
        "options": [
          "Entschuldigung,",
          "kann",
          "heute",
          "sehr"
        ],
        "accept": [
          "Entschuldigung,"
        ]
      },
      {
        "id": "A1.2-u7-test:q10",
        "kind": "dialog",
        "prompt": "Ist der Bahnhof weit weg?",
        "explain": [
          "Odgovor: Nein, nur fünf Minuten.",
          "Passende Antwort: Nein, nur fünf Minuten."
        ],
        "accept": [
          "Nein, nur fünf Minuten."
        ],
        "options": [
          "Nein, nur fünf Minuten.",
          "Neben der Bank.",
          "Ja, an der Kreuzung.",
          "Hinter der Schule."
        ]
      }
    ]
  },
  {
    "id": "A1.2-u8-l1",
    "title": [
      "Interesovanja",
      "Interessen"
    ],
    "type": "lesson",
    "level": "A1.2",
    "intro": [
      "Vežba: Interesovanja",
      "Übung: Interessen"
    ],
    "example": "Ich interessiere mich für Musik.",
    "items": [
      {
        "id": "A1.2-u8-l1:order1",
        "kind": "order",
        "prompt": "Zanima me muzika.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Ich",
          "interessiere",
          "mich",
          "für",
          "Musik"
        ],
        "accept": [
          "Ich interessiere mich für Musik."
        ]
      },
      {
        "id": "A1.2-u8-l1:translate1",
        "kind": "translate",
        "prompt": "Zanima me muzika.",
        "explain": [
          "Jedan prirodan prevod: Ich interessiere mich für Musik.",
          "Eine natürliche Übersetzung: Ich interessiere mich für Musik."
        ],
        "accept": [
          "Ich interessiere mich für Musik."
        ]
      },
      {
        "id": "A1.2-u8-l1:fill1",
        "kind": "fill",
        "prompt": "Ich _____ mich für Musik.",
        "explain": [
          "Tačan izraz: Ich interessiere mich für Musik.",
          "Richtig: Ich interessiere mich für Musik."
        ],
        "options": [
          "interessiere",
          "machen",
          "gehen",
          "haben"
        ],
        "accept": [
          "interessiere"
        ]
      },
      {
        "id": "A1.2-u8-l1:order2",
        "kind": "order",
        "prompt": "Moj hobi je fotografisanje.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Mein",
          "Hobby",
          "ist",
          "Fotografieren"
        ],
        "accept": [
          "Mein Hobby ist Fotografieren."
        ]
      },
      {
        "id": "A1.2-u8-l1:translate2",
        "kind": "translate",
        "prompt": "Moj hobi je fotografisanje.",
        "explain": [
          "Jedan prirodan prevod: Mein Hobby ist Fotografieren.",
          "Eine natürliche Übersetzung: Mein Hobby ist Fotografieren."
        ],
        "accept": [
          "Mein Hobby ist Fotografieren."
        ]
      },
      {
        "id": "A1.2-u8-l1:fill2",
        "kind": "fill",
        "prompt": "_____ Hobby ist Fotografieren.",
        "explain": [
          "Tačan izraz: Mein Hobby ist Fotografieren.",
          "Richtig: Mein Hobby ist Fotografieren."
        ],
        "options": [
          "Mein",
          "haben",
          "kommt",
          "kann"
        ],
        "accept": [
          "Mein"
        ]
      },
      {
        "id": "A1.2-u8-l1:order3",
        "kind": "order",
        "prompt": "Volim da igram šah.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Ich",
          "spiele",
          "gern",
          "Schach"
        ],
        "accept": [
          "Ich spiele gern Schach."
        ]
      },
      {
        "id": "A1.2-u8-l1:translate3",
        "kind": "translate",
        "prompt": "Volim da igram šah.",
        "explain": [
          "Jedan prirodan prevod: Ich spiele gern Schach.",
          "Eine natürliche Übersetzung: Ich spiele gern Schach."
        ],
        "accept": [
          "Ich spiele gern Schach."
        ]
      },
      {
        "id": "A1.2-u8-l1:fill3",
        "kind": "fill",
        "prompt": "Ich _____ gern Schach.",
        "explain": [
          "Tačan izraz: Ich spiele gern Schach.",
          "Richtig: Ich spiele gern Schach."
        ],
        "options": [
          "spiele",
          "kann",
          "heute",
          "sehr"
        ],
        "accept": [
          "spiele"
        ]
      },
      {
        "id": "A1.2-u8-l1:dialog",
        "kind": "dialog",
        "prompt": "Was sind deine Hobbys?",
        "explain": [
          "Odgovor: Ich spiele gern Schach.",
          "Passende Antwort: Ich spiele gern Schach."
        ],
        "accept": [
          "Ich spiele gern Schach."
        ],
        "options": [
          "Ich spiele gern Schach.",
          "Ich gehe schwimmen.",
          "Zweimal pro Woche.",
          "Ja, sehr gern."
        ]
      }
    ]
  },
  {
    "id": "A1.2-u8-l2",
    "title": [
      "Slobodno vreme",
      "Freizeit"
    ],
    "type": "lesson",
    "level": "A1.2",
    "intro": [
      "Vežba: Slobodno vreme",
      "Übung: Freizeit"
    ],
    "example": "Am Wochenende gehe ich schwimmen.",
    "items": [
      {
        "id": "A1.2-u8-l2:order1",
        "kind": "order",
        "prompt": "Vikendom idem na plivanje.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Am",
          "Wochenende",
          "gehe",
          "ich",
          "schwimmen"
        ],
        "accept": [
          "Am Wochenende gehe ich schwimmen."
        ]
      },
      {
        "id": "A1.2-u8-l2:translate1",
        "kind": "translate",
        "prompt": "Vikendom idem na plivanje.",
        "explain": [
          "Jedan prirodan prevod: Am Wochenende gehe ich schwimmen.",
          "Eine natürliche Übersetzung: Am Wochenende gehe ich schwimmen."
        ],
        "accept": [
          "Am Wochenende gehe ich schwimmen."
        ]
      },
      {
        "id": "A1.2-u8-l2:fill1",
        "kind": "fill",
        "prompt": "Am _____ gehe ich schwimmen.",
        "explain": [
          "Tačan izraz: Am Wochenende gehe ich schwimmen.",
          "Richtig: Am Wochenende gehe ich schwimmen."
        ],
        "options": [
          "Wochenende",
          "gehen",
          "haben",
          "kommt"
        ],
        "accept": [
          "Wochenende"
        ]
      },
      {
        "id": "A1.2-u8-l2:order2",
        "kind": "order",
        "prompt": "Nalazimo se u parku.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Wir",
          "treffen",
          "uns",
          "im",
          "Park"
        ],
        "accept": [
          "Wir treffen uns im Park."
        ]
      },
      {
        "id": "A1.2-u8-l2:translate2",
        "kind": "translate",
        "prompt": "Nalazimo se u parku.",
        "explain": [
          "Jedan prirodan prevod: Wir treffen uns im Park.",
          "Eine natürliche Übersetzung: Wir treffen uns im Park."
        ],
        "accept": [
          "Wir treffen uns im Park."
        ]
      },
      {
        "id": "A1.2-u8-l2:fill2",
        "kind": "fill",
        "prompt": "Wir _____ uns im Park.",
        "explain": [
          "Tačan izraz: Wir treffen uns im Park.",
          "Richtig: Wir treffen uns im Park."
        ],
        "options": [
          "treffen",
          "kommt",
          "kann",
          "heute"
        ],
        "accept": [
          "treffen"
        ]
      },
      {
        "id": "A1.2-u8-l2:order3",
        "kind": "order",
        "prompt": "Volim da čitam uveče.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Ich",
          "lese",
          "abends",
          "gern"
        ],
        "accept": [
          "Ich lese abends gern."
        ]
      },
      {
        "id": "A1.2-u8-l2:translate3",
        "kind": "translate",
        "prompt": "Volim da čitam uveče.",
        "explain": [
          "Jedan prirodan prevod: Ich lese abends gern.",
          "Eine natürliche Übersetzung: Ich lese abends gern."
        ],
        "accept": [
          "Ich lese abends gern."
        ]
      },
      {
        "id": "A1.2-u8-l2:fill3",
        "kind": "fill",
        "prompt": "Ich _____ abends gern.",
        "explain": [
          "Tačan izraz: Ich lese abends gern.",
          "Richtig: Ich lese abends gern."
        ],
        "options": [
          "lese",
          "machen",
          "gehen",
          "haben"
        ],
        "accept": [
          "lese"
        ]
      },
      {
        "id": "A1.2-u8-l2:dialog",
        "kind": "dialog",
        "prompt": "Was machst du am Wochenende?",
        "explain": [
          "Odgovor: Ich gehe schwimmen.",
          "Passende Antwort: Ich gehe schwimmen."
        ],
        "accept": [
          "Ich gehe schwimmen."
        ],
        "options": [
          "Ich gehe schwimmen.",
          "Ich spiele gern Schach.",
          "Zweimal pro Woche.",
          "Ja, sehr gern."
        ]
      }
    ]
  },
  {
    "id": "A1.2-u8-l3",
    "title": [
      "Učestalost",
      "Häufigkeit"
    ],
    "type": "lesson",
    "level": "A1.2",
    "intro": [
      "Vežba: Učestalost",
      "Übung: Häufigkeit"
    ],
    "example": "Ich trainiere zweimal pro Woche.",
    "items": [
      {
        "id": "A1.2-u8-l3:order1",
        "kind": "order",
        "prompt": "Treniram dva puta nedeljno.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Ich",
          "trainiere",
          "zweimal",
          "pro",
          "Woche"
        ],
        "accept": [
          "Ich trainiere zweimal pro Woche."
        ]
      },
      {
        "id": "A1.2-u8-l3:translate1",
        "kind": "translate",
        "prompt": "Treniram dva puta nedeljno.",
        "explain": [
          "Jedan prirodan prevod: Ich trainiere zweimal pro Woche.",
          "Eine natürliche Übersetzung: Ich trainiere zweimal pro Woche."
        ],
        "accept": [
          "Ich trainiere zweimal pro Woche."
        ]
      },
      {
        "id": "A1.2-u8-l3:fill1",
        "kind": "fill",
        "prompt": "Ich _____ zweimal pro Woche.",
        "explain": [
          "Tačan izraz: Ich trainiere zweimal pro Woche.",
          "Richtig: Ich trainiere zweimal pro Woche."
        ],
        "options": [
          "trainiere",
          "haben",
          "kommt",
          "kann"
        ],
        "accept": [
          "trainiere"
        ]
      },
      {
        "id": "A1.2-u8-l3:order2",
        "kind": "order",
        "prompt": "Ponekad kuvam kod kuće.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Manchmal",
          "koche",
          "ich",
          "zu",
          "Hause"
        ],
        "accept": [
          "Manchmal koche ich zu Hause."
        ]
      },
      {
        "id": "A1.2-u8-l3:translate2",
        "kind": "translate",
        "prompt": "Ponekad kuvam kod kuće.",
        "explain": [
          "Jedan prirodan prevod: Manchmal koche ich zu Hause.",
          "Eine natürliche Übersetzung: Manchmal koche ich zu Hause."
        ],
        "accept": [
          "Manchmal koche ich zu Hause."
        ]
      },
      {
        "id": "A1.2-u8-l3:fill2",
        "kind": "fill",
        "prompt": "_____ koche ich zu Hause.",
        "explain": [
          "Tačan izraz: Manchmal koche ich zu Hause.",
          "Richtig: Manchmal koche ich zu Hause."
        ],
        "options": [
          "Manchmal",
          "kann",
          "heute",
          "sehr"
        ],
        "accept": [
          "Manchmal"
        ]
      },
      {
        "id": "A1.2-u8-l3:order3",
        "kind": "order",
        "prompt": "Retko idem u bioskop.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Ich",
          "gehe",
          "selten",
          "ins",
          "Kino"
        ],
        "accept": [
          "Ich gehe selten ins Kino."
        ]
      },
      {
        "id": "A1.2-u8-l3:translate3",
        "kind": "translate",
        "prompt": "Retko idem u bioskop.",
        "explain": [
          "Jedan prirodan prevod: Ich gehe selten ins Kino.",
          "Eine natürliche Übersetzung: Ich gehe selten ins Kino."
        ],
        "accept": [
          "Ich gehe selten ins Kino."
        ]
      },
      {
        "id": "A1.2-u8-l3:fill3",
        "kind": "fill",
        "prompt": "Ich _____ selten ins Kino.",
        "explain": [
          "Tačan izraz: Ich gehe selten ins Kino.",
          "Richtig: Ich gehe selten ins Kino."
        ],
        "options": [
          "gehe",
          "gehen",
          "haben",
          "kommt"
        ],
        "accept": [
          "gehe"
        ]
      },
      {
        "id": "A1.2-u8-l3:dialog",
        "kind": "dialog",
        "prompt": "Wie oft trainierst du?",
        "explain": [
          "Odgovor: Zweimal pro Woche.",
          "Passende Antwort: Zweimal pro Woche."
        ],
        "accept": [
          "Zweimal pro Woche."
        ],
        "options": [
          "Zweimal pro Woche.",
          "Ich spiele gern Schach.",
          "Ich gehe schwimmen.",
          "Ja, sehr gern."
        ]
      }
    ]
  },
  {
    "id": "A1.2-u8-l4",
    "title": [
      "Poziv",
      "Einladung"
    ],
    "type": "lesson",
    "level": "A1.2",
    "intro": [
      "Vežba: Poziv",
      "Übung: Einladung"
    ],
    "example": "Möchtest du mitkommen?",
    "items": [
      {
        "id": "A1.2-u8-l4:order1",
        "kind": "order",
        "prompt": "Želiš li da pođeš?",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Möchtest",
          "du",
          "mitkommen"
        ],
        "accept": [
          "Möchtest du mitkommen?"
        ]
      },
      {
        "id": "A1.2-u8-l4:translate1",
        "kind": "translate",
        "prompt": "Želiš li da pođeš?",
        "explain": [
          "Jedan prirodan prevod: Möchtest du mitkommen?",
          "Eine natürliche Übersetzung: Möchtest du mitkommen?"
        ],
        "accept": [
          "Möchtest du mitkommen?"
        ]
      },
      {
        "id": "A1.2-u8-l4:fill1",
        "kind": "fill",
        "prompt": "_____ du mitkommen?",
        "explain": [
          "Tačan izraz: Möchtest du mitkommen?",
          "Richtig: Möchtest du mitkommen?"
        ],
        "options": [
          "Möchtest",
          "kommt",
          "kann",
          "heute"
        ],
        "accept": [
          "Möchtest"
        ]
      },
      {
        "id": "A1.2-u8-l4:order2",
        "kind": "order",
        "prompt": "Pozivam te na večeru.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Ich",
          "lade",
          "dich",
          "zum",
          "Essen",
          "ein"
        ],
        "accept": [
          "Ich lade dich zum Essen ein."
        ]
      },
      {
        "id": "A1.2-u8-l4:translate2",
        "kind": "translate",
        "prompt": "Pozivam te na večeru.",
        "explain": [
          "Jedan prirodan prevod: Ich lade dich zum Essen ein.",
          "Eine natürliche Übersetzung: Ich lade dich zum Essen ein."
        ],
        "accept": [
          "Ich lade dich zum Essen ein."
        ]
      },
      {
        "id": "A1.2-u8-l4:fill2",
        "kind": "fill",
        "prompt": "Ich _____ dich zum Essen ein.",
        "explain": [
          "Tačan izraz: Ich lade dich zum Essen ein.",
          "Richtig: Ich lade dich zum Essen ein."
        ],
        "options": [
          "lade",
          "machen",
          "gehen",
          "haben"
        ],
        "accept": [
          "lade"
        ]
      },
      {
        "id": "A1.2-u8-l4:order3",
        "kind": "order",
        "prompt": "Imaš li vremena u subotu?",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Hast",
          "du",
          "am",
          "Samstag",
          "Zeit"
        ],
        "accept": [
          "Hast du am Samstag Zeit?"
        ]
      },
      {
        "id": "A1.2-u8-l4:translate3",
        "kind": "translate",
        "prompt": "Imaš li vremena u subotu?",
        "explain": [
          "Jedan prirodan prevod: Hast du am Samstag Zeit?",
          "Eine natürliche Übersetzung: Hast du am Samstag Zeit?"
        ],
        "accept": [
          "Hast du am Samstag Zeit?"
        ]
      },
      {
        "id": "A1.2-u8-l4:fill3",
        "kind": "fill",
        "prompt": "_____ du am Samstag Zeit?",
        "explain": [
          "Tačan izraz: Hast du am Samstag Zeit?",
          "Richtig: Hast du am Samstag Zeit?"
        ],
        "options": [
          "Hast",
          "haben",
          "kommt",
          "kann"
        ],
        "accept": [
          "Hast"
        ]
      },
      {
        "id": "A1.2-u8-l4:dialog",
        "kind": "dialog",
        "prompt": "Kommst du zur Party?",
        "explain": [
          "Odgovor: Ja, sehr gern.",
          "Passende Antwort: Ja, sehr gern."
        ],
        "accept": [
          "Ja, sehr gern."
        ],
        "options": [
          "Ja, sehr gern.",
          "Ich spiele gern Schach.",
          "Ich gehe schwimmen.",
          "Zweimal pro Woche."
        ]
      }
    ]
  },
  {
    "id": "A1.2-u8-l5",
    "title": [
      "Dogovor",
      "Verabredung"
    ],
    "type": "lesson",
    "level": "A1.2",
    "intro": [
      "Vežba: Dogovor",
      "Übung: Verabredung"
    ],
    "example": "Wir treffen uns um sechs Uhr.",
    "items": [
      {
        "id": "A1.2-u8-l5:order1",
        "kind": "order",
        "prompt": "Nalazimo se u šest.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Wir",
          "treffen",
          "uns",
          "um",
          "sechs",
          "Uhr"
        ],
        "accept": [
          "Wir treffen uns um sechs Uhr."
        ]
      },
      {
        "id": "A1.2-u8-l5:translate1",
        "kind": "translate",
        "prompt": "Nalazimo se u šest.",
        "explain": [
          "Jedan prirodan prevod: Wir treffen uns um sechs Uhr.",
          "Eine natürliche Übersetzung: Wir treffen uns um sechs Uhr."
        ],
        "accept": [
          "Wir treffen uns um sechs Uhr."
        ]
      },
      {
        "id": "A1.2-u8-l5:fill1",
        "kind": "fill",
        "prompt": "Wir _____ uns um sechs Uhr.",
        "explain": [
          "Tačan izraz: Wir treffen uns um sechs Uhr.",
          "Richtig: Wir treffen uns um sechs Uhr."
        ],
        "options": [
          "treffen",
          "kann",
          "heute",
          "sehr"
        ],
        "accept": [
          "treffen"
        ]
      },
      {
        "id": "A1.2-u8-l5:order2",
        "kind": "order",
        "prompt": "Odgovara li ti petak?",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Passt",
          "dir",
          "der",
          "Freitag"
        ],
        "accept": [
          "Passt dir der Freitag?"
        ]
      },
      {
        "id": "A1.2-u8-l5:translate2",
        "kind": "translate",
        "prompt": "Odgovara li ti petak?",
        "explain": [
          "Jedan prirodan prevod: Passt dir der Freitag?",
          "Eine natürliche Übersetzung: Passt dir der Freitag?"
        ],
        "accept": [
          "Passt dir der Freitag?"
        ]
      },
      {
        "id": "A1.2-u8-l5:fill2",
        "kind": "fill",
        "prompt": "_____ dir der Freitag?",
        "explain": [
          "Tačan izraz: Passt dir der Freitag?",
          "Richtig: Passt dir der Freitag?"
        ],
        "options": [
          "Passt",
          "gehen",
          "haben",
          "kommt"
        ],
        "accept": [
          "Passt"
        ]
      },
      {
        "id": "A1.2-u8-l5:order3",
        "kind": "order",
        "prompt": "Doći ću malo kasnije.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Ich",
          "komme",
          "ein",
          "bisschen",
          "später"
        ],
        "accept": [
          "Ich komme ein bisschen später."
        ]
      },
      {
        "id": "A1.2-u8-l5:translate3",
        "kind": "translate",
        "prompt": "Doći ću malo kasnije.",
        "explain": [
          "Jedan prirodan prevod: Ich komme ein bisschen später.",
          "Eine natürliche Übersetzung: Ich komme ein bisschen später."
        ],
        "accept": [
          "Ich komme ein bisschen später."
        ]
      },
      {
        "id": "A1.2-u8-l5:fill3",
        "kind": "fill",
        "prompt": "Ich _____ ein bisschen später.",
        "explain": [
          "Tačan izraz: Ich komme ein bisschen später.",
          "Richtig: Ich komme ein bisschen später."
        ],
        "options": [
          "komme",
          "kommt",
          "kann",
          "heute"
        ],
        "accept": [
          "komme"
        ]
      },
      {
        "id": "A1.2-u8-l5:dialog",
        "kind": "dialog",
        "prompt": "Wann treffen wir uns?",
        "explain": [
          "Odgovor: Um sechs Uhr.",
          "Passende Antwort: Um sechs Uhr."
        ],
        "accept": [
          "Um sechs Uhr."
        ],
        "options": [
          "Um sechs Uhr.",
          "Ich spiele gern Schach.",
          "Ich gehe schwimmen.",
          "Zweimal pro Woche."
        ]
      }
    ]
  },
  {
    "id": "A1.2-u8-test",
    "title": [
      "Test celine",
      "Einheitstest"
    ],
    "type": "unit",
    "level": "A1.2",
    "items": [
      {
        "id": "A1.2-u8-test:q1",
        "kind": "fill",
        "prompt": "Ich _____ mich für Musik.",
        "explain": [
          "Tačan izraz: Ich interessiere mich für Musik.",
          "Richtig: Ich interessiere mich für Musik."
        ],
        "options": [
          "interessiere",
          "machen",
          "gehen",
          "haben"
        ],
        "accept": [
          "interessiere"
        ]
      },
      {
        "id": "A1.2-u8-test:q2",
        "kind": "dialog",
        "prompt": "Was sind deine Hobbys?",
        "explain": [
          "Odgovor: Ich spiele gern Schach.",
          "Passende Antwort: Ich spiele gern Schach."
        ],
        "accept": [
          "Ich spiele gern Schach."
        ],
        "options": [
          "Ich spiele gern Schach.",
          "Ich gehe schwimmen.",
          "Zweimal pro Woche.",
          "Ja, sehr gern."
        ]
      },
      {
        "id": "A1.2-u8-test:q3",
        "kind": "fill",
        "prompt": "Am _____ gehe ich schwimmen.",
        "explain": [
          "Tačan izraz: Am Wochenende gehe ich schwimmen.",
          "Richtig: Am Wochenende gehe ich schwimmen."
        ],
        "options": [
          "Wochenende",
          "gehen",
          "haben",
          "kommt"
        ],
        "accept": [
          "Wochenende"
        ]
      },
      {
        "id": "A1.2-u8-test:q4",
        "kind": "dialog",
        "prompt": "Was machst du am Wochenende?",
        "explain": [
          "Odgovor: Ich gehe schwimmen.",
          "Passende Antwort: Ich gehe schwimmen."
        ],
        "accept": [
          "Ich gehe schwimmen."
        ],
        "options": [
          "Ich gehe schwimmen.",
          "Ich spiele gern Schach.",
          "Zweimal pro Woche.",
          "Ja, sehr gern."
        ]
      },
      {
        "id": "A1.2-u8-test:q5",
        "kind": "fill",
        "prompt": "Ich _____ zweimal pro Woche.",
        "explain": [
          "Tačan izraz: Ich trainiere zweimal pro Woche.",
          "Richtig: Ich trainiere zweimal pro Woche."
        ],
        "options": [
          "trainiere",
          "haben",
          "kommt",
          "kann"
        ],
        "accept": [
          "trainiere"
        ]
      },
      {
        "id": "A1.2-u8-test:q6",
        "kind": "dialog",
        "prompt": "Wie oft trainierst du?",
        "explain": [
          "Odgovor: Zweimal pro Woche.",
          "Passende Antwort: Zweimal pro Woche."
        ],
        "accept": [
          "Zweimal pro Woche."
        ],
        "options": [
          "Zweimal pro Woche.",
          "Ich spiele gern Schach.",
          "Ich gehe schwimmen.",
          "Ja, sehr gern."
        ]
      },
      {
        "id": "A1.2-u8-test:q7",
        "kind": "fill",
        "prompt": "_____ du mitkommen?",
        "explain": [
          "Tačan izraz: Möchtest du mitkommen?",
          "Richtig: Möchtest du mitkommen?"
        ],
        "options": [
          "Möchtest",
          "kommt",
          "kann",
          "heute"
        ],
        "accept": [
          "Möchtest"
        ]
      },
      {
        "id": "A1.2-u8-test:q8",
        "kind": "dialog",
        "prompt": "Kommst du zur Party?",
        "explain": [
          "Odgovor: Ja, sehr gern.",
          "Passende Antwort: Ja, sehr gern."
        ],
        "accept": [
          "Ja, sehr gern."
        ],
        "options": [
          "Ja, sehr gern.",
          "Ich spiele gern Schach.",
          "Ich gehe schwimmen.",
          "Zweimal pro Woche."
        ]
      },
      {
        "id": "A1.2-u8-test:q9",
        "kind": "fill",
        "prompt": "Wir _____ uns um sechs Uhr.",
        "explain": [
          "Tačan izraz: Wir treffen uns um sechs Uhr.",
          "Richtig: Wir treffen uns um sechs Uhr."
        ],
        "options": [
          "treffen",
          "kann",
          "heute",
          "sehr"
        ],
        "accept": [
          "treffen"
        ]
      },
      {
        "id": "A1.2-u8-test:q10",
        "kind": "dialog",
        "prompt": "Wann treffen wir uns?",
        "explain": [
          "Odgovor: Um sechs Uhr.",
          "Passende Antwort: Um sechs Uhr."
        ],
        "accept": [
          "Um sechs Uhr."
        ],
        "options": [
          "Um sechs Uhr.",
          "Ich spiele gern Schach.",
          "Ich gehe schwimmen.",
          "Zweimal pro Woche."
        ]
      }
    ]
  },
  {
    "id": "A1.2-u9-l1",
    "title": [
      "Delovi tela",
      "Körperteile"
    ],
    "type": "lesson",
    "level": "A1.2",
    "intro": [
      "Vežba: Delovi tela",
      "Übung: Körperteile"
    ],
    "example": "Mein Kopf tut weh.",
    "items": [
      {
        "id": "A1.2-u9-l1:order1",
        "kind": "order",
        "prompt": "Boli me glava.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Mein",
          "Kopf",
          "tut",
          "weh"
        ],
        "accept": [
          "Mein Kopf tut weh."
        ]
      },
      {
        "id": "A1.2-u9-l1:translate1",
        "kind": "translate",
        "prompt": "Boli me glava.",
        "explain": [
          "Jedan prirodan prevod: Mein Kopf tut weh.",
          "Eine natürliche Übersetzung: Mein Kopf tut weh."
        ],
        "accept": [
          "Mein Kopf tut weh."
        ]
      },
      {
        "id": "A1.2-u9-l1:fill1",
        "kind": "fill",
        "prompt": "_____ Kopf tut weh.",
        "explain": [
          "Tačan izraz: Mein Kopf tut weh.",
          "Richtig: Mein Kopf tut weh."
        ],
        "options": [
          "Mein",
          "machen",
          "gehen",
          "haben"
        ],
        "accept": [
          "Mein"
        ]
      },
      {
        "id": "A1.2-u9-l1:order2",
        "kind": "order",
        "prompt": "Bole me leđa.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Ich",
          "habe",
          "Schmerzen",
          "im",
          "Rücken"
        ],
        "accept": [
          "Ich habe Schmerzen im Rücken."
        ]
      },
      {
        "id": "A1.2-u9-l1:translate2",
        "kind": "translate",
        "prompt": "Bole me leđa.",
        "explain": [
          "Jedan prirodan prevod: Ich habe Schmerzen im Rücken.",
          "Eine natürliche Übersetzung: Ich habe Schmerzen im Rücken."
        ],
        "accept": [
          "Ich habe Schmerzen im Rücken."
        ]
      },
      {
        "id": "A1.2-u9-l1:fill2",
        "kind": "fill",
        "prompt": "Ich _____ Schmerzen im Rücken.",
        "explain": [
          "Tačan izraz: Ich habe Schmerzen im Rücken.",
          "Richtig: Ich habe Schmerzen im Rücken."
        ],
        "options": [
          "habe",
          "haben",
          "kommt",
          "kann"
        ],
        "accept": [
          "habe"
        ]
      },
      {
        "id": "A1.2-u9-l1:order3",
        "kind": "order",
        "prompt": "Noga mi je povređena.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Mein",
          "Bein",
          "ist",
          "verletzt"
        ],
        "accept": [
          "Mein Bein ist verletzt."
        ]
      },
      {
        "id": "A1.2-u9-l1:translate3",
        "kind": "translate",
        "prompt": "Noga mi je povređena.",
        "explain": [
          "Jedan prirodan prevod: Mein Bein ist verletzt.",
          "Eine natürliche Übersetzung: Mein Bein ist verletzt."
        ],
        "accept": [
          "Mein Bein ist verletzt."
        ]
      },
      {
        "id": "A1.2-u9-l1:fill3",
        "kind": "fill",
        "prompt": "_____ Bein ist verletzt.",
        "explain": [
          "Tačan izraz: Mein Bein ist verletzt.",
          "Richtig: Mein Bein ist verletzt."
        ],
        "options": [
          "Mein",
          "kann",
          "heute",
          "sehr"
        ],
        "accept": [
          "Mein"
        ]
      },
      {
        "id": "A1.2-u9-l1:dialog",
        "kind": "dialog",
        "prompt": "Wo tut es weh?",
        "explain": [
          "Odgovor: Mein Rücken tut weh.",
          "Passende Antwort: Mein Rücken tut weh."
        ],
        "accept": [
          "Mein Rücken tut weh."
        ],
        "options": [
          "Mein Rücken tut weh.",
          "Ich habe Fieber.",
          "Ja, bitte.",
          "Ruhen Sie sich bitte aus."
        ]
      }
    ]
  },
  {
    "id": "A1.2-u9-l2",
    "title": [
      "Simptomi",
      "Symptome"
    ],
    "type": "lesson",
    "level": "A1.2",
    "intro": [
      "Vežba: Simptomi",
      "Übung: Symptome"
    ],
    "example": "Ich habe seit gestern Fieber.",
    "items": [
      {
        "id": "A1.2-u9-l2:order1",
        "kind": "order",
        "prompt": "Od juče imam temperaturu.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Ich",
          "habe",
          "seit",
          "gestern",
          "Fieber"
        ],
        "accept": [
          "Ich habe seit gestern Fieber."
        ]
      },
      {
        "id": "A1.2-u9-l2:translate1",
        "kind": "translate",
        "prompt": "Od juče imam temperaturu.",
        "explain": [
          "Jedan prirodan prevod: Ich habe seit gestern Fieber.",
          "Eine natürliche Übersetzung: Ich habe seit gestern Fieber."
        ],
        "accept": [
          "Ich habe seit gestern Fieber."
        ]
      },
      {
        "id": "A1.2-u9-l2:fill1",
        "kind": "fill",
        "prompt": "Ich _____ seit gestern Fieber.",
        "explain": [
          "Tačan izraz: Ich habe seit gestern Fieber.",
          "Richtig: Ich habe seit gestern Fieber."
        ],
        "options": [
          "habe",
          "gehen",
          "haben",
          "kommt"
        ],
        "accept": [
          "habe"
        ]
      },
      {
        "id": "A1.2-u9-l2:order2",
        "kind": "order",
        "prompt": "Vrti mi se u glavi.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Mir",
          "ist",
          "schwindelig"
        ],
        "accept": [
          "Mir ist schwindelig."
        ]
      },
      {
        "id": "A1.2-u9-l2:translate2",
        "kind": "translate",
        "prompt": "Vrti mi se u glavi.",
        "explain": [
          "Jedan prirodan prevod: Mir ist schwindelig.",
          "Eine natürliche Übersetzung: Mir ist schwindelig."
        ],
        "accept": [
          "Mir ist schwindelig."
        ]
      },
      {
        "id": "A1.2-u9-l2:fill2",
        "kind": "fill",
        "prompt": "Mir ist _____.",
        "explain": [
          "Tačan izraz: Mir ist schwindelig.",
          "Richtig: Mir ist schwindelig."
        ],
        "options": [
          "schwindelig",
          "kommt",
          "kann",
          "heute"
        ],
        "accept": [
          "schwindelig"
        ]
      },
      {
        "id": "A1.2-u9-l2:order3",
        "kind": "order",
        "prompt": "Često moram da kašljem.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Ich",
          "muss",
          "oft",
          "husten"
        ],
        "accept": [
          "Ich muss oft husten."
        ]
      },
      {
        "id": "A1.2-u9-l2:translate3",
        "kind": "translate",
        "prompt": "Često moram da kašljem.",
        "explain": [
          "Jedan prirodan prevod: Ich muss oft husten.",
          "Eine natürliche Übersetzung: Ich muss oft husten."
        ],
        "accept": [
          "Ich muss oft husten."
        ]
      },
      {
        "id": "A1.2-u9-l2:fill3",
        "kind": "fill",
        "prompt": "Ich _____ oft husten.",
        "explain": [
          "Tačan izraz: Ich muss oft husten.",
          "Richtig: Ich muss oft husten."
        ],
        "options": [
          "muss",
          "machen",
          "gehen",
          "haben"
        ],
        "accept": [
          "muss"
        ]
      },
      {
        "id": "A1.2-u9-l2:dialog",
        "kind": "dialog",
        "prompt": "Welche Beschwerden haben Sie?",
        "explain": [
          "Odgovor: Ich habe Fieber.",
          "Passende Antwort: Ich habe Fieber."
        ],
        "accept": [
          "Ich habe Fieber."
        ],
        "options": [
          "Ich habe Fieber.",
          "Mein Rücken tut weh.",
          "Ja, bitte.",
          "Ruhen Sie sich bitte aus."
        ]
      }
    ]
  },
  {
    "id": "A1.2-u9-l3",
    "title": [
      "Apoteka",
      "Apotheke"
    ],
    "type": "lesson",
    "level": "A1.2",
    "intro": [
      "Vežba: Apoteka",
      "Übung: Apotheke"
    ],
    "example": "Ich brauche etwas gegen Husten.",
    "items": [
      {
        "id": "A1.2-u9-l3:order1",
        "kind": "order",
        "prompt": "Treba mi nešto protiv kašlja.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Ich",
          "brauche",
          "etwas",
          "gegen",
          "Husten"
        ],
        "accept": [
          "Ich brauche etwas gegen Husten."
        ]
      },
      {
        "id": "A1.2-u9-l3:translate1",
        "kind": "translate",
        "prompt": "Treba mi nešto protiv kašlja.",
        "explain": [
          "Jedan prirodan prevod: Ich brauche etwas gegen Husten.",
          "Eine natürliche Übersetzung: Ich brauche etwas gegen Husten."
        ],
        "accept": [
          "Ich brauche etwas gegen Husten."
        ]
      },
      {
        "id": "A1.2-u9-l3:fill1",
        "kind": "fill",
        "prompt": "Ich _____ etwas gegen Husten.",
        "explain": [
          "Tačan izraz: Ich brauche etwas gegen Husten.",
          "Richtig: Ich brauche etwas gegen Husten."
        ],
        "options": [
          "brauche",
          "haben",
          "kommt",
          "kann"
        ],
        "accept": [
          "brauche"
        ]
      },
      {
        "id": "A1.2-u9-l3:order2",
        "kind": "order",
        "prompt": "Imate li lek bez recepta?",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Haben",
          "Sie",
          "ein",
          "Medikament",
          "ohne",
          "Rezept"
        ],
        "accept": [
          "Haben Sie ein Medikament ohne Rezept?"
        ]
      },
      {
        "id": "A1.2-u9-l3:translate2",
        "kind": "translate",
        "prompt": "Imate li lek bez recepta?",
        "explain": [
          "Jedan prirodan prevod: Haben Sie ein Medikament ohne Rezept?",
          "Eine natürliche Übersetzung: Haben Sie ein Medikament ohne Rezept?"
        ],
        "accept": [
          "Haben Sie ein Medikament ohne Rezept?"
        ]
      },
      {
        "id": "A1.2-u9-l3:fill2",
        "kind": "fill",
        "prompt": "_____ Sie ein Medikament ohne Rezept?",
        "explain": [
          "Tačan izraz: Haben Sie ein Medikament ohne Rezept?",
          "Richtig: Haben Sie ein Medikament ohne Rezept?"
        ],
        "options": [
          "Haben",
          "kann",
          "heute",
          "sehr"
        ],
        "accept": [
          "Haben"
        ]
      },
      {
        "id": "A1.2-u9-l3:order3",
        "kind": "order",
        "prompt": "Koliko često treba ovo da uzimam?",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Wie",
          "oft",
          "soll",
          "ich",
          "das",
          "nehmen"
        ],
        "accept": [
          "Wie oft soll ich das nehmen?"
        ]
      },
      {
        "id": "A1.2-u9-l3:translate3",
        "kind": "translate",
        "prompt": "Koliko često treba ovo da uzimam?",
        "explain": [
          "Jedan prirodan prevod: Wie oft soll ich das nehmen?",
          "Eine natürliche Übersetzung: Wie oft soll ich das nehmen?"
        ],
        "accept": [
          "Wie oft soll ich das nehmen?"
        ]
      },
      {
        "id": "A1.2-u9-l3:fill3",
        "kind": "fill",
        "prompt": "Wie oft _____ ich das nehmen?",
        "explain": [
          "Tačan izraz: Wie oft soll ich das nehmen?",
          "Richtig: Wie oft soll ich das nehmen?"
        ],
        "options": [
          "soll",
          "gehen",
          "haben",
          "kommt"
        ],
        "accept": [
          "soll"
        ]
      },
      {
        "id": "A1.2-u9-l3:dialog",
        "kind": "dialog",
        "prompt": "Brauchen Sie etwas gegen Schmerzen?",
        "explain": [
          "Odgovor: Ja, bitte.",
          "Passende Antwort: Ja, bitte."
        ],
        "accept": [
          "Ja, bitte."
        ],
        "options": [
          "Ja, bitte.",
          "Mein Rücken tut weh.",
          "Ich habe Fieber.",
          "Ruhen Sie sich bitte aus."
        ]
      }
    ]
  },
  {
    "id": "A1.2-u9-l4",
    "title": [
      "Savet",
      "Ratschläge"
    ],
    "type": "lesson",
    "level": "A1.2",
    "intro": [
      "Vežba: Savet",
      "Übung: Ratschläge"
    ],
    "example": "Du solltest mehr Wasser trinken.",
    "items": [
      {
        "id": "A1.2-u9-l4:order1",
        "kind": "order",
        "prompt": "Trebalo bi da piješ više vode.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Du",
          "solltest",
          "mehr",
          "Wasser",
          "trinken"
        ],
        "accept": [
          "Du solltest mehr Wasser trinken."
        ]
      },
      {
        "id": "A1.2-u9-l4:translate1",
        "kind": "translate",
        "prompt": "Trebalo bi da piješ više vode.",
        "explain": [
          "Jedan prirodan prevod: Du solltest mehr Wasser trinken.",
          "Eine natürliche Übersetzung: Du solltest mehr Wasser trinken."
        ],
        "accept": [
          "Du solltest mehr Wasser trinken."
        ]
      },
      {
        "id": "A1.2-u9-l4:fill1",
        "kind": "fill",
        "prompt": "Du _____ mehr Wasser trinken.",
        "explain": [
          "Tačan izraz: Du solltest mehr Wasser trinken.",
          "Richtig: Du solltest mehr Wasser trinken."
        ],
        "options": [
          "solltest",
          "kommt",
          "kann",
          "heute"
        ],
        "accept": [
          "solltest"
        ]
      },
      {
        "id": "A1.2-u9-l4:order2",
        "kind": "order",
        "prompt": "Odmorite se, molim.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Ruhen",
          "Sie",
          "sich",
          "bitte",
          "aus"
        ],
        "accept": [
          "Ruhen Sie sich bitte aus."
        ]
      },
      {
        "id": "A1.2-u9-l4:translate2",
        "kind": "translate",
        "prompt": "Odmorite se, molim.",
        "explain": [
          "Jedan prirodan prevod: Ruhen Sie sich bitte aus.",
          "Eine natürliche Übersetzung: Ruhen Sie sich bitte aus."
        ],
        "accept": [
          "Ruhen Sie sich bitte aus."
        ]
      },
      {
        "id": "A1.2-u9-l4:fill2",
        "kind": "fill",
        "prompt": "_____ Sie sich bitte aus.",
        "explain": [
          "Tačan izraz: Ruhen Sie sich bitte aus.",
          "Richtig: Ruhen Sie sich bitte aus."
        ],
        "options": [
          "Ruhen",
          "machen",
          "gehen",
          "haben"
        ],
        "accept": [
          "Ruhen"
        ]
      },
      {
        "id": "A1.2-u9-l4:order3",
        "kind": "order",
        "prompt": "Kod jakih bolova idite kod lekara.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Bei",
          "starken",
          "Schmerzen",
          "gehen",
          "Sie",
          "zum",
          "Arzt"
        ],
        "accept": [
          "Bei starken Schmerzen gehen Sie zum Arzt."
        ]
      },
      {
        "id": "A1.2-u9-l4:translate3",
        "kind": "translate",
        "prompt": "Kod jakih bolova idite kod lekara.",
        "explain": [
          "Jedan prirodan prevod: Bei starken Schmerzen gehen Sie zum Arzt.",
          "Eine natürliche Übersetzung: Bei starken Schmerzen gehen Sie zum Arzt."
        ],
        "accept": [
          "Bei starken Schmerzen gehen Sie zum Arzt."
        ]
      },
      {
        "id": "A1.2-u9-l4:fill3",
        "kind": "fill",
        "prompt": "Bei _____ Schmerzen gehen Sie zum Arzt.",
        "explain": [
          "Tačan izraz: Bei starken Schmerzen gehen Sie zum Arzt.",
          "Richtig: Bei starken Schmerzen gehen Sie zum Arzt."
        ],
        "options": [
          "starken",
          "haben",
          "kommt",
          "kann"
        ],
        "accept": [
          "starken"
        ]
      },
      {
        "id": "A1.2-u9-l4:dialog",
        "kind": "dialog",
        "prompt": "Was soll ich tun?",
        "explain": [
          "Odgovor: Ruhen Sie sich bitte aus.",
          "Passende Antwort: Ruhen Sie sich bitte aus."
        ],
        "accept": [
          "Ruhen Sie sich bitte aus."
        ],
        "options": [
          "Ruhen Sie sich bitte aus.",
          "Mein Rücken tut weh.",
          "Ich habe Fieber.",
          "Ja, bitte."
        ]
      }
    ]
  },
  {
    "id": "A1.2-u9-l5",
    "title": [
      "Termin kod lekara",
      "Arzttermin"
    ],
    "type": "lesson",
    "level": "A1.2",
    "intro": [
      "Vežba: Termin kod lekara",
      "Übung: Arzttermin"
    ],
    "example": "Ich habe morgen einen Arzttermin.",
    "items": [
      {
        "id": "A1.2-u9-l5:order1",
        "kind": "order",
        "prompt": "Sutra imam termin kod lekara.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Ich",
          "habe",
          "morgen",
          "einen",
          "Arzttermin"
        ],
        "accept": [
          "Ich habe morgen einen Arzttermin."
        ]
      },
      {
        "id": "A1.2-u9-l5:translate1",
        "kind": "translate",
        "prompt": "Sutra imam termin kod lekara.",
        "explain": [
          "Jedan prirodan prevod: Ich habe morgen einen Arzttermin.",
          "Eine natürliche Übersetzung: Ich habe morgen einen Arzttermin."
        ],
        "accept": [
          "Ich habe morgen einen Arzttermin."
        ]
      },
      {
        "id": "A1.2-u9-l5:fill1",
        "kind": "fill",
        "prompt": "Ich _____ morgen einen Arzttermin.",
        "explain": [
          "Tačan izraz: Ich habe morgen einen Arzttermin.",
          "Richtig: Ich habe morgen einen Arzttermin."
        ],
        "options": [
          "habe",
          "kann",
          "heute",
          "sehr"
        ],
        "accept": [
          "habe"
        ]
      },
      {
        "id": "A1.2-u9-l5:order2",
        "kind": "order",
        "prompt": "Ponesite zdravstvenu karticu.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Bringen",
          "Sie",
          "Ihre",
          "Versicherungskarte",
          "mit"
        ],
        "accept": [
          "Bringen Sie Ihre Versicherungskarte mit."
        ]
      },
      {
        "id": "A1.2-u9-l5:translate2",
        "kind": "translate",
        "prompt": "Ponesite zdravstvenu karticu.",
        "explain": [
          "Jedan prirodan prevod: Bringen Sie Ihre Versicherungskarte mit.",
          "Eine natürliche Übersetzung: Bringen Sie Ihre Versicherungskarte mit."
        ],
        "accept": [
          "Bringen Sie Ihre Versicherungskarte mit."
        ]
      },
      {
        "id": "A1.2-u9-l5:fill2",
        "kind": "fill",
        "prompt": "_____ Sie Ihre Versicherungskarte mit.",
        "explain": [
          "Tačan izraz: Bringen Sie Ihre Versicherungskarte mit.",
          "Richtig: Bringen Sie Ihre Versicherungskarte mit."
        ],
        "options": [
          "Bringen",
          "gehen",
          "haben",
          "kommt"
        ],
        "accept": [
          "Bringen"
        ]
      },
      {
        "id": "A1.2-u9-l5:order3",
        "kind": "order",
        "prompt": "Lekar me pregleda.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Der",
          "Arzt",
          "untersucht",
          "mich"
        ],
        "accept": [
          "Der Arzt untersucht mich."
        ]
      },
      {
        "id": "A1.2-u9-l5:translate3",
        "kind": "translate",
        "prompt": "Lekar me pregleda.",
        "explain": [
          "Jedan prirodan prevod: Der Arzt untersucht mich.",
          "Eine natürliche Übersetzung: Der Arzt untersucht mich."
        ],
        "accept": [
          "Der Arzt untersucht mich."
        ]
      },
      {
        "id": "A1.2-u9-l5:fill3",
        "kind": "fill",
        "prompt": "Der _____ untersucht mich.",
        "explain": [
          "Tačan izraz: Der Arzt untersucht mich.",
          "Richtig: Der Arzt untersucht mich."
        ],
        "options": [
          "Arzt",
          "kommt",
          "kann",
          "heute"
        ],
        "accept": [
          "Arzt"
        ]
      },
      {
        "id": "A1.2-u9-l5:dialog",
        "kind": "dialog",
        "prompt": "Wann haben Sie einen Termin?",
        "explain": [
          "Odgovor: Morgen um zehn Uhr.",
          "Passende Antwort: Morgen um zehn Uhr."
        ],
        "accept": [
          "Morgen um zehn Uhr."
        ],
        "options": [
          "Morgen um zehn Uhr.",
          "Mein Rücken tut weh.",
          "Ich habe Fieber.",
          "Ja, bitte."
        ]
      }
    ]
  },
  {
    "id": "A1.2-u9-test",
    "title": [
      "Test celine",
      "Einheitstest"
    ],
    "type": "unit",
    "level": "A1.2",
    "items": [
      {
        "id": "A1.2-u9-test:q1",
        "kind": "fill",
        "prompt": "_____ Kopf tut weh.",
        "explain": [
          "Tačan izraz: Mein Kopf tut weh.",
          "Richtig: Mein Kopf tut weh."
        ],
        "options": [
          "Mein",
          "machen",
          "gehen",
          "haben"
        ],
        "accept": [
          "Mein"
        ]
      },
      {
        "id": "A1.2-u9-test:q2",
        "kind": "dialog",
        "prompt": "Wo tut es weh?",
        "explain": [
          "Odgovor: Mein Rücken tut weh.",
          "Passende Antwort: Mein Rücken tut weh."
        ],
        "accept": [
          "Mein Rücken tut weh."
        ],
        "options": [
          "Mein Rücken tut weh.",
          "Ich habe Fieber.",
          "Ja, bitte.",
          "Ruhen Sie sich bitte aus."
        ]
      },
      {
        "id": "A1.2-u9-test:q3",
        "kind": "fill",
        "prompt": "Ich _____ seit gestern Fieber.",
        "explain": [
          "Tačan izraz: Ich habe seit gestern Fieber.",
          "Richtig: Ich habe seit gestern Fieber."
        ],
        "options": [
          "habe",
          "gehen",
          "haben",
          "kommt"
        ],
        "accept": [
          "habe"
        ]
      },
      {
        "id": "A1.2-u9-test:q4",
        "kind": "dialog",
        "prompt": "Welche Beschwerden haben Sie?",
        "explain": [
          "Odgovor: Ich habe Fieber.",
          "Passende Antwort: Ich habe Fieber."
        ],
        "accept": [
          "Ich habe Fieber."
        ],
        "options": [
          "Ich habe Fieber.",
          "Mein Rücken tut weh.",
          "Ja, bitte.",
          "Ruhen Sie sich bitte aus."
        ]
      },
      {
        "id": "A1.2-u9-test:q5",
        "kind": "fill",
        "prompt": "Ich _____ etwas gegen Husten.",
        "explain": [
          "Tačan izraz: Ich brauche etwas gegen Husten.",
          "Richtig: Ich brauche etwas gegen Husten."
        ],
        "options": [
          "brauche",
          "haben",
          "kommt",
          "kann"
        ],
        "accept": [
          "brauche"
        ]
      },
      {
        "id": "A1.2-u9-test:q6",
        "kind": "dialog",
        "prompt": "Brauchen Sie etwas gegen Schmerzen?",
        "explain": [
          "Odgovor: Ja, bitte.",
          "Passende Antwort: Ja, bitte."
        ],
        "accept": [
          "Ja, bitte."
        ],
        "options": [
          "Ja, bitte.",
          "Mein Rücken tut weh.",
          "Ich habe Fieber.",
          "Ruhen Sie sich bitte aus."
        ]
      },
      {
        "id": "A1.2-u9-test:q7",
        "kind": "fill",
        "prompt": "Du _____ mehr Wasser trinken.",
        "explain": [
          "Tačan izraz: Du solltest mehr Wasser trinken.",
          "Richtig: Du solltest mehr Wasser trinken."
        ],
        "options": [
          "solltest",
          "kommt",
          "kann",
          "heute"
        ],
        "accept": [
          "solltest"
        ]
      },
      {
        "id": "A1.2-u9-test:q8",
        "kind": "dialog",
        "prompt": "Was soll ich tun?",
        "explain": [
          "Odgovor: Ruhen Sie sich bitte aus.",
          "Passende Antwort: Ruhen Sie sich bitte aus."
        ],
        "accept": [
          "Ruhen Sie sich bitte aus."
        ],
        "options": [
          "Ruhen Sie sich bitte aus.",
          "Mein Rücken tut weh.",
          "Ich habe Fieber.",
          "Ja, bitte."
        ]
      },
      {
        "id": "A1.2-u9-test:q9",
        "kind": "fill",
        "prompt": "Ich _____ morgen einen Arzttermin.",
        "explain": [
          "Tačan izraz: Ich habe morgen einen Arzttermin.",
          "Richtig: Ich habe morgen einen Arzttermin."
        ],
        "options": [
          "habe",
          "kann",
          "heute",
          "sehr"
        ],
        "accept": [
          "habe"
        ]
      },
      {
        "id": "A1.2-u9-test:q10",
        "kind": "dialog",
        "prompt": "Wann haben Sie einen Termin?",
        "explain": [
          "Odgovor: Morgen um zehn Uhr.",
          "Passende Antwort: Morgen um zehn Uhr."
        ],
        "accept": [
          "Morgen um zehn Uhr."
        ],
        "options": [
          "Morgen um zehn Uhr.",
          "Mein Rücken tut weh.",
          "Ich habe Fieber.",
          "Ja, bitte."
        ]
      }
    ]
  },
  {
    "id": "A1.2-u10-l1",
    "title": [
      "Upoznavanje",
      "Kennenlernen"
    ],
    "type": "lesson",
    "level": "A1.2",
    "intro": [
      "Vežba: Upoznavanje",
      "Übung: Kennenlernen"
    ],
    "example": "Freut mich, dich kennenzulernen.",
    "items": [
      {
        "id": "A1.2-u10-l1:order1",
        "kind": "order",
        "prompt": "Drago mi je da smo se upoznali.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Freut",
          "mich,",
          "dich",
          "kennenzulernen"
        ],
        "accept": [
          "Freut mich, dich kennenzulernen."
        ]
      },
      {
        "id": "A1.2-u10-l1:translate1",
        "kind": "translate",
        "prompt": "Drago mi je da smo se upoznali.",
        "explain": [
          "Jedan prirodan prevod: Freut mich, dich kennenzulernen.",
          "Eine natürliche Übersetzung: Freut mich, dich kennenzulernen."
        ],
        "accept": [
          "Freut mich, dich kennenzulernen."
        ]
      },
      {
        "id": "A1.2-u10-l1:fill1",
        "kind": "fill",
        "prompt": "_____ mich, dich kennenzulernen.",
        "explain": [
          "Tačan izraz: Freut mich, dich kennenzulernen.",
          "Richtig: Freut mich, dich kennenzulernen."
        ],
        "options": [
          "Freut",
          "machen",
          "gehen",
          "haben"
        ],
        "accept": [
          "Freut"
        ]
      },
      {
        "id": "A1.2-u10-l1:order2",
        "kind": "order",
        "prompt": "Odakle si?",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Woher",
          "kommst",
          "du"
        ],
        "accept": [
          "Woher kommst du?"
        ]
      },
      {
        "id": "A1.2-u10-l1:translate2",
        "kind": "translate",
        "prompt": "Odakle si?",
        "explain": [
          "Jedan prirodan prevod: Woher kommst du?",
          "Eine natürliche Übersetzung: Woher kommst du?"
        ],
        "accept": [
          "Woher kommst du?"
        ]
      },
      {
        "id": "A1.2-u10-l1:fill2",
        "kind": "fill",
        "prompt": "_____ kommst du?",
        "explain": [
          "Tačan izraz: Woher kommst du?",
          "Richtig: Woher kommst du?"
        ],
        "options": [
          "Woher",
          "haben",
          "kommt",
          "kann"
        ],
        "accept": [
          "Woher"
        ]
      },
      {
        "id": "A1.2-u10-l1:order3",
        "kind": "order",
        "prompt": "Živim ovde dve godine.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Ich",
          "wohne",
          "seit",
          "zwei",
          "Jahren",
          "hier"
        ],
        "accept": [
          "Ich wohne seit zwei Jahren hier."
        ]
      },
      {
        "id": "A1.2-u10-l1:translate3",
        "kind": "translate",
        "prompt": "Živim ovde dve godine.",
        "explain": [
          "Jedan prirodan prevod: Ich wohne seit zwei Jahren hier.",
          "Eine natürliche Übersetzung: Ich wohne seit zwei Jahren hier."
        ],
        "accept": [
          "Ich wohne seit zwei Jahren hier."
        ]
      },
      {
        "id": "A1.2-u10-l1:fill3",
        "kind": "fill",
        "prompt": "Ich _____ seit zwei Jahren hier.",
        "explain": [
          "Tačan izraz: Ich wohne seit zwei Jahren hier.",
          "Richtig: Ich wohne seit zwei Jahren hier."
        ],
        "options": [
          "wohne",
          "kann",
          "heute",
          "sehr"
        ],
        "accept": [
          "wohne"
        ]
      },
      {
        "id": "A1.2-u10-l1:dialog",
        "kind": "dialog",
        "prompt": "Wie heißt du?",
        "explain": [
          "Odgovor: Ich heiße Ana.",
          "Passende Antwort: Ich heiße Ana."
        ],
        "accept": [
          "Ich heiße Ana."
        ],
        "options": [
          "Ich heiße Ana.",
          "Nein, er ist gerade nicht da.",
          "Ja, ich schicke dir eine Nachricht.",
          "Leider kann ich nicht."
        ]
      }
    ]
  },
  {
    "id": "A1.2-u10-l2",
    "title": [
      "Telefonski poziv",
      "Telefonat"
    ],
    "type": "lesson",
    "level": "A1.2",
    "intro": [
      "Vežba: Telefonski poziv",
      "Übung: Telefonat"
    ],
    "example": "Kann ich mit Frau Müller sprechen?",
    "items": [
      {
        "id": "A1.2-u10-l2:order1",
        "kind": "order",
        "prompt": "Mogu li da razgovaram sa gospođom Miler?",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Kann",
          "ich",
          "mit",
          "Frau",
          "Müller",
          "sprechen"
        ],
        "accept": [
          "Kann ich mit Frau Müller sprechen?"
        ]
      },
      {
        "id": "A1.2-u10-l2:translate1",
        "kind": "translate",
        "prompt": "Mogu li da razgovaram sa gospođom Miler?",
        "explain": [
          "Jedan prirodan prevod: Kann ich mit Frau Müller sprechen?",
          "Eine natürliche Übersetzung: Kann ich mit Frau Müller sprechen?"
        ],
        "accept": [
          "Kann ich mit Frau Müller sprechen?"
        ]
      },
      {
        "id": "A1.2-u10-l2:fill1",
        "kind": "fill",
        "prompt": "_____ ich mit Frau Müller sprechen?",
        "explain": [
          "Tačan izraz: Kann ich mit Frau Müller sprechen?",
          "Richtig: Kann ich mit Frau Müller sprechen?"
        ],
        "options": [
          "Kann",
          "gehen",
          "haben",
          "kommt"
        ],
        "accept": [
          "Kann"
        ]
      },
      {
        "id": "A1.2-u10-l2:order2",
        "kind": "order",
        "prompt": "Samo trenutak, molim.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Einen",
          "Moment",
          "bitte"
        ],
        "accept": [
          "Einen Moment bitte."
        ]
      },
      {
        "id": "A1.2-u10-l2:translate2",
        "kind": "translate",
        "prompt": "Samo trenutak, molim.",
        "explain": [
          "Jedan prirodan prevod: Einen Moment bitte.",
          "Eine natürliche Übersetzung: Einen Moment bitte."
        ],
        "accept": [
          "Einen Moment bitte."
        ]
      },
      {
        "id": "A1.2-u10-l2:fill2",
        "kind": "fill",
        "prompt": "Einen _____ bitte.",
        "explain": [
          "Tačan izraz: Einen Moment bitte.",
          "Richtig: Einen Moment bitte."
        ],
        "options": [
          "Moment",
          "kommt",
          "kann",
          "heute"
        ],
        "accept": [
          "Moment"
        ]
      },
      {
        "id": "A1.2-u10-l2:order3",
        "kind": "order",
        "prompt": "Pozvaću kasnije.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Ich",
          "rufe",
          "später",
          "zurück"
        ],
        "accept": [
          "Ich rufe später zurück."
        ]
      },
      {
        "id": "A1.2-u10-l2:translate3",
        "kind": "translate",
        "prompt": "Pozvaću kasnije.",
        "explain": [
          "Jedan prirodan prevod: Ich rufe später zurück.",
          "Eine natürliche Übersetzung: Ich rufe später zurück."
        ],
        "accept": [
          "Ich rufe später zurück."
        ]
      },
      {
        "id": "A1.2-u10-l2:fill3",
        "kind": "fill",
        "prompt": "Ich _____ später zurück.",
        "explain": [
          "Tačan izraz: Ich rufe später zurück.",
          "Richtig: Ich rufe später zurück."
        ],
        "options": [
          "rufe",
          "machen",
          "gehen",
          "haben"
        ],
        "accept": [
          "rufe"
        ]
      },
      {
        "id": "A1.2-u10-l2:dialog",
        "kind": "dialog",
        "prompt": "Ist Herr Weber da?",
        "explain": [
          "Odgovor: Nein, er ist gerade nicht da.",
          "Passende Antwort: Nein, er ist gerade nicht da."
        ],
        "accept": [
          "Nein, er ist gerade nicht da."
        ],
        "options": [
          "Nein, er ist gerade nicht da.",
          "Ich heiße Ana.",
          "Ja, ich schicke dir eine Nachricht.",
          "Leider kann ich nicht."
        ]
      }
    ]
  },
  {
    "id": "A1.2-u10-l3",
    "title": [
      "Kratka poruka",
      "Kurze Nachricht"
    ],
    "type": "lesson",
    "level": "A1.2",
    "intro": [
      "Vežba: Kratka poruka",
      "Übung: Kurze Nachricht"
    ],
    "example": "Ich komme heute etwas später.",
    "items": [
      {
        "id": "A1.2-u10-l3:order1",
        "kind": "order",
        "prompt": "Danas dolazim malo kasnije.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Ich",
          "komme",
          "heute",
          "etwas",
          "später"
        ],
        "accept": [
          "Ich komme heute etwas später."
        ]
      },
      {
        "id": "A1.2-u10-l3:translate1",
        "kind": "translate",
        "prompt": "Danas dolazim malo kasnije.",
        "explain": [
          "Jedan prirodan prevod: Ich komme heute etwas später.",
          "Eine natürliche Übersetzung: Ich komme heute etwas später."
        ],
        "accept": [
          "Ich komme heute etwas später."
        ]
      },
      {
        "id": "A1.2-u10-l3:fill1",
        "kind": "fill",
        "prompt": "Ich _____ heute etwas später.",
        "explain": [
          "Tačan izraz: Ich komme heute etwas später.",
          "Richtig: Ich komme heute etwas später."
        ],
        "options": [
          "komme",
          "haben",
          "kommt",
          "kann"
        ],
        "accept": [
          "komme"
        ]
      },
      {
        "id": "A1.2-u10-l3:order2",
        "kind": "order",
        "prompt": "Možeš li da me pozoveš?",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Kannst",
          "du",
          "mich",
          "bitte",
          "anrufen"
        ],
        "accept": [
          "Kannst du mich bitte anrufen?"
        ]
      },
      {
        "id": "A1.2-u10-l3:translate2",
        "kind": "translate",
        "prompt": "Možeš li da me pozoveš?",
        "explain": [
          "Jedan prirodan prevod: Kannst du mich bitte anrufen?",
          "Eine natürliche Übersetzung: Kannst du mich bitte anrufen?"
        ],
        "accept": [
          "Kannst du mich bitte anrufen?"
        ]
      },
      {
        "id": "A1.2-u10-l3:fill2",
        "kind": "fill",
        "prompt": "_____ du mich bitte anrufen?",
        "explain": [
          "Tačan izraz: Kannst du mich bitte anrufen?",
          "Richtig: Kannst du mich bitte anrufen?"
        ],
        "options": [
          "Kannst",
          "kann",
          "heute",
          "sehr"
        ],
        "accept": [
          "Kannst"
        ]
      },
      {
        "id": "A1.2-u10-l3:order3",
        "kind": "order",
        "prompt": "Do sutra, puno pozdrava!",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Bis",
          "morgen,",
          "viele",
          "Grüße"
        ],
        "accept": [
          "Bis morgen, viele Grüße!"
        ]
      },
      {
        "id": "A1.2-u10-l3:translate3",
        "kind": "translate",
        "prompt": "Do sutra, puno pozdrava!",
        "explain": [
          "Jedan prirodan prevod: Bis morgen, viele Grüße!",
          "Eine natürliche Übersetzung: Bis morgen, viele Grüße!"
        ],
        "accept": [
          "Bis morgen, viele Grüße!"
        ]
      },
      {
        "id": "A1.2-u10-l3:fill3",
        "kind": "fill",
        "prompt": "Bis _____ viele Grüße.",
        "explain": [
          "Tačan izraz: Bis morgen, viele Grüße!",
          "Richtig: Bis morgen, viele Grüße!"
        ],
        "options": [
          "morgen,",
          "gehen",
          "haben",
          "kommt"
        ],
        "accept": [
          "morgen,"
        ]
      },
      {
        "id": "A1.2-u10-l3:dialog",
        "kind": "dialog",
        "prompt": "Kannst du mir schreiben?",
        "explain": [
          "Odgovor: Ja, ich schicke dir eine Nachricht.",
          "Passende Antwort: Ja, ich schicke dir eine Nachricht."
        ],
        "accept": [
          "Ja, ich schicke dir eine Nachricht."
        ],
        "options": [
          "Ja, ich schicke dir eine Nachricht.",
          "Ich heiße Ana.",
          "Nein, er ist gerade nicht da.",
          "Leider kann ich nicht."
        ]
      }
    ]
  },
  {
    "id": "A1.2-u10-l4",
    "title": [
      "Ljubazno odbijanje",
      "Höflich absagen"
    ],
    "type": "lesson",
    "level": "A1.2",
    "intro": [
      "Vežba: Ljubazno odbijanje",
      "Übung: Höflich absagen"
    ],
    "example": "Leider habe ich keine Zeit.",
    "items": [
      {
        "id": "A1.2-u10-l4:order1",
        "kind": "order",
        "prompt": "Nažalost nemam vremena.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Leider",
          "habe",
          "ich",
          "keine",
          "Zeit"
        ],
        "accept": [
          "Leider habe ich keine Zeit."
        ]
      },
      {
        "id": "A1.2-u10-l4:translate1",
        "kind": "translate",
        "prompt": "Nažalost nemam vremena.",
        "explain": [
          "Jedan prirodan prevod: Leider habe ich keine Zeit.",
          "Eine natürliche Übersetzung: Leider habe ich keine Zeit."
        ],
        "accept": [
          "Leider habe ich keine Zeit."
        ]
      },
      {
        "id": "A1.2-u10-l4:fill1",
        "kind": "fill",
        "prompt": "_____ habe ich keine Zeit.",
        "explain": [
          "Tačan izraz: Leider habe ich keine Zeit.",
          "Richtig: Leider habe ich keine Zeit."
        ],
        "options": [
          "Leider",
          "kommt",
          "kann",
          "heute"
        ],
        "accept": [
          "Leider"
        ]
      },
      {
        "id": "A1.2-u10-l4:order2",
        "kind": "order",
        "prompt": "Možda drugi put.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Vielleicht",
          "ein",
          "anderes",
          "Mal"
        ],
        "accept": [
          "Vielleicht ein anderes Mal."
        ]
      },
      {
        "id": "A1.2-u10-l4:translate2",
        "kind": "translate",
        "prompt": "Možda drugi put.",
        "explain": [
          "Jedan prirodan prevod: Vielleicht ein anderes Mal.",
          "Eine natürliche Übersetzung: Vielleicht ein anderes Mal."
        ],
        "accept": [
          "Vielleicht ein anderes Mal."
        ]
      },
      {
        "id": "A1.2-u10-l4:fill2",
        "kind": "fill",
        "prompt": "_____ ein anderes Mal.",
        "explain": [
          "Tačan izraz: Vielleicht ein anderes Mal.",
          "Richtig: Vielleicht ein anderes Mal."
        ],
        "options": [
          "Vielleicht",
          "machen",
          "gehen",
          "haben"
        ],
        "accept": [
          "Vielleicht"
        ]
      },
      {
        "id": "A1.2-u10-l4:order3",
        "kind": "order",
        "prompt": "Hvala na pozivu, ali ne mogu.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Danke",
          "für",
          "die",
          "Einladung,",
          "aber",
          "ich",
          "kann",
          "nicht"
        ],
        "accept": [
          "Danke für die Einladung, aber ich kann nicht."
        ]
      },
      {
        "id": "A1.2-u10-l4:translate3",
        "kind": "translate",
        "prompt": "Hvala na pozivu, ali ne mogu.",
        "explain": [
          "Jedan prirodan prevod: Danke für die Einladung, aber ich kann nicht.",
          "Eine natürliche Übersetzung: Danke für die Einladung, aber ich kann nicht."
        ],
        "accept": [
          "Danke für die Einladung, aber ich kann nicht."
        ]
      },
      {
        "id": "A1.2-u10-l4:fill3",
        "kind": "fill",
        "prompt": "_____ für die Einladung, aber ich kann nicht.",
        "explain": [
          "Tačan izraz: Danke für die Einladung, aber ich kann nicht.",
          "Richtig: Danke für die Einladung, aber ich kann nicht."
        ],
        "options": [
          "Danke",
          "haben",
          "kommt",
          "kann"
        ],
        "accept": [
          "Danke"
        ]
      },
      {
        "id": "A1.2-u10-l4:dialog",
        "kind": "dialog",
        "prompt": "Kommst du heute mit?",
        "explain": [
          "Odgovor: Leider kann ich nicht.",
          "Passende Antwort: Leider kann ich nicht."
        ],
        "accept": [
          "Leider kann ich nicht."
        ],
        "options": [
          "Leider kann ich nicht.",
          "Ich heiße Ana.",
          "Nein, er ist gerade nicht da.",
          "Ja, ich schicke dir eine Nachricht."
        ]
      }
    ]
  },
  {
    "id": "A1.2-u10-l5",
    "title": [
      "Poziv na druženje",
      "Gemeinsam etwas unternehmen"
    ],
    "type": "lesson",
    "level": "A1.2",
    "intro": [
      "Vežba: Poziv na druženje",
      "Übung: Gemeinsam etwas unternehmen"
    ],
    "example": "Wollen wir einen Kaffee trinken?",
    "items": [
      {
        "id": "A1.2-u10-l5:order1",
        "kind": "order",
        "prompt": "Hoćemo li na kafu?",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Wollen",
          "wir",
          "einen",
          "Kaffee",
          "trinken"
        ],
        "accept": [
          "Wollen wir einen Kaffee trinken?"
        ]
      },
      {
        "id": "A1.2-u10-l5:translate1",
        "kind": "translate",
        "prompt": "Hoćemo li na kafu?",
        "explain": [
          "Jedan prirodan prevod: Wollen wir einen Kaffee trinken?",
          "Eine natürliche Übersetzung: Wollen wir einen Kaffee trinken?"
        ],
        "accept": [
          "Wollen wir einen Kaffee trinken?"
        ]
      },
      {
        "id": "A1.2-u10-l5:fill1",
        "kind": "fill",
        "prompt": "_____ wir einen Kaffee trinken?",
        "explain": [
          "Tačan izraz: Wollen wir einen Kaffee trinken?",
          "Richtig: Wollen wir einen Kaffee trinken?"
        ],
        "options": [
          "Wollen",
          "kann",
          "heute",
          "sehr"
        ],
        "accept": [
          "Wollen"
        ]
      },
      {
        "id": "A1.2-u10-l5:order2",
        "kind": "order",
        "prompt": "Hajde da šetamo u subotu.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Lass",
          "uns",
          "am",
          "Samstag",
          "spazieren",
          "gehen"
        ],
        "accept": [
          "Lass uns am Samstag spazieren gehen."
        ]
      },
      {
        "id": "A1.2-u10-l5:translate2",
        "kind": "translate",
        "prompt": "Hajde da šetamo u subotu.",
        "explain": [
          "Jedan prirodan prevod: Lass uns am Samstag spazieren gehen.",
          "Eine natürliche Übersetzung: Lass uns am Samstag spazieren gehen."
        ],
        "accept": [
          "Lass uns am Samstag spazieren gehen."
        ]
      },
      {
        "id": "A1.2-u10-l5:fill2",
        "kind": "fill",
        "prompt": "_____ uns am Samstag spazieren gehen.",
        "explain": [
          "Tačan izraz: Lass uns am Samstag spazieren gehen.",
          "Richtig: Lass uns am Samstag spazieren gehen."
        ],
        "options": [
          "Lass",
          "gehen",
          "haben",
          "kommt"
        ],
        "accept": [
          "Lass"
        ]
      },
      {
        "id": "A1.2-u10-l5:order3",
        "kind": "order",
        "prompt": "Radujem se našem susretu.",
        "explain": [
          "Sastavi nemačku rečenicu u pravilnom redosledu.",
          "Setze die Wörter in die richtige Reihenfolge."
        ],
        "tokens": [
          "Ich",
          "freue",
          "mich",
          "auf",
          "unser",
          "Treffen"
        ],
        "accept": [
          "Ich freue mich auf unser Treffen."
        ]
      },
      {
        "id": "A1.2-u10-l5:translate3",
        "kind": "translate",
        "prompt": "Radujem se našem susretu.",
        "explain": [
          "Jedan prirodan prevod: Ich freue mich auf unser Treffen.",
          "Eine natürliche Übersetzung: Ich freue mich auf unser Treffen."
        ],
        "accept": [
          "Ich freue mich auf unser Treffen."
        ]
      },
      {
        "id": "A1.2-u10-l5:fill3",
        "kind": "fill",
        "prompt": "Ich _____ mich auf unser Treffen.",
        "explain": [
          "Tačan izraz: Ich freue mich auf unser Treffen.",
          "Richtig: Ich freue mich auf unser Treffen."
        ],
        "options": [
          "freue",
          "kommt",
          "kann",
          "heute"
        ],
        "accept": [
          "freue"
        ]
      },
      {
        "id": "A1.2-u10-l5:dialog",
        "kind": "dialog",
        "prompt": "Hast du Lust auf einen Kaffee?",
        "explain": [
          "Odgovor: Ja, sehr gern.",
          "Passende Antwort: Ja, sehr gern."
        ],
        "accept": [
          "Ja, sehr gern."
        ],
        "options": [
          "Ja, sehr gern.",
          "Ich heiße Ana.",
          "Nein, er ist gerade nicht da.",
          "Ja, ich schicke dir eine Nachricht."
        ]
      }
    ]
  },
  {
    "id": "A1.2-u10-test",
    "title": [
      "Test celine",
      "Einheitstest"
    ],
    "type": "unit",
    "level": "A1.2",
    "items": [
      {
        "id": "A1.2-u10-test:q1",
        "kind": "fill",
        "prompt": "_____ mich, dich kennenzulernen.",
        "explain": [
          "Tačan izraz: Freut mich, dich kennenzulernen.",
          "Richtig: Freut mich, dich kennenzulernen."
        ],
        "options": [
          "Freut",
          "machen",
          "gehen",
          "haben"
        ],
        "accept": [
          "Freut"
        ]
      },
      {
        "id": "A1.2-u10-test:q2",
        "kind": "dialog",
        "prompt": "Wie heißt du?",
        "explain": [
          "Odgovor: Ich heiße Ana.",
          "Passende Antwort: Ich heiße Ana."
        ],
        "accept": [
          "Ich heiße Ana."
        ],
        "options": [
          "Ich heiße Ana.",
          "Nein, er ist gerade nicht da.",
          "Ja, ich schicke dir eine Nachricht.",
          "Leider kann ich nicht."
        ]
      },
      {
        "id": "A1.2-u10-test:q3",
        "kind": "fill",
        "prompt": "_____ ich mit Frau Müller sprechen?",
        "explain": [
          "Tačan izraz: Kann ich mit Frau Müller sprechen?",
          "Richtig: Kann ich mit Frau Müller sprechen?"
        ],
        "options": [
          "Kann",
          "gehen",
          "haben",
          "kommt"
        ],
        "accept": [
          "Kann"
        ]
      },
      {
        "id": "A1.2-u10-test:q4",
        "kind": "dialog",
        "prompt": "Ist Herr Weber da?",
        "explain": [
          "Odgovor: Nein, er ist gerade nicht da.",
          "Passende Antwort: Nein, er ist gerade nicht da."
        ],
        "accept": [
          "Nein, er ist gerade nicht da."
        ],
        "options": [
          "Nein, er ist gerade nicht da.",
          "Ich heiße Ana.",
          "Ja, ich schicke dir eine Nachricht.",
          "Leider kann ich nicht."
        ]
      },
      {
        "id": "A1.2-u10-test:q5",
        "kind": "fill",
        "prompt": "Ich _____ heute etwas später.",
        "explain": [
          "Tačan izraz: Ich komme heute etwas später.",
          "Richtig: Ich komme heute etwas später."
        ],
        "options": [
          "komme",
          "haben",
          "kommt",
          "kann"
        ],
        "accept": [
          "komme"
        ]
      },
      {
        "id": "A1.2-u10-test:q6",
        "kind": "dialog",
        "prompt": "Kannst du mir schreiben?",
        "explain": [
          "Odgovor: Ja, ich schicke dir eine Nachricht.",
          "Passende Antwort: Ja, ich schicke dir eine Nachricht."
        ],
        "accept": [
          "Ja, ich schicke dir eine Nachricht."
        ],
        "options": [
          "Ja, ich schicke dir eine Nachricht.",
          "Ich heiße Ana.",
          "Nein, er ist gerade nicht da.",
          "Leider kann ich nicht."
        ]
      },
      {
        "id": "A1.2-u10-test:q7",
        "kind": "fill",
        "prompt": "_____ habe ich keine Zeit.",
        "explain": [
          "Tačan izraz: Leider habe ich keine Zeit.",
          "Richtig: Leider habe ich keine Zeit."
        ],
        "options": [
          "Leider",
          "kommt",
          "kann",
          "heute"
        ],
        "accept": [
          "Leider"
        ]
      },
      {
        "id": "A1.2-u10-test:q8",
        "kind": "dialog",
        "prompt": "Kommst du heute mit?",
        "explain": [
          "Odgovor: Leider kann ich nicht.",
          "Passende Antwort: Leider kann ich nicht."
        ],
        "accept": [
          "Leider kann ich nicht."
        ],
        "options": [
          "Leider kann ich nicht.",
          "Ich heiße Ana.",
          "Nein, er ist gerade nicht da.",
          "Ja, ich schicke dir eine Nachricht."
        ]
      },
      {
        "id": "A1.2-u10-test:q9",
        "kind": "fill",
        "prompt": "_____ wir einen Kaffee trinken?",
        "explain": [
          "Tačan izraz: Wollen wir einen Kaffee trinken?",
          "Richtig: Wollen wir einen Kaffee trinken?"
        ],
        "options": [
          "Wollen",
          "kann",
          "heute",
          "sehr"
        ],
        "accept": [
          "Wollen"
        ]
      },
      {
        "id": "A1.2-u10-test:q10",
        "kind": "dialog",
        "prompt": "Hast du Lust auf einen Kaffee?",
        "explain": [
          "Odgovor: Ja, sehr gern.",
          "Passende Antwort: Ja, sehr gern."
        ],
        "accept": [
          "Ja, sehr gern."
        ],
        "options": [
          "Ja, sehr gern.",
          "Ich heiße Ana.",
          "Nein, er ist gerade nicht da.",
          "Ja, ich schicke dir eine Nachricht."
        ]
      }
    ]
  },
  {
    "id": "A1.2-exam",
    "title": [
      "Završni ispit A1.2",
      "Abschlussprüfung A1.2"
    ],
    "type": "exam",
    "level": "A1.2",
    "items": [
      {
        "id": "A1.2-exam:q1",
        "kind": "fill",
        "prompt": "Ich bin _____.",
        "explain": [
          "Tačan izraz: Ich bin Elektriker.",
          "Richtig: Ich bin Elektriker."
        ],
        "options": [
          "Elektriker",
          "machen",
          "gehen",
          "haben"
        ],
        "accept": [
          "Elektriker"
        ]
      },
      {
        "id": "A1.2-exam:q2",
        "kind": "fill",
        "prompt": "Ich _____ heute arbeiten.",
        "explain": [
          "Tačan izraz: Ich muss heute arbeiten.",
          "Richtig: Ich muss heute arbeiten."
        ],
        "options": [
          "muss",
          "kommt",
          "kann",
          "heute"
        ],
        "accept": [
          "muss"
        ]
      },
      {
        "id": "A1.2-exam:q3",
        "kind": "fill",
        "prompt": "Ich _____ eine blaue Jacke.",
        "explain": [
          "Tačan izraz: Ich suche eine blaue Jacke.",
          "Richtig: Ich suche eine blaue Jacke."
        ],
        "options": [
          "suche",
          "machen",
          "gehen",
          "haben"
        ],
        "accept": [
          "suche"
        ]
      },
      {
        "id": "A1.2-exam:q4",
        "kind": "fill",
        "prompt": "Ich _____ mit Karte bezahlen.",
        "explain": [
          "Tačan izraz: Ich möchte mit Karte bezahlen.",
          "Richtig: Ich möchte mit Karte bezahlen."
        ],
        "options": [
          "möchte",
          "kommt",
          "kann",
          "heute"
        ],
        "accept": [
          "möchte"
        ]
      },
      {
        "id": "A1.2-exam:q5",
        "kind": "fill",
        "prompt": "_____ ich die Speisekarte bekommen?",
        "explain": [
          "Tačan izraz: Kann ich die Speisekarte bekommen?",
          "Richtig: Kann ich die Speisekarte bekommen?"
        ],
        "options": [
          "Kann",
          "machen",
          "gehen",
          "haben"
        ],
        "accept": [
          "Kann"
        ]
      },
      {
        "id": "A1.2-exam:q6",
        "kind": "fill",
        "prompt": "_____ dir das Essen?",
        "explain": [
          "Tačan izraz: Schmeckt dir das Essen?",
          "Richtig: Schmeckt dir das Essen?"
        ],
        "options": [
          "Schmeckt",
          "kommt",
          "kann",
          "heute"
        ],
        "accept": [
          "Schmeckt"
        ]
      },
      {
        "id": "A1.2-exam:q7",
        "kind": "fill",
        "prompt": "Die _____ ist neben dem Wohnzimmer.",
        "explain": [
          "Tačan izraz: Die Küche ist neben dem Wohnzimmer.",
          "Richtig: Die Küche ist neben dem Wohnzimmer."
        ],
        "options": [
          "Küche",
          "machen",
          "gehen",
          "haben"
        ],
        "accept": [
          "Küche"
        ]
      },
      {
        "id": "A1.2-exam:q8",
        "kind": "fill",
        "prompt": "Das ist _____ Zimmer.",
        "explain": [
          "Tačan izraz: Das ist mein Zimmer.",
          "Richtig: Das ist mein Zimmer."
        ],
        "options": [
          "mein",
          "kommt",
          "kann",
          "heute"
        ],
        "accept": [
          "mein"
        ]
      },
      {
        "id": "A1.2-exam:q9",
        "kind": "fill",
        "prompt": "Der Zug _____ um halb neun.",
        "explain": [
          "Tačan izraz: Der Zug fährt um halb neun.",
          "Richtig: Der Zug fährt um halb neun."
        ],
        "options": [
          "fährt",
          "machen",
          "gehen",
          "haben"
        ],
        "accept": [
          "fährt"
        ]
      },
      {
        "id": "A1.2-exam:q10",
        "kind": "fill",
        "prompt": "Ich _____ den Termin verschieben.",
        "explain": [
          "Tačan izraz: Ich muss den Termin verschieben.",
          "Richtig: Ich muss den Termin verschieben."
        ],
        "options": [
          "muss",
          "kommt",
          "kann",
          "heute"
        ],
        "accept": [
          "muss"
        ]
      },
      {
        "id": "A1.2-exam:q11",
        "kind": "fill",
        "prompt": "Die _____ ist neben der Bank.",
        "explain": [
          "Tačan izraz: Die Apotheke ist neben der Bank.",
          "Richtig: Die Apotheke ist neben der Bank."
        ],
        "options": [
          "Apotheke",
          "machen",
          "gehen",
          "haben"
        ],
        "accept": [
          "Apotheke"
        ]
      },
      {
        "id": "A1.2-exam:q12",
        "kind": "fill",
        "prompt": "_____ Sie bis zur Ampel.",
        "explain": [
          "Tačan izraz: Gehen Sie bis zur Ampel.",
          "Richtig: Gehen Sie bis zur Ampel."
        ],
        "options": [
          "Gehen",
          "kommt",
          "kann",
          "heute"
        ],
        "accept": [
          "Gehen"
        ]
      },
      {
        "id": "A1.2-exam:q13",
        "kind": "fill",
        "prompt": "Ich _____ mich für Musik.",
        "explain": [
          "Tačan izraz: Ich interessiere mich für Musik.",
          "Richtig: Ich interessiere mich für Musik."
        ],
        "options": [
          "interessiere",
          "machen",
          "gehen",
          "haben"
        ],
        "accept": [
          "interessiere"
        ]
      },
      {
        "id": "A1.2-exam:q14",
        "kind": "fill",
        "prompt": "_____ du mitkommen?",
        "explain": [
          "Tačan izraz: Möchtest du mitkommen?",
          "Richtig: Möchtest du mitkommen?"
        ],
        "options": [
          "Möchtest",
          "kommt",
          "kann",
          "heute"
        ],
        "accept": [
          "Möchtest"
        ]
      },
      {
        "id": "A1.2-exam:q15",
        "kind": "fill",
        "prompt": "_____ Kopf tut weh.",
        "explain": [
          "Tačan izraz: Mein Kopf tut weh.",
          "Richtig: Mein Kopf tut weh."
        ],
        "options": [
          "Mein",
          "machen",
          "gehen",
          "haben"
        ],
        "accept": [
          "Mein"
        ]
      },
      {
        "id": "A1.2-exam:q16",
        "kind": "fill",
        "prompt": "Du _____ mehr Wasser trinken.",
        "explain": [
          "Tačan izraz: Du solltest mehr Wasser trinken.",
          "Richtig: Du solltest mehr Wasser trinken."
        ],
        "options": [
          "solltest",
          "kommt",
          "kann",
          "heute"
        ],
        "accept": [
          "solltest"
        ]
      },
      {
        "id": "A1.2-exam:q17",
        "kind": "fill",
        "prompt": "_____ mich, dich kennenzulernen.",
        "explain": [
          "Tačan izraz: Freut mich, dich kennenzulernen.",
          "Richtig: Freut mich, dich kennenzulernen."
        ],
        "options": [
          "Freut",
          "machen",
          "gehen",
          "haben"
        ],
        "accept": [
          "Freut"
        ]
      },
      {
        "id": "A1.2-exam:q18",
        "kind": "fill",
        "prompt": "_____ habe ich keine Zeit.",
        "explain": [
          "Tačan izraz: Leider habe ich keine Zeit.",
          "Richtig: Leider habe ich keine Zeit."
        ],
        "options": [
          "Leider",
          "kommt",
          "kann",
          "heute"
        ],
        "accept": [
          "Leider"
        ]
      }
    ]
  }
] as Session[];
