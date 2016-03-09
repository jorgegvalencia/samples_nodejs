'use strict';

// datos
var users = [
{
	name: 'Will',
	age: 30
},
{
	name: 'Smith',
	age: 54
}
]

// metodos del modelo
var usersList = {
	getUsers: function (cb) {
		// leer datos
		var usuariosLeidos;
		cb(null, usuariosLeidos);
	} 
}

module.exports = usersList;