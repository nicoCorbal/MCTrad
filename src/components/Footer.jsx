import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { LocalizedLink } from './LocalizedLink';

const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }
    }
  };

  return (
    <motion.footer
      className="bg-gray-50 border-t border-gray-200"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={staggerContainer}
    >
      <div className="max-w-6xl mx-auto px-6 py-16">
        <motion.div className="grid md:grid-cols-3 gap-12" variants={staggerContainer}>

          {/* Brand */}
          <motion.div variants={fadeInUp}>
            <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
              <LocalizedLink to="/" className="inline-flex items-center gap-3">
                <img src="/apple-touch-icon.png" alt="Logo" className="w-12 h-12 rounded-full" />
                <div>
                  <span className="font-serif text-xl font-semibold text-gray-900 block">María Ángeles Capas</span>
                  <span className="text-xs text-gray-500 uppercase tracking-wider">
                    {t('common.swornTranslator')}
                  </span>
                </div>
              </LocalizedLink>
            </motion.div>
            <p className="text-gray-600 text-sm mt-4 leading-relaxed">
              {t('footer.description')}
            </p>
          </motion.div>

          {/* Links */}
          <motion.div variants={fadeInUp}>
            <p className="text-xs uppercase tracking-wider text-gray-500 mb-4 font-medium">
              {t('common.quickLinks')}
            </p>
            <nav className="space-y-2">
              {[
                { to: '/', label: t('home') },
                { to: '/servicios', label: t('services') },
                { to: '/tarifas', label: t('pricing') },
                { to: '/sobre-mi', label: t('about') },
                { to: '/contacto', label: t('contact') }
              ].map((link) => (
                <motion.div key={link.to} whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                  <LocalizedLink
                    to={link.to}
                    className="block text-gray-600 hover:text-blue-600 transition-colors text-sm"
                  >
                    {link.label}
                  </LocalizedLink>
                </motion.div>
              ))}
            </nav>
          </motion.div>

          {/* Certifications */}
          <motion.div variants={fadeInUp}>
            <p className="text-xs uppercase tracking-wider text-gray-500 mb-4 font-medium">
              {t('common.certifications')}
            </p>
            <div className="space-y-3">
              {[
                { flag: '🇪🇸', country: t('footer.spain.country'), authority: t('footer.spain.authority') },
                { flag: '🇩🇪', country: t('footer.germany.country'), authority: t('footer.germany.authority') }
              ].map((cert, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-3"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.span
                    className="text-xl"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {cert.flag}
                  </motion.span>
                  <div>
                    <p className="text-sm text-gray-900 font-medium">{cert.country}</p>
                    <p className="text-xs text-gray-500">{cert.authority}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </motion.div>

        <motion.div
          className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500"
          variants={fadeInUp}
        >
          <p>© {year} María Ángeles Capas</p>
          <div className="flex items-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <LocalizedLink to="/aviso-legal" className="hover:text-blue-600 transition-colors">
                {t('legalPage.title')}
              </LocalizedLink>
            </motion.div>
            <span className="text-gray-300">|</span>
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <LocalizedLink to="/privacidad" className="hover:text-blue-600 transition-colors">
                {t('common.privacyPolicy')}
              </LocalizedLink>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
