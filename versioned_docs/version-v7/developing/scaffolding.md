---
title: Scaffolding
---

<head>
  <title>应用脚手架 | 为 Ionic Web 应用创建脚手架</title>
  <meta
    name="description"
    content="Ionic CLI 创建应用后，下一步是开始构建功能和组件。了解如何为 Ionic Web 应用创建脚手架。"
  />
</head>

使用 Ionic CLI 创建应用后，下一步就是开始构建功能和组件。应用的大部分开发工作将在 `src/app/` 目录中进行。

## 项目结构

```bash
src/
├── app/
├── assets/
├── environments/
├── theme/
├── global.scss
├── index.html
├── main.ts
├── polyfills.ts
├── test.ts
└── zone-flags.ts
```

`src/` 目录包含 `index.html` 文件、测试配置文件、存放图片的资源文件夹，以及存放应用代码的主目录 `app/`。

```bash
src/
└── app/
    ├── app-routing.module.ts
    ├── app.component.html
    ├── app.component.spec.ts
    ├── app.component.ts
    └── app.module.ts
```

`src/app/` 目录包含根应用组件和模块，以及存放应用功能的其他目录，例如页面（pages）、组件（components）、服务（services）等。

## 生成新功能

:::note
此命令仅在 Ionic Angular 中受支持。
:::

Ionic CLI 可以通过 [`ionic generate`](../cli/commands/generate.md) 命令生成新的应用功能。在命令行中运行 `ionic generate` 时，会显示一个选择提示，列出可以生成的功能。

```shell-session
$ ionic generate
? 您想生成什么？
❯ 页面
  组件
  服务
  模块
  类
  指令
  守卫
```

选择功能后，Ionic CLI 会提示输入名称。名称可以是路径，从而方便在组织良好的项目结构中生成功能。

:::note
支持任意层级的嵌套，例如 `portfolio/intro`。例如，您可以通过 `ionic g component "portfolio/intro/About Me"` 轻松地将组件限定在特定页面下。
:::

```shell-session
$ ionic generate
? 您想生成什么？ 页面
? 页面名称/路径：portfolio █
```

或者，也可以在命令行中直接输入要生成功能的 `type` 和 `name`：

```shell-session
$ ionic g page "User Detail"
> ng generate page "User Detail"
CREATE src/app/user-detail/user-detail.module.ts (564 bytes)
CREATE src/app/user-detail/user-detail.page.scss (0 bytes)
CREATE src/app/user-detail/user-detail.page.html (138 bytes)
CREATE src/app/user-detail/user-detail.page.spec.ts (720 bytes)
CREATE src/app/user-detail/user-detail.page.ts (280 bytes)
UPDATE src/app/app-routing.module.ts (475 bytes)
[OK] 页面生成成功！
```

Ionic CLI 使用底层框架工具，以贴近最佳实践。对于 `@ionic/angular`，其底层使用的是 Angular CLI。

为新页面创建文件和目录后，CLI 还会更新路由配置以包含新页面。这减少了保持开发流程推进所需的手动工作量。

更多详情，请在命令行中运行 `ionic g --help` 或查看 [`ionic generate`](../cli/commands/generate.md) 的文档。