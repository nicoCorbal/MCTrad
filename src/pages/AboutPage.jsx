import React from 'react';
import { useTranslation } from 'react-i18next';
import { LocalizedLink } from '../components/LocalizedLink';
import { motion } from 'framer-motion';
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  slideInLeft,
  slideInRight
} from '../components/animations/MotionComponents';

function AboutPage() {
  const { t } = useTranslation();

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
              {t('aboutPage.title')}
            </motion.h1>
            <motion.p
              className="text-lg text-gray-600 leading-relaxed"
              variants={fadeInUp}
            >
              {t('aboutPage.introduction')}
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Content */}
      <motion.section
        className="py-12 md:py-20 lg:py-28"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Sidebar */}
            <motion.div
              className="lg:col-span-1"
              variants={slideInLeft}
            >
              <div className="sticky top-28 space-y-6">
                <motion.div
                  className="p-6 bg-gray-50 rounded-xl text-center"
                  whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(0,0,0,0.06)" }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full border-4 border-white shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src="/foto.jpg"
                      alt="María Ángeles Capas - Traductora Jurada"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <h3 className="font-serif text-xl font-semibold text-gray-900">
                    María Ángeles Capas
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {t('common.swornTranslator')}
                  </p>
                </motion.div>

                <motion.div
                  className="p-6 border border-gray-200 rounded-xl"
                  whileHover={{ borderColor: "rgb(156 163 175)", boxShadow: "0 4px 12px rgba(0,0,0,0.04)" }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">
                    {t('aboutPage.credentials.certification')}
                  </p>
                  <p className="font-medium text-gray-900">
                    {t('aboutPage.credentials.spainAndGermany')}
                  </p>
                </motion.div>

                <motion.div
                  className="p-6 border border-gray-200 rounded-xl"
                  whileHover={{ borderColor: "rgb(156 163 175)", boxShadow: "0 4px 12px rgba(0,0,0,0.04)" }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">
                    {t('aboutPage.credentials.specialization')}
                  </p>
                  <p className="font-medium text-gray-900">
                    {t('aboutPage.credentials.legalAndTechnical')}
                  </p>
                </motion.div>

                {/* Official Stamps */}
                <motion.div
                  className="p-6 bg-white border border-gray-200 rounded-xl"
                  whileHover={{ borderColor: "rgb(156 163 175)", boxShadow: "0 4px 12px rgba(0,0,0,0.04)" }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-4 text-center">
                    {t('aboutPage.credentials.officialStamps')}
                  </p>
                  <div className="space-y-4">
                    <motion.img
                      src="/selloespana.png"
                      alt="Sello Traductora Jurada España - Nº 11241"
                      className="w-full h-auto max-w-[220px] mx-auto"
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.2 }}
                    />
                    <motion.img
                      src="/selloalemania.png"
                      alt="Sello Traductora Jurada Alemania - OLG Köln"
                      className="w-full h-auto max-w-[160px] mx-auto"
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Main Content */}
            <motion.div
              className="lg:col-span-2 space-y-12"
              variants={staggerContainer}
            >
              {[
                { title: t('aboutPage.sections.experience'), content: t('aboutPage.paragraph1') },
                { title: t('aboutPage.sections.capabilities'), content: t('aboutPage.paragraph2') },
                { title: t('aboutPage.sections.commitment'), content: t('aboutPage.conclusion') }
              ].map((section, i) => (
                <motion.div
                  key={i}
                  variants={staggerItem}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-4">
                    {section.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {section.content}
                  </p>
                </motion.div>
              ))}
            </motion.div>

          </div>
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
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <LocalizedLink
              to="/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              {t('common.contactNow')}
              <motion.svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                whileHover={{ x: 4 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </LocalizedLink>
          </motion.div>
        </div>
      </motion.section>

    </div>
  );
}

export default AboutPage;
