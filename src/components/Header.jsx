import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Logo from './Logo';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [mobileMenuOpen, set_mobile_menu_open] = useState(false);

  const change_language = (lng) => {
    i18n.changeLanguage(lng);
  };

  const languages = [
    { code: 'es', name: 'ES', flag: '🇪🇸' },
    { code: 'de', name: 'DE', flag: '🇩🇪' },
    { code: 'fr', name: 'FR', flag: '🇫🇷' },
    { code: 'en', name: 'EN', flag: '🇬🇧' },
  ];

  const nav_links = [
    { to: '/', label: t('home') },
    { to: '/servicios', label: t('services') },
    { to: '/sobre-mi', label: t('about') },
    { to: '/contacto', label: t('contact') },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm transition-all duration-300">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <NavLink to="/" className="flex flex-col group">
            <span className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-navy-500 leading-tight tracking-tight transition-colors duration-300 group-hover:text-navy-600">
              María Ángeles Capas
            </span>
            <span className="text-xs md:text-sm text-gray-600 font-medium uppercase tracking-[0.15em] mt-1 transition-colors duration-300 group-hover:text-gold-500">
              {t('common.swornTranslator')}
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10">
            {nav_links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-sm font-semibold uppercase tracking-[0.1em] transition-all duration-300 animated-underline ${
                    isActive
                      ? 'text-navy-500 after:bg-gold-400 after:w-full'
                      : 'text-gray-600 hover:text-navy-500 after:bg-navy-500'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Language Selector & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative group">
              <select
                onChange={(e) => change_language(e.target.value)}
                value={i18n.language}
                className="appearance-none bg-white border-2 border-gray-300 rounded-sm px-4 py-2 pr-9 text-sm font-semibold text-gray-700 hover:border-navy-500 hover:text-navy-500 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.name}
                  </option>
                ))}
              </select>
              <svg
                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none transition-colors duration-300 group-hover:text-navy-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => set_mobile_menu_open(!mobileMenuOpen)}
              className="lg:hidden p-2.5 text-navy-500 hover:bg-navy-50 hover:text-navy-600 rounded-sm transition-all duration-300 border-2 border-transparent hover:border-navy-200"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6 transition-transform duration-300 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            mobileMenuOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="flex flex-col space-y-2 border-t border-gray-200 pt-4">
            {nav_links.map((link, index) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => set_mobile_menu_open(false)}
                className={({ isActive }) =>
                  `px-5 py-3.5 text-sm font-semibold uppercase tracking-[0.1em] transition-all duration-300 border-l-4 ${
                    isActive
                      ? 'text-navy-500 bg-navy-50 border-gold-400'
                      : 'text-gray-600 hover:text-navy-500 hover:bg-gray-50 border-transparent hover:border-navy-300'
                  } ${mobileMenuOpen ? 'animate-fadeIn animation-delay-' + (index * 100) : ''}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
