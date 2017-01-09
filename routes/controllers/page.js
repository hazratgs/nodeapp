var page = require('../../controllers/page'),
    url = require('url');

module.exports = function (app) {

    app.get('/api/page/open', function (req, res) {
        res.send(page.open());
    });

    // Добавление новой страницы
    app.get('/api/page/create', function (req, res) {
        var query = url.parse(req.url, true).query;

        if (query.title && query.url){
            res.json({"ok": true, "result": page.create(query)});
        } else {
            res.status(500).json({"ok": false, "error_code": 500, "description": "Нет необходимых данных"});
        }
    });

    app.get('/api/page/find', function (req, res) {
        var query = url.parse(req.url, true).query;

        page.find(query.q, function (data) {
            res.json({"ok": true, "result": data});
        });
    });

};