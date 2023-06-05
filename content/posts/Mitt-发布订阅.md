---
title: 🙌 Mitt 实现兄弟组件之间的通信
description: Mitt 发布订阅 - 实现兄弟组件之间的通信
createTime: 2023-05-23 14:19
updateTime: 2023-05-23 14:19
---

# Mitt 实现兄弟组件之间的通信

## 发布订阅者模式

发布订阅者模式是一种**一对多的关系**，当一个对象的状态发生改变时，所有依赖于它的对象都将得到通知。

下面是简单的实现发布订阅者模式的代码：

```ts
class EventEmitter {
  private events: Record<string, Function[]> = {}

  on(eventName: string, callback: Function) {
    if (!this.events[eventName]) {
      this.events[eventName] = []
    }
    this.events[eventName].push(callback)
  }

  emit(eventName: string, ...args: any[]) {
    if (this.events[eventName]) {
      this.events[eventName].forEach((callback) => {
        callback(...args)
      })
    }
  }

  off(eventName: string, callback: Function) {
    if (this.events[eventName]) {
      this.events[eventName] = this.events[eventName].filter(
        (cb) => cb !== callback,
      )
    }
  }
}

const eventEmitter = new EventEmitter()

// on - 负责订阅事件
eventEmitter.on('click', (name: string) => {
  console.log(`hello ${name}`)
})

// emit - 负责发布事件
eventEmitter.emit('click', 'world')

// off - 删除订阅事件
eventEmitter.off('click', (name: string) => {
  console.log(`hello ${name}`)
})
```


## 什么是 Mitt

Mitt 是一个小型的发布订阅库，它的体积只有 1kb，它的 API 也非常简单，只有三个方法，on、off、emit。

在 Vue 中，我们可以通过 props、$emit、$on、$off 等方法实现父子组件之间的通信，但是对于兄弟组件之间的通信，我们就需要借助于一个中间件来实现，这个中间件就是 **Mitt**

早在 Vue2 中是支持通过 $on、$off、$emit 来实现兄弟组件之间的通信的，但是在 Vue3 中，$on、$off 这些方法都被移除了，所以我们需要自己实现一个中间件来实现兄弟组件之间的通信。

- [官方文档](https://v3-migration.vuejs.org/breaking-changes/events-api.html)

## Mitt 的使用

```bash
# 安装
pnpm add mitt
```


```ts
import mitt from 'mitt'

const emitter = mitt()

emitter.on('click', (name: string) => {
  console.log(`hello ${name}`)
})

emitter.emit('click', 'world')

emitter.all.clear()
```
