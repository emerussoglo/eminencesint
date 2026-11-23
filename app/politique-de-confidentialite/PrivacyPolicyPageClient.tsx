'use client';

import { useSite } from '@/components/SiteProvider';
import { PrivacyPolicyPage } from '@/components/LegalPages/PrivacyPolicyPage';

export function PrivacyPolicyPageClient() {
  const { lang, t, navigateToRoute } = useSite();
  return <PrivacyPolicyPage lang={lang} t={t} onBackHome={() => navigateToRoute('home')} />;
}