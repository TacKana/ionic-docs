---
title: "ionic cordova run"
sidebar_label: "cordova run"
translated: true
source_hash: 240601e1
---



在已连接的设备上运行 Ionic 项目

```shell
$ ionic cordova run [platform] [options]
```

使用此命令构建您的应用并将其部署到设备和模拟器。可以选择使用 `--livereload` 选项来使用 `ionic serve` 的开发服务器以实现实时重载功能。

此命令将首先使用 `ionic build` 构建 Web 资源（或使用 `--livereload` 选项的 `ionic serve`）。然后，使用 `cordova build` 编译和准备您的应用。最后，使用 `native-run` [工具](https://github.com/ionic-team/native-run) 在设备上运行您的应用。如果要改用 Cordova 来完成此过程，请使用 `--no-native-run` 选项。

如果您有多个设备和模拟器，可以使用 `--target` 选项定位特定设备。您可以使用 `--list` 列出目标设备。

对于 Android 和 iOS，您可以使用这些 [文档](https://ionicframework.com/docs/developer-resources/developer-tips) 在设备上通过浏览器开发工具设置远程调试。

在硬件设备上使用 `--livereload` 时，请记住 livereload 需要在设备和计算机之间建立活跃连接。在某些情况下，您可能需要使用 `--external` 选项在外部地址上托管开发服务器。参见这些 [文档](https://ionicframework.com/docs/cli/livereload) 了解更多信息。

就像使用 `ionic cordova build` 一样，您可以使用 `--` 分隔符将其他选项传递给 Cordova CLI。要将其他选项传递给开发服务器，请考虑单独使用 `ionic serve` 并使用 `--livereload-url` 选项。

### platform
要运行的目标平台（例如 `android`、`ios`）




### 选项

 - `--ssl`: 为开发服务器使用 HTTPS
      
 - `--list`: 列出所有可用目标
      
 - `--no-build`: 不调用 Ionic build
      
 - `--external`: 在所有网络接口上托管开发服务器（即 `--host=0.0.0.0`）
      
 - `--livereload`: 启动开发服务器以实时重新加载 www 文件（或 `-l`）
      
 - `--livereload-url=<url>`: 为开发服务器提供自定义 URL
      
 - `--prod`: 使用 `production` 配置的标志
      
 - `--debug`: 标记为调试构建
      
 - `--release`: 标记为发布构建
      
 - `--device`: 部署构建到设备
      
 - `--emulator`: 部署构建到模拟器
      
 - `--no-native-run`: 不使用 `native-run` 运行应用；改用 Cordova
      
 - `--connect`: 将运行中的应用绑定到进程
      


### 高级选项

 - `--consolelogs`: 将应用控制台日志打印到终端
      
 - `--consolelogs-port=<port>`: 为控制台日志服务器使用特定端口
      
 - `--host=<host>`: 为开发服务器使用特定主机
      
 - `--port=<port>`: 为开发服务器使用特定端口（或 `-p`）
      
 - `--public-host=<host>`: 用于浏览器或 Web 视图的主机
      
 - `--configuration=<conf>`: 指定要使用的配置。（或 `-c`）
      
 - `--source-map`: 输出 source maps
      
 - `--buildConfig=<file>`: 使用指定的构建配置
      
 - `--target=<target>`: 部署构建到设备（使用 `--list` 查看所有）
      
 - `--json`: 以 JSON 格式输出目标
      

## 示例

```shell
$ ionic cordova run android
$ ionic cordova run android --buildConfig=build.json
$ ionic cordova run android --prod --release -- -- --gradleArg=-PcdvBuildMultipleApks=true
$ ionic cordova run android --prod --release -- -- --keystore=filename.keystore --alias=myalias
$ ionic cordova run android --prod --release -- -- --minSdkVersion=21
$ ionic cordova run android --prod --release -- -- --versionCode=55
$ ionic cordova run android --prod --release --buildConfig=build.json
$ ionic cordova run android -l
$ ionic cordova run ios
$ ionic cordova run ios --buildConfig=build.json
$ ionic cordova run ios --livereload --external
$ ionic cordova run ios --livereload-url=http://localhost:8100
$ ionic cordova run ios --prod --release
$ ionic cordova run ios --prod --release -- --developmentTeam="ABCD" --codeSignIdentity="iPhone Developer" --packageType="app-store"
$ ionic cordova run ios --prod --release --buildConfig=build.json
```
