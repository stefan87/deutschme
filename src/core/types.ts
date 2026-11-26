export type Lang = "sr" | "de";
export type LevelId = "A1.1" | "A1.2" | "A2.1" | "A2.2";
export type Kind =
  | "fill"
  | "image"
  | "match"
  | "translate"
  | "order"
  | "listen"
  | "read"
  | "grammar"
  | "correct"
  | "conversation"
  | "flash"
  | "dialog";
export type Word = {
  id: string;
  de: string;
  sr: string;
  plural: string;
  visual: string;
  example: string;
  audio: string;
};
export type Question = {
  id: string;
  kind: Kind;
  prompt: string;
  explain: [string, string];
  options?: string[];
  accept?: string[];
  tokens?: string[];
  word?: Word;
  pairs?: Word[];
  text?: string;
  audio?: string;
  questions?: { prompt: string; options: string[]; answer: string }[];
  hard?: boolean;
};
export type Session = {
  id: string;
  title: [string, string];
  type: "lesson" | "unit" | "exam" | "practice";
  level: LevelId;
  items: Question[];
  intro?: [string, string];
  example?: string;
};
export type Profile = {
  name: string;
  language: Lang;
  native: Lang;
  start: LevelId;
  goal: number;
  theme: "light" | "dark" | "system";
};
export type CardStatus = "new" | "learning" | "known" | "hard";
export type Cursor = {
  id: string;
  index: number;
  correct: number;
  earned: number;
  graded?: { ok: boolean; points: number; answer: string };
};
export type Study = {
  favorites?: string[];
  basics?: Record<string, { score: number; date: string }>;

  placement?: {
    self: LevelId;
    recommended: LevelId;
    scores: Record<LevelId, number>;
    date: string;
    version: number;
  };

  profile: Profile | null;
  xp: number;
  results: Record<string, { score: number; date: string }>;
  awards: Record<string, number>;
  days: Record<string, number>;
  activity: string;
  cards: Record<string, {
    status: CardStatus;
    due: number;
    step: number;
  }>;
  cursor: Cursor | null;
};  
