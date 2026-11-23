import { ChevronRight } from 'lucide-react';
import { TranslationDictionary } from '../i18n/translations';

interface BreadcrumbBarProps {
  homeLabel: string;
  currentLabel: string;
  onBackHome: () => void;
  breadcrumbAriaLabel: string;
}

export function BreadcrumbBar({
  homeLabel,
  currentLabel,
  onBackHome,
  breadcrumbAriaLabel,
}: BreadcrumbBarProps) {
  return (
    <nav aria-label={breadcrumbAriaLabel} className="breadcrumb">
      <button type="button" onClick={onBackHome} className="breadcrumb__link">
        {homeLabel}
      </button>
      <ChevronRight className="breadcrumb__sep" aria-hidden="true" />
      <span className="breadcrumb__current">{currentLabel}</span>
    </nav>
  );
}