'use strict';

exports.run = function (req, res) {
    res.sendFile(appRoot + '/admin/public/index.html');
};