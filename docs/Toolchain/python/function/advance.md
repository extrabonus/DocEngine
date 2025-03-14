# 函数高阶用法

## 作用域规则
**描述**: LEGB规则（Local -> Enclosed -> Global -> Built-in）。
- Local：函数内部的变量，比如在函数内部定义的变量。
- Enclosed：嵌套函数中，外层函数的变量。例如，闭包中的外部函数变量。
- Global：模块级别的变量，在函数外部定义的变量。
- Built-in：Python内置的变量，比如内置函数或异常类。

**示例**:
```python
x = 10  # Global

def func():
    x = 20  # Local
    print(x)

func()       # 输出: 20
print(x)     # 输出: 10
```

## `nonlocal`关键字
如果内层函数需要 修改 外层变量（而非读取），必须用 `nonlocal` 声明：
```python
def outer():
    x = 1
    def inner():
        nonlocal x  # 必须声明！
        x += 1
        return x
    return inner
```


## 闭包
**描述**: 闭包（Closure）是**一个函数** + **它捕获的外部变量**，使得这个函数可以**记住**它被创建时的上下文环境。
##### 三个关键条件
- **嵌套函数**：函数内部定义了另一个函数。
- **内部函数使用外部函数的变量**：子函数使用了父函数的局部变量。
- **外部函数返回内部函数**：父函数将子函数作为返回值返回。

**示例**:
```python
def outer():  # 外层函数
    x = 10  # 外层函数的局部变量

    def inner():  # 内层函数（闭包）
        return x + 5  # 使用了外层函数的变量x

    return inner  # 返回内层函数

closure = outer()  # 调用outer()，返回inner函数
print(closure())  # 输出 15
```
**闭包形成**：inner 函数记住了外层函数 outer 的变量 x，即使 outer 已经执行完毕，x 依然存在。

#### 应用场景
- **状态保持**：代替简单的类（例如计数器、生成器）。
- **延迟执行**：预先配置某些参数（类似工厂模式）。
- **装饰器**：Python 装饰器的核心实现依赖闭包。

## 装饰器
**描述**: 是 Python 中一种**动态修改函数行为**的语法工具。它的核心思想是**在不修改原函数代码的前提下，为函数添加额外功能**（如日志、计时、权限验证等）。使用`@decorator`语法。  

- **本质**：装饰器是一个高阶函数（接受函数作为参数，并返回函数）。
- **作用**：像“包装盒”一样包裹原函数，在调用原函数前后插入新功能。
- **语法**：通过@装饰器名的语法糖实现，使代码简洁易读。

**示例**:
```python
# 给函数添加“打印执行时间”的功能。
import time

# 定义装饰器
def timer_decorator(func):
    def wrapper():
        start_time = time.time()
        func()          # 调用原函数
        end_time = time.time()
        print(f"函数执行耗时: {end_time - start_time:.2f}秒")
    return wrapper

# 使用装饰器  @timer_decorator 等价于 my_function = timer_decorator(my_function)。
# 此时，my_function 变量不再指向原来的函数，而是指向 timer_decorator 返回的 wrapper 函数。
@timer_decorator
def my_function(): #原函数
    time.sleep(1)
    print("函数执行完毕")

# 调用函数
# 执行路径：my_function() → @timer_decorator → wrapper() → func() (即原 my_function)
my_function() 

# 输出
# 函数执行完毕
# 函数执行耗时: 1.00秒
```

#### 类比理解

想象你点外卖：

- 原函数`my_function`是厨师做饭。
- 装饰器`timer_decorator`是外卖平台：
    - 外卖小哥（`wrapper`）先去接单（记录开始时间）。
    - 然后让厨师做饭（调用 `func()`）。
    - 最后送餐并计算时间（记录结束时间）。
- 你通过外卖平台订餐，实际还是厨师做的饭，但多了外卖平台的附加服务。




## Lambda函数
**描述**: 匿名函数，用于简化简单操作的定义。  

**示例**:
```python
square = lambda x: x ** 2
print(square(4))  # 输出: 16

# 常用于高阶函数
nums = [1, 2, 3]
print(list(map(lambda x: x*2, nums)))  # 输出: [2, 4, 6]
```


## 生成器函数

**描述**:  
生成器是一种 **惰性迭代器**，用于按需生成值，而不是一次性生成所有数据。通过 `yield` 关键字实现（替代`return`），可大幅节省内存，适用于处理大型数据集或无限序列。

**两种形式**：
1. **生成器函数**：使用 `yield` 语句的函数。
2. **生成器表达式**：类似列表推导式，但用 `()` 包裹。

