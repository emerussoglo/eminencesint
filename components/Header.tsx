'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  Globe,
  MessageCircle,
  Minus,
  Phone,
  Plus,
  Send,
  X,
} from 'lucide-react';
import {
  AppRoute,
  companyConfig,
  InquiryType,
  ROUTE_TO_PATH,
  SupportedLang,
} from '../config/company';
import { TranslationDictionary } from '../i18n/translations';
import { Vehicle } from '../types/vehicle';
import { ResilientImage } from './ResilientImage';

interface HeaderProps {
  lang: SupportedLang;
  t: TranslationDictionary;
  vehicles: Vehicle[];
  activeRoute: AppRoute;
  onChangeLang: (lang: SupportedLang) => void;
  onNavigateRoute: (route: AppRoute, inquiryType?: InquiryType) => void;
  onOpenContactPage: (inquiryType?: InquiryType, vehicleLabel?: string) => void;
  onSelectVehicle: (vehicle: Vehicle) => void;
}

export function Header({
  lang,
  t,
  vehicles,
  activeRoute,
  onChangeLang,
  onNavigateRoute,
  onOpenContactPage,
  onSelectVehicle,
}: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [modelsOpen, setModelsOpen] = useState(true);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const isSolid = scrolled || activeRoute !== 'home';

  const navigateAndClose = (route: AppRoute, inquiryType?: InquiryType) => {
    setMobileOpen(false);
    onNavigateRoute(route, inquiryType);
  };

  const navItems: { route: AppRoute; label: string }[] = [
    { route: 'home', label: t.nav.home },
    { route: 'vehicles', label: t.nav.vehicles },
    { route: 'import-export', label: t.nav.importExport },
    { route: 'rental', label: t.nav.rental },
    { route: 'services-workshop', label: t.nav.servicesWorkshop },
    { route: 'about', label: t.nav.about },
    { route: 'contact', label: t.nav.contact },
  ];

  const phoneHref = companyConfig.contact.phone
    ? `tel:${companyConfig.contact.phone.replace(/\s+/g, '')}`
    : null;
  const whatsappHref = companyConfig.contact.whatsapp
    ? `https://wa.me/${companyConfig.contact.whatsapp.replace(/\D/g, '')}`
    : null;

  return (
    <>
      <header
        className={`site-header ${
          isSolid ? 'site-header--solid' : 'site-header--transparent'
        }`}
      >
        <div className="container-wide site-header__inner">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="site-header__brand"
            aria-label={companyConfig.name}
          >
            <div className="site-logo-box">
              <img
                src={companyConfig.logo.src}
                alt={companyConfig.logo.alt}
                referrerPolicy="no-referrer"
                className="site-logo-box__img"
              />
            </div>
          </Link>

          <nav className="desktop-nav" aria-label="Navigation principale">
            {navItems.map((item) => (
              <Link
                key={item.route}
                href={ROUTE_TO_PATH[item.route]}
                onClick={() => setMobileOpen(false)}
                className={`desktop-nav__link${
                  activeRoute === item.route ? ' is-active' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="site-header__actions">
            <div
              className={`lang-switch ${
                isSolid ? 'lang-switch--solid' : 'lang-switch--transparent'
              }`}
              role="group"
              aria-label={t.nav.languageLabel}
            >
              <button
                type="button"
                onClick={() => onChangeLang('fr')}
                className={`lang-switch__btn${
                  lang === 'fr'
                    ? isSolid
                      ? ' is-active-solid'
                      : ' is-active-transparent'
                    : ''
                }`}
              >
                FR
              </button>
              <button
                type="button"
                onClick={() => onChangeLang('en')}
                className={`lang-switch__btn${
                  lang === 'en'
                    ? isSolid
                      ? ' is-active-solid'
                      : ' is-active-transparent'
                    : ''
                }`}
              >
                EN
              </button>
            </div>

            <button
              type="button"
              onClick={() => onOpenContactPage('quote')}
              className="header-cta"
            >
              {t.nav.quoteCta}
            </button>

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="burger-btn"
              aria-label={t.nav.openMenu}
              aria-expanded={mobileOpen}
            >
              <svg
                className="burger-btn__icon"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" d="M4 7h16M4 12h11M4 17h14" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div
          className="mobile-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation mobile"
        >
          <div className="mobile-drawer__top">
            <button
              type="button"
              onClick={() => navigateAndClose('home')}
              className="site-header__brand"
              aria-label={companyConfig.name}
            >
              <div className="site-logo-box">
                <img
                  src={companyConfig.logo.src}
                  alt={companyConfig.logo.alt}
                  referrerPolicy="no-referrer"
                  className="site-logo-box__img"
                />
              </div>
            </button>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="mobile-drawer__close"
              aria-label={t.nav.closeMenu}
            >
              <X className="icon-lg" aria-hidden="true" />
            </button>
          </div>

          <div className="mobile-drawer__scroll">
            <button
              type="button"
              onClick={() => navigateAndClose('home')}
              className="mobile-drawer__link mobile-drawer__link--lead"
            >
              {t.nav.home}
            </button>

            <div>
              <button
                type="button"
                onClick={() => setModelsOpen((prev) => !prev)}
                aria-expanded={modelsOpen}
                className="mobile-drawer__accordion-trigger"
              >
                <span>{t.nav.vehicles}</span>
                {modelsOpen ? (
                  <Minus className="icon-md" aria-hidden="true" />
                ) : (
                  <Plus className="icon-md" aria-hidden="true" />
                )}
              </button>

              {modelsOpen && (
                <div className="mobile-drawer__models-panel">
                  <div className="mobile-drawer__models-grid">
                    {vehicles.slice(0, 4).map((vehicle) => (
                      <div
                        key={vehicle.id}
                        className="mobile-drawer__model-card"
                      >
                        <button
                          type="button"
                          onClick={() => {
                            setMobileOpen(false);
                            onSelectVehicle(vehicle);
                          }}
                          className="mobile-drawer__model-thumb"
                        >
                          <ResilientImage
                            src={vehicle.images[0]}
                            alt={`${vehicle.brand} ${vehicle.model}`}
                            className="mobile-drawer__model-img"
                          />
                        </button>
                        <p className="mobile-drawer__model-name">
                          {vehicle.brand} {vehicle.model}
                        </p>
                        <div className="mobile-drawer__model-links">
                          <button
                            type="button"
                            onClick={() => {
                              setMobileOpen(false);
                              onOpenContactPage(
                                'quote',
                                `${vehicle.brand} ${vehicle.model}`
                              );
                            }}
                            className="mobile-drawer__model-link mobile-drawer__model-link--quote"
                          >
                            {t.nav.drawerQuote}
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              setMobileOpen(false);
                              onSelectVehicle(vehicle);
                            }}
                            className="mobile-drawer__model-link mobile-drawer__model-link--discover"
                          >
                            {t.nav.drawerDiscover}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <nav aria-label={t.nav.drawerExtraLinksAria}>
              <button
                type="button"
                onClick={() => navigateAndClose('vehicles')}
                className="mobile-drawer__link"
              >
                {t.nav.drawerFullCatalog}
              </button>
              <button
                type="button"
                onClick={() => navigateAndClose('import-export')}
                className="mobile-drawer__link"
              >
                {t.nav.importExport}
              </button>
              <button
                type="button"
                onClick={() => navigateAndClose('rental')}
                className="mobile-drawer__link"
              >
                {t.nav.rental}
              </button>
              <button
                type="button"
                onClick={() => navigateAndClose('services-workshop')}
                className="mobile-drawer__link"
              >
                {t.nav.servicesWorkshop}
              </button>
              <button
                type="button"
                onClick={() => navigateAndClose('about')}
                className="mobile-drawer__link"
              >
                {t.nav.about}
              </button>
              <div className="mobile-drawer__divider" />
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  onOpenContactPage('quote');
                }}
                className="mobile-drawer__link mobile-drawer__link--accent"
              >
                {t.nav.quoteCta}
              </button>
            </nav>
          </div>

          <div className="mobile-drawer__bottom">
            <div className="mobile-drawer__lang-label">
              <Globe className="icon-md" aria-hidden="true" />
              <span>{lang === 'fr' ? 'Français' : 'English'}</span>
            </div>
            <div className="mobile-drawer__lang-btns">
              <button
                type="button"
                onClick={() => onChangeLang('fr')}
                className={`mobile-drawer__lang-btn${
                  lang === 'fr' ? ' is-active' : ''
                }`}
              >
                FR
              </button>
              <button
                type="button"
                onClick={() => onChangeLang('en')}
                className={`mobile-drawer__lang-btn${
                  lang === 'en' ? ' is-active' : ''
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="mobile-bottom-bar">
        {phoneHref ? (
          <a
            href={phoneHref}
            className="mobile-bottom-bar__btn mobile-bottom-bar__btn--call"
          >
            <Phone className="icon-xs" aria-hidden="true" />
            <span>{t.nav.mobileCall}</span>
          </a>
        ) : (
          <button
            type="button"
            onClick={() => onOpenContactPage('info')}
            className="mobile-bottom-bar__btn mobile-bottom-bar__btn--call"
          >
            <Phone className="icon-xs" aria-hidden="true" />
            <span>{t.nav.mobileCall}</span>
          </button>
        )}

        {whatsappHref ? (
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-bottom-bar__btn mobile-bottom-bar__btn--whatsapp"
          >
            <MessageCircle className="icon-xs" aria-hidden="true" />
            <span>{t.nav.mobileWhatsapp}</span>
          </a>
        ) : (
          <button
            type="button"
            onClick={() => onOpenContactPage('info')}
            className="mobile-bottom-bar__btn mobile-bottom-bar__btn--whatsapp"
          >
            <MessageCircle className="icon-xs" aria-hidden="true" />
            <span>{t.nav.mobileWhatsapp}</span>
          </button>
        )}

        <button
          type="button"
          onClick={() => onOpenContactPage('quote')}
          className="mobile-bottom-bar__btn mobile-bottom-bar__btn--quote"
        >
          <Send className="icon-xs" aria-hidden="true" />
          <span>{t.nav.mobileQuote}</span>
        </button>
      </div>
    </>
  );
}
