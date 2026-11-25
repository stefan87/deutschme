import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, RotateCcw } from "./icons";
import { choose } from "../core/i18n";
import { words } from "../data/content";
import type { CardStatus, Lang, Study } from "../core/types";
import { Visual } from "./Exercise";
import Sound from "./Sound";
export default function Vocabulary({
  state,
  lang,
  onMark,
}: {
  state: Study;
  lang: Lang;
  onMark: (id: string, status: CardStatus) => void;
}) {
  const t = (a: string, b: string) => choose(lang, a, b);
  const [filter, setFilter] = useState("due");
  const [query, setQuery] = useState("");
  const [i, setIndex] = useState(0);
  const [face, flip] = useState(false);
  const statuses: Record<CardStatus, string> = {
    new: t("Nova", "Neu"),
    learning: t("Učim", "Im Lernprozess"),
    known: t("Naučena", "Gelernt"),
    hard: t("Teška", "Schwierig"),
  };
  const eligible = useMemo(
    () =>
      words
        .filter(
          (w) =>
            `${w.de} ${w.sr}`.toLowerCase().includes(query.toLowerCase()) &&
            (filter === "all" ||
              (filter === "due" &&
                (state.cards[w.id]?.due || 0) <= Date.now()) ||
              filter === (state.cards[w.id]?.status || "new")),
        )
        .sort((a, b) => {
          if (filter !== "due") return 0;
          const A = state.cards[a.id],
            B = state.cards[b.id];
          return (
            Number(B?.status === "hard") - Number(A?.status === "hard") ||
            (A?.due || 0) - (B?.due || 0)
          );
        }),
    [state.cards, query, filter],
  );
  const w = eligible[Math.min(i, eligible.length - 1)];
  const pos = Math.min(i, eligible.length - 1);
  return (
    <>
      <div className="card toolbar">
        <label>
          {t("Pretraga", "Suche")}
          <input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setIndex(0);
              flip(false);
            }}
            placeholder={t("npr. Apfel", "z. B. Apfel")}
          />
        </label>
        <label>
          {t("Prikaz", "Ansicht")}
          <select
            value={filter}
            onChange={(e) => {
              setFilter(e.target.value);
              setIndex(0);
              flip(false);
            }}
          >
            <option value="due">
              {t("Za ponavljanje", "Zur Wiederholung")}
            </option>
            <option value="all">{t("Sve reči", "Alle Wörter")}</option>
            {Object.entries(statuses).map(([k, v]) => (
              <option key={k} value={k}>
                {v}
              </option>
            ))}
          </select>
        </label>
      </div>
      {w ? (
        <article className="card flashcard" key={w.id}>
          <span className="eyebrow">
            {pos + 1} / {eligible.length} ·{" "}
            {statuses[state.cards[w.id]?.status || "new"]}
          </span>
          <div className="picture">
            <Visual value={w.visual} />
          </div>
          <h2 lang="de">{w.de}</h2>
          <Sound key={w.audio} clip={w.audio} lang={lang} />
          <button className="secondary" onClick={() => flip(!face)}>
            <RotateCcw size={17} />
            {face
              ? t("Sakrij prevod", "Übersetzung ausblenden")
              : t("Okreni karticu", "Karte umdrehen")}
          </button>
          {face && (
            <div className="reveal">
              <strong lang="sr">{w.sr}</strong>
              <div>
                {t("Množina", "Plural")}: {w.plural}
              </div>
              <p lang="de">{w.example}</p>
              <div className="tiles">
                {(Object.keys(statuses) as CardStatus[]).map((k) => (
                  <button
                    className="tile"
                    key={k}
                    onClick={() => {
                      onMark(w.id, k);
                      if (filter !== "due")
                        setIndex(Math.min(pos + 1, eligible.length - 1));
                      flip(false);
                    }}
                  >
                    {statuses[k]}
                  </button>
                ))}
              </div>
            </div>
          )}
          <div className="pager">
            <button
              className="secondary"
              aria-label={t("Prethodna kartica", "Vorherige Karte")}
              disabled={pos === 0}
              onClick={() => {
                setIndex(pos - 1);
                flip(false);
              }}
            >
              <ArrowLeft size={19} />
            </button>
            <button
              className="secondary"
              aria-label={t("Sledeća kartica", "Nächste Karte")}
              disabled={pos === eligible.length - 1}
              onClick={() => {
                setIndex(pos + 1);
                flip(false);
              }}
            >
              <ArrowRight size={19} />
            </button>
          </div>
        </article>
      ) : (
        <p className="card">
          {t(
            "Ovde trenutno nema kartica. Promeni prikaz ili pretragu.",
            "Hier sind gerade keine Karten. Ändere den Filter oder die Suche.",
          )}
        </p>
      )}
    </>
  );
}
