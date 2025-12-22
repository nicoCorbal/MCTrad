import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  fadeInUp,
  staggerContainer,
  staggerItem
} from '../components/animations/MotionComponents';

function ServicesPage() {
  const { t } = useTranslation();

  const languagePairs = [
    { from: t('homePage.german'), to: t('homePage.spanish'), bidirectional: true },
    { from: t('homePage.french'), to: t('homePage.german'), bidirectional: false },
    { from: t('homePage.english'), to: t('homePage.german'), bidirectional: false },
    { from: t('homePage.english'), to: t('homePage.spanish'), bidirectional: false },
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">

      {/* Hero */}
      <motion.section
        className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-gray-50 to-white"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.div className="max-w-2xl" variants={staggerContainer}>
            <motion.h1
              className="font-serif text-4xl md:text-5xl font-semibold text-gray-900 mb-4"
              variants={fadeInUp}
            >
              {t('servicesPage.title')}
            </motion.h1>
            <motion.p
              className="text-lg text-gray-600 leading-relaxed"
              variants={fadeInUp}
            >
              {t('servicesPage.generalTranslation.description')}
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Sworn Translation */}
      <motion.section
        className="py-20 md:py-28 bg-blue-600"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white mb-4">
              {t('servicesPage.swornTranslation.heading')}
            </h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              {t('servicesPage.swornTranslation.description')}
            </p>
          </motion.div>

          <motion.div className="grid md:grid-cols-2 gap-8" variants={staggerContainer}>
            {[
              {
                flag: '🇪🇸',
                title: t('servicesPage.swornTranslation.spain.title'),
                desc: t('servicesPage.swornTranslation.spain.description'),
                link: 'https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/TraductoresInt%C3%A9rpretes.aspx',
                linkText: t('servicesPage.swornTranslation.spain.linkText')
              },
              {
                flag: '🇩🇪',
                title: t('servicesPage.swornTranslation.germany.title'),
                desc: t('servicesPage.swornTranslation.germany.description'),
                link: 'https://www.justiz-dolmetscher.de/Recherche/de/Suchen',
                linkText: t('servicesPage.swornTranslation.germany.linkText')
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="p-8 bg-white rounded-xl"
                variants={staggerItem}
                whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start gap-4">
                  <motion.span
                    className="text-4xl"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.flag}
                  </motion.span>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {item.desc}
                    </p>
                    <motion.a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:underline inline-flex items-center gap-1"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.linkText} →
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Language Pairs */}
      <motion.section
        className="py-20 md:py-28 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              {t('homePage.languagePairsTitle')}
            </h2>
          </motion.div>

          <motion.div className="max-w-2xl mx-auto space-y-4" variants={staggerContainer}>
            {languagePairs.map((pair, i) => (
              <motion.div
                key={i}
                className="p-6 bg-white border border-gray-200 rounded-xl flex items-center justify-between"
                variants={staggerItem}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
                  borderColor: "rgb(156 163 175)"
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-4">
                  <span className="font-medium text-gray-900">{pair.from}</span>
                  <motion.svg
                    className="w-5 h-5 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.2 }}
                  >
                    {pair.bidirectional ? (
                      <path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"/>
                    ) : (
                      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                    )}
                  </motion.svg>
                  <span className="font-medium text-gray-900">{pair.to}</span>
                </div>
                <span className="text-xs text-gray-500 uppercase tracking-wide">
                  {pair.bidirectional ? t('homePage.bidirectional') : t('homePage.unidirectional')}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        className="py-20 md:py-28 bg-blue-600"
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
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
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

export default ServicesPage;
