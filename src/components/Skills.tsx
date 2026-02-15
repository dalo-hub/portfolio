import { motion } from "framer-motion";
import { useTranslation } from "../hooks/useTranslation.ts";
import { skills } from "../data/portfolio.ts";
import { getSkillIcon } from "../data/skillIcons.ts";
import Section from "./Section.tsx";
import "../styles/components/skills.css";

export default function Skills() {
  const { t } = useTranslation();

  return (
    <Section id="skills" title={t.skills.title}>
      <div className="skills-grid">
        {skills.map((category, i) => (
          <motion.div
            key={category.key}
            className="skills-category"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <h3 className="skills-category__title">{t.skills[category.key]}</h3>
            <div className="skills-category__items">
              {category.items.map((skill) => {
                const icon = getSkillIcon(skill);
                return (
                  <span key={skill} className="skill-badge">
                    {icon && (
                      <svg
                        className="skill-badge__icon"
                        viewBox="0 0 24 24"
                        width="16"
                        height="16"
                        fill="currentColor"
                      >
                        <path d={icon.path} />
                      </svg>
                    )}
                    {skill}
                  </span>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
