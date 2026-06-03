---
sidebar_label: 分发
---

# 构建和部署您的应用

现在您已经构建了第一个应用，接下来您需要将其分发出去，以便大家开始使用它。构建和部署应用的机制可能相当繁琐。这就是 [Appflow](https://ionic.io/docs/appflow/) 发挥作用的地方。Appflow 使您能够高效地生成 Web 和原生构建、推送实时应用更新、将应用发布到应用商店，并自动化整个流程。完整的快速入门指南请参见[此处](https://ionic.io/docs/appflow/quickstart)。

下面我们将概述各个步骤。

## 连接您的仓库

Appflow 直接与 Git 版本控制协作，并使用您现有的代码库作为部署和构建包的真相来源。您首先需要与您的托管服务（如 GitHub 或 Bitbucket）集成，或者您也可以直接将代码推送到 Appflow。完成后，Appflow 将可以访问您的代码。

有关连接代码仓库到 Appflow 的更多信息，请查看 Appflow 文档中的[连接您的仓库](https://ionic.io/docs/appflow/quickstart/connect)部分。

## 安装 Appflow SDK

Appflow SDK（也称为 Ionic Deploy 插件）将使您能够利用 Appflow 可以说是最好的两个功能：向您的应用推送实时更新以及绕过应用商店。Ionic Appflow 的实时更新功能随 Appflow SDK 一起提供，能够检测和同步您推送到仪表板中指定频道的应用更新。

要将 Appflow SDK 插件添加到您的项目中，您可以按照 Appflow 仪表板中"部署 > 目标"部分内的"安装说明"进行操作。或者，您也可以通过执行以下命令手动安装该插件：

```shell
ionic deploy add  \
    --app-id="YOUR_APP_ID" \
    --channel-name="YOUR_CHANNEL_NAME" \
    --update-method="background|auto|none" \
```

有关安装 Appflow SDK 的先决条件和更多说明，请访问 Appflow 文档中的[安装 Appflow SDK](https://ionic.io/docs/appflow/quickstart/installation)部分。

## 推送提交

为了让 Appflow 访问您代码的最新和最好的更改，您需要通过您选择的版本控制集成推送提交。对于使用 GitHub 或 Bitbucket 的用户，操作如下：

```shell
git add . # 暂存所有更改
git commit -m "added appflow sdk" # 提交暂存的更改
git push origin main # 将更改从 main 分支推送到您的 Git 托管服务
```

推送完成后，您将在 Appflow 仪表板的"提交"选项卡中看到您的提交。更多信息请查看 Appflow 文档中的[推送提交](https://ionic.io/docs/appflow/quickstart/push)部分。

## 部署实时更新

安装好 Appflow SDK 并将提交推送到仪表板后，您就可以将实时更新部署到设备上。实时更新功能使用已安装到原生应用中的 Appflow SDK 来监听特定的部署频道目标。当实时更新被分配到频道目标时，该更新将被部署到运行着配置为监听该特定频道目标的二进制文件的用户设备上。

要部署实时更新，需要创建一个 Web 构建。可以通过"提交"选项卡中的"开始构建"图标，或点击"构建 > 构建"选项卡右上角的"新构建"按钮来完成。选择要部署的正确提交后，选择"Web"目标平台和"最新"构建堆栈。根据您的 Appflow 计划，您还可以包含自定义环境（如果有配置的话）。最后，您可以启用"实时更新"并选择频道，以便在构建成功完成后自动分配构建。

Web 构建完成后，您还可以使用其他版本控制选项。完成此部分并成功部署构建后，您可以通过在构建详情页面点击"部署实时更新"按钮，将其分配给您在安装 Appflow SDK 时配置的同一频道。也可以通过点击"构建 > 构建"选项卡中构建上的"部署实时更新"图标，然后从下拉菜单中选择频道来完成同样的操作。

要接收此实时更新，您需要在设备或模拟器上运行应用。最快和最简单的方法是通过以下命令：

```shell
ionic cordova run [ios | android] [options]
```

假设应用已正确配置为监听您部署到的频道，如果您在设置时选择了自动更新方法，应用将在启动时立即更新。如果选择了后台更新方法，请确保在应用中停留约 30 秒以确保更新已下载。然后关闭应用，重新打开，您将看到更新已生效！

要深入了解部署实时更新的步骤以及更多信息（如为开发禁用部署），请查看 Appflow 文档中的[部署实时更新](https://ionic.io/docs/appflow/quickstart/deploy)部分。

## 构建原生二进制文件

接下来是为您的应用构建和部署流程生成原生二进制文件。这是通过 [Ionic Package](https://ionic.io/docs/appflow/package/intro) 服务完成的。首先，您需要创建一个[包构建](https://ionic.io/docs/appflow/package/builds)。可以通过"提交"选项卡中的"开始构建"图标，或点击"构建 > 构建"选项卡右上角的"新构建"按钮来完成。然后选择正确的提交进行构建，并填写几个必填字段以及您想要指定的任何可选字段。填写完所有信息并开始构建后，您可以查看构建进度，如果遇到任何错误，还可以查看日志。

包构建成功后，您将获得 iOS 二进制文件（`.ipa` 或 IPA）和 Android 二进制文件（`.apk` 或 APK）。您可以通过点击构建详情页面右侧"产物"部分中的文件名，或点击"构建 > 构建"选项卡中构建上的"下载 IPA/APK"图标来下载文件，然后将其安装到设备上。

有关构建原生二进制文件的更多信息，请参阅 Appflow 文档中的[构建原生二进制文件](https://ionic.io/docs/appflow/quickstart/package)部分。

## 创建自动化

[自动化](https://ionic.io/docs/appflow/automation/intro)使您和您的团队能够充分利用 Appflow 的 CI/CD 功能。您可以创建自动化，当您的团队向给定分支提交新代码时，自动触发[包构建](https://ionic.io/docs/appflow/package/builds)和[部署构建](https://ionic.io/docs/appflow/deploy/builds)。自动化还可以配置为使用不同的环境和原生配置，为开发、测试、QA 和生产环境构建不同版本的应用。

更多信息请访问 Appflow 文档中的[创建自动化](https://ionic.io/docs/appflow/quickstart/automation)部分。在那里您将看到创建单个自动化的详细信息。不过，您可以针对不同分支或工作流创建多个自动化，并根据需要自定义它们。需要注意的是，创建自动化的功能适用于我们的[基础计划](https://ionic.io/pricing)及以上的用户。

## 创建环境

[包构建](https://ionic.io/docs/appflow/package/builds)和[部署构建](https://ionic.io/docs/appflow/deploy/builds)可以通过[环境](https://ionic.io/docs/appflow/automation/environments)进一步自定义。这个强大的功能允许您根据构建时传入的环境变量创建不同的配置。当与[自动化](https://ionic.io/docs/appflow/automation/intro)功能结合使用时，开发团队可以轻松配置开发、测试和生产构建配置，从而拥抱 DevOps 最佳实践，比以往更快地交付更高质量的更新。

创建环境的功能适用于我们的[基础计划](https://ionic.io/pricing)及以上的用户。更多信息请参阅 Appflow 文档中的[创建环境](https://ionic.io/docs/appflow/quickstart/environment)部分。

## 创建原生配置

[原生配置](https://ionic.io/docs/appflow/package/native-configs)允许您轻松修改不同环境（开发、生产、测试等）之间可能变化的常见配置值，这样您就不需要使用额外逻辑或手动将其提交到版本控制。原生配置可以附加到任何[包构建](https://ionic.io/docs/appflow/package/intro)或[自动化](https://ionic.io/docs/appflow/automation/intro)上。

原生配置可用于：

- 覆盖 `config.xml` 中的唯一包标识符或 [id 属性](https://cordova.apache.org/docs/en/latest/config_ref/#widget)
- 覆盖应用名称（它将显示在设备主屏幕上）
- 覆盖 [Appflow SDK（部署插件）变量和偏好设置](https://ionic.io/docs/appflow/deploy/api#plugin-variables)

要使用创建原生配置的功能，您需要是我们的[基础计划](https://ionic.io/pricing)及以上的用户。此功能的更多详细信息请参阅 Appflow 文档中的[创建原生配置](https://ionic.io/docs/appflow/quickstart/native-config)部分。

## 下一步是什么？

恭喜！您已经开发了一个完整的跨平台相册应用，可以在 Web、iOS 和 Android 上运行。不仅如此，您还构建了应用并将其部署到了用户的设备上！

从这里开始，还有许多路径可以探索。尝试向应用添加另一个 [Ionic UI 组件](https://ionicframework.com/docs/components)，或更多[原生功能](https://capacitorjs.com/docs/apis)。天空才是极限。添加另一个功能后，再次通过 Appflow 运行构建和部署流程，将其交付给您的用户。

祝您应用开发愉快！💙
