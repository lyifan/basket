var gulp = require('gulp'),
	jshint = require('gulp-jshint'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat');

/*
var sass = require('gulp-sass');
gulp.task('sass', function() {
	
	return gulp.src('./src/main/webapp/sass/*.scss')
			.pipe(sass())
			.pipe(gulp.dest('./target/css'));
		
});
*/
gulp.task('scripts', function() {

	return gulp.src('src/js/**/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default', { verbose: true }))
		.pipe(uglify())
		.pipe(concat('basket.min.js'))
		.pipe(gulp.dest('./build'));
	
});

gulp.task('templates', function() {

	return gulp.src('src/templates/**/*.html')
		.pipe(gulp.dest('./build/templates'));
	
});

gulp.task('watch', function() {
	gulp.watch('src/js/**/*.js', ['scripts']);
	gulp.watch('src/templates/**/*.html', ['templates']);
});

gulp.task('default', ['scripts', 'templates']);

