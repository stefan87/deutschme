import type { Study } from "../core/types";
export interface StudyRepository {
  load(): Study;
  save(state: Study): boolean;
}
export const fresh = (): Study => ({
  profile: null,
  xp: 0,
  results: {},
  awards: {},
  days: {},
  activity: "",
  cards: {},
  cursor: null,
});
export const storageKey = "deutschme:v1";
export const repository: StudyRepository = {
  load() {
    try {
      const data = JSON.parse(localStorage.getItem(storageKey) || "null");
      return data && typeof data === "object"
        ? { ...fresh(), ...data }
        : fresh();
    } catch {
      return fresh();
    }
  },
  save(state) {
    try {
      localStorage.setItem(storageKey, JSON.stringify(state));
      return true;
    } catch {
      return false;
    }
  },
};
