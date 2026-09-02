import { useTranslation } from 'react-i18next';
import I18nProvider from './I18nProvider';

type FooterLink = { labelKey: string; href: string };

type Props = {
	locale: string;
	siteName: string;
	supportEmail: string;
	shareUrl: string;
	explore: FooterLink[];
	help: FooterLink[];
};

function buildShareUrl(base: string, params: Record<string, string>): string {
	const url = new URL(base);
	for (const [key, value] of Object.entries(params)) {
		url.searchParams.set(key, value);
	}
	return url.toString();
}

function SiteFooterInner({ siteName, supportEmail, shareUrl, explore, help }: Props) {
	const { t } = useTranslation();
	const year = new Date().getFullYear();
	const tagline = t('footer.tagline').split('\n')[0];

	const shareLinks = [
		{
			label: t('common.shareX'),
			href: buildShareUrl('https://twitter.com/intent/tweet', {
				url: shareUrl,
				text: siteName,
			}),
		},
		{
			label: t('common.shareReddit'),
			href: buildShareUrl('https://www.reddit.com/submit', {
				url: shareUrl,
				title: siteName,
			}),
		},
		{
			label: t('common.shareFacebook'),
			href: buildShareUrl('https://www.facebook.com/sharer/sharer.php', { u: shareUrl }),
		},
	];

	return (
		<footer className="site-footer">
			<div className="shell site-footer__grid">
				<div>
					<p className="site-footer__brand">{siteName}</p>
					<p>{tagline}</p>
					<p className="site-footer__share-label">{t('common.share')}</p>
					<ul className="site-footer__share">
						{shareLinks.map((link) => (
							<li key={link.href}>
								<a href={link.href} rel="noopener noreferrer" target="_blank">
									{link.label}
								</a>
							</li>
						))}
					</ul>
				</div>
				<div>
					<p className="site-footer__label">{t('footer.explore')}</p>
					<ul>
						{explore.map((link) => (
							<li key={link.href}>
								<a href={link.href}>{t(link.labelKey)}</a>
							</li>
						))}
					</ul>
				</div>
				<div>
					<p className="site-footer__label">{t('footer.help')}</p>
					<ul>
						{help.map((link) => (
							<li key={link.href}>
								<a href={link.href}>{t(link.labelKey)}</a>
							</li>
						))}
						<li>
							<a href={`mailto:${supportEmail}`}>{supportEmail}</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="shell site-footer__bottom">
				<p>{t('common.copyright', { year, brand: siteName })}</p>
			</div>
		</footer>
	);
}

export default function SiteFooterApp(props: Props) {
	return (
		<I18nProvider locale={props.locale}>
			<SiteFooterInner {...props} />
		</I18nProvider>
	);
}
