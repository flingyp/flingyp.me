---
title: 🥰 覆盖嵌套的NPM依赖版本
description: 学习如何修改项目当中依赖包所依赖包的版本
createTime: 2023-07-18 17:33
updateTime: 2023-07-18 17:33
---

# 覆盖嵌套的NPM依赖版本

## 故事的开端

有一天摸鱼，我去偶像 [antfu.me](https://github.com/antfu/antfu.me) 的博客上发现了一个令人惊艳的切换主题过渡效果。🎇

我简直被它深深吸引，于是我迫不及待地将这个功能复制到了自己的网站上😁。我兴高采烈地将代码提交到GitHub，并使用Netify来部署我的网站，然后我静静地等待着网站的更新。 
 
两三分钟后，我迫不及待地想要看看效果，但是却发现它并没有生效。我有点失望，以为是网站缓存的问题。于是我清除了网站的本地缓存，再次进行测试，但是依然没有任何变化。 
 
我以为只是Netify还没有完成部署，所以决定再等一会儿。然而，即使等了一段时间，效果还是没有生效。这时候，我开始有点慌了，开始怀疑是不是我自己在代码中犯了错。于是，我仔细检查了代码，但是并没有找到任何问题。

我内心一万个草泥马奔腾而过，大半年不动弹的网站，我一动手就出问题😭，这是怎么回事？

接着，我登陆到Netify上查看部署状态，结果却发现部署失败了😡。我赶紧查看了日志，发现原来是依赖包安装失败了。

- `Package subpath './core' is not defined by exports in /opt/build/repo/node_modules/.pnpm/unenv@1.5.2/node_modules/consola/package.json imported from /opt/build/repo/node_modules/.pnpm/unenv@1.5.2/node_modules/unenv/runtime/npm/consola.mjs`

![2023071801](/posts/20230718-01.jpg)

## 问题解决

当我看到 `consola` 时，我印象很深，之前也是应该这个包的版本问题导致项目跑不起来。

- [提交记录](https://github.com/flingyp/flingyp.me/commit/149ecb09905fd7a3b3b015d7916195597e248c09)

而当时只是针对Pnpm包管理进行了个版本控制，遗漏掉在Netify使用的是Npm包管理。

所以出现本地打包构建没问题，但是部署到Netify上就出现问题。

```json
{
  "pnpm": {
    "overrides": {
      "consola": "3.0.1"
    }
  }
}
```

但当时没有出现上诉截图的问题，随后到 [consola](https://github.com/unjs/consola) 查看了 CHANGELOG，发现在 v3.1.0 更新了 `core` 的导出方式。

![2023071802](/posts/20230718-02.jpg)

好家伙，真是隐藏的坑，在等着我呢😡。

所以解决方式就是修改 **依赖包所依赖的包的版本**

[关于 overrides 阶段的介绍](https://docs.npmjs.com/cli/v9/configuring-npm/package-json#overrides)

```json
{
  "overrides": {
    "packageName": {
      "consola": "3.2.3"
    }
  }
}
```

 
