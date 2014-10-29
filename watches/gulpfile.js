var gulp = require('gulp');
var less = require('gulp-less');
var minify = require('gulp-minify-css');
var rename = require('gulp-rename');
var notify = require('gulp-notify');

gulp.task('less', function() {
	return gulp.src('src/*.less')
	           .pipe(less())
	           .pipe(gulp.dest('dst'))
	           .pipe(minify())
	           .pipe(rename({ extname: '.min.css' }))
	           .pipe(gulp.dest('dst'));
});

gulp.task('watch', function() {
	return gulp.watch('src/*.less', ['less']);
});