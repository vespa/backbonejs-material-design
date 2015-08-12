var gulp = require('gulp'),
    sass = require('gulp-sass'),
    del = require("del"),
    sourcemaps = require('gulp-sourcemaps'),
    minifyCss = require('gulp-minify-css'),
    concatCss = require('gulp-concat-css');;

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

gulp.task('js', ['clean:js'], function(cb) {
  return gulp.src([
    "./app/js/**/**"
  ])
  .pipe(gulp.dest('./dist/js/'));
});

gulp.task('styles',['clean-styles'], function () {
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
