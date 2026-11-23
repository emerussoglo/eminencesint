'use client';

import { useState } from 'react';
import { BrandLogoItem, CHINESE_BRAND_LOGOS } from '../data/content';
import { TranslationDictionary } from '../i18n/translations';
import { RevealOnScroll } from './RevealOnScroll';

interface BrandsScopeSectionProps {
  t: TranslationDictionary;
}

function BrandLogoCard({ brand }: { brand: BrandLogoItem }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="brand-logo-card" title={brand.name}>
      {failed ? (
        <span className="brand-logo-card__fallback">{brand.name}</span>
      ) : (
        <img
          src={brand.logoUrl}
          alt={brand.name}
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={() => setFailed(true)}
          className={`brand-logo-card__img${
            brand.tall ? ' brand-logo-card__img--tall' : ''
          }`}
        />
      )}
    </div>
  );
}

export function BrandsScopeSection({ t }: BrandsScopeSectionProps) {
  return (
    <section className="brands-section">
      <div className="container">
        <RevealOnScroll>
          <div className="brands-header">
            <p className="section-kicker section-kicker--violet">
              {t.brands.kicker}
            </p>
            <h2 className="brands-title">{t.brands.title}</h2>
            <p className="brands-disclaimer">{t.brands.disclaimer}</p>
          </div>
        </RevealOnScroll>
      </div>

      <RevealOnScroll delay={100}>
        <div className="brands-marquee-viewport">
          <div className="brands-marquee-track">
            <div className="brands-marquee-group">
              {CHINESE_BRAND_LOGOS.map((brand) => (
                <BrandLogoCard key={`a-${brand.id}`} brand={brand} />
              ))}
            </div>
            <div className="brands-marquee-group" aria-hidden="true">
              {CHINESE_BRAND_LOGOS.map((brand) => (
                <BrandLogoCard key={`b-${brand.id}`} brand={brand} />
              ))}
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
