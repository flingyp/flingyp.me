---
title: 👽 HTTPS控制台错误问题处理
description: 关于 HTTP | HTTPS 相关内容的问题处理 
createTime: 2023-07-25 14:11
updateTime: 2023-07-25 14:11
---

# 👽 HTTPS控制台错误问题处理

## CASE 1

### 问题描述

一般线上的网站都会去配置 HTTPS。但是在配置 HTTPS 的过程中，可能会遇到一些问题，比如控制台报错情况。

例如下面这种情况。

![2023072501](/posts/20230725-01.jpg)

而出现这种情况的原因是因为网站的**资源请求**是通过 HTTP 协议加载的，而**网站本身是通过 HTTPS 协议加载**的，所以浏览器会报错。

### 解决方式

**方式一**：将两种协议变成一种协议，要么把资源请求配置 HTTPS，要么将网站本身配置为 HTTP

**方式二**：在网站 `<head>` 标签里面添加如下内容

**upgrade-insecure-requests** 是内容安全策略的一个指令，指示浏览器自动将HTTP请求升级为HTTPS请求，如图片、脚本、样式表等资源。

```html
<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
```

意义：这将告诉浏览器自动将网页上所有资源的HTTP请求升级为HTTPS请求。