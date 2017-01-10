/*!
 * nodeapp
 * Copyright(c) 2017 Hazrat Gadjkerimov
 * MIT Licensed
 */

'use strict';

let express = require('express');
let app = express();
let path = require('path');

// Кастомный Log
let log = require('./libs/log')(module);

// Конфигурация приложения
let conf = require('./conf');

// MongoDB
let db = require('./libs/db');

// HTTP Сервер
let server = require('./server');

// Роуты приложения
let routes = require('./routes');

// Отдача статики
app.use(express.static('public'));

// Основной роутер
routes(app);

// Запуск сервера
server.run(app);