'use strict';

let user = require('../../controllers/user');

module.exports = function (app) {
    app.get('/api/user', (req, res) => res.send("User"));
};