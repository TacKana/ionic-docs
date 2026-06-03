---
sidebar_label: Android Play Store
---

# Android Play Store 部署

## 生成应用的发布版本

要为 Android 生成发布版本，请运行以下 CLI 命令：

```shell
ionic cordova build android --prod --release
```

这将根据应用的 `config.xml` 中的设置，在 `platforms/android/app/build/outputs/apk` 目录中生成发布版本。
Ionic 应用在此文件中会有预设的默认值，但可以更改以自定义构建。

## 签署 APK

首先，必须对未签名的 APK 进行签名。如果已经生成了签名密钥，请跳过这些步骤并使用现有的密钥。
使用 Android SDK 自带的 keytool 命令生成私钥：

```shell
keytool -genkey -v -keystore my-release-key.keystore -alias alias_name -keyalg RSA -keysize 2048 -validity 10000
```

运行该命令并回答提示后，将在当前目录中创建一个名为 `my-release-key.keystore` 的文件。

:::warning
请保存此文件并将其放在安全的地方。如果丢失，Google Play Store 将不接受此应用的更新！
:::

要签署未签名的 APK，请运行同样包含在 Android SDK 中的 jarsigner 工具：

```shell
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore HelloWorld-release-unsigned.apk alias_name
```

最后，需要运行 zip align 工具来优化 APK。
`zipalign` 工具可以在 `/path/to/Android/sdk/build-tools/VERSION/zipalign` 找到。
例如，在安装了 Android Studio 的 macOS 上，`zipalign` 位于 `~/Library/Android/sdk/build-tools/VERSION/zipalign`：

```shell
zipalign -v 4 HelloWorld-release-unsigned.apk HelloWorld.apk
```

这将生成一个名为 HelloWorld.apk 的最终发布二进制文件，可被 Google Play Store 接受。

## 向 Google Play Store 提交应用

现在已生成发布 APK，可以编写 Play Store 列表并上传 APK。

首先，访问 [Google Play Store Developer Console](https://play.google.com/apps/publish) 并创建一个新的开发者账户。

:::note
创建 Google Play 开发者账户需要 25 美元。
:::

创建开发者账户后，点击 `Create an Application`（创建应用）。

![Google Play Store Developer Console，'CREATE APPLICATION' 按钮高亮显示。](/img/publishing/newAppGPlay.png 'Google Play Store 创建应用按钮')

请务必填写应用的描述，并提供截图和其他信息。
准备就绪后，上传已生成的已签名发布 APK 并发布应用。

## 更新应用

随着应用的发展，需要更新新功能和修复。可以通过向 Google Play Store 提交新版本，或使用类似 Appflow 的 Live Update（实时更新）功能这样的热更新服务来更新应用。使用实时更新，可以通过 Appflow 仪表板将更改直接推送给用户，无需向 Play Store 提交更改。了解更多关于实时更新的信息，请点击<a href="https://ionic.io/docs/appflow/deploy/intro" target="_blank">此处</a>。

:::note
为了让 Google Play Store 接受更新的 APK，需要编辑 `config.xml` 文件以增加版本值，然后按照上述说明重新构建应用以进行发布。
:::
