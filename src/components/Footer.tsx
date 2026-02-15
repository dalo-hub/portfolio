import { useTranslation } from "../hooks/useTranslation.ts";
import { LogoFull } from "./Logo.tsx";
import "../styles/components/footer.css";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <LogoFull className="footer__logo" />
        <p className="footer__text">
          {t.footer.built} &middot; &copy; {new Date().getFullYear()}{" "}
          {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
