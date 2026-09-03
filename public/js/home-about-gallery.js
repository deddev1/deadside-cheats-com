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
		let scrolling = false;

		const slideLeft = (index) => {
			const slide = slides[index];
			if (!slide) return 0;
			const left = slide.offsetLeft;
			if (left > 0 || index === 0) return left;
			return index * scroller.clientWidth;
		};

		const updateNav = () => {
			prevBtn.disabled = activeIndex <= 0;
			nextBtn.disabled = activeIndex >= slides.length - 1;
		};

		const goTo = (index, behavior = 'smooth') => {
			const next = Math.max(0, Math.min(index, slides.length - 1));
			activeIndex = next;
			updateNav();
			scrolling = behavior !== 'auto';
			scroller.scrollTo({ left: slideLeft(next), behavior });
			if (behavior === 'auto') scrolling = false;
		};

		prevBtn.addEventListener('click', (event) => {
			event.preventDefault();
			event.stopPropagation();
			goTo(activeIndex - 1);
		});

		nextBtn.addEventListener('click', (event) => {
			event.preventDefault();
			event.stopPropagation();
			goTo(activeIndex + 1);
		});

		let scrollTimer = 0;
		scroller.addEventListener(
			'scroll',
			() => {
				if (scrollTimer) clearTimeout(scrollTimer);
				scrollTimer = setTimeout(() => {
					scrolling = false;
					const width = scroller.clientWidth;
					if (width <= 0) return;
					const index = Math.max(
						0,
						Math.min(Math.round(scroller.scrollLeft / width), slides.length - 1),
					);
					activeIndex = index;
					updateNav();
				}, 60);
			},
			{ passive: true },
		);

		scroller.addEventListener('keydown', (event) => {
			if (event.key === 'ArrowRight') {
				event.preventDefault();
				goTo(activeIndex + 1);
			} else if (event.key === 'ArrowLeft') {
				event.preventDefault();
				goTo(activeIndex - 1);
			}
		});

		const visibilityObserver = new IntersectionObserver(
			(entries) => {
				if (entries.some((entry) => entry.isIntersecting) && !scrolling) {
					goTo(activeIndex, 'auto');
				}
			},
			{ threshold: 0.01 },
		);
		visibilityObserver.observe(scroller);

		let resizeTimer = 0;
		const resizeObserver = new ResizeObserver(() => {
			clearTimeout(resizeTimer);
			resizeTimer = setTimeout(() => {
				if (!scrolling) goTo(activeIndex, 'auto');
			}, 100);
		});
		resizeObserver.observe(scroller);

		updateNav();
	});
}

const boot = () => initHomeAboutGalleries();

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', boot, { once: true });
} else {
	boot();
}
document.addEventListener('astro:page-load', boot);
