# 字符串


## 大小写转换


### `capitalize()`
**描述**: 将字符串的首字母大写，其余字母小写。  
**参数**: 无  
**示例**:
```Python
s = "hello WORLD"
print(s.capitalize())  # 输出: Hello world
```

---

### `lower()`
**描述**: 将字符串全部转为小写。  
**参数**: 无  
**示例**:
```Python
s = "HELLO World"
print(s.lower())  # 输出: hello world
```

---

### `upper()`
**描述**: 将字符串全部转为大写。  
**参数**: 无  
**示例**:
```Python
s = "hello World"
print(s.upper())  # 输出: HELLO WORLD
```

---

### `title()`
**描述**: 将每个单词的首字母大写。  
**参数**: 无  
**示例**:
```Python
s = "hello world"
print(s.title())  # 输出: Hello World
```

---

### `swapcase()`
**描述**: 反转字符串中字母的大小写。  
**参数**: 无  
**示例**:
```Python
s = "Hello World"
print(s.swapcase())  # 输出: hELLO wORLD
```

---

### `casefold()`
**描述**: 更激进的转为小写（适用于不区分大小写的比较）。  
**参数**: 无  
**示例**:
```Python
s = "Straße"
print(s.casefold())  # 输出: strasse
```

---

## 查找与统计
---

### `count(sub[, start[, end]])`
**描述**: 统计子字符串 `sub` 出现的次数。  
**参数**:  
- `sub`: 要统计的子字符串  
- `start`/`end` (可选): 搜索范围  
**示例**:
```Python
s = "apple banana apple"
print(s.count("apple"))        # 输出: 2
print(s.count("a", 0, 5))      # 输出: 1
```

---

### `find(sub[, start[, end]])`
**描述**: 返回子字符串 `sub` 第一次出现的索引，未找到返回 `-1`。  
**参数**: 同 `count`  
**示例**:
```Python
s = "hello world"
print(s.find("world"))     # 输出: 6
print(s.find("Python"))    # 输出: -1
```

---

### `index(sub[, start[, end]])`
**描述**: 同 `find`，但未找到时抛出 `ValueError`。  
**示例**:
```Python
s = "hello world"
print(s.index("world"))    # 输出: 6
# s.index("Python")        # 抛出 ValueError
```

---

### `startswith(prefix[, start[, end]])`
**描述**: 检查字符串是否以 `prefix` 开头。  
**参数**:  
- `prefix`: 可以是字符串或元组（多个匹配项）  
**示例**:
```Python
s = "hello world"
print(s.startswith("hello"))   # 输出: True
print(s.startswith(("hi", "he")))  # 输出: True
```

---

### `endswith(suffix[, start[, end]])`
**描述**: 检查字符串是否以 `suffix` 结尾。  
**参数**: 同 `startswith`  
**示例**:
```Python
s = "file.txt"
print(s.endswith(".txt"))  # 输出: True
```

---

## 替换与分割
---

### `replace(old, new[, count])`
**描述**: 将 `old` 替换为 `new`，可指定替换次数 `count`。  
**示例**:
```Python
s = "apple apple apple"
print(s.replace("apple", "orange", 2))  # 输出: orange orange apple
```

---

### `split(sep=None, maxsplit=-1)`
**描述**: 按分隔符 `sep` 分割字符串，返回列表。  
**参数**:  
- `sep`: 分隔符，默认按空白分割  
- `maxsplit`: 最大分割次数  
**示例**:
```Python
s = "a,b,c,d"
print(s.split(","))            # 输出: ['a', 'b', 'c', 'd']
print(s.split(",", maxsplit=2)) # 输出: ['a', 'b', 'c,d']
```

---

### `rsplit(sep=None, maxsplit=-1)`
**描述**: 从右侧开始分割字符串。  
**示例**:
```Python
s = "a,b,c,d"
print(s.rsplit(",", maxsplit=2)) # 输出: ['a,b', 'c', 'd']
```

---

### `splitlines([keepends])`
**描述**: 按换行符分割字符串，`keepends` 为 `True` 时保留换行符。  
**示例**:
```Python
s = "line1\nline2\r\nline3"
print(s.splitlines())       # 输出: ['line1', 'line2', 'line3']
print(s.splitlines(True))   # 输出: ['line1\n', 'line2\r\n', 'line3']
```

---

### `partition(sep)`
**描述**: 将字符串分为三部分（`头`、`sep`、`尾`），返回元组。  
**示例**:
```Python
s = "hello.world"
print(s.partition("."))     # 输出: ('hello', '.', 'world')
```

---

