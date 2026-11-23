import { AppRoute, InquiryType } from '../config/company';
import { LocalizedText } from '../types/vehicle';

export interface ApproachStep {
  number: string;
  title: LocalizedText;
  description: LocalizedText;
}

export interface ActivityPoleItem {
  id: string;
  number: string;
  title: LocalizedText;
  description: LocalizedText;
  ctaLabel: LocalizedText;
  targetRoute: AppRoute;
  inquiryType?: InquiryType;
}

export interface KeyMetricItem {
  id: string;
  value: string;
  label: LocalizedText;
  note: LocalizedText;
}

export interface EditorialCardItem {
  id: string;
  image: string;
  title: LocalizedText;
  description: LocalizedText;
  actionType: 'catalog' | 'import' | 'rental' | 'workshop' | 'contact' | 'about';
  inquiryType?: InquiryType;
}

export interface PartsFamilyItem {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
}

export interface RentalCategoryItem {
  id: string;
  title: LocalizedText;
  usage: LocalizedText;
  transmission: LocalizedText;
  pricing: LocalizedText;
}

export interface FaqItem {
  id: string;
  question: LocalizedText;
  answer: LocalizedText;
}

export type LegalDocKey = 'legal' | 'privacy' | 'terms';

export interface LegalDocument {
  key: LegalDocKey;
  title: LocalizedText;
  sections: {
    heading: LocalizedText;
    body: LocalizedText;
  }[];
}

export interface BrandLogoItem {
  id: string;
  name: string;
  logoUrl: string;
  tall?: boolean;
}

/**
 * Sélection de constructeurs automobiles chinois au cœur des activités d'Éminences Internationales.
 * Ne constitue pas une liste de partenariats officiels.
 */
export const CHINESE_BRAND_LOGOS: BrandLogoItem[] = [
  {
    id: 'byd',
    name: 'BYD',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/99/BYD_Company%2C_Ltd._-_Logo.svg',
    tall: true,
  },
  {
    id: 'zeekr',
    name: 'Zeekr',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Zeekr_logo.svg',
  },
  {
    id: 'chery',
    name: 'Chery',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Chery_logo.svg',
    tall: true,
  },
  {
    id: 'geely',
    name: 'Geely',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Geely_Auto_2023.svg',
    tall: true,
  },
  {
    id: 'omoda',
    name: 'Omoda',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Omoda_wordmark.svg',
  },
  {
    id: 'jaecoo',
    name: 'Jaecoo',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Jaecoo_wordmark.svg',
  },
  {
    id: 'exeed',
    name: 'Exeed',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Exeed_logo.png',
  },
  {
    id: 'jetour',
    name: 'Jetour',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Jetour_logo.svg',
  },
  {
    id: 'leapmotor',
    name: 'Leapmotor',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Leapmotor_logo.png',
    tall: true,
  },
  {
    id: 'xpeng',
    name: 'XPeng',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/XPeng_logo.svg',
  },
];

/**
 * 4 Pôles d'activité issus du Cahier des Charges, strictement recentrés
 * sur la spécialisation exclusive véhicules automobiles chinois.
 */
