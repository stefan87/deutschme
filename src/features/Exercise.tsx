import { grade } from "../core/engine";
import MiniConfetti from "./MiniConfetti";
import { useState } from "react";
import { ArrowRight, AudioLines, Check, X, MessageCircle } from "./icons";
import { shuffle } from "../data/content";
import { choose, taskNames } from "../core/i18n";
import type { Cursor, Lang, Question } from "../core/types";
import Sound from "./Sound";
import PronounceText from "./PronounceText";

export { default as Sound } from "./Sound";

export function Visual({ value }: { value: string }) {
  return <span className="visual" aria-hidden="true">{value}</span>;
}

export default function Exercise({
  q, lang, cursor, onAnswer, onNext, checkMode,
}: {
  q: Question;
  lang: Lang;
  cursor: Cursor;
  onAnswer: (items: string[]) => void;
  onNext: () => void;
  checkMode: boolean;
}) {
  const de = lang === "de";
  const t = (sr: string, german: string) => choose(lang, sr, german);
  const [text, setText] = useState("");
  const [single, setSingle] = useState("");
  const [many, setMany] = useState<string[]>([]);
  const [placed, setPlaced] = useState<number[]>([]);
  const [typeMode, setTypeMode] = useState(false);
  const [drag, setDrag] = useState<number | null>(null);
  const [hintShown, setHintShown] = useState(false);
  const disabled = !!cursor.graded;
  const isA12 = q.id.startsWith("A1.2-");
  const germanPrompt = isA12 && ["conversation", "dialog"].includes(q.kind);
  const isAssistedTranslation = q.kind === "translate";
  const expected = q.accept?.[0] || "";
  const wordTiles = isAssistedTranslation
    ? expected.replace(/[.!?]+$/u, "").split(/\s+/).filter(Boolean)
    : [];
const tokens = typeMode && isAssistedTranslation
  ? []
  : shuffle(q.tokens || wordTiles, q.id);
  const isWrite =
    (q.kind === "translate" && (!isAssistedTranslation || typeMode)) ||
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
    setMany(old => {
      const copy = [...old];
      copy[index] = value;
      return copy;
    });
  const add = (i: number) =>
    setPlaced(old => disabled || old.includes(i) ? old : [...old, i]);
  const answers = () => isWrite
    ? [text]
    : q.pairs || q.questions
      ? many
      : tokens.length
        ? [placed.map(i => tokens[i]).join(" ")]
        : [single];
  const feedbackValue = answers().filter(Boolean).join(" · ");
  const sameAnswer = (a: string, b: string) =>
    a.normalize("NFC").toLocaleLowerCase("de").trim()
      .replace(/[\s.!?]+$/u, "").replace(/\s+/g, " ") ===
    b.normalize("NFC").toLocaleLowerCase("de").trim()
      .replace(/[\s.!?]+$/u, "").replace(/\s+/g, " ");


  const feedbackBox = (value: string) => (
    <span
      lang="de"
      style={{
        display: "inline-block",
        background: "#ffffff",
        color: cursor.graded?.ok ? "#167a43" : "#c62828",
        borderRadius: 8,
        padding: "4px 10px",
        margin: "0 4px",
        fontWeight: 800,
        overflowWrap: "anywhere",
        maxWidth: "100%",
      }}
    >
      {value}
    </span>
  );

  const prompt = de && ["translate", "order"].includes(q.kind) ? "" : q.prompt;
  const pronunciationText = (() => {
    const answer = cursor.graded?.answer?.trim();
    if (!answer) return "";
    if (q.questions || q.pairs) return "";
    if (q.kind === "flash" || q.kind === "read") return "";
    if (["fill", "grammar"].includes(q.kind)) {
      return q.prompt.replace(/_{3,}/g, answer);
    }
    if (["translate", "order", "correct", "conversation", "dialog", "listen", "image"].includes(q.kind)) {
      return answer;
    }
    return "";
  })();
  const hintText = isAssistedTranslation
    ? t(
        `Prva reč: ${expected.split(/\s+/)[0] || "?"}. Obrati pažnju na položaj glagola.`,
        `Erstes Wort: ${expected.split(/\s+/)[0] || "?"}. Achte auf die Verbposition.`,
      )
    : t("Pročitaj pitanje još jednom. Obrati pažnju na glagol i ključne reči.", "Lies die Frage noch einmal. Achte auf das Verb und die Schlüsselwörter.");

  function playSuccessTone() {
    try {
      const AudioContextClass = window.AudioContext;
      if (!AudioContextClass) return;
      const ctx = new AudioContextClass();
      const now = ctx.currentTime;
      [660, 880].forEach((frequency, index) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const start = now + index * 0.11;
        osc.type = "sine";
        osc.frequency.setValueAtTime(frequency, start);
        gain.gain.setValueAtTime(0.0001, start);
        gain.gain.exponentialRampToValueAtTime(0.055, start + 0.018);
        gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.17);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(start);
        osc.stop(start + 0.18);
      });
      window.setTimeout(() => { void ctx.close().catch(() => {}); }, 550);
    } catch { /* No sound support: visual feedback still works. */ }
  }

  return (
    <form
      className="exercise card"
      data-kind={q.kind}
        onSubmit={(e) => {
        e.preventDefault();
        if (disabled) {
          onNext();
        } else if (valid) {
          const response = answers();
          if (grade(q, response).ok) playSuccessTone();
          onAnswer(response);
        }
      }}
    >
      <span className="eyebrow">
        <AudioLines size={15} /> {t("ZADATAK", "AUFGABE")} {cursor.index + 1}
      </span>
      <h2>{taskNames[q.kind][de ? 1 : 0]}</h2>
      {germanPrompt && <PronounceText text={q.prompt} />}
      {de && q.kind === "translate" && (
        <p>Formuliere diesen Satz auf Deutsch. Die Vorlage ist auf Serbisch.</p>
      )}
       {prompt && (
        <div
          className={`prompt ${["conversation", "dialog"].includes(q.kind) ? "bubble" : ""}`}
          lang={["translate", "order"].includes(q.kind) ? "sr" : "de"}
        >
          {["conversation", "dialog"].includes(q.kind) && (
            <MessageCircle size={19} />
          )}{" "}
          { /_{3,}/.test(prompt)
            ? prompt.split(/(_{3,})/g).map((part, i) =>
                /^_{3,}$/.test(part) ? (
                  <span key={i}>
                    {disabled && feedbackValue
                      ? feedbackBox(feedbackValue)
                      : part}
                  </span>
                ) : (
                  <span key={i}>{part}</span>
                )
              )
            : prompt}
        </div>
      )}

      {disabled && !q.questions && !/_{3,}/.test(prompt) && feedbackValue && (
        <div className="prompt" role="status">
          {feedbackBox(feedbackValue)}
        </div>
      )}
      {de && q.kind === "translate" && <div className="prompt" lang="sr">{q.prompt}</div>}
      {de && q.kind === "order" && (
        <details><summary>Hinweis auf Serbisch</summary><p lang="sr">{q.prompt}</p></details>
      )}
      {q.kind === "image" && q.word && (
        <div className="picture"><Visual value={q.word.visual} /></div>
      )}
      {(q.audio || (q.kind === "flash" && q.word)) && (
        <Sound clip={q.audio || q.word!.audio} lang={lang} />
      )}
      {q.kind === "flash" && de && <p>Wähle die serbische Bedeutung.</p>}
      {q.text && <blockquote lang="de">{q.text}</blockquote>}

      <fieldset disabled={disabled}>
        {q.questions?.map((sub, i) => {
          const chosen = many[i] || "";
          const isCorrect = sameAnswer(chosen, sub.answer);
          return (
            <div key={`${sub.prompt}-${i}`} className="dm-reading-question">
              <label className="selectrow">
                <span lang="de">{sub.prompt}</span>
                <select value={chosen} onChange={e => update(i, e.target.value)}>
                  <option value="">{t("Izaberi odgovor", "Antwort wählen")}</option>
                  {shuffle(sub.options, `${q.id}:${i}`).map(v => <option key={v} value={v}>{v}</option>)}
                </select>
              </label>
              {disabled && (
                <div className={`dm-reading-answer ${isCorrect ? "ok" : "miss"}`} role="status">
                  <span
                    lang="de"
                    className="dm-reading-answer-box"
                    style={{ color: isCorrect ? "#167a43" : "#c62828" }}
                  >
                    {chosen}
                  </span>
                  <span>{isCorrect ? t("Tačno!", "Richtig!") : t("Nije tačno.", "Nicht richtig.")}</span>
                  {!isCorrect && (
                    <span>
                      {t("Tačan odgovor:", "Richtige Antwort:")} <strong lang="de">{sub.answer}</strong>
                    </span>
                  )}
                </div>
              )}
            </div>
          );
        })}

        {q.pairs?.map((w, i) => (
          <label className="selectrow match" key={w.id}>
            <Visual value={w.visual} />
            <span className="sr-only">{t("Slika", "Bild")} {i + 1}</span>
            <select value={many[i] || ""} onChange={e => update(i, e.target.value)}>
              <option value="">{t("Poveži sa slikom", "Bild zuordnen")}</option>
              {shuffle(q.pairs!.map(y => y.de), q.id).map(v => <option key={v}>{v}</option>)}
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
              onDragOver={e => e.preventDefault()}
              onDrop={e => { e.preventDefault(); if (drag !== null) add(drag); setDrag(null); }}
            >
              {placed.map(i => (
                <button type="button" className="tile" key={i}
                  onClick={() => setPlaced(old => old.filter(k => k !== i))}>
                  {tokens[i]}
                </button>
              ))}
            </div>
            <div className="tilebank">
              {tokens.map((v, i) => !placed.includes(i) && (
                <button type="button" className="tile" key={i} draggable={!disabled}
                  onDragStart={e => { e.dataTransfer.setData("text/plain", v); setDrag(i); }}
                  onClick={() => add(i)}>{v}</button>
              ))}
            </div>
          </>
        )}

        {isAssistedTranslation && !disabled && (
          <button type="button" className="quiet"
            onClick={() => { setTypeMode(old => !old); setText(""); setPlaced([]); }}>
            {typeMode
              ? t("Pomoć: složi reči", "Hilfe: Wörter ordnen")
              : t("Želim da napišem samostalno", "Ich möchte selbst schreiben")}
          </button>
        )}
        {isA12 && !disabled && !hintShown && (
          <button type="button" className="quiet" onClick={() => setHintShown(true)}>
            {t("💡 Treba mi nagoveštaj", "💡 Ich brauche einen Tipp")}
          </button>
        )}
        {hintShown && !disabled && (
          <p className="callout" role="status">{hintText}</p>
        )}
      {["conversation", "dialog"].includes(q.kind) && !disabled && (
  <button type="button" className="quiet"
    onClick={() => {
      setTypeMode(old => !old);
      setText("");
      setSingle("");
      setPlaced([]);
    }}>
    {typeMode
      ? t("Prikaži ponuđene odgovore", "Antwortoptionen anzeigen")
      : t("Upiši svoj odgovor", "Antwort selbst schreiben")}
  </button>
)}
        {isWrite ? (
          <>
            <label className="inputlabel" htmlFor="reply">{t("Tvoj odgovor", "Deine Antwort")}</label>
            <input autoComplete="off" autoCapitalize="sentences" lang="de"
              id="reply" value={text} maxLength={240}
              onChange={e => setText(e.target.value)} placeholder="…" />
            <div className="tilebank special">
              {["ä", "ö", "ü", "ß", "Ä", "Ö", "Ü"].map(c => (
                <button type="button" key={c} className="tile" onClick={() => setText(old => old + c)}>{c}</button>
              ))}
            </div>
          </>
        ) : null}
      </fieldset>
      {q.options && !isWrite && !tokens.length && !q.questions && !q.pairs && (
        <div className="choices dm-answer-choices">
          {q.options.map(v => {
            const correctOption = grade(q, [v]).ok;
            const chosenOption = single === v;
            const resultClass = disabled
              ? correctOption ? "dm-answer-correct" : chosenOption ? "dm-answer-wrong" : ""
              : chosenOption ? "selected" : "";
            return disabled ? (
              <div key={v} className={`choice ${resultClass}`}>
                <span>{v}</span>
                {correctOption && pronunciationText && (
                  <span className="dm-answer-sound">
                    <PronounceText text={pronunciationText} />
                  </span>
                )}
              </div>
            ) : (
              <button
                key={v}
                type="button"
                className={`choice ${resultClass}`}
                aria-pressed={chosenOption}
                onClick={() => setSingle(v)}
              >{v}</button>
            );
          })}
        </div>
      )}
      <MiniConfetti active={!!cursor.graded?.ok} />
      {disabled && (
        <div className={`feedback ${cursor.graded?.ok ? "ok" : "miss"}`} role="status">
          <strong>
            {cursor.graded?.ok ? <Check size={20} /> : <X size={19} />}{" "}
            {cursor.graded?.ok ? "Sehr gut!" : "Keine Sorge, weiter üben!"}
          </strong>
<div style={{display:"flex",alignItems:"center",gap:12,flexWrap:"wrap"}}>
            <p style={{margin:0,flex:"0 1 auto"}}>
              {!cursor.graded?.ok && !q.questions && (
                <strong>{t("Tačan odgovor: ", "Richtige Antwort: ")}</strong>
              )}
              {!q.questions && cursor.graded?.answer}
            </p>
                        {pronunciationText && !q.options && (
              <PronounceText text={pronunciationText} />
            )}
          </div>
          <small>
            {q.explain[de ? 1 : 0]}
            {cursor.graded?.points
              ? ` · +${cursor.graded.points} 🥕`
              : cursor.graded?.ok
                ? ` · ${t("Šargarepice već osvojene", "Karotten bereits erhalten")}`
                : ""}
          </small>
        </div>
      )}
      <button type="submit" className="primary exercise-action" disabled={!disabled && !valid}>
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
