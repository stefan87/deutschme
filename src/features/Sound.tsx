import { useEffect, useState } from "react";
import { Volume2 } from "./icons";
import { media } from "../data/content";
import { speechTexts } from "../data/speech";
import type { Lang } from "../core/types";
import { choose } from "../core/i18n";

const VOICE_KEY = "deutschme:voice";
const RATE_KEY = "deutschme:rate";

function storedRate(): number {
  try {
    const value = Number(localStorage.getItem(RATE_KEY) || "0.9");
    return [0.75, 0.9, 1, 1.1].includes(value) ? value : 0.9;
  } catch {
    return 0.9;
  }
}

export default function Sound({ clip, lang }: { clip: string; lang: Lang }) {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [chosen, setChosen] = useState(() => {
    try { return localStorage.getItem(VOICE_KEY) || ""; }
    catch { return ""; }
  });
  const [rate, setRate] = useState(storedRate);
  const [error, setError] = useState("");
  const [speaking, setSpeaking] = useState(false);
  const [fallback, setFallback] = useState(false);
  const text = speechTexts[clip];
  const t = (sr: string, de: string) => choose(lang, sr, de);

  useEffect(() => {
    if (!("speechSynthesis" in window)) return;
    const refresh = () => {
      const german = window.speechSynthesis.getVoices().filter(v =>
        v.lang.toLowerCase().startsWith("de")
      );
      setVoices(german);
    };
    refresh();
    window.speechSynthesis.addEventListener("voiceschanged", refresh);
    return () => {
      window.speechSynthesis.removeEventListener("voiceschanged", refresh);
      window.speechSynthesis.cancel();
    };
  }, []);

  const canSpeak = !!text && voices.length > 0 && "speechSynthesis" in window;
  const voice = voices.find(v => v.voiceURI === chosen)
    || voices.find(v => /natural|neural|premium|enhanced/i.test(v.name))
    || voices[0];

  function speak() {
    if (!canSpeak) { setFallback(true); return; }
    window.speechSynthesis.cancel();
    setError("");
    setSpeaking(false);
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "de-DE";
    utterance.rate = rate;
    utterance.pitch = 1;
    utterance.voice = voice;
    utterance.onstart = () => setSpeaking(true);
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = event => {
      setSpeaking(false);
      if (event.error !== "canceled" && event.error !== "interrupted") {
        setError(t("Izgovor nije dostupan. Koristi MP3.", "Sprachausgabe nicht verfügbar. Bitte MP3 nutzen."));
        setFallback(true);
      }
    };
    window.speechSynthesis.speak(utterance);
  }

  return (
    <div className="sound">
      <Volume2 size={18} aria-hidden="true" />
      {canSpeak && (
        <>
          <button type="button" className="secondary" onClick={speak}>
            {speaking ? t("Ponovi izgovor", "Erneut abspielen") : t("Slušaj nemački", "Deutsch anhören")}
          </button>
          <select
            aria-label={t("Nemački glas", "Deutsche Stimme")}
            value={voices.some(v => v.voiceURI === chosen) ? chosen : ""}
            onChange={e => {
              setChosen(e.target.value);
              try { localStorage.setItem(VOICE_KEY, e.target.value); } catch { /* private mode */ }
            }}
          >
            <option value="">{t("Automatski glas", "Automatische Stimme")}</option>
            {voices.map(v => <option key={v.voiceURI} value={v.voiceURI}>{v.name}</option>)}
          </select>
          <select
            aria-label={t("Brzina izgovora", "Sprechtempo")}
            value={rate}
            onChange={e => {
              const next = Number(e.target.value);
              setRate(next);
              try { localStorage.setItem(RATE_KEY, String(next)); } catch { /* private mode */ }
            }}
          >
            {[0.75, 0.9, 1, 1.1].map(v => <option key={v} value={v}>{v}×</option>)}
          </select>
        </>
      )}
      <details open={fallback || !canSpeak}>
        <summary>{t("Rezervni MP3 snimak", "MP3-Alternative")}</summary>
        <audio controls preload="metadata" src={media(clip)} aria-label={t("Nemački MP3", "Deutsche MP3-Aufnahme")} />
      </details>
      {error && <small role="alert">{error}</small>}
    </div>
  );
}
