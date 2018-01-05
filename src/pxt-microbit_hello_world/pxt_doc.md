# pxt_doc
参考:[makecode docs](https://makecode.com/target-creation)

### 关于MakeCode
*  基于Google Blockly的代码编辑器以及JavaScript转换器
*  基于Monaco的文本编辑器，具有强大的自动补全和由TypeScript提供支持的自动纠正。
*  基于markdown的文档系统，内置宏来渲染块摘要
*  一个ARM Thumb机器码发射器
*  一个命令行包管理器

# 创建target项目
### target
*  可以修改定制pxt-microbit的docs
*  可以发布为静态文件
*  可以保存到用户中（作为二级域名，使用主域名的cookie）

### 结构
参考[target-creation](https://makecode.com/target-creation),关于项目的布局和修改方法都在这里

*  /libs，定义API（在C ++，Static TypeScript或Thumb汇编器中）的包（有时称为库）以及它们应该如何暴露为积木块
*  /sim，浏览器模拟器的 TypeScript源代码（如果有的话）
*  /docs，markdown文档页面
*  pxtarget.json文件包含目标（target）的配置选项
*  target最终可以发布到NPM，package.json配置相关信息
*  图片在`/docs/static`

### 打包静态文件
[pxt-staticpkg Manual Page](https://makecode.com/cli/staticpkg)

把target项目大包为HTML静态页面

>  Running `pxt staticpkg` will create a number of files under `built/packaged`. You can use `pxt serve -pkg` or any other any web server. For example, you can use http-server for easy testing.

```
npm install -g http-server
http-server -c-1 built/packaged
```


#### 操作过程记录
```
pxt staticpkg
cd built/packaged/
python -m http.server # python2 -m SimpleHTTPServer #
```

发布到GitHub Pages参考: `GitHub Pages support`

###  主题化
[自定义样式、主题](https://makecode.com/targets/theming)

### tips
*  [pxt.json](https://makecode.com/packages/pxtJson)是用来配置软件包(如pxt-neopixel)的，而不是target项目
*  [自定义积木块](https://makecode.com/defining-blocks),你可以设计你的整个API而不用实现它



# 创建pxt包
参考[packages](https://makecode.com/packages)


包是用于扩展target的PXT的动态/静态库机制

PXT会直接从GitHub动态加载neopixel软件包，编译并将其合并到Web应用程序中

编程pxt的入门指南:[packages/getting-started](https://makecode.com/packages/getting-started)


# 编程文档
参考[writing-docs](https://makecode.com/writing-docs)

MakeCode提供了一个集成的解决方案来构建文档。

*  文档以markdown语法编写，使用macros(宏)来支持widget
*  block images可以通过解析markdown特定语法表达，之后渲染出，避免截图
*  支持浏览器内部的`step by step tutorials or sidebar hosted docs`

### macros

通过[macros](https://makecode.com/writing-docs/macros)来扩展markdown

### tutorials
通过[tutorials](https://makecode.com/writing-docs/tutorials)提供站内引导教程,也可以用作课程

标题为“Light Blaster”的教程会有这样的路径：/docs/tutorials/light-blaster.md

在编辑器中选择教程时，教程运行程序将教程markdown的内容转换为用户交互


#### Getting Started tutorial
'Getting Started' tutorial 是一种特殊的教程

in pxtarget.json with "sideDoc": "tutorials/getting-started"

inked to it is retrieved from /docs/tutorials/getting-started.md.


多语言支持通过[Crowdin](https://makecode.com/translate)来做


### routing
PXT假定文档位于该/docs文件夹下，网站路由遵循以下文件结构

```
/about -> /docs/about.md
/reference/math -> /docs/reference/math.md
```

诸如图片之类的静态资产可以放置在该/docs/static文件夹下



### pxt工具
[pyconv](https://makecode.com/cli/pyconv) 将MicroPython模块转换为PXT