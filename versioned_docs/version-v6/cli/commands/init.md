---
title: "ionic init"
sidebar_label: "init"
translated: true
source_hash: 791b4e19
---



使用 Ionic 初始化现有项目

```shell
$ ionic init [name] [options]
```

此命令将在当前目录中初始化一个 Ionic 应用。通常，这意味着会创建一个 `ionic.config.json` 文件。如果在多应用项目中使用，则应用将在根目录的 `ionic.config.json` 中初始化。

`ionic init` 将提示输入项目名称，然后继续确定您的项目类型。您可以指定 `name` 参数和 `--type` 选项以通过命令行提供这些值。

如果指定了 `--multi-app` 标志，此命令将把您的项目初始化为多应用项目，允许在 monorepo 和非常规仓库结构中包含应用。有关详情，请参见多应用 [文档](https://ionicframework.com/docs/cli/configuration#multi-app-projects)。多应用项目初始化后，您可以在项目中的应用中再次运行 `ionic init` 来初始化它们。

### name
您的项目名称（例如 `myApp`、`"My App"`）




### 选项

 - `--type=<type>`: 项目类型（例如 `angular`、`angular-standalone`、`react`、`vue`、`custom`、`vue-vite`、`react-vite`）
      
 - `--force`: 即使项目已存在也进行初始化（或 `-f`）
      
 - `--multi-app`: 初始化多应用项目
      


### 高级选项

 - `--project-id=<slug>`: 为您的应用指定 slug
      
 - `--default`: 将初始化的应用标记为默认项目
      

## 示例

```shell
$ ionic init 
$ ionic init "My App"
$ ionic init "My App" --type=angular
$ ionic init --multi-app
```
