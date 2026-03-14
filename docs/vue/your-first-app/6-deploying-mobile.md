---
title: 部署到 iOS 和 Android
sidebar_label: 移动端部署
---

<head>
  <title>Vue 移动端支持 | Ionic Capacitor 相机应用</title>
  <meta
    name="description"
    content="通过 Capacitor 配置，可以轻松将 Ionic Framework 应用部署到 iOS 和 Android 平台。阅读我们的 Ionic 文档了解更多部署信息。"
  />
</head>

由于我们在项目创建之初就已经添加了 Capacitor，现在只需要完成几个简单步骤，就能让照片库应用在我们的设备上运行起来！

## Capacitor 配置

Capacitor 是 Ionic 官方推出的应用运行时环境，能够轻松将 Web 应用部署到 iOS、Android 等原生平台。如果你之前使用过 Cordova，建议阅读 [这里](https://capacitorjs.com/docs/cordova#differences-between-capacitor-and-cordova) 了解更多差异信息。

如果终端中仍在运行 `ionic serve`，请先停止它。重新构建 Ionic 项目，并修复所有报告的错误：

```shell
ionic build
```

接下来，创建 iOS 和 Android 项目：

```shell
ionic cap add ios
ionic cap add android
```

项目根目录下会创建 android 和 ios 两个文件夹。这些是完全独立的原生项目，应该被视为 Ionic 应用的一部分（即需要纳入版本控制，使用原生开发工具进行编辑等）。

每次执行构建命令（如 `ionic build`）更新 web 目录（默认：`build`）后，都需要将这些更改复制到原生项目中：

```shell
ionic cap copy
```

注意：在对代码的原生部分进行更新（例如添加新插件）后，请使用 `sync` 命令：

```shell
ionic cap sync
```

## iOS 部署

:::important
构建 iOS 应用需要 Mac 电脑。
:::

Capacitor iOS 应用通过 Xcode（苹果的 iOS/Mac IDE）进行配置和管理，依赖项通过 [CocoaPods](https://cocoapods.org/) 管理。在 iOS 设备上运行此应用之前，需要完成几个步骤。

首先，运行 Capacitor 的 `open` 命令，在 Xcode 中打开原生 iOS 项目：

```shell
ionic cap open ios
```

为了让某些原生插件正常工作，必须配置用户权限。在我们的照片库应用中，这包括相机插件：iOS 在首次调用 `Camera.getPhoto()` 后会自动显示模态对话框，提示用户允许应用使用相机。驱动此功能的权限标记为"隐私 - 相机使用权限"。要设置此权限，必须修改 `Info.plist` 文件（[更多详情](https://capacitorjs.com/docs/ios/configuration)）。要访问该文件，点击"Info"，然后展开"Custom iOS Target Properties"。

![Xcode 中的 Info.plist 文件显示为相机访问添加的 NSCameraUsageDescription 键](/img/guides/first-app-cap-ng/xcode-info-plist.png 'Xcode Info.plist 配置')

`Info.plist` 中的每个设置都有底层参数名和高层名称。默认情况下，属性列表编辑器显示高层名称，但切换到显示原始的底层名称通常很有用。右键单击属性列表编辑器中的任意位置，切换"Raw Keys/Values"即可。

添加 `NSCameraUsageDescription` 键，并将其值设置为描述应用需要使用相机的原因，例如"用于拍摄照片"。权限提示出现时，值字段会显示给应用用户。

按照相同流程添加相机插件所需的另外两个键：`NSPhotoLibraryAddUsageDescription` 和 `NSPhotoLibraryUsageDescription`。

接下来，点击左侧项目导航器中的 `App`，然后在 `Signing & Capabilities` 部分选择你的开发团队。

![显示 iOS 应用项目签名与能力配置的 Xcode 界面](/img/guides/first-app-cap-ng/xcode-signing.png 'Xcode 签名与能力配置')

权限设置完成且开发团队选择妥当后，我们就可以在真实设备上测试应用了！将 iOS 设备连接到 Mac 电脑，选择该设备（对我来说是 `App -> Matthew's iPhone`），然后点击"Build"按钮在设备上构建、安装并启动应用：

![Xcode 工具栏高亮显示用于编译和运行 iOS 应用的 Build 按钮](/img/guides/first-app-cap-ng/xcode-build-button.png 'Xcode 构建按钮')

点击照片库标签页的相机按钮后，权限提示将会显示。点击"确定"，然后使用相机拍摄照片。之后，照片就会显示在应用中！

![并排显示的两部 iPhone，一部显示相机权限提示，另一部显示应用拍摄的照片](/img/guides/first-app-cap-ng/ios-permissions-photo.png 'iOS 相机权限提示与拍摄结果')

## Android 部署

Capacitor Android 应用通过 Android Studio 进行配置和管理。在 Android 设备上运行此应用之前，需要完成几个步骤。

首先，运行 Capacitor 的 `open` 命令，在 Android Studio 中打开原生 Android 项目：

```shell
ionic cap open android
```

与 iOS 类似，我们必须启用正确的权限才能使用相机。在 `AndroidManifest.xml` 文件中配置这些权限。Android Studio 可能会自动打开此文件，但如果没有，可以在 `android/app/src/main/` 目录下找到它。

![显示带有相机权限的 AndroidManifest.xml 文件的 Android Studio 编辑器](/img/guides/first-app-cap-ng/android-manifest.png 'Android 清单权限配置')

滚动到 `Permissions` 部分，确保包含以下条目：

```xml
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
```

保存文件。权限设置完成后，我们就可以在真实设备上测试应用了！将 Android 设备连接到电脑。在 Android Studio 中，点击"Run"按钮，选择连接的 Android 设备，然后点击"确定"在设备上构建、安装并启动应用。

![Android Studio 界面，箭头指向运行按钮和已连接的设备](/img/guides/first-app-cap-ng/android-device.png 'Android Studio 运行配置')

再次点击照片库标签页的相机按钮，权限提示应该会显示。点击"确定"，然后使用相机拍摄照片。之后，照片应该会出现在应用中。

![并排显示的两部 Android 手机，一部显示相机权限提示，另一部显示应用拍摄的照片](/img/guides/first-app-cap-ng/android-permissions-photo.png 'Android 权限与照片拍摄')

我们的照片库应用已经成功部署到 Android 和 iOS 设备上。🎉

在本教程的最后部分，我们将使用 Ionic CLI 的实时重载功能快速实现照片删除功能——从而完整实现照片库特性。