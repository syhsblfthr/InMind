import { CarouselItem } from "./carousel-item.js";

(() => {

const carouselChildren = document.getElementsByClassName("carousel")[0].children;
const carouselItems = [
	new CarouselItem(carouselChildren[0]),
	new CarouselItem(carouselChildren[1]),
	new CarouselItem(carouselChildren[2]),
	new CarouselItem(carouselChildren[3])
];

const carouselIntervalFunc = () => {
	const carouselItemsLength = carouselItems.length;
	for (let idx = 0; idx < carouselItemsLength; ++idx)
		carouselItems[idx].next();
};

let interval = undefined;
	
window.addEventListener("blur", () => {
	clearInterval(interval);
});

window.addEventListener("focus", () => {
	interval = setInterval(carouselIntervalFunc, 3000);
});

window.namespaces.homepageCarousel.unload = () => {
	clearInterval(interval);
};

window.namespaces.homepageCarousel.load = () => {
	interval = setInterval(carouselIntervalFunc, 3000);
};

})();
