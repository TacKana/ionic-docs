---
title: "ionic cordova build"
sidebar_label: "cordova build"
translated: true
source_hash: 3cc88b49
---



使用 Cordova 为 Android 和 iOS 平台目标构建

```shell
$ ionic cordova build [platform] [options]
```

就像直接运行 `cordova build` 一样，`ionic cordova build` 也会从 `ionic build` 构建 Web 资源，并为 Android 和 iOS 平台提供友好的检查。

要将其他选项传递给 Cordova CLI，请在 Ionic CLI 参数之后使用 `--` 分隔符。

Cordova CLI 要求为 Android [构建](https://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html#using-flags) 使用分隔符来传递平台特定参数，因此 Ionic CLI 需要额外的分隔符，但 iOS [构建](https://cordova.apache.org/docs/en/latest/guide/platforms/ios/index.html#using-flags) 则不需要。参见使用分隔符的示例命令。为避免使用标志，请考虑使用 `--buildConfig` 配合 **build.json** 文件。

### platform
要构建的平台（例如 `android`、`ios`）




### 选项

 - `--no-build`: 不调用 Ionic build
      
 - `--debug`: 标记为调试构建
      
 - `--release`: 标记为发布构建
      
 - `--device`: 部署构建到设备
      
 - `--emulator`: 部署构建到模拟器
      
 - `--prod`: 使用 `production` 配置的标志
      


### 高级选项

 - `--buildConfig=<file>`: 使用指定的构建配置
      
 - `--configuration=<conf>`: 指定要使用的配置。（或 `-c`）
      
 - `--source-map`: 输出 source maps
      

## 示例

```shell
$ ionic cordova build android
$ ionic cordova build android --buildConfig=build.json
$ ionic cordova build android --prod --release -- -- --gradleArg=-PcdvBuildMultipleApks=true
$ ionic cordova build android --prod --release -- -- --keystore=filename.keystore --alias=myalias
$ ionic cordova build android --prod --release -- -- --minSdkVersion=21
$ ionic cordova build android --prod --release -- -- --versionCode=55
$ ionic cordova build android --prod --release --buildConfig=build.json
$ ionic cordova build ios
$ ionic cordova build ios --buildConfig=build.json
$ ionic cordova build ios --prod --release
$ ionic cordova build ios --prod --release -- --developmentTeam="ABCD" --codeSignIdentity="iPhone Developer" --packageType="app-store"
$ ionic cordova build ios --prod --release --buildConfig=build.json
```
