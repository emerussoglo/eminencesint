'use client';

import { LegalDocKey } from '@/data/content';
import { TranslationDictionary } from '@/i18n/translations';
import { SupportedLang } from '@/config/company';
import { RevealOnScroll, RevealGroup } from './RevealOnScroll';

interface LegalPageProps {
  docKey: LegalDocKey;
  lang: SupportedLang;
  t: TranslationDictionary;
}

const LEGAL_CONTENT: Record<LegalDocKey, {
  translationKey: keyof TranslationDictionary['legal'];
  titleKey: string;
  sections: Array<{ titleKey: string; bodyKey: string }>
}> = {
  legal: {
    translationKey: 'legalNotice',
    titleKey: 'title',
    sections: [
      { titleKey: 'publisher', bodyKey: 'publisherBody' },
      { titleKey: 'directorHosting', bodyKey: 'directorHostingBody' },
    ],
  },
  privacy: {
    translationKey: 'privacy',
    titleKey: 'title',
    sections: [
      { titleKey: 'dataCollection', bodyKey: 'dataCollectionBody' },
      { titleKey: 'cookies', bodyKey: 'cookiesBody' },
      { titleKey: 'rights', bodyKey: 'rightsBody' },
      { titleKey: 'contact', bodyKey: 'contactBody' },
    ],
  },
  terms: {
    translationKey: 'terms',
    titleKey: 'title',
    sections: [
      { titleKey: 'scope', bodyKey: 'scopeBody' },
      { titleKey: 'salesImport', bodyKey: 'salesImportBody' },
      { titleKey: 'customOrders', bodyKey: 'customOrdersBody' },
      { titleKey: 'rental', bodyKey: 'rentalBody' },
      { titleKey: 'parts', bodyKey: 'partsBody' },
      { titleKey: 'workshop', bodyKey: 'workshopBody' },
      { titleKey: 'quoteProcess', bodyKey: 'quoteProcessBody' },
      { titleKey: 'paymentDelivery', bodyKey: 'paymentDeliveryBody' },
      { titleKey: 'warranty', bodyKey: 'warrantyBody' },
      { titleKey: 'claims', bodyKey: 'claimsBody' },
      { titleKey: 'liability', bodyKey: 'liabilityBody' },
      { titleKey: 'disputes', bodyKey: 'disputesBody' },
    ],
  },
};

function getLegalContent(docKey: LegalDocKey, t: TranslationDictionary) {
  const config = LEGAL_CONTENT[docKey];
  const doc = t.legal[config.translationKey] as Record<string, string>;
  return {
    title: doc[config.titleKey],
    sections: config.sections.map(({ titleKey, bodyKey }) => ({
      title: doc[titleKey],
      body: doc[bodyKey],
    })),
  };
}

export function LegalPage({ docKey, lang, t }: LegalPageProps) {
  const { title, sections } = getLegalContent(docKey, t);

  return (
    <section className="legal-page-section">
      <div className="container legal-container">
        <RevealOnScroll>
          <header className="legal-page__header">
            <h1 className="legal-page__title">{title}</h1>
            <p className="legal-page__updated">
              {lang === 'fr'
                ? 'Dernière mise à jour : Novembre 2026'
                : 'Last updated: November 2026'}
            </p>
          </header>
        </RevealOnScroll>

        <RevealOnScroll delay={100}>
          <div className="legal-page__disclaimer">
            {lang === 'fr'
              ? 'Les informations ci-dessous ont un caractère indicatif. Seuls les contrats et devis signés font foi.'
              : 'The information below is indicative. Only signed contracts and quotes are binding.'}
          </div>
        </RevealOnScroll>

        <RevealGroup staggerDelay={80}>
          <div className="legal-page__content">
            {sections.map((section, idx) => (
              <RevealOnScroll key={section.title} delay={idx * 80}>
                <article className="legal-page__section">
                  <h2 className="legal-page__section-title">{section.title}</h2>
                  <div className="legal-page__section-text">
                    {section.body.split('\n').map((paragraph: string, pIdx: number) => (
                      <p key={pIdx}>{paragraph}</p>
                    ))}
                  </div>
                </article>
              </RevealOnScroll>
            ))}
          </div>
        </RevealGroup>
      </div>
    </section>
  );
}