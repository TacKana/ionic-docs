---
sidebar_label: 分发
---

# 构建与部署应用

既然您已经构建了第一个应用，接下来肯定希望将其分发出去，让每个人都能开始使用。构建和部署应用的过程可能相当繁琐，这正是 [Appflow](https://ionic.io/docs/appflow/) 发挥作用的地方。Appflow 让您能够高效地生成网页版和原生版构建、推送实时应用更新、发布应用到应用商店，并实现整个流程的自动化。完整的快速入门指南可在[此处](https://ionic.io/docs/appflow/quickstart)找到。

下面我们将概述这些步骤。

## 连接您的代码仓库

Appflow 直接与 Git 版本控制系统协同工作，并使用您现有的代码库作为部署（Deploy）和打包（Package）构建的单一事实来源。您首先需要与您的托管服务（例如 GitHub 或 Bitbucket）集成，或者也可以直接将代码推送到 Appflow。一旦完成此操作，Appflow 将能够访问您的代码。

关于如何将您的代码仓库连接到 Appflow 的更多信息，请查看 Appflow 文档中的[连接您的代码仓库](https://ionic.io/docs/appflow/quickstart/connect)部分。

## 安装 Appflow SDK

Appflow SDK（也称为 Ionic Deploy 插件）将让您能够利用 Appflow 中两个堪称最佳的功能：向您的应用部署实时更新，以及绕过应用商店。Ionic Appflow 的实时更新功能随 Appflow SDK 一起提供，能够检测和同步您已推送到仪表板中指定频道（channel）的应用更新。

要将 Appflow SDK 插件添加到您的项目中，您可以按照 Appflow 仪表板中的安装说明操作，在 `Deploy > Destinations` 部分点击“安装说明”。或者，您也可以通过在应用的根目录执行以下命令来手动安装插件：

```shell
ionic deploy add  \
    --app-id="YOUR_APP_ID" \
    --channel-name="YOUR_CHANNEL_NAME" \
    --update-method="background|auto|none" \
```

关于安装 Appflow SDK 的前提条件和更多说明，请访问 Appflow 文档中的[安装 Appflow SDK](https://ionic.io/docs/appflow/quickstart/installation) 部分。

## 推送提交

为了让 Appflow 能够访问您代码的最新更改，您需要通过您选择的版本控制集成推送一个提交。对于使用 GitHub 或 Bitbucket 的用户，操作如下：

```shell
git add . # 暂存所有更改
git commit -m "added appflow sdk" # 提交暂存的更改
git push origin main # 将 main 分支的更改推送到您的 git 托管服务
```

推送完成后，您将在 Appflow 仪表板的 `Commits` 选项卡下看到您的提交。有关此部分的更多信息，请参阅 Appflow 文档中的[推送提交](https://ionic.io/docs/appflow/quickstart/push)部分。

## 部署实时更新

安装好 Appflow SDK 并将提交推送到仪表板后，您就可以向设备部署实时更新了。实时更新功能利用安装在您原生应用中的 Appflow SDK 来监听特定的部署频道目标。当实时更新被分配给一个频道目标时，该更新将被部署到运行着配置为监听该特定频道目标的二进制文件用户设备上。

要部署实时更新，需要创建一个网页构建。这可以通过 `Commits` 选项卡中的 `Start build` 图标完成，或者通过点击 `Build > Builds` 选项卡右上角的 `New build` 按钮。选择要部署的正确提交后，选择 `Web` 目标平台和 `Latest` 构建堆栈。根据您的 Appflow 套餐，您还可以包括自定义环境（如果已配置）。最后，您可以启用 `Live Update` 并选择频道，以便在构建成功完成后自动分配构建。

网页构建完成后，您将获得额外的版本选项。完成此部分操作并获得成功的部署构建后，您可以通过点击构建详情页面中的 `Deploy live updates` 按钮，将其分配给安装 Appflow SDK 时配置为监听的同一频道。同样，您也可以在 `Build > Builds` 选项卡中点击构建上的 `Deploy live updates` 图标，并从下拉列表中选择频道来完成此操作。

要接收此实时更新，您需要在设备或模拟器上运行该应用。最快最简单的方法是通过以下命令：

```shell
ionic cordova run [ios | android] [options]
```

假设应用已正确配置为监听您部署到的频道，并且您在设置过程中选择了自动更新方法，应用应该在启动时立即更新。如果选择了后台更新方法，请确保在应用中停留约 30 秒以确保更新已下载。然后，关闭应用并重新打开，您将看到更新已应用！

有关部署实时更新步骤的更多详细信息，以及禁用开发环境部署等附加信息，请查看 Appflow 文档中的[部署实时更新](https://ionic.io/docs/appflow/quickstart/deploy) 部分。

## 构建原生二进制文件

接下来是为应用构建原生二进制文件并进行部署。这是通过 [Ionic Package](https://ionic.io/docs/appflow/package/intro) 服务完成的。首先，您需要创建一个[打包构建](https://ionic.io/docs/appflow/package/builds)。这可以通过点击 `Commits` 选项卡中的 `Start build` 图标完成，或者通过点击 `Build > Builds` 选项卡右上角的 `New build` 按钮。然后，您将选择构建的正确提交，并填写所有几个必填字段以及任何您想要指定的可选字段。填写完所有信息并开始构建后，您可以查看其进度，并在遇到任何错误时查看日志。

打包构建成功后，iOS 二进制文件（`.ipa` 或 IPA）或 Android 二进制文件（`.apk` 或 APK）将可供您使用。随后可以通过点击构建详情页面右侧 `Artifacts` 区域中的文件名，或点击 `Build > Builds` 选项卡中构建上的 `Download IPA/APK` 图标来下载该文件，以便安装到设备上。

关于构建原生二进制文件的更多信息，请参阅 Appflow 文档中的[构建原生二进制文件](https://ionic.io/docs/appflow/quickstart/package)部分。

## 创建自动化

[自动化](https://ionic.io/docs/appflow/automation/intro)让您和您的团队能够充分利用 Appflow 完整的 CI/CD 功能。您可以创建自动化，以便每次团队向指定分支提交新代码时触发[打包构建](https://ionic.io/docs/appflow/package/builds)和[部署构建](https://ionic.io/docs/appflow/deploy/builds)。还可以配置自动化以使用不同的环境和原生配置，为开发、预发布、QA 和生产环境构建不同版本的应用。

更多信息，请访问 Appflow 文档中的[创建自动化](https://ionic.io/docs/appflow/quickstart/automation)部分。在那里您将看到创建单个自动化的详细信息。不过，您可以为不同的分支或工作流创建多个自动化，并根据您的需求进行自定义。需要注意的重要一点是，创建自动化的功能适用于我们的[基础套餐](https://ionic.io/pricing)及更高版本的用户。

## 创建环境

[打包构建](https://ionic.io/docs/appflow/package/builds)和[部署构建](https://ionic.io/docs/appflow/deploy/builds)可以通过[环境](https://ionic.io/docs/appflow/automation/environments)进一步自定义。这个强大的功能允许您根据构建时传入的环境变量创建不同的配置。当与[自动化](https://ionic.io/docs/appflow/automation/intro)功能结合时，开发团队可以轻松配置开发、预发布和生产构建配置，从而采用 DevOps 最佳实践，以比以往更快的速度交付更高质量的更新。

创建环境的功能适用于我们的[基础套餐](https://ionic.io/pricing)及更高版本的用户。更多相关信息可在 Appflow 文档中的[创建环境](https://ionic.io/docs/appflow/quickstart/environment)部分找到。

## 创建原生配置

[原生配置](https://ionic.io/docs/appflow/package/native-configs)让您能够轻松修改不同环境（开发、生产、预发布等）之间可能变化的常见配置值，从而无需使用额外逻辑或手动将它们提交到版本控制。原生配置可以附加到任何[打包构建](https://ionic.io/docs/appflow/package/intro)或[自动化](https://ionic.io/docs/appflow/automation/intro)上。

原生配置可用于：

- 覆盖 `config.xml` 中的唯一包标识符或[id 属性](https://cordova.apache.org/docs/en/latest/config_ref/#widget)
- 覆盖应用名称（即设备主屏幕上显示的名称）
- 覆盖 [Appflow SDK（Deploy 插件）变量和首选项](https://ionic.io/docs/appflow/deploy/api#plugin-variables)

要获得创建原生配置的权限，您需要升级到我们的[基础套餐](https://ionic.io/pricing)或更高版本。此功能的更多详细信息可在 Appflow 文档中的[创建原生配置](https://ionic.io/docs/appflow/quickstart/native-config)部分找到。

## 下一步是什么？

恭喜！您已经开发了一个完整的跨平台照片库应用，可以在网页、iOS 和 Android 上运行。不仅如此，您还构建了该应用并将其部署到了用户的设备上！

从这里开始有许多路可以走。尝试在应用中添加另一个 [Ionic UI 组件](https://ionicframework.com/docs/components)，或者更多的[原生功能](https://capacitorjs.com/docs/apis)。天空才是极限。一旦您添加了另一个功能，再次通过 Appflow 运行构建和部署流程，将其交付给您的用户。

祝您应用开发愉快！💙