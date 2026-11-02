import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

// Supported languages
import { supportedLanguages, defaultLanguage } from '../config/languages.js';
export { supportedLanguages, defaultLanguage } from '../config/languages.js';

// Get language from URL path
const getLanguageFromPath = () => {
  const path = window.location.pathname;
  const langMatch = path.match(/^\/(es|de|fr|en)(\/|$)/);
  return langMatch ? langMatch[1] : null;
};

// Get browser language if supported
const getBrowserLanguage = () => {
  const browserLang = navigator.language?.split('-')[0];
  return supportedLanguages.includes(browserLang) ? browserLang : null;
};

// Determine initial language
const getInitialLanguage = () => {
  // 1. Check URL path first
  const pathLang = getLanguageFromPath();
  if (pathLang) return pathLang;

  // 2. Check localStorage
  let storedLang;
  try { storedLang = localStorage.getItem('i18nextLng'); } catch { /* Storage may be unavailable. */ }
  if (storedLang && supportedLanguages.includes(storedLang)) return storedLang;

  // 3. Check browser language
  const browserLang = getBrowserLanguage();
  if (browserLang) return browserLang;

  // 4. Default to Spanish
  return defaultLanguage;
};

export const i18nReady = i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: getInitialLanguage(),
    fallbackLng: defaultLanguage,
    supportedLngs: supportedLanguages,
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
  });

export default i18n;
