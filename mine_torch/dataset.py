import torch
import torch.nn as nn
from torchvision.datasets import MNIST, CIFAR10
import torchvision.transforms as transforms
from torchvision.models.detection import maskrcnn_resnet50_fpn

transform = transforms.Compose([transforms.ToTensor(),
                                transforms.Normalize((0.5, 0.5, 0.5), (0.5, 0.5, 0.5))])

def Train_Set(dataset):
    if dataset == 'objects':
        dataset = CIFAR10(root='./data', train=True, download=True, transform=transform)
    elif dataset == 'numbers':
        dataset = MNIST(root='./data', train=True, download=True, transform=transform)

    return torch.utils.data.DataLoader(dataset, batch_size=1, shuffle=True, num_workers=2)

def Inference_objects(model, input):
    result = model(input)
    _, idx = torch.max(result[0]).detach().cpu()
    classes = ('plane', 'car', 'bird', 'cat', 'deer', 'dog', 'frog', 'horse', 'ship', 'truck')
    print('Your model guess the object in image is {}'.format(classes[idx]))

def Inference_numbers(model, input):
    result = model(input)
    _, idx = torch.max(result[0]).detach().cpu()
    print('Your model guess the number in image is {}'.format(idx.item()))

def Inference_detect(model, input):
    result = model(input)
    _, box = result[0][0].detach().cpu()
    print('Your model guess the number in image is at '.format(box.numpy()))

def train(model, data):
    image, label = data
    label_hat = model(image)
    loss = nn.BCELoss(label_hat, label)
    loss.backward()

class MaskRCNN(nn.Module):
    def __init__(self):
        super(MaskRCNN, self).__init__()
        net = maskrcnn_resnet50_fpn(pretrained=True)
        net.eval()
        raw_layers = list(net.children())
        self.transform = raw_layers[0]
        self.backbone = raw_layers[1]
        self.rpn = raw_layers[2]
        self.roi_heads = raw_layers[3]
        self.interested_ids = [3, 6, 8]


    def forward(self, images):
        original_image_sizes = [img.shape[-2:] for img in images]
        images, _ = self.transform(images)
        features = self.backbone(images.tensors)
        proposals, _ = self.rpn(images, features)
        detections, _ = self.roi_heads(features, proposals, images.image_sizes)
        detections = self.transform.postprocess(detections, images.image_sizes, original_image_sizes)

        detached_detections = []

        for detection in detections:
            detached_detections.append({k:v.detach() for k, v in detection.items()})

        # filter out classes other than cars; maskrcnn_outputs is a list of dictionary
        boxes = []
        masks = []
        for output in detections:
            interested_entries = []
            for id in self.interested_ids:
                interested_entries.append(((output['labels'] == id) * (output['scores'] > 0.6)).nonzero())
            interested_entries = torch.cat(interested_entries).flatten()
            boxes.append(torch.index_select(output['boxes'], 0, interested_entries))

        return boxes
