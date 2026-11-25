import type { LevelId } from "../../core/types";

export type PlacementItem = {
  level: LevelId;
  prompt: string;
  options: [string, string, string, string];
  correct: number;
  explanation: string;
};

export const placementItems: PlacementItem[] = [

  // =========================
  // A1.1 - POTPUNI POCETNIK
  // =========================

  {
    level: "A1.1",
    prompt: "Ich ___ Stefan.",
    options: ["bist", "bin", "sind", "ist"],
    correct: 1,
    explanation: "Uz ich koristimo bin."
  },
  {
    level: "A1.1",
    prompt: "Wie ___ du?",
    options: ["heiße", "heißen", "heißt", "heißt ihr"],
    correct: 2,
    explanation: "Uz du koristimo heißt."
  },
  {
    level: "A1.1",
    prompt: "___ Buch ist interessant.",
    options: ["Der", "Die", "Den", "Das"],
    correct: 3,
    explanation: "Buch je srednjeg roda: das Buch."
  },
  {
    level: "A1.1",
    prompt: "Wir ___ in München.",
    options: ["wohnt", "wohne", "wohnen", "wohnst"],
    correct: 2,
    explanation: "Uz wir koristimo wohnen."
  },
  {
    level: "A1.1",
    prompt: "Wie spät ist es? Es ist ___ Uhr.",
    options: ["neun", "am neun", "in neun", "der neun"],
    correct: 0,
    explanation: "Za broj sati kažemo neun Uhr."
  },
  {
    level: "A1.1",
    prompt: "___ kommst du? Aus Serbien.",
    options: ["Wo", "Wohin", "Woher", "Wann"],
    correct: 2,
    explanation: "Woher pita za poreklo."
  },

  // =========================
  // A1.2 - OSNOVNI NIVO
  // =========================

  {
    level: "A1.2",
    prompt: "Ich kaufe ___ Apfel.",
    options: ["ein", "einen", "einem", "einer"],
    correct: 1,
    explanation: "Apfel je muškog roda. U akuzativu: einen Apfel."
  },
  {
    level: "A1.2",
    prompt: "Das ist ___ Tasche.",
    options: ["mein", "meine", "meinen", "meinem"],
    correct: 1,
    explanation: "Tasche je ženskog roda: meine Tasche."
  },
  {
    level: "A1.2",
    prompt: "Ich ___ heute länger arbeiten.",
    options: ["muss", "musst", "müssen", "müsst"],
    correct: 0,
    explanation: "Modalni glagol uz ich: muss."
  },
  {
    level: "A1.2",
    prompt: "Er ___ jeden Morgen um sieben Uhr ___.",
    options: [
      "steht / auf",
      "aufsteht / —",
      "steht / an",
      "auf / steht"
    ],
    correct: 0,
    explanation: "Razdvojivi glagol aufstehen: steht ... auf."
  },
  {
    level: "A1.2",
    prompt: "Ich habe ___ Auto.",
    options: ["nicht", "keinen", "keine", "kein"],
    correct: 3,
    explanation: "Auto je srednjeg roda: kein Auto."
  },
  {
    level: "A1.2",
    prompt: "Wann beginnt der Film? ___ acht Uhr.",
    options: ["Am", "Um", "Im", "Auf"],
    correct: 1,
    explanation: "Za tačno vreme koristimo um."
  },

  // =========================
  // A2.1 - NIZI SREDNJI NIVO
  // =========================

  {
    level: "A2.1",
    prompt: "Ich helfe ___ Frau.",
    options: ["die", "der", "den", "das"],
    correct: 1,
    explanation: "Helfen zahteva dativ: der Frau."
  },
  {
    level: "A2.1",
    prompt: "Gestern ___ ich nach Berlin gefahren.",
    options: ["habe", "bin", "war", "hatte"],
    correct: 1,
    explanation: "Fahren u značenju kretanja koristi sein u perfektu."
  },
  {
    level: "A2.1",
    prompt: "Das Buch liegt ___ Tisch.",
    options: ["auf den", "auf dem", "in den", "an die"],
    correct: 1,
    explanation: "Za lokaciju: auf + dativ."
  },
  {
    level: "A2.1",
    prompt: "Mein Fahrrad ist ___ als deins.",
    options: ["schnell", "am schnellsten", "schneller", "schnelle"],
    correct: 2,
    explanation: "Komparativ od schnell je schneller."
  },
  {
    level: "A2.1",
    prompt: "Ich interessiere ___ für Musik.",
    options: ["mir", "mich", "sich", "uns"],
    correct: 1,
    explanation: "Sich interessieren: ich interessiere mich."
  },
  {
    level: "A2.1",
    prompt: "Ich habe gestern meine Freunde ___.",
    options: ["besuchen", "besucht", "besuchte", "besuchst"],
    correct: 1,
    explanation: "Perfekt: habe besucht."
  },

  // =========================
  // A2.2 - NAPREDNIJI OSNOVNI
  // =========================

  {
    level: "A2.2",
    prompt: "Ich bleibe zu Hause, weil ich krank ___.",
    options: ["bin", "sein", "bist", "ist"],
    correct: 0,
    explanation: "U zavisnoj rečenici sa weil glagol ide na kraj."
  },
  {
    level: "A2.2",
    prompt: "Ich glaube, dass er morgen nach Berlin ___.",
    options: ["kommt", "kommen", "komme", "kommst"],
    correct: 0,
    explanation: "Uz er ide kommt, na kraju dass-rečenice."
  },
  {
    level: "A2.2",
    prompt: "Als Kind ___ ich oft im Garten.",
    options: ["spiele", "spielte", "gespielt", "spielst"],
    correct: 1,
    explanation: "Präteritum od spielen: spielte."
  },
  {
    level: "A2.2",
    prompt: "Ich schenke ___ einen Blumenstrauß.",
    options: [
      "meine Mutter",
      "meiner Mutter",
      "meinen Mutter",
      "meinem Mutter"
    ],
    correct: 1,
    explanation: "Primalac je u dativu: meiner Mutter."
  },
  {
    level: "A2.2",
    prompt: "Wenn ich Zeit habe, ___ ich dich an.",
    options: ["ich rufe", "rufe", "rufen", "ruft"],
    correct: 1,
    explanation: "Posle zavisne rečenice glagol glavne rečenice dolazi odmah."
  },
  {
    level: "A2.2",
    prompt: "Sie wohnt in einem ___ Haus.",
    options: ["kleines", "kleinen", "kleine", "kleinem"],
    correct: 1,
    explanation: "Posle einem u dativu pridev dobija nastavak -en."
  }
];

