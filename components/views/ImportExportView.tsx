'use client';

import { ImportExportPage } from '@/components/ImportExportPage';
import { useSite } from '@/components/SiteProvider';

export function ImportExportView() {
  const { lang, t, navigateToRoute, openContactWith } = useSite();

  return (
    <main>
      <ImportExportPage
        lang={lang}
        t={t}
        onBackHome={() => navigateToRoute('home')}
        onOpenContact={(type, prefill) => openContactWith(type, prefill)}
      />
    </main>
  );
}
