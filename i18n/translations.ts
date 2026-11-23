import { SupportedLang } from '../config/company';

export interface TranslationDictionary {
  nav: {
    home: string;
    vehicles: string;
    importExport: string;
    rental: string;
    servicesWorkshop: string;
    about: string;
    contact: string;
    quoteCta: string;
    openMenu: string;
    closeMenu: string;
    languageLabel: string;
    drawerQuote: string;
    drawerDiscover: string;
    drawerFullCatalog: string;
    drawerFaq: string;
    drawerExtraLinksAria: string;
    mobileCall: string;
    mobileWhatsapp: string;
    mobileQuote: string;
  };
  breadcrumb: {
    home: string;
  };
  hero: {
    discoverBtn: string;
    quoteBtn: string;
    slidePrev: string;
    slideNext: string;
    dashAriaLabel: string;
  };
  quickSearch: {
    title: string;
    subtitle: string;
    categoryLabel: string;
    brandLabel: string;
    conditionLabel: string;
    energyLabel: string;
    allCategories: string;
    allBrands: string;
    allConditions: string;
    allEnergies: string;
    searchBtn: string;
  };
  showcase: {
    articleWord: string;
    typeLabel: string;
    energyLabel: string;
    seatsLabel: string;
    discoverBtn: string;
    quoteBtn: string;
    prevModel: string;
    nextModel: string;
    tabAriaLabel: string;
  };
  poles: {
    kicker: string;
    title: string;
    subtitle: string;
  };
  metrics: {
    kicker: string;
    title: string;
  };
  importSection: {
    kicker: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    pageTitle: string;
    pageIntro: string;
    documentsTitle: string;
    documentsList: string[];
    guaranteesTitle: string;
    guaranteesList: string[];
  };
  rentalPage: {
    kicker: string;
    title: string;
    intro: string;
    responseNotice: string;
    conditionsTitle: string;
    conditionsList: { label: string; value: string }[];
    reserveBtn: string;
  };
  partsWorkshopPage: {
    kicker: string;
    title: string;
    intro: string;
    partsKicker: string;
    partsTitle: string;
    partsCta: string;
    workshopKicker: string;
    workshopTitle: string;
    workshopProcessTitle: string;
    workshopCta: string;
    fleetKicker: string;
    fleetTitle: string;
    fleetDesc: string;
    fleetCta: string;
  };
  servicesSection: {
    title: string;
    learnMore: string;
    bottomCta: string;
    prev: string;
    next: string;
  };
  visionBanner: {
    kicker: string;
    titleBefore: string;
    titleHighlight: string;
    titleAfter: string;
    cta: string;
  };
  valuesSection: {
    title: string;
    subtitle: string;
    bottomCta: string;
    prev: string;
    next: string;
  };
  catalog: {
    kicker: string;
    title: string;
    subtitle: string;
    demoBanner: string;
    searchPlaceholder: string;
    sortLabel: string;
    sortDefault: string;
    sortYearDesc: string;
    sortBrandAsc: string;
    allTypes: string;
    allBrands: string;
    allConditions: string;
    allEnergies: string;
    countSuffix: string;
    resetFilters: string;
    emptyTitle: string;
    emptyDesc: string;
    viewSheet: string;
    requestQuote: string;
    compareBtn: string;
    comparedBtn: string;
    compareBarTitle: string;
    compareNow: string;
    clearCompare: string;
    priceOnRequest: string;
    demoTag: string;
    customOrderTitle: string;
    customOrderDesc: string;
    customOrderBtn: string;
  };
  comparatorModal: {
    title: string;
    subtitle: string;
    close: string;
    brandModel: string;
    category: string;
    condition: string;
    energy: string;
    transmission: string;
    seats: string;
    availability: string;
    pricing: string;
    requestQuote: string;
  };
  modal: {
    close: string;
    demoNotice: string;
    priceLabel: string;
    priceOnRequest: string;
    specsTitle: string;
    featuresTitle: string;
    colorsTitle: string;
    conditionLabel: string;
    mileageLabel: string;
    availabilityLabel: string;
    yearLabel: string;
    seatsLabel: string;
    transmissionLabel: string;
    powertrainLabel: string;
    powerLabel: string;
    rangeLabel: string;
    rangeNotSpecified: string;
    quoteCta: string;
    whatsappCta: string;
    shareCta: string;
    shareCopied: string;
  };
  about: {
    kicker: string;
    title: string;
    intro: string;
    approachKicker: string;
    approachTitle: string;
    trustKicker: string;
    trustTitle: string;
  };
  brands: {
    kicker: string;
    title: string;
    disclaimer: string;
  };
  faq: {
    kicker: string;
    title: string;
  };
  finalCta: {
    title: string;
    subtitle: string;
    quoteBtn: string;
    catalogBtn: string;
  };
  contact: {
    backHome: string;
    kicker: string;
    title: string;
    subtitle: string;
    coordsTitle: string;
    unconfirmedPlaceholder: string;
    addressLabel: string;
    phoneLabel: string;
    whatsappLabel: string;
    emailLabel: string;
    hoursLabel: string;
    responseBadge: string;
    formTitle: string;
    requestTypeLabel: string;
    types: {
      quote: string;
      import: string;
      rental: string;
      parts: string;
      workshop: string;
      fleet: string;
      info: string;
    };
    nameLabel: string;
    namePlaceholder: string;
    emailFieldLabel: string;
    emailPlaceholder: string;
    phoneFieldLabel: string;
    phonePlaceholder: string;
    vehicleLabel: string;
    vehiclePlaceholder: string;
    destinationLabel: string;
    destinationPlaceholder: string;
    budgetLabel: string;
    budgetPlaceholder: string;
    datesLabel: string;
    datesPlaceholder: string;
    partRefLabel: string;
    partRefPlaceholder: string;
    serviceTypeLabel: string;
    serviceTypes: string[];
    messageLabel: string;
    messagePlaceholder: string;
    consentText: string;
    submitBtn: string;
    successTitle: string;
    successBody: string;
    successNote: string;
    newRequestBtn: string;
  };
  footer: {
    modelsTitle: string;
    polesTitle: string;
    companyTitle: string;
    legalTitle: string;
    contactLink: string;
    languageTitle: string;
    rights: string;
    toConfirm: string;
  };
  cookies: {
    title: string;
    bodyPrimary: string;
    bodySecondary: string;
    moreInfo: string;
    acceptClose: string;
    necessaryOnly: string;
    customize: string;
    savePrefs: string;
    back: string;
    necessaryTitle: string;
    necessaryDesc: string;
    analyticsTitle: string;
    analyticsDesc: string;
    prefsTitle: string;
    prefsDesc: string;
    alwaysActive: string;
    manageLabel: string;
  };
  backToTop: string;
}

