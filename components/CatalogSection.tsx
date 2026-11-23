'use client';

import { useEffect, useMemo, useState } from 'react';
import { GitCompare, Search } from 'lucide-react';
import { SupportedLang } from '../config/company';
import { TranslationDictionary } from '../i18n/translations';
import {
  Vehicle,
  VehicleCondition,
  VehicleEnergy,
  VehicleType,
} from '../types/vehicle';
import { QuickSearchFilters } from './QuickSearchBar';
import { ResilientImage } from './ResilientImage';

interface CatalogSectionProps {
  vehicles: Vehicle[];
  lang: SupportedLang;
  t: TranslationDictionary;
  externalFilters?: QuickSearchFilters | null;
  comparedIds: string[];
  onToggleCompare: (id: string) => void;
  onOpenComparator: () => void;
  onClearCompare: () => void;
  onSelectVehicle: (vehicle: Vehicle) => void;
  onRequestQuote: (vehicleLabel: string) => void;
  onRequestCustomImport: () => void;
}

export function CatalogSection({
  vehicles,
  lang,
  t,
  externalFilters,
  comparedIds,
  onToggleCompare,
  onOpenComparator,
  onClearCompare,
  onSelectVehicle,
  onRequestQuote,
  onRequestCustomImport,
}: CatalogSectionProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string>('ALL');
  const [selectedBrand, setSelectedBrand] = useState<string>('ALL');
  const [selectedCondition, setSelectedCondition] = useState<string>('ALL');
  const [selectedEnergy, setSelectedEnergy] = useState<string>('ALL');
  const [sortBy, setSortBy] = useState<'default' | 'year' | 'brand'>('default');

  useEffect(() => {
    if (!externalFilters) return;
    setSelectedType(externalFilters.vehicleType || 'ALL');
    setSelectedBrand(externalFilters.brand || 'ALL');
    setSelectedCondition(externalFilters.condition || 'ALL');
    setSelectedEnergy(externalFilters.energy || 'ALL');
  }, [externalFilters]);

  const types = useMemo<VehicleType[]>(
    () => Array.from(new Set(vehicles.map((v) => v.vehicleType))),
    [vehicles]
  );

  const brands = useMemo<string[]>(
    () => Array.from(new Set(vehicles.map((v) => v.brand))),
    [vehicles]
  );

  const conditions = useMemo<VehicleCondition[]>(
    () => Array.from(new Set(vehicles.map((v) => v.condition))),
    [vehicles]
  );

  const energies = useMemo<VehicleEnergy[]>(
    () => Array.from(new Set(vehicles.map((v) => v.energy))),
    [vehicles]
  );

  const filtered = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    const list = vehicles.filter((v) => {
      const matchSearch =
        !q ||
        `${v.brand} ${v.model} ${v.vehicleType} ${v.energy}`
          .toLowerCase()
          .includes(q);
      const matchType = selectedType === 'ALL' || v.vehicleType === selectedType;
      const matchBrand = selectedBrand === 'ALL' || v.brand === selectedBrand;
      const matchCondition =
        selectedCondition === 'ALL' || v.condition === selectedCondition;
      const matchEnergy = selectedEnergy === 'ALL' || v.energy === selectedEnergy;
      return matchSearch && matchType && matchBrand && matchCondition && matchEnergy;
    });

    if (sortBy === 'year') {
      return [...list].sort((a, b) => b.year - a.year);
    }
    if (sortBy === 'brand') {
      return [...list].sort((a, b) => a.brand.localeCompare(b.brand));
    }
    return list;
  }, [
    vehicles,
    searchTerm,
    selectedType,
    selectedBrand,
    selectedCondition,
    selectedEnergy,
    sortBy,
  ]);

  const hasFilters =
    searchTerm.trim() !== '' ||
    selectedType !== 'ALL' ||
    selectedBrand !== 'ALL' ||
    selectedCondition !== 'ALL' ||
    selectedEnergy !== 'ALL';

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedType('ALL');
    setSelectedBrand('ALL');
    setSelectedCondition('ALL');
    setSelectedEnergy('ALL');
    setSortBy('default');
  };

  return (
    <section id="catalogue" className="catalog-section">
      <div className="container">
        {/* Concise Header */}
        <div className="catalog-header">
          <div>
            <p className="section-kicker section-kicker--accent">
              {t.catalog.kicker}
            </p>
            <h2 className="section-title">{t.catalog.title}</h2>
          </div>
          <div>
            <p className="catalog-header__sub">{t.catalog.subtitle}</p>
            <p className="catalog-header__note">{t.catalog.demoBanner}</p>
          </div>
        </div>

        {/* Intuitive, Lightweight Filter Bar */}
        <div className="catalog-toolbar">
          <div className="catalog-toolbar__top">
            <div className="catalog-search">
              <Search className="catalog-search__icon" aria-hidden="true" />
              <input
                type="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={t.catalog.searchPlaceholder}
                aria-label={t.catalog.searchPlaceholder}
                className="catalog-search__input"
              />
            </div>

            <select
              aria-label={t.quickSearch.brandLabel}
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="catalog-select"
            >
              <option value="ALL">{t.catalog.allBrands}</option>
              {brands.map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </select>

            <select
              aria-label={t.quickSearch.conditionLabel}
              value={selectedCondition}
              onChange={(e) => setSelectedCondition(e.target.value)}
              className="catalog-select"
            >
              <option value="ALL">{t.catalog.allConditions}</option>
              {conditions.map((cond) => (
                <option key={cond} value={cond}>
                  {cond}
                </option>
              ))}
            </select>

            <select
              aria-label={t.quickSearch.energyLabel}
              value={selectedEnergy}
              onChange={(e) => setSelectedEnergy(e.target.value)}
              className="catalog-select"
            >
              <option value="ALL">{t.catalog.allEnergies}</option>
              {energies.map((energy) => (
                <option key={energy} value={energy}>
                  {energy}
                </option>
              ))}
            </select>

            <select
              id="catalog-sort"
              aria-label={t.catalog.sortLabel}
              value={sortBy}
              onChange={(e) =>
                setSortBy(e.target.value as 'default' | 'year' | 'brand')
              }
              className="catalog-select"
            >
              <option value="default">{t.catalog.sortDefault}</option>
              <option value="year">{t.catalog.sortYearDesc}</option>
              <option value="brand">{t.catalog.sortBrandAsc}</option>
            </select>
          </div>

          <div
            className="catalog-chips no-scrollbar"
            role="group"
            aria-label={t.quickSearch.categoryLabel}
          >
            <button
              type="button"
              onClick={() => setSelectedType('ALL')}
              className={`catalog-chip${selectedType === 'ALL' ? ' is-active' : ''}`}
            >
              {t.catalog.allTypes}
            </button>
            {types.map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setSelectedType(type)}
                className={`catalog-chip${selectedType === type ? ' is-active' : ''}`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Comparator Bar when items selected */}
        {comparedIds.length > 0 && (
          <div className="catalog-compare-bar">
            <div className="catalog-compare-bar__info">
              <GitCompare
                className="catalog-compare-bar__icon"
                aria-hidden="true"
              />
              <span>
                {t.catalog.compareBarTitle} ({comparedIds.length}/3)
              </span>
            </div>
            <div className="catalog-compare-bar__actions">
              <button
                type="button"
                onClick={onClearCompare}
                className="catalog-compare-bar__clear"
              >
                {t.catalog.clearCompare}
              </button>
              <button
                type="button"
                onClick={onOpenComparator}
                className="catalog-compare-bar__go"
              >
                {t.catalog.compareNow}
              </button>
            </div>
          </div>
        )}

        {/* Result counter & reset */}
        <div className="catalog-meta-row">
          <p className="tabular-nums">
            <strong className="catalog-meta-row__strong">
              {filtered.length}
            </strong>{' '}
            {t.catalog.countSuffix}
          </p>
          {hasFilters && (
            <button
              type="button"
              onClick={resetFilters}
              className="catalog-reset-link"
            >
              {t.catalog.resetFilters}
            </button>
          )}
        </div>

        {/* Airy, Image-First Vehicle Cards Grid */}
        {filtered.length === 0 ? (
          <div className="catalog-empty">
            <p className="catalog-empty__title">{t.catalog.emptyTitle}</p>
            <p className="catalog-empty__desc">{t.catalog.emptyDesc}</p>
            <div className="catalog-empty__actions">
              <button
                type="button"
                onClick={resetFilters}
                className="catalog-btn-dark"
              >
                {t.catalog.resetFilters}
              </button>
              <button
                type="button"
                onClick={onRequestCustomImport}
                className="catalog-btn-accent"
              >
                {t.catalog.customOrderBtn}
              </button>
            </div>
          </div>
        ) : (
          <div className="catalog-grid">
            {filtered.map((vehicle) => {
              const isCompared = comparedIds.includes(vehicle.id);
              const statusLabel = vehicle.badge
                ? vehicle.badge[lang]
                : vehicle.condition;
              return (
                <article key={vehicle.id} className="vehicle-card">
                  <div className="vehicle-card__media">
                    <button
                      type="button"
                      onClick={() => onSelectVehicle(vehicle)}
                      className="vehicle-card__photo-btn"
                      aria-label={`${vehicle.brand} ${vehicle.model}`}
                    >
                      <ResilientImage
                        src={vehicle.images[0]}
                        alt={`${vehicle.brand} ${vehicle.model}`}
                        loading="lazy"
                        className="vehicle-card__img"
                      />
                    </button>

                    <span className="vehicle-card__badge">{statusLabel}</span>

                    <button
                      type="button"
                      onClick={() => onToggleCompare(vehicle.id)}
                      className={`vehicle-card__compare-btn${
                        isCompared ? ' is-selected' : ''
                      }`}
                    >
                      <GitCompare className="icon-xs" aria-hidden="true" />
                      <span>
                        {isCompared
                          ? t.catalog.comparedBtn
                          : t.catalog.compareBtn}
                      </span>
                    </button>
                  </div>

                  <div className="vehicle-card__body">
                    <div>
                      <div className="vehicle-card__kicker-row">
                        <span className="vehicle-card__brand">
                          {vehicle.brand}
                        </span>
                        <span>
                          {vehicle.vehicleType} · {vehicle.energy.split(' ')[0]}
                        </span>
                      </div>

                      <h3 className="vehicle-card__title">
                        {vehicle.brand} {vehicle.model}
                      </h3>

                      <p className="vehicle-card__specs">
                        {vehicle.condition} · {vehicle.year} ·{' '}
                        {vehicle.transmission[lang]}
                      </p>
                    </div>

                    <div className="vehicle-card__footer">
                      <div className="vehicle-card__price-row">
                        <span className="vehicle-card__condition">
                          {vehicle.availability}
                        </span>
                        <span className="vehicle-card__price">
                          {vehicle.price.priceOnRequest
                            ? t.catalog.priceOnRequest
                            : `${vehicle.price.amount?.toLocaleString(
                                lang === 'fr' ? 'fr-FR' : 'en-US'
                              )} ${vehicle.price.currency}`}
                        </span>
                      </div>

                      <div className="vehicle-card__actions">
                        <button
                          type="button"
                          onClick={() => onSelectVehicle(vehicle)}
                          className="vehicle-card__btn vehicle-card__btn--outline"
                        >
                          {t.catalog.viewSheet}
                        </button>
                        <button
                          type="button"
                          onClick={() =>
                            onRequestQuote(`${vehicle.brand} ${vehicle.model}`)
                          }
                          className="vehicle-card__btn vehicle-card__btn--primary"
                        >
                          {t.catalog.requestQuote}
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {/* Concise Custom Import Banner */}
        <div className="catalog-custom-banner">
          <div>
            <h3 className="catalog-custom-banner__title">
              {t.catalog.customOrderTitle}
            </h3>
            <p className="catalog-custom-banner__desc">
              {t.catalog.customOrderDesc}
            </p>
          </div>
          <button
            type="button"
            onClick={onRequestCustomImport}
            className="catalog-custom-banner__btn"
          >
            {t.catalog.customOrderBtn}
          </button>
        </div>
      </div>
    </section>
  );
}
