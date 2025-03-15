# 基础概念

## **类（Class）**
**描述**：类是创建对象的蓝图，定义了对象的属性（数据）和方法（行为）。类是抽象的模板。  
**示例**：
```python
class Dog:  # 定义类
    def bark(self):
        print("Woof!")
```


## **对象（Object）**
**描述**：对象是类的实例，具有类中定义的属性和方法。对象是具体的实体。  
**示例**：
```python
my_dog = Dog()  # 创建对象
my_dog.bark()   # 输出: Woof!
```


## **实例化（Instantiation）**
**描述**：通过类创建对象的过程，使用类名后加括号（可能需参数）完成。  
**示例**：
```python
dog = Dog()  # 实例化
```

## **构造函数（`__init__`）**
**描述**：类中名为 `__init__` 的特殊方法，在对象创建时自动调用，用于初始化属性。  
**示例**：
```python
class Cat:
    def __init__(self, name):
        self.name = name  # 初始化属性

cat = Cat("Whiskers")  # 创建对象时传入参数
```


## **方法（Method）**
**描述**：类中定义的函数，分为三种：
- **实例方法**：操作实例属性，第一个参数为 `self`。
- **类方法**：操作类属性，用 `@classmethod` 装饰，参数为 `cls`。
- **静态方法**：与类无关的工具方法，用 `@staticmethod` 装饰，无 `self` 或 `cls`。  

**示例**：
```python
class Calculator:
    def add(self, a, b):       # 实例方法
        return a + b
    @classmethod
    def version(cls):          # 类方法
        return "v1.0"
    @staticmethod
    def is_even(num):          # 静态方法
        return num % 2 == 0
```

**类方法（@classmethod）**

**特点**
- **参数**：必须接受 `cls` 作为第一个参数，指向类本身。
- **用途**：
  - 修改类级别的属性。
  - 实现工厂模式（通过类名创建不同形式的实例）。
  - 在继承场景中，子类调用父类方法时，`cls` 会自动指向子类。

**示例**
```python
class Car:
    wheels = 4  # 类属性

    def __init__(self, brand):
        self.brand = brand

    @classmethod
    def update_wheels(cls, new_wheels):
        cls.wheels = new_wheels  # 修改类属性

    @classmethod
    def from_json(cls, json_data):
        # 工厂方法：通过 JSON 数据创建实例
        brand = json_data["brand"]
        return cls(brand)

# 调用类方法修改类属性
Car.update_wheels(6)
print(Car.wheels)  # 输出: 6

# 通过工厂方法创建实例
car_data = {"brand": "Tesla"}
tesla = Car.from_json(car_data)
print(tesla.brand)  # 输出: Tesla
```

**静态方法（@staticmethod）**
**特点**
- **参数**：无默认的 `self` 或 `cls` 参数，类似于普通函数。
- **用途**：
  - 实现与类相关但无需访问类或实例状态的工具函数。
  - 代码组织：将逻辑上属于类的函数放在类内部。

**示例**
```python
class MathUtils:
    @staticmethod
    def add(a, b):
        return a + b

    @staticmethod
    def is_valid_number(value):
        # 验证是否为数字的静态方法
        return isinstance(value, (int, float))

# 调用静态方法
print(MathUtils.add(3, 5))          # 输出: 8
print(MathUtils.is_valid_number(10)) # 输出: True
```



## **继承（Inheritance）**
**描述**：子类继承父类的属性和方法，并可扩展或重写父类功能。  
**示例**：
```python
class Animal:                  # 父类
    def speak(self):
        print("Animal sound")

class Dog(Animal):             # 子类
    def speak(self):           # 重写父类方法
        print("Woof!")
```


## **多态（Polymorphism）**
**描述**：不同类的对象对同一方法调用表现出不同行为（通过继承或接口实现）。  
**示例**：
```python
class Cat(Animal):
    def speak(self):
        print("Meow")

animals = [Dog(), Cat()]
for animal in animals:
    animal.speak()  # 输出: Woof! / Meow
```


## **封装（Encapsulation）**
**描述**：隐藏对象内部实现细节，通过公共方法控制对属性的访问。常用私有属性（以 `_` 或 `__` 开头）实现。  
**示例**：
```python
class BankAccount:
    def __init__(self):
        self.__balance = 0  # 私有属性
    def deposit(self, amount):
        self.__balance += amount
    def get_balance(self):  # 公共方法访问私有属性
        return self.__balance
```


## **属性（Attribute）**
**描述**：对象或类存储的数据，分为：
- **实例属性**：属于特定对象（通过 `self` 定义）。
- **类属性**：属于类本身，所有对象共享。  

**示例**：
```python
class Car:
    wheels = 4                # 类属性（所有车有4个轮子）
    def __init__(self, color):
        self.color = color    # 实例属性（每辆车的颜色不同）
```


## **特殊方法（Magic Methods）**
**描述**：以双下划线 `__` 开头和结尾的方法，用于实现运算符重载或对象行为（如 `__str__`, `__add__`）。  
**示例**：
```python
class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    def __add__(self, other):  # 重载 + 运算符
        return Vector(self.x + other.x, self.y + other.y)
    def __str__(self):          # 定义打印格式
        return f"({self.x}, {self.y})"
```


## **访问控制（Access Control）**
**描述**：通过命名约定限制属性访问：
- **公有属性**：直接访问（如 `obj.attr`）。
- **私有属性**：以 `__` 开头，只能在类内部访问（实际通过名称修饰实现）。  

**示例**：
```python
class Student:
    def __init__(self, name):
        self.__name = name  # 私有属性
    def get_name(self):
        return self.__name  # 内部可访问

s = Student("Alice")
print(s.__name)        # 报错！外部无法直接访问
print(s.get_name())    # 输出: Alice
```


## **组合与聚合（Composition & Aggregation）**
**描述**：通过将其他类的对象作为属性复用代码，而非继承：
- **组合**：整体与部分同生命周期（如汽车包含发动机）。
- **聚合**：整体与部分可独立存在（如班级包含学生）。  

**示例**：
```python
class Engine:
    def start(self):
        print("Engine started")

class Car:
    def __init__(self):
        self.engine = Engine()  # 组合：Car 对象销毁时 Engine 也销毁

car = Car()
car.engine.start()  # 输出: Engine started
```
 

## **抽象类（Abstract Class）**
**描述**：不能被实例化的类，用于定义子类必须实现的方法（通过 `abc` 模块实现）。  
**示例**：
```python
from abc import ABC, abstractmethod

class Shape(ABC):        # 抽象类
    @abstractmethod
    def area(self):      # 抽象方法
        pass

class Circle(Shape):
    def area(self):      # 子类必须实现
        return 3.14 * self.radius ** 2
```

