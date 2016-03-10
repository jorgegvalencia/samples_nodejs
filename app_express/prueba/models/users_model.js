'use strict';

var mongomanager = require('../lib/mongooseManager');

// metodos del modelo
var usersList = {
	getUsers: function (cb) {
		// leer datos
		mongomanager.db.collection('usuarios').find({}).toArray(function (err, usuariosLeidos) {
			if(err){
				return cb(err);
			}
			cb(null, usuariosLeidos);
			console.dir(usuariosLeidos);
			// return
		});
	} 
}

module.exports = usersList;