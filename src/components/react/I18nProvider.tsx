import { useEffect, useState, type ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n, { ensureLocale } from '../../i18n.js';

type Props = {
	locale: string;
	children: ReactNode;
};

/** Syncs react-i18next with the Astro page locale (URL is source of truth for SEO). */
export default function I18nProvider({ locale, children }: Props) {
	const [ready, setReady] = useState(() => i18n.language === locale);

	useEffect(() => {
		let cancelled = false;
		void ensureLocale(locale).then((lng) => {
			if (cancelled) return;
			if (i18n.language !== lng) {
				void i18n.changeLanguage(lng);
			}
			setReady(true);
		});
		return () => {
			cancelled = true;
		};
	}, [locale]);

	if (!ready && locale !== 'en') {
		return null;
	}

	return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
