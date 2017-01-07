var express = require('express'),
    app = express(),
    server = require('./server'),
    routes = require('./routes'),
    conf = require('./conf');

// Отдача статики
app.use(express.static('public'));

// Основной роутер
routes(app);

// Запуск сервера
server.run(app);