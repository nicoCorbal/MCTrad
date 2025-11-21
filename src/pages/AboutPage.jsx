import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function AboutPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-stone-50">

      {/* Hero Section */}
      <section className="bg-blue-600">
        <div className="container mx-auto px-6 lg:px-12 pt-28 pb-12 md:pt-32 md:pb-16">
          <div className="flex items-center gap-12 lg:gap-16">
            <div className="flex-1">
              <h1 className="font-serif font-light text-5xl md:text-6xl lg:text-7xl text-white leading-tight">
                {t('aboutPage.title')}
              </h1>
              <p className="text-blue-200 text-sm tracking-widest uppercase mt-6">
                {t('common.badges.professionalProfile')}
              </p>
            </div>

            {/* Hero Illustration */}
            <div className="hidden lg:flex flex-shrink-0">
              <img
                src="/ilu4.svg"
                alt="Professional illustration"
                className="w-72 xl:w-80 h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-6 lg:px-12 py-16 md:py-32">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-16">

            {/* Left Sidebar - Credentials */}
            <div className="lg:col-span-1 order-2 lg:order-1">

              {/* Professional Identity */}
              <div className="bg-white border border-stone-200 p-6 md:p-8 mb-6 md:mb-8">
                <div className="aspect-square bg-stone-100 flex items-center justify-center mb-4 md:mb-6">
                  <div className="text-center px-4">
                    <div className="font-serif text-2xl md:text-3xl font-light text-zinc-800 mb-2">
                      María Ángeles Capas
                    </div>
                    <div className="text-xs md:text-sm text-zinc-500 uppercase tracking-wider">
                      {t('common.swornTranslator')}
                    </div>
                  </div>
                </div>
              </div>

              {/* Credentials */}
              <div className="space-y-4">
                <div className="bg-white border-l-4 border-blue-500 p-5 md:p-6">
                  <p className="text-xs md:text-sm uppercase tracking-wider text-zinc-500 mb-2">
                    {t('aboutPage.credentials.certification')}
                  </p>
                  <p className="font-serif text-lg md:text-xl text-zinc-800">
                    {t('aboutPage.credentials.spainAndGermany')}
                  </p>
                </div>

                <div className="bg-white border-l-4 border-blue-500 p-5 md:p-6">
                  <p className="text-xs md:text-sm uppercase tracking-wider text-zinc-500 mb-2">
                    {t('aboutPage.credentials.specialization')}
                  </p>
                  <p className="font-serif text-lg md:text-xl text-zinc-800">
                    {t('aboutPage.credentials.legalAndTechnical')}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Content - About Text */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              <div className="space-y-10 md:space-y-16">

                {/* Presentation */}
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl text-zinc-800 mb-4 md:mb-6 border-b border-zinc-200 pb-4">
                    {t('aboutPage.sections.presentation')}
                  </h2>
                  <p className="text-zinc-600 leading-relaxed text-base md:text-lg">
                    {t('aboutPage.introduction')}
                  </p>
                </div>

                {/* Experience */}
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl text-zinc-800 mb-4 md:mb-6 border-b border-zinc-200 pb-4">
                    {t('aboutPage.sections.experience')}
                  </h2>
                  <p className="text-zinc-600 leading-relaxed text-base md:text-lg">
                    {t('aboutPage.paragraph1')}
                  </p>
                </div>

                {/* Capabilities */}
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl text-zinc-800 mb-4 md:mb-6 border-b border-zinc-200 pb-4">
                    {t('aboutPage.sections.capabilities')}
                  </h2>
                  <p className="text-zinc-600 leading-relaxed text-base md:text-lg">
                    {t('aboutPage.paragraph2')}
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Commitment CTA */}
      <section className="bg-blue-600">
        <div className="container mx-auto px-6 lg:px-12 py-16 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif font-light text-3xl md:text-4xl lg:text-5xl text-white mb-4 md:mb-6">
              {t('aboutPage.sections.commitment')}
            </h2>
            <p className="text-blue-200 mb-8 md:mb-12 text-base md:text-lg leading-relaxed">
              {t('aboutPage.conclusion')}
            </p>

            <Link
              to="/contacto"
              className="inline-block text-white border-b-2 border-white pb-1 hover:text-blue-200 hover:border-blue-200 transition-colors font-medium"
            >
              {t('common.contactNow')} →
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

export default AboutPage;
