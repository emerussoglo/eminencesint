'use client';

import { useEffect, useState } from 'react';
import { MessageCircle, Share2, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { companyConfig, SupportedLang } from '@/config/company';
import { TranslationDictionary } from '@/i18n/translations';
import { Vehicle } from '@/types/vehicle';
import { DEMO_VEHICLES } from '@/data/vehicles';
import { ResilientImage } from './ResilientImage';
import { BreadcrumbBar } from './BreadcrumbBar';

interface VehicleDetailPageProps {
  vehicle: Vehicle;
  lang: SupportedLang;
  t: TranslationDictionary;
  onBackHome: () => void;
}

export function VehicleDetailPage({ vehicle, lang, t, onBackHome }: VehicleDetailPageProps) {
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [copied, setCopied] = useState(false);
  const [similarVehicles, setSimilarVehicles] = useState<Vehicle[]>([]);

  useEffect(() => {
    // Find similar vehicles (same brand or same type, excluding current)
    const similar = DEMO_VEHICLES.filter(
      (v) => v.id !== vehicle.id && (v.brand === vehicle.brand || v.vehicleType === vehicle.vehicleType)
    ).slice(0, 3);
    setSimilarVehicles(similar);
  }, [vehicle]);

  const images = vehicle.images.length > 0 ? vehicle.images : [''];
  const currentImg = images[activeImageIdx] || images[0];
  const vehicleLabel = `${vehicle.brand} ${vehicle.model}`;

  const prefilledWhatsappMsg = encodeURIComponent(
    lang === 'fr'
      ? `Bonjour Éminences Internationales, je souhaite obtenir des informations / un devis pour le véhicule chinois : ${vehicleLabel}.`
      : `Hello Éminences Internationales, I would like information / a quote for the Chinese vehicle: ${vehicleLabel}.`
  );

  const whatsappUrl = companyConfig.contact.whatsapp
    ? `https://wa.me/${companyConfig.contact.whatsapp.replace(/\D/g, '')}?text=${prefilledWhatsappMsg}`
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

  const formatPrice = () => {
    if (vehicle.price.priceOnRequest) return t.vehiclePage.priceOnRequest;
    if (vehicle.price.amount) {
      return `${vehicle.price.amount.toLocaleString(lang === 'fr' ? 'fr-FR' : 'en-US')} ${vehicle.price.currency}`;
    }
    return t.vehiclePage.priceOnRequest;
  };

  const formatMileage = () => {
    if (vehicle.mileageKm === null) return t.modal.rangeNotSpecified;
    return `${vehicle.mileageKm.toLocaleString()} km`;
  };

  return (
    <section className="vehicle-detail-page">
      <div className="container">
        <BreadcrumbBar
          homeLabel={t.breadcrumb.home}
          currentLabel={vehicleLabel}
          onBackHome={onBackHome}
          breadcrumbAriaLabel={t.vehiclePage.backToCatalog}
        />

        <div className="vehicle-detail__header">
          <button type="button" onClick={onBackHome} className="vehicle-detail__back-btn">
            <ArrowLeft className="icon-sm" aria-hidden="true" />
            <span>{t.vehiclePage.backToCatalog}</span>
          </button>
        </div>

        {/* Hero Gallery */}
        <div className="vehicle-detail__gallery">
          <div className="vehicle-detail__main-image">
            <ResilientImage
              src={currentImg}
              alt={vehicleLabel}
              className="vehicle-detail__hero-img"
              priority
            />
            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => setActiveImageIdx((prev) => (prev - 1 + images.length) % images.length)}
                  aria-label={t.showcase.prevModel}
                  className="vehicle-detail__nav-btn vehicle-detail__nav-btn--prev"
                >
                  <ChevronLeft className="icon-md" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => setActiveImageIdx((prev) => (prev + 1) % images.length)}
                  aria-label={t.showcase.nextModel}
                  className="vehicle-detail__nav-btn vehicle-detail__nav-btn--next"
                >
                  <ChevronRight className="icon-md" aria-hidden="true" />
                </button>
              </>
            )}
          </div>

          {images.length > 1 && (
            <div className="vehicle-detail__thumbnails" role="tablist" aria-label={t.showcase.tabAriaLabel}>
              {images.map((imgSrc, idx) => (
                <button
                  key={`${imgSrc}-${idx}`}
                  type="button"
                  role="tab"
                  aria-selected={activeImageIdx === idx}
                  onClick={() => setActiveImageIdx(idx)}
                  className={`vehicle-detail__thumb${activeImageIdx === idx ? ' is-active' : ''}`}
                  aria-label={`${vehicleLabel} - ${idx + 1}`}
                >
                  <ResilientImage
                    src={imgSrc}
                    alt={`${vehicleLabel} ${idx + 1}`}
                    className="vehicle-detail__thumb-img"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Vehicle Info Header */}
        <header className="vehicle-detail__info-header">
          <div className="vehicle-detail__meta">
            <span className="vehicle-detail__badge">{vehicle.badge?.[lang] || vehicle.condition}</span>
            <span className="vehicle-detail__type">{vehicle.vehicleType} · {vehicle.energy.split(' ')[0]}</span>
          </div>
          <h1 className="vehicle-detail__title">{vehicleLabel}</h1>
          <p className="vehicle-detail__version">{vehicle.version}</p>
          <p className="vehicle-detail__year">{t.vehiclePage.yearLabel} {vehicle.year} · {t.vehiclePage.conditionLabel} {vehicle.condition}</p>
        </header>

        {/* Quick Facts */}
        <dl className="vehicle-detail__quick-facts">
          <div className="vehicle-detail__fact">
            <dt>{t.vehiclePage.availabilityLabel}</dt>
            <dd>{vehicle.availability}</dd>
          </div>
          <div className="vehicle-detail__fact">
            <dt>{t.vehiclePage.mileageLabel}</dt>
            <dd>{formatMileage()}</dd>
          </div>
          <div className="vehicle-detail__fact">
            <dt>{t.vehiclePage.transmissionLabel}</dt>
            <dd>{vehicle.transmission[lang]}</dd>
          </div>
          <div className="vehicle-detail__fact">
            <dt>{t.vehiclePage.energyLabel}</dt>
            <dd>{vehicle.energy}</dd>
          </div>
          <div className="vehicle-detail__fact">
            <dt>{t.vehiclePage.powertrainLabel}</dt>
            <dd>{vehicle.powertrain[lang]}</dd>
          </div>
          <div className="vehicle-detail__fact">
            <dt>{t.vehiclePage.yearLabel}</dt>
            <dd>{vehicle.year}</dd>
          </div>
        </dl>

        {/* Description */}
        <div className="vehicle-detail__description">
          <p>{vehicle.description[lang]}</p>
          {vehicle.isDemo && (
            <p className="vehicle-detail__demo-notice">{t.vehiclePage.demoNotice}</p>
          )}
        </div>

        {/* Details Grid */}
        <div className="vehicle-detail__details-grid">
          {/* Technical Specs */}
          <div className="vehicle-detail__specs">
            <h2 className="vehicle-detail__section-title">{t.vehiclePage.specsTitle}</h2>
            <dl className="vehicle-detail__specs-list">
              {vehicle.technicalSpecs.map((spec, idx) => (
                <div key={idx} className="vehicle-detail__spec-row">
                  <dt>{spec.label[lang]}</dt>
                  <dd>{spec.value[lang]}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Features & Colors */}
          <div className="vehicle-detail__features-colors">
            <div className="vehicle-detail__features">
              <h2 className="vehicle-detail__section-title">{t.vehiclePage.featuresTitle}</h2>
              <ul>
                {vehicle.features.map((feat, idx) => (
                  <li key={idx}>· {feat[lang]}</li>
                ))}
              </ul>
            </div>

            <div className="vehicle-detail__colors">
              <h2 className="vehicle-detail__section-title">{t.vehiclePage.colorsTitle}</h2>
              <p>{vehicle.colors.map((c) => c[lang]).join(' · ')}</p>
            </div>
          </div>
        </div>

        {/* Price & Actions */}
        <div className="vehicle-detail__footer">
          <div className="vehicle-detail__price">
            <p className="vehicle-detail__price-label">{t.vehiclePage.priceLabel}</p>
            <p className="vehicle-detail__price-value">{formatPrice()}</p>
          </div>

          <div className="vehicle-detail__actions">
            {whatsappUrl && (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="vehicle-detail__btn vehicle-detail__btn--whatsapp"
              >
                <MessageCircle className="icon-sm" aria-hidden="true" />
                <span>{t.vehiclePage.whatsappBtn}</span>
              </a>
            )}
            <button
              type="button"
              onClick={() => window.open(`/contact?type=quote&vehicle=${encodeURIComponent(vehicleLabel)}`, '_self')}
              className="vehicle-detail__btn vehicle-detail__btn--quote"
            >
              {t.vehiclePage.requestQuoteBtn}
            </button>
            <button
              type="button"
              onClick={handleShare}
              className="vehicle-detail__btn vehicle-detail__btn--share"
            >
              <Share2 className="icon-sm" aria-hidden="true" />
              <span>{copied ? 'Copié !' : t.modal.shareCta}</span>
            </button>
          </div>
        </div>

        {/* Similar Vehicles */}
        {similarVehicles.length > 0 && (
          <section className="vehicle-detail__similar">
            <h2 className="vehicle-detail__section-title">{t.vehiclePage.similarVehicles}</h2>
            <div className="vehicle-detail__similar-grid">
              {similarVehicles.map((v) => (
                <article key={v.id} className="vehicle-card vehicle-card--similar">
                  <div className="vehicle-card__media">
                    <a href={`/vehicules/${v.slug}`} className="vehicle-card__photo-btn">
                      <ResilientImage
                        src={v.images[0]}
                        alt={`${v.brand} ${v.model}`}
                        loading="lazy"
                        className="vehicle-card__img"
                      />
                    </a>
                    <span className="vehicle-card__badge">{v.badge?.[lang] || v.condition}</span>
                  </div>
                  <div className="vehicle-card__body">
                    <div>
                      <h3 className="vehicle-card__title">{v.brand} {v.model}</h3>
                      <p className="vehicle-card__specs">
                        {v.condition} · {v.year} · {v.transmission[lang]}
                      </p>
                    </div>
                    <div className="vehicle-card__footer">
                      <span className="vehicle-card__price">
                        {v.price.priceOnRequest
                          ? t.catalog.priceOnRequest
                          : `${v.price.amount?.toLocaleString(lang === 'fr' ? 'fr-FR' : 'en-US')} ${v.price.currency}`}
                      </span>
                      <a href={`/vehicules/${v.slug}`} className="vehicle-card__btn vehicle-card__btn--outline">
                        {t.catalog.viewSheet}
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </div>
    </section>
  );
}