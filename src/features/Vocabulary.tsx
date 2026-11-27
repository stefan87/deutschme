import { useMemo, useRef, useState } from "react";
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
  return [...words, ...extraVocabulary].filter(word => {
    const key = word.de.trim().toLocaleLowerCase("de");
    if (used.has(key)) return false;
    used.add(key);
    return true;
  });
})();

function categoryIcon(name: string) {
  const c = name.toLocaleLowerCase("de").trim();
  if (/reči iz lekcija|reci iz lekcija|wörter aus lektionen|lekcij/.test(c)) return "📚";
  if (/osnovne fraze|fraze|phrase|ausdruck/.test(c)) return "🗨️";
  if (/porodic|famil/.test(c)) return "👨‍👩‍👧";
  if (/^dom$|kuća|kuca|haus|wohn/.test(c)) return "🏠";
  if (/nameštaj|namestaj|möbel|moebel/.test(c)) return "🛋️";
  if (/piće|pice|getränk|getraenk|trink/.test(c)) return "🥤";
  if (/hrana|essen|food|obrok/.test(c)) return "🍴";
  if (/odeća|odeca|odeć|odec|kleid|bekleid/.test(c)) return "👕";
  if (/^telo$|körper|koerper|body|anatom/.test(c)) return "🧍";
  if (/zdrav|gesund|arzt|medizin/.test(c)) return "❤️";
  if (/^grad$|stadt|city/.test(c)) return "🏙️";
  if (/prevoz|transport|verkehr|fahrzeug/.test(c)) return "🚌";
  if (/posao|arbeit|beruf|job/.test(c)) return "💼";
  if (/škola|skola|schule|unterricht/.test(c)) return "🎓";
  if (/priroda|natur|landschaft/.test(c)) return "🌳";
  if (/vreme napolju|vremenske prilike|wetter|weather/.test(c)) return "🌤️";
  if (/^vreme$|^zeit$|uhrzeit|sat/.test(c)) return "⏰";
  if (/kupovina|shopping|einkauf|prodavn/.test(c)) return "🛍️";
  if (/tehnolog|technik|computer|digital/.test(c)) return "💻";
  if (/putov|reise|travel|urlaub/.test(c)) return "🧳";
  if (/životinje|zivotinje|tier|animal/.test(c)) return "🐾";
  if (/svakodnevni predmeti|predmeti|gegenstände|gegenstaende|alltag/.test(c)) return "🎒";
  if (/broj|zahl/.test(c)) return "🔢";
  if (/boj|farb/.test(c)) return "🎨";
  return "✨";
}

