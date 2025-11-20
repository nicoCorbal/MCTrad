import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const current_year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-navy-600 via-navy-700 to-navy-800 text-white mt-auto">
      {/* Separator wave */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent"></div>

      {/* Main Footer Content */}
      <div className="border-b border-navy-500/30">
        <div className="container mx-auto px-4 lg:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Brand Section */}
            <div className="animate-fadeIn">
              <h3 className="font-serif text-2xl font-bold mb-2 text-white hover:text-gold-300 transition-colors duration-300">
                María Ángeles Capas
              </h3>
              <p className="text-xs uppercase tracking-[0.15em] text-gold-300 mb-3 font-semibold">
                {t('common.swornTranslator')}
              </p>
              <p className="text-sm text-gray-300 leading-relaxed">
                {t('footer.description')}
              </p>
            </div>

            {/* Quick Links */}
            <div className="animate-fadeIn animation-delay-200">
              <h4 className="font-bold uppercase tracking-[0.15em] text-xs mb-4 text-gold-300">
                {t('common.quickLinks')}
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/"
                    className="text-sm text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-all duration-300 animated-underline after:bg-gold-400"
                  >
                    {t('home')}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/servicios"
                    className="text-sm text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-all duration-300 animated-underline after:bg-gold-400"
                  >
                    {t('services')}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/sobre-mi"
                    className="text-sm text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-all duration-300 animated-underline after:bg-gold-400"
                  >
                    {t('about')}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contacto"
                    className="text-sm text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-all duration-300 animated-underline after:bg-gold-400"
                  >
                    {t('contact')}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Certifications */}
            <div className="animate-fadeIn animation-delay-400">
              <h4 className="font-bold uppercase tracking-[0.15em] text-xs mb-4 text-gold-300">
                {t('common.certifications')}
              </h4>
              <div className="space-y-3">
                <div className="group hover:bg-white/5 p-2 -ml-2 rounded transition-all duration-300">
                  <p className="font-bold text-white mb-1 text-base group-hover:text-gold-300 transition-colors">{t('footer.spain.country')}</p>
                  <p className="text-xs text-gray-300 leading-relaxed">{t('footer.spain.authority')}</p>
                </div>
                <div className="group hover:bg-white/5 p-2 -ml-2 rounded transition-all duration-300">
                  <p className="font-bold text-white mb-1 text-base group-hover:text-gold-300 transition-colors">{t('footer.germany.country')}</p>
                  <p className="text-xs text-gray-300 leading-relaxed">{t('footer.germany.authority')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container mx-auto px-4 lg:px-8 py-5">
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-300">
          <p className="animate-fadeIn animation-delay-600 text-xs">
            &copy; {current_year} María Ángeles Capas. {t('common.allRightsReserved')}.
          </p>
          <div className="flex items-center gap-6 animate-fadeIn animation-delay-800">
            <Link
              to="/politica-de-privacidad"
              className="hover:text-white transition-all duration-300 animated-underline after:bg-gold-400 font-medium text-xs"
            >
              {t('common.privacyPolicy')}
            </Link>
            <a
              href="mailto:tu_email@example.com"
              className="hover:text-white transition-all duration-300 animated-underline after:bg-gold-400 font-medium text-xs"
            >
              {t('contact')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
