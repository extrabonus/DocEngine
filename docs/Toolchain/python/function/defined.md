# 内置函数


## `len(obj)`
**描述**：返回对象的长度或元素个数（适用于字符串、列表、字典、元组等可迭代对象）。  
**参数**：
- `obj`：需要计算长度的对象。

**示例**：
```Python
s = "hello"
print(len(s))          # 输出: 5
lst = [1, 2, 3]
print(len(lst))        # 输出: 3
```


## `range(start, stop, step)`
**描述**：生成一个整数序列（常用于循环）。  
**参数**：
- `start`：起始值（可选，默认0）。
- `stop`：结束值（必选，不包含该值）。
- `step`：步长（可选，默认1）。

**示例**：
```Python
print(list(range(3)))        # 输出: [0, 1, 2]
print(list(range(1, 5, 2)))  # 输出: [1, 3]
```


## `print(*objects, sep=' ', end='\n')`
**描述**：输出内容到控制台。  
**参数**：
- `*objects`：多个输出对象。
- `sep`：分隔符（默认空格）。
- `end`：结束符（默认换行）。

**示例**：
```Python
print("Hello", "World", sep="-")  # 输出: Hello-World
print("No newline", end="")       # 输出后不换行
```


## `type(obj)`
**描述**：返回对象的类型。  
**参数**：
- `obj`：任意对象。

**示例**：
```Python
print(type(42))          # 输出: <class 'int'>
print(type([1, 2]))      # 输出: <class 'list'>
```


## `list(iterable)`
**描述**：将可迭代对象转换为列表。  
**参数**：
- `iterable`：字符串、元组、集合等可迭代对象。

**示例**：
```Python
t = (1, 2, 3)
print(list(t))          # 输出: [1, 2, 3]
print(list("abc"))      # 输出: ['a', 'b', 'c']
```


## `dict(**kwargs)` / `dict(iterable)`
**描述**：创建字典。  
**参数**：
- `**kwargs`：键值对形式（如 `a=1`）。
- `iterable`：可迭代的键值对（如 `[('a', 1)]`）。

**示例**：
```Python
d1 = dict(a=1, b=2)
d2 = dict([('x', 10), ('y', 20)])
print(d1)  # 输出: {'a': 1, 'b': 2}
print(d2)  # 输出: {'x': 10, 'y': 20}
```


## `str(obj)`
**描述**：将对象转换为字符串。  
**参数**：
- `obj`：任意对象（数字、列表等）。

**示例**：
```Python
num = 3.14
print(str(num) + " is float")  # 输出: 3.14 is float
print(str([1, 2]))             # 输出: [1, 2]
```


## `int(x, base=10)`
**描述**：将字符串或数字转换为整数。  
**参数**：
- `x`：字符串或数字。
- `base`：进制（默认十进制）。

**示例**：
```Python
print(int("42"))         # 输出: 42
print(int("1010", 2))    # 输出: 10 （二进制转十进制）
```


## `sorted(iterable, key=None, reverse=False)`
**描述**：返回排序后的新列表（原对象不变）。  
**参数**：
- `iterable`：可迭代对象。
- `key`：排序规则函数（可选）。
- `reverse`：是否降序（默认升序）。

**示例**：
```Python
nums = [3, 1, 4]
print(sorted(nums))                # 输出: [1, 3, 4]
print(sorted(nums, reverse=True)) # 输出: [4, 3, 1]
```


## `enumerate(iterable, start=0)`
**描述**：返回包含索引和值的枚举对象。  
**参数**：
- `iterable`：可迭代对象。
- `start`：起始索引（默认0）。

**示例**：
```Python
fruits = ["apple", "banana"]
for i, fruit in enumerate(fruits):
    print(f"{i}: {fruit}")
# 输出: 
# 0: apple
# 1: banana
```


## `zip(*iterables)`
**描述**：将多个可迭代对象按位置打包成元组列表。  
**参数**：
- `*iterables`：多个可迭代对象（如列表、字符串）。

**示例**：
```Python
names = ["Alice", "Bob"]
ages = [25, 30]
print(list(zip(names, ages)))  # 输出: [('Alice', 25), ('Bob', 30)]
```



## `max(iterable)` / `min(iterable)`
**描述**：返回可迭代对象的最大值/最小值。  
**参数**：
- `iterable`：可迭代对象（如列表、字符串）。

**示例**：
```Python
nums = [5, 2, 8]
print(max(nums))  # 输出: 8
print(min("abc")) # 输出: 'a'（按ASCII码比较）
```


## `sum(iterable, start=0)`
**描述**：计算数值型可迭代对象的总和。  
**参数**：
- `iterable`：数值型可迭代对象。
- `start`：累加初始值（默认0）。

**示例**：
```Python
print(sum([1, 2, 3]))        # 输出: 6
print(sum([1.5, 2], start=3))# 输出: 6.5
```


## `isinstance(obj, classinfo)`
**描述**：判断对象是否属于指定类型。  
**参数**：
- `obj`：任意对象。
- `classinfo`：类型或类型元组。

**示例**：
```Python
print(isinstance(10, int))   # 输出: True
print(isinstance("hi", (int, str)))  # 输出: True
```


## `open(file, mode='r', encoding=None)`
**描述**：打开文件并返回文件对象。  
**参数**：
- `file`：文件路径。
- `mode`：打开模式（如 `r` 读、`w` 写）。
- `encoding`：编码格式（如 `utf-8`）。

**示例**：
```Python
with open("data.txt", "r", encoding="utf-8") as f:
    content = f.read()
```
