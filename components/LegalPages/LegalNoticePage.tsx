'use client';

import { SupportedLang } from '@/config/company';
import { TranslationDictionary } from '@/i18n/translations';
import { BreadcrumbBar } from '../BreadcrumbBar';
import { companyConfig } from '@/config/company';

interface LegalNoticePageProps {
  lang: SupportedLang;
  t: TranslationDictionary;
  onBackHome: () => void;
}

export function LegalNoticePage({ lang, t, onBackHome }: LegalNoticePageProps) {
  const legal = t.legal.legalNotice;

  return (
    <section className="legal-page-section">
      <div className="container legal-container">
        <BreadcrumbBar
          homeLabel={t.breadcrumb.home}
          currentLabel={legal.title}
          onBackHome={onBackHome}
          breadcrumbAriaLabel={legal.title}
        />

        <div className="legal-page__content">
          <header className="legal-page__header">
            <h1 className="legal-page__title">{legal.title}</h1>
            <p className="legal-page__updated">
              {lang === 'fr' ? 'Dernière mise à jour : ' : 'Last updated: '}
              {new Date().toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'en-US')}
            </p>
          </header>

          <div className="legal-page__body">
            <section className="legal-page__section">
              <h2 className="legal-page__section-title">{legal.publisher}</h2>
              <div className="legal-page__section-text">
                <p>{legal.publisherBody}</p>
                <ul className="legal-page__details">
                  <li>
                    <strong>{lang === 'fr' ? 'Raison sociale :' : 'Company name:'}</strong> {companyConfig.name}
                  </li>
                  <li>
                    <strong>{lang === 'fr' ? 'Siège social :' : 'Registered office:'}</strong> {companyConfig.contact.address}, {companyConfig.contact.cityCountry}
                  </li>
                  <li>
                    <strong>{lang === 'fr' ? 'Téléphone :' : 'Phone:'}</strong>{' '}
                    <a href={`tel:${companyConfig.contact.phone?.replace(/\s+/g, '')}`}>{companyConfig.contact.phone}</a>
                  </li>
                  <li>
                    <strong>WhatsApp :</strong>{' '}
                    <a href={`https://wa.me/${companyConfig.contact.whatsapp?.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer">
                      {companyConfig.contact.whatsapp}
                    </a>
                  </li>
                  <li>
                    <strong>{lang === 'fr' ? 'E-mail :' : 'Email:'}</strong>{' '}
                    <a href={`mailto:${companyConfig.contact.email}`}>{companyConfig.contact.email}</a>
                  </li>
                  <li>
                    <strong>{lang === 'fr' ? 'Forme juridique, capital social, RCCM/IFU :' : 'Legal form, share capital, registration:'}</strong>
                    <span className="legal-page__placeholder">[À renseigner / To be completed]</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="legal-page__section">
              <h2 className="legal-page__section-title">{legal.directorHosting}</h2>
              <div className="legal-page__section-text">
                <p>{legal.directorHostingBody}</p>
                <ul className="legal-page__details">
                  <li>
                    <strong>{lang === 'fr' ? 'Directeur de la publication :' : 'Publication director:'}</strong>
                    <span className="legal-page__placeholder">[À renseigner / To be completed]</span>
                  </li>
                  <li>
                    <strong>{lang === 'fr' ? 'Hébergeur :' : 'Hosting provider:'}</strong>
                    <span className="legal-page__placeholder">[À renseigner / To be completed]</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="legal-page__section">
              <h2 className="legal-page__section-title">
                {lang === 'fr' ? 'Propriété intellectuelle' : 'Intellectual Property'}
              </h2>
              <div className="legal-page__section-text">
                <p>
                  {lang === 'fr'
                    ? 'L\'ensemble du contenu de ce site (textes, images, logos, marques, structure, code) est la propriété exclusive d\'Éminences Internationales ou fait l\'objet d\'autorisations d\'utilisation. Toute reproduction, représentation, modification ou exploitation non autorisée est interdite.'
                    : 'All content on this website (texts, images, logos, trademarks, structure, code) is the exclusive property of Éminences Internationales or used with authorization. Any unauthorized reproduction, representation, modification, or exploitation is prohibited.'
                  }
                </p>
              </div>
            </section>

            <section className="legal-page__section">
              <h2 className="legal-page__section-title">
                {lang === 'fr' ? 'Données personnelles' : 'Personal Data'}
              </h2>
              <div className="legal-page__section-text">
                <p>
                  {lang === 'fr'
                    ? 'Conformément à la réglementation applicable, vous disposez de droits sur vos données personnelles. Consultez notre '
                    : 'In accordance with applicable regulations, you have rights over your personal data. See our '
                  }
                  <a href="/politique-de-confidentialite">
                    {lang === 'fr' ? 'Politique de confidentialité' : 'Privacy Policy'}
                  </a>
                  {lang === 'fr' ? ' pour plus de détails.' : ' for details.'}
                </p>
              </div>
            </section>

            <section className="legal-page__section">
              <h2 className="legal-page__section-title">
                {lang === 'fr' ? 'Cookies' : 'Cookies'}
              </h2>
              <div className="legal-page__section-text">
                <p>
                  {lang === 'fr'
                    ? 'Ce site utilise des cookies strictement nécessaires et, avec votre consentement, des cookies de préférences et d\'audience. Gérez vos préférences via le lien « Gérer les cookies » dans le pied de page.'
                    : 'This site uses strictly necessary cookies and, with your consent, preference and audience cookies. Manage preferences via the "Manage cookies" link in the footer.'
                  }
                </p>
              </div>
            </section>

            <section className="legal-page__section">
              <h2 className="legal-page__section-title">
                {lang === 'fr' ? 'Limitation de responsabilité' : 'Limitation of Liability'}
              </h2>
              <div className="legal-page__section-text">
                <p>
                  {lang === 'fr'
                    ? 'Les informations présentées sur ce site sont données à titre indicatif et peuvent contenir des inexactitudes techniques ou typographiques. Éminences Internationales ne saurait être tenue responsable des dommages directs ou indirects résultant de l\'accès au site ou de l\'utilisation de son contenu. Seuls les devis et contrats émis par Éminences Internationales font foi.'
                    : 'Information on this website is provided for indicative purposes and may contain technical or typographical inaccuracies. Éminences Internationales shall not be liable for direct or indirect damages arising from access to or use of this website. Only formal quotations and contracts issued by Éminences Internationales are binding.'
                  }
                </p>
              </div>
            </section>

            <section className="legal-page__section">
              <h2 className="legal-page__section-title">
                {lang === 'fr' ? 'Droit applicable et juridiction' : 'Governing Law & Jurisdiction'}
              </h2>
              <div className="legal-page__section-text">
                <p>
                  {lang === 'fr'
                    ? 'Les présentes mentions légales sont régies par le droit béninois. En cas de litige, les tribunaux compétents seront ceux du ressort du siège social d\'Éminences Internationales (Calavi, Bénin).'
                    : 'These legal notices are governed by Beninese law. In case of dispute, competent courts shall be those of the jurisdiction of Éminences Internationales\' registered office (Calavi, Benin).'
                  }
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}