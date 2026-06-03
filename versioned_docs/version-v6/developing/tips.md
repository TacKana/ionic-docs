---
title: 开发技巧
---

<head>
  <title>应用开发技巧：如何解决权限错误和问题</title>
  <meta
    name="description"
    content="如果出现错误，可能需要设置 npm 以无需提升权限即可运行。阅读我们的 Ionic 应用开发技巧，了解有关解决权限问题的更多信息。"
  />
</head>

## 解决权限错误

当全局安装包时，可能会发生 `EACCES` 权限错误。如果是这种情况，可能需要设置 npm 以无需提升权限即可运行。

:::note
不**建议**在 npm 中使用 `sudo`，因为这可能导致进一步的复杂问题。
:::

本指南提供了两种解决权限问题的选项。请参阅 [npm 文档](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally)获取完整文档和其他选项。

### 选项 1

避免权限问题的最佳方法是使用 node 版本管理器重新安装 NodeJS 和 npm。

本指南将介绍 [nvm](https://github.com/nvm-sh/nvm) 的安装和使用。请参阅 [nvm 文档](https://github.com/nvm-sh/nvm#installation-and-update)获取完整文档。请参阅 [npm 文档](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm#using-a-node-version-manager-to-install-nodejs-and-npm)获取其他选项和 Windows 说明。

1. 安装 nvm。

   ```shell
   $ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
   ```

1. 新的终端窗口现在将使用 nvm。要验证，请打开一个新终端并运行以下命令。如果有输出，说明安装成功。

   ```shell
   $ command -v nvm
   ```

1. 要下载并安装最新的 NodeJS LTS 版本，请运行：

   ```shell
   $ nvm install --lts
   ```

1. 将新安装的 NodeJS 设置为默认环境：

   ```shell
   $ nvm alias default lts/*
   ```

1. 新的终端窗口现在将使用 nvm 控制的 NodeJS。要验证：

   ```shell
   $ node -v  # 将打印上面安装的版本
   $ which npm  # 将打印 ~/.nvm 文件夹内的某个路径
   ```

现在，全局包将安装在 `~/.nvm` 目录中，因此只要在 _不使用_ `sudo` 的情况下使用 `npm`，权限错误就不再发生。

### 选项 2

<small>
  <em>不适用于 Windows</em>
</small>

将 npm 目录的所有者更改为当前用户：

```shell
$ sudo chown -R $(whoami) /usr/local/{lib/node_modules,bin,share}
$ sudo chown -R $(whoami) /usr/lib/node_modules
$ sudo chown -R $(whoami) ~/.npm ~/.npmrc
```

由于这些全局目录不再由 `root` 拥有，因此可以 _不_ 使用 `sudo` 来全局安装包。

## 更新依赖项

要更新 [npm](https://www.npmjs.com/) 依赖项，请运行以下命令，其中 `<package-name>` 是要更新的包：

```shell
npm install <package-name>@<version|latest> --save
```

例如，要将 `@ionic/angular` 包更新为标记为 `latest` 的版本，请运行：

```shell
npm install @ionic/angular@latest --save
```

建议通过 CLI 更新包，因为 npm 现在会先从 `package-lock.json` 读取包版本。

## 代码编辑器

有很多代码编辑器可供选择。以下是我们最喜欢的一些：

- [Visual Studio Code](https://code.visualstudio.com)：微软制作的流行免费文本编辑器
- [Atom](https://atom.io)：GitHub 制作的可扩展文本编辑器
- [WebStorm](https://www.jetbrains.com/webstorm/)：JetBrains 制作的强大的非免费编辑器

## 使用调试器

`debugger` 关键字可用于调试应用。当大多数浏览器遇到 `debugger` 语句时，JavaScript 的执行会停止，浏览器将加载其调试器。这可用于在应用中设置"断点"。

例如，如果一个函数没有返回正确的值，可以使用调试器逐步执行代码并检查变量。

```javascript
function myBrokenFunction() {
  debugger;
  // 执行其他操作
}
```

当应用运行时，它将在此函数处暂停。然后，可以使用开发者工具逐行运行 JavaScript 片段，并检查函数具体在何处出错。

## 更改模式

默认情况下，当在浏览器中查看应用时，Ionic 将应用 `md` 模式。但是，由于 Ionic 组件会根据其平台进行调整，因此能够查看应用在 iOS 上的外观会很有帮助。为此，请在应用运行的 URL 中添加 `?ionic:mode=ios`。例如，如果应用运行在端口 `8100` 上，URL 将是：`http://localhost:8100/?ionic:mode=ios`。

:::note
这不会改变浏览器看到的运行平台。平台由设备检测和检查用户代理（user-agent）确定。要更改平台，必须更改用户代理。为此，请使用 <kbd>Ctrl+Shift+I</kbd>（Mac 上为 <kbd>Cmd+Option+I</kbd>）打开 Chrome DevTools，然后使用 <kbd>Ctrl+Shift+M</kbd>（Mac 上为 <kbd>Cmd+Option+M</kbd>）启用设备模式。
:::

![Chrome DevTools 显示设备模式，已选择 iPhone X。](/img/faq/tips/change-device-platform.png 'Chrome DevTools 设备模式')

从设备下拉菜单中选择设备将更改用户代理以及视口尺寸。

## 使用 iOS 模拟器

iOS 模拟器可以在应用到达真实设备之前进行测试和调试。

在使用之前，必须安装 Apple 的 IDE [Xcode](https://developer.apple.com/xcode/download/)。

然后可以使用 [Ionic CLI](../cli.md) 在模拟器上运行当前目录中的应用：

```shell
ionic cordova emulate ios -lc
```

传递 `-lc` 标志将启用实时重载并将控制台输出记录到终端。

Xcode 也可用于启动模拟器和调试应用。

打开 Xcode 并打开 `../path-to-app/platforms/ios/myApp.xcodeproj`。

应用加载后，控制台输出和设备日志将打印在 Xcode 的输出窗口中。

## 使用 Genymotion Android 模拟器

虽然 Android SDK 附带了一个默认模拟器，但它有时可能速度慢且响应不及时。

[Genymotion](https://www.genymotion.com) 是一个替代模拟器，速度更快，并且仍然允许访问原生功能，如 GPS 和相机。
