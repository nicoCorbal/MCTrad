/**
 * SEO Configuration for all pages in all languages
 * Includes meta titles, descriptions, and Open Graph data
 */

export const SITE_URL = 'https://mariaangelescapas.com';
export const SITE_NAME = 'María Ángeles Capas - Traductora Jurada';
export const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;

/**
 * Language-specific site names and locales
 */
export const localeConfig = {
  es: { locale: 'es_ES', name: 'María Ángeles Capas - Traductora Jurada' },
  de: { locale: 'de_DE', name: 'María Ángeles Capas - Vereidigte Übersetzerin' },
  fr: { locale: 'fr_FR', name: 'María Ángeles Capas - Traductrice Assermentée' },
  en: { locale: 'en_US', name: 'María Ángeles Capas - Sworn Translator' },
};

/**
 * SEO metadata for each page in each language
 */
export const seoConfig = {
  home: {
    es: {
      title: 'Traductora Jurada Alemán-Español | María Ángeles Capas',
      description: 'Traductora Jurada oficial certificada MAEC y OLG Köln. Traducciones juradas alemán-español con validez legal. Presupuesto en 24h. Entrega 24-48h.',
    },
    de: {
      title: 'Beeidigte Übersetzerin Spanisch-Deutsch | María Ángeles Capas',
      description: 'Beeidigte Übersetzerin ermächtigt durch OLG Köln und MAEC. Beglaubigte Übersetzungen Spanisch-Deutsch mit amtlicher Gültigkeit. Angebot in 24h.',
    },
    fr: {
      title: 'Traductrice Assermentée Espagnol-Allemand | María Ángeles Capas',
      description: 'Traductrice assermentée certifiée MAEC (Espagne) et OLG Cologne (Allemagne). Traductions assermentées avec validité légale. Devis en 24h.',
    },
    en: {
      title: 'Sworn Translator German-Spanish | María Ángeles Capas',
      description: 'Official Sworn Translator certified by MAEC Spain and OLG Cologne Germany. Certified translations with legal validity. Quote within 24h.',
    },
  },
  services: {
    es: {
      title: 'Servicios de Traducción Jurada | Alemán-Español-Francés',
      description: 'Traducciones juradas para documentos legales, académicos y corporativos. Certificada por el MAEC y OLG Köln. Validez oficial en España y Alemania.',
    },
    de: {
      title: 'Beglaubigte Übersetzungen | Spanisch-Deutsch-Französisch',
      description: 'Beglaubigte Übersetzungen für Rechtsdokumente, Urkunden und Geschäftsunterlagen. Ermächtigt durch OLG Köln. Amtliche Gültigkeit in Deutschland und Spanien.',
    },
    fr: {
      title: 'Services Traduction Assermentée | Espagnol-Allemand',
      description: 'Traductions assermentées de documents juridiques, académiques et commerciaux. Certifiée MAEC et OLG Cologne. Validité officielle en Espagne et Allemagne.',
    },
    en: {
      title: 'Sworn Translation Services | German-Spanish-French',
      description: 'Certified translations for legal, academic, and corporate documents. Authorized by MAEC and OLG Cologne. Official validity in Spain and Germany.',
    },
  },
  about: {
    es: {
      title: 'Sobre Mí - María Ángeles Capas | Traductora Jurada Oficial',
      description: 'Traductora jurada con doble acreditación oficial: MAEC (España) y OLG Köln (Alemania). Especializada en derecho, economía y textos técnicos.',
    },
    de: {
      title: 'Über Mich - María Ángeles Capas | Beeidigte Übersetzerin',
      description: 'Beeidigte Übersetzerin mit Doppelzulassung: OLG Köln (Deutschland) und MAEC (Spanien). Spezialisiert auf Recht, Wirtschaft und Technik.',
    },
    fr: {
      title: 'À Propos - María Ángeles Capas | Traductrice Assermentée',
      description: 'Traductrice assermentée avec double accréditation: MAEC (Espagne) et OLG Cologne (Allemagne). Spécialisée en droit, économie et textes techniques.',
    },
    en: {
      title: 'About Me - María Ángeles Capas | Sworn Translator',
      description: 'Sworn translator with dual official accreditation: MAEC (Spain) and OLG Cologne (Germany). Specialized in law, economics, and technical texts.',
    },
  },
  contact: {
    es: {
      title: 'Contacto y Presupuesto | Traductora Jurada',
      description: 'Solicite presupuesto gratuito para su traducción jurada. Respuesta en 24 horas. Envíe sus documentos por email o formulario.',
    },
    de: {
      title: 'Kontakt und Kostenvoranschlag | Beeidigte Übersetzerin',
      description: 'Fordern Sie ein kostenloses Angebot für Ihre beglaubigte Übersetzung an. Antwort innerhalb 24 Stunden. Senden Sie Ihre Dokumente per E-Mail.',
    },
    fr: {
      title: 'Contact et Devis | Traductrice Assermentée',
      description: 'Demandez un devis gratuit pour votre traduction assermentée. Réponse en 24 heures. Envoyez vos documents par email.',
    },
    en: {
      title: 'Contact and Quote | Sworn Translator',
      description: 'Request a free quote for your certified translation. Response within 24 hours. Send your documents via email or form.',
    },
  },
  privacy: {
    es: {
      title: 'Política de Privacidad | María Ángeles Capas',
      description: 'Política de privacidad y protección de datos personales. Cumplimiento RGPD. Información sobre el tratamiento de sus datos y cómo ejercer sus derechos.',
    },
    de: {
      title: 'Datenschutzerklärung | María Ángeles Capas',
      description: 'Datenschutzerklärung und Datenschutz gemäß DSGVO. Detaillierte Informationen zur Verarbeitung, Speicherung und Ihren Rechten bezüglich personenbezogener Daten.',
    },
    fr: {
      title: 'Politique de Confidentialité | María Ángeles Capas',
      description: 'Politique de confidentialité et protection des données personnelles conforme au RGPD. Informations détaillées sur le traitement, stockage et vos droits.',
    },
    en: {
      title: 'Privacy Policy | María Ángeles Capas',
      description: 'Privacy policy and personal data protection. GDPR compliant. Detailed information about data processing, storage, and your rights regarding personal data.',
    },
  },
  legal: {
    es: {
      title: 'Aviso Legal | María Ángeles Capas - Traductora Jurada',
      description: 'Aviso legal e información según LSSI-CE. Datos del titular, condiciones de uso y responsabilidades legales del sitio web de servicios de traducción jurada.',
    },
    de: {
      title: 'Impressum | María Ángeles Capas - Beeidigte Übersetzerin',
      description: 'Impressum gemäß § 5 TMG. Angaben zum Betreiber, rechtliche Hinweise und Nutzungsbedingungen der Webseite für beglaubigte Übersetzungen.',
    },
    fr: {
      title: 'Mentions Légales | María Ángeles Capas',
      description: 'Mentions légales et informations sur le responsable du site. Données du propriétaire, conditions d\'utilisation et responsabilités du site de traduction.',
    },
    en: {
      title: 'Legal Notice | María Ángeles Capas - Sworn Translator',
      description: 'Legal notice and site owner information. Terms of use, ownership data and conditions for using this certified translation services website.',
    },
  },
  pricing: {
    es: {
      title: 'Tarifas Traducción Jurada | Precios y Presupuesto',
      description: 'Consulte las tarifas de traducción jurada alemán-español. Presupuesto gratuito en 24h. Precio cerrado para su documento.',
    },
    de: {
      title: 'Preise Beglaubigte Übersetzung | Kosten und Angebot',
      description: 'Informieren Sie sich über die Kosten beglaubigter Übersetzungen. Kostenloses Angebot in 24h. Individuelles Festpreisangebot.',
    },
    fr: {
      title: 'Tarifs Traduction Assermentée | Prix et Devis',
      description: 'Consultez les tarifs de traduction assermentée allemand-espagnol. Devis gratuit sous 24h. Un devis adapté à votre document, sans frais cachés.',
    },
    en: {
      title: 'Certified Translation Rates | Pricing and Quotes',
      description: 'Check certified translation rates for German-Spanish. Free quote within 24h. A fixed quote tailored to your document.',
    },
  },
};

