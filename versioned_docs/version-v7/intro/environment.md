---
title: 环境设置
---

<head>
  <title>环境设置 | Ionic 应用设置的 Node 与 NPM 环境</title>
  <meta
    name="description"
    content="要开始使用 Ionic Framework，唯一的要求是 Node 和 npm 环境。了解 Ionic 应用需要哪些环境设置。"
  />
</head>

要开始使用 Ionic Framework，唯一的要求是 [Node 和 npm](#node-与-npm) 环境。

当然，还需要一个代码编辑器。推荐使用 [Visual Studio Code](https://code.visualstudio.com/)。Visual Studio Code 是 Microsoft 制作的一款免费、功能齐全的文本编辑器。

## 终端

:::note
Ionic 开发的许多方面都需要熟悉命令行。如果您是命令行新手，请参阅[这篇博客文章](https://ionicframework.com/blog/new-to-the-command-line/)进行快速入门。
:::

一般来说，我们推荐使用内置终端。许多第三方终端可以与 Ionic 很好地配合使用，但可能不受官方支持。

- 对于 Windows，支持**命令提示符**和 **PowerShell**。<a href="https://docs.microsoft.com/en-us/windows/wsl/faq" target="_blank">WSL</a> 已知可与 Ionic 配合使用，但可能不受官方支持。
- 对于 macOS，支持内置的**终端**应用。

Git Bash（来自 <a href="https://git-scm.com" target="_blank">git-scm.com</a>）不支持 TTY 交互，因此 Ionic **不支持**。

## Node 与 npm

几乎所有现代 JavaScript 项目的工具都基于 [Node.js](../reference/glossary.md#node)。[下载页面](https://nodejs.org/en/download/)为所有平台提供了预构建的安装包。我们建议选择 LTS 版本以确保最佳兼容性。

Node 捆绑了 [npm](../reference/glossary.md#npm)，即 JavaScript 的包管理器。

要验证安装，请打开一个新的终端窗口并运行：

```shell
$ node --version
$ npm --version
```

:::note
在 macOS 上，使用 `npm` 安装全局包时经常出现权限错误。如果遇到 `EACCES` 错误，请参阅[解决权限错误](../developing/tips.md#解决权限错误)。
:::

## Git

虽然不是必需的，但强烈推荐使用版本控制系统 [Git](../reference/glossary.md#git)。

Git 通常与 Git 托管服务（如 [GitHub](https://github.com/)）一起使用，在这种情况下需要进行额外的设置。请按照 Git 托管服务文档中的教程来设置 Git：

- GitHub：[设置 Git](https://help.github.com/en/articles/set-up-git)
- GitLab：[安装 Git](https://docs.gitlab.com/ee/topics/git/how_to_install_git)
- Bitbucket：[安装 Git](https://www.atlassian.com/git/tutorials/install-git)

或者，按照[官方安装说明](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)进行操作。命令行工具可以从[下载页面](https://git-scm.com/downloads)下载。

要验证安装，请打开一个新的终端窗口并运行：

```shell
git --version
```

### Git GUI

Git 是一个命令行工具，但有许多 [GUI 客户端](https://git-scm.com/downloads/guis/)可用。推荐使用 [GitHub Desktop](https://desktop.github.com/)，它与 GitHub 配合良好。
