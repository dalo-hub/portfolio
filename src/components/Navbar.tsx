import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "../hooks/useTranslation.ts";
import ThemeToggle from "./ThemeToggle.tsx";
import { LogoFull } from "./Logo.tsx";
import "../styles/components/navbar.css";

const sections = [
  "about",
  "experience",
  "projects",
  "education",
  "skills",
  "contact",
] as const;

export default function Navbar() {
  const { t, lang, toggleLang } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <a
          className="navbar__brand"
          href="#"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <LogoFull className="navbar__logo" />
        </a>

        <div className="navbar__links">
          {sections.map((s) => (
            <button
              key={s}
              className="navbar__link"
              onClick={() => handleNavClick(s)}
            >
              {t.nav[s]}
            </button>
          ))}
        </div>

        <div className="navbar__actions">
          <ThemeToggle />
          <button
            className="navbar__lang"
            onClick={toggleLang}
            aria-label="Toggle language"
          >
            {lang === "en" ? "ES" : "EN"}
          </button>
          <button
            className={`navbar__hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="navbar__mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            {sections.map((s) => (
              <button
                key={s}
                className="navbar__mobile-link"
                onClick={() => handleNavClick(s)}
              >
                {t.nav[s]}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
