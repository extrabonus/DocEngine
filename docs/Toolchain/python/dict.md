# 字典


## `dict.clear()`
**描述**: 移除字典中的所有键值对，使字典变为空字典。  
**参数**: 无  
**示例**:
```python
d = {"a": 1, "b": 2}
d.clear()
print(d)  # 输出: {}
```


## `dict.copy()`
**描述**: 返回字典的浅拷贝。  
**参数**: 无  
**示例**:
```python
d = {"a": 1, "b": 2}
d_copy = d.copy()
print(d_copy)  # 输出: {"a": 1, "b": 2}
```


## `dict.fromkeys(iterable[, value])`
**描述**: 创建一个新字典，使用可迭代对象中的元素作为键，所有键的值都设置为 `value`（默认为 `None`）。  
**参数**:
- `iterable`: 可迭代对象，用于生成字典的键。
- `value` (可选): 所有键的默认值。  

**示例**:
```python
keys = ["a", "b", "c"]
d = dict.fromkeys(keys, 0)
print(d)  # 输出: {"a": 0, "b": 0, "c": 0}
```


## `dict.get(key[, default])`
**描述**: 返回指定键的值，如果键不存在，则返回 `default`（默认为 `None`）。  
**参数**:
- `key`: 要查找的键。
- `default` (可选): 键不存在时返回的默认值。  

**示例**:
```python
d = {"a": 1, "b": 2}
print(d.get("a"))        # 输出: 1
print(d.get("c", "Not Found"))  # 输出: "Not Found"
```


## `dict.items()`
**描述**: 返回字典的键值对视图，每个键值对以元组形式表示。  
**参数**: 无  
**示例**:
```python
d = {"a": 1, "b": 2}
print(d.items())  # 输出: dict_items([("a", 1), ("b", 2)])
```


## `dict.keys()`
**描述**: 返回字典的键视图。  
**参数**: 无  
**示例**:
```python
d = {"a": 1, "b": 2}
print(d.keys())  # 输出: dict_keys(["a", "b"])
```


## `dict.values()`
**描述**: 返回字典的值视图。  
**参数**: 无  
**示例**:
```python
d = {"a": 1, "b": 2}
print(d.values())  # 输出: dict_values([1, 2])
```


## `dict.pop(key[, default])`
**描述**: 移除指定键并返回其值。如果键不存在且未提供 `default`，则抛出 `KeyError`。  
**参数**:
- `key`: 要移除的键。
- `default` (可选): 键不存在时返回的默认值。
  
**示例**:
```python
d = {"a": 1, "b": 2}
print(d.pop("a"))        # 输出: 1
print(d.pop("c", "Not Found"))  # 输出: "Not Found"
```


## `dict.popitem()`
**描述**: 移除并返回字典中的最后一个键值对（LIFO 顺序）。如果字典为空，则抛出 `KeyError`。  
**参数**: 无  
**示例**:
```python
d = {"a": 1, "b": 2}
print(d.popitem())  # 输出: ("b", 2)
print(d)            # 输出: {"a": 1}
```


## `dict.setdefault(key[, default])`
**描述**: 如果键存在，则返回其值；如果键不存在，则插入键值对（键为 `key`，值为 `default`，默认为 `None`）并返回 `default`。  
**参数**:
- `key`: 要查找或插入的键。
- `default` (可选): 键不存在时插入的默认值。  

**示例**:
```python
d = {"a": 1}
print(d.setdefault("a", 0))  # 输出: 1
print(d.setdefault("b", 2))  # 输出: 2
print(d)                     # 输出: {"a": 1, "b": 2}
```


## `dict.update([other])`
**描述**: 使用另一个字典或可迭代对象的键值对更新当前字典。如果键已存在，则覆盖其值。  
**参数**:
- `other`: 字典或可迭代对象（如键值对列表）。
  
**示例**:
```python
d = {"a": 1}
d.update({"b": 2})
print(d)  # 输出: {"a": 1, "b": 2}
```


## `dict.__contains__(key)`
**描述**: 检查字典中是否包含指定的键。通常使用 `in` 操作符调用。  
**参数**:
- `key`: 要查找的键。  

**示例**:
```python
d = {"a": 1}
print("a" in d)  # 输出: True
print("b" in d)  # 输出: False
```


## `dict.__len__()`
**描述**: 返回字典中键值对的数量。通常使用 `len()` 函数调用。  
**参数**: 无  
**示例**:
```python
d = {"a": 1, "b": 2}
print(len(d))  # 输出: 2
```


## `dict.__getitem__(key)`
**描述**: 返回指定键的值。通常使用 `dict[key]` 调用。如果键不存在，则抛出 `KeyError`。  
**参数**:
- `key`: 要查找的键。  

**示例**:
```python
d = {"a": 1}
print(d["a"])  # 输出: 1
```


## `dict.__setitem__(key, value)`
**描述**: 设置指定键的值。通常使用 `dict[key] = value` 调用。  
**参数**:
- `key`: 要设置的键。
- `value`: 要设置的值。  

**示例**:
```python
d = {}
d["a"] = 1
print(d)  # 输出: {"a": 1}
```



## `dict.__delitem__(key)`
**描述**: 移除指定键及其值。通常使用 `del dict[key]` 调用。如果键不存在，则抛出 `KeyError`。  
**参数**:
- `key`: 要移除的键。  

**示例**:
```python
d = {"a": 1}
del d["a"]
print(d)  # 输出: {}
```
