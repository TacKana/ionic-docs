---
title: iOS App Store Deployment
sidebar_label: iOS App Store
---

<head>
  <title>发布到 iOS App Store: Ionic 应用的苹果应用商店部署指南</title>
  <meta
    name="description"
    content="了解将 Ionic 应用发布到苹果 iOS App Store 的要求。学习如何生成发布版本构建以及其他必要的部署步骤。"
  />
</head>

## 要求

向 iOS App Store 提交应用需要满足以下几个条件：

- Xcode
- 付费的苹果开发者账号
- 有效的配置文件（provisioning profile）
- 应用开发和分发证书

要加入苹果开发者计划，请按照 [此处列出](https://developer.apple.com/programs/) 的说明操作。

## 生成发布版本构建

如果尚未添加 iOS 平台，请务必先添加：

```shell
ionic cordova platform add ios
```

添加平台后，使用 `--prod` 标志运行构建命令：

```shell
ionic cordova build ios --prod
```

这将生成应用 Web 部分的压缩代码，并将其复制到 iOS 代码库中。

完成后，打开 `./platforms/ios/` 目录下的 `.xcworkspace` 文件以启动 Xcode。

:::tip
你也可以使用 `--release` 标志自动生成发布版本构建。
:::

## 生成签名证书

为 iOS 生成证书是一个相对复杂的过程，请务必查阅 [苹果官方文档](https://help.apple.com/xcode/mac/current/#/dev3a05256b8) 了解证书的概念及其生成方法。

要创建所需的证书和配置文件，请访问 [苹果会员中心](https://developer.apple.com/membercenter) 并按照苹果文档中描述的链接进行操作。

这里涉及两种重要的证书类型：开发证书和分发证书。开发证书正如其名，专为开发阶段设计。它们用于对应用进行签名，并将其部署到证书有权访问的设备上。

分发证书则用于将应用分发到应用商店。使用分发证书签名的应用可以安装在任何设备上。

## 在 Xcode 中为应用签名

生成正确的证书后，可以选择让 Xcode 自动管理证书或手动管理。建议让 Xcode 自动管理证书，这将确保根据所选构建类型使用正确的开发和分发证书。

选择此选项后，从 `Product > Archive` 菜单中选择 `Archive`。这将构建一个准备在应用商店分发的应用版本。归档创建完成后，Xcode Organizer 会自动打开。

Xcode Organizer 会显示当前应用的构建列表。选择最新的构建并点击"Upload to App Store"。随后会出现选择团队的选项，接着是关于应用的更多信息，最后点击"Upload"按钮即可。

如果上传成功，该应用将出现在 [iTunes Connect](https://itunesconnect.apple.com) 的"Activities"下，或 [App Store Connect](https://appstoreconnect.apple.com/) 的"Apps"中。从那里，你可以将应用发布到 TestFlight，或提交给苹果审核以进入 App Store。

## 更新应用

随着应用的发展，需要不断更新以添加新功能和修复问题。你可以通过向苹果提交新版本，或使用像 Appflow 的 <a href="https://ionic.io/docs/appflow/deploy/intro" target="_blank">实时更新功能</a> 这样的动态更新服务来更新应用。

通过<strong>实时更新</strong>，你可以从 Appflow 控制面板直接将应用更改实时推送给用户，无需等待 App Store 的审核。

:::note
为了让 iOS App Store 接受更新后的构建，你需要编辑 config.xml 文件以增加版本号，然后按照上述相同步骤重新构建发布版本。
:::