const gulp = require('gulp'),
  handlebars = require('gulp-handlebars'),
  wrap = require('gulp-wrap'),
  tap = require('gulp-tap'),
  replace = require('gulp-replace'),
  concat = require('gulp-concat');

gulp.task('handlebars', function() {
  // 存放文件名
  var filename = '';
  gulp.src('templates/*.handlebars')
    .pipe(handlebars({
      // 获取Handlebars版本
      handlebars: require('handlebars')
    }))
    .pipe(tap(function(file) {
      // 获取当前文件名（带后缀）
      filename = file.relative;
    }))
    .pipe(wrap(function() {
      // 拼接模板
      return '(function () {' +
        'var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};' +
        'templates["' + filename + '"] = template(<%= contents %>);})();'
    }))
    // 去除文件名后缀
    .pipe(replace(/\.*.js/g, '')) 
    // 合并模板文件
    .pipe(concat('templates.js'))
    .pipe(gulp.dest('js'))
});
