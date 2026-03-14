---
title: iOS Development
sidebar_label: Developing for iOS
skipIntros: true
---

<head>
  <title>iOS 应用开发指南：从 Xcode 设置到构建运行 iOS 应用</title>
  <meta
    name="description"
    content="Ionic iOS 开发指南涵盖如何在 iOS 模拟器和设备上构建和运行 Ionic 应用。iOS 应用只能在安装了 Xcode 的 macOS 系统上进行开发。"
  />
</head>

本指南介绍如何使用 [Capacitor](../reference/glossary.md#capacitor) 或 [Cordova](../reference/glossary.md#cordova) 在 iOS 模拟器和设备上运行及调试 Ionic 应用。iOS 应用只能在安装了 Xcode 的 macOS 系统上进行开发。

在 iOS 上运行 Ionic 应用有两种工作流程：

- [使用 Xcode 运行](#使用-xcode-运行)
- [使用 Ionic CLI 运行](#使用-ionic-cli-运行)

Xcode 方法通常更稳定，但 Ionic CLI 方法提供了[实时重载](../reference/glossary.md#livereload)功能。

## Xcode 设置

[Xcode](https://developer.apple.com/xcode/) 是创建原生 iOS 应用的集成开发环境（IDE）。它包含 iOS SDK 和 Xcode 命令行工具。使用 Apple 账户可以[免费下载](https://developer.apple.com/download/) Xcode，也可以通过 App Store 安装。

安装 Xcode 后，请确保选择使用命令行工具：

```shell
xcode-select --install
```

### 设置开发团队

所有 iOS 应用都必须进行代码签名，即使是开发版本也不例外。幸运的是，Xcode 通过自动代码签名使这一过程变得简单。唯一的先决条件是拥有一个 Apple ID。

打开 Xcode 并导航至 **Xcode** &raquo; **Preferences（偏好设置）** &raquo; **Accounts（账户）**。如果列表中没有 Apple ID，请添加一个。登录后，该 Apple ID 的团队列表中将显示一个 Personal Team（个人团队）。

![Xcode 偏好设置的账户部分显示了一个 Apple ID 和个人团队](/img/installation/ios-xcode-accounts.png 'Xcode 偏好设置账户部分')

### 创建 iOS 模拟器

iOS 模拟器可以在 Mac 上模拟 iOS 设备。以下文档是快速设置 iOS 模拟器的方法。更多信息请参阅 [Apple 官方文档](https://developer.apple.com/library/content/documentation/IDEs/Conceptual/simulator_help_topics/Chapter/Chapter.html)。

打开 Xcode 并导航至 **Window** &raquo; **Devices and Simulators（设备和模拟器）**。如果不存在 **iPhone 11** 模拟器，请创建一个。

![Xcode 窗口显示设备和模拟器部分，其中选择了 iPhone X 模拟器](/img/installation/ios-xcode-simulators-setup.png 'Xcode 设备和模拟器窗口')

## Cordova 设置

为了使 Cordova 支持编程式构建，需要进行额外的设置。如果您使用 Capacitor，则无需阅读本节内容。

### ios-sim 和 ios-deploy

[`ios-sim`](https://github.com/ios-control/ios-sim) 和 [`ios-deploy`](https://github.com/ios-control/ios-deploy) 是在开发期间将应用部署到 iOS 模拟器和 iOS 设备的实用工具。可以通过 [npm](../reference/glossary.md#npm) 全局安装它们。

```shell
$ npm install -g ios-sim
$ brew install ios-deploy
```

## 项目设置

在应用可以部署到 iOS 模拟器和设备之前，必须先配置原生项目。

1. **生成原生项目（如果尚不存在）。**

   对于 Capacitor，运行以下命令：

   ```shell
   $ ionic capacitor add ios
   ```

   对于 Cordova，运行以下命令：

   ```shell
   $ ionic cordova prepare ios
   ```

1. **设置 [Package ID（包标识符）](/reference/glossary.md#package-id)。**

   对于 Capacitor，打开 `capacitor.config.json` 文件并修改 `appId` 属性。

   对于 Cordova，打开 `config.xml` 文件并修改根元素 `<widget>` 的 `id` 属性。更多信息请参阅 [Cordova 文档](https://cordova.apache.org/docs/en/latest/config_ref/#widget)。

1. **在 <b>Xcode</b> 中打开项目。**

   对于 Capacitor，运行以下命令在 Xcode 中打开应用：

   ```shell
   $ ionic capacitor open ios
   ```

   对于 Cordova，打开 Xcode。使用 **File** &raquo; **Open** 并找到应用。打开应用的 `platforms/ios` 目录。

1. **在 <b>Project navigator（项目导航器）</b>中，选择项目根目录以打开项目编辑器。在 **Identity（标识）** 部分，验证设置的 Package ID 是否与 Bundle Identifier（包标识符）匹配。**

   ![Xcode 显示 iOS 应用的 Identity 部分，包含 Display Name、Bundle Identifier、Version 和 Build 字段](/img/running/ios-xcode-identity-setup.png 'Xcode 标识部分')

1. **在同一项目编辑器的 <b>Signing（签名）</b>部分，确保启用 <b>Automatically manage signing（自动管理签名）</b>。然后选择一个 Development Team（开发团队）。指定开发团队后，Xcode 将尝试自动准备配置文件和签名。**

   ![Xcode 显示 Signing 部分，其中“Automatically manage signing”已启用并选择了 Development Team](/img/running/ios-xcode-signing-setup.png 'Xcode 签名设置')

## 使用 Xcode 运行

在此工作流程中，Xcode 可以自动修复可能出现的常见编译和签名问题。

1. **开发 Ionic 应用并将其同步到原生项目。**

   每次有重要变更时，必须先构建 Ionic 应用生成 Web 资源，变更才能在 iOS 模拟器和设备上显示。然后必须将这些 Web 资源复制到原生项目中。幸运的是，使用单个 Ionic CLI 命令即可轻松完成此过程。

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

   ![Xcode 工具栏显示播放按钮和 iPhone 模拟器的活动方案](/img/running/ios-xcode-play-button-area.png 'Xcode 播放按钮和活动方案')

## 使用 Ionic CLI 运行

Ionic CLI 可以用一个命令构建、复制 Ionic 应用并将其部署到 iOS 模拟器和设备。它还可以启动一个开发服务器（类似于 `ionic serve` 中使用的服务器），以提供[实时重载](../reference/glossary.md#livereload)功能。

使用实时重载功能时，对应用源文件的更改会触发 Web 资源的重建，并且更改会反映在模拟器或设备上，而无需重新部署。

:::warning
对于 iOS 设备，设备和电脑需要连接到同一个 Wi-Fi 网络。还需要为开发服务器提供一个外部 URL，以便设备可以连接。使用 `--external`（或 `--host=0.0.0.0`）绑定到外部地址。
:::

### 使用 Capacitor 实现实时重载

Capacitor 目前还没有构建原生项目的方法。它依赖 Xcode 来构建和部署应用二进制文件。然而，Ionic CLI 可以启动实时重载服务器，并通过单个命令配置 Capacitor 使用该服务器。

运行以下命令，然后在 Xcode 中选择目标模拟器或设备并点击播放按钮：

```shell
ionic capacitor run ios -l --external
```

### 使用 Cordova 实现实时重载

Cordova 可以通过编程方式构建和部署原生项目。

要启动实时重载服务器、构建并部署应用，请运行以下命令：

```shell
ionic cordova run ios -l --external
```

## 调试 iOS 应用

应用在 iOS 设备或模拟器上运行后，可以在 Safari 中进行调试。

### 使用 Safari Web 检查器

Safari 支持对 iOS 模拟器和设备使用 Web 检查器。打开 **Develop（开发）** 菜单，选择模拟器或设备，然后选择 Ionic 应用以打开 Web 检查器。

:::note
如果 **Develop** 菜单被隐藏，请在 **Safari** &raquo; **Preferences（偏好设置）** &raquo; **Advanced（高级）** &raquo; **Show Develop menu in menu bar（在菜单栏中显示“开发”菜单）** 中启用它。

如果应用未列出，可能需要在设备的 **Settings（设置）** &raquo; **Safari** &raquo; **Advanced** &raquo; **Web Inspector** 中启用 Web 检查器。
:::

![Safari Web 检查器窗口显示 Timelines 选项卡，用于 iOS 应用的性能分析](/img/running/ios-safari-web-inspector-timelines.png 'Safari Web 检查器时间线')

### 查看原生日志

如果使用 Xcode 运行，可以在 Xcode **Console（控制台）** 中找到原生日志。

:::note
如果 **Console** 被隐藏，请在 **View** &raquo; **Debug Area（调试区域）** &raquo; **Activate Console（激活控制台）** 中启用它。
:::

![Xcode 控制台输出显示在模拟器上运行的 iOS 应用的日志](/img/running/ios-xcode-console.png 'Xcode 控制台日志')