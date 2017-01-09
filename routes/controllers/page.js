let page = require('../../controllers/page'),
    url = require('url');

module.exports = function (app) {

    app.get('/api/page/open', function (req, res) {
        res.send(page.open());
    });

    // Добавление новой страницы
    app.get('/api/page/create', function (req, res) {
        let param = url.parse(req.url, true).query;

        if (param.title){
            page.create(param, function (err, data) {
                if (err){
                    res.status(500).json({
                        "ok": false,
                        "error_code": 500,
                        "description": "Возникла ошибка при добавлении"});
                } else {
                    res.json({
                        "ok": true,
                        "result": "Страница добавлена"
                    });
                }
            });
        } else {
            res.status(500).json({
                "ok": false,
                "error_code": 500,
                "description": "Нет необходимых данных"
            });
        }
    });

    // Поиск страницы
    app.get('/api/page/find', function (req, res) {
        let param = url.parse(req.url, true).query;

        if (param.q){
            page.find(param.q, function (data) {
                res.json({"ok": true, "result": data});
            });
        } else {
            res.status(500).json({
                "ok": false,
                "error_code": 500,
                "description": "Нет необходимых данных"
            });
        }
    });

};