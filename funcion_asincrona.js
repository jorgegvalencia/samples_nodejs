'use strict';

console.log('Empiezo');

var escribeTras2Segundos = function (texto, callback) {
	setTimeout(function () {
		console.log(texto);
		callback();
	}, 2000);
};

escribeTras2Segundos('texto', function () {
	escribeTras2Segundos('texto2', function () {
	console.log('fin');
	})
});