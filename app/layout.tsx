import type { Metadata } from 'next';
import { DM_Sans, JetBrains_Mono, Plus_Jakarta_Sans } from 'next/font/google';
import { SiteProvider } from '@/components/SiteProvider';
import './styles/layout.css';
import './styles/style.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title:
    'Éminences Internationales — Vente, Import-Export & Services Véhicules Chinois',
  description:
    "Éminences Internationales : spécialiste des véhicules automobiles chinois neufs et d'occasion, import-export depuis la Chine, location, pièces d'origine et atelier dédié.",
  openGraph: {
    title:
      'Éminences Internationales — Spécialiste Véhicules Automobiles Chinois',
    description:
      'Catalogue de véhicules chinois, import-export, location, pièces détachées, atelier dédié et demandes de devis.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
  icons: {
    icon: '/assets/aistudio/50a15982-6d13-443b-a6ec-bc6573cdf2ca_9ce43ed4.jpeg',
    apple: '/assets/aistudio/50a15982-6d13-443b-a6ec-bc6573cdf2ca_9ce43ed4.jpeg',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AutoDealer',
  name: 'Éminences Internationales',
  description:
    "Plateforme automobile spécialisée exclusivement dans les véhicules automobiles chinois : vente neuve et d'occasion, import-export depuis la Chine, location, pièces détachées et atelier spécialisé.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${plusJakartaSans.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SiteProvider>{children}</SiteProvider>
      </body>
    </html>
  );
}
