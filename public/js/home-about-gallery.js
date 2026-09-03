function initHomeAboutGalleries() {
	document.querySelectorAll('.home-about-gallery__frame').forEach((frame) => {
		if (frame.dataset.galleryInit === 'true') return;
		frame.dataset.galleryInit = 'true';

		const scroller = frame.querySelector('.home-about-gallery__scroller');
		const prevBtn = frame.querySelector('[data-gallery-prev]');
		const nextBtn = frame.querySelector('[data-gallery-next]');
		const slides = scroller?.querySelectorAll('.home-about-gallery__slide');
		if (!scroller || !prevBtn || !nextBtn || !slides || slides.length < 2) return;

		let activeIndex = 0;
		let isProgrammaticScroll = false;
		let scrollSyncFrame = 0;

		const updateNav = () => {
			prevBtn.disabled = activeIndex <= 0;
			nextBtn.disabled = activeIndex >= slides.length - 1;
		};

		const scrollToSlide = (index, behavior = 'smooth') => {
			const clamped = Math.max(0, Math.min(index, slides.length - 1));
			activeIndex = clamped;
			updateNav();
			isProgrammaticScroll = behavior !== 'auto';
			slides[clamped].scrollIntoView({ behavior, inline: 'start', block: 'nearest' });
			if (behavior === 'auto') {
				isProgrammaticScroll = false;
			}
		};

		const syncActive = () => {
			if (scroller.clientWidth <= 0) return;

			let nearest = 0;
			let nearestDistance = Number.POSITIVE_INFINITY;
			slides.forEach((slide, index) => {
				const distance = Math.abs(scroller.scrollLeft - slide.offsetLeft);
				if (distance < nearestDistance) {
					nearestDistance = distance;
					nearest = index;
				}
			});

			activeIndex = nearest;
			updateNav();
		};

		prevBtn.addEventListener('click', () => {
			scrollToSlide(activeIndex - 1);
		});

		nextBtn.addEventListener('click', () => {
			scrollToSlide(activeIndex + 1);
		});

		scroller.addEventListener(
			'scroll',
			() => {
				if (scrollSyncFrame) cancelAnimationFrame(scrollSyncFrame);
				scrollSyncFrame = requestAnimationFrame(() => {
					if (isProgrammaticScroll) {
						const target = slides[activeIndex];
						if (Math.abs(scroller.scrollLeft - target.offsetLeft) < 2) {
							isProgrammaticScroll = false;
						}
						return;
					}
					syncActive();
				});
			},
			{ passive: true },
		);

		scroller.addEventListener('keydown', (event) => {
			if (event.key === 'ArrowRight') {
				event.preventDefault();
				scrollToSlide(activeIndex + 1);
			} else if (event.key === 'ArrowLeft') {
				event.preventDefault();
				scrollToSlide(activeIndex - 1);
			}
		});

		const visibilityObserver = new IntersectionObserver(
			(entries) => {
				if (entries.some((entry) => entry.isIntersecting)) {
					scrollToSlide(activeIndex, 'auto');
				}
			},
			{ threshold: 0.01 },
		);
		visibilityObserver.observe(scroller);

		let resizeTimer = 0;
		const resizeObserver = new ResizeObserver(() => {
			clearTimeout(resizeTimer);
			resizeTimer = setTimeout(() => {
				if (!isProgrammaticScroll) {
					scrollToSlide(activeIndex, 'auto');
				}
			}, 80);
		});
		resizeObserver.observe(scroller);

		updateNav();
	});
}

const boot = () => initHomeAboutGalleries();

boot();
document.addEventListener('DOMContentLoaded', boot);
document.addEventListener('astro:page-load', boot);
