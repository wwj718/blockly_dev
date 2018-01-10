//'use strict';

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
    return "t = turtle.Turtle()\n"+"t." + a.getFieldValue("DIR") + "(" + b + ")\n"
}

// import turtle;t = turtle.Turtle();t.forward(100);