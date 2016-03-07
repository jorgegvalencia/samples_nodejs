'use strict';

console.log('Empiezo');

var async = require('async');

var escribeTras2Segundos = function(texto, callback) {
    setTimeout(function() {
        console.log(texto);
        callback();
    }, 500);
};

async.eachSeries([1, 2, 3, 4, 5],
    function(item, next) {
        escribeTras2Segundos(item, function() {
        	var res = item % 2 ? null : 'error';
            next(res); // si parámetro != null => error
        })
    },
    function fin(err) {
        console.log('fin',err);
    }
);
