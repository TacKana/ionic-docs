---
title: 部署到 iOS 和 Android
sidebar_label: 移动端部署
---

<head>
  <title>为 Angular 应用添加移动端支持 | Ionic Capacitor 相机功能</title>
  <meta
    name="description"
    content="通过 Capacitor 配置，将 Ionic Framework 应用部署到 iOS 和 Android 平台非常简单。阅读我们的 Ionic 文档了解更多部署信息。"
  />
</head>

由于我们在项目创建之初就添加了 Capacitor，现在只需几个步骤就能让照片墙应用在设备上运行！

## Capacitor 配置

Capacitor 是 Ionic 官方的应用运行时，可以轻松将 Web 应用部署到 iOS、Android 等原生平台。如果你以前使用过 Cordova，建议阅读[这里](https://capacitorjs.com/docs/cordova#differences-between-capacitor-and-cordova)了解更多两者的区别。

如果终端仍在运行 `ionic serve`，请先停止。然后重新构建 Ionic 项目，修复构建过程中报告的任何错误：

```shell
ionic build
```

接下来，创建 iOS 和 Android 项目：

```shell
ionic cap add ios
ionic cap add android
```

项目根目录下会生成 android 和 ios 文件夹。这些是完全独立的原生项目，应视为 Ionic 应用的一部分（即需要纳入版本控制，使用原生开发工具进行编辑等）。

每次执行构建（如 `ionic build`）更新 web 目录（默认：`www`）后，都需要将这些更改复制到原生项目中：

```shell
ionic cap copy
```

注意：对代码的原生部分进行更新（例如添加新插件）后，请使用 `sync` 命令：

```shell
ionic cap sync
```

## iOS 部署

:::important
构建 iOS 应用需要 Mac 电脑。
:::

Capacitor iOS 应用通过 Xcode（苹果的 iOS/Mac IDE）进行配置和管理，依赖项由 [CocoaPods](https://cocoapods.org/) 管理。在 iOS 设备上运行此应用之前，需要完成几个步骤。

首先运行 Capacitor 的 `open` 命令，在 Xcode 中打开原生 iOS 项目：

```shell
ionic cap open ios
```

为了使某些原生插件正常工作，必须配置用户权限。在我们的照片墙应用中，这包括相机插件：当首次调用 `Camera.getPhoto()` 后，iOS 会自动显示一个模态对话框，提示用户允许应用使用相机。驱动此功能的权限标签为“隐私 - 相机使用说明”。要设置此权限，需要修改 `Info.plist` 文件（[更多详情](https://capacitorjs.com/docs/ios/configuration)）。点击“Info”，然后展开“Custom iOS Target Properties”即可访问。

![Xcode 中的 Info.plist 文件，显示了为相机访问添加的 NSCameraUsageDescription 键。](/img/guides/first-app-cap-ng/xcode-info-plist.png 'Xcode Info.plist 配置')

`Info.plist` 中的每个设置都有底层参数名和高级名称。默认情况下，属性列表编辑器显示高级名称，但切换显示原始底层名称通常很有用。在属性列表编辑器中右键单击任意位置，然后切换“Raw Keys/Values”即可。

添加 `NSCameraUsageDescription` 键，并将其值设置为描述应用需要使用相机的原因，例如“用于拍摄照片”。当权限提示打开时，该值字段会显示给应用用户。

按照相同流程添加相机插件所需的其他两个键：`NSPhotoLibraryAddUsageDescription` 和 `NSPhotoLibraryUsageDescription`。

接下来，点击左侧项目导航器中的 `App`，然后在 `Signing & Capabilities` 部分选择你的开发团队。

![Xcode 界面显示 iOS 应用项目的“签名与能力”选项卡。](/img/guides/first-app-cap-ng/xcode-signing.png 'Xcode 签名与能力')

设置好权限并选择开发团队后，我们就可以在真实设备上测试应用了！将 iOS 设备连接到 Mac 电脑，选择该设备（对我来说是 `App -> Matthew’s iPhone`），然后点击“Build”按钮在设备上构建、安装并启动应用：

![Xcode 工具栏高亮显示用于编译和运行 iOS 应用的 Build 按钮。](/img/guides/first-app-cap-ng/xcode-build-button.png 'Xcode 构建按钮')

点击照片墙标签页上的相机按钮后，将显示权限提示。点击“确定”，然后使用相机拍照。之后照片就会显示在应用中！

![两部 iPhone 并排显示，一部显示相机权限提示，另一部显示应用拍摄的照片。](/img/guides/first-app-cap-ng/ios-permissions-photo.png 'iOS 相机权限提示和拍照结果')

## Android 部署

Capacitor Android 应用通过 Android Studio 进行配置和管理。在 Android 设备上运行此应用之前，需要完成几个步骤。

首先运行 Capacitor 的 `open` 命令，在 Android Studio 中打开原生 Android 项目：

```shell
ionic cap open android
```

与 iOS 类似，我们必须启用正确的权限才能使用相机。在 `AndroidManifest.xml` 文件中配置这些权限。Android Studio 可能会自动打开此文件，但如果未打开，请在 `android/app/src/main/` 目录下找到它。

![Android Studio 编辑器显示包含相机权限的 AndroidManifest.xml 文件。](/img/guides/first-app-cap-ng/android-manifest.png 'Android 清单权限')

滚动到 `Permissions` 部分，确保包含以下条目：

```xml
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
```

保存文件。设置好权限后，我们就可以在真实设备上测试应用了！将 Android 设备连接到电脑。在 Android Studio 中点击“Run”按钮，选择已连接的 Android 设备，然后点击“确定”在设备上构建、安装并启动应用。

![Android Studio 界面，箭头指向运行按钮和已连接的设备。](/img/guides/first-app-cap-ng/android-device.png 'Android Studio 运行配置')

再次点击照片墙标签页上的相机按钮时，应该会显示权限提示。点击“确定”，然后使用相机拍照。之后照片应该会出现在应用中。

![两部 Android 手机并排显示，一部显示相机权限提示，另一部显示应用拍摄的照片。](/img/guides/first-app-cap-ng/android-permissions-photo.png 'Android 权限和照片拍摄')

我们的照片墙应用现已成功部署到 Android 和 iOS 设备上。🎉

在本教程的最后部分，我们将使用 Ionic CLI 的实时重载功能快速实现照片删除功能——从而完成照片墙功能的全部开发。