**特点**：
- 每次调用 `next()` 或迭代时执行到 `yield` 后暂停，保留当前状态。
- 再次迭代时从上次暂停的位置继续执行。

**示例**：
```python
def count_up_to(n):
    count = 1
    while count <= n:
        yield count
        count += 1

# 创建生成器对象
counter = count_up_to(3)
print(next(counter))  # 1
print(next(counter))  # 2
print(next(counter))  # 3
# print(next(counter))  # 抛出 StopIteration 异常
```

**生成器表达式**

**定义**：  
语法类似列表推导式，但使用 `()` 替代 `[]`，按需生成值。

**特点**：
- 内存效率高（不预先生成所有元素）。
- 适合简单的一次性迭代场景。

**示例**：
```python
# 生成器表达式
squares = (x**2 for x in range(5))

# 迭代生成器
for num in squares:
    print(num)  # 输出: 0, 1, 4, 9, 16
```

## 递归函数
**描述**: 函数调用自身实现循环逻辑。  

**示例**:
```python
def factorial(n):
    return 1 if n <= 1 else n * factorial(n-1)

print(factorial(5))  # 输出: 120
```
## 汉诺塔

- 有 **3 根柱子**（A、B、C），其中 A 柱上有 `n` 个从大到小依次堆叠的圆盘。
- **目标**：将所有圆盘从 A 柱移动到 C 柱，规则如下：
  1. 每次只能移动 **最顶端的 1 个圆盘**；
  2. **大盘不能放在小盘上**。

**递归思想**
汉诺塔问题的核心是 **将大问题分解为小问题**：
1. 如果只有 **1 个圆盘**：直接 `A → C`。
2. 如果有 **n 个圆盘**：
   - 先将 **前 n-1 个圆盘** 从 `A → B`（借助 C 作为中转）；
   - 再将 **第 n 个圆盘** 从 `A → C`；
   - 最后将 **前 n-1 个圆盘** 从 `B → C`（借助 A 作为中转）。

```python
def hanoi(n, source, auxiliary, target):
    """
    n: 圆盘数量
    source: 起始柱（A）
    auxiliary: 中转柱（B）
    target: 目标柱（C）
    """
    if n == 1:
        # 递归终止条件：直接移动最后一个圆盘
        print(f"移动圆盘 1 从 {source} 到 {target}")
        return
    else:
        # 步骤1：将前 n-1 个圆盘从 A → B（借助 C）
        hanoi(n-1, source, target, auxiliary)
        
        # 步骤2：将第 n 个圆盘从 A → C
        print(f"移动圆盘 {n} 从 {source} 到 {target}")
        
        # 步骤3：将前 n-1 个圆盘从 B → C（借助 A）
        hanoi(n-1, auxiliary, source, target)

# 测试代码（以 3 个圆盘为例）
hanoi(3, 'A', 'B', 'C')
```

**代码解释**
<br/>

**关键思想**：递归调用时，柱子的角色会动态变化，递归函数 hanoi(n, source, auxiliary, target) 的参数始终遵循以下顺序：

- **第1位**：当前要移动的圆盘的来源柱（source）
- **第2位**：中转辅助柱（auxiliary）
- **第3位**：目标柱（target）
但每次递归调用时，这些“角色”会被重新分配给不同的柱子！

**示例**：

以` n=3` 为例，拆解全过程
假设初始调用是 `hanoi(3, A, B, C)`，目标是把3个圆盘从A移到C。

- **步骤1**：`hanoi(n-1, source, target, auxiliary)`
也就是`hanoi(2, A, C, B)`。

  - 新来源：A（原来的来源）
  - 新辅助：C（原来的目标）
  - 新目标：B（原来的辅助）
任务变成：把前2个圆盘从A移动到B（此时B是新的目标柱，C充当辅助中转柱）。

- **步骤2**：移动第3个圆盘
直接执行 `A → C`（此时最大的圆盘到位）。

- **步骤3**：`hanoi(n-1, auxiliary, source, target)`
也就是` hanoi(2, B, A, C)`。

  - 新来源：B（原来的辅助）
  - 新辅助：A（原来的来源）
  - 新目标：C（原来的目标）
任务变成：把前2个圆盘从B移动到C（此时A作为辅助中转柱）。

#### **运行结果**
对于 `n = 3`，输出如下：
```
移动圆盘 1 从 A 到 C
移动圆盘 2 从 A 到 B
移动圆盘 1 从 C 到 B
移动圆盘 3 从 A 到 C
移动圆盘 1 从 B 到 A
移动圆盘 2 从 B 到 C
移动圆盘 1 从 A 到 C
```