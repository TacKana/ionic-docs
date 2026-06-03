---
title: "ionic link"
sidebar_label: "link"
translated: true
source_hash: 3926d60f
---



将本地应用连接到 Ionic

```shell
$ ionic link [id]
```

使用此命令将 Appflow 上的应用链接到本地 Ionic 项目。

如果排除了 `id` 参数，此命令将提示您从 Appflow 中选择一个应用。

Appflow 使用基于 git 的工作流来管理应用更新。在链接过程中，选择 **GitHub**（推荐）或 **Appflow** 作为 git 托管服务。有关更多信息，请参见我们的 [文档](https://ionicframework.com/docs/appflow/basics/git)。

最终，此命令设置 **./ionic.config.json** 中的 **id** 属性，将此应用标记为已链接。

如果您在链接时遇到问题，请联系我们的 [支持](https://ion.link/support-request)。

### id
要链接的应用的 Appflow ID（例如 `a1b2c3d4`）



## 示例

```shell
$ ionic link 
$ ionic link a1b2c3d4
```
