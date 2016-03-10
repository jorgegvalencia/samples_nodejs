'use strict';

var conn = require('../lib/mongooseManager');
var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    name: String,
    age: Number
});

userSchema.statics.list = function(cb) {
    var query = User.find({});
    // query.sort('name');
    // query.skip(500);
    // query.limit(100);
    query.select('name age');
    return query.exec(function(err, rows) {
        if (err) {
            return cb(err);
        }
        return cb(null, rows);
    })
};

var User = mongoose.model('usuarios', userSchema); // el nombre del modelo debe coincidir con la colección de la base de datos

// metodos del modelo
// var usersList = {
//     getUsers: function(cb) {
//        userSchema.statics.list(cb);
//     }
// }

// module.exports = usersList;
