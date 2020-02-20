'use strict';

(function () {
	var similarCardTemplate = document.querySelector("template").content.querySelector(".map__card");

	var accomodationTypeMap = {
		"palace": "Дворец",
		"flat": "Квартира",
		"house": "Дом",
		"bungalo": "Бунгало"
	};

	var getTypeOfAccomodation = function (cardTemplate, type) {
		cardTemplate.querySelector(".popup__type").textContent = accomodationTypeMap[type];
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



	window.card = {
		addingCard: function (ad) {
			fragmentOfCard.appendChild(renderCard(ad));

		},
		show: function (target, sibling) {
			target.insertBefore(fragmentOfCard, sibling);
		}
	};
})();