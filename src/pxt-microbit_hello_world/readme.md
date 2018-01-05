# readme
pxt与pxt-microbit的文档

# 开始

### pxt入手(从这里开始)
[pxt-sample](https://github.com/Microsoft/pxt-sample)

[pxtarget文档](https://makecode.com/targets/pxtarget)  

成果: 修改docs,生效!


最终编译为纯静态文件:[microsoft.github.io/pxt-sample](https://microsoft.github.io/pxt-sample/)

对应仓库为:[pxt-sample/tree/gh-pages](https://github.com/Microsoft/pxt-sample/tree/gh-pages)


问题：如何build为纯静态文件

使用[pkg](https://github.com/zeit/pkg)上传到github gh.更多细节参考:[这儿](https://github.com/Microsoft/pxt-sample/blob/master/README.md#todos)

关于该项目的更多探索参考[wwj718/pxt-sample](https://github.com/wwj718/pxt-sample)

### 安装pxt-microbit

#### 快速开始(非开发环境)

```
npm install -g pxt
mkdir microbit
cd microbit
pxt target microbit
pxt serve
```

入口形如: http://localhost:3232/#local_token=0774fdd6-5291-4e93-b95c-bcde0a3702bc&wsport=3233

参考 ：https://makecode.com/cli

#### pxt-microbit开发环境
https://github.com/Microsoft/pxt-microbit


安装yotta.app

alias yotta="/Applications/yotta.app/Contents/MacOS/yotta"

目录： /Users/wwj/mylab/just4fun/pxt-microbit

pxt help

pxt serve


### pxt提供了文档工具（

使用这种工具做教程，可以避免反复的截图

https://github.com/Microsoft/pxt/blob/master/docs/writing-docs.md

#### 文档工具的问题
对文档做的修改不会生效

原因: `pxtlib.js`（位于`built/packaged/pxtlib.js`）中硬编码了`Cloud.apiRoot = "https://www.pxt.io/api/";`(8002行)

这部分和cloud配置相关

从pxt-microbit/built/packaged中 ，`ack "www.pxt.io"`得出上述原因. 而pxtlib.js在`sim/public/siminstructions.html`中引入

`https://www.pxt.io/api/md/microbit/blocks?targetVersion=local&lang=zh-CN&live=1` 返回的是markdown


本地运行的: `https://www.pxt.io/api/md/microbit/docs/blocks.html?targetVersion=0.0.0&lang=zh-CN&live=1`   因为全部编译到本地了

修改 Cloud.apiRoot. 需要定制 `pxtlib`

built/packaged/main.js中有

```
    var hm = /^(https:\/\/[^/]+)/.exec(window.location.href);
    if (hm)
        Cloud.apiRoot = hm[1] + "/api/";
```

内联的文档都从这里读取(pxt-sample正常)







