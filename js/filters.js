'use strict';

(function () {
	// var filtersForm = document.querySelector(".map__filters");
	// var featuresSelect = filtersForm.querySelector("#housing-features");
	// var featuresInputs = filtersForm.querySelectorAll("#housing-features input");


	var ads = [];
	var choosenType = "any";
	var choosenPrice = "any";
	var choosenRooms = "any";
	var choosenGuests = "any";
	// var choosenFeatures;

	var getRank = function (ad) {
		var rank = 0;
		var type;
		var price;
		var rooms;
		var guests;

		if (choosenType !== "any") {
			type = ad.offer.type;
		}
		else {
			type = "any";
		}

		if (type === choosenType) {
			rank += 1;
		}

		/*-----------------------------------------------------------------*/

		if (choosenPrice !== "any") {
			if (ad.offer.price < 10000) {
				price = "low";
			}
			else if (ad.offer.price >= 10000 && ad.offer.price < 50000) {
				price = "middle";
			}
			else if (ad.offer.price >= 50000) {
				price = "high";
			}
		}
		else {
			price = "any";
		}

		if (price === choosenPrice) {
			rank += 3;
		}

		/*-----------------------------------------------------------------*/

		if (choosenRooms !== "any") {
			rooms = ad.offer.rooms;
		}
		else {
			rooms = "any";
		}

		if (rooms == choosenRooms) {
			rank += 2;
		}

		/*-----------------------------------------------------------------*/

		if (choosenGuests !== "any") {
			guests = ad.offer.guests;
		}
		else {
			guests = "any";
		}

		if (guests == choosenGuests) {
			rank += 4;
		}

		return rank;
	};

	var updatePins = function () {
		// var pinButtons = document.querySelectorAll(".map__pins .map__pin");

		ads.sort(function (left, right) {
			var rankDiff = getRank(right) - getRank(left);
			if (rankDiff === 0) {
				rankDiff = ads.indexOf(left) - ads.indexOf(right);
			}
			return rankDiff;
		});


		console.log(choosenType, choosenPrice, choosenRooms, choosenGuests);
		console.log("------------------------------------------------------");

		ads.forEach(function (it) {
			console.log(it.offer.type, it.offer.price, it.offer.rooms, it.offer.guests);
		});

	};


	window.filters = {
		downloadedAds: function (data) {
			ads = data;
		},
		onTypeChoose: function (type, callback) {
			choosenType = type;
			window.debounce(function () {
				updatePins();
				callback();
			});
		},
		onPriceChoose: function (price, callback) {
			choosenPrice = price;
			window.debounce(function () {
				updatePins();
				callback();
			});
		},
		onRoomsChoose: function (rooms, callback) {
			choosenRooms = rooms;
			window.debounce(function () {
				updatePins();
				callback();
			});
		},
		onGuestsChoose: function (guests, callback) {
			choosenGuests = guests;
			window.debounce(function () {
				updatePins();
				callback();
			});
		}
	};

})();