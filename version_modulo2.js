'use strict';

var fs = require('fs');

function versionModulo(modulo, callback) {
    fs.readFile(modulo + '/package.json', 'utf8', function(err, data) {
        // cuando haya leido el fichero
        if (err) { // si hay error
            // pasale un error a la funcion de callback
            return callback(err);
        } else {
            // pasale la version a la funcion de callback
            var pack = JSON.parse(data);
            var version = pack.version;
            callback(err, version);
        }
    });
}

var async = require('async');

function readModulesVersion(directory, callback) {
    fs.readdir(directory, function(err, files) { // lee los ficheros del directorio
        readAllModulesSync(directory, files, callback); // cuando acabe, pasa los nombres de los ficheros a readAllModules
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

function readAllModulesSync(directory, files, callback) {
    for(var i in files){
        var dir = directory + files[i];
        readModule(dir, callback);
    }
}

function readModule(dirModulo, callback) {
    var stats = fs.statSync(dirModulo); // comprueba el fichero
    if (stats.isDirectory()) { // si es un directorio
        // busca la version y usa este callback cuando acabes
        versionModulo(dirModulo, callback);
    } else {
        callback(err);
    }
}


readModulesVersion('./node_modules/', function(err, str) {
    if (err) {
        console.error('Hubo un error: ', err);
        return;
    }
    console.log('La versión del módulo es:', str);
});