export const ACTIVITY_POLES: ActivityPoleItem[] = [
  {
    id: 'pole-vehicles',
    number: '01',
    title: {
      fr: 'Véhicules Chinois',
      en: 'Chinese Vehicles',
    },
    description: {
      fr: 'Vente de véhicules chinois neufs et d’occasion contrôlés (SUV, berlines, pick-ups, citadines et utilitaires légers) et solutions de location.',
      en: 'Sales of new and inspected pre-owned Chinese vehicles (SUVs, sedans, pick-ups, compact cars, and light vans) plus rental solutions.',
    },
    ctaLabel: { fr: 'Explorer le catalogue', en: 'Explore catalog' },
    targetRoute: 'vehicles',
  },
  {
    id: 'pole-import',
    number: '02',
    title: {
      fr: 'Import-Export Chine',
      en: 'China Import-Export',
    },
    description: {
      fr: 'Commande directe depuis la Chine sur cahier des charges client : recherche modèle, inspection, expédition et accompagnement jusqu’à la livraison.',
      en: 'Direct ordering from China tailored to your brief: model sourcing, pre-shipment inspection, freight, and delivery handover.',
    },
    ctaLabel: { fr: 'Découvrir le parcours', en: 'See the process' },
    targetRoute: 'import-export',
    inquiryType: 'import',
  },
  {
    id: 'pole-parts',
    number: '03',
    title: {
      fr: 'Pièces & Accessoires',
      en: 'Parts & Accessories',
    },
    description: {
      fr: 'Fourniture de pièces détachées d’origine, accessoires, pneumatiques et lubrifiants adaptés aux constructeurs automobiles chinois.',
      en: 'Supply of genuine spare parts, accessories, tires, and lubricants tailored for Chinese automotive manufacturers.',
    },
    ctaLabel: { fr: 'Demander une pièce', en: 'Request a part' },
    targetRoute: 'services-workshop',
    inquiryType: 'parts',
  },
  {
    id: 'pole-workshop',
    number: '04',
    title: {
      fr: 'Atelier & Services Pros',
      en: 'Workshop & Pro Services',
    },
    description: {
      fr: 'Entretien périodique, diagnostic mécanique, électronique EV/Hybride, carrosserie, peinture et accompagnement de flottes d’entreprises.',
      en: 'Routine maintenance, mechanical & EV/Hybrid diagnostics, bodywork, paint, and dedicated corporate fleet management.',
    },
    ctaLabel: { fr: 'Prendre rendez-vous', en: 'Book service' },
    targetRoute: 'services-workshop',
    inquiryType: 'workshop',
  },
];

/**
 * Indicateurs factuels alignés sur le périmètre confirmé (aucune métrique commerciale inventée).
 */
export const KEY_METRICS: KeyMetricItem[] = [
  {
    id: 'metric-exclusive',
    value: '100 %',
    label: { fr: 'Marques chinoises', en: 'Chinese car brands' },
    note: { fr: 'Spécialisation exclusive', en: 'Exclusive focus' },
  },
  {
    id: 'metric-poles',
    value: '04',
    label: { fr: 'Pôles automobiles', en: 'Automotive divisions' },
    note: { fr: 'Vente · Import · Pièces · Atelier', en: 'Sales · Import · Parts · Workshop' },
  },
  {
    id: 'metric-brands',
    value: '15+',
    label: { fr: 'Constructeurs chinois', en: 'Chinese manufacturers' },
    note: { fr: 'Référençables sur devis', en: 'Sourceable on request' },
  },
  {
    id: 'metric-response',
    value: '24 h',
    label: { fr: 'Objectif de réponse', en: 'Target response time' },
    note: { fr: 'Étude devis & disponibilité', en: 'Quote & stock check' },
  },
];

export const IMPORT_EXPORT_STEPS: ApproachStep[] = [
  {
    number: '01',
    title: {
      fr: 'Vous choisissez & validez le devis',
      en: 'Model selection & quotation',
    },
    description: {
      fr: 'Sélectionnez un modèle chinois au catalogue ou transmettez vos critères (marque, version, motorisation, budget) pour recevoir une étude chiffrée complète.',
      en: 'Choose a Chinese model from the catalog or submit your requirements (brand, trim, powertrain, budget) to receive a full itemized quotation.',
    },
  },
  {
    number: '02',
    title: {
      fr: 'Commande & inspection en Chine',
      en: 'Sourcing & inspection in China',
    },
    description: {
      fr: 'Sécurisation du véhicule auprès des filières chinoises et contrôle documentaire et visuel complet avant l’embarquement.',
      en: 'Securing your vehicle through verified Chinese supply channels with full visual and documentary verification before dispatch.',
    },
  },
  {
    number: '03',
    title: {
      fr: 'Expédition & formalités douanières',
      en: 'Shipping & customs clearance',
    },
    description: {
      fr: 'Suivi du transport international, gestion du dossier documentaire et accompagnement aux étapes d’importation.',
      en: 'International freight tracking, shipping documentation management, and structured customs clearance guidance.',
    },
  },
  {
    number: '04',
    title: {
      fr: 'Livraison & mise en main',
      en: 'Delivery & vehicle handover',
    },
    description: {
      fr: 'Contrôle final avant restitution, remise des documents et continuité de suivi pour les pièces et l’entretien.',
      en: 'Final pre-delivery inspection, paperwork handover, and ongoing parts and workshop support.',
    },
  },
];

