---
sidebar_label: iOS App Store
---

# iOS App Store 部署

## 要求

向 iOS App Store 提交应用需要满足以下几个条件：

- Xcode
- 付费的 Apple 开发者账户
- 有效的配置文件（provisioning profile）
- 应用开发和分发证书

要加入 Apple Developer Program，请按照[此处列出的说明](https://developer.apple.com/programs/)操作。

## 生成发布版本

如果尚未添加 iOS 平台，请确保先添加：

```shell
ionic cordova platform add ios
```

添加平台后，使用 `--prod` 标志运行构建命令：

```shell
ionic cordova build ios --prod
```

这将生成应用 Web 部分的压缩代码，并将其复制到 iOS 代码库中。

然后，打开 `./platforms/ios/` 中的 `.xcworkspace` 文件以启动 Xcode。

## 生成签名证书

为 iOS 生成证书是一个涉及多个步骤的过程，因此请务必查看 [Apple 的官方文档](https://help.apple.com/xcode/mac/current/#/dev3a05256b8)，了解证书是什么以及如何生成它们。

要创建所需的证书和配置文件，请访问 [Apple 的成员中心](https://developer.apple.com/membercenter)并按照 Apple 文档中的链接进行操作。

这里有两种重要的证书类型：开发证书（Development）和分发证书（Distribution）。开发证书顾名思义，用于开发阶段。它们用于签署应用并将其部署到证书有权访问的设备上。

分发证书用于将应用分发到商店。当应用使用分发证书签署后，它可以安装在任何设备上。

## 在 Xcode 中签署应用

生成正确的证书后，有两种选择：让 Xcode 自动管理证书或手动管理证书。建议让 Xcode 自动管理证书。这将确保根据所选的构建类型使用正确的开发和分发证书。

选择此选项后，从 `Product > Archive` 菜单中选择 `Archive`。这将构建一个准备在应用商店中分发的应用版本。归档创建完成后，Xcode Organizer 会打开。

Xcode Organizer 显示当前应用的构建列表。选择最新的构建并点击 'Upload to App Store'。
应该有一个选择团队的位置，然后是一些关于应用的更多信息，以及一个可点击的 'Upload' 按钮。

如果上传成功，应用将列在 [iTunes Connect](https://itunesconnect.apple.com) 的 'Activities' 下，或列在 [App Store Connect](https://appstoreconnect.apple.com/) 的 'Apps' 下。然后，应用可以发布到 TestFlight，或发送给 Apple 审批以进入 App Store。

## 更新应用

随着应用的发展，需要更新新功能和修复。
可以通过向 Apple 提交新版本，或使用类似 Appflow 的 <a href="https://ionic.io/docs/appflow/deploy/intro" target="_blank">Live Update（实时更新）功能</a>这样的热更新服务来更新应用。

使用<strong>实时更新</strong>，可以通过 Appflow 仪表板将应用更改实时直接推送给用户，无需等待 App Store 审批。

:::note
为了让 iOS App Store 接受更新后的构建，需要编辑 `config.xml` 文件以增加版本值，然后按照上述相同说明重新构建应用以进行发布。
:::
