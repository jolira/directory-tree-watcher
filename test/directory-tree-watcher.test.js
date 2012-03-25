/*jslint white: true, forin: false, node: true, indent: 4 */
(function (module, __dirname) {
    "use strict";

    var vows = require('vows'),
        watch = require("../lib/directory-tree-watcher");

    // Create a Test Suite
    vows.describe('watch').addBatch({
        'with output turned on': {
            topic: function () {
                watch(__dirname, function(){}, this.callback);
            },
            'the test directory': {
                "topic": function (watcher) {
                    watcher.close();
                    this.callback();
                },
                "closed": function () {
                }
            }
        }
    }).export(module);
})(module, __dirname);
