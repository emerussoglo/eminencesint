'use client';

import { useEffect, useState } from 'react';
import { Cookie } from 'lucide-react';
import { TranslationDictionary } from '../i18n/translations';

interface CookiePreferences {
  necessary: true;
  analytics: boolean;
  preferences: boolean;
  updatedAt: string;
}

interface CookieConsentProps {
  t: TranslationDictionary;
  onOpenPrivacy: () => void;
}

const STORAGE_KEY = 'eminences_cookie_consent';

export function CookieConsent({ t, onOpenPrivacy }: CookieConsentProps) {
  const [open, setOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [preferences, setPreferences] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (!saved) {
        setOpen(true);
      } else {
        const parsed = JSON.parse(saved) as CookiePreferences;
        setAnalytics(Boolean(parsed.analytics));
        setPreferences(Boolean(parsed.preferences));
      }
    } catch {
      setOpen(true);
    }
  }, []);

  const persist = (nextAnalytics: boolean, nextPreferences: boolean) => {
    const payload: CookiePreferences = {
      necessary: true,
      analytics: nextAnalytics,
      preferences: nextPreferences,
      updatedAt: new Date().toISOString(),
    };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch {
      // ignore storage failure
    }
    setAnalytics(nextAnalytics);
    setPreferences(nextPreferences);
    setShowSettings(false);
    setOpen(false);
  };

  return (
    <>
      {!open && (
        <button
          type="button"
          onClick={() => {
            setShowSettings(false);
            setOpen(true);
          }}
          aria-label={t.cookies.manageLabel}
          title={t.cookies.manageLabel}
          className="cookie-trigger"
        >
          <Cookie className="icon-md" aria-hidden="true" />
        </button>
      )}

      {open && (
        <div
          className="modal-backdrop modal-backdrop--cookie"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-modal-title"
        >
          <div className="modal-card modal-card--cookie">
            <h2 id="cookie-modal-title" className="cookie-modal__title">
              {t.cookies.title}
            </h2>

            {!showSettings ? (
              <>
                <p className="cookie-modal__text">{t.cookies.bodyPrimary}</p>
                <p className="cookie-modal__text cookie-modal__text--last">
                  {t.cookies.bodySecondary}
                </p>

                <button
                  type="button"
                  onClick={onOpenPrivacy}
                  className="cookie-modal__policy-link"
                >
                  {t.cookies.moreInfo}
                </button>

                <div className="cookie-modal__actions">
                  <button
                    type="button"
                    onClick={() => persist(true, true)}
                    className="cookie-btn cookie-btn--primary"
                  >
                    {t.cookies.acceptClose}
                  </button>
                  <button
                    type="button"
                    onClick={() => persist(false, false)}
                    className="cookie-btn cookie-btn--primary"
                  >
                    {t.cookies.necessaryOnly}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowSettings(true)}
                    className="cookie-btn cookie-btn--outline"
                  >
                    {t.cookies.customize}
                  </button>
                </div>
              </>
            ) : (
              <div className="cookie-settings">
                <div className="cookie-toggle-card cookie-toggle-card--fixed">
                  <div>
                    <p className="cookie-toggle-card__title">
                      {t.cookies.necessaryTitle}
                    </p>
                    <p className="cookie-toggle-card__desc">
                      {t.cookies.necessaryDesc}
                    </p>
                  </div>
                  <span className="cookie-toggle-card__badge">
                    {t.cookies.alwaysActive}
                  </span>
                </div>

                <label className="cookie-toggle-card cookie-toggle-card--option">
                  <div>
                    <p className="cookie-toggle-card__title">
                      {t.cookies.analyticsTitle}
                    </p>
                    <p className="cookie-toggle-card__desc">
                      {t.cookies.analyticsDesc}
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={analytics}
                    onChange={(e) => setAnalytics(e.target.checked)}
                    className="cookie-toggle-card__checkbox"
                  />
                </label>

                <label className="cookie-toggle-card cookie-toggle-card--option">
                  <div>
                    <p className="cookie-toggle-card__title">
                      {t.cookies.prefsTitle}
                    </p>
                    <p className="cookie-toggle-card__desc">
                      {t.cookies.prefsDesc}
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={preferences}
                    onChange={(e) => setPreferences(e.target.checked)}
                    className="cookie-toggle-card__checkbox"
                  />
                </label>

                <div className="cookie-modal__actions cookie-modal__actions--spaced">
                  <button
                    type="button"
                    onClick={() => persist(analytics, preferences)}
                    className="cookie-btn cookie-btn--primary"
                  >
                    {t.cookies.savePrefs}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowSettings(false)}
                    className="cookie-btn cookie-btn--outline"
                  >
                    {t.cookies.back}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
