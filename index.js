/*!
 * nodeapp
 * Copyright(c) 2017 Hazrat Gadjikerimov
 * MIT Licensed
 */

'use strict';

const express = require('express');
const app = express();

// Путь к корневому каталогу
global.appRoot = require('app-root-path');

// Winston Log
const log = require('./libs/log')(module);

// HTTP Сервер
const server = require('./server');

// Роуты приложения
const routes = require('./routes');

// Отдача статики
app.use(express.static(appRoot + '/public'));
app.use('/static', express.static(appRoot + '/admin/public'));

// Основной роутер
routes(app);

// Запуск сервера
server.create(app);