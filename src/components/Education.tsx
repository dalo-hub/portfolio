import { motion } from "framer-motion";
import type { Lang } from "../context/langContextValue.ts";
import { education } from "../data/portfolio.ts";
import { useTranslation } from "../hooks/useTranslation.ts";
import "../styles/components/education.css";
import Section from "./Section.tsx";

export default function Education() {
  const { t, lang } = useTranslation();

  return (
    <Section id="education" title={t.education.title}>
      <div className="education-list">
        {education.map((item, i) => (
          <motion.div
            key={i}
            className="education-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
          >
            <div className="education-card__avatar">
              {item.logo ? (
                <img src={item.logo} alt={item.institution} />
              ) : (
                <span>{item.institution.charAt(0)}</span>
              )}
            </div>
            <div>
              <h3 className="education-card__degree">
                {item.degree[lang as Lang]}
              </h3>
              <p className="education-card__institution">{item.institution}</p>
              <span className="education-card__date">
                {item.startDate} — {item.endDate}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
