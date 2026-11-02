import { useTranslation } from "react-i18next";
import SEO from "../components/SEO";
import { PageHero, SiteCTA, Credentials } from "../components/Editorial";

export default function AboutPage() {
  const { t } = useTranslation();
  const sections = [
    {
      title: t("aboutPage.sections.experience"),
      content: t("aboutPage.paragraph1"),
    },
    {
      title: t("aboutPage.sections.capabilities"),
      content: t("aboutPage.paragraph2"),
    },
    { title: null, content: t("aboutPage.paragraph3") },
    {
      title: t("aboutPage.sections.commitment"),
      content: t("aboutPage.conclusion"),
    },
  ];
  return (
    <>
      <SEO page="about" />
      <main className="interior-page about-page">
        <PageHero
          eyebrow={t("aboutPage.subtitle")}
          title={t("aboutPage.title")}
          description={t("aboutPage.introduction")}
          aside={
            <figure className="about-portrait">
              <img
                src="/foto.jpg"
                alt={`María Ángeles Capas — ${t("common.swornTranslator")}`}
                width="450"
                height="450"
                fetchPriority="high"
              />
              <figcaption>
                <strong>María Ángeles Capas</strong>
                <span>Ourense · MAEC 11241 · OLG Köln</span>
              </figcaption>
            </figure>
          }
        />
        <div className="editorial-container about-stats">
          {["experience", "documents", "accreditations"].map((key) => (
            <div key={key}>
              <strong>{t(`aboutPage.stats.${key}`)}</strong>
              <span>{t(`aboutPage.stats.${key}Label`)}</span>
            </div>
          ))}
        </div>
        <section className="editorial-section editorial-container biography-grid">
          <aside className="biography-aside">
            <p className="eyebrow">
              {t("aboutPage.credentials.certification")}
            </p>
            <h2>{t("aboutPage.credentials.spainAndGermany")}</h2>
            <p className="section-description">
              {t("aboutPage.verifyCredentials")}
            </p>
            <Credentials />
            <a href="https://es.linkedin.com/in/mariacapastraductora" className="editorial-text-link" target="_blank" rel="noopener noreferrer">LinkedIn · María Ángeles Capas <span aria-hidden="true">↗</span></a>
          </aside>
          <div className="biography-content">
            {sections.map((section, i) => (
              <article key={i}>
                {section.title && (
                  <>
                    <span className="eyebrow">0{i + 1}</span>
                    <h2>{section.title}</h2>
                  </>
                )}
                <p>{section.content}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="values-section">
          <div className="editorial-container">
            <p className="eyebrow">María Ángeles Capas</p>
            <h2>{t("aboutPage.values.title")}</h2>
            <div className="values-grid">
              {t("aboutPage.values.items", { returnObjects: true }).map(
                (item, i) => (
                  <article key={item.title}>
                    <span>0{i + 1}</span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </article>
                ),
              )}
            </div>
          </div>
        </section>
        <SiteCTA />
      </main>
    </>
  );
}
