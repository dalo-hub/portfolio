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
              <p className="education-card__institution">
                {item.website ? (
                  <a href={item.website} target="_blank" rel="noopener noreferrer">
                    {item.institution}
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3.5 1.5h7v7M10.5 1.5L1.5 10.5" />
                    </svg>
                  </a>
                ) : (
                  item.institution
                )}
              </p>
              <div className="education-card__meta">
                <span className="education-card__date">
                  {item.startDate} — {item.endDate}
                </span>
                {item.gpa && (
                  <span className="education-card__gpa">
                    {t.education.gpa}: {item.gpa}
                  </span>
                )}
              </div>
              {item.honors && item.honors.length > 0 && (
                <div className="education-card__honors">
                  {item.honors.map((honor, j) => (
                    <span key={j} className="education-card__honor-tag">
                      {honor[lang as Lang]}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
