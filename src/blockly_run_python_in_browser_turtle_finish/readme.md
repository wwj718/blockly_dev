# readme
本节中我们实现完整的turtle，模仿 [trinket.io](https://hourofpython.trinket.io/from-blocks-to-code-with-trinket#/blocks/dragging-and-dropping)

文件继承自 run_python_in_browser_simple，是对它的一个增强

# 依赖
从[trinket.io](https://hourofpython.trinket.io/from-blocks-to-code-with-trinket#/blocks/dragging-and-dropping)中取出两个js文件

*  embed-blocks-4a6a121b.js
*  embed-blocks-iframe-1162d752.js
*  embed-python-f3eb213f.js

# 策略
通过拖拽[trinket.io](https://hourofpython.trinket.io/from-blocks-to-code-with-trinket#/blocks/dragging-and-dropping)中的模块，观察对应python，然后在源码中搜索，以确定是怎么构造的

如移动块，搜索`forward`

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

# 修改blocks
把所有`import turtle`改为`import turtle\nturtle=turtle.Turtle()`

学习 trinket.io 的代码 技巧blockly

# 问题
### toolbox
自动生成toolbox 在`embed-blocks-iframe-1162d752.js`里，可以搜索toolbox 和category


### 替换turtle
https://blog.trinket.io/using-images-in-turtle-programs/

注意：不可用 trinket做了特殊处理！！

```
import turtle

screen = turtle.Screen()

# click the image icon in the top right of the code window to see
# which images are available in this trinket
# image = "https://trinket.io/proxy/https://trinket-user-assets.trinket.io/02b81dd84f5006e360288e728d69cdd60aeec160-552d25d3d1570f876e1cb766.png"

# add the shape first then set the turtle shape
image = '<img src="https://trinket.io/proxy/https://trinket-user-assets.trinket.io/02b81dd84f5006e360288e728d69cdd60aeec160-552d25d3d1570f876e1cb766.png">'
screen.addshape(image) // 不可用 trinket做了特殊处理
turtle.shape(image)

screen.bgcolor("lightblue")

move_speed = 10
turn_speed = 10

# these defs control the movement of our "turtle"
def forward():
  turtle.forward(move_speed)

def backward():
  turtle.backward(move_speed)

def left():
  turtle.left(turn_speed)

def right():
  turtle.right(turn_speed)

turtle.penup()
turtle.speed(0)
turtle.home()

# now associate the defs from above with certain keyboard events
screen.onkey(forward, "Up")
screen.onkey(backward, "Down")
screen.onkey(left, "Left")
screen.onkey(right, "Right")
screen.listen()
```

screen.bgcolor("lightblue") 有效

图片依赖于`embed-python-f3eb213f.js`



#### skulpt预定于的图形
https://github.com/skulpt/skulpt/blob/036d7022348c487278b89d63a7f3eb0aeba09641/src/lib/turtle.js#L66



#### 自定义
```
        //https://github.com/skulpt/skulpt/blob/036d7022348c487278b89d63a7f3eb0aeba09641/src/lib/turtle.js#L64:12
        proto.$register_shape = proto.$addshape = function(name, points) {
            SHAPES[name] = points;
        };
```

其中points为

```
SHAPES.arrow    = [[-10,0],[10,0],[0,10]];
```

# tips
*  media可以用`https://blockly-demo.appspot.com/static/media/`
*  trinket.io还可以把项目下载为本地python代码运行
*  完整的默认库参考: https://blockly-demo.appspot.com/static/demos/code/index.html


# 高阶
### 点击
```
import turtle

class MyTurtle(turtle.Turtle):
  def __init__(self, screen = turtle.Screen()):
    turtle.Turtle.__init__(self, screen)
    self.hideturtle()
    
def create_turtles(screen, n = 10):
  for i in range(n):
    MyTurtle(screen)
    
def move_turtles(screen, dist=10, angle = 4):
  for i, turtle in enumerate(screen.turtles()):
    turtle.left(angle*(1+i))
    turtle.forward(dist)
    x, y = turtle.pos()
    try:
      turtle.color(abs(x), abs(y), abs(x+y))
    except:
      pass
    
writer = MyTurtle()
writer.penup()
writer.goto(0,100)
writer.write("Click Me!", font=("Arial",30), align = "center")


number_of_turtles = 10

screen = turtle.Screen()

def draw_shape(x, y, n = 20, clear = True):
  if clear:
    writer.clear()
  screen.tracer(0)
  for turtle in screen.turtles():
    turtle.penup()
    turtle.goto(x,y)
    turtle.pendown()
  screen.tracer(1)
  for i in range(n):
    screen.tracer(0)
    move_turtles(screen)
    screen.tracer(1)

create_turtles(screen, number_of_turtles)

draw_shape(0,-150, clear = False)

screen.onclick(draw_shape)

screen.listen()
turtle.done()
```

### 支持的库
https://github.com/skulpt/skulpt/tree/036d7022348c487278b89d63a7f3eb0aeba09641/src/lib

### 游戏
https://trinket.io/python/0f3985959e

### 背景
https://blog.trinket.io/using-images-in-turtle-programs/

# todo
分组 Turtle : [Toolbox](https://developers.google.com/blockly/guides/configure/web/toolbox)