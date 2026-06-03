---
sidebar_label: iOS 开发
skipIntros: true
---

# iOS 开发

本指南涵盖如何使用 [Capacitor](../reference/glossary.md#capacitor) 或 [Cordova](../reference/glossary.md#cordova) 在 iOS 模拟器和设备上运行和调试 Ionic 应用。iOS 应用只能在安装了 Xcode 的 macOS 上开发。

有两种在 iOS 上运行 Ionic 应用的工作流程：

- [使用 Xcode 运行](#使用-xcode-运行)
- [使用 Ionic CLI 运行](#使用-ionic-cli-运行)

Xcode 方式通常更稳定，但 Ionic CLI 方式提供[实时重载](../reference/glossary.md#livereload)功能。

## Xcode 设置

[Xcode](https://developer.apple.com/xcode/) 是用于创建原生 iOS 应用的 IDE。它包含 iOS SDK 和 Xcode 命令行工具。Xcode 可以使用 Apple 账户[免费下载](https://developer.apple.com/download/)，也可以通过 App Store 安装。

安装 Xcode 后，确保已选择使用命令行工具：

```shell
xcode-select --install
```

### 设置开发团队

所有 iOS 应用都必须进行代码签名，即使是开发版本也不例外。幸运的是，Xcode 通过自动代码签名使这变得容易。唯一的先决条件是一个 Apple ID。

打开 Xcode 并导航到 **Xcode** &raquo; **Preferences** &raquo; **Accounts**。如果没有列出 Apple ID，请添加一个。登录后，Apple ID 的团队列表中将出现一个 Personal Team。

![Xcode 偏好设置显示 Accounts 部分，并选中了一个 Apple ID。](/img/installation/ios-xcode-accounts.png 'Xcode 偏好设置 Accounts')

### 创建 iOS 模拟器

iOS 模拟器可以在 Mac 上模拟 iOS 设备。以下文档是快速设置 iOS 模拟器的方法。更多信息，请参见 [Apple 的文档](https://developer.apple.com/library/content/documentation/IDEs/Conceptual/simulator_help_topics/Chapter/Chapter.html)。

打开 Xcode 并导航到 **Window** &raquo; **Devices and Simulators**。如果尚未创建 **iPhone 11** 模拟器，请创建一个。

![Xcode 窗口显示 Devices and Simulators 设置，并选中了 iPhone X 模拟器。](/img/installation/ios-xcode-simulators-setup.png 'Xcode Devices and Simulators 设置')

## Cordova 设置

Cordova 需要额外设置以支持程序化构建。对于 Capacitor，本节不是必需的。

### ios-sim 和 ios-deploy

[`ios-sim`](https://github.com/ios-control/ios-sim) 和 [`ios-deploy`](https://github.com/ios-control/ios-deploy) 是在开发过程中将应用部署到 iOS 模拟器和 iOS 设备的工具。它们可以通过 [npm](../reference/glossary.md#npm) 全局安装。

```shell
$ npm install -g ios-sim
$ brew install ios-deploy
```

## 项目设置

在将应用部署到 iOS 模拟器和设备之前，必须先配置原生项目。

1. <strong>生成原生项目（如果尚未存在）。</strong>

   对于 Capacitor，运行以下命令：

   ```shell
   $ ionic capacitor add ios
   ```

   对于 Cordova，运行以下命令：

   ```shell
   $ ionic cordova prepare ios
   ```

1. <strong>设置[包标识符](../reference/glossary.md#package-id)。</strong>

   对于 Capacitor，打开 `capacitor.config.json` 文件并修改 `appId` 属性。

   对于 Cordova，打开 `config.xml` 文件并修改根元素 `<widget>` 的 `id` 属性。更多信息请参见 [Cordova 文档](https://cordova.apache.org/docs/en/latest/config_ref/#widget)。

<!-- prettier-ignore -->
1. <strong>在 <b>Xcode</b> 中打开项目。</strong>

   对于 Capacitor，运行以下命令在 Xcode 中打开应用：

   ```shell
   $ ionic capacitor open ios
   ```

   对于 Cordova，打开 Xcode。使用 **File** &raquo; **Open** 并找到应用。打开应用的 `platforms/ios` 目录。

<!-- prettier-ignore -->
1. <strong>在<b>项目导航器</b>中，选择项目根目录以打开项目编辑器。在 **Identity** 部分，验证之前设置的 Package ID 与 Bundle Identifier 匹配。</strong>

   ![Xcode 显示 iOS 应用的 Identity 部分，包含 Display Name、Bundle Identifier、Version 和 Build 字段。](/img/running/ios-xcode-identity-setup.png "Xcode Identity 部分")

<!-- prettier-ignore -->
1. <strong>在同一项目编辑器的 <b>Signing</b> 部分，确保启用 <b>Automatically manage signing</b>。</strong> 然后，选择一个 Development Team。给定一个 Development Team，Xcode 将尝试自动准备配置文件和签名。

   ![Xcode 显示 Signing 部分，启用了"Automatically manage signing"并选择了 Development Team。](/img/running/ios-xcode-signing-setup.png "Xcode Signing 部分")

## 使用 Xcode 运行

在此工作流程中，Xcode 可以自动修复可能出现的常见编译和签名问题。

1. <strong>开发 Ionic 应用并将其同步到原生项目。</strong>

   每次有意义的更改后，Ionic 应用必须构建为 Web 资源，然后更改才能出现在 iOS 模拟器和设备上。然后，Web 资源必须复制到原生项目中。幸运的是，通过一个简单的 Ionic CLI 命令，这个过程就变得容易了。

   对于 Capacitor，运行以下命令：

   ```shell
   $ ionic capacitor copy ios
   ```

   对于 Cordova，运行以下命令：

   ```shell
   $ ionic cordova prepare ios
   ```

1. <strong>在 Xcode 中，选择一个目标模拟器或设备，然后点击播放按钮。</strong>

   ![Xcode 工具栏显示播放按钮和 iPhone 模拟器的活动方案。](/img/running/ios-xcode-play-button-area.png 'Xcode 播放按钮和活动方案')

## 使用 Ionic CLI 运行

Ionic CLI 可以通过单个命令构建、复制和部署 Ionic 应用到 iOS 模拟器和设备。它还可以启动一个开发服务器（类似于 `ionic serve` 中使用的），提供[实时重载](../reference/glossary.md#livereload)功能。

使用实时重载，对应用源文件的更改会触发 Web 资源的重新构建，更改会立即反映在模拟器或设备上，无需重新部署。

:::warning
对于 iOS 设备，设备和电脑需要连接到同一个 Wi-Fi 网络。同时还需要开发服务器的外部 URL，以便设备可以连接到它。使用 `--external`（或 `--host=0.0.0.0`）来绑定到外部地址。
:::

### Capacitor 的实时重载

Capacitor 目前还没有构建原生项目的方式。它依赖 Xcode 来构建和部署应用二进制文件。但是，Ionic CLI 可以启动实时重载服务器，并通过单个命令配置 Capacitor 使用它。

运行以下命令，然后在 Xcode 中选择目标模拟器或设备并点击播放按钮：

```shell
ionic capacitor run ios -l --external
```

### Cordova 的实时重载

Cordova 可以程序化地构建和部署原生项目。

要启动实时重载服务器、构建和部署应用，请运行以下命令：

```shell
ionic cordova run ios -l --external
```

## 调试 iOS 应用

应用在 iOS 设备或模拟器上运行后，可以在 Safari 中进行调试。

### 使用 Safari Web Inspector

Safari 支持 iOS 模拟器和设备的 Web Inspector。打开 **Develop** 菜单，选择模拟器或设备，然后选择 Ionic App 以打开 Web Inspector。

:::note
如果 **Develop** 菜单被隐藏，请在 **Safari** &raquo; **Preferences** &raquo; **Advanced** &raquo; **Show Develop menu in menu bar** 中启用它。

如果应用未列出，可能需要在设备的 **Settings** &raquo; **Safari** &raquo; **Advanced** &raquo; **Web Inspector** 中启用 Web Inspector。
:::

![Safari Web Inspector 窗口显示用于 iOS 应用性能分析的 Timelines 选项卡。](/img/running/ios-safari-web-inspector-timelines.png 'Safari Web Inspector Timelines')

### 查看原生日志

如果使用 Xcode 运行，原生日志可以在 Xcode 的 **Console** 中找到。

:::note
如果 **Console** 被隐藏，可以在 **View** &raquo; **Debug Area** &raquo; **Activate Console** 中启用它。
:::

![Xcode Console 输出显示在模拟器上运行的 iOS 应用的日志。](/img/running/ios-xcode-console.png 'Xcode Console 日志')
