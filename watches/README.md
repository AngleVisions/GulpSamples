GulpSamples
===========

Watches
-------

The example shows a lot of different plugins. These plugins illustrate the point of transforming LESS to valid CSS, writing the output, minifying the contents, writing the output.

But maybe we do not only want to trigger this process once we feel for it? Maybe we want to start a compilation every time we hit save. That way we save time, keep our workflow and have direct evaluation.

Here we also added a task called `watch`. If we run `gulp watch` the build chain for the LESS files will start every time a LESS file changes. 