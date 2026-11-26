'use client';

import { LegalPage } from '@/components/LegalPage';
import { useSite } from '@/components/SiteProvider';

export function LegalNoticeClient() {
  const { lang, t } = useSite();

  return <LegalPage docKey="legal" lang={lang} t={t} />;
}