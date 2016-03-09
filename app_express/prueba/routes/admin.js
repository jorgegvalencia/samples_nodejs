'use strict';

var express = require('express');
var router = express.Router();

// router.get('/', function (request, response, next) {
// 	response.send('Hola Express');
// })

router.get('/', function (request, response) {
	console.log(request.query);
	response.send('Hola Express');
})

router.get('/:id([0-9]+)', function (request, response) {
	console.log(request.params.id);
	response.send('Hola Express');
})

router.get('/:id', function (request, response) {
	console.log(request.params);
	response.send('Hola Express');
})

router.post('', function (request, response) {
	console.log(request.body);
	response.send('Hola Express')
})

module.exports = router;