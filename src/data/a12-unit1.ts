import type { Session } from "../core/types";

// A1.2 Unit 1 pilot: five real lessons (10 tasks each) and one 10-task test.
// Existing A1.1 IDs and content are unchanged.
export const a12Unit1: Session[] = [
  {
    "id": "A1.2-u1-l1",
    "title": [
      "Jutarnja rutina",
      "Morgenroutine"
    ],
    "type": "lesson",
    "level": "A1.2",
    "intro": [
      "Tema: Jutarnja rutina",
      "Thema: Morgenroutine"
    ],
    "example": "Ich stehe um sieben Uhr auf.",
    "items": [
      {
        "id": "A1.2-u1-l1:q1",
        "kind": "fill",
        "prompt": "Ich ___ um sieben Uhr auf.",
        "explain": [
          "Uz ich: stehe; auf ide na kraj.",
          "Uz ich: stehe; auf ide na kraj."
        ],
        "accept": [
          "stehe"
        ],
        "options": [
          "stehe",
          "steht",
          "stehen",
          "stehst"
        ]
      },
      {
        "id": "A1.2-u1-l1:q2",
        "kind": "grammar",
        "prompt": "Ich ___ um sieben Uhr.",
        "explain": [
          "Uz ich: frühstücke.",
          "Uz ich: frühstücke."
        ],
        "accept": [
          "frühstücke"
        ],
        "options": [
          "frühstücke",
          "frühstückt",
          "frühstücken",
          "frühstückst"
        ]
      },
      {
        "id": "A1.2-u1-l1:q3",
        "kind": "conversation",
        "prompt": "Wann stehst du auf?",
        "explain": [
          "Pitanje Wann traži vreme.",
          "Pitanje Wann traži vreme."
        ],
        "accept": [
          "Ich stehe um sieben Uhr auf."
        ],
        "options": [
          "Ich stehe um sieben Uhr auf.",
          "Ich bin im Büro.",
          "Ich trinke Wasser.",
          "Es ist Montag."
        ]
      },
      {
        "id": "A1.2-u1-l1:q4",
        "kind": "translate",
        "prompt": "Ustajem u sedam sati.",
        "explain": [
          "Razdvojivi glagol aufstehen.",
          "Razdvojivi glagol aufstehen."
        ],
        "accept": [
          "Ich stehe um sieben Uhr auf."
        ]
      },
      {
        "id": "A1.2-u1-l1:q5",
        "kind": "order",
        "prompt": "Ujutru pijem kafu.",
        "explain": [
          "Glagol trinke na drugom mestu.",
          "Glagol trinke na drugom mestu."
        ],
        "accept": [
          "Morgens trinke ich Kaffee."
        ],
        "tokens": [
          "Morgens",
          "trinke",
          "ich",
          "Kaffee"
        ]
      },
      {
        "id": "A1.2-u1-l1:q6",
        "kind": "fill",
        "prompt": "Danach ___ ich Kaffee.",
        "explain": [
          "Uz ich: trinke.",
          "Uz ich: trinke."
        ],
        "accept": [
          "trinke"
        ],
        "options": [
          "trinke",
          "trinkst",
          "trinkt",
          "trinken"
        ]
      },
      {
        "id": "A1.2-u1-l1:q7",
        "kind": "grammar",
        "prompt": "Er ___ sich die Zähne.",
        "explain": [
          "Uz er: putzt.",
          "Uz er: putzt."
        ],
        "accept": [
          "putzt"
        ],
        "options": [
          "putzt",
          "putzen",
          "putze",
          "putzt ihr"
        ]
      },
      {
        "id": "A1.2-u1-l1:q8",
        "kind": "conversation",
        "prompt": "Was machst du morgens?",
        "explain": [
          "Odgovori aktivnostima.",
          "Odgovori aktivnostima."
        ],
        "accept": [
          "Ich frühstücke und lese Nachrichten."
        ],
        "options": [
          "Ich frühstücke und lese Nachrichten.",
          "Ich wohne in Berlin.",
          "Der Bus ist rot.",
          "Heute ist Sonntag."
        ]
      },
      {
        "id": "A1.2-u1-l1:q9",
        "kind": "translate",
        "prompt": "Posle doručka idem na posao.",
        "explain": [
          "Nach zahteva dativ.",
          "Nach zahteva dativ."
        ],
        "accept": [
          "Nach dem Frühstück gehe ich zur Arbeit."
        ]
      },
      {
        "id": "A1.2-u1-l1:q10",
        "kind": "order",
        "prompt": "Prvo se tuširam.",
        "explain": [
          "Zuerst je na prvom mestu, glagol na drugom.",
          "Zuerst je na prvom mestu, glagol na drugom."
        ],
        "accept": [
          "Zuerst dusche ich."
        ],
        "tokens": [
          "Zuerst",
          "dusche",
          "ich"
        ]
      }
    ]
  },
  {
    "id": "A1.2-u1-l2",
    "title": [
      "Razdvojivi glagoli",
      "Trennbare Verben"
    ],
    "type": "lesson",
    "level": "A1.2",
    "intro": [
      "Tema: Razdvojivi glagoli",
      "Thema: Trennbare Verben"
    ],
    "example": "Ich kaufe heute ein.",
    "items": [
      {
        "id": "A1.2-u1-l2:q1",
        "kind": "fill",
        "prompt": "Ich ___ heute im Supermarkt ___.",
        "explain": [
          "Einkaufen: ich kaufe ... ein.",
          "Einkaufen: ich kaufe ... ein."
        ],
        "accept": [
          "kaufe ... ein"
        ],
        "options": [
          "kaufe ... ein",
          "kaufen ... ein",
          "kauft ... ein",
          "kaufe ... an"
        ]
      },
      {
        "id": "A1.2-u1-l2:q2",
        "kind": "grammar",
        "prompt": "Er ___ seine Mutter ___.",
        "explain": [
          "Anrufen: er ruft ... an.",
          "Anrufen: er ruft ... an."
        ],
        "accept": [
          "ruft ... an"
        ],
        "options": [
          "ruft ... an",
          "rufe ... an",
          "rufen ... an",
          "ruft ... auf"
        ]
      },
      {
        "id": "A1.2-u1-l2:q3",
        "kind": "conversation",
        "prompt": "Wann fängt der Kurs an?",
        "explain": [
          "Anfangen: fängt ... an.",
          "Anfangen: fängt ... an."
        ],
        "accept": [
          "Der Kurs fängt um neun Uhr an."
        ],
        "options": [
          "Der Kurs fängt um neun Uhr an.",
          "Ich habe Hunger.",
          "Ich wohne hier.",
          "Der Tisch ist groß."
        ]
      },
      {
        "id": "A1.2-u1-l2:q4",
        "kind": "translate",
        "prompt": "Zovem te večeras.",
        "explain": [
          "Anrufen je razdvojiv.",
          "Anrufen je razdvojiv."
        ],
        "accept": [
          "Ich rufe dich heute Abend an."
        ]
      },
      {
        "id": "A1.2-u1-l2:q5",
        "kind": "order",
        "prompt": "Voz polazi u osam.",
        "explain": [
          "Abfahren: fährt ... ab.",
          "Abfahren: fährt ... ab."
        ],
        "accept": [
          "Der Zug fährt um acht Uhr ab."
        ],
        "tokens": [
          "Der",
          "Zug",
          "fährt",
          "um",
          "acht",
          "Uhr",
          "ab"
        ]
      },
      {
        "id": "A1.2-u1-l2:q6",
        "kind": "fill",
        "prompt": "Wir ___ am Samstag ___.",
        "explain": [
          "Aufräumen: wir räumen ... auf.",
          "Aufräumen: wir räumen ... auf."
        ],
        "accept": [
          "räumen ... auf"
        ],
        "options": [
          "räumen ... auf",
          "räumt ... auf",
          "räume ... auf",
          "räumen ... an"
        ]
      },
      {
        "id": "A1.2-u1-l2:q7",
        "kind": "grammar",
        "prompt": "Du ___ das Fenster ___.",
        "explain": [
          "Aufmachen: du machst ... auf.",
          "Aufmachen: du machst ... auf."
        ],
        "accept": [
          "machst ... auf"
        ],
        "options": [
          "machst ... auf",
          "macht ... auf",
          "mache ... auf",
          "machst ... an"
        ]
      },
      {
        "id": "A1.2-u1-l2:q8",
        "kind": "conversation",
        "prompt": "Holst du mich ab?",
        "explain": [
          "Abholen: hole ... ab.",
          "Abholen: hole ... ab."
        ],
        "accept": [
          "Ja, ich hole dich um sechs Uhr ab."
        ],
        "options": [
          "Ja, ich hole dich um sechs Uhr ab.",
          "Ich bin müde.",
          "Der Kaffee ist heiß.",
          "Ich lese gern."
        ]
      },
      {
        "id": "A1.2-u1-l2:q9",
        "kind": "translate",
        "prompt": "Uveče gledamo televiziju.",
        "explain": [
          "Fernsehen: sehen ... fern.",
          "Fernsehen: sehen ... fern."
        ],
        "accept": [
          "Abends sehen wir fern."
        ]
      },
      {
        "id": "A1.2-u1-l2:q10",
        "kind": "order",
        "prompt": "Danas ustajem rano.",
        "explain": [
          "Glagol na drugom mestu.",
          "Glagol na drugom mestu."
        ],
        "accept": [
          "Heute stehe ich früh auf."
        ],
        "tokens": [
          "Heute",
          "stehe",
          "ich",
          "früh",
          "auf"
        ]
      }
    ]
  },
  {
    "id": "A1.2-u1-l3",
    "title": [
      "Redosled obaveza",
      "Tagesablauf"
    ],
    "type": "lesson",
    "level": "A1.2",
    "intro": [
      "Tema: Redosled obaveza",
      "Thema: Tagesablauf"
    ],
    "example": "Zuerst arbeite ich, dann mache ich Pause.",
    "items": [
      {
        "id": "A1.2-u1-l3:q1",
        "kind": "fill",
        "prompt": "___ frühstücke ich, dann gehe ich los.",
        "explain": [
          "Zuerst znači najpre.",
          "Zuerst znači najpre."
        ],
        "accept": [
          "Zuerst"
        ],
        "options": [
          "Zuerst",
          "Danach",
          "Gestern",
          "Nie"
        ]
      },
      {
        "id": "A1.2-u1-l3:q2",
        "kind": "grammar",
        "prompt": "Danach ___ ich zur Arbeit.",
        "explain": [
          "Uz ich: fahre.",
          "Uz ich: fahre."
        ],
        "accept": [
          "fahre"
        ],
        "options": [
          "fahre",
          "fährt",
          "fährst",
          "fahren"
        ]
      },
      {
        "id": "A1.2-u1-l3:q3",
        "kind": "conversation",
        "prompt": "Was machst du nach der Arbeit?",
        "explain": [
          "Danach povezuje događaje.",
          "Danach povezuje događaje."
        ],
        "accept": [
          "Danach gehe ich nach Hause."
        ],
        "options": [
          "Danach gehe ich nach Hause.",
          "Es ist blau.",
          "Ich bin dreißig.",
          "Das ist mein Buch."
        ]
      },
      {
        "id": "A1.2-u1-l3:q4",
        "kind": "translate",
        "prompt": "Zatim pravim pauzu.",
        "explain": [
          "Dann stoji na prvom mestu.",
          "Dann stoji na prvom mestu."
        ],
        "accept": [
          "Dann mache ich eine Pause."
        ]
      },
      {
        "id": "A1.2-u1-l3:q5",
        "kind": "order",
        "prompt": "Na kraju idem kući.",
        "explain": [
          "Glagol je na drugom mestu.",
          "Glagol je na drugom mestu."
        ],
        "accept": [
          "Zum Schluss gehe ich nach Hause."
        ],
        "tokens": [
          "Zum",
          "Schluss",
          "gehe",
          "ich",
          "nach",
          "Hause"
        ]
      },
      {
        "id": "A1.2-u1-l3:q6",
        "kind": "fill",
        "prompt": "Am Nachmittag ___ ich Sport.",
        "explain": [
          "Ich mache Sport.",
          "Ich mache Sport."
        ],
        "accept": [
          "mache"
        ],
        "options": [
          "mache",
          "machst",
          "macht",
          "machen"
        ]
      },
      {
        "id": "A1.2-u1-l3:q7",
        "kind": "grammar",
        "prompt": "Vor dem Essen ___ ich meine Hände.",
        "explain": [
          "Ich wasche meine Hände.",
          "Ich wasche meine Hände."
        ],
        "accept": [
          "wasche"
        ],
        "options": [
          "wasche",
          "wäscht",
          "waschen",
          "wäschst"
        ]
      },
      {
        "id": "A1.2-u1-l3:q8",
        "kind": "conversation",
        "prompt": "Wann gehst du einkaufen?",
        "explain": [
          "Wann traži vremenski odgovor.",
          "Wann traži vremenski odgovor."
        ],
        "accept": [
          "Nach der Arbeit gehe ich einkaufen."
        ],
        "options": [
          "Nach der Arbeit gehe ich einkaufen.",
          "Mein Bruder heißt Paul.",
          "Das Wetter ist gut.",
          "Ich habe zwei Katzen."
        ]
      },
      {
        "id": "A1.2-u1-l3:q9",
        "kind": "translate",
        "prompt": "Pre posla pijem čaj.",
        "explain": [
          "Vor der Arbeit je vremenska odredba.",
          "Vor der Arbeit je vremenska odredba."
        ],
        "accept": [
          "Vor der Arbeit trinke ich Tee."
        ]
      },
      {
        "id": "A1.2-u1-l3:q10",
        "kind": "order",
        "prompt": "Posle toga učim nemački.",
        "explain": [
          "Danach + glagol + subjekat.",
          "Danach + glagol + subjekat."
        ],
        "accept": [
          "Danach lerne ich Deutsch."
        ],
        "tokens": [
          "Danach",
          "lerne",
          "ich",
          "Deutsch"
        ]
      }
    ]
  },
  {
    "id": "A1.2-u1-l4",
    "title": [
      "Negacija",
      "Verneinung"
    ],
    "type": "lesson",
    "level": "A1.2",
    "intro": [
      "Tema: Negacija",
      "Thema: Verneinung"
    ],
    "example": "Ich habe keine Zeit.",
    "items": [
      {
        "id": "A1.2-u1-l4:q1",
        "kind": "fill",
        "prompt": "Ich habe ___ Zeit.",
        "explain": [
          "Zeit je ženskog roda: keine Zeit.",
          "Zeit je ženskog roda: keine Zeit."
        ],
        "accept": [
          "keine"
        ],
        "options": [
          "keine",
          "kein",
          "keinen",
          "nicht"
        ]
      },
      {
        "id": "A1.2-u1-l4:q2",
        "kind": "grammar",
        "prompt": "Das ist ___ Problem.",
        "explain": [
          "Problem je srednjeg roda: kein.",
          "Problem je srednjeg roda: kein."
        ],
        "accept": [
          "kein"
        ],
        "options": [
          "kein",
          "keine",
          "keinen",
          "nicht"
        ]
      },
      {
        "id": "A1.2-u1-l4:q3",
        "kind": "conversation",
        "prompt": "Hast du heute Zeit?",
        "explain": [
          "Negacija imenice Zeit: keine.",
          "Negacija imenice Zeit: keine."
        ],
        "accept": [
          "Nein, ich habe heute keine Zeit."
        ],
        "options": [
          "Nein, ich habe heute keine Zeit.",
          "Ja, ich bin ein Buch.",
          "Es ist ein Tisch.",
          "Ich wohne am Montag."
        ]
      },
      {
        "id": "A1.2-u1-l4:q4",
        "kind": "translate",
        "prompt": "Ne pijem kafu.",
        "explain": [
          "Kaffee je muškog roda u akuzativu: keinen.",
          "Kaffee je muškog roda u akuzativu: keinen."
        ],
        "accept": [
          "Ich trinke keinen Kaffee."
        ]
      },
      {
        "id": "A1.2-u1-l4:q5",
        "kind": "order",
        "prompt": "Danas ne radim.",
        "explain": [
          "Nicht negira glagol.",
          "Nicht negira glagol."
        ],
        "accept": [
          "Heute arbeite ich nicht."
        ],
        "tokens": [
          "Heute",
          "arbeite",
          "ich",
          "nicht"
        ]
      },
      {
        "id": "A1.2-u1-l4:q6",
        "kind": "fill",
        "prompt": "Ich bin heute ___ müde.",
        "explain": [
          "Nicht uz pridev.",
          "Nicht uz pridev."
        ],
        "accept": [
          "nicht"
        ],
        "options": [
          "nicht",
          "kein",
          "keine",
          "keinen"
        ]
      },
      {
        "id": "A1.2-u1-l4:q7",
        "kind": "grammar",
        "prompt": "Wir haben ___ Auto.",
        "explain": [
          "Auto je srednjeg roda.",
          "Auto je srednjeg roda."
        ],
        "accept": [
          "kein"
        ],
        "options": [
          "kein",
          "keine",
          "keinen",
          "nicht"
        ]
      },
      {
        "id": "A1.2-u1-l4:q8",
        "kind": "conversation",
        "prompt": "Kommst du morgen?",
        "explain": [
          "Nicht negira dolazak.",
          "Nicht negira dolazak."
        ],
        "accept": [
          "Nein, ich komme morgen nicht."
        ],
        "options": [
          "Nein, ich komme morgen nicht.",
          "Ich bin eine Tasche.",
          "Ja, ich bin ein Haus.",
          "Der Apfel fährt."
        ]
      },
      {
        "id": "A1.2-u1-l4:q9",
        "kind": "translate",
        "prompt": "Nemam brata.",
        "explain": [
          "Bruder je muškog roda u akuzativu.",
          "Bruder je muškog roda u akuzativu."
        ],
        "accept": [
          "Ich habe keinen Bruder."
        ]
      },
      {
        "id": "A1.2-u1-l4:q10",
        "kind": "order",
        "prompt": "Ona ne govori nemački.",
        "explain": [
          "Kein uz imenicu Deutsch.",
          "Kein uz imenicu Deutsch."
        ],
        "accept": [
          "Sie spricht kein Deutsch."
        ],
        "tokens": [
          "Sie",
          "spricht",
          "kein",
          "Deutsch"
        ]
      }
    ]
  },
  {
    "id": "A1.2-u1-l5",
    "title": [
      "Večernja rutina",
      "Abendroutine"
    ],
    "type": "lesson",
    "level": "A1.2",
    "intro": [
      "Tema: Večernja rutina",
      "Thema: Abendroutine"
    ],
    "example": "Abends sehe ich fern.",
    "items": [
      {
        "id": "A1.2-u1-l5:q1",
        "kind": "fill",
        "prompt": "Am Abend ___ ich zu Hause.",
        "explain": [
          "Uz ich: bleibe.",
          "Uz ich: bleibe."
        ],
        "accept": [
          "bleibe"
        ],
        "options": [
          "bleibe",
          "bleibt",
          "bleibst",
          "bleiben"
        ]
      },
      {
        "id": "A1.2-u1-l5:q2",
        "kind": "grammar",
        "prompt": "Er ___ um zehn Uhr schlafen.",
        "explain": [
          "Uz er: geht.",
          "Uz er: geht."
        ],
        "accept": [
          "geht"
        ],
        "options": [
          "geht",
          "gehe",
          "gehen",
          "gehst"
        ]
      },
      {
        "id": "A1.2-u1-l5:q3",
        "kind": "conversation",
        "prompt": "Was machst du abends?",
        "explain": [
          "Opis večernjih aktivnosti.",
          "Opis večernjih aktivnosti."
        ],
        "accept": [
          "Ich lese ein Buch und höre Musik."
        ],
        "options": [
          "Ich lese ein Buch und höre Musik.",
          "Ich bin am Bahnhof.",
          "Die Banane ist gelb.",
          "Ich heiße Berlin."
        ]
      },
      {
        "id": "A1.2-u1-l5:q4",
        "kind": "translate",
        "prompt": "Uveče čitam knjigu.",
        "explain": [
          "Abends + lese ich.",
          "Abends + lese ich."
        ],
        "accept": [
          "Abends lese ich ein Buch."
        ]
      },
      {
        "id": "A1.2-u1-l5:q5",
        "kind": "order",
        "prompt": "U deset sati idem u krevet.",
        "explain": [
          "Glagol na drugom mestu.",
          "Glagol na drugom mestu."
        ],
        "accept": [
          "Um zehn Uhr gehe ich ins Bett."
        ],
        "tokens": [
          "Um",
          "zehn",
          "Uhr",
          "gehe",
          "ich",
          "ins",
          "Bett"
        ]
      },
      {
        "id": "A1.2-u1-l5:q6",
        "kind": "fill",
        "prompt": "Vor dem Schlafen ___ ich Musik.",
        "explain": [
          "Uz ich: höre.",
          "Uz ich: höre."
        ],
        "accept": [
          "höre"
        ],
        "options": [
          "höre",
          "hört",
          "hörst",
          "hören"
        ]
      },
      {
        "id": "A1.2-u1-l5:q7",
        "kind": "grammar",
        "prompt": "Wir ___ zusammen Abendbrot.",
        "explain": [
          "Uz wir: essen.",
          "Uz wir: essen."
        ],
        "accept": [
          "essen"
        ],
        "options": [
          "essen",
          "esst",
          "isst",
          "esse"
        ]
      },
      {
        "id": "A1.2-u1-l5:q8",
        "kind": "conversation",
        "prompt": "Wann gehst du ins Bett?",
        "explain": [
          "Wann traži vreme.",
          "Wann traži vreme."
        ],
        "accept": [
          "Ich gehe um elf Uhr ins Bett."
        ],
        "options": [
          "Ich gehe um elf Uhr ins Bett.",
          "Ich habe einen Hund.",
          "Mein Auto ist neu.",
          "Ich komme aus Wien."
        ]
      },
      {
        "id": "A1.2-u1-l5:q9",
        "kind": "translate",
        "prompt": "Posle večere perem zube.",
        "explain": [
          "Nach zahteva dativ.",
          "Nach zahteva dativ."
        ],
        "accept": [
          "Nach dem Abendessen putze ich mir die Zähne."
        ]
      },
      {
        "id": "A1.2-u1-l5:q10",
        "kind": "order",
        "prompt": "Pre spavanja gasim svetlo.",
        "explain": [
          "Ausmachen je razdvojiv.",
          "Ausmachen je razdvojiv."
        ],
        "accept": [
          "Vor dem Schlafen mache ich das Licht aus."
        ],
        "tokens": [
          "Vor",
          "dem",
          "Schlafen",
          "mache",
          "ich",
          "das",
          "Licht",
          "aus"
        ]
      }
    ]
  },
  {
    "id": "A1.2-u1-test",
    "title": [
      "Test celine 1",
      "Einheitstest 1"
    ],
    "type": "unit",
    "level": "A1.2",
    "items": [
      {
        "id": "A1.2-u1-test:q1",
        "kind": "fill",
        "prompt": "Ich ___ um sieben Uhr auf.",
        "explain": [
          "Uz ich: stehe; auf ide na kraj.",
          "Uz ich: stehe; auf ide na kraj."
        ],
        "accept": [
          "stehe"
        ],
        "options": [
          "stehe",
          "steht",
          "stehen",
          "stehst"
        ]
      },
      {
        "id": "A1.2-u1-test:q2",
        "kind": "conversation",
        "prompt": "Wann stehst du auf?",
        "explain": [
          "Pitanje Wann traži vreme.",
          "Pitanje Wann traži vreme."
        ],
        "accept": [
          "Ich stehe um sieben Uhr auf."
        ],
        "options": [
          "Ich stehe um sieben Uhr auf.",
          "Ich bin im Büro.",
          "Ich trinke Wasser.",
          "Es ist Montag."
        ]
      },
      {
        "id": "A1.2-u1-test:q3",
        "kind": "fill",
        "prompt": "Ich ___ heute im Supermarkt ___.",
        "explain": [
          "Einkaufen: ich kaufe ... ein.",
          "Einkaufen: ich kaufe ... ein."
        ],
        "accept": [
          "kaufe ... ein"
        ],
        "options": [
          "kaufe ... ein",
          "kaufen ... ein",
          "kauft ... ein",
          "kaufe ... an"
        ]
      },
      {
        "id": "A1.2-u1-test:q4",
        "kind": "conversation",
        "prompt": "Wann fängt der Kurs an?",
        "explain": [
          "Anfangen: fängt ... an.",
          "Anfangen: fängt ... an."
        ],
        "accept": [
          "Der Kurs fängt um neun Uhr an."
        ],
        "options": [
          "Der Kurs fängt um neun Uhr an.",
          "Ich habe Hunger.",
          "Ich wohne hier.",
          "Der Tisch ist groß."
        ]
      },
      {
        "id": "A1.2-u1-test:q5",
        "kind": "fill",
        "prompt": "___ frühstücke ich, dann gehe ich los.",
        "explain": [
          "Zuerst znači najpre.",
          "Zuerst znači najpre."
        ],
        "accept": [
          "Zuerst"
        ],
        "options": [
          "Zuerst",
          "Danach",
          "Gestern",
          "Nie"
        ]
      },
      {
        "id": "A1.2-u1-test:q6",
        "kind": "conversation",
        "prompt": "Was machst du nach der Arbeit?",
        "explain": [
          "Danach povezuje događaje.",
          "Danach povezuje događaje."
        ],
        "accept": [
          "Danach gehe ich nach Hause."
        ],
        "options": [
          "Danach gehe ich nach Hause.",
          "Es ist blau.",
          "Ich bin dreißig.",
          "Das ist mein Buch."
        ]
      },
      {
        "id": "A1.2-u1-test:q7",
        "kind": "fill",
        "prompt": "Ich habe ___ Zeit.",
        "explain": [
          "Zeit je ženskog roda: keine Zeit.",
          "Zeit je ženskog roda: keine Zeit."
        ],
        "accept": [
          "keine"
        ],
        "options": [
          "keine",
          "kein",
          "keinen",
          "nicht"
        ]
      },
      {
        "id": "A1.2-u1-test:q8",
        "kind": "conversation",
        "prompt": "Hast du heute Zeit?",
        "explain": [
          "Negacija imenice Zeit: keine.",
          "Negacija imenice Zeit: keine."
        ],
        "accept": [
          "Nein, ich habe heute keine Zeit."
        ],
        "options": [
          "Nein, ich habe heute keine Zeit.",
          "Ja, ich bin ein Buch.",
          "Es ist ein Tisch.",
          "Ich wohne am Montag."
        ]
      },
      {
        "id": "A1.2-u1-test:q9",
        "kind": "fill",
        "prompt": "Am Abend ___ ich zu Hause.",
        "explain": [
          "Uz ich: bleibe.",
          "Uz ich: bleibe."
        ],
        "accept": [
          "bleibe"
        ],
        "options": [
          "bleibe",
          "bleibt",
          "bleibst",
          "bleiben"
        ]
      },
      {
        "id": "A1.2-u1-test:q10",
        "kind": "conversation",
        "prompt": "Was machst du abends?",
        "explain": [
          "Opis večernjih aktivnosti.",
          "Opis večernjih aktivnosti."
        ],
        "accept": [
          "Ich lese ein Buch und höre Musik."
        ],
        "options": [
          "Ich lese ein Buch und höre Musik.",
          "Ich bin am Bahnhof.",
          "Die Banane ist gelb.",
          "Ich heiße Berlin."
        ]
      }
    ]
  }
] as Session[];
