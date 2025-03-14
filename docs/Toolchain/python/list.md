# 列表


---

## `count(x)`
**描述**: 统计元素 `x` 在列表中出现的次数。  
**参数**:  
- `x`: 要统计的元素  

**示例**:
```python
my_list = [1, 2, 3, 2, 4, 2]
print(my_list.count(2))        # 输出: 3
print(my_list.count(5))        # 输出: 0
```

---

## `index(x[, start[, end]])`
**描述**: 返回元素 `x` 在列表中第一次出现的索引（支持指定搜索范围）。  
**参数**:  
- `x`: 要查找的元素  
- `start`/`end` (可选): 搜索的起始和结束索引 
   
**示例**:
```python
my_list = [1, 2, 3, 2, 5]
print(my_list.index(2))        # 输出: 1
print(my_list.index(2, 2, 4))  # 输出: 3
```

---

## `append(x)`
**描述**: 在列表末尾添加元素 `x`。  
**参数**:  
- `x`: 要添加的元素 
   
**示例**:
```python
my_list = [1, 2, 3]
my_list.append(4)
print(my_list)                 # 输出: [1, 2, 3, 4]
```

---

## `extend(iterable)`
**描述**: 将可迭代对象中的元素逐个添加到列表末尾。  
**参数**:  
- `iterable`: 可迭代对象（如列表、元组、字符串等）  
  
**示例**:
```python
my_list = [1, 2]
my_list.extend([3, "a"])
print(my_list)                 # 输出: [1, 2, 3, 'a']
```

---

## `insert(i, x)`
**描述**: 在索引 `i` 处插入元素 `x`。  
**参数**:  
- `i`: 插入位置的索引  
- `x`: 要插入的元素  
  
**示例**:
```python
my_list = [1, 3, 4]
my_list.insert(1, 2)
print(my_list)                 # 输出: [1, 2, 3, 4]
```

---

## `remove(x)`
**描述**: 移除列表中第一个匹配的元素 `x`，若不存在则抛出 `ValueError`。  
**参数**:  
- `x`: 要移除的元素  
  
**示例**:
```python
my_list = [1, 2, 3, 2]
my_list.remove(2)
print(my_list)                 # 输出: [1, 3, 2]
```

---

## `pop([i])`
**描述**: 移除并返回索引 `i` 处的元素（默认为最后一个元素）。  
**参数**:  
- `i` (可选): 要移除的元素的索引  
  
**示例**:
```python
my_list = [1, 2, 3]
popped = my_list.pop(1)
print(popped, my_list)         # 输出: 2 [1, 3]
```

---

## `reverse()`
**描述**: 原地反转列表元素的顺序。  
**参数**: 无  
**示例**:
```python
my_list = [1, 3, 2]
my_list.reverse()
print(my_list)                 # 输出: [2, 3, 1]
```

---

## `sort(key=None, reverse=False)`
**描述**: 原地对列表排序（可自定义排序规则）。  
**参数**:  
- `key` (可选): 排序依据的函数（如 `len` 按长度排序）  
- `reverse` (可选): 若为 `True` 则降序排列  
  
**示例**:
```python
my_list = [3, 1, 4, 2]
my_list.sort()
print(my_list)                 # 输出: [1, 2, 3, 4]
```



## `copy()`
**描述**: 返回列表的浅拷贝。  
**参数**: 无 
**示例**:
```python
my_list = [1, 2, 3]
new_list = my_list.copy()
new_list.append(4)
print(my_list)                 # 输出: [1, 2, 3]
```

---

## `clear()`
**描述**: 移除列表中的所有元素。  
**参数**: 无  
**示例**:
```python
my_list = [1, 2, 3]
my_list.clear()
print(my_list)                 # 输出: []
```


## 切片操作（Slice）

### 基础语法
```python
列表[起始索引:结束索引:步长]  # 左闭右开区间（包含起始，不包含结束）
```

### 常用场景

#### 获取子列表
```python
my_list = [0, 1, 2, 3, 4, 5]

print(my_list[1:4])       # 输出: [1, 2, 3]（索引1到3）
print(my_list[::2])       # 输出: [0, 2, 4]（每隔一个元素）
print(my_list[-3:])       # 输出: [3, 4, 5]（倒数第三个到末尾）
```

