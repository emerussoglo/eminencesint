'use client';

import { FormEvent, useEffect, useState } from 'react';
import { ArrowLeft, CheckCircle2, Clock } from 'lucide-react';
import { companyConfig, InquiryType, SupportedLang } from '../config/company';
import { TranslationDictionary } from '../i18n/translations';
import { BreadcrumbBar } from './BreadcrumbBar';

interface ContactPageProps {
  lang: SupportedLang;
  t: TranslationDictionary;
  initialInquiryType: InquiryType;
  prefilledVehicle: string;
  onBackHome: () => void;
}

const INQUIRY_TYPES: InquiryType[] = [
  'quote',
  'import',
  'rental',
  'parts',
  'workshop',
  'fleet',
  'info',
];

export function ContactPage({
  lang,
  t,
  initialInquiryType,
  prefilledVehicle,
  onBackHome,
}: ContactPageProps) {
  const [requestType, setRequestType] =
    useState<InquiryType>(initialInquiryType);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [vehicle, setVehicle] = useState(prefilledVehicle);
  const [destination, setDestination] = useState('');
  const [budget, setBudget] = useState('');
  const [rentalDates, setRentalDates] = useState('');
  const [partRef, setPartRef] = useState('');
  const [workshopService, setWorkshopService] = useState(
    t.contact.serviceTypes[0] || ''
  );
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(false);
  const [submittedSubject, setSubmittedSubject] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  useEffect(() => {
    setRequestType(initialInquiryType);
  }, [initialInquiryType]);

  useEffect(() => {
    if (prefilledVehicle) {
      setVehicle(prefilledVehicle);
      setSubmittedSubject(null);
    }
  }, [prefilledVehicle]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !consent) return;
    const typeLabel = t.contact.types[requestType];
    const extra =
      requestType === 'parts' && partRef.trim()
        ? partRef.trim()
        : requestType === 'workshop'
          ? workshopService
          : vehicle.trim();
    const summary = extra ? `${typeLabel} · ${extra}` : typeLabel;
    setSubmittedSubject(summary);
    setName('');
    setEmail('');
    setPhone('');
    setDestination('');
    setBudget('');
    setRentalDates('');
    setPartRef('');
    setMessage('');
    setConsent(false);
  };

  const contactRows = [
    {
      label: t.contact.addressLabel,
      value: companyConfig.contact.address,
      href: null as string | null,
    },
    {
      label: t.contact.phoneLabel,
      value: companyConfig.contact.phone,
      href: companyConfig.contact.phone
        ? `tel:${companyConfig.contact.phone.replace(/\s+/g, '')}`
        : null,
    },
    {
      label: t.contact.whatsappLabel,
      value: companyConfig.contact.whatsapp,
      href: companyConfig.contact.whatsapp
        ? `https://wa.me/${companyConfig.contact.whatsapp.replace(/\D/g, '')}`
        : null,
    },
    {
      label: t.contact.emailLabel,
      value: companyConfig.contact.email,
      href: companyConfig.contact.email
        ? `mailto:${companyConfig.contact.email}`
        : null,
    },
    {
      label: t.contact.hoursLabel,
      value: companyConfig.contact.hours[lang],
      href: null as string | null,
    },
  ];

  return (
    <section className="contact-section">
      <div className="container contact-container">
        <BreadcrumbBar
          homeLabel={t.breadcrumb.home}
          currentLabel={t.nav.contact}
          onBackHome={onBackHome}
          breadcrumbAriaLabel={t.nav.contact}
        />

        <button
          type="button"
          onClick={onBackHome}
          className="contact-back-btn"
        >
          <ArrowLeft className="icon-sm" aria-hidden="true" />
          <span>{t.contact.backHome}</span>
        </button>

        <div className="contact-grid">
          <div className="contact-col-info">
            <p className="section-kicker section-kicker--accent">
              {t.contact.kicker}
            </p>
            <h1 className="contact-title">{t.contact.title}</h1>
            <p className="contact-subtitle">{t.contact.subtitle}</p>

            <div className="info-pill-badge contact-sla-badge">
              <Clock className="icon-sm" aria-hidden="true" />
              <span>{t.contact.responseBadge}</span>
            </div>

            <div className="contact-card">
              <h2 className="contact-card__title">{t.contact.coordsTitle}</h2>
              <dl className="contact-rows">
                {contactRows.map((row) => (
                  <div key={row.label} className="contact-row">
                    <dt className="contact-row__label">{row.label}</dt>
                    <dd className="contact-row__value">
                      {row.value ? (
                        row.href ? (
                          <a href={row.href} className="contact-row__link">
                            {row.value}
                          </a>
                        ) : (
                          row.value
                        )
                      ) : (
                        <span className="contact-row__placeholder">
                          {t.contact.unconfirmedPlaceholder}
                        </span>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="contact-col-form">
            <div className="contact-card contact-card--form">
              {submittedSubject ? (
                <div className="contact-success">
                  <CheckCircle2
                    className="contact-success__icon"
                    aria-hidden="true"
                  />
                  <h2 className="contact-success__title">
                    {t.contact.successTitle}
                  </h2>
                  <p className="contact-success__body">
                    {t.contact.successBody}
                  </p>
                  <p className="contact-success__subject">{submittedSubject}</p>
                  <p className="contact-success__note">
                    {t.contact.successNote}
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmittedSubject(null)}
                    className="catalog-btn-dark"
                  >
                    {t.contact.newRequestBtn}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="contact-form__types-wrap">
                    <h2 className="contact-form__title">
                      {t.contact.formTitle}
                    </h2>
                    <div
                      className="contact-form__types"
                      role="group"
                      aria-label={t.contact.requestTypeLabel}
                    >
                      {INQUIRY_TYPES.map((typeKey) => {
                        const active = requestType === typeKey;
                        return (
                          <button
                            key={typeKey}
                            type="button"
                            onClick={() => setRequestType(typeKey)}
                            className={`contact-type-pill${
                              active ? ' is-active' : ''
                            }`}
                          >
                            {t.contact.types[typeKey]}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="contact-form__row-2">
                    <div>
                      <label htmlFor="contact-name" className="form-label">
                        {t.contact.nameLabel} *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={t.contact.namePlaceholder}
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="form-label">
                        {t.contact.emailFieldLabel} *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={t.contact.emailPlaceholder}
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="contact-form__row-2">
                    <div>
                      <label htmlFor="contact-phone" className="form-label">
                        {t.contact.phoneFieldLabel}
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder={t.contact.phonePlaceholder}
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-vehicle" className="form-label">
                        {t.contact.vehicleLabel}
                      </label>
                      <input
                        id="contact-vehicle"
                        type="text"
                        value={vehicle}
                        onChange={(e) => setVehicle(e.target.value)}
                        placeholder={t.contact.vehiclePlaceholder}
                        className="form-input"
                      />
                    </div>
                  </div>

                  {requestType === 'import' && (
                    <div className="contact-form__row-2">
                      <div>
                        <label
                          htmlFor="contact-destination"
                          className="form-label"
                        >
                          {t.contact.destinationLabel}
                        </label>
                        <input
                          id="contact-destination"
                          type="text"
                          value={destination}
                          onChange={(e) => setDestination(e.target.value)}
                          placeholder={t.contact.destinationPlaceholder}
                          className="form-input"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-budget" className="form-label">
                          {t.contact.budgetLabel}
                        </label>
                        <input
                          id="contact-budget"
                          type="text"
                          value={budget}
                          onChange={(e) => setBudget(e.target.value)}
                          placeholder={t.contact.budgetPlaceholder}
                          className="form-input"
                        />
                      </div>
                    </div>
                  )}

                  {requestType === 'rental' && (
                    <div>
                      <label htmlFor="contact-dates" className="form-label">
                        {t.contact.datesLabel}
                      </label>
                      <input
                        id="contact-dates"
                        type="text"
                        value={rentalDates}
                        onChange={(e) => setRentalDates(e.target.value)}
                        placeholder={t.contact.datesPlaceholder}
                        className="form-input"
                      />
                    </div>
                  )}

                  {requestType === 'parts' && (
                    <div>
                      <label htmlFor="contact-part-ref" className="form-label">
                        {t.contact.partRefLabel}
                      </label>
                      <input
                        id="contact-part-ref"
                        type="text"
                        value={partRef}
                        onChange={(e) => setPartRef(e.target.value)}
                        placeholder={t.contact.partRefPlaceholder}
                        className="form-input"
                      />
                    </div>
                  )}

                  {requestType === 'workshop' && (
                    <div>
                      <label
                        htmlFor="contact-workshop-srv"
                        className="form-label"
                      >
                        {t.contact.serviceTypeLabel}
                      </label>
                      <select
                        id="contact-workshop-srv"
                        value={workshopService}
                        onChange={(e) => setWorkshopService(e.target.value)}
                        className="form-input"
                      >
                        {t.contact.serviceTypes.map((srv) => (
                          <option key={srv} value={srv}>
                            {srv}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  <div>
                    <label htmlFor="contact-message" className="form-label">
                      {t.contact.messageLabel}
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={t.contact.messagePlaceholder}
                      className="form-input"
                    />
                  </div>

                  <label className="form-consent">
                    <input
                      type="checkbox"
                      required
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="form-consent__checkbox"
                    />
                    <span>{t.contact.consentText}</span>
                  </label>

                  <button type="submit" className="form-submit">
                    {t.contact.submitBtn}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
