import { Metadata } from 'next';
import { companyConfig } from '@/config/company';
import { LegalNoticePage } from '@/components/LegalPages/LegalNoticePage';
import { SiteProvider } from '@/components/SiteProvider';

export const metadata: Metadata = {
  title: 'Mentions légales — Éminences Internationales',
  description: 'Mentions légales d\'Éminences Internationales : éditeur, hébergement, propriété intellectuelle, données personnelles, cookies, responsabilité.',
  openGraph: {
    title: 'Mentions légales — Éminences Internationales',
    description: 'Informations légales obligatoires : identité de l\'entreprise, directeur de publication, hébergeur, propriété intellectuelle, protection des données.',
    type: 'website',
  },
};

export default function LegalNoticePageRoute() {
  return (
    <SiteProvider>
      <LegalNoticePageClient />
    </SiteProvider>
  );
}

'use client';

import { useSite } from '@/components/SiteProvider';

function LegalNoticePageClient() {
  const { lang, t, navigateToRoute } = useSite();
  return <LegalNoticePage lang={lang} t={t} onBackHome={() => navigateToRoute('home')} />;
}