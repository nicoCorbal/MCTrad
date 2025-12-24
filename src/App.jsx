import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ScrollToTop from './components/ScrollToTop';
import LanguageLayout from './components/LanguageLayout';
import StructuredData from './components/StructuredData';
import Loader from './components/Loader';
import { supportedLanguages, defaultLanguage } from './i18n/i18n';
import { getRoutePath } from './config/routes';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const LegalPage = lazy(() => import('./pages/LegalPage'));
const ServiceDetailPage = lazy(() => import('./pages/ServiceDetailPage'));

// Component to handle root redirect
const RootRedirect = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language || defaultLanguage;
  const targetLang = supportedLanguages.includes(lang) ? lang : defaultLanguage;
  return <Navigate to={`/${targetLang}`} replace />;
};

// Component to handle legacy routes without language prefix
const LegacyRedirect = ({ routeKey }) => {
  const { i18n } = useTranslation();
  const lang = i18n.language || defaultLanguage;
  const targetLang = supportedLanguages.includes(lang) ? lang : defaultLanguage;
  const path = getRoutePath(routeKey, targetLang);
  return <Navigate to={path} replace />;
};


function App() {
  return (
    <Router>
      {/* Global structured data for SEO */}
      <StructuredData />
      <ScrollToTop />
      <Routes>
        {/* Root redirect to default/detected language */}
        <Route path="/" element={<RootRedirect />} />

        {/* Legacy routes redirect (Spanish slugs without language prefix) */}
        <Route path="/servicios" element={<LegacyRedirect routeKey="services" />} />
        <Route path="/sobre-mi" element={<LegacyRedirect routeKey="about" />} />
        <Route path="/contacto" element={<LegacyRedirect routeKey="contact" />} />
        <Route path="/privacidad" element={<LegacyRedirect routeKey="privacy" />} />
        <Route path="/aviso-legal" element={<LegacyRedirect routeKey="legal" />} />

        {/* Language-prefixed routes with translated slugs */}
        <Route path="/:lang" element={<LanguageLayout />}>
          {/* Home */}
          <Route
            index
            element={
              <Suspense fallback={<Loader />}>
                <HomePage />
              </Suspense>
            }
          />

          {/* Services - all language variants */}
          <Route
            path="servicios"
            element={
              <Suspense fallback={<Loader />}>
                <ServicesPage />
              </Suspense>
            }
          />
          <Route
            path="dienstleistungen"
            element={
              <Suspense fallback={<Loader />}>
                <ServicesPage />
              </Suspense>
            }
          />
          <Route
            path="services"
            element={
              <Suspense fallback={<Loader />}>
                <ServicesPage />
              </Suspense>
            }
          />

          {/* About - all language variants */}
          <Route
            path="sobre-mi"
            element={
              <Suspense fallback={<Loader />}>
                <AboutPage />
              </Suspense>
            }
          />
          <Route
            path="ueber-mich"
            element={
              <Suspense fallback={<Loader />}>
                <AboutPage />
              </Suspense>
            }
          />
          <Route
            path="a-propos"
            element={
              <Suspense fallback={<Loader />}>
                <AboutPage />
              </Suspense>
            }
          />
          <Route
            path="about"
            element={
              <Suspense fallback={<Loader />}>
                <AboutPage />
              </Suspense>
            }
          />

          {/* Contact - all language variants */}
          <Route
            path="contacto"
            element={
              <Suspense fallback={<Loader />}>
                <ContactPage />
              </Suspense>
            }
          />
          <Route
            path="kontakt"
            element={
              <Suspense fallback={<Loader />}>
                <ContactPage />
              </Suspense>
            }
          />
          <Route
            path="contact"
            element={
              <Suspense fallback={<Loader />}>
                <ContactPage />
              </Suspense>
            }
          />

          {/* Privacy - all language variants */}
          <Route
            path="privacidad"
            element={
              <Suspense fallback={<Loader />}>
                <PrivacyPage />
              </Suspense>
            }
          />
          <Route
            path="datenschutz"
            element={
              <Suspense fallback={<Loader />}>
                <PrivacyPage />
              </Suspense>
            }
          />
          <Route
            path="confidentialite"
            element={
              <Suspense fallback={<Loader />}>
                <PrivacyPage />
              </Suspense>
            }
          />
          <Route
            path="privacy"
            element={
              <Suspense fallback={<Loader />}>
                <PrivacyPage />
              </Suspense>
            }
          />

          {/* Legal - all language variants */}
          <Route
            path="aviso-legal"
            element={
              <Suspense fallback={<Loader />}>
                <LegalPage />
              </Suspense>
            }
          />
          <Route
            path="impressum"
            element={
              <Suspense fallback={<Loader />}>
                <LegalPage />
              </Suspense>
            }
          />
          <Route
            path="mentions-legales"
            element={
              <Suspense fallback={<Loader />}>
                <LegalPage />
              </Suspense>
            }
          />
          <Route
            path="legal-notice"
            element={
              <Suspense fallback={<Loader />}>
                <LegalPage />
              </Suspense>
            }
          />

          {/* Programmatic SEO pages - Service detail pages with dynamic slug */}
          <Route
            path=":serviceSlug"
            element={
              <Suspense fallback={<Loader />}>
                <ServiceDetailPage />
              </Suspense>
            }
          />
        </Route>

        {/* Catch-all redirect */}
        <Route path="*" element={<RootRedirect />} />
      </Routes>
    </Router>
  );
}

export default App;
