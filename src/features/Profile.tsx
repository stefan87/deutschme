import { useState } from "react";
import { ArrowRight } from "./icons";
import type { Lang, Profile } from "../core/types";
import { choose } from "../core/i18n";
import { levels } from "../data/roadmap";
export default function ProfileForm({
  profile,
  onSave,
  suggestedLevel,
}: {
  profile: Profile | null;
  onSave: (p: Profile) => void;
  suggestedLevel?: Profile["start"];
}) {
  const [p, set] = useState<Profile>(
    profile || {
      name: "",
      language: "sr",
      native: "sr",
      start: suggestedLevel || "A1.1",
      goal: 10,
      theme: "system",
    },
  );
  const [saved, save] = useState(false);
  const t = (a: string, b: string) => choose(p.language, a, b);
  const update = (v: Partial<Profile>) => {
    set({ ...p, ...v });
    save(false);
  };
  return (
    <form
      className="profile-form"
      onSubmit={(e) => {
        e.preventDefault();
        if (!p.name.trim()) return;
        onSave({ ...p, name: p.name.trim() });
        save(true);
      }}
    >
      <label>
        {t("Tvoje ime", "Dein Name")}
        <input
          name="name"
          required
          maxLength={45}
          autoComplete="given-name"
          value={p.name}
          onChange={(e) => update({ name: e.target.value })}
          placeholder="z. B. Stefan"
        />
      </label>
      <div className="formgrid">
        <label>
          {t("Maternji jezik", "Muttersprache")}
          <select
            value={p.native}
            onChange={(e) => update({ native: e.target.value as Lang })}
          >
            <option value="sr">Srpski</option>
            <option value="de">Deutsch</option>
          </select>
        </label>
        <label>
          {t("Jezik interfejsa", "Sprache der Oberfläche")}
          <select
            value={p.language}
            onChange={(e) => update({ language: e.target.value as Lang })}
          >
            <option value="sr">Srpski</option>
            <option value="de">Deutsch</option>
          </select>
        </label>
      </div>
      <label>
        {t("Željeni početni nivo", "Gewünschtes Startniveau")}
        <select
          value={p.start}
          onChange={(e) =>
            update({ start: e.target.value as Profile["start"] })
          }
        >
          {levels.map((x) => (
            <option key={x}>{x}</option>
          ))}
        </select>
      </label>
      {p.start !== "A1.1" && (
        <small className="callout">
          {t(
            "Ovaj nivo je u pripremi. Možeš odmah učiti na A1.1 ili pregledati plan izabranog nivoa.",
            "Dieses Niveau ist in Vorbereitung. Du kannst auf A1.1 lernen oder den Plan ansehen.",
          )}
        </small>
      )}
      <fieldset>
        <legend>{t("Dnevni cilj", "Tagesziel")}</legend>
        <div className="tiles">
          {[5, 10, 15, 20].map((v) => (
            <label
              className={`tile goal-option ${p.goal === v ? "selected" : ""}`}
              key={v}
            >
              <input
                type="radio"
                name="goal"
                checked={p.goal === v}
                onChange={() => update({ goal: v })}
              />{" "}
              {v} min
            </label>
          ))}
        </div>
      </fieldset>
      {profile && (
        <label>
          {t("Tema", "Farbschema")}
          <select
            value={p.theme}
            onChange={(e) =>
              update({ theme: e.target.value as Profile["theme"] })
            }
          >
            <option value="system">{t("Sistemska", "System")}</option>
            <option value="light">{t("Svetla", "Hell")}</option>
            <option value="dark">{t("Tamna", "Dunkel")}</option>
          </select>
        </label>
      )}
      <button className="primary" type="submit">
        {profile
          ? t("Sačuvaj podešavanja", "Einstellungen speichern")
          : t("Započni učenje", "Jetzt lernen")}
        <ArrowRight size={18} />
      </button>
      {saved && profile && (
        <small role="status">
          {t("Podešavanja su sačuvana.", "Einstellungen gespeichert.")}
        </small>
      )}
    </form>
  );
}
