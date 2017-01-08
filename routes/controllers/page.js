var page = require('../../controllers/page');

module.exports = function (app) {
    app.get('/api/page/open', function (req, res) {
        res.send(page.open());
    });
};