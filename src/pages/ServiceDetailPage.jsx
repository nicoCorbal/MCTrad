import NotFoundPage from "./NotFoundPage";
import OfficialResources from "../components/OfficialResources";
import FaqItem from "../components/FaqItem";
import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LocalizedLink } from "../components/LocalizedLink";
import { useDocumentHead } from "../hooks/useDocumentHead";
import Breadcrumbs from "../components/Breadcrumbs";
import RelatedServices from "../components/RelatedServices";
import { servicePages, SITE_URL, localeConfig } from "../config/seo";
import { supportedLanguages } from "../i18n/i18n";
import {
  PageHero,
  QuotePanel,
  SiteCTA,
  Credentials,
  TranslationProcess,
} from "../components/Editorial";

/**
 * Programmatic SEO Page for specific translation services
 * Generates scalable landing pages for different document types
 */
function ServiceDetailPage() {
  const { lang = "es", serviceSlug } = useParams();
  const currentLang = supportedLanguages.includes(lang) ? lang : "es";

  // Find the service configuration by slug
  const serviceEntry = Object.entries(servicePages).find(
    ([, config]) => config.slugs[currentLang] === serviceSlug,
  );
  const serviceConfig = serviceEntry?.[1];

  const contentNamespace = serviceConfig ? `service-${serviceConfig.routeKey}` : 'translation';
  const { t, i18n } = useTranslation(serviceConfig ? ['translation', contentNamespace] : ['translation']);
  const serviceContent = serviceConfig ? i18n.getResourceBundle(currentLang, contentNamespace) : null;


  // Build SEO configuration with FAQ schema
  const seoConfig = useMemo(() => {
    if (!serviceConfig) return null;

    const seoData = serviceConfig.seo[currentLang] || serviceConfig.seo.es;
    const locale = localeConfig[currentLang] || localeConfig.es;

    // Generate alternate language links
    const alternateLanguages = supportedLanguages.map((lng) => ({
      lang: lng,
      url: `${SITE_URL}/${lng}/${serviceConfig.slugs[lng]}`,
    }));

    // Generate Service schema + FAQ schema for JSON-LD
    const schemas = [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: seoData.title,
        description: seoData.description,
        provider: { "@id": `${SITE_URL}/#professionalservice` },
        areaServed: ["España", "Alemania", "Francia"],
        serviceType: "Translation Service",
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity:
          serviceContent.faqs?.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })) || [],
      },
    ];

    return {
      title: seoData.title,
      description: seoData.description,
      canonical: `${SITE_URL}/${currentLang}/${serviceSlug}`,
      lang: currentLang,
      alternateLanguages,
      openGraph: {
        title: seoData.title,
        description: seoData.description,
        url: `${SITE_URL}/${currentLang}/${serviceSlug}`,
        type: "website",
        locale: locale.locale,
        siteName: locale.name,
      },
      twitter: {
        card: "summary_large_image",
        title: seoData.title,
        description: seoData.description,
      },
      jsonLd: schemas,
    };
  }, [serviceConfig, currentLang, serviceSlug, serviceContent]);

  // Use document head for SEO
  useDocumentHead(seoConfig);

  // Redirect if service not found
  if (!serviceConfig) {
    return <NotFoundPage />;
  }

  // Section titles by language
  const sectionTitles = {
    es: { documents: "Documentos que traducimos", faq: "Preguntas frecuentes" },
    de: {
      documents: "Dokumente, die wir übersetzen",
      faq: "Häufig gestellte Fragen",
    },
    fr: {
      documents: "Documents que nous traduisons",
      faq: "Questions fréquentes",
    },
    en: {
      documents: "Documents we translate",
      faq: "Frequently asked questions",
    },
  };

  return (
    <main className="interior-page service-detail-page">
      <Breadcrumbs
        items={[
          { label: t("home"), href: `/${currentLang}` },
          {
            label: t("services"),
            href: `/${currentLang}/${currentLang === "es" ? "servicios" : currentLang === "de" ? "dienstleistungen" : "services"}`,
          },
          { label: serviceContent.shortTitle },
        ]}
      />
      <PageHero
        eyebrow={serviceContent.badge}
        title={serviceContent.title}
        description={serviceContent.description}
        aside={<QuotePanel />}
      >
        <div className="service-hero-notes">
          <span>MAEC · OLG Köln</span>
          <span>{t("homePage.statConfidential")}</span>
        </div>
      </PageHero>
      <section className="editorial-container editorial-section">
        <p className="eyebrow">01 / {t("services")}</p>
        <h2>{serviceContent.featuresTitle || t("homePage.servicesTitle")}</h2>
        <div className="feature-grid">
          {serviceContent.features.map((feature, i) => (
            <article key={feature.title}>
              <span>0{i + 1}</span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>
      {serviceContent.documents && (
        <section className="documents-section">
          <div className="editorial-container split-section">
            <div>
              <p className="eyebrow">02 / {t("services")}</p>
              <h2>{sectionTitles[currentLang].documents}</h2>
            </div>
            <ul className="document-list">
              {serviceContent.documents.map((doc, i) => (
                <li key={doc}>
                  <span>0{i + 1}</span>
                  {doc}
                  <span aria-hidden="true">✓</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
      <section className="editorial-container editorial-section document-preparation">
        <div>
          <p className="eyebrow">{t("homePage.process.step1Title")}</p>
          <h2>{t("serviceBrief.title")}</h2>
        </div>
        <div>
          {t(`documentPreparation.${serviceConfig.routeKey}`, {
            returnObjects: true,
          }).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p>{t("serviceBrief.description")}</p>
          <LocalizedLink to="/tarifas" className="editorial-text-link">
            {t("serviceBrief.quoteLink")} <span aria-hidden="true">↗</span>
          </LocalizedLink>
        </div>
      </section>
      <TranslationProcess />
      <section className="credentials-section">
        <div className="editorial-container split-section">
          <div>
            <p className="eyebrow">MAEC · OLG KÖLN</p>
            <h2>{t("homePage.credentialsTitle")}</h2>
          </div>
          <Credentials />
        </div>
      </section>
      {serviceContent.faqs && (
        <section className="editorial-container faq-section detail-faq">
          <div>
            <p className="eyebrow">FAQ</p>
            <h2>{sectionTitles[currentLang].faq}</h2>
            <LocalizedLink className="editorial-text-link" to="/contacto">
              {t("contact")} ↗
            </LocalizedLink>
          </div>
          <div className="editorial-faq">
            {serviceContent.faqs.map((faq) => (
              <FaqItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </section>
      )}
      <div className="editorial-container">
        <OfficialResources
          service={serviceConfig.routeKey}
          lang={currentLang}
        />
      </div>
      <RelatedServices currentServiceKey={serviceEntry[0]} lang={currentLang} />
      <SiteCTA />
    </main>
  );
}

export default ServiceDetailPage;
