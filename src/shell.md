---
title: Shell 基础教程
icon: pen-to-square
date: 2024-11-27
category:
  - 教程
tag:
  - Shell
  - 基础
star: true
permalink: /shell
---


# Shell 脚本入门教程

Shell 脚本是操作系统中强大的工具，它能够帮助我们自动化任务、批量处理文件以及高效完成日常工作。

---

## 什么是 Shell 脚本？

Shell 脚本是一种运行在命令行解释器（Shell）上的脚本程序，它使用 Shell 命令和编程语言的语法来完成各种任务。常见的 Shell 有：
- **Bash**（最常用）
- **Zsh**
- **Sh**

Shell 脚本的文件通常以 `.sh` 结尾，例如 `myscript.sh`。

---

## 为什么学习 Shell 脚本？

学习 Shell 脚本可以让你：
1. **自动化工作**：例如批量重命名文件、备份数据。
2. **简化操作**：使用脚本代替复杂的手动操作。
3. **提升效率**：轻松完成需要大量重复操作的任务。

---

## 基本语法

### 1. 创建和运行脚本
#### 创建脚本文件
使用文本编辑器创建一个文件，比如：
```bash
nano myscript.sh
```

#### 添加脚本头部
在文件开头加上：
```bash
#!/bin/bash
```
这表示脚本将由 Bash 解释器执行。

#### 赋予脚本执行权限
保存文件后，赋予脚本执行权限：
```bash
chmod +x myscript.sh
```

#### 运行脚本
运行脚本的命令是：
```bash
./myscript.sh
```

---

### 2. 基本命令

#### 输出文本
使用 `echo` 命令：
```bash
#!/bin/bash
echo "Hello, World!"
```

运行结果：
```
Hello, World!
```

#### 变量
定义变量并输出：
```bash
#!/bin/bash
name="Shell"
echo "Hello, $name!"
```

运行结果：
```
Hello, Shell!
```

#### 获取用户输入
使用 `read` 命令：
```bash
#!/bin/bash
echo "输入名字回车:"
read name
echo "Hello, $name!"
```

运行结果：
```
输入名字回车:
锦衣
Hello, 锦衣!
```

---

### 3. 条件语句

#### `if` 语句
```bash
#!/bin/bash
echo "输入数字回车:"
read num
if [ $num -gt 10 ]; then
  echo "这个数大于10."
else
  echo "小于10."
fi
```

运行结果：
```
输入数字回车:
15
这个数大于10.
```

#### 条件操作符
- `-eq`：等于
- `-ne`：不等于
- `-gt`：大于
- `-lt`：小于

---

### 4. 循环

#### `for` 循环
```bash
#!/bin/bash
for i in 1 2 3 4 5; do
  echo "Number $i"
done
```

运行结果：
```
Number 1
Number 2
Number 3
Number 4
Number 5
```

#### `while` 循环
```bash
#!/bin/bash
count=1
while [ $count -le 5 ]; do
  echo "Count $count"
  count=$((count + 1))
done
```

运行结果：
```
Count 1
Count 2
Count 3
Count 4
Count 5
```

---

### 5. 函数

定义一个函数：
```bash
#!/bin/bash
greet() {
  echo "Hello, $1!"
}
greet "World"
```

运行结果：
```
Hello, World!
```

---

### 6. 文件操作

#### 创建和写入文件
```bash
#!/bin/bash
echo "这是一个新文件test" > test.txt
```

#### 读取文件
```bash
#!/bin/bash
cat test.txt
```

#### 检查文件是否存在
```bash
#!/bin/bash
if [ -f "test.txt" ]; then
  echo "File exists."
else
  echo "File does not exist."
fi
```

---

### 7. 调试脚本

使用 `-x` 运行脚本，可以查看每一步执行的命令：
```bash
bash -x myscript.sh
```

---

## 最后
写者能力十分有限，只能写出/修改出这篇文章，如有出错还请见谅（

同时建议学习linux熟悉的常见命令：`ls`、`cp`、`mv`、`grep` 等。


---


**推荐资源**：
- 官方文档：[GNU Bash 手册](https://www.gnu.org/software/bash/manual/)
- 教程：[Shell 脚本教程](https://tldp.org/LDP/abs/html/)