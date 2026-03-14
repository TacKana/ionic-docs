---
title: 部署到 iOS 和 Android
sidebar_label: 移动端部署
---

<head>
  <title>部署到 iOS 和 Android 应用 - Ionic 的 Capacitor 设置</title>
  <meta
    name="description"
    content="通过为 Ionic Framework 应用设置 Capacitor，可以轻松部署到 iOS 和 Android。在我们的 Ionic 文档中了解更多关于部署的信息。"
  />
</head>

由于我们在项目创建之初就已经添加了 Capacitor，现在只需要几个步骤就能让照片库应用运行在我们的设备上了！记住，你可以在这里找到这个应用的完整源代码。

## Capacitor 设置

Capacitor 是 Ionic 官方的应用运行时，可以轻松将 Web 应用部署到 iOS、Android 等原生平台。如果你过去使用过 Cordova，建议阅读这里了解它们之间的区别。

如果终端中仍在运行 `ionic serve`，请先停止它。然后完成 Ionic 项目的新构建，修复任何报告的错误：

```shell
ionic build
```

接下来，创建 iOS 和 Android 项目：

```shell
$ ionic cap add ios
$ ionic cap add android
```

项目根目录下会创建 android 和 ios 两个文件夹。这些是完全独立的原生项目，应被视为 Ionic 应用的一部分（即纳入版本控制、使用原生工具进行编辑等）。

每次执行构建（例如 `ionic build`）并更新了 web 目录（默认：`www`）后，都需要将这些更改复制到原生项目中：

```shell
ionic cap copy
```

注意：在对代码的原生部分进行更新（例如添加新插件）后，请使用 `sync` 命令：

```shell
ionic cap sync
```

## iOS 部署

:::note
要构建 iOS 应用，你需要一台 Mac 电脑。
:::

Capacitor iOS 应用通过 Xcode（Apple 的 iOS/Mac IDE）进行配置和管理，依赖项由 CocoaPods 管理。在 iOS 设备上运行此应用之前，需要完成几个步骤。

首先，运行 Capacitor 的 `open` 命令，这将在 Xcode 中打开原生 iOS 项目：

```shell
ionic cap open ios
```

为了使某些原生插件正常工作，必须配置用户权限。在我们的照片库应用中，这包括 Camera 插件：iOS 在首次调用 `Camera.getPhoto()` 后会自动显示一个模态对话框，提示用户允许应用使用摄像头。驱动此功能的权限标记为 "Privacy - Camera Usage"。要设置它，必须修改 `Info.plist` 文件。要访问它，点击 "Info"，然后展开 "Custom iOS Target Properties"。

![Xcode 中的 Info.plist 文件显示为摄像头访问添加的 NSCameraUsageDescription 键。](/img/guides/first-app-cap-ng/xcode-info-plist.png 'Xcode Info.plist 配置')

`Info.plist` 中的每个设置都有一个底层参数名和一个高层名称。默认情况下，属性列表编辑器显示高层名称，但切换到显示原始的底层名称通常很有用。要做到这一点，在属性列表编辑器中的任意位置右键点击并切换 "Raw Keys/Values"。

添加 `NSCameraUsageDescription` 键，并将值设置为描述应用为何需要使用摄像头的文字，例如 "用于拍照"。当权限提示打开时，值字段会显示给应用用户。

按照相同的过程添加 Camera 插件所需的其他两个键：`NSPhotoLibraryAddUsageDescription` 和 `NSPhotoLibraryUsageDescription`。

接下来，点击左侧项目导航器中的 `App`，然后在 `Signing & Capabilities` 部分中选择你的开发团队。

![Xcode 界面显示 iOS 应用项目的签名与能力选项卡。](/img/guides/first-app-cap-ng/xcode-signing.png 'Xcode 签名与能力')

设置好权限并选择开发团队后，我们就可以在真实设备上试用应用了！将 iOS 设备连接到你的 Mac 电脑，选择它（对我来说是 `App -> Matthew’s iPhone`），然后点击 "Build" 按钮在你的设备上构建、安装并启动应用：

![Xcode 工具栏高亮显示用于编译和运行 iOS 应用的 Build 按钮。](/img/guides/first-app-cap-ng/xcode-build-button.png 'Xcode 构建按钮')

点击照片库标签页上的相机按钮后，权限提示将显示。点击 OK，然后用相机拍照。之后，照片就会显示在应用中！

![两部 iPhone 并排展示，一部显示摄像头权限提示，另一部显示应用拍摄的照片。](/img/guides/first-app-cap-ng/ios-permissions-photo.png 'iOS 摄像头权限提示与拍照结果')

## Android 部署

Capacitor Android 应用通过 Android Studio 进行配置和管理。在 Android 设备上运行此应用之前，需要完成几个步骤。

首先，运行 Capacitor 的 `open` 命令，这将在 Android Studio 中打开原生 Android 项目：

```shell
ionic cap open android
```

与 iOS 类似，我们必须启用正确的权限才能使用摄像头。在 `AndroidManifest.xml` 文件中配置这些权限。Android Studio 可能会自动打开这个文件，但如果没有，你可以在 `android/app/src/main/` 下找到它。

![Android Studio 编辑器显示包含摄像头权限的 AndroidManifest.xml 文件。](/img/guides/first-app-cap-ng/android-manifest.png 'Android 清单权限')

滚动到 `Permissions` 部分，确保包含以下条目：

```xml
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
```

保存文件。设置好权限后，我们就可以在真实设备上试用应用了！将 Android 设备连接到你的电脑。在 Android Studio 中，点击 "Run" 按钮，选择连接的 Android 设备，然后点击 OK 在你的设备上构建、安装并启动应用。

![Android Studio 界面，箭头指向 Run 按钮和连接的设备。](/img/guides/first-app-cap-ng/android-device.png 'Android Studio 运行配置')

再次点击照片库标签页上的相机按钮，应该会显示权限提示。点击 OK，然后用相机拍照。之后，照片应该会出现在应用中。

![两部 Android 手机并排展示，一部显示摄像头权限提示，另一部显示应用拍摄的照片。](/img/guides/first-app-cap-ng/android-permissions-photo.png 'Android 权限与拍照')

我们的照片库应用刚刚成功部署到了 Android 和 iOS 设备上。🎉

在本教程的下一部分，我们将使用 Ionic CLI 的 Live Reload 功能快速实现照片删除功能——从而完成我们的照片库特性。