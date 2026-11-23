'use client';

import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import { SupportedLang } from '../config/company';
import { FAQ_ITEMS } from '../data/content';
import { TranslationDictionary } from '../i18n/translations';

interface FaqSectionProps {
  lang: SupportedLang;
  t: TranslationDictionary;
}

export function FaqSection({ lang, t }: FaqSectionProps) {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0]?.id ?? null);

  return (
    <section id="faq" className="faq-section">
      <div className="container-narrow">
        <div className="faq-header">
          <p className="section-kicker section-kicker--accent">
            {t.faq.kicker}
          </p>
          <h2 className="faq-title">{t.faq.title}</h2>
        </div>

        <div className="faq-list">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id} className="faq-item">
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  aria-expanded={isOpen}
                  className="faq-trigger"
                >
                  <span className="faq-trigger__question">
                    {item.question[lang]}
                  </span>
                  <span className="faq-trigger__icon">
                    {isOpen ? (
                      <Minus className="icon-md" aria-hidden="true" />
                    ) : (
                      <Plus className="icon-md" aria-hidden="true" />
                    )}
                  </span>
                </button>
                {isOpen && (
                  <div className="faq-answer">{item.answer[lang]}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
