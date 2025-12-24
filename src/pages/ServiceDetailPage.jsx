import React, { useMemo } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
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

  // Find the service configuration by slug - must be called unconditionally
  const serviceConfig = useMemo(() => {
    for (const [key, config] of Object.entries(servicePages)) {
      if (config.slugs[currentLang] === serviceSlug) {
        return { key, ...config };
      }
    }
    return null;
  }, [serviceSlug, currentLang]);

  // Build SEO configuration - must be called unconditionally
  const seoConfig = useMemo(() => {
    if (!serviceConfig) return null;

    const seoData = serviceConfig.seo[currentLang] || serviceConfig.seo.es;
    const locale = localeConfig[currentLang] || localeConfig.es;

    // Generate alternate language links
    const alternateLanguages = supportedLanguages.map(lng => ({
      lang: lng,
      url: `${SITE_URL}/${lng}/${serviceConfig.slugs[lng]}`,
    }));

    // Generate Service schema for JSON-LD
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": seoData.title,
      "description": seoData.description,
      "provider": {
        "@type": "ProfessionalService",
        "name": "María Ángeles Capas - Traductora Jurada",
        "url": SITE_URL,
      },
      "areaServed": ["España", "Alemania", "Francia"],
      "availableLanguage": ["es", "de", "fr", "en"],
      "serviceType": "Translation Service",
    };

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
      jsonLd: serviceSchema,
    };
  }, [serviceConfig, currentLang, serviceSlug]);

  // Use document head for SEO - called unconditionally
  useDocumentHead(seoConfig);

  // Redirect if service not found (after all hooks)
  if (!serviceConfig) {
    return <Navigate to={`/${currentLang}`} replace />;
  }

  // Service-specific content
  const serviceContent = getServiceContent(serviceConfig.routeKey, t, currentLang);

  // Icons for features
  const featureIcons = [
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
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

      {/* Hero */}
      <motion.section
        className="pt-12 pb-16 md:pt-20 md:pb-24 bg-gradient-to-b from-gray-50 via-white to-white relative overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {/* Decorative background */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50/50 to-transparent pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div variants={staggerContainer} className="max-w-3xl">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium rounded-full mb-6"
              variants={fadeInUp}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              {serviceContent.badge}
            </motion.div>
            <motion.h1
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6 leading-tight"
              variants={fadeInUp}
            >
              {serviceContent.title}
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8"
              variants={fadeInUp}
            >
              {serviceContent.description}
            </motion.p>
            <motion.div variants={fadeInUp}>
              <LocalizedLink
                to="/contacto"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/30"
              >
                {t('homePage.requestQuote')}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </LocalizedLink>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Key Features */}
      <motion.section
        className="py-16 md:py-24 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="max-w-5xl mx-auto px-6">
          <motion.div className="text-center mb-12" variants={fadeInUp}>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              {serviceContent.featuresTitle}
            </h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full" />
          </motion.div>

          <motion.div className="grid md:grid-cols-2 gap-6 lg:gap-8" variants={staggerContainer}>
            {serviceContent.features.map((feature, i) => (
              <motion.div
                key={i}
                className="group p-6 md:p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300"
                variants={staggerItem}
                whileHover={{ y: -4 }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    {featureIcons[i % featureIcons.length]}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Trust Badges */}
      <motion.section
        className="py-12 bg-gray-50 border-y border-gray-100"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🇪🇸</span>
              <div className="text-sm">
                <p className="font-semibold text-gray-900">MAEC</p>
                <p className="text-gray-500">{currentLang === 'es' ? 'España' : currentLang === 'de' ? 'Spanien' : 'Spain'}</p>
              </div>
            </div>
            <div className="h-8 w-px bg-gray-300 hidden md:block" />
            <div className="flex items-center gap-3">
              <span className="text-3xl">🇩🇪</span>
              <div className="text-sm">
                <p className="font-semibold text-gray-900">OLG Köln</p>
                <p className="text-gray-500">{currentLang === 'es' ? 'Alemania' : currentLang === 'de' ? 'Deutschland' : 'Germany'}</p>
              </div>
            </div>
            <div className="h-8 w-px bg-gray-300 hidden md:block" />
            <div className="flex items-center gap-3">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className="text-sm">
                <p className="font-semibold text-gray-900">24-48h</p>
                <p className="text-gray-500">{currentLang === 'es' ? 'Entrega' : currentLang === 'de' ? 'Lieferung' : 'Delivery'}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section
        className="py-16 md:py-24 bg-blue-600"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="max-w-5xl mx-auto px-6">
          <motion.div className="text-center mb-12" variants={fadeInUp}>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white mb-4">
              {t('homePage.process.title')}
            </h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              {t('homePage.process.subtitle')}
            </p>
          </motion.div>

          <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-8" variants={staggerContainer}>
            {[
              { step: '01', title: t('homePage.process.step1Title'), desc: t('homePage.process.step1Desc') },
              { step: '02', title: t('homePage.process.step2Title'), desc: t('homePage.process.step2Desc') },
              { step: '03', title: t('homePage.process.step3Title'), desc: t('homePage.process.step3Desc') },
              { step: '04', title: t('homePage.process.step4Title'), desc: t('homePage.process.step4Desc') },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="text-center"
                variants={staggerItem}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-14 h-14 bg-white text-blue-600 font-bold rounded-full flex items-center justify-center mx-auto mb-4 text-lg shadow-lg">
                  {item.step}
                </div>
                <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-blue-100 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Related Services */}
      <RelatedServices currentServiceKey={serviceConfig.key} lang={currentLang} />

      {/* CTA */}
      <motion.section
        className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100"
            variants={fadeInUp}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              {t('homePage.ctaTitle')}
            </h2>
            <p className="text-gray-600 mb-8 text-lg max-w-xl mx-auto">
              {t('homePage.ctaSubtitle')}
            </p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              whileHover={{ scale: 1.02 }}
            >
              <LocalizedLink
                to="/contacto"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/25"
              >
                {t('homePage.ctaContact')}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </LocalizedLink>
              <a
                href="mailto:capaslopez@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:bg-gray-50 transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                capaslopez@gmail.com
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}

/**
 * Get service-specific content based on the service type
 * Contains translations for all 6 service types in 4 languages
 */
function getServiceContent(routeKey, t, lang) {
  const contents = {
    'birth-certificate': {
      es: {
        shortTitle: 'Certificado de Nacimiento',
        badge: 'Traducción Jurada',
        title: 'Traducción Jurada de Certificados de Nacimiento',
        description: 'Traducciones juradas de certificados y partidas de nacimiento con validez oficial para trámites en España, Alemania y otros países.',
        featuresTitle: 'Características del Servicio',
        features: [
          { title: 'Validez Legal', description: 'Reconocida por registros civiles, embajadas y administraciones públicas.' },
          { title: 'Entrega Rápida', description: 'Traducción lista en 24-48 horas. Envío digital previo.' },
          { title: 'Formato Original', description: 'Sello y firma oficial según normativa MAEC y OLG Köln.' },
          { title: 'Precio Cerrado', description: 'Presupuesto sin compromiso antes de comenzar.' },
        ],
      },
      de: {
        shortTitle: 'Geburtsurkunde',
        badge: 'Beglaubigte Übersetzung',
        title: 'Beglaubigte Übersetzung von Geburtsurkunden',
        description: 'Beglaubigte Übersetzungen von Geburtsurkunden mit amtlicher Gültigkeit für Behörden in Deutschland, Spanien und anderen Ländern.',
        featuresTitle: 'Leistungsmerkmale',
        features: [
          { title: 'Amtliche Gültigkeit', description: 'Anerkannt von Standesämtern, Botschaften und Behörden.' },
          { title: 'Schnelle Lieferung', description: 'Übersetzung in 24-48 Stunden. Vorab digitaler Versand.' },
          { title: 'Originalformat', description: 'Offizieller Stempel und Unterschrift gemäß OLG Köln.' },
          { title: 'Festpreis', description: 'Kostenvoranschlag ohne Verpflichtung.' },
        ],
      },
      fr: {
        shortTitle: 'Acte de Naissance',
        badge: 'Traduction Assermentée',
        title: 'Traduction Assermentée des Actes de Naissance',
        description: 'Traductions assermentées des actes de naissance avec validité officielle pour les démarches administratives.',
        featuresTitle: 'Caractéristiques du Service',
        features: [
          { title: 'Validité Légale', description: 'Reconnue par les mairies, ambassades et administrations.' },
          { title: 'Livraison Rapide', description: 'Traduction prête en 24-48 heures. Envoi numérique préalable.' },
          { title: 'Format Officiel', description: 'Cachet et signature officiels.' },
          { title: 'Prix Fixe', description: 'Devis sans engagement.' },
        ],
      },
      en: {
        shortTitle: 'Birth Certificate',
        badge: 'Certified Translation',
        title: 'Certified Birth Certificate Translation',
        description: 'Certified translations of birth certificates with official validity for administrative procedures in Spain, Germany, and other countries.',
        featuresTitle: 'Service Features',
        features: [
          { title: 'Legal Validity', description: 'Recognized by civil registries, embassies, and government offices.' },
          { title: 'Fast Delivery', description: 'Translation ready in 24-48 hours. Prior digital delivery.' },
          { title: 'Official Format', description: 'Official seal and signature per MAEC and OLG Cologne standards.' },
          { title: 'Fixed Price', description: 'Free quote with no obligation.' },
        ],
      },
    },
    'marriage-certificate': {
      es: {
        shortTitle: 'Certificado de Matrimonio',
        badge: 'Traducción Jurada',
        title: 'Traducción Jurada de Certificados de Matrimonio',
        description: 'Traducciones juradas de certificados de matrimonio y actas matrimoniales para registro civil y trámites legales.',
        featuresTitle: 'Características del Servicio',
        features: [
          { title: 'Registro Civil', description: 'Válida para inscripción de matrimonios extranjeros.' },
          { title: 'Trámites de Visado', description: 'Aceptada para reagrupación familiar y residencia.' },
          { title: 'Doble Acreditación', description: 'Reconocida en España y Alemania.' },
          { title: 'Confidencialidad', description: 'Tratamiento discreto de datos personales.' },
        ],
      },
      de: {
        shortTitle: 'Heiratsurkunde',
        badge: 'Beglaubigte Übersetzung',
        title: 'Beglaubigte Übersetzung von Heiratsurkunden',
        description: 'Beglaubigte Übersetzungen von Heiratsurkunden für Standesamt und rechtliche Verfahren.',
        featuresTitle: 'Leistungsmerkmale',
        features: [
          { title: 'Standesamt', description: 'Gültig für die Eintragung ausländischer Ehen.' },
          { title: 'Visumsverfahren', description: 'Akzeptiert für Familiennachzug und Aufenthalt.' },
          { title: 'Doppelzulassung', description: 'Anerkannt in Deutschland und Spanien.' },
          { title: 'Vertraulichkeit', description: 'Diskrete Behandlung persönlicher Daten.' },
        ],
      },
      fr: {
        shortTitle: 'Acte de Mariage',
        badge: 'Traduction Assermentée',
        title: 'Traduction Assermentée des Actes de Mariage',
        description: 'Traductions assermentées des actes de mariage pour les démarches administratives.',
        featuresTitle: 'Caractéristiques du Service',
        features: [
          { title: 'État Civil', description: 'Valide pour l\'inscription des mariages étrangers.' },
          { title: 'Procédures de Visa', description: 'Acceptée pour le regroupement familial.' },
          { title: 'Double Accréditation', description: 'Reconnue en France, Espagne et Allemagne.' },
          { title: 'Confidentialité', description: 'Traitement discret des données personnelles.' },
        ],
      },
      en: {
        shortTitle: 'Marriage Certificate',
        badge: 'Certified Translation',
        title: 'Certified Marriage Certificate Translation',
        description: 'Certified translations of marriage certificates for civil registry and legal procedures.',
        featuresTitle: 'Service Features',
        features: [
          { title: 'Civil Registry', description: 'Valid for registration of foreign marriages.' },
          { title: 'Visa Procedures', description: 'Accepted for family reunification and residence.' },
          { title: 'Dual Accreditation', description: 'Recognized in Spain and Germany.' },
          { title: 'Confidentiality', description: 'Discrete handling of personal data.' },
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
          { title: 'Homologación', description: 'Válida para procesos de homologación de títulos extranjeros.' },
          { title: 'Universidades', description: 'Aceptada por universidades españolas y alemanas.' },
          { title: 'Expediente Completo', description: 'Traducción de títulos, notas y suplementos europeos.' },
          { title: 'Apostilla', description: 'Asesoramiento sobre apostilla de La Haya si es necesaria.' },
        ],
      },
      de: {
        shortTitle: 'Hochschulzeugnis',
        badge: 'Beglaubigte Übersetzung',
        title: 'Beglaubigte Übersetzung von Hochschulzeugnissen',
        description: 'Beglaubigte Übersetzungen von Hochschulzeugnissen, Transcripts und Diplomurkunden für die Anerkennung in Deutschland.',
        featuresTitle: 'Leistungsmerkmale',
        features: [
          { title: 'Anerkennung', description: 'Gültig für Anerkennungsverfahren ausländischer Abschlüsse.' },
          { title: 'Universitäten', description: 'Akzeptiert von deutschen und spanischen Hochschulen.' },
          { title: 'Vollständige Unterlagen', description: 'Übersetzung von Zeugnissen, Noten und Diploma Supplement.' },
          { title: 'Apostille', description: 'Beratung zur Haager Apostille bei Bedarf.' },
        ],
      },
      fr: {
        shortTitle: 'Diplôme Universitaire',
        badge: 'Traduction Assermentée',
        title: 'Traduction Assermentée de Diplômes Universitaires',
        description: 'Traductions assermentées de diplômes universitaires et relevés de notes pour la reconnaissance des qualifications.',
        featuresTitle: 'Caractéristiques du Service',
        features: [
          { title: 'Reconnaissance', description: 'Valide pour les procédures de reconnaissance des diplômes.' },
          { title: 'Universités', description: 'Acceptée par les universités françaises, espagnoles et allemandes.' },
          { title: 'Dossier Complet', description: 'Traduction de diplômes, notes et suppléments européens.' },
          { title: 'Apostille', description: 'Conseils sur l\'apostille de La Haye si nécessaire.' },
        ],
      },
      en: {
        shortTitle: 'University Degree',
        badge: 'Certified Translation',
        title: 'Certified University Degree Translation',
        description: 'Certified translations of university degrees, academic transcripts, and certificates for credential recognition in Spain and Germany.',
        featuresTitle: 'Service Features',
        features: [
          { title: 'Recognition', description: 'Valid for foreign degree recognition procedures.' },
          { title: 'Universities', description: 'Accepted by Spanish and German universities.' },
          { title: 'Complete Records', description: 'Translation of degrees, grades, and European supplements.' },
          { title: 'Apostille', description: 'Guidance on Hague Apostille if required.' },
        ],
      },
    },
    'contracts': {
      es: {
        shortTitle: 'Contratos',
        badge: 'Traducción Jurada',
        title: 'Traducción Jurada de Contratos',
        description: 'Traducciones juradas de contratos mercantiles, laborales, de compraventa y arrendamiento con precisión jurídica para negocios internacionales.',
        featuresTitle: 'Características del Servicio',
        features: [
          { title: 'Precisión Jurídica', description: 'Terminología legal exacta en ambos ordenamientos jurídicos.' },
          { title: 'Contratos Mercantiles', description: 'Compraventa, distribución, franquicia y joint ventures.' },
          { title: 'Contratos Laborales', description: 'Contratos de trabajo, convenios y acuerdos de confidencialidad.' },
          { title: 'Revisión Incluida', description: 'Doble revisión para garantizar coherencia terminológica.' },
        ],
      },
      de: {
        shortTitle: 'Verträge',
        badge: 'Beglaubigte Übersetzung',
        title: 'Beglaubigte Übersetzung von Verträgen',
        description: 'Beglaubigte Übersetzungen von Handelsverträgen, Arbeitsverträgen, Kaufverträgen und Mietverträgen mit juristischer Präzision.',
        featuresTitle: 'Leistungsmerkmale',
        features: [
          { title: 'Juristische Präzision', description: 'Exakte Rechtsterminologie in beiden Rechtssystemen.' },
          { title: 'Handelsverträge', description: 'Kaufverträge, Vertrieb, Franchise und Joint Ventures.' },
          { title: 'Arbeitsverträge', description: 'Arbeitsverträge, Tarifverträge und Geheimhaltungsvereinbarungen.' },
          { title: 'Korrektur inklusive', description: 'Doppelte Prüfung für terminologische Konsistenz.' },
        ],
      },
      fr: {
        shortTitle: 'Contrats',
        badge: 'Traduction Assermentée',
        title: 'Traduction Assermentée de Contrats',
        description: 'Traductions assermentées de contrats commerciaux, de travail, de vente et de location avec précision juridique.',
        featuresTitle: 'Caractéristiques du Service',
        features: [
          { title: 'Précision Juridique', description: 'Terminologie juridique exacte dans les deux systèmes.' },
          { title: 'Contrats Commerciaux', description: 'Vente, distribution, franchise et joint ventures.' },
          { title: 'Contrats de Travail', description: 'Contrats de travail et accords de confidentialité.' },
          { title: 'Révision Incluse', description: 'Double révision pour cohérence terminologique.' },
        ],
      },
      en: {
        shortTitle: 'Contracts',
        badge: 'Certified Translation',
        title: 'Certified Contract Translation',
        description: 'Certified translations of commercial, employment, sales, and lease contracts with legal precision for international business.',
        featuresTitle: 'Service Features',
        features: [
          { title: 'Legal Precision', description: 'Exact legal terminology in both jurisdictions.' },
          { title: 'Commercial Contracts', description: 'Sales, distribution, franchise, and joint ventures.' },
          { title: 'Employment Contracts', description: 'Work contracts, agreements, and NDAs.' },
          { title: 'Review Included', description: 'Double review for terminological consistency.' },
        ],
      },
    },
    'court-documents': {
      es: {
        shortTitle: 'Sentencias Judiciales',
        badge: 'Traducción Jurada',
        title: 'Traducción Jurada de Sentencias Judiciales',
        description: 'Traducciones juradas de sentencias, autos, resoluciones judiciales y documentos procesales para procesos legales internacionales.',
        featuresTitle: 'Características del Servicio',
        features: [
          { title: 'Procesos Judiciales', description: 'Válida para presentar ante tribunales españoles y alemanes.' },
          { title: 'Sentencias y Autos', description: 'Resoluciones civiles, penales, mercantiles y de familia.' },
          { title: 'Exhortos', description: 'Comisiones rogatorias y notificaciones internacionales.' },
          { title: 'Urgencias', description: 'Servicio express disponible para plazos judiciales.' },
        ],
      },
      de: {
        shortTitle: 'Gerichtsurteile',
        badge: 'Beglaubigte Übersetzung',
        title: 'Beglaubigte Übersetzung von Gerichtsurteilen',
        description: 'Beglaubigte Übersetzungen von Urteilen, Beschlüssen und Prozessdokumenten für internationale Rechtsverfahren.',
        featuresTitle: 'Leistungsmerkmale',
        features: [
          { title: 'Gerichtsverfahren', description: 'Gültig zur Vorlage bei deutschen und spanischen Gerichten.' },
          { title: 'Urteile und Beschlüsse', description: 'Zivil-, Straf-, Handels- und Familienrecht.' },
          { title: 'Rechtshilfeersuchen', description: 'Internationale Rechtshilfe und Zustellungen.' },
          { title: 'Eilservice', description: 'Express-Service für gerichtliche Fristen verfügbar.' },
        ],
      },
      fr: {
        shortTitle: 'Jugements',
        badge: 'Traduction Assermentée',
        title: 'Traduction Assermentée de Jugements',
        description: 'Traductions assermentées de jugements, ordonnances et documents judiciaires pour procédures internationales.',
        featuresTitle: 'Caractéristiques du Service',
        features: [
          { title: 'Procédures Judiciaires', description: 'Valide pour présentation devant les tribunaux.' },
          { title: 'Jugements et Ordonnances', description: 'Civil, pénal, commercial et droit de la famille.' },
          { title: 'Commissions Rogatoires', description: 'Entraide judiciaire internationale.' },
          { title: 'Service Urgent', description: 'Service express disponible pour délais judiciaires.' },
        ],
      },
      en: {
        shortTitle: 'Court Judgments',
        badge: 'Certified Translation',
        title: 'Certified Court Judgment Translation',
        description: 'Certified translations of judgments, rulings, and court documents for international legal proceedings.',
        featuresTitle: 'Service Features',
        features: [
          { title: 'Court Proceedings', description: 'Valid for submission to Spanish and German courts.' },
          { title: 'Judgments and Rulings', description: 'Civil, criminal, commercial, and family law.' },
          { title: 'Letters Rogatory', description: 'International judicial assistance and service.' },
          { title: 'Rush Service', description: 'Express service available for court deadlines.' },
        ],
      },
    },
    'notarial-documents': {
      es: {
        shortTitle: 'Documentos Notariales',
        badge: 'Traducción Jurada',
        title: 'Traducción Jurada de Documentos Notariales',
        description: 'Traducciones juradas de escrituras públicas, poderes notariales, testamentos y actas notariales con validez legal.',
        featuresTitle: 'Características del Servicio',
        features: [
          { title: 'Escrituras Públicas', description: 'Compraventa de inmuebles, constitución de sociedades, hipotecas.' },
          { title: 'Poderes Notariales', description: 'Poderes generales, especiales y para pleitos.' },
          { title: 'Testamentos', description: 'Testamentos y documentos de últimas voluntades.' },
          { title: 'Actas Notariales', description: 'Actas de manifestaciones, notoriedad y protocolización.' },
        ],
      },
      de: {
        shortTitle: 'Notarielle Dokumente',
        badge: 'Beglaubigte Übersetzung',
        title: 'Beglaubigte Übersetzung Notarieller Dokumente',
        description: 'Beglaubigte Übersetzungen von notariellen Urkunden, Vollmachten, Testamenten und Protokollen mit Rechtsgültigkeit.',
        featuresTitle: 'Leistungsmerkmale',
        features: [
          { title: 'Notarielle Urkunden', description: 'Immobilienkauf, Gesellschaftsgründung, Hypotheken.' },
          { title: 'Vollmachten', description: 'General- und Spezialvollmachten, Prozessvollmachten.' },
          { title: 'Testamente', description: 'Testamente und letztwillige Verfügungen.' },
          { title: 'Notarielle Protokolle', description: 'Beurkundungen und Beglaubigungen.' },
        ],
      },
      fr: {
        shortTitle: 'Actes Notariés',
        badge: 'Traduction Assermentée',
        title: 'Traduction Assermentée d\'Actes Notariés',
        description: 'Traductions assermentées d\'actes notariés, procurations, testaments avec validité juridique.',
        featuresTitle: 'Caractéristiques du Service',
        features: [
          { title: 'Actes Authentiques', description: 'Vente immobilière, constitution de sociétés, hypothèques.' },
          { title: 'Procurations', description: 'Procurations générales, spéciales et pour procès.' },
          { title: 'Testaments', description: 'Testaments et dispositions de dernières volontés.' },
          { title: 'Procès-verbaux', description: 'Actes de notoriété et procès-verbaux notariés.' },
        ],
      },
      en: {
        shortTitle: 'Notarial Documents',
        badge: 'Certified Translation',
        title: 'Certified Notarial Document Translation',
        description: 'Certified translations of notarial deeds, powers of attorney, wills, and notarial certificates with legal validity.',
        featuresTitle: 'Service Features',
        features: [
          { title: 'Public Deeds', description: 'Real estate sales, company formation, mortgages.' },
          { title: 'Powers of Attorney', description: 'General, special, and litigation powers.' },
          { title: 'Wills', description: 'Testaments and last will documents.' },
          { title: 'Notarial Certificates', description: 'Affidavits and notarial protocols.' },
        ],
      },
    },
  };

  // Fallback for other services
  const defaultContent = {
    shortTitle: t('services'),
    badge: t('homePage.service1Title'),
    title: t('servicesPage.title'),
    description: t('servicesPage.generalTranslation.description'),
    featuresTitle: t('homePage.servicesTitle'),
    features: [
      { title: t('homePage.service1Title'), description: t('homePage.service1Desc') },
      { title: t('homePage.service2Title'), description: t('homePage.service2Desc') },
      { title: t('homePage.service3Title'), description: t('homePage.service3Desc') },
      { title: t('homePage.statConfidential'), description: '' },
    ],
  };

  return contents[routeKey]?.[lang] || contents[routeKey]?.es || defaultContent;
}

export default ServiceDetailPage;
