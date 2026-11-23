import { Metadata } from 'next';
import { PrivacyPolicyPageClient } from './PrivacyPolicyPageClient';

export const metadata: Metadata = {
  title: 'Politique de confidentialité — Éminences Internationales',
  description: 'Politique de confidentialité d\'Éminences Internationales : collecte des données, finalités, base légale, destinataires, durée de conservation, droits des utilisateurs, cookies, contact DPO.',
  openGraph: {
    title: 'Politique de confidentialité — Éminences Internationales',
    description: 'Comment nous collectons, utilisons et protégeons vos données personnelles via les formulaires de contact, devis, location, pièces et atelier.',
    type: 'website',
  },
};

import { SiteProvider } from '@/components/SiteProvider';

export default function PrivacyPolicyPageRoute() {
  return (
    <SiteProvider>
      <PrivacyPolicyPageClient />
    </SiteProvider>
  );
}