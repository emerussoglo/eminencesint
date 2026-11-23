'use client';

import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import {
  AppRoute,
  companyConfig,
  InquiryType,
  PATH_TO_ROUTE,
  ROUTE_TO_PATH,
  SupportedLang,
} from '@/config/company';
import { LegalDocKey } from '@/data/content';
import { DEMO_VEHICLES } from '@/data/vehicles';
import { TRANSLATIONS, TranslationDictionary } from '@/i18n/translations';
import { Vehicle } from '@/types/vehicle';
import { BackToTopButton } from './BackToTopButton';
import { CookieConsent } from './CookieConsent';
import { Footer } from './Footer';
import { Header } from './Header';
import { LegalModal } from './LegalModal';
import { QuickSearchFilters } from './QuickSearchBar';
import { VehicleComparatorModal } from './VehicleComparatorModal';
import { VehicleDetailModal } from './VehicleDetailModal';

const LEGACY_HASH_TO_PATH: Record<string, string> = {
  '#/': '/',
  '#/vehicules': '/vehicules',
  '#/import-export': '/import-export',
  '#/location': '/location',
  '#/services-atelier': '/services-atelier',
  '#/a-propos': '/a-propos',
  '#/contact': '/contact',
};

interface SiteContextValue {
  lang: SupportedLang;
  setLang: (lang: SupportedLang) => void;
  t: TranslationDictionary;
  activeRoute: AppRoute;
  navigateToRoute: (route: AppRoute, nextInquiryType?: InquiryType) => void;
  openContactWith: (nextInquiryType?: InquiryType, vehicleLabel?: string) => void;
  selectedVehicle: Vehicle | null;
  setSelectedVehicle: (vehicle: Vehicle | null) => void;
  prefilledVehicle: string;
  inquiryType: InquiryType;
  quickFilters: QuickSearchFilters | null;
  handleQuickSearch: (filters: QuickSearchFilters) => void;
  comparedIds: string[];
  toggleCompare: (id: string) => void;
  clearCompare: () => void;
  openComparator: () => void;
}

const SiteContext = createContext<SiteContextValue | null>(null);

export function useSite(): SiteContextValue {
  const ctx = useContext(SiteContext);
  if (!ctx) {
    throw new Error('useSite must be used within SiteProvider');
  }
  return ctx;
}

export function SiteProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  const [lang, setLang] = useState<SupportedLang>(companyConfig.languages.default);
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [prefilledVehicle, setPrefilledVehicle] = useState<string>('');
  const [inquiryType, setInquiryType] = useState<InquiryType>('quote');
  const [activeLegalDoc, setActiveLegalDoc] = useState<LegalDocKey | null>(null);
  const [quickFilters, setQuickFilters] = useState<QuickSearchFilters | null>(null);
  const [comparedIds, setComparedIds] = useState<string[]>([]);
  const [comparatorOpen, setComparatorOpen] = useState(false);

  const normalizedPathname =
    pathname && pathname.length > 1 && pathname.endsWith('/')
      ? pathname.slice(0, -1)
      : pathname || '/';
  const activeRoute: AppRoute = PATH_TO_ROUTE[normalizedPathname] || 'home';
  const t = TRANSLATIONS[lang];

  // Hydrate saved language preference without causing SSR mismatch
  useEffect(() => {
    try {
      const saved = localStorage.getItem('eminences_lang');
      if (saved === 'fr' || saved === 'en') {
        setLang(saved);
      }
    } catch {
      // ignore storage errors
    }
  }, []);

  // Support legacy hash URLs by redirecting to clean App Router paths
  useEffect(() => {
    const hash = window.location.hash;
    if (hash && LEGACY_HASH_TO_PATH[hash]) {
      router.replace(LEGACY_HASH_TO_PATH[hash]);
    }
  }, [router]);

  useEffect(() => {
    try {
      localStorage.setItem('eminences_lang', lang);
    } catch {
      // ignore
    }
    document.documentElement.lang = lang;
    const seo = companyConfig.seo[lang];
    document.title = seo.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', seo.description);
  }, [lang]);

  const navigateToRoute = (route: AppRoute, nextInquiryType?: InquiryType) => {
    if (route === 'contact' && nextInquiryType) {
      setInquiryType(nextInquiryType);
      setPrefilledVehicle('');
      router.push(`/contact?type=${encodeURIComponent(nextInquiryType)}`);
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }
    router.push(ROUTE_TO_PATH[route]);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const openContactWith = (
    nextInquiryType: InquiryType = 'quote',
    vehicleLabel?: string
  ) => {
    setInquiryType(nextInquiryType);
    setPrefilledVehicle(vehicleLabel || '');
    const params = new URLSearchParams();
    params.set('type', nextInquiryType);
    if (vehicleLabel) params.set('vehicle', vehicleLabel);
    router.push(`/contact?${params.toString()}`);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const handleQuickSearch = (filters: QuickSearchFilters) => {
    setQuickFilters({ ...filters });
    navigateToRoute('vehicles');
  };

  const toggleCompare = (id: string) => {
    setComparedIds((prev) => {
      if (prev.includes(id)) return prev.filter((item) => item !== id);
      if (prev.length >= 3) return [...prev.slice(1), id];
      return [...prev, id];
    });
  };

  const comparedVehicles = useMemo(
    () => DEMO_VEHICLES.filter((v) => comparedIds.includes(v.id)),
    [comparedIds]
  );

  const value: SiteContextValue = {
    lang,
    setLang,
    t,
    activeRoute,
    navigateToRoute,
    openContactWith,
    selectedVehicle,
    setSelectedVehicle,
    prefilledVehicle,
    inquiryType,
    quickFilters,
    handleQuickSearch,
    comparedIds,
    toggleCompare,
    clearCompare: () => setComparedIds([]),
    openComparator: () => setComparatorOpen(true),
  };

  return (
    <SiteContext.Provider value={value}>
      <div className="app-shell">
        <Header
          lang={lang}
          t={t}
          vehicles={DEMO_VEHICLES}
          activeRoute={activeRoute}
          onChangeLang={setLang}
          onNavigateRoute={navigateToRoute}
          onOpenContactPage={openContactWith}
          onSelectVehicle={setSelectedVehicle}
        />

        {children}

        <Footer
          lang={lang}
          t={t}
          onChangeLang={setLang}
          onNavigateRoute={navigateToRoute}
          onOpenLegal={setActiveLegalDoc}
        />

        <VehicleDetailModal
          vehicle={selectedVehicle}
          lang={lang}
          t={t}
          onClose={() => setSelectedVehicle(null)}
          onRequestQuote={(label) => openContactWith('quote', label)}
        />

        <VehicleComparatorModal
          vehicles={comparedVehicles}
          isOpen={comparatorOpen}
          lang={lang}
          t={t}
          onClose={() => setComparatorOpen(false)}
          onRemoveVehicle={(id) =>
            setComparedIds((prev) => prev.filter((item) => item !== id))
          }
          onRequestQuote={(label) => openContactWith('quote', label)}
        />

        <LegalModal
          docKey={activeLegalDoc}
          lang={lang}
          t={t}
          onClose={() => setActiveLegalDoc(null)}
        />

        <BackToTopButton label={t.backToTop} />

        <CookieConsent
          t={t}
          onOpenPrivacy={() => setActiveLegalDoc('privacy')}
        />
      </div>
    </SiteContext.Provider>
  );
}
