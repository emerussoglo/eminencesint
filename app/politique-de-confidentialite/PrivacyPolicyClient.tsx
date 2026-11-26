'use client';

import { LegalPage } from '@/components/LegalPage';
import { useSite } from '@/components/SiteProvider';

export function PrivacyPolicyClient() {
  const { lang, t } = useSite();

  return <LegalPage docKey="privacy" lang={lang} t={t} />;
}