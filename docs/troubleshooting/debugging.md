---
title: 调试
---

<head>
  <title>iOS Safari 与 Android Chrome 应用调试指南</title>
  <meta
    name="description"
    content="Ionic Framework 在 iOS Safari 与 Android Chrome 中调试应用的终极指南。阅读我们的调试指南，立即开始开发 Ionic 应用。"
  />
</head>

<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/akh6V6Yw1lw"
  frameBorder="0"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>

## 实时重载

实时重载功能在设备硬件上调试原生功能（如插件）时非常有用。它能在检测到应用代码变更时自动刷新浏览器（或 WebView），而无需每次修改代码后都重新部署原生二进制文件。[了解更多](../cli/livereload.md)。

## iOS 与 Safari

Safari 可用于调试连接至 iOS 设备或 iOS 模拟器上的 Ionic 应用。

首先，在 iOS 设备上启用 **Web 检查器**：进入“设置”>“Safari”>“高级”。

接着，在 Mac 上打开 Safari，启用“显示开发菜单”：进入“Safari”>“偏好设置”>“高级”。

运行 iOS 模拟器或将 iOS 设备连接到 Mac，然后运行需要调试的 Ionic 应用。

在 Safari 的工具栏中选择 **开发** 菜单。在下拉菜单选项中，您应能看到设备名称和应用名称。将鼠标悬停在应用名称上并点击 **localhost**。这将打开一个包含 Safari 开发者工具的新窗口，您可以使用这些工具来检查和调试运行在设备上的 Ionic 应用。

## Android 与 Chrome

当应用在浏览器中运行（使用 `ionic serve` 命令）、部署到模拟器或运行在物理设备上时，可以使用 Google Chrome 的开发者工具进行调试。

要检查物理设备，首先需要启用开发者模式。将 Android 设备连接至电脑，然后进入“设置”>“关于手机”，滚动至“版本号”并连续点击 7 次。这将在 **设置** 菜单中激活一个名为 **开发者选项** 的新选项。

接着，进入“设置”>“开发者选项”，确保开发者选项开关已打开。向下滚动至 **USB 调试**，确保也已启用。在 Android 模拟器中，开发者选项和 USB 调试默认是启用的。

打开 Chrome 浏览器并导航至 `chrome://inspect/#devices`。您连接的 Android 设备应显示在远程目标列表中。

在设备上，打开您希望使用 Chrome 进行调试的 Ionic 应用。

当应用在设备上运行时，返回 Chrome 并点击远程目标列表中设备下方的 **检查**。这将在新窗口中打开 Chrome 开发者工具。您可以使用所有 Chrome 开发者工具来调试运行在设备上的应用。

:::note
由于一个小错误，当您打开 Chrome 开发者工具时，应用预览可能不会自动显示。要使其出现，请点击 **元素** 标签，然后点击任意 DOM 元素，接着切换任意 CSS 规则的开关，应用预览窗口就会显示。
:::

## 在本地使用 Visual Studio 调试 Chrome（Android 与 iOS 均适用）

[Visual Studio Code](https://code.visualstudio.com/) 也可用于调试在 Chrome 浏览器中运行的 Ionic 应用。

为此，请使用 `ionic serve` 在浏览器中运行您的应用。记下应用运行的端口。接下来，使用 Visual Studio Code 打开您的 Ionic 项目。

在 VS Code 最左侧的垂直菜单中，点击 `运行` 图标。如果是首次在项目中配置，请点击创建 `launch.json` 文件的选项。从环境选项下拉菜单中选择 **Chrome**。这将自动生成一个 `launch.json` 文件，包含针对 localhost 启动 Chrome 的配置。

确保 `launch.json` 文件中 url 属性使用的端口与您之前运行 `ionic serve` 时观察到的端口一致。使用错误的端口号将无法工作。

在调试目标下拉菜单中，选择 **启动 Chrome**，然后点击运行。这将打开一个新的 Chrome 浏览器实例，VS Code 将附加到该实例。您可以在应用在 Chrome 中运行时设置断点并使用 VS Code 中的其他调试工具。

## 在 Android 中使用 Visual Studio Code 调试

[Visual Studio Code](https://code.visualstudio.com/) 有一个专用插件，用于调试在 Android WebView 中运行的应用。

[该插件](https://marketplace.visualstudio.com/items?itemName=mpotthoff.vscode-android-webview-debug) 在设备与 Visual Studio Code 开发者工具之间建立桥梁，允许直接从编辑器进行调试。

要使用此插件调试 Ionic 应用，请先安装它，然后在 Android 模拟器中启动应用，或连接 Android 设备并运行应用。您可能需要在 Android 设备上启用 USB 调试。

在 Ionic 项目的根目录中，创建一个名为 `.vscode` 的文件夹，并在该文件夹内创建一个名为 `launch.json` 的文件。在 `launch.json` 中，输入以下代码以配置插件来调试 Ionic 应用：

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "android-webview",
      "request": "attach",
      "name": "附加到 Android WebView",
      "webRoot": "${workspaceFolder}/www",
      "sourceMaps": true,
      "sourceMapPathOverrides": {
        "webpack:/*": "${workspaceFolder}/*"
      }
    }
  ]
}
```

接下来，启动调试过程，选择您的设备和 Ionic 应用。VS Code 将附加到 Android 设备和 Ionic 应用，您现在可以调试应用，包括设置断点。

:::note
如果无法设置断点并收到错误提示 **“断点被忽略，因为未找到生成的代码（source map 问题？）”**，这意味着转译后的 JavaScript 文件路径不正确。使用调试控制台中的 `.scripts` 命令查看已加载的脚本。通过在 `launch.json` 配置文件中的 `sourceMapPathOverrides` 键尝试不同值，确保脚本路径正确。
:::