# Blog Post 2

Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.

> [!IMPORTANT]
> This is an important note.

lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet sapien

> [!TIP]
> This is a tip.

![](https://via.placeholder.com/150)

lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet sapien

> [!WARNING]
> This is a warning.

```python
import numpy as np

def sigmoid(x):
    return 1 / (1 + np.exp(-x))

def sigmoid_derivative(x):
    return x * (1 - x)

def tanh_derivative(x):
    return 1 - np.tanh(x)**2

def relu(x):
    return np.maximum(0, x)

def relu_derivative(x):
    return np.where(x > 0, 1, 0)

def linear(x):
    return x

def linear_derivative(x):
    return np.ones_like(x)

def make_activation(activation):
    if activation == 'sigmoid':
        return sigmoid, sigmoid_derivative
    elif activation == 'tanh':
        return np.tanh, tanh_derivative
    elif activation == 'relu':
        return relu, relu_derivative
    elif activation == 'linear':
        return linear, linear_derivative
    else:
        raise ValueError(f'Unknown activation: {activation}')

def main():
    activation = 'sigmoid'
    activation_fn, activation_derivative = make_activation(activation)
    print(activation_fn(0.5))
    print(activation_derivative(0.5))

if __name__ == '__main__':
    main()
```

lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet sapien
