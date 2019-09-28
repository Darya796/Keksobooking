'use strict';

(function () {
    var similarPinTemplate = document.querySelector("template").content.querySelector(".map__pin");
    var similarPinElements = document.querySelector(".map__pins");

    var similarCardTemplate = document.querySelector("template").content.querySelector(".map__card");
    var similarCardsElements = document.querySelector(".map");

    // var getRandomPrice = function (min, max) {
    //     let randomNumber = min + Math.random() * (max - min + 1);
    //     return Math.round(randomNumber);
    // };
    //
    // var getRandomRooms = function (min, max) {
    //     let randomNumber = min + Math.random() * (max - min + 1);
    //     return Math.round(randomNumber);
    // };

    var similarAds = [
        {
            "author": {
                "avatar": "img/avatars/user01.png"
            },

            "offer": {
                "title": "Большая уютная квартира",
                "address": "980, 130",
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
                "x": 980,
                "y": 130
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
                "guests": 5,
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
    ];

    var renderPin = function (pin) {
        var pinElement = similarPinTemplate.cloneNode(true);

        pinElement.style.left = pin.location.x + "px";
        pinElement.style.top = pin.location.y + "px";
        pinElement.querySelector("img").setAttribute("src", pin.author.avatar);
        pinElement.querySelector("img").setAttribute("alt", pin.offer.title);
        return pinElement;
    };

    var fragmentOfPin = document.createDocumentFragment();

    for (var i = 0; i < similarAds.length; i++) {
        fragmentOfPin.appendChild(renderPin(similarAds[i]));
    }

    similarPinElements.appendChild(fragmentOfPin);


    var getTypeOfAccomodation = function (cardElement, type) {
        var typeOfAccomodation = "";

        switch (type) {
            case "palace":
                typeOfAccomodation = "Дворец";
                break;

            case "flat":
                typeOfAccomodation = "Квартира";
                break;

            case "house":
                typeOfAccomodation = "Дом";
                break;

            case "bungalo":
                typeOfAccomodation = "Бунгало";
                break;
        }

        return cardElement.querySelector(".popup__type").textContent = typeOfAccomodation;
    };

    var renderCard = function (card) {
        var cardElement = similarCardTemplate.cloneNode(true);

        cardElement.querySelector(".popup__title").textContent = card.offer.title;
        cardElement.querySelector(".popup__text--address").textContent = card.offer.address;
        cardElement.querySelector(".popup__text--price").textContent = card.offer.price + "₽/ночь";

        getTypeOfAccomodation(cardElement, card.offer.type);


        //  ROOMS / GUESTS
        // cardElement.querySelector(".popup__text--capacity").textContent = card.offer.rooms + " комнат" + r + " для " + card.offer.guests + " гост" + g;
        cardElement.querySelector(".popup__text--capacity").textContent = card.offer.rooms + " комнаты для " + card.offer.guests + " гостей";


        cardElement.querySelector(".popup__text--time").textContent = "Заезд после " + card.offer.checkin + ", выезд до " + card.offer.checkout;


        //  FEATURES


        cardElement.querySelector(".popup__description").textContent = card.offer.description;


        //  PHOTOS


        cardElement.querySelector(".popup__avatar").setAttribute("src", card.author.avatar);


        return cardElement;
    };

    var fragmentOfCard = document.createDocumentFragment();

    for (var j = 0; j < similarAds.length; j++) {
        fragmentOfCard.appendChild(renderCard(similarAds[j]));
    }

    similarCardsElements.insertBefore(fragmentOfCard, similarCardsElements.querySelector(".map__filters-container"));
})();