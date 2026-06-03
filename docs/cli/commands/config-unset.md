---
title: "ionic config unset"
sidebar_label: "config unset"
translated: true
source_hash: 6830942
---



删除配置值

```shell
$ ionic config unset [property] [options]
```

此命令从项目的 **./ionic.config.json** 文件中删除配置值。它也可以使用 `--global` 选项操作全局 CLI 配置（**~/.ionic/config.json**）。

对于嵌套属性，使用点号分隔嵌套级别。例如，属性名 `integrations.cordova` 将在 **integrations** 对象中查找 **cordova** 属性。

对于多应用项目，此命令默认限定在当前项目范围内。要改为在项目配置文件的根级别操作，请使用 `--root` 选项。

### property
您希望删除的属性名




### 选项

 - `--global`: 使用全局 CLI 配置（或 `-g`）
      


### 高级选项

 - `--root`: 在 **./ionic.config.json** 的根级别操作
      

## 示例

```shell
$ ionic config unset 
$ ionic config unset type
$ ionic config unset --global git.setup
$ ionic config unset -g interactive
```
