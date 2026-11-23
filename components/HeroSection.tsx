'use client';

import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SupportedLang } from '../config/company';
import { TranslationDictionary } from '../i18n/translations';
import { Vehicle } from '../types/vehicle';
import { ResilientImage } from './ResilientImage';

interface HeroSectionProps {
  vehicles: Vehicle[];
  lang: SupportedLang;
  t: TranslationDictionary;
  onRequestQuote: (vehicleLabel: string) => void;
}

export function HeroSection({
  vehicles,
  lang,
  t,
  onRequestQuote,
}: HeroSectionProps) {
  const [slideIndex, setSlideIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % vehicles.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, [vehicles.length]);

  const currentVehicle = vehicles[slideIndex] || vehicles[0];

  const prevSlide = () =>
    setSlideIndex((prev) => (prev - 1 + vehicles.length) % vehicles.length);
  const nextSlide = () =>
    setSlideIndex((prev) => (prev + 1) % vehicles.length);

  return (
    <section
      id="hero"
      onTouchStart={(e) => {
        touchStartX.current = e.changedTouches[0].clientX;
      }}
      onTouchEnd={(e) => {
        if (touchStartX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchStartX.current;
        if (Math.abs(dx) > 45) {
          if (dx < 0) nextSlide();
          else prevSlide();
        }
        touchStartX.current = null;
      }}
      className="hero"
    >
      <div className="hero__media">
        <ResilientImage
          src={currentVehicle.images[0]}
          alt={`${currentVehicle.brand} ${currentVehicle.model}`}
          className="hero__img"
        />
        <div className="hero__scrim" />
      </div>

      <div className="container-wide hero__content">
        <div className="hero__header">
          <h1 className="hero__title">
            {currentVehicle.brand} {currentVehicle.model}
          </h1>
          <p className="hero__tagline">
            {currentVehicle.description[lang].split('.')[0]}.
          </p>
        </div>

        <div className="hero__footer">
          <div className="hero__cta-row">
            <a
              href={`/vehicules/${currentVehicle.slug}`}
              className="hero__btn hero__btn--discover"
            >
              {t.hero.discoverBtn}
            </a>
            <button
              type="button"
              onClick={() =>
                onRequestQuote(
                  `${currentVehicle.brand} ${currentVehicle.model}`
                )
              }
              className="hero__btn hero__btn--quote"
            >
              {t.hero.quoteBtn}
            </button>
          </div>

          <div
            className="hero__dashes"
            role="tablist"
            aria-label={t.hero.dashAriaLabel}
          >
            {vehicles.map((v, idx) => (
              <button
                key={v.id}
                type="button"
                onClick={() => setSlideIndex(idx)}
                aria-label={`${v.brand} ${v.model}`}
                aria-selected={slideIndex === idx}
                className={`hero__dash${slideIndex === idx ? ' is-active' : ''}`}
              />
            ))}
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={prevSlide}
        aria-label={t.hero.slidePrev}
        className="hero__arrow hero__arrow--prev"
      >
        <ChevronLeft className="icon-md" aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={nextSlide}
        aria-label={t.hero.slideNext}
        className="hero__arrow hero__arrow--next"
      >
        <ChevronRight className="icon-md" aria-hidden="true" />
      </button>
    </section>
  );
}
