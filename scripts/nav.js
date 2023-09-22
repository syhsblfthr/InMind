(() => {

const navigationButtons = document.getElementsByClassName("navigation-button");

const handler = ({dataset: {navid: id}}) => {
	if (id >= 1 && id <= 3) {
		Header.transition();
	}
};

navigationButtons.forEach((button) => {
	button.addEventListener("click", handler);
});

})();
