var conf = require('../../conf'),
    mongoose = require('mongoose'),
    db = mongoose.createConnection('mongodb://localhost/' + conf.get('db'));

exports.open = function () {
    return {
        title: "В веб–разработке мы исследователи и изобретатели. — Febox",
        description: "«Febox» это молодая веб-студия, уже достигнувшая немалых результатов в сфере разработки сайтов и брендинга, и при этом неустанно стремящаяся к достижению еще более высоких целей, совершению интеллектуальных открытий и переживанию незабываемых моментов профессиональной жизни.",
        keywords: "создание сайтов, о компании, веб-студия, создание сайтов в дагестане, фирма по разработке сайтов",
        content: "<h2>Hello, world!</h2>"
    }
};

exports.create = function (data) {

    // Schema схема
    var PageSchema = new mongoose.Schema({
        title: {type: String},
        description: {type: String},
        keywords: {type: String},
        url: {type: String},
        content: {type: String},
        date: {type: Date, default: Date.now}
    });

    // Создание модели
    var Page = db.model("Page", PageSchema);

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
            console.log("Страница добавлена");
        }else{
            newUser.speak();
        }
    });

};