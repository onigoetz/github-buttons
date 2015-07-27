var gulp = require('gulp'),
    less = require('gulp-less'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    postcss = require('gulp-postcss');

gulp.task('css', function() {
	var processors = [
  	  require('csswring')
    ];
	
	return gulp.src('btn.css')
	  .pipe(less())
	  .pipe(postcss(processors))
	  .pipe(rename('btn.min.css'))
	  .pipe(gulp.dest(''));
});

gulp.task('js', function() {
	return gulp.src('btn.js')
	  .pipe(uglify())
	  .pipe(rename('btn.min.js'))
	  .pipe(gulp.dest(''));
});

gulp.task('watch', function (cb) {
	gulp.watch("btn.js", ["js"]);
	gulp.watch("btn.css", ["css"]);
});

gulp.task('default', ['css', 'js']);