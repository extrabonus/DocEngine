# 文件操作


## 打开文件

### `open(file, mode='r', buffering=-1, encoding=None, errors=None, newline=None, closefd=True)`
**描述**：核心文件操作函数，用于打开文件并返回文件对象。  
**参数**：
- `file`：必选，文件路径（绝对或相对路径）。
- `mode`：可选，打开模式（默认`'r'`），支持组合模式：
  - 基础模式：`r`（读）、`w`（覆盖写）、`a`（追加写）、`x`（独占创建）。
  - 扩展模式：`b`（二进制模式）、`t`（文本模式，默认）。
  - 组合模式：`r+`（读写）、`w+`（覆盖读写）、`a+`（追加读写）。
- `buffering`：可选，缓冲区策略（默认-1使用系统策略）。
- `encoding`：可选，文本编码（如`'utf-8'`），默认与系统相关。
- `errors`：可选，编码错误处理（`'strict'`、`'ignore'`、`'replace'`等）。
- `newline`：可选，换行符控制（如`'\n'`、`'\r\n'`）。

**示例**：
```Python
# 读取文本文件（自动关闭）
with open('data.txt', 'r', encoding='utf-8') as f:
    content = f.read()

# 写入二进制文件
with open('image.jpg', 'wb') as f:
    f.write(b'\xff\xd8\xff\xe0')  # JPEG文件头
```

## 读取文件

### `read(size=-1)`
**描述**：读取指定字节数（文本模式为字符数），默认读取全部内容。  
**示例**：
```Python
with open('log.txt', 'r') as f:
    chunk = f.read(1024)  # 读取前1024个字符
```

### `readline(size=-1)`
**描述**：逐行读取，保留换行符`\n`。  
**示例**：
```Python
with open('data.csv', 'r') as f:
    header = f.readline()  # 读取标题行
```

### `readlines(hint=-1)`
**描述**：读取所有行并返回列表，`hint`限制总字节数。  
**示例**：
```Python
with open('log.log', 'r') as f:
    lines = f.readlines()  # 适用于小文件
```

## 写入文件

### `write(s)`
**描述**：写入字符串或字节流，返回写入字符/字节数。  
**示例**：
```Python
with open('output.txt', 'w') as f:
    f.write('Hello World\n')  # 覆盖写入
```

### `writelines(lines)`
**描述**：写入字符串列表（不会自动添加换行符）。  
**示例**：
```Python
lines = ['Line 1\n', 'Line 2\n']
with open('notes.txt', 'a') as f:
    f.writelines(lines)  # 追加多行
```

## 文件指针

### `seek(offset, whence=0)`
**描述**：移动文件指针到指定位置。  
- `whence`：参考点（0=文件头，1=当前位置，2=文件尾）。
  
**示例**：
```Python
with open('data.bin', 'rb') as f:
    f.seek(10)  # 跳转到第10字节
    data = f.read(5) #从第10字节起读5个字节
```

### `tell()`
**描述**：返回当前文件指针的位置。  
**示例**：
```Python
with open('log.txt', 'r') as f:
    f.read(100)
    pos = f.tell()  # 获取当前位置（如100）
```

## 关闭文件

### `close()`
**描述**：手动关闭文件（推荐使用`with`语句自动管理）。  
**示例**：
```Python
f = open('temp.txt', 'w')
f.close()  # 必须显式关闭
```

## 异常处理

### `try-except`块
**描述**：处理文件操作中的异常（如文件不存在、权限错误）。  
**示例**：
```Python
try:
    with open('missing.txt', 'r') as f:
        content = f.read()
except FileNotFoundError:
    print("文件不存在！")
```







