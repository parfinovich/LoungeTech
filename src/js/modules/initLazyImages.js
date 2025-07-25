import { observeElements } from './observeElements.js';

export function initLazyImages() {
    const lazyImages = document.querySelectorAll('img.lazy');

	observeElements(lazyImages, (img) => {
		const src = img.dataset.src;
		if (src) {
			img.src = src;
			img.classList.remove('lazy');
			img.classList.add('lazy-loaded');
		}
	});
}