import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function HomePage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-stone-50">

      {/* Hero Section */}
      <section className="container mx-auto px-6 lg:px-12 pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-16">
          <div className="max-w-5xl">
            <h1 className="font-serif font-light text-5xl md:text-7xl lg:text-8xl text-zinc-800 mb-4 leading-[0.95] animate-fade-in">
              {t('homePage.heroTitle1')}
              <br />
              <span className="text-blue-500">{t('homePage.heroTitle2')}</span>
            </h1>

            <h2 className="font-serif font-light text-3xl md:text-4xl lg:text-5xl text-zinc-600 mb-8 animate-fade-in animation-delay-100">
              {t('homePage.heroSubtitle')}
            </h2>

            <p className="text-zinc-500 text-base md:text-lg mt-8 max-w-xl leading-relaxed animate-fade-in animation-delay-200 font-medium">
              {t('homePage.heroDescription')}
            </p>

            <Link
              to="/contacto"
              className="inline-block mt-10 text-blue-500 border-b-2 border-blue-500 pb-1 hover:text-blue-600 hover:border-blue-600 transition-colors font-medium animate-fade-in animation-delay-300"
            >
              {t('homePage.requestQuote')} →
            </Link>
          </div>

          {/* Hero Illustration */}
          <div className="hidden lg:flex flex-shrink-0 items-start justify-start animate-fade-in animation-delay-200 -ml-16">
            <img
              src="/ilu.svg"
              alt="Translation illustration"
              className="w-96 xl:w-[28rem] h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Trust Badge */}
      <section className="border-t border-b border-zinc-200 bg-blue-600/5">
        <div className="container mx-auto px-6 lg:px-12 py-8">
          <p className="text-center text-sm tracking-widest uppercase text-blue-500/70 font-semibold">
            {t('homePage.trustBadge')}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-6 lg:px-12 py-16 md:py-32">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-sm tracking-widest uppercase text-blue-500 mb-10 md:mb-16 font-semibold">{t('homePage.servicesTitle')}</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">

            {/* Service 1 */}
            <div className="group bg-white p-6 md:p-8 border border-zinc-200 hover:border-blue-500 hover:shadow-lg transition-all duration-300">
              <div className="mb-5">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 md:w-7 md:h-7 text-white stroke-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
              </div>
              <h4 className="font-serif text-xl md:text-2xl text-zinc-800 mb-3 group-hover:text-blue-500 transition-colors">
                {t('homePage.service1Title')}
              </h4>
              <p className="text-sm md:text-base text-zinc-500 leading-relaxed font-medium">
                {t('homePage.service1Desc')}
              </p>
            </div>

            {/* Service 2 */}
            <div className="group bg-white p-6 md:p-8 border border-zinc-200 hover:border-blue-500 hover:shadow-lg transition-all duration-300">
              <div className="mb-5">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 md:w-7 md:h-7 text-white stroke-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
              </div>
              <h4 className="font-serif text-xl md:text-2xl text-zinc-800 mb-3 group-hover:text-blue-500 transition-colors">
                {t('homePage.service2Title')}
              </h4>
              <p className="text-sm md:text-base text-zinc-500 leading-relaxed font-medium">
                {t('homePage.service2Desc')}
              </p>
            </div>

            {/* Service 3 */}
            <div className="group bg-white p-6 md:p-8 border border-zinc-200 hover:border-blue-500 hover:shadow-lg transition-all duration-300">
              <div className="mb-5">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 md:w-7 md:h-7 text-white stroke-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
              <h4 className="font-serif text-xl md:text-2xl text-zinc-800 mb-3 group-hover:text-blue-500 transition-colors">
                {t('homePage.service3Title')}
              </h4>
              <p className="text-sm md:text-base text-zinc-500 leading-relaxed font-medium">
                {t('homePage.service3Desc')}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Language Pairs */}
      <section className="border-t border-zinc-200 bg-blue-600">
        <div className="container mx-auto px-6 lg:px-12 py-16 md:py-32">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-sm tracking-widest uppercase text-blue-200 mb-10 md:mb-16 font-semibold">{t('homePage.languagePairsTitle')}</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {/* Español - Alemán */}
              <div className="bg-white/10 backdrop-blur-sm p-5 md:p-6 group hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 md:gap-4">
                    <span className="font-serif text-lg md:text-xl text-white">{t('homePage.spanish')}</span>
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-blue-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"/>
                    </svg>
                    <span className="font-serif text-lg md:text-xl text-white">{t('homePage.german')}</span>
                  </div>
                  <span className="text-xs md:text-sm text-blue-300 font-medium hidden sm:block">{t('homePage.bidirectional')}</span>
                </div>
              </div>

              {/* Francés - Alemán */}
              <div className="bg-white/10 backdrop-blur-sm p-5 md:p-6 group hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 md:gap-4">
                    <span className="font-serif text-lg md:text-xl text-white">{t('homePage.french')}</span>
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-blue-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                    </svg>
                    <span className="font-serif text-lg md:text-xl text-white">{t('homePage.german')}</span>
                  </div>
                  <span className="text-xs md:text-sm text-blue-300/70 hidden sm:block">{t('homePage.unidirectional')}</span>
                </div>
              </div>

              {/* Inglés - Alemán */}
              <div className="bg-white/10 backdrop-blur-sm p-5 md:p-6 group hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 md:gap-4">
                    <span className="font-serif text-lg md:text-xl text-white">{t('homePage.english')}</span>
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-blue-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                    </svg>
                    <span className="font-serif text-lg md:text-xl text-white">{t('homePage.german')}</span>
                  </div>
                  <span className="text-xs md:text-sm text-blue-300/70 hidden sm:block">{t('homePage.unidirectional')}</span>
                </div>
              </div>

              {/* Inglés - Español */}
              <div className="bg-white/10 backdrop-blur-sm p-5 md:p-6 group hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 md:gap-4">
                    <span className="font-serif text-lg md:text-xl text-white">{t('homePage.english')}</span>
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-blue-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                    </svg>
                    <span className="font-serif text-lg md:text-xl text-white">{t('homePage.spanish')}</span>
                  </div>
                  <span className="text-xs md:text-sm text-blue-300/70 hidden sm:block">{t('homePage.unidirectional')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-stone-50">
        <div className="container mx-auto px-6 lg:px-12 py-16 md:py-32">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-sm tracking-widest uppercase text-blue-500 mb-10 md:mb-16 font-semibold">{t('homePage.credentialsTitle')}</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">

              {/* Spain */}
              <div className="bg-white border-l-4 border-blue-500 p-6 md:p-10 hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl md:text-6xl mb-4 md:mb-6">🇪🇸</div>
                <h4 className="font-serif text-xl md:text-2xl text-zinc-800 mb-3 md:mb-4">{t('homePage.spainTitle')}</h4>
                <p className="text-sm md:text-base text-zinc-500 leading-relaxed mb-4 md:mb-6 font-medium">
                  {t('homePage.spainDesc')}
                </p>
                <a
                  href="https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/TraductoresInt%C3%A9rpretes.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-blue-500 border-b border-blue-500 hover:text-blue-600 hover:border-blue-600 transition-colors font-medium"
                >
                  <span>{t('homePage.verifyCredential')}</span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>

              {/* Germany */}
              <div className="bg-white border-l-4 border-blue-500 p-6 md:p-10 hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl md:text-6xl mb-4 md:mb-6">🇩🇪</div>
                <h4 className="font-serif text-xl md:text-2xl text-zinc-800 mb-3 md:mb-4">{t('homePage.germanyTitle')}</h4>
                <p className="text-sm md:text-base text-zinc-500 leading-relaxed mb-4 md:mb-6 font-medium">
                  {t('homePage.germanyDesc')}
                </p>
                <a
                  href="https://www.justiz-dolmetscher.de/Recherche/de/Suchen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-blue-500 border-b border-blue-500 hover:text-blue-600 hover:border-blue-600 transition-colors font-medium"
                >
                  <span>{t('homePage.verifyCredential')}</span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-6 lg:px-12 py-16 md:py-24 border-t border-zinc-200">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
            <div className="text-center group">
              <div className="text-3xl md:text-5xl font-serif font-light text-blue-500 mb-1 md:mb-2 group-hover:scale-110 transition-transform duration-300 inline-block">2</div>
              <div className="text-xs md:text-sm text-zinc-500 font-medium">{t('homePage.statCountries')}</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-5xl font-serif font-light text-blue-500 mb-1 md:mb-2 group-hover:scale-110 transition-transform duration-300 inline-block">5</div>
              <div className="text-xs md:text-sm text-zinc-500 font-medium">{t('homePage.statLanguages')}</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-5xl font-serif font-light text-blue-500 mb-1 md:mb-2 group-hover:scale-110 transition-transform duration-300 inline-block">24h</div>
              <div className="text-xs md:text-sm text-zinc-500 font-medium">{t('homePage.statDelivery')}</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-5xl font-serif font-light text-blue-500 mb-1 md:mb-2 group-hover:scale-110 transition-transform duration-300 inline-block">100%</div>
              <div className="text-xs md:text-sm text-zinc-500 font-medium">{t('homePage.statConfidential')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-blue-600">
        <div className="container mx-auto px-6 lg:px-12 py-16 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif font-light text-3xl md:text-4xl lg:text-5xl text-white mb-4 md:mb-6">
              {t('homePage.ctaTitle')}
            </h2>
            <p className="text-blue-200 mb-8 md:mb-12 text-base md:text-lg font-medium">
              {t('homePage.ctaSubtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
              <Link
                to="/contacto"
                className="text-white border-b-2 border-white pb-1 hover:text-blue-200 hover:border-blue-200 transition-colors font-medium"
              >
                {t('homePage.ctaContact')} →
              </Link>
              <span className="text-blue-600 hidden sm:block">|</span>
              <Link
                to="/sobre-mi"
                className="text-blue-300 border-b border-blue-400 pb-1 hover:text-white hover:border-white transition-colors"
              >
                {t('homePage.ctaLearnMore')}
              </Link>
            </div>

            {/* Contact Info */}
            <div className="mt-12 md:mt-20 pt-8 md:pt-12 border-t border-blue-600">
              <div className="text-sm md:text-base text-center">
                <p className="text-xs md:text-sm text-blue-400 mb-2 tracking-wider uppercase">Email</p>
                <a href="mailto:capaslopez@gmail.com" className="text-blue-200 hover:text-white transition-colors break-all">
                  capaslopez@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default HomePage;
