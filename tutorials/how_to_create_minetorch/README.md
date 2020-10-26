# How to Build MineTorch?

Our app uses Blockly to build component of deep learning pipeline. Deep Learning is very dynamic field. We have to build totally different model if application changes. For newly researched deep learning things we might need to have component which is not currently available in MineTorch. For such need i will explain details to build Blocks in Blockly like we did to build MineTorch.

### What is Blockly?

Blockly is a library that adds a visual code editor to web and mobile apps. The Blockly editor uses interlocking, graphical blocks to represent code concepts like variables, logical expressions, loops, and more. It allows users to apply programming principles without having to worry about syntax or the intimidation of a blinking cursor on the command line.

Below image shows a simple code when the condition `count > 256` the program will set the count to zero and print `Game Over`.
![blocklly_image](Images/simple_blockly.png)

For more details check this [github](https://github.com/google/blockly) and [Project Page](https://developers.google.com/blockly/)

### How we choose to use Blockly?

We wanted an interface that allows to add component in UI in the form block and by combining blocks we can generate logically connected deep learning block and python code. We come across blockly. It have some build in Blocks of Programming. We realized we need to Build Custom High Level Blocks for Deep Learning. We gone through [Developer Guide](https://developers.google.com/blockly/guides/configure/web/custom-blocks) to build custom blocks in blockly. 
  
### How to add Deep Learning Component?

I will explain steps to add a simple block. 

## References:
* https://github.com/google/blockly
* https://developers.google.com/blockly/
* https://developers.google.com/blockly/guides/configure/web/custom-blocks





