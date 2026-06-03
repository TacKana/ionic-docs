---
title: "ionic serve"
sidebar_label: "serve"
translated: true
source_hash: 22a9c6b6
---



启动本地开发服务器用于应用开发/测试

```shell
$ ionic serve [options]
```

轻松启动一个开发服务器，并在浏览器中打开。它会监视源文件的变化并自动重新加载更新后的构建。

默认情况下，`ionic serve` 在 `localhost` 上启动开发服务器。要服务于您的局域网，请指定 `--external` 选项，该选项将使用所有网络接口并打印应用服务所在的外部地址。

`ionic serve` 使用 Angular CLI。使用 `ng serve --help` 列出用于提供应用的所有 Angular CLI 选项。参见 `ng serve` [文档](https://angular.io/cli/serve) 获取说明。下面未列出的选项被视为高级选项，可以在 Ionic CLI 参数之后使用 `--` 分隔符传递给 Angular CLI。参见示例。

开发服务器可以通过 `--ssl` 选项使用 HTTPS **（实验性）**。HTTPS 存在一些已知问题。参见 issue [#3305](https://github.com/ionic-team/ionic-cli/issues/3305)。

### 选项

 - `--ssl`: 为开发服务器使用 HTTPS
      
 - `--prod`: 使用 `production` 配置的标志
      
 - `--external`: 在所有网络接口上托管开发服务器（即 `--host=0.0.0.0`）
      
 - `--no-livereload`: 不启动开发服务器——仅提供文件服务
      
 - `--no-open`: 不打开浏览器窗口
      


### 高级选项

 - `--consolelogs`: 将应用控制台日志打印到终端
      
 - `--consolelogs-port=<port>`: 为控制台日志服务器使用特定端口
      
 - `--configuration=<conf>`: 指定要使用的配置。（或 `-c`）
      
 - `--source-map`: 输出 sourcemaps
      
 - `--host=<host>`: 为开发服务器使用特定主机
      
 - `--port=<port>`: 为开发服务器使用特定端口（或 `-p`）
      
 - `--public-host=<host>`: 用于浏览器或 Web 视图的主机
      
 - `--browser=<browser>`: 指定要使用的浏览器（`safari`、`firefox`、`google chrome`）（或 `-w`）
      
 - `--browseroption=<path>`: 指定要打开的路径（`/#/tab/dash`）（或 `-o`）
      

## 示例

```shell
$ ionic serve 
$ ionic serve --external
$ ionic serve -- --proxy-config proxy.conf.json
```
