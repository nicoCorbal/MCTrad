import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ScrollToTop from './components/ScrollToTop';
import LanguageLayout from './components/LanguageLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import LegalPage from './pages/LegalPage';
import { supportedLanguages, defaultLanguage } from './i18n/i18n';
import { routes, getRoutePath } from './config/routes';

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
          <Route index element={<HomePage />} />

          {/* Services - all language variants */}
          <Route path="servicios" element={<ServicesPage />} />
          <Route path="dienstleistungen" element={<ServicesPage />} />
          <Route path="services" element={<ServicesPage />} />

          {/* About - all language variants */}
          <Route path="sobre-mi" element={<AboutPage />} />
          <Route path="ueber-mich" element={<AboutPage />} />
          <Route path="a-propos" element={<AboutPage />} />
          <Route path="about" element={<AboutPage />} />

          {/* Contact - all language variants */}
          <Route path="contacto" element={<ContactPage />} />
          <Route path="kontakt" element={<ContactPage />} />
          <Route path="contact" element={<ContactPage />} />

          {/* Privacy - all language variants */}
          <Route path="privacidad" element={<PrivacyPage />} />
          <Route path="datenschutz" element={<PrivacyPage />} />
          <Route path="confidentialite" element={<PrivacyPage />} />
          <Route path="privacy" element={<PrivacyPage />} />

          {/* Legal - all language variants */}
          <Route path="aviso-legal" element={<LegalPage />} />
          <Route path="impressum" element={<LegalPage />} />
          <Route path="mentions-legales" element={<LegalPage />} />
          <Route path="legal-notice" element={<LegalPage />} />
        </Route>

        {/* Catch-all redirect */}
        <Route path="*" element={<RootRedirect />} />
      </Routes>
    </Router>
  );
}

export default App;
