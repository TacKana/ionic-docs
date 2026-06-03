---
sidebar_label: 分发
---

# 构建和部署你的应用

既然你已经构建了第一个应用，你会希望将其分发出去，让所有人都能开始使用它。构建和部署应用的机制可能相当繁琐。这就是 [Appflow](https://ionic.io/docs/appflow/) 发挥作用的地方。Appflow 允许你高效地生成 Web 和原生构建、推送实时应用更新、将应用发布到应用商店，并自动化整个过程。完整的快速入门指南可以在[这里](https://ionic.io/docs/appflow/quickstart)找到。

下面我们将概述各个步骤。

## 连接你的仓库

Appflow 直接与 Git 版本控制配合使用，并将你现有的代码库作为 Deploy 和 Package 构建的真相来源。你首先需要与托管服务（如 GitHub 或 Bitbucket）集成，或者你可以直接将代码推送到 Appflow。完成后，Appflow 就可以访问你的代码了。

有关将代码仓库连接到 Appflow 的更多信息，请查看 Appflow 文档中的[连接你的仓库](https://ionic.io/docs/appflow/quickstart/connect)部分。

## 安装 Appflow SDK

Appflow SDK（也称为 Ionic Deploy 插件）将允许你利用可以说是 Appflow 最好的两个功能：向应用推送实时更新以及绕过应用商店。Ionic Appflow 的 Live Update 功能随 Appflow SDK 一起提供，具有检测和同步你已推送到仪表板中指定渠道的应用更新的能力。

要将 Appflow SDK 插件添加到项目中，你可以通过点击 Appflow 仪表板的 `Deploy > Destinations` 部分中的"Install Instructions"来按照安装说明进行操作。或者，你也可以通过在应用根目录中执行以下命令手动安装插件：

```shell
ionic deploy add  \
    --app-id="YOUR_APP_ID" \
    --channel-name="YOUR_CHANNEL_NAME" \
    --update-method="background|auto|none" \
```

有关安装 Appflow SDK 的先决条件和额外说明，请访问 Appflow 文档中的[安装 Appflow SDK](https://ionic.io/docs/appflow/quickstart/installation)部分。

## 推送提交

为了让 Appflow 访问你代码的最新和最好的更改，你需要通过选择的版本控制集成推送提交。对于使用 GitHub 或 Bitbucket 的用户，操作如下：

```shell
git add . # 暂存任何更改
git commit -m "added appflow sdk" # 提交暂存的更改
git push origin main # 将更改从 main 分支推送到你的 git 托管服务
```

推送完成后，你将在 Appflow 仪表板的 `Commits` 选项卡下看到你的提交。有关更多信息，请查看 Appflow 文档中的[推送提交](https://ionic.io/docs/appflow/quickstart/push)部分。

## 部署实时更新

安装好 Appflow SDK 并将提交推送到仪表板后，你就可以将实时更新部署到设备了。Live Update 功能使用随原生应用一起安装的 Appflow SDK 来监听特定的 Deploy Channel Destination。当实时更新分配给某个 Channel Destination 时，该更新将部署到运行配置为监听该特定 Channel Destination 的二进制文件的用户设备。

要部署实时更新，需要创建一个 Web 构建。这可以通过 `Commits` 选项卡中的 `Start build` 图标完成，或点击 `Build > Builds` 选项卡右上角的 `New build` 按钮。选择要部署的正确提交后，选择 `Web` 目标平台和 `Latest` 构建堆栈。根据你的 Appflow 计划，你将能够包含自定义环境（如果有配置的话）。最后，你可以启用 `Live Update` 并选择在构建成功完成后自动分配构建的渠道。

Web 构建完成后，你还可以使用额外的版本控制选项。完成此部分并获得成功的 Deploy 构建后，你可以通过点击构建详情页面中的 `Deploy live updates` 按钮，将其分配给你安装 Appflow SDK 时配置为监听的同一渠道。同样可以通过点击 `Build > Builds` 选项卡中构建上的 `Deploy live updates` 图标并从下拉列表中选择渠道来完成。

要接收此实时更新，你需要在设备或模拟器上运行应用。最快捷简便的方法是通过以下命令：

```shell
ionic [cordova | cap] run [ios | android] [options]
```

假设应用已正确配置为监听你部署到的渠道，如果你在设置期间选择了自动更新方法，应用将在启动时立即更新。如果选择了后台更新方法，请确保在应用中停留大约 30 秒以确保更新已下载。然后，关闭应用，重新打开，你将看到更新已应用！

要深入了解部署实时更新的步骤，以及诸如禁用开发环境部署等额外信息，请查看 Appflow 文档中的[部署实时更新](https://ionic.io/docs/appflow/quickstart/deploy)部分。

## 构建原生二进制文件

接下来是应用构建和部署过程中的原生二进制文件。这是通过 [Ionic Package](https://ionic.io/docs/appflow/package/intro) 服务完成的。首先，你需要创建一个 [Package 构建](https://ionic.io/docs/appflow/package/builds)。这可以通过 `Commits` 选项卡中的 `Start build` 图标完成，或点击 `Build > Builds` 选项卡右上角的 `New build` 按钮。然后选择适当的提交进行构建，并填写几个必填字段以及你想要指定的任何可选字段。填写完所有信息并开始构建后，你可以查看其进度，如果遇到任何错误，可以检查日志。

给定一个成功的 Package 构建，你将获得一个 iOS 二进制文件（`.ipa` 或 IPA）和/或 Android 二进制文件（`.apk` 或 APK）。随后，可以通过点击构建详情页面右侧 `Artifacts` 部分中的文件名，或点击 `Build > Builds` 选项卡中构建上的 `Download IPA/APK` 图标来下载文件，以便将其安装到设备上。

有关构建原生二进制文件的更多信息，可以在 Appflow 文档中的[构建原生二进制文件](https://ionic.io/docs/appflow/quickstart/package)部分中找到。

## 创建自动化

[自动化](https://ionic.io/docs/appflow/automation/intro)使你和你的团队能够利用 Appflow 的全部 CI/CD 能力。你可以创建在团队每次向给定分支提交新代码时触发的自动化的 [Package 构建](https://ionic.io/docs/appflow/package/builds)和 [Deploy 构建](https://ionic.io/docs/appflow/deploy/builds)。自动化还可以配置为使用不同的环境和原生配置，为开发、预发布、QA 和生产构建不同版本的应用。

有关更多信息，请访问 Appflow 文档中的[创建自动化](https://ionic.io/docs/appflow/quickstart/automation)部分。在那里，你将看到创建单个自动化的详细信息。但是，你可以为不同的分支或工作流创建多个自动化，并根据需要进行自定义。需要注意的是，创建自动化的功能适用于我们的[基础计划](https://ionic.io/pricing)及以上的用户。

## 创建环境

[Package 构建](https://ionic.io/docs/appflow/package/builds)和 [Deploy 构建](https://ionic.io/docs/appflow/deploy/builds)可以通过[环境](https://ionic.io/docs/appflow/automation/environments)进一步自定义。这个强大的功能允许你根据构建时传入的环境变量创建不同的配置。当与[自动化](https://ionic.io/docs/appflow/automation/intro)功能结合时，开发团队可以轻松配置开发、预发布和生产构建配置，使他们能够采纳 DevOps 最佳实践，并以比以往更快的速度发布更高质量的更新。

创建环境的功能适用于我们的[基础计划](https://ionic.io/pricing)及以上的用户。更多信息可以在 Appflow 文档中的[创建环境](https://ionic.io/docs/appflow/quickstart/environment)部分找到。

## 创建原生配置

[Native Configurations](https://ionic.io/docs/appflow/package/native-configs) 允许你轻松修改不同环境（开发、生产、预发布等）之间可能变化的常见配置值，这样你就无需使用额外逻辑或手动将其提交到版本控制。原生配置可以附加到任何 [Package 构建](https://ionic.io/docs/appflow/package/intro)或[自动化](https://ionic.io/docs/appflow/automation/intro)上。

原生配置可用于：

- 覆盖 `config.xml` 中的唯一包标识符或 [id 属性](https://cordova.apache.org/docs/en/latest/config_ref/#widget)
- 覆盖将显示在设备主屏幕上的应用名称
- 覆盖 [Appflow SDK（Deploy 插件）变量和偏好设置](https://ionic.io/docs/appflow/deploy/api#plugin-variables)

要使用创建原生配置的功能，你需要是我们的[基础计划](https://ionic.io/pricing)及以上的用户。此功能的更多详情可以在 Appflow 文档中的[创建原生配置](https://ionic.io/docs/appflow/quickstart/native-config)部分找到。

## 接下来做什么？

恭喜！你开发了一个完整的跨平台相册应用，可以在 Web、iOS 和 Android 上运行。不仅如此，你还构建了应用并将其部署到了用户的设备上！

从这里开始有很多路径可以继续。尝试向应用添加另一个 [Ionic UI 组件](https://ionicframework.com/docs/components)，或更多的[原生功能](https://capacitorjs.com/docs/apis)。天空才是极限。一旦你添加了另一个功能，再次通过 Appflow 运行构建和部署过程，将其发布给你的用户。

祝你构建应用愉快！
