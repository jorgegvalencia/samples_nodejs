var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET users listing. */
router.get('/form', function(req, res, next) {
	var User = mongoose.model('usuarios');
	User.list(function (err, rows) {
		if(err){
			console.log(err);
			return;
		}
		res.render('user_form', {users: rows})
		// return;
	});
});

module.exports = router;
