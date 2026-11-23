'use client';

import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { AppRoute, InquiryType, SupportedLang } from '../config/company';
import { EditorialCardItem, SERVICE_CARDS } from '../data/content';
import { TranslationDictionary } from '../i18n/translations';
import { ResilientImage } from './ResilientImage';

interface ServicesCarouselSectionProps {
  lang: SupportedLang;
  t: TranslationDictionary;
  onNavigateRoute: (route: AppRoute, inquiryType?: InquiryType) => void;
}

export function ServicesCarouselSection({
  lang,
  t,
  onNavigateRoute,
}: ServicesCarouselSectionProps) {
  const trackRef = useRef<HTMLDivElement | null>(null);

  const scrollTrack = (dir: 'left' | 'right') => {
    if (!trackRef.current) return;
    const delta = dir === 'left' ? -360 : 360;
    trackRef.current.scrollBy({ left: delta, behavior: 'smooth' });
  };

  const handleAction = (item: EditorialCardItem) => {
    if (item.actionType === 'import') {
      onNavigateRoute('import-export', item.inquiryType);
    } else if (item.actionType === 'rental') {
      onNavigateRoute('rental', item.inquiryType);
    } else if (item.actionType === 'workshop') {
      onNavigateRoute('services-workshop', item.inquiryType);
    } else if (item.actionType === 'catalog') {
      onNavigateRoute('vehicles');
    } else if (item.actionType === 'about') {
      onNavigateRoute('about');
    } else {
      onNavigateRoute('contact', item.inquiryType || 'quote');
    }
  };

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="services-header">
          <h2 className="services-header__title">{t.servicesSection.title}</h2>
          <div className="services-header__controls">
            <button
              type="button"
              onClick={() => scrollTrack('left')}
              aria-label={t.servicesSection.prev}
              className="circle-icon-btn"
            >
              <ChevronLeft className="icon-md" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scrollTrack('right')}
              aria-label={t.servicesSection.next}
              className="circle-icon-btn"
            >
              <ChevronRight className="icon-md" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div ref={trackRef} className="services-track no-scrollbar">
          {SERVICE_CARDS.map((item) => (
            <article key={item.id} className="service-card">
              <div>
                <div className="service-card__media">
                  <ResilientImage
                    src={item.image}
                    alt={item.title[lang]}
                    loading="lazy"
                    className="service-card__img"
                  />
                </div>
                <div className="service-card__rule" />
                <h3 className="service-card__title">{item.title[lang]}</h3>
                <p className="service-card__desc">{item.description[lang]}</p>
              </div>
              <div>
                <button
                  type="button"
                  onClick={() => handleAction(item)}
                  className="service-card__link"
                >
                  {t.servicesSection.learnMore}
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="services-bottom-cta">
          <button
            type="button"
            onClick={() => onNavigateRoute('services-workshop')}
            className="dark-pill-btn"
          >
            {t.servicesSection.bottomCta}
          </button>
        </div>
      </div>
    </section>
  );
}
