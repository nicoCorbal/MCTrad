import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function HomePage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Modern Two-Column Layout */}
      <section className="relative bg-gradient-to-br from-navy-50 via-white to-gold-50/30 py-12 sm:py-16 md:py-20 lg:py-28 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-gold-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-navy-500/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center max-w-7xl mx-auto">

            {/* Left Column - Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              {/* Subtitle badge */}
              <div className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 bg-navy-500/10 border border-navy-500/20 mb-4 sm:mb-6 animate-fadeIn">
                <div className="w-2 h-2 bg-gold-400 rounded-full animate-pulse"></div>
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] text-navy-600">
                  {t('common.swornTranslator')}
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-navy-500 mb-4 sm:mb-6 leading-[1.1] tracking-tight animate-fadeIn animation-delay-200">
                {t('hero.headline')}
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-6 sm:mb-8 leading-relaxed animate-fadeIn animation-delay-400">
                {t('hero.subheadline')}
              </p>

              {/* Key stats */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8 mb-8 sm:mb-10 animate-fadeIn animation-delay-500">
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-500 font-serif">2</div>
                  <div className="text-xs sm:text-sm text-gray-600 uppercase tracking-wide">Países</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-500 font-serif">4</div>
                  <div className="text-xs sm:text-sm text-gray-600 uppercase tracking-wide">Idiomas</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-500 font-serif">24h</div>
                  <div className="text-xs sm:text-sm text-gray-600 uppercase tracking-wide">Entrega</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4 animate-fadeIn animation-delay-600">
                <Link
                  to="/contacto"
                  className="group px-6 sm:px-8 py-3 sm:py-4 bg-navy-500 text-white font-semibold text-sm sm:text-base uppercase tracking-[0.1em] hover:bg-navy-600 transition-all duration-300 hover-lift relative overflow-hidden text-center"
                >
                  <span className="relative z-10">{t('hero.contactButton')}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-navy-600 to-navy-700 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </Link>
                <Link
                  to="/servicios"
                  className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-navy-500 text-navy-500 font-semibold text-sm sm:text-base uppercase tracking-[0.1em] hover:bg-navy-500 hover:text-white transition-all duration-300 hover-lift text-center"
                >
                  {t('hero.servicesButton')}
                </Link>
              </div>
            </div>

            {/* Right Column - Photo & Decoration */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-scaleIn">
              <div className="relative">
                {/* Decorative frame */}
                <div className="absolute -inset-3 sm:-inset-4 border-2 border-gold-400/30 -rotate-3 animate-float"></div>
                <div className="absolute -inset-3 sm:-inset-4 border-2 border-navy-500/20 rotate-3"></div>

                {/* Photo container */}
                <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gray-200 shadow-2xl hover-lift">
                  <img
                    src="/placeholder-profile.jpg"
                    alt="María Ángeles Capas - Traductora Jurada"
                    className="object-cover w-full h-full"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />

                  {/* Gold accent corner */}
                  <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gold-400 -z-10"></div>
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 bg-white px-4 py-2.5 sm:px-6 sm:py-4 shadow-xl border-l-4 border-gold-400 animate-slideInLeft animation-delay-800">
                  <div className="text-xs uppercase tracking-wider text-gray-600 mb-1">Certificada en</div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg sm:text-xl">🇪🇸</span>
                    <span className="text-lg sm:text-xl">🇩🇪</span>
                    <span className="font-bold text-sm sm:text-base text-navy-500">ES · DE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators - Modern Cards */}
      <section className="py-10 sm:py-12 md:py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 animate-fadeIn">
            <div className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 bg-gold-400/10 border border-gold-400/30 mb-3 sm:mb-4">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.15em] text-gold-600">{t('common.badges.whyChooseMe')}</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-navy-500 mb-3 sm:mb-4 px-4">
              Traducciones con garantía oficial
            </h2>
            <p className="text-base sm:text-lg text-gray-600 px-4">
              Profesionalidad, rapidez y validez legal en cada documento
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              {/* Card 1 */}
              <div className="group relative bg-white p-6 sm:p-8 border-2 border-gray-200 hover:border-gold-400 transition-all duration-300 hover-lift animate-slideUp">
                {/* Accent bar */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-navy-500 to-gold-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-navy-50 flex items-center justify-center text-navy-500 transition-all duration-300 group-hover:bg-gold-400 group-hover:text-white group-hover:rotate-6 group-hover:scale-110">
                    <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-navy-500 mb-3 sm:mb-4 group-hover:text-navy-600 transition-colors">
                  {t('hero.trustIndicators.officialCertification.title')}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                  {t('hero.trustIndicators.officialCertification.description')}
                </p>

                {/* Arrow indicator */}
                <div className="flex items-center text-gold-500 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="mr-2">Ver más</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Card 2 */}
              <div className="group relative bg-white p-6 sm:p-8 border-2 border-gray-200 hover:border-gold-400 transition-all duration-300 hover-lift animate-slideUp animation-delay-200">
                {/* Accent bar */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-navy-500 to-gold-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-navy-50 flex items-center justify-center text-navy-500 transition-all duration-300 group-hover:bg-gold-400 group-hover:text-white group-hover:rotate-6 group-hover:scale-110">
                    <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-navy-500 mb-3 sm:mb-4 group-hover:text-navy-600 transition-colors">
                  {t('hero.trustIndicators.fastDelivery.title')}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                  {t('hero.trustIndicators.fastDelivery.description')}
                </p>

                {/* Arrow indicator */}
                <div className="flex items-center text-gold-500 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="mr-2">Ver más</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Card 3 */}
              <div className="group relative bg-white p-6 sm:p-8 border-2 border-gray-200 hover:border-gold-400 transition-all duration-300 hover-lift animate-slideUp animation-delay-400 sm:col-span-2 md:col-span-1">
                {/* Accent bar */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-navy-500 to-gold-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-navy-50 flex items-center justify-center text-navy-500 transition-all duration-300 group-hover:bg-gold-400 group-hover:text-white group-hover:rotate-6 group-hover:scale-110">
                    <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-navy-500 mb-3 sm:mb-4 group-hover:text-navy-600 transition-colors">
                  {t('hero.trustIndicators.legalSpecialization.title')}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                  {t('hero.trustIndicators.legalSpecialization.description')}
                </p>

                {/* Arrow indicator */}
                <div className="flex items-center text-gold-500 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="mr-2">Ver más</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Banner - Enhanced */}
      <section className="relative py-12 md:py-16 bg-navy-500 text-white overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-gold-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-400 rounded-full blur-3xl animate-pulse animation-delay-500"></div>
        </div>

        {/* Decorative lines */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">

            {/* Header */}
            <div className="text-center mb-8 animate-fadeIn">
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-gold-400/20 border-2 border-gold-400/40 mb-6">
                <svg className="w-5 h-5 text-gold-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-bold uppercase tracking-[0.2em] text-gold-200">
                  {t('common.certified')}
                </span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Doble Certificación Oficial
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Traductora jurada habilitada oficialmente en España y Alemania
              </p>
            </div>

            {/* Certification Cards */}
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

              {/* Spain Card */}
              <div className="group relative bg-white/10 backdrop-blur-sm border-2 border-white/20 p-8 hover:bg-white/15 hover:border-gold-400/50 transition-all duration-500 animate-slideInLeft animation-delay-300">
                {/* Corner accent */}
                <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative">
                  {/* Flag & Badge */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 bg-white/10 border-2 border-white/30 flex items-center justify-center group-hover:border-gold-400/50 transition-all duration-300 group-hover:scale-110">
                      <span className="text-4xl">🇪🇸</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-2xl font-bold mb-1 group-hover:text-gold-300 transition-colors">España</h3>
                      <div className="inline-block px-3 py-1 bg-gold-400/20 border border-gold-400/40 text-xs font-semibold uppercase tracking-wider text-gold-200">
                        Nº oficial
                      </div>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <p className="font-semibold text-white">Ministerio de Asuntos Exteriores</p>
                        <p className="text-sm text-gray-300">Unión Europea y Cooperación</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <p className="text-sm text-gray-300">Válido en todo el territorio español</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Germany Card */}
              <div className="group relative bg-white/10 backdrop-blur-sm border-2 border-white/20 p-8 hover:bg-white/15 hover:border-gold-400/50 transition-all duration-500 animate-slideInRight animation-delay-300">
                {/* Corner accent */}
                <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative">
                  {/* Flag & Badge */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 bg-white/10 border-2 border-white/30 flex items-center justify-center group-hover:border-gold-400/50 transition-all duration-300 group-hover:scale-110">
                      <span className="text-4xl">🇩🇪</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-2xl font-bold mb-1 group-hover:text-gold-300 transition-colors">Alemania</h3>
                      <div className="inline-block px-3 py-1 bg-gold-400/20 border border-gold-400/40 text-xs font-semibold uppercase tracking-wider text-gold-200">
                        Beglaubigt
                      </div>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <p className="font-semibold text-white">Oberlandesgericht Köln</p>
                        <p className="text-sm text-gray-300">Tribunal Superior de Colonia</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <p className="text-sm text-gray-300">Válido en toda Alemania</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom note */}
            <div className="text-center mt-12 animate-fadeIn animation-delay-600">
              <p className="text-gray-300 text-sm">
                <span className="inline-flex items-center gap-2">
                  <svg className="w-4 h-4 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  Las traducciones juradas tienen validez legal oficial en ambos países
                </span>
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
