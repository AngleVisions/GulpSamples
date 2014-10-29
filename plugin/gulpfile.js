var gulp = require('gulp');
var prefixer = require('./src/prefixer.js');

gulp.task('demo', function() {
	return gulp.src('src/app.js')
	           .pipe(prefixer('/*\n * (c) Florian Rappl, 2014.\n */\n'))
	           .pipe(gulp.dest('dst'));
});