import { useEffect } from "react";
import { useTranslation } from "../hooks/useTranslation.ts";

export default function TitleManager() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t.pageTitle;
  }, [t.pageTitle]);

  return null;
}
