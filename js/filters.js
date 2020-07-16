'use strict';

(function () {

	var ads = [];
	var choosenType = "any";
	var choosenPrice = "any";
	var choosenRooms = "any";
	var choosenGuests = "any";
	var choosenFeatures;

	var getRank = function (ad) {
		var rank = 0;
		var type;
		var price;
		var rooms;
		var guests;
		var features;

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

		/*-----------------------------------------------------------------*/

		if (choosenFeatures) {
			features = ad.offer.features;

			for(var i = 0; i < features.length; i++) {
				for(var j = 0; j < choosenFeatures.length; j++) {
					if (features[i] === choosenFeatures[j]) {
						rank += 1;
					}
				}
			}
		}

		return rank;
	};

	var updatePins = function () {

		ads.sort(function (left, right) {
			var rankDiff = getRank(right) - getRank(left);
			if (rankDiff === 0) {
				rankDiff = ads.indexOf(left) - ads.indexOf(right);
			}
			return rankDiff;
		});


		console.log(choosenType, choosenPrice, choosenRooms, choosenGuests, choosenFeatures);
		console.log("------------------------------------------------------");

		ads.forEach(function (it) {
			console.log(it.offer.type, it.offer.price, it.offer.rooms, it.offer.guests, it.offer.features);
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
		},

		onFeaturesChoose: function (features, callback) {
			choosenFeatures = features;
			window.debounce(function () {
				updatePins();
				callback();
			});
		}
	};

})();
