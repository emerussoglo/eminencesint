import { CalendarCheck2 } from 'lucide-react';
import { InquiryType, SupportedLang } from '../config/company';
import { RENTAL_CATEGORIES } from '../data/content';
import { TranslationDictionary } from '../i18n/translations';
import { BreadcrumbBar } from './BreadcrumbBar';

interface RentalPageProps {
  lang: SupportedLang;
  t: TranslationDictionary;
  onBackHome: () => void;
  onOpenContact: (inquiryType: InquiryType, prefill?: string) => void;
}

export function RentalPage({
  lang,
  t,
  onBackHome,
  onOpenContact,
}: RentalPageProps) {
  return (
    <div className="page-offset">
      <section className="subpage-hero">
        <div className="container">
          <BreadcrumbBar
            homeLabel={t.breadcrumb.home}
            currentLabel={t.nav.rental}
            onBackHome={onBackHome}
            breadcrumbAriaLabel={t.nav.rental}
          />
          <div className="subpage-hero__inner">
            <p className="section-kicker section-kicker--accent">
              {t.rentalPage.kicker}
            </p>
            <h1 className="subpage-hero__title">{t.rentalPage.title}</h1>
            <p className="subpage-hero__intro">{t.rentalPage.intro}</p>
            <div className="info-pill-badge">
              <CalendarCheck2 className="icon-sm" aria-hidden="true" />
              <span>{t.rentalPage.responseNotice}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="subpage-section">
        <div className="container">
          <div className="rental-grid">
            {RENTAL_CATEGORIES.map((cat) => (
              <article key={cat.id} className="rental-card">
                <div>
                  <h2 className="rental-card__title">{cat.title[lang]}</h2>
                  <p className="rental-card__usage">{cat.usage[lang]}</p>
                  <p className="rental-card__trans">{cat.transmission[lang]}</p>
                </div>

                <div className="rental-card__footer">
                  <span className="rental-card__price">
                    {cat.pricing[lang]}
                  </span>
                  <button
                    type="button"
                    onClick={() => onOpenContact('rental', cat.title[lang])}
                    className="rental-card__btn"
                  >
                    {t.rentalPage.reserveBtn}
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="info-panel info-panel--lavender">
            <h2 className="rental-conditions-title">
              {t.rentalPage.conditionsTitle}
            </h2>
            <dl className="rental-conditions-grid">
              {t.rentalPage.conditionsList.map((cond) => (
                <div key={cond.label}>
                  <dt className="rental-condition__label">{cond.label}</dt>
                  <dd className="rental-condition__value">{cond.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </div>
  );
}
