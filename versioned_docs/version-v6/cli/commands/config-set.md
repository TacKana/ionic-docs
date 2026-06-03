---
title: "ionic config set"
sidebar_label: "config set"
translated: true
source_hash: 5b6add5a
---



设置配置值

```shell
$ ionic config set [property] [value] [options]
```

此命令将配置值写入项目的 **./ionic.config.json** 文件。它也可以使用 `--global` 选项操作全局 CLI 配置（**~/.ionic/config.json**）。

对于嵌套属性，使用点号分隔嵌套级别。例如，属性名 `integrations.cordova` 将在 **integrations** 对象中查找 **cordova** 属性。

对于多应用项目，此命令默认限定在当前项目范围内。要改为在项目配置文件的根级别操作，请使用 `--root` 选项。

此命令将尝试将 `value` 转换为合适的 JSON 类型。如果它可被 JSON 解析，例如 `123`、`true`、`[]` 等，则使用解析结果。否则，该值将被解释为字符串。如需更严格的输入，请使用 `--json`，该选项会在遇到非 JSON 值时报错。

默认情况下，如果 `property` 存在且为对象或数组，则不会覆盖该值。要禁用此检查并始终覆盖该属性，请使用 `--force`。

### property
您希望设置的属性名


### value
给定属性的新值




### 选项

 - `--global`: 使用全局 CLI 配置（或 `-g`）
      


### 高级选项

 - `--json`: 始终将 `value` 解释为 JSON
      
 - `--force`: 始终覆盖现有值
      
 - `--root`: 在 **./ionic.config.json** 的根级别操作
      

## 示例

```shell
$ ionic config set name newAppName
$ ionic config set name "\"newAppName\"" --json
$ ionic config set -g interactive false
```
