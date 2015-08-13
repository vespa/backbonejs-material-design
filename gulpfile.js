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


//GET BOWER libs
gulp.task('get-libs', ['clean:js'], function(){
  return gulp.src([
    './bower_components/backbone/backbone-min.js',
    './bower_components/handlebars/handlebars.min.js',
    './bower_components/jquery/dist/jquery.min.js',
    './bower_components/requirejs/require.js',
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

// GET my own js
gulp.task('js', function(cb) {
  return gulp.src([
    "./app/js/**/**"
  ])
  .pipe(gulp.dest('./dist/js/'))
});
gulp.task('js:build', ['get-libs'], function(cb) {
  return gulp.src([
    "./app/js/**/**"
  ])
  .pipe(gulp.dest('./dist/js/'))
});

// generate styles
gulp.task('styles:temp',['clean:styles'], function () {
  return gulp.src([
      './app/scss/*.scss',
      './bower_components/materialize/sass/*.scss'
    ])
    .pipe(sass())
    .pipe(gulp.dest('./dist/styles_temp/'));
});

gulp.task('styles',['styles:temp'], function () {
  return gulp.src([
      './dist/styles_temp/**.css',
    ])
    .pipe(concatCss("main.css"))
    .pipe(minifyCss())
    .pipe(gulp.dest('./dist/styles/'))
});

// move HTMLs
gulp.task("html", function(){
    return gulp.src([
      "./app/**/**.html",
      "./app/**/**.hbs"
    ]).pipe(gulp.dest('./dist'))
});

gulp.task("generate", ["styles", "js:build", "html"], function(cb){
  console.log("deleting temporary files...")
  del([ "./dist/styles_temp"],cb);
});
gulp.task("build", ["generate"]);

//dev
gulp.task('browser-sync', ["build"], function() {
  browserSync({
    server: {
      baseDir: ['./dist/'],
    }
  });
  gulp.watch('app/scss/**/*.scss', ["styles",reload]);
  gulp.watch('app/js/**/*.js', ["js", reload]);
  gulp.watch('app/templates/**/**.hbs',["html", reload]);
  gulp.watch('app/**/*.html', ["html", reload]);
});

gulp.task('default', ['browser-sync']);
