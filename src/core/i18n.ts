import type { Kind, Lang } from "./types";
export const choose = (lang: Lang, sr: string, de: string) =>
  lang === "de" ? de : sr;
export const taskNames: Record<Kind, [string, string]> = {
  fill: ["Dopuni rečenicu", "Ergänze den Satz"],
  image: ["Prepoznaj sliku", "Erkenne das Bild"],
  match: ["Poveži slike i reči", "Ordne Bilder und Wörter zu"],
  translate: ["Prevedi na nemački", "Übersetze ins Deutsche"],
  order: ["Složi rečenicu", "Bilde den Satz"],
  listen: ["Slušanje", "Hörverstehen"],
  read: ["Čitanje sa razumevanjem", "Leseverstehen"],
  grammar: ["Izaberi član", "Wähle den Artikel"],
  correct: ["Ispravi celu rečenicu", "Korrigiere den ganzen Satz"],
  conversation: ["Izaberi odgovor sagovorniku", "Antworte im Gespräch"],
  flash: ["Proveri značenje reči", "Prüfe die Wortbedeutung"],
  dialog: ["Dopuni dijalog", "Ergänze den Dialog"],
};
