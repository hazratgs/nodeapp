'use strict';

let publication = require('../../controllers/publication');

module.exports = (app) => {
    app.get('/api/publication', (req, res) => res.send("Publication"));
};