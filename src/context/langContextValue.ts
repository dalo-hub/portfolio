import { createContext } from "react";
import type { Translations } from "../i18n/en.ts";

export type Lang = "en" | "es";

export interface LangContextValue {
  lang: Lang;
  toggleLang: () => void;
  t: Translations;
}

export const LangContext = createContext<LangContextValue | null>(null);
