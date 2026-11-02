import { preview } from 'vite';
import fs from 'node:fs/promises';
import { launchBrowser } from './browser.js';
import { pageEntries, allRoutes, getRoutePath } from '../src/config/routes.js';
import { supportedLanguages } from '../src/config/languages.js';
import { SITE_URL, seoConfig, servicePages } from '../src/config/seo.js';

const dist = new URL('../dist/', import.meta.url);
const server = await preview({ preview: { host: '127.0.0.1', port: 4173, strictPort: true } });
let browser;
const failures = [];
const seenTitles = new Set();
try {
  browser = await launchBrowser();
  const base = server.resolvedUrls.local[0].replace(/\/$/, '');
  for (const entry of pageEntries) {
    const page = await browser.newPage();
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.setRequestInterception(true);
    page.on('request', request => {
      // A build must not send analytics events or depend on external services.
      if (request.url().startsWith(base) || request.url().startsWith('data:')) request.continue();
      else request.abort();
    });
    try {
      await page.goto(`${base}${entry.path}`, { waitUntil: 'networkidle0', timeout: 30000 });
      const expectedTitle = (seoConfig[entry.key] || Object.values(servicePages).find(s => s.routeKey === entry.key)?.seo)?.[entry.lang]?.title;
      await page.waitForFunction(({ canonical, lang, title }) =>
        document.documentElement.lang === lang &&
        document.querySelector('#main-content')?.dataset.contentLang === lang &&
        document.querySelector('link[rel="canonical"]')?.href === canonical &&
        document.title === title && document.querySelector('h1')?.textContent.trim(),
      { timeout: 15000 }, { canonical: `${SITE_URL}${entry.path}`, lang: entry.lang, title: expectedTitle });
      const expectedAlternates = Object.fromEntries([...supportedLanguages, 'x-default'].map(lang =>
        [lang, `${SITE_URL}${getRoutePath(entry.key, lang === 'x-default' ? 'es' : lang)}`]));
      const result = await page.evaluate(({ canonical, expectedAlternates }) => {
        const issues = [];
        const check = (ok, message) => { if (!ok) issues.push(message); };
        check(document.querySelectorAll('h1').length === 1, 'Expected one H1');
        check(document.querySelectorAll('main').length === 1, 'Expected one main landmark');
        check(document.querySelector('meta[name="description"]')?.content?.length > 30, 'Missing description');
        check(document.querySelector('meta[name="robots"]')?.content === 'index, follow', 'Page not indexable');
        check(document.querySelectorAll('link[rel="canonical"]').length === 1, 'Duplicate canonical');
        check(document.querySelector('meta[property="og:url"]')?.content === canonical, 'Incorrect OG URL');
        const alternates = [...document.querySelectorAll('link[hreflang]')];
        check(alternates.length === 5, 'Expected five hreflang links');
        for (const [lang, href] of Object.entries(expectedAlternates)) {
          check(alternates.some(link => link.hreflang === lang && link.href === href), `Incorrect hreflang ${lang}`);
          if (lang !== 'x-default') check(!!document.querySelector(`a[hreflang="${lang}"][href="${new URL(href).pathname}"]`), `Missing language link ${lang}`);
        }
        const schemas = [...document.querySelectorAll('script[type="application/ld+json"]')].map(el => JSON.parse(el.textContent));
        check(schemas.some(s => s['@type'] === 'ProfessionalService' && s.address.addressLocality === 'Ourense'), 'Business location');
        const body = document.querySelector('main').textContent;
        for (const faq of schemas.filter(s => s['@type'] === 'FAQPage')) {
          for (const question of faq.mainEntity) {
            check(body.includes(question.name) && body.includes(question.acceptedAnswer.text), `FAQ absent from HTML: ${question.name}`);
          }
        }
        check(!/homePage\.|serviceBrief\.|pricingPage\./.test(body), 'Untranslated key');
        return { issues, title: document.title };
      }, { canonical: `${SITE_URL}${entry.path}`, expectedAlternates });
      if (seenTitles.has(result.title)) result.issues.push('Duplicate title');
      seenTitles.add(result.title);
      if (result.issues.length || errors.length) throw new Error([...result.issues, ...errors].join('; '));
      // Trigger once-only entrance animations before saving static HTML.
      await page.evaluate(async () => {
        for (let y = 0; y < document.body.scrollHeight; y += window.innerHeight / 2) {
          window.scrollTo(0, y);
          await new Promise(resolve => setTimeout(resolve, 25));
        }
        window.scrollTo(0, 0);
      });
      await new Promise(resolve => setTimeout(resolve, 800));
      const directory = new URL(`.${entry.path}/`, dist);
      await fs.mkdir(directory, { recursive: true });
      await fs.writeFile(new URL('index.html', directory), await page.content());
      console.log(`✓ ${entry.path}`);
    } catch (error) {
      failures.push(`${entry.path}: ${error.message}`);
    } finally {
      await page.close();
    }
  }
  if (failures.length) throw new Error(`Prerender failed:\n${failures.join('\n')}`);
  if (seenTitles.size !== Object.keys(allRoutes).length * supportedLanguages.length) throw new Error('Incomplete route inventory');
  // Static hosts use this for actual HTTP 404 responses; never rewrite all URLs to index.html.
  const notFound = await browser.newPage();
  await notFound.goto(`${base}/es/pagina-inexistente`, { waitUntil: 'networkidle0' });
  await notFound.waitForFunction(() => document.querySelector('meta[name="robots"]')?.content === 'noindex, follow');
  await fs.writeFile(new URL('404.html', dist), await notFound.content());
  await notFound.close();
  console.log(`Validated ${pageEntries.length} pages and a noindex 404 page.`);
} finally {
  await browser?.close();
  await new Promise((resolve, reject) => server.httpServer.close(error => error ? reject(error) : resolve()));
}
