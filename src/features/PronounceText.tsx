import { useState } from "react";
import { Volume2 } from "./icons";

export default function PronounceText({ text }: { text: string }) {
  const [error, setError] = useState("");

  function play() {
    setError("");
    if (!("speechSynthesis" in window)) {
      setError("Izgovor nije podrzan na ovom uredjaju.");
      return;
    }
    const content = text.trim();
    if (!content) return;
    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(content);
      utterance.lang = "de-DE";
      utterance.rate = 0.85;
      const voices = window.speechSynthesis.getVoices().filter(
        voice => voice.lang.toLowerCase().startsWith("de")
      );
      utterance.voice = voices.find(voice =>
        /natural|neural|premium|enhanced/i.test(voice.name)
      ) || voices[0] || null;
      utterance.onerror = event => {
        if (event.error !== "canceled" && event.error !== "interrupted") {
          setError("Zvuk trenutno nije dostupan.");
        }
      };
      window.speechSynthesis.speak(utterance);
    } catch {
      setError("Izgovor nije uspeo.");
    }
  }

  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
      <button
        type="button"
        className="secondary"
        onClick={play}
        aria-label={`Poslusaj nemacki izgovor: ${text}`}
        title="Poslusaj izgovor"
        style={{ minWidth: 44, minHeight: 44, padding: 8 }}
      >
        <Volume2 size={18} />
      </button>
      {error && <small role="alert">{error}</small>}
    </span>
  );
}
