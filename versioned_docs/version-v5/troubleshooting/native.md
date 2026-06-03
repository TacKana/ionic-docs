# 原生错误

## 代码签名错误

```shell
Code Signing Error: Failed to create provisioning profile. The app ID "com.csform.ionic.yellow" cannot be registered to your development team. Change your bundle identifier to a unique string to try again. Code Signing Error: No profiles for 'com.csform.ionic.yellow' were found: Xcode couldn't find any iOS App Development provisioning profiles matching 'com.csform.ionic.yellow'. Code Signing Error: Code signing is required for product type 'Application' in SDK 'iOS 11.1'
```

在 iOS 设备上运行应用需要配置文件。如果尚未创建配置文件，请按照以下说明操作：

1. <strong>设置[包 ID](../reference/glossary.md#包-id)。</strong>

   对于 Capacitor，打开 `capacitor.config.json` 文件并修改 `appId` 属性。

   对于 Cordova，打开 `config.xml` 文件并修改根元素 `<widget>` 的 `id` 属性。有关更多信息，请参阅 [Cordova 文档](https://cordova.apache.org/docs/en/latest/config_ref/#widget)。

<!-- prettier-ignore -->
2. <strong>在 <b>Xcode</b> 中打开项目。</strong>

   对于 Capacitor，运行以下命令在 Xcode 中打开应用：

   ```shell
   $ ionic capacitor open ios
   ```

   对于 Cordova，打开 Xcode。使用 **File** &raquo; **Open** 并找到应用。打开应用的 `platforms/ios` 目录。

<!-- prettier-ignore -->
3. <strong>在<b>项目导航器</b>中，选择项目根节点以打开项目编辑器。在 **Identity** 部分下，验证设置的包 ID 是否与 Bundle Identifier 匹配。</strong>

   ![Xcode 显示 iOS 应用的 Identity 部分，包含 Display Name、Bundle Identifier、Version 和 Build 字段。](/img/running/ios-xcode-identity-setup.png "Xcode Identity 部分")

<!-- prettier-ignore -->
4. <strong>在同一项目编辑器中，在<b>Signing</b>部分下，确保启用了<b>Automatically manage signing</b>（自动管理签名）。</strong>然后，选择一个开发团队。给定一个开发团队，Xcode 将尝试自动准备配置文件和签名。

   ![Xcode 显示 Signing 部分，启用了 'Automatically manage signing' 并选择了 Development Team。](/img/running/ios-xcode-signing-setup.png "Xcode Signing 部分")

## Xcode 构建错误 65

```shell
Error: Error code 65 for command: xcodebuild with args: -xcconfig,/Users/ionitron/projects/my-project/platforms/ios/cordova/build-debug.xcconfig,-workspace,SC project.xcworkspace,-scheme,SC project,-configuration,Debug,-sdk,iphonesimulator,-destination,platform=iOS Simulator,name=iPhone X,build,CONFIGURATION_BUILD_DIR=/Users/ionitron/projects/my-project/platforms/ios/build/emulator,SHARED_PRECOMPS_DIR=/Users/ionitron/projects/my-project/platforms/ios/build/sharedpch
```

此错误是 Xcode 返回的错误代码，可能由配置问题或过时的 cordova 依赖项引起。要修复此错误，首先确保已按照上述说明生成配置文件，然后尝试[从 Xcode 运行应用](../developing/ios.md#使用-xcode-运行)。

如果这不能修复错误，则运行以下命令：

```shell
rm -rf node_modules
rm -rf platform
npm i
ionic cordova platform add ios
ionic cordova prepare ios
ionic cordova build ios --prod
```

运行完这些命令后，可以进行全新的构建。

## Google Play Services 版本冲突

```shell
Error: more than one library with package name com.google.android.gms
```

此错误是由两个不同的插件尝试使用不同版本的 `Google Play Services` 引起的。要修复此问题，请确保运行 `cordova` 版本 `7.1.0` 或更高版本，以及 `cordova-android` `6.3.0` 或更高版本。要安装最新的 `cordova`，请运行：

```shell
npm install cordova@latest
```

要更新 `cordova-android`，请运行：

```shell
cordova platform update android
```

依赖于 `Google Play Services` 的插件现在可以更新为使用相同的版本。例如，如果 `pluginA` 使用版本 11.0，而 `pluginB` 使用版本 15.0，可以通过在 `config.xml` 文件中添加以下代码片段来将它们更新为使用相同的版本：

```xml
<plugin name="pluginA" spec="npm">
  <variable name="PLAY_SERVICES_VERSION" value="15.0.0"/>
</plugin>
<plugin name="pluginB" spec="npm">
  <variable name="PLAY_SERVICES_VERSION" value="15.0.0" />
</plugin>
```
