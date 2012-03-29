(function (module) {
    "use strict";
    var fs = require("fs"),
        Batch = require("batch"),
        debug = require("./debug"),
        path = require("path");

    function findAllDirectories(dir, except, cb) {
        var found = [];

        return fs.readdir(dir, function(err, list){
            if (err) {
                return cb(undefined, []); // Ignore
            }

            found.push(dir);

            var batch = new Batch();

            list.forEach(function(file) {
                for(var exception in except) {
                    if (exception === file) {
                        return;
                    }
                }
                var subdir = path.join(dir, file);

                return batch.push(function(done){
                    return findAllDirectories(subdir, except, function(err, result){
                        [].push.apply(found, result);
                        done(err);
                    });
                });
            });

            batch.end(function(err){
                return cb(err, found);
            });
        });
    }

    function Watcher(watchers) {
        this.watchers = watchers;
    };

    Watcher.prototype.close = function() {
        this.watchers.forEach(function(watcher){
            watcher.close();
        });
    };

    module.exports = function(dir) {
        var options = arguments.length > 3 ? arguments[1] : {},
            listener = arguments[arguments.length > 3 ? 2 : 1],
            cb = arguments[arguments.length > 3 ? 3 : 2],
            except = options.except || [];

        debug("watching", dir, "options", options);

        findAllDirectories(dir, except, function(err, dirs) {
            if (err) {
                return cb && cb(err);
            }

            // console.log("dirs", dirs);

            var watchers = [];

            debug("resolved", dirs);

            dirs.forEach(function(dir) {
                var watcher = fs.watch(dir, options, listener);

                watchers.push(watcher);
            });

            return cb && cb(undefined, new Watcher(watchers));
        });
    }
})(module);
