---
title: "ionic cordova platform"
sidebar_label: "cordova platform"
translated: true
source_hash: 4b3068b5
---



管理 Cordova 平台目标

```shell
$ ionic cordova platform [action] [platform] [options]
```

就像直接运行 `cordova platform` 一样，但会添加默认的 Ionic 图标和启动画面资源（在 `add` 期间）并提供友好的检查。

### action
`add`、`remove` 或 `update` 一个平台；`ls`、`check` 或 `save` 所有项目平台


### platform
您想要添加的平台（`android`、`ios`）




### 选项

 - `--no-resources`: 不预生成图标和启动画面资源（对应于 `add`）
      

## 示例

```shell
$ ionic cordova platform 
$ ionic cordova platform add ios
$ ionic cordova platform add android
$ ionic cordova platform rm ios
```
