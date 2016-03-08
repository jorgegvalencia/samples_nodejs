'use strict';

var fs = require('fs');
var async = require('async');

function readVersion(modulo, callback) {
    fs.readFile(modulo + '/package.json', 'utf8', function(err, data) {
        // cuando haya leido el fichero
        if (err) { // si hay error
            // pasale un error a la funcion de callback
            return callback(err);
        } else {
            // pasale la version a la funcion de callback
            var pack = JSON.parse(data);
            var version = pack.version;
            callback(err, modulo, version);
        }
    });
}

function readModule(modulo, callback) {
    fs.stat(modulo, function(err, stats) {
        if (stats.isDirectory()) { // si es un directorio
            // busca la version y usa este callback cuando acabes
            readVersion(modulo, callback);
        } else {
            callback(err);
        }
    });
}


function readAllModules(directory, files, callback) {
    async.eachSeries(files, // para cada fichero
        function(item, next) {
            var dir = directory + item;
            readModule(dir, callback);
            next();
        },
        function end(err) {
            // console.log('No existe el fichero package.json');
        }
    );
}

function readModulesVersion(directory, callback) {
    fs.readdir(directory, function(err, files) { // lee los ficheros del directorio
        if (err) {
            callback(err);
        } else {
            readAllModules(directory, files, callback); // cuando acabe, pasa los nombres de los ficheros a readAllModules
        }
    });
}

readModulesVersion('./node_modules/', function(err, modulo, str) {
    if (err) {
        console.error('Hubo un error: ', err);
        return;
    }
    console.log('La versión del módulo ' + modulo.replace(/.*node_modules\//, "") + ' es:', str);
});
