---
title: iOS App Store 部署
sidebar_label: iOS App Store
---

<head>
  <title>发布到 iOS App Store：Ionic 的 Apple App Store 部署</title>
  <meta
    name="description"
    content="查看将 Ionic 应用发布到 Apple iOS App Store 的要求。了解如何生成发布构建以及部署所需的其他必要步骤。"
  />
</head>

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 要求

将应用提交到 iOS App Store 需要以下几项：

- Xcode
- 付费的 Apple 开发者账号
- 有效的 provisioning profile
- 应用开发和分发证书

请按照 [Apple Developer Program 注册说明](https://developer.apple.com/programs/)开始操作。

## 生成发布版本

<Tabs groupId="runtime">
<TabItem value="capacitor" label="Capacitor" default>

如果尚未添加 iOS 平台，请确保添加：

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

如果尚未添加 iOS 平台，请确保添加：

```shell
ionic cordova platform add ios
```

添加平台后，使用 `--prod` 标志运行构建命令：

```shell
ionic cordova build ios --prod
```

这将为应用的 Web 部分生成压缩代码，并将其复制到 iOS 代码库。

然后，打开 `./platforms/ios/` 中的 `.xcworkspace` 文件以启动 Xcode。

:::tip
您也可以使用 `--release` 标志自动生成发布版本。
:::

</TabItem>
</Tabs>

## 生成签名证书

为 iOS 生成证书是一个比较繁琐的过程，因此请务必查看 [Apple 的官方文档](https://help.apple.com/xcode/mac/current/#/dev3a05256b8)，了解什么是证书以及如何生成它们。

要创建所需的证书和配置文件，请访问 [Apple 的成员中心](https://developer.apple.com/membercenter) 并按照 Apple 文档中描述的链接操作。

这里有两种重要的证书类型：开发和分发。开发证书顾名思义，用于开发阶段。它们用于签署应用并将其部署到证书有权访问的设备上。

分发证书用于将应用分发到应用商店。使用分发证书签署的应用可以在任何设备上安装。

## 在 Xcode 中签署应用

生成正确的证书后，可以选择让 Xcode 自动管理证书或手动管理证书。建议让 Xcode 自动管理证书。这将确保根据所选构建类型使用正确的开发和分发证书。

选择此选项后，从 `Product > Archive` 菜单中选择 `Archive`。这将构建一个准备好在应用商店中分发版本的应用。创建归档后，将打开 Xcode Organizer。

Xcode Organizer 显示当前应用的构建列表。选择最后一个构建，点击 'Upload to App Store'。
应该会有一个选择团队的位置，随后是有关应用的更多信息，以及一个可点击的 'Upload' 按钮。

如果上传成功，应用应列在 [iTunes Connect](https://itunesconnect.apple.com) 的 'Activities' 下，或 [App Store Connect](https://appstoreconnect.apple.com/) 的 'Apps' 下。然后，可以将应用发布到 TestFlight，或发送给 Apple 审批以在 App Store 上架。

## 更新应用

随着应用的发展，需要通过新功能和修复进行更新。
应用可以通过向 Apple 提交新版本，或使用实时更新服务（如 Appflow 的 <a href="https://ionic.io/docs/appflow/deploy/intro" target="_blank">live update 功能</a>）来更新。

使用<strong>Live Updates</strong>，可以直接从 Appflow 仪表板实时向用户推送应用更改，无需等待 App Store 审批。

:::note
为了让 iOS App Store 接受更新的构建，需要编辑 config.xml 文件以增加版本值，然后按照相同的说明重新构建应用以进行发布。
:::
