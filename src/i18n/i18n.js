import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

// Supported languages
export const supportedLanguages = ['es', 'de', 'fr', 'en'];
export const defaultLanguage = 'es';

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
  const storedLang = localStorage.getItem('i18nextLng');
  if (storedLang && supportedLanguages.includes(storedLang)) return storedLang;

  // 3. Check browser language
  const browserLang = getBrowserLanguage();
  if (browserLang) return browserLang;

  // 4. Default to Spanish
  return defaultLanguage;
};

i18n
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
