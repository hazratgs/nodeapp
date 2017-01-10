'use strict';

let conf = require(appRoot + '/conf'),
    log = require(appRoot + '/libs/log')(module),
    db = require(appRoot + '/libs/db'),
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