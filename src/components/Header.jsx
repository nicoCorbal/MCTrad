import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [mobileMenuOpen, set_mobile_menu_open] = useState(false);

  const change_language = (lng) => {
    i18n.changeLanguage(lng);
  };

  const languages = [
    { code: 'es', name: 'ES' },
    { code: 'de', name: 'DE' },
    { code: 'fr', name: 'FR' },
    { code: 'en', name: 'EN' },
  ];

  const nav_links = [
    { to: '/', label: t('home') },
    { to: '/servicios', label: t('services') },
    { to: '/sobre-mi', label: t('about') },
    { to: '/contacto', label: t('contact') },
  ];

  return (
    <header className="sticky top-0 z-50 bg-stone-50/95 backdrop-blur-sm border-b border-zinc-200">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center py-6">

          {/* Logo */}
          <NavLink
            to="/"
            className="flex flex-col group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span className="font-sans text-xs tracking-widest uppercase text-zinc-800 font-semibold transition-colors group-hover:text-blue-500">
              María Ángeles Capas
            </span>
            <span className="text-[10px] text-zinc-500 uppercase tracking-wider mt-0.5 font-medium">
              {t('common.swornTranslator')}
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {nav_links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className={({ isActive }) =>
                  `text-xs uppercase tracking-wider transition-colors font-semibold ${
                    isActive
                      ? 'text-blue-500'
                      : 'text-zinc-500 hover:text-zinc-800'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Language Selector & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            {/* Language Selector */}
            <div className="relative">
              <select
                onChange={(e) => change_language(e.target.value)}
                value={i18n.language}
                className="appearance-none bg-transparent border-b border-zinc-300 px-2 py-1 text-xs font-semibold text-zinc-700 hover:border-blue-500 focus:outline-none focus:border-blue-500 transition-colors cursor-pointer uppercase tracking-wider"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => set_mobile_menu_open(!mobileMenuOpen)}
              className="lg:hidden p-2 text-zinc-700 hover:text-blue-500 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            mobileMenuOpen ? 'max-h-96 pb-6' : 'max-h-0'
          }`}
        >
          <nav className="flex flex-col gap-4 border-t border-zinc-200 pt-6">
            {nav_links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => {
                  set_mobile_menu_open(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={({ isActive }) =>
                  `text-xs uppercase tracking-wider transition-colors font-semibold ${
                    isActive
                      ? 'text-blue-500'
                      : 'text-zinc-500 hover:text-zinc-800'
                  }`
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
