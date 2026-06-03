---
title: "ionic build"
sidebar_label: "build"
translated: true
source_hash: 2dbce31d
---



构建 Web 资源并为任何平台目标准备您的应用

```shell
$ ionic build [options]
```

`ionic build` 将执行 Ionic 构建，编译 Web 资源并为其部署做好准备。

`ionic build` 使用 Angular CLI。使用 `ng build --help` 列出用于构建应用的所有 Angular CLI 选项。参见 `ng build` [文档](https://angular.io/cli/build) 获取说明。下面未列出的选项被视为高级选项，可以在 Ionic CLI 参数之后使用 `--` 分隔符传递给 `ng` CLI。参见示例。

### 选项

 - `--prod`: 使用 `production` 配置的标志
      

### 高级选项

 - `--configuration=<conf>`: 指定要使用的配置。（或 `-c`）
      
 - `--source-map`: 输出 source maps
      
 - `--watch`: 文件变化时重新构建
      
 - `--engine=<engine>`: 目标引擎（例如 `browser`、`cordova`）
      
 - `--platform=<platform>`: 所选引擎上的目标平台（例如 `ios`、`android`）
      

## 示例

```shell
$ ionic build 
$ ionic build --prod
$ ionic build --watch
```
