---
title: 🎶 JavaScript编写技巧 
description: This is a demo post.
createTime: 2023-06-05 13:55
updateTime: 2023-06-08 14:57
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

## 3. 优化 If、Case 语句代码

在 JavaScript 中，`If` 和 `Case` 语句是常用的条件语句。

但是在使用的时候，很可能会出现一长串的 `If` 或 `Case` 语句，这样的代码不仅不美观，而且不易读，所以我们需要对这样的代码进行优化。

```ts
const key = 1
if (key === 1) {
  console.log('key is 1')
} else if (key === 2) {
  console.log('key is 2')
} else if (key === 3) {
  console.log('key is 3')
} else {
  console.log('key is other value')
}
```

可以利用对象Object属性的唯一性，将上面的代码优化为：

```ts
const oneKey = () => {
  console.log('key is 1')
}
const twoKey = () => {
  console.log('key is 2')
}
const threeKey = () => {
  console.log('key is 3')
}
const otherKey = () => {
  console.log('key is other value')
}

// 利用对象属性名的唯一性来绑定对应的自定义处理函数
const keyList = {
  1: oneKey,
  2: twoKey,
  3: threeKey,
}

const key = 1
keyList[key] ? keyList[key]() : otherKey()
```