'use strict';

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
// var basicauth = require('basic-auth');
var auth = require('../../../lib/auth');

var User = mongoose.model('usuarios');

// router.use(auth('admin', 'pass2'));

/* GET users listing. */
router.get('/', auth('admin', 'pass'), function(req, res) {

    User.list(function(err, rows) {
        if (err) {
            res.json({ result: false, err: err });
            return;
        }
        res.json({ result: true, rows: rows });
    })
});

router.post('/', function(req, res) {
    var usuario = new User(req.body);
    usuario.save(function(err, created) {
        if (err) {
            res.json({ result: false, err: err });
            return;
        }
        res.json({ result: true, row: created });
        console.log('Usuario ' + created.name + ' de edad ' + created.age + ' creado.');
    });
})

router.put('/:id', function(req, res) {
    User.update({ _id: req.params.id}, { $set: req.body }, {}, function (err, updated) {
    	// { multi: true }
    	if (err) {
            res.json({ result: false, err: err });
            return;
        }
        res.json({ result: true, row: updated });
        console.log('Usuario ' + updated.name + ' de edad ' + updated.age + ' actualizado.');
    })
})


module.exports = router;