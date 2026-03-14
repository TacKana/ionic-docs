---
title: Debugging
---

<head>
  <title>iOS Safari 与 Android Chrome 应用调试指南</title>
  <meta
    name="description"
    content="Ionic Framework 关于在 iOS Safari 和 Android Chrome 中调试应用的终极指南。阅读我们的调试指南，立即开始调试你的 Ionic 应用。"
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

## 实时重载 (Live Reload)

实时重载功能对于在设备硬件上调试原生功能（例如插件）非常有用。它无需在每次代码更改时都部署新的原生二进制文件，而是在检测到应用中的更改时重新加载浏览器（或 WebView）。[了解更多](../cli/livereload.md)。

## iOS 与 Safari

Safari 可用于在已连接的 iOS 设备或 iOS 模拟器上调试 Ionic 应用。

首先，在 iOS 设备上，通过 **设置 > Safari > 高级** 启用 **网页检查器 (Web Inspector)**。

接下来，在 Mac 上打开 Safari，然后在 **Safari > 偏好设置 > 高级** 下启用 **在菜单栏中显示"开发"菜单**。

运行 iOS 模拟器或将 iOS 设备连接到 Mac，然后运行你需要调试的 Ionic 应用。

在 Safari 中，选择工具栏中的 **开发**。在下拉菜单选项中，你应该能看到你的设备和应用名称。将鼠标悬停在应用名称上，然后单击 **localhost**。这将打开一个包含 Safari 开发者工具的新窗口——使用它们来检查和调试在你设备上运行的 Ionic 应用。

## Android 与 Chrome

当应用在使用 `ionic serve` 命令的浏览器中运行、部署到模拟器或在物理设备上运行时，可以使用 Google Chrome 的开发者工具进行调试。

要检查物理设备，首先需要启用开发者模式。将 Android 设备连接到计算机，然后进入 **设置 > 关于手机**，滚动到 **版本号** 并点击 7 次。这将在 **设置** 菜单中激活一个名为 **开发者选项** 的新选项。

接下来，进入 **设置 > 开发者选项**，确保开发者选项开关已打开。向下滚动到 **USB 调试** 并确保它也处于启用状态。在 Android 模拟器中，开发者选项和 USB 调试默认是启用的。

打开 Chrome 浏览器并导航到 URL `chrome://inspect/#devices`。你已连接的 Android 设备应显示在远程目标列表中。

在你的设备上，使用 Chrome 打开你想要调试的 Ionic 应用。

当应用在设备上运行时，返回 Chrome，并在远程目标列表中你的设备下方点击 **inspect**。这将在新窗口中打开 Chrome 开发者工具。然后，你可以使用所有 Chrome 开发者工具来调试在设备上运行的应用。

:::note
由于一个小错误，当你打开 Chrome 开发者工具时，应用预览可能不会自动出现。要使其出现，请点击 **元素 (Elements)** 选项卡，然后单击任何 DOM 元素，接着关闭再打开任何 CSS 规则，应用预览窗口就会出现。
:::

## 在本地使用 Visual Studio Code 在 Chrome 中调试（Android 和 iOS 均适用）

[Visual Studio Code](https://code.visualstudio.com/) 也可用于调试在 Chrome 网页浏览器中运行的 Ionic 应用。

为此，使用 `ionic serve` 在浏览器中运行你的应用。记下你的应用运行所在的端口号。接下来，使用 Visual Studio Code 打开你的 Ionic 项目。

在 VS Code 最左侧的垂直菜单中，点击 `运行` 图标。如果你是首次在项目中配置此功能，请点击创建 `launch.json` 文件的选项。从环境选项下拉菜单中选择 **Chrome**。这将自动生成一个 `launch.json` 文件，其中包含针对 localhost 启动 Chrome 的配置。

确保你的 `launch.json` 文件中 url 属性使用的端口号与你之前运行 `ionic serve` 时观察到的端口号一致。使用错误的端口号将无法工作。

在调试目标下拉菜单中，选择 **针对 Chrome 启动 (Launch against Chrome)**，然后点击运行。这将打开一个新的 Chrome 浏览器实例，并且 VS Code 将附加到它。当你的应用在 Chrome 中运行时，你可以在 VS Code 内设置断点并使用其他调试工具。

## 在 Android 中使用 Visual Studio Code 调试

[Visual Studio Code](https://code.visualstudio.com/) 有一个专用插件，可用于调试在 Android WebView 中运行的应用。

[该插件](https://marketplace.visualstudio.com/items?itemName=mpotthoff.vscode-android-webview-debug) 在设备和 Visual Studio Code 开发者工具之间建立了一座桥梁，允许直接从编辑器进行调试。

要使用此插件调试你的 Ionic 应用，首先安装它，然后在 Android 模拟器中启动你的应用，或连接你的 Android 设备并运行应用。你可能需要在 Android 设备上启用 USB 调试。

在你的 Ionic 项目根目录中，创建一个名为 `.vscode` 的文件夹，并在该文件夹内创建一个名为 `launch.json` 的文件。在 `launch.json` 中，输入以下代码来配置插件以调试 Ionic 应用：

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "android-webview",
      "request": "attach",
      "name": "Attach to Android WebView",
      "webRoot": "${workspaceFolder}/www",
      "sourceMaps": true,
      "sourceMapPathOverrides": {
        "webpack:/*": "${workspaceFolder}/*"
      }
    }
  ]
}
```

接下来，启动调试过程，选择你的设备和 Ionic 应用。VS Code 将附加到 Android 设备和 Ionic 应用，现在你可以调试你的应用了，包括设置断点。

:::note
如果你无法设置断点并收到错误提示 **"由于未找到生成的代码，断点被忽略（源映射问题？）"**，这意味着到转译后的 JavaScript 文件的路径不正确。在调试控制台中使用 `.scripts` 命令查看已加载的脚本。通过在你的 `launch.json` 配置文件中的 `sourceMapPathOverrides` 键尝试不同的值，确保脚本的路径是正确的。
:::