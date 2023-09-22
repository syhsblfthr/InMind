export class CarouselItem {
	#mapping = {
		0: "active-in3",
		1: "active-in2",
		2: "active-in1",
		3: "active"
	};
	
	#state 				= undefined;
	#elementClassList 	= undefined;

	constructor(element) {
		this.#elementClassList = element.classList;

		switch (element.classList.item(0)) {
			case "active":
				this.#state = 3;
				break;
			case "active-in1":
				this.#state = 2;
				break;
			case "active-in2":
				this.#state = 1;
				break;
			case "active-in3":
				this.#state = 0;
				break;
		}
	}

	next() {
		this.#elementClassList.replace(
			this.#mapping[this.#state],
			this.#mapping[this.#state = (this.#state + 1) % 4]
		);
	}
};
