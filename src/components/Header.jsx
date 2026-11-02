import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { LocalizedNavLink } from "./LocalizedLink";
import { useLocalizedNavigation } from "../hooks/useLocalizedNavigation";
import { routes } from "../config/routes";
import Logo from "./Logo";

const languages = ["es", "de", "fr", "en"];

export default function Header() {
  const { t } = useTranslation();
  const { currentLang, getLanguagePath, getCurrentRouteKey } =
    useLocalizedNavigation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuButton = useRef(null);
  const currentKey = getCurrentRouteKey();
  const documentPage = currentKey && !Object.hasOwn(routes, currentKey);
  const links = [
    { to: "/", label: t("home"), end: true },
    { to: "/servicios", label: t("services") },
    { to: "/tarifas", label: t("pricing") },
    { to: "/sobre-mi", label: t("about") },
    { to: "/contacto", label: t("contact") },
  ];
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [mobileMenuOpen]);

  const languageLinks = (mobile) => (
    <div
      className={
        mobile
          ? "flex gap-2 mt-4 px-4"
          : "hidden sm:flex items-center gap-1 text-xs"
      }
    >
      {languages.map((lang) => (
        <a
          key={lang}
          href={getLanguagePath(lang)}
          hrefLang={lang}
          lang={lang}
          aria-label={lang.toUpperCase()}
          aria-current={currentLang === lang ? "page" : undefined}
          className={`language-link ${currentLang === lang ? "language-current" : ""}`}
        >
          {lang.toUpperCase()}
        </a>
      ))}
    </div>
  );
  return (
    <header
      className="site-header fixed top-0 left-0 right-0 z-50"
      role="banner"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-14 md:h-20 gap-4">
          <LocalizedNavLink
            to="/"
            className="brand-lockup flex flex-col"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Logo className="brand-monogram" decorative />
            <span className="font-serif text-lg md:text-xl font-semibold text-gray-900">
              María Ángeles Capas
            </span>
            <span className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider">
              {t("common.swornTranslator")}
            </span>
          </LocalizedNavLink>
          <nav
            className="hidden lg:flex items-center gap-6"
            aria-label={t("common.quickLinks")}
          >
            {links.map((link) => (
              <LocalizedNavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  `site-nav-link ${isActive || (link.to === "/servicios" && documentPage) ? "site-nav-active" : ""}`
                }
              >
                {link.label}
              </LocalizedNavLink>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            {languageLinks(false)}
            <button
              ref={menuButton}
              type="button"
              className="lg:hidden p-3 -mr-2 text-gray-600 flex items-center justify-center"
              aria-label={t(
                mobileMenuOpen ? "common.closeMenu" : "common.openMenu",
              )}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMobileMenuOpen((open) => !open)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d={
                    mobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div
            id="mobile-navigation"
            className="lg:hidden border-t border-gray-200 py-4"
          >
            <nav
              className="flex flex-col gap-1"
              aria-label={t("common.quickLinks")}
            >
              {links.map((link) => (
                <LocalizedNavLink
                  key={link.to}
                  to={link.to}
                  end={link.end}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-3 text-sm ${isActive ? "text-blue-600 bg-blue-50" : "text-gray-600"}`
                  }
                >
                  {link.label}
                </LocalizedNavLink>
              ))}
            </nav>
            {languageLinks(true)}
          </div>
        )}
      </div>
    </header>
  );
}
