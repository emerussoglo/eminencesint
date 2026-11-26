'use client';

import { LegalPage } from '@/components/LegalPage';
import { useSite } from '@/components/SiteProvider';

export function TermsConditionsClient() {
  const { lang, t } = useSite();

  return <LegalPage docKey="terms" lang={lang} t={t} />;
}