# 基础语法

## 数据类型
### **整数（int）**
  ```python
  a = 10
  print(type(a))  # <class 'int'>
  ```

### **浮点数（float）**
  ```python
  b = 3.14
  print(type(b))  # <class 'float'>
  ```

### **布尔值（bool）**
  ```python
  c = True
  d = False
  print(type(c))  # <class 'bool'>
  ```

### 字符串（str）
```python
s1 = "Hello"
s2 = 'Python'
print(s1 + " " + s2)  # Hello Python
print(s1[0])          # H
print(len(s1))        # 5
```
### 类型转换
```python
# 字符串转整数
num_str = "123"
num = int(num_str)
print(num + 1)  # 124

# 整数转字符串
num = 456
s = str(num)
print(s + "abc")  # 456abc
```

## 输入输出
```python
# 输入（返回字符串）
name = input("请输入姓名：")
print("你好，" + name)

# 格式化输出
age = 25
print(f"{name}的年龄是{age}岁")  # f-string（Python 3.6+）
```

## 运算符


### 算术运算符
| 运算符 | 描述       | 示例                  | 结果  |
|--------|------------|-----------------------|-------|
| `+`    | 加法       | `3 + 5`               | `8`   |
| `-`    | 减法       | `10 - 4`              | `6`   |
| `*`    | 乘法       | `2 * 3`               | `6`   |
| `/`    | 除法       | `7 / 2`               | `3.5` |
| `//`   | 整除       | `7 // 2`              | `3`   |
| `%`    | 取模       | `7 % 2`               | `1`   |
| `**`   | 幂运算     | `2 ** 3`              | `8`   |

**示例**：
```python
print(2 ** 3)    # 输出: 8
print(10 % 3)    # 输出: 1
```


### 比较运算符
| 运算符 | 描述               | 示例          | 结果    |
|--------|--------------------|---------------|---------|
| `==`   | 等于               | `5 == 5`      | `True`  |
| `!=`   | 不等于             | `5 != 3`      | `True`  |
| `>`    | 大于               | `10 > 5`      | `True`  |
| `<`    | 小于               | `10 < 5`      | `False` |
| `>=`   | 大于等于           | `10 >= 10`    | `True`  |
| `<=`   | 小于等于           | `5 <= 3`      | `False` |

**示例**：
```python
print("apple" == "apple")   # 输出: True
print(3 != "3")             # 输出: True（类型不同）
```


### 逻辑运算符
| 运算符 | 描述               | 示例                | 结果    |
|--------|--------------------|---------------------|---------|
| `and`  | 逻辑与             | `True and False`    | `False` |
| `or`   | 逻辑或             | `True or False`     | `True`  |
| `not`  | 逻辑非             | `not True`          | `False` |

**示例**（短路特性）：
```python
a = 5
print(a > 0 and a < 10)   # 输出: True
print(not (a == 5))       # 输出: False
```


### 赋值运算符
| 运算符 | 描述               | 示例（等价于）       |
|--------|--------------------|---------------------|
| `=`    | 赋值               | `x = 5`             |
| `+=`   | 加法赋值           | `x += 3` → `x = x + 3` |
| `-=`   | 减法赋值           | `x -= 2` → `x = x - 2` |
| `*=`   | 乘法赋值           | `x *= 4` → `x = x * 4` |

**示例**：
```python
x = 10
x **= 2  # x = x ** 2
print(x) # 输出: 100
```

### 其他运算符
| 运算符 | 描述               | 示例                | 结果    |
|--------|--------------------|---------------------|---------|
| `in`   | 成员判断           | `"a" in "apple"`    | `True`  |
| `is`   | 对象身份判断       | `a = []; b = []; a is b` | `False` |

**示例**：
```python
lst = [1, 2, 3]
print(2 in lst)      # 输出: True
print(2 is 2.0)      # 输出: False（类型不同）
```


### 运算符优先级
以下是常见运算符的优先级顺序（部分）：

| 优先级 | 运算符                     | 示例                  |
|--------|----------------------------|-----------------------|
| 1      | `**`                       | `2 ** 3`             |
| 2      | `*`, `/`, `%`, `//`        | `3 * 2 + 1` → `7`    |
| 3      | `+`, `-`                   | `5 - 2 * 3` → `-1`   |
| 4      | `==`, `!=`, `>`, `<` 等    | `3 + 2 > 4` → `True` |
| 5      | `not`, `and`, `or`         | `not True or False` → `False` |

**示例**：
```python
print(3 + 2 * 4)      # 输出: 11（先乘后加）
print((3 + 2) * 4)    # 输出: 20（括号改变优先级）
```


## 转义字符
以下是常见转义字符及其作用：

| 转义字符 | 描述                   | 示例                  | 输出结果        |
|----------|------------------------|-----------------------|----------------|
| `\n`     | 换行                   | `print("a\nb")`       | `a`<br>`b`     |
| `\t`     | 制表符（Tab）          | `print("a\tb")`       | `a    b`       |
| `\\`     | 表示反斜杠             | `print("C:\\path")`   | `C:\path`      |
| `\"`     | 双引号                 | `print("He said \"Hi\"")` | `He said "Hi"` |
| `\'`     | 单引号                 | `print('It\'s ok')`   | `It's ok`      |
| `\r`     | 回车（覆盖行首内容）   | `print("Hello\rW")`   | `Wello`        |

**示例**：
```python
print("第一行\n第二行\t缩进")  
# 输出:
# 第一行
# 第二行    缩进

# 原始字符串（忽略转义）
print(r"C:\new_folder")  # 输出: C:\new_folder
```

## 分支结构（if-elif-else）
```python
age = 18

if age < 0:
    print("无效年龄")
elif age < 18:
    print("未成年")
else:
    print("成年")

# 输出: 成年
```

---

## 循环结构
---

###  `for` 循环
```python
# 遍历列表
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)
# 输出:
# apple
# banana
# cherry

# 遍历范围
for i in range(3):  # 0,1,2
    print(i)
```

---

### `while` 循环
```python
count = 0
while count < 3:
    print(count)
    count += 1
# 输出:
# 0
# 1
# 2
```

---

###  循环控制
- **`break`**: 终止循环  
- **`continue`**: 跳过当前一次循环  
```python
for i in range(5):
    if i == 2:
        continue  # 跳过2
    if i == 4:
        break     # 终止循环
    print(i)
# 输出: 0 1 3
```

## 异常处理（try-except）
```python
try:
    num = int(input("输入一个数字："))
    print(10 / num)
except ValueError:
    print("输入的不是数字！")
except ZeroDivisionError:
    print("不能除以0！")
```

### `try: ... except: ... else: ... finally: ...`
**描述**：结合 `else` 和 `finally`，无异常时执行 `else`，最终始终执行 `finally`。  

**示例**：
```python
try:
    result = 100 / int(input("输入除数: "))
except (ZeroDivisionError, ValueError) as e:
    print(f"错误: {e}")
else:
    print(f"计算结果: {result}")
finally:
    print("运算结束")
```
