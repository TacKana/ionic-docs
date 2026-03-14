---
title: 部署到 iOS 和 Android
sidebar_label: 移动端部署
---

<head>
  <title>使用 React 添加移动端支持 | Ionic Capacitor 相机功能</title>
  <meta
    name="description"
    content="Capacitor 是 Ionic 官方的应用运行时，用于将 Web 应用部署到 iOS、Android 等原生平台。本文介绍如何构建和部署 Ionic React 应用。"
  />
</head>

由于我们在项目创建时就已添加了 Capacitor，只需完成几个步骤就能让照片墙应用运行在设备上！

## Capacitor 设置

Capacitor 是 Ionic 官方的应用运行时，可以轻松将 Web 应用部署到 iOS、Android 等原生平台。如果你过去使用过 Cordova，建议阅读[这里](https://capacitorjs.com/docs/cordova#differences-between-capacitor-and-cordova)了解两者的区别。

如果终端仍在运行 `ionic serve`，请先停止。重新构建 Ionic 项目，修复所有报告的错误：

```shell
ionic build
```

接着创建 iOS 和 Android 项目：

```shell
ionic cap add ios
ionic cap add android
```

项目根目录会生成 android 和 ios 文件夹。这些是完全独立的原生项目，应视为 Ionic 应用的一部分（即纳入版本控制、使用原生工具编辑等）。

每次执行构建命令（如 `ionic build`）更新 web 目录（默认：`build`）后，都需要将这些更改复制到原生项目中：

```shell
ionic cap copy
```

注意：更新代码的原生部分（例如添加新插件）后，请使用 `sync` 命令：

```shell
ionic cap sync
```

# iOS 部署

:::important
构建 iOS 应用需要 Mac 电脑。
:::

Capacitor iOS 应用通过 Xcode（Apple 的 iOS/Mac IDE）进行配置和管理，依赖项由 [CocoaPods](https://cocoapods.org/) 管理。在 iOS 设备上运行应用前，需要完成几个步骤。

首先运行 Capacitor 的 `open` 命令，在 Xcode 中打开原生 iOS 项目：

```shell
ionic cap open ios
```

某些原生插件需要配置用户权限。在我们的照片墙应用中，这包括相机插件：iOS 会在首次调用 `Camera.getPhoto()` 后自动显示模态对话框，提示用户允许应用使用相机。驱动此功能的权限标签是 "Privacy - Camera Usage"。要设置它，必须修改 `Info.plist` 文件（[详见此处](https://capacitorjs.com/docs/ios/configuration)）。点击 "Info"，然后展开 "Custom iOS Target Properties" 进行访问。

![Xcode 中的 Info.plist 文件，显示为相机访问添加的 NSCameraUsageDescription 键。](/img/guides/first-app-cap-ng/xcode-info-plist.png 'Xcode Info.plist 配置')

`Info.plist` 中的每个设置都有底层参数名和高级名称。默认情况下，属性列表编辑器显示高级名称，但切换显示原始底层名称通常很有用。右键点击属性列表编辑器任意位置，切换 "Raw Keys/Values" 即可。

添加 `NSCameraUsageDescription` 键，并将值设置为描述应用需要使用相机的原因，例如 "用于拍摄照片"。权限提示出现时，该值字段会显示给应用用户。

按照相同流程添加相机插件所需的另外两个键：`NSPhotoLibraryAddUsageDescription` 和 `NSPhotoLibraryUsageDescription`。

接着，点击左侧项目导航器中的 `App`，然后在 `Signing & Capabilities` 部分选择你的开发团队。

![Xcode 界面显示 iOS 应用项目的签名与能力选项卡。](/img/guides/first-app-cap-ng/xcode-signing.png 'Xcode 签名与能力')

权限设置完成且开发团队选定后，就可以在真机上测试应用了！将 iOS 设备连接到 Mac 电脑，选择设备（我的是 `App -> Matthew’s iPhone`），然后点击 "Build" 按钮在设备上构建、安装并启动应用：

![Xcode 工具栏高亮显示用于编译和运行 iOS 应用的 Build 按钮。](/img/guides/first-app-cap-ng/xcode-build-button.png 'Xcode 构建按钮')

点击照片墙标签页的相机按钮后，权限提示将显示。点击确定，然后用相机拍摄照片。之后，照片就会显示在应用中！

![并排的两部 iPhone，一部显示相机权限提示，另一部显示应用拍摄的照片。](/img/guides/first-app-cap-ng/ios-permissions-photo.png 'iOS 相机权限提示与拍摄结果')

## Android 部署

Capacitor Android 应用通过 Android Studio 进行配置和管理。在 Android 设备上运行应用前，需要完成几个步骤。

首先运行 Capacitor 的 `open` 命令，在 Android Studio 中打开原生 Android 项目：

```shell
ionic cap open android
```

与 iOS 类似，我们必须启用正确的权限才能使用相机。在 `AndroidManifest.xml` 文件中配置这些权限。Android Studio 可能会自动打开此文件，如果没有，请在 `android/app/src/main/` 目录下找到它。

![Android Studio 编辑器显示包含相机权限的 AndroidManifest.xml 文件。](/img/guides/first-app-cap-ng/android-manifest.png 'Android 清单权限')

滚动到 `Permissions` 部分，确保包含以下条目：

```xml
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
```

保存文件。权限设置完成后，就可以在真机上测试应用了！将 Android 设备连接到电脑。在 Android Studio 中点击 "Run" 按钮，选择已连接的 Android 设备，然后点击确定在设备上构建、安装并启动应用。

![Android Studio 界面，箭头指向运行按钮和已连接的设备。](/img/guides/first-app-cap-ng/android-device.png 'Android Studio 运行配置')

再次点击照片墙标签页的相机按钮时，应显示权限提示。点击确定，然后用相机拍摄照片。之后，照片应出现在应用中。

![并排的两部 Android 手机，一部显示相机权限提示，另一部显示应用拍摄的照片。](/img/guides/first-app-cap-ng/android-permissions-photo.png 'Android 权限与照片拍摄')

我们的照片墙应用已成功部署到 Android 和 iOS 设备。🎉

在本教程的最后部分，我们将使用 Ionic CLI 的实时重载功能快速实现照片删除功能——从而完善我们的照片墙应用特性。