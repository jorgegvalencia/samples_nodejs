'use strict';

function conArroz(plato) {
    return new Promise(function(resolve, reject) {
        resolve(plato + ' arroz,');
    });
}

function conAjo(plato) {
    return new Promise(function(resolve, reject) {
        resolve(plato + ' ajo,');
    });
}

function conSal(plato) {
    return new Promise(function(resolve, reject) {
        resolve(plato + ' sal,');
    });
}

function conIngrediente(plato, ingrediente) {
    return new Promise(function(resolve, reject) {
        resolve(plato + ' ' + ingrediente + ',');
    });
}

var paella = 'paella con';

conArroz(paella)
    .then(conAjo)
    .then(conSal)
    .then(function(plato) {
        return conIngrediente(plato, 'calamares');
    })
    .then(function(plato) {
        return conIngrediente(plato, 'gambas');
    })
    .then(function(plato) {
        console.log('plato:', (plato + '.').replace(",\.", "."));
    })
    .catch(function(err) {
        console.log(err);
    });
