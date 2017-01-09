var conf = require('../../conf'),
    log = require('../../libs/log')(module),
    db = require('../../libs/db'),
    schema = require('./schema');

// Создание страницы
exports.create = function (data) {

    // Модель
    var Page = db.connect.model("Page", schema.PageSchema);

    // Экземпляр модели
    var newPage = new Page({
        title: data.title,
        url: data.url
    });

    // Сохранение
    newPage.save(function (err, newUser) {
        if (err){
            log.debug("Возникла ошибка при добавлении NewPage");
        } else {
            log.info("Страница добавлена");
        }
    });

    return true;
};

// Поиск страницы
exports.find = function (find, callback) {
    var Page = db.connect.model("Page", schema.PageSchema);

    Page.find(function (err, pages) {
        callback(pages);
    });
};