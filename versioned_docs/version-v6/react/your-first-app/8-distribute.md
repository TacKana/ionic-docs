---
sidebar_label: 发布部署
---

# 构建并部署你的应用

现在你已经构建了第一个应用，接下来需要将其发布部署，让大家都能开始使用。应用的构建和部署过程可能相当繁琐，这正是 [Appflow](https://ionic.io/docs/appflow/) 发挥作用的地方。Appflow 能帮助你高效地生成网页版和原生构建版本，推送实时应用更新，将应用发布到应用商店，并实现整个流程的自动化。完整的快速入门指南可以在[这里](https://ionic.io/docs/appflow/quickstart)找到。

下面我们将概述这些步骤。

## 连接代码仓库

Appflow 直接与 Git 版本控制系统协同工作，并使用你现有的代码库作为部署和打包构建的单一可信来源。首先需要与你的托管服务（如 GitHub 或 Bitbucket）集成，或者也可以直接将代码推送到 Appflow。完成这一步后，Appflow 就能访问你的代码了。

关于如何将代码仓库连接到 Appflow 的更多信息，请查看 Appflow 文档中的[连接代码仓库](https://ionic.io/docs/appflow/quickstart/connect)部分。

## 安装 Appflow SDK

Appflow SDK（也称为 Ionic Deploy 插件）将让你能够利用 Appflow 中堪称最佳的两个功能：向应用部署实时更新以及绕过应用商店。Ionic Appflow 的实时更新功能随 Appflow SDK 一同提供，能够检测并同步你推送到仪表板中指定通道的应用更新。

要将 Appflow SDK 插件添加到你的项目中，可以按照 Appflow 仪表板中的安装说明操作，在 `Deploy > Destinations` 部分点击“安装说明”。或者，你也可以通过在应用根目录执行以下命令手动安装插件：

```shell
ionic deploy add  \
    --app-id="YOUR_APP_ID" \
    --channel-name="YOUR_CHANNEL_NAME" \
    --update-method="background|auto|none" \
```

关于安装 Appflow SDK 的前提条件和更多说明，请访问 Appflow 文档中的[安装 Appflow SDK](https://ionic.io/docs/appflow/quickstart/installation)部分。

## 推送提交

为了让 Appflow 能够获取到代码的最新变更，你需要通过所选的版本控制集成推送一次提交。对于使用 GitHub 或 Bitbucket 的用户，操作如下：

```shell
git add . # 暂存所有更改
git commit -m "added appflow sdk" # 提交暂存的更改
git push origin main # 将 main 分支的更改推送到你的 Git 托管服务
```

推送完成后，你将在 Appflow 仪表板的 `Commits` 选项卡下看到你的提交。更多相关信息，请查看 Appflow 文档中的[推送提交](https://ionic.io/docs/appflow/quickstart/push)部分。

## 部署实时更新

安装好 Appflow SDK 并将提交推送到仪表板后，你就可以向设备部署实时更新了。实时更新功能利用已安装的 Appflow SDK 配合你的原生应用，监听特定的部署通道目标。当实时更新被分配到某个通道目标时，该更新将部署到那些运行着配置为监听该特定通道目标的二进制文件用户设备上。

要部署实时更新，需要创建一个 Web 构建版本。这可以通过 `Commits` 选项卡中的 `Start build` 图标完成，或者点击 `Build > Builds` 选项卡右上角的 `New build` 按钮。选择正确的提交进行部署后，选择 `Web` 目标平台和 `Latest` 构建栈。根据你的 Appflow 套餐，你可以包含自定义环境（如果已配置）。最后，你可以启用 `Live Update` 并选择通道，以便在构建成功完成后自动分配给它。

Web 构建完成后，你还可以使用其他版本控制选项。完成此部分操作并成功创建部署构建后，你可以通过点击构建详情页中的 `Deploy live updates` 按钮，将其分配到安装 Appflow SDK 时配置的监听通道。同样，你也可以在 `Build > Builds` 选项卡中点击构建旁的 `Deploy live updates` 图标，并从下拉菜单中选择通道。

要接收这个实时更新，你需要在设备或模拟器上运行应用。最快最简单的方式是通过以下命令：

```shell
ionic cordova run [ios | android] [options]
```

假设应用已正确配置为监听你部署的通道，并且你在设置过程中选择了自动更新方法，那么应用在启动时应立即更新。如果选择了后台更新方法，请确保在应用中停留约 30 秒以确保更新已下载。然后，关闭应用程序再重新打开，你将看到更新已生效！

关于部署实时更新步骤的更多细节，以及诸如禁用开发部署等额外信息，请查看 Appflow 文档中的[部署实时更新](https://ionic.io/docs/appflow/quickstart/deploy)部分。

## 构建原生二进制文件

接下来是你的应用构建和部署过程中的原生二进制文件。这是通过 [Ionic Package](https://ionic.io/docs/appflow/package/intro) 服务完成的。首先，你需要创建一个[打包构建](https://ionic.io/docs/appflow/package/builds)。这可以通过点击 `Commits` 选项卡中的 `Start build` 图标完成，或者点击 `Build > Builds` 选项卡右上角的 `New build` 按钮。然后，为你的构建选择正确的提交，并填写所有必填字段以及任何你想指定的可选字段。填写完所有信息并开始构建后，你可以查看构建进度，并在遇到任何错误时审查日志。

如果打包构建成功，你将获得 iOS 二进制文件（`.ipa` 或 IPA）或 Android 二进制文件（`.apk` 或 APK）。该文件可以随后下载，以便安装在设备上：点击构建详情页右侧 `Artifacts` 部分的文件名，或者点击 `Build > Builds` 选项卡中构建旁的 `Download IPA/APK` 图标。

关于构建原生二进制文件的更多信息，可以在 Appflow 文档中的[构建原生二进制文件](https://ionic.io/docs/appflow/quickstart/package)部分找到。

## 创建自动化流程

[自动化流程](https://ionic.io/docs/appflow/automation/intro)让你和你的团队能够充分利用 Appflow 的完整 CI/CD 能力。你可以创建自动化流程，在团队每次向指定分支提交新代码时触发[打包构建](https://ionic.io/docs/appflow/package/builds)和[部署构建](https://ionic.io/docs/appflow/deploy/builds)。还可以配置自动化流程，使用不同的环境和原生配置，为开发、预发布、QA 和生产环境构建不同版本的应用。

更多信息，请访问 Appflow 文档中的[创建自动化流程](https://ionic.io/docs/appflow/quickstart/automation)部分。在那里你将看到创建单个自动化流程的详细信息。不过，你可以为不同的分支或工作流创建多个自动化流程，并根据需要进行自定义。需要注意的是，创建自动化流程的功能适用于我们的[基础套餐](https://ionic.io/pricing)及更高版本用户。

## 创建环境

[打包构建](https://ionic.io/docs/appflow/package/builds)和[部署构建](https://ionic.io/docs/appflow/deploy/builds)可以通过[环境](https://ionic.io/docs/appflow/automation/environments)进一步定制。这个强大的功能允许你根据构建时传入的环境变量创建不同的配置。当与[自动化流程](https://ionic.io/docs/appflow/automation/intro)功能结合使用时，开发团队可以轻松配置开发、预发布和生产构建配置，从而遵循 DevOps 最佳实践，以前所未有的速度交付更高质量的更新。

创建环境的功能适用于我们的[基础套餐](https://ionic.io/pricing)及更高版本用户。更多相关信息，可以在 Appflow 文档中的[创建环境](https://ionic.io/docs/appflow/quickstart/environment)部分找到。

## 创建原生配置

[原生配置](https://ionic.io/docs/appflow/package/native-configs)让你能够轻松修改不同环境（开发、生产、预发布等）之间可能变化的常见配置值，从而无需使用额外逻辑或手动将其提交到版本控制。原生配置可以附加到任何[打包构建](https://ionic.io/docs/appflow/package/intro)或[自动化流程](https://ionic.io/docs/appflow/automation/intro)。

原生配置可用于：

- 覆盖 `config.xml` 中的唯一包标识符或 [id 属性](https://cordova.apache.org/docs/en/latest/config_ref/#widget)
- 覆盖应用名称（即设备主屏幕上显示的名称）
- 覆盖 [Appflow SDK（Deploy 插件）变量和偏好设置](https://ionic.io/docs/appflow/deploy/api#plugin-variables)

要使用创建原生配置的功能，你需要是我们的[基础套餐](https://ionic.io/pricing)或更高版本用户。该功能的更多详细信息可以在 Appflow 文档中的[创建原生配置](https://ionic.io/docs/appflow/quickstart/native-config)部分找到。

## 下一步做什么？

恭喜！你已经开发了一个完整的跨平台照片库应用，可以在网页、iOS 和 Android 上运行。不仅如此，你还构建了应用并将其部署到了用户的设备上！

接下来有很多方向可以选择。尝试在应用中添加另一个 [Ionic UI 组件](https://ionicframework.com/docs/components)，或者更多的[原生功能](https://capacitorjs.com/docs/apis)。一切皆有可能。一旦你添加了新功能，就可以再次通过 Appflow 运行构建和部署流程，将其交付给用户。

祝应用构建愉快！💙