export const SERVICE_CARDS: EditorialCardItem[] = [
  {
    id: 'srv-import',
    image: '/images/hero_chinese_ev_twilight_1795363149510.jpg',
    title: {
      fr: 'Import-Export depuis la Chine',
      en: 'Direct Import-Export from China',
    },
    description: {
      fr: 'Commande personnalisée de véhicules chinois neufs ou récents avec suivi étape par étape jusqu’à la livraison.',
      en: 'Tailored sourcing and import of new or late-model Chinese vehicles with end-to-end milestone tracking.',
    },
    actionType: 'import',
    inquiryType: 'import',
  },
  {
    id: 'srv-location',
    image: '/images/suv_chinese_hybrid_road_1795363148576.jpg',
    title: {
      fr: 'Location de Véhicules Chinois',
      en: 'Chinese Vehicle Rental',
    },
    description: {
      fr: 'Courte ou longue durée sur une sélection de SUV, berlines et pick-ups chinois récents pour particuliers et professionnels.',
      en: 'Short- or long-term rental across modern Chinese SUVs, sedans, and pick-ups for private and business clients.',
    },
    actionType: 'rental',
    inquiryType: 'rental',
  },
  {
    id: 'srv-parts',
    image: '/images/service_cockpit_tech_1795369421623.jpg',
    title: {
      fr: 'Pièces & Accessoires Chinois',
      en: 'Parts & Accessories for Chinese Cars',
    },
    description: {
      fr: 'Pièces détachées d’origine, accessoires, pneumatiques et lubrifiants dédiés exclusivement aux marques chinoises.',
      en: 'Genuine spare parts, accessories, tires, and lubricants specifically matched to Chinese automotive brands.',
    },
    actionType: 'workshop',
    inquiryType: 'parts',
  },
  {
    id: 'srv-atelier',
    image: '/images/service_showroom_consult_1795369421662.jpg',
    title: {
      fr: 'Atelier, Entretien & Carrosserie',
      en: 'Workshop, Servicing & Bodywork',
    },
    description: {
      fr: 'Entretien, mécanique, électricité, diagnostic EV/hybride, carrosserie et peinture spécialisés pour véhicules chinois.',
      en: 'Preventive maintenance, mechanical & EV/hybrid repairs, bodywork, and paint dedicated to Chinese models.',
    },
    actionType: 'workshop',
    inquiryType: 'workshop',
  },
  {
    id: 'srv-flottes',
    image: '/images/sedan_chinese_ev_studio_1795363148986.jpg',
    title: {
      fr: 'Flottes & Entreprises',
      en: 'Corporate Fleets & Businesses',
    },
    description: {
      fr: 'Accompagnement dédié pour équiper votre entreprise en véhicules chinois avec contrat d’entretien et devis global.',
      en: 'Dedicated advisory to equip your organization with Chinese vehicles backed by maintenance and unified quoting.',
    },
    actionType: 'contact',
    inquiryType: 'fleet',
  },
];

export const VALUE_CARDS: EditorialCardItem[] = [
  {
    id: 'val-exigence',
    image: '/images/service_showroom_consult_1795369421662.jpg',
    title: {
      fr: 'Spécialisation 100 % Chinoise',
      en: '100% Chinese Car Expertise',
    },
    description: {
      fr: 'Un positionnement clair et assumé : Éminences Internationales se consacre exclusivement aux marques automobiles chinoises et à leur maîtrise technique.',
      en: 'A sharp, dedicated positioning: Éminences Internationales focuses exclusively on Chinese automotive brands and their technical ecosystem.',
    },
    actionType: 'about',
  },
  {
    id: 'val-transparence',
    image: '/images/values_team_horizon_1795369421937.jpg',
    title: {
      fr: 'Transparence & Devis Clairs',
      en: 'Transparency & Clear Quoting',
    },
    description: {
      fr: 'Fiches détaillées, étapes d’importation documentées et chiffrage lisible sans données approximatives ni promesses opaques.',
      en: 'Structured specification sheets, documented import milestones, and clear itemized quotes with zero guesswork.',
    },
    actionType: 'about',
  },
  {
    id: 'val-continuity',
    image: '/images/values_sustainability_road_1795369423025.jpg',
    title: {
      fr: 'Un Seul Interlocuteur Durable',
      en: 'One End-to-End Partner',
    },
    description: {
      fr: 'De l’achat ou l’importation jusqu’à l’approvisionnement en pièces et l’entretien en atelier, vous restez accompagné dans la durée.',
      en: 'From initial purchase or import all the way through spare parts sourcing and workshop servicing, you rely on one committed team.',
    },
    actionType: 'about',
  },
];

