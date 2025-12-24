import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { fadeInUp, staggerContainer } from '../components/animations/MotionComponents';

function PrivacyPage() {
  const { t } = useTranslation();

  const sections = [
    { title: t('privacyPage.section1Title'), content: t('privacyPage.section1Content') },
    { title: t('privacyPage.section2Title'), content: t('privacyPage.section2Content') },
    { title: t('privacyPage.section3Title'), content: t('privacyPage.section3Content') },
    { title: t('privacyPage.section4Title'), content: t('privacyPage.section4Content') },
    { title: t('privacyPage.section5Title'), content: t('privacyPage.section5Content') },
    { title: t('privacyPage.section6Title'), content: t('privacyPage.section6Content') },
  ];

  return (
    <>
      <SEO page="privacy" />
      <main className="min-h-screen bg-white">
      {/* Header */}
      <motion.section
        className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-to-b from-gray-50 to-white"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="max-w-3xl mx-auto px-6">
          <motion.h1
            className="font-serif text-3xl md:text-4xl font-semibold text-gray-900 mb-4"
            variants={fadeInUp}
          >
            {t('privacyPage.title')}
          </motion.h1>
          <motion.p
            className="text-gray-500 text-sm"
            variants={fadeInUp}
          >
            {t('privacyPage.lastUpdated')}
          </motion.p>
        </div>
      </motion.section>

      {/* Content */}
      <motion.section
        className="py-8 md:py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-3xl mx-auto px-6">
          <motion.p
            className="text-gray-600 leading-relaxed mb-10"
            variants={fadeInUp}
          >
            {t('privacyPage.intro')}
          </motion.p>

          <div className="space-y-10">
            {sections.map((section, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
              >
                <h2 className="font-serif text-xl font-semibold text-gray-900 mb-3">
                  {i + 1}. {section.title}
                </h2>
                <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Contact for privacy */}
          <motion.div
            className="mt-12 p-6 bg-gray-50 rounded-xl border border-gray-100"
            variants={fadeInUp}
          >
            <h3 className="font-semibold text-gray-900 mb-2">
              {t('privacyPage.contactTitle')}
            </h3>
            <p className="text-gray-600 text-sm mb-3">
              {t('privacyPage.contactText')}
            </p>
            <a
              href="mailto:capaslopez@gmail.com"
              className="text-blue-600 hover:underline text-sm font-medium"
            >
              capaslopez@gmail.com
            </a>
          </motion.div>
        </div>
      </motion.section>
      </main>
    </>
  );
}

export default PrivacyPage;
