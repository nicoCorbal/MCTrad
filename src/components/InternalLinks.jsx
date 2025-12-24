import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { servicePages } from '../config/seo';
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
} from './animations/MotionComponents';

/**
 * Internal Links component for SEO
 * Displays links to programmatic SEO pages for better internal linking
 *
 * @param {Object} props
 * @param {string} props.lang - Current language
 * @param {string} props.variant - Display variant ('grid' | 'list' | 'compact')
 */
function InternalLinks({ lang = 'es', variant = 'grid' }) {
  // Get all service pages
  const services = Object.entries(servicePages).map(([key, config]) => ({
    key,
    slug: config.slugs[lang] || config.slugs.es,
    title: config.seo[lang]?.title || config.seo.es?.title,
    shortTitle: getShortTitle(key, lang),
  }));

  const sectionTitles = {
    es: 'Servicios de Traducción Específicos',
    de: 'Spezifische Übersetzungsleistungen',
    fr: 'Services de Traduction Spécifiques',
    en: 'Specific Translation Services',
  };

  if (variant === 'compact') {
    return (
      <div className="flex flex-wrap gap-2">
        {services.map((service) => (
          <Link
            key={service.key}
            to={`/${lang}/${service.slug}`}
            className="px-3 py-1.5 bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-700 text-sm rounded-full transition-colors"
          >
            {service.shortTitle}
          </Link>
        ))}
      </div>
    );
  }

  if (variant === 'list') {
    return (
      <ul className="space-y-2">
        {services.map((service) => (
          <li key={service.key}>
            <Link
              to={`/${lang}/${service.slug}`}
              className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
            >
              {service.title?.replace(/\|.*$/, '').trim()}
            </Link>
          </li>
        ))}
      </ul>
    );
  }

  // Icons for each service type
  const serviceIcons = {
    'traduccion-certificado-nacimiento': (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    'traduccion-certificado-matrimonio': (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    'traduccion-titulo-universitario': (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
      </svg>
    ),
    'traduccion-contratos': (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    'traduccion-sentencias-judiciales': (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    'traduccion-documentos-notariales': (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  };

  // Default: grid variant
  return (
    <motion.section
      className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div className="text-center mb-10" variants={fadeInUp}>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
            {sectionTitles[lang] || sectionTitles.es}
          </h2>
          <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
          variants={staggerContainer}
        >
          {services.map((service) => (
            <motion.div
              key={service.key}
              variants={staggerItem}
              whileHover={{ y: -4 }}
            >
              <Link
                to={`/${lang}/${service.slug}`}
                className="flex items-center gap-3 p-4 md:p-5 bg-white rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  {serviceIcons[service.key]}
                </div>
                <span className="text-gray-800 group-hover:text-blue-600 font-medium transition-colors text-sm md:text-base">
                  {service.shortTitle}
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

/**
 * Get short title for service based on route key
 */
function getShortTitle(routeKey, lang) {
  const titles = {
    'traduccion-certificado-nacimiento': {
      es: 'Certificado Nacimiento',
      de: 'Geburtsurkunde',
      fr: 'Acte de Naissance',
      en: 'Birth Certificate',
    },
    'traduccion-certificado-matrimonio': {
      es: 'Certificado Matrimonio',
      de: 'Heiratsurkunde',
      fr: 'Acte de Mariage',
      en: 'Marriage Certificate',
    },
    'traduccion-titulo-universitario': {
      es: 'Título Universitario',
      de: 'Hochschulzeugnis',
      fr: 'Diplôme Universitaire',
      en: 'University Degree',
    },
    'traduccion-contratos': {
      es: 'Contratos',
      de: 'Verträge',
      fr: 'Contrats',
      en: 'Contracts',
    },
    'traduccion-sentencias-judiciales': {
      es: 'Sentencias Judiciales',
      de: 'Gerichtsurteile',
      fr: 'Jugements',
      en: 'Court Judgments',
    },
    'traduccion-documentos-notariales': {
      es: 'Documentos Notariales',
      de: 'Notarielle Dokumente',
      fr: 'Actes Notariés',
      en: 'Notarial Documents',
    },
  };

  return titles[routeKey]?.[lang] || titles[routeKey]?.es || routeKey;
}

export default InternalLinks;
