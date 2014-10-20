var gulp = require('gulp');
var frontMatter = require('gulp-front-matter');
var hb = require('gulp-hb');
var marked = require('gulp-marked');
var wrap = require('gulp-wrap');
var ext = require('gulp-ext-replace');
var sass = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');
var map = require('map-stream');
var extend = require('extend');
var path = require('path');

gulp.task('assets', function () {
  return gulp
    .src('./src/assets/{fonts,css,js,img}/**/*', {base: './src/assets'})
    .pipe(gulp.dest('./web/assets'));
});

gulp.task('css', function () {
  gulp.src('./src/assets/scss/*.scss')
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('./web/assets/css'));
});

gulp.task('docs', function () {
  return gulp
    .src('./src/pages/docs/*.md')
    .pipe(frontMatter())
    .pipe(marked({}))
    .pipe(map(function (file, callback) {
      file.shortName = path.basename(file.path, path.extname(file.path));
      extend(file, file.frontMatter);
      delete file.frontMatter;
      callback(null, file);
    }))
    .pipe(map(function (file, callback) {
      file.contents = new Buffer('{{#extend "doc"}}'+String(file.contents)+'{{/extend}}');
      callback(null, file);
    }))
    .pipe(hb({
      data: './src/assets/data/**/*.{js,json}',
      helpers: [
        './node_modules/handlebars-helpers/lib/helpers/helpers-{dates,math}.js',
        './src/helpers/*.js'
      ],
      partials: [
        './src/partials/**/*.hbs',
        './src/templates/**/*.hbs',
        './src/layouts/**/*.hbs'
      ]
    }))
    .pipe(gulp.dest('./web/docs/'));
});

gulp.task('web', function () {
  return gulp
    .src('./src/pages/**/*.hbs', {base: './src/pages'})
    .pipe(frontMatter())
    .pipe(map(function (file, callback) {
      file.shortName = path.basename(file.path, path.extname(file.path));
      extend(file, file.frontMatter);
      delete file.frontMatter;
      callback(null, file);
    }))
    .pipe(map(function (file, callback) {
      file.contents = new Buffer('{{#extend "default"}}'+String(file.contents)+'{{/extend}}');
      callback(null, file);
    }))
    .pipe(hb({
      data: './src/assets/data/**/*.{js,json}',
      helpers: [
        './node_modules/handlebars-helpers/lib/helpers/helpers-{dates,math}.js',
        './src/helpers/*.js'
      ],
      partials: [
        './src/partials/**/*.hbs',
        './src/templates/**/*.hbs',
        './src/layouts/**/*.hbs'
      ]
    }))
    .pipe(ext('.html'))
    .pipe(gulp.dest('./web/'));
});

gulp.task('watch', function() {
  gulp.watch('src/**/*', ['default']);
});
gulp.task('default', ['assets', 'css', 'docs', 'web']);
