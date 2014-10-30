GulpSamples
===========

Concat
------

Merging multiple files is easily possible by using the `gulp-concat` plugin. We need to pass a string to the construction function. This way we setup the name of the new (merged) file.

In the provided example we join two JavaScript files (*a.js* and *b.js*). The order might be important. If the order is important for you, then you should favor explicit file names over just a file name mask. The example uses the implicit ordering given by a mask. You can easily change that by using

    var source = srcExplicit;

instead of

    var source = srcMask;

In both cases the outcome should be the same.