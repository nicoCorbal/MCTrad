import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  cardHover,
  buttonHover
} from '../components/animations/MotionComponents';

function HomePage() {
  const { t } = useTranslation();
  const [openFaq, setOpenFaq] = useState(null);

  // Inyectar FAQPage Schema para Rich Snippets de Google
  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": t('homePage.faq.q1'),
          "acceptedAnswer": { "@type": "Answer", "text": t('homePage.faq.a1') }
        },
        {
          "@type": "Question",
          "name": t('homePage.faq.q2'),
          "acceptedAnswer": { "@type": "Answer", "text": t('homePage.faq.a2') }
        },
        {
          "@type": "Question",
          "name": t('homePage.faq.q3'),
          "acceptedAnswer": { "@type": "Answer", "text": t('homePage.faq.a3') }
        },
        {
          "@type": "Question",
          "name": t('homePage.faq.q4'),
          "acceptedAnswer": { "@type": "Answer", "text": t('homePage.faq.a4') }
        },
        {
          "@type": "Question",
          "name": t('homePage.faq.q5'),
          "acceptedAnswer": { "@type": "Answer", "text": t('homePage.faq.a5') }
        }
      ]
    };

    let script = document.getElementById('faq-schema');
    if (!script) {
      script = document.createElement('script');
      script.id = 'faq-schema';
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(faqSchema);

    return () => {
      const existingScript = document.getElementById('faq-schema');
      if (existingScript) existingScript.remove();
    };
  }, [t]);

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
    <div className="min-h-screen bg-white overflow-hidden">

      {/* Hero */}
      <section className="min-h-[100svh] flex items-center relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-white">
        {/* Decorative background elements - hidden on mobile for performance */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden hidden md:block">
          <motion.div
            className="absolute top-1/4 right-[8%] w-64 h-64"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <div className="relative w-full h-full">
              <motion.div
                className="absolute top-0 left-0 w-40 h-40 rounded-full border border-gray-200/60"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute top-8 left-12 w-40 h-40 rounded-full border border-blue-200/50"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />
              <div className="absolute top-4 left-6 w-40 h-40 rounded-full bg-gradient-to-br from-blue-50/80 to-transparent" />
            </div>
          </motion.div>

          {/* Subtle grid pattern */}
          <motion.div
            className="absolute bottom-0 left-0 w-full h-1/3 opacity-[0.015]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.015 }}
            transition={{ duration: 2, delay: 1 }}
            style={{
              backgroundImage: 'linear-gradient(rgba(37,99,235,1) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,1) 1px, transparent 1px)',
              backgroundSize: '60px 60px'
            }}
          />
        </div>

        {/* Mobile decorative accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-50 to-transparent md:hidden" />

        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-12 pt-8 sm:pt-12 lg:pt-16 pb-8 sm:pb-16 lg:pb-20 relative z-10 w-full">
          <div className="max-w-3xl">
            {/* Eyebrow - más compacto en móvil */}
            <motion.div
              className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-5"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <motion.div
                className="h-px w-8 sm:w-12 bg-gradient-to-r from-blue-600 to-blue-400"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
                style={{ originX: 0 }}
              />
              <span className="text-[10px] sm:text-xs font-medium tracking-[0.15em] sm:tracking-[0.2em] uppercase text-gray-500">
                {t('homePage.trustBadge')}
              </span>
            </motion.div>

            {/* Headline - escala dramática en móvil */}
            <h1 className="mb-4 sm:mb-6 md:mb-8">
              <motion.span
                className="block font-serif text-[2.75rem] leading-[1] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-semibold text-gray-900 sm:leading-[0.95] tracking-[-0.02em]"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
              >
                {t('homePage.heroTitle1')}
              </motion.span>
              <motion.span
                className="block font-serif text-[2.75rem] leading-[1] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-semibold sm:leading-[0.95] tracking-[-0.02em] mt-0.5 sm:mt-2"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.4, 0.25, 1] }}
              >
                <span className="relative inline-block">
                  <span className="relative z-10 text-blue-600">{t('homePage.heroTitle2')}</span>
                  <motion.span
                    className="absolute -bottom-0.5 sm:-bottom-1 left-0 w-full h-2 sm:h-3 bg-blue-100 -skew-x-6"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
                    style={{ originX: 0 }}
                  />
                </span>
              </motion.span>
            </h1>

            {/* Description - texto más legible en móvil */}
            <motion.p
              className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 md:mb-10 leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
            >
              {t('homePage.heroDescription')}
            </motion.p>

            {/* CTAs - stack vertical en móvil pequeño */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 md:mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="flex-1 sm:flex-initial">
                <Link
                  to="/contacto"
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 sm:px-7 py-3.5 sm:py-4 bg-blue-600 text-white font-semibold rounded-xl sm:rounded-lg hover:bg-blue-700 transition-colors duration-300 text-[15px] sm:text-base shadow-lg shadow-blue-600/25 sm:shadow-none"
                >
                  {t('homePage.requestQuote')}
                  <motion.svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    initial={{ x: 0 }}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="flex-1 sm:flex-initial">
                <Link
                  to="/servicios"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 sm:px-7 py-3.5 sm:py-4 text-gray-700 font-semibold rounded-xl sm:rounded-lg border-2 border-gray-200 sm:border-gray-300 hover:border-gray-400 hover:bg-white/50 transition-all duration-300 text-[15px] sm:text-base"
                >
                  {t('services')}
                </Link>
              </motion.div>
            </motion.div>

            {/* Trust indicators - diseño compacto para móvil */}
            <motion.div
              className="grid grid-cols-3 gap-2 sm:flex sm:flex-wrap sm:items-center sm:gap-6 md:gap-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            >
              {/* Países */}
              <motion.div
                className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-3 p-3 sm:p-0 bg-white/60 sm:bg-transparent rounded-xl sm:rounded-none"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center">
                  <div className="flex items-center justify-center w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-white shadow-sm border border-gray-100">
                    <span className="text-sm sm:text-lg">🇪🇸</span>
                  </div>
                  <div className="flex items-center justify-center w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-white shadow-sm border border-gray-100 -ml-2 sm:-ml-4">
                    <span className="text-sm sm:text-lg">🇩🇪</span>
                  </div>
                </div>
                <span className="text-[11px] sm:text-sm text-gray-500 text-center sm:text-left sm:ml-1">{t('homePage.statCountries')}</span>
              </motion.div>

              <div className="h-8 w-px bg-gray-200 hidden sm:block" />

              {/* 24h */}
              <div className="flex flex-col sm:flex-row items-center gap-0.5 sm:gap-2 p-3 sm:p-0 bg-white/60 sm:bg-transparent rounded-xl sm:rounded-none">
                <span className="text-xl sm:text-2xl font-serif text-gray-900">24h</span>
                <span className="text-[11px] sm:text-sm text-gray-500 text-center">{t('homePage.statDelivery')}</span>
              </div>

              <div className="h-8 w-px bg-gray-200 hidden sm:block" />

              {/* Confidencial */}
              <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 p-3 sm:p-0 bg-white/60 sm:bg-transparent rounded-xl sm:rounded-none">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="text-[11px] sm:text-sm text-gray-500 text-center">{t('homePage.statConfidential')}</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.div
            className="flex flex-col items-center gap-2 text-gray-400"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-gray-300 to-transparent" />
          </motion.div>
        </motion.div>
      </section>

      {/* Services */}
      <motion.section
        className="py-12 md:py-20 lg:py-28 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              {t('homePage.servicesTitle')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('homePage.heroSubtitle')}
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {services.map((service, i) => (
              <Link key={i} to="/servicios">
                <motion.div
                  className="p-8 bg-white border border-gray-200 rounded-xl cursor-pointer h-full"
                  variants={staggerItem}
                  whileHover={{
                    y: -8,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
                    borderColor: "rgb(59 130 246)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="font-serif text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <span className="text-blue-600 text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    {t('homePage.ctaLearnMore')} →
                  </span>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Credentials */}
      <motion.section
        className="py-12 md:py-20 lg:py-28"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.div className="text-center mb-10 md:mb-16" variants={fadeInUp}>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              {t('homePage.credentialsTitle')}
            </h2>
          </motion.div>

          <motion.div className="grid md:grid-cols-2 gap-8" variants={staggerContainer}>
            {[
              { flag: '🇪🇸', title: t('homePage.spainTitle'), desc: t('homePage.spainDesc'), link: 'https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/TraductoresInt%C3%A9rpretes.aspx' },
              { flag: '🇩🇪', title: t('homePage.germanyTitle'), desc: t('homePage.germanyDesc'), link: 'https://www.justiz-dolmetscher.de/Recherche/de/Suchen' }
            ].map((cred, i) => (
              <motion.div
                key={i}
                className="p-8 bg-gray-50 rounded-xl border border-gray-200"
                variants={staggerItem}
                whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(0,0,0,0.06)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start gap-4">
                  <motion.span
                    className="text-4xl"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {cred.flag}
                  </motion.span>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-gray-900 mb-2">
                      {cred.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{cred.desc}</p>
                    <motion.a
                      href={cred.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:underline inline-flex items-center gap-1"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      {t('homePage.verifyCredential')}
                      <span>→</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Process */}
      <motion.section
        className="py-12 md:py-20 lg:py-28 bg-blue-600"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.div className="text-center mb-10 md:mb-16" variants={fadeInUp}>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white mb-4">
              {t('homePage.process.title')}
            </h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              {t('homePage.process.subtitle')}
            </p>
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-7 gap-8 md:gap-0 items-start" variants={staggerContainer}>
            {process.map((item, i) => (
              <React.Fragment key={i}>
                {/* Paso */}
                <motion.div
                  className="text-center"
                  variants={staggerItem}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-white text-blue-600 font-semibold rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-lg shadow-blue-900/20">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-white mb-1 md:mb-2">{item.title}</h3>
                  <p className="text-sm text-blue-100 max-w-[200px] md:max-w-[140px] mx-auto">{item.desc}</p>
                </motion.div>

                {/* Flecha entre pasos */}
                {i < process.length - 1 && (
                  <motion.div
                    className="hidden md:flex items-center justify-center h-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  >
                    <svg className="w-full h-4 text-white/30" viewBox="0 0 60 16" fill="none">
                      <path
                        d="M0 8h50M50 8l-6-6M50 8l-6 6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* FAQ */}
      <motion.section
        className="py-12 md:py-20 lg:py-28"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="max-w-3xl mx-auto px-6">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              {t('homePage.faq.title')}
            </h2>
          </motion.div>

          <motion.div className="space-y-4" variants={staggerContainer}>
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden"
                variants={staggerItem}
                whileHover={{
                  borderColor: "rgb(59 130 246)",
                  boxShadow: "0 4px 12px rgba(59, 130, 246, 0.1)"
                }}
                transition={{ duration: 0.2 }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-900">{faq.q}</span>
                  <motion.svg
                    className="w-5 h-5 text-gray-500 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ rotate: openFaq === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 text-gray-600">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        className="py-12 md:py-20 lg:py-28 bg-blue-600"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            className="font-serif text-3xl md:text-4xl font-semibold text-white mb-4"
            variants={fadeInUp}
          >
            {t('homePage.ctaTitle')}
          </motion.h2>
          <motion.p
            className="text-blue-100 mb-8 text-lg"
            variants={fadeInUp}
          >
            {t('homePage.ctaSubtitle')}
          </motion.p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              {t('homePage.ctaContact')}
              <motion.svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </Link>
          </motion.div>
        </div>
      </motion.section>

    </div>
  );
}

export default HomePage;
