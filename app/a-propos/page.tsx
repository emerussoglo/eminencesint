import type { Metadata } from 'next';
import { AboutView } from '@/components/views/AboutView';

export const metadata: Metadata = {
  title: 'À propos — Éminences Internationales',
  description:
    'Spécialisation 100 % marques automobiles chinoises : vente, import-export, location, pièces détachées et atelier dédié.',
};

export default function AboutRoutePage() {
  return <AboutView />;
}
