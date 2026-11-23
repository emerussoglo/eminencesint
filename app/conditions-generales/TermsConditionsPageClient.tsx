'use client';

import { useSite } from '@/components/SiteProvider';
import { TermsConditionsPage } from '@/components/LegalPages/TermsConditionsPage';

export function TermsConditionsPageClient() {
  const { lang, t, navigateToRoute } = useSite();
  return <TermsConditionsPage lang={lang} t={t} onBackHome={() => navigateToRoute('home')} />;
}