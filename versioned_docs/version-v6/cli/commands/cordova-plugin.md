---
title: "ionic cordova plugin"
sidebar_label: "cordova plugin"
translated: true
source_hash: 6f166811
---



管理 Cordova 插件

```shell
$ ionic cordova plugin [action] [plugin] [options]
```

就像直接运行 `cordova plugin` 一样，但提供友好的检查。

### action
`add` 或 `remove` 一个插件；`ls` 或 `save` 所有项目插件


### plugin
插件的名称（对应于 `add` 和 `remove`）




### 选项

 - `--variable=<KEY=VALUE>`: 指定插件变量
      


### 高级选项

 - `--force`: 如果插件已存在则强制覆盖（对应于 `add`）
      

## 示例

```shell
$ ionic cordova plugin 
$ ionic cordova plugin add cordova-plugin-inappbrowser@latest
$ ionic cordova plugin add phonegap-plugin-push --variable SENDER_ID=XXXXX
$ ionic cordova plugin rm cordova-plugin-camera
```
