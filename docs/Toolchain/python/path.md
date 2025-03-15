# 路径读取

## `pathlib.Path(path)`
**描述**：面向对象的文件系统路径处理核心类，支持跨平台路径操作与文件管理。

## `Path(*pathsegments)`
**描述**：
路径对象创建

**参数**：
- `*pathsegments`：字符串或路径对象，支持多参数拼接（如`Path('a', 'b')`等效于`a/b`）

**示例**：
```Python
from pathlib import Path

# 基础创建方式
p1 = Path('folder/file.txt')          # 相对路径
print(p1)                             # 输出: folder/file.txt
p2 = Path('/usr/local/bin')           # 绝对路径
print(p2)                             # 输出: /usr/local/bin
p3 = Path.home() / 'Documents'        # 用户目录拼接
print(p3)                             # 输出: /home/user/Documents（假设用户目录为/home/user）
p4 = Path.cwd().parent                # 获取上级目录
print(p4)                             # 输出: /current/workdir的上级目录（具体路径取决于当前工作目录）
```


## 路径属性获取
| 属性/方法 | 描述 | 示例 |
|-----------|------|------|
| `.name` | 含扩展名的文件名 | `Path('a/b.txt').name` → `'b.txt'` |
| `.stem` | 不含扩展名的文件名 | `Path('a/b.tar.gz').stem` → `'b.tar'` |
| `.suffix` | 最后一个扩展名 | `Path('a/b.tar.gz').suffix` → `'.gz'` |
| `.suffixes` | 全部扩展名列表 | `Path('a/b.tar.gz').suffixes` → `['.tar', '.gz']` |
| `.parent` | 父目录路径对象 | `Path('a/b/c.txt').parent` → `a/b`（打印输出为`a/b`） |
| `.parts` | 路径分解为元组 | `Path('/a/b/c').parts` → `('/', 'a', 'b', 'c')` |
| `.absolute()` | 返回绝对路径对象 | `Path('.').absolute()` → `/current/workdir`（具体路径取决于当前工作目录） |


## 路径拼接 `/`
**描述**：使用除法运算符实现跨平台路径拼接  
**示例**：
```Python
config_path = Path('project') / 'config' / 'settings.json'
print(config_path)  # 输出: project/config/settings.json（自动处理OS差异）
```

## `joinpath(*other)`
**参数**：
- `*other`：多个路径片段  
**示例**：
```Python
p = Path('a').joinpath('b', 'c')
print(p)  # 输出: a/b/c
```

## `resolve(strict=False)`
**描述**：解析符号链接并处理`.`/`..`，返回绝对路径  
**示例**：
```Python
resolved_path = Path('scripts/../data').resolve()
print(resolved_path)  # 输出: /absolute/path/data（具体路径取决于当前工作目录）
```

## 文件检查
| 方法 | 描述 | 示例 |
|------|------|------|
| `.exists()` | 路径是否存在 | `print(Path('a.txt').exists())` → `True`（假设文件存在） |
| `.is_file()` | 是否是文件 | `print(Path('b.jpg').is_file())` → `True` |
| `.is_dir()` | 是否是目录 | `print(Path('docs').is_dir())` → `True` |

## 文件读写
| 方法 | 描述 | 示例 |
|------|------|------|
| `.read_text(encoding=None)` | 读取文本内容 | `content = Path('note.txt').read_text()`<br>`print(content)` → `'Hello, World!'` |
| `.write_text(data, encoding=None)` | 写入文本文件 | `Path('log.txt').write_text('新内容')`<br>执行后文件内容变为“新内容” |
| `.read_bytes()` | 读取二进制内容 | `data = Path('img.jpg').read_bytes()`<br>`print(len(data))` → `10240`（假设文件大小为10KB） |
| `.write_bytes(data)` | 写入二进制文件 | `Path('data.bin').write_bytes(b'\x00\xFF')`<br>执行后文件包含字节`0x00`和`0xFF` |

## 目录管理
**示例**：
```Python
# 创建目录（支持递归创建）
Path('new/project').mkdir(parents=True, exist_ok=True)  # 目录结构 new/project 被创建

# 删除空目录
Path('empty_dir').rmdir()  # 目录必须为空否则报错

# 删除文件
Path('temp.txt').unlink(missing_ok=True)  # 文件被删除，若文件不存在不报错
```

## 目录遍历与匹配
### `iterdir()`
**描述**：生成目录下的所有条目  
**示例**：
```Python
for item in Path('.').iterdir():
    print(f"{'DIR' if item.is_dir() else 'FILE'} → {item.name}")
# 示例输出:
# DIR → folder1
# FILE → file1.txt
# DIR → subdir
```

### `glob(pattern)`
**参数**：
- `pattern`：Unix风格通配符模式  
**示例**：
```Python
# 查找当前目录所有.py文件
py_files = list(Path('src').glob('*.py'))
print(py_files)  # 输出: [PosixPath('src/main.py'), PosixPath('src/utils.py')]

# 递归查找所有.md文件
md_files = list(Path('docs').rglob('**/*.md'))
print(md_files)  # 输出: [PosixPath('docs/ch1.md'), PosixPath('docs/notes/ch2.md')]
```

## 路径修改
**示例**：
```Python
# 修改文件名（保留路径）
new_path = Path('old.txt').with_name('new.txt')
print(new_path)  # 输出: new.txt

# 修改扩展名
new_path = Path('data.csv').with_suffix('.xlsx')
print(new_path)  # 输出: data.xlsx
```

## 相对路径计算
**示例**：
```Python
rel_path = Path('/a/b/c').relative_to('/a')
print(rel_path)  # 输出: b/c
```

## 文件元数据
**示例**：
```Python
stat = Path('file.txt').stat()
print(f"大小: {stat.st_size} bytes, 修改时间: {stat.st_mtime}")
# 示例输出: 大小: 1024 bytes, 修改时间: 1620000000.0（具体数值取决于文件实际属性）
```