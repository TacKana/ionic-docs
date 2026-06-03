---
sidebar_label: 部署移动端
---

<head>
  <title>使用 Capacitor 为 iOS 和 Android 构建和部署 Vue 应用</title>
  <meta
    name="description"
    content="Capacitor 是 Ionic 官方应用运行时，用于将 Web 应用部署到 iOS、Android 等原生平台。阅读了解如何构建和部署 Ionic Vue 应用。"
  />
</head>

由于我们在创建项目时就已经添加了 Capacitor，现在只需几个步骤就能将相册应用安装到设备上！

:::note
记住，你可以[在此](https://github.com/ionic-team/photo-gallery-capacitor-vue)找到此应用的完整源代码。
:::

## Capacitor 设置

Capacitor 是 Ionic 官方应用运行时，使将 Web 应用部署到 iOS、Android 等原生平台变得容易。如果你以前使用过 Cordova，可以考虑在[此处](https://capacitorjs.com/docs/cordova#differences-between-capacitor-and-cordova)阅读更多关于它们之间的差异。

如果你仍在终端中运行 `ionic serve`，请取消它。完成 Ionic 项目的新构建，修复它报告的任何错误：

```shell
ionic build
```

接下来，创建 iOS 和 Android 项目：

```shell
ionic cap add ios
ionic cap add android
```

在项目根目录下创建了 android 和 ios 文件夹。这些是完全独立的原生项目，应被视为你的 Ionic 应用的一部分（即，将它们检入源代码控制，使用原生工具编辑它们等）。

每次执行构建（例如 `ionic build`）更新了你的 Web 目录（默认：`build`）时，你需要将这些更改复制到你的原生项目中：

```shell
ionic cap copy
```

注意：在对代码的原生部分进行更新后（例如添加新插件），使用 `sync` 命令：

```shell
ionic cap sync
```

## iOS

:::note
要构建 iOS 应用，你需要一台 Mac 电脑。
:::

Capacitor iOS 应用通过 Xcode（Apple 的 iOS/Mac IDE）进行配置和管理，依赖项由 CocoaPods 管理。在此应用运行到 iOS 设备之前，有几个步骤需要完成。

首先，运行 Capacitor 的 `open` 命令，该命令将在 Xcode 中打开原生 iOS 项目：

```shell
ionic cap open ios
```

为了使某些原生插件正常工作，必须配置用户权限。在我们的相册应用中，这包括 Camera 插件：iOS 会在首次调用 `Camera.getPhoto()` 后自动显示一个模态对话框，提示用户允许应用使用相机。驱动此功能的权限标签为"Privacy - Camera Usage"。要设置它，必须修改 `Info.plist` 文件（[更多详情在此](https://capacitorjs.com/docs/ios/configuration)）。要访问它，点击"Info"，然后展开"Custom iOS Target Properties"。

![Xcode 中 Info.plist 文件显示为相机访问添加的 NSCameraUsageDescription 键。](/img/guides/first-app-cap-ng/xcode-info-plist.png 'Xcode Info.plist 配置')

`Info.plist` 中的每个设置都有一个低级参数名称和一个高级名称。默认情况下，属性列表编辑器显示高级名称，但切换到显示原始的、低级的名称通常很有用。为此，在属性列表编辑器中的任意位置右键单击，然后切换"Raw Keys/Values"。

添加 `NSCameraUsageDescription` 键，并将其值设置为描述应用需要使用相机的原因，例如"拍照"。当权限提示打开时，Value 字段会显示给应用用户。

按照相同的过程添加 Camera 插件所需的其他两个键：`NSPhotoLibraryAddUsageDescription` 和 `NSPhotoLibraryUsageDescription`。

接下来，点击左侧项目导航器中的 `App`，然后在 `Signing & Capabilities` 部分中选择你的 Development Team。

![Xcode 界面显示 iOS 应用项目的 Signing and Capabilities 选项卡。](/img/guides/first-app-cap-ng/xcode-signing.png 'Xcode Signing & Capabilities')

权限设置完毕并选择了 Development Team 后，我们就可以在真实设备上尝试应用了！将 iOS 设备连接到你的 Mac 电脑，选择它（对我来说是 `App -> Matthew's iPhone`），然后点击"Build"按钮来构建、安装并在你的设备上启动应用：

![Xcode 工具栏突出显示用于编译和运行 iOS 应用的 Build 按钮。](/img/guides/first-app-cap-ng/xcode-build-button.png 'Xcode Build 按钮')

点击相册标签上的相机按钮后，权限提示将显示。点击 OK，然后用相机拍照。之后，照片会显示在应用中！

![两部 iPhone 并排放置，一部显示相机权限提示，另一部显示应用拍摄的照片。](/img/guides/first-app-cap-ng/ios-permissions-photo.png 'iOS 相机权限提示和拍照结果')

## Android

Capacitor Android 应用通过 Android Studio 进行配置和管理。在此应用运行到 Android 设备之前，有几个步骤需要完成。

首先，运行 Capacitor 的 `open` 命令，该命令将在 Android Studio 中打开原生 Android 项目：

```shell
ionic cap open android
```

与 iOS 类似，我们必须启用正确的权限才能使用相机。在 `AndroidManifest.xml` 文件中配置这些权限。Android Studio 可能会自动打开此文件，但如果未打开，请在 `android/app/src/main/` 下找到它。

![Android Studio 编辑器显示带相机权限的 AndroidManifest.xml 文件。](/img/guides/first-app-cap-ng/android-manifest.png 'Android Manifest 权限')

滚动到 `Permissions` 部分，确保包含以下条目：

```xml
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
```

保存文件。权限设置完毕后，我们就可以在真实设备上尝试应用了！将 Android 设备连接到你的电脑。在 Android Studio 中，点击"Run"按钮，选择已连接的 Android 设备，然后点击 OK 来构建、安装并在你的设备上启动应用。

![Android Studio 界面，箭头指向 Run 按钮和已连接的设备。](/img/guides/first-app-cap-ng/android-device.png 'Android Studio Run 配置')

再次点击相册标签上的相机按钮后，权限提示应该会显示。点击 OK，然后用相机拍照。之后，照片应该会显示在应用中。

![两部 Android 手机并排放置，一部显示相机权限提示，另一部显示应用拍摄的照片。](/img/guides/first-app-cap-ng/android-permissions-photo.png 'Android 权限和拍照')

我们的相册应用刚刚部署到了 Android 和 iOS 设备上。

在本教程的最后部分，我们将使用 Ionic CLI 的 Live Reload 功能来快速实现照片删除——从而完成我们的相册功能。
