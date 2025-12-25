/**
 * Route configuration with translated paths for each language
 * Each route has a key (internal identifier) and translated slugs per language
 */

export const routes = {
  home: {
    es: '',
    de: '',
    fr: '',
    en: '',
  },
  services: {
    es: 'servicios',
    de: 'dienstleistungen',
    fr: 'services',
    en: 'services',
  },
  about: {
    es: 'sobre-mi',
    de: 'ueber-mich',
    fr: 'a-propos',
    en: 'about',
  },
  contact: {
    es: 'contacto',
    de: 'kontakt',
    fr: 'contact',
    en: 'contact',
  },
  privacy: {
    es: 'privacidad',
    de: 'datenschutz',
    fr: 'confidentialite',
    en: 'privacy',
  },
  legal: {
    es: 'aviso-legal',
    de: 'impressum',
    fr: 'mentions-legales',
    en: 'legal-notice',
  },
  pricing: {
    es: 'tarifas',
    de: 'preise',
    fr: 'tarifs',
    en: 'pricing',
  },
};

/**
 * Get the path for a route in a specific language
 * @param {string} routeKey - The route key (e.g., 'services', 'about')
 * @param {string} lang - The language code (es, de, fr, en)
 * @returns {string} - The full path (e.g., '/de/dienstleistungen')
 */
export const getRoutePath = (routeKey, lang) => {
  const route = routes[routeKey];
  if (!route) return `/${lang}`;

  const slug = route[lang] || route.es; // Fallback to Spanish
  return slug ? `/${lang}/${slug}` : `/${lang}`;
};

/**
 * Get the route key from a path slug
 * @param {string} slug - The path slug (e.g., 'dienstleistungen')
 * @returns {string|null} - The route key or null if not found
 */
export const getRouteKeyFromSlug = (slug) => {
  if (!slug) return 'home';

  for (const [key, translations] of Object.entries(routes)) {
    for (const translatedSlug of Object.values(translations)) {
      if (translatedSlug === slug) {
        return key;
      }
    }
  }
  return null;
};

/**
 * Get all slugs for a route (for React Router)
 * @param {string} routeKey - The route key
 * @returns {string[]} - Array of all slugs for this route
 */
export const getAllSlugsForRoute = (routeKey) => {
  const route = routes[routeKey];
  if (!route) return [];
  return [...new Set(Object.values(route).filter(Boolean))];
};

/**
 * Navigation links configuration
 */
export const navLinks = [
  { key: 'home', translationKey: 'home' },
  { key: 'services', translationKey: 'services' },
  { key: 'about', translationKey: 'about' },
  { key: 'contact', translationKey: 'contact' },
];

export default routes;
