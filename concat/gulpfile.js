var gulp = require('gulp');
var concat = require('gulp-concat');
var srcMask = 'src/*.js';
var srcExplicit = ['src/a.js', 'src/b.js'];
var source = srcMask; //Change to srcExplicit

gulp.task('default', function() {
	return gulp.src(source)
	           .pipe(concat('app.js'))
	           .pipe(gulp.dest('dst'));
});