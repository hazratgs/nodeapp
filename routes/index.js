var page = require('../controllers/page');

// Основной роутер
module.exports = function (app) {

    // Отдаем сайт
    app.get('/', function (req, res) {
        res.send("Отдан сайт");
    });

    // Отдаем админ-панель
    app.get('/dashboard', function (req, res) {
        res.send("Отдан админ-панель");
    });

    // Page Routes
    app.get('/page', function (req, res) {
        res.send(page.page());
    });

    // Publication Routes
};