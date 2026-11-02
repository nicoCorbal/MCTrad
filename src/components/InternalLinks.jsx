import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { servicePages } from "../config/seo";

export default function InternalLinks({ lang = "es", variant = "grid" }) {
  const { t } = useTranslation();
  const services = Object.entries(servicePages).map(([key, config]) => ({
    key,
    slug: config.slugs[lang] || config.slugs.es,
    title: config.seo[lang]?.title || config.seo.es.title,
    shortTitle: getShortTitle(key, lang),
  }));
  const titles = {
    es: "Servicios de traducción por documento",
    de: "Übersetzungen nach Dokumentenart",
    fr: "Traductions par type de document",
    en: "Translation by document type",
  };
  if (variant !== "grid")
    return (
      <ul className={`document-links-${variant}`}>
        {services.map((service) => (
          <li key={service.key}>
            <Link to={`/${lang}/${service.slug}`}>
              {variant === "compact"
                ? service.shortTitle
                : service.title.split("|")[0].trim()}
            </Link>
          </li>
        ))}
      </ul>
    );
  return (
    <section className="document-directory">
      <div className="editorial-container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">{t("services")}</p>
            <h2>{titles[lang] || titles.es}</h2>
          </div>
          <span className="directory-count">01 — 07</span>
        </div>
        <div className="document-directory-grid">
          {services.map((service, i) => (
            <Link
              key={service.key}
              to={`/${lang}/${service.slug}`}
              className="document-directory-link"
            >
              <span className="document-index">0{i + 1}</span>
              <span>{service.shortTitle}</span>
              <span aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function getShortTitle(routeKey, lang) {
  const titles = {
    "traduccion-certificado-nacimiento": {
      es: "Certificado Nacimiento",
      de: "Geburtsurkunde",
      fr: "Acte de Naissance",
      en: "Birth Certificate",
    },
    "traduccion-certificado-matrimonio": {
      es: "Certificado Matrimonio",
      de: "Heiratsurkunde",
      fr: "Acte de Mariage",
      en: "Marriage Certificate",
    },
    "traduccion-titulo-universitario": {
      es: "Título Universitario",
      de: "Hochschulzeugnis",
      fr: "Diplôme Universitaire",
      en: "University Degree",
    },
    "traduccion-contratos": {
      es: "Contratos",
      de: "Verträge",
      fr: "Contrats",
      en: "Contracts",
    },
    "traduccion-sentencias-judiciales": {
      es: "Sentencias Judiciales",
      de: "Gerichtsurteile",
      fr: "Jugements",
      en: "Court Judgments",
    },
    "traduccion-documentos-notariales": {
      es: "Documentos Notariales",
      de: "Notarielle Dokumente",
      fr: "Actes Notariés",
      en: "Notarial Documents",
    },
    "traduccion-jubilaciones-pensiones": {
      es: "Jubilaciones y Pensiones",
      de: "Rente und Pension",
      fr: "Retraite et Pension",
      en: "Retirement & Pension",
    },
  };

  return titles[routeKey]?.[lang] || titles[routeKey]?.es || routeKey;
}
