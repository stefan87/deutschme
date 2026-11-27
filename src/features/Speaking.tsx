import { useEffect, useRef, useState } from "react";
import { Mic, Square, ArrowLeft, ArrowRight } from "./icons";
import { choose } from "../core/i18n";
import type { Lang } from "../core/types";
import PronounceText from "./PronounceText";
import { scenes } from "../data/scenes";
import { extraSceneDialogues } from "../data/germany-extra-dialogues";
type SpeakingTopic = {
  icon: string;
  sr: string;
  de: string;
  prompts: string[];
};

const topicGroups = [
  { icon: "👋", sr: "Predstavljanje", de: "Vorstellung", sceneIds: [10], extras: ["Guten Tag! Ich heiße Alex und ich wohne in München."] },
  { icon: "☕", sr: "U kafiću", de: "Im Café", sceneIds: [11], extras: ["Die Rechnung, bitte. Vielen Dank!"] },
  { icon: "🛍️", sr: "Kupovina", de: "Einkaufen", sceneIds: [4], extras: ["Ich suche eine Jacke."] },
  { icon: "🧭", sr: "Snalaženje", de: "Orientierung", sceneIds: [12, 13], extras: [] },
  { icon: "💼", sr: "Na poslu", de: "Bei der Arbeit", sceneIds: [2, 3], extras: [] },
  { icon: "🏠", sr: "Svakodnevica", de: "Alltag", sceneIds: [0, 1, 5, 6, 7, 8, 9], extras: [] },
];

const topics: SpeakingTopic[] = topicGroups.map(group => {
  const sentences: string[] = [...group.extras];
  for (const sceneId of group.sceneIds) {
    const scene = scenes[sceneId];
    if (!scene) continue;
    sentences.push(...scene.slice(2));
    for (const [question, answer] of extraSceneDialogues[sceneId] || []) {
      sentences.push(question, answer);
    }
  }
  return {
    icon: group.icon,
    sr: group.sr,
    de: group.de,
    prompts: [...new Set(sentences.map(s => s.trim()).filter(Boolean))],
  };
});

