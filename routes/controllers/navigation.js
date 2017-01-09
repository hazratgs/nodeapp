let navigation = require('../../controllers/navigation');

module.exports = function (app) {
    app.get('/api/navigation', function (req, res) {
        res.send("Hello");
    });
};