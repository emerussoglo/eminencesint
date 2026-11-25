'use client';

import { Facebook, Youtube, Music } from 'lucide-react';
import {
  AppRoute,
  companyConfig,
  InquiryType,
  SupportedLang,
} from '@/config/company';
import { TranslationDictionary } from '@/i18n/translations';

interface FooterProps {
  lang: SupportedLang;
  t: TranslationDictionary;
  onChangeLang: (lang: SupportedLang) => void;
  onNavigateRoute: (route: AppRoute, inquiryType?: InquiryType) => void;
}

export function Footer({
  lang,
  t,
  onChangeLang,
  onNavigateRoute,
}: FooterProps) {
  const currentYear = new Date().getFullYear();

  const columns = [
    {
      id: 'vehicles',
      title: t.footer.modelsTitle,
      links: [
        { label: t.nav.vehicles, route: 'vehicles' as AppRoute },
        { label: t.nav.importExport, route: 'import-export' as AppRoute },
        { label: t.nav.rental, route: 'rental' as AppRoute },
      ],
    },
    {
      id: 'services',
      title: t.footer.polesTitle,
      links: [
        { label: t.nav.servicesWorkshop, route: 'services-workshop' as AppRoute },
        {
          label: t.contact.types.parts,
          route: 'contact' as AppRoute,
          inquiryType: 'parts' as InquiryType,
        },
        {
          label: t.contact.types.workshop,
          route: 'contact' as AppRoute,
          inquiryType: 'workshop' as InquiryType,
        },
        {
          label: t.nav.quoteCta,
          route: 'contact' as AppRoute,
          inquiryType: 'quote' as InquiryType,
        },
      ],
    },
    {
      id: 'company',
      title: t.footer.companyTitle,
      links: [
        { label: t.nav.about, route: 'about' as AppRoute },
        {
          label: t.nav.contact,
          route: 'contact' as AppRoute,
          inquiryType: 'info' as InquiryType,
        },
        { label: t.legal.legalNotice.title, route: 'legal' as AppRoute },
        { label: t.legal.privacy.title, route: 'privacy' as AppRoute },
        { label: t.legal.terms.title, route: 'terms' as AppRoute },
      ],
    },
  ];

  const socials = [
    {
      name: t.social.facebook,
      url: companyConfig.social.facebook,
      icon: Facebook,
      ariaLabel: 'Facebook',
    },
    {
      name: t.social.youtube,
      url: companyConfig.social.youtube,
      icon: Youtube,
      ariaLabel: 'YouTube',
    },
    {
      name: t.social.tiktok,
      url: companyConfig.social.tiktok,
      icon: Music,
      ariaLabel: 'TikTok',
    },
  ].filter((item) => Boolean(item.url));

  const phoneHref = companyConfig.contact.phone
    ? `tel:${companyConfig.contact.phone.replace(/\s+/g, '')}`
    : null;

  const emailHref = companyConfig.contact.email
    ? `mailto:${companyConfig.contact.email}`
    : null;

  return (
    <footer className="ei-footer">
      <div className="container-wide">
        <div className="ei-footer__top">
          {/* Infos essentielles à gauche */}
          <div className="ei-footer__brand">
            <div className="ei-footer__logo-wrap">
              <img
                src={companyConfig.logo.src}
                alt={companyConfig.logo.alt}
                referrerPolicy="no-referrer"
                className="ei-footer__logo"
              />
              <span className="ei-footer__name">{companyConfig.name}</span>
            </div>

            <p className="ei-footer__desc">{t.footer.companyDescription}</p>

            <div className="ei-footer__contact">
              <p className="ei-footer__place">
                {companyConfig.contact.address}, {companyConfig.contact.cityCountry}
              </p>

              {companyConfig.contact.phone && phoneHref && (
                <a href={phoneHref} className="ei-footer__link">
                  {companyConfig.contact.phone}
                </a>
              )}

              {companyConfig.contact.email && emailHref && (
                <a href={emailHref} className="ei-footer__link">
                  {companyConfig.contact.email}
                </a>
              )}
            </div>

            {socials.length > 0 && (
              <div className="ei-footer__socials">
                {socials.map((item) => (
                  <a
                    key={item.name}
                    href={item.url!}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.ariaLabel}
                    className="ei-footer__social-link"
                  >
                    <item.icon className="icon-sm" aria-hidden="true" />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Navigation épurée à droite */}
          <nav className="ei-footer__nav" aria-label={t.footer.navAriaLabel}>
            {columns.map((col) => (
              <div key={col.id} className="ei-footer__col">
                <h3 className="ei-footer__col-title">{col.title}</h3>
                <ul className="ei-footer__list">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <button
                        type="button"
                        onClick={() => onNavigateRoute(link.route, link.inquiryType)}
                        className="ei-footer__nav-btn"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* Barre basse légère */}
        <div className="ei-footer__bottom">
          <p className="ei-footer__copy">
            © {currentYear} {t.footer.rights}
          </p>

          <div className="ei-footer__lang" role="group" aria-label="Language">
            <button
              type="button"
              onClick={() => onChangeLang('fr')}
              className={`ei-footer__lang-btn${lang === 'fr' ? ' is-active' : ''}`}
              aria-pressed={lang === 'fr'}
            >
              FR
            </button>
            <button
              type="button"
              onClick={() => onChangeLang('en')}
              className={`ei-footer__lang-btn${lang === 'en' ? ' is-active' : ''}`}
              aria-pressed={lang === 'en'}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}