"use strict";

var http = require('http');
var server = http.createServer( function (request, response) {
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('Hola Mundo!\n');
} );

server.listen(8080, "127.0.0.1");
console.log('Servidor arrancado en http://127.0.0.1:8080');
