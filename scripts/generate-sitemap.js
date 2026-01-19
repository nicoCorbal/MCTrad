/**
 * Sitemap generator script
 * Generates sitemap.xml with all pages and their hreflang alternates
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const SITE_URL = 'https://mariaangelescapas.com';
const LANGUAGES = ['es', 'de', 'fr', 'en'];
const TODAY = new Date().toISOString().split('T')[0];

// Route configurations with priorities
const ROUTES = [
  { key: 'home', slugs: { es: '', de: '', fr: '', en: '' }, priority: '1.0', changefreq: 'monthly' },
  { key: 'services', slugs: { es: 'servicios', de: 'dienstleistungen', fr: 'services', en: 'services' }, priority: '0.9', changefreq: 'monthly' },
  { key: 'pricing', slugs: { es: 'tarifas', de: 'preise', fr: 'tarifs', en: 'pricing' }, priority: '0.8', changefreq: 'monthly' },
  { key: 'about', slugs: { es: 'sobre-mi', de: 'ueber-mich', fr: 'a-propos', en: 'about' }, priority: '0.8', changefreq: 'monthly' },
  { key: 'contact', slugs: { es: 'contacto', de: 'kontakt', fr: 'contact', en: 'contact' }, priority: '0.9', changefreq: 'monthly' },
  { key: 'privacy', slugs: { es: 'privacidad', de: 'datenschutz', fr: 'confidentialite', en: 'privacy' }, priority: '0.3', changefreq: 'yearly' },
  { key: 'legal', slugs: { es: 'aviso-legal', de: 'impressum', fr: 'mentions-legales', en: 'legal-notice' }, priority: '0.3', changefreq: 'yearly' },
  // Programmatic SEO pages
  { key: 'birth-certificate', slugs: { es: 'traduccion-certificado-nacimiento', de: 'uebersetzung-geburtsurkunde', fr: 'traduction-acte-naissance', en: 'birth-certificate-translation' }, priority: '0.8', changefreq: 'monthly' },
  { key: 'marriage-certificate', slugs: { es: 'traduccion-certificado-matrimonio', de: 'uebersetzung-heiratsurkunde', fr: 'traduction-acte-mariage', en: 'marriage-certificate-translation' }, priority: '0.8', changefreq: 'monthly' },
  { key: 'university-degree', slugs: { es: 'traduccion-titulo-universitario', de: 'uebersetzung-hochschulzeugnis', fr: 'traduction-diplome-universitaire', en: 'university-degree-translation' }, priority: '0.8', changefreq: 'monthly' },
  { key: 'contracts', slugs: { es: 'traduccion-contratos', de: 'uebersetzung-vertraege', fr: 'traduction-contrats', en: 'contract-translation' }, priority: '0.8', changefreq: 'monthly' },
  { key: 'court-documents', slugs: { es: 'traduccion-sentencias-judiciales', de: 'uebersetzung-gerichtsurteile', fr: 'traduction-jugements', en: 'court-judgment-translation' }, priority: '0.8', changefreq: 'monthly' },
  { key: 'notarial-documents', slugs: { es: 'traduccion-documentos-notariales', de: 'uebersetzung-notarielle-dokumente', fr: 'traduction-actes-notaries', en: 'notarial-document-translation' }, priority: '0.8', changefreq: 'monthly' },
  { key: 'retirement-pension', slugs: { es: 'traduccion-jubilaciones-pensiones', de: 'uebersetzung-rente-pension', fr: 'traduction-retraite-pension', en: 'retirement-pension-translation' }, priority: '0.8', changefreq: 'monthly' },
];

function get_url(lang, slug) {
  if (slug === '') {
    return `${SITE_URL}/${lang}`;
  }
  return `${SITE_URL}/${lang}/${slug}`;
}

function generate_hreflang_links(route) {
  const links = LANGUAGES.map(lang => {
    const url = get_url(lang, route.slugs[lang]);
    return `    <xhtml:link rel="alternate" hreflang="${lang}" href="${url}"/>`;
  });

  // Add x-default pointing to Spanish
  const default_url = get_url('es', route.slugs['es']);
  links.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${default_url}"/>`);

  return links.join('\n');
}

function generate_url_entry(route, lang) {
  const url = get_url(lang, route.slugs[lang]);
  const hreflang_links = generate_hreflang_links(route);

  return `  <url>
    <loc>${url}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
${hreflang_links}
  </url>`;
}

async function generate_sitemap() {
  console.log('Generating sitemap.xml...');

  const url_entries = [];

  for (const route of ROUTES) {
    for (const lang of LANGUAGES) {
      url_entries.push(generate_url_entry(route, lang));
    }
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">

${url_entries.join('\n\n')}

</urlset>
`;

  const sitemap_path = path.join(__dirname, '..', 'public', 'sitemap.xml');
  await fs.writeFile(sitemap_path, sitemap, 'utf-8');

  console.log(`Sitemap generated with ${url_entries.length} URLs`);
  console.log(`Saved to: ${sitemap_path}`);
}

generate_sitemap().catch(console.error);
