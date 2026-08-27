import { useEffect, type ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n.js';

type Props = {
	locale: string;
	children: ReactNode;
};

/** Syncs react-i18next with the Astro page locale (URL is source of truth for SEO). */
export default function I18nProvider({ locale, children }: Props) {
	if (i18n.language !== locale) {
		void i18n.changeLanguage(locale);
	}

	useEffect(() => {
		if (i18n.language !== locale) {
			void i18n.changeLanguage(locale);
		}
	}, [locale]);

	return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
