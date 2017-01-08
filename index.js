// Express
var express = require('express'),
    app = express(),
    path = require('path');

// Кастомный Log
var log = require('./libs/log')(module);

// Конфигурация приложения
var conf = require('./conf');

// MongoDB
var db = require('./libs/db');

// HTTP Сервер
var server = require('./server');

// Роуты приложения
var routes = require('./routes');

// Отдача статики
app.use(express.static('public'));

// Основной роутер
routes(app);

// Запуск сервера
server.run(app);