/**
 * Programmatic SEO pages - Translation service combinations
 * These create scalable landing pages for specific translation needs
 */
export const servicePages = {
  // Birth certificate translations
  'traduccion-certificado-nacimiento': {
    routeKey: 'birth-certificate',
    slugs: {
      es: 'traduccion-certificado-nacimiento',
      de: 'uebersetzung-geburtsurkunde',
      fr: 'traduction-acte-naissance',
      en: 'birth-certificate-translation',
    },
    seo: {
      es: {
        title: 'Traducción Jurada Certificado de Nacimiento | Alemán-Español',
        description: 'Traducciones juradas de certificados de nacimiento con validez oficial. Acreditada MAEC y OLG Köln. Para registro civil, nacionalidad y visados. Entrega 24-48h.',
      },
      de: {
        title: 'Beglaubigte Übersetzung Geburtsurkunde | Spanisch-Deutsch',
        description: 'Beglaubigte Übersetzung von Geburtsurkunden mit amtlicher Gültigkeit. Ermächtigt OLG Köln und MAEC. Für Standesamt, Visum und Behörden. Lieferung 24-48h.',
      },
      fr: {
        title: 'Traduction Assermentée Acte de Naissance | Espagnol-Allemand',
        description: 'Traduction assermentée des actes de naissance avec validité officielle. Certifiée MAEC et OLG Cologne. Pour mairie, visa et administration. Devis gratuit.',
      },
      en: {
        title: 'Certified Birth Certificate Translation | German-Spanish',
        description: 'Certified birth certificate translation with legal validity. Sworn translator MAEC Spain and OLG Cologne. For civil registry, citizenship, visas. 24-48h.',
      },
    },
  },
  // Marriage certificate translations
  'traduccion-certificado-matrimonio': {
    routeKey: 'marriage-certificate',
    slugs: {
      es: 'traduccion-certificado-matrimonio',
      de: 'uebersetzung-heiratsurkunde',
      fr: 'traduction-acte-mariage',
      en: 'marriage-certificate-translation',
    },
    seo: {
      es: {
        title: 'Traducción Jurada Certificado de Matrimonio | Alemán-Español',
        description: 'Traducciones juradas de certificados de matrimonio. Válidas para Registro Civil, reagrupación familiar y nacionalidad. MAEC y OLG Köln. Entrega 24-48h.',
      },
      de: {
        title: 'Beglaubigte Übersetzung Heiratsurkunde | Spanisch-Deutsch',
        description: 'Beglaubigte Übersetzung von Heiratsurkunden für Standesamt und Familiennachzug. Ermächtigt OLG Köln und MAEC. Gültigkeit in Deutschland und Spanien.',
      },
      fr: {
        title: 'Traduction Assermentée Acte de Mariage | Espagnol-Allemand',
        description: 'Traduction assermentée des actes de mariage pour état civil et regroupement familial. Traductrice certifiée MAEC et OLG Cologne. Devis gratuit.',
      },
      en: {
        title: 'Certified Marriage Certificate Translation | German-Spanish',
        description: 'Certified translation of marriage certificates for civil registry and family reunification. Sworn translator MAEC and OLG Cologne. 24-48h delivery.',
      },
    },
  },
  // Academic documents
  'traduccion-titulo-universitario': {
    routeKey: 'university-degree',
    slugs: {
      es: 'traduccion-titulo-universitario',
      de: 'uebersetzung-hochschulzeugnis',
      fr: 'traduction-diplome-universitaire',
      en: 'university-degree-translation',
    },
    seo: {
      es: {
        title: 'Traducción Jurada Título Universitario | Homologación',
        description: 'Traducciones juradas de títulos universitarios y expedientes académicos para homologación. Válida ante Ministerio de Educación. Traductora MAEC y OLG Köln.',
      },
      de: {
        title: 'Beglaubigte Übersetzung Hochschulzeugnis | Anerkennung',
        description: 'Beglaubigte Übersetzung von Hochschulzeugnissen und Transcripts für Anerkennung. Ermächtigt OLG Köln und MAEC. Für Universitäten und Arbeitgeber.',
      },
      fr: {
        title: 'Traduction Assermentée Diplôme Universitaire',
        description: 'Traduction assermentée de diplômes universitaires et relevés de notes pour reconnaissance. Traductrice certifiée MAEC et OLG Cologne. Devis gratuit.',
      },
      en: {
        title: 'Certified University Degree Translation | Recognition',
        description: 'Certified translation of university degrees and academic transcripts for credential recognition. Sworn translator MAEC and OLG Cologne. 24-72h delivery.',
      },
    },
  },
  // Legal contracts
  'traduccion-contratos': {
    routeKey: 'contracts',
    slugs: {
      es: 'traduccion-contratos',
      de: 'uebersetzung-vertraege',
      fr: 'traduction-contrats',
      en: 'contract-translation',
    },
    seo: {
      es: {
        title: 'Traducción Jurada de Contratos | Alemán-Español',
        description: 'Traducciones juradas de contratos mercantiles, laborales y NDAs. Precisión jurídica en derecho español y alemán. Válidas ante tribunales. Entrega 24-48h.',
      },
      de: {
        title: 'Beglaubigte Übersetzung Verträge | Spanisch-Deutsch',
        description: 'Beglaubigte Übersetzung von Kauf-, Arbeits- und Handelsverträgen mit juristischer Präzision. Für Gerichte und Notare gültig. Lieferung 24-48h.',
      },
      fr: {
        title: 'Traduction Assermentée Contrats | Espagnol-Allemand',
        description: 'Traduction assermentée de contrats commerciaux et de travail avec précision juridique. Valide devant tribunaux et notaires. Devis gratuit.',
      },
      en: {
        title: 'Certified Contract Translation | German-Spanish',
        description: 'Certified translation of commercial and employment contracts with legal precision. Valid for courts and notaries. 24-48h delivery.',
      },
    },
  },
  // Court documents
  'traduccion-sentencias-judiciales': {
    routeKey: 'court-documents',
    slugs: {
      es: 'traduccion-sentencias-judiciales',
      de: 'uebersetzung-gerichtsurteile',
      fr: 'traduction-jugements',
      en: 'court-judgment-translation',
    },
    seo: {
      es: {
        title: 'Traducción Jurada Sentencias Judiciales | Alemán-Español',
        description: 'Traducciones juradas de sentencias y resoluciones judiciales. Válida ante tribunales españoles y alemanes. Servicio urgente disponible. Entrega express.',
      },
      de: {
        title: 'Beglaubigte Übersetzung Gerichtsurteile | Spanisch-Deutsch',
        description: 'Beglaubigte Übersetzung von Gerichtsurteilen und Beschlüssen. Gültig bei deutschen und spanischen Gerichten. Eilservice verfügbar.',
      },
      fr: {
        title: 'Traduction Assermentée Jugements | Espagnol-Allemand',
        description: 'Traduction assermentée de jugements et ordonnances. Valide devant tribunaux espagnols et allemands. Service urgent disponible. Devis gratuit.',
      },
      en: {
        title: 'Certified Court Judgment Translation | German-Spanish',
        description: 'Certified translation of court judgments and rulings. Valid before Spanish and German courts. Rush service available. Same-day delivery.',
      },
    },
  },
  // Retirement and pension documents
  'traduccion-jubilaciones-pensiones': {
    routeKey: 'retirement-pension',
    slugs: {
      es: 'traduccion-jubilaciones-pensiones',
      de: 'uebersetzung-rente-pension',
      fr: 'traduction-retraite-pension',
      en: 'retirement-pension-translation',
    },
    seo: {
      es: {
        title: 'Traducción Jurada Jubilaciones y Pensiones | Alemán-Español',
        description: 'Traducciones juradas de documentos de jubilación y pensiones. Válida ante Seguridad Social española y Deutsche Rentenversicherung. Entrega 24-48h.',
      },
      de: {
        title: 'Beglaubigte Übersetzung Rente und Pension | Spanisch-Deutsch',
        description: 'Beglaubigte Übersetzung von Rentenbescheiden und Pensionsdokumenten. Gültig bei Deutsche Rentenversicherung und Seguridad Social. Lieferung 24-48h.',
      },
      fr: {
        title: 'Traduction Assermentée Retraite et Pension | Espagnol-Allemand',
        description: 'Traduction assermentée de documents de retraite et pensions. Valide auprès des organismes espagnols et allemands. Certificat de vie. Devis gratuit.',
      },
      en: {
        title: 'Certified Retirement & Pension Translation | German-Spanish',
        description: 'Certified translation of retirement and pension documents. Valid for Seguridad Social and Rentenversicherung. Life certificates included. 24-48h delivery.',
      },
    },
  },
  // Notarial documents
  'traduccion-documentos-notariales': {
    routeKey: 'notarial-documents',
    slugs: {
      es: 'traduccion-documentos-notariales',
      de: 'uebersetzung-notarielle-dokumente',
      fr: 'traduction-actes-notaries',
      en: 'notarial-document-translation',
    },
    seo: {
      es: {
        title: 'Traducción Jurada Documentos Notariales | Alemán-Español',
        description: 'Traducciones juradas de escrituras, poderes notariales y testamentos. Válidas ante notarios españoles y alemanes. Inmuebles y herencias. Entrega 48-72h.',
      },
      de: {
        title: 'Beglaubigte Übersetzung Notarielle Dokumente | Spanisch-Deutsch',
        description: 'Beglaubigte Übersetzung von notariellen Urkunden, Vollmachten und Testamenten. Gültig bei deutschen und spanischen Notaren. Für Immobilienkauf und Erbschaft.',
      },
      fr: {
        title: 'Traduction Assermentée Actes Notariés | Espagnol-Allemand',
        description: 'Traduction assermentée d\'actes notariés, procurations et testaments. Valide devant notaires espagnols et allemands. Pour immobilier et successions.',
      },
      en: {
        title: 'Certified Notarial Document Translation | German-Spanish',
        description: 'Certified translation of notarial deeds, powers of attorney and wills. Valid before Spanish and German notaries. Real estate and inheritance. 48-72h.',
      },
    },
  },
};

/**
 * Generate hreflang alternate links for a page
 * @param {string} routeKey - The route key (e.g., 'home', 'services')
 * @param {Object} routes - Routes configuration
 * @returns {Array} Array of alternate language links
 */
export const generateAlternateLinks = (routeKey, routes, supportedLanguages) => {
  return supportedLanguages.map(lang => {
    const slug = routes[routeKey]?.[lang] || '';
    const path = slug ? `/${lang}/${slug}` : `/${lang}`;
    return {
      lang,
      url: `${SITE_URL}${path}`,
    };
  });
};

/**
 * Get SEO data for a page
 * @param {string} routeKey - The route key
 * @param {string} lang - Language code
 * @returns {Object} SEO configuration for the page
 */
export const getSeoData = (routeKey, lang) => {
  const pageConfig = seoConfig[routeKey];
  if (!pageConfig) return null;

  const langConfig = pageConfig[lang] || pageConfig.es;
  const locale = localeConfig[lang] || localeConfig.es;

  return {
    ...langConfig,
    siteName: locale.name,
    locale: locale.locale,
  };
};

export default seoConfig;
