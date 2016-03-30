const gulp = require('gulp'),
  babel = require('gulp-babel');

// 编译 ES6
gulp.task('babel', function() {
  gulp.src('es6/*.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('js'))
});

// 监听文件自动转码
gulp.task('watch', function() {
  gulp.watch('es6/*.js', ['babel'])
});