export const PARTS_FAMILIES: PartsFamilyItem[] = [
  {
    id: 'part-oem',
    title: {
      fr: 'Pièces détachées d’origine',
      en: 'Genuine Spare Parts',
    },
    description: {
      fr: 'Composants moteur, freinage, suspension, filtration, optiques et éléments de carrosserie pour modèles chinois.',
      en: 'Engine, braking, suspension, filtration, lighting, and body components tailored to Chinese models.',
    },
  },
  {
    id: 'part-accessories',
    title: {
      fr: 'Accessoires & Équipements',
      en: 'Accessories & Equipment',
    },
    description: {
      fr: 'Tapis sur mesure, solutions de recharge véhicule électrique, attelages et équipements de confort.',
      en: 'Custom floor protection, EV charging accessories, roof carriers, and cabin equipment.',
    },
  },
  {
    id: 'part-tires',
    title: {
      fr: 'Pneumatiques',
      en: 'Tires & Wheels',
    },
    description: {
      fr: 'Sélection de pneumatiques adaptés aux berlines, SUV électriques/hybrides et pick-ups chinois.',
      en: 'Tires matched to Chinese sedans, electric/hybrid SUVs, and double-cab pick-ups.',
    },
  },
  {
    id: 'part-lubricants',
    title: {
      fr: 'Lubrifiants & Fluides',
      en: 'Lubricants & Fluids',
    },
    description: {
      fr: 'Huiles moteur, liquides de refroidissement batterie, fluides de transmission et consommables conformes aux spécifications constructeurs.',
      en: 'Engine oils, battery coolants, transmission fluids, and consumables meeting manufacturer standards.',
    },
  },
];

export const WORKSHOP_SERVICES: PartsFamilyItem[] = [
  {
    id: 'wk-maintenance',
    title: {
      fr: 'Entretien périodique',
      en: 'Periodic Maintenance',
    },
    description: {
      fr: 'Vidanges, remplacements de filtres, contrôles de freinage, pneumatiques et bilans préventifs complets.',
      en: 'Oil changes, filter replacements, brake checks, tire servicing, and full preventive inspections.',
    },
  },
  {
    id: 'wk-mechanical',
    title: {
      fr: 'Réparation mécanique',
      en: 'Mechanical Repairs',
    },
    description: {
      fr: 'Intervention sur trains roulants, transmission, refroidissement, suspension et climatisation pour véhicules chinois.',
      en: 'Work on drivetrain, transmission, cooling, suspension, and climate systems for Chinese vehicles.',
    },
  },
  {
    id: 'wk-electrical',
    title: {
      fr: 'Électricité & Diagnostic EV / Hybride',
      en: 'Electrical & EV / Hybrid Diagnostics',
    },
    description: {
      fr: 'Diagnostic électronique embarqué, capteurs, systèmes hybrides rechargeables et contrôle électrique spécialisé.',
      en: 'Onboard electronic diagnostics, sensors, plug-in hybrid systems, and specialized electrical checks.',
    },
  },
  {
    id: 'wk-bodywork',
    title: {
      fr: 'Carrosserie & Peinture',
      en: 'Bodywork & Paint',
    },
    description: {
      fr: 'Remise en état carrosserie, débosselage, vitrage et peinture soignée selon teintes d’origine constructeurs chinois.',
      en: 'Body panel restoration, dent repair, glazing, and color-matched refinishing for Chinese automotive finishes.',
    },
  },
];

