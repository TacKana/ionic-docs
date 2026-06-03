---
title: 项目搭建
---

<head>
  <title>应用搭建 | 为 Ionic Web 应用创建项目结构</title>
  <meta
    name="description"
    content="一旦通过 Ionic CLI 创建了应用，下一步就是开始构建功能和组件。了解如何为 Ionic Web 应用创建项目结构。"
  />
</head>

一旦通过 Ionic CLI 创建了应用，下一步就是开始构建功能和组件。应用的大部分开发工作将在 `src/app/` 目录中进行。

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

`src/` 目录包含诸如 `index.html` 文件、测试配置文件、用于图像的 assets 文件夹以及用于应用代码的主 `app/` 目录等项目内容。

```bash
src/
└── app/
    ├── app-routing.module.ts
    ├── app.component.html
    ├── app.component.spec.ts
    ├── app.component.ts
    └── app.module.ts
```

`src/app/` 目录包含根应用组件和模块，以及包含应用功能（如页面、组件、服务等）的其他目录。

## 生成新功能

:::note
此命令仅在 Ionic Angular 中受支持。
:::

Ionic CLI 可以使用 [`ionic generate`](../cli/commands/generate.md) 命令生成新的应用功能。在命令行中运行 `ionic generate` 后，将显示一个选择提示，列出可以生成的可用功能。

```shell-session
$ ionic generate
? 您想要生成什么？
❯ page（页面）
  component（组件）
  service（服务）
  module（模块）
  class（类）
  directive（指令）
  guard（守卫）
```

做出选择后，Ionic CLI 将提示输入名称。名称可以是一个路径，从而可以在有组织的项目结构中轻松生成功能。

:::note
允许任何层级的嵌套，例如 `portfolio/intro`。例如，您可以使用 `ionic g component "portfolio/intro/About Me"` 轻松将组件限定到特定页面。
:::

```shell-session
$ ionic generate
? 您想要生成什么？ page（页面）
? 页面名称/路径：portfolio █
```

或者，可以在命令行中直接输入生成功能的 `type` 和 `name`：

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

Ionic CLI 使用底层框架工具来保持遵循最佳实践。对于 `@ionic/angular`，底层使用的是 Angular CLI。

在为新页面创建文件和目录后，CLI 还会更新路由配置以包含新页面。这减少了保持开发周期推进所需的手动工作量。

有关更多详细信息，请在命令行中运行 `ionic g --help` 或查看 [`ionic generate` 的文档](../cli/commands/generate.md)。
