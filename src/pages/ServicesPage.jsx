import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import SEO from "../components/SEO";
import InternalLinks from "../components/InternalLinks";
import {
  PageHero,
  SiteCTA,
  Credentials,
  TranslationProcess,
} from "../components/Editorial";

export default function ServicesPage() {
  const { t } = useTranslation();
  const { lang = "es" } = useParams();
  const pairs = [
    ["german", "spanish", true],
    ["french", "german", false],
    ["english", "german", false],
    ["english", "spanish", false],
  ];
  return (
    <>
      <SEO page="services" />
      <main className="interior-page services-page">
        <PageHero
          eyebrow={t("services")}
          title={t("servicesPage.title")}
          description={t("servicesPage.generalTranslation.description")}
        />
        <InternalLinks lang={lang} variant="grid" />
        <section className="editorial-section editorial-container split-section">
          <div>
            <p className="eyebrow">MAEC · OLG KÖLN</p>
            <h2>{t("servicesPage.swornTranslation.heading")}</h2>
            <p className="section-description">
              {t("servicesPage.swornTranslation.description")}
            </p>
          </div>
          <Credentials />
        </section>
        <section className="language-section">
          <div className="editorial-container split-section">
            <div>
              <p className="eyebrow">ES · DE · FR · EN</p>
              <h2>{t("homePage.languagePairsTitle")}</h2>
            </div>
            <div className="language-pair-list">
              {pairs.map(([from, to, both]) => (
                <div className="language-pair" key={from + to}>
                  <span>{t(`homePage.${from}`)}</span>
                  <span aria-hidden="true">{both ? "↔" : "→"}</span>
                  <span>{t(`homePage.${to}`)}</span>
                  <small>
                    {t(`homePage.${both ? "bidirectional" : "unidirectional"}`)}
                  </small>
                </div>
              ))}
            </div>
          </div>
        </section>
        <TranslationProcess />
        <SiteCTA />
      </main>
    </>
  );
}
