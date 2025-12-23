import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import { supportedLanguages, defaultLanguage } from '../i18n/i18n';
import { routes, getRouteKeyFromSlug } from '../config/routes';

/**
 * Hook for localized navigation with translated URLs
 * Returns utilities for working with language-prefixed and translated URLs
 */
export const useLocalizedNavigation = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const currentLang = i18n.language || defaultLanguage;

  /**
   * Get the path for a route key in a specific language
   * @param {string} routeKey - The route key (e.g., 'services', 'about')
   * @param {string} lang - The language code
   * @returns {string} - The full path (e.g., '/de/dienstleistungen')
   */
  const getPathForRoute = (routeKey, lang) => {
    const route = routes[routeKey];
    if (!route) return `/${lang}`;

    const slug = route[lang];
    return slug ? `/${lang}/${slug}` : `/${lang}`;
  };

  /**
   * Get the current route key from the URL
   * @returns {string} - The route key (e.g., 'services', 'home')
   */
  const getCurrentRouteKey = () => {
    const pathParts = location.pathname.split('/').filter(Boolean);

    // If only language prefix, it's home
    if (pathParts.length <= 1) return 'home';

    // Get the slug (second part after language)
    const slug = pathParts[1];
    return getRouteKeyFromSlug(slug) || 'home';
  };

  /**
   * Get localized path with current language prefix
   * @param {string} routeKey - Route key (e.g., 'services', 'about')
   * @returns {string} - Path with language prefix and translated slug
   */
  const getLocalizedPath = (routeKey) => {
    return getPathForRoute(routeKey, currentLang);
  };

  /**
   * Navigate to a route with the current language prefix
   * @param {string} routeKey - Route key (e.g., 'services', 'about')
   */
  const localizedNavigate = (routeKey) => {
    navigate(getLocalizedPath(routeKey));
  };

  /**
   * Change language and navigate to the same page in the new language
   * @param {string} newLang - Language code (es, de, fr, en)
   */
  const changeLanguage = (newLang) => {
    if (!supportedLanguages.includes(newLang)) return;

    // Get current route key
    const routeKey = getCurrentRouteKey();

    // Get the path for this route in the new language
    const newPath = getPathForRoute(routeKey, newLang);

    // Change i18n language and navigate
    i18n.changeLanguage(newLang);
    navigate(newPath);
  };

  return {
    currentLang,
    getLocalizedPath,
    localizedNavigate,
    changeLanguage,
    getCurrentRouteKey,
    supportedLanguages,
  };
};

export default useLocalizedNavigation;
