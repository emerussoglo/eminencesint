'use client';

import { DEMO_VEHICLES } from '@/data/vehicles';
import { BrandsScopeSection } from '@/components/BrandsScopeSection';
import { BreadcrumbBar } from '@/components/BreadcrumbBar';
import { CatalogSection } from '@/components/CatalogSection';
import { FinalCtaBanner } from '@/components/FinalCtaBanner';
import { useSite } from '@/components/SiteProvider';

export function VehiclesView() {
  const {
    lang,
    t,
    navigateToRoute,
    openContactWith,
    setSelectedVehicle,
    quickFilters,
    comparedIds,
    toggleCompare,
    openComparator,
    clearCompare,
  } = useSite();

  return (
    <main className="page-offset">
      <div className="subpage-breadcrumb-strip">
        <div className="container">
          <BreadcrumbBar
            homeLabel={t.breadcrumb.home}
            currentLabel={t.nav.vehicles}
            onBackHome={() => navigateToRoute('home')}
            breadcrumbAriaLabel={t.nav.vehicles}
          />
        </div>
      </div>
      <CatalogSection
        vehicles={DEMO_VEHICLES}
        lang={lang}
        t={t}
        externalFilters={quickFilters}
        comparedIds={comparedIds}
        onToggleCompare={toggleCompare}
        onOpenComparator={openComparator}
        onClearCompare={clearCompare}
        onSelectVehicle={setSelectedVehicle}
        onRequestQuote={(label) => openContactWith('quote', label)}
        onRequestCustomImport={() => openContactWith('import')}
      />
      <BrandsScopeSection t={t} />
      <FinalCtaBanner
        t={t}
        onRequestQuote={() => openContactWith('quote')}
        onExploreCatalog={() => navigateToRoute('import-export')}
      />
    </main>
  );
}
