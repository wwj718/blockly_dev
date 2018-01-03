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

# 参考
*  [From Blocks to Code with Trinket!](https://hourofpython.trinket.io/from-blocks-to-code-with-trinket#/blocks/dragging-and-dropping)
*  [Instances — A Herd of Turtles](http://interactivepython.org/runestone/static/thinkcspy/PythonTurtle/InstancesAHerdofTurtles.html)
*  [编程猫 wood](https://wood.codemao.cn/)

# 附录
blockly-games中也有一个用blockly驱动[turtle](https://blockly-games.appspot.com/turtle)的游戏