export const WORKSHOP_PROCESS: ApproachStep[] = [
  {
    number: '01',
    title: { fr: 'Diagnostic', en: 'Diagnostics' },
    description: {
      fr: 'Prise en charge du véhicule chinois et contrôle technique ciblé selon les symptômes ou l’échéance d’entretien.',
      en: 'Intake of your Chinese vehicle and targeted inspection based on symptoms or scheduled service intervals.',
    },
  },
  {
    number: '02',
    title: { fr: 'Devis transparent', en: 'Clear Quotation' },
    description: {
      fr: 'Présentation détaillée des pièces nécessaires, de la main-d’œuvre et du délai estimatif avant toute intervention.',
      en: 'Detailed breakdown of required parts, labor, and estimated turnaround prior to any work.',
    },
  },
  {
    number: '03',
    title: { fr: 'Intervention', en: 'Service Execution' },
    description: {
      fr: 'Réalisation de l’entretien, de la réparation ou des travaux de carrosserie avec pièces conformes.',
      en: 'Execution of maintenance, mechanical/electrical repair, or bodywork using compliant components.',
    },
  },
  {
    number: '04',
    title: { fr: 'Contrôle & livraison', en: 'Quality Check & Return' },
    description: {
      fr: 'Vérifications finales sur essai et restitution du véhicule prêt à reprendre la route.',
      en: 'Final operational verification and handover of your vehicle ready for the road.',
    },
  },
];

export const RENTAL_CATEGORIES: RentalCategoryItem[] = [
  {
    id: 'rent-sedan',
    title: { fr: 'Berlines chinoises (Électrique / Hybride)', en: 'Chinese Sedans (EV / Hybrid)' },
    usage: { fr: 'Déplacements urbains, rendez-vous d’affaires et transferts', en: 'Urban travel, business meetings, and executive transfers' },
    transmission: { fr: 'Boîte automatique · 5 places', en: 'Automatic · 5 seats' },
    pricing: { fr: 'Tarif sur devis', en: 'Rate on request' },
  },
  {
    id: 'rent-suv',
    title: { fr: 'SUV chinois 5 & 7 places', en: 'Chinese SUVs (5 & 7 Seats)' },
    usage: { fr: 'Trajets familiaux, déplacements interurbains et missions pro', en: 'Family trips, intercity travel, and professional missions' },
    transmission: { fr: 'Automatique · Confort & grand coffre', en: 'Automatic · High comfort & luggage space' },
    pricing: { fr: 'Tarif sur devis', en: 'Rate on request' },
  },
  {
    id: 'rent-pickup',
    title: { fr: 'Pick-ups 4x4 & Utilitaires légers chinois', en: 'Chinese 4x4 Pick-ups & Light Vans' },
    usage: { fr: 'Missions terrain, logistique et entreprises', en: 'Field operations, logistics, and corporate teams' },
    transmission: { fr: '4x4 / Double cabine · Courte & longue durée', en: '4x4 / Double cab · Short & long term' },
    pricing: { fr: 'Tarif sur devis', en: 'Rate on request' },
  },
];

export const TRUST_COMMITMENTS: ApproachStep[] = [
  {
    number: '01',
    title: {
      fr: 'Spécialisation exclusive marques chinoises',
      en: 'Exclusive Chinese automotive specialization',
    },
    description: {
      fr: 'Toutes nos gammes, notre sourcing en Chine, nos pièces et nos interventions atelier portent exclusivement sur les constructeurs automobiles chinois.',
      en: 'Our entire catalog, China sourcing, parts supply, and workshop skills focus strictly on Chinese automotive manufacturers.',
    },
  },
  {
    number: '02',
    title: {
      fr: 'Devis structuré & réponse rapide',
      en: 'Structured quotes & responsive handling',
    },
    description: {
      fr: 'Chaque demande d’achat, d’import-export, de location, de pièce ou de rendez-vous atelier reçoit un retour structuré sous objectif de 24 h ouvrées.',
      en: 'Every inquiry—purchase, import-export, rental, spare parts, or workshop booking—receives a clear response targeting 24 business hours.',
    },
  },
  {
    number: '03',
    title: {
      fr: 'Accompagnement de bout en bout',
      en: 'End-to-end accompaniment',
    },
    description: {
      fr: 'Un interlocuteur unique du choix du modèle jusqu’à l’expédition, la livraison, les pièces d’origine et l’entretien.',
      en: 'A single point of contact from model selection through shipping, handover, genuine parts, and after-sales servicing.',
    },
  },
  {
    number: '04',
    title: {
      fr: 'Zéro opacité sur les fiches et tarifs',
      en: 'Transparent vehicle & pricing records',
    },
    description: {
      fr: 'Les véhicules de démonstration sont explicitement signalés, et les prix définitifs sont confirmés sur devis selon configuration et destination.',
      en: 'Demonstration templates are clearly labeled, while final pricing is confirmed by formal quotation according to trim and destination.',
    },
  },
];

