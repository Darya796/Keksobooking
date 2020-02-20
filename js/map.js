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


	var showCard = function () {

		var allAds = similarCardsElements.querySelectorAll(".map__card");
		for (var k = 0; k < allAds.length; k++) {
			similarCardsElements.removeChild(allAds[k]);
		}


		var clickedPinLocation = this.style.left.substring(0, this.style.left.length - 2) + ", " + (parseInt(this.style.top.substring(0, this.style.top.length - 2)) + window.pin.adsPinPointerHeight);
		// var clickedPinLocation = this.offsetLeft + ", " + (this.offsetTop);
		// var clickedPinLocation = this.offsetLeft + ", " + (this.offsetTop + window.pin.adsPinPointerHeight + 1);

		for (var j = 0; j < window.data.ads.length; j++) {
			var location = window.data.ads[j].location.x + ", " + window.data.ads[j].location.y;


			if (location === clickedPinLocation) {
				window.card.addingCard(window.data.ads[j], similarCardsElements, similarCardsElements.querySelector(".map__filters-container"));
			}

		}

		window.card.show(similarCardsElements, similarCardsElements.querySelector(".map__filters-container"));


		var closeCardBtn = document.querySelector(".popup__close");

		closeCardBtn.addEventListener("click", function () {
			this.parentElement.style.display = "none";
		});

	};

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

			window.pin.addingPin();

			/*-----------------------------------------*/
			AdressField.value = startScreenPin.offsetLeft + ", " + (startScreenPin.offsetTop + startScreenPin.offsetHeight - 17);

			pinButtons = similarPinElements.querySelectorAll(".map__pin");

			for (var j = 1; j < pinButtons.length; j++) {
				pinButtons[j].addEventListener("click", showCard);
			}

			/*-----------------------------------------*/


			window.filters.downloadedAds(window.data.ads);

			var filtersForm = document.querySelector(".map__filters");
			var typeSelect = filtersForm.querySelector("#housing-type");
			var priceSelect = filtersForm.querySelector("#housing-price");
			var roomsSelect = filtersForm.querySelector("#housing-rooms");
			var guestsSelect = filtersForm.querySelector("#housing-guests");

			var updatePinsCallback = function () {
				for (let i = 1; i < pinButtons.length; i++) {
					pinButtons[i].remove();
				}

				window.pin.addingPin();
				pinButtons = similarPinElements.querySelectorAll(".map__pin");

				for (var j = 1; j < pinButtons.length; j++) {
					pinButtons[j].addEventListener("click", showCard);
				}
			};

			typeSelect.addEventListener("change", function () {
				if (document.querySelector(".map__card.popup")) {
					document.querySelector(".map__card.popup").style.display = "none";
				}

				for (var i = 0; i < typeSelect.options.length; i++) {
					if (typeSelect.options[i].selected) {
						window.filters.onTypeChoose(typeSelect.options[i].value, updatePinsCallback);
					}
				}
			});

			priceSelect.addEventListener("change", function () {
				if (document.querySelector(".map__card.popup")) {
					document.querySelector(".map__card.popup").style.display = "none";
				}

				for (var i = 0; i < priceSelect.options.length; i++) {
					if (priceSelect.options[i].selected) {
						window.filters.onPriceChoose(priceSelect.options[i].value, updatePinsCallback);
					}
				}
			});

			roomsSelect.addEventListener("change", function () {
				if (document.querySelector(".map__card.popup")) {
					document.querySelector(".map__card.popup").style.display = "none";
				}

				for (var i = 0; i < roomsSelect.options.length; i++) {
					if (roomsSelect.options[i].selected) {
						window.filters.onRoomsChoose(roomsSelect.options[i].value, updatePinsCallback);
					}
				}
			});

			guestsSelect.addEventListener("change", function () {
				if (document.querySelector(".map__card.popup")) {
					document.querySelector(".map__card.popup").style.display = "none";
				}

				for (var i = 0; i < guestsSelect.options.length; i++) {
					if (guestsSelect.options[i].selected) {
						window.filters.onGuestsChoose(guestsSelect.options[i].value, updatePinsCallback);
					}
				}
			});


			/*-----------------------------------------*/

			map.removeEventListener("mousemove", onMouseMove);
			map.removeEventListener("mouseup", onMouseUp);

		};


		map.addEventListener("mousemove", onMouseMove);
		map.addEventListener("mouseup", onMouseUp);
	});

	// console.log(showCard());

	/*------------------------------------------------------------------------*/

	window.map = {
		inactive: function () {
			for (let i = 1; i < pinButtons.length; i++) {
				pinButtons[i].remove();
			}

			if (document.querySelector(".map__card.popup")) {
				document.querySelector(".map__card.popup").remove();
			}

			AdressField.value = window.data.mainPinPosition.x + ", " + window.data.mainPinPosition.y;

			startScreenPin.style.top = window.data.mainPinPosition.y + "px";
			startScreenPin.style.left = window.data.mainPinPosition.x + "px";
		}
	};
})();