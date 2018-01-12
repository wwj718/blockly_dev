# readme
自定义模块

# 模块分类
*  序列
*  接受输入
  *  接受的类型
*  有返回值
  *  返回值类型
*  包装其他系列作为输入

关于积木块怎么定义参考:[Define Blocks](https://developers.google.com/blockly/guides/create-custom-blocks/define-blocks)

使用json可逆，更清晰

### 序列
摘自`blockly_5_run_python_in_browser_turtle_finish` 中的`my_blocks.js`

该模块的功能是在turtle中，留下一个印记。无输入和函数输出。(副作用)

[blockfactory draw_stamp](https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#ixsmmd)

```
  Blockly.Blocks.draw_stamp = {
    init: function() {
        this.setColour(160),
        this.appendDummyInput().appendField("stamp"),
        this.setPreviousStatement(!0),
        this.setNextStatement(!0)
    }
  },
  Blockly.Python.draw_stamp = function(block) {
    Blockly.Python.definitions_.import_turtle = "import turtle\nturtle=turtle.Turtle()";
    return "turtle.stamp()\n"
  }
```

结束程序:

```
  Blockly.Blocks['sys_exit'] = {
      init: function() {
          this.appendDummyInput()
              .appendField(new Blockly.FieldImage(require('./media/hexinchulichuanshu/sys_exit.png'),40,40,"*"))
              .appendField("结束程序");
          this.setInputsInline(true);
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour(170);
          this.setTooltip('');
          this.setHelpUrl('http://www.example.com/');
      }
  };


  Blockly.Python['sys_exit'] = function(block) {
      var code = 'import sys;sys.exit(0)\n';
      return code;
  }
```


### 接受输入

该模块实现休眠功能

![]()

```
//输入为数字的模块
//https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#ytviqi
//https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#8vwuu3
//https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#ndieuv 图标


  Blockly.Blocks['time_sleep'] = {
      init: function() {
          this.appendDummyInput()
              .appendField(new Blockly.FieldImage(require('./media/hexinchulichuanshu/time_sleep.png'),40,40,"*"))
              .appendField("休眠时间")
              .appendField(new Blockly.FieldNumber(1, 0), "mytime");
          this.setInputsInline(true);
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour(170);
          this.setTooltip('');
          this.setHelpUrl('http://www.example.com/');
      }
  }

  Blockly.Python['time_sleep'] = function(block) {
      var number_mytime = block.getFieldValue('mytime');
      // TODO: Assemble Python into code variable.

      var code = `import time;time.sleep(${number_mytime})\n`;
      return code;
  };
```

### 有返回值

```
//只有输出的块：获取障碍物距离（

//https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#a88ugi 完整版

//https://developers.google.com/blockly/guides/configure/web/code-generators
//https://developers.google.com/blockly/guides/create-custom-blocks/generating-code
// https://github.com/google/blockly/blob/master/generators/python/math.js  实际例子,跟踪：math_number

  Blockly.Blocks['get_distance'] = {
      init: function() {
          this.appendDummyInput()
              .appendField(new Blockly.FieldImage(require('./media/chuanganqi/get_distance.png'),40,40,"*"))
              .appendField("获取障碍物距离");
          this.setOutput(true, "Number");
          this.setColour(110);
          // this.setTooltip('');
          // this.setHelpUrl('http://www.example.com/');
      }
  };


  Blockly.Python['get_distance'] = function(block) {
      // distance 全局,得到的是代码，需要代码编译完才是想要的,赋值给变量

      var code = 'distance.get_distance()';
      // 这里有个层次的问题，如何获得另一个语言里的变量,如何输出为数字

      // 硬件的输出如何变为一个块 可被其他读取,并没有对接到其他部分,不能是python代码

      // TODO: Change ORDER_NONE to the correct strength.

      // 需要回传数值，用于变量

      return [code, Blockly.Python.ORDER_ATOMIC];
  };
```

# 工具
构建工具: [blockfactory](https://blockly-demo.appspot.com/static/demos/blockfactory/index.html)

帮助文档看这里:[Blockly Developer Tools docs](https://developers.google.com/blockly/guides/create-custom-blocks/blockly-developer-tools)

# 自定义积木块
在[blockfactory](https://blockly-demo.appspot.com/static/demos/blockfactory/index.html)中通过拖拽定义好积木后。 在 `Generator stub`定义好该模块将编译出的代码 . 最后将`Generator stub`和`Block Definition`中的代码拷贝到js脚本中即可。

# 参考
更多积木可以参考(内部项目): `jinping/src/views/projects/hardwarelab/block.js`

每个类型积木都有相应的注释,可以看到它在[blockfactory](https://blockly-demo.appspot.com/static/demos/blockfactory/index.html) 是如何构建的

也可以参考项目 blockly_5_run_python_in_browser_turtle_finish 中的my_blocks.js

### 技巧
注意力放在generate 的return部分。看它需要从js中获取什么`输入`，是否对外`输出`。 


剩下的就是type问题，是否可以组合

# 难点
### Operator Precedence
[Operator Precedence](https://developers.google.com/blockly/guides/create-custom-blocks/)

>  Still don't understand? No problem. Just use ORDER_ATOMIC as the order on every call to valueToCode, and use ORDER_NONE as the order for the final return statement on every value block. The resulting code will be infested with needless parentheses, but is guaranteed to be correct.

ORDER只关乎优先级问题，不影响其他，一般而言，对外输出值的时候，把值包在一起(ORDER_NONE)

### 块范例
[Custom Blocks: Block Paradigms](https://developers.google.com/blockly/guides/create-custom-blocks/block-paradigms)

并行块

>   If the target language is something like Python, then the allCode array may be assembled into a single program that uses a threading module.

事件驱动

Blockly.BlockSvg.START_HAT = true

