'use strict';

let navigation = require('./navigation'),
    page = require('./page'),
    publication = require('./publication'),
    setting = require('./setting'),
    user = require('./user');

module.exports = (app) => {

    // Navigation controller routes
    navigation(app);

    // Page controller routes
    page(app);

    // Publication controller routes
    publication(app);

    // Setting controller routes
    setting(app);

    // User controller routes
    user(app);
};