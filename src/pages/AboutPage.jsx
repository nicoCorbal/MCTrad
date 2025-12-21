import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function AboutPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl">
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
              {t('aboutPage.title')}
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('aboutPage.introduction')}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                <div className="p-8 bg-gray-50 rounded-xl text-center">
                  <div className="w-20 h-20 bg-blue-600 text-white font-serif text-2xl rounded-full flex items-center justify-center mx-auto mb-4">
                    MA
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-gray-900">
                    María Ángeles Capas
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {t('common.swornTranslator')}
                  </p>
                </div>

                <div className="p-6 border border-gray-200 rounded-xl">
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">
                    {t('aboutPage.credentials.certification')}
                  </p>
                  <p className="font-medium text-gray-900">
                    {t('aboutPage.credentials.spainAndGermany')}
                  </p>
                </div>

                <div className="p-6 border border-gray-200 rounded-xl">
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">
                    {t('aboutPage.credentials.specialization')}
                  </p>
                  <p className="font-medium text-gray-900">
                    {t('aboutPage.credentials.legalAndTechnical')}
                  </p>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-4">
                  {t('aboutPage.sections.experience')}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {t('aboutPage.paragraph1')}
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-4">
                  {t('aboutPage.sections.capabilities')}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {t('aboutPage.paragraph2')}
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-4">
                  {t('aboutPage.sections.commitment')}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {t('aboutPage.conclusion')}
                </p>
              </div>
            </div>

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
            {t('common.contactNow')}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

    </div>
  );
}

export default AboutPage;
