'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import { companyConfig } from '../config/company';
import { TranslationDictionary } from '../i18n/translations';
import {
  VehicleCondition,
  VehicleEnergy,
  VehicleType,
} from '../types/vehicle';

export interface QuickSearchFilters {
  vehicleType: string;
  brand: string;
  condition: string;
  energy: string;
}

interface QuickSearchBarProps {
  t: TranslationDictionary;
  onSearch: (filters: QuickSearchFilters) => void;
}

const VEHICLE_TYPES: VehicleType[] = [
  'SUV',
  'Berline',
  'Pick-up',
  'Coupé',
  'Monospace',
  'Utilitaire',
];

const ENERGIES: VehicleEnergy[] = [
  'Électrique',
  'Hybride rechargeable (PHEV)',
  'Hybride',
  'Thermique',
];

const CONDITIONS: VehicleCondition[] = ['Neuf', 'Occasion'];

export function QuickSearchBar({ t, onSearch }: QuickSearchBarProps) {
  const [vehicleType, setVehicleType] = useState('ALL');
  const [brand, setBrand] = useState('ALL');
  const [condition, setCondition] = useState('ALL');
  const [energy, setEnergy] = useState('ALL');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ vehicleType, brand, condition, energy });
  };

  return (
    <section
      aria-label={t.quickSearch.title}
      className="quick-search-section container"
    >
      <div className="quick-search-card">
        <div className="quick-search__header">
          <h2 className="quick-search__title">{t.quickSearch.title}</h2>
          <p className="quick-search__subtitle">{t.quickSearch.subtitle}</p>
        </div>

        <form onSubmit={handleSubmit} className="quick-search__form">
          <div>
            <label htmlFor="qs-type" className="quick-search__label">
              {t.quickSearch.categoryLabel}
            </label>
            <select
              id="qs-type"
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
              className="quick-search__select"
            >
              <option value="ALL">{t.quickSearch.allCategories}</option>
              {VEHICLE_TYPES.map((vt) => (
                <option key={vt} value={vt}>
                  {vt}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="qs-brand" className="quick-search__label">
              {t.quickSearch.brandLabel}
            </label>
            <select
              id="qs-brand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="quick-search__select"
            >
              <option value="ALL">{t.quickSearch.allBrands}</option>
              {companyConfig.catalogBrandScope.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="qs-condition" className="quick-search__label">
              {t.quickSearch.conditionLabel}
            </label>
            <select
              id="qs-condition"
              value={condition}
              onChange={(e) => setCondition(e.target.value)}
              className="quick-search__select"
            >
              <option value="ALL">{t.quickSearch.allConditions}</option>
              {CONDITIONS.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="qs-energy" className="quick-search__label">
              {t.quickSearch.energyLabel}
            </label>
            <select
              id="qs-energy"
              value={energy}
              onChange={(e) => setEnergy(e.target.value)}
              className="quick-search__select"
            >
              <option value="ALL">{t.quickSearch.allEnergies}</option>
              {ENERGIES.map((en) => (
                <option key={en} value={en}>
                  {en}
                </option>
              ))}
            </select>
          </div>

          <div className="quick-search__submit-wrap">
            <button type="submit" className="quick-search__submit">
              <Search className="icon-sm" aria-hidden="true" />
              <span>{t.quickSearch.searchBtn}</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