export const COMMERCIAL_PILLARS: ApproachStep[] = [
  {
    number: '01',
    title: {
      fr: 'Vente & Import-Export dédié Chine',
      en: 'Dedicated Chinese Vehicle Sales & Import',
    },
    description: {
      fr: 'Un positionnement 100 % concentré sur les constructeurs automobiles chinois : véhicules neufs, occasions contrôlées et importations sur commande.',
      en: 'A 100% focused positioning on Chinese automotive brands: new cars, inspected pre-owned units, and custom import orders.',
    },
  },
  {
    number: '02',
    title: {
      fr: 'Pièces détachées & Atelier spécialisé',
      en: 'Genuine Parts & Specialized Workshop',
    },
    description: {
      fr: 'Continuité de service après l’acquisition grâce à la fourniture de pièces d’origine, pneumatiques, lubrifiants et entretien mécanique ou EV.',
      en: 'Long-term ownership continuity through genuine Chinese parts, tires, lubricants, and mechanical or EV servicing.',
    },
  },
  {
    number: '03',
    title: {
      fr: 'Location & Gestion de flottes',
      en: 'Rental & Corporate Fleet Solutions',
    },
    description: {
      fr: 'Mise à disposition courte ou longue durée et accompagnement global des entreprises souhaitant déployer une flotte de véhicules chinois.',
      en: 'Short- or long-term rental and full advisory for organizations deploying Chinese automotive fleets.',
    },
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-brands',
    question: {
      fr: 'Proposez-vous uniquement des marques automobiles chinoises ?',
      en: 'Do you exclusively offer Chinese automotive brands?',
    },
    answer: {
      fr: 'Oui. Éminences Internationales est spécialisée exclusivement dans les véhicules automobiles chinois (BYD, Zeekr, Chery, Geely, Omoda & Jaecoo, Jetour, Exeed, Leapmotor, Changan, Great Wall Motors, NIO, etc.). Aucune autre marque automobile n’est commercialisée sur notre plateforme.',
      en: 'Yes. Éminences Internationales specializes exclusively in Chinese automotive brands (BYD, Zeekr, Chery, Geely, Omoda & Jaecoo, Jetour, Exeed, Leapmotor, Changan, Great Wall Motors, NIO, etc.). No non-Chinese car brands are marketed on our platform.',
    },
  },
  {
    id: 'faq-import',
    question: {
      fr: 'Comment fonctionne la commande Import-Export depuis la Chine ?',
      en: 'How does the Import-Export process from China work?',
    },
    answer: {
      fr: 'Le parcours se déroule en 4 étapes : vous sélectionnez le modèle ou décrivez votre besoin pour recevoir un devis personnalisé ; nous sécurisons et inspectons le véhicule en Chine ; nous suivons l’expédition et les formalités douanières ; enfin, nous organisons la livraison et la remise des clés.',
      en: 'Our 4-step workflow covers: model selection and tailored quotation; sourcing and pre-shipment inspection in China; international freight and customs documentation; and final delivery handover.',
    },
  },
  {
    id: 'faq-parts-workshop',
    question: {
      fr: 'Fournissez-vous les pièces détachées et l’entretien après l’achat ?',
      en: 'Do you also provide spare parts and workshop servicing after purchase?',
    },
    answer: {
      fr: 'Oui. Nos pôles Pièces & Accessoires et Atelier couvrent exclusivement les véhicules chinois : pièces d’origine, pneumatiques, lubrifiants, entretien périodique, mécanique, diagnostic électrique/EV, carrosserie et peinture.',
      en: 'Yes. Our Parts & Accessories and Workshop divisions focus specifically on Chinese vehicles: genuine parts, tires, lubricants, routine maintenance, mechanical repairs, EV/hybrid diagnostics, bodywork, and paint.',
    },
  },
  {
    id: 'faq-rental',
    question: {
      fr: 'Comment louer un véhicule chinois ou demander un devis ?',
      en: 'How can I rent a Chinese vehicle or request a formal quote?',
    },
    answer: {
      fr: 'Depuis la page dédiée Contact & Devis (ou les pages Location, Import-Export et Pièces & Atelier), sélectionnez l’objet de votre demande et précisez le modèle ou la prestation souhaitée afin de recevoir une proposition sur mesure.',
      en: 'Through our dedicated Contact & Quote page (or the Rental, Import-Export, and Parts & Workshop pages), choose your inquiry type and specify your preferred model or service to receive a tailored proposal.',
    },
  },
  {
    id: 'faq-demo-notice',
    question: {
      fr: 'Les modèles et informations affichés sont-ils définitifs ?',
      en: 'Are the currently displayed listings final?',
    },
    answer: {
      fr: 'Conformément au cahier des charges, les fiches marquées « Fiche illustrative » servent à présenter l’architecture du catalogue. Les stocks disponibles, kilométrages définitifs et tarifs sont confirmés sur devis ou lors de la mise à jour officielle du parc.',
      en: 'As specified in our blueprint, entries marked "Illustrative entry" demonstrate catalog structure. Confirmed availability, final mileage, and itemized pricing are confirmed upon quotation.',
    },
  },
];

