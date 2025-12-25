/**
 * SEO Configuration for all pages in all languages
 * Includes meta titles, descriptions, and Open Graph data
 */

export const SITE_URL = 'https://mariaangelescapas.com';
export const SITE_NAME = 'María Ángeles Capas - Traductora Jurada';
export const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

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
      description: 'Traductora Jurada oficial certificada en España (MAEC) y Alemania (OLG Köln). Traducciones juradas alemán-español con validez legal. Presupuesto en 1h. Entrega 24-48h.',
      keywords: 'traductor jurado, traducción jurada, traductor jurado alemán español, traductora jurada oficial, traducción certificada, MAEC, OLG Köln',
    },
    de: {
      title: 'Beeidigte Übersetzerin Spanisch-Deutsch | María Ángeles Capas',
      description: 'Beeidigte Übersetzerin ermächtigt durch OLG Köln und MAEC Spanien. Beglaubigte Übersetzungen Spanisch-Deutsch mit amtlicher Gültigkeit. Kostenvoranschlag in 1h.',
      keywords: 'beeidigte Übersetzerin, beglaubigte Übersetzung, Übersetzerin Spanisch Deutsch, ermächtigte Übersetzerin, OLG Köln',
    },
    fr: {
      title: 'Traductrice Assermentée Espagnol-Allemand | María Ángeles Capas',
      description: 'Traductrice assermentée certifiée en Espagne (MAEC) et en Allemagne (OLG Cologne). Traductions assermentées avec validité légale. Devis en 1h.',
      keywords: 'traductrice assermentée, traduction assermentée, traductrice espagnol allemand, traduction certifiée',
    },
    en: {
      title: 'Sworn Translator German-Spanish | María Ángeles Capas',
      description: 'Official Sworn Translator certified in Spain (MAEC) and Germany (OLG Cologne). Certified translations German-Spanish with legal validity. Quote within 1h.',
      keywords: 'sworn translator, certified translation, German Spanish translator, official translation, legal translation',
    },
  },
  services: {
    es: {
      title: 'Servicios de Traducción Jurada | Alemán-Español-Francés',
      description: 'Traducciones juradas para documentos legales, académicos y corporativos. Certificada por el MAEC y OLG Köln. Validez oficial en España y Alemania.',
      keywords: 'servicios traducción jurada, traducción documentos legales, traducción títulos universitarios, traducción contratos',
    },
    de: {
      title: 'Beglaubigte Übersetzungen | Spanisch-Deutsch-Französisch',
      description: 'Beglaubigte Übersetzungen für Rechtsdokumente, Urkunden und Geschäftsunterlagen. Ermächtigt durch OLG Köln. Amtliche Gültigkeit in Deutschland und Spanien.',
      keywords: 'beglaubigte Übersetzung, Übersetzung Rechtsdokumente, Übersetzung Urkunden, Übersetzung Verträge',
    },
    fr: {
      title: 'Services de Traduction Assermentée | Espagnol-Allemand-Français',
      description: 'Traductions assermentées de documents juridiques, académiques et commerciaux. Certifiée MAEC et OLG Cologne. Validité officielle.',
      keywords: 'traduction assermentée, traduction juridique, traduction certifiée, traduction documents officiels',
    },
    en: {
      title: 'Sworn Translation Services | German-Spanish-French',
      description: 'Certified translations for legal, academic, and corporate documents. Authorized by MAEC and OLG Cologne. Official validity in Spain and Germany.',
      keywords: 'sworn translation services, legal translation, certified translation, official document translation',
    },
  },
  about: {
    es: {
      title: 'Sobre Mí - María Ángeles Capas | Traductora Jurada Oficial',
      description: 'Traductora jurada con doble acreditación oficial: MAEC (España) y OLG Köln (Alemania). Especializada en derecho, economía y textos técnicos.',
      keywords: 'traductora jurada María Ángeles Capas, traductora oficial, especialista traducción legal',
    },
    de: {
      title: 'Über Mich - María Ángeles Capas | Beeidigte Übersetzerin',
      description: 'Beeidigte Übersetzerin mit Doppelzulassung: OLG Köln (Deutschland) und MAEC (Spanien). Spezialisiert auf Recht, Wirtschaft und Technik.',
      keywords: 'beeidigte Übersetzerin María Ángeles Capas, ermächtigte Übersetzerin, Spezialistin Rechtsübersetzung',
    },
    fr: {
      title: 'À Propos - María Ángeles Capas | Traductrice Assermentée',
      description: 'Traductrice assermentée avec double accréditation: MAEC (Espagne) et OLG Cologne (Allemagne). Spécialisée en droit, économie et textes techniques.',
      keywords: 'traductrice assermentée María Ángeles Capas, traductrice officielle, spécialiste traduction juridique',
    },
    en: {
      title: 'About Me - María Ángeles Capas | Sworn Translator',
      description: 'Sworn translator with dual official accreditation: MAEC (Spain) and OLG Cologne (Germany). Specialized in law, economics, and technical texts.',
      keywords: 'sworn translator María Ángeles Capas, official translator, legal translation specialist',
    },
  },
  contact: {
    es: {
      title: 'Contacto y Presupuesto | Traductora Jurada',
      description: 'Solicite presupuesto gratuito para su traducción jurada. Respuesta en 1 hora. Envíe sus documentos por email o formulario.',
      keywords: 'presupuesto traducción jurada, contacto traductora jurada, solicitar traducción',
    },
    de: {
      title: 'Kontakt und Kostenvoranschlag | Beeidigte Übersetzerin',
      description: 'Fordern Sie ein kostenloses Angebot für Ihre beglaubigte Übersetzung an. Antwort innerhalb 1 Stunde. Senden Sie Ihre Dokumente per E-Mail.',
      keywords: 'Kostenvoranschlag beglaubigte Übersetzung, Kontakt Übersetzerin, Übersetzung anfragen',
    },
    fr: {
      title: 'Contact et Devis | Traductrice Assermentée',
      description: 'Demandez un devis gratuit pour votre traduction assermentée. Réponse en 1 heure. Envoyez vos documents par email.',
      keywords: 'devis traduction assermentée, contact traductrice, demande traduction',
    },
    en: {
      title: 'Contact and Quote | Sworn Translator',
      description: 'Request a free quote for your certified translation. Response within 1 hour. Send your documents via email or form.',
      keywords: 'certified translation quote, contact translator, request translation',
    },
  },
  privacy: {
    es: {
      title: 'Política de Privacidad | María Ángeles Capas',
      description: 'Política de privacidad y protección de datos. Cumplimiento RGPD. Información sobre el tratamiento de datos personales.',
      keywords: 'política privacidad, protección datos, RGPD',
    },
    de: {
      title: 'Datenschutzerklärung | María Ángeles Capas',
      description: 'Datenschutzerklärung und Datenschutz. DSGVO-konform. Informationen zur Verarbeitung personenbezogener Daten.',
      keywords: 'Datenschutz, DSGVO, Datenschutzerklärung',
    },
    fr: {
      title: 'Politique de Confidentialité | María Ángeles Capas',
      description: 'Politique de confidentialité et protection des données. Conformité RGPD.',
      keywords: 'politique confidentialité, protection données, RGPD',
    },
    en: {
      title: 'Privacy Policy | María Ángeles Capas',
      description: 'Privacy policy and data protection. GDPR compliant. Information about personal data processing.',
      keywords: 'privacy policy, data protection, GDPR',
    },
  },
  legal: {
    es: {
      title: 'Aviso Legal | María Ángeles Capas - Traductora Jurada',
      description: 'Aviso legal e información según LSSI-CE. Datos del titular y condiciones de uso.',
      keywords: 'aviso legal, información legal, condiciones uso',
    },
    de: {
      title: 'Impressum | María Ángeles Capas - Beeidigte Übersetzerin',
      description: 'Impressum gemäß § 5 TMG. Angaben zum Betreiber und rechtliche Hinweise.',
      keywords: 'Impressum, rechtliche Hinweise, TMG',
    },
    fr: {
      title: 'Mentions Légales | María Ángeles Capas - Traductrice Assermentée',
      description: 'Mentions légales et informations sur le responsable du site.',
      keywords: 'mentions légales, informations légales',
    },
    en: {
      title: 'Legal Notice | María Ángeles Capas - Sworn Translator',
      description: 'Legal notice and site owner information. Terms of use.',
      keywords: 'legal notice, terms of use, site information',
    },
  },
  pricing: {
    es: {
      title: 'Tarifas Traducción Jurada | Precios y Presupuesto',
      description: 'Consulte las tarifas de traducción jurada alemán-español. Presupuesto gratuito en 24h. Precios transparentes según JVEG.',
      keywords: 'tarifas traducción jurada, precio traducción certificada, presupuesto traducción alemán español',
    },
    de: {
      title: 'Preise Beglaubigte Übersetzung | Kosten und Angebot',
      description: 'Informieren Sie sich über die Kosten beglaubigter Übersetzungen. Kostenloses Angebot in 24h. Transparente Preise nach JVEG.',
      keywords: 'Preise beglaubigte Übersetzung, Kosten Übersetzung, Angebot Übersetzung',
    },
    fr: {
      title: 'Tarifs Traduction Assermentée | Prix et Devis',
      description: 'Consultez les tarifs de traduction assermentée. Devis gratuit en 24h. Prix transparents.',
      keywords: 'tarifs traduction assermentée, prix traduction certifiée, devis traduction',
    },
    en: {
      title: 'Certified Translation Rates | Pricing and Quotes',
      description: 'Check certified translation rates for German-Spanish. Free quote within 24h. Transparent pricing per JVEG standards.',
      keywords: 'certified translation rates, translation pricing, translation quote',
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
        description: 'Traducción jurada de certificados de nacimiento para trámites en España y Alemania. Válida para registro civil, visados y extranjería. Entrega 24h.',
        keywords: 'traducción certificado nacimiento, traducir partida nacimiento, traducción jurada nacimiento',
      },
      de: {
        title: 'Beglaubigte Übersetzung Geburtsurkunde | Spanisch-Deutsch',
        description: 'Beglaubigte Übersetzung von Geburtsurkunden für Behörden in Deutschland und Spanien. Gültig für Standesamt und Visum. Lieferung 24h.',
        keywords: 'Übersetzung Geburtsurkunde, beglaubigte Geburtsurkunde, Geburtsurkunde übersetzen',
      },
      fr: {
        title: 'Traduction Assermentée Acte de Naissance | Allemand-Espagnol',
        description: 'Traduction assermentée des actes de naissance pour les démarches en France, Espagne et Allemagne. Livraison 24h.',
        keywords: 'traduction acte naissance, traduire acte naissance, traduction assermentée naissance',
      },
      en: {
        title: 'Certified Birth Certificate Translation | German-Spanish',
        description: 'Certified translation of birth certificates for official procedures in Spain and Germany. Valid for civil registry and visas. 24h delivery.',
        keywords: 'birth certificate translation, certified birth certificate, translate birth certificate',
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
        description: 'Traducción jurada de certificados de matrimonio para registro civil, visados y trámites legales. Válida en España y Alemania.',
        keywords: 'traducción certificado matrimonio, traducir acta matrimonio, traducción jurada matrimonio',
      },
      de: {
        title: 'Beglaubigte Übersetzung Heiratsurkunde | Spanisch-Deutsch',
        description: 'Beglaubigte Übersetzung von Heiratsurkunden für Standesamt und Behörden. Amtlich anerkannt in Deutschland und Spanien.',
        keywords: 'Übersetzung Heiratsurkunde, beglaubigte Heiratsurkunde, Eheurkunde übersetzen',
      },
      fr: {
        title: 'Traduction Assermentée Acte de Mariage | Allemand-Espagnol',
        description: 'Traduction assermentée des actes de mariage pour les démarches administratives.',
        keywords: 'traduction acte mariage, traduire certificat mariage',
      },
      en: {
        title: 'Certified Marriage Certificate Translation | German-Spanish',
        description: 'Certified translation of marriage certificates for legal and official procedures.',
        keywords: 'marriage certificate translation, certified marriage certificate',
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
        description: 'Traducción jurada de títulos universitarios y expedientes académicos para homologación en España y Alemania. MAEC y OLG Köln.',
        keywords: 'traducción título universitario, homologación títulos, traducir expediente académico',
      },
      de: {
        title: 'Beglaubigte Übersetzung Hochschulzeugnis | Anerkennung',
        description: 'Beglaubigte Übersetzung von Hochschulzeugnissen für die Anerkennung in Deutschland. OLG Köln ermächtigt.',
        keywords: 'Übersetzung Hochschulzeugnis, Zeugnis übersetzen, Anerkennung Studienabschluss',
      },
      fr: {
        title: 'Traduction Assermentée Diplôme Universitaire | Reconnaissance',
        description: 'Traduction assermentée de diplômes universitaires pour la reconnaissance des qualifications.',
        keywords: 'traduction diplôme, traduire diplôme universitaire',
      },
      en: {
        title: 'Certified University Degree Translation | Recognition',
        description: 'Certified translation of university degrees and academic transcripts for credential recognition.',
        keywords: 'university degree translation, academic transcript translation',
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
        description: 'Traducción jurada de contratos mercantiles, laborales y de compraventa. Precisión jurídica para negocios internacionales.',
        keywords: 'traducción contratos, traducir contrato alemán, traducción jurada contrato',
      },
      de: {
        title: 'Beglaubigte Übersetzung Verträge | Spanisch-Deutsch',
        description: 'Beglaubigte Übersetzung von Kaufverträgen, Arbeitsverträgen und Handelsverträgen. Juristische Präzision.',
        keywords: 'Übersetzung Vertrag, Vertrag übersetzen, beglaubigte Vertragsübersetzung',
      },
      fr: {
        title: 'Traduction Assermentée Contrats | Allemand-Espagnol',
        description: 'Traduction assermentée de contrats commerciaux et juridiques.',
        keywords: 'traduction contrat, traduire contrat',
      },
      en: {
        title: 'Certified Contract Translation | German-Spanish',
        description: 'Certified translation of commercial, employment, and sales contracts. Legal precision for international business.',
        keywords: 'contract translation, legal contract translation',
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
        description: 'Traducción jurada de sentencias, autos y resoluciones judiciales. Para procesos legales en España y Alemania.',
        keywords: 'traducción sentencias, traducir sentencia judicial, traducción resoluciones judiciales',
      },
      de: {
        title: 'Beglaubigte Übersetzung Gerichtsurteile | Spanisch-Deutsch',
        description: 'Beglaubigte Übersetzung von Gerichtsurteilen und Beschlüssen für Rechtsverfahren.',
        keywords: 'Übersetzung Gerichtsurteil, Urteil übersetzen, beglaubigte Gerichtsübersetzung',
      },
      fr: {
        title: 'Traduction Assermentée Jugements | Allemand-Espagnol',
        description: 'Traduction assermentée de jugements et décisions de justice.',
        keywords: 'traduction jugement, traduire décision justice',
      },
      en: {
        title: 'Certified Court Judgment Translation | German-Spanish',
        description: 'Certified translation of court judgments and legal rulings for international proceedings.',
        keywords: 'court judgment translation, legal ruling translation',
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
        description: 'Traducción jurada de escrituras públicas, poderes notariales y actas. Validez legal en España y Alemania.',
        keywords: 'traducción escritura pública, traducir poder notarial, traducción actas notariales',
      },
      de: {
        title: 'Beglaubigte Übersetzung Notarielle Dokumente | Spanisch-Deutsch',
        description: 'Beglaubigte Übersetzung von notariellen Urkunden, Vollmachten und öffentlichen Dokumenten.',
        keywords: 'Übersetzung Vollmacht, notarielle Urkunde übersetzen',
      },
      fr: {
        title: 'Traduction Assermentée Actes Notariés | Allemand-Espagnol',
        description: 'Traduction assermentée de procurations et actes notariés.',
        keywords: 'traduction acte notarié, traduire procuration',
      },
      en: {
        title: 'Certified Notarial Document Translation | German-Spanish',
        description: 'Certified translation of notarial deeds, powers of attorney, and public documents.',
        keywords: 'notarial translation, power of attorney translation',
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
