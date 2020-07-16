'use strict';

(function () {
	var DEBOUNCE_INTERVAL = 500;
	// window.debounce = function (fun) {
	// 	var lastTimeout = null;
	//
	// 	return function () {
	// 		var args = arguments;
	// 		if (lastTimeout) {
	// 			window.clearTimeout(lastTimeout);
	// 		}
	// 		lastTimeout = window.setTimeout(function () {
	// 			fun();
	// 			// fun.apply(null, args);
	// 		}, DEBOUNCE_INTERVAL);
	// 	}
	// };


	window.debounce = function (action) {
		var lastTimeout = null;

		if(lastTimeout) {
			window.clearTimeout(lastTimeout);
		}
		lastTimeout = window.setTimeout(function () {
			action();
		}, DEBOUNCE_INTERVAL);
	};
})();
