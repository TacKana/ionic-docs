---
title: Configuration
---

<head>
  <title>Capacitor 配置 | 维护全局配置文件</title>
  <meta
    name="description"
    content="使用 Ionic CLI 从项目配置文件和全局 CLI 配置文件中设置和打印配置值。阅读了解有关 Capacitor 配置的更多信息"
  />
</head>

## 配置文件

配置值存储在 JSON 文件中。Ionic CLI 维护一个全局配置文件，通常位于 `~/.ionic/config.json`，以及项目配置文件，通常位于项目根目录下的 `ionic.config.json`。

CLI 提供命令用于从项目配置文件和全局 CLI 配置文件中设置和打印配置值。请参考 `ionic config --help` 或查看 [`ionic config get`](commands/config-get.md) 和 [`ionic config set`](commands/config-set.md) 的文档了解使用方法。

### 项目配置文件

每个 Ionic 项目都有一个项目配置文件，通常位于项目根目录。以下是一个带注释的 `ionic.config.json` 文件示例。

```json
{
  // 应用程序的人类可读名称
  "name": "My App",

  // 应用程序的项目类型。CLI 使用此值来确定哪些命令和命令选项可用，
  // 帮助文档输出什么内容，以及用于 Web 资源构建和开发服务器的配置。
  "type": "angular",

  // Appflow 的应用程序 ID
  "id": "abc123",

  // 集成配置对象，如 Cordova 和 Capacitor
  "integrations": {
    "cordova": {
      ...
    }
  },

  // 钩子配置——详情请参阅下面的钩子部分
  "hooks": {
    ...
  }
}
```

<LegacyAnchor id="environment-variables" />

## 环境变量

CLI 将查找以下环境变量：

