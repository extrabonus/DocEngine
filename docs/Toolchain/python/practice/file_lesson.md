# 文件

## **题目 1：处理大型文件**
逐行读取文件，避免一次性加载到内存：
```Python
def read_large_file(file_path):
    with open(file_path, "r") as file:
        for line in file:
            yield line.strip()

# 逐行处理
for line in read_large_file("data.txt"):
    process(line)  # 假设 process 是处理函数
```

## **题目 2：批量重命名工具**

```Python
def batch_rename(dir_path, old_ext, new_ext):
    for f in Path(dir_path).glob(f'*.{old_ext}'):
        f.rename(f.with_suffix(f'.{new_ext}'))  # 
```

## **题目 3：文件分类整理**

```Python
def organize_files(src_dir):
    categories = {'.txt': 'Documents', '.jpg': 'Images'}
    for file in Path(src_dir).iterdir():
        if dest := categories.get(file.suffix.lower()):
            (src_dir/dest).mkdir(exist_ok=True)
            file.rename(src_dir/dest/file.name)  # 
```

## **题目 4：处理CSV文件**
 
```Python
import csv
with open('data.csv', 'w', newline='') as f:
    writer = csv.DictWriter(f, fieldnames=['name', 'age'])
    writer.writeheader()
    writer.writerow({'name': 'Alice', 'age': 30})
```

## **题目 5：处理JSON文件**

```Python
import json
with open('config.json', 'r') as f:
    settings = json.load(f)
```

## **题目 6：处理LOG文件**
```Python
with open('large.log', 'r') as f:
    for line in f:  # 内存高效方式
        process_line(line)
```