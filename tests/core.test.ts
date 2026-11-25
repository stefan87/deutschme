import test from "node:test";
import assert from "node:assert/strict";
import {
  answer,
  award,
  finish,
  grade,
  localDay,
  mark,
  streak,
  tick,
  week,
} from "../src/core/engine";
import { fresh } from "../src/services/repository";
import type { Question, Session, Study } from "../src/core/types";
const question: Question = {
  id: "q0",
  kind: "translate",
  prompt: "Živim u Minhenu.",
  accept: ["Ich wohne in München.", "Ich lebe in München."],
  explain: ["", ""],
  hard: true,
};
const exam: Session = {
  id: "exam",
  title: ["", ""],
  type: "exam",
  level: "A1.1",
  items: [question],
};
const inSession = (s: Study = fresh()): Study => ({
  ...s,
  cursor: { id: exam.id, index: 0, correct: 0, earned: 0 },
});
test("Pisani odgovor: varijante, normalizacija i gramatički netačan odgovor", () => {
  assert.equal(grade(question, [" ich  LEBE in Mu\u0308nchen! "]).ok, true);
  assert.equal(grade(question, ["Ich lebt in München."]).ok, false);
  assert.equal(grade(question, ["Ich wohne in Munchen."]).ok, false);
});
test("Jednokratni XP i 250 XP za ispit", () => {
  let s = answer(inSession(), exam, question, ["Ich wohne in München."]);
  assert.equal(s.xp, 15);
  assert.equal(answer(s, exam, question, ["x"]), s);
  const r = finish(s, exam);
  assert.equal(r.bonus, 250);
  assert.equal(r.score, 100);
  assert.equal(r.state.results.exam.score, 100);
  s = answer(inSession(r.state), exam, question, ["Ich wohne in München."]);
  assert.equal(finish(s, exam).state.xp, 265);
  assert.equal(award(s, "question:q0", 999), s);
});
test("Prag je 80%, ne zaokružuje 79% naviše", () => {
  const s = {
    ...inSession(),
    cursor: {
      id: "exam",
      index: 4,
      correct: 4,
      earned: 0,
      graded: { ok: true, points: 0, answer: "x" },
    },
  };
  const e = { ...exam, items: Array(5).fill(question) };
  assert.equal(finish(s, e).passed, true);
  const fail = { ...s, cursor: { ...s.cursor, correct: 3 } };
  assert.equal(finish(fail, e).passed, false);
  assert.equal(finish(fail, e).state.results.exam, undefined);
});
test("SRS daje teškim karticama kraći interval i širi poznate", () => {
  const s = mark(fresh(), "word", "hard", 0);
  assert.equal(s.cards.word.due, 7200000);
  const first = mark(s, "word", "known", 0);
  const second = mark(first, "word", "known", 0);
  assert.ok(second.cards.word.due > first.cards.word.due);
});
test("Streak, lokalni datum i granularni dnevni cilj", () => {
  let s: Study = {
    ...fresh(),
    profile: {
      name: "Stefan",
      language: "sr",
      native: "sr",
      start: "A1.1",
      theme: "light",
      goal: 5,
    },
  };
  for (let i = 2; i <= 8; i++) s = tick(s, 300, new Date(2026, 1, i, 12));
  assert.equal(streak(s, new Date(2026, 1, 8, 12)), 7);
  assert.equal(streak(s, new Date(2026, 1, 9, 12)), 7);
  assert.equal(streak(s, new Date(2026, 1, 10, 12)), 0);
  assert.equal(week(s, new Date(2026, 1, 8, 12)), 2100);
  assert.equal(localDay(new Date(2026, 1, 8, 12)), "2026-02-08");
  assert.equal(s.xp, 310);
  assert.equal(tick(s, 100, new Date(2026, 1, 8, 12)).xp, 310);
});
