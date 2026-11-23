'use client';

import { useEffect } from 'react';
import { X } from 'lucide-react';
import { SupportedLang } from '../config/company';
import { TranslationDictionary } from '../i18n/translations';
import { Vehicle } from '../types/vehicle';
import { ResilientImage } from './ResilientImage';

interface VehicleComparatorModalProps {
  vehicles: Vehicle[];
  isOpen: boolean;
  lang: SupportedLang;
  t: TranslationDictionary;
  onClose: () => void;
  onRemoveVehicle: (id: string) => void;
  onRequestQuote: (vehicleLabel: string) => void;
}

export function VehicleComparatorModal({
  vehicles,
  isOpen,
  lang,
  t,
  onClose,
  onRemoveVehicle,
  onRequestQuote,
}: VehicleComparatorModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || vehicles.length === 0) return null;

  const rows: { label: string; getValue: (v: Vehicle) => string }[] = [
    { label: t.comparatorModal.category, getValue: (v) => v.vehicleType },
    {
      label: t.comparatorModal.condition,
      getValue: (v) => `${v.condition} (${v.year})`,
    },
    { label: t.comparatorModal.energy, getValue: (v) => v.energy },
    {
      label: t.comparatorModal.transmission,
      getValue: (v) => v.transmission[lang],
    },
    { label: t.comparatorModal.seats, getValue: (v) => String(v.seats) },
    {
      label: t.comparatorModal.availability,
      getValue: (v) => v.availability,
    },
    {
      label: t.comparatorModal.pricing,
      getValue: (v) =>
        v.price.priceOnRequest
          ? t.catalog.priceOnRequest
          : `${v.price.amount?.toLocaleString(
              lang === 'fr' ? 'fr-FR' : 'en-US'
            )} ${v.price.currency}`,
    },
  ];

  return (
    <div
      className="modal-backdrop modal-backdrop--comparator"
      role="dialog"
      aria-modal="true"
      aria-labelledby="comparator-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-card modal-card--comparator">
        <div className="comparator__header">
          <div>
            <h3 id="comparator-modal-title" className="comparator__title">
              {t.comparatorModal.title}
            </h3>
            <p className="comparator__subtitle">{t.comparatorModal.subtitle}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={t.comparatorModal.close}
            className="comparator__close"
          >
            <X className="icon-md" aria-hidden="true" />
          </button>
        </div>

        <div className="comparator__table-wrap">
          <table className="comparator__table">
            <thead>
              <tr className="comparator__thead-row">
                <th className="comparator__th-label">
                  {t.comparatorModal.brandModel}
                </th>
                {vehicles.map((v) => (
                  <th key={v.id} className="comparator__th-item">
                    <div className="comparator-card">
                      <div className="comparator-card__remove-row">
                        <button
                          type="button"
                          onClick={() => onRemoveVehicle(v.id)}
                          aria-label={`${v.brand} ${v.model}`}
                          className="comparator-card__remove"
                        >
                          <X className="icon-sm" aria-hidden="true" />
                        </button>
                      </div>
                      <div className="comparator-card__media">
                        <ResilientImage
                          src={v.images[0]}
                          alt={`${v.brand} ${v.model}`}
                          className="comparator-card__img"
                        />
                      </div>
                      <p className="comparator-card__name">
                        {v.brand} {v.model}
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          onClose();
                          onRequestQuote(`${v.brand} ${v.model}`);
                        }}
                        className="comparator-card__quote"
                      >
                        {t.comparatorModal.requestQuote}
                      </button>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="comparator__tbody">
              {rows.map((row) => (
                <tr key={row.label} className="comparator__tr">
                  <td className="comparator__td-label">{row.label}</td>
                  {vehicles.map((v) => (
                    <td key={v.id} className="comparator__td-val">
                      {row.getValue(v)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
