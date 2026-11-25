import type { CardStatus, Question, Session, Study } from "./types";
export const localDay = (time = new Date()) =>
  [
    time.getFullYear(),
    String(time.getMonth() + 1).padStart(2, "0"),
    String(time.getDate()).padStart(2, "0"),
  ].join("-");
export const streak = (s: Study, now = new Date()) => {
  const d = new Date(now);
  if (!s.days[localDay(d)]) d.setDate(d.getDate() - 1);
  let n = 0;
  while (s.days[localDay(d)] > 0) {
    n++;
    d.setDate(d.getDate() - 1);
  }
  return n;
};
export const week = (s: Study, now = new Date()) => {
  const monday = new Date(now);
  monday.setDate(monday.getDate() - ((monday.getDay() + 6) % 7));
  return Object.entries(s.days).reduce(
    (a, [day, seconds]) =>
      a + (day >= localDay(monday) && day <= localDay(now) ? seconds : 0),
    0,
  );
};
export const award = (s: Study, id: string, points: number): Study =>
  Object.hasOwn(s.awards, id)
    ? s
    : { ...s, xp: s.xp + points, awards: { ...s.awards, [id]: points } };
export function tick(s: Study, seconds: number, at = new Date()): Study {
  const day = localDay(at);
  let n = {
    ...s,
    activity: at.toISOString(),
    days: { ...s.days, [day]: (s.days[day] || 0) + seconds },
  };
  if (n.profile && n.days[day] >= n.profile.goal * 60)
    n = award(n, "goal:" + day, 30);
  if (streak(n, at) >= 7) n = award(n, "streak:7", 100);
  return n;
}
export const normalize = (v: string) =>
  v
    .normalize("NFC")
    .toLocaleLowerCase("de")
    .trim()
    .replace(/[.!?]+$/u, "")
    .replace(/\s+/g, " ");
export function grade(q: Question, answers: string[]) {
  const expected =
    q.questions?.map((x) => x.answer) ||
    q.pairs?.map((x) => x.de) ||
    q.accept ||
    [];
  const ok =
    q.questions || q.pairs
      ? expected.length === answers.length &&
        expected.every((x, i) => normalize(x) === normalize(answers[i] || ""))
      : expected.some((x) => normalize(x) === normalize(answers[0] || ""));
  return {
    ok,
    answer: q.questions || q.pairs ? expected.join(" · ") : expected[0] || "",
  };
}
export function mark(
  s: Study,
  id: string,
  status: CardStatus,
  now = Date.now(),
): Study {
  const old = s.cards[id];
  const step =
    status === "known"
      ? old?.status === "known"
        ? Math.min(old.step + 1, 5)
        : 0
      : 0;
  const interval =
    status === "known"
      ? [2, 4, 8, 16, 30, 60][step]
      : status === "learning"
        ? 1
        : status === "hard"
          ? 1 / 12
          : 0;
  return {
    ...s,
    cards: {
      ...s.cards,
      [id]: { status, step, due: now + interval * 86400000 },
    },
  };
}
export function answer(
  s: Study,
  session: Session,
  q: Question,
  answers: string[],
): Study {
  if (
    !s.cursor ||
    s.cursor.id !== session.id ||
    s.cursor.graded ||
    session.items[s.cursor.index]?.id !== q.id
  )
    return s;
  const g = grade(q, answers);
  let n = g.ok
    ? award(s, "question:" + q.id, q.hard ? 15 : 10)
    : q.word
      ? mark(s, q.word.id, "hard")
      : s;
  return {
    ...n,
    cursor: {
      ...s.cursor,
      correct: s.cursor.correct + Number(g.ok),
      earned: s.cursor.earned + n.xp - s.xp,
      graded: { ...g, points: n.xp - s.xp },
    },
  };
}
export function finish(
  s: Study,
  session: Session,
): { state: Study; score: number; passed: boolean; bonus: number } {
  if (
    !s.cursor ||
    s.cursor.id !== session.id ||
    !s.cursor.graded ||
    s.cursor.index !== session.items.length - 1
  )
    return { state: s, score: 0, passed: false, bonus: 0 };
  const ratio = s.cursor.correct / session.items.length;
  const score = Math.floor(100 * ratio);
  const passed = ratio >= 0.8;
  let n = { ...s, cursor: null, activity: new Date().toISOString() } as Study;
  if (passed && session.type !== "practice") {
    const old = n.results[session.id];
    if (!old || old.score < score)
      n = {
        ...n,
        results: {
          ...n.results,
          [session.id]: { score, date: old?.date || n.activity },
        },
      };
    if (session.type === "unit") n = award(n, "unit:" + session.id, 100);
    if (session.type === "exam") n = award(n, "exam:" + session.id, 250);
    if (session.type === "lesson" && score === 100)
      n = award(n, "perfect:" + session.id, 25);
  }
  return { state: n, score, passed, bonus: n.xp - s.xp };
}
