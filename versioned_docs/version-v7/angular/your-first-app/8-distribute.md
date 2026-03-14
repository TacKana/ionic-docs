---
title: Build and Distribute your App
sidebar_label: Distribute
---

<head>
  <title>使用 Angular 构建和部署应用 | Ionic Capacitor Camera</title>
  <meta
    name="description"
    content="学习如何使用 Appflow 构建和部署您的 Ionic 应用。了解如何创建构建、推送实时更新以及向用户分发应用。"
  />
</head>

现在您已经构建了第一个应用，接下来需要将其分发给用户使用。应用构建和部署的流程可能相当繁琐，这正是 [Appflow](https://ionic.io/docs/appflow/) 发挥作用的地方。Appflow 能帮助您高效生成网页版和原生构建、推送实时应用更新、发布应用到应用商店，并实现整个流程自动化。完整的快速入门指南可在[此处](https://ionic.io/docs/appflow/quickstart)查看。

下面我们将概述相关步骤。

## 连接代码仓库

Appflow 直接与 Git 版本控制系统协作，并将您现有的代码库作为 Deploy 和 Package 构建的单一事实来源。您首先需要与托管服务（如 GitHub 或 Bitbucket）集成，也可以直接将代码推送到 Appflow。完成此操作后，Appflow 即可访问您的代码。

有关将代码仓库连接到 Appflow 的更多信息，请查看 Appflow 文档中的[连接代码仓库](https://ionic.io/docs/appflow/quickstart/connect)部分。

## 安装 Appflow SDK

Appflow SDK（也称为 Ionic Deploy 插件）能让您利用 Appflow 最突出的两大功能：向应用部署实时更新以及绕过应用商店分发。Ionic Appflow 的实时更新功能随 Appflow SDK 提供，能够检测并同步您推送到仪表板中指定渠道的应用更新。

要将 Appflow SDK 插件添加到您的项目，可以按照 Appflow 仪表板中的安装说明操作：在 `Deploy > Destinations` 部分点击"安装说明"。或者，您也可以通过执行以下命令手动安装插件：

```shell
ionic deploy add  \
    --app-id="YOUR_APP_ID" \
    --channel-name="YOUR_CHANNEL_NAME" \
    --update-method="background|auto|none" \
```

有关安装 Appflow SDK 的前提条件和额外说明，请访问 Appflow 文档中的[安装 Appflow SDK](https://ionic.io/docs/appflow/quickstart/installation) 部分。

## 推送提交

为了让 Appflow 获取代码的最新更改，您需要通过选择的版本控制集成推送提交。对于使用 GitHub 或 Bitbucket 的用户，操作如下：

```shell
git add . # 暂存所有更改
git commit -m "added appflow sdk" # 提交暂存的更改
git push origin main # 将主分支的更改推送到 Git 主机
```

推送完成后，您将在 Appflow 仪表板的 `Commits` 选项卡下看到提交记录。更多相关信息，请查看 Appflow 文档中的[推送提交](https://ionic.io/docs/appflow/quickstart/push)部分。

## 部署实时更新

安装好 Appflow SDK 并将提交推送到仪表板后，您就可以向设备部署实时更新了。实时更新功能利用已安装的 Appflow SDK 与您的原生应用配合，监听特定的 Deploy 渠道目标。当实时更新被分配到某个渠道目标时，该更新将部署到运行着配置为监听该特定渠道目标的二进制文件的用户设备上。

要部署实时更新，需要创建一个 Web 构建。这可以通过 `Commits` 选项卡中的 `Start build` 图标完成，或者通过 `Build > Builds` 选项卡右上角的 `New build` 按钮完成。选择要部署的正确提交后，选择 `Web` 目标平台和 `Latest` 构建堆栈。根据您的 Appflow 计划，如果配置了自定义环境，您还可以包含它们。最后，启用 `Live Update` 并选择渠道，以便在构建成功完成后自动分配构建。

Web 构建完成后，您可以使用额外的版本控制选项。完成此部分操作并获得成功的 Deploy 构建后，您可以通过点击构建详情页面中的 `Deploy live updates` 按钮，将其分配到安装 Appflow SDK 时配置的监听渠道。同样，您也可以在 `Build > Builds` 选项卡中点击构建旁边的 `Deploy live updates` 图标，并从下拉菜单中选择渠道。

要接收此实时更新，您需要在设备或模拟器上运行应用。最简单快捷的方法是通过以下命令：

```shell
ionic cap run [ios | android] [options]
```

假设应用已正确配置以监听您部署到的渠道，如果您在设置过程中选择了自动更新方法，应用将在启动时立即更新。如果选择了后台更新方法，请确保应用保持前台运行约30秒以确保更新下载完成。然后，关闭应用并重新打开，您将看到更新已应用！

有关部署实时更新步骤的更多详细信息，以及禁用开发部署等额外信息，请查看 Appflow 文档中的[部署实时更新](https://ionic.io/docs/appflow/quickstart/deploy)部分。

## 构建原生二进制文件

接下来是为您的应用构建和部署流程生成原生二进制文件。这通过 [Ionic Package](https://ionic.io/docs/appflow/package/intro) 服务完成。首先，您需要创建一个 [Package build](https://ionic.io/docs/appflow/package/builds)。这可以通过点击 `Commits` 选项卡中的 `Start build` 图标完成，或者通过 `Build > Builds` 选项卡右上角的 `New build` 按钮完成。然后，您需要为构建选择正确的提交，并填写所有必填字段以及任何要指定的可选字段。填写完所有信息并开始构建后，您可以查看构建进度，如果遇到任何错误，还可以检查日志。

如果 Package 构建成功，iOS 二进制文件（`.ipa` 或 IPA）和/或 Android 二进制文件（`.apk` 或 APK）将可供使用。随后，您可以点击构建详情页面右侧 `Artifacts` 部分的文件名，或者点击 `Build > Builds` 选项卡中构建旁边的 `Download IPA/APK` 图标来下载文件，从而安装到设备上。

有关构建原生二进制文件的更多信息，请查看 Appflow 文档中的[构建原生二进制文件](https://ionic.io/docs/appflow/quickstart/package)部分。

## 创建自动化流程

[Automations](https://ionic.io/docs/appflow/automation/intro) 能让您和您的团队充分利用 Appflow 的 CI/CD 功能。您可以创建自动化流程，每当团队向指定分支提交新代码时，自动触发 [Package builds](https://ionic.io/docs/appflow/package/builds) 和 [Deploy builds](https://ionic.io/docs/appflow/deploy/builds)。这些自动化流程还可以配置为使用不同的环境和原生配置，以便为开发、预发布、QA 和生产环境构建不同版本的应用。

更多信息，请访问 Appflow 文档中的[创建自动化流程](https://ionic.io/docs/appflow/quickstart/automation)部分。您将在那里看到创建单个自动化流程的详细信息。但是，您可以为不同的分支或工作流程创建多个自动化流程，并根据需求进行自定义。需要注意的是，创建自动化流程的功能适用于我们的[基础版计划](https://ionic.io/pricing)及更高版本的用户。

## 创建环境

[Package builds](https://ionic.io/docs/appflow/package/builds) 和 [Deploy builds](https://ionic.io/docs/appflow/deploy/builds) 可以通过 [Environments](https://ionic.io/docs/appflow/automation/environments) 进一步自定义。这一强大功能允许您根据构建时传入的环境变量创建不同的配置。当与 [Automation](https://ionic.io/docs/appflow/automation/intro) 功能结合使用时，开发团队可以轻松配置开发、预发布和生产构建配置，从而遵循 DevOps 最佳实践，更快地发布更高质量的更新。

创建环境的功能适用于我们的[基础版计划](https://ionic.io/pricing)及更高版本的用户。更多相关信息，请查看 Appflow 文档中的[创建环境](https://ionic.io/docs/appflow/quickstart/environment)部分。

## 创建原生配置

[Native Configurations](https://ionic.io/docs/appflow/package/native-configs) 允许您轻松修改不同环境（开发、生产、预发布等）之间可能变化的常见配置值，从而无需使用额外逻辑或手动提交到版本控制系统。原生配置可以附加到任何 [Package build](https://ionic.io/docs/appflow/package/intro) 或 [Automation](https://ionic.io/docs/appflow/automation/intro)。

原生配置可用于：

- 覆盖 `config.xml` 中的唯一包标识符或 [id 属性](https://cordova.apache.org/docs/en/latest/config_ref/#widget)
- 覆盖设备主屏幕上显示的应用名称
- 覆盖 [Appflow SDK（Deploy 插件）变量和偏好设置](https://ionic.io/docs/appflow/deploy/api#plugin-variables)

要使用创建原生配置的功能，您需要订阅我们的[基础版计划](https://ionic.io/pricing)或更高版本。该功能的更多详细信息，请查看 Appflow 文档中的[创建原生配置](https://ionic.io/docs/appflow/quickstart/native-config)部分。

## 下一步？

恭喜！您已经开发了一个完整的跨平台相册应用，可以在 Web、iOS 和 Android 上运行。不仅如此，您还构建了应用并将其部署到用户设备上！

从这里开始，您可以选择多种路径。尝试在应用中添加另一个 [Ionic UI 组件](../../components.md)，或更多[原生功能](https://capacitorjs.com/docs/apis)。可能性是无限的。添加新功能后，再次通过 Appflow 运行构建和部署流程，将其分发给用户。

祝您应用构建愉快！💙