#### 修改多个元素
```python
my_list = [0, 1, 2, 3]
my_list[1:3] = [10, 20]   # 替换索引1和2的元素
print(my_list)            # 输出: [0, 10, 20, 3]
```

#### 反转列表
```python
my_list = [1, 2, 3]
reversed_list = my_list[::-1]
print(reversed_list)      # 输出: [3, 2, 1]
```

#### 复制列表（浅拷贝）
```python
original = [[1, 2], 3]
copied = original[:]      # 浅拷贝：嵌套列表的引用会被保留
copied[0][0] = 100
print(original)           # 输出: [[100, 2], 3]
```

### 高级技巧

#### 动态调整步长
```python
my_list = [0, 1, 2, 3, 4, 5]
print(my_list[1:5:2])     # 输出: [1, 3]（步长为2）
```

#### 结合条件筛选
```python
# 配合循环或filter使用（切片本身不支持条件表达式）
my_list = [0, 1, 2, 3, 4]
even_indices = [x for i, x in enumerate(my_list) if i % 2 == 0]
print(even_indices)       # 输出: [0, 2, 4]
```

### 注意事项
**索引越界不会报错**：自动截断到有效范围。
  ```python
  my_list = [1, 2]
  print(my_list[0:10])    # 输出: [1, 2]
  ```
**步长为负数时反向切片**：
  ```python
  my_list = [0, 1, 2, 3]
  print(my_list[3:0:-1])  # 输出: [3, 2, 1]
  ```


## 列表推导式（List Comprehension）

### 基础语法
```python
[表达式 for 变量 in 可迭代对象 if 条件]
```

### 常用场景

#### 简单转换
```python
squares = [x**2 for x in range(5)]
print(squares)            # 输出: [0, 1, 4, 9, 16]
```

#### 条件筛选
```python
even_numbers = [x for x in range(10) if x % 2 == 0]
print(even_numbers)       # 输出: [0, 2, 4, 6, 8]
```

#### 多重循环（嵌套）
```python
matrix = [[1, 2], [3, 4]]
flattened = [num for row in matrix for num in row]
print(flattened)          # 输出: [1, 2, 3, 4]
```

#### 复杂表达式
```python
# 将字符串列表转为整数，跳过无效值
str_list = ["1", "2", "a", "3"]
int_list = [int(s) for s in str_list if s.isdigit()]
print(int_list)           # 输出: [1, 2, 3]
```

### 高级技巧

#### 使用 `if-else` 表达式
```python
# 注意：if-else 放在表达式前
values = [x if x % 2 == 0 else -x for x in range(5)]
print(values)             # 输出: [0, -1, 2, -3, 4]
```

#### 生成嵌套列表（多维数组）
```python
matrix = [[i * j for j in range(3)] for i in range(2)]
print(matrix)             # 输出: [[0, 0, 0], [0, 1, 2]]
```

#### 结合函数或方法
```python
words = ["  apple ", "banana  ", "  cherry  "]
trimmed = [word.strip().upper() for word in words]
print(trimmed)            # 输出: ['APPLE', 'BANANA', 'CHERRY']
```

### 注意事项
**避免副作用**：列表推导式应专注于生成数据，而非执行操作。
  ```python
  # 不推荐写法（副作用）
  [print(x) for x in range(3)]  # 输出: 0 1 2（但返回 [None, None, None]）
  ```
**性能优势**：比普通 `for` 循环更快（因底层优化）。
**可读性**：复杂逻辑建议改用普通循环。

---

## 综合使用

### 切片 + 推导式（处理子集）
```python
my_list = [0, 1, 2, 3, 4]
subset = [x * 2 for x in my_list[1:-1]]
print(subset)             # 输出: [2, 4, 6]
```

### 推导式生成字典/集合
```python
# 字典推导式
square_dict = {x: x**2 for x in range(3)}
print(square_dict)        # 输出: {0: 0, 1: 1, 2: 4}

# 集合推导式
unique_chars = {char for char in "hello"}
print(unique_chars)       # 输出: {'h', 'e', 'l', 'o'}
```

