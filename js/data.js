'use strict';

(function () {
	var startScreenPin = document.querySelector(".map__pin--main");

	window.data = {
		ads: [
				{
					"author": {
						"avatar": "img/avatars/user01.png"
					},

					"offer": {
						"title": "Большая уютная квартира",
						"address": "973 140",
						"price": 215400,
						"type": "flat",
						"rooms": 3,
						"guests": 10,
						"checkin": "12:00",
						"checkout": "14:00",
						"features": ["wifi", "dishwasher"],
						"description": "",
						"photos": ["http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", "http://o0.github.io/assets/images/tokyo/hotel3.jpg"]
					},

					"location": {
						"x": 973,
						"y": 140
					}
				},

				{
					"author": {
						"avatar": "img/avatars/user02.png"
					},

					"offer": {
						"title": "Уютное бунгало далеко от моря",
						"address": "860, 200",
						"price": 980540,
						"type": "bungalo",
						"rooms": 5,
						"guests": 20,
						"checkin": "13:00",
						"checkout": "11:00",
						"features": ["dishwasher", "washer", "elevator", "conditioner"],
						"description": "",
						"photos": ["http://o0.github.io/assets/images/tokyo/hotel2.jpg", "http://o0.github.io/assets/images/tokyo/hotel3.jpg", "http://o0.github.io/assets/images/tokyo/hotel1.jpg"]
					},

					"location": {
						"x": 860,
						"y": 200
					}
				},

				{
					"author": {
						"avatar": "img/avatars/user03.png"
					},

					"offer": {
						"title": "Маленькая неуютная квартира",
						"address": "330, 330",
						"price": 115270,
						"type": "flat",
						"rooms": 1,
						"guests": 3,
						"checkin": "14:00",
						"checkout": "14:00",
						"features": ["wifi", "dishwasher", "parking", "washer", "elevator"],
						"description": "",
						"photos": ["http://o0.github.io/assets/images/tokyo/hotel2.jpg", "http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel3.jpg"]
					},

					"location": {
						"x": 330,
						"y": 330
					}
				},

				{
					"author": {
						"avatar": "img/avatars/user04.png"
					},

					"offer": {
						"title": "Огромный прекрасный дворец",
						"address": "650, 400",
						"price": 870976,
						"type": "palace",
						"rooms": 4,
						"guests": 30,
						"checkin": "12:00",
						"checkout": "13:00",
						"features": ["wifi", "dishwasher", "parking", "washer"],
						"description": "",
						"photos": ["http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel3.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg"]
					},

					"location": {
						"x": 650,
						"y": 400
					}
				},

				{
					"author": {
						"avatar": "img/avatars/user05.png"
					},

					"offer": {
						"title": "Маленький ужасный дворец",
						"address": "1060, 530",
						"price": 813401,
						"type": "palace",
						"rooms": 3,
						"guests": 2,
						"checkin": "13:00",
						"checkout": "14:00",
						"features": ["dishwasher", "washer", "elevator"],
						"description": "",
						"photos": ["http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", "http://o0.github.io/assets/images/tokyo/hotel3.jpg"]
					},

					"location": {
						"x": 1060,
						"y": 530
					}
				},

				{
					"author": {
						"avatar": "img/avatars/user06.png"
					},

					"offer": {
						"title": "Красивый гостевой домик",
						"address": "200, 500",
						"price": 8352,
						"type": "house",
						"rooms": 4,
						"guests": 10,
						"checkin": "14:00",
						"checkout": "12:00",
						"features": ["parking", "washer", "elevator"],
						"description": "",
						"photos": ["http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", "http://o0.github.io/assets/images/tokyo/hotel3.jpg"]
					},

					"location": {
						"x": 200,
						"y": 500
					}
				},

				{
					"author": {
						"avatar": "img/avatars/user07.png"
					},

					"offer": {
						"title": "Некрасивый негостеприимный домик",
						"address": "110, 203",
						"price": 5840,
						"type": "house",
						"rooms": 1,
						"guests": 1,
						"checkin": "13:00",
						"checkout": "13:00",
						"features": ["elevator", "conditioner"],
						"description": "",
						"photos": ["http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel3.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg"]
					},

					"location": {
						"x": 110,
						"y": 203
					}
				},

				{
					"author": {
						"avatar": "img/avatars/user08.png"
					},

					"offer": {
						"title": "Неуютное бунгало по колено в воде",
						"address": "330, 525",
						"price": 57970,
						"type": "bungalo",
						"rooms": 2,
						"guests": 21,
						"checkin": "13:00",
						"checkout": "14:00",
						"features": ["wifi", "parking", "conditioner"],
						"description": "",
						"photos": ["http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", "http://o0.github.io/assets/images/tokyo/hotel3.jpg"]
					},

					"location": {
						"x": 330,
						"y": 525
					}
				}
			],
		mainPinPosition: {
			"x": startScreenPin.offsetLeft,
			"y": startScreenPin.offsetTop
		}
	};
})();