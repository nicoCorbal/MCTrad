import { useEffect } from 'react';

/**
 * Custom hook for managing document head elements (meta tags, title, etc.)
 * A lightweight alternative to react-helmet for React 19 compatibility
 *
 * @param {Object|null} config - Head configuration options (null to skip)
 * @param {string} config.title - Page title
 * @param {string} config.description - Meta description
 * @param {string} config.canonical - Canonical URL
 * @param {Object} config.openGraph - Open Graph meta tags
 * @param {Object} config.twitter - Twitter card meta tags
 * @param {Array} config.alternateLanguages - Hreflang alternate links
 * @param {string} config.lang - HTML lang attribute
 * @param {Object} config.jsonLd - JSON-LD structured data
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
    // Skip if no config provided
    if (!config) return;
    // Set document title
    if (title) {
      document.title = title;
    }

    // Set HTML lang attribute
    if (lang) {
      document.documentElement.lang = lang;
    }

    // Helper to set or create meta tag
    const setMetaTag = (name, content, property = false) => {
      if (!content) return null;

      const attr = property ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attr}="${name}"]`);

      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attr, name);
        document.head.appendChild(meta);
      }

      meta.setAttribute('content', content);
      return meta;
    };

    // Helper to set or create link tag
    const setLinkTag = (rel, href, attrs = {}) => {
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
      }

      link.setAttribute('href', href);
      return link;
    };

    // Track created elements for cleanup
    const createdElements = [];

    // Basic meta tags
    setMetaTag('description', description);
    setMetaTag('robots', robots);

    // Canonical URL
    if (canonical) {
      setLinkTag('canonical', canonical);
    }

    // Open Graph tags
    if (openGraph) {
      setMetaTag('og:title', openGraph.title || title, true);
      setMetaTag('og:description', openGraph.description || description, true);
      setMetaTag('og:url', openGraph.url || canonical, true);
      setMetaTag('og:type', openGraph.type || 'website', true);
      setMetaTag('og:locale', openGraph.locale, true);
      setMetaTag('og:site_name', openGraph.siteName, true);
      if (openGraph.image) {
        setMetaTag('og:image', openGraph.image, true);
      }
    }

    // Twitter Card tags
    if (twitter) {
      setMetaTag('twitter:card', twitter.card || 'summary_large_image');
      setMetaTag('twitter:title', twitter.title || openGraph.title || title);
      setMetaTag('twitter:description', twitter.description || openGraph.description || description);
      if (twitter.image) {
        setMetaTag('twitter:image', twitter.image);
      }
    }

    // Hreflang alternate links
    // First, remove existing hreflang links
    document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(el => el.remove());

    // Add new hreflang links
    alternateLanguages.forEach(({ lang: hreflang, url }) => {
      const link = document.createElement('link');
      link.setAttribute('rel', 'alternate');
      link.setAttribute('hreflang', hreflang);
      link.setAttribute('href', url);
      document.head.appendChild(link);
      createdElements.push(link);
    });

    // Add x-default hreflang if we have alternate languages
    if (alternateLanguages.length > 0) {
      const defaultLang = alternateLanguages.find(l => l.lang === 'es') || alternateLanguages[0];
      if (defaultLang) {
        const link = document.createElement('link');
        link.setAttribute('rel', 'alternate');
        link.setAttribute('hreflang', 'x-default');
        link.setAttribute('href', defaultLang.url);
        document.head.appendChild(link);
        createdElements.push(link);
      }
    }

    // JSON-LD structured data
    if (jsonLd) {
      const scriptId = `jsonld-${jsonLd['@type'] || 'schema'}`.toLowerCase();
      let script = document.getElementById(scriptId);

      if (!script) {
        script = document.createElement('script');
        script.id = scriptId;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
        createdElements.push(script);
      }

      script.textContent = JSON.stringify(jsonLd);
    }

    // Cleanup function
    return () => {
      createdElements.forEach(el => {
        if (el && el.parentNode) {
          el.parentNode.removeChild(el);
        }
      });
    };
  }, [config, title, description, canonical, openGraph, twitter, alternateLanguages, lang, jsonLd, robots]);
}

export default useDocumentHead;
