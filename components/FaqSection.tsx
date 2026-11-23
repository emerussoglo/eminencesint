'use client';

import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import { SupportedLang } from '../config/company';
import { FAQ_ITEMS } from '../data/content';
import { TranslationDictionary } from '../i18n/translations';
import { RevealOnScroll, RevealGroup } from './RevealOnScroll';

interface FaqSectionProps {
  lang: SupportedLang;
  t: TranslationDictionary;
}

export function FaqSection({ lang, t }: FaqSectionProps) {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0]?.id ?? null);

  return (
    <section id="faq" className="faq-section">
      <div className="container-narrow">
        <RevealOnScroll>
          <div className="faq-header">
            <p className="section-kicker section-kicker--accent">
              {t.faq.kicker}
            </p>
            <h2 className="faq-title">{t.faq.title}</h2>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={100}>
          <div className="faq-list">
            <RevealGroup staggerDelay={80}>
              {FAQ_ITEMS.map((item) => (
                <RevealOnScroll key={item.id}>
                  <div className="faq-item">
                    <button
                      type="button"
                      onClick={() => setOpenId(openId === item.id ? null : item.id)}
                      aria-expanded={openId === item.id}
                      className="faq-trigger"
                    >
                      <span className="faq-trigger__question">
                        {item.question[lang]}
                      </span>
                      <span className="faq-trigger__icon">
                        {openId === item.id ? (
                          <Minus className="icon-md" aria-hidden="true" />
                        ) : (
                          <Plus className="icon-md" aria-hidden="true" />
                        )}
                      </span>
                    </button>
                    {openId === item.id && (
                      <div className="faq-answer">{item.answer[lang]}</div>
                    )}
                  </div>
                </RevealOnScroll>
              ))}
            </RevealGroup>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
