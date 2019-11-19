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

    // var getRandomRooms = function (min, max) {
    //     let randomNumber = min + Math.random() * (max - min + 1);
    //     return Math.round(randomNumber);
    // };

    var SIMILAR_ADS = [
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

    // for (let i = 0; i < SIMILAR_ADS.length; i++) {
    //     fragmentOfPin.appendChild(renderPin(SIMILAR_ADS[i]));
    // }

    // similarPinElements.appendChild(fragmentOfPin);

    var getTypeOfAccomodation = function (cardTemplate, type) {
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

        return cardTemplate.querySelector(".popup__type").textContent = typeOfAccomodation;
    };

    var getFeaturesList = function (card, cardTemplate) {
        var featuresList = cardTemplate.querySelector(".popup__features");

        for (let i = featuresList.children.length - 1; i >= 0; i--) {
            var child = featuresList.children[i];
            child.parentElement.removeChild(child);
        }

        for (let i = 0; i < card.offer.features.length; i++) {
            var featureElement = document.createElement("li");
            featureElement.classList.add("feature");
            featureElement.classList.add("feature--" + card.offer.features[i]);
            featuresList.appendChild(featureElement);
        }
    };

    var getPhotosList = function (card, cardTemplate) {
        var photosList = cardTemplate.querySelector(".popup__pictures");
        var similarPhotoElement = photosList.querySelector("li");
        photosList.removeChild(photosList.querySelector("li"));
        var photosFragment = document.createDocumentFragment();

        for (let i = 0; i < card.offer.photos.length; i++) {
            var photoElement = similarPhotoElement.cloneNode(true);
            photoElement.querySelector("img").setAttribute("src", card.offer.photos[i]);
            photosFragment.appendChild(photoElement);
        }
        photosList.appendChild(photosFragment);
    };

    var getPluralForm = function (number, wordsForms) {
        number = Math.abs(number) % 100;
        var number1 = number % 10;

        if (number > 10 && number < 20) {
            return wordsForms[2];
        }
        if (number1 > 1 && number1 < 5) {
            return wordsForms[1];
        }
        if (number1 === 1) {
            return wordsForms[0];
        }
        return wordsForms[2];
    };

    var renderCard = function (card) {
        var cardElement = similarCardTemplate.cloneNode(true);

        cardElement.querySelector(".popup__title").textContent = card.offer.title;
        cardElement.querySelector(".popup__text--address").textContent = card.offer.address;
        cardElement.querySelector(".popup__text--price").textContent = card.offer.price + "₽/ночь";

        getTypeOfAccomodation(cardElement, card.offer.type);

        cardElement.querySelector(".popup__text--capacity").textContent = card.offer.rooms + ' ' + getPluralForm(card.offer.rooms, ['комната', 'комнаты', 'комнат']) + " для " + card.offer.guests + ' ' + getPluralForm(card.offer.guests, ['гостя', 'гостей', 'гостей']);

        cardElement.querySelector(".popup__text--time").textContent = "Заезд после " + card.offer.checkin + ", выезд до " + card.offer.checkout;

        getFeaturesList(card, cardElement);

        cardElement.querySelector(".popup__description").textContent = card.offer.description;

        cardElement.querySelector(".popup__avatar").setAttribute("src", card.author.avatar);

        getPhotosList(card, cardElement);

        return cardElement;
    };

    var fragmentOfCard = document.createDocumentFragment();

    // for (let i = 0; i < SIMILAR_ADS.length; i++) {
    //     fragmentOfCard.appendChild(renderCard(SIMILAR_ADS[i]));
    // }

    // similarCardsElements.insertBefore(fragmentOfCard, similarCardsElements.querySelector(".map__filters-container"));

    /*------------------------------------------------------------------------------------*/
    /*------------------------------------------------------------*/

    var startScreenPin = document.querySelector(".map__pin--main");
    var noticeForm = document.querySelector(".notice__form");
    var formFieldset = noticeForm.querySelectorAll("fieldset");
    var AdressField = noticeForm.querySelector("#address");

    /*------------------------------------------------------------*/
    var PIN_SIZE = {
        "width": startScreenPin.offsetWidth,
        "height": startScreenPin.offsetHeight,
        "startLocation": {
            "x": startScreenPin.offsetLeft + (startScreenPin.offsetWidth / 2),
            "y": startScreenPin.offsetTop + (startScreenPin.offsetHeight / 2)
        }
    };

    AdressField.value = PIN_SIZE.startLocation.x + ", " + PIN_SIZE.startLocation.y;
    /*------------------------------------------------------------*/
    var pinButtons;

    startScreenPin.addEventListener("mouseup", function () {
        similarCardsElements.classList.remove("map--faded");
        noticeForm.classList.remove("notice__form--disabled");
        for (let i = 0; i < formFieldset.length; i++) {
            formFieldset[i].removeAttribute("disabled");
        }

        for (let i = 0; i < SIMILAR_ADS.length; i++) {
            fragmentOfPin.appendChild(renderPin(SIMILAR_ADS[i]));
        }
        similarPinElements.appendChild(fragmentOfPin);

        /*-----------------------------------------*/
        AdressField.value = (startScreenPin.offsetLeft + (startScreenPin.offsetWidth / 2)) + ", " + (startScreenPin.offsetTop + startScreenPin.offsetWidth + 17);

        pinButtons = similarPinElements.querySelectorAll(".map__pin");

        for (let i = 1; i < pinButtons.length; i++) {
            pinButtons[i].addEventListener("click", showCard);
        }
    });


    var showCard = function () {
        var allAds = similarCardsElements.querySelectorAll(".map__card");
        for (let k = 0; k < allAds.length; k++) {
            similarCardsElements.removeChild(allAds[k]);
        }


        let clickedPinLocation = this.offsetLeft + ", " + this.offsetTop;

        for (let j = 0; j < SIMILAR_ADS.length; j++) {
            let location = SIMILAR_ADS[j].location.x + ", " + SIMILAR_ADS[j].location.y;

            if (location === clickedPinLocation) {
                fragmentOfCard.appendChild(renderCard(SIMILAR_ADS[j]));
            }

        }

        similarCardsElements.insertBefore(fragmentOfCard, similarCardsElements.querySelector(".map__filters-container"));
    };

    /*------------------------------------------------------------*/
    /*------------------------------------------------------------------------------------*/

    var accomodationTypeOptions = noticeForm.querySelector("#type");
    var accomodationPrice = noticeForm.querySelector("#price");

    var onTypeChange = function () {
        for (let i = 0; i < accomodationTypeOptions.children.length; i++) {
            if (accomodationTypeOptions.children[i].selected) {
                switch (accomodationTypeOptions.children[i].value) {
                    case "flat":
                        accomodationPrice.placeholder = "1000";
                        accomodationPrice.min = "1000";
                        break;

                    case "bungalo":
                        accomodationPrice.placeholder = "0";
                        accomodationPrice.min = "0";
                        break;

                    case "house":
                        accomodationPrice.placeholder = "5000";
                        accomodationPrice.min = "5000";
                        break;

                    case "palace":
                        accomodationPrice.placeholder = "10000";
                        accomodationPrice.min = "10000";
                        break;

                    default:
                        accomodationPrice.placeholder = "0";
                        accomodationPrice.min = "0";
                }
            }
        }

    };

    accomodationTypeOptions.addEventListener("change", onTypeChange);
    /*------------------------------------------------------------------------------------*/
    /*------------------------------------------------------------*/

    var timeIn = noticeForm.querySelector("#timein");
    var timeOut = noticeForm.querySelector("#timeout");

    var onTimeInChange = function () {
        var choosenTime = 0;

        for (let i = 0; i < timeIn.children.length; i++) {
            if (timeIn.children[i].selected) {
                choosenTime = timeIn.children[i].value;
            }
        }
        for (let i = 0; i < timeOut.children.length; i++) {
            if (timeOut.children[i].value === choosenTime) {
                timeOut.children[i].selected = true;
            }
        }
    };
    var onTimeOutChange = function () {
        var choosenTime = 0;

        for (let i = 0; i < timeOut.children.length; i++) {
            if (timeOut.children[i].selected) {
                choosenTime = timeOut.children[i].value;
            }
        }
        for (let i = 0; i < timeIn.children.length; i++) {
            if (timeIn.children[i].value === choosenTime) {
                timeIn.children[i].selected = true;
            }
        }
    };

    timeIn.addEventListener("change", onTimeInChange);
    timeOut.addEventListener("change", onTimeOutChange);

    /*------------------------------------------------------------*/
    /*------------------------------------------------------------------------------------*/

    var resetFormBtn = noticeForm.querySelector(".form__reset");
    var resetForm = function() {
        similarCardsElements.classList.add("map--faded");
        noticeForm.classList.add("notice__form--disabled");
        for (let i = 0; i < formFieldset.length; i++) {
            formFieldset[i].setAttribute("disabled", "disabled");
        }

        for(let i = 1; i < pinButtons.length; i++) {
            pinButtons[i].remove();
        }

        document.querySelector(".map__card.popup").remove();

        AdressField.value = PIN_SIZE.startLocation.x + ", " + PIN_SIZE.startLocation.y;

    };

    resetFormBtn.addEventListener("click", resetForm);
})();