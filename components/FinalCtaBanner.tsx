import { TranslationDictionary } from '../i18n/translations';

interface FinalCtaBannerProps {
  t: TranslationDictionary;
  onRequestQuote: () => void;
  onExploreCatalog: () => void;
}

export function FinalCtaBanner({
  t,
  onRequestQuote,
  onExploreCatalog,
}: FinalCtaBannerProps) {
  return (
    <section className="final-cta-section">
      <div className="container">
        <div className="final-cta-banner">
          <div className="final-cta-banner__copy">
            <h2 className="final-cta-banner__title">{t.finalCta.title}</h2>
            <p className="final-cta-banner__subtitle">{t.finalCta.subtitle}</p>
          </div>

          <div className="final-cta-banner__actions">
            <button
              type="button"
              onClick={onExploreCatalog}
              className="final-cta-btn-glass"
            >
              {t.finalCta.catalogBtn}
            </button>
            <button
              type="button"
              onClick={onRequestQuote}
              className="final-cta-btn-dark"
            >
              {t.finalCta.quoteBtn}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
