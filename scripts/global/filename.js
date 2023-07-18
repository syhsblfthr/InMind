(function(namespace) {
	const reverseString = function(string) {
		const stringLastIndex = string.length - 1;
		let stringMovingIndex = stringLastIndex;

		do {
			const beginIndex = stringLastIndex - stringMovingIndex;
			const ch = string[beginIndex];
			
			string[beginIndex] = string[stringMovingIndex];
			console.log(string[beginIndex]);
			string[stringMovingIndex] = ch;
		} while (--stringMovingIndex);

		return string;
	};

	namespace.getCurrentFilename = function() {
		const pathname = window.location.pathname;
		let pathnameLength = pathname.length;

		let filename = '';
		do {
			const ch = pathname[--pathnameLength];
			if (ch == '/')
				break;
			filename += ch;
		} while (1);

		return reverseString(filename);
	};
})(window);
