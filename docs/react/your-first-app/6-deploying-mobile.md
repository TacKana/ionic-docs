---
title: 部署到 iOS 和 Android
sidebar_label: 部署移动端
---

<head>
  <title>使用 React 添加移动端支持 | Ionic Capacitor Camera</title>
  <meta
    name="description"
    content="Capacitor 是 Ionic 的官方应用运行时，用于将 Web 应用部署到 iOS、Android 等原生平台。了解如何构建和部署 Ionic React 应用。"
  />
</head>

由于我们在创建项目时就已经添加了 Capacitor，因此只需少量步骤即可将相册应用运行到我们的设备上！

## Capacitor 设置

Capacitor 是 Ionic 的官方应用运行时，可轻松将 Web 应用部署到 iOS、Android 等原生平台。如果你之前使用过 Cordova，建议阅读关于 [Capacitor 与 Cordova 之间的差异](https://capacitorjs.com/docs/cordova#differences-between-capacitor-and-cordova)的更多内容。

如果你仍在终端中运行 `ionic serve`，请先终止它。完成 Ionic 项目的全新构建，并修复报告的任何错误：

```shell
ionic build
```

接下来，创建 iOS 和 Android 项目：

```shell
ionic cap add ios
ionic cap add android
```

项目的根目录下会创建 `android` 和 `ios` 文件夹。这些是完全独立的原生项目，应视为 Ionic 应用的一部分（即，将其纳入版本控制，使用原生工具进行编辑等）。

每次执行构建（例如 `ionic build`）更新了 Web 目录（默认：`build`）后，都需要将这些更改复制到原生项目中：

```shell
ionic cap copy
```

注意：在对原生代码部分（例如添加新插件）进行更改后，请使用 `sync` 命令：

```shell
ionic cap sync
```

## iOS 部署

:::important
要构建 iOS 应用，你需要一台 Mac 电脑。
:::

Capacitor iOS 应用通过 Xcode（Apple 的 iOS/Mac IDE）进行配置和管理，依赖项由 [CocoaPods](https://cocoapods.org/) 管理。在 iOS 设备上运行此应用之前，需要完成几个步骤。

首先，运行 Capacitor 的 `open` 命令，该命令会在 Xcode 中打开原生 iOS 项目：

```shell
ionic cap open ios
```

为了使某些原生插件正常工作，必须配置用户权限。在我们的相册应用中，这包括 Camera 插件：iOS 会在首次调用 `Camera.getPhoto()` 后自动显示一个模态对话框，提示用户允许应用使用相机。驱动此权限的标签是 "Privacy - Camera Usage"。要设置它，需要修改 `Info.plist` 文件（[更多关于 iOS 配置的详细信息](https://capacitorjs.com/docs/ios/configuration)）。要访问它，请单击 "Info"，然后展开 "Custom iOS Target Properties"。

![Xcode 中的 Info.plist 文件，显示已添加用于相机访问的 NSCameraUsageDescription 键。](/img/guides/first-app-cap-ng/xcode-info-plist.png 'Xcode Info.plist 配置')

`Info.plist` 中的每个设置都有底层参数名称和高层名称。默认情况下，属性列表编辑器显示高层名称，但切换到显示原始底层名称通常很有用。为此，请在属性列表编辑器的任意位置右键单击，然后切换 "Raw Keys/Values"。

添加 `NSCameraUsageDescription` 键，并将值设置为描述应用为何需要使用相机的说明，例如 "To Take Photos"。当权限提示打开时，该值字段会显示给应用用户。

按照同样的过程添加 Camera 插件所需的其他两个键：`NSPhotoLibraryAddUsageDescription` 和 `NSPhotoLibraryUsageDescription`。

接下来，单击左侧项目导航器中的 `App`，然后在 `Signing & Capabilities` 部分中选择你的开发团队。

![Xcode 界面显示 iOS 应用项目的 Signing and Capabilities 选项卡。](/img/guides/first-app-cap-ng/xcode-signing.png 'Xcode Signing & Capabilities')

设置好权限并选择了开发团队后，我们就可以在真实设备上尝试运行应用了！将 iOS 设备连接到 Mac 电脑，选择该设备（例如 `App -> Matthew's iPhone`），然后单击 "Build" 按钮来构建、安装并在设备上启动应用：

![Xcode 工具栏突出显示用于编译和运行 iOS 应用的 Build 按钮。](/img/guides/first-app-cap-ng/xcode-build-button.png 'Xcode Build 按钮')

点击相册标签页中的相机按钮后，权限提示将会显示。点击 OK，然后用相机拍照。之后，照片就会显示在应用中！

![两部 iPhone 并排显示，一部显示相机权限提示，另一部显示应用拍摄的照片。](/img/guides/first-app-cap-ng/ios-permissions-photo.png 'iOS 相机权限提示和照片结果')

## Android 部署

Capacitor Android 应用通过 Android Studio 进行配置和管理。在 Android 设备上运行此应用之前，需要完成几个步骤。

首先，运行 Capacitor 的 `open` 命令，该命令会在 Android Studio 中打开原生 Android 项目：

```shell
ionic cap open android
```

与 iOS 类似，我们必须启用正确的权限才能使用相机。在 `AndroidManifest.xml` 文件中配置这些权限。Android Studio 可能已自动打开此文件，但如果没有，可以在 `android/app/src/main/` 下找到它。

![Android Studio 编辑器显示带有相机权限的 AndroidManifest.xml 文件。](/img/guides/first-app-cap-ng/android-manifest.png 'Android Manifest 权限')

滚动到 `Permissions` 部分，确保包含以下条目：

```xml
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
```

保存文件。设置好权限后，我们就可以在真实设备上尝试运行应用了！将 Android 设备连接到电脑。在 Android Studio 中，单击 "Run" 按钮，选择已连接的 Android 设备，然后单击 OK 来构建、安装并在设备上启动应用。

![Android Studio 界面，箭头指向 Run 按钮和已连接的设备。](/img/guides/first-app-cap-ng/android-device.png 'Android Studio 运行配置')

同样，点击相册标签页中的相机按钮后，权限提示应该会显示。点击 OK，然后用相机拍照。之后，照片就会显示在应用中。

![两部 Android 手机并排显示，一部显示相机权限提示，另一部显示应用拍摄的照片。](/img/guides/first-app-cap-ng/android-permissions-photo.png 'Android 权限和照片捕获')

我们的相册应用已成功部署到 Android 和 iOS 设备。🎉

在本教程的最后一部分，我们将使用 Ionic CLI 的 Live Reload 功能快速实现照片删除功能，从而完成相册应用的全部功能。
