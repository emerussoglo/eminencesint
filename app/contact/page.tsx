import { Suspense } from 'react';
import type { Metadata } from 'next';
import { ContactView } from '@/components/views/ContactView';

export const metadata: Metadata = {
  title: 'Contact & Devis — Éminences Internationales',
  description:
    "Demandez un devis véhicule chinois, une cotation import-export, une réservation de location, une pièce d'origine ou un rendez-vous atelier.",
};

export default function ContactRoutePage() {
  return (
    <Suspense fallback={<main className="contact-suspense-fallback" />}>
      <ContactView />
    </Suspense>
  );
}
