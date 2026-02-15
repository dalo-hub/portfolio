import { motion } from "framer-motion";
import { useTranslation } from "../hooks/useTranslation.ts";
import ParticleNetwork from "./ParticleNetwork.tsx";
import "../styles/components/hero.css";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="hero" id="hero">
      <ParticleNetwork />
      <div className="hero__content">
        <motion.p
          className="hero__greeting"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {t.hero.greeting}
        </motion.p>
        <motion.h1
          className="hero__name"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {t.hero.name}
        </motion.h1>
        <motion.p
          className="hero__role"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          {t.hero.role}
        </motion.p>
        <motion.p
          className="hero__subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          {t.hero.subtitle}
        </motion.p>
        <motion.div
          className="hero__buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <a href="#projects" className="hero__btn hero__btn--primary">
            {t.hero.cta}
          </a>
          <a href="#contact" className="hero__btn hero__btn--secondary">
            {t.hero.contact}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
