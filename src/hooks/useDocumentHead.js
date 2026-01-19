import { useEffect } from 'react';

const SITE_URL = 'https://mariaangelescapas.com';
const DEFAULT_IMAGE = `${SITE_URL}/apple-touch-icon.png`;

/**
 * Custom hook for managing document head elements (meta tags, title, etc.)
 * Optimized for SEO with full Open Graph, Twitter Cards, and hreflang support
 *
 * @param {Object|null} config - Head configuration options (null to skip)
 */
export function useDocumentHead(config) {
  const {
    title,
    description,
    canonical,
    openGraph = {},
    twitter = {},
    alternateLanguages = [],
    lang,
    jsonLd,
    robots = 'index, follow',
  } = config || {};

  useEffect(() => {
    if (!config) return;

    const created_elements = [];

    // Set document title
    if (title) {
      document.title = title;
    }

    // Set HTML lang attribute
    if (lang) {
      document.documentElement.lang = lang;
    }

    // Helper to set or create meta tag
    const set_meta = (name, content, is_property = false) => {
      if (!content) return null;

      const attr = is_property ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attr}="${name}"]`);

      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attr, name);
        document.head.appendChild(meta);
        created_elements.push(meta);
      }

      meta.setAttribute('content', content);
      return meta;
    };

    // Helper to set or create link tag
    const set_link = (rel, href, attrs = {}) => {
      if (!href) return null;

      const selector = Object.entries(attrs)
        .map(([k, v]) => `[${k}="${v}"]`)
        .join('');

      let link = document.querySelector(`link[rel="${rel}"]${selector}`);

      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', rel);
        Object.entries(attrs).forEach(([k, v]) => link.setAttribute(k, v));
        document.head.appendChild(link);
        created_elements.push(link);
      }

      link.setAttribute('href', href);
      return link;
    };

    // Basic meta tags
    set_meta('description', description);
    set_meta('robots', robots);

    // Canonical URL
    if (canonical) {
      set_link('canonical', canonical);
    }

    // Open Graph tags - COMPLETE
    const og_title = openGraph.title || title;
    const og_description = openGraph.description || description;
    const og_url = openGraph.url || canonical;
    const og_image = openGraph.image || DEFAULT_IMAGE;

    set_meta('og:title', og_title, true);
    set_meta('og:description', og_description, true);
    set_meta('og:url', og_url, true);
    set_meta('og:type', openGraph.type || 'website', true);
    set_meta('og:locale', openGraph.locale, true);
    set_meta('og:site_name', openGraph.siteName, true);
    set_meta('og:image', og_image, true);
    set_meta('og:image:alt', og_title, true);

    // Twitter Card tags - COMPLETE
    set_meta('twitter:card', twitter.card || 'summary');
    set_meta('twitter:title', twitter.title || og_title);
    set_meta('twitter:description', twitter.description || og_description);
    set_meta('twitter:image', twitter.image || og_image);

    // Remove existing hreflang links before adding new ones
    document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(el => el.remove());

    // Add hreflang links for each language
    alternateLanguages.forEach(({ lang: hreflang, url }) => {
      const link = document.createElement('link');
      link.setAttribute('rel', 'alternate');
      link.setAttribute('hreflang', hreflang);
      link.setAttribute('href', url);
      document.head.appendChild(link);
      created_elements.push(link);
    });

    // Add x-default hreflang (points to Spanish as default)
    if (alternateLanguages.length > 0) {
      const default_lang = alternateLanguages.find(l => l.lang === 'es') || alternateLanguages[0];
      if (default_lang) {
        const link = document.createElement('link');
        link.setAttribute('rel', 'alternate');
        link.setAttribute('hreflang', 'x-default');
        link.setAttribute('href', default_lang.url);
        document.head.appendChild(link);
        created_elements.push(link);
      }
    }

    // JSON-LD structured data - supports single object or array
    if (jsonLd) {
      // Remove existing page-specific JSON-LD
      document.querySelectorAll('script[data-page-jsonld="true"]').forEach(el => el.remove());

      const schemas = Array.isArray(jsonLd) ? jsonLd : [jsonLd];

      schemas.forEach((schema, index) => {
        if (!schema) return;

        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-page-jsonld', 'true');
        script.textContent = JSON.stringify(schema);
        document.head.appendChild(script);
        created_elements.push(script);
      });
    }

    // Cleanup function
    return () => {
      created_elements.forEach(el => {
        if (el && el.parentNode) {
          el.parentNode.removeChild(el);
        }
      });
    };
  }, [config, title, description, canonical, openGraph, twitter, alternateLanguages, lang, jsonLd, robots]);
}

export default useDocumentHead;
