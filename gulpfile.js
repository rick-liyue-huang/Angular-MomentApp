

var gulp = require('gulp');
var less = require('gulp-less');
var cssmin = require('gulp-cssmin');
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var htmlmin = require('gulp-htmlmin');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('less', function() {

	gulp.src('./public/less/*.less')
		.pipe(less())
		.pipe(cssmin())
		.pipe(autoprefixer())
		.pipe(gulp.dest('./release/public/less'));	
});

gulp.task('image', function() {

	gulp.src('./public/images/**/*')
		.pipe(imagemin())
		.pipe(gulp.dest('./release/public/images'));	
});

gulp.task('js', function() {
	
	gulp.src('./scripts/*.js')
		.pipe(concat('main.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./release/scripts'));
});


// keep the directory as original one
gulp.task('html', function() {

	gulp.src(['./index.html', './views/*.html'], {base: './'})
		.pipe(htmlmin({collapseWhitespace: true, removeComments: true, minifyJS: true, minifyCSS: true}))
		.pipe(gulp.dest('./release'))
});


























