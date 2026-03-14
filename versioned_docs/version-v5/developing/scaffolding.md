# 项目脚手架

使用 Ionic CLI 创建应用后，下一步就是开始构建功能和组件。应用的大部分代码将位于 `src/app/` 目录中。

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

`src/app/` 目录包含根应用组件和模块，以及其他存放应用功能的目录，如页面、组件、服务等。

## 生成新功能

Ionic CLI 可以通过 [`ionic generate`](../cli/commands/generate.md) 命令生成新的应用功能。在命令行中运行 `ionic generate` 会显示一个选择提示，列出所有可生成的功能类型。

```shell-session
$ ionic generate
? 您希望生成什么？
❯ page
  component
  service
  module
  class
  directive
  guard
```

选择功能类型后，Ionic CLI 会提示输入名称。名称可以包含路径，便于在组织有序的项目结构中轻松生成功能。

:::note
支持任意层级的嵌套路径，例如 `portfolio/intro`。您可以通过路径将组件限定在特定页面下，例如使用命令 `ionic g component "portfolio/intro/About Me"`。
:::

```shell-session
$ ionic generate
? 您希望生成什么？ page
? 页面名称/路径： portfolio █
```

或者，也可以在命令行中直接指定要生成的功能类型和名称：

```shell-session
$ ionic g page "User Detail"
> ng generate page "User Detail"
CREATE src/app/user-detail/user-detail.module.ts (564 bytes)
CREATE src/app/user-detail/user-detail.page.scss (0 bytes)
CREATE src/app/user-detail/user-detail.page.html (138 bytes)
CREATE src/app/user-detail/user-detail.page.spec.ts (720 bytes)
CREATE src/app/user-detail/user-detail.page.ts (280 bytes)
UPDATE src/app/app-routing.module.ts (475 bytes)
[OK] 页面已生成！
```

Ionic CLI 利用底层框架工具来遵循最佳实践。对于 `@ionic/angular`，底层使用的是 Angular CLI。

在为新页面创建文件和目录后，CLI 还会更新路由配置以包含这个新页面。这减少了手动工作量，让开发流程保持顺畅。

更多详情，请在命令行中运行 `ionic g --help` 或查阅 [`ionic generate`](../cli/commands/generate.md) 的文档。