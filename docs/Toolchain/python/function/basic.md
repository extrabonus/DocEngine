# 函数基础用法

## `def function_name(parameters):`
**描述**: 基础函数定义语法，用于创建可重复调用的代码块。  
**参数**:
- `parameters`: 形式参数列表（可选），支持多种参数类型。

**示例**:
```python
def greet():
    print("Hello!")

greet()  # 输出: Hello!
```

## 参数类型

### 位置参数
**描述**: 按顺序接收的常规参数，调用时必须传入对应位置的实参。  

**示例**:
```python
def add(a, b):
    return a + b

print(add(2, 3))  # 输出: 5
```


### 默认参数
**描述**: 定义时给定默认值的参数，调用时可省略，默认函数可被实参覆盖。  

**示例**:
```python
def power(base, exp=2):
    return base ** exp

print(power(3))     # 输出: 9
print(power(3, 3))  # 输出: 27
```


### 可变参数 `*args`
**描述**: 接收任意数量的位置参数，打包为元组。  

**示例**:
```python
def sum_all(*numbers):
    return sum(numbers)

print(sum_all(1, 2, 3))  # 输出: 6
```


### 关键字参数 `**kwargs`
**描述**: 接收任意数量的关键字参数，打包为字典。  

**示例**:
```python
def user_info(**details):
    for key, value in details.items():
        print(f"{key}: {value}")

user_info(name="Alice", age=30)
# 输出:
# name: Alice
# age: 30
```


## 返回值 `return`
**描述**: 结束函数执行并返回结果，可返回多个值（自动打包为元组）。  

**示例**:
```python
def min_max(nums):
    return min(nums), max(nums)

print(min_max([2, 5, 1]))  # 输出: (1, 5)
```