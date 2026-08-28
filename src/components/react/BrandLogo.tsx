type Props = {
	/** Accessible label when the logo is decorative inside a named link */
	alt?: string;
	className?: string;
};

/** Classy minimal tech mark — clear geometric N for Naraka. */
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
				rx="9"
				fill="currentColor"
				fillOpacity="0.05"
				stroke="currentColor"
				strokeOpacity="0.16"
				strokeWidth="1.25"
			/>
			{/* Geometric N: left stem, diagonal, right stem */}
			<path
				d="M12 28V12h3.2L24.8 24.2V12H28v16h-3.2L14.8 15.8V28H12z"
				fill="currentColor"
			/>
			{/* Red accent bar under the mark */}
			<rect x="12" y="30.2" width="16" height="1.6" rx="0.8" fill="var(--magenta, #e50920)" />
		</svg>
	);
}
