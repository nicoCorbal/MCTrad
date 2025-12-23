import { useEffect } from 'react';
import { useParams, useNavigate, useLocation, Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { supportedLanguages, defaultLanguage } from '../i18n/i18n';
import Header from './Header';
import Footer from './Footer';
import EmailButton from './EmailButton';

const LanguageLayout = () => {
  const { lang } = useParams();
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Validate language parameter
    if (!supportedLanguages.includes(lang)) {
      // Redirect to default language with same path
      const pathWithoutLang = location.pathname.replace(/^\/(es|de|fr|en)/, '') || '';
      const newPath = `/${defaultLanguage}${pathWithoutLang}${location.search}`;
      navigate(newPath, { replace: true });
      return;
    }

    // Sync i18next with URL language
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n, navigate, location]);

  // Don't render until we have a valid language
  if (!supportedLanguages.includes(lang)) {
    return null;
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Skip link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:text-blue-600 focus:px-4 focus:py-2 focus:rounded-md focus:shadow-lg"
      >
        Ir al contenido principal
      </a>

      <Header />
      <main
        id="main-content"
        className="flex-grow pt-14 md:pt-20"
      >
        <Outlet />
      </main>
      <Footer />
      <EmailButton />
    </div>
  );
};

export default LanguageLayout;
