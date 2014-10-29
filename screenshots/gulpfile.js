var gulp = require('gulp');
var screenshot = require('gulp-local-screenshots');

gulp.task('screens', function () {
	return gulp.src('./src/demo.html')
	           .pipe(screenshot({
	            	width: ['1600', '1000', '480', '320'],
	            	path:'src',
	            	folder: './img'
	             }));
});