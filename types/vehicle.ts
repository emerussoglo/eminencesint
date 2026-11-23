export type VehicleType =
  | 'SUV'
  | 'Berline'
  | 'Coupé'
  | 'Pick-up'
  | 'Monospace'
  | 'Utilitaire';

export type VehicleEnergy =
  | 'Électrique'
  | 'Hybride rechargeable (PHEV)'
  | 'Hybride'
  | 'Thermique';

export type VehicleCondition = 'Neuf' | 'Occasion';

export type VehicleAvailability =
  | 'À confirmer'
  | 'Sur commande'
  | 'Disponible'
  | 'Arrivage prévu';

export type VehicleStatus = 'demo' | 'active' | 'draft' | 'archived';

export interface LocalizedText {
  fr: string;
  en: string;
}

export interface VehiclePrice {
  amount: number | null;
  currency: string;
  priceOnRequest: boolean;
}

export interface VehicleTechnicalSpec {
  label: LocalizedText;
  value: LocalizedText;
}

export interface Vehicle {
  id: string;
  slug: string;
  brand: string;
  model: string;
  version: string;
  year: number;
  condition: VehicleCondition;
  mileageKm: number | null;
  badge?: LocalizedText;
  price: VehiclePrice;
  vehicleType: VehicleType;
  powertrain: LocalizedText;
  energy: VehicleEnergy;
  transmission: LocalizedText;
  rangeKm?: number | null;
  power: LocalizedText;
  seats: number;
  colors: LocalizedText[];
  images: string[];
  description: LocalizedText;
  features: LocalizedText[];
  availability: VehicleAvailability;
  status: VehicleStatus;
  technicalSpecs: VehicleTechnicalSpec[];
  /**
   * Indique explicitement qu'il s'agit d'une fiche de démonstration destinée
   * à illustrer la structure du catalogue de véhicules chinois.
   */
  isDemo: boolean;
}
