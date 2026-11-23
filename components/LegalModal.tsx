'use client';

import { useEffect } from 'react';
import { X } from 'lucide-react';
import { SupportedLang } from '../config/company';
import { LEGAL_DOCUMENTS, LegalDocKey } from '../data/content';
import { TranslationDictionary } from '../i18n/translations';

interface LegalModalProps {
  docKey: LegalDocKey | null;
  lang: SupportedLang;
  t: TranslationDictionary;
  onClose: () => void;
}

export function LegalModal({ docKey, lang, t, onClose }: LegalModalProps) {
  useEffect(() => {
    if (!docKey) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [docKey, onClose]);

  if (!docKey) return null;
  const doc = LEGAL_DOCUMENTS[docKey];

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-card modal-card--legal">
        <div className="legal-modal__header">
          <h2 id="legal-modal-title" className="legal-modal__title">
            {doc.title[lang]}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label={t.modal.close}
            className="legal-modal__close"
          >
            <X className="icon-md" aria-hidden="true" />
          </button>
        </div>

        <div className="legal-modal__body">
          {doc.sections.map((section, idx) => (
            <div key={idx}>
              <h3 className="legal-modal__section-title">
                {section.heading[lang]}
              </h3>
              <p className="legal-modal__section-text">{section.body[lang]}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
