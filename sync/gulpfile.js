var gulp = require('gulp');
var minify = require('gulp-uglify');
var sync = require('browser-sync');
var source = './src';
var target = './dst';
var files = {
	html: source + '/*.html',
	js: source + '/*.js',
};

gulp.task('js', function() {
	return gulp.src(files.js)
	           .pipe(minify())
	           .pipe(gulp.dest(target));
});

gulp.task('html', function() {
	return gulp.src(files.html)
	           .pipe(gulp.dest(target));
});

gulp.task('sync', function() {
	sync({
		server: {
			baseDir : target
		}
	});
});

gulp.task('default', ['html', 'js', 'sync'], function() {
	gulp.watch(files.js, ['js', sync.reload]);
	gulp.watch(files.html, ['html', sync.reload]);
});