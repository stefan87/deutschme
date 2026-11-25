import { useEffect, useRef, useState } from "react";
import { Mic, Square } from "./icons";
import { choose } from "../core/i18n";
import type { Lang } from "../core/types";
export default function Speaking({ lang }: { lang: Lang }) {
  const t = (a: string, b: string) => choose(lang, a, b);
  const rec = useRef<MediaRecorder | null>(null),
    stream = useRef<MediaStream | null>(null),
    alive = useRef(true),
    timer = useRef<number | undefined>(undefined),
    url = useRef("");
  const [mode, setMode] = useState<"idle" | "waiting" | "recording">("idle");
  const [audio, setAudio] = useState("");
  const [error, setError] = useState(false);
  useEffect(() => {
    alive.current = true;
    return () => {
      alive.current = false;
      window.clearTimeout(timer.current);
      if (rec.current?.state === "recording") rec.current.stop();
      stream.current?.getTracks().forEach((x) => x.stop());
      if (url.current) URL.revokeObjectURL(url.current);
    };
  }, []);
  async function start() {
    setError(false);
    setMode("waiting");
    try {
      const mic = await navigator.mediaDevices.getUserMedia({ audio: true });
      if (!alive.current) {
        mic.getTracks().forEach((x) => x.stop());
        return;
      }
      stream.current = mic;
      const r = new MediaRecorder(mic);
      rec.current = r;
      const chunks: BlobPart[] = [];
      r.ondataavailable = (e) => chunks.push(e.data);
      r.onstop = () => {
        window.clearTimeout(timer.current);
        mic.getTracks().forEach((x) => x.stop());
        if (!alive.current) return;
        if (url.current) URL.revokeObjectURL(url.current);
        url.current = URL.createObjectURL(
          new Blob(chunks, { type: r.mimeType }),
        );
        setAudio(url.current);
        setMode("idle");
      };
      r.start();
      setMode("recording");
      timer.current = window.setTimeout(() => {
        if (r.state === "recording") r.stop();
      }, 30000);
    } catch {
      stream.current?.getTracks().forEach((x) => x.stop());
      if (alive.current) {
        setMode("idle");
        setError(true);
      }
    }
  }
  return (
    <article className="card">
      <span className="eyebrow">
        <Mic size={16} /> {t("VEŽBA IZGOVORA", "AUSSPRACHE ÜBEN")}
      </span>
      <h2>{t("Snimaj i poslušaj sebe", "Aufnehmen und anhören")}</h2>
      <p lang="de" className="prompt">
        Guten Tag! Ich heiße Alex und ich wohne in München.
      </p>
      <p className="muted">
        {t(
          "Snimak ostaje u ovoj kartici pregledača. Nema automatskog ocenjivanja. Najduže 30 sekundi.",
          "Die Aufnahme bleibt in diesem Tab. Keine automatische Bewertung. Maximal 30 Sekunden.",
        )}
      </p>
      <button
        className="secondary"
        disabled={mode === "waiting"}
        onClick={() =>
          mode === "recording" ? rec.current?.stop() : void start()
        }
      >
        {mode === "recording" ? <Square size={17} /> : <Mic size={17} />}{" "}
        {mode === "recording"
          ? t("Zaustavi snimanje", "Aufnahme stoppen")
          : mode === "waiting"
            ? t("Čeka se mikrofon", "Mikrofonfreigabe ausstehend")
            : t("Snimi izgovor", "Aussprache aufnehmen")}
      </button>
      {error && (
        <p role="alert">
          {t(
            "Mikrofon nije dostupan. Proveri dozvolu i koristi localhost ili HTTPS.",
            "Mikrofon nicht verfügbar. Prüfe die Freigabe und nutze localhost oder HTTPS.",
          )}
        </p>
      )}
      {audio && (
        <audio
          controls
          src={audio}
          aria-label={t("Tvoj snimak", "Deine Aufnahme")}
        />
      )}
    </article>
  );
}
