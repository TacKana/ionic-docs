---
title: "ionic integrations enable"
sidebar_label: "integrations enable"
translated: true
source_hash: 415c12c2
---



向您的应用添加并启用集成

```shell
$ ionic integrations enable [name] [options]
```

可以使用此命令启用集成（例如 Cordova）。如果集成从未添加到项目中，`ionic integrations enable` 将下载并添加该集成。

可以使用 `--add` 选项重新添加集成。

### name
要启用的集成（例如 `capacitor`、`cordova`、`enterprise`）




### 选项

 - `--add`: 即使已启用也下载并添加集成
      
 - `--root=<path>`: 指定添加时下载到的替代目标路径
      
 - `--quiet`: 减少详细输出，忽略集成错误
      
