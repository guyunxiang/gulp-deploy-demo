const gulp = require('gulp'),
  sass = require('gulp-sass');

// 编译scss文件
gulp.task('sass', function() {
  gulp.src('sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css'))
});

// 启动监听自动编译
gulp.task('watch', function() {
  gulp.watch('sass/**/*.scss', ['sass'])
});
