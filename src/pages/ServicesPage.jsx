import React from 'react';
import { useTranslation } from 'react-i18next';

function ServicesPage() {
  const { t } = useTranslation();

  const languagePairs = [
    { key: 'germanSpanish', languages: 'Alemán ↔ Español' },
    { key: 'frenchGerman', languages: 'Francés → Alemán' },
    { key: 'englishGerman', languages: 'Inglés → Alemán' },
    { key: 'englishSpanish', languages: 'Inglés → Español' },
    { key: 'galicianGerman', languages: 'Gallego ↔ Alemán' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header - Enhanced */}
      <section className="relative bg-gradient-to-br from-navy-50 via-white to-gold-50/30 py-10 sm:py-12 md:py-16 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-gold-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-navy-500/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 bg-navy-500/10 border border-navy-500/20 mb-4 sm:mb-6 animate-fadeIn">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
              </svg>
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] text-navy-600">
                {t('common.badges.professionalServices')}
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-navy-500 mb-4 sm:mb-6 leading-tight animate-fadeIn animation-delay-200 px-4">
              {t('servicesPage.title')}
            </h1>

            {/* Decorative divider */}
            <div className="flex items-center justify-center my-8 animate-fadeIn animation-delay-400">
              <div className="flex-1 border-t-2 border-gray-300 max-w-xs"></div>
              <div className="w-3 h-3 bg-gold-400 mx-6 rotate-45"></div>
              <div className="flex-1 border-t-2 border-gray-300 max-w-xs"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Sworn Translation Services - MAIN SERVICE */}
      <section className="py-10 sm:py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 animate-fadeIn">
              <div className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 bg-gold-400/10 border border-gold-400/30 mb-3 sm:mb-4">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gold-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.15em] text-gold-600">{t('common.badges.mainService')}</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-navy-500 mb-3 sm:mb-4 px-4">
                {t('servicesPage.swornTranslation.heading')}
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed px-4">
                {t('servicesPage.swornTranslation.description')}
              </p>
            </div>

            {/* Certification Cards */}
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              {/* Spain */}
              <div className="group relative bg-white border-2 border-gray-200 p-6 sm:p-8 hover:border-gold-400 transition-all duration-300 hover-lift animate-slideUp">
                {/* Accent bar */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-navy-500 to-gold-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 pb-4 sm:pb-6 border-b-2 border-gray-200 group-hover:border-gold-400/30 transition-colors">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-navy-50 flex items-center justify-center group-hover:bg-gold-400/10 transition-colors group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl sm:text-4xl">🇪🇸</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-navy-500 group-hover:text-navy-600 transition-colors">
                      {t('servicesPage.swornTranslation.spain.title')}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6 text-base">
                  {t('servicesPage.swornTranslation.spain.description')}
                </p>

                <a
                  href="https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/TraductoresInt%C3%A9rpretes.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-gold-600 hover:text-gold-700 font-semibold text-sm uppercase tracking-[0.1em] group/link"
                >
                  <span>{t('servicesPage.swornTranslation.spain.linkText')}</span>
                  <svg className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              {/* Germany */}
              <div className="group relative bg-white border-2 border-gray-200 p-8 hover:border-gold-400 transition-all duration-300 hover-lift animate-slideUp animation-delay-200">
                {/* Accent bar */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-navy-500 to-gold-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

                <div className="flex items-center gap-4 mb-6 pb-6 border-b-2 border-gray-200 group-hover:border-gold-400/30 transition-colors">
                  <div className="w-20 h-20 bg-navy-50 flex items-center justify-center group-hover:bg-gold-400/10 transition-colors group-hover:scale-110 transition-transform duration-300">
                    <span className="text-4xl">🇩🇪</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-navy-500 group-hover:text-navy-600 transition-colors">
                      {t('servicesPage.swornTranslation.germany.title')}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6 text-base">
                  {t('servicesPage.swornTranslation.germany.description')}
                </p>

                <a
                  href="https://www.justiz-dolmetscher.de/Recherche/de/Suchen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-gold-600 hover:text-gold-700 font-semibold text-sm uppercase tracking-[0.1em] group/link"
                >
                  <span>{t('servicesPage.swornTranslation.germany.linkText')}</span>
                  <svg className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* General Translation Services */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-10 animate-fadeIn">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-navy-500/10 border border-navy-500/20 mb-4">
                <svg className="w-5 h-5 text-navy-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895L15.383 16h-4.764l-.724 1.447a1 1 0 11-1.788-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0113 8zm-1.382 6h2.764L13 11.236 11.618 14z"/>
                </svg>
                <span className="text-sm font-semibold uppercase tracking-[0.15em] text-navy-600">
                  {t('common.badges.additionalServices')}
                </span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-navy-500 mb-4">
                {t('servicesPage.generalTranslation.heading')}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t('servicesPage.generalTranslation.description')}
              </p>
            </div>

            {/* Language Pairs Card */}
            <div className="bg-white border-2 border-gray-200 p-8 md:p-12 hover:border-gold-400/50 transition-all duration-300 animate-slideUp animation-delay-200">
              <div className="flex items-center gap-3 mb-8 pb-6 border-b-2 border-gray-200">
                <div className="w-12 h-12 bg-gold-400/10 flex items-center justify-center">
                  <svg className="w-7 h-7 text-gold-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="font-bold uppercase tracking-[0.1em] text-lg text-navy-500">
                  Combinaciones de idiomas disponibles
                </h3>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {languagePairs.map((pair, index) => {
                  // Determinar si es bidireccional o unidireccional
                  const isBidirectional = pair.key === 'germanSpanish' || pair.key === 'galicianGerman';

                  // Obtener el texto traducido y separar los idiomas
                  const pairText = t(`servicesPage.languagePairs.${pair.key}`);
                  const languages = pairText.split(/\s*[⟷→↔>]\s*/);

                  return (
                    <div
                      key={pair.key}
                      className={`group flex items-center justify-center gap-3 py-4 px-5 border-l-4 border-gold-400 bg-navy-50 hover:bg-gold-400/10 hover:border-gold-500 transition-all duration-300 animate-fadeIn`}
                      style={{ animationDelay: `${index * 100 + 400}ms` }}
                    >
                      <span className="text-navy-600 font-semibold group-hover:text-navy-700 transition-colors">
                        {languages[0]}
                      </span>

                      {isBidirectional ? (
                        // Icono bidireccional (doble flecha) más bonito
                        <svg className="w-7 h-7 text-gold-500 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"/>
                        </svg>
                      ) : (
                        // Icono unidireccional (flecha simple) más bonito
                        <svg className="w-7 h-7 text-gold-500 flex-shrink-0 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                        </svg>
                      )}

                      <span className="text-navy-600 font-semibold group-hover:text-navy-700 transition-colors">
                        {languages[1]}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServicesPage;
