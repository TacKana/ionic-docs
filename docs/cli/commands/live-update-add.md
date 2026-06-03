---
title: "ionic live-update add"
sidebar_label: "live-update add"
translated: true
source_hash: 2f9f7613
---



向项目添加 Ionic Live Updates 插件

```shell
$ ionic live-update add [options]
```

此命令为 Capacitor 和 Cordova 项目添加 Ionic Live Updates 插件（`cordova-plugin-ionic`）。

对于 Capacitor 项目，它会执行安装插件、与原生项目同步以及将配置添加到相应的 iOS 和 Android 配置文件所需的所有步骤。

对于 Cordova 项目，它只需使用提交的参数运行相应的 Cordova CLI 命令。

### 选项

 - `--app-id=<id>`: 您的 Appflow 应用 ID
      
 - `--channel-name=<name>`: 用于检查更新的频道
      
 - `--update-method=<name>`: 决定插件行为的更新方法
      


### 高级选项

 - `--max-store=<quantity>`: 设备上存储的最大下载版本数量
      
 - `--min-background-duration=<seconds>`: 应用在后台检查更新的最短间隔时间
      

## 示例

```shell
$ ionic live-update add 
$ ionic live-update add --app-id=abcd1234 --channel-name="Master" --update-method=background
$ ionic live-update add --max-store=2 --min-background-duration=30
$ ionic live-update add --app-id=abcd1234 --channel-name="Master" --update-method=background --max-store=2 --min-background-duration=30
```
