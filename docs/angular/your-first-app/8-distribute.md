---
title: 构建和分发你的应用
sidebar_label: 分发
---

<head>
  <title>使用 Angular 构建和部署你的应用 | Ionic Capacitor Camera</title>
  <meta
    name="description"
    content="了解如何使用 Appflow 构建和部署你的 Ionic 应用。了解如何创建构建、推送实时更新以及将应用分发给用户。"
  />
</head>

现在你已经构建了第一个应用，你肯定希望将其分发出去，让所有人都能开始使用它。构建和部署应用的机制可能相当繁琐，这时 [Appflow](https://ionic.io/docs/appflow/) 就派上用场了。Appflow 使你能够高效地生成 Web 和原生构建、推送实时应用更新、将应用发布到应用商店，并实现整个流程的自动化。请参阅 [Appflow 快速入门指南](https://ionic.io/docs/appflow/quickstart)。

下面我们将概述各个步骤。

## 连接你的仓库

Appflow 直接与 Git 版本控制协同工作，并将你现有的代码库作为 Deploy 和 Package 构建的真实来源。你首先需要与你的托管服务（如 GitHub 或 Bitbucket）集成，或者你也可以直接将代码推送到 Appflow。完成后，Appflow 即可访问你的代码。

有关将代码仓库连接到 Appflow 的更多信息，请查看 Appflow 文档中的[连接你的仓库](https://ionic.io/docs/appflow/quickstart/connect)部分。

## 安装 Appflow SDK

Appflow SDK（也称为 Ionic Deploy 插件）允许你利用 Appflow 两个最重要的功能：向应用推送实时更新以及绕过应用商店。Ionic Appflow 的 Live Update 功能随 Appflow SDK 一起提供，能够检测和同步你通过仪表板推送到已识别渠道的应用更新。

要将 Appflow SDK 插件添加到项目中，你可以按照 Appflow 仪表板中的安装说明操作，点击 `Deploy > Destinations` 部分中的 "Install Instructions"。或者，你也可以通过在应用的根目录执行以下命令手动安装插件：

```shell
ionic deploy add  \
    --app-id="YOUR_APP_ID" \
    --channel-name="YOUR_CHANNEL_NAME" \
    --update-method="background|auto|none" \
```

有关安装 Appflow SDK 的先决条件和更多说明，请访问 Appflow 文档中的[安装 Appflow SDK](https://ionic.io/docs/appflow/quickstart/installation)部分。

## 推送提交

为了让 Appflow 获取代码的最新更改，你需要通过所选的版本控制集成推送提交。对于使用 GitHub 或 Bitbucket 的用户，操作如下：

```shell
git add . # 暂存所有更改
git commit -m "added appflow sdk" # 提交暂存的更改
git push origin main # 将 main 分支的更改推送到你的 git 托管平台
```

推送完成后，你将在 Appflow 仪表板的 `Commits` 选项卡下看到你的提交。更多信息请查看 Appflow 文档中的[推送提交](https://ionic.io/docs/appflow/quickstart/push)部分。

## 部署实时更新

安装好 Appflow SDK 并将提交推送到仪表板后，就可以将实时更新部署到设备了。Live Update 功能使用已安装到原生应用中的 Appflow SDK 来监听特定的 Deploy Channel Destination。当实时更新被分配到某个 Channel Destination 时，该更新将部署到运行配置为监听该特定 Channel Destination 的二进制文件的用户设备。

要部署实时更新，需要先创建一个 Web 构建。可以通过 `Commits` 选项卡中的 `Start build` 图标，或点击 `Build > Builds` 选项卡右上角的 `New build` 按钮来完成。选择要部署的正确提交后，选择 `Web` 目标平台和 `Latest` 构建堆栈。根据你的 Appflow 计划，你还可以包含自定义环境（如果已配置）。最后，你可以启用 `Live Update` 并选择在构建成功完成后自动分配构建的 Channel。

Web 构建完成后，你还可以使用其他版本管理选项。完成本部分并成功完成 Deploy 构建后，你可以通过点击构建详情页面中的 `Deploy live updates` 按钮，将其分配给你在安装 Appflow SDK 时配置的同一 Channel。也可以通过点击 `Build > Builds` 选项卡中构建上的 `Deploy live updates` 图标，然后从下拉菜单中选择 Channel 来完成相同操作。

要接收此实时更新，你需要在设备或模拟器上运行应用。最快捷的方法是通过以下命令：

```shell
ionic cap run [ios | android] [options]
```

假设应用已正确配置为监听你部署到的 Channel，如果你在设置期间选择了自动更新方法，应用应在启动时立即更新。如果选择了后台更新方法，请确保在应用中停留约 30 秒以确保更新已下载。然后关闭应用并重新打开，你将会看到更新已应用！

要深入了解部署实时更新的步骤以及其他信息（如为开发禁用部署），请查看 Appflow 文档中的[部署实时更新](https://ionic.io/docs/appflow/quickstart/deploy)部分。

## 构建原生二进制文件

接下来是应用的构建和部署过程中的原生二进制文件构建。这通过 [Ionic Package](https://ionic.io/docs/appflow/package/intro) 服务完成。首先，你需要创建一个 [Package 构建](https://ionic.io/docs/appflow/package/builds)。可以通过点击 `Commits` 选项卡中的 `Start build` 图标，或点击 `Build > Builds` 选项卡右上角的 `New build` 按钮来完成。然后选择正确的提交进行构建，填写所有必填字段以及你想要指定的可选字段。填写完所有信息后，构建开始，你可以查看构建进度，如果遇到任何错误，还可以检查日志。

Package 构建成功后，你将获得 iOS 二进制文件（`.ipa` 或 IPA）和/或 Android 二进制文件（`.apk` 或 APK）。你可以通过点击构建详情页面右侧 `Artifacts` 部分中的文件名，或点击 `Build > Builds` 选项卡中构建上的 `Download IPA/APK` 图标来下载文件，以便安装在设备上。

有关构建原生二进制文件的更多信息，请查看 Appflow 文档中的[构建原生二进制文件](https://ionic.io/docs/appflow/quickstart/package)部分。

## 创建自动化

[自动化](https://ionic.io/docs/appflow/automation/intro)使你及你的团队能够充分利用 Appflow 的 CI/CD 能力。你可以创建自动化，在团队每次向给定分支提交新代码时触发 [Package 构建](https://ionic.io/docs/appflow/package/builds)和 [Deploy 构建](https://ionic.io/docs/appflow/deploy/builds)。自动化还可以配置为使用不同的环境和原生配置，以便为开发、预发布、QA 和生产环境构建不同版本的应用。

更多信息请访问 Appflow 文档中的[创建自动化](https://ionic.io/docs/appflow/quickstart/automation)部分。你将在那里看到创建单个自动化的详细信息。不过，你可以为不同的分支或工作流创建多个自动化，并根据需要进行自定义。需要注意的是，创建自动化的功能适用于 [Basic 计划](https://ionic.io/pricing)及以上的用户。

## 创建环境

[Package 构建](https://ionic.io/docs/appflow/package/builds)和 [Deploy 构建](https://ionic.io/docs/appflow/deploy/builds)可以通过[环境](https://ionic.io/docs/appflow/automation/environments)进一步定制。这个强大的功能允许你根据构建时传入的环境变量创建不同的配置。与[自动化](https://ionic.io/docs/appflow/automation/intro)功能结合使用时，开发团队可以轻松配置开发、预发布和生产构建配置，从而拥抱 DevOps 最佳实践，以前所未有的速度交付更高质量的更新。

创建环境的功能适用于 [Basic 计划](https://ionic.io/pricing)及以上的用户。更多信息请查看 Appflow 文档中的[创建环境](https://ionic.io/docs/appflow/quickstart/environment)部分。

## 创建原生配置

[原生配置](https://ionic.io/docs/appflow/package/native-configs)允许你轻松修改不同环境（开发、生产、预发布等）之间可能发生变化的常见配置值，这样你就不需要使用额外的逻辑或手动将其提交到版本控制。原生配置可以附加到任何 [Package 构建](https://ionic.io/docs/appflow/package/intro)或[自动化](https://ionic.io/docs/appflow/automation/intro)。

原生配置可用于：

- 覆盖 `config.xml` 中的唯一捆绑标识符或 [id 属性](https://cordova.apache.org/docs/en/latest/config_ref/#widget)
- 覆盖设备主屏幕上显示的应用名称
- 覆盖 [Appflow SDK（Deploy 插件）变量和偏好设置](https://ionic.io/docs/appflow/deploy/api#plugin-variables)

要使用创建原生配置的功能，你需要拥有 [Basic 计划](https://ionic.io/pricing)及以上的订阅。此功能的更多详情请查看 Appflow 文档中的[创建原生配置](https://ionic.io/docs/appflow/quickstart/native-config)部分。

## 下一步是什么？

恭喜！你已经开发了一个可在 Web、iOS 和 Android 上运行的完整跨平台相册应用。不仅如此，你还成功构建了应用并将其部署到了用户的设备上！

从这里出发还有很长的路要走。尝试在应用中添加另一个 [Ionic UI 组件](../../components.md)，或更多[原生功能](https://capacitorjs.com/docs/apis)。天空才是极限。添加新功能后，再次通过 Appflow 运行构建和部署流程，将其发布给你的用户。

祝你构建应用愉快！💙
