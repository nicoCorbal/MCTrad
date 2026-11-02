import fs from 'node:fs/promises';
import { pageEntries, getRoutePath } from '../src/config/routes.js';
import { supportedLanguages } from '../src/config/languages.js';
import { SITE_URL } from '../src/config/seo.js';

// Validate the actual deploy artifact, including links between generated pages.
const dist = new URL('../dist/', import.meta.url);
const paths = new Set(pageEntries.map(entry => entry.path));
const edges = new Map();
const failures = [];
const titles = new Set();
const decode = value => value.replaceAll('&amp;', '&').replaceAll('&quot;', '"');
const attributes = tag => Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map(([,key,value]) => [key,decode(value)]));
const check = (condition, path, issue) => { if (!condition) failures.push(`${path}: ${issue}`); };
const sitemap = await fs.readFile(new URL('sitemap.xml',dist),'utf8');
const locations = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(([,url]) => url);
check(locations.length === paths.size && new Set(locations).size === paths.size,'sitemap','URL inventory mismatch');
for (const entry of pageEntries) {
  const html = await fs.readFile(new URL(`.${entry.path}/index.html`,dist),'utf8');
  const tags = [...html.matchAll(/<(?:link|meta|a|html|script|img)\b[^>]*>/g)].map(([tag]) => ({ tag: tag.match(/^<(\w+)/)[1], ...attributes(tag) }));
  const canonical = `${SITE_URL}${entry.path}`;
  check(locations.includes(canonical),entry.path,'Missing from sitemap');
  check(tags.find(tag => tag.tag === 'html')?.lang === entry.lang,entry.path,'Incorrect language');
  check(tags.filter(tag => tag.rel === 'canonical').length === 1 && tags.find(tag => tag.rel === 'canonical')?.href === canonical,entry.path,'Incorrect canonical');
  check(tags.find(tag => tag.name === 'robots')?.content === 'index, follow',entry.path,'Page not indexable');
  check((html.match(/<h1\b/g) || []).length === 1,entry.path,'Expected one H1');
  const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
  check(title && !titles.has(title),entry.path,'Missing or duplicate title');
  titles.add(title);
  for (const language of [...supportedLanguages,'x-default']) {
    const expected = `${SITE_URL}${getRoutePath(entry.key,language === 'x-default' ? 'es' : language)}`;
    check(tags.some(tag => tag.rel === 'alternate' && tag.hreflang === language && tag.href === expected),entry.path,`Incorrect hreflang ${language}`);
  }
  const outgoing = new Set();
  for (const tag of tags.filter(tag => tag.tag === 'a' && tag.href)) {
    const url = new URL(tag.href,canonical);
    if (url.origin !== SITE_URL || ['mailto:','tel:'].includes(url.protocol)) continue;
    const path = url.pathname.replace(/\/$/,'') || '/';
    if (path === entry.path) continue;
    check(paths.has(path),entry.path,`Broken internal link ${path}`);
    if (paths.has(path)) outgoing.add(path);
  }
  edges.set(entry.path,outgoing);
  for (const tag of tags.filter(tag => ['img','script','link'].includes(tag.tag))) {
    const asset = tag.src || (['stylesheet','icon','apple-touch-icon','modulepreload','preload'].includes(tag.rel) ? tag.href : null);
    if (!asset || asset.startsWith('data:')) continue;
    const url = new URL(asset,canonical);
    if (url.origin !== SITE_URL) continue;
    try { await fs.access(new URL(`.${url.pathname}`,dist)); }
    catch { failures.push(`${entry.path}: Missing asset ${url.pathname}`); }
  }
}
const reached = new Set(['/es']);
const queue = ['/es'];
while (queue.length) for (const path of edges.get(queue.shift()) || []) if (!reached.has(path)) { reached.add(path); queue.push(path); }
for (const path of paths) check(reached.has(path),path,'Not reachable by links from /es');
const notFound = await fs.readFile(new URL('404.html',dist),'utf8');
check(/name="robots" content="noindex, follow"/.test(notFound),'404','Missing noindex');
if (failures.length) throw new Error(`SEO verification failed:\n${failures.join('\n')}`);
console.log(`SEO verified: ${paths.size} pages, unique titles, canonicals, hreflang, sitemap, assets, internal links and noindex 404.`);
