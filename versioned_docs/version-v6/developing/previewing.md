---
title: Previewing
---

<head>
  <title>预览功能：在 Web 浏览器中本地运行 Ionic 应用</title>
  <meta
    name="description"
    content="预览功能提供了多种选项来测试原生功能，具体取决于您的需求。使用此功能可在 Web 浏览器中轻松本地运行您的 Ionic 应用。"
  />
</head>

根据您的目标平台和需求，有多种不同的选项可用于测试原生功能。

- 在 Web 浏览器中本地运行（使用[平台检测](../core-concepts/cross-platform.md)来模拟原生功能）
- [部署到 iOS](ios.md)
- [部署到 Android](android.md)

## 在 Web 浏览器中本地运行

Ionic 最强大的功能之一是，您的大部分应用开发工作都可以直接在桌面浏览器中进行。借助传统 Web 开发工具（Chrome/Safari/Firefox 开发者工具）的完整访问权限，您可以编写代码，然后快速测试和调试，而无需重新编译或部署到模拟器或设备。

为此，请在项目目录的命令行中运行 `ionic serve`：

```shell-session
$ ionic serve
> ng run app:serve --host=0.0.0.0 --port=8100

[INFO] Development server running!

       Local: http://localhost:8100
       External: http://192.168.1.169:8100

       Use Ctrl+C to quit this process

[INFO] Browser window opened to http://localhost:8100!
```

当 `ionic serve` 运行时，您可以继续开发您的应用。保存更改后，应用会重新加载并应用这些更改。

在实现原生功能时，请使用[平台检测](../core-concepts/cross-platform.md)。
当您准备在真实设备上测试时，请参阅 [iOS](ios.md) 和 [Android](android.md) 的相关文档。

## 模拟移动设备视口

每个主流浏览器厂商都提供了用于移动设备模拟的开发者工具。这些工具提供了更改模拟设备类型的功能。

### Chrome

在您的应用正在提供服务的本地或远程地址打开应用，例如 `http://localhost:4200`。然后，通过按 Windows/Linux 上的 `Ctrl+Shift+I` 或 Mac 上的 `Cmd+Opt+I` 打开 Chrome 开发者工具。

<img src="/docs/img/developing/previewing/chrome-dev-tools.png" alt="Chrome Dev Tools" />

在这里，您可以从下拉菜单中选择不同的设备类型，更改设备方向并限制网络速度。

有关更多功能和信息，请访问：https://developer.chrome.com/docs/devtools/device-mode/

### Safari

:::note

前提条件：必须在 Safari 高级选项中启用“在菜单栏中显示‘开发’菜单”选项。

:::

在您的应用正在提供服务的本地或远程地址打开应用，例如 `http://localhost:4200`。在 Safari 中选择 **开发** 菜单，然后选择 **进入响应式设计模式**。或者，您可以使用键盘快捷键 `Cmd+Opt+R`。

<img src="/docs/img/developing/previewing/safari-responsive-design-mode.png" alt="Safari Responsive Design Mode" />

在这里，您可以选择不同的设备类型进行模拟，并更改设备方向。

有关更多功能和信息，请访问：https://developer.apple.com/safari/tools/

### Firefox

在您的应用正在提供服务的本地或远程地址打开应用，例如 `http://localhost:4200`。然后，通过按 Windows/Linux 上的 `Ctrl+Shift+M` 或 Mac 上的 `Cmd+Opt+M` 打开 Firefox 开发者工具。

<img src="/docs/img/developing/previewing/firefox-responsive-design-mode.png" alt="Firefox Responsive Design Mode" />

在这里，您可以从下拉菜单中选择不同的设备类型，更改设备方向并限制网络速度。

有关更多功能和信息，请访问：https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/