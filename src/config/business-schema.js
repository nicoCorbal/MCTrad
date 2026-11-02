import { SITE_URL, SITE_NAME } from './seo.js';

const credential = (name, authority, url, description) => ({
  '@type': 'EducationalOccupationalCredential', credentialCategory: name,
  recognizedBy: { '@type': 'GovernmentOrganization', name: authority, url },
  description,
});

export const businessSchemas = [
  {
    '@context': 'https://schema.org', '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/#professionalservice`, name: SITE_NAME, url: SITE_URL,
    image: `${SITE_URL}/foto.jpg`, logo: `${SITE_URL}/apple-touch-icon.png`,
    email: 'capaslopez@gmail.com',
    address: { '@type': 'PostalAddress', addressLocality: 'Ourense', addressRegion: 'Galicia', addressCountry: 'ES' },
    areaServed: ['España', 'Alemania', 'Francia'],
    founder: { '@id': `${SITE_URL}/#person` },
  },
  {
    '@context': 'https://schema.org', '@type': 'Person', '@id': `${SITE_URL}/#person`,
    name: 'María Ángeles Capas López', sameAs: ['https://es.linkedin.com/in/mariacapastraductora'], jobTitle: 'Traductora-Intérprete Jurada',
    worksFor: { '@id': `${SITE_URL}/#professionalservice` },
    knowsLanguage: ['es', 'de', 'fr', 'en'],
    hasCredential: [
      credential('Traductora-Intérprete Jurada', 'Ministerio de Asuntos Exteriores, Unión Europea y Cooperación',
        'https://www.exteriores.gob.es', 'Traducción jurada alemán-español. Nº 11241.'),
      credential('Ermächtigte Übersetzerin', 'Oberlandesgericht Köln',
        'https://www.justiz-dolmetscher.de', 'Ermächtigte Übersetzerin für die französische und spanische Sprache'),
    ],
  },
  {
    '@context': 'https://schema.org', '@type': 'WebSite', '@id': `${SITE_URL}/#website`,
    name: SITE_NAME, url: SITE_URL, inLanguage: ['es', 'de', 'fr', 'en'],
    publisher: { '@id': `${SITE_URL}/#professionalservice` },
  },
];
