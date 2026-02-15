import { motion } from "framer-motion";
import { useTranslation } from "../hooks/useTranslation.ts";
import { experience } from "../data/portfolio.ts";
import Section from "./Section.tsx";
import type { Lang } from "../context/langContextValue.ts";
import "../styles/components/experience.css";

export default function Experience() {
  const { t, lang } = useTranslation();

  return (
    <Section id="experience" title={t.experience.title}>
      <div className="timeline">
        {experience.map((item, i) => (
          <motion.div
            key={i}
            className={`timeline__item ${i % 2 === 0 ? "timeline__item--left" : "timeline__item--right"}`}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
          >
            <div className="timeline__dot" />
            <div className="timeline__card">
              <div className="timeline__header">
                <div className="timeline__avatar">
                  {item.logo ? (
                    <img src={item.logo} alt={item.company} />
                  ) : (
                    <span>{item.company.charAt(0)}</span>
                  )}
                </div>
                <div>
                  <span className="timeline__date">
                    {item.startDate} — {item.endDate ?? t.experience.present}
                  </span>
                  <h3 className="timeline__role">
                    {item.role[lang as Lang]}
                  </h3>
                  <h4 className="timeline__company">{item.company}</h4>
                </div>
              </div>
              <p className="timeline__desc">
                {item.description[lang as Lang]}
              </p>
              <div className="timeline__tags">
                {item.technologies.map((tech) => (
                  <span key={tech} className="tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
