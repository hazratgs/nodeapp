'use strict';

let setting = require('../../controllers/setting');

module.exports = function (app) {
    app.get('/api/setting', (req, res) => res.send("Setting"));
};