- `IONIC_CONFIG_DIRECTORY`：全局 CLI 配置的目录。默认为 `~/.ionic`
- `IONIC_HTTP_PROXY`：设置代理所有 CLI 请求的 URL。请参阅[使用代理](using-a-proxy.md)
- `IONIC_TOKEN`：自动与 [Appflow](https://ionic.io/appflow) 进行身份验证

## 标志参数

CLI 标志参数是全局选项，用于改变 CLI 命令的行为：

- `--help`：不运行命令，查看其帮助页面
- `--verbose`：显示所有日志消息用于调试目的
- `--quiet`：仅显示 `WARN` 和 `ERROR` 级别的日志消息
- `--no-interactive`：关闭交互式提示和精美输出。如果检测到 CI 或非 TTY 终端，CLI 会自动进入非交互模式
- `--confirm`：开启确认提示的自动确认。注意：CLI 在执行可能有害的操作前会提示。自动确认可能导致意外结果

## 钩子

CLI 可以在某些事件期间运行脚本，例如构建前后。要使用 CLI 钩子，可以在 `package.json` 中使用以下 [npm 脚本](https://docs.npmjs.com/misc/scripts)：

- `ionic:serve:before`：在开发服务器启动前执行
- `ionic:serve:after`：在开发服务器终止后执行
- `ionic:build:before`：在 Web 资源构建开始前执行
- `ionic:build:after`：在 Web 资源构建完成后执行
- `ionic:capacitor:run:before`：在 `ionic capacitor run` 期间，执行 capacitor open 前执行
- `ionic:capacitor:build:before`：在 `ionic capacitor build` 期间，执行 capacitor open 前执行
- `ionic:capacitor:sync:after`：在 `ionic capacitor sync` 期间，同步后执行

当为任何钩子使用 shell 脚本时，钩子上下文会在以 `IONIC_CLI_HOOK_CTX_` 为前缀的环境变量中定义。

以下示例展示了为 `ionic:capacitor:build` 钩子设置的环境变量：

```shell
IONIC_CLI_HOOK_CTX_NAME=capacitor:build:before
IONIC_CLI_HOOK_CTX_BUILD_CORDOVA_ASSETS=true
IONIC_CLI_HOOK_CTX_BUILD_ENGINE=browser
IONIC_CLI_HOOK_CTX_BUILD_PROJECT=app
IONIC_CLI_HOOK_CTX_BUILD_TYPE=angular
IONIC_CLI_HOOK_CTX_BUILD_VERBOSE=false
IONIC_CLI_HOOK_CTX_CAPACITOR_APP_ID=io.ionic.starter
IONIC_CLI_HOOK_CTX_CAPACITOR_APP_NAME=ionic-starter-app
IONIC_CLI_HOOK_CTX_CAPACITOR_VERBOSE=false
```

钩子也可以在 `ionic.config.json` 中定义。在项目中定义一个 `hooks` 对象，其中每个键是钩子的名称（不带 `ionic:` 前缀），值是指向 JavaScript 文件的路径或路径数组。

在以下示例中，文件在 `ionic:build:before` 钩子期间被导入并运行：

```json
"hooks": {
  "build:before": "./scripts/build-before.js"
},
```

JavaScript 钩子文件应导出一个单一函数，该函数在钩子执行时接收一个参数（`ctx`）。

该参数是传递给钩子文件的上下文，不同钩子和不同调用之间会有所不同。

`./scripts/build-before.js`：

```javascript
module.exports = function (ctx) {
  console.log(ctx);
};
```

## 多应用项目

<small>
  <em>CLI 6.2.0+ 版本可用</em>
</small>

Ionic CLI 支持多应用配置设置，这涉及在单个仓库或[单体仓库](../reference/glossary.md#monorepo)中包含多个 Ionic 应用程序和共享代码。

:::note
这些文档概述了 Ionic CLI 的多应用功能，但并未深入每个框架的细节。

如果您使用 Angular，请参阅[这篇文章](https://github.com/ionic-team/ionic-cli/wiki/Angular-Monorepo)查看示例。
:::

### 设置步骤

1. 创建目录并初始化单体仓库（完整详情请参阅[项目结构](#项目结构)）
1. 将单体仓库初始化为 Ionic 多应用项目。这将创建一个多应用 `ionic.config.json` 文件。完整详情请参阅[配置文件](#配置文件)

   ```shell
   $ ionic init --multi-app
   ```

1. 使用 `ionic start` 创建 Ionic 应用程序或使用 `ionic init` 初始化现有应用程序（完整详情请参阅[添加应用程序](#添加应用程序)）

### 项目结构

在多应用项目中，项目结构是灵活的。唯一的要求是在仓库根目录有一个多应用 `ionic.config.json` 文件。

以下是一个示例设置，其中 `apps/` 目录中的应用程序与 `lib/` 目录中的共享代码分离。注意根目录的 `ionic.config.json` 文件和单体仓库的 `package.json` 文件。

```bash
apps/
├── myApp/
└── myOtherApp/
lib/
ionic.config.json
package.json
```

### 配置文件

在多应用项目中，应用程序共享仓库根目录的单个 `ionic.config.json` 文件，而不是每个应用程序都有自己的配置文件。多应用配置文件通过在 `projects` 对象中嵌套配置对象来包含每个应用程序的配置。可以使用 `defaultProject` 指定默认应用程序。

以下是示例文件，对应上述文件结构：

```json
{
  "defaultProject": "myApp",
  "projects": {
    "myApp": {
      "name": "My App",
      "integrations": {},
      "type": "angular",
      "root": "apps/myApp"
    },
    "myOtherApp": {
      "name": "My Other App",
      "integrations": {},
      "type": "angular",
      "root": "apps/myOtherApp"
    }
  }
}
```

当检测到多应用项目时，Ionic CLI 将在根目录 `ionic.config.json` 中配置的应用程序上下文中运行。项目选择标准如下：

1. 如果指定了全局 CLI 选项 `--project`，则按 `projects` 对象中的键查找项目。例如，`--project=myApp` 将选择 `myApp` 项目
1. 如果 CLI 检测到它在项目路径内运行（通过 `root` 键配置），它将选择匹配的项目。例如，在 `apps/myOtherApp/src` 目录内使用 CLI 将选择 `myOtherApp` 项目
1. 如果在 `ionic.config.json` 中指定了 `defaultProject`，当上述条件不满足时，它将选择指定的项目

### 添加应用程序

可以通过使用 `ionic start` 创建新应用程序或使用 `ionic init` 初始化现有应用程序来在多应用项目中注册应用程序。

#### 使用 `ionic start`

如果在 `ionic start` 期间检测到多应用项目，CLI 会将应用程序配置添加到根目录 `ionic.config.json` 文件中，而不是创建项目特定的配置文件。

如果依赖项被提升到单体仓库的根目录，可以使用 `--no-deps` 跳过依赖项安装。

```shell
$ cd apps/
$ ionic start "My New App" --no-deps
```

#### 使用 `ionic init`

如果以 `ionic start` 以外的其他方式创建了应用程序（例如使用预构建模板），请使用 `ionic init` 将现有应用程序注册到多应用项目中。

:::note
确保应用程序没有现有的 `ionic.config.json` 文件。
:::

```shell
$ cd apps/existing-app/
$ ionic init
```

## 高级配置

### 覆盖构建

通常情况下，CLI 根据项目类型运行一组硬编码的命令。例如，Angular 项目的标准 Web 资源构建是 `ng run app:build`。可以通过使用 `ionic:build` [npm 脚本](https://docs.npmjs.com/misc/scripts)来覆盖 Web 资源构建并继续使用 `ionic build`。同样，可以通过使用 `ionic:serve` npm 脚本来覆盖开发服务器。

请密切关注 Ionic CLI 提供给脚本的标志参数。如果不遵守选项，可能会出现异常，尤其是设备上的实时重新加载。

### 命令选项

命令选项可以用环境变量表示。它们通常使用 `--opt=value` 语法设置。这些环境变量的命名遵循一个模式：以 `IONIC_CMDOPTS_` 开头，添加命令名称（将任何空格替换为下划线），添加选项名称（将任何连字符替换为下划线），然后将所有字母大写。布尔标志（不接受值的命令行选项）可以设置为 `1` 或 `0`。如果存在 `--no-` 前缀，请将其剥离（例如，ionic serve 中的 `--no-open` 可以用 `IONIC_CMDOPTS_SERVE_OPEN=0` 表示）。

例如，`ionic cordova run ios -lc --livereload-port=1234 --host=0.0.0.0` 中的命令选项也可以用以下一系列环境变量表示：

```shell
$ export IONIC_CMDOPTS_CORDOVA_RUN_LIVERELOAD=1
$ export IONIC_CMDOPTS_CORDOVA_RUN_CONSOLELOGS=1
$ export IONIC_CMDOPTS_CORDOVA_RUN_LIVERELOAD_PORT=1234
$ export IONIC_CMDOPTS_CORDOVA_RUN_HOST=0.0.0.0
```

如果这些变量在环境中设置，`ionic cordova build ios` 将为其选项使用新的默认值。

### 遥测功能

CLI 向 Ionic 发送使用数据以创造更好的体验。要禁用此功能，请运行 `ionic config set -g telemetry false`。
