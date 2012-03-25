directory-tree-watcher [<img src="https://secure.travis-ci.org/jolira/directory-tree-watcher.png" />](http://travis-ci.org/#!/jolira/directory-tree-watcher)
========================================

Extend the functionality of [fs.watch(filename, [options],
listener)](http://nodejs.org/docs/latest/api/fs.html#fs_fs_watch_filename_options_listener) to subdirectories.

Example usage:

```
var watch = require("directory-tree-watcher");

watch(".", function(event, file) {
    console.log("watcher:", event, file);
});
```

## watch(directory, \[options,\] listener, callback)

Watches a ``directory`` and all sub-directories. ``options`` are the same as for [fs.watch(filename, [options],
listener)](http://nodejs.org/docs/latest/api/fs.html#fs_fs_watch_filename_options_listener). The ``listener``
is also passed to [fs.watch(filename, [options],
listener)](http://nodejs.org/docs/latest/api/fs.html#fs_fs_watch_filename_options_listener). The ``callback``
is passed two parameters. The first parameter is an error (if any). The second parameter of the ``callback``
a ``Watcher`` object, which responds to a ``close()`` method, which closes the watcher.

Testing
-----------------

Install jake: `npm install -g jake`

Note that Jake is a system-level tool, and wants to be installed globally.

To execute tests execute: `jake test`

License
-----------------

MIT License. View it at [LICENSE](https://raw.github.com/jolira/directory-tree-watcher/master/LICENSE.txt) file.
