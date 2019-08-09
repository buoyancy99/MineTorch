/**
 * @license
 * Blockly Tests
 *
 * Copyright 2017 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

goog.provide('Blockly.TestBlocks');

Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
  {
    "type": "test_basic_empty",
    "message0": "",
    "args0": []
  },
  {
    "type": "test_basic_value_to_stack",
    "message0": "value to stack",
    "nextStatement": null,
    "output": null,
    "style": "math_blocks"
  },
  {
    "type": "test_basic_value_to_statement",
    "message0": "value to statement %1",
    "args0": [
      {
        "type": "input_statement",
        "name": "STATEMENT"
      }
    ],
    "output": null,
    "style": "math_blocks"
  },
  {
    "type": "test_basic_limit_instances",
    "message0": "limit 3 instances %1 %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "STATEMENT"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "style": "math_blocks",
  },
  {
    "type": "test_dropdowns_long",
    "message0": "long: %1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "FIELDNAME",
        "options": [
          [ "first item", "ITEM1" ],
          [ "second item", "ITEM2" ],
          [ "third item", "ITEM3" ],
          [ "fourth item", "ITEM4" ],
          [ "fifth item", "ITEM5" ],
          [ "sixth item", "ITEM6" ],
          [ "seventh item", "ITEM7" ],
          [ "eighth item", "ITEM8" ],
          [ "ninth item", "ITEM9" ],
          [ "tenth item", "ITEM10" ],
          [ "eleventh item", "ITEM11" ],
          [ "twelfth item", "ITEM12" ],
          [ "thirteenth item", "ITEM13" ],
          [ "fourteenth item", "ITEM14" ],
          [ "fifteenth item", "ITEM15" ],
          [ "sixteenth item", "ITEM16" ],
          [ "seventeenth item", "ITEM17" ],
          [ "eighteenth item", "ITEM18" ],
          [ "nineteenth item", "ITEM19" ],
          [ "twentieth item", "ITEM20" ],
          [ "twenty-first item", "ITEM21" ],
          [ "twenty-second item", "ITEM22" ],
          [ "twenty-third item", "ITEM23" ],
          [ "twenty-fourth item", "ITEM24" ],
          [ "twenty-fifth item", "ITEM25" ],
          [ "twenty-sixth item", "ITEM26" ],
          [ "twenty-seventh item", "ITEM27" ],
          [ "twenty-eighth item", "ITEM28" ],
          [ "twenty-ninth item", "ITEM29" ],
          [ "thirtieth item", "ITEM30" ],
          [ "thirty-first item", "ITEM31" ],
          [ "thirty-second item", "ITEM32" ]
        ]
      }
    ]
  },
  {
    "type": "test_dropdowns_images",
    "message0": "%1",
    "args0": [
      {
        "NOTE": "The following paths are relative to playground.html",
        "type": "field_dropdown",
        "name": "FIELDNAME",
        "options": [
          [{"src": "media/a.png", "width": 32, "height": 32, "alt": "A"}, "A"],
          [{"src": "media/b.png", "width": 32, "height": 32, "alt": "B"}, "B"],
          [{"src": "media/c.png", "width": 32, "height": 32, "alt": "C"}, "C"],
          [{"src": "media/d.png", "width": 32, "height": 32, "alt": "D"}, "D"],
          [{"src": "media/e.png", "width": 32, "height": 32, "alt": "E"}, "E"],
          [{"src": "media/f.png", "width": 32, "height": 32, "alt": "F"}, "F"],
          [{"src": "media/g.png", "width": 32, "height": 32, "alt": "G"}, "G"],
          [{"src": "media/h.png", "width": 32, "height": 32, "alt": "H"}, "H"],
          [{"src": "media/i.png", "width": 32, "height": 32, "alt": "I"}, "I"],
          [{"src": "media/j.png", "width": 32, "height": 32, "alt": "J"}, "J"],
          [{"src": "media/k.png", "width": 32, "height": 32, "alt": "K"}, "K"],
          [{"src": "media/l.png", "width": 32, "height": 32, "alt": "L"}, "L"],
          [{"src": "media/m.png", "width": 32, "height": 32, "alt": "M"}, "M"]
        ]
      }
    ]
  },
  {
    "type": "test_dropdowns_images_and_text",
    "message0": "%1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "FIELDNAME",
        "options": [
          ["images and text", "IMAGES AND TEXT"],
          [{"src": "media/a.png", "width": 32, "height": 32, "alt": "A"}, "A"],
          [{"src": "media/b.png", "width": 32, "height": 32, "alt": "B"}, "B"],
          [{"src": "media/c.png", "width": 32, "height": 32, "alt": "C"}, "C"],
          [{"src": "media/d.png", "width": 32, "height": 32, "alt": "D"}, "D"],
          [{"src": "media/e.png", "width": 32, "height": 32, "alt": "E"}, "E"],
          [{"src": "media/f.png", "width": 32, "height": 32, "alt": "F"}, "F"],
          [{"src": "media/g.png", "width": 32, "height": 32, "alt": "G"}, "G"],
          [{"src": "media/h.png", "width": 32, "height": 32, "alt": "H"}, "H"],
          ["xyz", "LMNOP"],
          [{"src": "media/i.png", "width": 32, "height": 32, "alt": "I"}, "I"],
          [{"src": "media/j.png", "width": 32, "height": 32, "alt": "J"}, "J"],
          [{"src": "media/k.png", "width": 32, "height": 32, "alt": "K"}, "K"],
          [{"src": "media/l.png", "width": 32, "height": 32, "alt": "L"}, "L"],
          [{"src": "media/m.png", "width": 32, "height": 32, "alt": "M"}, "M"]
        ]
      }
    ]
  },
  {
    "type": "test_fields_angle",
    "message0": "angle: %1",
    "args0": [
      {
        "type": "field_angle",
        "name": "FIELDNAME",
        "angle": "90",
        "alt":
          {
            "type": "field_label",
            "text": "NO ANGLE FIELD"
          }
      }
    ],
    "style": "math_blocks",
  },
  {
    "type": "test_fields_date",
    "message0": "date: %1",
    "args0": [
      {
        "type": "field_date",
        "name": "FIELDNAME",
        "date": "2020-02-20",
        "alt":
          {
            "type": "field_label",
            "text": "NO DATE FIELD"
          }
      }
    ],
    "style": "math_blocks",
  },
  {
    "type": "test_fields_text_input",
    "message0": "text input %1",
    "args0": [
      {
        "type": "field_input",
        "name": "TEXT_INPUT",
        "text": "default"
      }
    ],
    "style": "math_blocks",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "test_fields_checkbox",
    "message0": "checkbox %1",
    "args0": [
      {
        "type": "field_checkbox",
        "name": "CHECKBOX",
        "checked": true
      }
    ],
    "style": "math_blocks",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "test_fields_colour",
    "message0": "colour %1",
    "args0": [
      {
        "type": "field_colour",
        "name": "COLOUR",
        "colour": "#ff0000"
      }
    ],
    "style": "math_blocks",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "test_fields_variable",
    "message0": "variable %1",
    "args0": [
      {
        "type": "field_variable",
        "name": "VARIABLE",
        "variable": "item"
      }
    ],
    "style": "math_blocks",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "test_fields_label_serializable",
    "message0": "label serializable %1",
    "args0": [
      {
        "type": "field_label_serializable",
        "name": "LABEL",
        "text": "default"
      }
    ],
    "style": "math_blocks",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "test_fields_image",
    "message0": "image %1",
    "args0": [
      {
        "type": "field_image",
        "name": "IMAGE",
        "src": "https://blockly-demo.appspot.com/static/tests/media/a.png",
        "width": 32,
        "height": 32,
        "alt": "A"
      }
    ],
    "colour": 230
  },
  {
    "type": "test_numbers_float",
    "message0": "float %1",
    "args0": [
      {
        "type": "field_number",
        "name": "NUM",
        "text": "0"
      }
    ],
    "style": "math_blocks",
    "output": "Number",
    "tooltip": "A number."
  },
  {
    "type": "test_numbers_whole",
    "message0": "precision 1 %1",
    "args0": [
      {
        "type": "field_number",
        "name": "NUM",
        "precision": 1,
        "text": "0"
      }
    ],
    "style": "math_blocks",
    "output": "Number",
    "tooltip": "The number should be rounded to multiples of 1"
  },
  {
    "type": "test_numbers_hundredths",
    "message0": "precision 0.01 %1",
    "args0": [
      {
        "type": "field_number",
        "name": "NUM",
        "precision": 0.01,
        "text": "0"
      }
    ],
    "style": "math_blocks",
    "output": "Number",
    "tooltip": "The number should be rounded to multiples of 0.01"
  },
  {
    "type": "test_numbers_halves",
    "message0": "precision 0.5 %1",
    "args0": [
      {
        "type": "field_number",
        "name": "NUM",
        "precision": 0.5,
        "text": "0"
      }
    ],
    "style": "math_blocks",
    "output": "Number",
    "tooltip": "The number should be rounded to multiples of 0.5"
  },
  {
    "type": "test_numbers_three_halves",
    "message0": "precision 1.5 %1",
    "args0": [
      {
        "type": "field_number",
        "name": "NUM",
        "precision": 1.5,
        "text": "0"
      }
    ],
    "style": "math_blocks",
    "output": "Number",
    "tooltip": "The number should be rounded to multiples of 1.5"
  },
  {
    "type": "test_numbers_whole_bounded",
    "message0": "midi note %1",
    "args0": [
      {
        "type": "field_number",
        "name": "NOTE",
        "precision": 1,
        "min": 1,
        "max": 127,
        "text": "0"
      }
    ],
    "style": "math_blocks",
    "output": "Note",
    "tooltip": "A midi note."
  },
  {
    "type": "test_images_datauri",
    "message0": "Image data: URI %1",
    "args0": [
      {
        "type": "field_image",
        "src": "data:image/png;base64,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",
        "width": 50,
        "height": 50,
        "alt": "*"
      }
    ],
    "style": "text_blocks"
  },
  {
    "type": "test_images_small",
    "message0": "Image too small %1",
    "args0": [
      {
        "type": "field_image",
        "src": "media/30px.png",
        "width": 50,
        "height": 50,
        "alt": "*"
      }
    ],
    "style": "text_blocks"
  },
  {
    "type": "test_images_large",
    "message0": "Image too large %1",
    "args0": [
      {
        "type": "field_image",
        "src": "media/200px.png",
        "width": 50,
        "height": 50,
        "alt": "*"
      }
    ],
    "style": "text_blocks"
  },
  {
    "type": "test_images_fliprtl",
    "message0": "Image flipped RTL %1",
    "args0": [
      {
        "type": "field_image",
        "src": "media/arrow.png",
        "width": 50,
        "height": 50,
        "alt": "*",
        "flipRtl": true
      }
    ],
    "colour": 160
  },
  {
    "type": "test_images_missing",
    "message0": "Image missing %1",
    "args0": [
      {
        "type": "field_image",
        "src": "missing.png",
        "width": 50,
        "height": 50,
        "alt": "*"
      }
    ],
    "style": "text_blocks"
  },
  {
    "type": "test_images_many_icons",
    "message0": "Lots of network icons: %1 %2 %3 %4 %5 %6 %7 %8 %9 %10 %11 %12 %13 %14 %15 %16 %17 %18",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_image",
        "src": "https://blockly-demo.appspot.com/static/tests/media/a.png",
        "width": 32,
        "height": 32,
        "alt": "A"
      },
      {
        "type": "field_image",
        "src": "https://blockly-demo.appspot.com/static/tests/media/b.png",
        "width": 32,
        "height": 32,
        "alt": "B"
      },
      {
        "type": "field_image",
        "src": "https://blockly-demo.appspot.com/static/tests/media/c.png",
        "width": 32,
        "height": 32,
        "alt": "C"
      },
      {
        "type": "field_image",
        "src": "https://blockly-demo.appspot.com/static/tests/media/d.png",
        "width": 32,
        "height": 32,
        "alt": "D"
      },
      {
        "type": "field_image",
        "src": "https://blockly-demo.appspot.com/static/tests/media/e.png",
        "width": 32,
        "height": 32,
        "alt": "E"
      },
      {
        "type": "field_image",
        "src": "https://blockly-demo.appspot.com/static/tests/media/f.png",
        "width": 32,
        "height": 32,
        "alt": "F"
      },
      {
        "type": "field_image",
        "src": "https://blockly-demo.appspot.com/static/tests/media/g.png",
        "width": 32,
        "height": 32,
        "alt": "G"
      },
      {
        "type": "field_image",
        "src": "https://blockly-demo.appspot.com/static/tests/media/h.png",
        "width": 32,
        "height": 32,
        "alt": "H"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_image",
        "src": "https://blockly-demo.appspot.com/static/tests/media/a.png",
        "width": 32,
        "height": 32,
        "alt": "A"
      },
      {
        "type": "field_image",
        "src": "https://blockly-demo.appspot.com/static/tests/media/b.png",
        "width": 32,
        "height": 32,
        "alt": "B"
      },
      {
        "type": "field_image",
        "src": "https://blockly-demo.appspot.com/static/tests/media/c.png",
        "width": 32,
        "height": 32,
        "alt": "C"
      },
      {
        "type": "field_image",
        "src": "https://blockly-demo.appspot.com/static/tests/media/d.png",
        "width": 32,
        "height": 32,
        "alt": "D"
      },
      {
        "type": "field_image",
        "src": "https://blockly-demo.appspot.com/static/tests/media/e.png",
        "width": 32,
        "height": 32,
        "alt": "E"
      },
      {
        "type": "field_image",
        "src": "https://blockly-demo.appspot.com/static/tests/media/f.png",
        "width": 32,
        "height": 32,
        "alt": "F"
      },
      {
        "type": "field_image",
        "src": "https://blockly-demo.appspot.com/static/tests/media/g.png",
        "width": 32,
        "height": 32,
        "alt": "G"
      },
      {
        "type": "field_image",
        "src": "https://blockly-demo.appspot.com/static/tests/media/h.png",
        "width": 32,
        "height": 32,
        "alt": "H"
      }
    ],
    "style": "text_blocks"
  },
  {
    "type": "test_style_hat",
    "message0": "Hat block (event)",
    "nextStatement": null,
    "style": "hat_blocks"
  },
  {
    "type": "test_style_hex1",
    "message0": "Block color: Bright purple %1 %2 %3 %4",
    "args0": [
      {
        "type": "field_input",
        "name": "TEXT",
        "text": "#992aff"
      },
      {
        "type": "field_dropdown",
        "name": "DROPDOWN",
        "options": [
          [ "option", "ONE" ],
          [ "option", "TWO" ]
        ]
      },
      {
        "type": "field_checkbox",
        "name": "NAME",
        "checked": true
      },
      {
        "type": "input_value",
        "name": "NAME"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#992aff"
  },
  {
    "type": "test_style_hex2",
    "message0": "Block color: White %1 %2 %3 %4",
    "args0": [
      {
        "type": "field_input",
        "name": "TEXT",
        "text": "#fefefe"
      },
      {
        "type": "field_dropdown",
        "name": "DROPDOWN",
        "options": [
          [ "option", "ONE" ],
          [ "option", "TWO" ]
        ]
      },
      {
        "type": "field_checkbox",
        "name": "NAME",
        "checked": true
      },
      {
        "type": "input_value",
        "name": "NAME"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#fefefe"
  },
  {
    "type": "test_style_hex3",
    "message0": "Block color: Black %1 %2 %3 %4",
    "args0": [
      {
        "type": "field_input",
        "name": "TEXT",
        "text": "#010101"
      },
      {
        "type": "field_dropdown",
        "name": "DROPDOWN",
        "options": [
          [ "option", "ONE" ],
          [ "option", "TWO" ]
        ]
      },
      {
        "type": "field_checkbox",
        "name": "NAME",
        "checked": true
      },
      {
        "type": "input_value",
        "name": "NAME"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#010101"
  },
  {
    "type": "test_style_no_colour",
    "message0": "Block color: unset"
  },
  {
    "type": "test_style_hex4",
    "message0": "Block color: #RRGGBBAA (invalid)",
    "colour": "#992aff99"
  },
  {
    "type": "test_style_hex5",
    "message0": "Block color: #RRGGBB (invalid)",
    "colour": "#NotHex"
  },
  {
    "type": "test_style_emoji",
    "message0": "Robot Face: \uD83E\uDD16",
    "colour": "#AAAAAA"
  }
]);  // END JSON EXTRACT (Do not delete this comment.)

Blockly.Blocks['test_validators_text_null'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("always null")
      .appendField(new Blockly.FieldTextInput("default", this.validate), "INPUT");
    this.setColour(230);
    this.setCommentText('All input validates to null (invalid). The display' +
      ' text will remain the input text, but the value should be the default' +
      ' text. The input should be red after the first keystroke.');
  },

  validate: function(newValue) {
    return null;
  }
};
Blockly.Blocks['test_validators_text_A'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("remove \'a\'")
      .appendField(new Blockly.FieldTextInput("default", this.validate), "INPUT");
    this.setColour(230);
    this.setCommentText('All \'a\' characters are removed from field value.' +
      ' The display text will include invalid \'a\' characters while the' +
      ' field is being edited, but the value will not.');
  },

  validate: function(newValue) {
    return newValue.replace(/\a/g, '');
  }
};
Blockly.Blocks['test_validators_text_B'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("\'b\' -> null")
      .appendField(new Blockly.FieldTextInput("default", this.validate), "INPUT");
    this.setColour(230);
    this.setCommentText('Upon detecting a \'b\' character the input will' +
      ' validated to null (invalid). Upon removal it should revert to being' +
      ' valid. The display text will remain the input text, but if the input' +
      ' text is invalid the value should be the default text.');
  },

  validate: function(newValue) {
    if (newValue.indexOf('b') != -1) {
      return null;
    }
    return newValue;
  }
};

Blockly.Blocks['test_validators_angle_null'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("always null")
      .appendField(new Blockly.FieldAngle(90, this.validate), "INPUT");
    this.setColour(230);
    this.setCommentText('All input validates to null (invalid). The field' +
      ' will display the input while the field is being edited (this' +
      ' includes the text and the graphic), but the value should be the' +
      ' default value. The input should be red after the first' +
      ' keystroke.');
  },

  validate: function(newValue) {
    return null;
  }
};
Blockly.Blocks['test_validators_angle_mult30_force'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("force mult of 30")
      .appendField(new Blockly.FieldAngle(90, this.validate), "INPUT");
    this.setColour(230);
    this.setCommentText('The input value will be rounded to the nearest' +
      ' multiple of 30. The field will display the input while the field is' +
      ' being edited (this includes the text and the graphic), but the value' +
      ' will be the validated (rounded) value. Note: If you want to do' +
      ' rounding this is not the proper way, use the ROUND property of the' +
      ' field angle instead.');
  },

  validate: function(newValue) {
    return Math.round(newValue / 30) * 30;
  }
};
Blockly.Blocks['test_validators_angle_mult30_null'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("not mult of 30 -> null")
      .appendField(new Blockly.FieldAngle(90, this.validate), "INPUT");
    this.setColour(230);
    this.setCommentText('If the input value is not a multiple of 30, the' +
      ' input will validated to null (invalid). The field will display the' +
      ' input while the field is being edited (this includes the text and' +
      ' the graphic), but if the input value is invalid the value should be' +
      ' the default value.');
  },

  validate: function(newValue) {
    if (newValue % 30 != 0) {
      return null;
    }
    return newValue;
  }
};

Blockly.Blocks['test_validators_checkbox_null'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("always null")
      .appendField(new Blockly.FieldCheckbox(true, this.validate), "INPUT");
    this.setColour(230);
    this.setCommentText('The new input always validates to null (invalid).' +
      ' This means that the field value should not change.');
  },

  validate: function(newValue) {
    return null;
  }
};
Blockly.Blocks['test_validators_checkbox_match'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("force match")
      .appendField(new Blockly.FieldCheckbox(true), "MATCH")
      .appendField(new Blockly.FieldCheckbox(true, this.validate), "INPUT");
    this.setColour(230);
    this.setCommentText('The validator for this block only works on the' +
      ' end-most checkbox. The validator will always return the value of the' +
      ' start-most checkbox. Therefor they should always match.')
  },

  validate: function(newValue) {
    return this.sourceBlock_.getFieldValue('MATCH');
  }
};
Blockly.Blocks['test_validators_checkbox_not_match_null'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("not match -> null")
      .appendField(new Blockly.FieldCheckbox(true), "MATCH")
      .appendField(new Blockly.FieldCheckbox(true, this.validate), "INPUT");
    this.setColour(230);
    this.setCommentText('The validator for this block only works on the' +
      ' end-most checkbox. If the new value does not match the value of the' +
      ' start-most checkbox, it will return null (invalid), which means the' +
      ' field value should not change. Therfore they should always match.');
  },

  validate: function(newValue) {
    if (this.sourceBlock_.getFieldValue('MATCH') != newValue) {
      return null;
    }
    return newValue;
  }
};

Blockly.Blocks['test_validators_colour_null'] = {
  init: function() {
    var colourField = new Blockly.FieldColour('#ff0000', this.validate);
    colourField.setColours([
      '#ffffff', '#ffdcdc', '#ffb4b4','#ff8c8c','#ff6464','#ff3c3c','#ff1414',
      '#00ffff', '#00dcdc', '#00b4b4','#008c8c','#006464','#003c3c','#001414']);

    this.appendDummyInput()
      .appendField("always null")
      .appendField(colourField, "INPUT");
    this.setColour(230);
    this.setCommentText('All input validates to null (invalid). This means' +
      ' the field value should not change.');
  },

  validate: function(newValue) {
    return null;
  }
};
Blockly.Blocks['test_validators_colour_force_red'] = {
  init: function() {
    var colourField = new Blockly.FieldColour('#ff0000', this.validate);
    colourField.setColours([
      '#ffffff', '#ffdcdc', '#ffb4b4','#ff8c8c','#ff6464','#ff3c3c','#ff1414',
      '#00ffff', '#00dcdc', '#00b4b4','#008c8c','#006464','#003c3c','#001414']);

    this.appendDummyInput()
      .appendField("force full red")
      .appendField(colourField, "INPUT");
    this.setColour(230);
    this.setCommentText('The input will have its red value replaced with' +
      ' full red.');
  },

  validate: function(newValue) {
    return '#ff' + newValue.substr(3, 4);
  }
};
Blockly.Blocks['test_validators_colour_red_null'] = {
  init: function() {
    var colourField = new Blockly.FieldColour('#ff0000', this.validate);
    colourField.setColours([
      '#ffffff', '#ffdcdc', '#ffb4b4','#ff8c8c','#ff6464','#ff3c3c','#ff1414',
      '#00ffff', '#00dcdc', '#00b4b4','#008c8c','#006464','#003c3c','#001414']);

    this.appendDummyInput()
      .appendField("not red -> null")
      .appendField(colourField, "INPUT");
    this.setColour(230);
    this.setCommentText('If the input does not have full red, the input will' +
      ' validate to null (invalid). Otherwise it will return the input value');
  },

  validate: function(newValue) {
    if (newValue.substr(1, 2) != 'ff') {
      return null;
    }
    return newValue;
  }
};

Blockly.Blocks['test_validators_date_null'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("always null")
      .appendField(new Blockly.FieldDate("2020-02-20", this.validate), "INPUT");
    this.setColour(230);
    this.setCommentText('All input validates to null (invalid). This means' +
      ' the field value should not change.');
  },

  validate: function(newValue) {
    // We should be able to expect validators to like their initial values.
    if (newValue != '2020-02-20') {
      return null;
    }
  }
};
Blockly.Blocks['test_validators_date_force_20s'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("force day 20s")
      .appendField(new Blockly.FieldDate("2020-02-20", this.validate), "INPUT");
    this.setColour(230);
    this.setCommentText('The input\'s date will change to always be in the' +
      ' 20s.');
  },

  validate: function(newValue) {
    return newValue.substr(0, 8) + '2' + newValue.substr(9, 1);
  }
};
Blockly.Blocks['test_validators_date_20s_null'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("not 20s -> null")
      .appendField(new Blockly.FieldDate("2020-02-20", this.validate), "INPUT");
    this.setColour(230);
    this.setCommentText('If the input is not in the 20s, the input will' +
      ' validate to null (invalid). Otherwise it will return the input value.');
  },

  validate: function(newValue) {
    if (newValue.charAt(8) != '2') {
      return null;
    }
    return newValue;
  }
};

Blockly.Blocks['test_validators_dropdown_null'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("always null")
      .appendField(new Blockly.FieldDropdown([
        ["1a","1A"], ["1b","1B"], ["1c","1C"],
        ["2a","2A"], ["2b","2B"], ["2c","2C"]], this.validate), "INPUT");
    this.setColour(230);
    this.setCommentText('All input validates to null (invalid). This means' +
      ' the field value should not change.');
  },

  validate: function(newValue) {
    return null;
  }
};
Blockly.Blocks['test_validators_dropdown_force_1s'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("force 1s")
      .appendField(new Blockly.FieldDropdown([
        ["1a","1A"], ["1b","1B"], ["1c","1C"],
        ["2a","2A"], ["2b","2B"], ["2c","2C"]], this.validate), "INPUT");
    this.setColour(230);
    this.setCommentText('The input\'s value will always change to start with' +
      ' 1.');
  },

  validate: function(newValue) {
    return '1' + newValue.charAt(1);
  }
};
Blockly.Blocks['test_validators_dropdown_1s_null'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("not 1s -> null")
      .appendField(new Blockly.FieldDropdown([
        ["1a","1A"], ["1b","1B"], ["1c","1C"],
        ["2a","2A"], ["2b","2B"], ["2c","2C"]], this.validate), "INPUT");
    this.setColour(230);
    this.setCommentText('If the input does not start with 1, the input will' +
      ' validate to null (invalid). Otherwise it will return the input value.');
  },

  validate: function(newValue) {
    if (newValue.charAt(0) != '1') {
      return null;
    }
    return newValue;
  }
};

Blockly.Blocks['test_validators_number_null'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("always null")
      .appendField(new Blockly.FieldNumber(123, null, null, null, this.validate), "INPUT");
    this.setColour(230);
    this.setCommentText('All input validates to null (invalid). The field' +
      ' will display the input while the field is being edited, but the value' +
      ' should be the default value. The input should be red after the first' +
      ' keystroke.');
  },

  validate: function(newValue) {
    return null;
  }
};
Blockly.Blocks['test_validators_number_mult10_force'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("force mult of 10")
      .appendField(new Blockly.FieldNumber(123, null, null, null, this.validate), "INPUT");
    this.setColour(230);
    this.setCommentText('Theinput value will be rounded to the nearest' +
      ' multiple of 10. The field will display the input while the field is' +
      ' being edited, but the value should be the validated (rounded) value.' +
      ' Note: If you want to do rounding this is not the proper way, use the' +
      ' precision option of the number field constructor instead.');
  },

  validate: function(newValue) {
    return Math.round(newValue / 10) * 10;
  }
};
Blockly.Blocks['test_validators_number_mult10_null'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("not mult of 10 -> null")
      .appendField(new Blockly.FieldNumber(123, null, null, null, this.validate), "INPUT");
    this.setColour(230);
    this.setCommentText('If the input value is not a multiple of 10, the' +
      ' input will validate to null (invalid). The field will display the' +
      ' input while the field is being edited, but if the input value is' +
      ' invalid the value should be the default value.');
  },

  validate: function(newValue) {
    if (newValue % 10 != 0) {
      return null;
    }
    return newValue;
  }
};

Blockly.Blocks['test_validators_variable_null'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("always null")
      .appendField(new Blockly.FieldVariable('1a', this.validate), "INPUT");
    this.setColour(230);
    this.setCommentText('All ids validate to null (invalid). This means' +
      ' the variable should not change.');
  },

  validate: function(newValue) {
    return null;
  }
};
Blockly.Blocks['test_validators_variable_force_1s'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("force 1s")
      .appendField(new Blockly.FieldVariable('1a', this.validate), "INPUT");
    this.setColour(230);
    this.setCommentText('The id will always change to start with 1.');
  },

  validate: function(newValue) {
    return '1' + newValue.charAt(1);
  }
};
Blockly.Blocks['test_validators_variable_1s_null'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("not 1s -> null")
      .appendField(new Blockly.FieldVariable('1a', this.validate), "INPUT");
    this.setColour(230);
    this.setCommentText('If the id does not start with 1, the id will' +
      ' validate to null (invalid). Otherwise it will return the id.');
  },

  validate: function(newValue) {
    if (newValue.charAt(0) != '1') {
      return null;
    }
    return newValue;
  }
};

Blockly.Blocks['test_basic_empty_with_mutator'] = {
  init: function() {
    this.setMutator(new Blockly.Mutator(['math_number']));
  }
};

Blockly.Blocks['test_dropdowns_dynamic'] = {
  init: function() {
    var dropdown = new Blockly.FieldDropdown(this.dynamicOptions);
    this.appendDummyInput()
      .appendField('dynamic')
      .appendField(dropdown, 'OPTIONS');
  },

  dynamicOptions: function() {
    if (!Blockly.TestBlocks.dynamicDropdownOptions_.length) {
      return [['', 'OPTION0']];
    }
    return Blockly.TestBlocks.dynamicDropdownOptions_;
  }
};

/**
 * An array of options for the dynamic dropdown.
 * @type {!Array<!Array>}
 * @package
 */
