import { Metadata } from 'next';
import { TermsConditionsPageClient } from './TermsConditionsPageClient';

export const metadata: Metadata = {
  title: 'Conditions générales — Éminences Internationales',
  description: 'Conditions générales d\'Éminences Internationales : vente véhicules chinois, import-export, location, pièces, atelier, devis, paiement, garanties, réclamations, responsabilité, litiges.',
  openGraph: {
    title: 'Conditions générales — Éminences Internationales',
    description: 'CGV complètes pour la vente de véhicules chinois, import-export sur commande, location, pièces détachées et prestations atelier.',
    type: 'website',
  },
};

import { SiteProvider } from '@/components/SiteProvider';

export default function TermsConditionsPageRoute() {
  return (
    <SiteProvider>
      <TermsConditionsPageClient />
    </SiteProvider>
  );
}