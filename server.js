'use strict';

let conf = require('./conf');
let log = require('./libs/log')(module);

exports.run = function (app) {
    app.listen(conf.get('port'), function () {
        log.info("Express app run to port: " + conf.get('port'));
    });
};