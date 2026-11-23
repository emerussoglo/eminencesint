'use client';

import { PartsWorkshopPage } from '@/components/PartsWorkshopPage';
import { useSite } from '@/components/SiteProvider';

export function ServicesWorkshopView() {
  const { lang, t, navigateToRoute, openContactWith } = useSite();

  return (
    <main>
      <PartsWorkshopPage
        lang={lang}
        t={t}
        onBackHome={() => navigateToRoute('home')}
        onOpenContact={(type, prefill) => openContactWith(type, prefill)}
      />
    </main>
  );
}
