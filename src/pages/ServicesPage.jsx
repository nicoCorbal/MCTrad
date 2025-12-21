import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function ServicesPage() {
  const { t } = useTranslation();

  const languagePairs = [
    { from: t('homePage.german'), to: t('homePage.spanish'), bidirectional: true },
    { from: t('homePage.french'), to: t('homePage.german'), bidirectional: false },
    { from: t('homePage.english'), to: t('homePage.german'), bidirectional: false },
    { from: t('homePage.english'), to: t('homePage.spanish'), bidirectional: false },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl">
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
              {t('servicesPage.title')}
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('servicesPage.generalTranslation.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Sworn Translation */}
      <section className="py-20 md:py-28 bg-blue-600">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white mb-4">
              {t('servicesPage.swornTranslation.heading')}
            </h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              {t('servicesPage.swornTranslation.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-white rounded-xl">
              <div className="flex items-start gap-4">
                <span className="text-4xl">🇪🇸</span>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-gray-900 mb-2">
                    {t('servicesPage.swornTranslation.spain.title')}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {t('servicesPage.swornTranslation.spain.description')}
                  </p>
                  <a
                    href="https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/TraductoresInt%C3%A9rpretes.aspx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    {t('servicesPage.swornTranslation.spain.linkText')} →
                  </a>
                </div>
              </div>
            </div>

            <div className="p-8 bg-white rounded-xl">
              <div className="flex items-start gap-4">
                <span className="text-4xl">🇩🇪</span>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-gray-900 mb-2">
                    {t('servicesPage.swornTranslation.germany.title')}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {t('servicesPage.swornTranslation.germany.description')}
                  </p>
                  <a
                    href="https://www.justiz-dolmetscher.de/Recherche/de/Suchen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    {t('servicesPage.swornTranslation.germany.linkText')} →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Language Pairs */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              {t('homePage.languagePairsTitle')}
            </h2>
          </div>

          <div className="max-w-2xl mx-auto space-y-4">
            {languagePairs.map((pair, i) => (
              <div key={i} className="p-6 bg-white border border-gray-200 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="font-medium text-gray-900">{pair.from}</span>
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    {pair.bidirectional ? (
                      <path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"/>
                    ) : (
                      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                    )}
                  </svg>
                  <span className="font-medium text-gray-900">{pair.to}</span>
                </div>
                <span className="text-xs text-gray-500 uppercase tracking-wide">
                  {pair.bidirectional ? t('homePage.bidirectional') : t('homePage.unidirectional')}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-blue-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white mb-4">
            {t('homePage.ctaTitle')}
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            {t('homePage.ctaSubtitle')}
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
          >
            {t('homePage.ctaContact')}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

    </div>
  );
}

export default ServicesPage;
