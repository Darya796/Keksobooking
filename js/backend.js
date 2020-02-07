'use strict';

(function () {
	window.backend = {
		download: function (onLoad, onError) {
			var URL = "https://js.dump.academy/keksobooking/data";

			var xhr = new XMLHttpRequest();
			xhr.responseType = "json";
			xhr.open("GET", URL);

			xhr.addEventListener("load", function () {
				if(xhr.status === 200) {
					onLoad(xhr.response);
					// console.log(xhr.response);
				}
				else {
					// console.log(xhr.response);
					onError("Статус ответа: " + xhr.status + " " + xhr.statusText);
				}
			});

			//  ДЛЯ 50Х ОШИБОК (НА СЕРВЕРЕ)
			xhr.addEventListener("error", function () {
				onError("Внутренняя ошибка сервера");
			});

			xhr.addEventListener("timeout", function () {
				onError("Запрос не успел выполниться за " + xhr.timeout + "мс");
			});
			xhr.send();
		},

		upload: function (data, onLoad, onError) {
			var URL = "https://js.dump.academy/keksobooking";

			var xhr = new XMLHttpRequest();
			xhr.responseType = "json";

			xhr.addEventListener("load", function () {

				if(xhr.status === 200) {
					onLoad();
				}
				else {
					onError("Статус ответа: " + xhr.status + " " + xhr.statusText);
				}
			});

			//  ДЛЯ 50Х ОШИБОК (НА СЕРВЕРЕ)
			xhr.addEventListener("error", function () {
				onError("Внутренняя ошибка сервера");
			});

			xhr.addEventListener("timeout", function () {
				onError("Запрос не успел выполниться за " + xhr.timeout + "мс");
			});

			xhr.open("POST", URL);
			xhr.send(data);
		}
	};
})();