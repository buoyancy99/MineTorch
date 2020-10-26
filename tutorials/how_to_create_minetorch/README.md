# How to Build MineTorch?

Our app uses Blockly to build components of a Deep Learning pipeline. Deep Learning is a very dynamic field. If the application changes, we need to build a new model.
Not all components for trending Deep Learning projects, are available in MineTorch. For such need, I will explain in detail how to build blocks in Blockly like we did to build MineTorch.

### What is Blockly?

Blockly is a library that adds a visual code editor to web and mobile apps. The Blockly editor uses interlocking - graphical blocks to represent code concepts like:
* Logical expressions
* Variables
* Loops

It allows users to apply programming principles, without having to write syntax or using the command line.

The below image shows a simple code with the condition 
`count > 256` 
The program will set the count to zero and then print
`Game Over`
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





