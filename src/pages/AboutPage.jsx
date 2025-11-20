import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function AboutPage() {
  const { t } = useTranslation();

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
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
              </svg>
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] text-navy-600">
                {t('common.badges.professionalProfile')}
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-navy-500 mb-4 sm:mb-6 leading-tight animate-fadeIn animation-delay-200 px-4">
              {t('aboutPage.title')}
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

      {/* Main Content */}
      <section className="py-10 sm:py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">

              {/* Left Sidebar - Credentials */}
              <div className="lg:col-span-1 animate-slideInLeft">
                {/* Professional Photo */}
                <div className="mb-8 group">
                  <div className="relative">
                    <div className="absolute -inset-2 border-2 border-gold-400/30 -rotate-2 group-hover:rotate-2 transition-transform duration-300"></div>
                    <div className="relative w-full aspect-square bg-gray-200 shadow-xl hover-lift">
                      <img
                        src="/placeholder-professional.jpg"
                        alt="Professional"
                        className="object-cover w-full h-full"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                      <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gold-400 -z-10"></div>
                    </div>
                  </div>
                </div>

                {/* Official Seal */}
                <div className="bg-white border-2 border-gray-200 p-6 mb-6 hover:border-gold-400/50 transition-all duration-300 hover-lift">
                  <div className="aspect-[2/1] bg-gray-100 flex items-center justify-center border-2 border-gray-200">
                    <img
                      src="/placeholder-seal.png"
                      alt="Official Seal"
                      className="object-contain h-full w-full p-2"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                  <p className="text-center text-sm text-gray-600 mt-4 font-medium">
                    {t('aboutPage.credentials.officialSeal')}
                  </p>
                </div>

                {/* Quick Info Cards */}
                <div className="space-y-4">
                  <div className="group relative bg-navy-50 border-l-4 border-gold-400 p-5 hover:bg-gold-400/10 transition-all duration-300">
                    <p className="text-xs uppercase tracking-wider text-gray-600 mb-2 font-semibold">
                      {t('aboutPage.credentials.certification')}
                    </p>
                    <p className="font-bold text-navy-500 text-lg group-hover:text-navy-600 transition-colors">
                      {t('aboutPage.credentials.spainAndGermany')}
                    </p>
                  </div>

                  <div className="group relative bg-navy-50 border-l-4 border-gold-400 p-5 hover:bg-gold-400/10 transition-all duration-300">
                    <p className="text-xs uppercase tracking-wider text-gray-600 mb-2 font-semibold">
                      {t('aboutPage.credentials.specialization')}
                    </p>
                    <p className="font-bold text-navy-500 text-lg group-hover:text-navy-600 transition-colors">
                      {t('aboutPage.credentials.legalAndTechnical')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Content - About Text */}
              <div className="lg:col-span-2 animate-slideInRight animation-delay-200">
                <div className="space-y-8">

                  {/* Presentation */}
                  <div className="group">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-gold-400/10 flex items-center justify-center group-hover:bg-gold-400/20 transition-colors">
                        <svg className="w-6 h-6 text-gold-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <h2 className="font-serif text-3xl font-bold text-navy-500 group-hover:text-navy-600 transition-colors">
                        {t('aboutPage.sections.presentation')}
                      </h2>
                    </div>
                    <div className="h-1 w-20 bg-gradient-to-r from-gold-400 to-transparent mb-6"></div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {t('aboutPage.introduction')}
                    </p>
                  </div>

                  {/* Experience */}
                  <div className="group">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-gold-400/10 flex items-center justify-center group-hover:bg-gold-400/20 transition-colors">
                        <svg className="w-6 h-6 text-gold-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"/>
                          <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"/>
                        </svg>
                      </div>
                      <h2 className="font-serif text-3xl font-bold text-navy-500 group-hover:text-navy-600 transition-colors">
                        {t('aboutPage.sections.experience')}
                      </h2>
                    </div>
                    <div className="h-1 w-20 bg-gradient-to-r from-gold-400 to-transparent mb-6"></div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {t('aboutPage.paragraph1')}
                    </p>
                  </div>

                  {/* Capabilities */}
                  <div className="group">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-gold-400/10 flex items-center justify-center group-hover:bg-gold-400/20 transition-colors">
                        <svg className="w-6 h-6 text-gold-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                          <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <h2 className="font-serif text-3xl font-bold text-navy-500 group-hover:text-navy-600 transition-colors">
                        {t('aboutPage.sections.capabilities')}
                      </h2>
                    </div>
                    <div className="h-1 w-20 bg-gradient-to-r from-gold-400 to-transparent mb-6"></div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {t('aboutPage.paragraph2')}
                    </p>
                  </div>

                  {/* Commitment CTA */}
                  <div className="relative bg-gradient-to-br from-navy-500 to-navy-600 p-10 md:p-12 text-white overflow-hidden group hover-lift">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gold-400/10 rounded-full blur-3xl"></div>

                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 bg-white/10 flex items-center justify-center">
                          <svg className="w-6 h-6 text-gold-300" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                          </svg>
                        </div>
                        <h2 className="font-serif text-3xl font-bold">
                          {t('aboutPage.sections.commitment')}
                        </h2>
                      </div>

                      <p className="text-gray-200 leading-relaxed mb-8 text-lg">
                        {t('aboutPage.conclusion')}
                      </p>

                      <Link
                        to="/contacto"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gold-400 text-navy-500 font-bold uppercase tracking-[0.1em] hover:bg-gold-300 transition-all duration-300 hover-lift"
                      >
                        <span>{t('common.contactNow')}</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
