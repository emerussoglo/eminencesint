import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { DEMO_VEHICLES } from '@/data/vehicles';
import { VehicleDetailPageClient } from './VehicleDetailPageClient';

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

  return <VehicleDetailPageClient vehicle={vehicle} />;
}