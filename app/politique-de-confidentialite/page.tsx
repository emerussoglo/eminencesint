import type { Metadata } from 'next';
import { PrivacyPolicyClient } from './PrivacyPolicyClient';

export const metadata: Metadata = {
  title: 'Politique de confidentialité | Éminences Internationales',
  description: 'Politique de confidentialité d\'Éminences Internationales - Protection de vos données personnelles',
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyClient />;
}