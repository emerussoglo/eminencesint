'use client';

import { useSite } from '@/components/SiteProvider';
import { VehicleDetailPage } from '@/components/VehicleDetailPage';

export function VehicleDetailPageClient({ vehicle }: { vehicle: typeof import('@/data/vehicles').DEMO_VEHICLES[0] }) {
  const { lang, t, navigateToRoute } = useSite();
  return <VehicleDetailPage vehicle={vehicle} lang={lang} t={t} onBackHome={() => navigateToRoute('vehicles')} />;
}