import i18n, { i18nReady } from '../i18n/i18n.js';
import { pageEntries } from './routes.js';

export const pageLoaders = {
  home: () => import('../pages/HomePage.jsx'),
  about: () => import('../pages/AboutPage.jsx'),
  services: () => import('../pages/ServicesPage.jsx'),
  contact: () => import('../pages/ContactPage.jsx'),
  privacy: () => import('../pages/PrivacyPage.jsx'),
  legal: () => import('../pages/LegalPage.jsx'),
  pricing: () => import('../pages/PricingPage.jsx'),
  serviceDetail: () => import('../pages/ServiceDetailPage.jsx'),
};

export const preparedPages = {};

// Keep the existing static document visible until the first React tree is ready.
// Subsequent route changes can still use React.lazy without loading every page.
export async function prepareInitialPage(pathname) {
  const path = pathname.replace(/\/$/, '') || '/es';
  const page = pageEntries.find(entry => entry.path === path);
  if (!page) { await i18nReady; return; }
  const key = pageLoaders[page.key] ? page.key : 'serviceDetail';
  const namespace = key === 'serviceDetail' ? `service-${page.key}` : 'translation';
  const [module] = await Promise.all([
    pageLoaders[key](),
    i18nReady.then(() => i18n.loadNamespaces(namespace)),
  ]);
  preparedPages[key] = module.default;
}
