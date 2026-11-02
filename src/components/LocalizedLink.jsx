import { NavLink, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { defaultLanguage } from '../i18n/i18n';
import { getRouteKeyFromSlug, getRoutePath } from '../config/routes';

const getLocalizedPath = (to, lang) => {
  const key = getRouteKeyFromSlug(to.replace(/^\//, ''));
  return key ? getRoutePath(key, lang) : `/${lang}/${to.replace(/^\//, '')}`;
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
