import source from "./lessons.txt?raw";
import type {
  Kind,
  LevelId,
  Question,
  Session,
  Study,
  Word,
} from "../core/types";
import { readings } from "./reading";
import { scenes } from "./scenes";
import { lessonDialogues } from "./lesson-dialogues";
import { roadmap } from "./roadmap";
export const media = (name: string) =>
  `${import.meta.env.BASE_URL}audio/${name}.mp3`;
const pair = (a: string, b: string): [string, string] => [a, b];
export function shuffle<T>(input: T[], salt: string): T[] {
  const values = [...input];
  let x = 2166136261;
  for (const ch of salt) x = Math.imul(x ^ ch.charCodeAt(0), 16777619);
  for (let i = values.length - 1; i > 0; i--) {
    x = (Math.imul(1664525, x) + 1013904223) | 0;
    const j = (x >>> 0) % (i + 1);
    [values[i], values[j]] = [values[j], values[i]];
  }
  return values;
}
const stripped = (v: string) => v.replace(/[.!?]+$/u, "");
const explanations = {
  read: pair(
    "Potraži odgovarajući detalj u nemačkom tekstu.",
    "Suche die passenden Informationen im deutschen Text.",
  ),
  order: pair(
    "Proveri položaj glagola i uporedi redosled sa rešenjem.",
    "Achte auf die Position des Verbs und vergleiche mit der Lösung.",
  ),
  scene: pair(
    "Ovaj odgovor se prirodno nadovezuje na pitanje sagovornika.",
    "Diese Antwort passt zur Frage deines Gesprächspartners.",
  ),
  match: pair(
    "Uči imenicu zajedno sa njenim članom.",
    "Lerne das Nomen zusammen mit seinem Artikel.",
  ),
};
const variants: Record<number, string[]> = {
  0: ["Ich heiße Anna."],
  7: ["Mir geht es heute gut."],
  9: ["Bis morgen, Anna.", "Wir sehen uns morgen, Anna!"],
  15: ["Mein Bruder ist aus Serbien."],
  18: ["Ich spreche Deutsch und Serbisch."],
  19: ["Ich lebe in München."],
  28: ["Mein Opa kocht gerne."],
  33: ["Ich lerne täglich Deutsch."],
  38: ["Es regnet im Herbst oft.", "Im Herbst regnet es häufig."],
  42: ["Ich trinke gerne Saft."],
  43: ["Ich hätte gern einen Kaffee, bitte.", "Ich möchte bitte einen Kaffee."],
  45: ["Ich besuche morgen meinen Freund."],
};
const groups = source
  .trim()
  .split(/(?=^# )/m)
  .map((text) => text.trim().split("\n"));
let count = 0;
const units = groups.map(([header, ...rows], u) => {
  const [sr, de, icon] = header.slice(2).split("|");
  return {
    id: `u${u + 1}`,
    title: pair(sr, de),
    icon,
    rows: rows.map((row) => {
      const [sr, de, cloze, wrong, srRule, deRule, a, as, b, bs, w1, w2] =
        row.split("|");
      const index = count++;
      const words = [w1, w2].map((item, j): Word => {
        const [de, sr, plural, visual] = item.split("~");
        const examples: Record<string, string> = {
          "der Reis": "Der Reis ist warm.",
          "die Butter": "Die Butter ist weich.",
          "die Milch": "Die Milch ist kalt.",
          "das Wasser": "Das Wasser ist kalt.",
          "das Geld": "Das Geld ist hier.",
          "der Schnee": "Der Schnee ist weiß.",
          "der Name": "Mein Name ist Anna.",
          "der Buchstabe": "Der Buchstabe ist groß.",
        };
        return {
          id: `w${index}-${j}`,
          de,
          sr,
          plural,
          visual,
          example:
            examples[de] || `${de[0].toUpperCase() + de.slice(1)} ist hier.`,
          audio: `w${index}-${j}`,
        };
      });
      return {
        index,
        title: pair(sr, de),
        cloze,
        wrong: wrong.split(","),
        rule: pair(srRule, deRule),
        a,
        as,
        b,
        bs,
        words,
      };
    }),
  };
});
export const words = units.flatMap((u) => u.rows.flatMap((r) => r.words));
export const practiceScenes: Session[] = scenes.map(
  ([sr, de, a, b, c, d], i) => ({
    id: `s${i}`,
    title: pair(sr, de),
    type: "practice",
    level: "A1.1",
    items: [
      [a, b],
      [c, d],
    ].map(([prompt, answer], j) => ({
      id: `scene:${i}:${j}`,
      kind: j ? "dialog" : "conversation",
      prompt,
      explain: explanations.scene,
      accept: [answer],
      options: shuffle(
        [
          answer,
          scenes[(i + 3) % scenes.length][j ? 5 : 3],
          scenes[(i + 7) % scenes.length][j ? 5 : 3],
        ],
        `scene:${i}:${j}`,
      ),
    })),
  }),
);
export const curriculum = units.map((unit, u) => {
  const lessons: Session[] = unit.rows.map((r, j) => {
    const { index: i, cloze, wrong, rule, a, as, b, bs } = r;
    const id = `${unit.id}-l${j + 1}`;
    const target = cloze.match(/\[([^\]]+)\]/)![1];
    const full = cloze.replace(/[\[\]]/g, "");
    const [w, v] = r.words;
    const others = unit.rows.filter((x) => x.index !== i);
    const choices = (a: string, rest: string[], tag: string) =>
      shuffle([...new Set([a, ...rest])], `${id}:${tag}`);
    const make = (
      kind: Kind,
      prompt: string,
      explain: [string, string],
      details: Partial<Question>,
    ): Question => ({ id: `${id}:${kind}`, kind, prompt, explain, ...details });
    const pairs = [w, v, ...others.slice(0, 2).map((x) => x.words[0])].filter(
      (word, k, arr) => arr.findIndex((y) => y.visual === word.visual) === k,
    );
    for (const word of words)
      if (pairs.length < 4 && !pairs.some((x) => x.visual === word.visual))
        pairs.push(word);
    const correction =
      (i === 0 ? "A · " : "") + cloze.replace(/\[[^\]]+\]/, wrong[0]);
    const dialogueIndex = u * 4 + Math.max(0, j - 1);
    const [scenePrompt, sceneReply] = lessonDialogues[dialogueIndex];
    const sceneOptions = [
      lessonDialogues[(dialogueIndex + 9) % 40][1],
      lessonDialogues[(dialogueIndex + 17) % 40][1],
    ];
    const tasks: Record<Kind, Question> = {
      fill: make("fill", cloze.replace(/\[[^\]]+\]/, "_____"), rule, {
        options: choices(target, wrong, "fill"),
        accept: [target],
      }),
      image: make(
        "image",
        "Was ist das?",
        pair(`${w.de} znači „${w.sr}“.`, `${w.de} · Plural: ${w.plural}`),
        {
          word: w,
          accept: [w.de],
          options: choices(
            w.de,
            others.slice(0, 3).map((x) => x.words[0].de),
            "image",
          ),
        },
      ),
      match: make("match", "", explanations.match, { pairs, hard: true }),
      translate: make(
        "translate",
        as,
        pair(
          `Jedan prirodan prevod: ${a}`,
          `Eine natürliche Formulierung: ${a}`,
        ),
        { accept: [a, ...(variants[i] || [])], hard: true },
      ),
      order: make("order", bs, explanations.order, {
        tokens: stripped(b).split(" "),
        accept: [b],
        hard: true,
      }),
      listen: make(
        "listen",
        "Was hörst du?",
        pair(`Čuješ: ${b} (${bs})`, `Du hörst: ${b}`),
        {
          audio: `l${i}`,
          accept: [b],
          options: choices(
            b,
            others.slice(0, 2).map((x) => x.b),
            "audio",
          ),
        },
      ),
      read: make("read", "", explanations.read, { ...readings[u], hard: true }),
      grammar: make(
        "grammar",
        `___ ${w.de.slice(4)}`,
        pair(
          `Uči oblik sa članom: ${w.de}.`,
          `Lerne den Artikel zusammen mit dem Nomen: ${w.de}.`,
        ),
        {
          accept: [w.de.split(" ")[0]],
          options: choices(
            w.de.split(" ")[0],
            ["der", "die", "das"],
            "article",
          ),
          word: w,
        },
      ),
      correct: make("correct", correction, rule, {
        accept: [full],
        hard: true,
      }),
      conversation: make("conversation", scenePrompt, explanations.scene, {
        accept: [sceneReply],
        options: choices(sceneReply, sceneOptions, "scene"),
      }),
      flash: make(
        "flash",
        v.de,
        pair(`${v.de} znači „${v.sr}“.`, `${v.de} · Plural: ${v.plural}`),
        {
          word: v,
          accept: [v.sr],
          options: choices(
            v.sr,
            others.slice(0, 3).map((x) => x.words[1].sr),
            "card",
          ),
        },
      ),
      dialog: make("dialog", scenePrompt, explanations.scene, {
        accept: [sceneReply],
        options: choices(sceneReply, sceneOptions, "dialog"),
      }),
    };
    const types: Kind[] = [
      "fill",
      "image",
      "translate",
      "order",
      "listen",
      "grammar",
      "flash",
    ];
    const extra: Kind[][] = [
      ["match", "read", "correct"],
      ["match", "conversation", "correct"],
      ["match", "dialog", "correct"],
      ["match", "conversation", "correct"],
      ["match", "dialog", "correct"],
    ];
    return {
      id,
      title: r.title,
      type: "lesson",
      level: "A1.1",
      intro: rule,
      example: full,
      items: [...types, ...extra[j]].map((k) => tasks[k]),
    };
  });
  const selected = [
    lessons[0].items[0],
    lessons[1].items[1],
    lessons[2].items[2],
    lessons[3].items[3],
    lessons[4].items[4],
    lessons[2].items[5],
    lessons[0].items[8],
    lessons[4].items[8],
    lessons[3].items[6],
    lessons[1].items[7],
  ];
  // Assessments reuse curated material and never re-award question XP.
  const test: Session = {
    id: `${unit.id}-test`,
    title: pair("Test celine", "Einheitstest"),
    type: "unit",
    level: "A1.1",
    items: shuffle(selected, unit.id),
  };
  return { ...unit, lessons, test };
});
export const lessons = curriculum.flatMap((x) => x.lessons);
const pick = (u: number, l: number, k: Kind) =>
  curriculum[u].lessons[l].items.find((q) => q.kind === k)!;
