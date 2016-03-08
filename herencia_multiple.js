'use strict';

var extend = require('util')._extend;
var events = require('events');
// var util = require('util');

var Persona = function(name) {
    this.name = name;
}

var Suscriptor = function (name) {
	Persona.call(this,name); // super() del constructor de Persona
}

// Hacemos que suscriptor herede de persona y de EventEmitter
Suscriptor.prototype = new Persona();
Suscriptor.prototype = extend(Suscriptor.prototype, events.EventEmitter.prototype);
// util.inherits(Suscriptor,events.EventEmitter);

// Creamos un suscriptor
var suscriptor = new Suscriptor('anakin');

// suscriptor.cambiarNombre('error porque suscriptor no tiene el metodo cambiar nombre');

// Y añadimos funcionalidad a la 'clase' Persona
Persona.prototype.cambiarNombre = function(newName) {
    this.name = newName;
};

// Al heredar de EventEmitter la 'clase' suscriptor puede recibir y emitir eventos
suscriptor.on('espada laser', function (data) {
	console.log('swwwsssnn', data);
})

console.log(suscriptor.name);
suscriptor.cambiarNombre('darth vader');
console.log(suscriptor.name);
suscriptor.emit('espada laser', {fraseEpica: 'yo soy tu padre'});

process.on('exit', function () {
	suscriptor.emit('espada laser', 'la peli termina');
});