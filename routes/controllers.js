var navigation = require('../controllers/navigation'),
    page = require('../controllers/page'),
    publication = require('../controllers/publication'),
    setting = require('../controllers/setting'),
    user = require('../controllers/setting');

module.exports = function (app) {

    app.get('/api/page:id', function (req, res) {
        res.send(page.page());
    });

};