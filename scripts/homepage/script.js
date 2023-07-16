(function(namespace, context) {
	const carouselSource = 'scripts/homepage/carousel.js'; // Relative to *.html
	const scriptElement = document.createElement('script');
	scriptElement.type = "text/javascript";
	scriptElement.src = carouselSource;

	document.head.append(scriptElement);

	scriptElement.onload = (function() {
		context.load = useCarousel.start;
		context.unload = useCarousel.end;

		if (useContextManager.isFirstInitialization())
			context.load();
	});
})(window.namespaces.homepage = {}, useContextManager.registerContext(useContextManager.getCurrentContextName()));
