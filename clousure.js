'use strict';

function creaAgente(_edad) {
    var edad = _edad;
    return {
        dimeEdad: function() {
        	console.log('Tengo '+ edad + ' años');
            return edad;
        }
    }
}

var agente = creaAgente(30);
var smith = creaAgente(22);

// console.log(agente.dimeEdad(), smith.dimeEdad());

setTimeout(agente.dimeEdad, 1000)
setTimeout(smith.dimeEdad, 1000)