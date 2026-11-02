import assert from 'node:assert/strict';
import { initializeAnalytics, trackPageView, trackContactEvent } from '../src/utils/analytics.js';

const calls = [];
const appendedScripts = [];
globalThis.window = { location: new URL('http://localhost:5173/es?email=private@example.com') };
globalThis.document = {
  title: 'Test page', documentElement: { lang: 'es' },
  querySelector: () => ({ href: 'https://mariaangelescapas.com/es' }),
  createElement: () => ({}), head: { appendChild: script => appendedScripts.push(script) },
};
initializeAnalytics();
assert.equal(appendedScripts.length, 0, 'Local visits must not load GA4');
assert.equal(trackContactEvent('generate_lead', 'contact_form'), false);
window.location = new URL('https://mc-trad-preview.vercel.app/es');
initializeAnalytics();
assert.equal(appendedScripts.length, 0, 'Previews must not load GA4');
window.location = new URL('https://mariaangelescapas.com/es?email=private@example.com');
initializeAnalytics();
assert.equal(appendedScripts.length, 1);
assert.equal(window.dataLayer[1][2].send_page_view, false);
assert.equal(window.dataLayer[1][2].page_location, 'https://mariaangelescapas.com/es');
initializeAnalytics();
assert.equal(appendedScripts.length, 1, 'GA4 initialization must be idempotent');
window.gtag = (...args) => calls.push(args);
assert.equal(trackPageView(), true);
assert.equal(trackPageView(), false, 'StrictMode or repeated SEO events must not duplicate a page view');
assert.equal(trackContactEvent('contact_email_click', 'email'), true);
assert.equal(trackContactEvent('generate_lead', 'contact_form'), true);
assert.equal(trackContactEvent('unexpected_event', 'email'), false);
window.location = new URL('https://mariaangelescapas.com/de?name=Private');
assert.equal(trackPageView(), false, 'Wait for matching language and canonical');
document.documentElement.lang = 'de';
document.querySelector = () => ({ href: 'https://mariaangelescapas.com/de' });
assert.equal(trackPageView(), true);
window.location = new URL('https://mariaangelescapas.com/es/no-existe');
assert.equal(trackContactEvent('generate_lead', 'contact_form'), false);
assert.ok(!JSON.stringify(calls).includes('private@example.com'));
assert.ok(!JSON.stringify(calls).includes('?'));
assert.ok(calls.filter(call => call[1] === 'page_view').length === 2);
console.log('Analytics verified: initial view, deduplication, navigation, leads, email clicks, sanitized URLs and exclusion of local/preview/404 traffic.');
