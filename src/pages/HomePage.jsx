import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function HomePage() {
  const { t } = useTranslation();
  const [openFaq, setOpenFaq] = useState(null);

  const services = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: t('homePage.service1Title'),
      description: t('homePage.service1Desc'),
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: t('homePage.service2Title'),
      description: t('homePage.service2Desc'),
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: t('homePage.service3Title'),
      description: t('homePage.service3Desc'),
    },
  ];

  const process = [
    { step: '01', title: t('homePage.process.step1Title'), desc: t('homePage.process.step1Desc') },
    { step: '02', title: t('homePage.process.step2Title'), desc: t('homePage.process.step2Desc') },
    { step: '03', title: t('homePage.process.step3Title'), desc: t('homePage.process.step3Desc') },
    { step: '04', title: t('homePage.process.step4Title'), desc: t('homePage.process.step4Desc') },
  ];

  const faqs = [
    { q: t('homePage.faq.q1'), a: t('homePage.faq.a1') },
    { q: t('homePage.faq.q2'), a: t('homePage.faq.a2') },
    { q: t('homePage.faq.q3'), a: t('homePage.faq.a3') },
    { q: t('homePage.faq.q4'), a: t('homePage.faq.a4') },
    { q: t('homePage.faq.q5'), a: t('homePage.faq.a5') },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="min-h-[100vh] flex items-center hero-gradient hero-decoration relative overflow-hidden">
        {/* Decorative floating elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Abstract language connection visual */}
          <div className="absolute top-1/4 right-[8%] w-64 h-64 opacity-0 animate-scale-in animation-delay-500">
            <div className="relative w-full h-full">
              {/* Overlapping circles representing language connection */}
              <div className="absolute top-0 left-0 w-40 h-40 rounded-full border border-gray-200/60 animate-float" />
              <div className="absolute top-8 left-12 w-40 h-40 rounded-full border border-blue-200/50 animate-float animation-delay-200" style={{ animationDelay: '1s' }} />
              <div className="absolute top-4 left-6 w-40 h-40 rounded-full bg-gradient-to-br from-blue-50/80 to-transparent" />
              {/* Connection line */}
              <div className="absolute top-20 left-20 w-px h-24 bg-gradient-to-b from-gray-300/50 via-blue-300/30 to-transparent origin-top animate-line-grow animation-delay-700" />
            </div>
          </div>

          {/* Subtle grid pattern */}
          <div className="absolute bottom-0 left-0 w-full h-1/3 opacity-[0.02]"
            style={{
              backgroundImage: 'linear-gradient(rgba(37,99,235,1) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,1) 1px, transparent 1px)',
              backgroundSize: '60px 60px'
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-24 lg:py-32 relative z-10">
          <div className="max-w-3xl">
            {/* Eyebrow with animated line */}
            <div className="flex items-center gap-4 mb-8 opacity-0 animate-fade-up">
              <div className="h-px w-12 bg-gradient-to-r from-blue-600 to-blue-400 origin-left animate-line-grow animation-delay-300" />
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-gray-500">
                {t('homePage.trustBadge')}
              </span>
            </div>

            {/* Headline with staggered animation */}
            <h1 className="mb-8">
              <span className="block font-serif text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-semibold text-gray-900 leading-[0.95] tracking-[-0.02em] opacity-0 animate-fade-up animation-delay-100">
                {t('homePage.heroTitle1')}
              </span>
              <span className="block font-serif text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-semibold leading-[0.95] tracking-[-0.02em] opacity-0 animate-fade-up animation-delay-200 mt-2">
                <span className="relative inline-block">
                  <span className="relative z-10 text-blue-600">{t('homePage.heroTitle2')}</span>
                  {/* Underline accent */}
                  <span className="absolute -bottom-1 left-0 w-full h-3 bg-blue-100 -skew-x-6 origin-left animate-line-grow animation-delay-600" />
                </span>
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-xl opacity-0 animate-fade-up animation-delay-300">
              {t('homePage.heroDescription')}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-16 opacity-0 animate-fade-up animation-delay-400">
              <Link
                to="/contacto"
                className="group inline-flex items-center gap-3 px-7 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 text-base"
              >
                {t('homePage.requestQuote')}
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                to="/servicios"
                className="group inline-flex items-center gap-3 px-7 py-4 text-gray-700 font-semibold rounded-lg border-2 border-gray-300 hover:border-gray-400 hover:bg-white/50 transition-all duration-300 text-base"
              >
                {t('services')}
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="opacity-0 animate-fade-up animation-delay-500">
              <div className="flex flex-wrap items-center gap-6 md:gap-10">
                <div className="flex items-center gap-3 group">
                  <div className="flex items-center justify-center w-11 h-11 rounded-full bg-white shadow-sm border border-gray-100 group-hover:shadow-md transition-shadow duration-300">
                    <span className="text-lg">🇪🇸</span>
                  </div>
                  <div className="flex items-center justify-center w-11 h-11 rounded-full bg-white shadow-sm border border-gray-100 -ml-4 group-hover:shadow-md transition-shadow duration-300">
                    <span className="text-lg">🇩🇪</span>
                  </div>
                  <span className="text-sm text-gray-500 ml-1">{t('homePage.statCountries')}</span>
                </div>

                <div className="h-8 w-px bg-gray-200 hidden md:block" />

                <div className="flex items-center gap-2">
                  <span className="text-2xl font-serif text-gray-900">24h</span>
                  <span className="text-sm text-gray-500">{t('homePage.statDelivery')}</span>
                </div>

                <div className="h-8 w-px bg-gray-200 hidden md:block" />

                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span className="text-sm text-gray-500">{t('homePage.statConfidential')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in animation-delay-800">
          <div className="flex flex-col items-center gap-2 text-gray-400">
            <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-gray-300 to-transparent" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              {t('homePage.servicesTitle')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('homePage.heroSubtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div key={i} className="p-8 bg-white border border-gray-200 rounded-xl hover:shadow-lg hover:border-gray-300 transition-all">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="font-serif text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              {t('homePage.credentialsTitle')}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-gray-50 rounded-xl border border-gray-200">
              <div className="flex items-start gap-4">
                <span className="text-4xl">🇪🇸</span>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-gray-900 mb-2">
                    {t('homePage.spainTitle')}
                  </h3>
                  <p className="text-gray-600 mb-4">{t('homePage.spainDesc')}</p>
                  <a
                    href="https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/TraductoresInt%C3%A9rpretes.aspx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    {t('homePage.verifyCredential')} →
                  </a>
                </div>
              </div>
            </div>

            <div className="p-8 bg-gray-50 rounded-xl border border-gray-200">
              <div className="flex items-start gap-4">
                <span className="text-4xl">🇩🇪</span>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-gray-900 mb-2">
                    {t('homePage.germanyTitle')}
                  </h3>
                  <p className="text-gray-600 mb-4">{t('homePage.germanyDesc')}</p>
                  <a
                    href="https://www.justiz-dolmetscher.de/Recherche/de/Suchen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    {t('homePage.verifyCredential')} →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28 bg-blue-600">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white mb-4">
              {t('homePage.process.title')}
            </h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              {t('homePage.process.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 bg-white text-blue-600 font-semibold rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-blue-100">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              {t('homePage.faq.title')}
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4"
                >
                  <span className="font-medium text-gray-900">{faq.q}</span>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform ${openFaq === i ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-4 text-gray-600">
                    {faq.a}
                  </div>
                )}
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

export default HomePage;