export const exam: Session = {
  id: "A1.1-exam",
  title: pair("Završni ispit A1.1", "Abschlussprüfung A1.1"),
  type: "exam",
  level: "A1.1",
  items: shuffle(
    curriculum.flatMap((u, i) => [
      pick(
        i,
        i % 5,
        ["listen", "grammar", "order", "image", "translate"][i % 5] as Kind,
      ),
      pick(i, i % 2, i % 2 ? "conversation" : "read"),
    ]),
    "final",
  ),
};
export const sessions = [
  ...curriculum.flatMap((x) => [...x.lessons, x.test]),
  exam,
  ...practiceScenes,
];
export function unlocked(s: Study, id: string) {
  if (practiceScenes.some((x) => x.id === id) || s.results[id]) return true;
  const path = sessions.slice(0, 61);
  const i = path.findIndex((x) => x.id === id);
  return i === 0 || (i > 0 && !!s.results[path[i - 1].id]);
}
export const nextSession = (s: Study) =>
  sessions.slice(0, 61).find((x) => !s.results[x.id] && unlocked(s, x.id));
export const progress = (s: Study, l: LevelId) =>
  l === "A1.1"
    ? Math.floor(
        (sessions.slice(0, 61).filter((x) => s.results[x.id]).length * 100) /
          61,
      )
    : 0;
export const planCount =
  roadmap.reduce((n, level) => n + level.length, 0) + curriculum.length;
export const drills: Session[] = curriculum.flatMap((u, i) =>
  (["listen", "grammar"] as const).map((kind) => ({
    id: `drill-${i}-${kind}`,
    type: "practice" as const,
    level: "A1.1" as const,
    title: u.title,
    items: u.lessons.map((l) => l.items.find((q) => q.kind === kind)!),
  })),
);
export const allSessions = [...sessions, ...drills];
