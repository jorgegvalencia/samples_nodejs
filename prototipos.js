'use strict';

var Persona = function(name) {
    this.name = name;
}

var persona = new Persona('Luis');

console.log(persona.name);

Persona.prototype.cambiarNombre = function(newName) {
    console.log(this);
    this.name = newName;
};

persona.cambiarNombre('Pepe');

console.log(persona.name);

// HERENCIA 

var Agente = function(name) {
	Persona.call(this,name); // super() del constructor de Persona
	// los agentes son iguales que las personas (mismos atributos y metodos iniciales)
	// pero no hay relaccion de herencia
}
// persona = new Object();
Agente.prototype = persona; // asigna una referencia al objeto padre
// hereda los metodos y propiedades del objeto padre

var agente = new Agente('agente');
console.log(agente.name);

// Agente.prototype.cambiarNombre = undefined;
// agente.cambiarNombre('Fallo');
// console.log(agente.name);