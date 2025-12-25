import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { LocalizedLink } from '../components/LocalizedLink';
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
} from '../components/animations/MotionComponents';

// SVG Icons for the process steps
const ScanIcon = () => (
  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 12h18" />
    <path d="M8 7h8M8 17h8" />
  </svg>
);

const PaymentIcon = () => (
  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <path d="M2 10h20" />
    <path d="M6 15h4" />
  </svg>
);

const PDFIcon = () => (
  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6" />
    <path d="M9 15h6" />
    <path d="M9 11h6" />
  </svg>
);

const DeliveryIcon = () => (
  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="3" y="7" width="18" height="13" rx="2" />
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    <path d="M12 12v4" />
    <path d="M8 12l4 4 4-4" />
  </svg>
);

const MailIcon = () => (
  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

// Icons for scanning guide
const CheckIcon = ({ className = "w-5 h-5 text-green-600" }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

const XIcon = ({ className = "w-5 h-5 text-red-500" }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
);

function PricingPage() {
  const { t } = useTranslation();
  const { lang } = useParams();

  const processSteps = [
    {
      number: '1',
      icon: <ScanIcon />,
      title: t('pricingPage.process.step1.title'),
      description: t('pricingPage.process.step1.description'),
    },
    {
      number: '2',
      icon: <PaymentIcon />,
      title: t('pricingPage.process.step2.title'),
      description: t('pricingPage.process.step2.description'),
    },
    {
      number: '3',
      icon: <PDFIcon />,
      title: t('pricingPage.process.step3.title'),
      description: t('pricingPage.process.step3.description'),
    },
    {
      number: '4',
      icon: <DeliveryIcon />,
      title: t('pricingPage.process.step4.title'),
      description: t('pricingPage.process.step4.description'),
    },
    {
      number: '5',
      icon: <MailIcon />,
      title: t('pricingPage.process.step5.title'),
      description: t('pricingPage.process.step5.description'),
    },
  ];

  const pricingFactors = [
    t('pricingPage.factors.certified'),
    t('pricingPage.factors.wordCount'),
    t('pricingPage.factors.complexity'),
    t('pricingPage.factors.formatting'),
    t('pricingPage.factors.outputFormat'),
    t('pricingPage.factors.copies'),
    t('pricingPage.factors.deadline'),
    t('pricingPage.factors.shipping'),
  ];

  const scanningDos = [
    t('pricingPage.scanning.dos.pdf'),
    t('pricingPage.scanning.dos.clear'),
    t('pricingPage.scanning.dos.stamps'),
    t('pricingPage.scanning.dos.apostille'),
    t('pricingPage.scanning.dos.both'),
  ];

  const scanningDonts = [
    t('pricingPage.scanning.donts.photo'),
    t('pricingPage.scanning.donts.blurry'),
    t('pricingPage.scanning.donts.cropped'),
    t('pricingPage.scanning.donts.original'),
  ];

  return (
    <>
      <SEO page="pricing" />
      <main className="min-h-screen bg-white overflow-hidden">

        {/* Hero */}
        <motion.section
          className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-gray-50 to-white"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Decorative circles */}
          <div className="absolute top-20 right-10 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-blue-50/50 rounded-full blur-2xl pointer-events-none" />

          <div className="relative max-w-6xl mx-auto px-6">
            <motion.div className="max-w-3xl" variants={staggerContainer}>
              <motion.h1
                className="font-serif text-4xl md:text-5xl font-semibold text-gray-900 mb-4"
                variants={fadeInUp}
              >
                {t('pricingPage.title')}
              </motion.h1>
              <motion.p
                className="text-lg text-gray-600 leading-relaxed"
                variants={fadeInUp}
              >
                {t('pricingPage.subtitle')}
              </motion.p>
            </motion.div>
          </div>
        </motion.section>

        {/* Pricing Factors */}
        <motion.section
          className="py-12 md:py-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="max-w-6xl mx-auto px-6">
            <motion.h2
              className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 mb-8"
              variants={fadeInUp}
            >
              {t('pricingPage.factorsTitle')}
            </motion.h2>

            <motion.div
              className="grid md:grid-cols-2 gap-4"
              variants={staggerContainer}
            >
              {pricingFactors.map((factor, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg"
                  variants={staggerItem}
                >
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white text-sm font-medium rounded-full flex items-center justify-center">
                    {index + 1}
                  </span>
                  <p className="text-gray-700">{factor}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              className="mt-8 text-sm text-gray-500"
              variants={fadeInUp}
            >
              {t('pricingPage.jvegNote')}
            </motion.p>
          </div>
        </motion.section>

        {/* Process Infographic */}
        <motion.section
          className="py-12 md:py-20 bg-gradient-to-b from-blue-50 to-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="max-w-6xl mx-auto px-6">
            <motion.div className="text-center mb-12" variants={fadeInUp}>
              <span className="inline-block px-4 py-1.5 bg-blue-600 text-white text-sm font-medium rounded-full mb-4">
                {t('pricingPage.process.badge')}
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900">
                {t('pricingPage.process.title')}
              </h2>
              <p className="mt-2 text-gray-600">
                {t('pricingPage.process.subtitle')}
              </p>
            </motion.div>

            {/* Steps Grid */}
            <div className="grid md:grid-cols-5 gap-6 md:gap-4">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  variants={staggerItem}
                >
                  {/* Connector line (hidden on mobile and last item) */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-blue-200" />
                  )}

                  <div className="relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center h-full">
                    {/* Step number */}
                    <div className="absolute -top-3 -left-3 w-8 h-8 bg-blue-600 text-white font-bold rounded-full flex items-center justify-center text-lg shadow-lg">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="w-16 h-16 mx-auto mb-4 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                      {step.icon}
                    </div>

                    {/* Content */}
                    <h3 className="font-medium text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Scanning Guide */}
        <motion.section
          className="py-12 md:py-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="max-w-6xl mx-auto px-6">
            <motion.h2
              className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 mb-4 text-center"
              variants={fadeInUp}
            >
              {t('pricingPage.scanning.title')}
            </motion.h2>
            <motion.p
              className="text-center text-gray-600 mb-10 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              {t('pricingPage.scanning.subtitle')}
            </motion.p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Do's */}
              <motion.div
                className="bg-green-50 rounded-2xl p-6 md:p-8"
                variants={staggerItem}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                    <CheckIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-green-900 text-lg">
                    {t('pricingPage.scanning.dosTitle')}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {scanningDos.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckIcon />
                      <span className="text-green-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Don'ts */}
              <motion.div
                className="bg-red-50 rounded-2xl p-6 md:p-8"
                variants={staggerItem}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                    <XIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-red-900 text-lg">
                    {t('pricingPage.scanning.dontsTitle')}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {scanningDonts.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <XIcon />
                      <span className="text-red-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* App suggestion */}
            <motion.div
              className="mt-8 p-6 bg-gray-50 rounded-xl text-center"
              variants={fadeInUp}
            >
              <p className="text-gray-600">
                {t('pricingPage.scanning.appNote')}
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Client Types */}
        <motion.section
          className="py-12 md:py-20 bg-gray-50"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Individual Clients */}
              <motion.div
                className="bg-white rounded-2xl p-8 shadow-sm"
                variants={staggerItem}
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-semibold text-gray-900 mb-3">
                  {t('pricingPage.individuals.title')}
                </h3>
                <p className="text-gray-600 mb-4">
                  {t('pricingPage.individuals.description')}
                </p>
                <p className="text-sm text-gray-500">
                  {t('pricingPage.individuals.examples')}
                </p>
              </motion.div>

              {/* Corporate Clients */}
              <motion.div
                className="bg-white rounded-2xl p-8 shadow-sm"
                variants={staggerItem}
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16m14 0H5m14 0h2m-2 0v-4m-14 4H3m2 0v-4" />
                    <path d="M9 7h1m4 0h1m-6 4h1m4 0h1m-6 4h1m4 0h1" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-semibold text-gray-900 mb-3">
                  {t('pricingPage.corporate.title')}
                </h3>
                <p className="text-gray-600 mb-4">
                  {t('pricingPage.corporate.description')}
                </p>
                <p className="text-sm text-gray-500">
                  {t('pricingPage.corporate.examples')}
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          className="py-16 md:py-24 bg-blue-600"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.h2
              className="font-serif text-2xl md:text-3xl font-semibold text-white mb-4"
              variants={fadeInUp}
            >
              {t('pricingPage.cta.title')}
            </motion.h2>
            <motion.p
              className="text-blue-100 mb-8 max-w-xl mx-auto"
              variants={fadeInUp}
            >
              {t('pricingPage.cta.description')}
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={fadeInUp}
            >
              <a
                href="mailto:capaslopez@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {t('pricingPage.cta.email')}
              </a>
              <LocalizedLink
                to="/contacto"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
              >
                {t('pricingPage.cta.form')}
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </LocalizedLink>
            </motion.div>
          </div>
        </motion.section>

      </main>
    </>
  );
}

export default PricingPage;
