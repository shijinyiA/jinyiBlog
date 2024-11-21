---
title: Markdown 基础教程
icon: pen-to-square
date: 2024-11-21
category:
  - 教程
tag:
  - Markdown
  - 基础
star: true
permalink: /md
---

# Markdown 基础教程

Markdown 是一种轻量级的标记语言，专注于简单的文本格式化。以下是 Markdown 的基础用法。

---

## 1. 标题

使用 `#` 表示标题，`#` 的数量决定标题的层级。以下是示例：

```markdown
# 一级标题
## 二级标题
### 三级标题
```

效果如下：

# 一级标题
## 二级标题
### 三级标题

---

## 2. 文本格式

Markdown 提供多种文本格式，例如 **加粗**、*斜体* 和 ~~删除线~~。

```markdown
- **加粗**：使用 `**加粗文本**`
- *斜体*：使用 `*斜体文本*`
- ~~删除线~~：使用 `~~删除文本~~`
```

效果如下：

- **加粗**
- *斜体*
- ~~删除线~~

---

## 3. 列表

Markdown 支持无序列表和有序列表。

### 无序列表

使用 `-` 或 `*` 创建无序列表：

```markdown
- 项目1
- 项目2
  - 子项目1
  - 子项目2
```

效果如下：

- 项目1
- 项目2
  - 子项目1
  - 子项目2

### 有序列表

使用数字加点创建有序列表：

```markdown
1. 项目1
2. 项目2
   1. 子项目1
   2. 子项目2
```

效果如下：

1. 项目1
2. 项目2
   1. 子项目1
   2. 子项目2

---

## 4. 链接与图片

### 链接

使用 `[链接文字](URL)` 添加链接：

```markdown
[访问百度](https://www.baidu.com)
```

效果：[访问百度](https://www.baidu.com)

### 图片

使用 `![图片描述](图片URL)` 插入图片：

```markdown
![Markdown 图标](https://markdown-here.com/img/icon256.png)
```

效果如下：

![Markdown 图标](https://markdown-here.com/img/icon256.png)

---

## 5. 引用

使用 `>` 表示引用内容：

```markdown
> 这是引用内容。
> 引用可以跨行使用。
```

效果如下：

> 这是引用内容。  
> 引用可以跨行使用。

---

## 6. 代码块

### 行内代码

使用反引号 `` `代码` `` 表示行内代码：

```markdown
这是行内代码示例：`console.log('Hello World')`
```

效果如下：  
这是行内代码示例：`console.log('Hello World')`

### 多行代码块

使用三个反引号包裹多行代码：

```markdown
\```
function sayHello() {
  console.log("Hello, Markdown!");
}
\```
```

效果如下：

```javascript
function sayHello() {
  console.log("Hello, Markdown!");
}
```

---

## 7. 表格

使用 `|` 和 `-` 创建表格：

```markdown
| 名称   | 描述     |
| ------ | -------- |
| Markdown | 标记语言 |
| HTML     | 超文本标记语言 |
```

效果如下：

| 名称     | 描述           |
| -------- | -------------- |
| Markdown | 标记语言       |
| HTML     | 超文本标记语言 |

---

## 最后

Markdown 简单易用，适合写作、记录笔记或文档。熟练掌握以上基础语法，你就可以轻松编写出清晰、美观的文本内容。

> **提示：** Markdown 还支持扩展语法，如任务列表、脚注等，可根据需求学习**进阶**用法。
```