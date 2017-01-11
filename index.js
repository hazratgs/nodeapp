/*!
 * nodeapp
 * Copyright(c) 2017 Hazrat Gadjikerimov
 * MIT Licensed
 */

'use strict';

let express = require('express');
let app = express();
let path = require('path');
let telegramBot = require('./libs/telegamBot');

// App root
global.appRoot = require('app-root-path');

// Кастомный Log
let log = require('./libs/log')(module);

// HTTP Сервер
let server = require('./server');

// Роуты приложения
let routes = require('./routes');

// Отдача статики
app.use(express.static(appRoot + '/public'));
app.use('/static', express.static(appRoot + '/admin/public'));

// Основной роутер
routes(app);

// Запуск сервера
server.run(app);