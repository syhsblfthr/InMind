(() => {

const body		= document.body;
const header	= body.children[0]; // <header>
const main		= body.children[1]; // <main>
const triggers 	= document.getElementsByClassName("transition-trigger");
const parser	= new DOMParser;

const beginTransition = () => {
	return main.animate([{opacity: 1}, {opacity: 0}], {duration: 500, fill: "forwards"});
};

const endTransition = () => {
	main.animate([{opacity: 0}, {opacity: 1}], {duration: 500, fill: "forwards"});
};

const loadCSS = (_document) => {
	const exclusiveStylesheets 			= _document.head.querySelectorAll("[data-ownership='exclusive']");
	const exclusiveStylesheetsLength 	= exclusiveStylesheets.length;

	for (let index = 0; index < exclusiveStylesheetsLength; ++index) {
		const styleElement 	= document.createElement("link");
		styleElement.rel 	= "stylesheet";
		styleElement.href 	= exclusiveStylesheets[index].href;

		document.head.appendChild(styleElement);
	}
};

const parserCallback = (text) => {
	const doc = parser.parseFromString(text, "text/html");
	console.log("Page parsed");

	loadCSS(doc);

	body.dataset.owner = doc.body.dataset.owner;

	// Change the <main> content
	document.body.children[1].innerHTML = doc.body.children[1].innerHTML;
	console.log("<main> replaced");

	endTransition();
};

const fetchCallback = (data) => {
	console.log("Page loaded\nParsing page...");
	data.text().then(parserCallback);
};

const loadPage = (url) => {
	console.log("Loading page...");
	window.history.pushState(null, "", url);
	beginTransition().finished.then(() => {
		fetch(url, {
			method: "GET"
		}).then(fetchCallback);
	});
};

const triggerHandler = (evt) => {
	console.log("[DEBUG] Clicked");
	const destination = evt.target.dataset.destination;

	loadPage(destination);
};

const triggersAmount = triggers.length;
for (let index = 0; index < triggersAmount; ++index)
	triggers[index].addEventListener("click", triggerHandler);

})();
