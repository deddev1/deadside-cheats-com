/** Subtle hero parallax — perspective tilt + drift on the hero artwork stack. */
const MAX_TX = 12;
const MAX_TY = 8;
const MAX_ROT_Y = 2.4;
const MAX_ROT_X = 1.6;
const LERP = 0.11;
const IDLE_SPEED = 0.48;
const IDLE_TX = 3.5;
const IDLE_TY = 2.5;
const IDLE_ROT = 0.55;

type MotionState = {
	tx: number;
	ty: number;
	ry: number;
	rx: number;
};

function lerp(current: number, target: number, factor: number): number {
	return current + (target - current) * factor;
}

export function initHeroParallax(root: HTMLElement | null): (() => void) | undefined {
	if (!root || root.dataset.parallaxReady === 'true') return;

	const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
	if (motionQuery.matches) return;

	const hero = root.closest('.hero') as HTMLElement | null;
	const stack = root.querySelector<HTMLElement>('[data-hero-parallax-stack]');
	if (!hero || !stack) return;

	let target: MotionState = { tx: 0, ty: 0, ry: 0, rx: 0 };
	let current: MotionState = { tx: 0, ty: 0, ry: 0, rx: 0 };
	let idlePhase = Math.random() * Math.PI * 2;
	let rafId = 0;
	let pointerInside = false;

	const applyTransform = (state: MotionState) => {
		stack.style.transform = `translate3d(${state.tx.toFixed(2)}px, ${state.ty.toFixed(2)}px, 0) rotateY(${state.ry.toFixed(3)}deg) rotateX(${state.rx.toFixed(3)}deg)`;
	};

	const tick = (time: number) => {
		const t = time * 0.001;
		let aim = { ...target };

		if (!pointerInside) {
			aim.tx += Math.sin(t * IDLE_SPEED + idlePhase) * IDLE_TX;
			aim.ty += Math.cos(t * (IDLE_SPEED * 0.86) + idlePhase) * IDLE_TY;
			aim.ry += Math.sin(t * (IDLE_SPEED * 0.72) + idlePhase) * IDLE_ROT;
			aim.rx += Math.cos(t * (IDLE_SPEED * 0.64) + idlePhase) * (IDLE_ROT * 0.7);
		}

		current = {
			tx: lerp(current.tx, aim.tx, LERP),
			ty: lerp(current.ty, aim.ty, LERP),
			ry: lerp(current.ry, aim.ry, LERP),
			rx: lerp(current.rx, aim.rx, LERP),
		};
		applyTransform(current);
		rafId = window.requestAnimationFrame(tick);
	};

	const updatePointerTarget = (clientX: number, clientY: number) => {
		const rect = hero.getBoundingClientRect();
		if (rect.width <= 0 || rect.height <= 0) return;

		const nx = (clientX - rect.left) / rect.width - 0.5;
		const ny = (clientY - rect.top) / rect.height - 0.5;
		const clampedX = Math.max(-1, Math.min(1, nx * 2));
		const clampedY = Math.max(-1, Math.min(1, ny * 2));

		target = {
			tx: clampedX * MAX_TX,
			ty: clampedY * MAX_TY,
			ry: clampedX * MAX_ROT_Y,
			rx: -clampedY * MAX_ROT_X,
		};
	};

	const onPointerLikeMove = (clientX: number, clientY: number) => {
		const rect = hero.getBoundingClientRect();
		const inside =
			clientX >= rect.left &&
			clientX <= rect.right &&
			clientY >= rect.top &&
			clientY <= rect.bottom;

		if (!inside) {
			if (pointerInside) {
				pointerInside = false;
				target = { tx: 0, ty: 0, ry: 0, rx: 0 };
			}
			return;
		}

		pointerInside = true;
		updatePointerTarget(clientX, clientY);
	};

	const onPointerMove = (event: PointerEvent) => {
		onPointerLikeMove(event.clientX, event.clientY);
	};

	const onMouseMove = (event: MouseEvent) => {
		onPointerLikeMove(event.clientX, event.clientY);
	};

	const onMotionChange = (event: MediaQueryListEvent) => {
		if (event.matches) teardown();
	};

	window.addEventListener('pointermove', onPointerMove, { passive: true });
	window.addEventListener('mousemove', onMouseMove, { passive: true });
	motionQuery.addEventListener('change', onMotionChange);

	root.dataset.parallaxReady = 'true';
	rafId = window.requestAnimationFrame(tick);

	function teardown() {
		window.cancelAnimationFrame(rafId);
		window.removeEventListener('pointermove', onPointerMove);
		window.removeEventListener('mousemove', onMouseMove);
		motionQuery.removeEventListener('change', onMotionChange);
		stack.style.transform = '';
		delete root.dataset.parallaxReady;
	}

	return teardown;
}

export function bootHeroParallax(): void {
	const run = () => {
		for (const root of document.querySelectorAll<HTMLElement>('[data-hero-parallax]')) {
			initHeroParallax(root);
		}
	};

	run();

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', run, { once: true });
	}

	document.addEventListener('astro:page-load', run);
}
