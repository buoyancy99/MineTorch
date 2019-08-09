Blockly.Blocks['nn_dense'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("FullyConnect ")
        .appendField("In")
        .appendField(new Blockly.FieldNumber(0, 0, 1024, 1), "in")
        .appendField("Out")
        .appendField(new Blockly.FieldNumber(0, 0, 1024, 1), "out")
        .appendField("Activation")
        .appendField(new Blockly.FieldDropdown([[{"src":"https://i.ibb.co/NmgSYPW/relu-1.png","width":20,"height":20,"alt":"*"},"relu"], [{"src":"https://i.ibb.co/1dVp7VR/tanh.png","width":20,"height":20,"alt":"*"},"tanh"], [{"src":"https://i.ibb.co/zm27KLn/sigmoid-1.png","width":20,"height":20,"alt":"*"},"sigmoid"], ["none","None"]]), "activation");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(15);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['nn_conv2d'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Convolution")
        .appendField("In")
        .appendField(new Blockly.FieldNumber(0, 0, 1024, 1), "in")
        .appendField("Out")
        .appendField(new Blockly.FieldNumber(0, 0, 1024, 1), "out")
        .appendField("kernel size")
        .appendField(new Blockly.FieldNumber(3, 1, 1024, 1), "k")
        .appendField("stride")
        .appendField(new Blockly.FieldNumber(2, 1, 256, 1), "s")
        .appendField("activation")
        .appendField(new Blockly.FieldDropdown([[{"src":"https://i.ibb.co/NmgSYPW/relu-1.png","width":20,"height":20,"alt":"*"},"relu"], [{"src":"https://i.ibb.co/1dVp7VR/tanh.png","width":20,"height":20,"alt":"*"},"tanh"], [{"src":"https://i.ibb.co/zm27KLn/sigmoid-1.png","width":20,"height":20,"alt":"*"},"sigmoid"], ["none","None"]]), "activation");
    this.setOutput(true, null);
    this.setColour(15);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['nn_guesscategory'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("GuessCategory");
    this.setOutput(true, null);
    this.setColour(15);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['nn_sequential'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("build model with list");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['nn_forward'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Predict with")
        .appendField(new Blockly.FieldVariable("model"), "model")
        .appendField(new Blockly.FieldVariable("data"), "data");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['nn_l1loss'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Difference");
    this.setOutput(true, null);
    this.setColour(60);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['nn_dataset'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("dataset")
        .appendField(new Blockly.FieldDropdown([["object","cifar10"], ["number","mnist"], ["photo","imagenet"]]), "NAME");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['nn_backward'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("improve")
        .appendField(new Blockly.FieldVariable("model"), "model")
        .appendField("with")
        .appendField(new Blockly.FieldVariable("data"), "data");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['next'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("next data")
        .appendField(new Blockly.FieldVariable("dataset"), "dataset");
    this.setOutput(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['alexnet'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Alexnet")
        .appendField("trained")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "pretrained");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['resnet18'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Resnet18")
        .appendField("trained")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "pretrained");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};