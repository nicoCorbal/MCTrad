import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { servicePages } from "../config/seo";

/**
 * Related Services component for internal linking
 * Displays links to other translation service pages
 *
 * @param {Object} props
 * @param {string} props.currentServiceKey - Key of the current service (to exclude)
 * @param {string} props.lang - Current language
 * @param {number} props.limit - Maximum number of related services to show
 */
function RelatedServices({ currentServiceKey, lang = "es", limit = 3 }) {
  const { t } = useTranslation();
  const groups = [
    [
      "birth-certificate",
      "marriage-certificate",
      "university-degree",
      "retirement-pension",
    ],
    ["contracts", "court-documents", "notarial-documents"],
  ];
  const current = servicePages[currentServiceKey];
  const group = groups.find((keys) => keys.includes(current?.routeKey)) || [];
  const relatedServices = Object.entries(servicePages)
    .filter(([key]) => key !== currentServiceKey)
    .sort(
      ([, a], [, b]) =>
        Number(group.includes(b.routeKey)) - Number(group.includes(a.routeKey)),
    )
    .slice(0, limit)
    .map(([key, config]) => ({
      key,
      slug: config.slugs[lang],
      title: config.seo[lang].title,
      description: config.seo[lang].description,
    }));

  if (relatedServices.length === 0) return null;

  const titles = {
    es: "Otros Servicios de Traducción",
    de: "Weitere Übersetzungsleistungen",
    fr: "Autres Services de Traduction",
    en: "Other Translation Services",
  };

  return (
    <section className="related-directory editorial-section editorial-container">
      <p className="eyebrow">{t("services")}</p>
      <h2>{titles[lang] || titles.es}</h2>
      <div className="related-grid">
        {relatedServices.map((service, i) => (
          <Link
            to={`/${lang}/${service.slug}`}
            key={service.key}
            className="related-card"
          >
            <span className="eyebrow">0{i + 1}</span>
            <h3>{service.title.split("|")[0].trim()}</h3>
            <p>{service.description}</p>
            <span className="card-link">
              {t("homePage.ctaLearnMore")} <span aria-hidden="true">↗</span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default RelatedServices;
