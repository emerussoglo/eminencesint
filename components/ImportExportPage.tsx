import { CheckCircle2, FileText } from 'lucide-react';
import { companyConfig, InquiryType, SupportedLang } from '../config/company';
import { TranslationDictionary } from '../i18n/translations';
import { BreadcrumbBar } from './BreadcrumbBar';
import { FaqSection } from './FaqSection';
import { ImportExportTimelineSection } from './ImportExportTimelineSection';

interface ImportExportPageProps {
  lang: SupportedLang;
  t: TranslationDictionary;
  onBackHome: () => void;
  onOpenContact: (inquiryType: InquiryType, prefill?: string) => void;
}

export function ImportExportPage({
  lang,
  t,
  onBackHome,
  onOpenContact,
}: ImportExportPageProps) {
  return (
    <div className="page-offset">
      <section className="subpage-hero">
        <div className="container">
          <BreadcrumbBar
            homeLabel={t.breadcrumb.home}
            currentLabel={t.nav.importExport}
            onBackHome={onBackHome}
            breadcrumbAriaLabel={t.nav.importExport}
          />
          <div className="subpage-hero__inner">
            <p className="section-kicker section-kicker--accent">
              {t.importSection.kicker}
            </p>
            <h1 className="subpage-hero__title">{t.importSection.pageTitle}</h1>
            <p className="subpage-hero__intro">{t.importSection.pageIntro}</p>
            <button
              type="button"
              onClick={() => onOpenContact('import')}
              className="subpage-hero__cta"
            >
              {t.importSection.ctaPrimary}
            </button>
          </div>
        </div>
      </section>

      <ImportExportTimelineSection
        lang={lang}
        t={t}
        onRequestImportQuote={() => onOpenContact('import')}
      />

      <section className="subpage-section">
        <div className="container">
          <div className="two-col-cards">
            <div className="info-panel info-panel--stone">
              <div className="info-panel__head">
                <FileText
                  className="icon-md"
                  style={{ color: 'var(--color-violet)' }}
                  aria-hidden="true"
                />
                <h2 className="info-panel__title">
                  {t.importSection.documentsTitle}
                </h2>
              </div>
              <ul className="bullet-list">
                {t.importSection.documentsList.map((item) => (
                  <li key={item} className="bullet-list__item">
                    <span className="bullet-dot bullet-dot--violet" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="info-panel info-panel--lavender">
              <div className="info-panel__head">
                <CheckCircle2
                  className="icon-md"
                  style={{ color: 'var(--color-accent)' }}
                  aria-hidden="true"
                />
                <h2 className="info-panel__title">
                  {t.importSection.guaranteesTitle}
                </h2>
              </div>
              <ul className="bullet-list">
                {t.importSection.guaranteesList.map((item) => (
                  <li key={item} className="bullet-list__item">
                    <span className="bullet-dot bullet-dot--accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="eligible-brands-banner">
            <div>
              <p className="section-kicker section-kicker--accent">
                {t.brands.kicker}
              </p>
              <p className="eligible-brands-banner__list">
                {companyConfig.catalogBrandScope.join(' · ')}
              </p>
            </div>
            <button
              type="button"
              onClick={() => onOpenContact('import')}
              className="subpage-hero__cta-dark"
            >
              {t.importSection.ctaPrimary}
            </button>
          </div>
        </div>
      </section>

      <FaqSection lang={lang} t={t} />
    </div>
  );
}
