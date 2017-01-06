var conf = require('./conf');

exports.run = function (app) {
    app.listen(conf.get('port'), function () {
        console.log("Express app run to port: " + conf.get('port'));
    });
};