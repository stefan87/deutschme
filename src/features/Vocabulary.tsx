import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, RotateCcw } from "./icons";
import { choose } from "../core/i18n";
import { words } from "../data/content";
import { extraVocabulary } from "../data/extra-vocabulary";
import type { CardStatus, Lang, Study, Word } from "../core/types";
import { Visual } from "./Exercise";
import Sound from "./Sound";
import PronounceText from "./PronounceText";

type CategorizedWord = Word & { category?: string };

const allVocabulary: CategorizedWord[] = (() => {
  const used = new Set<string>();
  return [...words, ...extraVocabulary].filter((word) => {
    const key = word.de.trim().toLocaleLowerCase("de");
    if (used.has(key)) return false;
    used.add(key);
    return true;
  });
})();

export default function Vocabulary({
  state,
  lang,
  onMark,
  onToggleFavorite,
}: {
  state: Study;
  lang: Lang;
  onMark: (id: string, status: CardStatus) => void;
  onToggleFavorite: (id: string) => void;
}) {
  const t = (a: string, b: string) => choose(lang, a, b);
  const [filter, setFilter] = useState("due");
  const favorites = state.favorites || [];
  const favoriteCount = allVocabulary.filter(w => favorites.includes(w.id)).length;
  const [category, setCategory] = useState("all");
  const [query, setQuery] = useState("");
  const [i, setIndex] = useState(0);
  const [face, flip] = useState(false);
  const statuses: Record<CardStatus, string> = {
    new: t("Nova", "Neu"),
    learning: t("Učim", "Im Lernprozess"),
    known: t("Naučena", "Gelernt"),
    hard: t("Teška", "Schwierig"),
  };

  const categories = useMemo(
    () => Array.from(new Set(extraVocabulary.map((w) => w.category))),
    [],
  );
  const eligible = useMemo(() => {
    const now = Date.now();
    return allVocabulary
      .filter((w) =>
        `${w.de} ${w.sr}`.toLocaleLowerCase("de").includes(query.toLocaleLowerCase("de")) &&
        (category === "all" ||
          (category === "original" ? !w.category : w.category === category)) &&
        (filter === "all" ||
          (filter === "due" && (state.cards[w.id]?.due || 0) <= now) ||
          (filter === "favorites" && favorites.includes(w.id)) ||
          filter === (state.cards[w.id]?.status || "new")),
      )
      .sort((a, b) => {
        if (filter !== "due") return 0;
        const A = state.cards[a.id];
        const B = state.cards[b.id];
        return Number(B?.status === "hard") - Number(A?.status === "hard") ||
          (A?.due || 0) - (B?.due || 0);
      });
  }, [state.cards, state.favorites, query, filter, category]);

  const pos = Math.max(0, Math.min(i, eligible.length - 1));
  const w = eligible[pos];
  const reset = () => { setIndex(0); flip(false); };

  return (
    <>
      <div className="card toolbar">
        <label>
          {t("Pretraga", "Suche")}
          <input
            value={query}
            onChange={(e) => { setQuery(e.target.value); reset(); }}
            placeholder={t("npr. Apfel", "z. B. Apfel")}
          />
        </label>
        <label>
          {t("Prikaz", "Ansicht")}
          <select value={filter} onChange={(e) => { setFilter(e.target.value); reset(); }}>
            <option value="due">{t("Za ponavljanje", "Zur Wiederholung")}</option>
            <option value="all">{t("Sve reči", "Alle Wörter")}</option>
            <option value="favorites">{t("Omiljene reči", "Lieblingswörter")}</option>
            {Object.entries(statuses).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
          </select>
        </label>
        <label>
          {t("Tema", "Thema")}
          <select value={category} onChange={(e) => { setCategory(e.target.value); reset(); }}>
            <option value="all">{t("Sve teme", "Alle Themen")}</option>
            <option value="original">{t("Reči iz lekcija", "Wörter aus Lektionen")}</option>
            {categories.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </label>
        <div style={{ display: "grid", gap: 8, alignContent: "center" }}>
          <strong>{t("Sačuvane reči", "Gespeicherte Wörter")}</strong>
          <button
            type="button"
            className="secondary"
            aria-pressed={filter === "favorites"}
            onClick={() => { setFilter("favorites"); reset(); }}
            style={{ justifyContent: "space-between", width: "100%", borderColor: "var(--primary)" }}
          >
            <span>★ {t("Omiljene reči", "Lieblingswörter")}</span>
            <span className="chip">{favoriteCount}</span>
          </button>
        </div>
      </div>
      {w ? (
        <article className="card flashcard" key={w.id}>
          <span className="eyebrow">
            {pos + 1} / {eligible.length} · {statuses[state.cards[w.id]?.status || "new"]}
            {w.category ? ` · ${w.category}` : ""}
          </span>
          <div className="picture"><Visual value={w.visual} /></div>
          <h2 lang="de">{w.de}</h2>
          <button
            type="button"
            className={favorites.includes(w.id) ? "primary" : "secondary"}
            aria-pressed={favorites.includes(w.id)}
            onClick={() => onToggleFavorite(w.id)}
          >
            {favorites.includes(w.id)
              ? t("★ Ukloni iz omiljenih", "★ Aus Favoriten entfernen")
              : t("☆ Sačuvaj reč", "☆ Wort speichern")}
          </button>
          {w.audio ? <Sound key={w.audio} clip={w.audio} lang={lang} /> : <PronounceText text={w.de} />}
          <button type="button" className="secondary" onClick={() => flip(!face)}>
            <RotateCcw size={17} />
            {face ? t("Sakrij prevod", "Übersetzung ausblenden") : t("Okreni karticu", "Karte umdrehen")}
          </button>
          {face && (
            <div className="reveal">
              <strong lang="sr">{w.sr}</strong>
              <div>{t("Množina", "Plural")}: {w.plural === "—" ? t("Nije navedena", "Nicht angegeben") : w.plural}</div>
              {w.example && <p lang="de">{w.example}</p>}
              <div className="tiles">
                {(Object.keys(statuses) as CardStatus[]).map((k) => (
                  <button type="button" className="tile" key={k} onClick={() => {
                    onMark(w.id, k);
                    if (filter !== "due") setIndex(Math.min(pos + 1, eligible.length - 1));
                    flip(false);
                  }}>{statuses[k]}</button>
                ))}
              </div>
            </div>
          )}
          <div className="pager">
            <button type="button" className="secondary" aria-label={t("Prethodna kartica", "Vorherige Karte")}
              disabled={pos === 0} onClick={() => { setIndex(pos - 1); flip(false); }}>
              <ArrowLeft size={19} />
            </button>
            <button type="button" className="secondary" aria-label={t("Sledeća kartica", "Nächste Karte")}
              disabled={pos === eligible.length - 1} onClick={() => { setIndex(pos + 1); flip(false); }}>
              <ArrowRight size={19} />
            </button>
          </div>
        </article>
      ) : (
        <p className="card">
          {filter === "favorites"
            ? t("Još nema sačuvanih reči. Izaberi 'Sve reči' i sačuvaj neku pomoću zvezdice.", "Noch keine gespeicherten Wörter. Wähle 'Alle Wörter' und speichere Wörter mit dem Stern.")
            : t("Ovde trenutno nema kartica. Promeni prikaz ili pretragu.", "Hier sind gerade keine Karten. Ändere den Filter oder die Suche.")}
        </p>
      )}
    </>
  );
}
