import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { DEMO_VEHICLES } from '@/data/vehicles';
import { companyConfig } from '@/config/company';
import { VehicleDetailPage } from '@/components/VehicleDetailPage';
import { SiteProvider } from '@/components/SiteProvider';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return DEMO_VEHICLES.map((vehicle) => ({
    slug: vehicle.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const vehicle = DEMO_VEHICLES.find((v) => v.slug === resolvedParams.slug);

  if (!vehicle) {
    return {
      title: 'Véhicule non trouvé — Éminences Internationales',
    };
  }

  const vehicleName = `${vehicle.brand} ${vehicle.model}`;

  return {
    title: `${vehicleName} — Éminences Internationales`,
    description: vehicle.description.fr.substring(0, 160),
    openGraph: {
      title: `${vehicleName} — Éminences Internationales`,
      description: vehicle.description.fr.substring(0, 160),
      type: 'website',
      images: vehicle.images[0] ? [{ url: vehicle.images[0] }] : [],
    },
    twitter: {
      card: 'summary_large_image',
    },
  };
}

export default async function VehicleDetailPageRoute({ params }: PageProps) {
  const resolvedParams = await params;
  const vehicle = DEMO_VEHICLES.find((v) => v.slug === resolvedParams.slug);

  if (!vehicle) {
    notFound();
  }

  return (
    <SiteProvider>
      <VehicleDetailPageClient vehicle={vehicle} />
    </SiteProvider>
  );
}

'use client';

import { useSite } from '@/components/SiteProvider';

function VehicleDetailPageClient({ vehicle }: { vehicle: typeof DEMO_VEHICLES[0] }) {
  const { lang, t, navigateToRoute } = useSite();
  return <VehicleDetailPage vehicle={vehicle} lang={lang} t={t} onBackHome={() => navigateToRoute('vehicles')} />;
}