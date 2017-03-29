'use strict';

const path = process.cwd();

const conf = require(path + '/conf'),
    log = require(path + '/libs/log')(module),
    db = require(path + '/libs/db'),
    model = require('../models/page');

/* Создание страницы */
exports.create = (param, callback) => {
    let newPage = new model.page({
        title: param.title,
        url: param.title
    });

    newPage.save((err, newUser) => {
        callback(err, newUser);
    });
};

/* Поиск страницы */
exports.find = (query, callback) => {
    model.page.find({title: /^query/}, (err, pages) => {
        callback(pages);
    });
};

/* Функция для теста */
exports.test = (x, y) => {
    return x * y;
}