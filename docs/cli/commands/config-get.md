---
title: "ionic config get"
sidebar_label: "config get"
translated: true
source_hash: 244ebc6
---



打印配置值

```shell
$ ionic config get [property] [options]
```

此命令从项目的 **./ionic.config.json** 文件中读取并打印配置值。它也可以使用 `--global` 选项操作全局 CLI 配置（**~/.ionic/config.json**）。

对于嵌套属性，使用点号分隔嵌套级别。例如，属性名 `integrations.cordova` 将在 **integrations** 对象中查找 **cordova** 属性。

如果不提供 `property` 参数，此命令将打印整个配置。

对于多应用项目，此命令默认限定在当前项目范围内。要改为在项目配置文件的根级别操作，请使用 `--root` 选项。

如果您以编程方式使用此命令，可以使用 `--json` 选项。

此命令将对已知的敏感字段进行脱敏处理（使用 `--json` 时禁用）。

### property
您希望获取的属性名




### 选项

 - `--global`: 使用全局 CLI 配置（或 `-g`）
      


### 高级选项

 - `--json`: 以 JSON 格式输出配置值
      
 - `--root`: 在 **./ionic.config.json** 的根级别操作
      

## 示例

```shell
$ ionic config get 
$ ionic config get id
$ ionic config get --global user.email
$ ionic config get -g npmClient
```
