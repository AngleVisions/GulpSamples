var through = require('through2');
var gutil = require('gulp-util');
var PluginError = gutil.PluginError;
var pluginName = 'gulp-prefixer';

function prefixStream(prefixText) {
	var stream = through();
	stream.write(prefixText);
	return stream;
}

// plugin level function (dealing with files)
function gulpPrefixer(prefixText) {
	if (!prefixText)
		throw new PluginError(pluginName, 'Missing prefix text!');

	prefixText = new Buffer(prefixText);

	// creating a stream through which each file will pass
	var stream = through.obj(function(file, enc, cb) {
		if (file.isNull()) {
			// do nothing if no contents
		} else if (file.isBuffer()) {
			file.contents = Buffer.concat([prefixText, file.contents]);
		} else if (file.isStream()) {
			file.contents = file.contents.pipe(prefixStream(prefixText));
		}

		this.push(file);
		return cb();
	});

	// returning the file stream
	return stream;
};

// exporting the plugin main function
module.exports = gulpPrefixer;