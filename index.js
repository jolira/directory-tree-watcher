(function (module) {
    process.on("uncaughtException", function (err) {
        console.error(err.stack || err);
    });

    module.exports = require("./lib/directory-tree-watcher");
})(module);
