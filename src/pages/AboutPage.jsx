import React from 'react';
import { useTranslation } from 'react-i18next';
import { LocalizedLink } from '../components/LocalizedLink';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  slideInLeft,
} from '../components/animations/MotionComponents';

function AboutPage() {
  const { t } = useTranslation();

  return (
    <>
      <SEO page="about" />
      <main className="min-h-screen bg-white overflow-hidden">

      {/* Hero */}
      <motion.section
        className="pt-32 pb-12 md:pt-40 md:pb-16 bg-gradient-to-b from-gray-50 to-white"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.div className="max-w-3xl" variants={staggerContainer}>
            <motion.p
              className="text-sm font-medium text-blue-600 uppercase tracking-wider mb-3"
              variants={fadeInUp}
            >
              {t('aboutPage.subtitle')}
            </motion.p>
            <motion.h1
              className="font-serif text-4xl md:text-5xl font-semibold text-gray-900 mb-6"
              variants={fadeInUp}
            >
              {t('aboutPage.title')}
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 leading-relaxed"
              variants={fadeInUp}
            >
              {t('aboutPage.introduction')}
            </motion.p>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-6 mt-12 max-w-2xl"
            variants={staggerContainer}
          >
            {[
              { value: t('aboutPage.stats.experience'), label: t('aboutPage.stats.experienceLabel') },
              { value: t('aboutPage.stats.documents'), label: t('aboutPage.stats.documentsLabel') },
              { value: t('aboutPage.stats.rejections'), label: t('aboutPage.stats.rejectionsLabel') }
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="text-center p-4 bg-white rounded-xl border border-gray-100 shadow-sm"
                variants={staggerItem}
                whileHover={{ y: -4, boxShadow: "0 8px 30px rgba(0,0,0,0.08)" }}
                transition={{ duration: 0.2 }}
              >
                <p className="text-3xl md:text-4xl font-bold text-blue-600">{stat.value}</p>
                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
              </motion.div>
            ))}
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
              className="lg:col-span-2 space-y-10"
              variants={staggerContainer}
            >
              {[
                { title: t('aboutPage.sections.experience'), content: t('aboutPage.paragraph1') },
                { title: t('aboutPage.sections.capabilities'), content: t('aboutPage.paragraph2') },
                { title: null, content: t('aboutPage.paragraph3') },
                { title: t('aboutPage.sections.commitment'), content: t('aboutPage.conclusion') }
              ].map((section, i) => (
                <motion.div
                  key={i}
                  variants={staggerItem}
                  className={`${section.title ? 'pl-6 border-l-2 border-blue-100' : 'pl-6 border-l-2 border-gray-100'}`}
                  whileHover={{ borderColor: "rgb(59 130 246)" }}
                  transition={{ duration: 0.2 }}
                >
                  {section.title && (
                    <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-3">
                      {section.title}
                    </h2>
                  )}
                  <p className="text-gray-600 leading-relaxed">
                    {section.content}
                  </p>
                </motion.div>
              ))}

              {/* Values Section */}
              <motion.div variants={staggerItem} className="mt-12">
                <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-6">
                  {t('aboutPage.values.title')}
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {t('aboutPage.values.items', { returnObjects: true }).map((item, i) => (
                    <motion.div
                      key={i}
                      className="p-5 bg-gray-50 rounded-xl"
                      whileHover={{ scale: 1.02, backgroundColor: "rgb(239 246 255)" }}
                      transition={{ duration: 0.2 }}
                    >
                      <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
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

      </main>
    </>
  );
}

export default AboutPage;
