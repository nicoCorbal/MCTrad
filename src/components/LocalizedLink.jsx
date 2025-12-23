import { NavLink, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { defaultLanguage } from '../i18n/i18n';
import { routes } from '../config/routes';

/**
 * Map of internal paths to route keys
 */
const pathToRouteKey = {
  '/': 'home',
  '/servicios': 'services',
  '/services': 'services',
  '/dienstleistungen': 'services',
  '/sobre-mi': 'about',
  '/about': 'about',
  '/ueber-mich': 'about',
  '/a-propos': 'about',
  '/contacto': 'contact',
  '/contact': 'contact',
  '/kontakt': 'contact',
  '/privacidad': 'privacy',
  '/privacy': 'privacy',
  '/datenschutz': 'privacy',
  '/confidentialite': 'privacy',
  '/aviso-legal': 'legal',
  '/legal-notice': 'legal',
  '/impressum': 'legal',
  '/mentions-legales': 'legal',
};

/**
 * Get localized path for a given internal path
 * @param {string} to - Internal path (e.g., '/servicios' or '/services')
 * @param {string} lang - Current language
 * @returns {string} - Localized path (e.g., '/de/dienstleistungen')
 */
const getLocalizedPath = (to, lang) => {
  // Handle root path
  if (to === '/' || to === '') {
    return `/${lang}`;
  }

  // Get route key from path
  const routeKey = pathToRouteKey[to];

  if (routeKey && routes[routeKey]) {
    const slug = routes[routeKey][lang];
    return slug ? `/${lang}/${slug}` : `/${lang}`;
  }

  // Fallback: just add language prefix
  const cleanPath = to.startsWith('/') ? to : `/${to}`;
  return `/${lang}${cleanPath}`;
};

/**
 * LocalizedNavLink - NavLink with automatic language prefix and translated paths
 * Use this for navigation links that need active state styling
 */
export const LocalizedNavLink = ({ to, children, ...props }) => {
  const { i18n } = useTranslation();
  const lang = i18n.language || defaultLanguage;
  const localizedTo = getLocalizedPath(to, lang);

  return (
    <NavLink to={localizedTo} {...props}>
      {children}
    </NavLink>
  );
};

/**
 * LocalizedLink - Link with automatic language prefix and translated paths
 * Use this for regular links without active state
 */
export const LocalizedLink = ({ to, children, ...props }) => {
  const { i18n } = useTranslation();
  const lang = i18n.language || defaultLanguage;
  const localizedTo = getLocalizedPath(to, lang);

  return (
    <Link to={localizedTo} {...props}>
      {children}
    </Link>
  );
};

export default LocalizedLink;