export const placementLevels: LevelId[] = [
  "A1.1",
  "A1.2",
  "A2.1",
  "A2.2"
];

export type PlacementResult = {
  self: LevelId;
  recommended: LevelId;
  scores: Record<LevelId, number>;
  date: string;
  version: number;
};

export function evaluatePlacement(
  answers: (number | null)[],
  self: LevelId,
  date = new Date().toISOString()
): PlacementResult {

  const scores = Object.fromEntries(
    placementLevels.map(level => {

      const items = placementItems
        .map((item, index) => ({ item, index }))
        .filter(entry => entry.item.level === level);

      const correct = items.filter(
        ({ item, index }) => answers[index] === item.correct
      ).length;

      return [
        level,
        Math.round((correct * 100) / items.length)
      ];
    })
  ) as Record<LevelId, number>;

  let levelIndex = 0;

  // Za prelazak na visi nivo potrebno je
  // najmanje 5 od 6 tacnih odgovora u
  // svakoj prethodnoj grupi.

  for (let i = 0; i < 3; i++) {
    if (scores[placementLevels[i]] >= 83) {
      levelIndex = i + 1;
    } else {
      break;
    }
  }

  return {
    self,
    recommended: placementLevels[levelIndex],
    scores,
    date,
    version: 1
  };
}
