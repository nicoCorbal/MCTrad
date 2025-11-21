import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const current_year = new Date().getFullYear();

  return (
    <footer className="bg-stone-100 border-t border-zinc-200">

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 lg:px-12 py-12 md:py-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">

            {/* Brand Section */}
            <div>
              <h3 className="font-sans text-sm tracking-widest uppercase text-zinc-800 font-medium mb-2">
                María Ángeles Capas
              </h3>
              <p className="text-xs uppercase tracking-wider text-zinc-500 mb-4">
                {t('common.swornTranslator')}
              </p>
              <p className="text-sm text-zinc-500 leading-relaxed">
                {t('footer.description')}
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xs uppercase tracking-widest text-zinc-400 mb-4 font-medium">
                {t('common.quickLinks')}
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/"
                    className="text-sm text-zinc-600 hover:text-blue-900 transition-colors"
                  >
                    {t('home')}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/servicios"
                    className="text-sm text-zinc-600 hover:text-blue-900 transition-colors"
                  >
                    {t('services')}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/sobre-mi"
                    className="text-sm text-zinc-600 hover:text-blue-900 transition-colors"
                  >
                    {t('about')}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contacto"
                    className="text-sm text-zinc-600 hover:text-blue-900 transition-colors"
                  >
                    {t('contact')}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Certifications */}
            <div>
              <h4 className="text-xs uppercase tracking-widest text-zinc-400 mb-4 font-medium">
                {t('common.certifications')}
              </h4>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-zinc-800 mb-1">{t('footer.spain.country')}</p>
                  <p className="text-sm text-zinc-500 leading-relaxed">{t('footer.spain.authority')}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-zinc-800 mb-1">{t('footer.germany.country')}</p>
                  <p className="text-sm text-zinc-500 leading-relaxed">{t('footer.germany.authority')}</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-200 bg-stone-50">
        <div className="container mx-auto px-6 lg:px-12 py-4 md:py-6">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 md:gap-4 text-xs md:text-sm text-zinc-500">
            <p>
              &copy; {current_year} María Ángeles Capas
            </p>
            <div className="flex items-center gap-6">
              <Link
                to="/politica-de-privacidad"
                className="hover:text-blue-900 transition-colors"
              >
                {t('common.privacyPolicy')}
              </Link>
              <a
                href="mailto:capaslopez@gmail.com"
                className="hover:text-blue-900 transition-colors"
              >
                {t('contact')}
              </a>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
