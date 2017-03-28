/*!
 * nodeapp
 * Copyright(c) 2017 Hazrat Gadjikerimov
 * MIT Licensed
 */

'use strict';

const express = require('express');
const app = express();

// Winston Log
const log = require('./libs/log')(module);

// HTTP Сервер
const server = require('./server');

// Роуты приложения
const routes = require('./routes');

// Отдача статики
app.use(express.static(process.cwd() + '/public'));

// Основной роутер
routes(app);

// Запуск сервера
server.create(app);