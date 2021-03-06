# MineTorch

Minetorch is a Blocky programming platform for children to learn and integrate deep learning models into their projects

This platform allows children to use the building structure of a deep learning pipeline which can be visualized and easy to understand

## Machine Learning Model Creation

MineTorch allows us to use Machine Learning components in the form of blocks.

### How to add a Dataset Block

We can use datasets containing Numeric and Image data using Dataset block.

![datasets](Images/Datasets.gif)

### How to build a Model Architecture

A deep learning model is made of Multiple layers like Dense Layer, Convolution Layer, Activation Function, etc. We have a separate block for each of such components. The block associated with such layers allows us to choose hyperparameters of the model using a dropdown in the block.  

We can combine each layer in sequence and create a complete model architecture using blocks.

![model](Images/Model.gif)

As shown in the above demo, we will also get a PyTorch model code in python. Here is the generated Python code from the above demo:

```python
model = None

model = nn.Sequential(*[nn.Conv2d(3, 36, 3, 1, 1), nn.Tanh(), nn.Conv2d(36, 64, 3, 1, 1), nn.Tanh(), nn.Conv2d(64, 128, 3, 1, 1), nn.Tanh(), nn.Dense(512, 10)])
```

### How to create a Train Model Block

During Model training we perform the following operations:
1. Get data from Dataset
2. Pass it through the Model
3. Train Model using data for performance improvement
4. Repeat steps 1-3 with epochs times

For performing each of the above steps we have added blocks which takes input from the user and generates python code accordingly:

![Training](Images/Training.gif)

Here is the generated python code:

```python
dataset = None
model = None
data = None


dataset = bt.Train_Set(imagenet)
model = nn.Sequential(*[nn.Conv2d(3, 16, 3, 2, 1), nn.ReLU(), nn.Conv2d(16, 32, 3, 2, 1), nn.ReLU(), nn.Dense(256, 10)])
for count in range(10):
  data = next(dataset)
  bt.train(model,data)
```

### How to make a Prediction Block

For Prediction also we have made a simple block that takes data and model as input and returns model prediction.

We can store that model prediction in one variable variable:

![Prediction](Images/Prediction.gif)

```python
dataset = None
model = None
data = None
prediction = None

dataset = bt.Train_Set(imagenet)
model = nn.Sequential(*[nn.Conv2d(3, 16, 3, 2, 1), nn.ReLU(), nn.Conv2d(16, 32, 3, 2, 1), nn.ReLU(), nn.Dense(256, 10)])
for count in range(10):
  data = next(dataset)
  bt.train(model,data)prediction = model(data)
```

The Final Block Structure is shown in the below image:

![final_block](Images/final_block.PNG)
