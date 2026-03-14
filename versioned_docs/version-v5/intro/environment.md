# 环境配置

要开始使用 Ionic Framework，唯一的要求是具备 [Node 和 npm](#node-npm) 环境。

当然，还需要一个代码编辑器。推荐使用 [Visual Studio Code](https://code.visualstudio.com)。Visual Studio Code 是微软推出的免费、功能全面的文本编辑器。

## 终端

:::note
Ionic 的很多开发工作都需要熟悉命令行。如果你是命令行新手，可以参考[这篇博文](https://ionicframework.com/blog/new-to-the-command-line/)快速入门。
:::

一般来说，我们推荐使用系统自带的终端。虽然许多第三方终端与 Ionic 兼容良好，但可能无法获得官方支持。

- 对于 Windows 系统，**命令提示符**和 **PowerShell** 是受支持的。<a href="https://docs.microsoft.com/en-us/windows/wsl/faq" target="_blank">WSL</a> 已知可以与 Ionic 配合工作，但可能不受官方支持。
- 对于 macOS 系统，内置的 **终端** 应用程序是受支持的。

Git Bash（来自 <a href="https://git-scm.com" target="_blank">git-scm.com</a>）不支持 TTY 交互功能，因此 **不受** Ionic 支持。

## Node 与 npm

几乎所有现代 JavaScript 项目的工具都基于 [Node.js](../reference/glossary.md#node)。[下载页面](https://nodejs.org/en/download/)提供了适用于所有平台的预构建安装包。我们建议选择 LTS 版本以确保最佳的兼容性。

Node 会捆绑安装 [npm](../reference/glossary.md#npm)，这是 JavaScript 的包管理器。

要验证安装是否成功，请打开一个新的终端窗口并运行：

```shell
$ node --version
$ npm --version
```

:::note
在 macOS 上使用 `npm` 安装全局包时，权限错误很常见。如果你遇到 `EACCES` 错误，请参考[解决权限错误](../developing/tips.md#resolving-permission-errors)。
:::

## Git

虽然不是必须的，但我们强烈推荐使用版本控制系统 [Git](../reference/glossary.md#git)。

Git 通常与 Git 托管服务（如 [GitHub](https://github.com/)）一起使用，此时需要进行额外的设置。请按照 Git 托管服务提供的教程来设置 Git：

- GitHub：[设置 Git](https://help.github.com/en/articles/set-up-git)
- GitLab：[安装 Git](https://docs.gitlab.com/ee/topics/git/how_to_install_git)
- Bitbucket：[安装 Git](https://www.atlassian.com/git/tutorials/install-git)

如果不使用托管服务，请按照[官方安装说明](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)操作。可以从[下载页面](https://git-scm.com/downloads)下载命令行工具。

要验证安装是否成功，请打开一个新的终端窗口并运行：

```shell
git --version
```

### Git 图形界面

Git 是一个命令行工具，但也有许多可用的[图形界面客户端](https://git-scm.com/downloads/guis/)。推荐使用 [GitHub Desktop](https://desktop.github.com/)，它与 GitHub 配合良好。