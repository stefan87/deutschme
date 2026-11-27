import { useState } from "react";
import { ArrowRight } from "./icons";
import { choose } from "../core/i18n";
import type { Lang, Session } from "../core/types";
import Sound from "./Sound";

export default function Listening({
  lang,
  sessions,
  onOpen,
}: {
  lang: Lang;
  sessions: Session[];
  onOpen: (session: Session) => void;
}) {
  const t = (sr: string, de: string) => choose(lang, sr, de);
  const [showExample, setShowExample] = useState(false);
  const icons = ["🔤", "👋", "🔢", "🌍", "📝", "👪", "⚡", "📅", "🍽️", "💬"];

  return (
    <section className="dm-listening">
      <div className="dm-listening-hero dm-listening-banner">
  <img
    className="dm-listening-banner-image"
    src={`${import.meta.env.BASE_URL}deutschly-listening-banner.png`}
    alt=""
    aria-hidden="true"
  />
  <div className="dm-listening-banner-fade" aria-hidden="true" />
  <div className="dm-listening-banner-copy">
    <span className="eyebrow">{t("VEŽBA SLUŠANJA", "HÖRVERSTEHEN")}</span>
    <h2>{t("Vežbaj nemačko slušanje", "Deutsch hören üben")}</h2>
    <p>{t(
      "Izaberi temu, poslušaj rečenicu i proveri razumevanje.",
      "Wähle ein Thema, höre einen Satz und überprüfe dein Verständnis.",
    )}</p>
  </div>
</div>

      <div className="dm-listening-heading">
        <h2>{t("Izaberi temu", "Thema auswählen")}</h2>
        <button type="button" className="quiet" onClick={() => setShowExample(v => !v)}>
          {showExample ? t("Sakrij primer", "Beispiel ausblenden") : t("Brzi primer", "Kurzes Beispiel")}
        </button>
      </div>
      {showExample && (
        <div className="dm-listening-example">
          <strong>{t("Poslušaj primer", "Beispiel anhören")}</strong>
          <Sound clip="l19" lang={lang} />
        </div>
      )}

      <div className="dm-listening-topics">
        {sessions.map((session, index) => (
          <button type="button" className="dm-listening-topic" key={session.id}
            onClick={() => onOpen(session)}>
            <span className="dm-listening-topic-icon" aria-hidden="true">{icons[index % icons.length]}</span>
            <strong>{session.title[lang === "de" ? 1 : 0]}</strong>
            <small>{session.items.length} {t("zadataka", "Aufgaben")}</small>
            <span className="dm-listening-topic-arrow" aria-hidden="true"><ArrowRight size={17}/></span>
          </button>
        ))}
      </div>
      {sessions.length === 0 && <p className="callout">{t("Trenutno nema vežbi slušanja.", "Derzeit keine Hörübungen verfügbar.")}</p>}
      <div className="dm-listening-note">🔊 {t(
        "Snimak možeš pustiti više puta. Provera odgovora ostaje ista kao ranije.",
        "Du kannst die Aufnahme mehrmals anhören. Die Antwortprüfung bleibt unverändert.",
      )}</div>
    </section>
  );
}
