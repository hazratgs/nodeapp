'use strict';

let conf = require('../../conf'),
    log = require('../../libs/log')(module),
    db = require('../../libs/db'),
    model = require('./model');

// Создание страницы
exports.create = function (param, callback) {
    let newPage = new model.page({
        title: param.title,
        url: param.title
    });

    newPage.save(function (err, newUser) {
        callback(err, newUser);
    });
};

// Поиск страницы
exports.find = function (query, callback) {
    model.page.find({title: /^query/}, function (err, pages) {
        callback(pages);
    });
};