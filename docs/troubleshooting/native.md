---
title: 原生应用错误
---

<head>
  <title>原生应用错误：如何解决 Ionic 应用中的原生错误</title>
  <meta
    name="description"
    content="查看原生应用错误，包括代码签名、Xcode 构建错误 65 以及冲突的 Google Play Services 版本。学习解决 Ionic 应用中的原生错误。"
  />
</head>

## 代码签名错误

```shell
Code Signing Error: Failed to create provisioning profile. The app ID "com.csform.ionic.yellow" cannot be registered to your development team. Change your bundle identifier to a unique string to try again. Code Signing Error: No profiles for 'com.csform.ionic.yellow' were found: Xcode couldn't find any iOS App Development provisioning profiles matching 'com.csform.ionic.yellow'. Code Signing Error: Code signing is required for product type 'Application' in SDK 'iOS 11.1'
```

在 iOS 设备上运行应用需要一个配置文件（provisioning profile）。如果尚未创建配置文件，请按照以下步骤操作：

1. <strong>设置 [Package ID（包 ID）](../reference/glossary.md#package-id)。</strong>

   对于 Capacitor，请打开 `capacitor.config.json` 文件并修改 `appId` 属性。

   对于 Cordova，请打开 `config.xml` 文件并修改根元素 `<widget>` 的 `id` 属性。更多信息请参阅 [Cordova 文档](https://cordova.apache.org/docs/en/latest/config_ref/#widget)。

<!-- prettier-ignore -->
2. <strong>在 <b>Xcode</b> 中打开项目。</strong>

   对于 Capacitor，运行以下命令在 Xcode 中打开应用：

   ```shell
   $ ionic capacitor open ios
   ```

   对于 Cordova，打开 Xcode，使用 **文件** &raquo; **打开** 并找到应用。打开应用的 `platforms/ios` 目录。

<!-- prettier-ignore -->
3. <strong>在 <b>项目导航器</b> 中，选择项目根目录以打开项目编辑器。在 **Identity（身份）** 部分，验证设置的包 ID 是否与 Bundle Identifier（包标识符）匹配。</strong>

   ![Xcode 显示 iOS 应用的 Identity 部分，包含 Display Name、Bundle Identifier、Version 和 Build 字段。](/img/running/ios-xcode-identity-setup.png "Xcode Identity 部分")

<!-- prettier-ignore -->
4. <strong>在同一项目编辑器中，<b>Signing（签名）</b> 部分下，确保启用 <b>Automatically manage signing（自动管理签名）</b>。</strong> 然后，选择一个 Development Team（开发团队）。指定开发团队后，Xcode 将尝试自动准备配置文件和签名。

   ![Xcode 显示 Signing 部分，已启用 'Automatically manage signing' 并选择了 Development Team。](/img/running/ios-xcode-signing-setup.png "Xcode Signing 部分")

## Xcode 构建错误 65

```shell
Error: Error code 65 for command: xcodebuild with args: -xcconfig,/Users/ionitron/projects/my-project/platforms/ios/cordova/build-debug.xcconfig,-workspace,SC project.xcworkspace,-scheme,SC project,-configuration,Debug,-sdk,iphonesimulator,-destination,platform=iOS Simulator,name=iPhone X,build,CONFIGURATION_BUILD_DIR=/Users/ionitron/projects/my-project/platforms/ios/build/emulator,SHARED_PRECOMPS_DIR=/Users/ionitron/projects/my-project/platforms/ios/build/sharedpch
```

此错误是 Xcode 返回的错误代码，可能由配置问题或过时的 Cordova 依赖引起。要修复此错误，首先确保已使用上述说明生成了配置文件，然后尝试 [从 Xcode 运行应用](../developing/ios.md#running-with-xcode)。

如果这未能修复错误，请运行以下命令：

```shell
rm -rf node_modules
rm -rf platform
npm i
ionic cordova platform add ios
ionic cordova prepare ios
ionic cordova build ios --prod
```

运行这些命令后，即可进行全新的构建。

## Google Play Services 版本冲突

```shell
Error: more than one library with package name com.google.android.gms
```

此错误是由于两个不同的插件尝试使用不同版本的 `Google Play Services` 引起的。要解决此问题，请确保运行 `cordova` 版本 `7.1.0` 或更高版本，以及 `cordova-android` `6.3.0` 或更高版本。要安装最新的 `cordova`，请运行：

```shell
npm install cordova@latest
```

要更新 `cordova-android`，请运行：

```shell
cordova platform update android
```

依赖 `Google Play Services` 的插件现在可以更新为使用相同版本。例如，如果 `pluginA` 使用版本 11.0 而 `pluginB` 使用版本 15.0，可以通过在 `config.xml` 文件中添加以下代码片段将它们更新为使用相同版本：

```xml
<plugin name="pluginA" spec="npm">
  <variable name="PLAY_SERVICES_VERSION" value="15.0.0"/>
</plugin>
<plugin name="pluginB" spec="npm">
  <variable name="PLAY_SERVICES_VERSION" value="15.0.0" />
</plugin>
```