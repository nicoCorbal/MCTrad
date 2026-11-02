import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import { servicePages } from '../src/config/seo.js';
import { supportedLanguages } from '../src/config/languages.js';

let pages = 0;
for (const lang of supportedLanguages) {
  const translations = JSON.parse(await fs.readFile(new URL(`../public/locales/${lang}/translation.json`,import.meta.url),'utf8'));
  assert.ok(translations.officialResources.title && translations.common.loading);
  assert.ok(!JSON.stringify(translations.homePage.faq).includes('99%'));
  for (const service of Object.values(servicePages)) {
    const content = JSON.parse(await fs.readFile(new URL(`../public/locales/${lang}/service-${service.routeKey}.json`,import.meta.url),'utf8'));
    assert.ok(content.title && content.description && content.features.length && content.documents.length);
    assert.ok(content.faqs.length >= 4);
    for (const faq of content.faqs) assert.ok(faq.question?.length > 8 && faq.answer?.length > 20, `${lang}/${service.routeKey}: incomplete FAQ`);
    assert.ok(!JSON.stringify(content).includes('MECD'), 'Outdated authority');
    pages++;
  }
}
console.log(`Content verified: ${pages} localized document pages with complete headings, document lists, features and FAQs.`);
