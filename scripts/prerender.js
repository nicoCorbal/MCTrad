import puppeteer from 'puppeteer';
import { preview } from 'vite';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_DIR = path.join(__dirname, '..', 'dist');

const LANGUAGES = ['es', 'de', 'fr', 'en'];

const ROUTE_CONFIGS = [
  { slugs: { es: '', de: '', fr: '', en: '' } },
  { slugs: { es: 'servicios', de: 'dienstleistungen', fr: 'services', en: 'services' } },
  { slugs: { es: 'tarifas', de: 'preise', fr: 'tarifs', en: 'pricing' } },
  { slugs: { es: 'sobre-mi', de: 'ueber-mich', fr: 'a-propos', en: 'about' } },
  { slugs: { es: 'contacto', de: 'kontakt', fr: 'contact', en: 'contact' } },
  { slugs: { es: 'privacidad', de: 'datenschutz', fr: 'confidentialite', en: 'privacy' } },
  { slugs: { es: 'aviso-legal', de: 'impressum', fr: 'mentions-legales', en: 'legal-notice' } },
  { slugs: { es: 'traduccion-certificado-nacimiento', de: 'uebersetzung-geburtsurkunde', fr: 'traduction-acte-naissance', en: 'birth-certificate-translation' } },
  { slugs: { es: 'traduccion-certificado-matrimonio', de: 'uebersetzung-heiratsurkunde', fr: 'traduction-acte-mariage', en: 'marriage-certificate-translation' } },
  { slugs: { es: 'traduccion-titulo-universitario', de: 'uebersetzung-hochschulzeugnis', fr: 'traduction-diplome-universitaire', en: 'university-degree-translation' } },
  { slugs: { es: 'traduccion-contratos', de: 'uebersetzung-vertraege', fr: 'traduction-contrats', en: 'contract-translation' } },
  { slugs: { es: 'traduccion-sentencias-judiciales', de: 'uebersetzung-gerichtsurteile', fr: 'traduction-jugements', en: 'court-judgment-translation' } },
  { slugs: { es: 'traduccion-documentos-notariales', de: 'uebersetzung-notarielle-dokumente', fr: 'traduction-actes-notaries', en: 'notarial-document-translation' } },
];

function generate_routes() {
  const routes = [];
  for (const config of ROUTE_CONFIGS) {
    for (const lang of LANGUAGES) {
      const slug = config.slugs[lang];
      if (slug === '') {
        routes.push(`/${lang}`);
      } else {
        routes.push(`/${lang}/${slug}`);
      }
    }
  }
  return routes;
}

async function prerender() {
  console.log('Starting prerender process...');

  const server = await preview({
    preview: { port: 4173, strictPort: true },
  });

  const base_url = server.resolvedUrls.local[0].replace(/\/$/, '');

  console.log(`Preview server running at ${base_url}`);

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const routes = generate_routes();
  console.log(`Prerendering ${routes.length} routes...`);

  for (const route of routes) {
    const page = await browser.newPage();

    try {
      console.log(`  Rendering: ${route}`);
      await page.goto(`${base_url}${route}`, {
        waitUntil: 'networkidle0',
        timeout: 30000,
      });

      await page.waitForSelector('title', { timeout: 10000 });
      await new Promise(r => setTimeout(r, 2000));

      const html = await page.content();

      const file_path = path.join(DIST_DIR, route, 'index.html');
      const dir_path = path.dirname(file_path);

      await fs.mkdir(dir_path, { recursive: true });
      await fs.writeFile(file_path, html, 'utf-8');

      console.log(`    -> Saved to ${route}/index.html`);
    } catch (error) {
      console.error(`  Error rendering ${route}:`, error.message);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  await server.httpServer.close();

  console.log('Prerender completed!');
}

prerender().catch(console.error);
