export type SupportedLang = 'fr' | 'en';

export type AppRoute =
  | 'home'
  | 'vehicles'
  | 'import-export'
  | 'rental'
  | 'services-workshop'
  | 'about'
  | 'contact'
  | 'legal'
  | 'privacy'
  | 'terms';

export const ROUTE_TO_PATH: Record<AppRoute, string> = {
  home: '/',
  vehicles: '/vehicules',
  'import-export': '/import-export',
  rental: '/location',
  'services-workshop': '/services-atelier',
  about: '/a-propos',
  contact: '/contact',
  legal: '/mentions-legales',
  privacy: '/politique-de-confidentialite',
  terms: '/conditions-generales',
};

export const PATH_TO_ROUTE: Record<string, AppRoute> = {
  '/': 'home',
  '/vehicules': 'vehicles',
  '/import-export': 'import-export',
  '/location': 'rental',
  '/services-atelier': 'services-workshop',
  '/a-propos': 'about',
  '/contact': 'contact',
  '/mentions-legales': 'legal',
  '/politique-de-confidentialite': 'privacy',
  '/conditions-generales': 'terms',
};

export type InquiryType =
  | 'quote'
  | 'import'
  | 'rental'
  | 'parts'
  | 'workshop'
  | 'fleet'
  | 'info';

export interface CompanyConfig {
  name: string;
  legalName: string | null;
  sector: string;
  specialization: string;
  slogan: {
    fr: string | null;
    en: string | null;
  };
  description: {
    fr: string;
    en: string;
  };
  logo: {
    src: string;
    alt: string;
  };
  contact: {
    address: string | null;
    cityCountry: string | null;
    phone: string | null;
    whatsapp: string | null;
    email: string | null;
    hours: {
      fr: string | null;
      en: string | null;
    };
  };
  social: {
    linkedin: string | null;
    instagram: string | null;
    facebook: string | null;
    youtube: string | null;
    tiktok: string | null;
  };
  siteUrl: string;
  languages: {
    default: SupportedLang;
    supported: SupportedLang[];
  };
  seo: {
    fr: {
      title: string;
      description: string;
      ogTitle: string;
      ogDescription: string;
    };
    en: {
      title: string;
      description: string;
      ogTitle: string;
      ogDescription: string;
    };
  };
  branding: {
    colors: {
      ink: string;
      obsidian: string;
      stone: string;
      surface: string;
      accent: string;
      accentWarm: string;
      violet: string;
      lavenderTint: string;
      warmTint: string;
    };
    fonts: {
      display: string;
      body: string;
      mono: string;
    };
  };
  /**
   * Liste indicative de constructeurs automobiles chinois exclusivement.
   * Ne constitue pas une liste de partenariats officiels.
   */
  catalogBrandScope: readonly string[];
}

export const companyConfig: CompanyConfig = {
  name: 'Éminences Internationales',
  legalName: 'Éminences Internationales',
  sector: 'Automobile',
  specialization: 'Véhicules automobiles chinois exclusivement',
  slogan: {
    fr: null,
    en: null,
  },
  description: {
    fr: 'Plateforme automobile internationale spécialisée exclusivement dans la vente, l\'import-export, la location, les pièces et l\'entretien de véhicules chinois.',
    en: 'International automotive platform specialized exclusively in sales, import-export, rental, parts, and maintenance for Chinese vehicles.',
  },
  logo: {
    src: '/assets/aistudio/50a15982-6d13-443b-a6ec-bc6573cdf2ca_9ce43ed4.jpeg',
    alt: 'Éminences Internationales',
  },
  contact: {
    address: 'Calavi',
    cityCountry: 'Bénin',
    phone: '+229 01 49 95 95 49',
    whatsapp: '+229 01 49 95 95 49',
    email: 'eminencesinternationales@gmail.com',
    hours: {
      fr: '24h/24, du lundi au samedi',
      en: '24/7, Monday to Saturday',
    },
  },
  social: {
    linkedin: null,
    instagram: null,
    facebook: 'https://www.facebook.com/EminencesInternationales',
    youtube: 'https://www.youtube.com/@EminencesInternationales',
    tiktok: 'https://www.tiktok.com/@EminencesInternationales',
  },
  siteUrl: '',
  languages: {
    default: 'fr',
    supported: ['fr', 'en'],
  },
  seo: {
    fr: {
      title: 'Éminences Internationales — Vente, Import-Export & Services Véhicules Chinois',
      description:
        'Éminences Internationales : spécialiste des véhicules automobiles chinois neufs et d\'occasion, import-export depuis la Chine, location, pièces d\'origine et atelier dédié.',
      ogTitle: 'Éminences Internationales — Spécialiste Véhicules Automobiles Chinois',
      ogDescription:
        'Catalogue de véhicules chinois, import-export, location, pièces détachées, atelier dédié et demandes de devis.',
    },
    en: {
      title: 'Éminences Internationales — Chinese Vehicles Sales, Import-Export & Services',
      description:
        'Éminences Internationales: dedicated specialist in new and pre-owned Chinese vehicles, direct import-export from China, rental, parts, and specialized servicing.',
      ogTitle: 'Éminences Internationales — Chinese Automotive Specialist',
      ogDescription:
        'Chinese vehicle catalog, import-export, rental, genuine parts, workshop services, and tailored quote requests.',
    },
  },
  branding: {
    colors: {
      ink: '#14111F',
      obsidian: '#0B0A10',
      stone: '#F7F6F2',
      surface: '#FFFFFF',
      accent: '#FF5A36',
      accentWarm: '#FF7A1F',
      violet: '#5B1AEF',
      lavenderTint: '#F7F5FF',
      warmTint: '#FFF4EB',
    },
    fonts: {
      display: 'Plus Jakarta Sans',
      body: 'DM Sans',
      mono: 'JetBrains Mono',
    },
  },
  catalogBrandScope: [
    'BYD',
    'Zeekr',
    'Chery',
    'Geely',
    'Omoda & Jaecoo',
    'Exeed',
    'Jetour',
    'Leapmotor',
    'Changan',
    'GAC',
    'Great Wall Motors',
    'Haval',
    'Dongfeng',
    'NIO',
    'XPeng',
  ],
};