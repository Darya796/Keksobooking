'use strict';

(function () {
	var similarPinTemplate = document.querySelector("template").content.querySelector(".map__pin");
	var similarPinElements = document.querySelector(".map__pins");
	var ADS_PIN_POINTER_HEIGHT = 38;

	var renderPin = function (pin) {
		var pinElement = similarPinTemplate.cloneNode(true);

		pinElement.style.left = pin.location.x + "px";
		// pinElement.style.top = (pin.location.y) + "px";
		pinElement.style.top = (pin.location.y - ADS_PIN_POINTER_HEIGHT) + "px";
		pinElement.querySelector("img").setAttribute("src", pin.author.avatar);
		pinElement.querySelector("img").setAttribute("alt", pin.offer.title);
		return pinElement;
	};

	var fragmentOfPin = document.createDocumentFragment();



window.pin = {
	addingPin: function () {

		for (let i = 0; i < 5; i++) {
		// for (let i = 0; i < window.data.ads.length; i++) {
		// 	console.log(window.data.ads[i].location);
			fragmentOfPin.appendChild(renderPin(window.data.ads[i]));
		}
		similarPinElements.appendChild(fragmentOfPin);
	},
	adsPinPointerHeight: ADS_PIN_POINTER_HEIGHT
};

})();
