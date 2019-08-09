'use strict';

goog.provide('Blockly.Python.nn');
goog.require('Blockly.Python');

Blockly.Python['nn_dense'] = function(block) {
  var number_in = block.getFieldValue('in');
  var number_out = block.getFieldValue('out');
  var dropdown_activation = block.getFieldValue('activation');
  // TODO: Assemble Python into code variable.
  var code = 'nn.Dense(' + number_in + ', '+ number_out + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['nn_conv2d'] = function(block) {
  var number_in = block.getFieldValue('in');
  var number_out = block.getFieldValue('out');
  var number_k = block.getFieldValue('k');
  var number_s = block.getFieldValue('s');
  var dropdown_activation = block.getFieldValue('activation');
  // TODO: Assemble Python into code variable.
  var activation = '';
  if (dropdown_activation == 'sigmoid') {
    activation = ', nn.Sigmoid()';
  }
  if (dropdown_activation == 'tanh') {
    activation = ', nn.Tanh()';
  }
  if (dropdown_activation == 'relu') {
    activation = ', nn.ReLU()';
  }
  var code = 'nn.Conv2d(' + number_in + ', '+ number_out + ', ' + number_k + ', ' + number_s + ', ' + ~~(number_k / 2) +  ')' + activation;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['nn_guesscategory'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'nn.Softmax()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['nn_sequential'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'nn.Sequential(*' + value_name + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['nn_forward'] = function(block) {
  var variable_model = Blockly.Python.variableDB_.getName(block.getFieldValue('model'), Blockly.Variables.NAME_TYPE);
  var variable_data = Blockly.Python.variableDB_.getName(block.getFieldValue('data'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = variable_model + '(' + variable_data +')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['nn_l1loss'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'nn.L1Loss()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['nn_dataset'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  var code = 'bt.Train_Set(' + dropdown_name + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['nn_backward'] = function(block) {
  var variable_model = Blockly.Python.variableDB_.getName(block.getFieldValue('model'), Blockly.Variables.NAME_TYPE);
  var variable_data = Blockly.Python.variableDB_.getName(block.getFieldValue('data'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = 'bt.train('+ variable_model + ',' + variable_data + ')';
  return code;
};


Blockly.Python['next'] = function(block) {
  var variable_dataset = Blockly.Python.variableDB_.getName(block.getFieldValue('dataset'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = 'next(' + variable_dataset + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['alexnet'] = function(block) {
  var checkbox_pretrained = block.getFieldValue('pretrained') == 'TRUE';
  // TODO: Assemble Python into code variable.

  var txt = "False";
  if (checkbox_pretrained) {
    txt = 'True'
  }

  var code = 'torchvision.models.alexnet(pretrained='+ txt + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['resnet18'] = function(block) {
  var checkbox_pretrained = block.getFieldValue('pretrained') == 'TRUE';
  // TODO: Assemble Python into code variable.

  var txt = "False";
  if (checkbox_pretrained) {
    txt = 'True'
  }

  var code = 'torchvision.models.resnet18(pretrained='+ txt + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};