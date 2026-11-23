import { SupportedLang } from '../config/company';
import { COMMERCIAL_PILLARS } from '../data/content';
import { TranslationDictionary } from '../i18n/translations';
import { ResilientImage } from './ResilientImage';

interface AboutSectionProps {
  lang: SupportedLang;
  t: TranslationDictionary;
}

export function AboutSection({ lang, t }: AboutSectionProps) {
  return (
    <section id="entreprise" className="about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-col">
            <div>
              <p className="section-kicker section-kicker--accent">
                {t.about.kicker}
              </p>
              <h2 className="section-title">{t.about.title}</h2>
              <p className="about-intro">{t.about.intro}</p>

              <p className="section-kicker section-kicker--violet">
                {t.about.approachKicker}
              </p>
              <h3 className="about-approach-title">{t.about.approachTitle}</h3>
            </div>

            <div className="about-pillars">
              {COMMERCIAL_PILLARS.map((pillar) => (
                <div key={pillar.number} className="about-pillar">
                  <span className="about-pillar__num">{pillar.number}.</span>
                  <div>
                    <h4 className="about-pillar__title">
                      {pillar.title[lang]}
                    </h4>
                    <p className="about-pillar__desc">
                      {pillar.description[lang]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-col">
            <div className="about-visual-wrap">
              <ResilientImage
                src="/images/suv_chinese_hybrid_road_1795363148576.jpg"
                alt="Éminences Internationales — Véhicules automobiles chinois"
                loading="lazy"
                className="about-visual-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
