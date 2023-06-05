---
title: 🎶 JavaScript编写技巧 
description: This is a demo post.
createTime: 2023-06-05 13:55
updateTime: 2023-06-05 13:55
---

# JavaScript 编写技巧（持续更新...）

为了更加优雅、轻松易读的JavaScript代码，有一些小细节的处理是必不可少的。


## 1. || 和 && 逻辑运算符

在JavaScript中，`||` 和 `&&` 是常用的逻辑运算符，但是在使用的时候，需要注意一些细节。

`||` 运算符的作用是：两个表达式中只要有一个为 `true`，则返回 `true`，否则返回 `false`。

```js 
1 || 2 // 1
- 1 || 2 // -1
0 || 2 // 2
'' || 2 // 2
undefined || 2 // 2
null || 2 // 2
```

`&&` 运算符的作用是：两个表达式中只要有一个为 `false`，则返回 `false`，否则返回 `true`。

```js
1 && 2 // 2
- 1 && 2 // 2
0 && 2 // 0
'' && 2 // ''
undefined && 2 // undefined
null && 2 // null
```

**注意点**：0、空字符串、Undefined 和 Null 都会被转换为 `false` 处理，其他的都会被转换为 `true`。

## 2. ?? 空值合并运算符

`??` 运算符的作用是：当左侧的表达式为 Null 或 Undefined 时，返回右侧的表达式，否则返回左侧的表达式。

**注意点**：`??` 运算符只会判断左侧的表达式是否为 Null 或 Undefined，其他的都不会判断（包括 0 和 空字符串）。

