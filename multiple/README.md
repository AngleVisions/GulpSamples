GulpSamples
===========

Multiple
--------

Minimizing existing CSS is a common task, even though we do not gain as much as minifying JavaScript code. The reason is the verbose nature of CSS. Nevertheless, it could also be appropriate to extend CSS before releasing it to the client.

Unfortunately we still live in a webiverse where prefixes are common. They can be found in JavaScript APIs and are really common to most CSS users. But no one wants to (or should) write them explicitely. Why? Not only is it often a code duplication (which means more maintenance required), but sometimes the prefix exists with good reason.

There are cases (see: `linear-gradient`), where vendors implemented older (or more experimental) drafts of the standard. This standard may have described another syntax. Now we even have to not only use a prefix, but also a different syntax.

Therefore the example shows using the autoprefixer plugin. After the autoprefixer did its job, we write the output. But since we also want to minify our CSS, we use `minifyCss()` on the returned stream, rename the files by placing *.min.css* instead of *.css* as extension, and write them again.

What's so special about the autoprefixer? We can exactly specify what browsers to support. This will then guarantee that prefixes will be only placed for the named ones. Thus the required space is minimized and only those prefixes are added, which are really required.

In our example we have:

    browsers: ['> 0%', 'last 2 versions', 'Firefox ESR', 'Opera 11.6']

This includes basically all browsers that are still in use. The most common ones even with 2 versions back. Also Firefox with extended support and a really Opera should be supported.