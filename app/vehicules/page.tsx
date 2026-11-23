import type { Metadata } from 'next';
import { VehiclesView } from '@/components/views/VehiclesView';

export const metadata: Metadata = {
  title: 'Catalogue Véhicules Chinois — Éminences Internationales',
  description:
    "Découvrez notre sélection de véhicules automobiles chinois neufs et d'occasion : SUV, berlines, pick-ups électriques, hybrides et thermiques.",
};

export default function VehiclesRoutePage() {
  return <VehiclesView />;
}
