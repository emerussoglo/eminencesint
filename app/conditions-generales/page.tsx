import { Metadata } from 'next';
import { TermsConditionsPage } from '@/components/LegalPages/TermsConditionsPage';
import { SiteProvider } from '@/components/SiteProvider';

export const metadata: Metadata = {
  title: 'Conditions générales — Éminences Internationales',
  description: 'Conditions générales d\'Éminences Internationales : vente véhicules chinois, import-export, location, pièces, atelier, devis, paiement, garanties, réclamations, responsabilité, litiges.',
  openGraph: {
    title: 'Conditions générales — Éminences Internationales',
    description: 'CGV complètes pour la vente de véhicules chinois, import-export sur commande, location, pièces détachées et prestations atelier.',
    type: 'website',
  },
};

export default function TermsConditionsPageRoute() {
  return (
    <SiteProvider>
      <TermsConditionsPageClient />
    </SiteProvider>
  );
}

'use client';

import { useSite } from '@/components/SiteProvider';

function TermsConditionsPageClient() {
  const { lang, t, navigateToRoute } = useSite();
  return <TermsConditionsPage lang={lang} t={t} onBackHome={() => navigateToRoute('home')} />;
}