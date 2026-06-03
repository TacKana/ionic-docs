---
title: "ionic cordova compile"
sidebar_label: "cordova compile"
translated: true
source_hash: f11b9bc
---



编译原生平台代码

```shell
$ ionic cordova compile [platform] [options]
```

就像直接运行 `cordova compile` 一样，但提供友好的检查。

### platform
要编译的平台（`android`、`ios`）




### 选项

 - `--debug`: 标记为调试构建
      
 - `--release`: 标记为发布构建
      
 - `--device`: 部署构建到设备
      
 - `--emulator`: 部署构建到模拟器
      


### 高级选项

 - `--buildConfig=<file>`: 使用指定的构建配置
      

## 示例

```shell
$ ionic cordova compile ios
$ ionic cordova compile ios --device
$ ionic cordova compile android
```
