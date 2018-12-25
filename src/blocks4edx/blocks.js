/*
// <problem> 最外层
Blockly.Blocks['problem'] = {
    init: function() {
      this.appendStatementInput("problem_input")
          // .setCheck(null)
          // .appendField(new Blockly.FieldImage("/media/chuanganqi/siri_input.png",40,40,"*"))
          .appendField("随机化题目")
          // .appendField(new Blockly.FieldDropdown([["单选题", "multiplechoiceresponse"], ["填空题", "numericalresponse"], ]), "problem_option");
      this.setColour(200);
      this.setTooltip('tip');
      this.setHelpUrl('https://www.eliteu.cn/');
    }
};
  
Blockly.Python['problem'] = function(block) {
    //let dropdown_problem_option = block.getFieldValue('problem_option');
    let statements_problem_input = Blockly.Python.statementToCode(block, 'problem_input');
    // TODO: Assemble Python into code variable.
    // var code = `def block_task_fun():\n${statements_task_statement}\ntask_thread.Task("${number_task_time}",block_task_fun).start()`;
    let code = `<problem>\n${statements_problem_input}\n</problem>`;
    return code;
};
*/

// python_script
//https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#k8f5dm
// 独立的python_script
Blockly.Blocks["python_script"] = {
  init: function() {
    this.appendStatementInput("python_script_statement")
      .setCheck(null)
      //.appendField(new Blockly.FieldNumber(17,0,24),"task_time");
      .appendField("python_script:");
    // .appendField(new Blockly.FieldTextInput("17:30"), "task_time")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(200);
    this.setTooltip("tip");
    this.setHelpUrl("HelpUrl");
  }
};

Blockly.Python["python_script"] = function(block) {
  // var number_task_time = block.getFieldValue('task_time');
  var statements_task_statement = Blockly.Python.statementToCode(
    block,
    "python_script_statement"
  );
  //纳入时间和任务
  //var code = `  <script type="loncapa/python">\n${statements_task_statement}\n  </script>`;
  var code = `${statements_task_statement}\n  </script>`;
  return code;
};

// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#c88cbt
Blockly.Blocks["problem"] = {
  init: function() {
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_CENTRE)
      .appendField("python_script");
    this.appendStatementInput("python_script").setCheck(null);
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_CENTRE)
      .appendField("problem_text");
    this.appendStatementInput("problem_text").setCheck(null);
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_CENTRE)
      .appendField("response");
    this.appendStatementInput("response")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_CENTRE);
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_CENTRE)
      .appendField("solution");
    this.appendStatementInput("solution").setCheck(null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Python["problem"] = function(block) {
  var statements_python_script = Blockly.Python.statementToCode(
    block,
    "python_script"
  );
  var statements_problem_text = Blockly.Python.statementToCode(
    block,
    "problem_text"
  );
  var statements_response = Blockly.Python.statementToCode(block, "response");
  var statements_solution = Blockly.Python.statementToCode(block, "solution");
  // TODO: Assemble Python into code variable.
  // Blockly.Python.definitions_.import_turtle = `<problem>\n<script type="loncapa/python">\n`;
  let statements_python_script_remove_2_space = statements_python_script.replace(
    /^ {2}/gm,
    ""
  );
  // console.log(statements_python_script_remove_2_space);
  // for i in statements_python_script
  let statements_solution_code = `
<solution>
<div class="detailed-solution">
${statements_solution}
</div>
</solution>
`;
  var code = `${statements_python_script_remove_2_space}</script>\n${statements_problem_text}\n${statements_response}\n${statements_solution_code}\n</problem>`;
  return code;
};

// 格式化数字
// format(1234567, ',d')  // 接受输入，并且输出
// https://stackoverflow.com/questions/1823058/how-to-print-number-with-commas-as-thousands-separators
Blockly.Blocks["format_number"] = {
  init: function() {
    this.appendValueInput("number")
      .setCheck("Number")
      .appendField("format number");
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Python["format_number"] = function(block) {
  var value_number = Blockly.Python.valueToCode(
    block,
    "number",
    Blockly.Python.ORDER_ATOMIC
  );
  // TODO: Assemble Python into code variable.
  // var code = `format(${value_number}, ',d')`;
  var code = `"{0:,.0f}".format(${value_number})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

// todo: html <>
// 建立文本从 拼接文本 还是使用标记 需要选一个 某些地方只能使用标记 求值运算
// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#jr7ckk
Blockly.Blocks["html_p"] = {
  init: function() {
    this.appendDummyInput()
      .appendField("<p>")
      .appendField(new Blockly.FieldTextInput("hello world"), "p")
      .appendField("</p>");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Python["html_p"] = function(block) {
  var text_p = block.getFieldValue("p");
  // TODO: Assemble Python into code variable.
  var code = `<p>${text_p}</p>`;
  return code;
};

// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#y2xano
Blockly.Blocks["multiplechoiceresponse"] = {
  init: function() {
    this.appendStatementInput("statement")
      .setCheck(null)
      .appendField("multiplechoiceresponse");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Python["multiplechoiceresponse"] = function(block) {
  var statements_statement = Blockly.Python.statementToCode(block, "statement");
  // TODO: Assemble Python into code variable.
  let code = `
  <multiplechoiceresponse>
  <choicegroup type="MultipleChoice" shuffle="true">
  ${statements_statement}
  </choicegroup>
</multiplechoiceresponse>
`;
  return code;
};

// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#duzd93
Blockly.Blocks["choice"] = {
  init: function() {
    this.appendDummyInput()
      .appendField("choice")
      .appendField("correct:")
      .appendField(
        new Blockly.FieldDropdown([["true", "true"], ["false", "false"]]),
        "correct"
      );
    this.appendDummyInput()
      .appendField("text:")
      .appendField(new Blockly.FieldTextInput("default"), "text");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Python["choice"] = function(block) {
  var dropdown_correct = block.getFieldValue("correct");
  var text_text = block.getFieldValue("text");
  // TODO: Assemble Python into code variable.
  var code = `<choice correct="${dropdown_correct}">${text_text}</choice>\n`;
  return code;
};

// numericalresponse
Blockly.Blocks["numericalresponse"] = {
  init: function() {
    this.appendDummyInput()
      .appendField("answer:")
      .appendField(new Blockly.FieldTextInput("$y"), "answer")
      .appendField("type:")
      .appendField(new Blockly.FieldTextInput("tolerance"), "type")
      .appendField("default:")
      .appendField(new Blockly.FieldTextInput("0.01%"), "default1")
      .appendField("textline_size:")
      .appendField(new Blockly.FieldTextInput("10"), "textline_size");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(170);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Python["numericalresponse"] = function(block) {
  var answer = block.getFieldValue("answer");
  var type = block.getFieldValue("type");
  var default1 = block.getFieldValue("default1");
  var textline_size = block.getFieldValue("textline_size");
  // TODO: Assemble Python into code variable.
  var code = `
<numericalresponse answer="${answer}">
    <responseparam type="${type}" default="${default1}" name="tol"
      description="Numerical Tolerance"/>
    <textline size="${textline_size}"/>
</numericalresponse>
`;
  return code;
};
