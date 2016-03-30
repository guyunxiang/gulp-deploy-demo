const gulp = require('gulp'),
  react = require('gulp-react');

// 编译JSX代码
gulp.task('react', function() {
  gulp.src('src/*.js')
    .pipe(react())
    .pipe(gulp.dest('js'))
});

// 监听文件自动编译
gulp.task('watch', function() {
  gulp.watch('src/*.js', ['react'])
});
