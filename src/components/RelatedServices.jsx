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
 * Related Services component for internal linking
 * Displays links to other translation service pages
 *
 * @param {Object} props
 * @param {string} props.currentServiceKey - Key of the current service (to exclude)
 * @param {string} props.lang - Current language
 * @param {number} props.limit - Maximum number of related services to show
 */
function RelatedServices({ currentServiceKey, lang = 'es', limit = 3 }) {
  // Get related services (excluding current)
  const relatedServices = Object.entries(servicePages)
    .filter(([key]) => key !== currentServiceKey)
    .slice(0, limit)
    .map(([key, config]) => ({
      key,
      slug: config.slugs[lang] || config.slugs.es,
      title: config.seo[lang]?.title || config.seo.es?.title,
      description: config.seo[lang]?.description || config.seo.es?.description,
    }));

  if (relatedServices.length === 0) return null;

  const titles = {
    es: 'Otros Servicios de Traducción',
    de: 'Weitere Übersetzungsleistungen',
    fr: 'Autres Services de Traduction',
    en: 'Other Translation Services',
  };

  return (
    <motion.section
      className="py-16 md:py-20 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      <div className="max-w-5xl mx-auto px-6">
        <motion.div className="text-center mb-10" variants={fadeInUp}>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
            {titles[lang] || titles.es}
          </h2>
          <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full" />
        </motion.div>

        <motion.div className="grid md:grid-cols-3 gap-6" variants={staggerContainer}>
          {relatedServices.map((service) => (
            <motion.div
              key={service.key}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                to={`/${lang}/${service.slug}`}
                className="flex flex-col p-6 bg-white rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 h-full group"
              >
                <div className="flex-1">
                  <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {service.title?.replace(/\|.*$/, '').trim()}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
                    {service.description?.slice(0, 120)}...
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 mt-4 text-sm text-blue-600 font-medium group-hover:gap-2 transition-all">
                  {lang === 'es' ? 'Ver más' : lang === 'de' ? 'Mehr erfahren' : lang === 'fr' ? 'En savoir plus' : 'Learn more'}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Link to main services page */}
        <motion.div className="text-center mt-10" variants={fadeInUp}>
          <Link
            to={`/${lang}/${lang === 'es' ? 'servicios' : lang === 'de' ? 'dienstleistungen' : 'services'}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-blue-50 text-gray-700 hover:text-blue-600 font-medium rounded-lg transition-all"
          >
            {lang === 'es' ? 'Ver todos los servicios' : lang === 'de' ? 'Alle Leistungen anzeigen' : lang === 'fr' ? 'Voir tous les services' : 'View all services'}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default RelatedServices;
