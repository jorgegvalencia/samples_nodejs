'use strict';

var conn = require('../lib/mongooseManager');
var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    name: String,
    age: Number
});

mongoose.model('usuarios', userSchema); // el nombre del modelo debe coincidir con la colección de la base de datos

// metodos del modelo
var usersList = {
    getUsers: function(cb) {
        var User = mongoose.model('usuarios');
        User.find({}, function(err, datos) {
            if (err) {
                cb(err);
                return;
            }
            cb(null, datos);
            // return;
        })
    }
}

module.exports = usersList;