export default function Vocabulary({ state, lang, onMark, onToggleFavorite }: {
  state: Study;
  lang: Lang;
  onMark: (id: string, status: CardStatus) => void;
  onToggleFavorite: (id: string) => void;
}) {
  const t = (a: string, b: string) => choose(lang, a, b);
  const favoritesDialog = useRef<HTMLDialogElement>(null);
  const [filter, setFilter] = useState("all");
  const [category, setCategory] = useState("all");
  const [query, setQuery] = useState("");
  const [i, setIndex] = useState(0);
  const [face, flip] = useState(false);
  const [mode, setMode] = useState<"home" | "cards" | "quiz">("home");
  const [quizIndex, setQuizIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const favorites = state.favorites || [];
  const savedWords = allVocabulary.filter(w => favorites.includes(w.id));
  const statuses: Record<CardStatus, string> = {
    new: t("Nova", "Neu"), learning: t("Učim", "Im Lernprozess"),
    known: t("Naučena", "Gelernt"), hard: t("Teška", "Schwierig"),
  };
  const categories = useMemo(() => Array.from(new Set(extraVocabulary.map(w => w.category).filter((c): c is string => !!c))), []);
  const categoryItems = [{ id: "original", label: t("Reči iz lekcija", "Wörter aus Lektionen") },
    ...categories.map(c => ({ id: c, label: c }))];
  const knownCount = allVocabulary.filter(w => state.cards[w.id]?.status === "known").length;
  const percent = allVocabulary.length ? Math.round(knownCount * 100 / allVocabulary.length) : 0;
  const eligible = useMemo(() => {
    const now = Date.now();
    return allVocabulary.filter(w =>
      `${w.de} ${w.sr}`.toLocaleLowerCase("de").includes(query.toLocaleLowerCase("de")) &&
      (category === "all" || (category === "original" ? !w.category : w.category === category)) &&
      (filter === "all" || (filter === "due" && (state.cards[w.id]?.due || 0) <= now) ||
        (filter === "favorites" && favorites.includes(w.id)) ||
        filter === (state.cards[w.id]?.status || "new"))
    ).sort((a, b) => filter !== "due" ? 0 :
      Number(state.cards[b.id]?.status === "hard") - Number(state.cards[a.id]?.status === "hard") ||
      (state.cards[a.id]?.due || 0) - (state.cards[b.id]?.due || 0));
  }, [state.cards, state.favorites, query, filter, category]);
  const pos = Math.max(0, Math.min(i, eligible.length - 1));
  const w = eligible[pos];
  const quizWords = eligible;
  const quizPos = Math.min(quizIndex, Math.max(0, quizWords.length - 1));
  const quizWord = quizWords[quizPos];
  const quizOptions = useMemo(() => {
    if (!quizWord) return [] as CategorizedWord[];
    const pool = allVocabulary.filter(x => x.id !== quizWord.id && x.sr !== quizWord.sr);
    const offset = quizPos % Math.max(1, pool.length);
    const distractors = [...pool.slice(offset), ...pool.slice(0, offset)].slice(0, 3);
    const list = [quizWord, ...distractors];
    const rotate = quizPos % list.length;
    return [...list.slice(rotate), ...list.slice(0, rotate)];
  }, [quizWord, quizPos]);
  const reset = () => { setIndex(0); setQuizIndex(0); setSelected(null); setChecked(false); flip(false); };
  const start = (nextMode: "cards" | "quiz", cat = category) => {
    setCategory(cat); setFilter("all"); setQuery(""); reset(); setMode(nextMode);
  };

  return <section className="dm-vocab">
    <div className="dm-vocab-head">
      <button type="button" className="dm-vocab-icon" onClick={() => setMode("home")} aria-label={t("Nazad na vokabular", "Zurück zum Wortschatz")}><ArrowLeft size={21}/></button>
      <h2>{mode === "home" ? t("Vokabular", "Wortschatz") : mode === "quiz" ? t("Vežba reči", "Wortübung") : t("Kartice reči", "Wortkarten")}</h2>
      <button type="button" className="dm-vocab-icon" onClick={() => setSearchOpen(v => !v)} aria-label={t("Pretraga i filteri", "Suche und Filter")} aria-expanded={searchOpen}>⌕</button>
    </div>

    {searchOpen && <div className="dm-vocab-filters">
      <label>{t("Pretraga", "Suche")}<input value={query} onChange={e => { setQuery(e.target.value); reset(); }} placeholder="Apfel..."/></label>
      <label>{t("Prikaz", "Ansicht")}<select value={filter} onChange={e => { setFilter(e.target.value); reset(); }}>
        <option value="all">{t("Sve reči", "Alle Wörter")}</option>
        <option value="due">{t("Za ponavljanje", "Zur Wiederholung")}</option>
        <option value="favorites">{t("Omiljene reči", "Lieblingswörter")}</option>
        {Object.entries(statuses).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
      </select></label>
      <label>{t("Tema", "Thema")}<select value={category} onChange={e => { setCategory(e.target.value); reset(); }}>
        <option value="all">{t("Sve teme", "Alle Themen")}</option>
        {categoryItems.map(c => <option key={c.id} value={c.id}>{c.label}</option>)}
      </select></label>
      <button type="button" className="secondary" onClick={() => { setFilter("all"); setCategory("all"); setQuery(""); reset(); }}>{t("Očisti filtere", "Filter löschen")}</button>
    </div>}

    {mode === "home" && <>
      <div className="dm-vocab-hero">
        <div className="dm-vocab-hero-main">
<img className="dm-vocab-illustration" src={`${import.meta.env.BASE_URL}deutschly-vocab-cards.png`} alt="" aria-hidden="true" />
          <div><h2>{t("Uči nove reči", "Neue Wörter lernen")}</h2><p>{t("Proširi svoj rečnik korak po korak.", "Erweitere deinen Wortschatz Schritt für Schritt.")}</p></div>
        </div>
        <button type="button" className="primary" onClick={() => start("quiz", "all")}>{t("Započni vežbu", "Übung starten")} <ArrowRight size={19}/></button>
      </div>
      <div className="dm-vocab-section-title"><h2>{t("Kategorije", "Kategorien")}</h2><button type="button" onClick={() => setShowAllCategories(v => !v)}>{showAllCategories ? t("Manje", "Weniger") : t("Sve kategorije", "Alle Kategorien")} →</button></div>
      <div className="dm-vocab-categories">
        {(showAllCategories ? categoryItems : categoryItems.slice(0, 6)).map(c => {
          const count = allVocabulary.filter(w => c.id === "original" ? !w.category : w.category === c.id).length;
          return <button type="button" key={c.id} className="dm-vocab-category" onClick={() => start("cards", c.id)}>
            <span aria-hidden="true">{categoryIcon(c.label)}</span><strong>{c.label}</strong><small>{count} {t("reči", "Wörter")}</small>
          </button>;
        })}
      </div>
      <div className="dm-vocab-progress">
        <div className="dm-vocab-section-title"><h2>{t("Tvoj napredak", "Dein Fortschritt")}</h2><button type="button" onClick={() => start("cards", "all")}>{t("Pogledaj reči", "Wörter ansehen")} →</button></div>
        <div className="dm-vocab-progress-content"><div className="dm-vocab-ring" style={{"--percent": `${percent}%`} as React.CSSProperties}><strong>{percent}%</strong></div>
          <p>{t("Poznaješ", "Du kennst")}<br/><strong>{knownCount}</strong> {t("od", "von")} <strong>{allVocabulary.length}</strong> {t("reči", "Wörtern")}</p></div>
      </div>
      <button type="button" className="secondary dm-vocab-favorites" onClick={() => favoritesDialog.current?.showModal()}>★ {t("Omiljene reči", "Lieblingswörter")} ({savedWords.length})</button>
    </>}

    {mode === "cards" && (w ? <article className="dm-vocab-study" key={w.id}>
      <span className="eyebrow">{pos + 1} / {eligible.length}</span>
      <div className="picture"><Visual value={w.visual}/></div>
      <h2 lang="de">{w.de}</h2>
      {w.audio ? <Sound key={w.audio} clip={w.audio} lang={lang}/> : <PronounceText text={w.de}/>}
      <button type="button" className="secondary" onClick={() => flip(!face)}><RotateCcw size={17}/>{face ? t("Sakrij prevod", "Übersetzung ausblenden") : t("Okreni karticu", "Karte umdrehen")}</button>
      <button type="button" className="secondary" onClick={() => onToggleFavorite(w.id)}>{favorites.includes(w.id) ? "★ " + t("Ukloni iz omiljenih", "Aus Favoriten entfernen") : "☆ " + t("Sačuvaj reč", "Wort speichern")}</button>
      {face && <div className="reveal"><strong lang="sr">{w.sr}</strong><p>{t("Množina", "Plural")}: {w.plural === "—" ? t("Nije navedena", "Nicht angegeben") : w.plural}</p>
        {w.example && <p lang="de">{w.example}</p>}
        <div className="tiles">{(Object.keys(statuses) as CardStatus[]).map(k => <button type="button" className="tile" key={k} onClick={() => { onMark(w.id, k); if (filter !== "due") setIndex(Math.min(pos + 1, eligible.length - 1)); flip(false); }}>{statuses[k]}</button>)}</div>
      </div>}
      <div className="pager"><button type="button" className="secondary" disabled={pos === 0} onClick={() => { setIndex(pos - 1); flip(false); }}><ArrowLeft size={19}/></button>
        <button type="button" className="secondary" disabled={pos === eligible.length - 1} onClick={() => { setIndex(pos + 1); flip(false); }}><ArrowRight size={19}/></button></div>
    </article> : <p className="card">{t("Nema reči za ovaj filter.", "Keine Wörter für diesen Filter.")}</p>)}

    {mode === "quiz" && (quizWord ? <div className="dm-vocab-quiz">
      <div className="line"><strong>{t("Pitanje", "Frage")} {quizPos + 1}/{quizWords.length}</strong><button type="button" className="quiet" onClick={() => setMode("home")}>{t("Završi", "Beenden")}</button></div>
      <progress className="bar" value={quizPos + 1} max={quizWords.length}/>
      <h2>{t("Šta znači reč", "Was bedeutet das Wort")} <span lang="de">„{quizWord.de}“</span>?</h2>
      <PronounceText text={quizWord.de}/>
      <div className="dm-vocab-quiz-choices">{quizOptions.map((option, idx) => <button type="button" key={option.id}
        className={`dm-vocab-quiz-option ${selected === idx ? "chosen" : ""} ${checked && option.id === quizWord.id ? "right" : ""} ${checked && selected === idx && option.id !== quizWord.id ? "wrong" : ""}`}
        disabled={checked} aria-pressed={selected === idx} onClick={() => setSelected(idx)}><span aria-hidden="true">{option.visual || "📘"}</span>{option.sr}</button>)}</div>
      {checked && <div className={`feedback ${selected !== null && quizOptions[selected]?.id === quizWord.id ? "ok" : "miss"}`} role="status">
        <strong>{selected !== null && quizOptions[selected]?.id === quizWord.id ? "Sehr gut!" : t("Nije tačno.", "Nicht richtig.")}</strong>
        <p>{t("Tačan odgovor", "Richtige Antwort")}: {quizWord.sr}</p>
      </div>}
      <button type="button" className="primary dm-vocab-next" disabled={selected === null} onClick={() => {
        if (!checked) { setChecked(true); return; }
        if (quizPos + 1 >= quizWords.length) { setMode("home"); reset(); return; }
        setQuizIndex(quizPos + 1); setSelected(null); setChecked(false);
      }}>{checked ? (quizPos + 1 === quizWords.length ? t("Završi", "Beenden") : t("Sledeće pitanje", "Nächste Frage")) : t("Proveri odgovor", "Antwort prüfen")} <ArrowRight size={18}/></button>
      <small className="muted">{t("Vežba ne menja status naučenih reči. Za označavanje koristi kartice.", "Diese Übung ändert den Lernstatus nicht. Verwende dazu die Karten.")}</small>
    </div> : <p className="card">{t("Nema reči za vežbu.", "Keine Wörter zum Üben.")}</p>)}

    <dialog ref={favoritesDialog} aria-labelledby="saved-words-heading" onClick={e => { if (e.target === favoritesDialog.current) favoritesDialog.current?.close(); }}
      style={{width:"min(94vw,760px)",maxHeight:"82dvh",padding:20,border:"1px solid var(--primary)",borderRadius:20,background:"var(--panel)",color:"var(--ink)"}}>
      <div className="line"><h2 id="saved-words-heading">★ {t("Omiljene reči", "Lieblingswörter")}</h2><button type="button" className="secondary" onClick={() => favoritesDialog.current?.close()}>{t("Zatvori", "Schließen")} ✕</button></div>
      {savedWords.length === 0 ? <p className="callout">{t("Još nema sačuvanih reči.", "Noch keine Lieblingswörter.")}</p> :
        <div style={{display:"grid",gap:10,maxHeight:"60dvh",overflowY:"auto",marginTop:12}}>{savedWords.map(word => <div key={word.id} className="line" style={{padding:10,border:"1px solid var(--border)",borderRadius:12}}>
          <div><strong lang="de">{word.de}</strong><br/><span className="muted">{word.sr}</span>{word.plural && word.plural !== "—" && <small style={{display:"block"}}>{t("Množina", "Plural")}: {word.plural}</small>}</div><PronounceText text={word.de}/>
        </div>)}</div>}
    </dialog>
  </section>;
}
