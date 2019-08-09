/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2019 Google Inc.
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

suite ('Label Fields', function() {
  function assertValue(labelField, expectedValue) {
    var actualValue = labelField.getValue();
    var actualText = labelField.getText();
    assertEquals(actualValue, expectedValue);
    assertEquals(actualText, expectedValue);
  }
  function assertValueDefault(labelField) {
    assertValue(labelField, '');
  }
  suite('Constructor', function() {
    test('Empty', function() {
      var labelField = new Blockly.FieldLabel();
      assertValueDefault(labelField);
    });
    test('Null', function() {
      var labelField = new Blockly.FieldLabel(null);
      assertValueDefault(labelField);
    });
    test('Undefined', function() {
      var labelField = new Blockly.FieldLabel(undefined);
      assertValueDefault(labelField);
    });
    test('String', function() {
      var labelField = new Blockly.FieldLabel('value');
      assertValue(labelField, 'value');
    });
    test('Number (Truthy)', function() {
      var labelField = new Blockly.FieldLabel(1);
      assertValue(labelField, '1');
    });
    test('Number (Falsy)', function() {
      var labelField = new Blockly.FieldLabel(0);
      assertValue(labelField, '0');
    });
    test('Boolean True', function() {
      var labelField = new Blockly.FieldLabel(true);
      assertValue(labelField, 'true');
    });
    test('Boolean False', function() {
      var labelField = new Blockly.FieldLabel(false);
      assertValue(labelField, 'false');
    });
  });
  suite('fromJson', function() {
    test('Empty', function() {
      var labelField = new Blockly.FieldLabel.fromJson({});
      assertValueDefault(labelField);
    });
    test('Null', function() {
      var labelField = new Blockly.FieldLabel.fromJson({ text:null });
      assertValueDefault(labelField);
    });
    test('Undefined', function() {
      var labelField = new Blockly.FieldLabel.fromJson({ text:undefined });
      assertValueDefault(labelField);
    });
    test('String', function() {
      var labelField = Blockly.FieldLabel.fromJson({ text:'value' });
      assertValue(labelField, 'value');
    });
    test('Number (Truthy)', function() {
      var labelField = Blockly.FieldLabel.fromJson({ text:1 });
      assertValue(labelField, '1');
    });
    test('Number (Falsy)', function() {
      var labelField = Blockly.FieldLabel.fromJson({ text:0 });
      assertValue(labelField, '0');
    });
    test('Boolean True', function() {
      var labelField = Blockly.FieldLabel.fromJson({ text:true });
      assertValue(labelField, 'true');
    });
    test('Boolean False', function() {
      var labelField = Blockly.FieldLabel.fromJson({ text:false });
      assertValue(labelField, 'false');
    });
  });
  suite('setValue', function() {
    suite('Empty -> New Value', function() {
      setup(function() {
        this.labelField = new Blockly.FieldLabel();
      });
      test('Null', function() {
        this.labelField.setValue(null);
        assertValueDefault(this.labelField);
      });
      test('Undefined', function() {
        this.labelField.setValue(undefined);
        assertValueDefault(this.labelField);
      });
      test('New String', function() {
        this.labelField.setValue('newValue');
        assertValue(this.labelField, 'newValue');
      });
      test('Number (Truthy)', function() {
        this.labelField.setValue(1);
        assertValue(this.labelField, '1');
      });
      test('Number (Falsy)', function() {
        this.labelField.setValue(0);
        assertValue(this.labelField, '0');
      });
      test('Boolean True', function() {
        this.labelField.setValue(true);
        assertValue(this.labelField, 'true');
      });
      test('Boolean False', function() {
        this.labelField.setValue(false);
        assertValue(this.labelField, 'false');
      });
    });
    suite('Value -> New Value', function() {
      setup(function() {
        this.labelField = new Blockly.FieldLabel('value');
      });
      test('Null', function() {
        this.labelField.setValue(null);
        assertValue(this.labelField, 'value');
      });
      test('Undefined', function() {
        this.labelField.setValue(undefined);
        assertValue(this.labelField, 'value');
      });
      test('New String', function() {
        this.labelField.setValue('newValue');
        assertValue(this.labelField, 'newValue');
      });
      test('Number (Truthy)', function() {
        this.labelField.setValue(1);
        assertValue(this.labelField, '1');
      });
      test('Number (Falsy)', function() {
        this.labelField.setValue(0);
        assertValue(this.labelField, '0');
      });
      test('Boolean True', function() {
        this.labelField.setValue(true);
        assertValue(this.labelField, 'true');
      });
      test('Boolean False', function() {
        this.labelField.setValue(false);
        assertValue(this.labelField, 'false');
      });
    });
  });
});
