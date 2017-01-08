// Mongo DB
var mongoose = require('mongoose'),
    conf = require('../conf'),
    log = require('./log')(module);

mongoose.connect(conf.get('mongoose:uri'));
var db = mongoose.connection;

db.on('error', function (err) {
    log.error('connection error:', err.message);
});
db.once('open', function callback () {
    log.info("Connected to DB!");
});

// MongoDB
exports.mongoose = mongoose;

// This DB
exports.connect = db;