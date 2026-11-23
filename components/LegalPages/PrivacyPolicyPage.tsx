'use client';

import { SupportedLang } from '@/config/company';
import { TranslationDictionary } from '@/i18n/translations';
import { BreadcrumbBar } from '../BreadcrumbBar';
import { companyConfig } from '@/config/company';

interface PrivacyPolicyPageProps {
  lang: SupportedLang;
  t: TranslationDictionary;
  onBackHome: () => void;
}

export function PrivacyPolicyPage({ lang, t, onBackHome }: PrivacyPolicyPageProps) {
  const privacy = t.legal.privacy;

  return (
    <section className="legal-page-section">
      <div className="container legal-container">
        <BreadcrumbBar
          homeLabel={t.breadcrumb.home}
          currentLabel={privacy.title}
          onBackHome={onBackHome}
          breadcrumbAriaLabel={privacy.title}
        />

        <div className="legal-page__content">
          <header className="legal-page__header">
            <h1 className="legal-page__title">{privacy.title}</h1>
            <p className="legal-page__updated">
              {lang === 'fr' ? 'Dernière mise à jour : ' : 'Last updated: '}
              {new Date().toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'en-US')}
            </p>
          </header>

          <div className="legal-page__body">
            <section className="legal-page__section">
              <h2 className="legal-page__section-title">{privacy.dataCollection}</h2>
              <div className="legal-page__section-text">
                <p>{privacy.dataCollectionBody}</p>
                <h3>{lang === 'fr' ? 'Types de données collectées' : 'Types of Data Collected'}</h3>
                <ul className="legal-page__details">
                  <li>{lang === 'fr' ? 'Nom et prénom' : 'Full name'}</li>
                  <li>{lang === 'fr' ? 'Adresse e-mail' : 'Email address'}</li>
                  <li>{lang === 'fr' ? 'Numéro de téléphone / WhatsApp' : 'Phone / WhatsApp number'}</li>
                  <li>{lang === 'fr' ? 'Modèle ou marque de véhicule concernée' : 'Vehicle model or brand'}</li>
                  <li>{lang === 'fr' ? 'Pays / Ville de destination (Import-Export)' : 'Destination country/city (Import-Export)'}</li>
                  <li>{lang === 'fr' ? 'Budget et délai souhaité' : 'Budget and desired timeline'}</li>
                  <li>{lang === 'fr' ? 'Dates et durée de location' : 'Rental dates and duration'}</li>
                  <li>{lang === 'fr' ? 'Référence de pièce recherchée' : 'Requested part reference'}</li>
                  <li>{lang === 'fr' ? 'Type de prestation atelier' : 'Workshop service type'}</li>
                  <li>{lang === 'fr' ? 'Message libre complémentaire' : 'Additional message'}</li>
                </ul>
                <h3>{lang === 'fr' ? 'Finalités du traitement' : 'Processing Purposes'}</h3>
                <ul className="legal-page__details">
                  <li>{lang === 'fr' ? 'Réponse à votre demande de devis ou d\'information' : 'Response to your quote or information request'}</li>
                  <li>{lang === 'fr' ? 'Étude de faisabilité Import-Export' : 'Import-Export feasibility study'}</li>
                  <li>{lang === 'fr' ? 'Préparation d\'un contrat de location' : 'Rental contract preparation'}</li>
                  <li>{lang === 'fr' ? 'Commande de pièces détachées' : 'Spare parts ordering'}</li>
                  <li>{lang === 'fr' ? 'Planification d\'un rendez-vous atelier' : 'Workshop appointment scheduling'}</li>
                </ul>
                <h3>{lang === 'fr' ? 'Base légale' : 'Legal Basis'}</h3>
                <p>
                  {lang === 'fr'
                    ? 'Traitement nécessaire à l\'exécution de mesures précontractuelles (demande de devis) ou à l\'exécution d\'un contrat (location, commande), et à des fins d\'intérêt légitime (réponse aux demandes d\'information).'
                    : 'Processing necessary for pre-contractual measures (quote requests) or contract performance (rental, orders), and for legitimate interests (responding to inquiries).'
                  }
                </p>
                <h3>{lang === 'fr' ? 'Destinataires des données' : 'Data Recipients'}</h3>
                <p>
                  {lang === 'fr'
                    ? 'Éminences Internationales (équipes commerciales, techniques, atelier). Aucune donnée n\'est vendue ou cédée à des tiers commerciaux. Les données peuvent être transmises à des sous-traitants techniques (hébergement, envoi d\'e-mails) sous contrat de confidentialité.'
                    : 'Éminences Internationales (sales, technical, workshop teams). No data is sold or shared with commercial third parties. Data may be shared with technical subcontractors (hosting, email) under confidentiality agreements.'
                  }
                </p>
                <h3>{lang === 'fr' ? 'Durée de conservation' : 'Retention Period'}</h3>
                <p>
                  {lang === 'fr'
                    ? 'Données de contact et contenu des demandes : conservées pendant la durée nécessaire au traitement de votre demande, puis archivées selon les délais légaux applicables au Bénin (comptabilité, contrats : 10 ans).'
                    : 'Contact data and request content: retained for the time necessary to process your request, then archived per applicable legal periods in Benin (accounting, contracts: 10 years).'
                  }
                </p>
              </div>
            </section>

            <section className="legal-page__section">
              <h2 className="legal-page__section-title">{privacy.cookies}</h2>
              <div className="legal-page__section-text">
                <p>{privacy.cookiesBody}</p>
                <h3>{lang === 'fr' ? 'Types de cookies utilisés' : 'Cookie Types Used'}</h3>
                <ul className="legal-page__details">
                  <li>
                    <strong>{lang === 'fr' ? 'Strictement nécessaires :' : 'Strictly necessary:'}</strong>
                    {lang === 'fr' ? ' Sauvegarde de la langue, consentement cookies, session formulaire.' : ' Language preference, cookie consent, form session.'}
                  </li>
                  <li>
                    <strong>{lang === 'fr' ? 'Préférences (optionnel) :' : 'Preferences (optional):'}</strong>
                    {lang === 'fr' ? ' Mémorisation des filtres catalogue, affichage.' : ' Catalog filters, display preferences.'}
                  </li>
                  <li>
                    <strong>{lang === 'fr' ? 'Mesure d\'audience (optionnel) :' : 'Analytics (optional):'}</strong>
                    {lang === 'fr' ? ' Statistiques agrégées de fréquentation (si configuré).' : ' Aggregated traffic statistics (if configured).'}
                  </li>
                </ul>
                <h3>{lang === 'fr' ? 'Gestion du consentement' : 'Consent Management'}</h3>
                <p>
                  {lang === 'fr'
                    ? 'Vous pouvez accepter, refuser ou personnaliser vos choix via le bandeau cookie affiché à la première visite, ou à tout moment via le lien « Gérer les cookies » dans le pied de page.'
                    : 'You can accept, refuse, or customize choices via the cookie banner on first visit, or anytime via the "Manage cookies" link in the footer.'
                  }
                </p>
              </div>
            </section>

            <section className="legal-page__section">
              <h2 className="legal-page__section-title">{privacy.rights}</h2>
              <div className="legal-page__section-text">
                <p>{privacy.rightsBody}</p>
                <h3>{lang === 'fr' ? 'Droits dont vous disposez' : 'Your Rights'}</h3>
                <ul className="legal-page__details">
                  <li>{lang === 'fr' ? 'Droit d\'accès : obtenir la confirmation et une copie de vos données.' : 'Right of access: obtain confirmation and a copy of your data.'}</li>
                  <li>{lang === 'fr' ? 'Droit de rectification : corriger des données inexactes ou incomplètes.' : 'Right to rectification: correct inaccurate or incomplete data.'}</li>
                  <li>{lang === 'fr' ? 'Droit à l\'effacement : demander la suppression de vos données (sous réserve d\'obligations légales).' : 'Right to erasure: request deletion of your data (subject to legal obligations).'}</li>
                  <li>{lang === 'fr' ? 'Droit d\'opposition : vous opposer au traitement pour motifs légitimes.' : 'Right to object: object to processing on legitimate grounds.'}</li>
                  <li>{lang === 'fr' ? 'Droit à la limitation : geler temporairement l\'utilisation de vos données.' : 'Right to restriction: temporarily freeze use of your data.'}</li>
                  <li>{lang === 'fr' ? 'Droit à la portabilité : recevoir vos données dans un format structuré.' : 'Right to portability: receive your data in a structured format.'}</li>
                </ul>
              </div>
            </section>

            <section className="legal-page__section">
              <h2 className="legal-page__section-title">{privacy.contact}</h2>
              <div className="legal-page__section-text">
                <p>{privacy.contactBody}</p>
                <p>
                  <strong>{lang === 'fr' ? 'E-mail :' : 'Email:'}</strong>{' '}
                  <a href={`mailto:${companyConfig.contact.email}`}>{companyConfig.contact.email}</a>
                </p>
                <p>
                  <strong>{lang === 'fr' ? 'Adresse postale :' : 'Postal address:'}</strong>{' '}
                  {companyConfig.contact.address}, {companyConfig.contact.cityCountry}
                </p>
              </div>
            </section>

            <section className="legal-page__section">
              <h2 className="legal-page__section-title">
                {lang === 'fr' ? 'Modifications de la politique' : 'Policy Updates'}
              </h2>
              <div className="legal-page__section-text">
                <p>
                  {lang === 'fr'
                    ? 'Éminences Internationales se réserve le droit de modifier la présente politique pour refléter les évolutions légales, réglementaires ou organisationnelles. La version mise à jour sera publiée sur cette page avec sa date de révision.'
                    : 'Éminences Internationales reserves the right to update this policy to reflect legal, regulatory, or organizational changes. The updated version will be published on this page with its revision date.'
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