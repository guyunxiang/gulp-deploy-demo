### babel

> ECMAScript 6（以下简称ES6）是JavaScript语言的下一代标准，已经在2015年6月正式发布了。它的目标，是使得JavaScript语言可以用来编写复杂的大型应用程序，成为企业级开发语言。

能够实现ES6到ES5的转换，就需要babel来转换，把符合ES6标准的代码转换为ES5标准的代码，并且可以确保良好的运行在所有主流JavaScript引擎中。

##### 安装

```
npm install -g babel
```

##### 转码

```
babel -d lib/ src/
```

### gulp-babel

[gulp-babel](https://www.npmjs.com/package/gulp-babel) 是gulp下将ES6转码成ES5的插件

##### 安装命令

```
npm install --save-dev gulp-babel babel-preset-es2015
```