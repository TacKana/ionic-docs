---
title: iOS App Store 部署
sidebar_label: iOS App Store
---

<head>
  <title>发布到 iOS App Store：Ionic 应用的苹果应用商店部署指南</title>
  <meta
    name="description"
    content="了解将 Ionic 应用发布到苹果 iOS App Store 的要求。学习如何生成发布版本构建以及部署所需的其他步骤。"
  />
</head>

## 必要条件

向 iOS App Store 提交应用需要满足以下几点要求：

- Xcode
- 付费的 Apple 开发者账户
- 有效的配置文件
- 应用开发和分发证书

要注册 Apple 开发者计划，请按照 [此处列出的说明](https://developer.apple.com/programs/) 进行操作。

## 生成发布版本构建

如果尚未添加 iOS 平台，请务必先添加：

```shell
ionic cordova platform add ios
```

添加平台后，使用 `--prod` 标志运行构建命令：

```shell
ionic cordova build ios --prod
```

这将为应用的网页部分生成最小化代码，并将其复制到 iOS 代码库中。

接下来，打开 `./platforms/ios/` 目录下的 `.xcworkspace` 文件以启动 Xcode。

## 生成签名证书

为 iOS 生成证书是一个较为复杂的过程，请务必查阅 [苹果官方文档](https://help.apple.com/xcode/mac/current/#/dev3a05256b8) 了解证书是什么以及如何生成它们。

要创建所需的证书和配置文件，请访问 [苹果会员中心](https://developer.apple.com/membercenter) 并按照苹果文档中描述的链接进行操作。

这里涉及两种重要的证书类型：开发证书和分发证书。开发证书如其名，专用于开发阶段。它们用于对应用进行签名，并将其部署到证书有权访问的设备上。

分发证书则用于向应用商店分发应用。当应用使用分发证书签名后，可以安装在任何设备上。

## 在 Xcode 中为应用签名

生成正确的证书后，可以选择让 Xcode 自动管理证书或手动管理。建议让 Xcode 自动管理证书。这将确保根据所选的构建类型使用正确的开发和分发证书。

选择此选项后，从 `Product > Archive` 菜单中选择 `Archive`。这将构建一个准备在应用商店分发的应用版本。归档创建完成后，Xcode Organizer 将自动打开。

Xcode Organizer 会显示当前应用的构建列表。选择最新的构建，然后点击“Upload to App Store”。
随后会出现选择团队的位置，接着是有关应用的更多信息，最后点击“Upload”按钮即可。

如果上传成功，该应用应会列在 [iTunes Connect](https://itunesconnect.apple.com) 的“Activities”下，或出现在 [App Store Connect](https://appstoreconnect.apple.com/) 的“Apps”列表中。之后，您可以将应用发布到 TestFlight，或提交给苹果以申请上架 App Store。

## 更新应用

随着应用的发展，需要更新新功能和修复错误。
您可以通过向苹果提交新版本，或使用 Appflow 的<a href="https://ionic.io/docs/appflow/deploy/intro" target="_blank">实时更新功能</a>等实时更新服务来更新应用。

借助<strong>实时更新</strong>，您可以直接从 Appflow 仪表板实时将应用变更推送给用户，无需等待 App Store 的审核。

:::note
为了让 iOS App Store 接受更新后的构建，需要编辑 config.xml 文件以递增版本号，然后按照上述相同的说明重新构建发布版本的应用。
:::