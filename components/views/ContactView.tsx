'use client';

import { useSearchParams } from 'next/navigation';
import { InquiryType } from '@/config/company';
import { ContactPage } from '@/components/ContactPage';
import { useSite } from '@/components/SiteProvider';

const VALID_INQUIRY_TYPES: InquiryType[] = [
  'quote',
  'import',
  'rental',
  'parts',
  'workshop',
  'fleet',
  'info',
];

export function ContactView() {
  const searchParams = useSearchParams();
  const { lang, t, inquiryType, prefilledVehicle, navigateToRoute } = useSite();

  const typeParam = searchParams.get('type') as InquiryType | null;
  const vehicleParam = searchParams.get('vehicle');

  const resolvedType: InquiryType =
    typeParam && VALID_INQUIRY_TYPES.includes(typeParam) ? typeParam : inquiryType;
  const resolvedVehicle = vehicleParam ?? prefilledVehicle;

  return (
    <main>
      <ContactPage
        lang={lang}
        t={t}
        initialInquiryType={resolvedType}
        prefilledVehicle={resolvedVehicle}
        onBackHome={() => navigateToRoute('home')}
      />
    </main>
  );
}
