import { useEffect } from 'react';
import { SITE_URL } from '../config/seo';

/**
 * Comprehensive structured data schemas for SEO
 * Includes Organization, LocalBusiness, ProfessionalService, and WebSite schemas
 */

/**
 * Organization Schema - Main business entity
 */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  "name": "María Ángeles Capas - Traductora Jurada",
  "alternateName": ["María Ángeles Capas López", "Traductora Jurada Oficial"],
  "url": SITE_URL,
  "logo": `${SITE_URL}/apple-touch-icon.png`,
  "email": "capaslopez@gmail.com",
  "foundingDate": "1995",
  "founder": {
    "@type": "Person",
    "name": "María Ángeles Capas López",
  },
  "areaServed": [
    { "@type": "Country", "name": "España" },
    { "@type": "Country", "name": "Alemania" },
    { "@type": "Country", "name": "Francia" },
  ],
  "knowsLanguage": [
    { "@type": "Language", "name": "Español", "alternateName": "es" },
    { "@type": "Language", "name": "Alemán", "alternateName": "de" },
    { "@type": "Language", "name": "Francés", "alternateName": "fr" },
    { "@type": "Language", "name": "Inglés", "alternateName": "en" },
  ],
};

/**
 * LocalBusiness Schema - For local SEO
 */
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#localbusiness`,
  "name": "María Ángeles Capas - Traductora Jurada",
  "description": "Servicios de traducción jurada oficial alemán-español. Traductora-Intérprete Jurada nombrada por el MAEC y certificada por el OLG Köln.",
  "url": SITE_URL,
  "image": `${SITE_URL}/apple-touch-icon.png`,
  "email": "capaslopez@gmail.com",
  "priceRange": "€€",
  "paymentAccepted": ["Cash", "Bank Transfer", "PayPal"],
  "currenciesAccepted": "EUR",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Madrid",
    "addressRegion": "Madrid",
    "addressCountry": "ES"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "sameAs": [
    "https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Oficina-de-Interpretacion-de-Lenguas/Paginas/Traduccion-e-interpretacion-jurada.aspx",
    "https://www.justiz-dolmetscher.de/Recherche/de/Suchen"
  ]
};

/**
 * ProfessionalService Schema - For service-based SEO
 */
export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#professionalservice`,
  "name": "María Ángeles Capas - Traductora Jurada Oficial",
  "description": "Servicios de traducción jurada oficial alemán-español-francés. Certificada por el MAEC (España) y OLG Köln (Alemania).",
  "url": SITE_URL,
  "image": `${SITE_URL}/apple-touch-icon.png`,
  "email": "capaslopez@gmail.com",
  "priceRange": "€€",
  "areaServed": [
    { "@type": "Country", "name": "España" },
    { "@type": "Country", "name": "Alemania" },
  ],
  "serviceType": [
    "Traducción Jurada",
    "Traducción Legal",
    "Traducción de Documentos Académicos",
    "Traducción Corporativa",
    "Traducción de Contratos",
    "Traducción de Sentencias",
  ],
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Traductora-Intérprete Jurada",
      "recognizedBy": {
        "@type": "GovernmentOrganization",
        "name": "Ministerio de Asuntos Exteriores, Unión Europea y Cooperación",
        "alternateName": "MAEC",
        "url": "https://www.exteriores.gob.es",
      },
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Ermächtigte Übersetzerin",
      "recognizedBy": {
        "@type": "GovernmentOrganization",
        "name": "Oberlandesgericht Köln",
        "alternateName": "OLG Köln",
        "url": "https://www.justiz-dolmetscher.de",
      },
      "description": "Ermächtigte Übersetzerin für die französische und spanische Sprache",
    },
  ],
  "availableLanguage": ["es", "de", "en", "fr"],
};

/**
 * WebSite Schema - For sitelinks searchbox
 */
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  "url": SITE_URL,
  "name": "María Ángeles Capas - Traductora Jurada",
  "description": "Servicios de traducción jurada oficial alemán-español-francés",
  "publisher": {
    "@id": `${SITE_URL}/#organization`,
  },
  "inLanguage": ["es", "de", "fr", "en"],
};

/**
 * Person Schema - For the translator
 */
export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  "name": "María Ángeles Capas López",
  "jobTitle": "Traductora-Intérprete Jurada",
  "worksFor": {
    "@id": `${SITE_URL}/#organization`,
  },
  "knowsLanguage": [
    { "@type": "Language", "name": "Español" },
    { "@type": "Language", "name": "Alemán" },
    { "@type": "Language", "name": "Francés" },
    { "@type": "Language", "name": "Inglés" },
  ],
  "hasCredential": professionalServiceSchema.hasCredential,
};

/**
 * Component to inject global structured data
 */
function StructuredData() {
  useEffect(() => {
    // Combine all schemas
    const schemas = [
      organizationSchema,
      localBusinessSchema,
      professionalServiceSchema,
      websiteSchema,
      personSchema,
    ];

    // Create or update script tags
    schemas.forEach((schema) => {
      const scriptId = `structured-data-${schema['@type'].toLowerCase()}`;
      let script = document.getElementById(scriptId);

      if (!script) {
        script = document.createElement('script');
        script.id = scriptId;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }

      script.textContent = JSON.stringify(schema);
    });

    // Cleanup
    return () => {
      schemas.forEach((schema) => {
        const scriptId = `structured-data-${schema['@type'].toLowerCase()}`;
        const script = document.getElementById(scriptId);
        if (script) script.remove();
      });
    };
  }, []);

  return null;
}

export default StructuredData;
