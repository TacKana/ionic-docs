---
sidebar_label: iOS App Store
---

# iOS App Store 部署

## 必要条件

向 iOS App Store 提交应用需要满足以下几点要求：

- Xcode
- 付费的 Apple 开发者账户
- 有效的配置文件
- 应用开发与分发证书

要加入 Apple 开发者计划，请遵循[此处列出的说明](https://developer.apple.com/programs/)。

## 生成发布版本

如果尚未添加 iOS 平台，请务必先添加：

```shell
ionic cordova platform add ios
```

添加平台后，使用 `--prod` 标志运行构建命令：

```shell
ionic cordova build ios --prod
```

这将生成应用网页部分的最小化代码，并将其复制到 iOS 代码库中。

接下来，在 Xcode 中打开 `./platforms/ios/` 目录下的 `.xcworkspace` 文件。

## 生成签名证书

为 iOS 生成证书是一个相对复杂的过程，因此请务必查阅[Apple 的官方文档](https://help.apple.com/xcode/mac/current/#/dev3a05256b8)，了解证书是什么以及如何生成它们。

要创建所需的证书和配置文件，请访问 [Apple 成员中心](https://developer.apple.com/membercenter)并按照 Apple 文档中的链接说明操作。

这里涉及两种重要的证书类型：开发证书和分发证书。开发证书顾名思义，用于开发阶段。它们用于对应用进行签名，并将其部署到证书有权访问的设备上。

分发证书则用于将应用分发到应用商店。当应用使用分发证书签名后，即可安装在任何设备上。

## 在 Xcode 中对应用进行签名

生成正确的证书后，可以选择让 Xcode 自动管理证书或手动管理。建议让 Xcode 自动管理证书。这将确保根据所选构建类型使用正确的开发和分发证书。

选择此选项后，从 `Product > Archive` 菜单中选择 `Archive`。这将构建一个准备分发到应用商店的应用版本。存档创建完成后，Xcode Organizer 将会打开。

Xcode Organizer 显示当前应用的构建列表。选择最新的构建，然后点击“Upload to App Store”。
接下来需要选择团队，并填写应用的相关信息，最后点击“Upload”按钮。

如果上传成功，应用将列在 [iTunes Connect](https://itunesconnect.apple.com) 的“Activities”下，或 [App Store Connect](https://appstoreconnect.apple.com/) 的“Apps”下。从那里，您可以将应用发布到 TestFlight，或提交给 Apple 以申请 App Store 审核。

## 更新应用

随着应用的发展，将需要添加新功能和修复问题来更新应用。
可以通过向 Apple 提交新版本，或使用像 Appflow 的 <a href="https://ionic.io/docs/appflow/deploy/intro" target="_blank">实时更新功能</a> 这样的实时更新服务来更新应用。

通过<strong>实时更新</strong>，可以直接从 Appflow 仪表板实时向用户推送应用更改，而无需等待 App Store 审核。

:::note
为了让 iOS App Store 接受更新后的构建，需要编辑 config.xml 文件以增加版本号，然后按照上述相同的说明重新构建发布版本。
:::