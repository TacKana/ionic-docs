---
title: "ionic live-update configure"
sidebar_label: "live-update configure"
translated: true
source_hash: 530a436d
---



覆盖 Ionic Live Updates 插件配置

```shell
$ ionic live-update configure [platform] [options]
```

此命令覆盖 Capacitor 项目中 Ionic Live Updates 插件（`cordova-plugin-ionic`）的配置。

对于 Capacitor 项目，如果插件已安装，它会覆盖原生项目中的配置变量。

对于 Cordova 项目，此功能未实现，因为最好使用不同的参数重新安装插件，让 Cordova 处理变更。

### platform
原生平台（例如 `ios`、`android`）




### 选项

 - `--app-id=<id>`: 您的 Appflow 应用 ID
      
 - `--channel-name=<name>`: 用于检查更新的频道
      
 - `--update-method=<name>`: 决定插件行为的更新方法
      


### 高级选项

 - `--max-store=<quantity>`: 设备上存储的最大下载版本数量
      
 - `--min-background-duration=<seconds>`: 应用在后台检查更新的最短间隔时间
      

## 示例

```shell
$ ionic live-update configure 
$ ionic live-update configure --app-id=abcd1234 --channel-name="Master" --update-method=background
$ ionic live-update configure --max-store=2 --min-background-duration=30
$ ionic live-update configure --app-id=abcd1234 --channel-name="Master" --update-method=background --max-store=2 --min-background-duration=30
$ ionic live-update configure android
$ ionic live-update configure ios
```
