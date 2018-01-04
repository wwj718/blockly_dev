# readme
python中自带了turtle库，方便入门者学习编程，这是来自LOGO语言的传统。我们想在浏览器中使用python驱动turtle

# 技术方案
使用[skulpt](https://github.com/skulpt/skulpt)在浏览器中运行python

需要注意的是:

> Skulpt is a Javascript implementation of Python 2.x. Python that runs in your browser!

参考[Instances — A Herd of Turtles](http://interactivepython.org/runestone/static/thinkcspy/PythonTurtle/InstancesAHerdofTurtles.html)


# 思路

blockly生成python

之后python在浏览器中被skulpt解析，skulpt使用python库作出及时反馈(如turtle库或是图形库做数据分析:[blockpy](https://github.com/RealTimeWeb/blockpy))

一番搜索发现 http://www.skulpt.org/ 中有个项目很符合预期，在skulpt中利用turtle模块绘图

# 依赖
http://www.skulpt.org/

```html
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js" type="text/javascript"></script> 
<script src="http://www.skulpt.org/static/skulpt.min.js" type="text/javascript"></script> 
<script src="http://www.skulpt.org/static/skulpt-stdlib.js" type="text/javascript"></script> 
```

# 如何构建合理的积木块
从[hourofpython.trinket.io/from-blocks-to-code-with-trinket](https://hourofpython.trinket.io/from-blocks-to-code-with-trinket#/blocks/dragging-and-dropping)中扣取即可

分析积木块文件可得到线索,以及一些高级用法，诸如如何在头部提前import

```
Blockly.Blocks.draw_pen = {
    init: function() {
        var a = [["pen up", "penup"], ["pen down", "pendown"]];
        this.setColour(160),
        this.appendDummyInput().appendField(new Blockly.FieldDropdown(a), "PEN"),
        this.setPreviousStatement(!0),
        this.setNextStatement(!0)
    }
},
Blockly.Python.draw_pen = function(a) {
    return Blockly.Python.definitions_.import_turtle = "import turtle",
    "turtle." + a.getFieldValue("PEN") + "()\n"
}
```

我们集中分析一个块，往某个方向移动若干距离

![](http://oav6fgfj1.bkt.clouddn.com/blocklyc49bf6c1.png)

在文件:`embed-blocks-iframe...`

```
Blockly.Blocks.draw_move = {
    init: function() {
        var a = [["move forward by", "forward"], ["move backward by", "backward"]];
        this.setColour(160),
        this.appendValueInput("VALUE").setCheck("Number").appendField(new Blockly.FieldDropdown(a), "DIR"),
        this.setPreviousStatement(!0),
        this.setNextStatement(!0)
    }
},
Blockly.Python.draw_move = function(a) {
    Blockly.Python.definitions_.import_turtle = "import turtle";
    var b = Blockly.Python.valueToCode(a, "VALUE", Blockly.Python.ORDER_NONE) || "0";
    return "turtle." + a.getFieldValue("DIR") + "(" + b + ")\n"
}
```

# 参考
*  [From Blocks to Code with Trinket!](https://hourofpython.trinket.io/from-blocks-to-code-with-trinket#/blocks/dragging-and-dropping)
*  [Instances — A Herd of Turtles](http://interactivepython.org/runestone/static/thinkcspy/PythonTurtle/InstancesAHerdofTurtles.html)
*  [编程猫 wood](https://wood.codemao.cn/)

# 附录
blockly-games中也有一个用blockly驱动[turtle](https://blockly-games.appspot.com/turtle)的游戏