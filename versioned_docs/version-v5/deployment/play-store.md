---
sidebar_label: Android Play Store
---

# Android Play Store 应用发布

## 生成应用的发布版本

要为 Android 生成发布版本，请运行以下 CLI 命令：

```shell
ionic cordova build android --prod --release
```

这将根据 `config.xml` 中的设置，在应用的 `platforms/android/app/build/outputs/apk` 目录下生成一个发布版本。
Ionic 应用在此文件中已预设了默认值，但可以根据需要修改以自定义构建。

## 对 APK 进行签名

首先，必须对未签名的 APK 进行签名。如果已经生成了签名密钥，请跳过这些步骤并直接使用现有的密钥。
使用 Android SDK 附带的 keytool 命令生成一个私钥：

```shell
keytool -genkey -v -keystore my-release-key.keystore -alias alias_name -keyalg RSA -keysize 2048 -validity 10000
```

运行该命令并回答提示问题后，将在当前目录下创建一个名为 `my-release-key.keystore` 的文件。

:::warning
请妥善保存此文件。如果丢失，Google Play Store 将不接受此应用的更新！
:::

要对未签名的 APK 进行签名，请运行同样包含在 Android SDK 中的 jarsigner 工具：

```shell
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore HelloWorld-release-unsigned.apk alias_name
```

最后，必须运行 zip 对齐工具来优化 APK。
`zipalign` 工具可以在 `/path/to/Android/sdk/build-tools/VERSION/zipalign` 路径下找到。
例如，在安装了 Android Studio 的 macOS 上，`zipalign` 位于 `~/Library/Android/sdk/build-tools/VERSION/zipalign`：

```shell
zipalign -v 4 HelloWorld-release-unsigned.apk HelloWorld.apk
```

这将生成一个名为 HelloWorld.apk 的最终发布版本，可以提交到 Google Play Store。

## 向 Google Play Store 提交应用

现在已生成了发布版 APK，接下来可以编写 Play Store 列表并上传 APK。

首先，访问 [Google Play Store 开发者控制台](https://play.google.com/apps/publish) 并创建一个新的开发者账户。

:::note
在 Google Play 上注册开发者账户需要支付 25 美元的费用。
:::

创建开发者账户后，点击 `创建应用` 按钮。

![Google Play Store 开发者控制台，其中 "创建应用" 按钮已高亮显示。](/img/publishing/newAppGPlay.png 'Google Play Store 创建应用按钮')

请务必填写应用的描述，并提供截图和附加信息。
准备就绪后，上传生成的已签名发布版 APK，然后发布应用。

## 更新应用

随着应用的发展，需要通过新功能和修复来更新应用。可以通过向 Google Play Store 提交新版本，或使用像 Appflow 的 Live Update 功能这样的实时更新服务来更新应用。使用 Live Updates 可以直接从 Appflow 仪表板将更改推送给用户，而无需向 Play Store 提交更改。了解更多关于 Live Updates 的信息 <a href="https://ionic.io/docs/appflow/deploy/intro" target="_blank">请点击此处</a>。

:::note
为了让 Google Play Store 接受更新的 APK，需要编辑 config.xml 文件以增加版本号，然后按照上述说明重新构建发布版本。
:::