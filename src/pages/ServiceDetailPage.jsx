import React, { useMemo, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { LocalizedLink } from '../components/LocalizedLink';
import { useDocumentHead } from '../hooks/useDocumentHead';
import Breadcrumbs from '../components/Breadcrumbs';
import RelatedServices from '../components/RelatedServices';
import { servicePages, SITE_URL, localeConfig } from '../config/seo';
import { supportedLanguages } from '../i18n/i18n';
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
} from '../components/animations/MotionComponents';

/**
 * Programmatic SEO Page for specific translation services
 * Generates scalable landing pages for different document types
 */
function ServiceDetailPage() {
  const { lang = 'es', serviceSlug } = useParams();
  const { t } = useTranslation();
  const currentLang = supportedLanguages.includes(lang) ? lang : 'es';
  const [openFaq, setOpenFaq] = useState(null);

  // Find the service configuration by slug
  const serviceConfig = useMemo(() => {
    for (const [key, config] of Object.entries(servicePages)) {
      if (config.slugs[currentLang] === serviceSlug) {
        return { key, ...config };
      }
    }
    return null;
  }, [serviceSlug, currentLang]);

  // Build SEO configuration with FAQ schema
  const seoConfig = useMemo(() => {
    if (!serviceConfig) return null;

    const seoData = serviceConfig.seo[currentLang] || serviceConfig.seo.es;
    const locale = localeConfig[currentLang] || localeConfig.es;
    const serviceContent = getServiceContent(serviceConfig.routeKey, null, currentLang);

    // Generate alternate language links
    const alternateLanguages = supportedLanguages.map(lng => ({
      lang: lng,
      url: `${SITE_URL}/${lng}/${serviceConfig.slugs[lng]}`,
    }));

    // Generate Service schema + FAQ schema for JSON-LD
    const schemas = [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": seoData.title,
        "description": seoData.description,
        "provider": {
          "@type": "ProfessionalService",
          "@id": `${SITE_URL}/#professionalservice`,
          "name": "María Ángeles Capas - Traductora Jurada",
          "url": SITE_URL,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Madrid",
            "addressRegion": "Madrid",
            "addressCountry": "ES"
          },
        },
        "areaServed": ["España", "Alemania", "Francia"],
        "serviceType": "Translation Service",
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": serviceContent.faqs?.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        })) || []
      }
    ];

    return {
      title: seoData.title,
      description: seoData.description,
      canonical: `${SITE_URL}/${currentLang}/${serviceSlug}`,
      lang: currentLang,
      alternateLanguages,
      openGraph: {
        title: seoData.title,
        description: seoData.description,
        url: `${SITE_URL}/${currentLang}/${serviceSlug}`,
        type: 'website',
        locale: locale.locale,
        siteName: locale.name,
      },
      twitter: {
        card: 'summary_large_image',
        title: seoData.title,
        description: seoData.description,
      },
      jsonLd: schemas,
    };
  }, [serviceConfig, currentLang, serviceSlug]);

  // Use document head for SEO
  useDocumentHead(seoConfig);

  // Redirect if service not found
  if (!serviceConfig) {
    return <Navigate to={`/${currentLang}`} replace />;
  }

  // Service-specific content
  const serviceContent = getServiceContent(serviceConfig.routeKey, t, currentLang);

  // Section titles by language
  const sectionTitles = {
    es: { documents: 'Documentos que traducimos', faq: 'Preguntas frecuentes' },
    de: { documents: 'Dokumente, die wir übersetzen', faq: 'Häufig gestellte Fragen' },
    fr: { documents: 'Documents que nous traduisons', faq: 'Questions fréquentes' },
    en: { documents: 'Documents we translate', faq: 'Frequently asked questions' },
  };

  // Icons for features
  const featureIcons = [
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
  ];

  return (
    <main className="min-h-screen bg-white overflow-hidden">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: t('home'), href: `/${currentLang}` },
          { label: t('services'), href: `/${currentLang}/${currentLang === 'es' ? 'servicios' : currentLang === 'de' ? 'dienstleistungen' : 'services'}` },
          { label: serviceContent.shortTitle },
        ]}
      />

      {/* Hero Section - Coherente con HomePage */}
      <section className="pt-12 pb-16 md:pt-20 md:pb-24 bg-gradient-to-b from-gray-50 via-white to-white relative overflow-hidden">
        {/* Decorative elements like HomePage */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden hidden md:block">
          <motion.div
            className="absolute top-1/4 right-[8%] w-64 h-64"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
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
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <motion.div
              className="flex items-center gap-4 mb-6"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="h-px w-12 bg-gradient-to-r from-blue-600 to-blue-400" />
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-gray-500">
                {serviceContent.badge}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {serviceContent.title}
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {serviceContent.description}
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <LocalizedLink
                  to="/contacto"
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/25"
                >
                  {t('homePage.requestQuote')}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </LocalizedLink>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <a
                  href="mailto:capaslopez@gmail.com"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 bg-white text-gray-900 font-semibold rounded-lg border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all duration-300"
                >
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  capaslopez@gmail.com
                </a>
              </motion.div>
            </motion.div>

            {/* Trust indicators - Same style as HomePage */}
            <motion.div
              className="flex items-center justify-between sm:justify-start gap-4 sm:gap-8 pt-6 border-t border-gray-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center gap-1.5">
                <span className="text-xs sm:text-sm text-gray-600">
                  {t('homePage.certifiedIn')} 🇪🇸 🇩🇪
                </span>
              </div>
              <div className="h-5 w-px bg-gray-200 sm:h-8" />
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="text-lg sm:text-2xl font-serif font-semibold text-gray-900">24h</span>
                <span className="text-xs sm:text-sm text-gray-500 hidden sm:inline">{t('homePage.statDelivery')}</span>
              </div>
              <div className="h-5 w-px bg-gray-200 sm:h-8" />
              <div className="flex items-center gap-1.5 sm:gap-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-xs sm:text-sm text-gray-500">{t('homePage.statConfidential')}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features - Same style as HomePage services */}
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
              {serviceContent.featuresTitle}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {currentLang === 'es' ? 'Servicio profesional con todas las garantías' :
               currentLang === 'de' ? 'Professioneller Service mit allen Garantien' :
               'Professional service with all guarantees'}
            </p>
          </motion.div>

          <motion.div className="grid md:grid-cols-2 gap-8" variants={staggerContainer}>
            {serviceContent.features.map((feature, i) => (
              <motion.div
                key={i}
                className="p-8 bg-white border border-gray-200 rounded-xl"
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
                  {featureIcons[i % featureIcons.length]}
                </motion.div>
                <h3 className="font-serif text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Credentials - Same style as HomePage */}
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
              { flag: '🇪🇸', title: t('homePage.spainTitle'), desc: t('homePage.spainDesc') },
              { flag: '🇩🇪', title: t('homePage.germanyTitle'), desc: t('homePage.germanyDesc') }
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
                    <p className="text-gray-600">{cred.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Documents Included Section */}
      {serviceContent.documents && (
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
                {sectionTitles[currentLang].documents}
              </h2>
            </motion.div>

            <motion.div
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
              variants={staggerContainer}
            >
              {serviceContent.documents.map((doc, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-4 p-5 bg-white rounded-xl border border-gray-200"
                  variants={staggerItem}
                  whileHover={{
                    borderColor: "rgb(59 130 246)",
                    boxShadow: "0 4px 12px rgba(59, 130, 246, 0.1)"
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">{doc}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>
      )}

      {/* Process Section - Same as HomePage */}
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
            {[
              { step: '01', title: t('homePage.process.step1Title'), desc: t('homePage.process.step1Desc') },
              { step: '02', title: t('homePage.process.step2Title'), desc: t('homePage.process.step2Desc') },
              { step: '03', title: t('homePage.process.step3Title'), desc: t('homePage.process.step3Desc') },
              { step: '04', title: t('homePage.process.step4Title'), desc: t('homePage.process.step4Desc') },
            ].map((item, i) => (
              <React.Fragment key={i}>
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
                {i < 3 && (
                  <motion.div
                    className="hidden md:flex items-center justify-center h-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  >
                    <svg className="w-full h-4 text-white/30" viewBox="0 0 60 16" fill="none">
                      <path d="M0 8h50M50 8l-6-6M50 8l-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* FAQ Section - Same style as HomePage */}
      {serviceContent.faqs && (
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
                {sectionTitles[currentLang].faq}
              </h2>
            </motion.div>

            <motion.div className="space-y-4" variants={staggerContainer}>
              {serviceContent.faqs.map((faq, i) => (
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
                    <span className="font-medium text-gray-900">{faq.question}</span>
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
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>
      )}

      {/* Related Services */}
      <RelatedServices currentServiceKey={serviceConfig.key} lang={currentLang} />

      {/* CTA - Same as HomePage */}
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
            <LocalizedLink
              to="/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              {t('homePage.ctaContact')}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </LocalizedLink>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}

/**
 * Get service-specific content based on the service type
 * Contains translations for all 6 service types in 4 languages
 * Now includes FAQs and document lists for enhanced SEO
 */
function getServiceContent(routeKey, t, lang) {
  const contents = {
    'birth-certificate': {
      es: {
        shortTitle: 'Certificado de Nacimiento',
        badge: 'Traducción Jurada',
        title: 'Traducción Jurada de Certificados de Nacimiento',
        description: 'Traducciones juradas de certificados y partidas de nacimiento con validez oficial para trámites en España, Alemania y otros países. Servicio profesional con entrega en 24-48 horas.',
        featuresTitle: 'Características del Servicio',
        features: [
          { title: 'Validez Legal Garantizada', description: 'Reconocida por registros civiles, embajadas, consulados y administraciones públicas de España y Alemania.' },
          { title: 'Entrega Express 24-48h', description: 'Traducción lista en 24-48 horas laborables. Envío digital previo y original por correo certificado.' },
          { title: 'Formato Oficial Completo', description: 'Sello y firma oficial de traductora jurada según normativa MAEC (España) y OLG Köln (Alemania).' },
          { title: 'Presupuesto Sin Compromiso', description: 'Precio cerrado antes de comenzar. Sin costes ocultos ni sorpresas.' },
        ],
        documents: [
          'Partida de nacimiento literal',
          'Certificado de nacimiento internacional',
          'Extracto de inscripción de nacimiento',
          'Libro de familia (páginas de nacimiento)',
          'Certificado de nacimiento plurilingüe',
          'Acta de nacimiento apostillada',
        ],
        faqs: [
          { question: '¿Qué validez tiene la traducción jurada de un certificado de nacimiento?', answer: 'La traducción jurada tiene plena validez legal ante cualquier organismo oficial: registros civiles, embajadas, consulados, universidades, empresas y administraciones públicas tanto en España como en Alemania y otros países de la UE.' },
          { question: '¿Cuánto tiempo tarda la traducción de un certificado de nacimiento?', answer: 'El plazo estándar es de 24-48 horas laborables. Para casos urgentes, disponemos de servicio express en el mismo día (consultar disponibilidad). Recibirás primero la versión digital y posteriormente el original por correo certificado.' },
          { question: '¿Necesito apostillar mi certificado de nacimiento antes de traducirlo?', answer: 'Depende del país de destino. Para trámites entre países firmantes del Convenio de La Haya, sí necesitarás la Apostilla. Te asesoramos sobre los requisitos específicos según tu caso.' },
          { question: '¿Cuánto cuesta traducir un certificado de nacimiento?', answer: 'El precio depende del idioma y la extensión del documento. Envíanos tu certificado y te proporcionamos un presupuesto exacto y sin compromiso en menos de 2 horas.' },
          { question: '¿Puedo usar la traducción jurada para solicitar nacionalidad española?', answer: 'Sí, la traducción jurada del certificado de nacimiento es uno de los documentos fundamentales para el expediente de nacionalidad española. Debe ir acompañada de la Apostilla de La Haya si el documento procede de un país firmante del Convenio.' },
          { question: '¿Qué diferencia hay entre partida y certificado de nacimiento?', answer: 'La partida de nacimiento es el asiento original en el libro del Registro Civil, mientras que el certificado es una copia oficial expedida por el Registro. Ambos documentos tienen la misma validez para traducciones juradas.' },
          { question: '¿Aceptan la traducción jurada en la embajada alemana?', answer: 'Sí, al estar acreditada por el OLG de Colonia (Oberlandesgericht Köln), mis traducciones juradas son plenamente válidas ante la embajada alemana, consulados alemanes y cualquier autoridad en Alemania.' },
          { question: '¿Cómo envío mi certificado de nacimiento para traducir?', answer: 'Puedes enviar una foto clara o escaneo del documento por email a capaslopez@gmail.com o WhatsApp. En 1-2 horas recibirás el presupuesto. No es necesario enviar el original para el presupuesto.' },
        ],
      },
      de: {
        shortTitle: 'Geburtsurkunde',
        badge: 'Beglaubigte Übersetzung',
        title: 'Beglaubigte Übersetzung von Geburtsurkunden',
        description: 'Beglaubigte Übersetzungen von Geburtsurkunden mit amtlicher Gültigkeit für Behörden in Deutschland, Spanien und anderen Ländern. Professioneller Service mit Lieferung in 24-48 Stunden.',
        featuresTitle: 'Leistungsmerkmale',
        features: [
          { title: 'Garantierte Rechtsgültigkeit', description: 'Anerkannt von Standesämtern, Botschaften, Konsulaten und Behörden in Deutschland und Spanien.' },
          { title: 'Express-Lieferung 24-48h', description: 'Übersetzung in 24-48 Arbeitsstunden fertig. Vorab digitaler Versand, Original per Einschreiben.' },
          { title: 'Vollständiges amtliches Format', description: 'Offizieller Stempel und Unterschrift gemäß OLG Köln und spanischem MAEC.' },
          { title: 'Kostenvoranschlag ohne Verpflichtung', description: 'Festpreis vor Beginn. Keine versteckten Kosten.' },
        ],
        documents: [
          'Geburtsurkunde (beglaubigt)',
          'Internationale Geburtsurkunde',
          'Auszug aus dem Geburtenregister',
          'Stammbuch (Geburtsseiten)',
          'Mehrsprachige Geburtsurkunde',
          'Apostillierte Geburtsurkunde',
        ],
        faqs: [
          { question: 'Welche Gültigkeit hat die beglaubigte Übersetzung einer Geburtsurkunde?', answer: 'Die beglaubigte Übersetzung hat volle Rechtsgültigkeit bei allen offiziellen Stellen: Standesämter, Botschaften, Konsulate, Universitäten, Unternehmen und Behörden in Deutschland, Spanien und anderen EU-Ländern.' },
          { question: 'Wie lange dauert die Übersetzung einer Geburtsurkunde?', answer: 'Die Standardfrist beträgt 24-48 Arbeitsstunden. Für dringende Fälle bieten wir einen Express-Service am selben Tag an (Verfügbarkeit anfragen).' },
          { question: 'Muss ich meine Geburtsurkunde vor der Übersetzung apostillieren lassen?', answer: 'Das hängt vom Zielland ab. Für Verfahren zwischen Ländern, die das Haager Übereinkommen unterzeichnet haben, benötigen Sie die Apostille.' },
          { question: 'Was kostet die Übersetzung einer Geburtsurkunde?', answer: 'Der Preis hängt von der Sprache und dem Umfang des Dokuments ab. Senden Sie uns Ihre Urkunde und wir erstellen Ihnen innerhalb von 2 Stunden ein genaues und unverbindliches Angebot.' },
          { question: 'Kann ich die beglaubigte Übersetzung für die Einbürgerung verwenden?', answer: 'Ja, die beglaubigte Übersetzung der Geburtsurkunde ist eines der grundlegenden Dokumente für das Einbürgerungsverfahren. Sie muss zusammen mit der Haager Apostille vorgelegt werden.' },
          { question: 'Was ist der Unterschied zwischen Geburtsurkunde und Geburtsschein?', answer: 'Die Geburtsurkunde ist der ursprüngliche Eintrag im Geburtenregister, während der Geburtsschein eine offizielle Kopie ist. Beide Dokumente haben die gleiche Gültigkeit für beglaubigte Übersetzungen.' },
          { question: 'Wird die beglaubigte Übersetzung bei der spanischen Botschaft akzeptiert?', answer: 'Ja, da ich vom spanischen MAEC akkreditiert bin, werden meine beglaubigten Übersetzungen von der spanischen Botschaft, Konsulaten und allen spanischen Behörden voll anerkannt.' },
          { question: 'Wie sende ich meine Geburtsurkunde zur Übersetzung?', answer: 'Sie können ein klares Foto oder einen Scan per E-Mail an capaslopez@gmail.com oder WhatsApp senden. Innerhalb von 1-2 Stunden erhalten Sie das Angebot. Das Original wird für das Angebot nicht benötigt.' },
        ],
      },
      fr: {
        shortTitle: 'Acte de Naissance',
        badge: 'Traduction Assermentée',
        title: 'Traduction Assermentée des Actes de Naissance',
        description: 'Traductions assermentées des actes de naissance avec validité officielle pour les démarches administratives. Service professionnel avec livraison en 24-48 heures.',
        featuresTitle: 'Caractéristiques du Service',
        features: [
          { title: 'Validité Légale Garantie', description: 'Reconnue par les mairies, ambassades, consulats et administrations en Espagne et en Allemagne.' },
          { title: 'Livraison Express 24-48h', description: 'Traduction prête en 24-48 heures ouvrables. Envoi numérique préalable et original par courrier recommandé.' },
          { title: 'Format Officiel Complet', description: 'Cachet et signature officiels conformes aux normes MAEC et OLG Cologne.' },
          { title: 'Devis Sans Engagement', description: 'Prix fixe avant de commencer. Pas de frais cachés.' },
        ],
        documents: [
          'Copie intégrale d\'acte de naissance',
          'Acte de naissance international',
          'Extrait d\'acte de naissance',
          'Livret de famille (pages naissance)',
          'Acte de naissance plurilingue',
          'Acte de naissance apostillé',
        ],
        faqs: [
          { question: 'Quelle validité a la traduction assermentée d\'un acte de naissance?', answer: 'La traduction assermentée a une pleine validité juridique auprès de tout organisme officiel: mairies, ambassades, consulats, universités, entreprises et administrations publiques.' },
          { question: 'Combien de temps prend la traduction d\'un acte de naissance?', answer: 'Le délai standard est de 24-48 heures ouvrables. Pour les cas urgents, nous disposons d\'un service express le jour même (vérifier la disponibilité).' },
          { question: 'Dois-je apostiller mon acte de naissance avant de le faire traduire?', answer: 'Cela dépend du pays de destination. Pour les démarches entre pays signataires de la Convention de La Haye, vous aurez besoin de l\'Apostille.' },
          { question: 'Combien coûte la traduction d\'un acte de naissance?', answer: 'Le prix dépend de la langue et de l\'étendue du document. Envoyez-nous votre acte et nous vous fournirons un devis exact et sans engagement en moins de 2 heures.' },
          { question: 'Puis-je utiliser la traduction assermentée pour une demande de nationalité?', answer: 'Oui, la traduction assermentée de l\'acte de naissance est l\'un des documents fondamentaux pour le dossier de nationalité. Elle doit être accompagnée de l\'Apostille de La Haye si le document provient d\'un pays signataire.' },
          { question: 'Quelle est la différence entre extrait et copie intégrale?', answer: 'La copie intégrale contient toutes les informations de l\'acte original, tandis que l\'extrait ne contient que les données essentielles. Les deux documents ont la même validité pour les traductions assermentées.' },
          { question: 'La traduction est-elle acceptée par l\'ambassade allemande?', answer: 'Oui, étant accréditée par l\'OLG de Cologne, mes traductions assermentées sont pleinement valides auprès de l\'ambassade allemande et de toutes les autorités allemandes.' },
          { question: 'Comment envoyer mon acte de naissance pour traduction?', answer: 'Vous pouvez envoyer une photo claire ou un scan par email à capaslopez@gmail.com ou WhatsApp. Vous recevrez le devis en 1-2 heures. L\'original n\'est pas nécessaire pour le devis.' },
        ],
      },
      en: {
        shortTitle: 'Birth Certificate',
        badge: 'Certified Translation',
        title: 'Certified Birth Certificate Translation',
        description: 'Certified translations of birth certificates with official validity for administrative procedures in Spain, Germany, and other countries. Professional service with 24-48 hour delivery.',
        featuresTitle: 'Service Features',
        features: [
          { title: 'Guaranteed Legal Validity', description: 'Recognized by civil registries, embassies, consulates, and government offices in Spain and Germany.' },
          { title: 'Express Delivery 24-48h', description: 'Translation ready in 24-48 business hours. Prior digital delivery and original by registered mail.' },
          { title: 'Complete Official Format', description: 'Official seal and signature per MAEC (Spain) and OLG Cologne (Germany) standards.' },
          { title: 'No-Obligation Quote', description: 'Fixed price before starting. No hidden costs or surprises.' },
        ],
        documents: [
          'Full birth certificate',
          'International birth certificate',
          'Birth registration extract',
          'Family book (birth pages)',
          'Multilingual birth certificate',
          'Apostilled birth certificate',
        ],
        faqs: [
          { question: 'What validity does a certified translation of a birth certificate have?', answer: 'The certified translation has full legal validity with any official body: civil registries, embassies, consulates, universities, companies, and public administrations in Spain, Germany, and other EU countries.' },
          { question: 'How long does it take to translate a birth certificate?', answer: 'The standard timeframe is 24-48 business hours. For urgent cases, we offer same-day express service (check availability).' },
          { question: 'Do I need to apostille my birth certificate before translating it?', answer: 'It depends on the destination country. For procedures between countries that signed the Hague Convention, you will need the Apostille.' },
          { question: 'How much does it cost to translate a birth certificate?', answer: 'The price depends on the language and length of the document. Send us your certificate and we will provide an exact, no-obligation quote in less than 2 hours.' },
          { question: 'Can I use the certified translation for Spanish citizenship applications?', answer: 'Yes, the certified translation of the birth certificate is one of the fundamental documents for Spanish citizenship applications. It must be accompanied by the Hague Apostille if the document comes from a signatory country.' },
          { question: 'What is the difference between a birth certificate and a birth registration extract?', answer: 'The birth certificate is the original entry in the civil registry book, while the extract is an official copy. Both documents have the same validity for certified translations.' },
          { question: 'Is the certified translation accepted at the German embassy?', answer: 'Yes, being accredited by the OLG Cologne, my certified translations are fully valid at the German embassy, consulates, and all German authorities.' },
          { question: 'How do I send my birth certificate for translation?', answer: 'You can send a clear photo or scan by email to capaslopez@gmail.com or WhatsApp. You will receive the quote within 1-2 hours. The original is not needed for the quote.' },
        ],
      },
    },
    'marriage-certificate': {
      es: {
        shortTitle: 'Certificado de Matrimonio',
        badge: 'Traducción Jurada',
        title: 'Traducción Jurada de Certificados de Matrimonio',
        description: 'Traducciones juradas de certificados de matrimonio y actas matrimoniales para registro civil y trámites legales. Validez oficial en España y Alemania.',
        featuresTitle: 'Características del Servicio',
        features: [
          { title: 'Registro Civil', description: 'Válida para inscripción de matrimonios celebrados en el extranjero en el Registro Civil español o alemán.' },
          { title: 'Trámites de Visado', description: 'Aceptada para reagrupación familiar, permisos de residencia y nacionalidad.' },
          { title: 'Doble Acreditación', description: 'Traductora jurada reconocida oficialmente tanto en España (MAEC) como en Alemania (OLG Köln).' },
          { title: 'Confidencialidad Total', description: 'Tratamiento discreto y seguro de todos los datos personales según RGPD.' },
        ],
        documents: [
          'Certificado literal de matrimonio',
          'Acta de matrimonio civil',
          'Certificado de matrimonio religioso',
          'Libro de familia (páginas matrimonio)',
          'Certificado de matrimonio internacional',
          'Sentencia de divorcio',
        ],
        faqs: [
          { question: '¿Sirve la traducción jurada para inscribir mi matrimonio en España?', answer: 'Sí, la traducción jurada de tu certificado de matrimonio extranjero es imprescindible para inscribirlo en el Registro Civil español.' },
          { question: '¿Puedo usar la misma traducción para trámites en Alemania y España?', answer: 'Al estar acreditada como traductora jurada en ambos países, mis traducciones tienen validez oficial en ambas jurisdicciones.' },
          { question: '¿Qué documentos necesito para la reagrupación familiar?', answer: 'Normalmente necesitarás el certificado de matrimonio traducido, certificados de nacimiento de los cónyuges, y en algunos casos antecedentes penales.' },
          { question: '¿Traducís también sentencias de divorcio?', answer: 'Sí, realizamos traducciones juradas de sentencias de divorcio, convenios reguladores y cualquier documento relacionado con el estado civil.' },
          { question: '¿Es necesario apostillar el certificado de matrimonio alemán?', answer: 'Sí, para que el certificado de matrimonio alemán tenga validez en España, debe llevar la Apostilla de La Haya. En Alemania, las Apostillas se obtienen en el Landgericht o Amtsgericht correspondiente.' },
          { question: '¿Cuánto tiempo tengo para inscribir mi matrimonio extranjero en España?', answer: 'No hay un plazo legal límite, pero es recomendable hacerlo lo antes posible para evitar problemas en trámites futuros como herencias, visados o nacionalidad.' },
          { question: '¿Qué pasa si me casé en un país que no está en el Convenio de La Haya?', answer: 'Si el país no es firmante del Convenio, el certificado deberá ser legalizado por vía diplomática (Ministerio de Asuntos Exteriores del país de origen y Consulado/Embajada de España).' },
          { question: '¿Traducís el libro de familia alemán (Stammbuch)?', answer: 'Sí, traducimos el Stammbuch alemán completo o solo las páginas necesarias para tus trámites. Es un documento muy solicitado para inscripciones en el Registro Civil español.' },
        ],
      },
      de: {
        shortTitle: 'Heiratsurkunde',
        badge: 'Beglaubigte Übersetzung',
        title: 'Beglaubigte Übersetzung von Heiratsurkunden',
        description: 'Beglaubigte Übersetzungen von Heiratsurkunden für Standesamt und rechtliche Verfahren. Amtliche Gültigkeit in Deutschland und Spanien.',
        featuresTitle: 'Leistungsmerkmale',
        features: [
          { title: 'Standesamt', description: 'Gültig für die Eintragung im Ausland geschlossener Ehen beim deutschen oder spanischen Standesamt.' },
          { title: 'Visumsverfahren', description: 'Akzeptiert für Familiennachzug, Aufenthaltserlaubnis und Einbürgerung.' },
          { title: 'Doppelzulassung', description: 'Offiziell anerkannte Übersetzerin in Spanien (MAEC) und Deutschland (OLG Köln).' },
          { title: 'Absolute Vertraulichkeit', description: 'Diskrete und sichere Behandlung aller persönlichen Daten gemäß DSGVO.' },
        ],
        documents: ['Heiratsurkunde (beglaubigt)', 'Standesamtliche Heiratsurkunde', 'Kirchliche Heiratsurkunde', 'Stammbuch (Heiratsseiten)', 'Internationale Heiratsurkunde', 'Scheidungsurteil'],
        faqs: [
          { question: 'Kann ich mit der beglaubigten Übersetzung meine Ehe in Deutschland eintragen lassen?', answer: 'Ja, die beglaubigte Übersetzung Ihrer ausländischen Heiratsurkunde ist für die Eintragung beim deutschen Standesamt erforderlich.' },
          { question: 'Kann ich dieselbe Übersetzung für Verfahren in Deutschland und Spanien verwenden?', answer: 'Da ich als beglaubigte Übersetzerin in beiden Ländern akkreditiert bin, haben meine Übersetzungen in beiden Rechtsordnungen amtliche Gültigkeit.' },
          { question: 'Welche Dokumente benötige ich für den Familiennachzug?', answer: 'Normalerweise benötigen Sie die übersetzte Heiratsurkunde, Geburtsurkunden der Ehepartner und in einigen Fällen Führungszeugnisse.' },
          { question: 'Übersetzen Sie auch Scheidungsurteile?', answer: 'Ja, wir erstellen beglaubigte Übersetzungen von Scheidungsurteilen und allen Dokumenten zum Personenstand.' },
          { question: 'Muss die spanische Heiratsurkunde apostilliert werden?', answer: 'Ja, damit die spanische Heiratsurkunde in Deutschland gültig ist, muss sie die Haager Apostille tragen. In Spanien erhalten Sie diese beim Ministerio de Justicia oder den Territoriales Tribunales Superiores de Justicia.' },
          { question: 'Wie lange habe ich Zeit, meine ausländische Ehe in Deutschland anzumelden?', answer: 'Es gibt keine gesetzliche Frist, aber es ist ratsam, dies so bald wie möglich zu tun, um Probleme bei zukünftigen Verfahren wie Erbschaften, Visa oder Einbürgerung zu vermeiden.' },
          { question: 'Was passiert, wenn ich in einem Nicht-Haager-Land geheiratet habe?', answer: 'Wenn das Land kein Unterzeichner des Übereinkommens ist, muss das Dokument auf diplomatischem Wege legalisiert werden (Außenministerium des Herkunftslandes und spanische/deutsche Botschaft).' },
          { question: 'Übersetzen Sie das spanische Libro de Familia?', answer: 'Ja, wir übersetzen das spanische Libro de Familia vollständig oder nur die benötigten Seiten. Es ist ein häufig angefragtes Dokument für Eintragungen beim deutschen Standesamt.' },
        ],
      },
      fr: {
        shortTitle: 'Acte de Mariage',
        badge: 'Traduction Assermentée',
        title: 'Traduction Assermentée des Actes de Mariage',
        description: 'Traductions assermentées des actes de mariage pour les démarches administratives et procédures légales.',
        featuresTitle: 'Caractéristiques du Service',
        features: [
          { title: 'État Civil', description: 'Valide pour l\'inscription des mariages célébrés à l\'étranger.' },
          { title: 'Procédures de Visa', description: 'Acceptée pour le regroupement familial et les permis de séjour.' },
          { title: 'Double Accréditation', description: 'Traductrice assermentée reconnue en Espagne et en Allemagne.' },
          { title: 'Confidentialité Totale', description: 'Traitement discret et sécurisé des données personnelles.' },
        ],
        documents: ['Copie intégrale d\'acte de mariage', 'Acte de mariage civil', 'Acte de mariage religieux', 'Livret de famille', 'Acte de mariage international', 'Jugement de divorce'],
        faqs: [
          { question: 'La traduction assermentée permet-elle d\'inscrire mon mariage en Espagne?', answer: 'Oui, la traduction assermentée de votre acte de mariage étranger est indispensable pour l\'inscrire à l\'état civil espagnol.' },
          { question: 'Puis-je utiliser la même traduction en Allemagne et en Espagne?', answer: 'Étant accréditée dans les deux pays, mes traductions ont une validité officielle dans les deux juridictions.' },
          { question: 'Quels documents ai-je besoin pour le regroupement familial?', answer: 'Normalement l\'acte de mariage traduit, les actes de naissance des époux et parfois des extraits de casier judiciaire.' },
          { question: 'Traduisez-vous les jugements de divorce?', answer: 'Oui, nous réalisons des traductions assermentées de jugements de divorce et documents relatifs à l\'état civil.' },
          { question: 'Faut-il apostiller l\'acte de mariage allemand?', answer: 'Oui, pour que l\'acte de mariage allemand soit valable en Espagne, il doit porter l\'Apostille de La Haye. En Allemagne, l\'Apostille est délivrée par le Landgericht ou Regierungspräsidium compétent.' },
          { question: 'Quel délai pour inscrire mon mariage étranger en Espagne?', answer: 'Il n\'y a pas de délai légal, mais il est conseillé de le faire le plus tôt possible pour éviter des problèmes lors de démarches futures comme les successions, visas ou nationalité.' },
          { question: 'Que se passe-t-il si je me suis marié dans un pays non-membre de la Convention de La Haye?', answer: 'Si le pays n\'est pas signataire, le document devra être légalisé par voie diplomatique (Ministère des Affaires étrangères du pays d\'origine et Consulat/Ambassade d\'Espagne).' },
          { question: 'Traduisez-vous le Stammbuch allemand?', answer: 'Oui, nous traduisons le Stammbuch allemand complet ou seulement les pages nécessaires. C\'est un document très demandé pour les inscriptions à l\'état civil espagnol.' },
        ],
      },
      en: {
        shortTitle: 'Marriage Certificate',
        badge: 'Certified Translation',
        title: 'Certified Marriage Certificate Translation',
        description: 'Certified translations of marriage certificates for civil registry and legal procedures. Official validity in Spain and Germany.',
        featuresTitle: 'Service Features',
        features: [
          { title: 'Civil Registry', description: 'Valid for registration of marriages celebrated abroad.' },
          { title: 'Visa Procedures', description: 'Accepted for family reunification and residence permits.' },
          { title: 'Dual Accreditation', description: 'Officially recognized sworn translator in Spain and Germany.' },
          { title: 'Full Confidentiality', description: 'Discrete and secure handling of personal data.' },
        ],
        documents: ['Full marriage certificate', 'Civil marriage certificate', 'Religious marriage certificate', 'Family book', 'International marriage certificate', 'Divorce decree'],
        faqs: [
          { question: 'Can I use the certified translation to register my marriage in Spain?', answer: 'Yes, the certified translation of your foreign marriage certificate is essential for registering it with the Spanish Civil Registry.' },
          { question: 'Can I use the same translation in Germany and Spain?', answer: 'Being accredited in both countries, my translations have official validity in both jurisdictions.' },
          { question: 'What documents do I need for family reunification?', answer: 'Normally the translated marriage certificate, birth certificates of both spouses, and sometimes criminal background checks.' },
          { question: 'Do you translate divorce decrees?', answer: 'Yes, we provide certified translations of divorce decrees and civil status documents.' },
          { question: 'Does the German marriage certificate need an apostille?', answer: 'Yes, for the German marriage certificate to be valid in Spain, it must bear the Hague Apostille. In Germany, the Apostille is issued by the competent Landgericht or Regierungspräsidium.' },
          { question: 'How long do I have to register my foreign marriage in Spain?', answer: 'There is no legal deadline, but it is advisable to do it as soon as possible to avoid problems with future procedures such as inheritances, visas, or citizenship.' },
          { question: 'What happens if I got married in a non-Hague Convention country?', answer: 'If the country is not a signatory, the document must be legalized through diplomatic channels (Ministry of Foreign Affairs of the country of origin and Spanish Consulate/Embassy).' },
          { question: 'Do you translate the German Stammbuch?', answer: 'Yes, we translate the complete German Stammbuch or just the required pages. It is a frequently requested document for registrations at the Spanish Civil Registry.' },
        ],
      },
    },
    'university-degree': {
      es: {
        shortTitle: 'Título Universitario',
        badge: 'Traducción Jurada',
        title: 'Traducción Jurada de Títulos Universitarios',
        description: 'Traducciones juradas de títulos universitarios, expedientes académicos y certificados de notas para homologación en España y Alemania.',
        featuresTitle: 'Características del Servicio',
        features: [
          { title: 'Homologación de Títulos', description: 'Válida para procesos de homologación ante el Ministerio de Educación.' },
          { title: 'Universidades', description: 'Aceptada por universidades españolas y alemanas para admisión.' },
          { title: 'Expediente Completo', description: 'Traducción de títulos, certificados de notas y suplementos europeos.' },
          { title: 'Apostilla de La Haya', description: 'Asesoramiento sobre apostilla según los requisitos de cada país.' },
        ],
        documents: ['Título universitario oficial', 'Certificado académico de notas', 'Suplemento Europeo al Título', 'Programa de asignaturas', 'Diploma de máster o doctorado', 'Certificado de estudios en curso'],
        faqs: [
          { question: '¿Qué documentos necesito para homologar mi título en España?', answer: 'Necesitarás el título universitario original, el certificado académico con las notas, el programa de asignaturas, todos apostillados y traducidos.' },
          { question: '¿Cuánto tarda la traducción de un expediente académico?', answer: 'Un expediente completo suele tardar 3-5 días laborables. Títulos sueltos en 24-48 horas.' },
          { question: '¿La traducción sirve para universidades alemanas?', answer: 'Sí, al estar acreditada por el OLG Köln, mis traducciones son válidas para cualquier universidad alemana.' },
          { question: '¿Traducís el Suplemento Europeo al Título?', answer: 'Sí, traducimos el SET/Diploma Supplement, cada vez más solicitado por universidades y empleadores.' },
          { question: '¿Cómo se homologa un título alemán en España?', answer: 'Debes solicitar la homologación ante el Ministerio de Educación (MECD) presentando el título traducido, certificado académico traducido, programa de asignaturas y documentos apostillados. El proceso puede tardar varios meses.' },
          { question: '¿Qué es la equivalencia de títulos y en qué se diferencia de la homologación?', answer: 'La equivalencia reconoce el nivel académico del título (grado, máster, doctorado) pero no habilita para ejercer profesiones reguladas. La homologación equipara el título extranjero a uno español específico.' },
          { question: '¿Puedo trabajar en Alemania con mi título español?', answer: 'Depende de la profesión. Para profesiones reguladas (medicina, arquitectura, etc.) necesitarás reconocimiento oficial. Para otras profesiones, la traducción jurada del título suele ser suficiente para demostrar tu cualificación.' },
          { question: '¿Traducís títulos de FP y Bachillerato?', answer: 'Sí, traducimos títulos de Formación Profesional, Bachillerato, ESO y cualquier certificación académica oficial para su uso en Alemania u otros países.' },
        ],
      },
      de: {
        shortTitle: 'Hochschulzeugnis',
        badge: 'Beglaubigte Übersetzung',
        title: 'Beglaubigte Übersetzung von Hochschulzeugnissen',
        description: 'Beglaubigte Übersetzungen von Hochschulzeugnissen und Transcripts für die Anerkennung in Deutschland und Spanien.',
        featuresTitle: 'Leistungsmerkmale',
        features: [
          { title: 'Titelanerkennung', description: 'Gültig für Anerkennungsverfahren ausländischer Abschlüsse.' },
          { title: 'Universitäten', description: 'Akzeptiert von deutschen und spanischen Hochschulen.' },
          { title: 'Vollständige Unterlagen', description: 'Übersetzung von Zeugnissen, Notenbescheinigungen und Diploma Supplements.' },
          { title: 'Haager Apostille', description: 'Beratung zur Apostille gemäß den Anforderungen jedes Landes.' },
        ],
        documents: ['Offizielles Hochschulzeugnis', 'Transcript of Records', 'Diploma Supplement', 'Modulbeschreibungen', 'Master- oder Promotionsurkunde', 'Studienbescheinigung'],
        faqs: [
          { question: 'Welche Dokumente brauche ich für die Anerkennung in Deutschland?', answer: 'Das Original-Hochschulzeugnis, Transcript of Records, Modulbeschreibungen - alle apostilliert und übersetzt.' },
          { question: 'Wie lange dauert die Übersetzung eines Transcripts?', answer: 'Ein vollständiges Transcript dauert etwa 3-5 Arbeitstage. Einzelne Zeugnisse in 24-48 Stunden.' },
          { question: 'Ist die Übersetzung für spanische Universitäten gültig?', answer: 'Ja, da ich vom spanischen MAEC akkreditiert bin.' },
          { question: 'Übersetzen Sie das Diploma Supplement?', answer: 'Ja, wir übersetzen das Diploma Supplement.' },
          { question: 'Wie wird ein spanischer Abschluss in Deutschland anerkannt?', answer: 'Sie müssen die Anerkennung bei der zuständigen Behörde (je nach Bundesland unterschiedlich) beantragen. Erforderlich sind der übersetzte Abschluss, das übersetzte Transcript, Modulbeschreibungen und apostillierte Dokumente.' },
          { question: 'Was ist der Unterschied zwischen Anerkennung und Gleichwertigkeit?', answer: 'Die Gleichwertigkeit erkennt das akademische Niveau an (Bachelor, Master, Doktor), berechtigt aber nicht zur Ausübung reglementierter Berufe. Die Anerkennung setzt den ausländischen Abschluss einem deutschen gleich.' },
          { question: 'Kann ich mit meinem spanischen Abschluss in Deutschland arbeiten?', answer: 'Das hängt vom Beruf ab. Für reglementierte Berufe (Medizin, Architektur usw.) benötigen Sie eine offizielle Anerkennung. Für andere Berufe reicht die beglaubigte Übersetzung meist aus.' },
          { question: 'Übersetzen Sie auch FP- und Abitur-Zeugnisse?', answer: 'Ja, wir übersetzen Berufsausbildungszeugnisse, Abitur, ESO und alle offiziellen akademischen Bescheinigungen für die Verwendung in Deutschland.' },
        ],
      },
      fr: {
        shortTitle: 'Diplôme Universitaire',
        badge: 'Traduction Assermentée',
        title: 'Traduction Assermentée de Diplômes Universitaires',
        description: 'Traductions assermentées de diplômes universitaires et relevés de notes pour la reconnaissance des qualifications.',
        featuresTitle: 'Caractéristiques du Service',
        features: [
          { title: 'Reconnaissance de Diplômes', description: 'Valide pour les procédures de reconnaissance.' },
          { title: 'Universités', description: 'Acceptée par les universités espagnoles et allemandes.' },
          { title: 'Dossier Complet', description: 'Traduction de diplômes, relevés de notes et suppléments européens.' },
          { title: 'Apostille de La Haye', description: 'Conseils sur l\'apostille selon les exigences.' },
        ],
        documents: ['Diplôme universitaire officiel', 'Relevé de notes', 'Supplément au diplôme', 'Programme des cours', 'Diplôme de master ou doctorat', 'Attestation d\'études en cours'],
        faqs: [
          { question: 'Quels documents pour faire reconnaître mon diplôme en Espagne?', answer: 'Le diplôme original, le relevé de notes, le programme des matières - tous apostillés et traduits.' },
          { question: 'Combien de temps pour un dossier académique complet?', answer: 'Généralement 3-5 jours ouvrables. Diplômes individuels en 24-48 heures.' },
          { question: 'La traduction est valable pour les universités allemandes?', answer: 'Oui, étant accréditée par l\'OLG Cologne.' },
          { question: 'Traduisez-vous le Supplément au Diplôme?', answer: 'Oui, nous traduisons le Diploma Supplement.' },
          { question: 'Comment faire homologuer un diplôme allemand en Espagne?', answer: 'Vous devez demander l\'homologation auprès du Ministère de l\'Éducation (MECD) en présentant le diplôme traduit, le relevé de notes traduit, le programme des matières et les documents apostillés. Le processus peut prendre plusieurs mois.' },
          { question: 'Quelle différence entre équivalence et homologation?', answer: 'L\'équivalence reconnaît le niveau académique (licence, master, doctorat) mais n\'habilite pas à exercer des professions réglementées. L\'homologation assimile le diplôme étranger à un diplôme espagnol spécifique.' },
          { question: 'Puis-je travailler en Allemagne avec mon diplôme espagnol?', answer: 'Cela dépend de la profession. Pour les professions réglementées (médecine, architecture, etc.), une reconnaissance officielle est nécessaire. Pour les autres, la traduction assermentée suffit généralement.' },
          { question: 'Traduisez-vous les diplômes de formation professionnelle?', answer: 'Oui, nous traduisons les diplômes de formation professionnelle, baccalauréat et toute certification académique officielle.' },
        ],
      },
      en: {
        shortTitle: 'University Degree',
        badge: 'Certified Translation',
        title: 'Certified University Degree Translation',
        description: 'Certified translations of university degrees and transcripts for credential recognition in Spain and Germany.',
        featuresTitle: 'Service Features',
        features: [
          { title: 'Degree Recognition', description: 'Valid for foreign degree recognition procedures.' },
          { title: 'Universities', description: 'Accepted by Spanish and German universities.' },
          { title: 'Complete Records', description: 'Translation of degrees, transcripts, and European Diploma Supplements.' },
          { title: 'Hague Apostille', description: 'Guidance on apostille requirements.' },
        ],
        documents: ['Official university degree', 'Academic transcript', 'European Diploma Supplement', 'Course syllabi', 'Master\'s or doctoral diploma', 'Current enrollment certificate'],
        faqs: [
          { question: 'What documents for degree recognition in Spain?', answer: 'The original degree, academic transcript, course syllabi - all apostilled and translated.' },
          { question: 'How long for a complete academic record?', answer: 'Usually 3-5 business days. Individual degrees in 24-48 hours.' },
          { question: 'Is the translation valid for German universities?', answer: 'Yes, being accredited by OLG Cologne.' },
          { question: 'Do you translate the European Diploma Supplement?', answer: 'Yes, we translate the Diploma Supplement.' },
          { question: 'How do I get a German degree recognized in Spain?', answer: 'You must apply for recognition to the Ministry of Education (MECD) submitting the translated degree, translated transcript, course syllabi, and apostilled documents. The process can take several months.' },
          { question: 'What is the difference between equivalence and homologation?', answer: 'Equivalence recognizes the academic level (bachelor, master, doctorate) but does not authorize regulated professions. Homologation equates the foreign degree to a specific Spanish degree.' },
          { question: 'Can I work in Germany with my Spanish degree?', answer: 'It depends on the profession. For regulated professions (medicine, architecture, etc.) official recognition is required. For other professions, the certified translation is usually sufficient.' },
          { question: 'Do you translate vocational training and high school diplomas?', answer: 'Yes, we translate vocational training diplomas, high school certificates, and any official academic certification for use abroad.' },
        ],
      },
    },
    'contracts': {
      es: {
        shortTitle: 'Contratos',
        badge: 'Traducción Jurada',
        title: 'Traducción Jurada de Contratos',
        description: 'Traducciones juradas de contratos mercantiles, laborales, de compraventa y arrendamiento con precisión jurídica.',
        featuresTitle: 'Características del Servicio',
        features: [
          { title: 'Precisión Jurídica', description: 'Terminología legal exacta adaptada a ambos ordenamientos jurídicos.' },
          { title: 'Contratos Mercantiles', description: 'Compraventa, distribución, franquicia, joint ventures y NDAs.' },
          { title: 'Contratos Laborales', description: 'Contratos de trabajo, convenios colectivos y acuerdos de no competencia.' },
          { title: 'Revisión Especializada', description: 'Doble revisión para garantizar coherencia terminológica.' },
        ],
        documents: ['Contratos de compraventa', 'Contratos de arrendamiento', 'Contratos laborales', 'Acuerdos de confidencialidad (NDA)', 'Contratos de distribución', 'Estatutos sociales'],
        faqs: [
          { question: '¿Las traducciones de contratos tienen validez legal?', answer: 'Sí, las traducciones juradas de contratos tienen plena validez legal ante tribunales y notarías.' },
          { question: '¿Qué tipo de contratos traducís?', answer: 'Traducimos todo tipo de contratos: mercantiles, laborales, de arrendamiento, compraventa, NDAs, franquicias, joint ventures.' },
          { question: '¿Cuánto tarda la traducción de un contrato extenso?', answer: 'Un contrato estándar (5-10 páginas) se entrega en 24-48 horas. Contratos más extensos según presupuesto.' },
          { question: '¿Ofrecéis revisión de traducciones?', answer: 'Sí, ofrecemos servicios de revisión de traducciones realizadas por terceros.' },
          { question: '¿Qué diferencia hay entre traducción jurada y traducción jurídica?', answer: 'La traducción jurídica es una especialización temática (textos legales), mientras que la traducción jurada es una certificación oficial del traductor. Un contrato puede necesitar ambas: precisión jurídica y certificación oficial.' },
          { question: '¿Necesito traducción jurada para un contrato de trabajo en Alemania?', answer: 'No siempre es obligatorio, pero muchas empresas alemanas y la Agentur für Arbeit solicitan traducciones certificadas de contratos laborales españoles para trámites de Seguridad Social y permisos de trabajo.' },
          { question: '¿Traducís contratos con cláusulas técnicas especializadas?', answer: 'Sí, tengo experiencia en contratos de sectores específicos como tecnología, construcción, farmacéutica y energías renovables. La terminología técnica se traduce con precisión.' },
          { question: '¿Se puede traducir un contrato sin firmar?', answer: 'Sí, se puede traducir un borrador de contrato. Sin embargo, para trámites oficiales generalmente se requiere la traducción del contrato firmado y, en algunos casos, elevado a público ante notario.' },
        ],
      },
      de: {
        shortTitle: 'Verträge',
        badge: 'Beglaubigte Übersetzung',
        title: 'Beglaubigte Übersetzung von Verträgen',
        description: 'Beglaubigte Übersetzungen von Handelsverträgen und Arbeitsverträgen mit juristischer Präzision.',
        featuresTitle: 'Leistungsmerkmale',
        features: [
          { title: 'Juristische Präzision', description: 'Exakte Rechtsterminologie angepasst an beide Rechtssysteme.' },
          { title: 'Handelsverträge', description: 'Kaufverträge, Vertriebsverträge, Franchiseverträge und NDAs.' },
          { title: 'Arbeitsverträge', description: 'Arbeitsverträge, Tarifverträge und Wettbewerbsverbote.' },
          { title: 'Fachkundige Prüfung', description: 'Doppelte Expertenprüfung für terminologische Konsistenz.' },
        ],
        documents: ['Kaufverträge', 'Mietverträge', 'Arbeitsverträge', 'Geheimhaltungsvereinbarungen (NDA)', 'Vertriebsverträge', 'Gesellschaftsverträge'],
        faqs: [
          { question: 'Haben Vertragsübersetzungen Rechtsgültigkeit?', answer: 'Ja, beglaubigte Vertragsübersetzungen haben volle Rechtsgültigkeit vor Gerichten und Notaren.' },
          { question: 'Welche Verträge übersetzen Sie?', answer: 'Alle Arten: Handelsverträge, Arbeitsverträge, Mietverträge, NDAs, Franchiseverträge, Joint Ventures.' },
          { question: 'Wie lange dauert ein umfangreicher Vertrag?', answer: 'Ein Standardvertrag (5-10 Seiten) in 24-48 Stunden. Bei umfangreicheren Verträgen nach Angebot.' },
          { question: 'Bieten Sie Korrekturen an?', answer: 'Ja, wir bieten Überprüfungsdienste für Übersetzungen Dritter an.' },
          { question: 'Was ist der Unterschied zwischen beglaubigter und juristischer Übersetzung?', answer: 'Die juristische Übersetzung ist eine fachliche Spezialisierung (Rechtstexte), während die beglaubigte Übersetzung eine amtliche Zertifizierung ist. Ein Vertrag kann beides erfordern: juristische Präzision und amtliche Beglaubigung.' },
          { question: 'Brauche ich eine beglaubigte Übersetzung für einen spanischen Arbeitsvertrag in Deutschland?', answer: 'Nicht immer Pflicht, aber viele deutsche Arbeitgeber und die Agentur für Arbeit verlangen beglaubigte Übersetzungen spanischer Arbeitsverträge für Sozialversicherungs- und Arbeitserlaubnisanträge.' },
          { question: 'Übersetzen Sie Verträge mit technischen Fachklauseln?', answer: 'Ja, ich habe Erfahrung mit Verträgen aus Technologie, Bauwesen, Pharma und erneuerbaren Energien. Die Fachterminologie wird präzise übersetzt.' },
          { question: 'Kann ein noch nicht unterschriebener Vertrag übersetzt werden?', answer: 'Ja, Vertragsentwürfe können übersetzt werden. Für behördliche Zwecke wird jedoch meist die Übersetzung des unterschriebenen und ggf. notariell beurkundeten Vertrags benötigt.' },
        ],
      },
      fr: {
        shortTitle: 'Contrats',
        badge: 'Traduction Assermentée',
        title: 'Traduction Assermentée de Contrats',
        description: 'Traductions assermentées de contrats commerciaux et de travail avec précision juridique.',
        featuresTitle: 'Caractéristiques du Service',
        features: [
          { title: 'Précision Juridique', description: 'Terminologie juridique exacte adaptée aux deux systèmes.' },
          { title: 'Contrats Commerciaux', description: 'Vente, distribution, franchise et accords de confidentialité.' },
          { title: 'Contrats de Travail', description: 'Contrats de travail et clauses de non-concurrence.' },
          { title: 'Révision Spécialisée', description: 'Double révision pour cohérence terminologique.' },
        ],
        documents: ['Contrats de vente', 'Contrats de location', 'Contrats de travail', 'Accords de confidentialité (NDA)', 'Contrats de distribution', 'Statuts de société'],
        faqs: [
          { question: 'Les traductions de contrats ont valeur juridique?', answer: 'Oui, les traductions assermentées ont pleine valeur juridique devant les tribunaux et notaires.' },
          { question: 'Quels contrats traduisez-vous?', answer: 'Tous types: commerciaux, de travail, de location, NDAs, franchise, joint ventures.' },
          { question: 'Délai pour un contrat volumineux?', answer: 'Un contrat standard (5-10 pages) en 24-48 heures. Contrats plus longs sur devis.' },
          { question: 'Proposez-vous la révision?', answer: 'Oui, nous offrons des services de révision de traductions réalisées par des tiers.' },
          { question: 'Quelle différence entre traduction assermentée et traduction juridique?', answer: 'La traduction juridique est une spécialisation thématique (textes légaux), tandis que la traduction assermentée est une certification officielle. Un contrat peut nécessiter les deux: précision juridique et certification officielle.' },
          { question: 'Faut-il une traduction assermentée pour un contrat de travail espagnol en Allemagne?', answer: 'Pas toujours obligatoire, mais de nombreux employeurs allemands et l\'Agentur für Arbeit demandent des traductions certifiées des contrats de travail espagnols pour les démarches de sécurité sociale.' },
          { question: 'Traduisez-vous des contrats avec des clauses techniques?', answer: 'Oui, j\'ai de l\'expérience avec des contrats de technologie, construction, pharmaceutique et énergies renouvelables. La terminologie technique est traduite avec précision.' },
          { question: 'Peut-on traduire un contrat non signé?', answer: 'Oui, les projets de contrat peuvent être traduits. Cependant, pour les démarches officielles, la traduction du contrat signé est généralement requise.' },
        ],
      },
      en: {
        shortTitle: 'Contracts',
        badge: 'Certified Translation',
        title: 'Certified Contract Translation',
        description: 'Certified translations of commercial and employment contracts with legal precision.',
        featuresTitle: 'Service Features',
        features: [
          { title: 'Legal Precision', description: 'Exact legal terminology adapted to both legal systems.' },
          { title: 'Commercial Contracts', description: 'Sales, distribution, franchise, and NDAs.' },
          { title: 'Employment Contracts', description: 'Work contracts and non-compete clauses.' },
          { title: 'Expert Review', description: 'Double review for terminological consistency.' },
        ],
        documents: ['Sales contracts', 'Lease agreements', 'Employment contracts', 'Non-disclosure agreements (NDA)', 'Distribution contracts', 'Articles of incorporation'],
        faqs: [
          { question: 'Do contract translations have legal validity?', answer: 'Yes, certified contract translations have full legal validity before courts and notaries.' },
          { question: 'What contracts do you translate?', answer: 'All types: commercial, employment, lease, NDAs, franchise, joint ventures.' },
          { question: 'How long for a lengthy contract?', answer: 'A standard contract (5-10 pages) in 24-48 hours. Longer contracts quoted individually.' },
          { question: 'Do you offer review services?', answer: 'Yes, we offer review of third-party translations.' },
          { question: 'What is the difference between certified and legal translation?', answer: 'Legal translation is a thematic specialization (legal texts), while certified translation is an official certification by the translator. A contract may require both: legal precision and official certification.' },
          { question: 'Do I need a certified translation for a Spanish employment contract in Germany?', answer: 'Not always mandatory, but many German employers and the Agentur für Arbeit require certified translations of Spanish employment contracts for social security and work permit applications.' },
          { question: 'Do you translate contracts with specialized technical clauses?', answer: 'Yes, I have experience with contracts from technology, construction, pharmaceutical, and renewable energy sectors. Technical terminology is translated precisely.' },
          { question: 'Can an unsigned contract be translated?', answer: 'Yes, contract drafts can be translated. However, for official proceedings, the translation of the signed contract is usually required, sometimes notarized.' },
        ],
      },
    },
    'court-documents': {
      es: {
        shortTitle: 'Sentencias Judiciales',
        badge: 'Traducción Jurada',
        title: 'Traducción Jurada de Sentencias Judiciales',
        description: 'Traducciones juradas de sentencias, autos y resoluciones judiciales para procesos legales internacionales.',
        featuresTitle: 'Características del Servicio',
        features: [
          { title: 'Procesos Judiciales', description: 'Válida para presentar ante tribunales españoles, alemanes e internacionales.' },
          { title: 'Sentencias y Autos', description: 'Resoluciones civiles, penales, mercantiles y de familia.' },
          { title: 'Exhortos Internacionales', description: 'Comisiones rogatorias y notificaciones judiciales.' },
          { title: 'Servicio Urgente', description: 'Servicio express para plazos procesales.' },
        ],
        documents: ['Sentencias judiciales', 'Autos y providencias', 'Demandas y contestaciones', 'Escritos procesales', 'Exhortos y comisiones rogatorias', 'Actas de juicio'],
        faqs: [
          { question: '¿La traducción jurada de una sentencia es válida ante tribunales?', answer: 'Sí, tienen plena validez ante cualquier tribunal español o alemán.' },
          { question: '¿Ofrecéis servicio urgente para plazos procesales?', answer: 'Sí, disponemos de servicio express con entrega en el mismo día.' },
          { question: '¿Traducís documentos para extradición?', answer: 'Sí, realizamos traducciones para procesos de extradición y asistencia judicial internacional.' },
          { question: '¿Podéis traducir expedientes judiciales completos?', answer: 'Sí, traducimos expedientes completos con presupuesto específico.' },
          { question: '¿Cómo se ejecuta una sentencia alemana en España?', answer: 'Desde el Reglamento Bruselas I bis, las sentencias de la UE se reconocen automáticamente. Solo necesitas la traducción jurada de la sentencia y el certificado del artículo 53 para presentarla ante el tribunal español competente.' },
          { question: '¿Traducís sentencias de divorcio para inscribir en el Registro Civil?', answer: 'Sí, es uno de los documentos más solicitados. La sentencia de divorcio traducida y apostillada es necesaria para actualizar el estado civil en España tras un divorcio en Alemania.' },
          { question: '¿Qué es un exhorto internacional y cómo se traduce?', answer: 'Un exhorto o comisión rogatoria es una solicitud de asistencia judicial entre países. Traducimos estos documentos respetando el formato y terminología procesal de ambos sistemas jurídicos.' },
          { question: '¿Puedo usar la traducción para recurrir una sentencia?', answer: 'Sí, la traducción jurada tiene plena validez para adjuntarla a recursos, apelaciones y cualquier escrito procesal que requiera presentar documentos en otro idioma.' },
        ],
      },
      de: {
        shortTitle: 'Gerichtsurteile',
        badge: 'Beglaubigte Übersetzung',
        title: 'Beglaubigte Übersetzung von Gerichtsurteilen',
        description: 'Beglaubigte Übersetzungen von Urteilen und Prozessdokumenten für internationale Rechtsverfahren.',
        featuresTitle: 'Leistungsmerkmale',
        features: [
          { title: 'Gerichtsverfahren', description: 'Gültig zur Vorlage bei deutschen und spanischen Gerichten.' },
          { title: 'Urteile und Beschlüsse', description: 'Zivil-, Straf-, Handels- und Familienrecht.' },
          { title: 'Internationale Rechtshilfe', description: 'Rechtshilfeersuchen und Zustellungen.' },
          { title: 'Eilservice', description: 'Express-Service für Prozessfristen.' },
        ],
        documents: ['Gerichtsurteile', 'Beschlüsse und Verfügungen', 'Klageschriften', 'Prozessschriftsätze', 'Rechtshilfeersuchen', 'Sitzungsprotokolle'],
        faqs: [
          { question: 'Ist die beglaubigte Übersetzung vor Gericht gültig?', answer: 'Ja, volle Gültigkeit vor allen deutschen und spanischen Gerichten.' },
          { question: 'Bieten Sie Eilservice für Prozessfristen?', answer: 'Ja, Express-Service mit Lieferung am selben Tag möglich.' },
          { question: 'Übersetzen Sie Auslieferungsverfahren?', answer: 'Ja, beglaubigte Übersetzungen für alle Auslieferungsverfahren und internationale Rechtshilfe.' },
          { question: 'Können Sie vollständige Gerichtsakten übersetzen?', answer: 'Ja, mit spezifischem Angebot für umfangreiche Akten.' },
          { question: 'Wie wird ein spanisches Urteil in Deutschland vollstreckt?', answer: 'Seit der Brüssel-Ia-Verordnung werden EU-Urteile automatisch anerkannt. Sie benötigen nur die beglaubigte Übersetzung des Urteils und die Bescheinigung nach Art. 53 zur Vorlage beim zuständigen deutschen Gericht.' },
          { question: 'Übersetzen Sie Scheidungsurteile für das Standesamt?', answer: 'Ja, das ist einer der häufigsten Aufträge. Das übersetzte und apostillierte Scheidungsurteil wird benötigt, um den Personenstand in Deutschland nach einer Scheidung in Spanien zu aktualisieren.' },
          { question: 'Was ist ein Rechtshilfeersuchen und wie wird es übersetzt?', answer: 'Ein Rechtshilfeersuchen ist eine Bitte um justizielle Zusammenarbeit zwischen Ländern. Wir übersetzen diese Dokumente unter Beachtung des Formats und der Prozessterminologie beider Rechtssysteme.' },
          { question: 'Kann ich die Übersetzung für ein Rechtsmittel verwenden?', answer: 'Ja, die beglaubigte Übersetzung hat volle Gültigkeit für Rechtsmittel, Berufungen und alle Prozessschriftsätze, die Dokumente in einer anderen Sprache erfordern.' },
        ],
      },
      fr: {
        shortTitle: 'Jugements',
        badge: 'Traduction Assermentée',
        title: 'Traduction Assermentée de Jugements',
        description: 'Traductions assermentées de jugements et documents judiciaires pour procédures internationales.',
        featuresTitle: 'Caractéristiques du Service',
        features: [
          { title: 'Procédures Judiciaires', description: 'Valide devant les tribunaux espagnols et allemands.' },
          { title: 'Jugements et Ordonnances', description: 'Civil, pénal, commercial et droit de la famille.' },
          { title: 'Entraide Judiciaire', description: 'Commissions rogatoires et significations.' },
          { title: 'Service Urgent', description: 'Service express pour délais procéduraux.' },
        ],
        documents: ['Jugements', 'Ordonnances', 'Assignations', 'Écritures judiciaires', 'Commissions rogatoires', 'Procès-verbaux'],
        faqs: [
          { question: 'La traduction assermentée est valable devant les tribunaux?', answer: 'Oui, pleine validité devant tous les tribunaux espagnols et allemands.' },
          { question: 'Proposez-vous un service urgent?', answer: 'Oui, service express le jour même possible.' },
          { question: 'Traduisez-vous les procédures d\'extradition?', answer: 'Oui, traductions pour toutes procédures d\'extradition et d\'entraide judiciaire internationale.' },
          { question: 'Pouvez-vous traduire des dossiers complets?', answer: 'Oui, avec devis spécifique pour les dossiers volumineux.' },
          { question: 'Comment exécuter un jugement espagnol en Allemagne?', answer: 'Depuis le règlement Bruxelles I bis, les jugements de l\'UE sont automatiquement reconnus. Vous avez besoin de la traduction assermentée du jugement et du certificat de l\'article 53 pour le présenter au tribunal allemand compétent.' },
          { question: 'Traduisez-vous les jugements de divorce pour l\'état civil?', answer: 'Oui, c\'est l\'un des documents les plus demandés. Le jugement de divorce traduit et apostillé est nécessaire pour mettre à jour l\'état civil en Allemagne après un divorce en Espagne.' },
          { question: 'Qu\'est-ce qu\'une commission rogatoire et comment la traduire?', answer: 'Une commission rogatoire est une demande d\'entraide judiciaire entre pays. Nous traduisons ces documents en respectant le format et la terminologie procédurale des deux systèmes juridiques.' },
          { question: 'Puis-je utiliser la traduction pour un recours?', answer: 'Oui, la traduction assermentée a pleine validité pour les recours, appels et tout acte de procédure nécessitant des documents dans une autre langue.' },
        ],
      },
      en: {
        shortTitle: 'Court Judgments',
        badge: 'Certified Translation',
        title: 'Certified Court Judgment Translation',
        description: 'Certified translations of judgments and court documents for international legal proceedings.',
        featuresTitle: 'Service Features',
        features: [
          { title: 'Court Proceedings', description: 'Valid for submission to Spanish and German courts.' },
          { title: 'Judgments and Rulings', description: 'Civil, criminal, commercial, and family law.' },
          { title: 'International Legal Assistance', description: 'Letters rogatory and judicial notifications.' },
          { title: 'Rush Service', description: 'Express service for procedural deadlines.' },
        ],
        documents: ['Court judgments', 'Rulings and orders', 'Complaints', 'Legal briefs', 'Letters rogatory', 'Trial transcripts'],
        faqs: [
          { question: 'Is a certified translation valid in court?', answer: 'Yes, full validity before all Spanish and German courts.' },
          { question: 'Do you offer rush service?', answer: 'Yes, same-day express service available.' },
          { question: 'Do you translate extradition proceedings?', answer: 'Yes, certified translations for all extradition proceedings and international legal assistance.' },
          { question: 'Can you translate complete court files?', answer: 'Yes, with specific quote for extensive files.' },
          { question: 'How is a Spanish judgment enforced in Germany?', answer: 'Under the Brussels I bis Regulation, EU judgments are automatically recognized. You only need the certified translation of the judgment and the Article 53 certificate to submit to the competent German court.' },
          { question: 'Do you translate divorce judgments for civil registry?', answer: 'Yes, this is one of the most requested documents. The translated and apostilled divorce judgment is needed to update marital status in Germany after a divorce in Spain.' },
          { question: 'What is a letter rogatory and how is it translated?', answer: 'A letter rogatory is a request for judicial cooperation between countries. We translate these documents respecting the format and procedural terminology of both legal systems.' },
          { question: 'Can I use the translation for an appeal?', answer: 'Yes, the certified translation has full validity for appeals, motions, and any procedural brief requiring documents in another language.' },
        ],
      },
    },
    'notarial-documents': {
      es: {
        shortTitle: 'Documentos Notariales',
        badge: 'Traducción Jurada',
        title: 'Traducción Jurada de Documentos Notariales',
        description: 'Traducciones juradas de escrituras públicas, poderes notariales y testamentos con validez legal.',
        featuresTitle: 'Características del Servicio',
        features: [
          { title: 'Escrituras Públicas', description: 'Compraventa de inmuebles, constitución de sociedades e hipotecas.' },
          { title: 'Poderes Notariales', description: 'Poderes generales, especiales, para pleitos y preventivos.' },
          { title: 'Testamentos', description: 'Testamentos abiertos, cerrados, ológrafos y certificados de últimas voluntades.' },
          { title: 'Actas Notariales', description: 'Actas de manifestaciones, notoriedad y protocolización.' },
        ],
        documents: ['Escrituras de compraventa', 'Poderes notariales', 'Testamentos', 'Actas de manifestaciones', 'Escrituras de constitución', 'Capitulaciones matrimoniales'],
        faqs: [
          { question: '¿La traducción de una escritura pública tiene validez en Alemania?', answer: 'Sí, las traducciones juradas tienen plena validez ante notarios y autoridades alemanas.' },
          { question: '¿Traducís poderes para usar en el extranjero?', answer: 'Sí, traducimos poderes notariales para uso internacional.' },
          { question: '¿Qué documentos necesito para una herencia internacional?', answer: 'Testamento, certificado de defunción, certificado de últimas voluntades - todos apostillados y traducidos.' },
          { question: '¿Cuánto tarda traducir una escritura de compraventa?', answer: 'Una escritura estándar se traduce en 48-72 horas.' },
          { question: '¿Puedo comprar una propiedad en Alemania con documentos españoles?', answer: 'Sí, pero necesitarás la traducción jurada de tu DNI/pasaporte, estado civil, y posiblemente poderes notariales si no puedes asistir personalmente a la firma ante el Notar alemán.' },
          { question: '¿Cómo se traduce un testamento para usarlo en otro país?', answer: 'El testamento debe traducirse íntegramente con sello y firma de traductor jurado. Además, necesitarás el certificado de últimas voluntades y, en caso de España, el certificado de defunción, todos apostillados.' },
          { question: '¿Qué es una Vollmacht alemana y cuándo la necesito?', answer: 'La Vollmacht es un poder notarial alemán. Muy útil si necesitas que alguien te represente en Alemania para trámites bancarios, inmobiliarios o administrativos. Traducimos tanto poderes españoles para usar en Alemania como viceversa.' },
          { question: '¿Traducís capitulaciones matrimoniales?', answer: 'Sí, traducimos capitulaciones matrimoniales (Ehevertrag en alemán) que son fundamentales para definir el régimen económico del matrimonio, especialmente en parejas binacionales hispano-alemanas.' },
        ],
      },
      de: {
        shortTitle: 'Notarielle Dokumente',
        badge: 'Beglaubigte Übersetzung',
        title: 'Beglaubigte Übersetzung Notarieller Dokumente',
        description: 'Beglaubigte Übersetzungen von notariellen Urkunden, Vollmachten und Testamenten.',
        featuresTitle: 'Leistungsmerkmale',
        features: [
          { title: 'Notarielle Urkunden', description: 'Immobilienkaufverträge, Gesellschaftsgründungen und Hypotheken.' },
          { title: 'Vollmachten', description: 'General-, Spezial- und Prozessvollmachten.' },
          { title: 'Testamente', description: 'Öffentliche, privatschriftliche und eigenhändige Testamente.' },
          { title: 'Notarielle Protokolle', description: 'Beurkundungen und Beglaubigungen.' },
        ],
        documents: ['Kaufurkunden', 'Notarielle Vollmachten', 'Testamente', 'Eidesstattliche Erklärungen', 'Gründungsurkunden', 'Eheverträge'],
        faqs: [
          { question: 'Hat die Übersetzung einer Urkunde Gültigkeit in Spanien?', answer: 'Ja, beglaubigte Übersetzungen haben volle Gültigkeit vor spanischen Notaren und Behörden.' },
          { question: 'Übersetzen Sie Vollmachten für das Ausland?', answer: 'Ja, wir übersetzen Vollmachten für internationale Verwendung in beide Richtungen.' },
          { question: 'Welche Dokumente brauche ich für eine internationale Erbschaft?', answer: 'Testament, Sterbeurkunde, Erbschein - alle apostilliert und übersetzt. Bei spanischen Erbschaften auch das Certificado de Últimas Voluntades.' },
          { question: 'Wie lange dauert eine Kaufurkunde?', answer: 'Eine Standard-Kaufurkunde wird in 48-72 Stunden übersetzt.' },
          { question: 'Kann ich in Spanien eine Immobilie mit deutschen Dokumenten kaufen?', answer: 'Ja, aber Sie benötigen die beglaubigte Übersetzung Ihres Personalausweises/Reisepasses, Familienstandsnachweis und ggf. Vollmachten, wenn Sie nicht persönlich beim spanischen Notar erscheinen können.' },
          { question: 'Wie wird ein Testament für die Verwendung im Ausland übersetzt?', answer: 'Das Testament muss vollständig mit Stempel und Unterschrift des vereidigten Übersetzers übersetzt werden. Zusätzlich benötigen Sie das Certificado de Últimas Voluntades und die Sterbeurkunde, alle apostilliert.' },
          { question: 'Was ist ein spanischer Poder Notarial und wann brauche ich ihn?', answer: 'Der Poder Notarial ist eine spanische notarielle Vollmacht. Sehr nützlich, wenn Sie sich in Spanien für Bank-, Immobilien- oder Behördenangelegenheiten vertreten lassen möchten. Wir übersetzen sowohl deutsche Vollmachten für Spanien als auch umgekehrt.' },
          { question: 'Übersetzen Sie Eheverträge?', answer: 'Ja, wir übersetzen Eheverträge (capitulaciones matrimoniales auf Spanisch), die für die Definition des ehelichen Güterstandes wichtig sind, besonders bei deutsch-spanischen Paaren.' },
        ],
      },
      fr: {
        shortTitle: 'Actes Notariés',
        badge: 'Traduction Assermentée',
        title: 'Traduction Assermentée d\'Actes Notariés',
        description: 'Traductions assermentées d\'actes notariés, procurations et testaments.',
        featuresTitle: 'Caractéristiques du Service',
        features: [
          { title: 'Actes Authentiques', description: 'Ventes immobilières, constitutions de sociétés et hypothèques.' },
          { title: 'Procurations', description: 'Procurations générales, spéciales et pour procès.' },
          { title: 'Testaments', description: 'Testaments authentiques, mystiques et olographes.' },
          { title: 'Procès-verbaux Notariés', description: 'Actes de notoriété et de constatation.' },
        ],
        documents: ['Actes de vente', 'Procurations notariées', 'Testaments', 'Attestations', 'Actes de constitution', 'Contrats de mariage'],
        faqs: [
          { question: 'La traduction d\'un acte notarié est valable en Allemagne?', answer: 'Oui, pleine validité devant les notaires et autorités allemandes.' },
          { question: 'Traduisez-vous des procurations pour l\'étranger?', answer: 'Oui, nous traduisons des procurations pour usage international dans les deux sens.' },
          { question: 'Quels documents pour une succession internationale?', answer: 'Testament, certificat de décès, certificat de dernières volontés - tous apostillés et traduits. Pour les successions espagnoles, également le Certificado de Últimas Voluntades.' },
          { question: 'Délai pour un acte de vente?', answer: 'Un acte standard est traduit en 48-72 heures.' },
          { question: 'Puis-je acheter un bien immobilier en Allemagne avec des documents espagnols?', answer: 'Oui, mais vous aurez besoin de la traduction assermentée de votre pièce d\'identité, état civil, et éventuellement de procurations si vous ne pouvez pas assister personnellement à la signature chez le Notar allemand.' },
          { question: 'Comment traduire un testament pour l\'utiliser à l\'étranger?', answer: 'Le testament doit être traduit intégralement avec cachet et signature du traducteur assermenté. Vous aurez aussi besoin du certificat de dernières volontés et de l\'acte de décès, tous apostillés.' },
          { question: 'Qu\'est-ce qu\'une Vollmacht allemande et quand en ai-je besoin?', answer: 'La Vollmacht est une procuration notariée allemande. Très utile si vous avez besoin de vous faire représenter en Allemagne pour des démarches bancaires, immobilières ou administratives. Nous traduisons les procurations espagnoles pour l\'Allemagne et vice versa.' },
          { question: 'Traduisez-vous les contrats de mariage?', answer: 'Oui, nous traduisons les contrats de mariage (capitulaciones matrimoniales en espagnol, Ehevertrag en allemand) qui définissent le régime matrimonial, particulièrement importants pour les couples hispano-allemands.' },
        ],
      },
      en: {
        shortTitle: 'Notarial Documents',
        badge: 'Certified Translation',
        title: 'Certified Notarial Document Translation',
        description: 'Certified translations of notarial deeds, powers of attorney, and wills.',
        featuresTitle: 'Service Features',
        features: [
          { title: 'Public Deeds', description: 'Real estate sales, company formation, and mortgages.' },
          { title: 'Powers of Attorney', description: 'General, special, and litigation powers.' },
          { title: 'Wills', description: 'Open, sealed, and holographic wills.' },
          { title: 'Notarial Certificates', description: 'Affidavits and protocol records.' },
        ],
        documents: ['Sale deeds', 'Notarial powers of attorney', 'Wills', 'Sworn statements', 'Articles of incorporation', 'Prenuptial agreements'],
        faqs: [
          { question: 'Does the translation of a deed have validity in Germany?', answer: 'Yes, certified translations have full validity before German notaries and authorities.' },
          { question: 'Do you translate powers of attorney for abroad?', answer: 'Yes, we translate powers of attorney for international use in both directions.' },
          { question: 'What documents for an international inheritance?', answer: 'Will, death certificate, last will certificate - all apostilled and translated. For Spanish estates, also the Certificado de Últimas Voluntades.' },
          { question: 'How long for a sale deed?', answer: 'A standard deed is translated in 48-72 hours.' },
          { question: 'Can I buy property in Germany with Spanish documents?', answer: 'Yes, but you will need the certified translation of your ID/passport, marital status, and possibly powers of attorney if you cannot attend the signing in person at the German Notar.' },
          { question: 'How is a will translated for use abroad?', answer: 'The will must be translated in full with the sworn translator\'s stamp and signature. You will also need the certificate of last wills and the death certificate, all apostilled.' },
          { question: 'What is a Vollmacht and when do I need one?', answer: 'A Vollmacht is a German notarial power of attorney. Very useful if you need someone to represent you in Germany for banking, real estate, or administrative matters. We translate both Spanish powers of attorney for Germany and vice versa.' },
          { question: 'Do you translate prenuptial agreements?', answer: 'Yes, we translate prenuptial agreements (capitulaciones matrimoniales in Spanish, Ehevertrag in German) which define the matrimonial property regime, especially important for Spanish-German couples.' },
        ],
      },
    },
    'retirement-pension': {
      es: {
        shortTitle: 'Jubilaciones y Pensiones',
        badge: 'Traducción Jurada',
        title: 'Traducción Jurada de Documentos de Jubilación y Pensiones',
        description: 'Traducciones juradas de documentos de jubilación, pensiones y Seguridad Social con validez oficial. Para trámites ante la Seguridad Social española, Deutsche Rentenversicherung y organismos internacionales.',
        featuresTitle: 'Características del Servicio',
        features: [
          { title: 'Seguridad Social', description: 'Válida ante la Seguridad Social española y Deutsche Rentenversicherung para el reconocimiento de cotizaciones y pensiones.' },
          { title: 'Certificados de Vida', description: 'Traducción de Fe de Vida (Lebensbescheinigung) necesaria para mantener el cobro de pensiones en el extranjero.' },
          { title: 'Resoluciones de Pensión', description: 'Traducción de resoluciones, notificaciones y cálculos de pensiones de jubilación, viudedad e incapacidad.' },
          { title: 'Convenios Bilaterales', description: 'Experiencia en documentos para la totalización de períodos de cotización entre España y Alemania.' },
        ],
        documents: [
          'Resolución de pensión de jubilación',
          'Certificado de vida (Fe de Vida / Lebensbescheinigung)',
          'Vida laboral',
          'Historial de cotizaciones',
          'Resolución de pensión de viudedad',
          'Resolución de incapacidad permanente',
          'Formularios E-205 / P1',
          'Certificados de la Deutsche Rentenversicherung',
        ],
        faqs: [
          { question: '¿Necesito traducir mi resolución de pensión alemana para cobrarla en España?', answer: 'Generalmente no es necesario para el cobro directo, pero sí puede serlo para trámites fiscales (declaración de la renta) o para solicitar prestaciones complementarias en España.' },
          { question: '¿Qué es el certificado de vida y para qué sirve?', answer: 'El certificado de vida (Fe de Vida o Lebensbescheinigung) es un documento que acredita que el pensionista está vivo. Es obligatorio presentarlo periódicamente para seguir cobrando pensiones del extranjero.' },
          { question: '¿Cómo puedo sumar mis cotizaciones en España y Alemania?', answer: 'Gracias al convenio bilateral y las normas de la UE, puedes totalizar tus períodos de cotización. Cada país paga la parte proporcional de pensión según lo cotizado en su territorio.' },
          { question: '¿Traducís documentos de la Deutsche Rentenversicherung?', answer: 'Sí, traducimos todo tipo de documentos de la Deutsche Rentenversicherung: resoluciones, cálculos de pensión, certificados de cotización y correspondencia oficial.' },
          { question: '¿Cuánto tarda la traducción de una resolución de pensión?', answer: 'El plazo estándar es de 24-48 horas. Las resoluciones de pensión suelen ser documentos extensos, por lo que el precio y plazo dependerán del número de páginas.' },
          { question: '¿La traducción sirve para Hacienda?', answer: 'Sí, la traducción jurada de tus documentos de pensión extranjera es válida para presentar ante la Agencia Tributaria en tu declaración de la renta.' },
        ],
      },
      de: {
        shortTitle: 'Rente und Pension',
        badge: 'Beglaubigte Übersetzung',
        title: 'Beglaubigte Übersetzung von Renten- und Pensionsdokumenten',
        description: 'Beglaubigte Übersetzungen von Rentenbescheiden, Pensionsdokumenten und Sozialversicherungsunterlagen. Gültig bei der Deutschen Rentenversicherung und spanischen Seguridad Social.',
        featuresTitle: 'Leistungsmerkmale',
        features: [
          { title: 'Rentenversicherung', description: 'Gültig bei der Deutschen Rentenversicherung und spanischen Seguridad Social für die Anerkennung von Beitragszeiten.' },
          { title: 'Lebensbescheinigung', description: 'Übersetzung der Fe de Vida für den Bezug ausländischer Renten.' },
          { title: 'Rentenbescheide', description: 'Übersetzung von Bescheiden, Berechnungen und Mitteilungen zu Alters-, Witwen- und Erwerbsminderungsrenten.' },
          { title: 'Bilaterale Abkommen', description: 'Erfahrung mit Dokumenten zur Zusammenrechnung von Versicherungszeiten.' },
        ],
        documents: [
          'Rentenbescheid',
          'Lebensbescheinigung',
          'Versicherungsverlauf',
          'Beitragsübersicht',
          'Witwenrentenbescheid',
          'Erwerbsminderungsrentenbescheid',
          'Formulare E-205 / P1',
          'Bescheinigungen der Seguridad Social',
        ],
        faqs: [
          { question: 'Muss ich meinen spanischen Rentenbescheid übersetzen lassen?', answer: 'Für den direkten Bezug normalerweise nicht, aber für Steuerangelegenheiten oder zusätzliche Leistungen in Deutschland kann es erforderlich sein.' },
          { question: 'Was ist die Lebensbescheinigung?', answer: 'Die Lebensbescheinigung (Fe de Vida) ist ein Nachweis, dass der Rentner lebt. Sie muss regelmäßig vorgelegt werden, um weiterhin ausländische Renten zu beziehen.' },
          { question: 'Wie kann ich meine Beitragszeiten aus Spanien und Deutschland zusammenrechnen?', answer: 'Dank des bilateralen Abkommens und der EU-Vorschriften können Ihre Versicherungszeiten zusammengerechnet werden. Jedes Land zahlt den anteiligen Rentenanteil.' },
          { question: 'Übersetzen Sie Dokumente der Seguridad Social?', answer: 'Ja, wir übersetzen alle Dokumente der spanischen Seguridad Social: Bescheide, Berechnungen und offizielle Korrespondenz.' },
        ],
      },
      fr: {
        shortTitle: 'Retraite et Pension',
        badge: 'Traduction Assermentée',
        title: 'Traduction Assermentée des Documents de Retraite et Pension',
        description: 'Traductions assermentées des documents de retraite, pensions et sécurité sociale avec validité officielle.',
        featuresTitle: 'Caractéristiques du Service',
        features: [
          { title: 'Sécurité Sociale', description: 'Valide auprès des organismes de retraite espagnols et allemands.' },
          { title: 'Certificat de Vie', description: 'Traduction du certificat de vie nécessaire pour percevoir les pensions étrangères.' },
          { title: 'Décisions de Pension', description: 'Traduction des décisions et calculs de retraite, réversion et invalidité.' },
          { title: 'Conventions Bilatérales', description: 'Expérience avec les documents de totalisation des périodes de cotisation.' },
        ],
        documents: [
          'Décision de pension de retraite',
          'Certificat de vie',
          'Relevé de carrière',
          'Historique des cotisations',
          'Décision de pension de réversion',
          'Décision d\'invalidité',
          'Formulaires E-205 / P1',
        ],
        faqs: [
          { question: 'Dois-je traduire ma décision de pension allemande?', answer: 'Pour le versement direct, généralement non, mais cela peut être nécessaire pour les démarches fiscales.' },
          { question: 'Qu\'est-ce que le certificat de vie?', answer: 'C\'est un document attestant que le retraité est en vie, obligatoire pour continuer à percevoir les pensions étrangères.' },
          { question: 'Comment cumuler mes cotisations de différents pays?', answer: 'Grâce aux accords bilatéraux et aux règles de l\'UE, vos périodes peuvent être totalisées.' },
          { question: 'Combien de temps pour traduire une décision de pension?', answer: 'Le délai standard est de 24-48 heures selon le nombre de pages.' },
        ],
      },
      en: {
        shortTitle: 'Retirement & Pension',
        badge: 'Certified Translation',
        title: 'Certified Retirement & Pension Document Translation',
        description: 'Certified translations of retirement documents, pension statements, and social security records with official validity.',
        featuresTitle: 'Service Features',
        features: [
          { title: 'Social Security', description: 'Valid for Spanish Seguridad Social and German Rentenversicherung for recognition of contribution periods.' },
          { title: 'Life Certificates', description: 'Translation of life certificates required to continue receiving foreign pensions.' },
          { title: 'Pension Decisions', description: 'Translation of pension decisions, calculations, and notifications for retirement, survivor, and disability pensions.' },
          { title: 'Bilateral Agreements', description: 'Experience with documents for totalizing contribution periods between countries.' },
        ],
        documents: [
          'Retirement pension decision',
          'Life certificate (Fe de Vida / Lebensbescheinigung)',
          'Employment history',
          'Contribution record',
          'Survivor pension decision',
          'Disability pension decision',
          'Forms E-205 / P1',
          'Deutsche Rentenversicherung certificates',
        ],
        faqs: [
          { question: 'Do I need to translate my German pension decision to receive it in Spain?', answer: 'Generally not for direct payment, but it may be required for tax purposes or to apply for supplementary benefits.' },
          { question: 'What is a life certificate and what is it for?', answer: 'A life certificate proves that the pensioner is alive. It must be submitted periodically to continue receiving foreign pensions.' },
          { question: 'How can I combine my contributions from Spain and Germany?', answer: 'Thanks to bilateral agreements and EU regulations, your contribution periods can be totalized. Each country pays its proportional share.' },
          { question: 'Do you translate Deutsche Rentenversicherung documents?', answer: 'Yes, we translate all types of Deutsche Rentenversicherung documents: decisions, pension calculations, contribution certificates, and official correspondence.' },
        ],
      },
    },
  };

  // Fallback for other services
  const defaultContent = {
    shortTitle: t ? t('services') : 'Services',
    badge: t ? t('homePage.service1Title') : 'Certified Translation',
    title: t ? t('servicesPage.title') : 'Translation Services',
    description: t ? t('servicesPage.generalTranslation.description') : 'Professional translation services',
    featuresTitle: t ? t('homePage.servicesTitle') : 'Our Services',
    features: [
      { title: t ? t('homePage.service1Title') : 'Service 1', description: t ? t('homePage.service1Desc') : '' },
      { title: t ? t('homePage.service2Title') : 'Service 2', description: t ? t('homePage.service2Desc') : '' },
      { title: t ? t('homePage.service3Title') : 'Service 3', description: t ? t('homePage.service3Desc') : '' },
      { title: t ? t('homePage.statConfidential') : 'Service 4', description: '' },
    ],
    documents: null,
    faqs: null,
  };

  return contents[routeKey]?.[lang] || contents[routeKey]?.es || defaultContent;
}

export default ServiceDetailPage;