Blockly.TestBlocks.dynamicDropdownOptions_ = [];

/**
 * Handles "add option" button in the field test category. This will prompt
 * the user for an option to add.
 * @package
 */
Blockly.TestBlocks.addDynamicDropdownOption_ = function() {
  Blockly.prompt('Add an option?',
      'option '  + Blockly.TestBlocks.dynamicDropdownOptions_.length,
      function(text) {
    if (text) {
      // Do not remove this log! Helps you know if it was added correctly.
      console.log('Adding option: ' + text);
      // The option is an array containing human-readable text and a
      // language-neutral id.
      Blockly.TestBlocks.dynamicDropdownOptions_.push(
          [text, 'OPTION' + Blockly.TestBlocks.dynamicDropdownOptions_.length]);
    }
  })
};

/**
 * Handles "remove option" button in the field test category. This will prompt
 * the user for an option to remove. May remove multiple options with the
 * same name.
 * @package
 */
Blockly.TestBlocks.removeDynamicDropdownOption_ = function() {
  var defaultText = Blockly.TestBlocks.dynamicDropdownOptions_[0] ?
      Blockly.TestBlocks.dynamicDropdownOptions_[0][0] : '';
  Blockly.prompt('Remove an option?', defaultText, function(text) {
    for (var i = 0, option;
         option = Blockly.TestBlocks.dynamicDropdownOptions_[i];
         i++) {
      // The option is an array containing human-readable text and a
      // language-neutral id, we'll compare against the human-readable text.
      if (option[0] == text) {
        // Do not remove this log! Helps you know if it was removed correctly.
        console.log('Removing option: ' + text);
        Blockly.TestBlocks.dynamicDropdownOptions_.splice(i, 1);
      }
    }
  })
};
