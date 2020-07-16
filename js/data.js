'use strict';

(function () {
	var startScreenPin = document.querySelector(".map__pin--main");
	var MAP_WIDTH = 1140;
	var MAP_HEIGHT = 704;

	var onLoad = function (data) {
		for (var i = 0; i < data.length; i++) {
			if (data[i].location.x <= MAP_WIDTH && data[i].location.y <= MAP_HEIGHT) {
				window.data.ads.push(data[i]);
			}
		}
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
		},
		ads: []
	};
})();
