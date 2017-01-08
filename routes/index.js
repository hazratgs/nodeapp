var controllers = require('./controllers'),
    myApp = require('../app'),
    admin = require('../admin');

var log = require('../libs/log')(module);

// Основной роутер
module.exports = function (app) {

    // Отдаем сайт
    app.get('/', myApp.run);

    // Отдаем админ-панель
    app.get('/admin', admin.run);

    // RESTful controllers
    controllers(app);

    // Если нет обработчиков, 404
    app.use(function(req, res, next){
        res.status(404);
        log.debug('Not found URL: %s',req.url);
        res.send({ error: 'Not found' });
    });

    app.use(function(err, req, res, next){
        res.status(err.status || 500);
        log.error('Internal error(%d): %s',res.statusCode,err.message);
        res.send({ error: err.message });
    });
};