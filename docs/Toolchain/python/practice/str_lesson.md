# 题目


## **题目 1：字符串大小写转换**
**任务**：用户输入一个英文名字（如 `"Alice"`），程序将其转为全大写和全小写输出。  
**示例输入**：`"Bob"`  
**示例输出****：  
```
大写: BOB  
小写: bob
```

## **题目 2：统计元音字母数量**
**任务**：统计字符串中元音字母（`a, e, i, o, u`，不区分大小写）出现的次数。  
**示例输入**：`"Hello World"`  
**示例输出**：`元音字母出现次数: 3`


## **题目 3：反转字符串**
**任务**：用户输入一个字符串，程序输出其反转后的结果（如 `"hello"` → `"olleh"`）。  
**要求**：不能直接使用 `[::-1]`，尝试用循环实现。  
**示例输入**：`"Python"`  
**示例输出**：`反转结果: nohtyP`


## **题目 4：检查回文**
**任务**：判断输入的字符串是否是回文（正反读相同，如 `"madam"`）。  
**示例输入 1**：`"racecar"` → **输出**：`是回文`  
**示例输入 2**：`"hello"` → **输出**：`不是回文`


## **题目 5：去除字符串中的空格**
**任务**：输入一个包含多余空格的字符串（如 `"  Hello   World  "`），输出删除所有空格后的结果。  
**示例输入**：`"  Py thon  "`  
**示例输出**：`处理后: Python`


## **题目 6：统计单词数量**
**任务**：输入一个英文句子（如 `"I love Python"`），统计其中的单词数量（假设单词间用空格分隔）。  
**示例输入**：`"Hello world from Python"`  
**示例输出**：`单词数量: 4`


## **题目 7：字符串替换**
**任务**：将字符串中的所有空格替换为指定的符号（如 `"-"`）。  
**示例输入**：`"Hello World", 替换符为"#"`  
**示例输出**：`替换后: Hello#World`


## **题目 8：格式化输出**
**任务**：用户输入一段英文句子，将每个单词的首字母大写，其余字母小写（如 `"hello world"` → `"Hello World"`）。  
**示例输入**：`"tHIS is a TEST"`  
**示例输出**：`格式化后: This Is A Test`


## **题目 9：查找子字符串的位置**
**任务**：输入一个主字符串和一个子字符串，输出子字符串在主字符串中第一次出现的位置（从 0 开始）。若不存在则返回 `-1`。  
**示例输入**：主字符串 `"abcdef"`，子字符串 `"cde"`  
**示例输出**：`首次出现位置: 2`


## **题目 10：生成用户名和邮箱**
**任务**：输入姓名（如 `"John Doe"`）和网站名（如 `"gmail"`），生成：  
1. 用户名：全小写，用下划线连接（如 `"john_doe"`）  
2. 邮箱：`用户名@网站名.com`（如 `"john_doe@gmail.com"`）  
**示例输入**：`"Alice Smith", "yahoo"`  
**示例输出**：  
```
用户名: alice_smith  
邮箱: alice_smith@yahoo.com
```

---

## 答案

#### **题目 1：字符串大小写转换**

```Python
print("BOB".lower())
print("BOB".upper())

```

#### **题目 2：统计元音字母数量**

```Python
vowel = "aeiouAEIOU"
str1 = "Hello World"
counts = 0
for i in str1:
    if i in vowel:
        counts += 1
print("hello world中的元音字母数量为", counts)
```
```Python
vowel = "aeiouAEIOU"
str1 = "Hello World"
counts = 0
for i in vowel:
    counts += str1.count(i)
print("hello world中的元音字母数量为", counts)

```

#### **题目 3：反转字符串**
```Python
str1 = input("请输入一个字符串:")
newstr = "".join([str1[i] for i in range(len(str1)-1,-1,-1)]) #range(start,end,step)
print("该字符串反转后为:", newstr)

```
#### **题目 4：检查回文**
```Python
str1 = input("请输入一个字符串:")
if str1 == str1[::-1]:
    print("此字符串为回文字符！")
else:
    print("此字符串不是回文字符！")

```

#### **题目 5：去除字符串中的空格**
```Python
str1 = "  Py thon  "
newstr1 = str1.replace(" ","")
print(newstr1)

```

#### **题目 6：统计单词数量**
```Python
str1 = "I love Python"
words = str1.split()
print("I love Python的单词数量为", len(words))
```

#### **题目 7：字符串替换**
```Python
print("hello world".replace(" ","#"))

```

#### **题目 8：格式化输出**
```Python
str1 = input("请输入一串字符串：")
print(str1.title())
```

#### **题目 9：查找子字符串的位置**
```Python
str1 = input("请输入一串字符串：")
str2 = input("请输入一串查找字符串：")

print(str1.find(str2))
```

#### **题目 10：生成用户名和邮箱**
```Python
str1 = input("请输入姓名：")
str2 = input("请输入网站名：")

if " " in str1:
    str1 = str1.replace(" ","_")
str1 = str1.lower()
print("用户名：", str1)
print("邮箱："+ str1 + "@" + str2 + ".com")
```