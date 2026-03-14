---
title: 脚手架
---

<head>
  <title>应用脚手架 | 为 Ionic Web 应用创建脚手架</title>
  <meta
    name="description"
    content="通过 Ionic CLI 创建应用后，下一步就是开始构建功能和组件。学习如何为 Ionic Web 应用创建脚手架。"
  />
</head>

通过 Ionic CLI 创建应用后，下一步就是开始构建功能和组件。大部分应用开发将在 `src/app/` 目录中进行。

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

`src/` 目录包含 `index.html` 文件、测试配置文件、存放图片的资产文件夹以及用于存放应用代码的主 `app/` 目录。

```bash
src/
└── app/
    ├── app-routing.module.ts
    ├── app.component.html
    ├── app.component.spec.ts
    ├── app.component.ts
    └── app.module.ts
```

`src/app/` 目录包含根应用组件和模块，以及包含应用功能（如页面、组件、服务等）的附加目录。

## 生成新功能

:::note
此命令仅在 Ionic Angular 中受支持。
:::

Ionic CLI 可以使用 [`ionic generate`](../cli/commands/generate.md) 命令生成新的应用功能。在命令行中运行 `ionic generate` 后，会显示一个选择提示，列出可生成的功能。

```shell-session
$ ionic generate
? What would you like to generate?
❯ page
  component
  service
  module
  class
  directive
  guard
```

选择功能后，Ionic CLI 会提示输入名称。该名称可以是路径形式，从而能够在有组织的项目结构中轻松生成功能。

:::note
允许任何级别的嵌套，例如 `portfolio/intro`。您可以通过使用 `ionic g component "portfolio/intro/About Me"` 等方式轻松将组件限定在特定页面内。
:::

```shell-session
$ ionic generate
? What would you like to generate? page
? Name/path of page: portfolio █
```

或者，也可以在命令行中输入要生成的功能的 `type` 和 `name`：

```shell-session
$ ionic g page "User Detail"
> ng generate page "User Detail"
CREATE src/app/user-detail/user-detail.module.ts (564 bytes)
CREATE src/app/user-detail/user-detail.page.scss (0 bytes)
CREATE src/app/user-detail/user-detail.page.html (138 bytes)
CREATE src/app/user-detail/user-detail.page.spec.ts (720 bytes)
CREATE src/app/user-detail/user-detail.page.ts (280 bytes)
UPDATE src/app/app-routing.module.ts (475 bytes)
[OK] Generated page!
```

Ionic CLI 使用底层框架工具来贴近最佳实践。对于 `@ionic/angular`，底层使用的是 Angular CLI。

在为新页面创建文件和目录后，CLI 还会更新路由配置以包含新页面。这减少了保持开发生命周期推进所需的手动工作量。

更多详细信息，请从命令行运行 `ionic g --help` 或参阅 [`ionic generate` 文档](../cli/commands/generate.md)。