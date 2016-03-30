### SASS

> SASS的出现让CSS变得更加有意思。至于SASS是什么？就不在做更多的阐述，因为她并不是一个新鲜的产物，现在在互联网上可谓是铺天盖地。如果你实在想知道SASS是什么？那你只要简单得知道他是CSS预处理器语言的一种。

> SASS在CSS的基础上做了一些扩展，使用SASS你可以使用一些简单的编程思想进来编写CSS。比如，SASS中可以定义变量、混合、嵌套以及函数等功能。只不过SASS不像CSS，可以直接运用到项目中，如果你需要将样式运用到项目中，有一个步骤是必须经过的——SASS转译成CSS。

对于sass的了解，一直也仅仅是限于书本和网络中，由于项目及个人原因一直没有实际操作过，知道最近才认识到自己的无知。便私下里用sass开发了一些小的web站，对sass也有了新的认识。也因此爱上了sass，我知道我才仅仅是认识到sass的冰山一角，还需要学的地方，还有很多。

##### 安装

SASS是Ruby语言写的，但是两者的语法没有关系。不懂Ruby，照样使用。只是必须先安装Ruby，然后再安装SASS。
假定你已经安装好了Ruby，接着在命令行输入下面的命令：

```
gem install sass
```

##### 使用

```
sass test.scss test.css 
```

sass 提供四种编译风格选项：

* nested:嵌套缩进的css代码（默认）
* expanded:没有缩进的、扩展的css代码
* compact:简洁格式的css代码
* compressed:压缩后的css代码

监听某个文件或目录，一旦源文件变动，自动编译

```
sass --watch input.scss:output.css
sass --watch www/sass:dist/css
```

### gulp-sass

##### 安装命令

```
npm install --save-dev gulp-sass
```