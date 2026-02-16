import { motion } from "framer-motion";
import { useTranslation } from "../hooks/useTranslation.ts";
import "../styles/components/hero.css";
import { LogoFull } from "./Logo.tsx";
import ParticleNetwork from "./ParticleNetwork.tsx";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="hero" id="hero">
      <ParticleNetwork />
      <div className="hero__content">
        <motion.div
          className="hero__logo"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <LogoFull className="hero__logo-svg" />
        </motion.div>
        <motion.p
          className="hero__greeting"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {t.hero.greeting}
        </motion.p>
        <motion.h1
          className="hero__name"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          {t.hero.name}
        </motion.h1>
        <motion.p
          className="hero__role"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          {t.hero.role}
        </motion.p>
        <motion.p
          className="hero__subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.5 }}
        >
          {t.hero.subtitle}
        </motion.p>
        <motion.div
          className="hero__buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.5 }}
        >
          <a href="#projects" className="hero__btn hero__btn--primary">
            {t.hero.cta}
          </a>
          <a href="#contact" className="hero__btn hero__btn--secondary">
            {t.hero.contact}
          </a>
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hero__btn hero__btn--outline"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M8 2v9M4 8l4 4 4-4M2 14h12" />
            </svg>
            {t.hero.cv}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
