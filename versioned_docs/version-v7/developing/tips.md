---
title: 开发技巧
---

<head>
  <title>应用开发技巧：如何解决权限错误和问题</title>
  <meta
    name="description"
    content="如果出现错误，可能需要设置 npm 以在没有提升权限的情况下运行。阅读我们的 Ionic 应用开发技巧，了解更多关于解决权限问题的信息。"
  />
</head>

## 解决权限错误

当包被全局安装时，可能会发生 `EACCES` 权限错误。如果出现这种情况，可能需要设置 npm 以在没有提升权限的情况下运行。

:::note
不**建议**将 `sudo` 与 npm 一起使用，因为这可能导致进一步的复杂问题。
:::

本指南提供了两个解决权限问题的选项。有关完整文档和其他选项，请参阅 [npm 文档](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally)。

### 选项一

避免权限问题的最佳方法是使用节点版本管理器重新安装 NodeJS 和 npm。

本指南将介绍 [nvm](https://github.com/nvm-sh/nvm) 的安装和使用。有关完整文档，请参阅 [nvm 文档](https://github.com/nvm-sh/nvm#installation-and-update)。有关 Windows 的其他选项和说明，请参阅 [npm 文档](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm#using-a-node-version-manager-to-install-nodejs-and-npm)。

1. 安装 nvm。

   ```shell
   $ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
   ```

1. 新的终端现在将使用 nvm。要验证，请打开一个新终端并运行以下命令。如果打印了内容，则安装成功。

   ```shell
   $ command -v nvm
   ```

1. 要下载并安装 NodeJS 的最新 LTS 版本，请运行：

   ```shell
   $ nvm install --lts
   ```

1. 将新安装的 NodeJS 设置为默认环境：

   ```shell
   $ nvm alias default lts/*
   ```

1. 新的终端现在将使用 nvm 控制的 NodeJS。要验证：

   ```shell
   $ node -v  # 将打印上面安装的版本
   $ which npm  # 将打印 ~/.nvm 文件夹内的路径
   ```

全局包现在将安装在 `~/.nvm` 目录中，因此只要 _不_ 使用 `sudo` 运行 npm，权限错误就不再发生。

### 选项二

<small>
  <em>不适用于 Windows</em>
</small>

将 npm 目录的所有者更改为当前用户：

```shell
$ sudo chown -R $(whoami) /usr/local/{lib/node_modules,bin,share}
$ sudo chown -R $(whoami) /usr/lib/node_modules
$ sudo chown -R $(whoami) ~/.npm ~/.npmrc
```

由于这些全局目录不再由 `root` 拥有，因此可以 _不_ 使用 `sudo` 全局安装包。

## 更新依赖

要更新 [npm](https://www.npmjs.com/) 依赖，请运行以下命令，其中 `<package-name>` 是要更新的包名：

```shell
npm install <package-name>@<version|latest> --save
```

例如，要将 `@ionic/angular` 包更新到标记为 `latest` 的版本，请运行：

```shell
npm install @ionic/angular@latest --save
```

建议通过 CLI 更新包，因为 npm 现在会先读取 `package-lock.json` 中的包版本。

## 代码编辑器

有很多代码编辑器可供选择。以下是我们最喜欢的一些：

- [Visual Studio Code](https://code.visualstudio.com)：Microsoft 制作的一款流行且免费的文本编辑器
- [WebStorm](https://www.jetbrains.com/webstorm/)：JetBrains 出品的一款功能强大的付费编辑器

## 使用调试器

`debugger` 关键字可用于调试应用。当大多数浏览器遇到 `debugger` 语句时，JavaScript 的执行会停止，浏览器将加载其调试器。这可用于在应用中设置"断点"。

例如，如果函数没有返回正确的值，可以使用调试器逐步执行代码并检查变量。

```javascript
function myBrokenFunction() {
  debugger;
  // 执行其他操作
}
```

当应用运行时，它将在此函数处暂停。从那里，可以使用开发者工具逐行运行 JavaScript 片段，并检查函数在何处出现问题。

## 更改模式

默认情况下，当在浏览器中查看应用时，Ionic 将应用 `md` 模式。但是，由于 Ionic 组件会根据其所在平台自适应，因此能够查看应用在 iOS 上的外观会很有帮助。为此，请在提供应用的 URL 中添加 `?ionic:mode=ios`。例如，如果应用在端口 `8100` 上提供服务，则 URL 为：`http://localhost:8100/?ionic:mode=ios`。

:::note
这不会更改浏览器所见的平台。平台通过设备检测和检查用户代理来确定。要更改平台，必须更改用户代理。为此，请按 <kbd>Ctrl+Shift+I</kbd>（Mac 上为 <kbd>Cmd+Option+I</kbd>）打开 Chrome DevTools，然后按 <kbd>Ctrl+Shift+M</kbd>（Mac 上为 <kbd>Cmd+Option+M</kbd>）启用设备模式。
:::

![Chrome DevTools 显示设备模式，选择了 iPhone X。](/img/faq/tips/change-device-platform.png 'Chrome DevTools 设备模式')

从设备下拉列表中选择设备将更改用户代理以及视口的尺寸。

## 使用 iOS 模拟器

iOS 模拟器可以在应用到达真实设备之前进行测试和调试。

在使用之前，必须安装 Apple 的 IDE [Xcode](https://developer.apple.com/xcode/download/)。

然后可以使用 [Ionic CLI](../cli.md) 在模拟器上运行当前目录中的应用：

```shell
ionic cordova emulate ios -lc
```

传入 `-lc` 标志将启用实时重载并将控制台输出记录到终端。

Xcode 也可以用于启动模拟器和调试应用。

打开 Xcode，然后打开 `../path-to-app/platforms/ios/myApp.xcodeproj`。

应用加载后，控制台输出和设备日志将打印在 Xcode 的输出窗口中。

## 使用 Genymotion Android 模拟器

虽然 Android SDK 自带了一个模拟器，但它有时可能缓慢且响应迟钝。

[Genymotion](https://www.genymotion.com) 是另一个更快的模拟器，并且仍然允许访问 GPS 和摄像头等原生功能。
