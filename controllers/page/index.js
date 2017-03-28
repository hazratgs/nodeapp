'use strict';

let conf = require(appRoot + '/conf'),
    log = require(appRoot + '/libs/log')(module),
    db = require(appRoot + '/libs/db'),
    model = require('./model');

// Создание страницы
exports.create = (param, callback) => {
    let newPage = new model.page({
        title: param.title,
        url: param.title
    });

    newPage.save((err, newUser) => {
        callback(err, newUser);
    });
};

// Поиск страницы
exports.find = (query, callback) => {
    model.page.find({title: /^query/}, (err, pages) => {
        callback(pages);
    });
};