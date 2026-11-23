import { SupportedLang } from '../config/company';
import { IMPORT_EXPORT_STEPS } from '../data/content';
import { TranslationDictionary } from '../i18n/translations';

interface ImportExportTimelineSectionProps {
  lang: SupportedLang;
  t: TranslationDictionary;
  onRequestImportQuote: () => void;
  onOpenImportPage?: () => void;
}

export function ImportExportTimelineSection({
  lang,
  t,
  onRequestImportQuote,
  onOpenImportPage,
}: ImportExportTimelineSectionProps) {
  return (
    <section id="import-export" className="timeline-section">
      <div className="container">
        <div className="timeline-header">
          <div className="timeline-header__copy">
            <p className="section-kicker section-kicker--warm">
              {t.importSection.kicker}
            </p>
            <h2 className="section-title section-title--white">
              {t.importSection.title}
            </h2>
            <p className="timeline-header__subtitle">
              {t.importSection.subtitle}
            </p>
          </div>

          <div className="timeline-header__actions">
            {onOpenImportPage && (
              <button
                type="button"
                onClick={onOpenImportPage}
                className="timeline-btn-secondary"
              >
                {t.importSection.ctaSecondary}
              </button>
            )}
            <button
              type="button"
              onClick={onRequestImportQuote}
              className="timeline-btn-primary"
            >
              {t.importSection.ctaPrimary}
            </button>
          </div>
        </div>

        <div className="timeline-track">
          <div className="timeline-line" aria-hidden="true" />

          <div className="timeline-grid">
            {IMPORT_EXPORT_STEPS.map((step) => (
              <div key={step.number} className="timeline-step">
                <div className="timeline-step__badge">{step.number}</div>
                <h3 className="timeline-step__title">{step.title[lang]}</h3>
                <p className="timeline-step__desc">{step.description[lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
