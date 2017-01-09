let user = require('../../controllers/user');

module.exports = function (app) {
    app.get('/api/user', function (req, res) {
        res.send("Hello");
    });
};