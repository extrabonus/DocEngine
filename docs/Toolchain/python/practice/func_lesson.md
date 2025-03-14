# 函数

## **题目 1：处理大型文件**
逐行读取文件，避免一次性加载到内存：
```python
def read_large_file(file_path):
    with open(file_path, "r") as file:
        for line in file:
            yield line.strip()

# 逐行处理
for line in read_large_file("data.txt"):
    process(line)  # 假设 process 是处理函数
```

## **题目 2：无限序列**
生成无限斐波那契数列：
```python
def fibonacci():
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b

# 获取前10个斐波那契数
fib = fibonacci()
print([next(fib) for _ in range(10)])  # [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
```

## **题目 3：数据管道**
组合多个生成器实现数据处理链：
```python
# 生成数字 → 过滤偶数 → 平方
numbers = (x for x in range(10))
even_numbers = (x for x in numbers if x % 2 == 0)
squares = (x**2 for x in even_numbers)

print(list(squares))  # [0, 4, 16, 36, 64]
```
