---
title: "ionic capacitor build"
sidebar_label: "capacitor build"
translated: true
source_hash: 2dc88f42
---



为指定平台构建 Ionic 项目

```shell
$ ionic capacitor build [platform] [options]
```

`ionic capacitor build` 将执行以下操作：
- 执行 `ionic build`
- 将 Web 资源复制到指定的原生平台
- 打开您的原生项目的 IDE（iOS 为 Xcode，Android 为 Android Studio）

一旦 Web 资源和配置被复制到您的原生项目中，您可以使用原生 IDE 构建您的应用。遗憾的是，目前尚不支持以编程方式构建原生项目。

要配置您的原生项目，请参见常见配置 [文档](https://capacitorjs.com/docs/basics/configuring-your-app) 以及 [iOS](https://capacitorjs.com/docs/ios/configuration) 和 [Android](https://capacitorjs.com/docs/android/configuration) 的低级配置。

### platform
要构建的平台（例如 `android`、`ios`）




### 选项

 - `--no-build`: 不调用 Ionic build
      
 - `--no-open`: 不调用 Capacitor open
      
 - `--prod`: 使用 `production` 配置的标志
      


### 高级选项

 - `--configuration=<conf>`: 指定要使用的配置。（或 `-c`）
      
 - `--source-map`: 输出 source maps
      
 - `--watch`: 文件变化时重新构建
      

## 示例

```shell
$ ionic capacitor build 
$ ionic capacitor build android
$ ionic capacitor build ios
```
