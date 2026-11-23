import { ArrowRight, Car, Globe2, Settings, Wrench } from 'lucide-react';
import { AppRoute, InquiryType, SupportedLang } from '../config/company';
import { ACTIVITY_POLES, KEY_METRICS } from '../data/content';
import { TranslationDictionary } from '../i18n/translations';

interface FourPolesSectionProps {
  lang: SupportedLang;
  t: TranslationDictionary;
  onNavigateRoute: (route: AppRoute, inquiryType?: InquiryType) => void;
}

const POLE_ICONS = [Car, Globe2, Settings, Wrench];

export function FourPolesSection({
  lang,
  t,
  onNavigateRoute,
}: FourPolesSectionProps) {
  return (
    <section className="poles-section">
      <div className="container">
        <div className="section-header-split">
          <div>
            <p className="section-kicker section-kicker--accent">
              {t.poles.kicker}
            </p>
            <h2 className="section-title">{t.poles.title}</h2>
          </div>
          <p className="section-subtitle">{t.poles.subtitle}</p>
        </div>

        <div className="poles-grid">
          {ACTIVITY_POLES.map((pole, idx) => {
            const Icon = POLE_ICONS[idx] || Car;
            return (
              <article key={pole.id} className="pole-card">
                <div>
                  <div className="pole-card__top">
                    <div className="pole-card__icon-box">
                      <Icon
                        className="icon-md"
                        strokeWidth={1.6}
                        aria-hidden="true"
                      />
                    </div>
                    <span className="pole-card__num">{pole.number}</span>
                  </div>
                  <h3 className="pole-card__title">{pole.title[lang]}</h3>
                  <p className="pole-card__desc">{pole.description[lang]}</p>
                </div>

                <div>
                  <button
                    type="button"
                    onClick={() =>
                      onNavigateRoute(pole.targetRoute, pole.inquiryType)
                    }
                    className="pole-card__cta"
                  >
                    <span>{pole.ctaLabel[lang]}</span>
                    <ArrowRight
                      className="pole-card__arrow"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        <div className="metrics-box">
          <div className="metrics-box__header">
            <p className="section-kicker section-kicker--violet">
              {t.metrics.kicker}
            </p>
            <h3 className="metrics-box__title">{t.metrics.title}</h3>
          </div>

          <div className="metrics-grid">
            {KEY_METRICS.map((item) => (
              <div key={item.id} className="metric-item">
                <p className="metric-item__val tabular-nums">{item.value}</p>
                <p className="metric-item__label">{item.label[lang]}</p>
                <p className="metric-item__note">{item.note[lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