### `rpartition(sep)`
**描述**: 从右侧开始查找分隔符。  
**示例**:
```Python
s = "hello.world.again"
print(s.rpartition("."))    # 输出: ('hello.world', '.', 'again')
```

---

## 格式化与填充
---

### `join(iterable)`
**描述**: 将可迭代对象中的元素用字符串连接。  
**示例**:
```Python
lst = ["a", "b", "c"]
print("-".join(lst))        # 输出: "a-b-c"
```

---

### `format(*args, **kwargs)`
**描述**: 格式化字符串。  
**示例**:
```Python
name = "Alice"
age = 30
print("Name: {}, Age: {}".format(name, age))  # 输出: Name: Alice, Age: 30
print("Name: {name}, Age: {age}".format(name=name, age=age))  # 同上
```

---

### `zfill(width)`
**描述**: 在字符串左侧填充 `0` 直到达到指定宽度。  
**示例**:
```Python
s = "42"
print(s.zfill(5))           # 输出: "00042"
```

---

### `center(width[, fillchar])`
**描述**: 居中对齐字符串，用 `fillchar` 填充两侧（默认空格）。  
**示例**:
```Python
s = "hello"
print(s.center(10, "*"))    # 输出: "**hello***"
```

---

### `ljust(width[, fillchar])` / `rjust(width[, fillchar])`
**描述**: 左对齐/右对齐字符串。  
**示例**:
```Python
s = "hello"
print(s.ljust(10, "-"))     # 输出: "hello-----"
print(s.rjust(10, "-"))     # 输出: "-----hello"
```

---

### `format_map(mapping)`
**描述**: 用字典格式化字符串。  
**示例**:
```Python
data = {"name": "Bob", "age": 25}
print("Name: {name}, Age: {age}".format_map(data))  # 输出: Name: Bob, Age: 25
```

---

## 字符检查
---

### `isalnum()`
**描述**: 检查字符串是否仅包含字母和数字。  
**示例**:
```Python
print("abc123".isalnum())   # 输出: True
print("abc 123".isalnum())  # 输出: False
```

---

### `isalpha()`
**描述**: 检查字符串是否仅包含字母。  
**示例**:
```Python
print("abc".isalpha())      # 输出: True
print("abc123".isalpha())   # 输出: False
```

---

### `isdigit()`
**描述**: 检查字符串是否仅包含数字。  
**示例**:
```Python
print("123".isdigit())      # 输出: True
print("12.3".isdigit())     # 输出: False
```

---

### `isnumeric()`
**描述**: 检查字符串是否仅包含数字字符（包括Unicode数字）。  
**示例**:
```Python
print("½".isnumeric())      # 输出: True
```

---

### `isspace()`
**描述**: 检查字符串是否仅包含空白字符。  
**示例**:
```Python
print("   ".isspace())      # 输出: True
print(" a ".isspace())      # 输出: False
```

---

### `isidentifier()`
**描述**: 检查字符串是否是有效的Python标识符。  
**示例**:
```Python
print("var_name".isidentifier())    # 输出: True
print("123var".isidentifier())      # 输出: False
```

---

### `isprintable()`
**描述**: 检查字符串是否全部为可打印字符。  
**示例**:
```Python
print("Hello\n".isprintable())      # 输出: False
print("Hello".isprintable())        # 输出: True
```

---

## 修剪与转换
---

### `strip([chars])`
**描述**: 去除字符串两端的指定字符（默认去空格）。  
**示例**:
```Python
s = "  hello  "
print(s.strip())            # 输出: "hello"
s = "**hello**"
print(s.strip("*"))         # 输出: "hello"
```

---

### `lstrip([chars])` / `rstrip([chars])`
**描述**: 去除左端/右端的指定字符。  
**示例**:
```Python
s = "  hello  "
print(s.lstrip())           # 输出: "hello  "
s = "**hello**"
print(s.rstrip("*"))        # 输出: "**hello"
```

---

### `encode(encoding='utf-8', errors='strict')`
**描述**: 将字符串编码为字节。  
**示例**:
```Python
s = "hello"
print(s.encode())           # 输出: b'hello'
```

---

### `expandtabs(tabsize=8)`
**描述**: 将制表符 `\t` 替换为空格。  
**示例**:
```Python
s = "a\tb"
print(s.expandtabs(4))      # 输出: "a   b"
```

---

### `translate(table)`
**描述**: 根据转换表（通常由 `str.maketrans` 生成）替换字符。  
**示例**:
```Python
trans_table = str.maketrans("aeiou", "12345")
s = "hello world"
print(s.translate(trans_table))  # 输出: h2ll4 w4rld
```

---

