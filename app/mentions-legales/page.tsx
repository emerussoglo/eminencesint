import { Metadata } from 'next';
import { LegalNoticePageClient } from './LegalNoticePageClient';

export const metadata: Metadata = {
  title: 'Mentions légales — Éminences Internationales',
  description: 'Mentions légales d\'Éminences Internationales : éditeur, hébergement, propriété intellectuelle, données personnelles, cookies, responsabilité.',
  openGraph: {
    title: 'Mentions légales — Éminences Internationales',
    description: 'Informations légales obligatoires : identité de l\'entreprise, directeur de publication, hébergeur, propriété intellectuelle, protection des données.',
    type: 'website',
  },
};

import { SiteProvider } from '@/components/SiteProvider';

export default function LegalNoticePageRoute() {
  return (
    <SiteProvider>
      <LegalNoticePageClient />
    </SiteProvider>
  );
}