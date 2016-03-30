#### handlebars

> Handlebars 是 JavaScript 一个语义模板库，通过对view和data的分离来快速构建Web模板。它采用'Logic-less template'(无逻辑模板)的思路，在加载时被预编译，而不是到了客户端执行到代码时再去编译，这样可以保证模板加载和运行的速度。

我也是最近才开始接触Handlebars，Handlebars的使用自然离不开预编译来加速客户端的运行速度。

#### 预编译

如果使用预编译模板，页面只需要引入handlebars运行库即可
```
<script src="/libs/handlebars.runtime.js"></script>
```
handlebars 的预编译基于node.js,需要安装handlebars.
```
npm install -g handlebars
```
编译命令：
```
$ handlebars <input> -f <output>
```
编译器会把模板输入Handlebars.templates，如果你输入的文件是person.handlebars，编译器会添加到Handlebars.templates.person，然后可以直接调用：
```
Handlebars.templates.person(context,options);
```

#### 需要用到的插件

* gulp-handlebars
* gulp-wrap
* gulp-tap
* gulp-replace
* gulp-concat
* handlebars

安装命令：
```
npm install --save-dev gulp-handlebars gulp-wrap gulp-tap gulp-replace gulp-concat handlebars
```

###### 注：

由于gulp-handlebars对4.0版本的模板编译支持比较异常（可能是我水平差不会用吧 - -!）,与handlebars命令编译的结果不一样

**差异如下：**
handlebars 预编译命令编译的结果为：
```
(function() {
  var template = Handlebars.template,
    templates = Handlebars.templates = Handlebars.templates || {};
  templates['header'] = template({
    "compiler": [7, ">= 4.0.0"],
    "main": function(container, depth0, helpers, partials, data) {
      var helper, alias1 = depth0 != null ? depth0 : {},
        alias2 = helpers.helperMissing,
        alias3 = "function",
        alias4 = container.escapeExpression;
      return "<div class=\"nav\"> ... </div>";
    },
    "useData": true
  });
})();
```

gulp-handlebars 示例文档编译结果为：
```
Handlebars.template({
  "compiler": [7, ">= 4.0.0"],
  "main": function(container, depth0, helpers, partials, data) {
    var helper, alias1 = depth0 != null ? depth0 : {},
      alias2 = helpers.helperMissing,
      alias3 = "function",
      alias4 = container.escapeExpression;
    return "<div class=\"nav\"> ... </div>";
  },
  "useData": true
})
```

所以这里我通过几个插件联合处理，解决了这个问题。