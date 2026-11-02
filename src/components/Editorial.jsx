import { useTranslation } from "react-i18next";
import { LocalizedLink } from "./LocalizedLink";

export function PageHero({ eyebrow, title, description, children, aside }) {
  return (
    <section className="page-hero">
      <div className={`editorial-container ${aside ? "page-hero-grid" : ""}`}>
        <div>
          <p className="eyebrow">
            <span />
            {eyebrow || "MAEC · OLG KÖLN"}
          </p>
          <h1>{title}</h1>
          {description && (
            <p className="page-hero-description">{description}</p>
          )}
          {children}
        </div>
        {aside}
      </div>
    </section>
  );
}

export function QuotePanel() {
  const { t } = useTranslation();
  return (
    <aside className="quote-panel">
      <span className="quote-panel-symbol" aria-hidden="true">
        ↗
      </span>
      <p className="eyebrow">MAEC · OLG KÖLN</p>
      <h2>{t("homePage.process.step2Title")}</h2>
      <p>{t("homePage.ctaSubtitle")}</p>
      <LocalizedLink to="/contacto" className="editorial-button">
        {t("homePage.requestQuote")}
      </LocalizedLink>
      <div className="quote-panel-note">
        <span aria-hidden="true">✓</span> {t("homePage.statConfidential")}
      </div>
    </aside>
  );
}

export function SiteCTA() {
  const { t } = useTranslation();
  return (
    <section className="editorial-cta">
      <div className="editorial-container">
        <p className="eyebrow">MAEC · OLG KÖLN</p>
        <h2>{t("homePage.ctaTitle")}</h2>
        <p>{t("homePage.ctaSubtitle")}</p>
        <LocalizedLink to="/contacto" className="editorial-button">
          {t("homePage.ctaContact")}
        </LocalizedLink>
        <a href="mailto:capaslopez@gmail.com">capaslopez@gmail.com ↗</a>
      </div>
    </section>
  );
}

export function TranslationProcess() {
  const { t } = useTranslation();
  return (
    <section className="editorial-section editorial-container">
      <p className="eyebrow">{t("homePage.process.title")}</p>
      <h2>{t("homePage.process.subtitle")}</h2>
      <div className="process-grid">
        {[1, 2, 3, 4].map((step) => (
          <article className="process-step" key={step}>
            <span>0{step}</span>
            <h3>{t(`homePage.process.step${step}Title`)}</h3>
            <p>{t(`homePage.process.step${step}Desc`)}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Credentials() {
  const { t } = useTranslation();
  return (
    <div className="credential-list">
      {[
        {
          title: t("homePage.spainTitle"),
          desc: t("homePage.spainDesc"),
          image: "/selloespana.webp",
          url: "https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Oficina-de-Interpretacion-de-Lenguas/Paginas/Traduccion-e-interpretacion-jurada.aspx",
        },
        {
          title: t("homePage.germanyTitle"),
          desc: t("homePage.germanyDesc"),
          image: "/selloalemania.webp",
          url: "https://www.justiz-dolmetscher.de/Recherche/de/Suchen",
        },
      ].map((item) => (
        <article className="credential-row" key={item.url}>
          <img src={item.image} alt="" width="80" height="80" loading="lazy" />
          <div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-text-link"
            >
              {t("homePage.verifyCredential")} <span aria-hidden="true">↗</span>
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}
