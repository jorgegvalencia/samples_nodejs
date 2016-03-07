'use strict';

var fs = require('fs');

function versionModulo(modulo, callback) {
    fs.readFile('./node_modules/' + modulo + '/package.json', 'utf8', function(err, data) {
        if (err) {
            return callback(err);
        } else {
            var pack = JSON.parse(data);
            var version = pack.version;
            callback(err, version);
        }
    });
}

versionModulo('assnc', function(err, str) {
    if (err) {
        console.error('Hubo un error: ', err);
        return;
    }
    console.log('La versión del módulo es:', str);
})
