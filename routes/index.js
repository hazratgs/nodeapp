'use strict';

const controllers = require('./controllers');
const bot = require('../libs/telegamBot');
const conf = require('../conf/index');
const log = require('../libs/log')(module);

module.exports = (app) => {

    // Отдаем html
    app.get('/', (req, res) => res.sendFile(appRoot + '/public/index.html'));

    // RESTful controllers
    controllers(app);

    // Если нет обработчиков, 404
    app.use((req, res, next) => {
        res.status(404);
        log.debug('Not found URL: %s',req.url);
        res.send({"ok": false, "error_code": 404, "description": "Not found"});
    });

    app.use((err, req, res, next) => {
        res.status(err.status || 500);
        log.error('Internal error(%d): %s',res.statusCode,err.message);
        res.send({"ok": false, "error_code": 500, "description": err.message});

        // Оповещаем разработчика об ошибке
        bot.sendMessage(conf.get('telegram:user'), err.message);
    });
};