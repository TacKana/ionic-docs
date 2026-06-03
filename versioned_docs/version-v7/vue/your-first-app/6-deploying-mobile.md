---
title: 部署到 iOS 和 Android
sidebar_label: 部署移动端
---

<head>
  <title>使用 Vue 添加移动端支持 | Ionic Capacitor 相机</title>
  <meta
    name="description"
    content="通过 Capacitor 为 Ionic Framework 应用进行设置，部署到 iOS 和 Android 变得非常简单。阅读我们的 Ionic 文档了解更多关于部署的信息。"
  />
</head>

由于我们在创建项目时就添加了 Capacitor，因此只需几个步骤就可以将相册应用部署到我们的设备上！

## Capacitor 设置

Capacitor 是 Ionic 官方的应用运行时，可以轻松将 Web 应用部署到 iOS、Android 等原生平台。如果你以前使用过 Cordova，可以[在此](https://capacitorjs.com/docs/cordova#differences-between-capacitor-and-cordova)阅读更多关于两者差异的信息。

如果你仍在终端中运行 `ionic serve`，请取消它。完成 Ionic 项目的全新构建，修复它报告的任何错误：

```shell
ionic build
```

接下来，创建 iOS 和 Android 项目：

```shell
ionic cap add ios
ionic cap add android
```

在项目根目录下会创建 android 和 ios 文件夹。这些是完全独立的原生项目，应被视为你的 Ionic 应用的一部分（即，将它们纳入版本控制，使用它们的原生工具进行编辑等）。

每次执行构建（例如 `ionic build`）更新了 Web 目录（默认：`build`）后，都需要将这些更改复制到你的原生项目中：

```shell
ionic cap copy
```

注意：在对原生代码部分进行更新（例如添加新插件）后，请使用 `sync` 命令：

```shell
ionic cap sync
```

## iOS 部署

:::important
要构建 iOS 应用，你需要一台 Mac 电脑。
:::

Capacitor iOS 应用通过 Xcode（Apple 的 iOS/Mac IDE）进行配置和管理，依赖项由 [CocoaPods](https://cocoapods.org/) 管理。在 iOS 设备上运行此应用之前，需要完成几个步骤。

首先，运行 Capacitor 的 `open` 命令，它将在 Xcode 中打开原生 iOS 项目：

```shell
ionic cap open ios
```

为了使某些原生插件正常工作，必须配置用户权限。在我们的相册应用中，这包括 Camera 插件：iOS 会在首次调用 `Camera.getPhoto()` 后自动显示一个模态对话框，提示用户允许应用使用相机。驱动此功能的是"Privacy - Camera Usage"权限。要设置它，必须修改 `Info.plist` 文件（[更多详情请见此处](https://capacitorjs.com/docs/ios/configuration)）。要访问它，请点击"Info"，然后展开"Custom iOS Target Properties"。

![Xcode 中 Info.plist 文件显示添加了用于相机访问的 NSCameraUsageDescription 键。](/img/guides/first-app-cap-ng/xcode-info-plist.png 'Xcode Info.plist 配置')

`Info.plist` 中的每个设置都有一个低级参数名和一个高级名称。默认情况下，属性列表编辑器显示高级名称，但切换到显示原始低级名称通常很有用。为此，在属性列表编辑器中任意位置右键单击，然后切换"Raw Keys/Values"。

添加 `NSCameraUsageDescription` 键，并将值设置为描述应用需要使用相机的原因，例如"To Take Photos"。当权限提示打开时，该值字段会显示给应用用户。

按照相同的过程添加 Camera 插件所需的其他两个键：`NSPhotoLibraryAddUsageDescription` 和 `NSPhotoLibraryUsageDescription`。

接下来，点击左侧项目导航器中的 `App`，然后在 `Signing & Capabilities` 部分选择你的开发团队。

![Xcode 界面显示 iOS 应用项目的 Signing 和 Capabilities 标签。](/img/guides/first-app-cap-ng/xcode-signing.png 'Xcode Signing & Capabilities')

权限设置完毕并选择了开发团队后，我们就可以在真实设备上尝试该应用了！将 iOS 设备连接到你的 Mac 电脑，选择它（对我来说是 `App -> Matthew's iPhone`），然后点击"Build"按钮来构建、安装并在你的设备上启动应用：

![Xcode 工具栏突出显示用于编译和运行 iOS 应用的 Build 按钮。](/img/guides/first-app-cap-ng/xcode-build-button.png 'Xcode Build 按钮')

点击相册标签页上的相机按钮后，会显示权限提示。点击 OK，然后用相机拍照。之后，照片就会显示在应用中！

![两台 iPhone 并排显示，一台显示相机权限提示，另一台显示使用应用拍摄的照片。](/img/guides/first-app-cap-ng/ios-permissions-photo.png 'iOS 相机权限提示和照片结果')

## Android 部署

Capacitor Android 应用通过 Android Studio 进行配置和管理。在 Android 设备上运行此应用之前，需要完成几个步骤。

首先，运行 Capacitor 的 `open` 命令，它将在 Android Studio 中打开原生 Android 项目：

```shell
ionic cap open android
```

与 iOS 类似，我们必须启用正确的权限才能使用相机。在 `AndroidManifest.xml` 文件中配置这些权限。Android Studio 可能会自动打开此文件，但如果没有，请在 `android/app/src/main/` 下找到它。

![Android Studio 编辑器显示包含相机权限的 AndroidManifest.xml 文件。](/img/guides/first-app-cap-ng/android-manifest.png 'Android Manifest 权限')

滚动到 `Permissions` 部分，确保包含以下条目：

```xml
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
```

保存文件。权限设置完毕后，我们就可以在真实设备上尝试该应用了！将 Android 设备连接到你的电脑。在 Android Studio 中，点击"Run"按钮，选择已连接的 Android 设备，然后点击 OK 来构建、安装并在你的设备上启动应用。

![Android Studio 界面，箭头指向 Run 按钮和连接的设备。](/img/guides/first-app-cap-ng/android-device.png 'Android Studio Run 配置')

再次点击相册标签页上的相机按钮，应显示权限提示。点击 OK，然后用相机拍照。之后，照片应显示在应用中。

![两台 Android 手机并排显示，一台显示相机权限提示，另一台显示使用应用拍摄的照片。](/img/guides/first-app-cap-ng/android-permissions-photo.png 'Android 权限和照片拍摄')

我们的相册应用已成功部署到 Android 和 iOS 设备上。

在本教程的最后部分，我们将使用 Ionic CLI 的 Live Reload 功能来快速实现照片删除——从而完成我们的相册功能。
