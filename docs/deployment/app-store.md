---
title: iOS App Store 部署
sidebar_label: iOS App Store
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>发布到 iOS App Store：Ionic 应用在苹果应用商店的部署指南</title>
  <meta
    name="description"
    content="了解将 Ionic 应用发布到苹果 iOS App Store 的要求。学习如何生成发布版本构建以及其他必要的部署步骤。"
  />
</head>

## 要求

将应用提交到 iOS App Store 需要满足以下几点要求：

- Xcode
- 付费的 Apple 开发者账户
- 有效的配置文件
- 应用开发和分发证书

要加入 Apple 开发者计划，请按照 [此处列出的说明](https://developer.apple.com/programs/) 进行操作。

## 生成发布版本构建

<Tabs groupId="runtime">
<TabItem value="capacitor" label="Capacitor" default>

如果尚未添加 iOS 平台，请务必先添加：

```shell
ionic cap add ios
```

添加平台后，使用 `--prod` 标志运行构建命令：

```shell
ionic build --prod
```

这将为应用的前端部分生成压缩后的代码。

对于首次构建，以及在进行任何二进制更改（例如添加插件）后，请使用同步命令：

```shell
npx cap sync ios
```

这也会复制压缩后的前端代码。然而，如果您的构建仅涉及源代码更改，那么只需使用以下命令复制压缩后的前端文件：

```shell
npx cap copy ios
```

至此，项目现在将像原生 Xcode 应用一样进行管理（因为它确实是）。

在 `./ios/` 目录中打开项目以启动 Xcode：

```shell
npx cap open ios
```

</TabItem>
<TabItem value="cordova" label="Cordova">

如果尚未添加 iOS 平台，请务必先添加：

```shell
ionic cordova platform add ios
```

添加平台后，使用 `--prod` 标志运行构建命令：

```shell
ionic cordova build ios --prod
```

这将为应用的前端部分生成压缩后的代码，并将其复制到 iOS 代码库中。

接下来，打开 `./platforms/ios/` 目录中的 `.xcworkspace` 文件以启动 Xcode。

:::tip
您也可以使用 `--release` 标志自动生成发布版本构建。
:::

</TabItem>
</Tabs>

## 生成签名证书

为 iOS 生成证书是一个相对复杂的过程，因此请务必查阅 [苹果官方文档](https://help.apple.com/xcode/mac/current/#/dev3a05256b8)，了解证书是什么以及如何生成它们。

要创建所需的证书和配置文件，请访问 [苹果会员中心](https://developer.apple.com/membercenter) 并按照苹果文档中描述的链接进行操作。

这里涉及两种重要的证书类型：开发证书和分发证书。开发证书顾名思义，用于开发阶段。它们用于签名应用并将其部署到证书有权访问的设备上。

分发证书则用于将应用分发到应用商店。当应用使用分发证书签名后，它可以安装在任何设备上。

## 在 Xcode 中签名应用

生成正确的证书后，可以选择让 Xcode 自动管理证书或手动管理它们。建议让 Xcode 自动管理证书。这将确保根据所选的构建类型使用正确的开发和分发证书。

选择此选项后，从 `Product > Archive` 菜单中选择 `Archive`。这将构建一个准备在应用商店分发的应用版本。归档创建后，Xcode Organizer 将打开。

Xcode Organizer 显示当前应用的构建列表。选择最新的构建并点击“Upload to App Store”。
接着需要选择团队，然后填写更多应用信息，最后点击“Upload”按钮。

如果上传成功，应用应列在 [iTunes Connect](https://itunesconnect.apple.com) 的“Activities”下或 [App Store Connect](https://appstoreconnect.apple.com/) 的“Apps”下。之后，可以将应用发布到 TestFlight，或提交给苹果进行 App Store 审核。

## 更新应用

随着应用的发展，需要更新新功能和修复问题。
可以通过向苹果提交新版本，或使用实时更新服务（如 Appflow 的 <a href="https://ionic.io/docs/appflow/deploy/intro" target="_blank">实时更新功能</a>）来更新应用。

借助<strong>实时更新</strong>，可以直接从 Appflow 仪表板实时将应用变更推送给用户，无需等待 App Store 审核。

:::note
为了让 iOS App Store 接受更新后的构建，需要编辑 config.xml 文件以递增版本号，然后按照上述相同的说明重新构建发布版本的应用。
:::