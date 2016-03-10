'use strict';

var client = require('mongodb').MongoClient;
var dbconnection = {
    db: null
}

client.connect('mongodb://localhost:27017/expressdb', function(err, db) {
    if (err) {
        console.log(err);
        process.exit(-1);
    } else {
        dbconnection.db = db;
    }
})

module.exports = dbconnection;
