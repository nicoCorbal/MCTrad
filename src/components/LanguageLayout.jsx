import NotFoundPage from '../pages/NotFoundPage';
import { useEffect } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { supportedLanguages } from '../i18n/i18n';
import Header from './Header';
import Footer from './Footer';
import EmailButton from './EmailButton';

const LanguageLayout = () => {
  const { lang } = useParams();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (!supportedLanguages.includes(lang)) return;

    // Sync i18next with URL language
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  // Don't render until we have a valid language
  if (!supportedLanguages.includes(lang)) {
    return <NotFoundPage />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Skip link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:text-blue-600 focus:px-4 focus:py-2 focus:rounded-md focus:shadow-lg"
      >
        {i18n.t('common.skipToContent')}
      </a>

      <Header />
      <div
        id="main-content"
        data-content-lang={i18n.resolvedLanguage}
        className="flex-grow pt-14 md:pt-20"
      >
        {i18n.resolvedLanguage === lang ? <Outlet /> : null}
      </div>
      <Footer />
      <EmailButton />
    </div>
  );
};

export default LanguageLayout;
