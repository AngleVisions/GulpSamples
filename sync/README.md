GulpSamples
===========

Sync
----

Live synchronization is not only cool, but also important for keeping a focused workflow. There are multiple plugins to achieve this. Either way, we require a file system watch.

The sample uses the `browser-sync` plugin. The `sync` task starts the module. The module will then just keep on running. There is no problem with that. However, usually we do not want to mess with the files in the release folder. We want to alter the development files, build them, update the release folder and synchronize the browser.

Therefore the default task starts some watches. The synchronization server is already running, and may be forced to reload once a set of files changes. For instance if JavaScript files change, the `js` task is triggered. Afterwards a reload is invoked. The same is true for the HTML content.