#### 1.1 sass

对于sass的了解，一直也仅仅是限于书本和网络中，由于项目及个人原因一直没有实际操作过，知道最近才认识到自己的无知。遍私下里用sass开发了一些小的web站，对sass也有了新的认识。我也因此爱上了sass，我相信我才仅仅是认识到sass的冰山一角，还需要学的地方，还有很多。

#### 1.2 gulp-sass

[gulp-sass](https://www.npmjs.com/package/gulp-sass) 是一款编译.sass/.scss文件的gulp插件。极大的方便了我们的开发效率。

#### 1.3 使用

```
const gulp = require('gulp'),
  sass = require('gulp-sass');
gulp.task('sass',function(){
  gulp.src('sass/**/*.scss')
  .pipe(sass().on('error',sass.logError))
  .pipe(gulp.dest('css'))
});  
```