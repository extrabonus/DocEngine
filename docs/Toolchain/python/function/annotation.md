# 类型注释

## `def function_name(parameters) -> return_type:`
**描述**：定义函数的标准语法，支持参数列表、返回值类型注释。  
**参数**：
- `parameters`：形式参数列表（可选），支持位置参数、关键字参数、默认参数等
- `-> return_type`：返回值类型注释（可选）

**示例**：
```Python
def add(a: int, b: int = 0) -> int:
    """返回两个整数的和"""
    return a + b
```


## 文档字符串（Docstring）
### 基础文档
```Python
def func():
    """单行文档描述"""
```

### 多行文档（推荐PEP 257风格）
```Python
def calculate(a: float, b: float) -> float:
    """
    执行复杂数学计算

    Args:
        a (float): 第一个操作数
        b (float): 第二个操作数

    Returns:
        float: 计算结果
    """
    return (a ** 2) + (b ** 0.5)
```

### 常用文档风格
| 风格      | 特点                         | 示例                     |
|-----------|------------------------------|--------------------------|
| **Google** | 使用Args/Returns/Raises      | [见上方2.2示例]          |
| **Numpy**  | 分参数/返回/注意章节          | 使用Parameters/Returns   |
| **reST**   | 兼容Sphinx文档生成工具        | 使用:param: :return: 语法 |


## 类型注释（Type Hints）
### 基础类型标注
```Python
def greet(name: str, times: int = 1) -> None:
    for _ in range(times):
        print(f"Hello {name}!")
```

### 复合类型（需导入typing）
```Python
from typing import List, Dict, Union

def process_data(
    items: List[Union[int, str]],
    config: Dict[str, float]
) -> tuple[int, int]:
    return len(items), len(config)
```

### 类型别名
```Python
UserId = int
UserInfo = Dict[str, Union[str, List[str]]]

def get_user(user_id: UserId) -> UserInfo:
    return {"name": "Alice", "roles": ["admin"]}
```

##  内省（Introspection）
### 查看文档
```Python
print(calculate.__doc__)  # 查看原始文档字符串
help(calculate)           # 格式化帮助信息
```

### 查看类型注释
```Python
print(add.__annotations__)
# 输出: {'a': <class 'int'>, 'b': <class 'int'>, 'return': <class 'int'>}
```

### 使用inspect模块
```Python
import inspect

def demo(a: int, b: float = 0.0) -> str:
    pass

print(inspect.getfullargspec(demo))
# 输出: FullArgSpec(args=['a', 'b'], varargs=None, varkw=None, 
#         defaults=(0.0,), kwonlyargs=[], kwonlydefaults=None, 
#         annotations={'a': <class 'int'>, 'b': <class 'float'>, 
#         'return': <class 'str'>})
```



## 完整示例
```Python
from typing import Optional

def format_name(
    first: str, 
    last: str, 
    middle: Optional[str] = None
) -> str:
    """
    格式化用户姓名

    Args:
        first (str): 必填名字
        last (str): 必填姓氏
        middle (Optional[str]): 可选中间名，默认为None

    Returns:
        str: 格式化的全名

    Raises:
        ValueError: 如果名字或姓氏为空
    """
    if not first or not last:
        raise ValueError("姓名不能为空")
    
    components = [first]
    if middle:
        components.append(middle)
    components.append(last)
    
    return " ".join(components)
```


## 验证工具
| 工具           | 用途                      | 安装命令              |
|----------------|---------------------------|-----------------------|
| **pydocstyle** | 检查文档字符串规范         | `pip install pydocstyle` |
| **mypy**       | 静态类型检查               | `pip install mypy`      |
| **Sphinx**     | 自动生成API文档            | `pip install sphinx`    |

通过 `mypy your_script.py` 检查类型注释的正确性，通过 `pydocstyle your_script.py` 验证文档规范。