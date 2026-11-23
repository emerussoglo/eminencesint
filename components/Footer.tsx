'use client';

import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import {
  AppRoute,
  companyConfig,
  InquiryType,
  SupportedLang,
} from '../config/company';
import { LegalDocKey } from '../data/content';
import { TranslationDictionary } from '../i18n/translations';

interface FooterProps {
  lang: SupportedLang;
  t: TranslationDictionary;
  onChangeLang: (lang: SupportedLang) => void;
  onNavigateRoute: (route: AppRoute, inquiryType?: InquiryType) => void;
  onOpenLegal: (docKey: LegalDocKey) => void;
}

export function Footer({
  lang,
  t,
  onChangeLang,
  onNavigateRoute,
  onOpenLegal,
}: FooterProps) {
  const currentYear = new Date().getFullYear();
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  const groups = [
    {
      id: 'models',
      title: t.footer.modelsTitle,
      links: [
        { label: t.nav.vehicles, action: () => onNavigateRoute('vehicles') },
        {
          label: t.nav.importExport,
          action: () => onNavigateRoute('import-export'),
        },
        { label: t.nav.rental, action: () => onNavigateRoute('rental') },
      ],
    },
    {
      id: 'poles',
      title: t.footer.polesTitle,
      links: [
        {
          label: t.nav.servicesWorkshop,
          action: () => onNavigateRoute('services-workshop'),
        },
        {
          label: t.contact.types.parts,
          action: () => onNavigateRoute('contact', 'parts'),
        },
        {
          label: t.contact.types.workshop,
          action: () => onNavigateRoute('contact', 'workshop'),
        },
        {
          label: t.nav.quoteCta,
          action: () => onNavigateRoute('contact', 'quote'),
        },
      ],
    },
    {
      id: 'company',
      title: t.footer.companyTitle,
      links: [
        { label: t.nav.about, action: () => onNavigateRoute('about') },
        {
          label: t.nav.contact,
          action: () => onNavigateRoute('contact', 'info'),
        },
      ],
    },
    {
      id: 'legal',
      title: t.footer.legalTitle,
      links: [
        {
          label: lang === 'fr' ? 'Mentions légales' : 'Legal notice',
          action: () => onOpenLegal('legal'),
        },
        {
          label:
            lang === 'fr' ? 'Politique de confidentialité' : 'Privacy policy',
          action: () => onOpenLegal('privacy'),
        },
        {
          label: lang === 'fr' ? 'Conditions générales' : 'Terms & conditions',
          action: () => onOpenLegal('terms'),
        },
      ],
    },
  ];

  return (
    <footer className="site-footer">
      <div className="container-wide">
        {/* Mobile Accordions */}
        <div className="footer-accordions">
          {groups.map((group) => {
            const isOpen = openGroup === group.id;
            return (
              <div key={group.id} className="footer-accordion__item">
                <button
                  type="button"
                  onClick={() => setOpenGroup(isOpen ? null : group.id)}
                  aria-expanded={isOpen}
                  className="footer-accordion__trigger"
                >
                  <span>{group.title}</span>
                  {isOpen ? (
                    <Minus className="icon-md" aria-hidden="true" />
                  ) : (
                    <Plus className="icon-md" aria-hidden="true" />
                  )}
                </button>
                {isOpen && (
                  <ul className="footer-accordion__list">
                    {group.links.map((item) => (
                      <li key={item.label}>
                        <button
                          type="button"
                          onClick={item.action}
                          className="footer-accordion__link"
                        >
                          {item.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>

        {/* Desktop Minimal Grid */}
        <div className="footer-grid">
          {groups.map((group) => (
            <div key={group.id}>
              <h3 className="footer-grid__title">{group.title}</h3>
              <ul className="footer-grid__list">
                {group.links.map((item) => (
                  <li key={item.label}>
                    <button
                      type="button"
                      onClick={item.action}
                      className="footer-grid__link"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact + Language Row */}
        <div className="footer-meta-row">
          <div className="footer-contact-links">
            <button
              type="button"
              onClick={() => onNavigateRoute('contact', 'quote')}
              className="footer-contact-cta"
            >
              {t.footer.contactLink}
            </button>
            <span className="footer-contact-note">
              {companyConfig.contact.email ||
                companyConfig.contact.phone ||
                t.footer.toConfirm}
            </span>
          </div>

          <div className="footer-lang-switch">
            <button
              type="button"
              onClick={() => onChangeLang('fr')}
              className={`footer-lang-btn${lang === 'fr' ? ' is-active' : ''}`}
            >
              FR
            </button>
            <button
              type="button"
              onClick={() => onChangeLang('en')}
              className={`footer-lang-btn${lang === 'en' ? ' is-active' : ''}`}
            >
              EN
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          <p>
            © {currentYear} {t.footer.rights}
          </p>
        </div>

        {/* Architectural Wordmark */}
        <div className="footer-wordmark-wrap">
          <p className="footer-wordmark">{companyConfig.name}</p>
        </div>
      </div>
    </footer>
  );
}
