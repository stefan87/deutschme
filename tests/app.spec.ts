import { expect, test, type Page } from "@playwright/test";
import type { Question, Session, Study } from "../src/core/types";
async function signup(page: Page) {
  await page.goto("/");
  await page.getByRole("textbox", { name: "Tvoje ime" }).fill("Stefan");
  await page.getByRole("button", { name: "Započni učenje" }).click();
  await expect(
    page.getByRole("heading", { name: "Hallo, Stefan!" }),
  ).toBeVisible();
}
async function data(page: Page) {
  return await page.evaluate(async () => {
    const load = new Function('return import("/src/data/content.ts")');
    const m = await load();
    return {
      units: m.curriculum.map((u: { lessons: Session[]; test: Session }) => ({
        lessons: u.lessons,
        test: u.test,
      })),
      exam: m.exam,
      words: m.words,
      scenes: m.practiceScenes,
    } as {
      units: { lessons: Session[]; test: Session }[];
      exam: Session;
      words: { id: string; audio: string }[];
      scenes: Session[];
    };
  });
}
async function stored(page: Page): Promise<Study> {
  return page.evaluate(() => JSON.parse(localStorage.getItem("deutschme:v1")!));
}
async function fill(page: Page, q: Question, verify = true) {
  const form = page.locator("form.exercise");
  await expect(form).toHaveAttribute("data-kind", q.kind);
  if (q.kind === "translate" || q.kind === "correct")
    await form.locator("#reply").fill(q.accept![0]);
  else if (q.questions || q.pairs) {
    const answers =
      q.questions?.map((x) => x.answer) || q.pairs!.map((x) => x.de);
    for (const [i, a] of answers.entries())
      await form.locator("select").nth(i).selectOption(a);
  } else if (q.tokens) {
    for (const [i, token] of q.tokens.entries()) {
      const tile = form
        .locator(".tilebank button")
        .getByText(token, { exact: true })
        .first();
      if (i === 0) await tile.dragTo(form.locator(".tilebox"));
      else await tile.click();
    }
  } else
    await form.getByRole("button", { name: q.accept![0], exact: true }).click();
  await form
    .getByRole("button", { name: /Proveri odgovor|Potvrdi odgovor/ })
    .click();
  if (verify) await expect(form.getByRole("status")).toContainText("Sehr gut");
  await form.getByRole("button", { name: "Nastavi", exact: true }).click();
}
test("Sve vrste zadataka, XP, nastavak, ponovno igranje i otključavanje", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await signup(page);
  const { units } = await data(page);
  const l = units[0].lessons[0];
  await page.getByRole("button", { name: "Započni prvu lekciju" }).click();
  await page.getByRole("button", { name: "Započni zadatke" }).click();
  await fill(page, l.items[0]);
  await page.reload();
  await page.getByRole("button", { name: "Nastavi gde si stao" }).click();
  for (const q of l.items.slice(1)) await fill(page, q);
  await expect(
    page.getByRole("heading", { name: "Ausgezeichnet!" }),
  ).toBeVisible();
  const first = await stored(page);
  expect(first.results[l.id].score).toBe(100);
  expect(first.xp).toBe(150);
  await page.getByRole("button", { name: "Nazad na pregled" }).click();
  await expect(
    page.getByRole("button", { name: /Čitanje samoglasnika/ }),
  ).toBeEnabled();
  await expect(
    page.getByRole("button", { name: /Slova ä, ö i ü/ }),
  ).toBeDisabled();
  await page.getByRole("button", { name: /Glas i slovo A/ }).click();
  await page.getByRole("button", { name: "Započni zadatke" }).click();
  for (const q of l.items) await fill(page, q);
  expect((await stored(page)).xp).toBe(first.xp);
  await page.getByRole("button", { name: "German in Germany" }).click();
  const { scenes } = await data(page);
  await page.getByRole("button", { name: /Ausländerbehörde/ }).click();
  await fill(page, scenes[0].items[0]);
  const form = page.locator("form.exercise");
  await form.getByRole("button", { name: "Upiši svoj odgovor" }).click();
  await form.locator("#reply").fill(scenes[0].items[1].accept![0]);
  await form.getByRole("button", { name: "Proveri odgovor" }).click();
  await expect(form.getByRole("status")).toContainText("Sehr gut");
  await form.getByRole("button", { name: "Nastavi", exact: true }).click();
  expect(errors).toEqual([]);
});
test("Kurikulum, ispit i interni sertifikat", async ({ page }) => {
  await signup(page);
  const { units, exam, scenes, words } = await data(page);
  expect(units).toHaveLength(10);
  expect(
    units.every(
      (u) =>
        u.lessons.length === 5 && u.lessons.every((l) => l.items.length === 10),
    ),
  ).toBe(true);
  expect(words).toHaveLength(100);
  expect(scenes).toHaveLength(14);
  expect(exam.items).toHaveLength(20);
  expect(
    new Set(
      units.flatMap((u) =>
        u.lessons.flatMap((l) => l.items.map((q) => q.kind)),
      ),
    ).size,
  ).toBe(12);
  for (const q of units.flatMap((u) => u.lessons.flatMap((l) => l.items))) {
    if (q.options) {
      expect(q.options).toContain(q.accept![0]);
    }
    if (q.pairs) expect(q.pairs).toHaveLength(4);
    if (q.questions) expect(q.questions).toHaveLength(3);
  }
  const s = await stored(page);
  for (const u of units)
    for (const l of [...u.lessons, u.test])
      s.results[l.id] = { score: 90, date: new Date().toISOString() };
  await page.evaluate(
    (v) => localStorage.setItem("deutschme:v1", JSON.stringify(v)),
    s,
  );
  await page.reload();
  await page
    .getByRole("button", { name: "Započni prvu lekciju" })
    .count()
    .then((n) => expect(n).toBe(0));
  await page.getByRole("button", { name: "Nastavi učenje" }).click();
  for (const q of exam.items) await fill(page, q);
  await page.getByRole("button", { name: "Prikaži sertifikat" }).click();
  await expect(
    page.getByRole("heading", { name: "Interni sertifikat" }),
  ).toBeVisible();
  await expect(page.locator(".certificate")).toContainText("Stefan");
  await expect(page.locator(".certificate")).toContainText("A1.1 · 100%");
  expect((await stored(page)).awards["exam:A1.1-exam"]).toBe(250);
});
test("Mobilni prikaz, teme i nemački interfejs", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 780 });
  await signup(page);
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBe(
    320,
  );
  await page.getByRole("button", { name: "Meni" }).click();
  await page.getByRole("button", { name: "Učenje", exact: true }).click();
  await page.getByRole("button", { name: /A2\.2/ }).click();
  await expect(
    page.getByText("Ovo je nastavni plan.", { exact: false }),
  ).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBe(
    320,
  );
  await page.getByRole("button", { name: "Promeni temu" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await page.getByRole("button", { name: "Profil", exact: true }).click();
  await page.getByLabel("Jezik interfejsa").selectOption("de");
  await page.getByRole("button", { name: "Einstellungen speichern" }).click();
  await expect(
    page.getByRole("heading", { name: "Profil und Einstellungen" }),
  ).toBeVisible();
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("lang", "de");
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
});
test("Audio reprodukcija, kartice i lokalno snimanje", async ({
  page,
  context,
}) => {
  await context.grantPermissions(["microphone"]);
  await signup(page);
  await page.getByRole("button", { name: "Vokabular", exact: true }).click();
  await page.getByRole("button", { name: "Okreni karticu" }).click();
  await page.getByRole("button", { name: "Teška", exact: true }).click();
  expect((await stored(page)).cards["w0-0"].status).toBe("hard");
  await page.getByRole("button", { name: "Slušanje", exact: true }).click();
  const clip = page.locator("audio").first();
  await expect
    .poll(() => clip.evaluate((a: HTMLAudioElement) => a.duration || 0))
    .toBeGreaterThan(0);
  await clip.evaluate(async (a: HTMLAudioElement) => {
    await a.play();
  });
  await expect
    .poll(() => clip.evaluate((a: HTMLAudioElement) => a.currentTime))
    .toBeGreaterThan(0);
  await page.getByRole("button", { name: "Govor", exact: true }).click();
  await page.getByRole("button", { name: "Snimi izgovor" }).click();
  await page.getByRole("button", { name: "Zaustavi snimanje" }).click();
  await expect(page.getByLabel("Tvoj snimak")).toHaveAttribute("src", /^blob:/);
});
