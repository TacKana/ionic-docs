---
sidebar_label: 移动端部署
---

# 部署到 iOS 和 Android

由于我们在项目创建之初就添加了 Capacitor，现在只需几个步骤就能将照片库应用部署到设备上！你可以在这里找到此应用的完整源代码 [here](https://github.com/ionic-team/photo-gallery-capacitor-ng)。

## Capacitor 配置

Capacitor 是 Ionic 官方的应用运行时环境，能够轻松将网页应用部署到 iOS、Android 等原生平台。如果你过去使用过 Cordova，建议阅读 [这里](https://capacitorjs.com/docs/cordova#differences-between-capacitor-and-cordova) 了解更多差异说明。

如果终端仍在运行 `ionic serve`，请先停止。然后重新构建 Ionic 项目，修复所有报告的错误：

```shell
ionic build
```

接下来，同时创建 iOS 和 Android 项目：

```shell
$ ionic cap add ios
$ ionic cap add android
```

项目根目录将生成 android 和 ios 文件夹。这些都是完全独立的原生项目，应视为 Ionic 应用的一部分（即需要纳入版本控制系统，使用原生开发工具进行编辑等）。

每次执行构建命令（如 `ionic build`）并更新 web 目录（默认：`www`）后，都需要将这些变更复制到原生项目中：

```shell
ionic cap copy
```

注意：修改代码的原生部分（如添加新插件）后，请使用 `sync` 命令：

```shell
ionic cap sync
```

## iOS 部署

:::note
构建 iOS 应用需要 macOS 系统。
:::

Capacitor iOS 应用通过 Xcode（苹果的 iOS/macOS 集成开发环境）进行配置管理，依赖项由 [CocoaPods](https://cocoapods.org/) 管理。在 iOS 设备上运行应用前，需要完成几个步骤。

首先运行 Capacitor 的 `open` 命令，在 Xcode 中打开原生 iOS 项目：

```shell
ionic cap open ios
```

某些原生插件需要配置用户权限才能正常工作。在我们的照片库应用中，这包括 Camera 插件：当首次调用 `Camera.getPhoto()` 时，iOS 会自动显示模态对话框，提示用户允许应用使用相机。对应的权限标签是“隐私 - 相机使用说明”。要设置此权限，需要修改 `Info.plist` 文件（[详情参见](https://capacitorjs.com/docs/ios/configuration)）。点击“Info”，然后展开“Custom iOS Target Properties”进行访问。

![Xcode 中的 Info.plist 文件，显示为相机访问添加的 NSCameraUsageDescription 键。](/img/guides/first-app-cap-ng/xcode-info-plist.png 'Xcode Info.plist 配置')

`Info.plist` 中的每个设置都包含底层参数名和高级名称。默认情况下属性列表编辑器显示高级名称，但切换到显示原始底层名称通常更有用。右键单击属性列表编辑器任意位置，切换“Raw Keys/Values”即可。

添加 `NSCameraUsageDescription` 键，并将值设置为描述应用需要使用相机的原因，例如“用于拍摄照片”。当权限提示出现时，该值字段将显示给应用用户。

按照相同流程添加 Camera 插件所需的另外两个键：`NSPhotoLibraryAddUsageDescription` 和 `NSPhotoLibraryUsageDescription`。

接下来单击左侧项目导航器中的 `App`，在 `Signing & Capabilities` 部分选择你的开发团队。

![Xcode 界面显示 iOS 应用项目的签名与能力设置选项卡。](/img/guides/first-app-cap-ng/xcode-signing.png 'Xcode 签名与能力设置')

配置好权限并选择开发团队后，就可以在真机上测试应用了！将 iOS 设备连接到 Mac 电脑，选择该设备（例如我的是 `App -> Matthew’s iPhone`），然后单击“Build”按钮在设备上构建、安装并启动应用：

![Xcode 工具栏高亮显示用于编译和运行 iOS 应用的构建按钮。](/img/guides/first-app-cap-ng/xcode-build-button.png 'Xcode 构建按钮')

点击照片库标签页的相机按钮时，权限提示将显示。点击确定后即可使用相机拍摄照片，随后照片会显示在应用中！

![并排展示的两部 iPhone，一部显示相机权限提示，另一部显示应用拍摄的照片。](/img/guides/first-app-cap-ng/ios-permissions-photo.png 'iOS 相机权限提示与照片效果')

## Android 部署

Capacitor Android 应用通过 Android Studio 进行配置管理。在 Android 设备上运行应用前，需要完成几个步骤。

首先运行 Capacitor 的 `open` 命令，在 Android Studio 中打开原生 Android 项目：

```shell
ionic cap open android
```

与 iOS 类似，我们必须启用正确的权限才能使用相机。在 `AndroidManifest.xml` 文件中配置这些权限。Android Studio 可能会自动打开该文件，若未自动打开，可在 `android/app/src/main/` 目录下找到它。

![Android Studio 编辑器显示包含相机权限的 AndroidManifest.xml 文件。](/img/guides/first-app-cap-ng/android-manifest.png 'Android 清单权限配置')

滚动到 `Permissions` 部分，确保包含以下条目：

```xml
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
```

保存文件。配置好权限后，就可以在真机上测试应用了！将 Android 设备连接到电脑。在 Android Studio 中点击“Run”按钮，选择已连接的 Android 设备，然后单击确定在设备上构建、安装并启动应用。

![Android Studio 界面，箭头指向运行按钮和已连接设备。](/img/guides/first-app-cap-ng/android-device.png 'Android Studio 运行配置')

再次点击照片库标签页的相机按钮时，应显示权限提示。点击确定后即可使用相机拍摄照片，随后照片应出现在应用中。

![并排展示的两部 Android 手机，一部显示相机权限提示，另一部显示应用拍摄的照片。](/img/guides/first-app-cap-ng/android-permissions-photo.png 'Android 权限配置与照片拍摄')

我们的照片库应用已成功部署到 Android 和 iOS 设备。🎉

在本教程的最后部分，我们将使用 Ionic CLI 的实时重载功能快速实现照片删除功能——从而完成照片库特性的全部开发。