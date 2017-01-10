'use strict';

let db = require('../../libs/db');
let URLSlugs = require('mongoose-url-slugs');

// Модель страниц
let pageSchema = new db.mongoose.Schema({
    title: {type: String, required:[true, "titleRequired"],},
    description: {type: String},
    keywords: {type: String},
    content: {type: String},
    date: {type: Date, default: Date.now}
});
pageSchema.plugin(URLSlugs('title'));
exports.page = db.connect.model("Page", pageSchema);