export const LEGAL_DOCUMENTS: Record<LegalDocKey, LegalDocument> = {
  legal: {
    key: 'legal',
    title: {
      fr: 'Mentions légales (modèle à compléter)',
      en: 'Legal Notice (template to complete)',
    },
    sections: [
      {
        heading: { fr: 'Éditeur du site', en: 'Website Publisher' },
        body: {
          fr: 'Raison sociale : Éminences Internationales. Forme juridique, capital social, numéro d’immatriculation, adresse du siège social, téléphone, WhatsApp et adresse e-mail officielle : [À renseigner avant mise en production].',
          en: 'Company name: Éminences Internationales. Legal form, share capital, registration number, registered office address, phone, WhatsApp, and official email: [To be completed prior to launch].',
        },
      },
      {
        heading: { fr: 'Responsable de publication & Hébergement', en: 'Publication Director & Hosting' },
        body: {
          fr: 'Nom du responsable de la publication et coordonnées de l’hébergeur : [À renseigner].',
          en: 'Publication director name and hosting provider details: [To be completed].',
        },
      },
    ],
  },
  privacy: {
    key: 'privacy',
    title: {
      fr: 'Politique de confidentialité (modèle à compléter)',
      en: 'Privacy Policy (template to complete)',
    },
    sections: [
      {
        heading: { fr: 'Collecte des données de contact', en: 'Collection of Contact Data' },
        body: {
          fr: 'Les informations transmises via les formulaires (devis véhicule, import-export, location, demande de pièce, rendez-vous atelier) ont pour seule finalité le traitement de votre demande commerciale par Éminences Internationales. Durée de conservation légale applicable au pays d’exploitation : [À renseigner].',
          en: 'Information submitted through forms (vehicle quote, import-export, rental, parts inquiry, workshop booking) is used solely to process your request with Éminences Internationales. Applicable retention period: [To be completed].',
        },
      },
      {
        heading: { fr: 'Vos droits', en: 'Your Rights' },
        body: {
          fr: 'Modalités d’exercice des droits d’accès, de rectification et de suppression : [Adresse e-mail de conformité à renseigner].',
          en: 'Procedure for exercising access, rectification, and deletion rights: [Compliance contact email to be completed].',
        },
      },
    ],
  },
  terms: {
    key: 'terms',
    title: {
      fr: 'Conditions générales (modèle à compléter)',
      en: 'Terms & Conditions (template to complete)',
    },
    sections: [
      {
        heading: { fr: 'Objet et présentation des véhicules chinois', en: 'Scope & Chinese Vehicle Listings' },
        body: {
          fr: 'Les informations présentées sur le site ont un caractère indicatif et évolutif. Seuls les devis et contrats établis par Éminences Internationales font foi pour la vente, l’import-export, la location, les pièces détachées et les prestations d’atelier.',
          en: 'Information presented on this website is indicative and subject to updates. Only formal quotations and contracts issued by Éminences Internationales are binding for sales, import-export, rental, spare parts, and workshop services.',
        },
      },
    ],
  },
};
