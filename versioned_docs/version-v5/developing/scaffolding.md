# 脚手架

一旦 Ionic CLI 创建了应用，下一步就是开始构建功能和组件。应用的大部分开发将在 `src/app/` 目录中进行。

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

`src/` 目录包含 `index.html` 文件、测试配置文件、用于图片的 assets 文件夹，以及应用代码的主目录 `app/`。

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

Ionic CLI 可以使用 [`ionic generate`](../cli/commands/generate.md) 命令生成新的应用功能。通过在命令行中运行 `ionic generate`，会显示一个选择提示，列出可以生成的功能。

```shell-session
$ ionic generate
? 您想生成什么？
❯ page
  component
  service
  module
  class
  directive
  guard
```

做出选择后，Ionic CLI 会提示输入名称。名称可以是路径，允许在组织良好的项目结构中轻松生成功能。

:::note
允许任意级别的嵌套，例如 `portfolio/intro`。例如，您可以使用 `ionic g component "portfolio/intro/About Me"` 轻松地将组件限定到特定页面。
:::

```shell-session
$ ionic generate
? 您想生成什么？ page
? 页面的名称/路径： portfolio █
```

或者，生成功能的 `type` 和 `name` 也可以在命令行中输入：

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

Ionic CLI 使用底层框架工具来保持接近最佳实践。对于 `@ionic/angular`，底层使用的是 Angular CLI。

创建新页面的文件和目录后，CLI 还会更新路由器配置以包含新页面。这减少了保持开发流程所需的手动工作量。

更多详情，请在命令行中运行 `ionic g --help` 或查看 `ionic generate` 的[文档](../cli/commands/generate.md)。
