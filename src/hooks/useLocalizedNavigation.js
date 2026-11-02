import { useLocation } from 'react-router-dom';
import { supportedLanguages, defaultLanguage } from '../config/languages';
import { getRoutePath, pageEntries } from '../config/routes';

export const useLocalizedNavigation = () => {
  const { pathname } = useLocation();
  const page = pageEntries.find(entry => entry.path === pathname.replace(/\/$/, ''));
  const pathLang = pathname.split('/')[1];
  const currentLang = supportedLanguages.includes(pathLang) ? pathLang : defaultLanguage;
  return {
    currentLang,
    supportedLanguages,
    getLocalizedPath: key => getRoutePath(key, currentLang),
    getLanguagePath: lang => getRoutePath(page?.key || 'home', lang),
    getCurrentRouteKey: () => page?.key || null,
  };
};
export default useLocalizedNavigation;
