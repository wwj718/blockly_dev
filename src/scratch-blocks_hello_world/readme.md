# readme
```
//2018.1.4版本： https://github.com/LLK/scratch-blocks/commit/11cf4bdeb9ce7ef7665520aba5bbba17f5b765b7
git clone https://github.com/LLK/scratch-blocks --depth=1
# 下载google-closure-library zip
# https://github.com/LLK/scratch-blocks/blob/develop/build.py#L475
mv google-closure-library/  ../closure-library 外层
cd scratch-blocks
# 需要python2 env
npm install --registry https://registry.npm.taobao.org

cd gh-pages/playgrounds/tests/
# open vertical_playground.html #完整路径 scratch-blocks/gh-pages/playgrounds/tests/vertical_playground.html

# generate python
# 在/Users/wwj/mylab/changxue/scratch-blocks可行
```



# 问题

### 关于scratch-blocks是够可以generate python code
*  [Generators - Support & Documentation ](https://github.com/LLK/scratch-blocks/issues/691)

scratch-blocks已经重命名Blockly中使用的所有块

之前有过一次提交被清理了: [Remove all generators and update build.py](https://github.com/LLK/scratch-blocks/commit/0c4d175184ffa21da287a37585e01bc7531b5d15)

[Add generators](https://github.com/LLK/scratch-blocks/pull/787/files)

# 自定义generator

引入playgrounds目录下的:`<script src="../python_compressed.js"></script>`

定义好收集的代码

```
Blockly.Python.control_if = function(a) {
    Blockly.Python.definitions_.import_turtle = "import turtle\nturtle=turtle.Turtle()";
    var b = Blockly.Python.valueToCode(a, "VALUE", Blockly.Python.ORDER_NONE) || "0";
    return "turtle." + a.getFieldValue("DIR") + "(" + b + ")\n"
};
```

之后即可拿到code:`Blockly.Python.workspaceToCode(workspace)` or `Blockly["Python"].workspaceToCode(workspace)`


# todo
本目录下的index.html需要closure的支持

或者先build:python build.py

或者获取 npm install scratch-blocks 获取编译好的
