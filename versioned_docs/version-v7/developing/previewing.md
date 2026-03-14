---
title: Previewing
---

<head>
  <title>预览：在网页浏览器中本地运行 Ionic 应用</title>
  <meta
    name="description"
    content="预览功能提供了多种不同的选项，可根据需求测试原生功能。使用此功能可以轻松地在本地网页浏览器中运行您的 Ionic 应用。"
  />
</head>

根据目标平台和需求，有多种不同的选项可以测试原生功能。

- 在本地网页浏览器中运行（使用[平台检测](../core-concepts/cross-platform.md)来模拟原生功能）
- [部署到 iOS](ios.md)
- [部署到 Android](android.md)

## 在本地网页浏览器中运行

Ionic 最强大的功能之一是，您的大部分应用开发工作可以直接在桌面浏览器中进行。借助完整的传统网页开发工具（Chrome/Safari/Firefox 开发者工具），您可以编写代码，然后快速测试/调试，无需重新编译或部署到模拟器或设备。

为此，请在项目目录的命令行中运行 `ionic serve`：

```shell-session
$ ionic serve
> ng run app:serve --host=0.0.0.0 --port=8100

[INFO] 开发服务器正在运行！

       本地地址：http://localhost:8100
       外部地址：http://192.168.1.169:8100

       使用 Ctrl+C 退出此进程

[INFO] 浏览器窗口已打开至 http://localhost:8100！
```

当 `ionic serve` 运行时，您可以继续开发应用。当您保存更改时，应用将重新加载并应用这些更改。

:::note

如果终端中没有列出外部链接，请运行 `ionic serve --external` 来生成它。

:::

在实现原生功能时，请使用[平台检测](../core-concepts/cross-platform.md)。
当您准备在真实设备上测试时，请参阅 [iOS](ios.md) 和 [Android](android.md) 的部署指南。

## 模拟移动设备视口

每个主流浏览器厂商都提供了用于移动设备模拟的开发者工具。这些工具可以更改模拟的设备类型。

### Chrome

在本地或远程地址打开您的应用程序。例如，`http://localhost:4200`。然后，在 Windows/Linux 上按 `Ctrl+Shift+I` 或在 Mac 上按 `Cmd+Opt+I` 打开 Chrome 开发者工具。

<img src="/docs/img/developing/previewing/chrome-dev-tools.png" alt="Chrome 开发者工具" />

在这里，您可以从下拉菜单中选择不同的设备类型，更改设备方向并限制网络速度。

有关更多功能和信息，请访问：https://developer.chrome.com/docs/devtools/device-mode/

### Safari

:::note

前提条件：必须在 Safari 高级选项中启用“在菜单栏中显示‘开发’菜单”选项。

:::

在本地或远程地址打开您的应用程序。例如，`http://localhost:4200`。在 Safari 中选择 **开发** 菜单，然后选择 **进入响应式设计模式**。或者，您可以使用键盘快捷键 `Cmd+Opt+R`。

<img src="/docs/img/developing/previewing/safari-responsive-design-mode.png" alt="Safari 响应式设计模式" />

在这里，您可以选择不同的设备类型进行模拟，并更改设备方向。

有关更多功能和信息，请访问：https://developer.apple.com/safari/tools/

### Firefox

在本地或远程地址打开您的应用程序。例如，`http://localhost:4200`。然后，在 Windows/Linux 上按 `Ctrl+Shift+M` 或在 Mac 上按 `Cmd+Opt+M` 打开 Firefox 开发者工具。

<img src="/docs/img/developing/previewing/firefox-responsive-design-mode.png" alt="Firefox 响应式设计模式" />

在这里，您可以从下拉菜单中选择不同的设备类型，更改设备方向并限制网络速度。

有关更多功能和信息，请访问：https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/