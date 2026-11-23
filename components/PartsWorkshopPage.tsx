import { Building2, Settings, Wrench } from 'lucide-react';
import { companyConfig, InquiryType, SupportedLang } from '../config/company';
import {
  PARTS_FAMILIES,
  WORKSHOP_PROCESS,
  WORKSHOP_SERVICES,
} from '../data/content';
import { TranslationDictionary } from '../i18n/translations';
import { BreadcrumbBar } from './BreadcrumbBar';

interface PartsWorkshopPageProps {
  lang: SupportedLang;
  t: TranslationDictionary;
  onBackHome: () => void;
  onOpenContact: (inquiryType: InquiryType, prefill?: string) => void;
}

export function PartsWorkshopPage({
  lang,
  t,
  onBackHome,
  onOpenContact,
}: PartsWorkshopPageProps) {
  return (
    <div className="page-offset">
      <section className="subpage-hero">
        <div className="container">
          <BreadcrumbBar
            homeLabel={t.breadcrumb.home}
            currentLabel={t.nav.servicesWorkshop}
            onBackHome={onBackHome}
            breadcrumbAriaLabel={t.nav.servicesWorkshop}
          />
          <div className="subpage-hero__inner">
            <p className="section-kicker section-kicker--accent">
              {t.partsWorkshopPage.kicker}
            </p>
            <h1 className="subpage-hero__title">{t.partsWorkshopPage.title}</h1>
            <p className="subpage-hero__intro">{t.partsWorkshopPage.intro}</p>
            <div className="subpage-hero__actions">
              <button
                type="button"
                onClick={() => onOpenContact('parts')}
                className="subpage-hero__cta-dark"
              >
                {t.partsWorkshopPage.partsCta}
              </button>
              <button
                type="button"
                onClick={() => onOpenContact('workshop')}
                className="subpage-hero__cta"
              >
                {t.partsWorkshopPage.workshopCta}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="subpage-section subpage-section--bordered">
        <div className="container">
          <div className="section-split-bar">
            <div>
              <p className="section-kicker section-kicker--violet">
                {t.partsWorkshopPage.partsKicker}
              </p>
              <h2 className="section-heading-md">
                {t.partsWorkshopPage.partsTitle}
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onOpenContact('parts')}
              className="outline-pill-sm"
            >
              {t.partsWorkshopPage.partsCta}
            </button>
          </div>

          <div className="four-col-grid">
            {PARTS_FAMILIES.map((family) => (
              <article key={family.id} className="parts-card">
                <div>
                  <Settings
                    className="icon-md"
                    style={{
                      color: 'var(--color-accent)',
                      marginBottom: '1rem',
                    }}
                    aria-hidden="true"
                  />
                  <h3 className="parts-card__title">{family.title[lang]}</h3>
                  <p className="parts-card__desc">{family.description[lang]}</p>
                </div>
                <button
                  type="button"
                  onClick={() => onOpenContact('parts', family.title[lang])}
                  className="parts-card__link"
                >
                  {t.partsWorkshopPage.partsCta}
                </button>
              </article>
            ))}
          </div>

          <p className="parts-scope-note">
            {t.brands.kicker} : {companyConfig.catalogBrandScope.join(' · ')}
          </p>
        </div>
      </section>

      <section className="workshop-section">
        <div className="container">
          <div className="section-split-bar">
            <div>
              <p className="section-kicker section-kicker--warm">
                {t.partsWorkshopPage.workshopKicker}
              </p>
              <h2 className="section-heading-md section-heading-md--white">
                {t.partsWorkshopPage.workshopTitle}
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onOpenContact('workshop')}
              className="subpage-hero__cta"
            >
              {t.partsWorkshopPage.workshopCta}
            </button>
          </div>

          <div className="workshop-grid">
            {WORKSHOP_SERVICES.map((srv) => (
              <article key={srv.id} className="workshop-card">
                <div>
                  <Wrench
                    className="icon-md"
                    style={{
                      color: 'var(--color-accent-warm)',
                      marginBottom: '1rem',
                    }}
                    aria-hidden="true"
                  />
                  <h3 className="workshop-card__title">{srv.title[lang]}</h3>
                  <p className="workshop-card__desc">
                    {srv.description[lang]}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => onOpenContact('workshop', srv.title[lang])}
                  className="workshop-card__link"
                >
                  {t.partsWorkshopPage.workshopCta}
                </button>
              </article>
            ))}
          </div>

          <div className="workshop-process-wrap">
            <h3 className="workshop-process-title">
              {t.partsWorkshopPage.workshopProcessTitle}
            </h3>
            <div className="workshop-process-grid">
              {WORKSHOP_PROCESS.map((step) => (
                <div key={step.number} className="workshop-step">
                  <span className="workshop-step__num">{step.number}</span>
                  <h4 className="workshop-step__title">{step.title[lang]}</h4>
                  <p className="workshop-step__desc">
                    {step.description[lang]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="subpage-section">
        <div className="container">
          <div className="fleet-banner">
            <div className="fleet-banner__copy">
              <div className="fleet-banner__kicker">
                <Building2 className="icon-sm" aria-hidden="true" />
                <span>{t.partsWorkshopPage.fleetKicker}</span>
              </div>
              <h2 className="fleet-banner__title">
                {t.partsWorkshopPage.fleetTitle}
              </h2>
              <p className="fleet-banner__desc">
                {t.partsWorkshopPage.fleetDesc}
              </p>
            </div>
            <button
              type="button"
              onClick={() => onOpenContact('fleet')}
              className="fleet-banner__btn"
            >
              {t.partsWorkshopPage.fleetCta}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
