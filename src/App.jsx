import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useParams } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import LanguageLayout from './components/LanguageLayout';
import StructuredData from './components/StructuredData';
import Analytics from './components/Analytics';
import Loader from './components/Loader';
import { pageLoaders, preparedPages } from './config/page-loaders';
import NotFoundPage from './pages/NotFoundPage';
import { routes, pageEntries, getRoutePath } from './config/routes';

const pages = Object.fromEntries(Object.entries(pageLoaders).map(([key, load]) => [key, lazy(load)]));

function PageRoute() {
  const { lang, serviceSlug = '' } = useParams();
  const page = pageEntries.find(entry => entry.lang === lang && entry.slug === serviceSlug);
  if (!page) return <NotFoundPage />;
  const key = pages[page.key] ? page.key : 'serviceDetail';
  const Component = preparedPages[key] || pages[key];
  return <Suspense fallback={<Loader />}><Component /></Suspense>;
}

export default function App() {
  return (
    <BrowserRouter>
      <StructuredData />
      <Analytics />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Navigate to="/es" replace />} />
        {Object.entries(routes).filter(([key]) => key !== 'home').map(([key, slugs]) => (
          <Route key={key} path={`/${slugs.es}`} element={<Navigate to={getRoutePath(key, 'es')} replace />} />
        ))}
        {['de', 'fr', 'en'].map(lang => (
          <Route key={lang} path={`/${lang}/tarifas`} element={<Navigate to={getRoutePath('pricing', lang)} replace />} />
        ))}
        <Route path="/:lang" element={<LanguageLayout />}>
          <Route index element={<PageRoute />} />
          <Route path=":serviceSlug" element={<PageRoute />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
