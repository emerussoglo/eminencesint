'use client';

import { useEffect, useState } from 'react';
import { MessageCircle, Share2, X } from 'lucide-react';
import { companyConfig, SupportedLang } from '../config/company';
import { TranslationDictionary } from '../i18n/translations';
import { Vehicle } from '../types/vehicle';
import { ResilientImage } from './ResilientImage';

interface VehicleDetailModalProps {
  vehicle: Vehicle | null;
  lang: SupportedLang;
  t: TranslationDictionary;
  onClose: () => void;
  onRequestQuote: (vehicleLabel: string) => void;
}

export function VehicleDetailModal({
  vehicle,
  lang,
  t,
  onClose,
  onRequestQuote,
}: VehicleDetailModalProps) {
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setActiveImageIdx(0);
    setCopied(false);
  }, [vehicle?.id]);

  useEffect(() => {
    if (!vehicle) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [vehicle, onClose]);

  if (!vehicle) return null;

  const images = vehicle.images.length > 0 ? vehicle.images : [''];
  const currentImg = images[activeImageIdx] || images[0];
  const vehicleLabel = `${vehicle.brand} ${vehicle.model}`;

  const prefilledWhatsappMsg = encodeURIComponent(
    lang === 'fr'
      ? `Bonjour Éminences Internationales, je souhaite obtenir des informations / un devis pour le véhicule chinois : ${vehicleLabel}.`
      : `Hello Éminences Internationales, I would like information / a quote for the Chinese vehicle: ${vehicleLabel}.`
  );

  const whatsappUrl = companyConfig.contact.whatsapp
    ? `https://wa.me/${companyConfig.contact.whatsapp.replace(
        /\D/g,
        ''
      )}?text=${prefilledWhatsappMsg}`
    : null;

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard fallback ignored
    }
  };

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="vehicle-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-card modal-card--vehicle">
        <div className="vehicle-modal__hero">
          <ResilientImage
            src={currentImg}
            alt={vehicleLabel}
            className="vehicle-modal__hero-img"
          />
          <div className="vehicle-modal__hero-scrim" />
          <button
            type="button"
            onClick={onClose}
            aria-label={t.modal.close}
            className="vehicle-modal__close"
          >
            <X className="icon-md" aria-hidden="true" />
          </button>
          <div className="vehicle-modal__hero-info">
            <p className="vehicle-modal__meta">
              {vehicle.brand} · {vehicle.vehicleType} · {vehicle.condition} ·{' '}
              {vehicle.year}
            </p>
            <h3 id="vehicle-modal-title" className="vehicle-modal__title">
              {vehicleLabel}
            </h3>
            <p className="vehicle-modal__version">{vehicle.version}</p>
          </div>
        </div>

        {images.length > 1 && (
          <div className="vehicle-modal__thumbs">
            {images.map((imgSrc, idx) => (
              <button
                key={`${imgSrc}-${idx}`}
                type="button"
                onClick={() => setActiveImageIdx(idx)}
                className={`vehicle-modal__thumb-btn${
                  activeImageIdx === idx ? ' is-active' : ''
                }`}
                aria-label={`${vehicleLabel} - ${idx + 1}`}
              >
                <ResilientImage
                  src={imgSrc}
                  alt={`${vehicleLabel} ${idx + 1}`}
                  className="vehicle-modal__hero-img"
                />
              </button>
            ))}
          </div>
        )}

        <div className="vehicle-modal__body">
          {vehicle.isDemo && (
            <div className="vehicle-modal__notice">{t.modal.demoNotice}</div>
          )}

          <p className="vehicle-modal__desc">{vehicle.description[lang]}</p>

          <dl className="vehicle-modal__facts">
            <div>
              <dt className="vehicle-modal__fact-label">
                {t.modal.conditionLabel}
              </dt>
              <dd className="vehicle-modal__fact-val">
                {vehicle.condition} ({vehicle.year})
              </dd>
            </div>
            <div>
              <dt className="vehicle-modal__fact-label">
                {t.modal.mileageLabel}
              </dt>
              <dd className="vehicle-modal__fact-val tabular-nums">
                {vehicle.mileageKm === null
                  ? t.modal.rangeNotSpecified
                  : `${vehicle.mileageKm.toLocaleString()} km`}
              </dd>
            </div>
            <div>
              <dt className="vehicle-modal__fact-label">
                {t.modal.powertrainLabel}
              </dt>
              <dd className="vehicle-modal__fact-val">
                {vehicle.powertrain[lang]}
              </dd>
            </div>
            <div>
              <dt className="vehicle-modal__fact-label">
                {t.modal.transmissionLabel}
              </dt>
              <dd className="vehicle-modal__fact-val">
                {vehicle.transmission[lang]}
              </dd>
            </div>
            <div>
              <dt className="vehicle-modal__fact-label">
                {t.modal.seatsLabel}
              </dt>
              <dd className="vehicle-modal__fact-val tabular-nums">
                {vehicle.seats}
              </dd>
            </div>
            <div>
              <dt className="vehicle-modal__fact-label">
                {t.modal.availabilityLabel}
              </dt>
              <dd className="vehicle-modal__fact-val">
                {vehicle.availability}
              </dd>
            </div>
          </dl>

          <div className="vehicle-modal__details-grid">
            <div>
              <h4 className="vehicle-modal__subhead">{t.modal.specsTitle}</h4>
              <dl className="vehicle-modal__specs-list">
                {vehicle.technicalSpecs.map((spec, idx) => (
                  <div key={idx} className="vehicle-modal__spec-row">
                    <dt className="vehicle-modal__spec-key">
                      {spec.label[lang]}
                    </dt>
                    <dd className="vehicle-modal__spec-val">
                      {spec.value[lang]}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <h4 className="vehicle-modal__subhead">
                {t.modal.featuresTitle}
              </h4>
              <ul className="vehicle-modal__features">
                {vehicle.features.map((feat, idx) => (
                  <li key={idx}>· {feat[lang]}</li>
                ))}
              </ul>

              <h4 className="vehicle-modal__subhead vehicle-modal__subhead--colors">
                {t.modal.colorsTitle}
              </h4>
              <p className="vehicle-modal__colors">
                {vehicle.colors.map((c) => c[lang]).join(' · ')}
              </p>
            </div>
          </div>

          <div className="vehicle-modal__footer">
            <div>
              <p className="vehicle-modal__price-label">
                {t.modal.priceLabel}
              </p>
              <p className="vehicle-modal__price-val">
                {vehicle.price.priceOnRequest
                  ? t.modal.priceOnRequest
                  : `${vehicle.price.amount?.toLocaleString(
                      lang === 'fr' ? 'fr-FR' : 'en-US'
                    )} ${vehicle.price.currency}`}
              </p>
            </div>

            <div className="vehicle-modal__actions">
              <button
                type="button"
                onClick={handleShare}
                className="vehicle-modal__share"
              >
                <Share2 className="icon-xs" aria-hidden="true" />
                <span>{copied ? t.modal.shareCopied : t.modal.shareCta}</span>
              </button>

              {whatsappUrl && (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="vehicle-modal__wa"
                >
                  <MessageCircle className="icon-xs" aria-hidden="true" />
                  <span>{t.modal.whatsappCta}</span>
                </a>
              )}

              <button
                type="button"
                onClick={() => {
                  onClose();
                  onRequestQuote(vehicleLabel);
                }}
                className="vehicle-modal__quote"
              >
                {t.modal.quoteCta}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
