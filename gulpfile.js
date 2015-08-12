var gulp = require('gulp'),
    sass = require('gulp-sass'),
    del = require("del"),
    sourcemaps = require('gulp-sourcemaps'),
    minifyCss = require('gulp-minify-css'),
    concatjs = require('gulp-concat');
    concatCss = require('gulp-concat-css'),
    uglify = require('gulp-uglify');

var browserSync = require('browser-sync');
var reload = browserSync.reload;

/// CLEANERS
gulp.task('clean', function(cb) {
  del([ "./dist"],cb);
});

gulp.task('clean:styles', function(cb) {
  del([ "./dist/styles"],cb);
});

gulp.task('clean:js', function(cb) {
  del([ "./dist/js"],cb);
});

gulp.task('get-libs', ['clean:js'], function(){
  return gulp.src([
    './bower_components/backbone/backbone-min.js',
    './bower_components/handlebars/handlebars.min.js',
    './bower_components/jquery/dist/jquery.min.js',
    './bower_components/requirejs/requirejs.js',
    './bower_components/requirejs-hbs/hbs.js',
    './bower_components/requirejs-hbs/hbs-builder.js',
    './bower_components/requirejs-plugins/src/**',
    './bower_components/requirejs-text/src/text.js',
    './bower_components/underscore/underscore-min.js',
  ])
  //.pipe(concatjs("components.js"))
  .pipe(uglify())
  .pipe(gulp.dest('./dist/js/components'))
});

gulp.task('js', ['get-libs'], function(cb) {
  return gulp.src([
    "./app/js/**/**"
  ])
  .pipe(gulp.dest('./dist/js/'))
});

gulp.task('styles',['clean:styles'], function () {
  return gulp.src([
      './app/scss/*.scss',
      './bower_components/materialize/sass/*.scss'
    ])
      .pipe(sass(
        {
        includePaths: [
        './app/scss/*.scss',
        './bower_components/materialize/sass/*.scss'
        ]
      }
    ))
    .pipe(concatCss("main.css"))
    .pipe(minifyCss())
    .pipe(gulp.dest('./dist/styles/'));
});
gulp.task("build", ["styles", "js"])
