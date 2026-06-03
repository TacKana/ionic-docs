---
title: 部署到 iOS 和 Android
sidebar_label: 部署移动端
---

<head>
  <title>部署到 iOS 和 Android | Ionic Capacitor Camera</title>
  <meta
    name="description"
    content="通过 Capacitor 为 Ionic Framework 应用设置，部署到 iOS 和 Android 变得简单。在我们的 Ionic 文档中了解更多关于部署的信息。"
  />
</head>

由于我们在首次创建项目时已将 Capacitor 添加到项目中，因此只需几个步骤即可将相册应用部署到我们的设备上！

## Capacitor 设置

Capacitor 是 Ionic 官方的应用运行时，使将 Web 应用部署到 iOS、Android 等原生平台变得容易。如果你以前使用过 Cordova，请考虑在[此处](https://capacitorjs.com/docs/cordova#differences-between-capacitor-and-cordova)了解更多关于差异的信息。

如果你仍在终端中运行 `ionic serve`，请取消它。完成 Ionic 项目的新构建，修复它报告的任何错误：

```shell
ionic build
```

接下来，创建 iOS 和 Android 项目：

```shell
ionic cap add ios
ionic cap add android
```

项目根目录下会创建 android 和 ios 文件夹。这些是完全独立的原生项目，应被视为 Ionic 应用的一部分（例如，将它们检入源代码控制，使用原生工具编辑等）。

每次执行构建（例如 `ionic build`）更新了 Web 目录（默认：`www`）时，都需要将这些更改复制到原生项目中：

```shell
ionic cap copy
```

注意：在更新了代码的原生部分（例如添加新插件）后，使用 `sync` 命令：

```shell
ionic cap sync
```

## iOS 部署

:::important
要构建 iOS 应用，你需要一台 Mac 电脑。
:::

Capacitor iOS 应用通过 Xcode（Apple 的 iOS/Mac IDE）进行配置和管理，依赖项由 [CocoaPods](https://cocoapods.org/) 管理。在 iOS 设备上运行此应用之前，需要完成几个步骤。

首先，运行 Capacitor 的 `open` 命令，该命令在 Xcode 中打开原生 iOS 项目：

```shell
ionic cap open ios
```

为了使某些原生插件工作，必须配置用户权限。在我们的相册应用中，这包括 Camera 插件：iOS 在首次调用 `Camera.getPhoto()` 后会直接显示一个模态对话框，提示用户允许应用使用相机。驱动此权限的标签是"Privacy - Camera Usage"。要设置它，必须修改 `Info.plist` 文件（[更多细节在此](https://capacitorjs.com/docs/ios/configuration)）。要访问它，点击"Info"，然后展开"Custom iOS Target Properties"。

![Xcode 中的 Info.plist 文件，显示为相机访问添加的 NSCameraUsageDescription 键。](/img/guides/first-app-cap-ng/xcode-info-plist.png 'Xcode Info.plist 配置')

`Info.plist` 中的每个设置都有一个低级参数名和一个高级名称。默认情况下，属性列表编辑器显示高级名称，但切换到显示原始低级名称通常很有用。要执行此操作，在属性列表编辑器中的任意位置右键单击，然后切换"Raw Keys/Values"。

添加 `NSCameraUsageDescription` 键，并将其值设置为描述应用需要使用相机原因的内容，例如"To Take Photos"。当权限提示打开时，此值字段会显示给应用用户。

按照相同的过程添加 Camera 插件所需的其他两个键：`NSPhotoLibraryAddUsageDescription` 和 `NSPhotoLibraryUsageDescription`。

接下来，点击左侧项目导航器中的 `App`，然后在 `Signing & Capabilities` 部分中，选择你的开发团队。

![Xcode 界面显示 iOS 应用项目的 Signing and Capabilities 选项卡。](/img/guides/first-app-cap-ng/xcode-signing.png 'Xcode Signing & Capabilities')

权限设置完毕并选择了开发团队后，我们就可以在真实设备上试用应用了！将 iOS 设备连接到 Mac 电脑，选择它（对我来说是 `App -> Matthew's iPhone`），然后点击"Build"按钮来构建、安装并在设备上启动应用：

![Xcode 工具栏突出显示用于编译和运行 iOS 应用的 Build 按钮。](/img/guides/first-app-cap-ng/xcode-build-button.png 'Xcode Build 按钮')

点击相册标签上的相机按钮后，权限提示将显示。点击 OK，然后用相机拍照。之后，照片就会显示在应用中！

![两部 iPhone 并排显示，一部显示相机权限提示，另一部显示应用拍摄的照片。](/img/guides/first-app-cap-ng/ios-permissions-photo.png 'iOS 相机权限提示和照片结果')

## Android 部署

Capacitor Android 应用通过 Android Studio 进行配置和管理。在 Android 设备上运行此应用之前，需要完成几个步骤。

首先，运行 Capacitor 的 `open` 命令，该命令在 Android Studio 中打开原生 Android 项目：

```shell
ionic cap open android
```

与 iOS 类似，我们必须启用正确的权限才能使用相机。在 `AndroidManifest.xml` 文件中进行配置。Android Studio 可能会自动打开此文件，但如果未打开，请在 `android/app/src/main/` 下找到它。

![Android Studio 编辑器显示包含相机权限的 AndroidManifest.xml 文件。](/img/guides/first-app-cap-ng/android-manifest.png 'Android Manifest 权限')

滚动到 `Permissions` 部分，确保包含以下条目：

```xml
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
```

保存文件。权限设置完毕后，我们就可以在真实设备上试用应用了！将 Android 设备连接到电脑。在 Android Studio 中，点击"Run"按钮，选择已连接的 Android 设备，然后点击 OK 来构建、安装并在设备上启动应用。

![Android Studio 界面，箭头指向 Run 按钮和连接的设备。](/img/guides/first-app-cap-ng/android-device.png 'Android Studio 运行配置')

再次点击相册标签上的相机按钮，应显示权限提示。点击 OK，然后用相机拍照。之后，照片应出现在应用中。

![两部 Android 手机并排显示，一部显示相机权限提示，另一部显示应用拍摄的照片。](/img/guides/first-app-cap-ng/android-permissions-photo.png 'Android 权限和照片拍摄')

我们的相册应用现已部署到 Android 和 iOS 设备上。

在本教程的最后一部分，我们将使用 Ionic CLI 的 Live Reload 功能快速实现照片删除——从而完成我们的相册功能。
