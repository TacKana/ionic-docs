---
title: "ionic generate"
sidebar_label: "generate"
translated: true
source_hash: c066b3b
---



创建页面、组件和 Angular 功能

```shell
$ ionic generate [schematic] [name]
```

使用 Ionic Generate 自动创建框架功能。此命令使用 Angular CLI 生成 `pages`、`components`、`directives`、`services` 等功能。

 - 有关可用类型的完整列表，请使用 `npx ng g --help`
 - 有关类型的选项列表，请使用 `npx ng g <type> --help`

您可以指定路径将功能嵌套到任意数量的子目录中。例如，指定名称为 `"pages/New Page"` 可在 **src/app/pages/new-page/** 生成页面文件。

在修改文件之前测试生成器，请使用 `--dry-run` 选项。

### schematic
功能类型（例如 `page`、`component`、`directive`、`service`）


### name
正在生成的功能的名称/路径



## 示例

```shell
$ ionic generate 
$ ionic generate page
$ ionic generate page contact
$ ionic generate component contact/form
$ ionic generate component login-form --change-detection=OnPush
$ ionic generate directive ripple --skip-import
$ ionic generate service api/user
```
