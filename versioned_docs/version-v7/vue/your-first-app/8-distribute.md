---
title: 构建和部署你的应用
sidebar_label: 分发
---

<head>
  <title>使用 Vue 构建和部署你的应用 | Ionic Capacitor 相机</title>
  <meta
    name="description"
    content="学习如何使用 Appflow 构建和部署你的 Ionic 应用。了解如何创建构建、推送实时更新，并将应用分发给用户。"
  />
</head>

既然你已经构建了第一个应用，接下来就需要将其分发给用户使用。构建和部署应用的过程可能相当繁琐，这正是 [Appflow](https://ionic.io/docs/appflow/) 发挥作用的地方。Appflow 能帮你高效生成网页和原生构建，推送实时应用更新，将应用发布到应用商店，并实现整个过程自动化。完整的快速入门指南可在[这里](https://ionic.io/docs/appflow/quickstart)找到。

下面我们将概述这些步骤。

## 连接你的代码仓库

Appflow 直接与 Git 版本控制系统配合工作，使用你现有的代码库作为部署和打包构建的单一可信源。首先需要与你的托管服务（如 GitHub 或 Bitbucket）集成，或者也可以直接将代码推送到 Appflow。完成后，Appflow 就能访问你的代码了。

关于如何将代码仓库连接到 Appflow 的更多信息，请查看 Appflow 文档中的[连接你的代码仓库](https://ionic.io/docs/appflow/quickstart/connect)部分。

## 安装 Appflow SDK

Appflow SDK（也称为 Ionic Deploy 插件）能让你充分利用 Appflow 最强大的两个功能：向应用部署实时更新，以及绕过应用商店进行分发。Ionic Appflow 的实时更新功能随 Appflow SDK 提供，能够检测并同步你推送到仪表板中指定渠道的应用更新。

要将 Appflow SDK 插件添加到你的项目中，可以按照 Appflow 仪表板中的安装说明操作：在 `Deploy > Destinations` 部分点击"安装说明"。或者，你也可以在应用的根目录中执行以下命令手动安装插件：

```shell
ionic deploy add  \
    --app-id="YOUR_APP_ID" \
    --channel-name="YOUR_CHANNEL_NAME" \
    --update-method="background|auto|none" \
```

关于安装 Appflow SDK 的先决条件和额外说明，请访问 Appflow 文档中的[安装 Appflow SDK](https://ionic.io/docs/appflow/quickstart/installation) 部分。

## 推送提交

为了让 Appflow 能够访问你代码的最新变更，你需要通过选择的版本控制集成推送提交。对于使用 GitHub 或 Bitbucket 的用户，操作如下：

```shell
git add . # 暂存所有更改
git commit -m "added appflow sdk" # 提交暂存的更改
git push origin main # 将主分支的更改推送到你的 Git 主机
```

推送完成后，你将在 Appflow 仪表板的 `Commits` 标签页下看到提交记录。更多详情请参阅 Appflow 文档中的[推送提交](https://ionic.io/docs/appflow/quickstart/push)部分。

## 部署实时更新

安装好 Appflow SDK 并将提交推送到仪表板后，就可以向设备部署实时更新了。实时更新功能利用已安装的 Appflow SDK 与你的原生应用配合，监听特定的部署渠道目标。当实时更新被分配到某个渠道目标时，该更新将部署到监听该特定渠道目标的应用版本上。

要部署实时更新，需要创建一个网页构建。这可以通过 `Commits` 标签页的 `Start build` 图标完成，或者点击 `Build > Builds` 标签页右上角的 `New build` 按钮。选择要部署的正确提交后，选择 `Web` 目标平台和 `Latest` 构建栈。根据你的 Appflow 套餐，你还可以包含自定义环境（如果已配置）。最后，启用 `Live Update` 并选择渠道，以便在构建成功完成后自动分配给它。

网页构建完成后，你还可以进行额外的版本控制操作。完成此部分并拥有成功的部署构建后，你可以点击构建详情页面的 `Deploy live updates` 按钮，将其分配到安装 Appflow SDK 时配置的监听渠道。同样，你也可以点击 `Build > Builds` 标签页中构建上的 `Deploy live updates` 图标，从下拉菜单中选择渠道。

要接收这个实时更新，你需要在设备或模拟器上运行应用。最简单快捷的方法是通过以下命令：

```shell
ionic cordova run [ios | android] [options]
```

假设应用已正确配置以监听你部署到的渠道，如果在设置期间选择了自动更新方法，应用将在启动时立即更新。如果选择了后台更新方法，请确保在应用中停留约 30 秒以确保更新已下载。然后关闭应用，重新打开，你就会看到更新已应用！

关于部署实时更新步骤的更多细节，以及禁用开发部署等额外信息，请查看 Appflow 文档中的[部署实时更新](https://ionic.io/docs/appflow/quickstart/deploy)部分。

## 构建原生二进制文件

接下来是为你的应用构建和部署过程生成原生二进制文件。这通过 [Ionic Package](https://ionic.io/docs/appflow/package/intro) 服务完成。首先，你需要创建一个[打包构建](https://ionic.io/docs/appflow/package/builds)。这可以通过点击 `Commits` 标签页的 `Start build` 图标完成，或者点击 `Build > Builds` 标签页右上角的 `New build` 按钮。然后选择构建的正确提交，填写所有必需的字段和任何想要指定的可选字段。填写完所有信息并开始构建后，你可以查看进度，如果遇到任何错误还可以审查日志。

打包构建成功后，iOS 二进制文件（`.ipa` 或 IPA）和/或 Android 二进制文件（`.apk` 或 APK）就会可供使用。随后可以下载该文件，以便安装到设备上：点击构建详情页面右侧 `Artifacts` 部分的文件名，或者点击 `Build > Builds` 标签页中构建上的 `Download IPA/APK` 图标。

关于构建原生二进制文件的更多信息，可以在 Appflow 文档的[构建原生二进制文件](https://ionic.io/docs/appflow/quickstart/package)部分找到。

## 创建自动化

[自动化](https://ionic.io/docs/appflow/automation/intro)让你和团队能够充分利用 Appflow 的完整 CI/CD 能力。你可以创建自动化流程，每次团队向给定分支提交新代码时触发[打包构建](https://ionic.io/docs/appflow/package/builds)和[部署构建](https://ionic.io/docs/appflow/deploy/builds)。自动化还可以配置为使用不同的环境和原生配置，为开发、预发布、测试和生产构建不同版本的应用。

更多信息请访问 Appflow 文档中的[创建自动化](https://ionic.io/docs/appflow/quickstart/automation)部分。在那里你会看到创建单个自动化的详细信息。不过，你可以为不同的分支或工作流创建多个自动化，并根据需求进行自定义。需要注意的是，创建自动化的功能仅适用于我们的[基础套餐](https://ionic.io/pricing)及以上的用户。

## 创建环境

[打包构建](https://ionic.io/docs/appflow/package/builds)和[部署构建](https://ionic.io/docs/appflow/deploy/builds)可以通过[环境](https://ionic.io/docs/appflow/automation/environments)进一步自定义。这个强大功能允许你根据构建时传入的环境变量创建不同的配置。结合[自动化](https://ionic.io/docs/appflow/automation/intro)功能，开发团队可以轻松配置开发、预发布和生产构建配置，让他们能够遵循 DevOps 最佳实践，比以前更快地发布质量更高的更新。

创建环境的功能适用于我们的[基础套餐](https://ionic.io/pricing)及以上的用户。更多信息可以在 Appflow 文档中的[创建环境](https://ionic.io/docs/appflow/quickstart/environment)部分找到。

## 创建原生配置

[原生配置](https://ionic.io/docs/appflow/package/native-configs)让你可以轻松修改不同环境（开发、生产、预发布等）之间可能变化的常见配置值，无需使用额外逻辑或手动提交到版本控制。原生配置可以附加到任何[打包构建](https://ionic.io/docs/appflow/package/intro)或[自动化](https://ionic.io/docs/appflow/automation/intro)流程上。

原生配置可用于：

- 覆盖 `config.xml` 中的唯一包标识符或 [id 属性](https://cordova.apache.org/docs/en/latest/config_ref/#widget)
- 覆盖设备主屏幕上显示的 App 名称
- 覆盖 [Appflow SDK（Deploy 插件）变量和偏好设置](https://ionic.io/docs/appflow/deploy/api#plugin-variables)

要使用创建原生配置的功能，你需要升级到我们的[基础套餐](https://ionic.io/pricing)及以上。该功能的更多细节可以在 Appflow 文档中的[创建原生配置](https://ionic.io/docs/appflow/quickstart/native-config)部分找到。

## 下一步？

恭喜！你开发了一个完整的跨平台照片库应用，可以在网页、iOS 和 Android 上运行。不仅如此，你还构建了应用并将其部署到了用户的设备上！

从这里开始有很多方向可以探索。尝试在应用中添加另一个 [Ionic UI 组件](../../components.md)，或者更多[原生功能](https://capacitorjs.com/docs/apis)。你的想象力是唯一的限制。添加新功能后，再次通过 Appflow 运行构建和部署流程，将其发布给用户。

愉快的应用构建！💙