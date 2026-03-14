---
title: Development Tips
---

<head>
  <title>应用开发技巧：如何解决权限错误和问题</title>
  <meta
    name="description"
    content="如果出现错误，可能需要设置 npm 使其无需提升权限即可运行。阅读我们的 Ionic 应用开发技巧，了解更多关于解决权限问题的信息。"
  />
</head>

## 解决权限错误

全局安装包时可能会出现 `EACCES` 权限错误。如果是这种情况，可能需要设置 npm 使其无需提升权限即可运行。

:::note
**不建议** 将 `sudo` 与 npm 一起使用，因为这可能导致进一步的复杂问题。
:::

本指南提供了两种解决权限问题的方法。完整文档和其他选项请参阅 [npm 文档](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally)。

### 选项 1

避免权限问题的最佳方法是使用 node 版本管理器重新安装 NodeJS 和 npm。

本指南将记录 [nvm](https://github.com/nvm-sh/nvm) 的安装和使用。完整文档请参阅 [nvm 文档](https://github.com/nvm-sh/nvm#installation-and-update)。其他选项和 Windows 系统说明请参阅 [npm 文档](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm#using-a-node-version-manager-to-install-nodejs-and-npm)。

1. 安装 nvm。

   ```shell
   $ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
   ```

1. 新的终端现在将使用 nvm。要验证这一点，请打开一个新终端并运行以下命令。如果有输出，则安装成功。

   ```shell
   $ command -v nvm
   ```

1. 要下载并安装最新的 LTS 版本 NodeJS，请运行：

   ```shell
   $ nvm install --lts
   ```

1. 将新安装的 NodeJS 设置为默认环境：

   ```shell
   $ nvm alias default lts/*
   ```

1. 新的终端现在将使用 nvm 控制的 NodeJS。验证方法：

   ```shell
   $ node -v  # 将打印上面安装的版本
   $ which npm  # 将打印 ~/.nvm 文件夹内的某个路径
   ```

现在全局包将安装在 `~/.nvm` 目录中，因此只要在 **不使用** `sudo` 的情况下使用 `npm`，就不应再出现权限错误。

### 选项 2

<small>
  <em>不适用于 Windows 系统</em>
</small>

将 npm 目录的所有者更改为当前用户：

```shell
$ sudo chown -R $(whoami) /usr/local/{lib/node_modules,bin,share}
$ sudo chown -R $(whoami) /usr/lib/node_modules
$ sudo chown -R $(whoami) ~/.npm ~/.npmrc
```

由于这些全局目录不再归 `root` 所有，因此可以在 **不使用** `sudo` 的情况下全局安装包。

## 更新依赖项

要更新 [npm](https://www.npmjs.com/) 依赖项，请运行以下命令，其中 `<package-name>` 是要更新的包：

```shell
npm install <package-name>@<version|latest> --save
```

例如，要将 `@ionic/angular` 包更新到标记为 `latest` 的版本，请运行：

```shell
npm install @ionic/angular@latest --save
```

建议通过 CLI 更新包，因为 npm 现在会优先从 `package-lock.json` 读取包版本。

## 代码编辑器

有很多代码编辑器可供选择。以下是我们最喜欢的几款：

- [Visual Studio Code](https://code.visualstudio.com)：由 Microsoft 开发的流行免费文本编辑器
- [Atom](https://atom.io)：由 GitHub 开发的可定制文本编辑器
- [WebStorm](https://www.jetbrains.com/webstorm/)：由 JetBrains 开发的功能强大的付费编辑器

## 使用调试器

`debugger` 关键字可用于调试应用程序。当大多数浏览器遇到 `debugger` 语句时，JavaScript 的运行会停止，浏览器将加载其调试器。这可用于在应用程序中设置“断点”。

例如，如果某个函数没有返回正确的值，可以使用调试器逐步执行代码并检查变量。

```javascript
function myBrokenFunction() {
  debugger;
  // 执行其他操作
}
```

当应用程序运行时，它将在该函数处暂停。然后，可以使用开发者工具逐行运行 JavaScript 代码片段，并准确找出函数出错的位置。

## 切换模式

默认情况下，在浏览器中查看应用程序时，Ionic 会应用 `md` 模式。然而，由于 Ionic 组件会根据其平台进行调整，因此能够查看应用在 iOS 上的外观会很有帮助。为此，请在应用运行的 URL 后添加 `?ionic:mode=ios`。例如，如果应用运行在端口 `8100` 上，URL 应为：`http://localhost:8100/?ionic:mode=ios`。

:::note
这不会改变浏览器检测到的平台。平台由设备检测和用户代理检查决定。要更改平台，必须更改用户代理。为此，请使用 <kbd>Ctrl+Shift+I</kbd>（Mac 上为 <kbd>Cmd+Option+I</kbd>）打开 Chrome DevTools，然后使用 <kbd>Ctrl+Shift+M</kbd>（Mac 上为 <kbd>Cmd+Option+M</kbd>）切换设备模式。
:::

![Chrome DevTools 显示设备模式，并选中了 iPhone X](/img/faq/tips/change-device-platform.png 'Chrome DevTools 设备模式')

从设备下拉列表中选择设备将更改用户代理以及视口的尺寸。

## 使用 iOS 模拟器

iOS 模拟器可在应用程序到达实际设备之前进行测试和调试。

在使用之前，必须安装 Apple 的 IDE [Xcode](https://developer.apple.com/xcode/download/)。

然后可以使用 [Ionic CLI](../cli.md) 在模拟器上运行当前目录中的应用：

```shell
ionic cordova emulate ios -lc
```

传入 `-lc` 标志将启用实时重新加载并将控制台输出记录到终端。

Xcode 也可用于启动模拟器并调试应用程序。

打开 Xcode 并打开 `../path-to-app/platforms/ios/myApp.xcodeproj`。

应用程序加载后，控制台输出和设备日志将打印在 Xcode 的输出窗口中。

## 使用 Genymotion Android 模拟器

虽然 Android SDK 附带了一个标准模拟器，但它有时可能运行缓慢且响应迟钝。

[Genymotion](https://www.genymotion.com) 是一个替代模拟器，速度更快，并且仍然允许访问 GPS 和摄像头等原生功能。