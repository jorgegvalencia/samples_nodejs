'use strict';

var objeto = {
	vuela: function() {
		console.log('volando voy');
	}
};

module.exports = objeto;

// 'exports' es un alias de module.exports
// si le asignamos algo nos cargamos el alias

/*
module.exports = {
	objeto1: objeto,
	objeto2: {
	nada: function () { console.log('texto');}
	}
}
*/