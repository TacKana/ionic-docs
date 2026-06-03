---
title: "ionic capacitor run"
sidebar_label: "capacitor run"
translated: true
source_hash: 47fd3678
---



在已连接的设备上运行 Ionic 项目

```shell
$ ionic capacitor run [platform] [options]
```

`ionic capacitor run` 将执行以下操作：
- 执行 `ionic build`（或通过 `--livereload` 选项从 `ionic serve` 运行开发服务器）
- 运行 `capacitor run`（或通过 `--open` 选项为您的原生项目打开 IDE）

在硬件设备上使用 `--livereload` 时，请记住 livereload 需要在设备和计算机之间建立活跃连接。在某些情况下，您可能需要使用 `--external` 选项在外部地址上托管开发服务器。参见这些 [文档](https://ionicframework.com/docs/cli/livereload) 了解更多信息。

如果您有多个设备和模拟器，可以使用 `--target` 选项按 ID 定位特定设备。您可以使用 `--list` 列出目标设备。

对于 Android 和 iOS，您可以使用这些 [文档](https://ionicframework.com/docs/developer-resources/developer-tips) 在设备上通过浏览器开发工具设置远程调试。

### platform
要运行的目标平台（例如 `android`、`ios`）




### 选项

 - `--list`: 列出所有可用目标
      
 - `--target=<target>`: 按 ID 部署到特定设备（使用 `--list` 查看所有设备）
      
 - `--open`: 打开原生 IDE 而不是使用 `capacitor run`
      
 - `--no-build`: 不调用 Ionic build
      
 - `--external`: 在所有网络接口上托管开发服务器（即 `--host=0.0.0.0`）
      
 - `--livereload`: 启动开发服务器以实时重新加载 www 文件（或 `-l`）
      
 - `--livereload-url=<url>`: 为开发服务器提供自定义 URL
      
 - `--prod`: 使用 `production` 配置的标志
      


### 高级选项

 - `--host=<host>`: 为开发服务器使用特定主机
      
 - `--port=<port>`: 为开发服务器使用特定端口（或 `-p`）
      
 - `--public-host=<host>`: 用于浏览器或 Web 视图的主机
      
 - `--configuration=<conf>`: 指定要使用的配置。（或 `-c`）
      
 - `--source-map`: 输出 source maps
      
 - `--watch`: 文件变化时重新构建
      

## 示例

```shell
$ ionic capacitor run 
$ ionic capacitor run android
$ ionic capacitor run android -l --external
$ ionic capacitor run ios --livereload --external
$ ionic capacitor run ios --livereload-url=http://localhost:8100
```
