var gulp = require('gulp');
var prefix = require('gulp-autoprefixer');
var minify = require('gulp-minify-css');
var rename = require('gulp-rename');

gulp.task('css', function() {
	return gulp.src('src/*.css')
	           .pipe(prefix({
	           		browsers: ['> 0%', 'last 2 versions', 'Firefox ESR', 'Opera 11.6']
	           }))
	           .pipe(gulp.dest('dst'))
	           .pipe(minify())
	           .pipe(rename({ extname: '.min.css' }))
	           .pipe(gulp.dest('dst'));
});