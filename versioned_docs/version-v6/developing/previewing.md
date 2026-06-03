---
title: 预览
---

<head>
  <title>预览：在本地 Web 浏览器中运行 Ionic 应用</title>
  <meta
    name="description"
    content="预览提供了多种不同的选项，可根据需求测试原生功能。使用此功能可以轻松地在本地 Web 浏览器中运行您的 Ionic 应用。"
  />
</head>

根据您的目标平台和需求，有多种不同的选项来测试原生功能。

- 在本地 Web 浏览器中运行（使用[平台检测](../core-concepts/cross-platform.md)来实现原生功能）
- [部署到 iOS](ios.md)
- [部署到 Android](android.md)

## 在本地 Web 浏览器中运行

Ionic 最强大的功能之一是，大部分应用开发工作都可以直接在桌面浏览器中完成。通过完全访问传统的 Web 开发工具（Chrome/Safari/Firefox 开发者工具），您可以编写代码，然后快速测试/调试，无需重新编译或部署到模拟器或设备。

为此，在项目目录的命令行中运行 `ionic serve`：

```shell-session
$ ionic serve
> ng run app:serve --host=0.0.0.0 --port=8100

[INFO] 开发服务器正在运行！

       本地： http://localhost:8100
       外部： http://192.168.1.169:8100

       使用 Ctrl+C 退出此进程

[INFO] 浏览器窗口已打开到 http://localhost:8100！
```

在 `ionic serve` 运行的情况下，继续开发您的应用。当您保存更改时，应用会自动重新加载并应用这些更改。

当实现原生功能时，请使用[平台检测](../core-concepts/cross-platform.md)。
当您准备好在真实设备上测试时，请查看 [iOS](ios.md) 和 [Android](android.md) 的相关文档。

## 模拟移动端视口

每个主流浏览器厂商都包含用于移动端模拟的开发者工具。这些工具提供了更改模拟设备类型的能力。

### Chrome

在本地或远程地址打开您的应用程序。例如 `http://localhost:4200`。然后，按 Windows/Linux 上的 `Ctrl+Shift+I` 或 Mac 上的 `Cmd+Opt+I` 打开 Chrome 开发者工具。

<img src="/docs/img/developing/previewing/chrome-dev-tools.png" alt="Chrome 开发者工具" />

在这里，您可以从下拉菜单中选择不同的设备类型，更改设备的方向以及限制网络速度。

有关更多功能和信息，请访问：https://developer.chrome.com/docs/devtools/device-mode/。

### Safari

:::note

先决条件：必须在 Safari 高级选项中启用"在菜单栏中显示"开发"菜单"选项。

:::

在本地或远程地址打开您的应用程序。例如 `http://localhost:4200`。选择 Safari 中的 **Develop** 菜单，然后选择 **Enter Responsive Design Mode**。或者，您可以使用键盘快捷键 `Cmd+Opt+R`。

<img src="/docs/img/developing/previewing/safari-responsive-design-mode.png" alt="Safari 响应式设计模式" />

在这里，您可以选择不同的设备类型进行模拟，以及更改设备的方向。

有关更多功能和信息，请访问：https://developer.apple.com/safari/tools/。

### Firefox

在本地或远程地址打开您的应用程序。例如 `http://localhost:4200`。然后，按 Windows/Linux 上的 `Ctrl+Shift+M` 或 Mac 上的 `Cmd+Opt+M` 打开 Firefox 开发者工具。

<img src="/docs/img/developing/previewing/firefox-responsive-design-mode.png" alt="Firefox 响应式设计模式" />

在这里，您可以从下拉菜单中选择不同的设备类型，更改设备的方向以及限制网络速度。

有关更多功能和信息，请访问：https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/。
