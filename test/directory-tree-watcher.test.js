/*jslint white: true, forin: false, node: true, indent: 4 */
(function (module) {
    "use strict";

    var horaa = require('horaa'),
        vows = require('vows'),
        fs = horaa('fs');

    fs.hijack('watch', function (file, encoding, cb) {
    });

    // Create a Test Suite
    vows.describe('debug').addBatch({
        'with output turned on': {
            topic: function () {
                this.callback();
            },
            'with output turned off': {
                "topic": function () {
                    this.callback();
                },
                "restore debug settings": function () {
                }
            }
        }
    }).export(module);
})(module);
