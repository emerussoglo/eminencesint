import { TranslationDictionary } from '../i18n/translations';

interface VisionBannerSectionProps {
  t: TranslationDictionary;
  onRequestQuote: () => void;
}

export function VisionBannerSection({
  t,
  onRequestQuote,
}: VisionBannerSectionProps) {
  return (
    <section className="vision-section">
      <svg
        className="vision-pattern"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="eminences-hex-grid"
            width="96"
            height="166"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M48 0 L96 28 L96 84 L48 112 L0 84 L0 28 Z M48 112 L48 166"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#eminences-hex-grid)" />
      </svg>

      <div className="vision-inner">
        <p className="vision-kicker">{t.visionBanner.kicker}</p>

        <h2 className="vision-title">
          {t.visionBanner.titleBefore}
          <span className="vision-highlight">
            {t.visionBanner.titleHighlight}
          </span>{' '}
          {t.visionBanner.titleAfter}
        </h2>

        <button type="button" onClick={onRequestQuote} className="vision-cta">
          {t.visionBanner.cta}
        </button>
      </div>
    </section>
  );
}
