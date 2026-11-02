import fs from 'node:fs/promises';
import { allRoutes, pageEntries, getRoutePath } from '../src/config/routes.js';
import { supportedLanguages } from '../src/config/languages.js';
import { SITE_URL } from '../src/config/seo.js';

// Do not manufacture lastmod timestamps from the build date.
const entries = pageEntries.map(page => {
  const alternates = [...supportedLanguages, 'x-default'].map(lang =>
    `    <xhtml:link rel="alternate" hreflang="${lang}" href="${SITE_URL}${getRoutePath(page.key, lang === 'x-default' ? 'es' : lang)}"/>`
  );
  if (!allRoutes[page.key][page.lang] && page.key !== 'home') throw new Error(`Missing slug: ${page.key}/${page.lang}`);
  return `  <url>\n    <loc>${SITE_URL}${page.path}</loc>\n${alternates.join('\n')}\n  </url>`;
});
await fs.writeFile(new URL('../public/sitemap.xml', import.meta.url), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join('\n')}
</urlset>\n`);
console.log(`Sitemap: ${entries.length} URLs`);
