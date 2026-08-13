---
title: iOS App Store 部署
sidebar_label: iOS App Store
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>发布到 iOS App Store：Ionic 的 Apple App Store 部署</title>
  <meta
    name="description"
    content="查看将 Ionic 应用发布到 Apple iOS App Store 的要求。了解如何生成发布版本以及部署所需的其他必要步骤。"
  />
</head>

## 要求

向 iOS App Store 提交应用需要以下几项：

- Xcode
- 付费的 Apple Developers 账户
- 有效的 provisioning profile
- 应用开发和分发证书

请按照 [Apple Developer Program 注册说明](https://developer.apple.com/programs/)开始操作。

## 生成发布版本

<Tabs groupId="runtime">
<TabItem value="capacitor" label="Capacitor" default>

如果尚未添加 iOS 平台，请确保添加它：

```shell
ionic cap add ios
```

添加平台后，使用 `--prod` 标志运行构建命令：

```shell
ionic build --prod
```

这将生成应用 Web 部分的压缩代码。

对于首次构建，以及在添加插件等任何二进制更改之后，请使用同步命令：

```shell
npx cap sync ios
```

这也会复制压缩的 Web 代码。但是，如果构建仅涉及源代码更改，则只需使用以下命令复制压缩的 Web 文件：

```shell
npx cap copy ios
```

至此，项目现在被当作原生 Xcode 应用来管理（因为它就是）。

在 `./ios/` 中打开项目以启动 Xcode：

```shell
npx cap open ios
```

</TabItem>
<TabItem value="cordova" label="Cordova">

如果尚未添加 iOS 平台，请确保添加它：

```shell
ionic cordova platform add ios
```

添加平台后，使用 `--prod` 标志运行构建命令：

```shell
ionic cordova build ios --prod
```

这将生成应用 Web 部分的压缩代码，并将其复制到 iOS 代码库。

至此，打开 `./platforms/ios/` 中的 `.xcworkspace` 文件以启动 Xcode。

:::tip
你也可以使用 `--release` 标志自动生成发布版本。
:::

</TabItem>
</Tabs>

## 生成签名证书

为 iOS 生成证书是一个比较复杂的过程，因此请务必查看 [Apple 官方文档](https://help.apple.com/xcode/mac/current/#/dev3a05256b8)，了解什么是证书以及如何生成它们。

要创建所需的证书和配置文件，请访问 [Apple 的成员中心](https://developer.apple.com/membercenter)并按照 Apple 文档中描述的链接进行操作。

这里有两种重要的证书类型：开发证书和分发证书。开发证书顾名思义，用于开发阶段。它们用于签署应用并将其部署到证书有权访问的设备上。

分发证书用于将应用分发到商店。当应用使用分发证书签名时，它可以安装在任何设备上。

## 在 Xcode 中签名应用

生成正确的证书后，可以选择让 Xcode 自动管理证书或手动管理它们。建议让 Xcode 自动管理证书。这将确保根据选择的构建类型使用正确的开发和分发证书。

选择此选项后，从 `Product > Archive` 菜单中选择 `Archive`。这将构建一个准备在应用商店中分发的应用版本。创建归档后，Xcode Organizer 将打开。

Xcode Organizer 显示当前应用的构建列表。选择最后一个构建并点击"Upload to App Store"。应该有一个选择团队的位置，然后是有关应用的更多信息，以及一个可点击的"Upload"按钮。

如果上传成功，应用应列在 [iTunes Connect](https://itunesconnect.apple.com) 的"Activities"下，或列在 [App Store Connect](https://appstoreconnect.apple.com/) 的"Apps"下。从那里，应用可以发布到 TestFlight，或发送给 Apple 进行 App Store 审批。

## 更新应用

随着应用的发展，需要更新新功能和修复。可以通过向 Apple 提交新版本，或使用实时更新服务（如 Appflow 的 <a href="https://ionic.io/docs/appflow/deploy/intro" target="_blank">Live Update 功能</a>）来更新应用。

使用<strong>实时更新</strong>，应用更改可以从 Appflow 仪表板实时直接推送给用户，无需等待 App Store 批准。

:::note
为了让 iOS App Store 接受更新的构建，需要编辑 config.xml 文件以增加版本值，然后按照上述相同说明重新构建应用以发布。
:::
