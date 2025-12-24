import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { fadeInUp, staggerContainer } from '../components/animations/MotionComponents';

function LegalPage() {
  const { t } = useTranslation();

  return (
    <>
      <SEO page="legal" />
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
            {t('legalPage.title')}
          </motion.h1>
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

          {/* Información del titular */}
          <motion.div className="mb-10" variants={fadeInUp}>
            <h2 className="font-serif text-xl font-semibold text-gray-900 mb-4">
              {t('legalPage.ownerTitle')}
            </h2>
            <div className="bg-gray-50 rounded-xl p-6 space-y-2">
              <p className="text-gray-900 font-medium">María Ángeles Capas López</p>
              <p className="text-gray-600">{t('legalPage.profession')}</p>
              <p className="text-gray-600">
                <span className="text-gray-500">Email: </span>
                <a href="mailto:capaslopez@gmail.com" className="text-blue-600 hover:underline">
                  capaslopez@gmail.com
                </a>
              </p>
            </div>
          </motion.div>

          {/* Actividad profesional */}
          <motion.div className="mb-10" variants={fadeInUp}>
            <h2 className="font-serif text-xl font-semibold text-gray-900 mb-4">
              {t('legalPage.activityTitle')}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              {t('legalPage.activityDesc')}
            </p>
          </motion.div>

          {/* Acreditaciones */}
          <motion.div className="mb-10" variants={fadeInUp}>
            <h2 className="font-serif text-xl font-semibold text-gray-900 mb-4">
              {t('legalPage.credentialsTitle')}
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 border border-gray-200 rounded-lg">
                <span className="text-2xl">🇪🇸</span>
                <div>
                  <p className="font-medium text-gray-900">{t('legalPage.spainCredential')}</p>
                  <p className="text-sm text-gray-600 mt-1">{t('legalPage.spainAuthority')}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 border border-gray-200 rounded-lg">
                <span className="text-2xl">🇩🇪</span>
                <div>
                  <p className="font-medium text-gray-900">{t('legalPage.germanyCredential')}</p>
                  <p className="text-sm text-gray-600 mt-1">{t('legalPage.germanyAuthority')}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Propiedad intelectual */}
          <motion.div className="mb-10" variants={fadeInUp}>
            <h2 className="font-serif text-xl font-semibold text-gray-900 mb-4">
              {t('legalPage.intellectualTitle')}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {t('legalPage.intellectualDesc')}
            </p>
          </motion.div>

          {/* Responsabilidad */}
          <motion.div className="mb-10" variants={fadeInUp}>
            <h2 className="font-serif text-xl font-semibold text-gray-900 mb-4">
              {t('legalPage.liabilityTitle')}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {t('legalPage.liabilityDesc')}
            </p>
          </motion.div>

          {/* Legislación aplicable */}
          <motion.div variants={fadeInUp}>
            <h2 className="font-serif text-xl font-semibold text-gray-900 mb-4">
              {t('legalPage.jurisdictionTitle')}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {t('legalPage.jurisdictionDesc')}
            </p>
          </motion.div>

        </div>
      </motion.section>
      </main>
    </>
  );
}

export default LegalPage;
