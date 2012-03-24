(function (module) {
    "use strict";
    var fs = require("fs");

    module.exports = function(file, cb) {
        fs.watch(file, cb);
    }
})(module);
