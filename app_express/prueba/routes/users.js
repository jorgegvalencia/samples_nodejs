var express = require('express');
var router = express.Router();
var users = require('../models/users_model');

console.log('users', users);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET users listing. */
router.get('/form', function(req, res, next) {
	users.getUsers(function (err, users) {
  		res.render('user_form', {users: users});
	})
});

module.exports = router;