export const TRANSLATIONS: Record<SupportedLang, TranslationDictionary> = {
  fr: {
    nav: {
      home: 'Accueil',
      vehicles: 'Véhicules',
      importExport: 'Import-Export',
      rental: 'Location',
      servicesWorkshop: 'Pièces & Atelier',
      about: 'À propos',
      contact: 'Contact',
      quoteCta: 'Demander un devis',
      openMenu: 'Ouvrir le menu',
      closeMenu: 'Fermer le menu',
      languageLabel: 'Langue',
      drawerQuote: 'Devis',
      drawerDiscover: 'Découvrir',
      drawerFullCatalog: 'Catalogue complet',
      drawerFaq: 'Questions fréquentes',
      drawerExtraLinksAria: 'Liens complémentaires',
      mobileCall: 'Appeler',
      mobileWhatsapp: 'WhatsApp',
      mobileQuote: 'Devis',
    },
    breadcrumb: {
      home: 'Accueil',
    },
    hero: {
      discoverBtn: 'En savoir plus',
      quoteBtn: 'Demander un devis',
      slidePrev: 'Modèle précédent',
      slideNext: 'Modèle suivant',
      dashAriaLabel: 'Modèles présentés',
    },
    quickSearch: {
      title: 'Recherche rapide véhicules chinois',
      subtitle: 'Filtrez par catégorie, constructeur chinois, état ou énergie.',
      categoryLabel: 'Type de véhicule',
      brandLabel: 'Marque chinoise',
      conditionLabel: 'État',
      energyLabel: 'Motorisation',
      allCategories: 'Toutes catégories',
      allBrands: 'Toutes marques chinoises',
      allConditions: 'Neuf & Occasion',
      allEnergies: 'Toutes énergies',
      searchBtn: 'Rechercher',
    },
    showcase: {
      articleWord: 'Le',
      typeLabel: 'Catégorie',
      energyLabel: 'Motorisation',
      seatsLabel: 'Tarification',
      discoverBtn: 'Découvrir plus',
      quoteBtn: 'Demander un devis',
      prevModel: 'Modèle précédent',
      nextModel: 'Modèle suivant',
      tabAriaLabel: 'Sélectionner un modèle',
    },
    poles: {
      kicker: '4 métiers, un seul interlocuteur',
      title: 'Nos 4 pôles d’activité',
      subtitle:
        'Une organisation complète dédiée exclusivement aux véhicules automobiles chinois, de l’acquisition jusqu’à l’entretien.',
    },
    metrics: {
      kicker: 'Périmètre confirmé',
      title: 'Une structure claire au service de la mobilité chinoise',
    },
    importSection: {
      kicker: 'Parcours Import-Export Chine',
      title: 'Importez votre véhicule chinois en 4 étapes claires',
      subtitle:
        'De la sélection du modèle en Chine jusqu’à l’expédition, au dédouanement et à la remise des clés.',
      ctaPrimary: 'Demander un devis Import-Export',
      ctaSecondary: 'Explorer le parcours complet',
      pageTitle: 'Import-Export de véhicules chinois sur commande',
      pageIntro:
        'Vous recherchez un modèle chinois précis neuf ou récent ? Éminences Internationales structure votre commande directe avec suivi documentaire et logistique à chaque jalon.',
      documentsTitle: 'Éléments demandés pour lancer votre étude',
      documentsList: [
        'Marque chinoise et modèle souhaité (ou usage recherché)',
        'Motorisation privilégiée (Électrique, Hybride PHEV ou Thermique)',
        'Pays et ville de destination finale',
        'Délai souhaité et enveloppe budgétaire indicative',
      ],
      guaranteesTitle: 'Engagements de suivi',
      guaranteesList: [
        'Spécialisation exclusive sur les filières et modèles chinois',
        'Contrôle visuel et documentaire avant embarquement',
        'Suivi transparent de l’expédition jusqu’à la livraison',
        'Continuité pièces détachées et entretien après remise',
      ],
    },
    rentalPage: {
      kicker: 'Location de véhicules chinois',
      title: 'Louez un véhicule chinois adapté à votre mission',
      intro:
        'Berlines électriques ou hybrides, SUV familiaux ou pick-ups 4x4 chinois : réservez pour une courte durée ou un contrat professionnel longue durée.',
      responseNotice: 'Réponse et confirmation de disponibilité sous 24 h ouvrées.',
      conditionsTitle: 'Modalités de location (à confirmer selon dossier)',
      conditionsList: [
        { label: 'Durée', value: 'Courte durée (journée / semaine) ou longue durée (mois)' },
        { label: 'Documents requis', value: 'Pièce d’identité, permis de conduire valide, justificatif' },
        { label: 'Caution', value: 'Définie selon la catégorie de véhicule retenue' },
        { label: 'Tarification', value: 'Sur devis personnalisé' },
      ],
      reserveBtn: 'Demander un devis de location',
    },
    partsWorkshopPage: {
      kicker: 'Pièces & Atelier spécialisé Chine',
      title: 'Pièces d’origine et entretien dédiés aux voitures chinoises',
      intro:
        'Ne cherchez plus ailleurs : nos équipes assurent l’approvisionnement en pièces compatibles constructeurs chinois ainsi que le suivi mécanique, électrique et carrosserie.',
      partsKicker: 'Pôle Pièces & Accessoires',
      partsTitle: 'Quatre familles dédiées aux marques chinoises',
      partsCta: 'Demander une pièce',
      workshopKicker: 'Pôle Atelier & Entretien',
      workshopTitle: 'Des prestations ciblées pour vos modèles chinois',
      workshopProcessTitle: 'Un processus atelier clair en 4 étapes',
      workshopCta: 'Prendre rendez-vous atelier',
      fleetKicker: 'Entreprises & Flottes',
      fleetTitle: 'Vous gérez un parc de véhicules d’entreprise ?',
      fleetDesc:
        'Bénéficiez d’un interlocuteur dédié pour l’acquisition, la location ou l’entretien groupé de véhicules chinois pour vos équipes.',
      fleetCta: 'Contacter le pôle Flottes & Pros',
    },
    servicesSection: {
      title: 'Services & Accompagnement',
      learnMore: 'En savoir plus',
      bottomCta: 'Découvrir Pièces & Atelier',
      prev: 'Précédent',
      next: 'Suivant',
    },
    visionBanner: {
      kicker: 'Éminences Internationales',
      titleBefore: 'L’expertise dédiée à ',
      titleHighlight: '100 % aux marques chinoises',
      titleAfter: ' entre vente, import-export, pièces et atelier',
      cta: 'Demander un devis',
    },
    valuesSection: {
      title: 'Valeurs d’Éminences',
      subtitle:
        'Notre engagement repose sur la maîtrise des constructeurs chinois, la clarté commerciale et la continuité de service.',
      bottomCta: 'À propos de nous',
      prev: 'Précédent',
      next: 'Suivant',
    },
    catalog: {
      kicker: 'Catalogue automobile',
      title: 'Découvrez nos véhicules chinois',
      subtitle: 'Explorez nos modèles et demandez votre devis.',
      demoBanner:
        'Fiches illustratives · Tarifs et disponibilités confirmés sur devis.',
      searchPlaceholder: 'Rechercher un modèle ou une marque...',
      sortLabel: 'Trier',
      sortDefault: 'Trier : Sélection',
      sortYearDesc: 'Trier : Plus récents',
      sortBrandAsc: 'Trier : Marque (A-Z)',
      allTypes: 'Tous',
      allBrands: 'Toutes marques',
      allConditions: 'Neuf & Occasion',
      allEnergies: 'Toutes énergies',
      countSuffix: 'modèles',
      resetFilters: 'Réinitialiser',
      emptyTitle: 'Aucun véhicule ne correspond à vos critères.',
      emptyDesc:
        'Modifiez vos filtres ou commandez sur mesure le modèle chinois de votre choix.',
      viewSheet: 'Fiche véhicule',
      requestQuote: 'Demander un devis',
      compareBtn: 'Comparer',
      comparedBtn: 'Comparé',
      compareBarTitle: 'Comparateur',
      compareNow: 'Comparer',
      clearCompare: 'Effacer',
      priceOnRequest: 'Prix sur demande',
      demoTag: 'Fiche illustrative',
      customOrderTitle: 'Vous recherchez un autre modèle chinois ?',
      customOrderDesc:
        'Importation directe depuis la Chine selon votre cahier des charges.',
      customOrderBtn: 'Commander sur mesure',
    },
    comparatorModal: {
      title: 'Comparateur de véhicules chinois',
      subtitle: 'Comparaison technique côte à côte des modèles sélectionnés.',
      close: 'Fermer le comparateur',
      brandModel: 'Modèle',
      category: 'Catégorie',
      condition: 'État',
      energy: 'Énergie',
      transmission: 'Transmission',
      seats: 'Places',
      availability: 'Disponibilité',
      pricing: 'Tarification',
      requestQuote: 'Devis',
    },
    modal: {
      close: 'Fermer la fiche',
      demoNotice:
        'Fiche illustrative — données commerciales et disponibilités confirmées sur devis.',
      priceLabel: 'Tarification',
      priceOnRequest: 'Prix sur demande',
      specsTitle: 'Caractéristiques techniques',
      featuresTitle: 'Équipements et points clés',
      colorsTitle: 'Teintes disponibles / prévues',
      conditionLabel: 'État',
      mileageLabel: 'Kilométrage',
      availabilityLabel: 'Disponibilité',
      yearLabel: 'Année',
      seatsLabel: 'Places',
      transmissionLabel: 'Transmission',
      powertrainLabel: 'Motorisation',
      powerLabel: 'Puissance',
      rangeLabel: 'Autonomie',
      rangeNotSpecified: 'À confirmer',
      quoteCta: 'Demander un devis',
      whatsappCta: 'WhatsApp',
      shareCta: 'Partager',
      shareCopied: 'Lien copié',
    },
    about: {
      kicker: 'Identité & Positionnement',
      title: 'Éminences Internationales',
      intro:
        'Entreprise automobile dédiée exclusivement aux véhicules chinois. Nous réunissons vente neuve et d’occasion, import-export sur commande, location, pièces détachées et atelier spécialisé.',
      approachKicker: 'Approche commerciale',
      approachTitle: 'Un accompagnement complet autour des marques chinoises',
      trustKicker: 'Pourquoi nous choisir',
      trustTitle: 'Nos engagements de sérieux et de transparence',
    },
    brands: {
      kicker: 'Constructeurs automobiles chinois',
      title: 'Une sélection de marques automobiles chinoises au cœur de nos activités.',
      disclaimer:
        'Marques couvertes à titre indicatif pour la vente, l’import-export, les pièces et l’entretien — sans affiliation ni partenariat officiel constructeur.',
    },
    faq: {
      kicker: 'Questions fréquentes',
      title: 'Informations pratiques',
    },
    finalCta: {
      title: 'Parlons de votre projet automobile chinois',
      subtitle:
        'Achat, commande Import-Export depuis la Chine, location, pièce détachée ou rendez-vous atelier : obtenez une réponse claire sous 24 h ouvrées.',
      quoteBtn: 'Demander un devis',
      catalogBtn: 'Voir les véhicules',
    },
    contact: {
      backHome: 'Retour à l’accueil',
      kicker: 'Demandes & Rendez-vous',
      title: 'Contact, Devis & Services',
      subtitle:
        'Sélectionnez votre besoin (véhicule, import-export, location, pièce ou atelier) pour préparer votre dossier.',
      coordsTitle: 'Coordonnées officielles',
      unconfirmedPlaceholder: 'À renseigner par le client',
      addressLabel: 'Adresse',
      phoneLabel: 'Téléphone',
      whatsappLabel: 'WhatsApp',
      emailLabel: 'E-mail',
      hoursLabel: 'Horaires',
      responseBadge: 'Objectif de réponse : sous 24 h ouvrées',
      formTitle: 'Formulaire de demande ciblée',
      requestTypeLabel: 'Type de demande',
      types: {
        quote: 'Devis véhicule',
        import: 'Import-Export',
        rental: 'Location',
        parts: 'Demande de pièce',
        workshop: 'Rendez-vous atelier',
        fleet: 'Flotte & Pro',
        info: 'Renseignements',
      },
      nameLabel: 'Nom complet',
      namePlaceholder: 'Votre nom et prénom',
      emailFieldLabel: 'Adresse e-mail',
      emailPlaceholder: 'nom@domaine.com',
      phoneFieldLabel: 'Téléphone / WhatsApp',
      phonePlaceholder: 'Indicatif + numéro',
      vehicleLabel: 'Modèle ou marque chinoise concernée',
      vehiclePlaceholder: 'Ex. BYD Seal, Zeekr 7X, Chery Tiggo...',
      destinationLabel: 'Pays / Ville de destination',
      destinationPlaceholder: 'Ex. Cotonou, Abidjan, Dakar...',
      budgetLabel: 'Budget / Délai souhaité',
      budgetPlaceholder: 'Ex. Budget indicatif, délai souhaité...',
      datesLabel: 'Dates & durée souhaitées',
      datesPlaceholder: 'Ex. Du 10/12 au 20/12 (10 jours)',
      partRefLabel: 'Pièce recherchée / Référence',
      partRefPlaceholder: 'Ex. Plaquette frein avant, filtre, optique...',
      serviceTypeLabel: 'Prestation atelier souhaitée',
      serviceTypes: [
        'Entretien périodique',
        'Réparation mécanique',
        'Électricité / Diagnostic EV-Hybride',
        'Carrosserie & Peinture',
      ],
      messageLabel: 'Précisions complémentaires',
      messagePlaceholder:
        'Décrivez votre projet, vos critères ou vos questions...',
      consentText:
        'J’accepte que ces informations soient utilisées uniquement pour traiter ma demande par Éminences Internationales.',
      submitBtn: 'Envoyer la demande',
      successTitle: 'Demande préparée avec succès',
      successBody:
        'Votre dossier a été validé dans l’interface pour l’objet suivant :',
      successNote:
        'Note : ce formulaire côté client est structuré pour être relié au système d’envoi e-mail et espace d’administration lors de la mise en production.',
      newRequestBtn: 'Nouvelle demande',
    },
    footer: {
      modelsTitle: 'Véhicules Chinois',
      polesTitle: 'Pôles & Services',
      companyTitle: 'À propos d’Éminences',
      legalTitle: 'Informations légales',
      contactLink: 'Contact & Devis',
      languageTitle: 'Langue',
      rights: 'Éminences Internationales. Tous droits réservés.',
      toConfirm: 'Coordonnées officielles à renseigner.',
    },
    cookies: {
      title: 'Vos données personnelles',
      bodyPrimary:
        'Ce site utilise des traceurs strictement nécessaires à son fonctionnement et, avec votre accord, des cookies de préférences et de mesure d’audience afin d’améliorer votre expérience.',
      bodySecondary:
        'Vous pouvez personnaliser votre consentement en cliquant sur « Paramétrer les cookies » ou modifier vos choix à tout moment.',
      moreInfo: 'Politique de confidentialité',
      acceptClose: 'Accepter et fermer',
      necessaryOnly: 'Cookies nécessaires seulement',
      customize: 'Paramétrer les cookies',
      savePrefs: 'Enregistrer mes choix',
      back: 'Retour',
      necessaryTitle: 'Cookies strictement nécessaires',
      necessaryDesc:
        'Indispensables au fonctionnement technique du site et à la sauvegarde de votre langue.',
      analyticsTitle: 'Mesure d’audience',
      analyticsDesc:
        'Permet d’évaluer l’utilisation du site de manière agrégée une fois configurée.',
      prefsTitle: 'Préférences d’affichage',
      prefsDesc:
        'Mémorise vos sélections de navigation et filtres de consultation.',
      alwaysActive: 'Toujours actif',
      manageLabel: 'Gérer les cookies',
    },
    backToTop: 'Remonter en haut de la page',
  },
  en: {
    nav: {
      home: 'Home',
      vehicles: 'Vehicles',
      importExport: 'Import-Export',
      rental: 'Rental',
      servicesWorkshop: 'Parts & Workshop',
      about: 'About',
      contact: 'Contact',
      quoteCta: 'Request a quote',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      languageLabel: 'Language',
      drawerQuote: 'Quote',
      drawerDiscover: 'Discover',
      drawerFullCatalog: 'Full catalog',
      drawerFaq: 'FAQ',
      drawerExtraLinksAria: 'Additional links',
      mobileCall: 'Call',
      mobileWhatsapp: 'WhatsApp',
      mobileQuote: 'Quote',
    },
    breadcrumb: {
      home: 'Home',
    },
    hero: {
      discoverBtn: 'Learn more',
      quoteBtn: 'Request a quote',
      slidePrev: 'Previous model',
      slideNext: 'Next model',
      dashAriaLabel: 'Featured models',
    },
    quickSearch: {
      title: 'Quick Chinese vehicle search',
      subtitle: 'Filter by category, Chinese brand, condition, or powertrain.',
      categoryLabel: 'Vehicle type',
      brandLabel: 'Chinese brand',
      conditionLabel: 'Condition',
      energyLabel: 'Powertrain',
      allCategories: 'All categories',
      allBrands: 'All Chinese brands',
      allConditions: 'New & Pre-owned',
      allEnergies: 'All powertrains',
      searchBtn: 'Search',
    },
    showcase: {
      articleWord: 'The',
      typeLabel: 'Category',
      energyLabel: 'Powertrain',
      seatsLabel: 'Pricing',
      discoverBtn: 'Discover more',
      quoteBtn: 'Request a quote',
      prevModel: 'Previous model',
      nextModel: 'Next model',
      tabAriaLabel: 'Select a model',
    },
    poles: {
      kicker: '4 divisions, one single partner',
      title: 'Our 4 business divisions',
      subtitle:
        'An integrated organization exclusively dedicated to Chinese vehicles—from sourcing and sales through genuine parts and workshop maintenance.',
    },
    metrics: {
      kicker: 'Confirmed scope',
      title: 'A transparent structure built for Chinese automotive mobility',
    },
    importSection: {
      kicker: 'China Import-Export Process',
      title: 'Import your Chinese vehicle in 4 clear steps',
      subtitle:
        'From model selection in China through inspection, international shipping, customs clearance, and delivery handover.',
      ctaPrimary: 'Request an Import-Export quote',
      ctaSecondary: 'Explore full import process',
      pageTitle: 'Custom Import-Export for Chinese Vehicles',
      pageIntro:
        'Looking for a specific new or late-model Chinese car? Éminences Internationales manages your direct sourcing with documented milestones at every stage.',
      documentsTitle: 'Details needed to start your study',
      documentsList: [
        'Target Chinese brand and model (or intended usage)',
        'Preferred powertrain (Electric, Plug-in Hybrid, or Combustion)',
        'Final destination country and city',
        'Desired timeline and indicative budget',
      ],
      guaranteesTitle: 'Our tracking commitments',
      guaranteesList: [
        '100% exclusive focus on Chinese automotive manufacturers',
        'Visual and documentary inspection prior to shipment',
        'Transparent tracking from freight departure to handover',
        'Continuous parts supply and workshop support after delivery',
      ],
    },
    rentalPage: {
      kicker: 'Chinese Vehicle Rental',
      title: 'Rent a Chinese vehicle matched to your mission',
      intro:
        'Electric or hybrid sedans, family SUVs, or 4x4 Chinese pick-ups: book for short-term stays or long-term corporate mobility.',
      responseNotice: 'Response and availability check targeted within 24 business hours.',
      conditionsTitle: 'Rental terms (confirmed per booking)',
      conditionsList: [
        { label: 'Duration', value: 'Short-term (daily / weekly) or long-term (monthly)' },
        { label: 'Required documents', value: 'Valid ID, driver’s license, proof of address' },
        { label: 'Security deposit', value: 'Defined according to selected vehicle category' },
        { label: 'Pricing', value: 'Tailored quotation upon request' },
      ],
      reserveBtn: 'Request a rental quote',
    },
    partsWorkshopPage: {
      kicker: 'China-Focused Parts & Workshop',
      title: 'Genuine parts and servicing dedicated to Chinese vehicles',
      intro:
        'Everything under one roof: our teams supply parts compatible with Chinese car brands alongside specialized mechanical, EV/hybrid, and bodywork care.',
      partsKicker: 'Parts & Accessories Division',
      partsTitle: 'Four specialized supply families for Chinese brands',
      partsCta: 'Request a part',
      workshopKicker: 'Workshop & Maintenance Division',
      workshopTitle: 'Targeted servicing for your Chinese vehicle',
      workshopProcessTitle: 'A clear 4-step workshop workflow',
      workshopCta: 'Book a workshop appointment',
      fleetKicker: 'Corporate & Fleet Solutions',
      fleetTitle: 'Managing a corporate vehicle fleet?',
      fleetDesc:
        'Rely on a single partner for procuring, renting, or maintaining a fleet of Chinese vehicles for your teams.',
      fleetCta: 'Contact Fleet & Business Desk',
    },
    servicesSection: {
      title: 'Services & Support',
      learnMore: 'Learn more',
      bottomCta: 'Explore Parts & Workshop',
      prev: 'Previous',
      next: 'Next',
    },
    visionBanner: {
      kicker: 'Éminences Internationales',
      titleBefore: 'Dedicated expertise ',
      titleHighlight: '100% focused on Chinese brands',
      titleAfter: ' across sales, import-export, parts, and workshop care',
      cta: 'Request a quote',
    },
    valuesSection: {
      title: 'Our Values',
      subtitle:
        'Our commitment centers on mastering Chinese automotive brands, transparent quoting, and end-to-end service.',
      bottomCta: 'About us',
      prev: 'Previous',
      next: 'Next',
    },
    catalog: {
      kicker: 'Automotive Catalog',
      title: 'Discover our Chinese vehicles',
      subtitle: 'Explore our models and request your quote.',
      demoBanner:
        'Illustrative entries · Final pricing and availability confirmed upon quote.',
      searchPlaceholder: 'Search a model or brand...',
      sortLabel: 'Sort',
      sortDefault: 'Sort: Featured',
      sortYearDesc: 'Sort: Newest year',
      sortBrandAsc: 'Sort: Brand (A-Z)',
      allTypes: 'All',
      allBrands: 'All brands',
      allConditions: 'New & Pre-owned',
      allEnergies: 'All powertrains',
      countSuffix: 'models',
      resetFilters: 'Reset',
      emptyTitle: 'No vehicles match your selection.',
      emptyDesc:
        'Adjust your filters or request a custom import order from China.',
      viewSheet: 'Vehicle sheet',
      requestQuote: 'Request a quote',
      compareBtn: 'Compare',
      comparedBtn: 'Selected',
      compareBarTitle: 'Comparator',
      compareNow: 'Compare',
      clearCompare: 'Clear',
      priceOnRequest: 'Price on request',
      demoTag: 'Illustrative entry',
      customOrderTitle: 'Looking for another Chinese model?',
      customOrderDesc:
        'Direct sourcing from China tailored to your exact specifications.',
      customOrderBtn: 'Custom import order',
    },
    comparatorModal: {
      title: 'Chinese Vehicle Comparator',
      subtitle: 'Side-by-side specification comparison of selected models.',
      close: 'Close comparator',
      brandModel: 'Model',
      category: 'Category',
      condition: 'Condition',
      energy: 'Powertrain',
      transmission: 'Transmission',
      seats: 'Seats',
      availability: 'Availability',
      pricing: 'Pricing',
      requestQuote: 'Quote',
    },
    modal: {
      close: 'Close vehicle sheet',
      demoNotice:
        'Illustrative entry — final commercial terms and availability confirmed on request.',
      priceLabel: 'Pricing',
      priceOnRequest: 'Price on request',
      specsTitle: 'Technical specifications',
      featuresTitle: 'Equipment & highlights',
      colorsTitle: 'Available / planned finishes',
      conditionLabel: 'Condition',
      mileageLabel: 'Mileage',
      availabilityLabel: 'Availability',
      yearLabel: 'Year',
      seatsLabel: 'Seats',
      transmissionLabel: 'Transmission',
      powertrainLabel: 'Powertrain',
      powerLabel: 'Output',
      rangeLabel: 'Range',
      rangeNotSpecified: 'To be confirmed',
      quoteCta: 'Request a quote',
      whatsappCta: 'WhatsApp',
      shareCta: 'Share',
      shareCopied: 'Link copied',
    },
    about: {
      kicker: 'Identity & Positioning',
      title: 'Éminences Internationales',
      intro:
        'An automotive specialist dedicated exclusively to Chinese vehicles. We bring together new and pre-owned sales, custom import-export, rental, spare parts, and a dedicated workshop.',
      approachKicker: 'Commercial approach',
      approachTitle: 'Complete lifecycle support for Chinese brands',
      trustKicker: 'Why choose us',
      trustTitle: 'Commitments built on rigor and clarity',
    },
    brands: {
      kicker: 'Chinese Automotive Manufacturers',
      title: 'A selection of Chinese automotive brands at the heart of our activities.',
      disclaimer:
        'Indicative selection of brands covered for sales, import-export, parts, and servicing — without official OEM dealership affiliation.',
    },
    faq: {
      kicker: 'Frequently asked questions',
      title: 'Practical information',
    },
    finalCta: {
      title: 'Let us discuss your Chinese automotive project',
      subtitle:
        'Purchase, direct China import-export, rental, spare part inquiry, or workshop booking: receive a clear answer within 24 business hours.',
      quoteBtn: 'Request a quote',
      catalogBtn: 'Browse vehicles',
    },
    contact: {
      backHome: 'Back to home',
      kicker: 'Inquiries & Bookings',
      title: 'Contact, Quote & Services',
      subtitle:
        'Select your request type (vehicle quote, import-export, rental, parts, or workshop) so we can prepare your file.',
      coordsTitle: 'Official contact details',
      unconfirmedPlaceholder: 'To be provided by client',
      addressLabel: 'Address',
      phoneLabel: 'Phone',
      whatsappLabel: 'WhatsApp',
      emailLabel: 'Email',
      hoursLabel: 'Hours',
      responseBadge: 'Target response time: within 24 business hours',
      formTitle: 'Targeted request form',
      requestTypeLabel: 'Inquiry type',
      types: {
        quote: 'Vehicle quote',
        import: 'Import-Export',
        rental: 'Rental',
        parts: 'Part request',
        workshop: 'Workshop booking',
        fleet: 'Fleet & Business',
        info: 'General inquiry',
      },
      nameLabel: 'Full name',
      namePlaceholder: 'Your full name',
      emailFieldLabel: 'Email address',
      emailPlaceholder: 'name@domain.com',
      phoneFieldLabel: 'Phone / WhatsApp',
      phonePlaceholder: 'Country code + number',
      vehicleLabel: 'Chinese vehicle or brand concerned',
      vehiclePlaceholder: 'e.g. BYD Seal, Zeekr 7X, Chery Tiggo...',
      destinationLabel: 'Destination country / city',
      destinationPlaceholder: 'e.g. Cotonou, Abidjan, Dakar...',
      budgetLabel: 'Target budget / timeline',
      budgetPlaceholder: 'e.g. Indicative budget, target delivery window...',
      datesLabel: 'Preferred dates & duration',
      datesPlaceholder: 'e.g. Dec 10 to Dec 20 (10 days)',
      partRefLabel: 'Requested part / reference',
      partRefPlaceholder: 'e.g. Front brake pads, air filter, headlamp...',
      serviceTypeLabel: 'Workshop service needed',
      serviceTypes: [
        'Periodic maintenance',
        'Mechanical repair',
        'Electrical / EV-Hybrid diagnostics',
        'Bodywork & Paint',
      ],
      messageLabel: 'Additional project details',
      messagePlaceholder:
        'Describe your requirements, intended usage, or questions...',
      consentText:
        'I consent to this information being processed solely to handle my request with Éminences Internationales.',
      submitBtn: 'Submit request',
      successTitle: 'Request prepared successfully',
      successBody:
        'Your request has been validated in the interface for:',
      successNote:
        'Note: this client-side form is ready to connect to your production email and admin back-office endpoint.',
      newRequestBtn: 'New request',
    },
    footer: {
      modelsTitle: 'Chinese Vehicles',
      polesTitle: 'Divisions & Services',
      companyTitle: 'About Éminences',
      legalTitle: 'Legal information',
      contactLink: 'Contact & Quote',
      languageTitle: 'Language',
      rights: 'Éminences Internationales. All rights reserved.',
      toConfirm: 'Official contact details to be completed.',
    },
    cookies: {
      title: 'Your personal data',
      bodyPrimary:
        'This site uses strictly necessary technical storage and, with your consent, preference and audience analytics cookies to enhance your browsing experience.',
      bodySecondary:
        'You can customize your consent via "Cookie settings" or update your choices at any time.',
      moreInfo: 'Privacy policy',
      acceptClose: 'Accept and close',
      necessaryOnly: 'Necessary cookies only',
      customize: 'Cookie settings',
      savePrefs: 'Save my preferences',
      back: 'Back',
      necessaryTitle: 'Strictly necessary cookies',
      necessaryDesc:
        'Required for core technical operation and saving your language selection.',
      analyticsTitle: 'Audience measurement',
      analyticsDesc:
        'Helps measure aggregated site usage once configured.',
      prefsTitle: 'Display preferences',
      prefsDesc:
        'Remembers your browsing selections and catalog filters.',
      alwaysActive: 'Always active',
      manageLabel: 'Manage cookies',
    },
    backToTop: 'Back to top',
  },
};
