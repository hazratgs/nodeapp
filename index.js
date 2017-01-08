// Express
var express = require('express'),
    app = express();

// Конфигурация приложения
var conf = require('./conf');

// Mongo DB
var mongoose = require('mongoose'),
    db = mongoose.createConnection('mongodb://localhost/' + conf.get('db'));

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function callback () {
    console.log("Connected!")
});

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