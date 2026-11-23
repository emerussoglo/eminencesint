import type { Metadata } from 'next';
import { ServicesWorkshopView } from '@/components/views/ServicesWorkshopView';

export const metadata: Metadata = {
  title: 'Pièces & Atelier Spécialisé — Éminences Internationales',
  description:
    "Pièces détachées d'origine, accessoires, entretien mécanique, diagnostic EV/hybride et carrosserie dédiés aux véhicules chinois.",
};

export default function ServicesWorkshopRoutePage() {
  return <ServicesWorkshopView />;
}
