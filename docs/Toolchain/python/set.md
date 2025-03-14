# 集合

## `set.add(element)`
**描述**: 向集合中添加一个元素。如果元素已存在，则不进行任何操作。  
**参数**:
- `element`: 要添加的元素。  

**示例**:
```python
s = {1, 2}
s.add(3)
print(s)  # 输出: {1, 2, 3}
s.add(2)
print(s)  # 输出: {1, 2, 3}
```


## `set.clear()`
**描述**: 移除集合中的所有元素，使集合变为空集合。  
**参数**: 无  

**示例**:
```python
s = {1, 2, 3}
s.clear()
print(s)  # 输出: set()
```


## `set.copy()`
**描述**: 返回集合的浅拷贝。  
**参数**: 无  

**示例**:
```python
s = {1, 2, 3}
s_copy = s.copy()
print(s_copy)  # 输出: {1, 2, 3}
```


## `set.difference(*others)`
**描述**: 返回当前集合与一个或多个集合的差集（即当前集合中有而其他集合中没有的元素）。  
**参数**:
- `*others`: 一个或多个集合。  

**示例**:
```python
s1 = {1, 2, 3}
s2 = {2, 3, 4}
print(s1.difference(s2))  # 输出: {1}
```


## `set.difference_update(*others)`
**描述**: 从当前集合中移除与一个或多个集合共有的元素（原地修改）。  
**参数**:
- `*others`: 一个或多个集合。  

**示例**:
```python
s1 = {1, 2, 3}
s2 = {2, 3, 4}
s1.difference_update(s2)
print(s1)  # 输出: {1}
```


## `set.discard(element)`
**描述**: 从集合中移除指定元素。如果元素不存在，则不进行任何操作。  
**参数**:
- `element`: 要移除的元素。  

**示例**:
```python
s = {1, 2, 3}
s.discard(2)
print(s)  # 输出: {1, 3}
s.discard(4)
print(s)  # 输出: {1, 3}
```


## `set.intersection(*others)`
**描述**: 返回当前集合与一个或多个集合的交集（即所有集合共有的元素）。  
**参数**:
- `*others`: 一个或多个集合。  

**示例**:
```python
s1 = {1, 2, 3}
s2 = {2, 3, 4}
print(s1.intersection(s2))  # 输出: {2, 3}
```


## `set.intersection_update(*others)`
**描述**: 从当前集合中保留与一个或多个集合共有的元素（原地修改）。  
**参数**:
- `*others`: 一个或多个集合。  

**示例**:
```python
s1 = {1, 2, 3}
s2 = {2, 3, 4}
s1.intersection_update(s2)
print(s1)  # 输出: {2, 3}
```


## `set.isdisjoint(other)`
**描述**: 判断当前集合与另一个集合是否没有交集（即是否完全不相交）。  
**参数**:
- `other`: 另一个集合。  

**示例**:
```python
s1 = {1, 2}
s2 = {3, 4}
print(s1.isdisjoint(s2))  # 输出: True
s3 = {2, 3}
print(s1.isdisjoint(s3))  # 输出: False
```


## `set.issubset(other)`
**描述**: 判断当前集合是否是另一个集合的子集。  
**参数**:
- `other`: 另一个集合。  

**示例**:
```python
s1 = {1, 2}
s2 = {1, 2, 3}
print(s1.issubset(s2))  # 输出: True
s3 = {1, 4}
print(s1.issubset(s3))  # 输出: False
```


## `set.issuperset(other)`
**描述**: 判断当前集合是否是另一个集合的超集。  
**参数**:
- `other`: 另一个集合。  

**示例**:
```python
s1 = {1, 2, 3}
s2 = {1, 2}
print(s1.issuperset(s2))  # 输出: True
s3 = {1, 4}
print(s1.issuperset(s3))  # 输出: False
```


## `set.pop()`
**描述**: 移除并返回集合中的一个任意元素。如果集合为空，则抛出 `KeyError`。  
**参数**: 无  

**示例**:
```python
s = {1, 2, 3}
print(s.pop())  # 输出: 1（具体值可能不同）
print(s)        # 输出: {2, 3}
```


## `set.remove(element)`
**描述**: 从集合中移除指定元素。如果元素不存在，则抛出 `KeyError`。  
**参数**:
- `element`: 要移除的元素。  

**示例**:
```python
s = {1, 2, 3}
s.remove(2)
print(s)  # 输出: {1, 3}
```


## `set.symmetric_difference(other)`
**描述**: 返回当前集合与另一个集合的对称差集（即仅存在于其中一个集合中的元素）。  
**参数**:
- `other`: 另一个集合。  

**示例**:
```python
s1 = {1, 2, 3}
s2 = {2, 3, 4}
print(s1.symmetric_difference(s2))  # 输出: {1, 4}
```



## `set.symmetric_difference_update(other)`
**描述**: 从当前集合中更新为与另一个集合的对称差集（原地修改）。  
**参数**:
- `other`: 另一个集合。  

**示例**:
```python
s1 = {1, 2, 3}
s2 = {2, 3, 4}
s1.symmetric_difference_update(s2)
print(s1)  # 输出: {1, 4}
```


## `set.union(*others)`
**描述**: 返回当前集合与一个或多个集合的并集（即所有集合中的所有元素）。  
**参数**:
- `*others`: 一个或多个集合。  

**示例**:
```python
s1 = {1, 2}
s2 = {2, 3}
print(s1.union(s2))  # 输出: {1, 2, 3}
```


## `set.update(*others)`
**描述**: 将当前集合更新为与一个或多个集合的并集（原地修改）。  
**参数**:
- `*others`: 一个或多个集合。  

**示例**:
```python
s1 = {1, 2}
s2 = {2, 3}
s1.update(s2)
print(s1)  # 输出: {1, 2, 3}
```
