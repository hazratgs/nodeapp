'use strict';

let setting = require('../../controllers/setting');

module.exports = function (app) {
    app.get('/api/setting', function (req, res) {
        res.send("Hello");
    });
};