import { ThemeProvider } from "./context/ThemeContext.tsx";
import { LangProvider } from "./context/LangContext.tsx";
import TitleManager from "./components/TitleManager.tsx";
import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import About from "./components/About.tsx";
import Experience from "./components/Experience.tsx";
import Projects from "./components/Projects.tsx";
import Education from "./components/Education.tsx";
import Skills from "./components/Skills.tsx";
import Contact from "./components/Contact.tsx";
import Footer from "./components/Footer.tsx";

export default function App() {
  return (
    <ThemeProvider>
      <LangProvider>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <TitleManager />
        <Navbar />
        <main id="main-content">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Education />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </LangProvider>
    </ThemeProvider>
  );
}
