import { useEffect, useRef, useState } from "react";
import { Volume2 } from "./icons";
import { media } from "../data/content";
import { speechTexts } from "../data/speech";
import type { Lang } from "../core/types";
import { choose } from "../core/i18n";

export default function Sound({ clip, lang }: { clip: string; lang: Lang }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [speaking, setSpeaking] = useState(false);
  const [error, setError] = useState("");
  const text = speechTexts[clip];
  const t = (sr: string, de: string) => choose(lang, sr, de);

  useEffect(() => {
    if (!("speechSynthesis" in window)) return;
    const refresh = () => {
      setVoices(window.speechSynthesis.getVoices().filter(v =>
        v.lang.toLowerCase().startsWith("de")
      ));
    };
    refresh();
    window.speechSynthesis.addEventListener("voiceschanged", refresh);
    return () => {
      window.speechSynthesis.removeEventListener("voiceschanged", refresh);
      window.speechSynthesis.cancel();
    };
  }, []);

  useEffect(() => {
    return () => {
      audioRef.current?.pause();
      if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    };
  }, [clip]);

  async function playMp3() {
    const audio = audioRef.current;
    if (!audio) {
      setError(t("Audio nije dostupan.", "Audio ist nicht verfügbar."));
      return;
    }
    try {
      audio.currentTime = 0;
      await audio.play();
      setError("");
    } catch {
      setSpeaking(false);
      setError(t("Audio nije dostupan.", "Audio ist nicht verfügbar."));
    }
  }

  function speak() {
    setError("");
    audioRef.current?.pause();
    if (!("speechSynthesis" in window) || !text || voices.length === 0) {
      void playMp3();
      return;
    }
    window.speechSynthesis.cancel();
    const voice = voices.find(v => /natural|neural|premium|enhanced/i.test(v.name)) || voices[0];
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "de-DE";
    utterance.voice = voice;
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.onstart = () => setSpeaking(true);
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = event => {
      setSpeaking(false);
      if (event.error !== "canceled" && event.error !== "interrupted") {
        void playMp3();
      }
    };
    window.speechSynthesis.speak(utterance);
  }

  return (
    <div className="sound">
      <button type="button" className="secondary" onClick={speak}>
        <Volume2 size={18} aria-hidden="true" />
        {speaking ? t("Ponovi izgovor", "Erneut abspielen") : t("Slušaj nemački", "Deutsch anhören")}
      </button>
      <audio
        ref={audioRef}
        src={media(clip)}
        preload="none"
        onError={() => setError(t("Audio nije dostupan.", "Audio ist nicht verfügbar."))}
        aria-hidden="true"
        style={{ display: "none" }}
      />
      {error && <small role="alert">{error}</small>}
    </div>
  );
}
