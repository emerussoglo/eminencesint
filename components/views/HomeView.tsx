'use client';

import { DEMO_VEHICLES } from '@/data/vehicles';
import { AboutSection } from '@/components/AboutSection';
import { BrandsScopeSection } from '@/components/BrandsScopeSection';
import { CatalogSection } from '@/components/CatalogSection';
import { FaqSection } from '@/components/FaqSection';
import { FourPolesSection } from '@/components/FourPolesSection';
import { HeroSection } from '@/components/HeroSection';
import { ImportExportTimelineSection } from '@/components/ImportExportTimelineSection';
import { ServicesCarouselSection } from '@/components/ServicesCarouselSection';
import { useSite } from '@/components/SiteProvider';
import { ValuesSection } from '@/components/ValuesSection';
import { VehicleCarouselShowcase } from '@/components/VehicleCarouselShowcase';
import { VisionBannerSection } from '@/components/VisionBannerSection';

export function HomeView() {
  const {
    lang,
    t,
    navigateToRoute,
    openContactWith,
    quickFilters,
    comparedIds,
    toggleCompare,
    openComparator,
    clearCompare,
  } = useSite();

  return (
    <main>
      {/* 1. Full-bleed Zeekr Hero Slider */}
      <HeroSection
        vehicles={DEMO_VEHICLES}
        lang={lang}
        t={t}
        onRequestQuote={(label) => openContactWith('quote', label)}
      />

      {/* 2. Zeekr Interactive Chinese Model Lineup Carousel */}
      <VehicleCarouselShowcase
        vehicles={DEMO_VEHICLES}
        lang={lang}
        t={t}
        onRequestQuote={(label) => openContactWith('quote', label)}
      />

      {/* 3. 4 Activity Poles & Factual Metrics */}
      <FourPolesSection
        lang={lang}
        t={t}
        onNavigateRoute={navigateToRoute}
      />

      {/* 4. China Import-Export 4-Step Animated Timeline */}
      <ImportExportTimelineSection
        lang={lang}
        t={t}
        onRequestImportQuote={() => openContactWith('import')}
        onOpenImportPage={() => navigateToRoute('import-export')}
      />

      {/* 5. Exclusive Chinese Brands Continuous Marquee */}
      <BrandsScopeSection t={t} />

      {/* 6. Zeekr Horizontal Swipeable Services Carousel */}
      <ServicesCarouselSection
        lang={lang}
        t={t}
        onNavigateRoute={navigateToRoute}
      />

      {/* 7. Dark Vision Banner */}
      <VisionBannerSection
        t={t}
        onRequestQuote={() => openContactWith('quote')}
      />

      {/* 8. Dark Values Section */}
      <ValuesSection
        lang={lang}
        t={t}
        onAboutClick={() => navigateToRoute('about')}
      />

      {/* 9. Full Filterable Chinese Vehicle Catalog + Comparator */}
      <CatalogSection
        vehicles={DEMO_VEHICLES}
        lang={lang}
        t={t}
        externalFilters={quickFilters}
        comparedIds={comparedIds}
        onToggleCompare={toggleCompare}
        onOpenComparator={openComparator}
        onClearCompare={clearCompare}
        onRequestQuote={(label) => openContactWith('quote', label)}
        onRequestCustomImport={() => openContactWith('import')}
      />

      {/* 10. About & Trust Commitments 01-04 */}
      <AboutSection lang={lang} t={t} />

      {/* 11. Centered FAQ */}
      <FaqSection lang={lang} t={t} />
    </main>
  );
}
