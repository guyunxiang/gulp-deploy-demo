const gulp = require('gulp'),
  server = require('gulp-server-livereload');

gulp.task('server', function() {
  gulp.src('.')
    .pipe(server({
      host: 'localhost', // 主机
      port: 9000, // 端口号
      livereload: true // 自动刷新
      directoryListing: false // 是否显示目录
    }))
});
