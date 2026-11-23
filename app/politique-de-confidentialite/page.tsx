import { Metadata } from 'next';
import { PrivacyPolicyPage } from '@/components/LegalPages/PrivacyPolicyPage';
import { SiteProvider } from '@/components/SiteProvider';

export const metadata: Metadata = {
  title: 'Politique de confidentialité — Éminences Internationales',
  description: 'Politique de confidentialité d\'Éminences Internationales : collecte des données, finalités, base légale, destinataires, durée de conservation, droits des utilisateurs, cookies, contact DPO.',
  openGraph: {
    title: 'Politique de confidentialité — Éminences Internationales',
    description: 'Comment nous collectons, utilisons et protégeons vos données personnelles via les formulaires de contact, devis, location, pièces et atelier.',
    type: 'website',
  },
};

export default function PrivacyPolicyPageRoute() {
  return (
    <SiteProvider>
      <PrivacyPolicyPageClient />
    </SiteProvider>
  );
}

'use client';

import { useSite } from '@/components/SiteProvider';

function PrivacyPolicyPageClient() {
  const { lang, t, navigateToRoute } = useSite();
  return <PrivacyPolicyPage lang={lang} t={t} onBackHome={() => navigateToRoute('home')} />;
}