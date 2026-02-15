import { useTranslation } from "../hooks/useTranslation.ts";
import Section from "./Section.tsx";
import "../styles/components/about.css";

export default function About() {
  const { t } = useTranslation();

  return (
    <Section id="about" title={t.about.title}>
      <div className="about">
        <div className="about__photo">
          <div className="about__photo-placeholder">DL</div>
        </div>
        <div className="about__text">
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
        </div>
      </div>
    </Section>
  );
}
