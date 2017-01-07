var controllers = require('./controllers'),
    myApp = require('../app'),
    admin = require('../admin');

// Основной роутер
module.exports = function (app) {

    // Отдаем сайт
    app.get('/', myApp.run);

    // Отдаем админ-панель
    app.get('/admin', admin.run);

    // RESTful controllers
    controllers(app);

    // Если нет обработчиков, 404
    app.get('*', function (req, res) {
        res.status(404).send("<h1>Page Not found</h1>");
    });
};