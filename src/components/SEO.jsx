import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useDocumentHead } from '../hooks/useDocumentHead';
import {
  SITE_URL,
  localeConfig,
  getSeoData,
  generateAlternateLinks,
} from '../config/seo';
import { routes } from '../config/routes';
import { supportedLanguages } from '../i18n/i18n';

/**
 * SEO Component for managing page-specific meta tags
 * Automatically handles multilingual SEO with hreflang tags
 *
 * @param {Object} props
 * @param {string} props.page - Page key from seoConfig (e.g., 'home', 'services')
 * @param {Object} props.jsonLd - Optional JSON-LD structured data
 * @param {Object} props.overrides - Optional overrides for SEO values
 */
function SEO({ page, jsonLd, overrides = {} }) {
  const { lang = 'es' } = useParams();
  const currentLang = supportedLanguages.includes(lang) ? lang : 'es';

  // Build SEO configuration - hooks must be called unconditionally
  const finalSeo = useMemo(() => {
    // Get SEO data for this page and language
    const seoData = getSeoData(page, currentLang);

    if (!seoData) {
      console.warn(`SEO: No configuration found for page "${page}"`);
      return null;
    }

    // Generate canonical URL
    const slug = routes[page]?.[currentLang] || '';
    const path = slug ? `/${currentLang}/${slug}` : `/${currentLang}`;
    const canonical = `${SITE_URL}${path}`;

    // Generate alternate language links
    const alternateLanguages = generateAlternateLinks(page, routes, supportedLanguages);

    // Get locale configuration
    const locale = localeConfig[currentLang] || localeConfig.es;

    // Merge with overrides
    return {
      title: overrides.title || seoData.title,
      description: overrides.description || seoData.description,
      canonical: overrides.canonical || canonical,
      lang: currentLang,
      alternateLanguages,
      openGraph: {
        title: overrides.ogTitle || seoData.title,
        description: overrides.ogDescription || seoData.description,
        url: canonical,
        type: 'website',
        locale: locale.locale,
        siteName: locale.name,
        ...overrides.openGraph,
      },
      twitter: {
        card: 'summary_large_image',
        title: overrides.twitterTitle || seoData.title,
        description: overrides.twitterDescription || seoData.description,
        ...overrides.twitter,
      },
      jsonLd,
    };
  }, [page, currentLang, jsonLd, overrides]);

  // Call hook unconditionally (handles null internally)
  useDocumentHead(finalSeo);

  return null;
}

export default SEO;
