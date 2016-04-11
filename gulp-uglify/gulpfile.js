const gulp = require('gulp'),
  uglify = require('gulp-uglify');

gulp.task('uglify', function() {
  gulp.src('js')
    .pipe(uglify({
      mangle: true
    }))
    .pipe(gulp.dest('dist'))
});
