# yolo学习

## train.py 训练yolo数据集

```shell
# Train YOLOv5s on COCO128 for 5 epochs
python train.py --img 640 --batch 2 --epochs 5 --data coco128.yaml --weights yolov5s.pt --device 0
```

## cuda版本和GPU需要匹配

```python
import torch
torch.cuda.device_count()
torch.cuda.is_available()
```

## yolo训练前置要求

## yolo数据集要求

每类图像。每类≥1.5k图像
每类的实例。每类共有≥10k个实例（标记的对象）。
图像种类。必须对部署的环境具有代表性。对于真实世界的用例，我们推荐来自一天中不同时间、不同季节、不同天气、不同照明、不同角度、不同来源（网上搜刮、本地收集、不同相机）等的图像。
标签的一致性。所有图像中的所有类的实例都必须被标记。部分标签是行不通的。
标签的准确性。标签必须紧密包围每个物体。在一个物体和它的边界框之间不应该有任何空间。任何对象都不能缺少标签。
背景图像。背景图像是没有对象的图像，被添加到数据集中以减少假阳性（FP）。我们推荐大约0-10%的背景图像来帮助减少FP（COCO有1000张背景图像供参考，占总数的1%）。

## yolo模型选择

像YOLOv5x和YOLOv5x6这样的大型模型几乎在所有情况下都会产生更好的结果，但有更多的参数，需要更多的CUDA内存来训练，而且运行速度较慢。对于移动部署，我们推荐YOLOv5s/m，对于云部署，我们推荐YOLOv5l/x。请参阅我们的README表格，了解所有模型的全面比较。

## 计算指标

总人数100，男80，女生20。

目标：找出所有女生

选50人，其中20人女，

TP: True Positive.本来就是positive，并且正确的判断为positive
FP：False Positive。本来是false，但是我错误判断为positive
FN：False Negatives。错误判断为父类，本来是positive，但是被判断为false
TN：True Negatives。本来就是negative，判断为negative。

TP=20，FP=30，FN=0，TN=50，map