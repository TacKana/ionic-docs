---
title: "ionic ssh use"
sidebar_label: "ssh use"
translated: true
source_hash: 9a15ac
---



设置您的活跃 Ionic SSH 密钥

```shell
$ ionic ssh use [key-path]
```

此命令修改 SSH 配置文件（**~/.ssh/config**），为 **git.ionicjs.com** 主机设置活跃的私钥。运行 `man ssh_config` 命令或访问在线 man [页面](https://linux.die.net/man/5/ssh_config) 了解更多关于 SSH 配置的信息。

在进行更改之前，`ionic ssh use` 将打印差异并请求写入文件的权限。

### key-path
要使用的私钥文件位置


