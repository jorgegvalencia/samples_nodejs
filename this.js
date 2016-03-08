'use strict';

var coche = {
	brand: "Seat",
	model: "Ibiza",
	printCar: function () {
		console.log(this.brand + " " + this.model);
	}
};

var coche2 = {
	brand: "Seat",
	model: "Leon"
}

// coche.printCar();

setTimeout(coche.printCar.bind(coche), 1000);

function decir(f) {
	f(); // en modo estricto el this es undefined ->
	//acceder a la propiedad brand de undefined lanza error de ejecución
}

coche.printCar.call(coche2)

decir(coche.printCar.bind(coche2));