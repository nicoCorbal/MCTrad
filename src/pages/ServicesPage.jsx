import React from 'react';
import { useTranslation } from 'react-i18next';

function ServicesPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-stone-50">

      {/* Hero Section */}
      <section className="bg-blue-600">
        <div className="container mx-auto px-6 lg:px-12 pt-28 pb-12 md:pt-32 md:pb-16">
          <div className="flex items-center gap-12 lg:gap-16">
            <div className="flex-1">
              <h1 className="font-serif font-light text-5xl md:text-6xl lg:text-7xl text-white leading-tight">
                {t('servicesPage.title')}
              </h1>
              <p className="text-blue-200 text-sm tracking-widest uppercase mt-6">
                Servicios Certificados • España & Alemania
              </p>
            </div>

            {/* Hero Illustration */}
            <div className="hidden lg:flex flex-shrink-0">
              <img
                src="/ilu2.svg"
                alt="Services illustration"
                className="w-72 xl:w-80 h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sworn Translation - Main Service */}
      <section className="container mx-auto px-6 lg:px-12 py-16 md:py-32">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-sm tracking-widest uppercase text-blue-500 mb-10 md:mb-16">
            {t('common.badges.mainService')}
          </h3>

          <h2 className="font-serif font-light text-3xl md:text-5xl lg:text-6xl text-zinc-800 mb-6 md:mb-8">
            {t('servicesPage.swornTranslation.heading')}
          </h2>

          <p className="text-zinc-500 text-base md:text-xl max-w-3xl leading-relaxed mb-12 md:mb-20">
            {t('servicesPage.swornTranslation.description')}
          </p>

          {/* Certification Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">

            {/* Spain */}
            <div className="bg-white border border-stone-200 p-6 md:p-10 hover:border-blue-200 transition-colors">
              <div className="text-4xl md:text-6xl mb-4 md:mb-6">🇪🇸</div>
              <h4 className="font-serif text-xl md:text-2xl text-zinc-800 mb-3 md:mb-4">
                {t('servicesPage.swornTranslation.spain.title')}
              </h4>
              <p className="text-sm md:text-base text-zinc-500 leading-relaxed mb-4 md:mb-6">
                {t('servicesPage.swornTranslation.spain.description')}
              </p>
              <a
                href="https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/TraductoresInt%C3%A9rpretes.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-blue-500 border-b border-blue-500 hover:text-blue-600 hover:border-blue-600 transition-colors font-medium"
              >
                <span>{t('servicesPage.swornTranslation.spain.linkText')}</span>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Germany */}
            <div className="bg-white border border-stone-200 p-6 md:p-10 hover:border-blue-200 transition-colors">
              <div className="text-4xl md:text-6xl mb-4 md:mb-6">🇩🇪</div>
              <h4 className="font-serif text-xl md:text-2xl text-zinc-800 mb-3 md:mb-4">
                {t('servicesPage.swornTranslation.germany.title')}
              </h4>
              <p className="text-sm md:text-base text-zinc-500 leading-relaxed mb-4 md:mb-6">
                {t('servicesPage.swornTranslation.germany.description')}
              </p>
              <a
                href="https://www.justiz-dolmetscher.de/Recherche/de/Suchen"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-blue-500 border-b border-blue-500 hover:text-blue-600 hover:border-blue-600 transition-colors font-medium"
              >
                <span>{t('servicesPage.swornTranslation.germany.linkText')}</span>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* General Translation */}
      <section className="border-t border-zinc-200 bg-white">
        <div className="container mx-auto px-6 lg:px-12 py-16 md:py-32">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-sm tracking-widest uppercase text-blue-500 mb-10 md:mb-16">
              {t('common.badges.additionalServices')}
            </h3>

            <h2 className="font-serif font-light text-3xl md:text-5xl text-zinc-800 mb-6 md:mb-8">
              {t('servicesPage.generalTranslation.heading')}
            </h2>

            <p className="text-zinc-500 text-base md:text-xl max-w-3xl leading-relaxed mb-12 md:mb-20">
              {t('servicesPage.generalTranslation.description')}
            </p>

            {/* Language Pairs List */}
            <div className="space-y-0 border-t border-zinc-200">

              {/* Alemán - Español */}
              <div className="border-b border-zinc-200 py-5 md:py-8 group hover:bg-stone-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 md:gap-6">
                    <span className="font-serif text-lg md:text-2xl text-zinc-800">
                      {t('servicesPage.languagePairs.germanSpanish').split(/\s*[⟷→↔>]\s*/)[0]}
                    </span>
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"/>
                    </svg>
                    <span className="font-serif text-lg md:text-2xl text-zinc-800">
                      {t('servicesPage.languagePairs.germanSpanish').split(/\s*[⟷→↔>]\s*/)[1]}
                    </span>
                  </div>
                  <span className="text-xs md:text-sm text-zinc-500 hidden sm:block">Bidireccional</span>
                </div>
              </div>

              {/* Francés - Alemán */}
              <div className="border-b border-zinc-200 py-5 md:py-8 group hover:bg-stone-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 md:gap-6">
                    <span className="font-serif text-lg md:text-2xl text-zinc-800">
                      {t('servicesPage.languagePairs.frenchGerman').split(/\s*[⟷→↔>]\s*/)[0]}
                    </span>
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                    </svg>
                    <span className="font-serif text-lg md:text-2xl text-zinc-800">
                      {t('servicesPage.languagePairs.frenchGerman').split(/\s*[⟷→↔>]\s*/)[1]}
                    </span>
                  </div>
                  <span className="text-xs md:text-sm text-zinc-500 hidden sm:block">Unidireccional</span>
                </div>
              </div>

              {/* Inglés - Alemán */}
              <div className="border-b border-zinc-200 py-5 md:py-8 group hover:bg-stone-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 md:gap-6">
                    <span className="font-serif text-lg md:text-2xl text-zinc-800">
                      {t('servicesPage.languagePairs.englishGerman').split(/\s*[⟷→↔>]\s*/)[0]}
                    </span>
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                    </svg>
                    <span className="font-serif text-lg md:text-2xl text-zinc-800">
                      {t('servicesPage.languagePairs.englishGerman').split(/\s*[⟷→↔>]\s*/)[1]}
                    </span>
                  </div>
                  <span className="text-xs md:text-sm text-zinc-500 hidden sm:block">Unidireccional</span>
                </div>
              </div>

              {/* Inglés - Español */}
              <div className="border-b border-zinc-200 py-5 md:py-8 group hover:bg-stone-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 md:gap-6">
                    <span className="font-serif text-lg md:text-2xl text-zinc-800">
                      {t('servicesPage.languagePairs.englishSpanish').split(/\s*[⟷→↔>]\s*/)[0]}
                    </span>
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                    </svg>
                    <span className="font-serif text-lg md:text-2xl text-zinc-800">
                      {t('servicesPage.languagePairs.englishSpanish').split(/\s*[⟷→↔>]\s*/)[1]}
                    </span>
                  </div>
                  <span className="text-xs md:text-sm text-zinc-500 hidden sm:block">Unidireccional</span>
                </div>
              </div>

              {/* Gallego - Alemán */}
              <div className="border-b border-zinc-200 py-5 md:py-8 group hover:bg-stone-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 md:gap-6">
                    <span className="font-serif text-lg md:text-2xl text-zinc-800">
                      {t('servicesPage.languagePairs.galicianGerman').split(/\s*[⟷→↔>]\s*/)[0]}
                    </span>
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"/>
                    </svg>
                    <span className="font-serif text-lg md:text-2xl text-zinc-800">
                      {t('servicesPage.languagePairs.galicianGerman').split(/\s*[⟷→↔>]\s*/)[1]}
                    </span>
                  </div>
                  <span className="text-xs md:text-sm text-zinc-500 hidden sm:block">Bidireccional</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default ServicesPage;
