'use client';

import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SupportedLang } from '../config/company';
import { VALUE_CARDS } from '../data/content';
import { TranslationDictionary } from '../i18n/translations';
import { ResilientImage } from './ResilientImage';
import { RevealOnScroll, RevealGroup } from './RevealOnScroll';

interface ValuesSectionProps {
  lang: SupportedLang;
  t: TranslationDictionary;
  onAboutClick: () => void;
}

export function ValuesSection({ lang, t, onAboutClick }: ValuesSectionProps) {
  const trackRef = useRef<HTMLDivElement | null>(null);

  const scrollTrack = (dir: 'left' | 'right') => {
    if (!trackRef.current) return;
    const delta = dir === 'left' ? -360 : 360;
    trackRef.current.scrollBy({ left: delta, behavior: 'smooth' });
  };

  return (
    <section className="values-section">
      <div className="container">
        <RevealOnScroll>
          <div className="values-header">
            <h2 className="values-header__title">{t.valuesSection.title}</h2>
            <p className="values-header__subtitle">{t.valuesSection.subtitle}</p>

            <div className="values-header__controls">
              <button
                type="button"
                onClick={() => scrollTrack('left')}
                aria-label={t.valuesSection.prev}
                className="circle-icon-btn--dark"
              >
                <ChevronLeft className="icon-sm" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => scrollTrack('right')}
                aria-label={t.valuesSection.next}
                className="circle-icon-btn--dark"
              >
                <ChevronRight className="icon-sm" aria-hidden="true" />
              </button>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={100}>
          <div ref={trackRef} className="values-track no-scrollbar">
            <RevealGroup staggerDelay={120}>
              {VALUE_CARDS.map((item) => (
                <RevealOnScroll key={item.id} inline>
                  <article className="value-card">
                    <div className="value-card__media">
                      <ResilientImage
                        src={item.image}
                        alt={item.title[lang]}
                        loading="lazy"
                        className="value-card__img"
                      />
                    </div>
                    <div className="value-card__rule" />
                    <h3 className="value-card__title">{item.title[lang]}</h3>
                    <p className="value-card__desc">{item.description[lang]}</p>
                  </article>
                </RevealOnScroll>
              ))}
            </RevealGroup>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={200}>
          <div className="values-bottom-cta">
            <button type="button" onClick={onAboutClick} className="ivory-pill-btn">
              {t.valuesSection.bottomCta}
            </button>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}