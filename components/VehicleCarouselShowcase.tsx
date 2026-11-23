'use client';

import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SupportedLang } from '../config/company';
import { TranslationDictionary } from '../i18n/translations';
import { Vehicle } from '../types/vehicle';
import { ResilientImage } from './ResilientImage';

interface VehicleCarouselShowcaseProps {
  vehicles: Vehicle[];
  lang: SupportedLang;
  t: TranslationDictionary;
  onRequestQuote: (vehicleLabel: string) => void;
}

export function VehicleCarouselShowcase({
  vehicles,
  lang,
  t,
  onRequestQuote,
}: VehicleCarouselShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const current = vehicles[activeIndex] || vehicles[0];
  const prev = () =>
    setActiveIndex((idx) => (idx - 1 + vehicles.length) % vehicles.length);
  const next = () => setActiveIndex((idx) => (idx + 1) % vehicles.length);

  return (
    <section
      id="modeles"
      onTouchStart={(e) => {
        touchStartX.current = e.changedTouches[0].clientX;
      }}
      onTouchEnd={(e) => {
        if (touchStartX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchStartX.current;
        if (Math.abs(dx) > 45) {
          if (dx < 0) next();
          else prev();
        }
        touchStartX.current = null;
      }}
      className="showcase-section"
    >
      <div className="container">
        <div className="showcase__tabs-wrap">
          <div
            className="showcase__tabs no-scrollbar"
            role="tablist"
            aria-label={t.showcase.tabAriaLabel}
          >
            {vehicles.map((v, idx) => {
              const active = idx === activeIndex;
              return (
                <button
                  key={v.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveIndex(idx)}
                  className={`showcase__tab${active ? ' is-active' : ''}`}
                >
                  {v.brand} {v.model}
                </button>
              );
            })}
          </div>
        </div>

        <div className="showcase__headline-box">
          <h2 className="showcase__headline">
            {t.showcase.articleWord} {current.brand} {current.model}.
            <br />
            <span className="showcase__subline">
              {current.description[lang].split('.')[0]}.
            </span>
          </h2>
        </div>

        <div className="showcase__stage">
          <button
            type="button"
            onClick={prev}
            aria-label={t.showcase.prevModel}
            className="showcase__nav-btn showcase__nav-btn--prev"
          >
            <ChevronLeft className="icon-md" aria-hidden="true" />
          </button>

          <div className="showcase__frame-wrap">
            <div className="showcase__frame">
              <ResilientImage
                src={current.images[1] || current.images[0]}
                alt={`${current.brand} ${current.model}`}
                className="showcase__img"
              />
            </div>
          </div>

          <button
            type="button"
            onClick={next}
            aria-label={t.showcase.nextModel}
            className="showcase__nav-btn showcase__nav-btn--next"
          >
            <ChevronRight className="icon-md" aria-hidden="true" />
          </button>
        </div>

        <div className="showcase__metrics">
          <div>
            <p className="showcase__metric-val">{current.vehicleType}</p>
            <p className="showcase__metric-label">{t.showcase.typeLabel}</p>
          </div>
          <div>
            <p className="showcase__metric-val">
              {current.energy.split(' ')[0]}
            </p>
            <p className="showcase__metric-label">{t.showcase.energyLabel}</p>
          </div>
          <div>
            <p className="showcase__metric-val">
              {current.price.priceOnRequest
                ? lang === 'fr'
                  ? 'Sur devis'
                  : 'On request'
                : `${current.price.amount?.toLocaleString(
                    lang === 'fr' ? 'fr-FR' : 'en-US'
                  )} ${current.price.currency}`}
            </p>
            <p className="showcase__metric-label">{t.showcase.seatsLabel}</p>
          </div>
        </div>

        <div className="showcase__actions">
          <a
            href={`/vehicules/${current.slug}`}
            className="showcase__btn showcase__btn--outline"
          >
            {t.showcase.discoverBtn}
          </a>
          <button
            type="button"
            onClick={() => onRequestQuote(`${current.brand} ${current.model}`)}
            className="showcase__btn showcase__btn--primary"
          >
            {t.showcase.quoteBtn}
          </button>
        </div>
      </div>
    </section>
  );
}
