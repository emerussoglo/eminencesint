'use client';

import { AboutSection } from '@/components/AboutSection';
import { BrandsScopeSection } from '@/components/BrandsScopeSection';
import { BreadcrumbBar } from '@/components/BreadcrumbBar';
import { FaqSection } from '@/components/FaqSection';
import { useSite } from '@/components/SiteProvider';
import { ValuesSection } from '@/components/ValuesSection';

export function AboutView() {
  const { lang, t, navigateToRoute } = useSite();

  return (
    <main className="page-offset">
      <div className="subpage-breadcrumb-strip">
        <div className="container">
          <BreadcrumbBar
            homeLabel={t.breadcrumb.home}
            currentLabel={t.nav.about}
            onBackHome={() => navigateToRoute('home')}
            breadcrumbAriaLabel={t.nav.about}
          />
        </div>
      </div>
      <AboutSection lang={lang} t={t} />
      <ValuesSection
        lang={lang}
        t={t}
        onAboutClick={() => navigateToRoute('contact', 'quote')}
      />
      <BrandsScopeSection t={t} />
      <FaqSection lang={lang} t={t} />
    </main>
  );
}
