'use client';

import { useState } from 'react';
import { Minus, Plus, Facebook, Youtube, Music, MapPin, Phone, MessageCircle, Mail, Clock } from 'lucide-react';
import {
  AppRoute,
  companyConfig,
  InquiryType,
  SupportedLang,
} from '../config/company';
import { TranslationDictionary } from '../i18n/translations';

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
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  const groups = [
    {
      id: 'models',
      title: t.footer.modelsTitle,
      links: [
        { label: t.nav.vehicles, route: 'vehicles' as AppRoute },
        { label: t.nav.importExport, route: 'import-export' as AppRoute },
        { label: t.nav.rental, route: 'rental' as AppRoute },
      ],
    },
    {
      id: 'poles',
      title: t.footer.polesTitle,
      links: [
        { label: t.nav.servicesWorkshop, route: 'services-workshop' as AppRoute },
        { label: t.contact.types.parts, route: 'contact' as AppRoute, inquiryType: 'parts' as InquiryType },
        { label: t.contact.types.workshop, route: 'contact' as AppRoute, inquiryType: 'workshop' as InquiryType },
        { label: t.nav.quoteCta, route: 'contact' as AppRoute, inquiryType: 'quote' as InquiryType },
      ],
    },
    {
      id: 'company',
      title: t.footer.companyTitle,
      links: [
        { label: t.nav.about, route: 'about' as AppRoute },
        { label: t.nav.contact, route: 'contact' as AppRoute, inquiryType: 'info' as InquiryType },
      ],
    },
    {
      id: 'legal',
      title: t.footer.legalTitle,
      links: [
        { label: t.legal.legalNotice.title, route: 'legal' as AppRoute },
        { label: t.legal.privacy.title, route: 'privacy' as AppRoute },
        { label: t.legal.terms.title, route: 'terms' as AppRoute },
      ],
    },
  ];

  const socialLinks = [
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
  ].filter((s) => s.url);

  const contactInfo = [
    {
      icon: MapPin,
      label: t.contact.addressLabel,
      value: `${companyConfig.contact.address}, ${companyConfig.contact.cityCountry}`,
      href: null,
    },
    {
      icon: Phone,
      label: t.contact.phoneLabel,
      value: companyConfig.contact.phone,
      href: companyConfig.contact.phone ? `tel:${companyConfig.contact.phone.replace(/\s+/g, '')}` : null,
    },
    {
      icon: MessageCircle,
      label: t.contact.whatsappLabel,
      value: companyConfig.contact.whatsapp,
      href: companyConfig.contact.whatsapp ? `https://wa.me/${companyConfig.contact.whatsapp.replace(/\D/g, '')}` : null,
    },
    {
      icon: Mail,
      label: t.contact.emailLabel,
      value: companyConfig.contact.email,
      href: companyConfig.contact.email ? `mailto:${companyConfig.contact.email}` : null,
    },
    {
      icon: Clock,
      label: t.contact.hoursLabel,
      value: companyConfig.contact.hours[lang],
      href: null,
    },
  ];

  return (
    <footer className="site-footer">
      <div className="container-wide">
        {/* Company Info Section */}
        <div className="footer-company-info">
          <div className="footer-brand">
            <p className="footer-logo">{companyConfig.name}</p>
            <p className="footer-description">{t.footer.companyDescription}</p>
          </div>

          <div className="footer-contact-grid">
            {contactInfo.map((item) => (
              <div key={item.label} className="footer-contact-item">
                <span className="footer-contact-icon" aria-hidden="true">
                  <item.icon className="icon-sm" />
                </span>
                <div className="footer-contact-content">
                  <dt className="footer-contact-label">{item.label}</dt>
                  <dd className="footer-contact-value">
                    {item.href ? (
                      <a href={item.href} className="footer-contact-link" target={item.href?.startsWith('http') ? '_blank' : undefined} rel={item.href?.startsWith('http') ? 'noopener noreferrer' : undefined}>
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </dd>
                </div>
              </div>
            ))}
          </div>

          {socialLinks.length > 0 && (
            <div className="footer-social">
              <h3 className="footer-social-title">{t.footer.socialTitle}</h3>
              <div className="footer-social-links">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url!}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-link"
                    aria-label={social.ariaLabel}
                  >
                    <social.icon className="icon-md" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Navigation Sections */}
        <div className="footer-navigation">
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
                            onClick={() => onNavigateRoute(item.route, item.inquiryType)}
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

          {/* Desktop Grid */}
          <div className="footer-grid">
            {groups.map((group) => (
              <div key={group.id}>
                <h3 className="footer-grid__title">{group.title}</h3>
                <ul className="footer-grid__list">
                  {group.links.map((item) => (
                    <li key={item.label}>
                      <button
                        type="button"
                        onClick={() => onNavigateRoute(item.route, item.inquiryType)}
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
        </div>

        {/* Contact CTA + Language Row */}
        <div className="footer-meta-row">
          <div className="footer-contact-links">
            <button
              type="button"
              onClick={() => onNavigateRoute('contact', 'quote')}
              className="footer-contact-cta"
            >
              {t.footer.contactLink}
            </button>
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
          <p>© {currentYear} {t.footer.rights}</p>
        </div>

        {/* Architectural Wordmark */}
        <div className="footer-wordmark-wrap">
          <p className="footer-wordmark">{companyConfig.name}</p>
        </div>
      </div>
    </footer>
  );
}