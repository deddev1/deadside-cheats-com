type Props = {
	/** Accessible label when the logo is decorative inside a named link */
	alt?: string;
	className?: string;
};

/** NC monogram mark — Naraka Cheats. */
export default function BrandLogo({ alt = 'Naraka Cheats logo', className }: Props) {
	return (
		<img
			className={className}
			src="/images/naraka-cheats-logo-mark.webp"
			srcSet="/images/naraka-cheats-logo-mark.webp 128w, /images/naraka-cheats-logo.webp 512w"
			sizes="40px"
			width={40}
			height={40}
			alt={alt}
			decoding="async"
			fetchPriority="high"
		/>
	);
}
