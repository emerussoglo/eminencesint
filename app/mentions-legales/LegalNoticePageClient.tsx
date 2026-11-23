'use client';

import { useSite } from '@/components/SiteProvider';
import { LegalNoticePage } from '@/components/LegalPages/LegalNoticePage';

export function LegalNoticePageClient() {
  const { lang, t, navigateToRoute } = useSite();
  return <LegalNoticePage lang={lang} t={t} onBackHome={() => navigateToRoute('home')} />;
}