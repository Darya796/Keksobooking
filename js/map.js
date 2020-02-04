'use strict';

(function () {
	var similarPinElements = document.querySelector(".map__pins");
	var similarCardsElements = document.querySelector(".map");

	var startScreenPin = document.querySelector(".map__pin--main");
	var noticeForm = document.querySelector(".notice__form");
	var AdressField = noticeForm.querySelector("#address");

	/*------------------------------------------------------------*/


	AdressField.value = window.data.mainPinPosition.x + ", " + window.data.mainPinPosition.y;
	/*------------------------------------------------------------*/
	var pinButtons;

	/*  DRAGGABLE PIN  */
	/*------------------------------------------------------------*/
	var map = document.querySelector(".map__pins");

	startScreenPin.addEventListener("mousedown", function (evt) {
		evt.preventDefault();

		var startCoords = {
			x: evt.clientX,
			y: evt.clientY
		};

		var onMouseMove = function (moveEvt) {
			moveEvt.preventDefault();

			var shift = {
				x: startCoords.x - moveEvt.clientX,
				y: startCoords.y - moveEvt.clientY
			};

			startCoords = {
				x: moveEvt.clientX,
				y: moveEvt.clientY
			};

			startScreenPin.style.top = (startScreenPin.offsetTop - shift.y) + "px";
			startScreenPin.style.left = (startScreenPin.offsetLeft - shift.x) + "px";
		};

		var onMouseUp = function (upEvt) {
			upEvt.preventDefault();

			similarCardsElements.classList.remove("map--faded");

			window.form.activate();

			window.pin.addingPin(similarPinElements);

			/*-----------------------------------------*/
			AdressField.value = startScreenPin.offsetLeft + ", " + (startScreenPin.offsetTop + startScreenPin.offsetHeight - 17);

			pinButtons = similarPinElements.querySelectorAll(".map__pin");

			for (var j = 1; j < pinButtons.length; j++) {
				pinButtons[j].addEventListener("click", showCard);
			}

			map.removeEventListener("mousemove", onMouseMove);
			map.removeEventListener("mouseup", onMouseUp);

		};


		map.addEventListener("mousemove", onMouseMove);
		map.addEventListener("mouseup", onMouseUp);
	});


	var showCard = function () {

		var allAds = similarCardsElements.querySelectorAll(".map__card");
		for (var k = 0; k < allAds.length; k++) {
			similarCardsElements.removeChild(allAds[k]);
		}

		var clickedPinLocation = this.offsetLeft + ", " + (this.offsetTop + window.pin.adsPinPointerHeight);

		for (var j = 0; j < window.data.ads.length; j++) {
			var location = window.data.ads[j].location.x + ", " + window.data.ads[j].location.y;


			if (location === clickedPinLocation) {
				window.card.addingCard(window.data.ads[j], similarCardsElements, similarCardsElements.querySelector(".map__filters-container"));
			}

		}

		window.card.show(similarCardsElements, similarCardsElements.querySelector(".map__filters-container"));

	};


	window.map = {
		inactive: function () {
			for (let i = 1; i < pinButtons.length; i++) {
				pinButtons[i].remove();
			}

			if(document.querySelector(".map__card.popup")) {
			document.querySelector(".map__card.popup").remove();
			}

			AdressField.value = window.data.mainPinPosition.x + ", " + window.data.mainPinPosition.y;

			startScreenPin.style.top = window.data.mainPinPosition.y + "px";
			startScreenPin.style.left = window.data.mainPinPosition.x + "px";
		}
	};
})();