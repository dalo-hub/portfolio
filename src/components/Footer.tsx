import { useTranslation } from "../hooks/useTranslation.ts";
import "../styles/components/footer.css";
import { LogoIcon } from "./Logo.tsx";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div>
          <LogoIcon className="navbar__logo" />
          <span>dalodev</span>
        </div>
        <p className="footer__text">
          {t.footer.built} &middot; &copy; {new Date().getFullYear()}{" "}
          {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
