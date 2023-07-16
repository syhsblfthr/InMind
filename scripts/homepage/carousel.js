(function(namespace) {
	let intervalID = null;
	const carouselItemStateMap = {
		'froq': 'botq',
		'botq': 'bckq',
		'bckq': 'topq',
		'topq': 'froq'
	};	

	namespace.start = function() {
		intervalID = setInterval(function() {
			const elements = document.querySelectorAll('[data-sig="home"].image-carousel-item');
			const length = elements.length;

			for (let idx = 0; idx < length; ++idx) {
				const classList = elements[idx].classList;
				const state = classList.item(1);

				classList.replace(state, `image-carousel-item-${carouselItemStateMap[state.substring(20, 24)]}`);
			}
		}, 3000 + 1500);
	};

	namespace.end = function() {
		clearInterval(intervalID);
	};
})(window.namespaces.homepage.carousel = {});

const useCarousel = window.namespaces.homepage.carousel;
