type Props = {
	/** Accessible label when the logo is decorative inside a named link */
	alt?: string;
	className?: string;
};

/** Classy minimal tech mark — stylized N with red accent node. */
export default function BrandLogo({ alt, className }: Props) {
	return (
		<svg
			className={className}
			viewBox="0 0 40 40"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden={alt ? undefined : true}
			role={alt ? 'img' : undefined}
			aria-label={alt}
		>
			<rect
				x="1"
				y="1"
				width="38"
				height="38"
				rx="10"
				fill="currentColor"
				fillOpacity="0.06"
				stroke="currentColor"
				strokeOpacity="0.14"
				strokeWidth="1.25"
			/>
			<path
				d="M12 27V13l8 9.5L28 13v14"
				stroke="currentColor"
				strokeWidth="2.15"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M25.5 13.5 29 17"
				stroke="var(--magenta, #e50920)"
				strokeWidth="2"
				strokeLinecap="round"
			/>
			<circle cx="29" cy="17" r="1.35" fill="var(--magenta, #e50920)" />
		</svg>
	);
}
