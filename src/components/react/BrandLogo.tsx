type Props = {
	/** Accessible label when the logo is decorative inside a named link */
	alt?: string;
	className?: string;
};

/** NC monogram mark — Deadside Cheats. */
export default function BrandLogo({ alt = 'Deadside Cheats logo', className }: Props) {
	return (
		<img
			className={className}
			src="/images/deadside-cheats-logo-mark.webp"
			srcSet="/images/deadside-cheats-logo-mark.webp 128w, /images/deadside-cheats-logo.webp 512w"
			sizes="40px"
			width={40}
			height={40}
			alt={alt}
			decoding="async"
			fetchPriority="high"
		/>
	);
}
