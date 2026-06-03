---
sidebar_label: 部署移动端
---

# 部署到 iOS 和 Android

由于我们在首次创建项目时就已经添加了 Capacitor，所以距离相册应用出现在我们的设备上只剩下几个步骤了！请记住，您可以在[此处](https://github.com/ionic-team/photo-gallery-capacitor-ng)找到此应用的完整源代码。

## Capacitor 设置

Capacitor 是 Ionic 的官方应用运行时，可以轻松地将 Web 应用部署到 iOS、Android 等原生平台。如果您以前使用过 Cordova，请考虑在此处阅读更多关于两者区别的信息[此处](https://capacitorjs.com/docs/cordova#differences-between-capacitor-and-cordova)。

如果您仍在终端中运行 `ionic serve`，请取消它。完成 Ionic 项目的新构建，修复报告的任何错误：

```shell
ionic build
```

接下来，创建 iOS 和 Android 项目：

```shell
$ ionic cap add ios
$ ionic cap add android
```

在项目根目录创建了 android 和 ios 文件夹。这些是完全独立的原生项目，应被视为 Ionic 应用的一部分（即将其检入源代码控制，使用其原生工具进行编辑等）。

每次执行构建（例如 `ionic build`）更新 Web 目录（默认：`www`）时，您都需要将这些更改复制到原生项目中：

```shell
ionic cap copy
```

注意：在对代码的原生部分进行更新后（例如添加新插件），请使用 `sync` 命令：

```shell
ionic cap sync
```

## iOS 部署

:::note
要构建 iOS 应用，您需要一台 Mac 电脑。
:::

Capacitor iOS 应用通过 Xcode（Apple 的 iOS/Mac IDE）进行配置和管理，依赖项由 [CocoaPods](https://cocoapods.org/) 管理。在 iOS 设备上运行此应用之前，需要完成几个步骤。

首先，运行 Capacitor `open` 命令，这将打开 Xcode 中的原生 iOS 项目：

```shell
ionic cap open ios
```

为了使某些原生插件正常工作，必须配置用户权限。在我们的相册应用中，这包括 Camera 插件：iOS 会在首次调用 `Camera.getPhoto()` 后自动显示一个模态对话框，提示用户允许应用使用相机。驱动此功能的权限标记为"Privacy - Camera Usage"。要进行设置，必须修改 `Info.plist` 文件（[更多细节在此](https://capacitorjs.com/docs/ios/configuration)）。要访问它，请点击"Info"，然后展开"Custom iOS Target Properties"。

![Xcode 中的 Info.plist 文件，显示了添加的用于相机访问的 NSCameraUsageDescription 键。](/img/guides/first-app-cap-ng/xcode-info-plist.png 'Xcode Info.plist 配置')

`Info.plist` 中的每个设置都有一个底层参数名称和一个高层名称。默认情况下，属性列表编辑器显示高层名称，但通常切换到显示原始底层名称也很有用。要执行此操作，请在属性列表编辑器的任意位置右键单击，然后切换"Raw Keys/Values"。

添加 `NSCameraUsageDescription` 键，并将其值设置为描述为什么应用需要使用相机的描述，例如"拍照"。当权限提示打开时，值字段会显示给应用用户。

按照相同的过程添加 Camera 插件所需的其他两个键：`NSPhotoLibraryAddUsageDescription` 和 `NSPhotoLibraryUsageDescription`。

接下来，点击左侧项目导航器中的 `App`，然后在 `Signing & Capabilities` 部分中，选择您的开发团队。

![显示 iOS 应用项目的 Signing and Capabilities 选项卡的 Xcode 界面。](/img/guides/first-app-cap-ng/xcode-signing.png 'Xcode Signing & Capabilities')

权限设置完毕且开发团队选中后，我们已准备好在真实设备上尝试应用！将 iOS 设备连接到 Mac 电脑，选择它（对我来说是 `App -> Matthew's iPhone`），然后点击"Build"按钮来构建、安装和启动应用：

![Xcode 工具栏突出显示了用于编译和运行 iOS 应用的 Build 按钮。](/img/guides/first-app-cap-ng/xcode-build-button.png 'Xcode Build 按钮')

点击相册标签页上的相机按钮后，权限提示将显示。点击"OK"，然后用相机拍照。之后，照片会显示在应用中！

![并排展示的两部 iPhone，一部显示相机权限提示，另一部显示应用拍摄的照片。](/img/guides/first-app-cap-ng/ios-permissions-photo.png 'iOS 相机权限提示和照片结果')

## Android 部署

Capacitor Android 应用通过 Android Studio 进行配置和管理。在 Android 设备上运行此应用之前，需要完成几个步骤。

首先，运行 Capacitor `open` 命令，这将打开 Android Studio 中的原生 Android 项目：

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

保存文件。权限设置完毕后，我们已准备好在真实设备上尝试应用！将 Android 设备连接到计算机。在 Android Studio 中，点击"Run"按钮，选择已连接的 Android 设备，然后点击"OK"来构建、安装和启动应用。

![Android Studio 界面，箭头指向 Run 按钮和已连接的设备。](/img/guides/first-app-cap-ng/android-device.png 'Android Studio Run 配置')

再次点击相册标签页上的相机按钮后，权限提示将显示。点击"OK"，然后用相机拍照。之后，照片应该会出现在应用中。

![并排展示的两部 Android 手机，一部显示相机权限提示，另一部显示应用拍摄的照片。](/img/guides/first-app-cap-ng/android-permissions-photo.png 'Android 权限和照片拍摄')

我们的相册应用已经部署到 Android 和 iOS 设备上。

在本教程的最后一部分，我们将使用 Ionic CLI 的实时重载功能来快速实现照片删除功能 - 从而完成我们的相册功能。
