import type { Metadata } from 'next';
import { LegalNoticeClient } from './LegalNoticeClient';

export const metadata: Metadata = {
  title: 'Mentions légales | Éminences Internationales',
  description: 'Mentions légales d\'Éminences Internationales - Importateur de véhicules chinois en France',
};

export default function LegalNoticePage() {
  return <LegalNoticeClient />;
}