window.namespaces = {};

(function(namespace) {
	const contextsMap = {};
	let currentContext = '';
	let initializedBefore = false;

	namespace.isFirstInitialization = function() {
		return !initializedBefore;
	}

	namespace.registerContext = function(name) {
		return (contextsMap[name] = {});
	};

	namespace.setCurrentContext = function(name) {
		currentContext = name;
	};

	namespace.getCurrentContextName = function() {
		const pathname = window.location.pathname;
		let pathnameLength = pathname.length;

		let contextName = [];

		do {
			let ch = pathname[--pathnameLength];
			if (ch != '/')
				contextName.push(ch);
			else
				break;
		} while (1);

		return contextName.reverse().join('');
	};

	const getCurrentContext = function() {
		return contextsMap[currentContext];
	};
})(window.namespaces.contextManager = {});

const useContextManager = window.namespaces.contextManager;

