---
title: "ionic start"
sidebar_label: "start"
translated: true
source_hash: 473f4980
---



创建新项目

```shell
$ ionic start [name] [template] [options]
```

此命令创建一个可运行的 Ionic 应用。它会为您安装依赖并设置项目。

不带任何参数运行 `ionic start` 将提示您输入有关新项目的信息。

第一个参数是您的应用的 `name`。不用担心——您以后随时可以更改。`--project-id` 从 `name` 生成，除非显式指定。

第二个参数是用于生成应用的 `template`。您可以使用 `--list` 选项列出所有模板。您也可以为 `template` 指定一个 git 仓库 URL，在这种情况下将克隆现有项目。

使用 `--type` 选项可以使用不同的 JavaScript 框架启动项目。使用 `--list` 查看所有项目类型和模板。

### name
您的新项目的名称（例如 `myApp`、`"My App"`）


### template
要使用的起始模板（例如 `blank`、`tabs`；使用 `--list` 查看所有）




### 选项

 - `--list`: 列出可用的起始模板（或 `-l`）
      
 - `--type=<type>`: 要启动的项目类型（例如 `vue`、`angular`、`angular-standalone`、`react`）
      
 - `--cordova`: 包含 Cordova 集成
      
 - `--capacitor`: 包含 Capacitor 集成
      
 - `--id=<id>`: 指定要链接的 Ionic 应用 ID
      


### 高级选项

 - `--no-deps`: 不安装 npm/yarn 依赖
      
 - `--no-git`: 不初始化 git 仓库
      
 - `--link`: 将您的新应用连接到 Ionic
      
 - `--project-id=<slug>`: 为您的应用指定 slug（用于目录名和包名）
      
 - `--package-id=<id>`: 为您的应用指定包 ID/应用 ID（反向 DNS 表示法）
      

## 示例

```shell
$ ionic start 
$ ionic start --list
$ ionic start myApp
$ ionic start myApp blank
$ ionic start myApp tabs --capacitor
$ ionic start myApp list --type=vue
$ ionic start "My App" blank
$ ionic start "Conference App" https://github.com/ionic-team/ionic-conference-app
```
