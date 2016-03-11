'use strict';

var basicauth = require('basic-auth');

var auth = function(username, pass) {
    return function(req, res, next) {
        var user = basicauth(req);
        console.log('user', user);
        if (!user || user.name !==  username || user.pass !== pass) {
            res.set('WWW-Authenticate', 'Basic realm=Authorization Required')
            res.send(401);
            return;
        }
        next();
    };
}

module.exports = auth;
