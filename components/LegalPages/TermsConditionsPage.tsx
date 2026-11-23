'use client';

import { SupportedLang } from '@/config/company';
import { TranslationDictionary } from '@/i18n/translations';
import { BreadcrumbBar } from '../BreadcrumbBar';
import { RevealOnScroll, RevealGroup } from '../RevealOnScroll';

interface TermsConditionsPageProps {
  lang: SupportedLang;
  t: TranslationDictionary;
  onBackHome: () => void;
}

export function TermsConditionsPage({ lang, t, onBackHome }: TermsConditionsPageProps) {
  const terms = t.legal.terms;

  return (
    <section className="legal-page-section">
      <div className="container legal-container">
        <RevealOnScroll>
          <BreadcrumbBar
            homeLabel={t.breadcrumb.home}
            currentLabel={terms.title}
            onBackHome={onBackHome}
            breadcrumbAriaLabel={terms.title}
          />
        </RevealOnScroll>

        <RevealOnScroll delay={100}>
          <div className="legal-page__content">
            <header className="legal-page__header">
              <h1 className="legal-page__title">{terms.title}</h1>
              <p className="legal-page__updated">
                {lang === 'fr' ? 'Dernière mise à jour : ' : 'Last updated: '}
                {new Date().toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'en-US')}
              </p>
              <div className="legal-page__disclaimer">
                <p>
                  {lang === 'fr'
                    ? 'Ce document constitue un modèle de conditions générales à valider par Éminences Internationales avant mise en production. Les clauses marquées [À valider] nécessitent une confirmation juridique.'
                    : 'This document is a draft Terms & Conditions template to be validated by Éminences Internationales before launch. Clauses marked [To be validated] require legal confirmation.'
                  }
                </p>
              </div>
            </header>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={200}>
          <div className="legal-page__body">
            <RevealGroup staggerDelay={100}>
              <section className="legal-page__section">
                <RevealOnScroll>
                  <h2 className="legal-page__section-title">{terms.scope}</h2>
                  <div className="legal-page__section-text">
                    <p>{terms.scopeBody}</p>
                  </div>
                </RevealOnScroll>
              </section>

              <section className="legal-page__section">
                <RevealOnScroll>
                  <h2 className="legal-page__section-title">{terms.salesImport}</h2>
                  <div className="legal-page__section-text">
                    <p>{terms.salesImportBody}</p>
                    <h3>{lang === 'fr' ? 'Champ d\'application' : 'Scope'}</h3>
                    <p>
                      {lang === 'fr'
                        ? 'Vente de véhicules automobiles chinois neufs (commande constructeur/importateur) et d\'occasion (contrôle technique préalable).'
                        : 'Sales of new Chinese vehicles (manufacturer/importer order) and pre-owned vehicles (pre-sale technical inspection).'
                      }
                    </p>
                    <h3>{lang === 'fr' ? 'Commande et validation' : 'Order and Validation'}</h3>
                    <p>
                      {lang === 'fr'
                        ? 'Toute commande de véhicule fait l\'objet d\'un bon de commande ou devis signé par le client. L\'acompte (montant [À valider]%) valide la commande.'
                        : 'Any vehicle order is subject to a signed order form or quotation. The deposit (amount [To be validated]%) confirms the order.'
                      }
                    </p>
                    <h3>{lang === 'fr' ? 'Livraison' : 'Delivery'}</h3>
                    <p>
                      {lang === 'fr'
                        ? 'La livraison intervient après paiement complet selon les modalités convenues. Les délais sont indicatifs et confirmés sur le bon de commande.'
                        : 'Delivery occurs after full payment per agreed terms. Timelines are indicative and confirmed on the order form.'
                      }
                    </p>
                    <h3>{lang === 'fr' ? 'Transfert de propriété et des risques' : 'Transfer of Ownership & Risk'}</h3>
                    <p>
                      {lang === 'fr'
                        ? 'Le transfert de propriété intervient au paiement intégral. Les risques sont transférés à la remise physique du véhicule.'
                        : 'Ownership transfers upon full payment. Risk transfers upon physical vehicle handover.'
                      }
                    </p>
                  </div>
                </RevealOnScroll>
              </section>

              <section className="legal-page__section">
                <RevealOnScroll>
                  <h2 className="legal-page__section-title">{terms.customOrders}</h2>
                  <div className="legal-page__section-text">
                    <p>{terms.customOrdersBody}</p>
                    <h3>{lang === 'fr' ? 'Processus en 4 étapes' : '4-Step Process'}</h3>
                    <ol className="legal-page__details">
                      <li>{lang === 'fr' ? 'Sélection du modèle et établissement du devis' : 'Model selection and quotation'}</li>
                      <li>{lang === 'fr' ? 'Validation du devis, versement de l\'acompte, commande en Chine' : 'Quotation validation, deposit, China sourcing'}</li>
                      <li>{lang === 'fr' ? 'Inspection pré-embarquement, expédition, suivi transport' : 'Pre-shipment inspection, shipping, tracking'}</li>
                      <li>{lang === 'fr' ? 'Dédouanement, livraison, remise des clés et documents' : 'Customs clearance, delivery, handover'}</li>
                    </ol>
                    <h3>{lang === 'fr' ? 'Obligations du client' : 'Client Obligations'}</h3>
                    <p>
                      {lang === 'fr'
                        ? 'Fournir les documents requis (pièce d\'identité, justificatif de domicile, procuration le cas échéant) dans les délais. Régler les échéances selon l\'échéancier du devis.'
                        : 'Provide required documents (ID, proof of address, power of attorney if applicable) on time. Pay installments per quotation schedule.'
                      }
                    </p>
                    <h3>{lang === 'fr' ? 'Délais et aléas' : 'Timelines & Contingencies'}</h3>
                    <p>
                      {lang === 'fr'
                        ? 'Les délais d\'approvisionnement, transport et douane sont estimés. Éminences Internationales n\'est pas responsable des retards imputables aux transporteurs, administrations ou force majeure. Le client est informé à chaque étape.'
                        : 'Sourcing, shipping, and customs timelines are estimates. Éminences Internationales is not liable for carrier, customs, or force majeure delays. Client is updated at each stage.'
                      }
                    </p>
                  </div>
                </RevealOnScroll>
              </section>

              <section className="legal-page__section">
                <RevealOnScroll>
                  <h2 className="legal-page__section-title">{terms.rental}</h2>
                  <div className="legal-page__section-text">
                    <p>{terms.rentalBody}</p>
                    <h3>{lang === 'fr' ? 'Catégories de véhicules' : 'Vehicle Categories'}</h3>
                    <p>
                      {lang === 'fr'
                        ? 'Berlines électriques/hybrides, SUV 5/7 places, pick-ups 4x4 chinois.'
                        : 'Electric/hybrid sedans, 5/7-seat SUVs, Chinese 4x4 pick-ups.'
                      }
                    </p>
                    <h3>{lang === 'fr' ? 'Durée' : 'Duration'}</h3>
                    <p>
                      {lang === 'fr'
                        ? 'Courte durée (journée, semaine) ou longue durée (mois). Renouvellement tacite sauf préavis [À valider] jours.'
                        : 'Short-term (daily, weekly) or long-term (monthly). Tacit renewal unless [To be validated] days\' notice.'
                      }
                    </p>
                    <h3>{lang === 'fr' ? 'Conditions de location' : 'Rental Conditions'}</h3>
                    <ul className="legal-page__details">
                      <li>{lang === 'fr' ? 'Âge minimum : [À valider] ans' : 'Minimum age: [To be validated] years'}</li>
                      <li>{lang === 'fr' ? 'Permis de conduire valide depuis [À valider] an(s)' : 'Valid driver\'s license for [To be validated] year(s)'}</li>
                      <li>{lang === 'fr' ? 'Caution : selon catégorie véhicule ([À valider])' : 'Deposit: per vehicle category ([To be validated])'}</li>
                      <li>{lang === 'fr' ? 'Assurance : incluse / optionnelle [À valider]' : 'Insurance: included / optional [To be validated]'}</li>
                      <li>{lang === 'fr' ? 'Kilométrage inclus : [À valider] km/jour' : 'Included mileage: [To be validated] km/day'}</li>
                    </ul>
                    <h3>{lang === 'fr' ? 'Responsabilités du locataire' : 'Renter Responsibilities'}</h3>
                    <p>
                      {lang === 'fr'
                        ? 'Entretien courant, respect du code de la route, déclaration de tout sinistre sous 24h, restitution en bon état (usure normale exceptée).'
                        : 'Routine maintenance, traffic law compliance, accident reporting within 24h, return in good condition (normal wear excepted).'
                      }
                    </p>
                  </div>
                </RevealOnScroll>
              </section>

              <section className="legal-page__section">
                <RevealOnScroll>
                  <h2 className="legal-page__section-title">{terms.parts}</h2>
                  <div className="legal-page__section-text">
                    <p>{terms.partsBody}</p>
                    <h3>{lang === 'fr' ? 'Commande de pièces' : 'Parts Ordering'}</h3>
                    <p>
                      {lang === 'fr'
                        ? 'Les pièces sont commandées sur demande auprès des fournisseurs constructeurs ou distributeurs agréés. La compatibilité est vérifiée sur la base des informations fournies par le client (VIN, modèle, année).'
                        : 'Parts are ordered on demand from manufacturer suppliers or authorized distributors. Compatibility is verified based on client-provided info (VIN, model, year).'
                      }
                    </p>
                    <h3>{lang === 'fr' ? 'Délais et livraison' : 'Lead Times & Delivery'}</h3>
                    <p>
                      {lang === 'fr'
                        ? 'Les délais fournisseurs sont communiqués à titre indicatif. La livraison s\'effectue à l\'adresse indiquée ou en retrait atelier. Les frais de port sont à la charge du client.'
                        : 'Supplier lead times are indicative. Delivery to specified address or workshop pickup. Shipping costs borne by client.'
                      }
                    </p>
                    <h3>{lang === 'fr' ? 'Retours et garantie' : 'Returns & Warranty'}</h3>
                    <p>
                      {lang === 'fr'
                        ? 'Retour possible sous [À valider] jours pour erreur de référence (emballage d\'origine intact). Garantie selon conditions fournisseur (généralement [À valider] mois).'
                        : 'Returns within [To be validated] days for reference error (original packaging intact). Warranty per supplier terms (typically [To be validated] months).'
                      }
                    </p>
                  </div>
                </RevealOnScroll>
              </section>

              <section className="legal-page__section">
                <RevealOnScroll>
                  <h2 className="legal-page__section-title">{terms.workshop}</h2>
                  <div className="legal-page__section-text">
                    <p>{terms.workshopBody}</p>
                    <h3>{lang === 'fr' ? 'Prestations couvertes' : 'Covered Services'}</h3>
                    <p>
                      {lang === 'fr'
                        ? 'Entretien périodique, réparation mécanique, diagnostic électrique/EV-hybride, carrosserie, peinture.'
                        : 'Routine maintenance, mechanical repair, electrical/EV-hybrid diagnostics, bodywork, paint.'
                      }
                    </p>
                    <h3>{lang === 'fr' ? 'Processus atelier (4 étapes)' : 'Workshop Process (4 Steps)'}</h3>
                    <ol className="legal-page__details">
                      <li>{lang === 'fr' ? 'Diagnostic et établissement du devis' : 'Diagnostics and quotation'}</li>
                      <li>{lang === 'fr' ? 'Validation du devis par le client' : 'Client quotation approval'}</li>
                      <li>{lang === 'fr' ? 'Intervention avec pièces conformes' : 'Service with compliant parts'}</li>
                      <li>{lang === 'fr' ? 'Contrôle qualité, essai, restitution' : 'Quality check, test drive, handover'}</li>
                    </ol>
                    <h3>{lang === 'fr' ? 'Garantie des prestations' : 'Service Warranty'}</h3>
                    <p>
                      {lang === 'fr'
                        ? 'Garantie [À valider] mois ou [À valider] km sur la main-d\'œuvre et pièces posées (premier arrivé). Exclusions : usure normale, négligence, intervention tierce.'
                        : 'Warranty [To be validated] months or [To be validated] km on labor and fitted parts (whichever first). Exclusions: normal wear, negligence, third-party intervention.'
                      }
                    </p>
                  </div>
                </RevealOnScroll>
              </section>

              <section className="legal-page__section">
                <RevealOnScroll>
                  <h2 className="legal-page__section-title">{terms.quoteProcess}</h2>
                  <div className="legal-page__section-text">
                    <p>{terms.quoteProcessBody}</p>
                    <h3>{lang === 'fr' ? 'Validité des devis' : 'Quotation Validity'}</h3>
                    <p>
                      {lang === 'fr'
                        ? 'Les devis sont valables [À valider] jours à compter de leur émission. Au-delà, une réactualisation peut être nécessaire.'
                        : 'Quotations valid for [To be validated] days from issue. Beyond that, a refresh may be required.'
                      }
                    </p>
                    <h3>{lang === 'fr' ? 'Acceptation' : 'Acceptance'}</h3>
                    <p>
                      {lang === 'fr'
                        ? 'L\'acceptation se fait par signature du devis, confirmation par e-mail, ou versement de l\'acompte. Toute acceptation engage le client.'
                        : 'Acceptance by signed quotation, email confirmation, or deposit payment. Any acceptance binds the client.'
                      }
                    </p>
                  </div>
                </RevealOnScroll>
              </section>

              <section className="legal-page__section">
                <RevealOnScroll>
                  <h2 className="legal-page__section-title">{terms.paymentDelivery}</h2>
                  <div className="legal-page__section-text">
                    <p>{terms.paymentDeliveryBody}</p>
                    <h3>{lang === 'fr' ? 'Moyens de paiement acceptés' : 'Accepted Payment Methods'}</h3>
                    <p>
                      {lang === 'fr'
                        ? 'Virement bancaire, espèces (dans la limite légale), carte bancaire, chèque [À valider]. Pour l\'import-export : acompte à la commande, solde avant expédition ou à la livraison selon accord.'
                        : 'Bank transfer, cash (within legal limits), card, check [To be validated]. Import-export: deposit at order, balance before shipment or at delivery per agreement.'
                      }
                    </p>
                    <h3>{lang === 'fr' ? 'Retard de paiement' : 'Late Payment'}</h3>
                    <p>
                      {lang === 'fr'
                        ? 'Pénalités de retard au taux légal majoré de [À valider]%, indemnité forfaitaire de recouvrement [À valider]. Suspension des prestations en cours.'
                        : 'Late payment penalties at legal rate plus [To be validated]%, fixed recovery fee [To be validated]. Ongoing services suspended.'
                      }
                    </p>
                  </div>
                </RevealOnScroll>
              </section>

              <section className="legal-page__section">
                <RevealOnScroll>
                  <h2 className="legal-page__section-title">{terms.warranty}</h2>
                  <div className="legal-page__section-text">
                    <p>{terms.warrantyBody}</p>
                    <h3>{lang === 'fr' ? 'Véhicules neufs' : 'New Vehicles'}</h3>
                    <p>
                      {lang === 'fr'
                        ? 'Garantie constructeur selon termes du fabricant chinois (généralement [À valider] ans / [À valider] km).'
                        : 'Manufacturer warranty per Chinese OEM terms (typically [To be validated] years / [To be validated] km).'
                      }
                    </p>
                    <h3>{lang === 'fr' ? 'Véhicules d\'occasion' : 'Pre-Owned Vehicles'}</h3>
                    <p>
                      {lang === 'fr'
                        ? 'Garantie légale de conformité ([À valider] mois). Garantie commerciale optionnelle [À valider].'
                        : 'Legal conformity warranty ([To be validated] months). Optional commercial warranty [To be validated].'
                      }
                    </p>
                    <h3>{lang === 'fr' ? 'Pièces et prestations atelier' : 'Parts & Workshop Services'}</h3>
                    <p>
                      {lang === 'fr'
                        ? 'Garantie fournisseur sur pièces ([À valider] mois). Garantie main-d\'œuvre atelier ([À valider] mois / [À valider] km).'
                        : 'Supplier warranty on parts ([To be validated] months). Workshop labor warranty ([To be validated] months / [To be validated] km).'
                      }
                    </p>
                  </div>
                </RevealOnScroll>
              </section>

              <section className="legal-page__section">
                <RevealOnScroll>
                  <h2 className="legal-page__section-title">{terms.claims}</h2>
                  <div className="legal-page__section-text">
                    <p>{terms.claimsBody}</p>
                    <h3>{lang === 'fr' ? 'Procédure' : 'Procedure'}</h3>
                    <ol className="legal-page__details">
                      <li>{lang === 'fr' ? 'Réclamation écrite (e-mail ou courrier) avec description et photos le cas échéant' : 'Written claim (email or mail) with description and photos if applicable'}</li>
                      <li>{lang === 'fr' ? 'Accusé de réception sous 48 h ouvrées' : 'Acknowledgment within 48 business hours'}</li>
                      <li>{lang === 'fr' ? 'Analyse et proposition de solution sous [À valider] jours' : 'Analysis and proposed solution within [To be validated] days'}</li>
                      <li>{lang === 'fr' ? 'Mise en œuvre de la solution validée par le client' : 'Implementation of client-approved solution'}</li>
                    </ol>
                  </div>
                </RevealOnScroll>
              </section>

              <section className="legal-page__section">
                <RevealOnScroll>
                  <h2 className="legal-page__section-title">{terms.liability}</h2>
                  <div className="legal-page__section-text">
                    <p>{terms.liabilityBody}</p>
                    <h3>{lang === 'fr' ? 'Exclusions de responsabilité' : 'Liability Exclusions'}</h3>
                    <ul className="legal-page__details">
                      <li>{lang === 'fr' ? 'Dommages indirects (perte d\'exploitation, préjudice moral, etc.)' : 'Indirect damages (lost profits, moral prejudice, etc.)'}</li>
                      <li>{lang === 'fr' ? 'Retards transporteurs, douanes, administration, force majeure' : 'Carrier, customs, administrative, force majeure delays'}</li>
                      <li>{lang === 'fr' ? 'Différences mineures fiche indicative vs configuration finale' : 'Minor differences between indicative sheet and final config'}</li>
                      <li>{lang === 'fr' ? 'Usage non conforme, modification non autorisée du véhicule' : 'Non-compliant use, unauthorized vehicle modification'}</li>
                    </ul>
                    <h3>{lang === 'fr' ? 'Plafond de responsabilité' : 'Liability Cap'}</h3>
                    <p>
                      {lang === 'fr'
                        ? 'La responsabilité totale d\'Éminences Internationales ne saurait excéder le montant total payé par le client pour la prestation concernée, sauf dispositions légales impératives contraires.'
                        : 'Éminences Internationales\' total liability shall not exceed the total amount paid by the client for the relevant service, except where mandatory law provides otherwise.'
                      }
                    </p>
                  </div>
                </RevealOnScroll>
              </section>

              <section className="legal-page__section">
                <RevealOnScroll>
                  <h2 className="legal-page__section-title">{terms.disputes}</h2>
                  <div className="legal-page__section-text">
                    <p>{terms.disputesBody}</p>
                    <h3>{lang === 'fr' ? 'Résolution amiable' : 'Amicable Resolution'}</h3>
                    <p>
                      {lang === 'fr'
                        ? 'Toute réclamation préalable adressée à eminencesinternationales@gmail.com. Tentative de médiation sous [À valider] jours.'
                        : 'Prior claim to eminencesinternationales@gmail.com. Mediation attempt within [To be validated] days.'
                      }
                    </p>
                    <h3>{lang === 'fr' ? 'Juridiction compétente' : 'Competent Jurisdiction'}</h3>
                    <p>
                      {lang === 'fr'
                        ? 'Tribunaux du ressort du siège social (Calavi, Bénin), sous réserve des règles de compétence impératives.'
                        : 'Courts of the registered office jurisdiction (Calavi, Benin), subject to mandatory jurisdiction rules.'
                      }
                    </p>
                    <h3>{lang === 'fr' ? 'Droit applicable' : 'Applicable Law'}</h3>
                    <p>
                      {lang === 'fr'
                        ? 'Droit béninois.'
                        : 'Beninese law.'
                      }
                    </p>
                  </div>
                </RevealOnScroll>
              </section>
            </RevealGroup>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}