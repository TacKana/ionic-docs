---
title: "ionic capacitor sync"
sidebar_label: "capacitor sync"
translated: true
source_hash: 6a3db47d
---



同步（复制 + 更新）Ionic 项目

```shell
$ ionic capacitor sync [platform] [options]
```

`ionic capacitor sync` 将执行以下操作：
- 执行 Ionic 构建，编译 Web 资源
- 将 Web 资源复制到 Capacitor 原生平台
- 更新 Capacitor 原生平台和依赖
- 安装任何发现的 Capacitor 或 Cordova 插件

### platform
要同步的平台（例如 `android`、`ios`）




### 选项

 - `--no-build`: 不调用 Ionic build
      
 - `--inline`: 使用内联 source maps（仅适用于 capacitor 4.1.0+）
      
 - `--prod`: 使用 `production` 配置的标志
      


### 高级选项

 - `--configuration=<conf>`: 指定要使用的配置。（或 `-c`）
      
 - `--source-map`: 输出 source maps
      
 - `--watch`: 文件变化时重新构建
      
