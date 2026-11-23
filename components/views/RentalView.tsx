'use client';

import { RentalPage } from '@/components/RentalPage';
import { useSite } from '@/components/SiteProvider';

export function RentalView() {
  const { lang, t, navigateToRoute, openContactWith } = useSite();

  return (
    <main>
      <RentalPage
        lang={lang}
        t={t}
        onBackHome={() => navigateToRoute('home')}
        onOpenContact={(type, prefill) => openContactWith(type, prefill)}
      />
    </main>
  );
}
