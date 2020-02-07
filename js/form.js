'use strict';

(function () {
	var map = document.querySelector(".map");
	var noticeForm = document.querySelector(".notice__form");
	var accomodationTypeSelect = noticeForm.querySelector("#type");
	var accomodationPrice = noticeForm.querySelector("#price");
	var formFieldset = noticeForm.querySelectorAll("fieldset");

	var onTypeChange = function () {
		for (let i = 0; i < accomodationTypeSelect.children.length; i++) {
			if (accomodationTypeSelect.children[i].selected) {
				switch (accomodationTypeSelect.children[i].value) {
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

	accomodationTypeSelect.addEventListener("change", onTypeChange);
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
	var AdressField = noticeForm.querySelector("#address");

	var resetForm = function () {
		map.classList.add("map--faded");
		noticeForm.classList.add("notice__form--disabled");
		setTimeout(function () {
			for (let i = 0; i < formFieldset.length; i++) {
				formFieldset[i].setAttribute("disabled", "disabled");
			}

			AdressField.value = window.data.mainPinPosition.x + ", " + window.data.mainPinPosition.y;
		}, 1);

		window.map.inactive();

		// document.querySelector(".map__card.popup").remove();

	};

	resetFormBtn.addEventListener("click", resetForm);

	window.form = {
		activate: function () {
			noticeForm.classList.remove("notice__form--disabled");
			for (var i = 0; i < formFieldset.length; i++) {
				formFieldset[i].removeAttribute("disabled");
			}
		}
	};


	/*--------------------------------------------------------------------------------*/
	/*  ОТПРАВКА ДАННЫХ ИЗ ФОРМЫ  */

	var onLoad = function () {
		noticeForm.reset();
		resetForm();
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

	noticeForm.addEventListener("submit", function (evt) {
		evt.preventDefault();
		window.backend.upload(new FormData(noticeForm), onLoad, onError);
	});
})();