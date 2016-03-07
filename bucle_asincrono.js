'use strict';

console.log('Empiezo');

var escribeTras2Segundos = function(texto, callback) {
    setTimeout(function() {
        console.log(texto);
        callback();
    }, 500);
};

function serie(arr, fn) {
    if (arr.length == 0) {
        console.log('fin');
        return;
    }
    fn(arr.shift(), function() {
        serie(arr, fn);
    });
}
serie([1, 2, 3, 4, 5], escribeTras2Segundos);
