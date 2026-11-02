import FaqItem from "../components/FaqItem";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { LocalizedLink } from "../components/LocalizedLink";
import SEO from "../components/SEO";
import InternalLinks from "../components/InternalLinks";

function HomePage() {
  const { t } = useTranslation();
  const { lang = "es" } = useParams();

  // Generate FAQ Schema for JSON-LD
  const faqSchema = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: t("homePage.faq.q1"),
          acceptedAnswer: { "@type": "Answer", text: t("homePage.faq.a1") },
        },
        {
          "@type": "Question",
          name: t("homePage.faq.q2"),
          acceptedAnswer: { "@type": "Answer", text: t("homePage.faq.a2") },
        },
        {
          "@type": "Question",
          name: t("homePage.faq.q3"),
          acceptedAnswer: { "@type": "Answer", text: t("homePage.faq.a3") },
        },
        {
          "@type": "Question",
          name: t("homePage.faq.q4"),
          acceptedAnswer: { "@type": "Answer", text: t("homePage.faq.a4") },
        },
        {
          "@type": "Question",
          name: t("homePage.faq.q5"),
          acceptedAnswer: { "@type": "Answer", text: t("homePage.faq.a5") },
        },
      ],
    }),
    [t],
  );

  const services = [
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      to: "/traduccion-documentos-notariales",
      title: t("homePage.service1Title"),
      description: t("homePage.service1Desc"),
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
      to: "/traduccion-titulo-universitario",
      title: t("homePage.service2Title"),
      description: t("homePage.service2Desc"),
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      to: "/traduccion-contratos",
      title: t("homePage.service3Title"),
      description: t("homePage.service3Desc"),
    },
  ];

  const process = [
    {
      step: "01",
      title: t("homePage.process.step1Title"),
      desc: t("homePage.process.step1Desc"),
    },
    {
      step: "02",
      title: t("homePage.process.step2Title"),
      desc: t("homePage.process.step2Desc"),
    },
    {
      step: "03",
      title: t("homePage.process.step3Title"),
      desc: t("homePage.process.step3Desc"),
    },
    {
      step: "04",
      title: t("homePage.process.step4Title"),
      desc: t("homePage.process.step4Desc"),
    },
  ];

  const faqs = [
    { q: t("homePage.faq.q1"), a: t("homePage.faq.a1") },
    { q: t("homePage.faq.q2"), a: t("homePage.faq.a2") },
    { q: t("homePage.faq.q3"), a: t("homePage.faq.a3") },
    { q: t("homePage.faq.q4"), a: t("homePage.faq.a4") },
    { q: t("homePage.faq.q5"), a: t("homePage.faq.a5") },
  ];

  return (
    <>
      <SEO page="home" jsonLd={faqSchema} />
      <main className="home-editorial">
        <section className="editorial-hero">
          <div className="editorial-container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">
                <span /> MAEC · OLG KÖLN
              </p>
              <h1>
                {t("homePage.heroTitle1")}
                <br />
                <em>{t("homePage.heroTitle2")}</em>
              </h1>
              <p className="hero-intro">{t("homePage.heroSubtitle")}</p>
              <p className="hero-description">
                {t("homePage.heroDescription")}
              </p>
              <div className="hero-actions">
                <LocalizedLink to="/contacto" className="editorial-button">
                  {t("homePage.requestQuote")}
                </LocalizedLink>
                <LocalizedLink to="/servicios" className="editorial-text-link">
                  {t("services")} <span aria-hidden="true">↗</span>
                </LocalizedLink>
              </div>
              <div className="hero-assurance">
                <span aria-hidden="true">✓</span> {t("homePage.trustBadge")}
              </div>
            </div>
            <div className="hero-portrait">
              <img
                src="/foto.jpg"
                alt="María Ángeles Capas"
                width="450"
                height="450"
                fetchPriority="high"
              />
              <div className="portrait-caption">
                <div>
                  <strong>María Ángeles Capas</strong>
                  <span>{t("common.swornTranslator")}</span>
                </div>
              </div>
              <div className="portrait-credential">
                <span aria-hidden="true">✓</span>
                <div>
                  <strong>MAEC & OLG Köln</strong>
                  <span>{t("homePage.officialBadge")}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="trust-strip editorial-container">
          <div>
            <strong>
              30<span>+</span>
            </strong>
            <span>{t("homePage.statExperience")}</span>
          </div>
          <div>
            <strong>
              ES <span>↔</span> DE
            </strong>
            <span>{t("homePage.heroSubtitle")}</span>
          </div>
          <div>
            <strong>24–48 h</strong>
            <span>{t("homePage.statDelivery")}</span>
          </div>
        </div>

        <section className="editorial-section editorial-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">01 / {t("services")}</p>
              <h2>{t("homePage.servicesTitle")}</h2>
            </div>
            <LocalizedLink to="/servicios" className="editorial-text-link">
              {t("services")} <span aria-hidden="true">↗</span>
            </LocalizedLink>
          </div>
          <div className="specialty-grid">
            {services.map((service, i) => (
              <LocalizedLink
                key={service.to}
                to={service.to}
                className="specialty-card"
              >
                <div className="specialty-top">
                  <span>{service.icon}</span>
                  <span className="card-number">0{i + 1}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span className="card-link">
                  {t("homePage.ctaLearnMore")} <span aria-hidden="true">↗</span>
                </span>
              </LocalizedLink>
            ))}
          </div>
        </section>

        <section className="credentials-section">
          <div className="editorial-container credentials-grid">
            <div>
              <p className="eyebrow">02 / MAEC · OLG KÖLN</p>
              <h2>{t("homePage.credentialsTitle")}</h2>
              <p className="section-description">
                {t("homePage.heroDescription")}
              </p>
              <LocalizedLink to="/sobre-mi" className="editorial-text-link">
                {t("about")} <span aria-hidden="true">↗</span>
              </LocalizedLink>
            </div>
            <div className="credential-list">
              {[
                {
                  title: t("homePage.spainTitle"),
                  desc: t("homePage.spainDesc"),
                  image: "/selloespana.webp",
                  link: "https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Oficina-de-Interpretacion-de-Lenguas/Paginas/Traduccion-e-interpretacion-jurada.aspx",
                },
                {
                  title: t("homePage.germanyTitle"),
                  desc: t("homePage.germanyDesc"),
                  image: "/selloalemania.webp",
                  link: "https://www.justiz-dolmetscher.de/Recherche/de/Suchen",
                },
              ].map((cred) => (
                <article className="credential-row" key={cred.title}>
                  <img
                    src={cred.image}
                    alt=""
                    width="80"
                    height="80"
                    loading="lazy"
                  />
                  <div>
                    <h3>{cred.title}</h3>
                    <p>{cred.desc}</p>
                    <a
                      href={cred.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="editorial-text-link"
                    >
                      {t("homePage.verifyCredential")}{" "}
                      <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="editorial-section editorial-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">03 / {t("homePage.process.title")}</p>
              <h2>{t("homePage.process.subtitle")}</h2>
            </div>
          </div>
          <div className="process-grid">
            {process.map((item) => (
              <article className="process-step" key={item.step}>
                <span>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="faq-section editorial-container">
          <div>
            <p className="eyebrow">04 / FAQ</p>
            <h2>{t("homePage.faq.title")}</h2>
            <LocalizedLink to="/contacto" className="editorial-text-link">
              {t("contact")} <span aria-hidden="true">↗</span>
            </LocalizedLink>
          </div>
          <div className="editorial-faq">
            {faqs.map((faq) => (
              <FaqItem key={faq.q} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </section>

        <div className="editorial-internal-links">
          <InternalLinks lang={lang} variant="grid" />
        </div>
        <section className="editorial-cta">
          <div className="editorial-container">
            <p className="eyebrow">ESPAÑA · DEUTSCHLAND</p>
            <h2>{t("homePage.ctaTitle")}</h2>
            <p>{t("homePage.ctaSubtitle")}</p>
            <LocalizedLink to="/contacto" className="editorial-button">
              {t("homePage.ctaContact")}
            </LocalizedLink>
            <a href="mailto:capaslopez@gmail.com">capaslopez@gmail.com ↗</a>
          </div>
        </section>
      </main>
    </>
  );
}

export default HomePage;
