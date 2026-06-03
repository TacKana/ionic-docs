---
title: "ionic cordova prepare"
sidebar_label: "cordova prepare"
translated: true
source_hash: 65e4154c
---



将资源复制到 Cordova 平台，为其原生构建做准备

```shell
$ ionic cordova prepare [platform] [options]
```

`ionic cordova prepare` 将执行以下操作：

- 执行 Ionic 构建，将 Web 资源编译到 **www/**。
- 将 **www/** 目录复制到您的 Cordova 平台中。
- 将 **config.xml** 转换为平台特定的清单文件。
- 将图标和启动画面从 **resources/** 复制到您的 Cordova 平台中。
- 将插件文件复制到指定的平台中。

如果您使用 Android Studio 或 Xcode 运行项目，您可能希望使用 `ionic cordova prepare`。

### platform
您想要准备的平台（例如 `android`、`ios`）




### 选项

 - `--no-build`: 不调用 Ionic build
      
 - `--prod`: 使用 `production` 配置的标志
      


### 高级选项

 - `--configuration=<conf>`: 指定要使用的配置。（或 `-c`）
      
 - `--source-map`: 输出 source maps
      
 - `--watch`: 文件变化时重新构建
      

## 示例

```shell
$ ionic cordova prepare 
$ ionic cordova prepare ios
$ ionic cordova prepare android
```
