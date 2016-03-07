'use strict';

// cargar libreria
var fs = require('fs');

// leer fichero de texto en utf-8 y sacar en consola
// su contenido

// If options is a string, then it specifies the encoding.
fs.readFile('./package.json', { encoding: 'utf8' }, function(err, data) {
    // si no ha habido ningun error err será undefined, que evalúa a falso
    if (err) {
        return console.log('ERROR: ', err);
    }
    var pack = JSON.parse(data);
    console.log(pack);
    console.log('FIN');
});
