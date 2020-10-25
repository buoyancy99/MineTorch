# MindTorch:

Minetorch is a blockyly programming platform for children to learn and integrate deep learning models into their projects

This platform allows children to use build structure of deep learning pipeline which can be vizulized and easy to understand

## Machine Learning model Creation:

MineTorch allows us to use Machine Learning components in the form of blocks.

## How to add datasets:

We can use datasets containing Numeric and Image data using Dataset block.

![datasets](Images/Datasets.gif)

## How to Build Model Architecture:

Deep learning model is made of Multiple layers like Dense Layer, Convolution Layer, Activation Function etc. We have separate block for each of such components. The block associated with such layers allows us to choose hyper parameters of model using dropdown in the block.  

We can combine each layer in sequence and create a complete model architecture using blocks.

![model](Images/model.gif)

As shown in above demo, we will also get pytorch model code in different programming language like python, Javascript etc.

Here is generated Python code for above demo,

```python
model = None

model = nn.Sequential(*[nn.Conv2d(3, 36, 3, 1, 1), nn.Tanh(), nn.Conv2d(36, 64, 3, 1, 1), nn.Tanh(), nn.Conv2d(64, 128, 3, 1, 1), nn.Tanh(), nn.Dense(512, 10)])
```
