---
title: 构建和分发你的应用
sidebar_label: 分发
---

<head>
  <title>使用 Vue 构建和分发你的应用 | Ionic Capacitor Camera</title>
  <meta
    name="description"
    content="了解如何使用 Appflow 构建和部署你的 Ionic 应用。了解如何创建构建、推送实时更新以及向用户分发你的应用。"
  />
</head>

既然你已经构建了第一个应用，你肯定希望将其分发出去，以便每个人都可以开始使用它。构建和部署应用的机制可能相当繁琐。这就是 [Appflow](https://ionic.io/docs/appflow/) 发挥作用的地方。Appflow 允许你有效地生成 Web 和原生构建，推送实时应用更新，将应用发布到应用商店，并自动化整个过程。请参阅 [Appflow 快速入门指南](https://ionic.io/docs/appflow/quickstart)。

下面我们将概述这些步骤。

## 连接你的仓库

Appflow 直接与 Git 版本控制协同工作，并使用你现有的代码库作为 Deploy 和 Package 构建的真相来源。你首先需要与你的托管服务（如 GitHub 或 Bitbucket）集成，或者你可以直接将代码推送到 Appflow。完成后，Appflow 将可以访问你的代码。

有关将代码仓库连接到 Appflow 的更多信息，请查看 Appflow 文档中的 [Connect your Repo](https://ionic.io/docs/appflow/quickstart/connect) 部分。

## 安装 Appflow SDK

Appflow SDK（也称为 Ionic Deploy 插件）将允许你利用可以说是 Appflow 最好的两个功能：向应用部署实时更新以及绕过应用商店。Ionic Appflow 的 Live Update 功能随 Appflow SDK 一起提供，具有检测和同步你在仪表板中推送到已识别频道的应用更新的能力。

要将 Appflow SDK 插件添加到你的项目中，你可以按照 Appflow 仪表板中的安装说明进行操作，方法是单击 `Deploy > Destinations` 部分中的"Install Instructions"。或者，你可以通过在应用根目录中执行以下命令手动安装插件：

```shell
ionic deploy add  \
    --app-id="YOUR_APP_ID" \
    --channel-name="YOUR_CHANNEL_NAME" \
    --update-method="background|auto|none" \
```

有关安装 Appflow SDK 的先决条件和其他说明，请访问 Appflow 文档中的 [Install the Appflow SDK](https://ionic.io/docs/appflow/quickstart/installation) 部分。

## 推送提交

为了使 Appflow 能够访问代码的最新和最棒的更改，你需要通过选择的版本控制集成推送提交。对于使用 GitHub 或 Bitbucket 的用户，操作如下：

```shell
git add . # stage any changes
git commit -m "added appflow sdk" #  commit staged changes
git push origin main # push the changes from the main branch to your git host
```

推送完成后，你将在 Appflow 仪表板的 `Commits` 选项卡下看到你的提交。有关此内容的更多信息，请查看 Appflow 文档中的 [Push a Commit](https://ionic.io/docs/appflow/quickstart/push) 部分。

## 部署实时更新

安装 Appflow SDK 并将提交推送到仪表板后，你就可以将实时更新部署到设备了。Live Update 功能使用与本机应用一起安装的 Appflow SDK 来监听特定的 Deploy Channel Destination。当实时更新分配给 Channel Destination 时，该更新将部署到运行配置为监听该特定 Channel Destination 的二进制文件的用户设备。

要部署实时更新，需要创建一个 Web 构建。这可以通过 `Commits` 选项卡中的 `Start build` 图标或单击 `Build > Builds` 选项卡右上角的 `New build` 按钮来完成。选择要部署的正确提交后，选择 `Web` 目标平台和 `Latest` 构建栈。根据你的 Appflow 计划，如果配置了自定义环境，你将能够包含它们。最后，你可以启用 `Live Update` 并选择频道以在构建成功完成后自动分配。

Web 构建完成后，你将获得额外的版本控制选项。完成本节并且你有一个成功的 Deploy 构建后，你可以通过单击构建详情页面中的 `Deploy live updates` 按钮，将其分配给你安装 Appflow SDK 时配置的同一频道。同样可以通过单击 `Build > Builds` 选项卡中构建上的 `Deploy live updates` 图标并从下拉菜单中选择频道来完成。

要接收此实时更新，你需要在设备或模拟器上运行应用。最简单快捷的方法是通过以下命令：

```shell
ionic cap run [ios | android] [options]
```

假设应用已正确配置为监听你部署到的频道，如果你在设置期间选择了自动更新方法，应用应在启动时立即更新。如果选择了后台更新方法，请确保在应用中停留约 30 秒以确保更新已下载。然后，关闭应用，重新打开它，你将看到更新已应用！

要深入了解部署实时更新的步骤，以及禁用开发部署等附加信息，请查看 Appflow 文档中的 [Deploy a Live Update](https://ionic.io/docs/appflow/quickstart/deploy) 部分。

## 构建原生二进制文件

接下来是为你的应用构建和部署过程的原生二进制文件。这是通过 [Ionic Package](https://ionic.io/docs/appflow/package/intro) 服务完成的。首先，你需要创建一个 [Package build](https://ionic.io/docs/appflow/package/builds)。这可以通过 `Commits` 选项卡中的 `Start build` 图标或单击 `Build > Builds` 选项卡右上角的 `New build` 按钮来完成。然后你将选择正确的提交进行构建，并填写所有必填字段和任何你希望指定的可选字段。填写完所有信息并开始构建后，你可以查看其进度，并在遇到任何错误时查看日志。

如果 Package 构建成功，你将获得一个 iOS 二进制（`.ipa` 或 IPA）和/或 Android 二进制（`.apk` 或 APK）文件。随后可以通过单击构建详情页面右侧 `Artifacts` 部分中的文件名，或单击 `Build > Builds` 选项卡中构建上的 `Download IPA/APK` 图标来下载文件，以便你将其安装到设备上。

有关构建原生二进制文件的更多信息，请参阅 Appflow 文档中的 [Build a Native Binary](https://ionic.io/docs/appflow/quickstart/package) 部分。

## 创建自动化

[Automations](https://ionic.io/docs/appflow/automation/intro) 使你和你的团队能够充分利用 Appflow 的 CI/CD 能力。你可以创建自动化，在每次团队向给定分支提交新代码时触发 [Package builds](https://ionic.io/docs/appflow/package/builds) 和 [Deploy builds](https://ionic.io/docs/appflow/deploy/builds)。自动化还可以配置为使用不同的环境和本机配置，为开发、staging、QA 和生产构建不同版本的应用。

有关更多信息，请访问 Appflow 文档中的 [Create an Automation](https://ionic.io/docs/appflow/quickstart/automation) 部分。在那里你将看到创建单个自动化的详细信息。但是，你可以为不同分支或工作流创建多个自动化，并根据需要进行自定义。需要注意的是，创建自动化的功能适用于我们的 [Basic plans](https://ionic.io/pricing) 及以上的用户。

## 创建环境

[Package builds](https://ionic.io/docs/appflow/package/builds) 和 [Deploy builds](https://ionic.io/docs/appflow/deploy/builds) 可以通过 [Environments](https://ionic.io/docs/appflow/automation/environments) 进一步定制。这个强大的功能允许你根据构建时传入的环境变量创建不同的配置。当与 [Automation](https://ionic.io/docs/appflow/automation/intro) 功能结合使用时，开发团队可以轻松配置开发、staging 和生产构建配置，从而拥抱 DevOps 最佳实践，比以往更快地发布更高质量的更新。

创建环境的功能适用于我们的 [Basic plans](https://ionic.io/pricing) 及以上的用户。更多信息可以在 Appflow 文档中的 [Create an Environment](https://ionic.io/docs/appflow/quickstart/environment) 部分找到。

## 创建本机配置

[Native Configurations](https://ionic.io/docs/appflow/package/native-configs) 允许你轻松修改在不同环境（开发、生产、staging 等）之间可能发生变化的常见配置值，这样你就不需要使用额外的逻辑或手动将其提交到版本控制。本机配置可以附加到任何 [Package build](https://ionic.io/docs/appflow/package/intro) 或 [Automation](https://ionic.io/docs/appflow/automation/intro)。

本机配置可用于：

- 覆盖 `config.xml` 中的唯一包标识符或 [id 属性](https://cordova.apache.org/docs/en/latest/config_ref/#widget)
- 覆盖将显示在设备主屏幕上的应用名称
- 覆盖 [Appflow SDK (Deploy Plugin) 变量和首选项](https://ionic.io/docs/appflow/deploy/api#plugin-variables)

要使用创建本机配置的功能，你需要使用我们的 [Basic plans](https://ionic.io/pricing) 及以上的计划。此功能的更多详细信息可以在 Appflow 文档中的 [Create a Native Configuration](https://ionic.io/docs/appflow/quickstart/native-config) 部分找到。

## 下一步是什么？

恭喜！你开发了一个完整的跨平台相册应用，可在 Web、iOS 和 Android 上运行。不仅如此，你还构建了该应用并将其部署到用户的设备上！

从这里出发有许多路径可以继续。尝试向应用添加另一个 [Ionic UI 组件](../../components.md)，或更多[原生功能](https://capacitorjs.com/docs/apis)。天空才是极限。一旦你添加了另一个功能，再次通过 Appflow 运行构建和部署过程，将其交付给你的用户。

祝你应用开发愉快！💙
