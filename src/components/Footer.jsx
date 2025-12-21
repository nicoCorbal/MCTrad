import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">

          {/* Brand */}
          <div>
            <Link to="/" className="inline-block">
              <span className="font-serif text-xl font-semibold text-gray-900">María Ángeles Capas</span>
              <span className="block text-xs text-gray-500 uppercase tracking-wider mt-1">
                {t('common.swornTranslator')}
              </span>
            </Link>
            <p className="text-gray-600 text-sm mt-4 leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-4 font-medium">
              {t('common.quickLinks')}
            </h4>
            <nav className="space-y-2">
              <Link to="/" className="block text-gray-600 hover:text-blue-600 transition-colors text-sm">
                {t('home')}
              </Link>
              <Link to="/servicios" className="block text-gray-600 hover:text-blue-600 transition-colors text-sm">
                {t('services')}
              </Link>
              <Link to="/sobre-mi" className="block text-gray-600 hover:text-blue-600 transition-colors text-sm">
                {t('about')}
              </Link>
              <Link to="/contacto" className="block text-gray-600 hover:text-blue-600 transition-colors text-sm">
                {t('contact')}
              </Link>
            </nav>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-4 font-medium">
              {t('common.certifications')}
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-xl">🇪🇸</span>
                <div>
                  <p className="text-sm text-gray-900 font-medium">{t('footer.spain.country')}</p>
                  <p className="text-xs text-gray-500">{t('footer.spain.authority')}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl">🇩🇪</span>
                <div>
                  <p className="text-sm text-gray-900 font-medium">{t('footer.germany.country')}</p>
                  <p className="text-xs text-gray-500">{t('footer.germany.authority')}</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {year} María Ángeles Capas</p>
          <Link to="/politica-de-privacidad" className="hover:text-blue-600 transition-colors">
            {t('common.privacyPolicy')}
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
