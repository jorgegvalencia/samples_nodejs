'use strict';

var sleep = function(ms) {

    var ms = 1000;

    var promesa = new Promise(function(resolve, reject) {
        setTimeout(function() {
            if (ms % 2 !== 0) { // if err
                reject(new Error('Fatal'));
                return;
            }
            resolve({ name: 'EEEEEE' });
            return;
        }, ms);
    });

    return promesa;
}

console.log('Voy a dormir');
var promesa = sleep();
console.log(promesa);

promesa
    .then(function(datos) {
        console.log('Ya he dormido', datos);
    })
    .catch(function(err) {
        console.error('ERROR', err);
    })
