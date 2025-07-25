export function observeElements(elements, callback, options = {}) {
	const defaultOptions = {
		root: null,
		rootMargin: '0px',
		threshold: 0.1,
	};

	const observer = new IntersectionObserver((entries, observerInstance) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				callback(entry.target);
				observerInstance.unobserve(entry.target);
			}
		});
	}, { ...defaultOptions, ...options });

	elements.forEach(el => observer.observe(el));
}
