var page = require('../../controllers/page');

module.exports = function (app) {
    app.get('/api/page', function (req, res) {
        res.send(page.page());
    });
};