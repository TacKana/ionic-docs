---
sidebar_label: 分发
---

# 构建并部署你的应用

既然你已经构建了第一个应用，接下来肯定希望将其分发给用户使用。构建和部署应用程序的过程可能相当繁琐，这正是 [Appflow](https://ionic.io/docs/appflow/) 发挥作用的地方。Appflow 可以帮助你高效地生成网页版和原生版本构建、推送实时应用更新、将应用发布到应用商店，并实现整个流程的自动化。完整的快速入门指南可在 [这里](https://ionic.io/docs/appflow/quickstart) 找到。

下面我们来快速了解这些步骤。

## 连接你的代码仓库

Appflow 直接与 Git 版本控制系统集成，并使用你现有的代码库作为部署（Deploy）和打包（Package）构建的真实来源。首先，你需要将其与你的托管服务（如 GitHub 或 Bitbucket）集成，或者直接将代码推送到 Appflow。完成此步骤后，Appflow 将能够访问你的代码。

关于如何将代码仓库连接到 Appflow 的更多信息，请查看 Appflow 文档中的 [连接你的仓库](https://ionic.io/docs/appflow/quickstart/connect) 部分。

## 安装 Appflow SDK

Appflow SDK（也称为 Ionic Deploy 插件）将让你充分利用 Appflow 最强大的两个功能：向应用部署实时更新，并绕过应用商店进行分发。Ionic Appflow 的实时更新功能随 Appflow SDK 提供，能够检测并同步你在仪表板中指定渠道上推送的应用更新。

要将 Appflow SDK 插件添加到你的项目，可以按照 Appflow 仪表板中的安装说明操作，在 `Deploy > Destinations` 部分点击“安装说明”。或者，你也可以通过在应用的根目录中执行以下命令手动安装插件：

```shell
ionic deploy add \
    --app-id="YOUR_APP_ID" \
    --channel-name="YOUR_CHANNEL_NAME" \
    --update-method="background|auto|none"
```

关于安装 Appflow SDK 的先决条件和额外说明，请访问 Appflow 文档中的 [安装 Appflow SDK](https://ionic.io/docs/appflow/quickstart/installation) 部分。

## 推送提交

为了让 Appflow 访问你代码的最新更改，你需要通过所选的版本控制集成来推送一次提交。对于使用 GitHub 或 Bitbucket 的用户，操作如下：

```shell
git add . # 暂存所有更改
git commit -m "added appflow sdk" # 提交暂存的更改
git push origin main # 将 main 分支的更改推送到你的 Git 托管服务
```

推送完成后，你将在 Appflow 仪表板的 `Commits` 标签页中看到你的提交。更多信息，请查看 Appflow 文档中的 [推送提交](https://ionic.io/docs/appflow/quickstart/push) 部分。

## 部署实时更新

安装好 Appflow SDK 并将提交推送到仪表板后，你就可以向设备部署实时更新了。实时更新功能利用已安装的 Appflow SDK，使你的原生应用能够监听特定的部署渠道目标。当将实时更新分配给某个渠道目标时，该更新将部署到运行已配置监听该特定渠道目标的二进制文件的用户设备上。

要部署实时更新，需要先创建一个 Web 构建。这可以通过 `Commits` 标签页中的 `Start build` 图标完成，或者点击 `Build > Builds` 标签页右上角的 `New build` 按钮。选择要部署的正确提交后，选择 `Web` 目标平台和 `Latest` 构建堆栈。根据你的 Appflow 套餐，你还可以包含自定义环境（如果已配置）。最后，你可以启用 `Live Update` 并选择渠道，以便在构建成功完成后自动分配。

Web 构建完成后，你将获得额外的版本管理选项。完成此部分操作并获得成功的部署构建后，你可以通过点击构建详情页面中的 `Deploy live updates` 按钮，将其分配给你在安装 Appflow SDK 时配置的监听渠道。同样，你也可以点击 `Build > Builds` 标签页中构建上的 `Deploy live updates` 图标，然后从下拉菜单中选择渠道。

要接收此实时更新，你需要在设备或模拟器上运行应用。最快最简单的方法是通过以下命令：

```shell
ionic [cordova | cap] run [ios | android] [options]
```

假设应用已正确配置为你所部署的监听渠道，如果你在设置期间选择了自动更新方法，应用将在启动时立即更新。如果选择了后台更新方法，请确保应用在前台运行约 30 秒以确保更新下载完成。然后，关闭应用并重新打开，你将看到更新已生效！

要详细了解部署实时更新的步骤，以及诸如禁用开发环境部署等额外信息，请查看 Appflow 文档中的 [部署实时更新](https://ionic.io/docs/appflow/quickstart/deploy) 部分。

## 构建原生二进制文件

接下来是为你的应用构建和部署原生二进制文件。这可以通过 [Ionic Package](https://ionic.io/docs/appflow/package/intro) 服务完成。首先，你需要创建一个 [Package 构建](https://ionic.io/docs/appflow/package/builds)。这可以通过点击 `Commits` 标签页中的 `Start build` 图标完成，或者点击 `Build > Builds` 标签页右上角的 `New build` 按钮。然后，你需要选择正确的提交进行构建，并填写所有必需的字段以及任何你想指定的可选字段。填写完所有信息并开始构建后，你可以查看构建进度，并在遇到任何错误时检查日志。

如果 Package 构建成功，你将获得一个 iOS 二进制文件（`.ipa` 或 IPA）和/或一个 Android 二进制文件（`.apk` 或 APK）。随后，你可以通过点击构建详情页面右侧 `Artifacts` 部分中的文件名，或者点击 `Build > Builds` 标签页中构建上的 `Download IPA/APK` 图标来下载该文件，以便安装在设备上。

有关构建原生二进制文件的更多信息，请查看 Appflow 文档中的 [构建原生二进制文件](https://ionic.io/docs/appflow/quickstart/package) 部分。

## 创建自动化

[自动化](https://ionic.io/docs/appflow/automation/intro) 让你和你的团队能够充分利用 Appflow 的完整 CI/CD 能力。你可以创建自动化流程，在团队每次向指定分支提交新代码时触发 [Package 构建](https://ionic.io/docs/appflow/package/builds) 和 [Deploy 构建](https://ionic.io/docs/appflow/deploy/builds)。还可以配置自动化流程，使用不同的环境和原生配置来为开发、测试、QA 和生产环境构建不同版本的应用。

更多信息，请访问 Appflow 文档中的 [创建自动化](https://ionic.io/docs/appflow/quickstart/automation) 部分。在那里你将看到创建单个自动化流程的详细信息。但是，你可以为不同的分支或工作流创建多个自动化流程，并根据需要进行自定义。请注意，创建自动化功能适用于我们的 [基础套餐](https://ionic.io/pricing) 及以上用户。

## 创建环境

[Package 构建](https://ionic.io/docs/appflow/package/builds) 和 [Deploy 构建](https://ionic.io/docs/appflow/deploy/builds) 可以通过 [环境](https://ionic.io/docs/appflow/automation/environments) 进一步自定义。这个强大的功能允许你根据构建时传入的环境变量创建不同的配置。结合 [自动化](https://ionic.io/docs/appflow/automation/intro) 功能，开发团队可以轻松配置开发、测试和生产环境的构建配置，使他们能够遵循 DevOps 最佳实践，更快地发布更高质量的更新。

创建环境功能适用于我们的 [基础套餐](https://ionic.io/pricing) 及以上用户。更多相关信息，请查看 Appflow 文档中的 [创建环境](https://ionic.io/docs/appflow/quickstart/environment) 部分。

## 创建原生配置

[原生配置](https://ionic.io/docs/appflow/package/native-configs) 允许你轻松修改不同环境（开发、生产、测试等）之间可能变化的常见配置值，这样你就不需要使用额外的逻辑或手动将它们提交到版本控制。原生配置可以附加到任何 [Package 构建](https://ionic.io/docs/appflow/package/intro) 或 [自动化](https://ionic.io/docs/appflow/automation/intro) 流程中。

原生配置可用于：

- 覆盖 `config.xml` 中的唯一包标识符或 [id 属性](https://cordova.apache.org/docs/en/latest/config_ref/#widget)
- 覆盖应用名称（即设备主屏幕上显示的名称）
- 覆盖 [Appflow SDK (Deploy 插件) 变量和首选项](https://ionic.io/docs/appflow/deploy/api#plugin-variables)

要获得创建原生配置的权限，你需要订阅我们的 [基础套餐](https://ionic.io/pricing) 及以上。有关此功能的更多详细信息，请查看 Appflow 文档中的 [创建原生配置](https://ionic.io/docs/appflow/quickstart/native-config) 部分。

## 下一步该做什么？

恭喜！你已经开发了一个完整的跨平台照片库应用，可以在网页、iOS 和 Android 上运行。不仅如此，你还构建了应用并将其部署到了用户的设备上！

接下来有很多方向可以探索。尝试在应用中添加另一个 [Ionic UI 组件](https://ionicframework.com/docs/components)，或者更多的 [原生功能](https://capacitorjs.com/docs/apis)。天空才是极限。一旦你添加了新功能，再次通过 Appflow 运行构建和部署流程，将其发布给你的用户。

祝应用开发顺利！💙