'use client';

import { useState } from 'react';
import { Minus, Plus, Facebook, Youtube, Music, MapPin, Phone, MessageCircle, Mail, Clock, ArrowRight, Shield, Truck, Wrench, Headphones, Globe } from 'lucide-react';
import {
  AppRoute,
  companyConfig,
  InquiryType,
  SupportedLang,
} from '../config/company';
import { TranslationDictionary } from '../i18n/translations';
import { RevealOnScroll, RevealGroup } from './RevealOnScroll';

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
      id: 'vehicles',
      title: t.footer.vehiclesTitle,
      icon: Truck,
      links: [
        { label: t.nav.vehicles, route: 'vehicles' as AppRoute },
        { label: t.nav.importExport, route: 'import-export' as AppRoute },
        { label: t.nav.rental, route: 'rental' as AppRoute },
      ],
    },
    {
      id: 'services',
      title: t.footer.servicesTitle,
      icon: Wrench,
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
      icon: Shield,
      links: [
        { label: t.nav.about, route: 'about' as AppRoute },
        { label: t.nav.contact, route: 'contact' as AppRoute, inquiryType: 'info' as InquiryType },
      ],
    },
    {
      id: 'legal',
      title: t.footer.legalTitle,
      icon: Headphones,
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

  const features = [
    { icon: Globe, title: t.footer.featureWorldwide, desc: t.footer.featureWorldwideDesc },
    { icon: Shield, title: t.footer.featureWarranty, desc: t.footer.featureWarrantyDesc },
    { icon: Truck, title: t.footer.featureDelivery, desc: t.footer.featureDeliveryDesc },
    { icon: Headphones, title: t.footer.featureSupport, desc: t.footer.featureSupportDesc },
  ];

  return (
    <footer className="site-footer">
      <div className="container-wide">
        {/* Main Footer Grid */}
        <div className="footer-main-grid">
          {/* Company Brand Column */}
          <div className="footer-brand-column">
            <div className="footer-logo-wrap">
              <div className="site-logo-box footer-logo-box">
                <img
                  src={companyConfig.logo.src}
                  alt={companyConfig.logo.alt}
                  referrerPolicy="no-referrer"
                  className="site-logo-box__img"
                />
              </div>
              <p className="footer-brand-name">{companyConfig.name}</p>
            </div>
            <p className="footer-tagline">{t.footer.companyDescription}</p>

            {/* Contact Info */}
            <dl className="footer-contact-list">
              {contactInfo.map((item) => (
                <div key={item.label} className="footer-contact-item">
                  <div className="footer-contact-icon" aria-hidden="true">
                    <item.icon className="icon-sm" />
                  </div>
                  <div className="footer-contact-content">
                    <dt className="footer-contact-label">{item.label}</dt>
                    <dd className="footer-contact-value">
                      {item.href ? (
                        <a
                          href={item.href}
                          className="footer-contact-link"
                          target={item.href?.startsWith('http') ? '_blank' : undefined}
                          rel={item.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {item.value}
                        </a>
                      ) : (
                        item.value
                      )}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>

            {/* Social Links */}
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

          {/* Navigation Columns */}
          <nav className="footer-nav-columns" aria-label={t.footer.navAriaLabel}>
            {groups.map((group) => (
              <div key={group.id} className="footer-nav-column">
                <div className="footer-nav-column__header">
                  <span className="footer-nav-icon" aria-hidden="true">
                    <group.icon className="icon-sm" />
                  </span>
                  <h3 className="footer-nav-title">{group.title}</h3>
                </div>
                <ul className="footer-nav-list">
                  {group.links.map((item) => (
                    <li key={item.label}>
                      <button
                        type="button"
                        onClick={() => onNavigateRoute(item.route, item.inquiryType)}
                        className="footer-nav-link"
                      >
                        {item.label}
                        <ArrowRight className="icon-xs footer-nav-arrow" aria-hidden="true" />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* Features Bar */}
        <div className="footer-features-bar">
          <RevealGroup staggerDelay={100}>
            {features.map((feature, idx) => (
              <RevealOnScroll key={feature.title} delay={idx * 100}>
                <div className="footer-feature">
                  <div className="footer-feature__icon" aria-hidden="true">
                    <feature.icon className="icon-md" />
                  </div>
                  <div className="footer-feature__content">
                    <h4 className="footer-feature__title">{feature.title}</h4>
                    <p className="footer-feature__desc">{feature.desc}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </RevealGroup>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="footer-bottom-left">
            <p className="footer-copyright">© {currentYear} {t.footer.rights}</p>
            <p className="footer-legal-note">{t.footer.legalNote}</p>
          </div>
          <div className="footer-bottom-center">
            <div className="footer-brand-wordmark">{companyConfig.name}</div>
          </div>
          <div className="footer-bottom-right">
            <div className="footer-lang-switch">
              <button
                type="button"
                onClick={() => onChangeLang('fr')}
                className={`footer-lang-btn${lang === 'fr' ? ' is-active' : ''}`}
                aria-pressed={lang === 'fr'}
              >
                FR
              </button>
              <button
                type="button"
                onClick={() => onChangeLang('en')}
                className={`footer-lang-btn${lang === 'en' ? ' is-active' : ''}`}
                aria-pressed={lang === 'en'}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}