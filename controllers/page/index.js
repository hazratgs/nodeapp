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
        description: data.description,
        keywords: data.keywords,
        url: data.url,
        content: data.content
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
exports.find = function (id) {
    var Page = db.connect.model("Page", schema.PageSchema);
    var result = [];

    Page.find(function (err, pages) {
        for (var i in pages){
            result.push(pages[i].title);
        }
    });

    return result;
};