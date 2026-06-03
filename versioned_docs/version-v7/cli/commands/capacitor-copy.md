---
title: "ionic capacitor copy"
sidebar_label: "capacitor copy"
translated: true
source_hash: 30458126
---



将 Web 资源复制到原生平台

```shell
$ ionic capacitor copy [platform] [options]
```

`ionic capacitor copy` 将执行以下操作：
- 执行 Ionic 构建，编译 Web 资源
- 将 Web 资源复制到 Capacitor 原生平台

### platform
要复制的平台（例如 `android`、`ios`）




### 选项

 - `--no-build`: 不调用 Ionic build
      
 - `--inline`: 使用内联 source maps（仅适用于 capacitor 4.2.0+）
      
 - `--prod`: 使用 `production` 配置的标志
      


### 高级选项

 - `--configuration=<conf>`: 指定要使用的配置。（或 `-c`）
      
 - `--source-map`: 输出 source maps
      
 - `--watch`: 文件变化时重新构建
      
