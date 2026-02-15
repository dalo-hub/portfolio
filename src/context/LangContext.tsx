import { useState, useEffect, type ReactNode } from "react";
import { en } from "../i18n/en.ts";
import { es } from "../i18n/es.ts";
import { LangContext } from "./langContextValue.ts";
import type { Lang } from "./langContextValue.ts";
import type { Translations } from "../i18n/en.ts";

const translations: Record<Lang, Translations> = { en, es };

function getInitialLang(): Lang {
  const stored = localStorage.getItem("lang") as Lang | null;
  if (stored === "en" || stored === "es") return stored;
  return navigator.language.startsWith("es") ? "es" : "en";
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(getInitialLang);

  useEffect(() => {
    document.documentElement.setAttribute("lang", lang);
    localStorage.setItem("lang", lang);
  }, [lang]);

  const toggleLang = () => setLang((l) => (l === "en" ? "es" : "en"));

  return (
    <LangContext.Provider value={{ lang, toggleLang, t: translations[lang] }}>
      {children}
    </LangContext.Provider>
  );
}
