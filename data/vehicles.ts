import { Vehicle } from '../types/vehicle';

/**
 * DONNÉES DE DÉMONSTRATION (FICTIVES / ILLUSTRATIVES)
 * Exclusivement consacrées aux constructeurs automobiles chinois.
 * Ces fiches illustrent la structure du catalogue (neuf, occasion, électrique, hybride, thermique).
 * Les tarifs, kilométrages et disponibilités définitives restent à confirmer par Éminences Internationales.
 */
export const DEMO_VEHICLES: Vehicle[] = [
  {
    id: 'zeekr-7x-demo',
    brand: 'Zeekr',
    model: '7X',
    version: 'Configuration illustrative',
    year: 2026,
    condition: 'Neuf',
    mileageKm: 0,
    badge: { fr: 'Nouveau', en: 'New' },
    price: {
      amount: null,
      currency: 'FCFA',
      priceOnRequest: true,
    },
    vehicleType: 'SUV',
    powertrain: {
      fr: 'Motorisation 100 % électrique',
      en: '100% electric powertrain',
    },
    energy: 'Électrique',
    transmission: {
      fr: 'Automatique (réducteur direct)',
      en: 'Single-speed automatic',
    },
    rangeKm: null,
    power: {
      fr: 'À confirmer selon version',
      en: 'To be confirmed by trim',
    },
    seats: 5,
    colors: [
      { fr: 'Noir obsidienne (illustratif)', en: 'Obsidian Black (illustrative)' },
      { fr: 'Gris minéral (illustratif)', en: 'Mineral Grey (illustrative)' },
    ],
    images: [
      '/images/hero_chinese_ev_twilight_1795363149510.jpg',
      '/images/zeekr_studio_flagship_1794870368647.jpg',
    ],
    description: {
      fr: 'Le SUV électrique chinois de nouvelle génération. Fiche illustrative prête pour la vente directe ou l’importation sur devis.',
      en: 'The next-generation Chinese electric SUV. Illustrative listing structured for direct sale or tailored import quotation.',
    },
    features: [
      { fr: 'Architecture électrique moderne (fiche illustrative)', en: 'Modern electric platform (sample entry)' },
      { fr: 'Interface multimédia et écran panoramique embarqué', en: 'Integrated cockpit panoramic display' },
      { fr: 'Aides à la conduite configurables selon version', en: 'Trim-dependent driver assistance systems' },
    ],
    availability: 'Sur commande',
    status: 'demo',
    technicalSpecs: [
      {
        label: { fr: 'Catégorie', en: 'Body style' },
        value: { fr: 'SUV 5 places', en: '5-seat SUV' },
      },
      {
        label: { fr: 'État', en: 'Condition' },
        value: { fr: 'Neuf (Import / Vente)', en: 'New (Import / Sale)' },
      },
      {
        label: { fr: 'Énergie', en: 'Energy' },
        value: { fr: '100 % Électrique', en: '100% Electric' },
      },
      {
        label: { fr: 'Tarification', en: 'Pricing' },
        value: { fr: 'Sur demande', en: 'Upon request' },
      },
    ],
    isDemo: true,
  },
  {
    id: 'byd-seal-demo',
    brand: 'BYD',
    model: 'Seal',
    version: 'Configuration illustrative',
    year: 2026,
    condition: 'Neuf',
    mileageKm: 0,
    badge: { fr: 'Sur commande', en: 'On order' },
    price: {
      amount: null,
      currency: 'FCFA',
      priceOnRequest: true,
    },
    vehicleType: 'Berline',
    powertrain: {
      fr: 'Motorisation électrique BYD',
      en: 'BYD electric powertrain',
    },
    energy: 'Électrique',
    transmission: {
      fr: 'Automatique',
      en: 'Automatic',
    },
    rangeKm: null,
    power: {
      fr: 'À confirmer selon version',
      en: 'To be confirmed by trim',
    },
    seats: 5,
    colors: [
      { fr: 'Argent polaire (illustratif)', en: 'Polar Silver (illustrative)' },
    ],
    images: [
      '/images/sedan_chinese_ev_studio_1795363148986.jpg',
      '/images/zeekr_studio_flagship_1794870368647.jpg',
    ],
    description: {
      fr: 'La berline électrique chinoise à silhouette fastback. Disponible à l’étude pour achat, flotte de direction ou import dédié.',
      en: 'The Chinese fastback electric sedan. Available for purchase study, executive fleet, or dedicated import order.',
    },
    features: [
      { fr: 'Silhouette berline fastback aérodynamique', en: 'Aerodynamic fastback sedan silhouette' },
      { fr: 'Habitacle 5 places confortable', en: 'Comfortable 5-passenger cabin' },
      { fr: 'Équipements selon marché et version', en: 'Market- and trim-dependent equipment' },
    ],
    availability: 'Sur commande',
    status: 'demo',
    technicalSpecs: [
      {
        label: { fr: 'Catégorie', en: 'Body style' },
        value: { fr: 'Berline 4 portes', en: '4-door sedan' },
      },
      {
        label: { fr: 'État', en: 'Condition' },
        value: { fr: 'Neuf', en: 'New' },
      },
      {
        label: { fr: 'Énergie', en: 'Energy' },
        value: { fr: 'Électrique', en: 'Electric' },
      },
      {
        label: { fr: 'Tarification', en: 'Pricing' },
        value: { fr: 'Sur demande', en: 'Upon request' },
      },
    ],
    isDemo: true,
  },
  {
    id: 'chery-tiggo-demo',
    brand: 'Chery',
    model: 'Tiggo Series',
    version: 'Configuration illustrative',
    year: 2025,
    condition: 'Neuf',
    mileageKm: 0,
    badge: { fr: 'En arrivage', en: 'Arriving' },
    price: {
      amount: null,
      currency: 'FCFA',
      priceOnRequest: true,
    },
    vehicleType: 'SUV',
    powertrain: {
      fr: 'Hybride rechargeable / Thermique selon version',
      en: 'Plug-in Hybrid / ICE depending on trim',
    },
    energy: 'Hybride rechargeable (PHEV)',
    transmission: {
      fr: 'Automatique',
      en: 'Automatic',
    },
    rangeKm: null,
    power: {
      fr: 'À confirmer selon version',
      en: 'To be confirmed by trim',
    },
    seats: 5,
    colors: [
      { fr: 'Noir profond (illustratif)', en: 'Deep Black (illustrative)' },
    ],
    images: [
      '/images/suv_chinese_hybrid_road_1795363148576.jpg',
      '/images/zeekr_studio_flagship_1794870368647.jpg',
    ],
    description: {
      fr: 'Le SUV hybride chinois polyvalent pensé pour la route et les trajets longue distance, avec suivi entretien et pièces dédié.',
      en: 'The versatile Chinese hybrid SUV designed for daily and long-distance travel, backed by dedicated parts and workshop support.',
    },
    features: [
      { fr: 'Polyvalence hybride / longue distance', en: 'Hybrid long-distance versatility' },
      { fr: 'Poste de conduite numérique double écran', en: 'Dual-screen digital cockpit interface' },
      { fr: 'Configuration 5 ou 7 places selon modèle', en: '5- or 7-seat configuration depending on model' },
    ],
    availability: 'Arrivage prévu',
    status: 'demo',
    technicalSpecs: [
      {
        label: { fr: 'Catégorie', en: 'Body style' },
        value: { fr: 'SUV polyvalent', en: 'Mid-size SUV' },
      },
      {
        label: { fr: 'État', en: 'Condition' },
        value: { fr: 'Neuf', en: 'New' },
      },
      {
        label: { fr: 'Énergie', en: 'Energy' },
        value: { fr: 'Hybride rechargeable (PHEV)', en: 'Plug-in Hybrid (PHEV)' },
      },
      {
        label: { fr: 'Tarification', en: 'Pricing' },
        value: { fr: 'Sur demande', en: 'Upon request' },
      },
    ],
    isDemo: true,
  },
  {
    id: 'geely-monjaro-demo',
    brand: 'Geely',
    model: 'Monjaro',
    version: 'Occasion vérifiée (exemple)',
    year: 2024,
    condition: 'Occasion',
    mileageKm: null,
    badge: { fr: 'À confirmer', en: 'To confirm' },
    price: {
      amount: null,
      currency: 'FCFA',
      priceOnRequest: true,
    },
    vehicleType: 'SUV',
    powertrain: {
      fr: 'Hybride / Thermique selon configuration',
      en: 'Hybrid / ICE depending on configuration',
    },
    energy: 'Hybride',
    transmission: {
      fr: 'Automatique',
      en: 'Automatic',
    },
    rangeKm: null,
    power: {
      fr: 'À confirmer selon version',
      en: 'To be confirmed by trim',
    },
    seats: 5,
    colors: [
      { fr: 'Gris basalte (illustratif)', en: 'Basalt Grey (illustrative)' },
    ],
    images: [
      '/images/zeekr_studio_flagship_1794870368647.jpg',
      '/images/suv_chinese_hybrid_road_1795363148576.jpg',
    ],
    description: {
      fr: 'Exemple de SUV chinois d’occasion inspecté en atelier avant mise en vente ou importation sélectionnée.',
      en: 'Sample pre-owned Chinese SUV structure inspected prior to sale or curated import.',
    },
    features: [
      { fr: 'Contrôle complet 4 étapes en atelier', en: '4-step workshop inspection template' },
      { fr: 'Pièces d’usure suivies par nos équipes', en: 'Wear parts supported by our supply chain' },
      { fr: 'Historique et kilométrage validés avant remise', en: 'History and mileage verified prior to handover' },
    ],
    availability: 'À confirmer',
    status: 'demo',
    technicalSpecs: [
      {
        label: { fr: 'Catégorie', en: 'Body style' },
        value: { fr: 'SUV routier', en: 'Full-size SUV' },
      },
      {
        label: { fr: 'État', en: 'Condition' },
        value: { fr: 'Occasion contrôlée', en: 'Inspected pre-owned' },
      },
      {
        label: { fr: 'Énergie', en: 'Energy' },
        value: { fr: 'Hybride', en: 'Hybrid' },
      },
      {
        label: { fr: 'Tarification', en: 'Pricing' },
        value: { fr: 'Sur demande', en: 'Upon request' },
      },
    ],
    isDemo: true,
  },
  {
    id: 'nio-es-demo',
    brand: 'NIO',
    model: 'Series SUV',
    version: 'Configuration illustrative',
    year: 2026,
    condition: 'Neuf',
    mileageKm: 0,
    badge: { fr: 'Sur commande', en: 'On order' },
    price: {
      amount: null,
      currency: 'FCFA',
      priceOnRequest: true,
    },
    vehicleType: 'SUV',
    powertrain: {
      fr: 'Motorisation électrique intégrale',
      en: 'Dual-motor electric powertrain',
    },
    energy: 'Électrique',
    transmission: {
      fr: 'Automatique',
      en: 'Automatic',
    },
    rangeKm: null,
    power: {
      fr: 'À confirmer selon version',
      en: 'To be confirmed by trim',
    },
    seats: 5,
    colors: [
      { fr: 'Gris titane (illustratif)', en: 'Titanium Grey (illustrative)' },
    ],
    images: [
      '/images/zeekr_studio_flagship_1794870368647.jpg',
      '/images/hero_chinese_ev_twilight_1795363149510.jpg',
    ],
    description: {
      fr: 'Design architectural et technologie embarquée chinoise de pointe. Disponible sur commande Import-Export ou location longue durée.',
      en: 'Architectural design and advanced Chinese onboard technology. Available for Import-Export order or long-term corporate rental.',
    },
    features: [
      { fr: 'Design extérieur épuré', en: 'Clean architectural exterior styling' },
      { fr: 'Habitacle orienté confort', en: 'Comfort-oriented interior layout' },
      { fr: 'Connectivité et aides à la conduite', en: 'Connected cabin and assistance features' },
    ],
    availability: 'Sur commande',
    status: 'demo',
    technicalSpecs: [
      {
        label: { fr: 'Catégorie', en: 'Body style' },
        value: { fr: 'SUV électrique', en: 'Electric SUV' },
      },
      {
        label: { fr: 'État', en: 'Condition' },
        value: { fr: 'Neuf', en: 'New' },
      },
      {
        label: { fr: 'Énergie', en: 'Energy' },
        value: { fr: 'Électrique', en: 'Electric' },
      },
      {
        label: { fr: 'Tarification', en: 'Pricing' },
        value: { fr: 'Sur demande', en: 'Upon request' },
      },
    ],
    isDemo: true,
  },
  {
    id: 'gwm-pickup-demo',
    brand: 'Great Wall Motors',
    model: 'Poer 4x4',
    version: 'Configuration illustrative',
    year: 2025,
    condition: 'Neuf',
    mileageKm: 0,
    badge: { fr: 'Disponible sur étude', en: 'On inquiry' },
    price: {
      amount: null,
      currency: 'FCFA',
      priceOnRequest: true,
    },
    vehicleType: 'Pick-up',
    powertrain: {
      fr: 'Motorisation thermique / hybride selon version',
      en: 'ICE / Hybrid depending on trim',
    },
    energy: 'Thermique',
    transmission: {
      fr: 'Automatique ou manuelle selon version',
      en: 'Automatic or manual depending on trim',
    },
    rangeKm: null,
    power: {
      fr: 'À confirmer selon version',
      en: 'To be confirmed by trim',
    },
    seats: 5,
    colors: [
      { fr: 'Gris satiné (illustratif)', en: 'Satin Grey (illustrative)' },
    ],
    images: [
      '/images/pickup_chinese_4x4_studio_1795363148884.jpg',
      '/images/pickup_chinese_4x4_studio_1795363148884.jpg',
    ],
    description: {
      fr: 'Pick-up chinois double cabine robuste adapté aux particuliers, chantiers légers et flottes d’entreprise.',
      en: 'Robust Chinese double-cab pick-up tailored for private owners and corporate vehicle fleets.',
    },
    features: [
      { fr: 'Double cabine 5 places polyvalente', en: 'Versatile 5-seat double cab' },
      { fr: 'Châssis adapté aux usages mixtes', en: 'Multi-purpose chassis architecture' },
      { fr: 'Disponibilité pièces et entretien atelier', en: 'Parts supply and workshop maintenance supported' },
    ],
    availability: 'À confirmer',
    status: 'demo',
    technicalSpecs: [
      {
        label: { fr: 'Catégorie', en: 'Body style' },
        value: { fr: 'Pick-up double cabine', en: 'Double-cab pick-up' },
      },
      {
        label: { fr: 'État', en: 'Condition' },
        value: { fr: 'Neuf / Flotte pro', en: 'New / Fleet' },
      },
      {
        label: { fr: 'Énergie', en: 'Energy' },
        value: { fr: 'Thermique / Selon version', en: 'ICE / Trim dependent' },
      },
      {
        label: { fr: 'Tarification', en: 'Pricing' },
        value: { fr: 'Sur demande', en: 'Upon request' },
      },
    ],
    isDemo: true,
  },
];
