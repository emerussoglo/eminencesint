import type { Metadata } from 'next';
import { TermsConditionsClient } from './TermsConditionsClient';

export const metadata: Metadata = {
  title: 'Conditions générales | Éminences Internationales',
  description: 'Conditions générales de vente et de prestation de services d\'Éminences Internationales',
};

export default function TermsConditionsPage() {
  return <TermsConditionsClient />;
}