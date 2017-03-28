'use strict';

let navigation = require('../../controllers/navigation');

module.exports = (app) => {
    app.get('/api/navigation', function (req, res) {
        res.send("Hello");
    });
};