var publication = require('../../controllers/publication');

module.exports = function (app) {
    app.get('/api/publication', function (req, res) {
        res.send("Hello");
    });
};