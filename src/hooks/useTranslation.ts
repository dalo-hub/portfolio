import { useLang } from "./useLang.ts";

export function useTranslation() {
  const { t, lang, toggleLang } = useLang();
  return { t, lang, toggleLang };
}
