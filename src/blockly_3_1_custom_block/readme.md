# readme
自定义模块

# 模块分类
*  序列
*  接受输入
*  有返回值

# 工具
构建工具: [blockfactory](https://blockly-demo.appspot.com/static/demos/blockfactory/index.html)

帮助稳定看这里:[Blockly Developer Tools docs](https://developers.google.com/blockly/guides/create-custom-blocks/blockly-developer-tools)

# 自定义积木块
在[blockfactory](https://blockly-demo.appspot.com/static/demos/blockfactory/index.html)中通过拖拽定义好积木后。 在 `Generator stub`定义好该模块将编译出的代码 . 最后将`Generator stub`和`Block Definition`中的代码拷贝到js脚本中即可。

# 参考
更多积木可以参考(内部项目): `jinping/src/views/projects/hardwarelab/block.js`

每个类型积木都有相应的注释,可以看到它在[blockfactory](https://blockly-demo.appspot.com/static/demos/blockfactory/index.html) 是如何构建的

也可以参考项目 blockly_5_run_python_in_browser_turtle_finish 中的my_blocks.js

### 技巧
注意力放在generate 的return部分。看它需要从js中获取什么`输入`，是否对外`输出`。 


剩下的就是type问题，是否可以组合