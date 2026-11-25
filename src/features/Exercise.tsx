import { useState } from "react";
import {
  ArrowRight,
  AudioLines,
  Check,
  X,
  MessageCircle,
} from "./icons";
import { media, shuffle } from "../data/content";
import { choose, taskNames } from "../core/i18n";
import type { Cursor, Lang, Question } from "../core/types";
import Sound from './Sound';
import PronounceText from './PronounceText';

export {default as Sound} from './Sound';
export function Visual({ value }: { value: string }) {
  return (
    <span className="visual" aria-hidden="true">
      {value}
    </span>
  );
}
export default function Exercise({
  q,
  lang,
  cursor,
  onAnswer,
  onNext,
  checkMode,
}: {
  q: Question;
  lang: Lang;
  cursor: Cursor;
  onAnswer: (items: string[]) => void;
  onNext: () => void;
  checkMode: boolean;
}) {
  const de = lang === "de",
    t = (a: string, b: string) => choose(lang, a, b);
  const [text, setText] = useState("");
  const [single, setSingle] = useState("");
  const [many, setMany] = useState<string[]>([]);
  const [placed, setPlaced] = useState<number[]>([]);
  const [typeMode, setTypeMode] = useState(false);
  const [drag, setDrag] = useState<number | null>(null);
  const disabled = !!cursor.graded;
  const isA12 = q.id.startsWith("A1.2-");
const germanPrompt = isA12 && ["conversation", "dialog"].includes(q.kind);
  const isA12Translation =
  isA12 && q.kind === "translate";

const wordTiles = isA12Translation
  ? (q.accept?.[0] || "")
      .replace(/[.!?]+$/u, "")
      .split(/\s+/)
      .filter(Boolean)
  : [];

const tokens = shuffle(
  q.tokens || (typeMode ? [] : wordTiles),
  q.id
);

const isWrite =
  (q.kind === "translate" && (!isA12Translation || typeMode)) ||
  q.kind === "correct" ||
  (typeMode && ["conversation", "dialog"].includes(q.kind));
  const target = q.pairs?.length || q.questions?.length || tokens.length;
  const valid = isWrite
    ? !!text.trim()
    : q.pairs || q.questions
      ? many.filter(Boolean).length === target
      : tokens.length
        ? placed.length === target
        : !!single;
  const update = (index: number, value: string) =>
    setMany((old) => {
      const a = [...old];
      a[index] = value;
      return a;
    });
  const add = (i: number) =>
    setPlaced((old) => (disabled || old.includes(i) ? old : [...old, i]));
  const answers = () =>
    isWrite
      ? [text]
      : q.pairs || q.questions
        ? many
        : tokens.length
          ? [placed.map((i) => tokens[i]).join(" ")]
          : [single];
  const prompt =
    de && q.kind === "translate"
      ? ""
      : de && q.kind === "order"
        ? ""
        : q.prompt;
  return (
    <form
      className="exercise card"
      data-kind={q.kind}
      onSubmit={(e) => {
        e.preventDefault();
        if (disabled) onNext();
        else if (valid) onAnswer(answers());
      }}
    >
      <span className="eyebrow">
        <AudioLines size={15} />
        {t("ZADATAK", "AUFGABE")} {cursor.index + 1}
      </span>
      <h2>{taskNames[q.kind][de ? 1 : 0]}</h2>
            {germanPrompt && <PronounceText text={q.prompt} />}
      {de && q.kind === "translate" && (
        <p>Formuliere diesen Satz auf Deutsch. Die Vorlage ist auf Serbisch.</p>
      )}
      {prompt && (
        <div
          className={`prompt ${q.kind === "conversation" || q.kind === "dialog" ? "bubble" : ""}`}
          lang={["translate", "order"].includes(q.kind) ? "sr" : "de"}
        >
          {isA12Translation && !disabled && (
          <button
            type="button"
            className="quiet"
            onClick={() => {
              setTypeMode((old) => !old);
              setText("");
              setPlaced([]);
            }}
          >
            {typeMode
              ? t("Pomoć: složi reči", "Hilfe: Wörter ordnen")
              : t("Želim da napišem samostalno", "Ich möchte selbst schreiben")}
          </button>
        )}
          {["conversation", "dialog"].includes(q.kind) && (
            <MessageCircle size={19} />
          )}{" "}
          {prompt}
        </div>
      )}
      {de && q.kind === "translate" && (
        <div className="prompt" lang="sr">
          {q.prompt}
        </div>
      )}
      {de && q.kind === "order" && (
        <details>
          <summary>Hinweis auf Serbisch</summary>
          <p lang="sr">{q.prompt}</p>
        </details>
      )}
      {q.kind === "image" && q.word && (
        <div className="picture">
          <Visual value={q.word.visual} />
        </div>
      )}
      {(q.audio || (q.kind === "flash" && q.word)) && (
        <Sound clip={q.audio || q.word!.audio} lang={lang} />
      )}
      {q.kind === "flash" && de && <p>Wähle die serbische Bedeutung.</p>}
      {q.text && <blockquote lang="de">{q.text}</blockquote>}
      <fieldset disabled={disabled}>
        {q.questions?.map((sub, i) => (
          <label className="selectrow" key={sub.prompt}>
            <span lang="de">{sub.prompt}</span>
            <select
              value={many[i] || ""}
              onChange={(e) => update(i, e.target.value)}
            >
              <option value="">{t("Izaberi odgovor", "Antwort wählen")}</option>
              {shuffle(sub.options, `${q.id}:${i}`).map((v) => (
                <option key={v}>{v}</option>
              ))}
            </select>
          </label>
        ))}
        {q.pairs?.map((w, i) => (
          <label className="selectrow match" key={w.id}>
            <Visual value={w.visual} />
            <span className="sr-only">
              {t("Slika", "Bild")} {i + 1}
            </span>
            <select
              value={many[i] || ""}
              onChange={(e) => update(i, e.target.value)}
            >
              <option value="">{t("Poveži sa slikom", "Bild zuordnen")}</option>
              {shuffle(
                q.pairs!.map((y) => y.de),
                q.id,
              ).map((v) => (
                <option key={v}>{v}</option>
              ))}
            </select>
          </label>
        ))}
        {!!tokens.length && (
          <>
            <p className="muted">
              {t(
                "Klikni ili prevuci reči u polje ispod. Klik na ubačenu reč je vraća.",
                "Klicke oder ziehe Wörter ins Feld. Erneut klicken, um ein Wort zu entfernen.",
              )}
            </p>
            <div
              className="tilebox"
              aria-label={t("Tvoja rečenica", "Dein Satz")}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                if (drag !== null) add(drag);
                setDrag(null);
              }}
            >
              {placed.map((i) => (
                <button
                  type="button"
                  className="tile"
                  key={i}
                  onClick={() => setPlaced(placed.filter((k) => k !== i))}
                >
                  {tokens[i]}
                </button>
              ))}
            </div>
            <div className="tilebank">
              {tokens.map(
                (v, i) =>
                  !placed.includes(i) && (
                    <button
                      type="button"
                      className="tile"
                      key={i}
                      draggable={!disabled}
                      onDragStart={(e) => {
                        e.dataTransfer.setData("text/plain", v);
                        setDrag(i);
                      }}
                      onClick={() => add(i)}
                    >
                      {v}
                    </button>
                  ),
              )}
            </div>
          </>
        )}
        {["conversation", "dialog"].includes(q.kind) && (
          <button
            type="button"
            className="quiet"
            onClick={() => {
              setTypeMode(!typeMode);
              setText("");
            }}
          >
            {typeMode
              ? t("Prikaži ponuđene odgovore", "Antwortoptionen anzeigen")
              : t("Upiši svoj odgovor", "Antwort selbst schreiben")}
          </button>
        )}
        {isWrite ? (
          <>
            <label className="inputlabel" htmlFor="reply">
              {t("Tvoj odgovor", "Deine Antwort")}
            </label>
            <input
              autoComplete="off"
              autoCapitalize="sentences"
              lang="de"
              id="reply"
              value={text}
              maxLength={240}
              onChange={(e) => setText(e.target.value)}
              placeholder="…"
            />
            <div className="tilebank special">
              {["ä", "ö", "ü", "ß", "Ä", "Ö", "Ü"].map((c) => (
                <button
                  type="button"
                  key={c}
                  className="tile"
                  onClick={() => setText(text + c)}
                >
                  {c}
                </button>
              ))}
            </div>
          </>
        ) : (
          q.options && (
            <div className="choices">
              {q.options.map((v) => (
                <button
                  key={v}
                  type="button"
                  className={single === v ? "choice selected" : "choice"}
                  aria-pressed={single === v}
                  onClick={() => setSingle(v)}
                >
                  {v}
                </button>
              ))}
            </div>
          )
        )}
      </fieldset>
      {disabled && (
        <div
          className={`feedback ${cursor.graded?.ok ? "ok" : "miss"}`}
          role="status"
        >
          <strong>
            {cursor.graded?.ok ? <Check size={20} /> : <X size={19} />}{" "}
            {cursor.graded?.ok ? "Sehr gut!" : "Keine Sorge, weiter üben!"}
          </strong>
          <p>{cursor.graded?.answer}</p>
          {isA12 && cursor.graded?.answer && (
            <PronounceText text={cursor.graded.answer} />
          )}
          <small>
            {q.explain[de ? 1 : 0]}
            {cursor.graded?.points
              ? ` · +${cursor.graded.points} XP`
              : cursor.graded?.ok
                ? ` · ${t("XP već osvojen", "XP bereits erhalten")}`
                : ""}
          </small>
        </div>
      )}
      <button
        type="submit"
        className="primary exercise-action"
        disabled={!disabled && !valid}
      >
        {disabled
          ? t("Nastavi", "Weiter")
          : checkMode
            ? t("Potvrdi odgovor", "Antwort bestätigen")
            : t("Proveri odgovor", "Antwort prüfen")}
        <ArrowRight size={18} />
      </button>
    </form>
  );
}