export default function Speaking({ lang }: { lang: Lang }) {
  const t = (sr: string, de: string) => choose(lang, sr, de);
  const rec = useRef<MediaRecorder | null>(null);
  const stream = useRef<MediaStream | null>(null);
  const alive = useRef(true);
  const timer = useRef<number | undefined>(undefined);
  const url = useRef("");
  const [mode, setMode] = useState<"idle" | "waiting" | "recording">("idle");
  const [audio, setAudio] = useState("");
  const [error, setError] = useState(false);
  const [topicIndex, setTopicIndex] = useState<number | null>(null);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const topic = topicIndex === null ? null : topics[topicIndex];
  const phrase = topic?.prompts[phraseIndex] || "";

  useEffect(() => {
    alive.current = true;
    return () => {
      alive.current = false;
      window.clearTimeout(timer.current);
      if (rec.current?.state === "recording") rec.current.stop();
      stream.current?.getTracks().forEach(track => track.stop());
      if (url.current) URL.revokeObjectURL(url.current);
    };
  }, []);

  function clearAudio() {
    if (url.current) URL.revokeObjectURL(url.current);
    url.current = "";
    setAudio("");
    setError(false);
  }
  function openTopic(index: number) {
    if (mode !== "idle") return;
    clearAudio();
    setPhraseIndex(0);
    setTopicIndex(index);
  }
  function changePhrase(next: number) {
    if (!topic || mode !== "idle") return;
    clearAudio();
    setPhraseIndex(Math.max(0, Math.min(next, topic.prompts.length - 1)));
  }
  async function start() {
    if (mode !== "idle") return;
    setError(false);
    clearAudio();
    setMode("waiting");
    try {
      if (!navigator.mediaDevices?.getUserMedia || typeof MediaRecorder === "undefined") {
        throw new Error("Recording not supported");
      }
      const mic = await navigator.mediaDevices.getUserMedia({ audio: true });
      if (!alive.current) {
        mic.getTracks().forEach(track => track.stop());
        return;
      }
      stream.current = mic;
      const recorder = new MediaRecorder(mic);
      rec.current = recorder;
      const chunks: BlobPart[] = [];
      recorder.ondataavailable = event => { if (event.data.size) chunks.push(event.data); };
      recorder.onstop = () => {
        window.clearTimeout(timer.current);
        mic.getTracks().forEach(track => track.stop());
        stream.current = null;
        if (!alive.current) return;
        if (chunks.length) {
          url.current = URL.createObjectURL(new Blob(chunks, { type: recorder.mimeType }));
          setAudio(url.current);
        }
        setMode("idle");
      };
      recorder.start();
      setMode("recording");
      timer.current = window.setTimeout(() => {
        if (recorder.state === "recording") recorder.stop();
      }, 30000);
    } catch {
      stream.current?.getTracks().forEach(track => track.stop());
      stream.current = null;
      if (alive.current) { setMode("idle"); setError(true); }
    }
  }

  return <section className="dm-speak">
    {topic === null ? <>
      <div className="dm-speak-hero">
<img className="dm-speak-hero-icon dm-rabbit-hero-image" src={`${import.meta.env.BASE_URL}deutschly-speaking-rabbit.png`} alt="" aria-hidden="true" />
        <div><span className="eyebrow">{t("VEŽBA IZGOVORA", "AUSSPRACHE ÜBEN")}</span>
          <h2>{t("Vežbaj nemački govor", "Deutsch sprechen üben")}</h2>
          <p>{t("Slušaj, ponovi i snimi svoj glas. Vežbaj svojim tempom.", "Höre zu, sprich nach und nimm deine Stimme auf.")}</p>
        </div>
      </div>
      <div className="dm-speak-section-head"><h2>{t("Izaberi situaciju", "Situation auswählen")}</h2></div>
      <div className="dm-speak-topics">
        {topics.map((item, index) => <button type="button" key={item.sr} className="dm-speak-topic" onClick={() => openTopic(index)}>
          <span aria-hidden="true">{item.icon}</span>
          <strong>{t(item.sr, item.de)}</strong>
          <small>{item.prompts.length} {t("rečenice", "Sätze")}</small>
        </button>)}
      </div>
      <div className="dm-speak-note">🎧 {t("Izgovor možeš slušati više puta pre snimanja.", "Du kannst die Aussprache vor der Aufnahme beliebig oft anhören.")}</div>
    </> : <>
      <button type="button" className="dm-speak-back" disabled={mode !== "idle"} onClick={() => { clearAudio(); setTopicIndex(null); }}><ArrowLeft size={18}/> {t("Sve situacije", "Alle Situationen")}</button>
      <article className="dm-speak-practice">
        <div className="dm-speak-practice-top"><span className="eyebrow">{topic.icon} {t(topic.sr, topic.de)}</span><span className="chip">{phraseIndex + 1}/{topic.prompts.length}</span></div>
        <progress className="bar" value={phraseIndex + 1} max={topic.prompts.length} aria-label={t("Napredak vežbe", "Übungsfortschritt")}/>
        <p className="muted">{t("Poslušaj i izgovori ovu rečenicu:", "Höre zu und sprich diesen Satz nach:")}</p>
        <div className="dm-speak-sentence" lang="de"><strong>{phrase}</strong><PronounceText text={phrase}/></div>
        <div className="dm-speak-microphone" aria-hidden="true"><Mic size={40}/></div>
        <button type="button" className={mode === "recording" ? "secondary dm-speak-record" : "primary dm-speak-record"} disabled={mode === "waiting"} onClick={() => mode === "recording" ? rec.current?.stop() : void start()}>
          {mode === "recording" ? <Square size={18}/> : <Mic size={18}/>}
          {mode === "recording" ? t("Zaustavi snimanje", "Aufnahme stoppen") : mode === "waiting" ? t("Čeka se mikrofon", "Mikrofonfreigabe ausstehend") : t("Snimi izgovor", "Aussprache aufnehmen")}
        </button>
        {mode === "recording" && <p className="dm-speak-recording" role="status">● {t("Snimanje je u toku (najviše 30 sekundi)", "Aufnahme läuft (maximal 30 Sekunden)")}</p>}
        {error && <p role="alert" className="callout">{t("Mikrofon nije dostupan. Proveri dozvolu i koristi HTTPS ili localhost.", "Mikrofon nicht verfügbar. Prüfe die Freigabe und verwende HTTPS oder localhost.")}</p>}
        {audio && <div className="dm-speak-playback"><strong>{t("Poslušaj svoj snimak", "Deine Aufnahme anhören")}</strong><audio controls src={audio} aria-label={t("Tvoj snimak", "Deine Aufnahme")}/></div>}
        <div className="dm-speak-pager"><button type="button" className="secondary" disabled={phraseIndex === 0 || mode !== "idle"} onClick={() => changePhrase(phraseIndex - 1)}><ArrowLeft size={17}/> {t("Prethodna", "Zurück")}</button>
          <button type="button" className="primary" disabled={mode !== "idle"} onClick={() => phraseIndex === topic.prompts.length - 1 ? (clearAudio(), setTopicIndex(null)) : changePhrase(phraseIndex + 1)}>{phraseIndex === topic.prompts.length - 1 ? t("Završi", "Fertig") : t("Sledeća", "Weiter")} <ArrowRight size={17}/></button></div>
        <small className="muted">{t("Snimak ostaje samo u ovom tabu. Nema automatskog ocenjivanja ni dodele šargarepica.", "Die Aufnahme bleibt nur in diesem Tab. Keine automatische Bewertung oder Karottenvergabe.")}</small>
      </article>
    </>}
  </section>;
}
