---
title: 构建和部署你的应用
sidebar_label: 分发
---

<head>
  <title>使用 Vue 构建和部署你的应用 | Ionic Capacitor Camera</title>
  <meta
    name="description"
    content="学习如何使用 Appflow 构建和部署你的 Ionic 应用。了解如何创建构建、推送实时更新，并将应用分发给用户。"
  />
</head>

现在你已经构建了第一个应用，接下来你会希望将其分发给用户，让每个人都能开始使用。构建和部署应用的整个过程可能相当繁琐，这正是 [Appflow](https://ionic.io/docs/appflow/) 发挥作用的地方。Appflow 让你能够高效地生成 Web 和原生构建，推送实时应用更新，将应用发布到应用商店，并自动化整个流程。完整的快速入门指南可以在 [这里](https://ionic.io/docs/appflow/quickstart) 找到。

下面我们将概述各个步骤。

## 连接你的代码仓库

Appflow 直接与 Git 版本控制系统协作，并使用你现有的代码库作为 Deploy 和 Package 构建的单一事实来源。首先需要将你的托管服务（如 GitHub 或 Bitbucket）与 Appflow 集成，或者你也可以直接将代码推送到 Appflow。完成此操作后，Appflow 就能访问你的代码。

关于将代码仓库连接到 Appflow 的更多信息，请查看 Appflow 文档中的 [连接你的代码仓库](https://ionic.io/docs/appflow/quickstart/connect) 部分。

## 安装 Appflow SDK

Appflow SDK（也称为 Ionic Deploy 插件）将让你能够利用 Appflow 最强大的两项功能：向应用部署实时更新以及绕过应用商店分发。Ionic Appflow 的 Live Update 功能随 Appflow SDK 提供，能够检测和同步你已推送到仪表板中指定频道的应用更新。

要将 Appflow SDK 插件添加到你的项目中，你可以按照 Appflow 仪表板中的安装说明操作：在 `Deploy > Destinations` 部分点击“安装说明”。或者，你也可以通过在你的应用根目录中执行以下命令来手动安装该插件：

```shell
ionic deploy add  \
    --app-id="YOUR_APP_ID" \
    --channel-name="YOUR_CHANNEL_NAME" \
    --update-method="background|auto|none" \
```

关于安装 Appflow SDK 的前提条件和更多说明，请访问 Appflow 文档中的 [安装 Appflow SDK](https://ionic.io/docs/appflow/quickstart/installation) 部分。

## 推送提交

为了让 Appflow 能够访问你代码的最新更改，你需要通过你选择的版本控制集成推送一个提交。对于使用 GitHub 或 Bitbucket 的用户，操作如下：

```shell
git add . # 暂存所有更改
git commit -m "added appflow sdk" # 提交暂存的更改
git push origin main # 将更改从主分支推送到你的 Git 托管服务
```

推送完成后，你将在 Appflow 仪表板的 `Commits` 标签页下看到你的提交。更多相关信息，请查看 Appflow 文档中的 [推送提交](https://ionic.io/docs/appflow/quickstart/push) 部分。

## 部署实时更新

安装好 Appflow SDK 并将提交推送到仪表板后，你就可以开始向设备部署实时更新了。Live Update 功能利用安装在原生应用中的 Appflow SDK 来监听特定的 Deploy 频道目的地。当实时更新被分配到某个频道目的地时，该更新将被部署到运行着配置为监听该特定频道目的地的二进制文件的用户设备上。

要部署实时更新，需要创建一个 Web 构建。这可以通过 `Commits` 标签页中的 `Start build` 图标完成，或者点击 `Build > Builds` 标签页右上角的 `New build` 按钮。选择要部署的正确提交后，选择 `Web` 目标平台和 `Latest` 构建栈。根据你的 Appflow 计划，你还可以包含自定义环境（如果已配置）。最后，你可以启用 `Live Update` 并选择频道，以便在构建成功完成后自动分配给它。

Web 构建完成后，你可以使用额外的版本管理选项。完成此部分并拥有了成功的 Deploy 构建后，你可以通过点击构建详情页面中的 `Deploy live updates` 按钮，将其分配到你在安装 Appflow SDK 时配置监听的同一频道。同样，你也可以点击 `Build > Builds` 标签页中构建项上的 `Deploy live updates` 图标，然后从下拉菜单中选择频道。

要接收这个实时更新，你需要在设备或模拟器上运行应用。最快捷简便的方法是通过以下命令：

```shell
ionic cordova run [ios | android] [options]
```

假设应用已正确配置为监听你部署到的频道，如果你在设置过程中选择了自动更新方法，应用在启动时应立即更新。如果选择了后台更新方法，请确保在应用中停留约 30 秒，以确保更新已下载完成。然后，关闭应用，重新打开它，你将看到更新已生效！

要深入了解部署实时更新的步骤，以及禁用开发部署等更多信息，请查看 Appflow 文档中的 [部署实时更新](https://ionic.io/docs/appflow/quickstart/deploy) 部分。

## 构建原生二进制文件

接下来是为你的应用构建和部署原生二进制文件。这通过 [Ionic Package](https://ionic.io/docs/appflow/package/intro) 服务完成。首先，你需要创建一个 [Package 构建](https://ionic.io/docs/appflow/package/builds)。这可以通过点击 `Commits` 标签页中的 `Start build` 图标完成，或者点击 `Build > Builds` 标签页右上角的 `New build` 按钮。然后，选择适合你构建的提交，并填写所有必填字段以及任何你想指定的可选字段。填写完所有信息并开始构建后，你可以查看其进度，并在遇到任何错误时审查日志。

如果 Package 构建成功，iOS 二进制文件（`.ipa` 或 IPA）和/或 Android 二进制文件（`.apk` 或 APK）将可供你使用。你可以随后下载该文件，通过点击构建详情页面右侧 `Artifacts` 部分中的文件名，或者点击 `Build > Builds` 标签页中构建项上的 `Download IPA/APK` 图标，将其安装到设备上。

关于构建原生二进制文件的更多信息，可以在 Appflow 文档中的 [构建原生二进制文件](https://ionic.io/docs/appflow/quickstart/package) 部分找到。

## 创建自动化流程

[自动化流程](https://ionic.io/docs/appflow/automation/intro) 让你和你的团队能够充分利用 Appflow 的完整 CI/CD 能力。你可以创建自动化流程，在团队每次向特定分支提交新代码时触发 [Package 构建](https://ionic.io/docs/appflow/package/builds) 和 [Deploy 构建](https://ionic.io/docs/appflow/deploy/builds)。还可以配置自动化流程，使用不同的环境和原生配置来为开发、预发布、QA 和生产环境构建不同版本的应用。

更多信息，请访问 Appflow 文档中的 [创建自动化流程](https://ionic.io/docs/appflow/quickstart/automation) 部分。在那里你会看到创建单个自动化流程的详细信息。不过，你可以为不同的分支或工作流创建多个自动化流程，并根据需要进行自定义。需要注意的是，创建自动化流程的功能适用于我们的 [基础计划](https://ionic.io/pricing) 及以上的用户。

## 创建环境

[Package 构建](https://ionic.io/docs/appflow/package/builds) 和 [Deploy 构建](https://ionic.io/docs/appflow/deploy/builds) 可以通过 [环境](https://ionic.io/docs/appflow/automation/environments) 进一步自定义。这个强大的功能允许你根据构建时传入的环境变量创建不同的配置。当与 [自动化](https://ionic.io/docs/appflow/automation/intro) 功能结合使用时，开发团队可以轻松配置开发、预发布和生产环境的构建配置，使他们能够遵循 DevOps 最佳实践，比以前更快地交付更高质量的更新。

创建环境的功能适用于我们的 [基础计划](https://ionic.io/pricing) 及以上的用户。更多相关信息可以在 Appflow 文档中的 [创建环境](https://ionic.io/docs/appflow/quickstart/environment) 部分找到。

## 创建原生配置

[原生配置](https://ionic.io/docs/appflow/package/native-configs) 允许你轻松修改在不同环境（开发、生产、预发布等）之间可能变化的常见配置值，这样你就不需要使用额外的逻辑或手动将它们提交到版本控制中。原生配置可以附加到任何 [Package 构建](https://ionic.io/docs/appflow/package/intro) 或 [自动化流程](https://ionic.io/docs/appflow/automation/intro)。

原生配置可用于：

- 覆盖 `config.xml` 中的唯一包标识符或 [id 属性](https://cordova.apache.org/docs/en/latest/config_ref/#widget)
- 覆盖应用名称，即设备主屏幕上显示的名称
- 覆盖 [Appflow SDK（Deploy 插件）变量和首选项](https://ionic.io/docs/appflow/deploy/api#plugin-variables)

要获得创建原生配置的能力，你需要订阅我们的 [基础计划](https://ionic.io/pricing) 或更高版本。该功能的更多详细信息可以在 Appflow 文档中的 [创建原生配置](https://ionic.io/docs/appflow/quickstart/native-config) 部分找到。

## 下一步是什么？

恭喜你！你已经开发了一个完整的跨平台照片库应用，它可以在 Web、iOS 和 Android 上运行。不仅如此，你还构建了应用并将其部署到了用户的设备上！

从这里开始，有许多路径可以探索。尝试在应用中添加另一个 [Ionic UI 组件](../../components.md)，或者更多的 [原生功能](https://capacitorjs.com/docs/apis)。一切皆有可能。一旦你添加了另一个功能，再次通过 Appflow 运行构建和部署流程，将其推送给你的用户。

祝你应用构建愉快！💙