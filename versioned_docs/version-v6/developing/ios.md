---
title: iOS 开发
sidebar_label: 开发 iOS
skipIntros: true
---

<head>
  <title>iOS 应用开发指南：Xcode 设置以构建和运行 iOS 应用</title>
  <meta
    name="description"
    content="Ionic 的 iOS 开发指南涵盖了如何在 iOS 模拟器和设备上构建和运行 Ionic 应用。iOS 应用只能在安装了 Xcode 的 macOS 上开发。"
  />
</head>

本指南介绍了如何使用 [Capacitor](../reference/glossary.md#capacitor) 或 [Cordova](../reference/glossary.md#cordova) 在 iOS 模拟器和设备上运行和调试 Ionic 应用。iOS 应用只能在安装了 Xcode 的 macOS 上开发。

在 iOS 上运行 Ionic 应用有两种工作流程：

- [使用 Xcode 运行](#running-with-xcode)
- [使用 Ionic CLI 运行](#running-with-the-ionic-cli)

Xcode 方式通常更稳定，但 Ionic CLI 方式提供了[实时重载](../reference/glossary.md#livereload)功能。

## Xcode 设置

[Xcode](https://developer.apple.com/xcode/) 是用于创建原生 iOS 应用的 IDE。它包含 iOS SDK 和 Xcode 命令行工具。可以使用 Apple 账户[免费下载 Xcode](https://developer.apple.com/download/)，也可以通过 App Store 安装。

安装 Xcode 后，确保已选择使用命令行工具：

```shell
xcode-select --install
```

### 设置开发团队

所有 iOS 应用都必须进行代码签名，即使是开发阶段也不例外。幸运的是，Xcode 通过自动代码签名使这变得简单。唯一的先决条件是拥有一个 Apple ID。

打开 Xcode 并导航到 **Xcode** &raquo; **Preferences** &raquo; **Accounts**。如果未列出任何 Apple ID，请添加一个。登录后，Apple ID 的团队列表中将出现一个 Personal Team（个人团队）。

![Xcode Preferences 中的 Accounts 部分，显示一个 Apple ID 和 Personal Team。](/img/installation/ios-xcode-accounts.png 'Xcode Preferences Accounts 部分')

### 创建 iOS 模拟器

iOS 模拟器可以在 Mac 上模拟 iOS 设备。以下文档是快速设置 iOS 模拟器的方法。有关更多信息，请参阅 [Apple 的文档](https://developer.apple.com/library/content/documentation/IDEs/Conceptual/simulator_help_topics/Chapter/Chapter.html)。

打开 Xcode 并导航到 **Window** &raquo; **Devices and Simulators**。如果尚不存在 **iPhone 11** 模拟器，请创建一个。

![Xcode 窗口显示 Devices and Simulators 部分，并选择了 iPhone X 模拟器。](/img/installation/ios-xcode-simulators-setup.png 'Xcode Devices and Simulators 窗口')

## Cordova 设置

Cordova 需要额外的设置才能支持编程式构建。此部分对于 Capacitor 不是必需的。

### ios-sim 和 ios-deploy

[`ios-sim`](https://github.com/ios-control/ios-sim) 和 [`ios-deploy`](https://github.com/ios-control/ios-deploy) 是在开发过程中将应用部署到 iOS 模拟器和 iOS 设备的工具。它们可以通过 [npm](../reference/glossary.md#npm) 全局安装。

```shell
$ npm install -g ios-sim
$ brew install ios-deploy
```

## 项目设置

在将应用部署到 iOS 模拟器和设备之前，必须先配置原生项目。

1. **生成本地项目（如果尚不存在）。**

   对于 Capacitor，运行以下命令：

   ```shell
   $ ionic capacitor add ios
   ```

   对于 Cordova，运行以下命令：

   ```shell
   $ ionic cordova prepare ios
   ```

1. **设置[包 ID](/reference/glossary.md#package-id)。**

   对于 Capacitor，打开 `capacitor.config.json` 文件并修改 `appId` 属性。

   对于 Cordova，打开 `config.xml` 文件并修改根元素 `<widget>` 的 `id` 属性。有关更多信息，请参阅 [Cordova 文档](https://cordova.apache.org/docs/en/latest/config_ref/#widget)。

1. **在 <b>Xcode</b> 中打开项目。**

   对于 Capacitor，运行以下命令在 Xcode 中打开应用：

   ```shell
   $ ionic capacitor open ios
   ```

   对于 Cordova，打开 Xcode。使用 **File** &raquo; **Open** 并找到应用。打开应用的 `platforms/ios` 目录。

1. **在 <b>Project navigator</b> 中，选择项目根目录以打开项目编辑器。在 **Identity** 部分，验证之前设置的包 ID 与 Bundle Identifier 匹配。**

   ![Xcode 显示 iOS 应用的 Identity 部分，包含 Display Name、Bundle Identifier、Version 和 Build 字段。](/img/running/ios-xcode-identity-setup.png 'Xcode Identity 部分')

1. **在同一项目编辑器的 <b>Signing</b> 部分，确保启用 <b>Automatically manage signing</b>。** 然后，选择一个 Development Team。给定 Development Team 后，Xcode 将尝试自动准备配置文件（provisioning）和签名。

   ![Xcode 显示 Signing 部分，已启用 'Automatically manage signing' 并选择了 Development Team。](/img/running/ios-xcode-signing-setup.png 'Xcode Signing 部分')

## 使用 Xcode 运行

在此工作流程中，Xcode 可以自动修复可能发生的常见编译和签名问题。

1. **开发 Ionic 应用并同步到原生项目。**

   每次有意义的更改后，Ionic 应用必须先构建为 Web 资源，更改才能出现在 iOS 模拟器和设备上。然后，Web 资源必须复制到原生项目中。幸运的是，这个过程通过一个 Ionic CLI 命令就变得很简单。

   对于 Capacitor，运行以下命令：

   ```shell
   $ ionic capacitor copy ios
   $ ionic capacitor update
   ```

   对于 Cordova，运行以下命令：

   ```shell
   $ ionic cordova prepare ios
   ```

1. **在 Xcode 中，选择目标模拟器或设备，然后点击播放按钮。**

   ![Xcode 工具栏显示播放按钮和 iPhone 模拟器的活动方案。](/img/running/ios-xcode-play-button-area.png 'Xcode 播放按钮和活动方案')

## 使用 Ionic CLI 运行

Ionic CLI 可以通过单个命令构建、复制和部署 Ionic 应用到 iOS 模拟器和设备。它还可以启动一个开发服务器（类似于 `ionic serve` 中使用的服务器），以提供[实时重载](../reference/glossary.md#livereload)功能。

使用实时重载，对应用源文件的更改会触发 Web 资源的重新构建，并且更改会立即反映在模拟器或设备上，无需重新部署。

:::warning
对于 iOS 设备，设备和计算机需要连接到同一 Wi-Fi 网络。还需要一个开发服务器的外部 URL，以便设备可以连接到它。使用 `--external`（或 `--host=0.0.0.0`）绑定到外部地址。
:::

### Capacitor 的实时重载

Capacitor 目前还没有构建原生项目的方法。它依赖 Xcode 来构建和部署应用二进制文件。但是，Ionic CLI 可以启动一个实时重载服务器，并通过单个命令配置 Capacitor 使用它。

运行以下命令，然后在 Xcode 中选择目标模拟器或设备并点击播放按钮：

```shell
ionic capacitor run ios -l --external
```

### Cordova 的实时重载

Cordova 可以编程式地构建和部署原生项目。

要启动实时重载服务器、构建和部署应用，请运行以下命令：

```shell
ionic cordova run ios -l --external
```

## 调试 iOS 应用

在 iOS 设备或模拟器上运行应用后，可以在 Safari 中进行调试。

### 使用 Safari Web Inspector

Safari 为 iOS 模拟器和设备提供 Web Inspector 支持。打开 **Develop** 菜单，选择模拟器或设备，然后选择 Ionic App 打开 Web Inspector。

:::note
如果 **Develop** 菜单被隐藏，请在 **Safari** &raquo; **Preferences** &raquo; **Advanced** &raquo; **Show Develop menu in menu bar** 中启用它。

如果应用没有列出，可能需要在设备的 **Settings** &raquo; **Safari** &raquo; **Advanced** &raquo; **Web Inspector** 中启用 Web Inspector。
:::

![Safari Web Inspector 窗口显示用于 iOS 应用性能分析的 Timelines 选项卡。](/img/running/ios-safari-web-inspector-timelines.png 'Safari Web Inspector Timelines')

### 查看原生日志

如果使用 Xcode 运行，原生日志可以在 Xcode 的 **Console** 中找到。

:::note
如果 **Console** 被隐藏，请在 **View** &raquo; **Debug Area** &raquo; **Activate Console** 中启用它。
:::

![Xcode Console 输出显示在模拟器上运行的 iOS 应用的日志。](/img/running/ios-xcode-console.png 'Xcode Console 日志')
