'use strict';

var fs = require('fs');

function versionModulo(modulo, callback) {
    fs.readFile(modulo + '/package.json', 'utf8', function(err, data) {
        if (err) {
            return callback(err);
        } else {
            var pack = JSON.parse(data);
            var version = pack.version;
            callback(err, version);
        }
    });
}

function readModulesVersion(directory, callback) {
    var files = fs.readdirSync(directory); // returns an array with the files names
    for (var i = 0; i < files.length; i++) {
        var module = directory+'/'+files[i];
        var stats = fs.statSync(module);
        if (stats.isDirectory()) {
            versionModulo(module, callback);
        }
    }
}

readModulesVersion('./node_modules/', function(err, str) {
    if (err) {
        console.error('Hubo un error: ', err);
        return;
    }
    console.log('La versión del módulo es:', str);
});