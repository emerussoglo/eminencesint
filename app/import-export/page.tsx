import type { Metadata } from 'next';
import { ImportExportView } from '@/components/views/ImportExportView';

export const metadata: Metadata = {
  title: 'Import-Export depuis la Chine — Éminences Internationales',
  description:
    'Commande directe de véhicules chinois depuis la Chine : sélection, inspection, expédition, formalités douanières et livraison.',
};

export default function ImportExportRoutePage() {
  return <ImportExportView />;
}
