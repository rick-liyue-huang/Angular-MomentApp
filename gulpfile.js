

var gulp = require('gulp');
var less = require('gulp-less');
var cssmin = require('gulp-cssmin');
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var htmlmin = require('gulp-htmlmin');
var autoprefixer = require('gulp-autoprefixer');
var rev = require('gulp-rev');
var revcollector = require('gulp-rev-collector');
var useref = require('gulp-useref');
var gulpif = require('gulp-if');
var rename = require('gulp-rename');


// deal with .less file
gulp.task('css', function() {

	return gulp.src('./public/less/main.less')
		.pipe(less()) // transfer to .css file
		.pipe(cssmin()) // compass the .css file
		.pipe(autoprefixer()) // add the prefix on .css
		.pipe(rev()) // change the .css name with md5
		.pipe(gulp.dest('./release/public/css')) // save to the new directory
		.pipe(rev.manifest()) // create the json dictionary
		.pipe(rename('css-manifest.json'))
		.pipe(gulp.dest('./release/rev')); // save the dictionary
});


// deal with pictures
gulp.task('image', function() {
	
	return gulp.src(['./public/images/**/*', './uploads/**/*'], {base: './'})
		.pipe(imagemin())
		.pipe(rev())
		.pipe(gulp.dest('./release'))
		.pipe(rev.manifest())
		.pipe(rename('image-manifest.json'))
		.pipe(gulp.dest('./release/rev'));
});


// deal with .js files
gulp.task('useref', function() {

	return gulp.src('./index.html')
		.pipe(useref())
		.pipe(gulpif('*.js', uglify()))
		.pipe(gulpif('*.js', rev()))
		.pipe(gulp.dest('./release'))
		.pipe(rev.manifest())
		.pipe(rename('js-manifest.json'))
		.pipe(gulp.dest('./release/rev'));
});

// deal with other files
gulp.task('other', function() {

	return gulp.src(['./api/*', './public/fonts/*', './public/libs/*', './views/*.html', './favicon.ico'], {base: './'})
		.pipe(gulp.dest('./release'));
});

gulp.task('replace', ['css', 'image', 'useref'], function() {

	return gulp.src(['./release/rev/*.json', './release/index.html'])
		.pipe(revcollector())
		.pipe(gulp.dest('./release'))
});

// default
gulp.task('default', ['replace', 'other']);






















































