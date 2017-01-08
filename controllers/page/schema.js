var db = require('../../libs/db');

// Schema страниц
exports.PageSchema = new db.mongoose.Schema({
    title: {type: String},
    description: {type: String},
    keywords: {type: String},
    url: {type: String},
    content: {type: String},
    date: {type: Date, default: Date.now}
});

