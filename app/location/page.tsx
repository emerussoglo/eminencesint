import type { Metadata } from 'next';
import { RentalView } from '@/components/views/RentalView';

export const metadata: Metadata = {
  title: 'Location de Véhicules Chinois — Éminences Internationales',
  description:
    'Location courte et longue durée de SUV, berlines et pick-ups chinois récents pour particuliers et entreprises.',
};

export default function RentalRoutePage() {
  return <RentalView />;
}
