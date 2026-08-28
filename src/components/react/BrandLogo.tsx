type Props = {
	/** Accessible label when the logo is decorative inside a named link */
	alt?: string;
	className?: string;
};

/** Classy minimal tech mark — refined geometric N for Naraka. */
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
			{/* Soft frame */}
			<rect
				x="1.25"
				y="1.25"
				width="37.5"
				height="37.5"
				rx="11"
				stroke="currentColor"
				strokeOpacity="0.18"
				strokeWidth="1"
			/>
			{/* Inner hairline for depth */}
			<rect
				x="3.5"
				y="3.5"
				width="33"
				height="33"
				rx="9"
				stroke="currentColor"
				strokeOpacity="0.06"
				strokeWidth="0.75"
			/>
			{/* Refined N — balanced stems + clean diagonal */}
			<path
				d="M13.2 27.4V12.6h2.1L24.7 24.1V12.6h2.1v14.8h-2.1L15.3 16V27.4h-2.1z"
				fill="currentColor"
			/>
			{/* Quiet red accent — small corner node */}
			<circle cx="28.6" cy="12.6" r="1.35" fill="var(--magenta, #e50920)" />
		</svg>
	);
}
