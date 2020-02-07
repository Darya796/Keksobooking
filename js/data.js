'use strict';

(function () {
	var startScreenPin = document.querySelector(".map__pin--main");

	var onLoad = function (data) {
		window.data.ads = data;
	};

	var onError = function (message) {
		var node = document.createElement("div");
		node.style = "z-index: 100; margin: 0 auto; text-align: center; background: #ff6547; font-size: 29px;";
		node.style.position = "fixed";
		node.style.color = "#ffffff";
		node.style.left = 0;
		node.style.right = 0;
		node.textContent = message;
		document.body.insertAdjacentElement("afterbegin", node);
		setTimeout(function () {
			document.body.removeChild(node);
		}, 5000);
	};


	window.backend.download(onLoad, onError);


	window.data = {
		mainPinPosition: {
			"x": startScreenPin.offsetLeft,
			"y": startScreenPin.offsetTop
		}
	};
})();